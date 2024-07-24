"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3773],{15680:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>d});var r=n(96540);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},g=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),u=s(n),c=l,d=u["".concat(p,".").concat(c)]||u[c]||m[c]||a;return n?r.createElement(d,i(i({ref:t},g),{},{components:n})):r.createElement(d,i({ref:t},g))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:l,i[1]=o;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},72039:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var r=n(58168),l=(n(96540),n(15680));const a={description:"Grove \u95ea\u70c1\u6a21\u5757",title:"Grove \u95ea\u70c1\u6a21\u5757",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/Grove-BlinkM",last_update:{date:"03/22/2024",author:"WuFeifei"}},i=void 0,o={unversionedId:"zh-CN/Sensor/Grove/Grove_Accessories/Display/cn-Grove-BlinkM",id:"zh-CN/Sensor/Grove/Grove_Accessories/Display/cn-Grove-BlinkM",title:"Grove \u95ea\u70c1\u6a21\u5757",description:"Grove \u95ea\u70c1\u6a21\u5757",source:"@site/docs/zh-CN/Sensor/Grove/Grove_Accessories/Display/cn-Grove-BlinkM.md",sourceDirName:"zh-CN/Sensor/Grove/Grove_Accessories/Display",slug:"/cn/Grove-BlinkM",permalink:"/cn/Grove-BlinkM",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/zh-CN/Sensor/Grove/Grove_Accessories/Display/cn-Grove-BlinkM.md",tags:[],version:"current",lastUpdatedBy:"WuFeifei",lastUpdatedAt:1711065600,formattedLastUpdatedAt:"Mar 22, 2024",frontMatter:{description:"Grove \u95ea\u70c1\u6a21\u5757",title:"Grove \u95ea\u70c1\u6a21\u5757",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/Grove-BlinkM",last_update:{date:"03/22/2024",author:"WuFeifei"}},sidebar:"CNSidebar",previous:{title:"I\xb2C\u6db2\u6676\u663e\u793a\u5c4f",permalink:"/cn/I2C_LCD"},next:{title:"Grove - \u4e32\u53e3\u76f8\u673a\u5957\u4ef6",permalink:"/cn/Grove-Serial_Camera_Kit"}},p={},s=[{value:"\u7279\u70b9",id:"\u7279\u70b9",level:2},{value:"\u5e94\u7528\u60f3\u6cd5",id:"\u5e94\u7528\u60f3\u6cd5",level:2},{value:"\u89c4\u683c",id:"\u89c4\u683c",level:2},{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:2},{value:"\u652f\u6301",id:"\u652f\u6301",level:2},{value:"\u8d44\u6e90",id:"\u8d44\u6e90",level:2},{value:"\u6280\u672f\u652f\u6301\u4e0e\u4ea7\u54c1\u8ba8\u8bba",id:"\u6280\u672f\u652f\u6301\u4e0e\u4ea7\u54c1\u8ba8\u8bba",level:2}],g={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,l.yg)(u,(0,r.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("p",null,(0,l.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-BlinkM/img/Tbkms.jpg",alt:null})," ",(0,l.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-BlinkM/img/Tbkms_01.jpg",alt:null})," ",(0,l.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-BlinkM/img/Tbkms_02.jpg",alt:null})),(0,l.yg)("p",null,"Grove-BlinkM \u662f\u4e13\u4e3a ThingM \u7684 I2C \u667a\u80fd LED \u8bbe\u8ba1\u7684\u3002BlinkM Shield \u4e0a\u7684\u538b\u5408\u5f0f\u5f15\u811a\u5b54\u8ba9 BlinkM \u6216 MinM \u53ef\u4ee5\u65b9\u4fbf\u5730\u538b\u63a5\u5230 Grove \u4e0a\uff0c\u5e76\u4e0e\u6211\u4eec\u7684 Grove \u7cfb\u7edf\u517c\u5bb9\u3002\u5b83\u5c31\u50cf\u4e00\u4e2a\u9002\u914d\u5668\uff0c\u5c06 BlinkM/MinM \u8f6c\u6362\u6210\u6211\u4eec\u7684 Grove \u63a5\u53e3\uff0c\u4ee5\u4fbf\u4f7f\u7528 Grove - Base Shield\u3002"),(0,l.yg)("p",null,"BlinkM \u662f\u4e00\u4e2a\u201c\u667a\u80fd LED\u201d\uff0c\u662f\u4e00\u4e2a\u53ef\u7528\u4e8e\u4e1a\u4f59\u7231\u597d\u8005\u3001\u5de5\u4e1a\u8bbe\u8ba1\u5e08\u3001\u539f\u578b\u8bbe\u8ba1\u5e08\u548c\u5b9e\u9a8c\u8005\u7684\u7f51\u7edc\u5316\u548c\u53ef\u7f16\u7a0b\u5168\u5f69 RGB LED\u3002\u5b83\u7684\u8bbe\u8ba1\u5141\u8bb8\u5728\u73b0\u6709\u6216\u65b0\u9879\u76ee\u4e2d\u8f7b\u677e\u6dfb\u52a0\u52a8\u6001\u6307\u793a\u5668\u3001\u663e\u793a\u5668\u548c\u7167\u660e\u3002\u5982\u679c\u60a8\u5df2\u7ecf\u7528\u5b8c\u4e86\u6240\u6709\u5fae\u63a7\u5236\u5668\u7684 PWM \u901a\u9053\u6765\u63a7\u5236 RGB LED\uff0c\u4f46\u8fd8\u60f3\u8981\u66f4\u591a\uff0c\u90a3\u4e48 BlinkM \u5c31\u662f\u4e3a\u60a8\u51c6\u5907\u7684\u3002BlinkM \u4f7f\u7528\u9ad8\u8d28\u91cf\u3001\u9ad8\u529f\u7387\u7684 RGB LED \u548c\u5c0f\u578b AVR \u5fae\u63a7\u5236\u5668\uff0c\u5141\u8bb8\u7528\u6237\u901a\u8fc7\u7b80\u5355\u7684 I2C \u63a5\u53e3\u6570\u5b57\u63a7\u5236 RGB LED\u3002\u591a\u4e2a BlinkM \u53ef\u4ee5\u4e32\u8054\u5230 I2C \u603b\u7ebf\u4e0a\uff0c\u5b9e\u73b0\u4ee4\u4eba\u60ca\u53f9\u7684\u706f\u5149\u663e\u793a\u3002"),(0,l.yg)("p",null,"\u578b\u53f7\uff1a",(0,l.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/grove-blinkm-p-826.html?cPath=156_157"},"LED42149P")),(0,l.yg)("h2",{id:"\u7279\u70b9"},"\u7279\u70b9"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Grove \u517c\u5bb9")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u538b\u5408\u5f0f\u5f15\u811a\u5b54")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u4f4e\u529f\u8017")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u5355\u4e00\u53cc\u7ebf\u7f51\u7edc\u4e0a\u6700\u591a\u53ef\u8fde\u63a5 127 \u4e2a BlinkM")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u968f\u673a\u989c\u8272\u9009\u62e9\uff0c\u5e26\u6709\u8303\u56f4\uff0c\u5e76\u53ef\u57fa\u4e8e\u4e4b\u524d\u7684\u989c\u8272\u8fdb\u884c\u9009\u62e9")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u53ef\u4ee5\u76f4\u63a5\u63d2\u5165\u5230 Arduino \u4e0a\uff0c\u65e0\u9700\u63a5\u7ebf\u6216\u5176\u4ed6\u7ec4\u4ef6\uff01"))),(0,l.yg)("h2",{id:"\u5e94\u7528\u60f3\u6cd5"},"\u5e94\u7528\u60f3\u6cd5"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"RGB LED \u77e9\u9635")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u88c5\u9970"))),(0,l.yg)("h2",{id:"\u89c4\u683c"},"\u89c4\u683c"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"\u9879\u76ee"),(0,l.yg)("th",{parentName:"tr",align:null},"\u6700\u5c0f\u503c"),(0,l.yg)("th",{parentName:"tr",align:null},"\u5178\u578b\u503c"),(0,l.yg)("th",{parentName:"tr",align:null},"\u6700\u5927\u503c"),(0,l.yg)("th",{parentName:"tr",align:null},"\u5355\u4f4d"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("strong",{parentName:"td"},"\u7535\u538b")),(0,l.yg)("td",{parentName:"tr",align:null},"3.6"),(0,l.yg)("td",{parentName:"tr",align:null},"5.0"),(0,l.yg)("td",{parentName:"tr",align:null},"5.2"),(0,l.yg)("td",{parentName:"tr",align:null},"VDC")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("strong",{parentName:"td"},"\u7535\u6d41")),(0,l.yg)("td",{parentName:"tr",align:null},"/"),(0,l.yg)("td",{parentName:"tr",align:null},"/"),(0,l.yg)("td",{parentName:"tr",align:null},"60"),(0,l.yg)("td",{parentName:"tr",align:null},"mA")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("strong",{parentName:"td"},"\u901a\u4fe1\u534f\u8bae")),(0,l.yg)("td",{parentName:"tr",align:null},"I2C"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"/")))),(0,l.yg)("h2",{id:"\u4f7f\u7528\u65b9\u6cd5"},"\u4f7f\u7528\u65b9\u6cd5"),(0,l.yg)("p",null,(0,l.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-BlinkM/img/Twigblink2.jpg",alt:null})),(0,l.yg)("p",null,(0,l.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-BlinkM/img/Blinkmhw1.jpg",alt:null})),(0,l.yg)("p",null,"\u4e0e BlinkM \u914d\u5408\u4f7f\u7528"),(0,l.yg)("p",null,(0,l.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-BlinkM/img/Blinkmhw2.jpg",alt:null})),(0,l.yg)("p",null,"\u5728\u8fb9\u7f18\u5b89\u88c5\u710a\u70b9\u3002"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"\u6ce8\u610f:")," Grove - BlinkM \u4f5c\u4e3a BlinkM \u8bbe\u5907\u548c arduino/seeeduino \u4e4b\u95f4\u7684\u6865\u6881\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1 ",(0,l.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/blinkm-i2c-controlled-rgb-led-p-836.html?cPath=156_157"},"BlinkM \u9875\u9762")," \u4e0a\u7684\u6570\u636e\u8868\u548c\u793a\u4f8b Arduino \u63a7\u5236\u4ee3\u7801\u3002"),(0,l.yg)("h2",{id:"\u652f\u6301"},"\u652f\u6301"),(0,l.yg)("p",null,"\u5982\u679c\u60a8\u6709\u4efb\u4f55\u95ee\u9898\u6216\u66f4\u597d\u7684\u8bbe\u8ba1\u60f3\u6cd5\uff0c\u8bf7\u524d\u5f80\u6211\u4eec\u7684",(0,l.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/forum"},"\u8bba\u575b"),"\u3002"),(0,l.yg)("h2",{id:"\u8d44\u6e90"},"\u8d44\u6e90"),(0,l.yg)("p",null,(0,l.yg)("a",{parentName:"p",href:"http://thingm.com/fileadmin/thingm/downloads/BlinkM_Examples.zip"}," \u6765\u81ea ThingM.com \u7684BlinkM_Examples")),(0,l.yg)("h2",{id:"\u6280\u672f\u652f\u6301\u4e0e\u4ea7\u54c1\u8ba8\u8bba"},"\u6280\u672f\u652f\u6301\u4e0e\u4ea7\u54c1\u8ba8\u8bba"),(0,l.yg)("p",null,"\u611f\u8c22\u60a8\u9009\u62e9\u6211\u4eec\u7684\u4ea7\u54c1\uff01\u6211\u4eec\u4e3a\u60a8\u63d0\u4f9b\u4e0d\u540c\u7684\u652f\u6301\uff0c\u4ee5\u786e\u4fdd\u60a8\u4f7f\u7528\u6211\u4eec\u7684\u4ea7\u54c1\u65f6\u80fd\u591f\u5c3d\u53ef\u80fd\u987a\u5229\u3002\u6211\u4eec\u63d0\u4f9b\u591a\u79cd\u6c9f\u901a\u6e20\u9053\uff0c\u4ee5\u6ee1\u8db3\u4e0d\u540c\u7684\u559c\u597d\u548c\u9700\u6c42\u3002"),(0,l.yg)("div",{class:"button_tech_support_container"},(0,l.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,l.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,l.yg)("div",{class:"button_tech_support_container"},(0,l.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,l.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}m.isMDXComponent=!0}}]);