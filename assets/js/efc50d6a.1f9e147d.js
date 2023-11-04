"use strict";(self.webpackChunkmulti_obs_controller_docs=self.webpackChunkmulti_obs_controller_docs||[]).push([[769],{503:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=a(7462),s=(a(7294),a(3905)),r=a(3135);const o={hide_title:!0,hide_table_of_contents:!0,pagination_prev:null,pagination_next:null,title:"Raw WS Batch Request"},i=void 0,l={unversionedId:"actions/raw-ws-batch-request",id:"actions/raw-ws-batch-request",title:"Raw WS Batch Request",description:"<ActionPage",source:"@site/docs/actions/raw-ws-batch-request.mdx",sourceDirName:"actions",slug:"/actions/raw-ws-batch-request",permalink:"/multi-obs-controller/docs/actions/raw-ws-batch-request",draft:!1,tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,pagination_prev:null,pagination_next:null,title:"Raw WS Batch Request"},sidebar:"docsSidebar"},c={},u=[{value:"Configuring a batch request",id:"configuring-a-batch-request",level:3},{value:"Examples",id:"examples",level:4}],p={toc:u},d="wrapper";function h(e){let{components:t,...a}=e;return(0,s.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(r.Z,{name:o.title,summary:"Send a raw websocket batch request compliant with the OBS Websockets protocol",description:"Send a raw websocket batch request compliant with the OBS Websockets protocol",settings:{"Execution Type":"Defines how requests are processed, typically SerialRealtime","Halt on failure":"Whether to halt processing requests after one fails","Requests Array":"JSON with a properly formatted array of request objects, as expected by the OBS Websockets protocol"},stateLabels:{on:"Default"},mdxType:"ActionPage"}),(0,s.kt)("h3",{id:"configuring-a-batch-request"},"Configuring a batch request"),(0,s.kt)("p",null,"This is an advanced action that allows you to send a raw websocket batch request as defined by the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/obsproject/obs-websocket/blob/master/docs/generated/protocol.md#requests"},"OBS Websockets protocol"),".\nA batch request is a group of requests that are sent together to OBS, and processed there normally in a serial way."),(0,s.kt)("p",null,"The Requests Array field requires valid JSON with a properly formatted array of request objects, as expected by the OBS Websockets protocol"),(0,s.kt)("h4",{id:"examples"},"Examples"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Set the current scene to ",(0,s.kt)("inlineCode",{parentName:"li"},"Funny Face"),", wait 15s and set the scene to ",(0,s.kt)("inlineCode",{parentName:"li"},"Chatting"),":")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'[   \n  {\n    "requestType": "SetCurrentProgramScene",\n    "requestData": {"sceneName": "Funny Face"}\n  },\n  {\n    "requestType": "Sleep",\n    "requestData": {"sleepMillis": 15000}\n  },\n  {\n    "requestType": "SetCurrentProgramScene",\n    "requestData": {"sceneName": "Funny Face"}\n  }\n]\n')),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Set ",(0,s.kt)("inlineCode",{parentName:"li"},"Fade")," as the current transition, wait 100ms and trigger a Studio Mode transition:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'[   \n  {\n    "requestType": "SetCurrentSceneTransition",\n    "requestData": {"transitionName": "Fade"}\n  },\n  {\n    "requestType": "Sleep",\n    "requestData": {"sleepMillis": 100}\n  },\n  {\n    "requestType": "TriggerStudioModeTransition"\n  }\n]\n')))}h.isMDXComponent=!0}}]);