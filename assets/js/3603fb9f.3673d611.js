"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[95966],{15680:(e,r,t)=>{t.d(r,{xA:()=>d,yg:()=>y});var n=t(96540);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=n.createContext({}),u=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},d=function(e){var r=u(e.components);return n.createElement(p.Provider,{value:r},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=u(t),g=i,y=m["".concat(p,".").concat(g)]||m[g]||s[g]||a;return t?n.createElement(y,o(o({ref:r},d),{},{components:t})):n.createElement(y,o({ref:r},d))}));function y(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=g;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l[m]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=t[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},77334:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=t(58168),i=(t(96540),t(15680));const a={description:"\u6982\u8ff0",title:"Bluetooth\u6982\u8ff0",keywords:["Wio_terminal Bluetooth"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/Wio-Terminal-Bluetooth-Overview",last_update:{date:"3/08/2024",author:"\u91d1\u83ca"}},o="Bluetooth \u6982\u8ff0",l={unversionedId:"zh-CN/Sensor/Wio_Terminal/Hardware_Overview/Bluetooth/CN-Wio-Terminal-Bluetooth-Overview",id:"zh-CN/Sensor/Wio_Terminal/Hardware_Overview/Bluetooth/CN-Wio-Terminal-Bluetooth-Overview",title:"Bluetooth\u6982\u8ff0",description:"\u6982\u8ff0",source:"@site/docs/zh-CN/Sensor/Wio_Terminal/Hardware_Overview/Bluetooth/CN-Wio-Terminal-Bluetooth-Overview.md",sourceDirName:"zh-CN/Sensor/Wio_Terminal/Hardware_Overview/Bluetooth",slug:"/cn/Wio-Terminal-Bluetooth-Overview",permalink:"/cn/Wio-Terminal-Bluetooth-Overview",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/zh-CN/Sensor/Wio_Terminal/Hardware_Overview/Bluetooth/CN-Wio-Terminal-Bluetooth-Overview.md",tags:[],version:"current",lastUpdatedBy:"\u91d1\u83ca",lastUpdatedAt:1709856e3,formattedLastUpdatedAt:"Mar 8, 2024",frontMatter:{description:"\u6982\u8ff0",title:"Bluetooth\u6982\u8ff0",keywords:["Wio_terminal Bluetooth"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/Wio-Terminal-Bluetooth-Overview",last_update:{date:"3/08/2024",author:"\u91d1\u83ca"}},sidebar:"CNSidebar",previous:{title:"\u9ad8\u7ea7 Wi-Fi \u4f7f\u7528\u65b9\u6cd5",permalink:"/cn/Wio-Terminal-Advanced-Wi-Fi"},next:{title:"\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u5668\u4ecb\u7ecd",permalink:"/cn/Wio-terminal-BLE-introduction"}},p={},u=[{value:"\u66f4\u65b0\u65e0\u7ebf\u6838\u5fc3\u56fa\u4ef6",id:"\u66f4\u65b0\u65e0\u7ebf\u6838\u5fc3\u56fa\u4ef6",level:2},{value:"\u66f4\u65b0Seeed SAMD ArduinoCore",id:"\u66f4\u65b0seeed-samd-arduinocore",level:2},{value:"\u5e93\u7684\u5b89\u88c5",id:"\u5e93\u7684\u5b89\u88c5",level:2},{value:"\u5982\u4f55\u4eceArduino\u5e93\u7ba1\u7406\u5668\u5b89\u88c5\u5e93",id:"\u5982\u4f55\u4ecearduino\u5e93\u7ba1\u7406\u5668\u5b89\u88c5\u5e93",level:3},{value:"\u84dd\u7259\u6240\u9700\u7684\u5e93",id:"\u84dd\u7259\u6240\u9700\u7684\u5e93",level:3}],d={toc:u},m="wrapper";function s(e){let{components:r,...t}=e;return(0,i.yg)(m,(0,n.A)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"bluetooth-\u6982\u8ff0"},"Bluetooth \u6982\u8ff0"),(0,i.yg)("p",null,"\u672cwiki\u4ecb\u7ecd\u4e86\u5982\u4f55\u66f4\u65b0Wio Terminal\u4e0a\u65e0\u7ebf\u6838\u5fc3Realtek RTL8720\u7684\u6700\u65b0\u56fa\u4ef6\uff0c\u4ee5\u53ca\u5b89\u88c5\u6240\u6709Wio Terminal\u7684\u4f9d\u8d56\u5e93\uff0c\u4ee5\u5b9e\u73b0\u84dd\u7259\u8fde\u63a5\u3002"),(0,i.yg)("h2",{id:"\u66f4\u65b0\u65e0\u7ebf\u6838\u5fc3\u56fa\u4ef6"},"\u66f4\u65b0\u65e0\u7ebf\u6838\u5fc3\u56fa\u4ef6"),(0,i.yg)("p",null,"\u8bf7\u6309\u7167 ",(0,i.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-Network-Overview/#update-the-wireless-core-firmware"},"\u6b64\u6307\u5357")," \u6765\u66f4\u65b0Wio Terminal\u4e0a\u7684\u65e0\u7ebf\u6838\u5fc3\u56fa\u4ef6\u3002"),(0,i.yg)("p",null,":::\u6ce8\n\u6b64\u56fa\u4ef6\u5141\u8bb8Wi-Fi\u548c\u84dd\u7259\u540c\u65f6\u5de5\u4f5c\uff01\n:::"),(0,i.yg)("h2",{id:"\u66f4\u65b0seeed-samd-arduinocore"},"\u66f4\u65b0Seeed SAMD ArduinoCore"),(0,i.yg)("p",null,":::\u6ce8\n\u8bf7\u5c06 ",(0,i.yg)("strong",{parentName:"p"},"Seeed SAMD ArduinoCore\u66f4\u65b0\u5230\u6700\u65b0\u7248\u672c\uff081.8.1\uff09"),"!\n:::"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 1:")," \u6253\u5f00 ",(0,i.yg)("strong",{parentName:"p"},"Arduino IDE"),", \u70b9\u51fb ",(0,i.yg)("inlineCode",{parentName:"p"},"Tools")," -> ",(0,i.yg)("inlineCode",{parentName:"p"},"Board")," -> ",(0,i.yg)("inlineCode",{parentName:"p"},"Boards Manager"),", \u5728\u641c\u7d22\u6846\u4e2d\u641c\u7d22 ",(0,i.yg)("strong",{parentName:"p"},"Wio Terminal")," \u3002")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 2:")," \u786e\u4fdd\u5df2\u5b89\u88c5\u6700\u65b0\u7248\u672c\uff081.8.1\uff09\u3002\u5982\u679c\u6ca1\u6709\uff0c\u8bf7\u70b9\u51fb ",(0,i.yg)("inlineCode",{parentName:"p"},"Select version")," \u4e0b\u62c9\u83dc\u5355\uff0c\u9009\u62e9\u6700\u65b0\u7248\u672c\u7136\u540e\u70b9\u51fbk ",(0,i.yg)("inlineCode",{parentName:"p"},"Install"),"\u3002"))),(0,i.yg)("p",{style:{textalign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/ArduinoCore_new.png",alt:"pir",width:850,height:"auto"})),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"\u60a8\u4e5f\u53ef\u4ee5\u5728 ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/ArduinoCore-samd"},(0,i.yg)("strong",{parentName:"a"},"\u6b64\u5904")),"\u627e\u5230Seeed SAMD ArduinoCore\u7684\u6e90\u4ee3\u7801\u3002")),(0,i.yg)("h2",{id:"\u5e93\u7684\u5b89\u88c5"},"\u5e93\u7684\u5b89\u88c5"),(0,i.yg)("p",null,"\u4e3a\u4e86\u5b9e\u73b0Wio Terminal\u7684\u84dd\u7259\u8fde\u63a5\uff0c\u9700\u8981\u5b89\u88c5\u4e00\u4e9bArduino\u5e93\u3002\u6211\u4eec\u5df2\u7ecf\u5728 ",(0,i.yg)("strong",{parentName:"p"},"Arduino Library Manager"),"\u3002 \u4e2d\u5305\u542b\u4e86\u6240\u6709\u4e0e\u65e0\u7ebf\u76f8\u5173\u7684Wio Terminal\u5e93\u3002\u56e0\u6b64\uff0c\u60a8\u53ea\u9700\u5728Arduino IDE\u4e2d\u6253\u5f00Arduino\u5e93\u7ba1\u7406\u5668\uff0c\u5e76\u641c\u7d22\u9700\u8981\u7684\u5e93\u5e76\u8f7b\u677e\u5b89\u88c5\u5b83\u4eec\uff01"),(0,i.yg)("h3",{id:"\u5982\u4f55\u4ecearduino\u5e93\u7ba1\u7406\u5668\u5b89\u88c5\u5e93"},"\u5982\u4f55\u4eceArduino\u5e93\u7ba1\u7406\u5668\u5b89\u88c5\u5e93"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 1:")," \u6253\u5f00 ",(0,i.yg)("strong",{parentName:"p"},"Arduino IDE"),", \u70b9\u51fb ",(0,i.yg)("inlineCode",{parentName:"p"},"Sketch")," -> ",(0,i.yg)("inlineCode",{parentName:"p"},"Include Library")," -> ",(0,i.yg)("inlineCode",{parentName:"p"},"Manage Libraries..."))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 2:")," \u8f93\u5165\u6211\u4eec\u9700\u8981\u7684 ",(0,i.yg)("strong",{parentName:"p"},"name of the library")," \u5e76\u4ece\u4e0b\u62c9\u83dc\u5355\u4e2d\u9009\u62e9 ",(0,i.yg)("strong",{parentName:"p"},"latest version")," \uff08\u5982\u679c\u6709\uff09\u3002")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 3:")," \u70b9\u51fb ",(0,i.yg)("strong",{parentName:"p"},"Install"),"\u3002"))),(0,i.yg)("p",{style:{textalign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/library_install_1.jpg",alt:"pir",width:870,height:"auto"})),(0,i.yg)("h3",{id:"\u84dd\u7259\u6240\u9700\u7684\u5e93"},"\u84dd\u7259\u6240\u9700\u7684\u5e93"),(0,i.yg)("p",null,"\u6211\u4eec\u9700\u8981\u4ee5\u4e0b\u5e93\u6765\u5f00\u59cb\u4f7f\u7528Wio Terminal\u4e0a\u7684\u84dd\u7259\u3002\u60a8\u53ef\u4ee5\u5728Arduino\u5e93\u7ba1\u7406\u5668\u7684\u641c\u7d22\u6846\u4e2d\u8f93\u5165\u5e93\u540d\u6765\u641c\u7d22\u8fd9\u4e9b\u5e93\u3002"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_rpcBLE"},(0,i.yg)("strong",{parentName:"a"},"Seeed_Arduino_rpcBLE"))," - \u641c\u7d22 ",(0,i.yg)("inlineCode",{parentName:"p"},'"seeed rpcble"'))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_rpcUnified"},(0,i.yg)("strong",{parentName:"a"},"Seeed_Arduino_rpcUnified"))," - \u641c\u7d22 ",(0,i.yg)("inlineCode",{parentName:"p"},'"seeed rpcunified"')))))}s.isMDXComponent=!0}}]);