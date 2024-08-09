"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[44230],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>g});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},68493:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(58168),a=(r(96540),r(15680));const o={description:"mmWave Radar Sensor Guide",title:"\u6beb\u7c73\u6ce2\u96f7\u8fbe\u4f20\u611f\u5668\u6307\u5357",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/mmwave_radar_Intro",last_update:{date:"03/22/2024",author:"Matthew"}},i=void 0,l={unversionedId:"zh-CN/Sensor/mmWave_radar_sensor/cn-mmwave_radar_Intro",id:"zh-CN/Sensor/mmWave_radar_sensor/cn-mmwave_radar_Intro",title:"\u6beb\u7c73\u6ce2\u96f7\u8fbe\u4f20\u611f\u5668\u6307\u5357",description:"mmWave Radar Sensor Guide",source:"@site/docs/zh-CN/Sensor/mmWave_radar_sensor/cn-mmwave_radar_Intro.md",sourceDirName:"zh-CN/Sensor/mmWave_radar_sensor",slug:"/cn/mmwave_radar_Intro",permalink:"/cn/mmwave_radar_Intro",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/zh-CN/Sensor/mmWave_radar_sensor/cn-mmwave_radar_Intro.md",tags:[],version:"current",lastUpdatedBy:"Matthew",lastUpdatedAt:1711065600,formattedLastUpdatedAt:"Mar 22, 2024",frontMatter:{description:"mmWave Radar Sensor Guide",title:"\u6beb\u7c73\u6ce2\u96f7\u8fbe\u4f20\u611f\u5668\u6307\u5357",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/mmwave_radar_Intro",last_update:{date:"03/22/2024",author:"Matthew"}},sidebar:"CNSidebar",previous:{title:"\u201c\u5938\u514b\uff08Quark\uff09\u201d\u8ff7\u4f60\u5f00\u53d1\u8005\u5957\u4ef6",permalink:"/cn/Quantum-Mini-Linux-Development-Kit"},next:{title:"\u7528\u4e8e XIAO \u7684 24GHz \u6beb\u7c73\u6ce2",permalink:"/cn/mmwave_for_xiao"}},s={},c=[{value:"\u2728 \u8d21\u732e\u8005\u9879\u76ee",id:"-\u8d21\u732e\u8005\u9879\u76ee",level:2},{value:"\u6280\u672f\u652f\u6301\u4e0e\u4ea7\u54c1\u8ba8\u8bba",id:"\u6280\u672f\u652f\u6301\u4e0e\u4ea7\u54c1\u8ba8\u8bba",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...r}=e;return(0,a.yg)(d,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("h2",{parentName:"li",id:"\u4e0d\u540c\u7c7b\u578b\u7684\u6beb\u7c73\u6ce2\u96f7\u8fbe\u4f20\u611f\u5668"},"\u4e0d\u540c\u7c7b\u578b\u7684\u6beb\u7c73\u6ce2\u96f7\u8fbe\u4f20\u611f\u5668"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"\u5de6\u4fa7\u5c55\u793a\u4e86\u6211\u4eec\u4e0d\u540c\u7c7b\u578b\u7684\u6beb\u7c73\u6ce2\u96f7\u8fbe\u4f20\u611f\u5668\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u4ee5\u4e0b\u662f\u6beb\u7c73\u6ce2\u96f7\u8fbe\u4f20\u611f\u5668\u7684\u5168\u666f\u56fe\uff1a")))),(0,a.yg)("div",{class:"independent_container"},(0,a.yg)("div",{class:"independent_item",style:{textAlign:"left"}},(0,a.yg)("div",{class:"independent_title",style:{textAlign:"center"}},(0,a.yg)("font",{color:"8DC215",size:"5.5"},"\u6beb\u7c73\u6ce2\u96f7\u8fbe\u4f20\u611f\u5668")),(0,a.yg)("a",{href:"/Radar_MR24HPC1",target:"_blank"},(0,a.yg)("span",null,(0,a.yg)("font",{color:"FFFFFF",size:"2"}," 24GHz \u6beb\u7c73\u6ce2\u4eba\u4f53\u9759\u6001\u5b58\u5728\u68c0\u6d4b\u6a21\u5757\uff08\u7cbe\u7b80\u7248\uff09- \u53ef\u914d\u7f6e\u53c2\u6570"))),(0,a.yg)("br",null),(0,a.yg)("a",{href:"/Radar_MR24HPB1",target:"_blank"},(0,a.yg)("span",null,(0,a.yg)("font",{color:"FFFFFF",size:"2"}," 24GHz \u6beb\u7c73\u6ce2\u4eba\u4f53\u9759\u6001\u5b58\u5728\u4f20\u611f\u5668"))),(0,a.yg)("br",null),(0,a.yg)("a",{href:"/Radar_MR24FDB1",target:"_blank"},(0,a.yg)("span",null,(0,a.yg)("font",{color:"FFFFFF",size:"2"}," 24GHz \u6beb\u7c73\u6ce2\u8dcc\u5012\u68c0\u6d4b\u4f20\u611f\u5668 "))),(0,a.yg)("br",null),(0,a.yg)("a",{href:"/Radar_MR24BSD1",target:"_blank"},(0,a.yg)("span",null,(0,a.yg)("font",{color:"FFFFFF",size:"2"}," 60GHz \u6beb\u7c73\u6ce2\u7761\u7720\u547c\u5438\u76d1\u6d4b\u6a21\u5757"))),(0,a.yg)("br",null),(0,a.yg)("a",{href:"/Radar_MR60BHA1",target:"_blank"},(0,a.yg)("span",null,(0,a.yg)("font",{color:"FFFFFF",size:"2"}," 60GHz \u6beb\u7c73\u6ce2\u547c\u5438\u4e0e\u5fc3\u8df3\u76d1\u6d4b\u6a21\u5757"))),(0,a.yg)("br",null),(0,a.yg)("a",{href:"/Radar_MR60FDA1",target:"_blank"},(0,a.yg)("span",null,(0,a.yg)("font",{color:"FFFFFF",size:"2"}," 60GHz \u6beb\u7c73\u6ce2\u8dcc\u5012\u68c0\u6d4b\u6a21\u5757\u4e13\u4e1a\u7248"))),(0,a.yg)("br",null))),(0,a.yg)("h2",{id:"-\u8d21\u732e\u8005\u9879\u76ee"},"\u2728 \u8d21\u732e\u8005\u9879\u76ee"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u6211\u4eec\u6709\u4e00\u4e2a\u66f4\u65b0\u6b64\u9875\u9762\u7684\u4efb\u52a1\u5217\u8868\uff0c\u8be5\u5217\u8868\u5f52\u7c7b\u4e8e\u6211\u4eec\u7684",(0,a.yg)("a",{parentName:"li",href:"https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479"},"\u8d21\u732e\u8005\u9879\u76ee"),"\uff0c\u56e0\u4e3a\u6211\u4eec\u81f4\u529b\u4e8e\u901a\u8fc7\u5f00\u53d1\u6211\u4eec\u7684wiki\u5e73\u53f0\u6765\u63d0\u5347\u7528\u6237\u4f53\u9a8c\u548c\u63d0\u4f9b\u66f4\u597d\u7684\u652f\u6301\u3002"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=33962026"},"\u60a8\u5bf9\u6b64\u9875\u9762\u7684\u8d21\u732e"),"\u5bf9\u6211\u4eec\u6765\u8bf4\u81f3\u5173\u91cd\u8981\uff01\u6211\u4eec\u975e\u5e38\u770b\u91cd\u60a8\u7684\u610f\u89c1\uff0c\u5e76\u975e\u5e38\u611f\u8c22\u60a8\u7684\u5e2e\u52a9\u548c\u63d0\u4f9b\u7684\u60f3\u6cd5\u3002")),(0,a.yg)("h2",{id:"\u6280\u672f\u652f\u6301\u4e0e\u4ea7\u54c1\u8ba8\u8bba"},"\u6280\u672f\u652f\u6301\u4e0e\u4ea7\u54c1\u8ba8\u8bba"),(0,a.yg)("br",null),(0,a.yg)("p",null,"\u611f\u8c22\u60a8\u9009\u62e9\u6211\u4eec\u7684\u4ea7\u54c1\uff01\u6211\u4eec\u81f4\u529b\u4e8e\u4e3a\u60a8\u63d0\u4f9b\u4e0d\u540c\u5f62\u5f0f\u7684\u6280\u672f\u652f\u6301\uff0c\u4ee5\u786e\u4fdd\u60a8\u5728\u4f7f\u7528\u6211\u4eec\u7684\u4ea7\u54c1\u65f6\u80fd\u591f\u62e5\u6709\u5c3d\u53ef\u80fd\u987a\u7545\u7684\u4f53\u9a8c\u3002\u6211\u4eec\u63d0\u4f9b\u591a\u79cd\u6c9f\u901a\u6e20\u9053\uff0c\u4ee5\u6ee1\u8db3\u4e0d\u540c\u7684\u504f\u597d\u548c\u9700\u6c42\u3002"),(0,a.yg)("div",{class:"button_tech_support_container"},(0,a.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,a.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,a.yg)("div",{class:"button_tech_support_container"},(0,a.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,a.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}p.isMDXComponent=!0}}]);