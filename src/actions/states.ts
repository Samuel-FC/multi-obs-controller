import { EventEmitter } from 'eventemitter3';
import { OBSResponseTypes } from 'obs-websocket-js';
import { sockets } from '../plugin/sockets';

export const evtEmitter = new EventEmitter();

function getDefaultArray() {
	return new Array(sockets.length).fill(null);
}

// General states
const streamStates: (boolean | null)[] = getDefaultArray();
const recordStates: (boolean | null)[] = getDefaultArray();
const currentProgramScenes: (string | null)[] = getDefaultArray();
const currentSceneCollections: (string | null)[] = getDefaultArray();


/**
 * Fetch & update general states of a particular OBS instance.
 * General states include stream state, record state and current scene
 * @param socketIdx Index identifying the OBS instance to query
 */
async function fetchGeneralStates(socketIdx: number) {
	const results = await sockets[socketIdx].callBatch([
		{ requestType: 'GetStreamStatus' },
		{ requestType: 'GetRecordStatus' },
		{ requestType: 'GetCurrentProgramScene' },
		{ requestType: 'GetSceneCollectionList' },
	]);
	const responses = results.map(result => result.requestStatus.result === true ? result.responseData : {});
	streamStates[socketIdx] = (responses[0] as OBSResponseTypes['GetStreamStatus'])?.outputActive ?? null;
	recordStates[socketIdx] = (responses[1] as OBSResponseTypes['GetRecordStatus'])?.outputActive ?? null;
	currentProgramScenes[socketIdx] = (responses[2] as OBSResponseTypes['GetCurrentProgramScene'])?.currentProgramSceneName ?? null;
	currentSceneCollections[socketIdx] = (responses[3] as OBSResponseTypes['GetSceneCollectionList'])?.currentSceneCollectionName ?? null;
}

// Attach event listeners
sockets.forEach((socket, i) => {
	socket.on('Identified', async () => {
		await fetchGeneralStates(i);
		evtEmitter.emit('SocketInitialized', i);
	});
	// @ts-expect-error Disconnected event is custom, not part of the OBS WS protocol
	socket.on('Disconnected', () => {
		streamStates[i] = null;
		recordStates[i] = null;
		currentProgramScenes[i] = null;
		currentSceneCollections[i] = null;
		evtEmitter.emit('SocketDisconnected', i);
	});
	socket.on('StreamStateChanged', ({ outputActive }) => {
		streamStates[i] = outputActive;
		evtEmitter.emit('StreamStateChanged', i, { outputActive });
	});
	socket.on('RecordStateChanged', ({ outputActive }) => {
		recordStates[i] = outputActive;
		evtEmitter.emit('RecordStateChanged', i, { outputActive });
	});
	socket.on('CurrentProgramSceneChanged', ({ sceneName }) => {
		currentProgramScenes[i] = sceneName;
		evtEmitter.emit('CurrentProgramSceneChanged', i, { sceneName });
	});
	socket.on('CurrentSceneCollectionChanged', ({ sceneCollectionName }) => {
		currentSceneCollections[i] = sceneCollectionName;
		evtEmitter.emit('CurrentSceneCollectionChanged', i, { sceneCollectionName });
	});
	socket.on('SceneItemEnableStateChanged', ({ sceneName, sceneItemId, sceneItemEnabled }) => {
		evtEmitter.emit('SceneItemEnableStateChanged', i, { sceneName, sceneItemId, sceneItemEnabled });
	});
	socket.on('InputMuteStateChanged', ({ inputName, inputMuted }) => {
		evtEmitter.emit('InputMuteStateChanged', i, { inputName, inputMuted });
	});
});


// Getters
export function getStreamState(socketIdx: number) { return streamStates[socketIdx]; }
export function getRecordState(socketIdx: number) { return recordStates[socketIdx]; }
export function getCurrentScene(socketIdx: number) { return currentProgramScenes[socketIdx]; }
export function getCurrentSceneCollection(socketIdx: number) { return currentSceneCollections[socketIdx]; }

export async function getInputMuteState(socketIdx: number, inputName: string) {
	if (!inputName) return Promise.reject();
	const { inputMuted } = await sockets[socketIdx].call('GetInputMute', { inputName });
	return inputMuted;
}

export async function getSceneItemEnableState(socketIdx: number, sceneName: string, sourceName: string) {
	if (!sceneName || !sourceName) return Promise.reject();
	const batchResults = await sockets[socketIdx].callBatch([
		{
			requestType: 'GetSceneItemId',
			requestData: { sceneName, sourceName },
			// @ts-expect-error ouputVariables is not typed in obswebsocketjs (https://github.com/obs-websocket-community-projects/obs-websocket-js/issues/313)
			outputVariables: { sceneItemIdVariable: 'sceneItemId' },
		},
		{
			requestType: 'GetSceneItemEnabled',
			// @ts-expect-error ouputVariables is not typed in obswebsocketjs (https://github.com/obs-websocket-community-projects/obs-websocket-js/issues/313)
			requestData: { sceneName },
			inputVariables: { sceneItemId: 'sceneItemIdVariable' },
		},
	]);
	return (batchResults.at(-1)?.responseData as OBSResponseTypes['GetSceneItemEnabled']).sceneItemEnabled ?? Promise.reject();
}

export async function getSceneItemId(socketIdx: number, sceneName: string, sourceName: string) {
	if (!sceneName || !sourceName) return Promise.reject();
	const { sceneItemId } = await sockets[socketIdx].call('GetSceneItemId', { sceneName, sourceName }).catch(() => { return {}; }) as OBSResponseTypes['GetSceneItemId'];
	return sceneItemId;
}

// ---

// --- General stats, stream stats and record stats ---
export const generalStats: (OBSResponseTypes['GetStats'] | null)[] = getDefaultArray();
export const streamStats: (OBSResponseTypes['GetStreamStatus'] | null)[] = getDefaultArray();
export const recordStats: (OBSResponseTypes['GetRecordStatus'] | null)[] = getDefaultArray();

async function fetchStats() {
	const batchResults = await Promise.allSettled(sockets.map(s =>
		s.isConnected
			? s.callBatch([
				{ requestType: 'GetStats' },
				{ requestType: 'GetStreamStatus' },
				{ requestType: 'GetRecordStatus' },
			])
			: Promise.reject(),
	));
	const responsesData = batchResults.map((res) => {
		if (res.status === 'fulfilled') {
			return res.value.map((r) => r.requestStatus.result === true ? r.responseData : null);
		}
		return null;
	});

	responsesData.map((responses, socketIdx) => {
		if (!responses) {
			generalStats[socketIdx] = null;
			streamStats[socketIdx] = null;
			recordStats[socketIdx] = null;
		}
		else {
			responses.map((response, i) => {
				if (i === 0) generalStats[socketIdx] = (response as OBSResponseTypes['GetStats']) ?? null;
				else if (i === 1) streamStats[socketIdx] = (response as OBSResponseTypes['GetStreamStatus']) ?? null;
				else if (i === 2) recordStats[socketIdx] = (response as OBSResponseTypes['GetRecordStatus']) ?? null;
			});
		}
	});
}

// Fetch stats every second
setInterval(() => {
	fetchStats();
	console.log(recordStats[0]?.outputTimecode);
}, 1000);

// ---