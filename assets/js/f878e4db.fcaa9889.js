"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[705],{8520:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>a,frontMatter:()=>i,metadata:()=>t,toc:()=>o});var s=r(4848),c=r(8453);const i={sidebar_position:3},d="Events",t={id:"api/events",title:"Events",description:"NPM | GitHub",source:"@site/docs/api/events.mdx",sourceDirName:"api",slug:"/api/events",permalink:"/docs/api/events",draft:!1,unlisted:!1,editUrl:"https://github.com/civet-org/civet-org.github.io/docs/api/events.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Core",permalink:"/docs/api/core"}},l={},o=[{value:"<code>&lt;ConfigProvider&gt;</code>",id:"configprovider",level:2},{value:"Props",id:"props",level:3},{value:"Context",id:"context",level:3},{value:"Related",id:"related",level:3},{value:"<code>&lt;ConfigConsumer&gt;</code>",id:"configconsumer",level:2},{value:"<code>useConfigContext</code>",id:"useconfigcontext",level:2},{value:"<code>&lt;EventHandler&gt;</code>",id:"eventhandler",level:2},{value:"Props",id:"props-1",level:3},{value:"<code>composeHandlers</code>",id:"composehandlers",level:2},{value:"Function arguments",id:"function-arguments",level:3},{value:"Return type",id:"return-type",level:3},{value:"<code>EventReceiver</code>",id:"eventreceiver",level:2},{value:"Class members",id:"class-members",level:3},{value:"Abstract members",id:"abstract-members",level:3},{value:"Caveats",id:"caveats",level:3},{value:"Abstract functions",id:"abstract-functions",level:4},{value:"<code>isEventReceiver</code>",id:"iseventreceiver",level:2},{value:"Function arguments",id:"function-arguments-1",level:3},{value:"Return type",id:"return-type-1",level:3},{value:"<code>eventReceiverPropType</code>",id:"eventreceiverproptype",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"events",children:"Events"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://npmjs.com/package/@civet/events",children:"NPM"})," | ",(0,s.jsx)(n.a,{href:"https://github.com/civet-org/events",children:"GitHub"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm install @civet/events\n"})}),"\n",(0,s.jsx)(n.p,{children:"The events module provides advanced event handling functionality."}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.a,{href:"core#datastore",children:(0,s.jsx)(n.code,{children:"DataStore"})})," already has basic support for handling events. However, it is limited to updating all subscribers of a specific resource.\nIf you need more advanced event handling, this is the place to go."]}),"\n",(0,s.jsx)(n.h2,{id:"configprovider",children:(0,s.jsx)(n.code,{children:"<ConfigProvider>"})}),"\n",(0,s.jsx)(n.p,{children:"Provides general configuration for event components to its descendants using React's context API."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"<ConfigProvider eventReceiver={receiver}>...</ConfigProvider>\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'import { ConfigProvider } from "@civet/events";\n'})}),"\n",(0,s.jsx)(n.h3,{id:"props",children:"Props"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"eventReceiver"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"#eventreceiver",children:(0,s.jsx)(n.code,{children:"EventReceiver"})})}),(0,s.jsx)(n.td,{})]})})]}),"\n",(0,s.jsx)(n.h3,{id:"context",children:"Context"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"eventReceiver"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"#eventreceiver",children:(0,s.jsx)(n.code,{children:"EventReceiver"})})}),(0,s.jsx)(n.td,{})]})})]}),"\n",(0,s.jsx)(n.h3,{id:"related",children:"Related"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"#configconsumer",children:(0,s.jsx)(n.code,{children:"<ConfigConsumer>"})}),", ",(0,s.jsx)(n.a,{href:"#eventhandler",children:(0,s.jsx)(n.code,{children:"<EventHandler>"})}),", ",(0,s.jsx)(n.a,{href:"#useconfigcontext",children:(0,s.jsx)(n.code,{children:"useConfigContext"})})]}),"\n",(0,s.jsx)(n.h2,{id:"configconsumer",children:(0,s.jsx)(n.code,{children:"<ConfigConsumer>"})}),"\n",(0,s.jsxs)(n.p,{children:["Context consumer for ",(0,s.jsx)(n.a,{href:"#configprovider",children:(0,s.jsx)(n.code,{children:"<ConfigProvider>"})}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"<ConfigConsumer>\n  {(context) => ...}\n</ConfigConsumer>\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'import { ConfigConsumer } from "@civet/events";\n'})}),"\n",(0,s.jsx)(n.h2,{id:"useconfigcontext",children:(0,s.jsx)(n.code,{children:"useConfigContext"})}),"\n",(0,s.jsxs)(n.p,{children:["Context hook for ",(0,s.jsx)(n.a,{href:"#configprovider",children:(0,s.jsx)(n.code,{children:"<ConfigProvider>"})}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const configContext = useConfigContext();\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'import { useConfigContext } from "@civet/events";\n'})}),"\n",(0,s.jsx)(n.h2,{id:"eventhandler",children:(0,s.jsx)(n.code,{children:"<EventHandler>"})}),"\n",(0,s.jsxs)(n.p,{children:["Subscribes to an ",(0,s.jsx)(n.a,{href:"#eventreceiver",children:(0,s.jsx)(n.code,{children:"EventReceiver"})})," to update a ",(0,s.jsx)(n.a,{href:"core#resource",children:(0,s.jsx)(n.code,{children:"<Resource>"})})," when events occur."]}),"\n",(0,s.jsxs)(n.p,{children:["Necessary configuration that is not directly specified is taken from the nearest ",(0,s.jsx)(n.a,{href:"#configprovider",children:(0,s.jsx)(n.code,{children:"<ConfigProvider>"})})," and ",(0,s.jsx)(n.a,{href:"core#resource",children:(0,s.jsx)(n.code,{children:"<Resource>"})}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["You can specify which events should lead to an update by either passing ",(0,s.jsx)(n.code,{children:"options"})," to the ",(0,s.jsx)(n.a,{href:"#eventreceiver",children:(0,s.jsx)(n.code,{children:"EventReceiver"})})," or using ",(0,s.jsx)(n.code,{children:"onEvent"}),".\n",(0,s.jsx)(n.code,{children:"onEvent"})," can also be used to directly access events allowing you to add custom event logic to your components."]}),"\n",(0,s.jsxs)(n.p,{children:["Additionally, you can use ",(0,s.jsx)(n.code,{children:"onNotify"})," which is called when the ",(0,s.jsx)(n.a,{href:"core#resource",children:(0,s.jsx)(n.code,{children:"<Resource>"})})," has been asked to update and allows you to get all events that have lead to the update at once as well as the request and revision for the update."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'<EventHandler\n  options={{ some: "options" }}\n  onEvent={(e) => console.log("Received", e)}\n>\n  ...\n</Resource>\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'import { EventHandler } from "@civet/events";\n'})}),"\n",(0,s.jsx)(n.h3,{id:"props-1",children:"Props"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"eventReceiver"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"#eventreceiver",children:(0,s.jsx)(n.code,{children:"EventReceiver"})})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.a,{href:"#eventreceiver",children:(0,s.jsx)(n.code,{children:"EventReceiver"})})," to be used"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"resource"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"object"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.a,{href:"core#resourceprovider",children:"Resource context"})," to be used"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"options"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"object"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.a,{href:"#eventreceiver",children:(0,s.jsx)(n.code,{children:"EventReceiver"})})," options"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"onEvent"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"(event: any) => boolean"})}),(0,s.jsxs)(n.td,{children:["Callback to filter events and handle your own event logic - if ",(0,s.jsx)(n.code,{children:"true"})," is returned, the event is considered as handled and the resource is not update"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"onNotify"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"({ request: string, revision: string }, events: any[]) => void"})}),(0,s.jsxs)(n.td,{children:["Informs when the ",(0,s.jsx)(n.a,{href:"core#resource",children:(0,s.jsx)(n.code,{children:"<Resource>"})})," has been requested to update"]})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"composehandlers",children:(0,s.jsx)(n.code,{children:"composeHandlers"})}),"\n",(0,s.jsxs)(n.p,{children:["Utility for composing multiple event handlers.\nInvokes each handler from left to right, but stops immediately when a handler returns ",(0,s.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const composedHandler = composeHandlers(\n  (event) => console.log('Received', event),\n  (event) => ...\n);\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'import { composeHandlers } from "@civet/events";\n'})}),"\n",(0,s.jsx)(n.h3,{id:"function-arguments",children:"Function arguments"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"...handlers"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"(event: any) => boolean"})}),(0,s.jsx)(n.td,{children:"Event handlers"})]})})]}),"\n",(0,s.jsx)(n.h3,{id:"return-type",children:"Return type"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"(event: any) => boolean"})}),(0,s.jsx)(n.td,{children:"Composed handlers"})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"eventreceiver",children:(0,s.jsx)(n.code,{children:"EventReceiver"})}),"\n",(0,s.jsx)(n.p,{children:"EventReceiver base class."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"class CustomReceiver extends EventReceiver {\n  handleSubscribe(resource, options, handler) {\n    ...\n    const unsubscribe = () => {\n      ...\n    };\n    return unsubscribe;\n  }\n}\n\nconst receiver = new CustomReceiver();\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'import { EventReceiver } from "@civet/events";\n'})}),"\n",(0,s.jsx)(n.h3,{id:"class-members",children:"Class members"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Arguments"}),(0,s.jsx)(n.th,{children:"Return Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"subscribe"}),(0,s.jsxs)(n.td,{children:["resource: ",(0,s.jsx)(n.code,{children:"object"}),", options: ",(0,s.jsx)(n.code,{children:"object"}),", handler: ",(0,s.jsx)(n.code,{children:"(events: any[]) => void"})]}),(0,s.jsxs)(n.td,{children:["unsubscribe: ",(0,s.jsx)(n.code,{children:"() => void"})]}),(0,s.jsx)(n.td,{children:"Subscribe to events"})]})})]}),"\n",(0,s.jsx)(n.h3,{id:"abstract-members",children:"Abstract members"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Arguments"}),(0,s.jsx)(n.th,{children:"Return Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"handleSubscribe"}),(0,s.jsxs)(n.td,{children:["resource: ",(0,s.jsx)(n.code,{children:"object"}),", options: ",(0,s.jsx)(n.code,{children:"object"}),", handler: ",(0,s.jsx)(n.code,{children:"(events: any[]) => void"})]}),(0,s.jsxs)(n.td,{children:["unsubscribe: ",(0,s.jsx)(n.code,{children:"() => void"})]}),(0,s.jsx)(n.td,{})]})})]}),"\n",(0,s.jsx)(n.h3,{id:"caveats",children:"Caveats"}),"\n",(0,s.jsx)(n.h4,{id:"abstract-functions",children:"Abstract functions"}),"\n",(0,s.jsxs)(n.p,{children:["The function ",(0,s.jsx)(n.code,{children:"subscribe"})," internally invokes its abstract counterpart ",(0,s.jsx)(n.code,{children:"handleSubscribe"})," and performs generic validation on its parameters and return value. Therefore, you should not just override it, but implement the abstract ",(0,s.jsx)(n.code,{children:"handleSubscribe"})," method instead."]}),"\n",(0,s.jsx)(n.h2,{id:"iseventreceiver",children:(0,s.jsx)(n.code,{children:"isEventReceiver"})}),"\n",(0,s.jsxs)(n.p,{children:["Identifies ",(0,s.jsx)(n.a,{href:"#eventreceiver",children:(0,s.jsx)(n.code,{children:"EventReceiver"})})," instances."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'const er = new EventReceiver();\n\nif (!isEventReceiver(er)) {\n  throw new Error("Should be a EventReceiver instance");\n}\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'import { isEventReceiver } from "@civet/events";\n'})}),"\n",(0,s.jsx)(n.h3,{id:"function-arguments-1",children:"Function arguments"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"eventReceiver"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"any"})}),(0,s.jsx)(n.td,{children:"The object to be checked"})]})})]}),"\n",(0,s.jsx)(n.h3,{id:"return-type-1",children:"Return type"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"boolean"})}),(0,s.jsxs)(n.td,{children:["Whether ",(0,s.jsx)(n.code,{children:"eventReceiver"})," is an instance of ",(0,s.jsx)(n.a,{href:"#eventreceiver",children:(0,s.jsx)(n.code,{children:"EventReceiver"})})]})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"eventreceiverproptype",children:(0,s.jsx)(n.code,{children:"eventReceiverPropType"})}),"\n",(0,s.jsxs)(n.p,{children:["PropType for ",(0,s.jsx)(n.a,{href:"#eventreceiver",children:(0,s.jsx)(n.code,{children:"EventReceiver"})})," instances."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const propTypes = {\n  optional: eventReceiverPropType,\n  required: eventReceiverPropType.isRequired,\n};\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'import { eventReceiverPropType } from "@civet/events";\n'})})]})}function a(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>t});var s=r(6540);const c={},i=s.createContext(c);function d(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);