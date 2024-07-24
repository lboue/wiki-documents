"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[89944],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>g});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,g=m["".concat(p,".").concat(d)]||m[d]||c[d]||i;return r?n.createElement(g,o(o({ref:t},u),{},{components:r})):n.createElement(g,o({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},94558:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(58168),a=(r(96540),r(15680));const i={title:"SPI",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Wio-Terminal-IO-SPI/",slug:"/cn/Wio-Terminal-IO-SPI",last_update:{date:"3/10/2024",author:"jessie"}},o="\u5728Wio Terminal\u4e0a\u4f7f\u7528SPI",l={unversionedId:"zh-CN/Sensor/Wio_Terminal/Hardware_Overview/Input&Output/CN-Wio-Terminal-IO-SPI",id:"zh-CN/Sensor/Wio_Terminal/Hardware_Overview/Input&Output/CN-Wio-Terminal-IO-SPI",title:"SPI",description:"\u8fd9\u4e2a\u4ed3\u5e93\u5c06\u6f14\u793a\u5982\u4f55\u5728Wio Terminal\u4e0a\u4f7f\u7528SPI\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528\u5b83\u6765\u63a7\u5236\u5176\u4ed6\u8bbe\u5907!",source:"@site/docs/zh-CN/Sensor/Wio_Terminal/Hardware_Overview/Input&Output/CN-Wio-Terminal-IO-SPI.md",sourceDirName:"zh-CN/Sensor/Wio_Terminal/Hardware_Overview/Input&Output",slug:"/cn/Wio-Terminal-IO-SPI",permalink:"/cn/Wio-Terminal-IO-SPI",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/zh-CN/Sensor/Wio_Terminal/Hardware_Overview/Input&Output/CN-Wio-Terminal-IO-SPI.md",tags:[],version:"current",lastUpdatedBy:"jessie",lastUpdatedAt:1710028800,formattedLastUpdatedAt:"Mar 10, 2024",frontMatter:{title:"SPI",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Wio-Terminal-IO-SPI/",slug:"/cn/Wio-Terminal-IO-SPI",last_update:{date:"3/10/2024",author:"jessie"}},sidebar:"CNSidebar",previous:{title:"I2C\u7aef\u53e3",permalink:"/cn/Wio-Terminal-IO-I2C"},next:{title:"Grove\u7aef\u53e3",permalink:"/cn/Wio-Terminal-Grove"}},p={},s=[{value:"\u7aef\u53e3\u914d\u7f6e",id:"\u7aef\u53e3\u914d\u7f6e",level:2},{value:"\u8f6f\u4ef6\u914d\u7f6e",id:"\u8f6f\u4ef6\u914d\u7f6e",level:2},{value:"\u6280\u672f\u652f\u6301 &amp; \u4ea7\u54c1\u8ba8\u8bba",id:"\u6280\u672f\u652f\u6301--\u4ea7\u54c1\u8ba8\u8bba",level:2}],u={toc:s},m="wrapper";function c(e){let{components:t,...r}=e;return(0,a.yg)(m,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"\u5728wio-terminal\u4e0a\u4f7f\u7528spi"},"\u5728Wio Terminal\u4e0a\u4f7f\u7528SPI"),(0,a.yg)("p",null,"\u8fd9\u4e2a\u4ed3\u5e93\u5c06\u6f14\u793a\u5982\u4f55\u5728Wio Terminal\u4e0a\u4f7f\u7528SPI\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528\u5b83\u6765\u63a7\u5236\u5176\u4ed6\u8bbe\u5907!"),(0,a.yg)("h2",{id:"\u7aef\u53e3\u914d\u7f6e"},"\u7aef\u53e3\u914d\u7f6e"),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2020-03-03_12-28-09.jpg"})),(0,a.yg)("p",null,"\u6b63\u5982\u60a8\u6240\u89c1\uff0c\u7269\u7406SPI\u5f15\u811a\u5982\u4e0b\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"MOSI")," -> ",(0,a.yg)("inlineCode",{parentName:"p"},"GPIO 19"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"MISO")," -> ",(0,a.yg)("inlineCode",{parentName:"p"},"GPIO 21"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"SCK")," -> ",(0,a.yg)("inlineCode",{parentName:"p"},"GPIO 23"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"SS")," -> ",(0,a.yg)("inlineCode",{parentName:"p"},"GPIO 24")))),(0,a.yg)("h2",{id:"\u8f6f\u4ef6\u914d\u7f6e"},"\u8f6f\u4ef6\u914d\u7f6e"),(0,a.yg)("p",null,"\u5728Arduino\u4e2d\uff0c\u6240\u6709SPI\u5f15\u811a\u90fd\u662f\u9884\u5b9a\u4e49\u7684\uff0c\u60a8\u53ef\u4ee5\u6309\u4ee5\u4e0b\u65b9\u5f0f\u8bbf\u95ee\u8fd9\u4e9b\u5f15\u811a\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"MOSI")," -> ",(0,a.yg)("inlineCode",{parentName:"p"},"PIN_SPI_MOSI"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"MISO")," -> ",(0,a.yg)("inlineCode",{parentName:"p"},"PIN_SPI_MISO"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"SCK")," -> ",(0,a.yg)("inlineCode",{parentName:"p"},"PIN_SPI_SCK"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"SS")," -> ",(0,a.yg)("inlineCode",{parentName:"p"},"PIN_SPI_SS")))),(0,a.yg)("h2",{id:"\u6280\u672f\u652f\u6301--\u4ea7\u54c1\u8ba8\u8bba"},"\u6280\u672f\u652f\u6301 & \u4ea7\u54c1\u8ba8\u8bba"),(0,a.yg)("p",null,"\u611f\u8c22\u60a8\u9009\u62e9\u6211\u4eec\u7684\u4ea7\u54c1\uff01\u6211\u4eec\u81f4\u529b\u4e8e\u4e3a\u60a8\u63d0\u4f9b\u4e0d\u540c\u7684\u652f\u6301\uff0c\u4ee5\u786e\u4fdd\u60a8\u5bf9\u6211\u4eec\u7684\u4ea7\u54c1\u62e5\u6709\u5c3d\u53ef\u80fd\u987a\u7545\u7684\u4f53\u9a8c\u3002\u6211\u4eec\u63d0\u4f9b\u591a\u79cd\u6c9f\u901a\u6e20\u9053\uff0c\u4ee5\u6ee1\u8db3\u4e0d\u540c\u7684\u504f\u597d\u548c\u9700\u6c42\u3002"),(0,a.yg)("div",{class:"button_tech_support_container"},(0,a.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,a.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,a.yg)("div",{class:"button_tech_support_container"},(0,a.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,a.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}c.isMDXComponent=!0}}]);