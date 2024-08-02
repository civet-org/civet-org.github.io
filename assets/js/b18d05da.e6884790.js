"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[888],{4262:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var o=t(4848),i=t(8453);const r={sidebar_position:1},s="Extending Civet",c={id:"guides/extending",title:"Extending Civet",description:"DataStore",source:"@site/docs/guides/extending.mdx",sourceDirName:"guides",slug:"/guides/extending",permalink:"/docs/guides/extending",draft:!1,unlisted:!1,editUrl:"https://github.com/civet-org/civet-org.github.io/docs/guides/extending.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Guides",permalink:"/docs/category/guides"},next:{title:"API Reference",permalink:"/docs/category/api-reference"}},a={},d=[{value:"DataStore",id:"datastore",level:2},{value:"Plugins",id:"plugins",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"extending-civet",children:"Extending Civet"}),"\n",(0,o.jsx)(n.h2,{id:"datastore",children:"DataStore"}),"\n",(0,o.jsxs)(n.p,{children:["The main place for bringing your own functionality to Civet is the ",(0,o.jsx)(n.a,{href:"../api/core#datastore",children:(0,o.jsx)(n.code,{children:"DataStore"})}),".\nYou can simply add your own functionality to it by extending the class and then accessing it from within a ",(0,o.jsx)(n.a,{href:"../api/core#resource",children:(0,o.jsx)(n.code,{children:"Resource"})})," or from somewhere else."]}),"\n",(0,o.jsxs)(n.p,{children:["However, there may be some cases where this might not be enough, for example if you need a dedicated state for each ",(0,o.jsx)(n.a,{href:"../api/core#resource",children:(0,o.jsx)(n.code,{children:"Resource"})})," or want to manipulate the ",(0,o.jsx)(n.a,{href:"../api/core#resource",children:(0,o.jsx)(n.code,{children:"Resource"})})," context."]}),"\n",(0,o.jsxs)(n.p,{children:["If this is the case, you can use ",(0,o.jsx)(n.a,{href:"../api/core#datastore",children:(0,o.jsx)(n.code,{children:"DataStore"})}),"'s ",(0,o.jsx)(n.code,{children:"extend"})," method.\nThis method is called when initialising the ",(0,o.jsx)(n.a,{href:"../api/core#datastore",children:(0,o.jsx)(n.code,{children:"DataStore"})})," and provides a configuration API."]}),"\n",(0,o.jsxs)(n.p,{children:["With this method, you can for example add hooks to each ",(0,o.jsx)(n.a,{href:"../api/core#resource",children:(0,o.jsx)(n.code,{children:"Resource"})})," that uses your ",(0,o.jsx)(n.a,{href:"../api/core#datastore",children:(0,o.jsx)(n.code,{children:"DataStore"})}),".\nThese hooks could then be used to collect debugging information, provide your own React context values to child components or, like said above, manipulate the ",(0,o.jsx)(n.a,{href:"../api/core#resource",children:(0,o.jsx)(n.code,{children:"Resource"})}),"'s context itself."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"/*\nResource Hooks must always render the result of the children function.\nThe children function takes the (un)modified context as its only argument.\n\nIt is strongly recommended to add additional attributes to the context\ninstead of modifying existing ones if possible\nin order to prevent other plugins or child components from breaking.\n*/\nfunction ResourceHook({ ...props, context, children }) {\n  return (\n    <ReactComponent>\n      {children({ ...context, extendedContext: 123 })}\n    </ReactComponent>\n  );\n}\n\nclass MyDataStore extends DataStore {\n  extend(extend) {\n    // This is necessary for the base class to work properly:\n    super.extend(extend);\n\n    // Register a Resource hook component\n    extend.resource(ResourceHook);\n  }\n\n  // ...handleGet, etc.\n}\n"})}),"\n",(0,o.jsxs)(n.admonition,{type:"warning",children:[(0,o.jsxs)(n.p,{children:["Please note that the ",(0,o.jsx)(n.code,{children:"extend"})," method is called by the ",(0,o.jsx)(n.a,{href:"../api/core#basedatastore",children:"BaseDataStore"}),"'s constructor, so probably before your own constructor's logic is executed."]}),(0,o.jsxs)(n.p,{children:["Therefore, you should not depend on ",(0,o.jsx)(n.code,{children:"this"})," inside of ",(0,o.jsx)(n.code,{children:"extend"}),"."]})]}),"\n",(0,o.jsx)(n.h2,{id:"plugins",children:"Plugins"}),"\n",(0,o.jsx)(n.p,{children:"You can bundle related functionality in standalone plugins in order to make them reusable."}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.a,{href:"../api/core#createplugin",children:(0,o.jsx)(n.code,{children:"createPlugin"})})," function creates a plugin that can simply be called on an existing ",(0,o.jsx)(n.a,{href:"../api/core#datastore",children:(0,o.jsx)(n.code,{children:"DataStore"})})," implementation.\nYou can then extend it like described above in the ",(0,o.jsx)(n.a,{href:"#datastore",children:"DataStore section"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var o=t(6540);const i={},r=o.createContext(i);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);