"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[799],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),l=p(n),m=a,f=l["".concat(c,".").concat(m)]||l[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[l]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7595:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1},i="Extending Civet",s={unversionedId:"guides/extending",id:"guides/extending",title:"Extending Civet",description:"DataStore",source:"@site/docs/guides/extending.mdx",sourceDirName:"guides",slug:"/guides/extending",permalink:"/docs/guides/extending",draft:!1,editUrl:"https://github.com/civet-org/civet-org.github.io/docs/guides/extending.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Guides",permalink:"/docs/category/guides"},next:{title:"API Reference",permalink:"/docs/category/api-reference"}},c={},p=[{value:"DataStore",id:"datastore",level:2},{value:"Plugins",id:"plugins",level:2}],d={toc:p},l="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(l,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"extending-civet"},"Extending Civet"),(0,a.kt)("h2",{id:"datastore"},"DataStore"),(0,a.kt)("p",null,"The main place for bringing your own functionality to Civet is the ",(0,a.kt)("a",{parentName:"p",href:"../api/core#datastore"},(0,a.kt)("inlineCode",{parentName:"a"},"DataStore")),".\nYou can simply add your own functionality to it by extending the class and then accessing it from within a ",(0,a.kt)("a",{parentName:"p",href:"../api/core#resource"},(0,a.kt)("inlineCode",{parentName:"a"},"Resource"))," or from somewhere else."),(0,a.kt)("p",null,"However, there may be some cases where this might not be enough, for example if you need a dedicated state for each ",(0,a.kt)("a",{parentName:"p",href:"../api/core#resource"},(0,a.kt)("inlineCode",{parentName:"a"},"Resource"))," or want to manipulate the ",(0,a.kt)("a",{parentName:"p",href:"../api/core#resource"},(0,a.kt)("inlineCode",{parentName:"a"},"Resource"))," context."),(0,a.kt)("p",null,"If this is the case, you can use ",(0,a.kt)("a",{parentName:"p",href:"../api/core#datastore"},(0,a.kt)("inlineCode",{parentName:"a"},"DataStore")),"'s ",(0,a.kt)("inlineCode",{parentName:"p"},"extend")," method.\nThis method is called when initialising the ",(0,a.kt)("a",{parentName:"p",href:"../api/core#datastore"},(0,a.kt)("inlineCode",{parentName:"a"},"DataStore"))," and provides a configuration API."),(0,a.kt)("p",null,"With this method, you can for example add hooks to each ",(0,a.kt)("a",{parentName:"p",href:"../api/core#resource"},(0,a.kt)("inlineCode",{parentName:"a"},"Resource"))," that uses your ",(0,a.kt)("a",{parentName:"p",href:"../api/core#datastore"},(0,a.kt)("inlineCode",{parentName:"a"},"DataStore")),".\nThese hooks could then be used to collect debugging information, provide your own React context values to child components or, like said above, manipulate the ",(0,a.kt)("a",{parentName:"p",href:"../api/core#resource"},(0,a.kt)("inlineCode",{parentName:"a"},"Resource")),"'s context itself."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/*\nResource Hooks must always render the result of the children function.\nThe children function takes the (un)modified context as its only argument.\n\nIt is strongly recommended to add additional attributes to the context\ninstead of modifying existing ones if possible\nin order to prevent other plugins or child components from breaking.\n*/\nfunction ResourceHook({ ...props, context, children }) {\n  return (\n    <ReactComponent>\n      {children({ ...context, extendedContext: 123 })}\n    </ReactComponent>\n  );\n}\n\nclass MyDataStore extends DataStore {\n  extend(extend) {\n    // This is necessary for the base class to work properly:\n    super.extend(extend);\n\n    // Register a Resource hook component\n    extend.resource(ResourceHook);\n  }\n\n  // ...handleGet, etc.\n}\n")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Please note that the ",(0,a.kt)("inlineCode",{parentName:"p"},"extend")," method is called by the ",(0,a.kt)("a",{parentName:"p",href:"../api/core#basedatastore"},"BaseDataStore"),"'s constructor, so probably before your own constructor's logic is executed."),(0,a.kt)("p",{parentName:"admonition"},"Therefore, you should not depend on ",(0,a.kt)("inlineCode",{parentName:"p"},"this")," inside of ",(0,a.kt)("inlineCode",{parentName:"p"},"extend"),".")),(0,a.kt)("h2",{id:"plugins"},"Plugins"),(0,a.kt)("p",null,"You can bundle related functionality in standalone plugins in order to make them reusable."),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"../api/core#createplugin"},(0,a.kt)("inlineCode",{parentName:"a"},"createPlugin"))," function creates a plugin that can simply be called on an existing ",(0,a.kt)("a",{parentName:"p",href:"../api/core#datastore"},(0,a.kt)("inlineCode",{parentName:"a"},"DataStore"))," implementation.\nYou can then extend it like described above in the ",(0,a.kt)("a",{parentName:"p",href:"#datastore"},"DataStore section"),"."))}u.isMDXComponent=!0}}]);