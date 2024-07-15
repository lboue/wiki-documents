"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[25463],{15680:(e,r,t)=>{t.d(r,{xA:()=>p,yg:()=>m});var l=t(96540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);r&&(l=l.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,l)}return t}function n(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,l,a=function(e,r){if(null==e)return{};var t,l,a={},i=Object.keys(e);for(l=0;l<i.length;l++)t=i[l],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)t=i[l],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=l.createContext({}),g=function(e){var r=l.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):n(n({},r),e)),t},p=function(e){var r=g(e.components);return l.createElement(s.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return l.createElement(l.Fragment,{},r)}},y=l.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=g(t),y=a,m=u["".concat(s,".").concat(y)]||u[y]||d[y]||i;return t?l.createElement(m,n(n({ref:r},p),{},{components:t})):l.createElement(m,n({ref:r},p))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,n=new Array(i);n[0]=y;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o[u]="string"==typeof e?e:a,n[1]=o;for(var g=2;g<i;g++)n[g]=t[g];return l.createElement.apply(null,n)}return l.createElement.apply(null,t)}y.displayName="MDXCreateElement"},66856:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>n,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>g});var l=t(58168),a=(t(96540),t(15680));const i={title:"Grove - \u4e32\u53e3MP3\u64ad\u653e\u5668",description:"Grove - \u4e32\u53e3MP3\u64ad\u653e\u5668",keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Grove-Serial_MP3_Player/",slug:"/cn/Grove-Serial_MP3_Player",last_update:{date:"03/21/2024",author:"WuFeifei"}},n=void 0,o={unversionedId:"zh-CN/Sensor/Grove/Grove_Accessories/Actuator/cn-Grove-Serial_MP3_Player",id:"zh-CN/Sensor/Grove/Grove_Accessories/Actuator/cn-Grove-Serial_MP3_Player",title:"Grove - \u4e32\u53e3MP3\u64ad\u653e\u5668",description:"Grove - \u4e32\u53e3MP3\u64ad\u653e\u5668",source:"@site/docs/zh-CN/Sensor/Grove/Grove_Accessories/Actuator/cn-Grove-Serial_MP3_Player.md",sourceDirName:"zh-CN/Sensor/Grove/Grove_Accessories/Actuator",slug:"/cn/Grove-Serial_MP3_Player",permalink:"/cn/Grove-Serial_MP3_Player",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/zh-CN/Sensor/Grove/Grove_Accessories/Actuator/cn-Grove-Serial_MP3_Player.md",tags:[],version:"current",lastUpdatedBy:"WuFeifei",lastUpdatedAt:1710979200,formattedLastUpdatedAt:"Mar 21, 2024",frontMatter:{title:"Grove - \u4e32\u53e3MP3\u64ad\u653e\u5668",description:"Grove - \u4e32\u53e3MP3\u64ad\u653e\u5668",keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Grove-Serial_MP3_Player/",slug:"/cn/Grove-Serial_MP3_Player",last_update:{date:"03/21/2024",author:"WuFeifei"}},sidebar:"CNSidebar",previous:{title:"Grove - \u5149\u8026\u7ee7\u7535\u5668\uff08M281\uff09",permalink:"/cn/Grove-Optocoupler_Relay-M281"},next:{title:"Grove - \u4f3a\u670d\u7535\u673a",permalink:"/cn/Grove-Servo"}},s={},g=[{value:"<strong>\u529f\u80fd\u7279\u6027</strong>",id:"\u529f\u80fd\u7279\u6027",level:2},{value:"\u652f\u6301\u7684\u5e73\u53f0",id:"\u652f\u6301\u7684\u5e73\u53f0",level:2},{value:"<strong>\u786c\u4ef6\u6982\u8ff0</strong>",id:"\u786c\u4ef6\u6982\u8ff0",level:2},{value:"\u4e0e Arduino \u914d\u5408\u4f7f\u7528",id:"\u4e0e-arduino-\u914d\u5408\u4f7f\u7528",level:2},{value:"\u786c\u4ef6",id:"\u786c\u4ef6",level:3},{value:"\u8f6f\u4ef6",id:"\u8f6f\u4ef6",level:3},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2},{value:"\u5728\u7ebf\u539f\u7406\u56fe\u67e5\u770b\u5668",id:"\u5728\u7ebf\u539f\u7406\u56fe\u67e5\u770b\u5668",level:2},{value:"\u8d44\u6e90",id:"\u8d44\u6e90",level:2},{value:"\u6280\u672f\u652f\u6301\u4e0e\u4ea7\u54c1\u8ba8\u8bba",id:"\u6280\u672f\u652f\u6301\u4e0e\u4ea7\u54c1\u8ba8\u8bba",level:2}],p={toc:g},u="wrapper";function d(e){let{components:r,...t}=e;return(0,a.yg)(u,(0,l.A)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/grove-serial-mp3-player-p-1542.html"},(0,a.yg)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Grove-Serial_MP3_Player/img/Mp3sensor_02.jpg",alt:null}))),(0,a.yg)("p",null,"Grove-Serial MP3 Player \u662f\u4e00\u79cd\u7b80\u5355\u7684 MP3 \u64ad\u653e\u5668\u8bbe\u5907\uff0c\u5176\u8bbe\u8ba1\u57fa\u4e8e\u9ad8\u8d28\u91cf\u7684 MP3 \u97f3\u9891\u82af\u7247\u2014\u2014WT5001\u3002\u5b83\u652f\u6301 8KHZ~44.1kHZ \u91c7\u6837\u9891\u7387\u7684 MP3 \u548c WAV \u6587\u4ef6\u683c\u5f0f\u3002\u8be5\u4ea7\u54c1\u5177\u6709\u591a\u4e2a\u5916\u8bbe\u7aef\u53e3\uff1a\u4e00\u4e2a\u6807\u51c6\u7684 UART Grove \u63a5\u53e3\uff0c\u4e00\u4e2a\u53cc\u58f0\u9053\u8033\u673a\u63d2\u5b54\uff0c\u4e00\u4e2a\u5916\u90e8\u63a5\u53e3\u4ee5\u53ca\u4e00\u4e2a Micro SD \u5361\u63a5\u53e3\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7\u4e32\u53e3\u5de5\u5177\u5411\u6a21\u5757\u53d1\u9001\u547d\u4ee4\u6765\u63a7\u5236 MP3 \u7684\u64ad\u653e\u72b6\u6001\uff0c\u4f8b\u5982\u5207\u6362\u6b4c\u66f2\u3001\u8c03\u6574\u97f3\u91cf\u548c\u64ad\u653e\u6a21\u5f0f\u7b49\u3002\u867d\u7136\u5b83\u770b\u8d77\u6765\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u6a21\u5757\uff0c\u4f46\u5b83\u62e5\u6709\u5982\u6b64\u5f3a\u5927\u7684\u529f\u80fd\u3002\u60f3\u77e5\u9053\u97f3\u8d28\u5982\u4f55\u5417\uff1f\u5feb\u6765\u4f53\u9a8c\u4e00\u4e0b\u5427\uff01"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/grove-serial-mp3-player-p-1542.html"},(0,a.yg)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png",alt:null}))),(0,a.yg)("h2",{id:"\u529f\u80fd\u7279\u6027"},(0,a.yg)("strong",{parentName:"h2"},"\u529f\u80fd\u7279\u6027")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u6807\u51c6 Grove \u63a5\u53e3"),(0,a.yg)("li",{parentName:"ul"},"\u5f02\u6b65\u4e32\u53e3\u63a7\u5236\u64ad\u653e\u6a21\u5f0f"),(0,a.yg)("li",{parentName:"ul"},"\u5fd9\u72b6\u6001\u6307\u793a\u706f"),(0,a.yg)("li",{parentName:"ul"},"\u590d\u4f4d\u6309\u94ae"),(0,a.yg)("li",{parentName:"ul"},"\u6807\u51c6 Micro SD \u5361\u63a5\u53e3"),(0,a.yg)("li",{parentName:"ul"},"\u652f\u6301 FAT16 \u548c FAT32 \u6587\u4ef6\u7cfb\u7edf")),(0,a.yg)("p",null,":::\u63d0\u793a\n\u66f4\u591a\u5173\u4e8e Grove \u6a21\u5757\u7684\u4fe1\u606f\uff0c\u8bf7\u67e5\u9605 ",(0,a.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Grove_System/"},"Grove \u7cfb\u7edf"),"\n:::"),(0,a.yg)("h2",{id:"\u652f\u6301\u7684\u5e73\u53f0"},"\u652f\u6301\u7684\u5e73\u53f0"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Arduino"),(0,a.yg)("th",{parentName:"tr",align:null},"\u6811\u8393\u6d3e"),(0,a.yg)("th",{parentName:"tr",align:null}),(0,a.yg)("th",{parentName:"tr",align:null}),(0,a.yg)("th",{parentName:"tr",align:null}))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:null})),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg",alt:null})),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg",alt:null})),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg",alt:null})),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg",alt:null}))))),(0,a.yg)("p",null,":::\u8b66\u544a\n\u4e0a\u8ff0\u6240\u63d0\u5230\u7684\u652f\u6301\u5e73\u53f0\u662f\u6a21\u5757\u7684\u8f6f\u4ef6\u6216\u7406\u8bba\u517c\u5bb9\u6027\u7684\u6307\u793a\u3002\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u53ea\u9488\u5bf9 Arduino \u5e73\u53f0\u63d0\u4f9b\u8f6f\u4ef6\u5e93\u6216\u4ee3\u7801\u793a\u4f8b\u3002\u7531\u4e8e\u4e0d\u53ef\u80fd\u4e3a\u6240\u6709\u53ef\u80fd\u7684 MCU \u5e73\u53f0\u63d0\u4f9b\u8f6f\u4ef6\u5e93/\u6f14\u793a\u4ee3\u7801\uff0c\u56e0\u6b64\u7528\u6237\u9700\u8981\u7f16\u5199\u81ea\u5df1\u7684\u8f6f\u4ef6\u5e93\u3002\n:::"),(0,a.yg)("h2",{id:"\u786c\u4ef6\u6982\u8ff0"},(0,a.yg)("strong",{parentName:"h2"},"\u786c\u4ef6\u6982\u8ff0")),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Serial_MP3_Player/img/Mp3_interface.jpg",alt:null})),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u2460\uff1a\u5de6\u58f0\u9053 Grove \u63a5\u53e3\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u2461\uff1a\u8033\u673a\u63a5\u53e3\uff1a3.5mm \u8033\u673a"),(0,a.yg)("li",{parentName:"ul"},"\u2462\uff1a\u53f3\u58f0\u9053 Grove \u63a5\u53e3\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u2463\uff1aWT5001\uff08\u97f3\u9891\u82af\u7247\uff09"),(0,a.yg)("li",{parentName:"ul"},"\u2464\uff1aLED \u6307\u793a\u706f\uff1a\u64ad\u653e\u97f3\u4e50\u65f6 LED \u4eae\u8d77\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u2465\uff1aUART Grove \u63a5\u53e3"),(0,a.yg)("li",{parentName:"ul"},"\u2466\uff1aSD \u5361\uff1amicro SD \u5361\uff08\u22642GB\uff09")),(0,a.yg)("h2",{id:"\u4e0e-arduino-\u914d\u5408\u4f7f\u7528"},"\u4e0e Arduino \u914d\u5408\u4f7f\u7528"),(0,a.yg)("h3",{id:"\u786c\u4ef6"},"\u786c\u4ef6"),(0,a.yg)("p",null,"Grove - Serial MP3 \u64ad\u653e\u5668\u53ef\u4ee5\u901a\u8fc7 Arduino/Seeeduino \u8fdb\u884c\u63a7\u5236\u3002\u6211\u4eec\u4e3a\u60a8\u63d0\u4f9b\u4e86\u4e00\u4e2a Serial_MP3 \u6d4b\u8bd5\u4ee3\u7801\uff0c\u76f8\u4fe1\u60a8\u53ef\u4ee5\u8f7b\u677e\u5730\u5f00\u59cb\u4f7f\u7528\u3002\u5982\u9700\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u8003\u4ee5\u4e0b\u8bf4\u660e\u3002\u786c\u4ef6\u5b89\u88c5\u6b65\u9aa4\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u5c06 Grove - Serial MP3 \u64ad\u653e\u5668\u8fde\u63a5\u5230 Arduino/Seeeduino \u7684\u6570\u5b57 2 \u7aef\u53e3\u3002\u8bf7\u6ce8\u610f\uff0c\u60a8\u53ef\u4ee5\u66f4\u6539\u5f15\u811a\u53f7\uff0c\u53ea\u9700\u786e\u4fdd\u5728\u4ee3\u7801\u4e2d\u505a\u76f8\u5e94\u7684\u66f4\u6539\u3002\u7136\u540e\u4f7f\u7528 USB \u7ebf\u7f06\u5c06\u60a8\u7684 Arduino/Seeeduino \u8fde\u63a5\u5230\u7535\u8111\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u5c06\u8033\u673a\u63d2\u5165 Grove - Serial MP3 \u64ad\u653e\u5668\u3002\u81f3\u6b64\uff0c\u786c\u4ef6\u90e8\u5206\u5df2\u7ecf\u5b8c\u6210\u3002")),(0,a.yg)("h3",{id:"\u8f6f\u4ef6"},"\u8f6f\u4ef6"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"\u6b65\u9aa4 1.")," \u4ece ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Seeed_Serial_MP3_Player"},"Github")," \u4e0b\u8f7d Grove-MP3 v2.0 \u5e93\u3002"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"\u6b65\u9aa4 2.")," \u53c2\u8003 ",(0,a.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/How_to_install_Arduino_Library"},"\u5982\u4f55\u5b89\u88c5\u5e93")," \u6765\u4e3a Arduino \u5b89\u88c5\u5e93\u3002"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"\u6b65\u9aa4 3.")," \u9009\u62e9 ",(0,a.yg)("strong",{parentName:"li"},"Seeed_Serial_MP3_Player/examples/WT2003S_Terminal_Player")," \u793a\u4f8b\u5e76\u4e0a\u4f20\u5230 Arduino\u3002\u5982\u679c\u60a8\u4e0d\u77e5\u9053\u5982\u4f55\u4e0a\u4f20\u4ee3\u7801\uff0c\u8bf7\u67e5\u770b ",(0,a.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Upload_Code/"},"\u5982\u4f55\u4e0a\u4f20\u4ee3\u7801"),"\u3002"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"\u6b65\u9aa4 4.")," \u6211\u4eec\u5c06\u5728 COM \u7ec8\u7aef\u770b\u5230\u5982\u4e0b\u4fe1\u606f\u3002")),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-MP3_v2.0/img/COM.png",alt:null})),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"\u6b65\u9aa4 5.")," \u8bf7\u8f93\u5165\u76f8\u5173\u547d\u4ee4\u6765\u64ad\u653e\u97f3\u4e50\u3002")),(0,a.yg)("p",null,":::\u63d0\u793a\n\u8be5\u5e93\u652f\u6301 AVR/SAMD/STM32F4 \u8bbe\u5907\uff0c\u65e2\u652f\u6301\u786c\u4ef6\u4e32\u53e3\u4e5f\u652f\u6301\u8f6f\u4ef6\u4e32\u53e3\u3002\n:::"),(0,a.yg)("p",null,"\u6709\u4e24\u79cd\u4e32\u53e3\u3002\u4e00\u79cd\u662f COMSerial\uff0c\u4ee3\u8868\u901a\u4fe1\u7aef\u53e3\uff08\u4e0e Grove-MP3 \u6a21\u5757\u8fde\u63a5\uff09\u3002\u53e6\u4e00\u79cd\u662f ShowSerial\uff0c\u4ee3\u8868\u4e32\u884c\u4fe1\u606f\u663e\u793a\u7aef\u53e3\uff08\u4e0e\u7535\u8111\u8fde\u63a5\uff09\u3002"),(0,a.yg)("p",null,"\u5927\u591a\u6570 Arduino \u5f00\u53d1\u677f\u81f3\u5c11\u6709\u4e00\u4e2a Serial \u7aef\u53e3\uff0c\u6709\u4e9b\u6709\u591a\u4e2a Serial \u7aef\u53e3\uff08\u4f8b\u5982 Arduino Mega \u6709 4 \u4e2a Serial \u7aef\u53e3\uff09\u3002\u5b83\u901a\u8fc7\u6570\u5b57\u5f15\u811a 0\uff08RX\uff09\u548c 1\uff08TX\uff09\u4ee5\u53ca\u901a\u8fc7 USB \u4e0e\u7535\u8111\u901a\u4fe1\u3002\u56e0\u6b64\uff0c\u5982\u679c\u60a8\u5728\u5f15\u811a D0 \u548c D1 \u4e0a\u8fde\u63a5\u4e86 UART \u8bbe\u5907\uff0c\u90a3\u4e48\u5728\u901a\u8fc7 USB \u4e0b\u8f7d\u7a0b\u5e8f\u4e4b\u524d\uff0c\u60a8\u5fc5\u987b\u5c06\u5176\u79fb\u9664\u3002\u5426\u5219\uff0c\u4f1a\u5bfc\u81f4\u4e0a\u4f20\u5931\u8d25\u3002\u6709\u65f6\uff0c\u60a8\u9700\u8981\u7684\u4e32\u53e3\u6570\u91cf\u8d85\u8fc7\u4e86\u53ef\u7528\u7684\u786c\u4ef6\u4e32\u53e3\u6570\u91cf\u3002\u5982\u679c\u662f\u8fd9\u79cd\u60c5\u51b5\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u8f6f\u4ef6\u4e32\u53e3\uff0c\u5b83\u4f7f\u7528\u8f6f\u4ef6\u6765\u6a21\u62df\u4e32\u884c\u786c\u4ef6\u3002\u8f6f\u4ef6\u4e32\u53e3\u9700\u8981 Arduino \u63a7\u5236\u5668\u63d0\u4f9b\u5927\u91cf\u5e2e\u52a9\u6765\u53d1\u9001\u548c\u63a5\u6536\u6570\u636e\uff0c\u56e0\u6b64\u5b83\u4e0d\u5982\u786c\u4ef6\u4e32\u53e3\u5feb\u6216\u9ad8\u6548\u3002\u6709\u5173 Serial \u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u8003 ",(0,a.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Seeed_Arduino_Serial/"},"Seeed Arduino Serial"),"\u3002"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"AVR\uff1a"),"\u5728\u4e0b\u9762\u7684\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u5c06\u8f6f\u4ef6\u4e32\u53e3\u5b9a\u4e49\u4e3a COMSerial\uff08\u4e0e Grove-MP3 \u6a21\u5757\u8fde\u63a5\uff09\u3002\u5e76\u975e\u6240\u6709\u7684\u6570\u5b57\u5f15\u811a\u90fd\u53ef\u4ee5\u7528\u4e8e\u8f6f\u4ef6\u4e32\u53e3\u3002\u60a8\u53ef\u4ee5\u53c2\u8003 ",(0,a.yg)("a",{parentName:"p",href:"https://www.arduino.cc/en/Reference/SoftwareSerial"},"\u8f6f\u4ef6\u4e32\u53e3")," \u4ee5\u83b7\u53d6\u5177\u4f53\u7684\u5f15\u811a\u4fe1\u606f\u3002\u6211\u4eec\u5c06\u786c\u4ef6\u4e32\u53e3\u5b9a\u4e49\u4e3a ShowSerial\uff08\u4e0e\u7535\u8111\u8fde\u63a5\uff09\u3002\u5982\u679c\u60a8\u4f7f\u7528\u7684\u662f Arduino Mega\uff0c\u60a8\u53ef\u4ee5\u5c06\u786c\u4ef6\u4e32\u53e3\u8fde\u63a5\u5230 ShowSerial\uff0c\u5c06\u5176\u4ed6\u7684 Serial1/Serial2/Serial3 \u8fde\u63a5\u5230 COMSerial\u3002\u56e0\u6b64\uff0c\u60a8\u53ef\u4ee5\u53c2\u8003 AVR Mega \u7684\u8bbe\u7f6e\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"SAMD\uff1a"),"\u5728\u4e0b\u9762\u7684\u793a\u4f8b\u4e2d\uff0cSAMD \u4e0d\u652f\u6301\u8f6f\u4ef6\u4e32\u53e3\u3002\u6211\u4eec\u4f7f\u7528\u786c\u4ef6\u4e32\u53e3 ",(0,a.yg)("strong",{parentName:"p"},"Serial1")," \u4e0e Grove-MP3 \u6a21\u5757\u8fdb\u884c\u901a\u4fe1\uff0c\u5e76\u4f7f\u7528 ",(0,a.yg)("strong",{parentName:"p"},"SerialUSB")," \u5728\u7535\u8111\u4e0a\u6253\u5370\u6d88\u606f\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"STM32F4\uff1a"),"\u5728\u4e0b\u9762\u7684\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u4f7f\u7528\u786c\u4ef6\u4e32\u53e3 ",(0,a.yg)("strong",{parentName:"p"},"Serial")," \u4e0e Grove-MP3 \u6a21\u5757\u8fdb\u884c\u901a\u4fe1\uff0c\u5e76\u4f7f\u7528 ",(0,a.yg)("strong",{parentName:"p"},"SerialUSB")," \u5728\u7535\u8111\u4e0a\u6253\u5370\u6d88\u606f\u3002"))),(0,a.yg)("p",null,":::\u6ce8\u610f\n\u5173\u4e8e Serial \u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u8003 ",(0,a.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Seeed_Arduino_Serial/"},"Seeed Arduino Serial"),"\u3002\n:::"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"#ifdef __AVR__\n#include <SoftwareSerial.h>\nSoftwareSerial SSerial(2, 3); // RX, TX\n#define COMSerial SSerial\n#define ShowSerial Serial \n\nWT2003S<SoftwareSerial> Mp3Player;\n#endif\n\n#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE\n#define COMSerial Serial1\n#define ShowSerial SerialUSB \n\nWT2003S<Uart> Mp3Player;\n#endif\n\n#ifdef ARDUINO_ARCH_STM32F4\n#define COMSerial Serial\n#define ShowSerial SerialUSB \n\nWT2003S<HardwareSerial> Mp3Player;\n#endif\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u73b0\u5728\u60a8\u53ef\u4ee5\u542c\u5230\u5b58\u50a8\u5728 SD \u5361\u4e2d\u7684\u6b4c\u66f2\u4e86\u3002\u5728\u64ad\u653e\u6a21\u5f0f\u4e0b\uff0cD1 \u6307\u793a\u706f\u4f1a\u4eae\u8d77\u3002\u5982\u679c\u5904\u4e8e\u6682\u505c\u6a21\u5f0f\uff0c\u6307\u793a\u706f\u4f1a\u95ea\u70c1\u3002\u66f4\u591a\u4f53\u9a8c\u7b49\u60a8\u6765\u63a2\u7d22\uff01")),(0,a.yg)("p",null,"\u53e6\u4e00\u79cd\u65b9\u5f0f\u662f\u901a\u8fc7\u4e32\u53e3\u5de5\u5177\u6765\u63a7\u5236 MP3 \u64ad\u653e\u6a21\u5f0f\u3002\u8fd9\u79cd\u65b9\u5f0f\u4e0b\uff0c\u60a8\u9700\u8981\u4e00\u4e2a ",(0,a.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/uartsbee-v4-p-688.html?cPath=63_66"},"UartSBee")," \u6765\u8fde\u63a5 MP3 \u4e0e\u7535\u8111\u3002\u786c\u4ef6\u5b89\u88c5\u5982\u4e0b\u56fe\u6240\u793a\uff1a\n",(0,a.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Serial_MP3_Player/img/Using_UartSBee_to_Control_MP3.jpg",alt:null})),(0,a.yg)("p",null,"\u8fde\u63a5\u5b8c\u6210\u540e\uff0c\u6253\u5f00\u4e32\u53e3\u5de5\u5177\u53d1\u9001\u547d\u4ee4\u3002\u5173\u4e8e\u5177\u4f53\u7684\u547d\u4ee4\uff0c\u8bf7\u53c2\u8003\u76f8\u5173\u90e8\u5206\uff01\n",(0,a.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Serial_MP3_Player/img/Serial_tool_to_send_commands.jpg",alt:null})),(0,a.yg)("p",null,"\u66f4\u591a\u7cbe\u5f69\u4f53\u9a8c\u7b49\u4f60\u6765\u53d1\u73b0\uff01"),(0,a.yg)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,a.yg)("p",null,"\u5e38\u7528\u547d\u4ee4\u8bf4\u660e\uff1a"),(0,a.yg)("table",{border:"1",cellspacing:"0",width:"80%"},(0,a.yg)("tr",null,(0,a.yg)("th",{scope:"col"},"\u547d\u4ee4\u540d\u79f0"),(0,a.yg)("th",{scope:"col"},"\u547d\u4ee4\u683c\u5f0f"),(0,a.yg)("th",{scope:"col"},"\u63cf\u8ff0")),(0,a.yg)("tr",null,(0,a.yg)("th",{scope:"row"},"\u6682\u505c"),(0,a.yg)("td",null,"7E 02 A3 7E"),(0,a.yg)("td",null,"\u53d1\u9001\u6b64\u547d\u4ee4\u540e\uff0c\u97f3\u4e50\u5c06\u505c\u6b62\u3002\u518d\u6b21\u53d1\u9001\u6b64\u547d\u4ee4\uff0c\u97f3\u4e50\u5c06\u7ee7\u7eed\u64ad\u653e\u3002")),(0,a.yg)("tr",null,(0,a.yg)("th",{scope:"row"},"\u505c\u6b62"),(0,a.yg)("td",null,"7E 02 A4 7E"),(0,a.yg)("td",null,"\u6b64\u547d\u4ee4\u80fd\u591f\u89e6\u53d1\u64ad\u653e\u4e0b\u4e00\u9996\u6b4c\u66f2\uff0c\u5982\u679c\u64ad\u653e\u5668\u6b63\u5728\u64ad\u653e\u6700\u540e\u4e00\u9996\u6b4c\u66f2\uff0c\u5219\u4f1a\u89e6\u53d1\u4ece\u5934\u5f00\u59cb\u64ad\u653e\u3002")),(0,a.yg)("tr",null,(0,a.yg)("th",{scope:"row"},"\u4e0b\u4e00\u66f2"),(0,a.yg)("td",null,"7E 02 A5 7E"),(0,a.yg)("td",null,"\u6b64\u547d\u4ee4\u80fd\u591f\u89e6\u53d1\u64ad\u653e\u4e0b\u4e00\u9996\u6b4c\u66f2\uff0c\u5982\u679c\u64ad\u653e\u5668\u6b63\u5728\u64ad\u653e\u6700\u540e\u4e00\u9996\u6b4c\u66f2\uff0c\u5219\u4f1a\u89e6\u53d1\u4ece\u5934\u5f00\u59cb\u64ad\u653e\u3002")),(0,a.yg)("tr",null,(0,a.yg)("th",{scope:"row"},"\u4e0a\u4e00\u66f2"),(0,a.yg)("td",null,"7E 02 A6 7E"),(0,a.yg)("td",null,"\u6b64\u547d\u4ee4\u80fd\u591f\u89e6\u53d1\u64ad\u653e\u4e0a\u4e00\u9996\u6b4c\u66f2\u3002\u53d1\u9001\u6b64\u547d\u4ee4\u65f6\uff0c\u5982\u679c\u6b63\u5728\u64ad\u653e\u7b2c\u4e00\u9996\u6b4c\u66f2\uff0c\u5219\u4f1a\u89e6\u53d1\u56de\u5230\u6700\u540e\u4e00\u9996\u6b4c\u66f2\u8fdb\u884c\u64ad\u653e\u3002")),(0,a.yg)("tr",null,(0,a.yg)("th",{scope:"row"},"\u97f3\u91cf\u63a7\u5236"),(0,a.yg)("td",null,"7E 03 A7 1F 7E"),(0,a.yg)("td",null,"\u97f3\u91cf\u670932\u4e2a\u7b49\u7ea7\uff0c\u4ece00\u523031\u300200\u4e3a\u9759\u97f3\uff0c31\u4e3a\u6700\u5927\u97f3\u91cf\u3002")),(0,a.yg)("tr",null,(0,a.yg)("th",{rowspan:"4",scope:"row"},"\u6307\u5b9a\u64ad\u653e\u6a21\u5f0f"),(0,a.yg)("td",{rowspan:"4"},"7E 03 A9 XX 7E"),(0,a.yg)("td",null,"XX=00 \u8868\u793a\u5355\u66f2\u4e0d\u5faa\u73af\u64ad\u653e\uff08\u9ed8\u8ba4\uff09")),(0,a.yg)("tr",null,(0,a.yg)("td",null,"XX=01 \u8868\u793a\u5355\u66f2\u5faa\u73af\u64ad\u653e\u6a21\u5f0f")),(0,a.yg)("tr",null,(0,a.yg)("td",null,"XX=02 \u8868\u793a\u6240\u6709\u66f2\u76ee\u5faa\u73af\u64ad\u653e\u6a21\u5f0f\u3002")),(0,a.yg)("tr",null,(0,a.yg)("td",null,"XX=03 \u8868\u793a\u968f\u673a\u64ad\u653e\u6a21\u5f0f\u3002"))),(0,a.yg)("h2",{id:"\u5728\u7ebf\u539f\u7406\u56fe\u67e5\u770b\u5668"},"\u5728\u7ebf\u539f\u7406\u56fe\u67e5\u770b\u5668"),(0,a.yg)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-Serial_MP3_Player/res/Grove-UART_MP3_Play_Eagle_File.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,a.yg)("h2",{id:"\u8d44\u6e90"},"\u8d44\u6e90"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Serial_MP3_Player/res/Grove-UART_MP3_Play_Eagle_File.zip"},"Grove - Serial MP3 Play Eagle \u6587\u4ef6")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Serial_MP3_Player/res/Grove-Serial_MP3_Player.pdf"},"Grove - Serial MP3 Play \u539f\u7406\u56fe\uff08PDF\u683c\u5f0f\uff09")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Seeed_Serial_MP3_Player"},"github \u4e0a\u7684\u6f14\u793a\u4ee3\u7801")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Serial_MP3_Player/res/WT5001_datasheet_V1.5.pdf"},"WT5001 \u6570\u636e\u624b\u518c"))),(0,a.yg)("h2",{id:"\u6280\u672f\u652f\u6301\u4e0e\u4ea7\u54c1\u8ba8\u8bba"},"\u6280\u672f\u652f\u6301\u4e0e\u4ea7\u54c1\u8ba8\u8bba"),(0,a.yg)("p",null,"\u611f\u8c22\u60a8\u9009\u62e9\u6211\u4eec\u7684\u4ea7\u54c1\uff01\u6211\u4eec\u5728\u8fd9\u91cc\u4e3a\u60a8\u63d0\u4f9b\u4e0d\u540c\u7684\u652f\u6301\uff0c\u4ee5\u786e\u4fdd\u60a8\u5728\u4f7f\u7528\u6211\u4eec\u7684\u4ea7\u54c1\u65f6\u83b7\u5f97\u5c3d\u53ef\u80fd\u987a\u7545\u7684\u4f53\u9a8c\u3002\u6211\u4eec\u63d0\u4f9b\u591a\u79cd\u6c9f\u901a\u6e20\u9053\uff0c\u4ee5\u6ee1\u8db3\u4e0d\u540c\u7684\u504f\u597d\u548c\u9700\u6c42\u3002"),(0,a.yg)("div",{class:"button_tech_support_container"},(0,a.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,a.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,a.yg)("div",{class:"button_tech_support_container"},(0,a.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,a.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}d.isMDXComponent=!0}}]);