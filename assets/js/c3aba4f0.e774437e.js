"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[18949],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var g=r.createContext({}),d=function(e){var t=r.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(g.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,g=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=d(n),m=a,y=s["".concat(g,".").concat(m)]||s[m]||u[m]||l;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var g in t)hasOwnProperty.call(t,g)&&(o[g]=t[g]);o.originalType=e,o[s]="string"==typeof e?e:a,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},59235:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var r=n(58168),a=(n(96540),n(15680));const l={title:"Grove - \u7ea2\u5916\u53d1\u5c04\u5668",description:"Grove - \u7ea2\u5916\u53d1\u5c04\u5668",keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Grove-Infrared_Emitter/",slug:"/cn/Grove-Infrared_Emitter",last_update:{date:"03/20/2024",author:"WuFeifei"}},i=void 0,o={unversionedId:"zh-CN/Sensor/Grove/Grove_Accessories/Actuator/cn-Grove-Infrared_Emitter",id:"zh-CN/Sensor/Grove/Grove_Accessories/Actuator/cn-Grove-Infrared_Emitter",title:"Grove - \u7ea2\u5916\u53d1\u5c04\u5668",description:"Grove - \u7ea2\u5916\u53d1\u5c04\u5668",source:"@site/docs/zh-CN/Sensor/Grove/Grove_Accessories/Actuator/cn-Grove-Infrared_Emitter.md",sourceDirName:"zh-CN/Sensor/Grove/Grove_Accessories/Actuator",slug:"/cn/Grove-Infrared_Emitter",permalink:"/cn/Grove-Infrared_Emitter",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/zh-CN/Sensor/Grove/Grove_Accessories/Actuator/cn-Grove-Infrared_Emitter.md",tags:[],version:"current",lastUpdatedBy:"WuFeifei",lastUpdatedAt:1710892800,formattedLastUpdatedAt:"Mar 20, 2024",frontMatter:{title:"Grove - \u7ea2\u5916\u53d1\u5c04\u5668",description:"Grove - \u7ea2\u5916\u53d1\u5c04\u5668",keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Grove-Infrared_Emitter/",slug:"/cn/Grove-Infrared_Emitter",last_update:{date:"03/20/2024",author:"WuFeifei"}},sidebar:"CNSidebar",previous:{title:"Grove - I2C\u7535\u673a\u9a71\u52a8\u5668\uff08L298P\uff09",permalink:"/cn/Grove-I2C-Motor-Driver-L298P"},next:{title:"Grove - LED\u77e9\u9635\u9a71\u52a8\u5668v1.0",permalink:"/cn/Grove-LED_Matrix_Driver_v1.0"}},g={},d=[{value:"\u7248\u672c",id:"\u7248\u672c",level:2},{value:"\u5e94\u7528",id:"\u5e94\u7528",level:2},{value:"\u89c4\u683c",id:"\u89c4\u683c",level:2},{value:"\u652f\u6301\u7684\u5e73\u53f0",id:"\u652f\u6301\u7684\u5e73\u53f0",level:2},{value:"\u5165\u95e8\u6307\u5357",id:"\u5165\u95e8\u6307\u5357",level:2},{value:"\u73a9\u8f6c Arduino",id:"\u73a9\u8f6c-arduino",level:3},{value:"\u786c\u4ef6",id:"\u786c\u4ef6",level:4},{value:"\u8f6f\u4ef6",id:"\u8f6f\u4ef6",level:4},{value:"\u5728\u7ebf\u539f\u7406\u56fe\u67e5\u770b\u5668",id:"\u5728\u7ebf\u539f\u7406\u56fe\u67e5\u770b\u5668",level:2},{value:"\u8d44\u6e90",id:"\u8d44\u6e90",level:2},{value:"\u9879\u76ee",id:"\u9879\u76ee",level:2},{value:"\u6280\u672f\u652f\u6301\u4e0e\u4ea7\u54c1\u8ba8\u8bba",id:"\u6280\u672f\u652f\u6301\u4e0e\u4ea7\u54c1\u8ba8\u8bba",level:2}],p={toc:d},s="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(s,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Infrared_Emitter/img/main.jpg",alt:null})),(0,a.yg)("p",null,"\u7ea2\u5916\u7ebf\u53d1\u5c04\u5668\u7528\u4e8e\u901a\u8fc7\u7ea2\u5916\u7ebfLED\u4f20\u8f93\u7ea2\u5916\u7ebf\u4fe1\u53f7\uff0c\u800c",(0,a.yg)("strong",{parentName:"p"},"\u7ea2\u5916\u7ebf\u63a5\u6536\u5668"),"\u5219\u7528\u4e8e\u5728\u53e6\u4e00\u4fa7\u63a5\u6536\u4fe1\u53f7\u3002\u7ea2\u5916\u7ebfLED\u4e0e\u5176\u4ed6\u4efb\u4f55LED\u4e00\u6837\uff0c\u5176\u989c\u8272\u4ee5940nm\u4e3a\u4e2d\u5fc3\u3002\u6211\u4eec\u4e0d\u4ec5\u53ef\u4ee5\u4f7f\u7528\u53d1\u5c04\u5668\u4f20\u8f93\u6570\u636e\u6216\u547d\u4ee4\uff0c\u8fd8\u53ef\u4ee5\u4f7f\u7528Arduino\u6a21\u62df\u9065\u63a7\u5668\u6765\u63a7\u5236\u5bb6\u7528\u7535\u5668\u3002\u7ea2\u5916\u7ebf\u53d1\u5c04\u5668\u53ef\u4ee5\u53ef\u9760\u5730\u4f20\u8f93\u6700\u8fdc\u8fbe10\u7c73\u7684\u4fe1\u53f7\u3002\u8d85\u8fc710\u7c73\uff0c\u63a5\u6536\u5668\u53ef\u80fd\u65e0\u6cd5\u63a5\u6536\u5230\u4fe1\u53f7\u3002\u6211\u4eec\u7ecf\u5e38\u5c06\u4e24\u4e2aGrove\u6a21\u5757\u2014\u2014",(0,a.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Grove-Infrared_Receiver"},"\u7ea2\u5916\u7ebf\u63a5\u6536\u5668"),"\u548cGrove - \u7ea2\u5916\u7ebf\u53d1\u5c04\u5668\u4e00\u8d77\u4f7f\u7528\u3002"),(0,a.yg)("p",{style:{}},(0,a.yg)("a",{href:"https://www.seeedstudio.com/Grove-Infrared-Emitter-p-993.html",target:"_blank"},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png",width:210,height:41,border:0}))),(0,a.yg)("h2",{id:"\u7248\u672c"},"\u7248\u672c"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"\u4ea7\u54c1\u7248\u672c"),(0,a.yg)("th",{parentName:"tr",align:null},"\u66f4\u6539\u5185\u5bb9"),(0,a.yg)("th",{parentName:"tr",align:null},"\u53d1\u5e03\u65e5\u671f"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Grove - \u7ea2\u5916\u7ebf\u53d1\u5c04\u5668 v1.0"),(0,a.yg)("td",{parentName:"tr",align:null},"\u521d\u59cb\u7248\u672c"),(0,a.yg)("td",{parentName:"tr",align:null},"2015\u5e7411\u670801\u65e5")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Grove - \u7ea2\u5916\u7ebf\u53d1\u5c04\u5668 v1.1"),(0,a.yg)("td",{parentName:"tr",align:null},"\u66f4\u6539\u7ea2\u5916\u7ebf\u53d1\u5c04\u7ba1\u7684\u4f4d\u7f6e"),(0,a.yg)("td",{parentName:"tr",align:null},"2016\u5e7407\u670824\u65e5")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Grove - \u7ea2\u5916\u7ebf\u53d1\u5c04\u5668 v1.2"),(0,a.yg)("td",{parentName:"tr",align:null},"\u66f4\u6539C1\u7684\u503c\u4ee5\u4f7f\u7535\u6e90\u66f4\u7a33\u5b9a"),(0,a.yg)("td",{parentName:"tr",align:null},"2016\u5e7412\u670814\u65e5")))),(0,a.yg)("h2",{id:"\u5e94\u7528"},"\u5e94\u7528"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u9ad8\u529f\u7387\u8981\u6c42\u7684\u7ea2\u5916\u9065\u63a7\u5668"),(0,a.yg)("li",{parentName:"ul"},"\u81ea\u7531\u7a7a\u6c14\u4f20\u8f93\u7cfb\u7edf"),(0,a.yg)("li",{parentName:"ul"},"\u5149\u5b66\u8ba1\u6570\u5668\u548c\u8bfb\u5361\u5668\u7684\u7ea2\u5916\u5149\u6e90")),(0,a.yg)("h2",{id:"\u89c4\u683c"},"\u89c4\u683c"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,a.yg)("th",{parentName:"tr",align:null},"\u503c/\u8303\u56f4"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"\u5de5\u4f5c\u7535\u538b"),(0,a.yg)("td",{parentName:"tr",align:null},"3.3/5V")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"\u5cf0\u503c\u6ce2\u957f"),(0,a.yg)("td",{parentName:"tr",align:null},"940nm")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"\u534a\u5f3a\u5ea6\u89d2"),(0,a.yg)("td",{parentName:"tr",align:null},"\u03d5 = \xb1 17\xb0")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"\u8f90\u5c04\u5f3a\u5ea6"),(0,a.yg)("td",{parentName:"tr",align:null},"72 mW/sr")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"\u8ddd\u79bb"),(0,a.yg)("td",{parentName:"tr",align:null},"10 \u7c73(\u6700\u5927)")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"\u5de5\u4f5c\u6e29\u5ea6"),(0,a.yg)("td",{parentName:"tr",align:null},"-40\u2103 \u81f3 +80\u2103")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"\u5c3a\u5bf8"),(0,a.yg)("td",{parentName:"tr",align:null},"20mmX20mm")))),(0,a.yg)("p",null,":::\u63d0\u793a\n\u6709\u5173Grove\u6a21\u5757\u7684\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,a.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Grove_System/"},"Grove\u7cfb\u7edf"),"\n:::"),(0,a.yg)("h2",{id:"\u652f\u6301\u7684\u5e73\u53f0"},"\u652f\u6301\u7684\u5e73\u53f0"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Arduino"),(0,a.yg)("th",{parentName:"tr",align:null},"\u6811\u8393\u6d3e"),(0,a.yg)("th",{parentName:"tr",align:null}),(0,a.yg)("th",{parentName:"tr",align:null}),(0,a.yg)("th",{parentName:"tr",align:null}))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:null})),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg",alt:null})),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg",alt:null})),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg",alt:null})),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg",alt:null}))))),(0,a.yg)("p",null,":::\u6ce8\u610f\n\u4e0a\u9762\u63d0\u5230\u7684\u652f\u6301\u7684\u5e73\u53f0\u662f\u8be5\u6a21\u5757\u8f6f\u4ef6\u6216\u7406\u8bba\u517c\u5bb9\u6027\u7684\u4e00\u4e2a\u6307\u6807\u3002\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u53ea\u63d0\u4f9bArduino\u5e73\u53f0\u7684\u8f6f\u4ef6\u5e93\u6216\u4ee3\u7801\u793a\u4f8b\u3002\u4e0d\u53ef\u80fd\u4e3a\u6240\u6709\u53ef\u80fd\u7684MCU\u5e73\u53f0\u63d0\u4f9b\u8f6f\u4ef6\u5e93/\u6f14\u793a\u4ee3\u7801\u3002\u56e0\u6b64\uff0c\u7528\u6237\u5fc5\u987b\u7f16\u5199\u81ea\u5df1\u7684\u8f6f\u4ef6\u5e93\u3002"),(0,a.yg)("h2",{id:"\u5165\u95e8\u6307\u5357"},"\u5165\u95e8\u6307\u5357"),(0,a.yg)("p",null,"Grove - \u7ea2\u5916\u7ebf\u53d1\u5c04\u5668\u53ef\u4ee5\u53d1\u9001\u6570\u636e\uff0c\u800cGrove - \u7ea2\u5916\u7ebf\u63a5\u6536\u5668\u5c06\u63a5\u6536\u8fd9\u4e9b\u6570\u636e\u3002"),(0,a.yg)("h3",{id:"\u73a9\u8f6c-arduino"},"\u73a9\u8f6c Arduino"),(0,a.yg)("p",null,":::\u6ce8\u610f\n\u5982\u679c\u4f60\u7b2c\u4e00\u6b21\u4f7f\u7528Arduino\uff0c\u6211\u4eec\u5f3a\u70c8\u5efa\u8bae\u4f60\u5728\u5f00\u59cb\u524d\u5148\u67e5\u770b",(0,a.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Getting_Started_with_Arduino/"},"Arduino\u5165\u95e8\u6307\u5357"),"\u3002\n:::"),(0,a.yg)("h4",{id:"\u786c\u4ef6"},"\u786c\u4ef6"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"\u6b65\u9aa4 1.")," \u51c6\u5907\u4ee5\u4e0b\u7269\u54c1\uff1a")),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,a.yg)("th",{parentName:"tr",align:null},"\u57fa\u7840\u5e95\u677f"),(0,a.yg)("th",{parentName:"tr",align:null},"Grove - \u7ea2\u5916\u53d1\u5c04\u5668"),(0,a.yg)("th",{parentName:"tr",align:null},"Grove - \u7ea2\u5916\u63a5\u6536\u5668"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduinoX2.png",alt:"enter image description here"})),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/baseshiledX2.png",alt:"enter image description here"})),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove-Infrared_Emitter/img/thumbnail.jpg",alt:"enter image description here"})),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove-Infrared_Receiver/img/little.jpg",alt:"enter image description here"}))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html"},"\u7acb\u5373\u83b7\u53d6")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html"},"\u7acb\u5373\u83b7\u53d6")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Infrared-Emitter-p-993.html"},"\u7acb\u5373\u83b7\u53d6")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Infrared-Receiver-p-994.html"},"\u7acb\u5373\u83b7\u53d6"))))),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 2.")," \u5c06Grove - \u7ea2\u5916\u53d1\u5c04\u5668\u8fde\u63a5\u5230\u4e00\u5757Grove\u57fa\u7840\u5e95\u677f\u7684",(0,a.yg)("strong",{parentName:"p"},"D3"),"\u7aef\u53e3\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 3."),"  \u5c06Grove - \u7ea2\u5916\u63a5\u6536\u5668\u8fde\u63a5\u5230\u53e6\u4e00\u5757Grove\u57fa\u7840\u5e95\u677f\u7684",(0,a.yg)("strong",{parentName:"p"},"D2"),"\u7aef\u53e3\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 4.")," \u5c06Grove\u57fa\u7840\u5e95\u677f\u63d2\u5165Seeeduino\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 5.")," \u901a\u8fc7USB\u7535\u7f06\u5c06Seeeduino\u8fde\u63a5\u5230PC\u3002"))),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Infrared_Emitter/img/connect.jpg",alt:null})),(0,a.yg)("p",null,":::\u6ce8\u610f\n\u5982\u679c\u6211\u4eec\u6ca1\u6709Grove\u57fa\u7840\u5e95\u677f\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u76f4\u63a5\u5c06\u6b64\u6a21\u5757\u8fde\u63a5\u5230Seeeduino\uff0c\u5982\u4e0b\u6240\u793a\u3002\n:::"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Seeeduino"),(0,a.yg)("th",{parentName:"tr",align:null},"Grove - \u7ea2\u5916\u53d1\u5c04\u5668"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"5V"),(0,a.yg)("td",{parentName:"tr",align:null},"\u7ea2\u8272")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"GND"),(0,a.yg)("td",{parentName:"tr",align:null},"\u9ed1\u8272")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"\u672a\u8fde\u63a5"),(0,a.yg)("td",{parentName:"tr",align:null},"\u767d\u8272")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"D3"),(0,a.yg)("td",{parentName:"tr",align:null},"\u9ec4\u8272")))),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Seeeduino"),(0,a.yg)("th",{parentName:"tr",align:null},"Grove - \u7ea2\u5916\u63a5\u6536\u5668"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"5V"),(0,a.yg)("td",{parentName:"tr",align:null},"\u7ea2\u8272")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"GND"),(0,a.yg)("td",{parentName:"tr",align:null},"\u9ed1\u8272")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Not Conencted"),(0,a.yg)("td",{parentName:"tr",align:null},"\u767d\u8272")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"D2"),(0,a.yg)("td",{parentName:"tr",align:null},"\u9ec4\u8272")))),(0,a.yg)("h4",{id:"\u8f6f\u4ef6"},"\u8f6f\u4ef6"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 1.")," \u4eceGithub\u4e0b\u8f7d ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_IR"},"Seeed_Arduino_IR"),"\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 2.")," \u53c2\u8003",(0,a.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/How_to_install_Arduino_Library"},"\u5982\u4f55\u5b89\u88c5\u5e93"),"\u6765\u4e3aArduino\u5b89\u88c5\u5e93\u3002"))),(0,a.yg)("p",null,"\u5c06\u4ee5\u4e0b",(0,a.yg)("strong",{parentName:"p"},"\u53d1\u9001\u793a\u4f8b\u4ee3\u7801"),"\u590d\u5236\u5230Arduino IDE\u4e2d\uff1a"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u53d1\u9001\u793a\u4f8b\u4ee3\u7801:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-c++"},'/* send.ino Example sketch for IRLib2\n *  Illustrates how to send a code.\n */\n#include <IRLibSendBase.h>    // First include the send base\n//Now include only the protocols you wish to actually use.\n//The lowest numbered protocol should be first but remainder \n//can be any order.\n#include <IRLib_P01_NEC.h>    \n#include <IRLib_P02_Sony.h>   \n#include <IRLibCombo.h>     // After all protocols, include this\n// All of the above automatically creates a universal sending\n// class called "IRsend" containing only the protocols you want.\n// Now declare an instance of that sender.\n\nIRsend mySender;\n\n#define IR_SEND_PWM_PIN D3\n\nvoid setup() {\n  Serial.begin(9600);\n  delay(2000); while (!Serial); //delay for Leonardo\n  Serial.println(F("Every time you press a key is a serial monitor we will send."));\n}\n\nvoid loop() {\n  if (Serial.read() != -1) {\n    //send a code every time a character is received from the \n    // serial port. You could modify this sketch to send when you\n    // push a button connected to an digital input pin.\n    //Substitute values and protocols in the following statement\n    // for device you have available.\n    mySender.send(SONY,0xa8bca, 20);//Sony DVD power A8BCA, 20 bits\n    //mySender.send(NEC,0x61a0f00f,0);//NEC TV power button=0x61a0f00f\n    Serial.println(F("Sent signal."));\n  }\n}\n\n')),(0,a.yg)("p",null,"\u5c06\u4ee5\u4e0b",(0,a.yg)("strong",{parentName:"p"},"\u63a5\u6536\u793a\u4f8b\u4ee3\u7801"),"\u590d\u5236\u5230Arduino IDE\u4e2d\uff1a"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u63a5\u6536\u793a\u4f8b\u4ee3\u7801:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},'/* rawR&cv.ino Example sketch for IRLib2\n *  Illustrate how to capture raw timing values for an unknow protocol.\n *  You will capture a signal using this sketch. It will output data the \n *  serial monitor that you can cut and paste into the "rawSend.ino"\n *  sketch.\n */\n// Recommend only use IRLibRecvPCI or IRLibRecvLoop for best results\n#include <IRLibRecvPCI.h> \n\nIRrecvPCI myReceiver(2);//pin number for the receiver\n\nvoid setup() {\n  Serial.begin(9600);\n  delay(2000); while (!Serial); //delay for Leonardo\n  myReceiver.enableIRIn(); // Start the receiver\n  Serial.println(F("Ready to receive IR signals"));\n}\n\nvoid loop() {\n  //Continue looping until you get a complete signal received\n  if (myReceiver.getResults()) { \n    Serial.println(F("Do a cut-and-paste of the following lines into the "));\n    Serial.println(F("designated location in rawSend.ino"));\n    Serial.print(F("\\n#define RAW_DATA_LEN "));\n    Serial.println(recvGlobal.recvLength,DEC);\n    Serial.print(F("uint16_t rawData[RAW_DATA_LEN]={\\n\\t"));\n    for(bufIndex_t i=1;i<recvGlobal.recvLength;i++) {\n      Serial.print(recvGlobal.recvBuffer[i],DEC);\n      Serial.print(F(", "));\n      if( (i % 8)==0) Serial.print(F("\\n\\t"));\n    }\n    Serial.println(F("1000};"));//Add arbitrary trailing space\n    myReceiver.enableIRIn();      //Restart receiver\n  }\n}\n')),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"\u6b65\u9aa4 7.")," \u6253\u5f00Arduino IDE\u7684",(0,a.yg)("strong",{parentName:"li"},"\u4e32\u884c\u76d1\u89c6\u5668"),"\uff0c\u70b9\u51fb",(0,a.yg)("strong",{parentName:"li"},"\u5de5\u5177-> \u4e32\u884c\u76d1\u89c6\u5668"),"\u3002 \u6216\u8005\u540c\u65f6\u6309\u4e0b++ctrl+shift+m++\u952e\u3002")),(0,a.yg)("p",null,"\u5bf9\u4e8e",(0,a.yg)("strong",{parentName:"p"},"\u53d1\u9001\u793a\u4f8b"),"\uff0c\u4e32\u884c\u5e94\u8be5\u5982\u4e0b\u6240\u793a\uff1a"),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Infrared_Emitter/img/send.png"})),(0,a.yg)("p",null,"\u5bf9\u4e8e",(0,a.yg)("strong",{parentName:"p"},"\u63a5\u6536\u793a\u4f8b"),"\uff0c\u4e32\u884c\u76d1\u89c6\u5668\u5e94\u8be5\u5982\u4e0b\u6240\u793a\uff1a"),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Infrared_Emitter/img/recv.png"})),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"\u5bf9\u4e8e\u5e93\u7684\u66f4\u9ad8\u7ea7\u7528\u6cd5\uff0c\u8bf7\u53c2\u9605 ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_IR"},"Seeed_Arduino_IR"),"\u3002")),(0,a.yg)("h2",{id:"\u5728\u7ebf\u539f\u7406\u56fe\u67e5\u770b\u5668"},"\u5728\u7ebf\u539f\u7406\u56fe\u67e5\u770b\u5668"),(0,a.yg)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-Infrared_Emitter/res/Grove-Infrared_Emitter_eagle_files.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,a.yg)("h2",{id:"\u8d44\u6e90"},"\u8d44\u6e90"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"[Zip]"),"  ",(0,a.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Infrared_Emitter/res/Grove-Infrared_Emitter_eagle_files.zip"},"Grove-\u7ea2\u5916\u7ebf\u53d1\u5c04\u5668 eagle \u6587\u4ef6")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"[Lib]"),"  ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Seeed_Arduino_IRSendRev"},"\u7ea2\u5916\u53d1\u9001\u548c\u63a5\u6536\u5e93")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"[Pdf]"),"  ",(0,a.yg)("a",{parentName:"li",href:"http://www.vishay.com/docs/81010/tsal6200.pdf"},"TSAL6200 \u6570\u636e\u624b\u518c"))),(0,a.yg)("h2",{id:"\u9879\u76ee"},"\u9879\u76ee"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"IR LaunchPad \u5230 LaunchPad \u901a\u4fe1"),"\uff1a\u4f7f\u7528 Grove \u7ea2\u5916\u53d1\u5c04\u5668\u548c\u63a5\u6536\u5668\u4ece\u4e00\u4e2a LaunchPad \u5411\u53e6\u4e00\u4e2a\u53d1\u9001\u6587\u672c\uff01"),(0,a.yg)("iframe",{frameborder:"0",height:"327.5",scrolling:"no",src:"https://www.hackster.io/ctroberts/ir-launchpad-to-launchpad-communication-0dd109/embed",width:"350"}),(0,a.yg)("h2",{id:"\u6280\u672f\u652f\u6301\u4e0e\u4ea7\u54c1\u8ba8\u8bba"},"\u6280\u672f\u652f\u6301\u4e0e\u4ea7\u54c1\u8ba8\u8bba"),(0,a.yg)("p",null,"\u611f\u8c22\u60a8\u9009\u62e9\u6211\u4eec\u7684\u4ea7\u54c1\uff01\u6211\u4eec\u5728\u6b64\u4e3a\u60a8\u63d0\u4f9b\u4e0d\u540c\u7684\u652f\u6301\uff0c\u4ee5\u786e\u4fdd\u60a8\u4f7f\u7528\u6211\u4eec\u7684\u4ea7\u54c1\u65f6\u5c3d\u53ef\u80fd\u987a\u5229\u3002\u6211\u4eec\u63d0\u4f9b\u591a\u79cd\u6c9f\u901a\u6e20\u9053\uff0c\u4ee5\u6ee1\u8db3\u4e0d\u540c\u7684\u504f\u597d\u548c\u9700\u6c42\u3002"),(0,a.yg)("div",{class:"button_tech_support_container"},(0,a.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,a.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,a.yg)("div",{class:"button_tech_support_container"},(0,a.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,a.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}u.isMDXComponent=!0}}]);