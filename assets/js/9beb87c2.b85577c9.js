"use strict";(self.webpackChunkmulti_obs_controller_docs=self.webpackChunkmulti_obs_controller_docs||[]).push([[80],{7122:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>h,frontMatter:()=>u,metadata:()=>c,toc:()=>m});var n=a(7462),l=(a(7294),a(3905));const i=[{value:"0.3.0 - 2023-11-01",id:"030---2023-11-01",level:2},{value:"Added",id:"added",level:3},{value:"Changed",id:"changed",level:3},{value:"Fixed",id:"fixed",level:3},{value:"0.2.0 - 2023-09-02",id:"020---2023-09-02",level:2},{value:"Added",id:"added-1",level:3},{value:"Changed",id:"changed-1",level:3},{value:"Fixed",id:"fixed-1",level:3},{value:"Removed",id:"removed",level:3},{value:"0.1.0 - 2023-08-15",id:"010---2023-08-15",level:2}],o={toc:i},r="wrapper";function s(e){let{components:t,...a}=e;return(0,l.kt)(r,(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"changelog"},"CHANGELOG"),(0,l.kt)("p",null,"This project adheres to ",(0,l.kt)("a",{parentName:"p",href:"https://semver.org/spec/v2.0.0.html"},"Semantic Versioning"),"."),(0,l.kt)("h2",{id:"030---2023-11-01"},"[0.3.0]"," - 2023-11-01"),(0,l.kt)("h3",{id:"added"},"Added"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"New actions:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Record Pause"),": pause currently active recording"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Virtual Camera"),": toggle OBS virtual camera output"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Profile"),": switch to a specific profile"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Studio Mode"),": toggle Studio Mode"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Studio Mode Transition"),": trigger a transition between scenes while in Studio Mode"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Screenshot"),": take a screenshot of the current OBS output or a specific scene/source"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Refresh Browser Source"),": refresh the cache of a browser source page"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Stats"),": display OBS general/stream/record stats (CPU usage, memory usage, dropped frames, etc.)"))),(0,l.kt)("li",{parentName:"ul"},"Option to show elapsed time in Stream/Record actions"),(0,l.kt)("li",{parentName:"ul"},"Global option to choose position of target indicators shown in keys (top/middle/bottom)")),(0,l.kt)("h3",{id:"changed"},"Changed"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Some actions now show a transitional state using a different color (eg. stream/record starting/ending, scene collection changing)")),(0,l.kt)("h3",{id:"fixed"},"Fixed"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Automatic title is now set properly when different for each OBS instance"),(0,l.kt)("li",{parentName:"ul"},"Prevent flickering/partial updates of key images"),(0,l.kt)("li",{parentName:"ul"},"Key images updates improved to perform faster and in a more synchronous way"),(0,l.kt)("li",{parentName:"ul"},"Improved responsiveness of Toggle Source Visibility actions"),(0,l.kt)("li",{parentName:"ul"},"Source visibility state now correctly updates after switching to a different scene collection"),(0,l.kt)("li",{parentName:"ul"},"Other handful of improvements and optimizations")),(0,l.kt)("h2",{id:"020---2023-09-02"},"[0.2.0]"," - 2023-09-02"),(0,l.kt)("h3",{id:"added-1"},"Added"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Long key press support"),(0,l.kt)("li",{parentName:"ul"},"Default target global option"),(0,l.kt)("li",{parentName:"ul"},"Custom key images support, by properly setting SD action states"),(0,l.kt)("li",{parentName:"ul"},"Allow hiding target number indicators shown in keys")),(0,l.kt)("h3",{id:"changed-1"},"Changed"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Tweaked actions images colors"),(0,l.kt)("li",{parentName:"ul"},"Changed audio mute/unmute action icon")),(0,l.kt)("h3",{id:"fixed-1"},"Fixed"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Make ",(0,l.kt)("inlineCode",{parentName:"li"},"Scene Collection")," action update with events"),(0,l.kt)("li",{parentName:"ul"},"Show OK/alert feedback with a slight delay to avoid overrides from async events"),(0,l.kt)("li",{parentName:"ul"},"Prevent saving empty setting options"),(0,l.kt)("li",{parentName:"ul"},"Prevent some unneeded key images updates on events")),(0,l.kt)("h3",{id:"removed"},"Removed"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Plugin connection status action (",(0,l.kt)("inlineCode",{parentName:"li"},"OBS WS Servers Status"),")")),(0,l.kt)("h2",{id:"010---2023-08-15"},"[0.1.0]"," - 2023-08-15"),(0,l.kt)("p",null,"First release of Multi OBS Controller StreamDeck plugin. This plugin allows easy remote control of multiple OBS Studio instances in a synchronous way."),(0,l.kt)("p",null,"You can configure each action to be sent to a specific OBS instance, or to all of them at the same time, with shared or different settings. Currently supports up to 2 OBS Studio instances."),(0,l.kt)("p",null,"Multi OBS Controller plugin communicates with OBS Studio via OBS Websockets. Requires OBS Studio >= 29.0 (OBS Websockets v5)."),(0,l.kt)("p",null,"Initial set of actions:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Toggle stream"),(0,l.kt)("li",{parentName:"ul"},"Toggle record"),(0,l.kt)("li",{parentName:"ul"},"Set current scene"),(0,l.kt)("li",{parentName:"ul"},"Toggle source visibility"),(0,l.kt)("li",{parentName:"ul"},"Set scene collection"),(0,l.kt)("li",{parentName:"ul"},"Toggle audio mute"),(0,l.kt)("li",{parentName:"ul"},"Trigger hotkey by sequence"),(0,l.kt)("li",{parentName:"ul"},"Refresh capture device"),(0,l.kt)("li",{parentName:"ul"},"Advanced raw OBS WS request"),(0,l.kt)("li",{parentName:"ul"},"Advanced raw OBS WS batch request"),(0,l.kt)("li",{parentName:"ul"},"Plugin connection status to OBS")),(0,l.kt)("p",null,"The advanced actions allow to send any request supported by the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/obsproject/obs-websocket/blob/master/docs/generated/protocol.md#requests"},"OBS Websockets protocol"),"."),(0,l.kt)("p",null,"All actions except the last one are supported in multi-actions. Toggle actions have individual on/off choices inside multi-actions."))}s.isMDXComponent=!0;const u={title:"Changelog",hide_title:!0,toc_max_heading_level:2,pagination_prev:null,pagination_next:null},d=void 0,c={unversionedId:"changelog",id:"changelog",title:"Changelog",description:"",source:"@site/docs/changelog.md",sourceDirName:".",slug:"/changelog",permalink:"/multi-obs-controller/docs/changelog",draft:!1,tags:[],version:"current",frontMatter:{title:"Changelog",hide_title:!0,toc_max_heading_level:2,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},p={},m=i,g={toc:m},k="wrapper";function h(e){let{components:t,...a}=e;return(0,l.kt)(k,(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(s,{mdxType:"Changelog"}))}h.isMDXComponent=!0}}]);