import { AbstractStatefulRequestAction } from '../BaseRequestAction';
import { StateEnum } from '../StateEnum';
import { getInputsLists } from '../lists';
import { getInputMuteState } from '../states';

type Input = { inputName: string, inputKind: string, unversionedInputKind: string };

export class ToggleInputMuteAction extends AbstractStatefulRequestAction {
	constructor() {
		super('dev.theca11.multiobs.toggleinputmute', { titleParam: 'inputName', statusEvent: 'InputMuteStateChanged' });
	}

	getPayloadFromSettings(settings: any, desiredState?: number | undefined) {
		const { inputName } = settings;
		if (desiredState === 0 || desiredState === 1) {
			return {
				requestType: 'SetInputMute',
				requestData: {
					inputName: inputName,
					inputMuted: desiredState === 0 ? true : false,
				},
			};
		}
		else {
			return { requestType: 'ToggleInputMute', requestData: { inputName: inputName } };
		}
	}

	override async onPropertyInspectorReady({ context, action }: { context: string; action: string; }): Promise<void> {
		const inputsLists = await getInputsLists() as Input[][];
		const payload = {
			event: 'InputListLoaded',
			inputsLists: inputsLists.map((list) =>
				list.filter((i) => ['dshow_input', 'wasapi_input_capture', 'wasapi_output_capture'].includes(i.unversionedInputKind)),
			),
		};
		$SD.sendToPropertyInspector(context, payload, action);
	}

	async fetchState(socketSettings: any, socketIdx: number): Promise<StateEnum.Active | StateEnum.Inactive> {
		const muteState = await getInputMuteState(socketIdx, socketSettings.inputName);
		return !muteState ? StateEnum.Active : StateEnum.Inactive;
	}

	async shouldUpdateState(evtData: any, socketSettings: any): Promise<boolean> {
		const { inputName } = socketSettings;
		if (inputName && inputName === evtData.inputName) return true;
		return false;
	}

	async getStateFromEvent(evtData: any): Promise<StateEnum> {
		return !evtData.inputMuted ? StateEnum.Active : StateEnum.Inactive;
	}
}
