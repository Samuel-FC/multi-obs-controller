"use strict";(self.webpackChunkmulti_obs_controller_docs=self.webpackChunkmulti_obs_controller_docs||[]).push([[4],{9733:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>C,frontMatter:()=>o,metadata:()=>g,toc:()=>r});var A=n(7462),i=(n(7294),n(3905));const o={pagination_prev:null,pagination_next:null},a="Configuration",g={unversionedId:"configuration",id:"configuration",title:"Configuration",description:"General Configuration",source:"@site/docs/configuration.md",sourceDirName:".",slug:"/configuration",permalink:"/multi-obs-controller/docs/configuration",draft:!1,tags:[],version:"current",frontMatter:{pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},l={},r=[{value:"General Configuration",id:"general-configuration",level:2},{value:"OBS Studio instances configuration",id:"obs-studio-instances-configuration",level:3},{value:"Additional general plugin settings",id:"additional-general-plugin-settings",level:3},{value:"Action configuration",id:"action-configuration",level:2},{value:"Common settings",id:"common-settings",level:3},{value:"Action-specific settings",id:"action-specific-settings",level:3}],s={toc:r},c="wrapper";function C(e){let{components:t,...o}=e;return(0,i.kt)(c,(0,A.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"configuration"},"Configuration"),(0,i.kt)("h2",{id:"general-configuration"},"General Configuration"),(0,i.kt)("p",null,"The plugin has some general configuration settings that are applied globally to all actions (you only need to set them once). To open the general configuration window, add any of the plugin actions to your Stream Deck, and click the link at the end of the settings section."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"General Configuration link",src:n(5547).Z,width:"542",height:"224"})),(0,i.kt)("h3",{id:"obs-studio-instances-configuration"},"OBS Studio instances configuration"),(0,i.kt)("p",null,"The plugin communicates with OBS instances via OBS Websockets. To configure the Websockets Server for each instance of OBS Studio:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open OBS Studio and go to ",(0,i.kt)("inlineCode",{parentName:"li"},"Tools > Websocket Server Settings")),(0,i.kt)("li",{parentName:"ol"},"Check ",(0,i.kt)("inlineCode",{parentName:"li"},"Enable Websocket Server")),(0,i.kt)("li",{parentName:"ol"},"Configure the ",(0,i.kt)("inlineCode",{parentName:"li"},"Server Port")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"Server Password")),(0,i.kt)("li",{parentName:"ol"},"Apply the settings. You can click on ",(0,i.kt)("inlineCode",{parentName:"li"},"Show Connect Info")," for a summary")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note #1: if your OBS Studio instance is running in the same computer as your Stream Deck, you can use the localhost IP ",(0,i.kt)("inlineCode",{parentName:"p"},"127.0.0.1")," as the Server IP instead of your LAN IP (",(0,i.kt)("inlineCode",{parentName:"p"},"192.168.x.x"),")")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note #2: if your OBS Studio instance is in a remote computer, it's recommended to configure your router to assign that computer a static LAN IP so you don't need to reconfigure the plugin settings every time the IP changes.")),(0,i.kt)("p",null,"Once the Websocket Servers are ready, add the settings to the plugin general configuration form. The plugin will connect automatically."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Websockets Configuration",src:n(4743).Z,width:"1316",height:"366"})),(0,i.kt)("h3",{id:"additional-general-plugin-settings"},"Additional general plugin settings"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Default target"),": the OBS Instance(s) that will be by default the target of new actions."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Long press length"),": the default length, in milliseconds, of long key presses. You can override this value at the action level."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Target position"),": the position of the ",(0,i.kt)("inlineCode",{parentName:"li"},"1"),"/",(0,i.kt)("inlineCode",{parentName:"li"},"2")," target indicators shown in keys."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Don't show visual OK/alert feedback after pressing a key"),": hide the checkmark/warning triangle overlays that are shown after pressing a key.")),(0,i.kt)("h2",{id:"action-configuration"},"Action configuration"),(0,i.kt)("h3",{id:"common-settings"},"Common settings"),(0,i.kt)("p",null,"Each action defines which OBS instance(s) to target. You can send the action to a single specific OBS instance, or send it to all configured OBS instances. If you choose the latter, you can also decide whether to send the same action-specific settings to every instance or to send different settings to each instance."),(0,i.kt)("p",null,"For example, you could configure a ",(0,i.kt)("inlineCode",{parentName:"p"},"Scene")," action to do any of the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Set scene A only in OBS#1")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(502).Z,width:"301",height:"85"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Set scene A only in OBS#2")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(9903).Z,width:"302",height:"85"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Set scene A in both OBS#1 and OBS#2")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(2642).Z,width:"304",height:"116"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Set scene A in OBS#1 while setting scene B in OBS#2")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(5252).Z,width:"621",height:"153"})),(0,i.kt)("h3",{id:"action-specific-settings"},"Action-specific settings"),(0,i.kt)("p",null,"Depending on the action, specific settings are required. For example, you need to provide the scene name to change the current scene. Check the actions documentation for more information."))}C.isMDXComponent=!0},5547:(e,t,n)=>{n.d(t,{Z:()=>A});const A=n.p+"assets/images/general-config-link-7388d8380d2b82f7726cdae6bf6c6773.png"},502:(e,t,n)=>{n.d(t,{Z:()=>A});const A="data:image/png;base64,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"},9903:(e,t,n)=>{n.d(t,{Z:()=>A});const A="data:image/png;base64,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"},5252:(e,t,n)=>{n.d(t,{Z:()=>A});const A="data:image/png;base64,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"},2642:(e,t,n)=>{n.d(t,{Z:()=>A});const A="data:image/png;base64,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"},4743:(e,t,n)=>{n.d(t,{Z:()=>A});const A=n.p+"assets/images/websockets-config-5389c3058e484a5a12c9dfabfb942234.png"}}]);