"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[888],{7201:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var t=r(4848),i=r(8453);const o={sidebar_position:1},s="Extending Civet",c={id:"guides/extending",title:"Extending Civet",description:"DataProvider",source:"@site/docs/guides/extending.mdx",sourceDirName:"guides",slug:"/guides/extending",permalink:"/docs/guides/extending",draft:!1,unlisted:!1,editUrl:"https://github.com/civet-org/civet-org.github.io/docs/guides/extending.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Guides",permalink:"/docs/category/guides"},next:{title:"API Reference",permalink:"/docs/category/api-reference"}},d={},a=[{value:"DataProvider",id:"dataprovider",level:2},{value:"Context plugins",id:"context-plugins",level:3},{value:"UI plugins",id:"ui-plugins",level:3},{value:"DataProvider plugins",id:"dataprovider-plugins",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"extending-civet",children:"Extending Civet"})}),"\n",(0,t.jsx)(n.h2,{id:"dataprovider",children:"DataProvider"}),"\n",(0,t.jsxs)(n.p,{children:["The main place for bringing your own functionality to Civet is the ",(0,t.jsx)(n.a,{href:"../api/core#dataprovider",children:(0,t.jsx)(n.code,{children:"DataProvider"})}),".\nYou can simply add your own functionality to it by extending the class and then accessing it from within a ",(0,t.jsx)(n.a,{href:"../api/core#resource",children:(0,t.jsx)(n.code,{children:"Resource"})})," or from somewhere else."]}),"\n",(0,t.jsxs)(n.p,{children:["However, this might not be sufficient in all cases, for example if your custom functionality requires the use of React hooks or if you want to extend the ",(0,t.jsx)(n.a,{href:"../api/core#resourcecontext",children:(0,t.jsx)(n.code,{children:"ResourceContext"})}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["If this is the case, you can use ",(0,t.jsx)(n.a,{href:"../api/core#dataprovider",children:(0,t.jsx)(n.code,{children:"DataProvider"})}),"'s ",(0,t.jsx)(n.code,{children:"extend"})," method.\nThis method is called when initialising the ",(0,t.jsx)(n.a,{href:"../api/core#dataprovider",children:(0,t.jsx)(n.code,{children:"DataProvider"})})," and provides an API for registering various plugins."]}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:["Please note that the ",(0,t.jsx)(n.code,{children:"extend"})," method is called by the ",(0,t.jsx)(n.a,{href:"../api/core#dataprovider",children:(0,t.jsx)(n.code,{children:"DataProvider"})}),"'s constructor, so probably before your own constructor's logic is executed."]})}),"\n",(0,t.jsxs)(n.p,{children:["There are currently two types of plugins which can be registered using the ",(0,t.jsx)(n.code,{children:"extend"})," function, ",(0,t.jsx)(n.a,{href:"#context-plugins",children:"context plugins"})," and ",(0,t.jsx)(n.a,{href:"#ui-plugins",children:"UI plugins"}),".\nThey are both used to extend the ",(0,t.jsx)(n.a,{href:"../api/core#resourcecontext",children:(0,t.jsx)(n.code,{children:"ResourceContext"})})," but differ in where they can be used and what you can accomplish with them."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"class MyDataProvider extends DataProvider {\n  extend(extend) {\n    super.extend(extend);\n\n    // Register a context plugin\n    extend.context(useMyContextPlugin);\n\n    // Register a UI plugin\n    extend.ui(MyUIPlugin);\n  }\n\n  // ...\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"context-plugins",children:"Context plugins"}),"\n",(0,t.jsxs)(n.p,{children:["Context plugins are React hooks for extending the ",(0,t.jsx)(n.a,{href:"../api/core#resourcecontext",children:(0,t.jsx)(n.code,{children:"ResourceContext"})}),".\nThey work for both the ",(0,t.jsx)(n.a,{href:"../api/core#resource",children:(0,t.jsx)(n.code,{children:"Resource"})})," component and the ",(0,t.jsx)(n.a,{href:"../api/core#useresource",children:(0,t.jsx)(n.code,{children:"useResource"})})," hook."]}),"\n",(0,t.jsxs)(n.p,{children:["As these plugins are handled as React hooks, they may use React hooks (for example ",(0,t.jsx)(n.code,{children:"useMemo"}),") themselves.\nContext plugins cannot render any content."]}),"\n",(0,t.jsxs)(n.p,{children:["Context plugins are handled in the order they are registered, always before ",(0,t.jsx)(n.a,{href:"#ui-plugins",children:"UI plugins"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Their signature is:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"/**\n * @param {object} context - the ResourceContext to be modified\n * @param {props} context - custom props passed to useResource or Resource\n * @returns the modified memoized ResourceContext\n **/\nfunction useMyContextPlugin(context, props) {\n  return context;\n}\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:["The context returned by a context plugin must be memoized, for example by using React's ",(0,t.jsx)(n.code,{children:"useMemo"})," hook."]})}),"\n",(0,t.jsx)(n.h3,{id:"ui-plugins",children:"UI plugins"}),"\n",(0,t.jsxs)(n.p,{children:["UI plugins are React components for extending the ",(0,t.jsx)(n.a,{href:"../api/core#resourcecontext",children:(0,t.jsx)(n.code,{children:"ResourceContext"})}),".\nThey only work for the ",(0,t.jsx)(n.a,{href:"../api/core#resource",children:(0,t.jsx)(n.code,{children:"Resource"})})," component and are ignored for the ",(0,t.jsx)(n.a,{href:"../api/core#useresource",children:(0,t.jsx)(n.code,{children:"useResource"})})," hook."]}),"\n",(0,t.jsx)(n.p,{children:"You can use UI plugins to render additional content."}),"\n",(0,t.jsxs)(n.p,{children:["UI plugins are handled in the order they are registered, always after ",(0,t.jsx)(n.a,{href:"#context-plugins",children:"context plugins"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Their signature is:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"function MyUIPlugin({ ...props, context, children }) {\n  // UI plugins must always render the result of the children function.\n  // The children function takes the (un)modified context as its only argument.\n  return children(context);\n}\n\nMyUIPlugin.propTypes = {\n  props: PropTypes.object, // custom props passed to Resource\n  context: PropTypes.object, // the ResourceContext to be modified\n  children: PropTypes.func, // render props function to pass the modified memoized context down\n}\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:["The context passed down by a UI plugin must be memoized, for example by using React's ",(0,t.jsx)(n.code,{children:"useMemo"})," hook."]})}),"\n",(0,t.jsx)(n.h2,{id:"dataprovider-plugins",children:"DataProvider plugins"}),"\n",(0,t.jsx)(n.p,{children:"You can bundle related functionality in standalone plugin functions in order to make them reusable by others."}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"../api/core#createplugin",children:(0,t.jsx)(n.code,{children:"createPlugin"})})," function creates a plugin that can simply be called on an existing ",(0,t.jsx)(n.a,{href:"../api/core#dataprovider",children:(0,t.jsx)(n.code,{children:"DataProvider"})})," implementation.\nYou can then extend it like described above in the ",(0,t.jsx)(n.a,{href:"#dataprovider",children:"DataProvider section"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>c});var t=r(6540);const i={},o=t.createContext(i);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);