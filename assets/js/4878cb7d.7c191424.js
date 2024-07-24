"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[26588],{15680:(e,t,l)=>{l.d(t,{xA:()=>g,yg:()=>d});var n=l(96540);function i(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function r(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){i(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function p(e,t){if(null==e)return{};var l,n,i=function(e,t){if(null==e)return{};var l,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||(i[l]=e[l]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(i[l]=e[l])}return i}var o=n.createContext({}),s=function(e){var t=n.useContext(o),l=t;return e&&(l="function"==typeof e?e(t):r(r({},t),e)),l},g=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var l=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,g=p(e,["components","mdxType","originalType","parentName"]),m=s(l),y=i,d=m["".concat(o,".").concat(y)]||m[y]||u[y]||a;return l?n.createElement(d,r(r({ref:t},g),{},{components:l})):n.createElement(d,r({ref:t},g))}));function d(e,t){var l=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=l.length,r=new Array(a);r[0]=y;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[m]="string"==typeof e?e:i,r[1]=p;for(var s=2;s<a;s++)r[s]=l[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,l)}y.displayName="MDXCreateElement"},9128:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var n=l(58168),i=(l(96540),l(15680));const a={description:"\u5177\u5907AIoTs GPS\u7684LoRa\u8282\u70b9",title:"\u5177\u5907AIoTs GPS\u7684LoRa\u8282\u70b9",keywords:["Wio_terminal","Embedded_ML"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/AIoTs_GPS_state_tester",last_update:{date:"3/06/2024",author:"\u91d1\u83ca"}},r="\u57fa\u4e8eWio Terminal\u5177\u5907AIoTs GPS\u7684LoRa\u8282\u70b9",p={unversionedId:"zh-CN/Sensor/Wio_Terminal/Application/Embedded_ML/CN-AIoTs_GPS_state_tester",id:"zh-CN/Sensor/Wio_Terminal/Application/Embedded_ML/CN-AIoTs_GPS_state_tester",title:"\u5177\u5907AIoTs GPS\u7684LoRa\u8282\u70b9",description:"\u5177\u5907AIoTs GPS\u7684LoRa\u8282\u70b9",source:"@site/docs/zh-CN/Sensor/Wio_Terminal/Application/Embedded_ML/CN-AIoTs_GPS_state_tester.md",sourceDirName:"zh-CN/Sensor/Wio_Terminal/Application/Embedded_ML",slug:"/cn/AIoTs_GPS_state_tester",permalink:"/cn/AIoTs_GPS_state_tester",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/zh-CN/Sensor/Wio_Terminal/Application/Embedded_ML/CN-AIoTs_GPS_state_tester.md",tags:[],version:"current",lastUpdatedBy:"\u91d1\u83ca",lastUpdatedAt:1709683200,formattedLastUpdatedAt:"Mar 6, 2024",frontMatter:{description:"\u5177\u5907AIoTs GPS\u7684LoRa\u8282\u70b9",title:"\u5177\u5907AIoTs GPS\u7684LoRa\u8282\u70b9",keywords:["Wio_terminal","Embedded_ML"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/AIoTs_GPS_state_tester",last_update:{date:"3/06/2024",author:"\u91d1\u83ca"}},sidebar:"CNSidebar",previous:{title:"\u4f7f\u7528Wio Terminal\u624b\u52bf\u8bc6\u522b",permalink:"/cn/Wio-Terminal-Gesture-Recognition"},next:{title:"Wio Terminal\u7535\u6c60\u5e95\u5ea7",permalink:"/cn/Wio-Terminal-Battery-Chassis"}},o={},s=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u7279\u70b9",id:"\u7279\u70b9",level:2},{value:"\u5165\u95e8\u6307\u5357",id:"\u5165\u95e8\u6307\u5357",level:2},{value:"\u786c\u4ef6",id:"\u786c\u4ef6",level:3},{value:"\u4f7f\u7528Wio Terminal\u8fdb\u884c\u673a\u5668\u5b66\u4e60",id:"\u4f7f\u7528wio-terminal\u8fdb\u884c\u673a\u5668\u5b66\u4e60",level:3},{value:"Edge Impulse \u8bad\u7ec3\u5f00\u59cb",id:"edge-impulse-\u8bad\u7ec3\u5f00\u59cb",level:4},{value:"\u7f51\u7ad9\u4e0e Wio Terminal\u8fde\u63a5",id:"\u7f51\u7ad9\u4e0e-wio-terminal\u8fde\u63a5",level:4},{value:"\u6570\u636e\u91c7\u96c6",id:"\u6570\u636e\u91c7\u96c6",level:4},{value:"\u673a\u5668\u5b66\u4e60\u6a21\u5f0f\u751f\u6210",id:"\u673a\u5668\u5b66\u4e60\u6a21\u5f0f\u751f\u6210",level:4},{value:"\u673a\u5668\u5b66\u4e60\u6a21\u578b\u90e8\u7f72",id:"\u673a\u5668\u5b66\u4e60\u6a21\u578b\u90e8\u7f72",level:4},{value:"\u901a\u8fc7LoRa\u5728TheThingsNetwork\u4e0a\u663e\u793a\u6570\u636e",id:"\u901a\u8fc7lora\u5728thethingsnetwork\u4e0a\u663e\u793a\u6570\u636e",level:3},{value:"TheThingsNetwork\u663e\u793a\u6570\u636e\u7684\u5f00\u59cb",id:"thethingsnetwork\u663e\u793a\u6570\u636e\u7684\u5f00\u59cb",level:4}],g={toc:s},m="wrapper";function u(e){let{components:t,...l}=e;return(0,i.yg)(m,(0,n.A)({},g,l,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"\u57fa\u4e8ewio-terminal\u5177\u5907aiots-gps\u7684lora\u8282\u70b9"},"\u57fa\u4e8eWio Terminal\u5177\u5907AIoTs GPS\u7684LoRa\u8282\u70b9"),(0,i.yg)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,i.yg)("p",null,"AIoTs GPS\u548c\u72b6\u6001\u6d4b\u8bd5\u5668\u662f\u57fa\u4e8eWio Terminal Chassis-LoRa-E5\u548cGNSS\u5f00\u53d1\u7684\u3002\u4e0e\u4f20\u7edf\u7684\u7269\u8054\u7f51\u76f8\u6bd4\uff0c\u5b83\u66f4\u7b80\u6d01\u3001\u66f4\u667a\u80fd\u3002\u4f20\u7edf\u7684\u7269\u8054\u7f51\u57fa\u672c\u4e0a\u53ea\u662f\u63a5\u6536\u4e00\u4e9b\u6570\u636e\uff0c\u7136\u540e\u6267\u884c\u4e00\u4e2a\u547d\u4ee4\u52a8\u4f5c\uff0c\u800c\u4e0d\u7ba1\u6570\u636e\u662f\u5426\u6b63\u786e\u3002\u800cAIoTs\u4f7f\u7528\u795e\u7ecf\u7f51\u7edc\u7b97\u6cd5\uff0c\u80fd\u591f\u8fc7\u6ee4\u6389\u65e0\u7528\u7684\u6570\u636e\uff0c\u83b7\u53d6\u6b63\u786e\u7684\u6570\u636e\u3002"),(0,i.yg)("p",null,"\u5728\u8fd9\u4e2a\u9879\u76ee\u4e2d\uff0c\u6211\u4eec\u5c06\u4f7f\u7528\u5185\u7f6e\u7684\u4e09\u8f74\u52a0\u901f\u5ea6\u4f20\u611f\u5668\u548c\u795e\u7ecf\u7f51\u7edc\u7b97\u6cd5\u6784\u5efa\u4e00\u4e2a\u667a\u80fd\u8bc6\u522b\u7cfb\u7edf\u3002\u6839\u636eWio Terminal\u7684\u79fb\u52a8\uff0c\u5b83\u53ef\u4ee5\u5b9e\u65f6\u663e\u793a\u5176\u72b6\u6001\u3002\u4e00\u822c\u6765\u8bf4\uff0c\u8fd9\u4e2a\u793a\u4f8b\u9879\u76ee\u5305\u62ec\u4e09\u4e2a\u8bad\u7ec3\u72b6\u6001\uff0c\u5206\u522b\u662f\u505c\u6b62\uff08Wio Terminal\u7a7a\u95f2\u72b6\u6001\uff09\uff0c\u8f6c\u5411\uff08\u7ffb\u8f6cWio Terminal\u8bbe\u5907\uff09\u548c\u6325\u624b\uff08\u62ff\u8d77Wio Terminal\u6325\u624b\uff09\u3002\u9f13\u52b1\u60a8\u8bbf\u95ee ",(0,i.yg)("a",{parentName:"p",href:"https://www.edgeimpulse.com/"},"Edge Impulse")," \u7f51\u7ad9\u6dfb\u52a0\u66f4\u591a\u7684\u8bad\u7ec3\u52a8\u4f5c\u3002"),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/banner.png"})),(0,i.yg)("h2",{id:"\u7279\u70b9"},"\u7279\u70b9"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"LoRa\u8bbe\u5907\u53ef\u4ee5\u5728\u9996\u9875\u4e0a\u663e\u793aDevEui\u3001APPEui\u548cAppkey"),(0,i.yg)("li",{parentName:"ul"},"\u795e\u7ecf\u7f51\u7edc\u7b97\u6cd5\u53ef\u4ee5\u7ea0\u6b63\u6570\u636e"),(0,i.yg)("li",{parentName:"ul"},"\u9ad8\u7cbe\u5ea6\u68c0\u6d4bWio Terminal\u7684\u72b6\u6001"),(0,i.yg)("li",{parentName:"ul"},"\u663e\u793a\u7ecf\u5ea6\u3001\u7eac\u5ea6\u548c\u536b\u661f\u6570\u91cf"),(0,i.yg)("li",{parentName:"ul"},"\u663e\u793a\u8bbe\u5907\u548cTTN\u8fde\u63a5\u72b6\u6001")),(0,i.yg)("h2",{id:"\u5165\u95e8\u6307\u5357"},"\u5165\u95e8\u6307\u5357"),(0,i.yg)("h3",{id:"\u786c\u4ef6"},"\u786c\u4ef6"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"\u6240\u9700\u786c\u4ef6")),(0,i.yg)("p",null,"\u5728\u8fd9\u4e2a\u6f14\u793a\u4e2d\uff0c\u60a8\u5c06\u9700\u8981\u4ee5\u4e0b\u8bbe\u5907\uff1a"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/Wio-Terminal-p-4509.html"},"WioTerminal")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/Wio-Terminal-Chassis-LoRa-E5-and-GNSS-p-5053.html"},"Wio Terminal \u5e95\u5ea7 - LoRa-E5 and GNSS")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/Wio-Terminal-Chassis-Battery-650mAh-p-4756.html"},"Wio Terminal \u5e95\u5ea7 - \u7535\u6c60 (\u53ef\u9009)"))),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"\u786c\u4ef6\u8fde\u63a5")),(0,i.yg)("p",null,"\u901a\u8fc7Type-C\u6570\u636e\u7ebf\u5c06\u5176\u8fde\u63a5\u5230\u8ba1\u7b97\u673a\u3002"),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Alots/connectpc.jpg",alt:null})),(0,i.yg)("h3",{id:"\u4f7f\u7528wio-terminal\u8fdb\u884c\u673a\u5668\u5b66\u4e60"},"\u4f7f\u7528Wio Terminal\u8fdb\u884c\u673a\u5668\u5b66\u4e60"),(0,i.yg)("p",null,"\u8fd9\u91cc\u6211\u4eec\u5c06\u5411\u60a8\u5c55\u793a\u5982\u4f55\u4f7f\u7528Wio Terminal\u8bad\u7ec3\u4e00\u4e2a\u673a\u5668\u5b66\u4e60\u6a21\u578b\u5e76\u4f7f\u7528\u5b83\u3002\u8be5\u9879\u76ee\u57fa\u4e8eArduino\u5e73\u53f0\uff0c\u56e0\u6b64\u9700\u8981Arduino IDE\u548c\u5404\u79cdArduino\u5e93\u3002\u5982\u679c\u8fd9\u662f\u60a8\u7b2c\u4e00\u6b21\u4f7f\u7528Wio Terminal\uff0c\u6211\u4eec\u5efa\u8bae\u9605\u8bfb\u4e00\u4e2a\u6307\u5357\uff0c\u5feb\u901f ",(0,i.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/"},"\u4f7f\u7528 Wio Terminal"),"\u3002"),(0,i.yg)("p",null,"\u4e0b\u8f7d\u5e76\u5b89\u88c5\u5b83\u5230\u60a8\u7684Arduino\u5e93\u4e2d\uff1a"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Seeed_Arduino_SFUD"},"Seeed_Arduino_SFUD"))),(0,i.yg)("h4",{id:"edge-impulse-\u8bad\u7ec3\u5f00\u59cb"},"Edge Impulse \u8bad\u7ec3\u5f00\u59cb"),(0,i.yg)("p",null,"\u9996\u5148\uff0c\u60a8\u9700\u8981\u62e5\u6709\u81ea\u5df1\u7684Edge Impulse\u8d26\u6237\uff0c\u7136\u540e\u521b\u5efa\u4e00\u4e2a\u9879\u76ee\u3002"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"\u6b65\u9aa4 1"),". \u6253\u5f00 ",(0,i.yg)("a",{parentName:"li",href:"https://studio.edgeimpulse.com/login?next=%2Fstudio%2Fselect-project%3Fautoredirect%3D1"},"Edge Impulse \u7f51\u7ad9"),", \u7136\u540e\u6ce8\u518c\u4e00\u4e2a\u8d26\u6237\u3002")),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Alots/Alots1.png",alt:null})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"\u6b65\u9aa4 2"),". \u521b\u5efa\u4e00\u4e2a\u65b0\u9879\u76ee\u3002")),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Alots/Alots2.png",alt:null})),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Alots/Alots3.png",alt:null})),(0,i.yg)("h4",{id:"\u7f51\u7ad9\u4e0e-wio-terminal\u8fde\u63a5"},"\u7f51\u7ad9\u4e0e Wio Terminal\u8fde\u63a5"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"\u6b65\u9aa4 3"),". \u4e0b\u8f7d\u51c6\u5907\u8fde\u63a5\u6240\u9700\u7684\u56fa ",(0,i.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Alots/wio-terminal-ei-1.4.0.uf2"},"wio-terminal-ei-1.4.0.uf2")," \u3002")),(0,i.yg)("p",null,"\u6839\u636e ",(0,i.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/"},"Get Started with Wio Terminal")," \u7684\u6307\u5357"),(0,i.yg)("p",null," \u53cc\u51fb\u4e0b\u62c9Wio Terminal\uff08\u5df2\u8fde\u63a5\u5230\u60a8\u7684PC\uff09\uff0c\u60a8\u4f1a\u770b\u5230\u8ba1\u7b97\u673a\u4e0a\u5f39\u51fa\u4e00\u4e2a\u9a71\u52a8\u7a0b\u5e8f\uff08\u5982\u4e0b\u9762\u7684 ",(0,i.yg)("inlineCode",{parentName:"p"},"Arduino (F:)")," \uff09\u3002\u7136\u540e\uff0c\u60a8\u53ef\u4ee5\u5c06 ",(0,i.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Alots/wio-terminal-ei-1.4.0.uf2"},"wio-terminal-ei-1.4.0.uf2")," \u56fa\u4ef6\u62d6\u5230\u9a71\u52a8\u7a0b\u5e8f\u4e0a\u3002\u5f53\u60a8\u770b\u5230\u9a71\u52a8\u7a0b\u5e8f\u6d88\u5931\u65f6\uff0c\u8fd9\u610f\u5473\u7740\u56fa\u4ef6\u5df2\u7ecf\u7f16\u7a0b\u6210\u529f\u3002\u73b0\u5728\u60a8\u53ef\u4ee5\u8f6c\u5230\u7f51\u7ad9\u8fde\u63a5Wio Terminal\u3002"),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Alots/Alots5.png",alt:null})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"\u6b65\u9aa4 4"),". \u8bbe\u7f6e\u597d\u56fa\u4ef6\u540e\uff0c\u70b9\u51fb ",(0,i.yg)("inlineCode",{parentName:"li"},"connect using WebUSB")," \u5c06Wio Terminal\u8fde\u63a5\u5230\u7f51\u7ad9\u3002")),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Alots/Alots4.png",alt:null})),(0,i.yg)("p",null,"\u5f53\u51fa\u73b0\u50cf\u4e0b\u9762\u8fd9\u6837\u7684 ",(0,i.yg)("inlineCode",{parentName:"p"},"Device"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"Label")," \u548c ",(0,i.yg)("inlineCode",{parentName:"p"},"Sensor")," \u8868\u793a\u8fde\u63a5\u5df2\u5b8c\u6210\uff0c\u6570\u636e\u91c7\u96c6\u53ef\u4ee5\u542f\u52a8\u3002"),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Alots/Alots6.png",alt:null})),(0,i.yg)("h4",{id:"\u6570\u636e\u91c7\u96c6"},"\u6570\u636e\u91c7\u96c6"),(0,i.yg)("p",null,"\u73b0\u5728\u60a8\u53ef\u4ee5\u5728Edge Impulse\u4e0a\u6536\u96c6\u6570\u636e\u3002"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 5"),". \u8f93\u5165 ",(0,i.yg)("inlineCode",{parentName:"p"},"Label"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"Sample length (ms.)")," \u7136\u540e\u70b9\u51fb ",(0,i.yg)("inlineCode",{parentName:"p"},"Start sampling")),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"Label")," \u8868\u793a\u60a8\u8981\u5206\u7c7b\u7684\u7c7b\u522b\u3002"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"Sample length")," \u8868\u793a\u91c7\u6837\u7684\u65f6\u95f4\u957f\u5ea6")))),(0,i.yg)("p",null,"\u60a8\u53ef\u80fd\u8fd8\u60f3\u9009\u62e9\u4e0d\u540c\u7684 ",(0,i.yg)("inlineCode",{parentName:"p"},"Sensor")," \u6216\u8005 ",(0,i.yg)("inlineCode",{parentName:"p"},"Frequency")," \u6765\u67e5\u770b\u53d1\u751f\u7684\u60c5\u51b5"),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Alots/Alots8.png",alt:null})),(0,i.yg)("p",null,"\u5f3a\u70c8\u5efa\u8bae\u5bf9\u6570\u636e\u8fdb\u884c\u591a\u6b21\u91c7\u6837\uff0c\u8d85\u8fc710\u6b21\u3002"),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Alots/Alots9.png",alt:null})),(0,i.yg)("h4",{id:"\u673a\u5668\u5b66\u4e60\u6a21\u5f0f\u751f\u6210"},"\u673a\u5668\u5b66\u4e60\u6a21\u5f0f\u751f\u6210"),(0,i.yg)("p",null,"\u4e00\u65e6\u6536\u96c6\u5230\u6570\u636e\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u5b83\u6765\u8bad\u7ec3\u673a\u5668\u5b66\u4e60\u6a21\u578b\u3002"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"\u6b65\u9aa4 6"),". \u5728\u91c7\u6837\u6570\u636e\u540e\uff0c\u70b9\u51fb ",(0,i.yg)("inlineCode",{parentName:"li"},"create impulse")," \u6765\u5904\u7406\u6570\u636e\u3002")),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Alots/Alots10.png",alt:null})),(0,i.yg)("p",null,"\u5728\u8fd9\u91cc\u9009\u62e9\u7684\u5904\u7406\u5757\u548c\u5b66\u4e60\u5757\u4e0e\u7f51\u7ad9\u63a8\u8350\u7684\u76f8\u540c\u3002\u4f46\u6211\u4eec\u5efa\u8bae\u60a8\u9009\u62e9\u5176\u4ed6\u9009\u9879\uff0c\u770b\u770b\u4f1a\u6709\u4ec0\u4e48\u4e0d\u540c\u3002\u8bbe\u7f6e\u597d\u5757\u540e\uff0c\u70b9\u51fb ",(0,i.yg)("inlineCode",{parentName:"p"},"Save Impulse")," \u6765\u5b58\u50a8 impulse."),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Alots/Alots11.png",alt:null})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"\u6b65\u9aa4 7"),". \u5207\u6362\u5230 ",(0,i.yg)("inlineCode",{parentName:"li"},"Spectral features")," \u9875\u9762, \u7136\u540e\u5728\u5e95\u90e8\u70b9\u51fb ",(0,i.yg)("inlineCode",{parentName:"li"},"Save parameters")," , \u5b83\u4f1a\u81ea\u52a8\u5207\u6362\u5230 ",(0,i.yg)("inlineCode",{parentName:"li"},"Generate feature")," \u4fa7\u8fb9\u3002")),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Alots/Alots12.png",alt:null})),(0,i.yg)("p",null,"\u8fd9\u91cc\u662f ",(0,i.yg)("inlineCode",{parentName:"p"},"Generate feature")," \u4fa7\u9762, \u5b83\u53ef\u4ee5\u5e2e\u52a9\u5c06\u60a8\u7684\u6570\u636e\u8f6c\u6362\u4e3a\u673a\u5668\u5b66\u4e60\u6240\u9700\u7684\u7279\u5f81\u3002"),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Alots/Alots13.png",alt:null})),(0,i.yg)("p",null,"\u70b9\u51fb ",(0,i.yg)("inlineCode",{parentName:"p"},"Generate feature")," \u7ed3\u679c\u5c06\u663e\u793a\u5728\u53f3\u4fa7\u3002"),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Alots/Alots15.png",alt:null})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"\u6b65\u9aa4 8"),". \u8f6c\u5230 ",(0,i.yg)("inlineCode",{parentName:"li"},"NN Classifier")," \u9875\u9762\u4f7f\u7528\u60a8\u7684\u7279\u5f81\u6765\u8bad\u7ec3\u673a\u5668\u5b66\u4e60\u6a21\u578b\u3002\u5728\u9875\u9762\u5e95\u90e8\uff0c\u70b9\u51fb ",(0,i.yg)("inlineCode",{parentName:"li"},"Start training")," \u3002")),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Alots/Alots16.png",alt:null})),(0,i.yg)("p",null,"\u8bad\u7ec3\u8f93\u51fa\u5c06\u663e\u793a\u5728\u9875\u9762\u53f3\u4fa7\u3002\u5f53\u60a8\u770b\u5230\u8f93\u51fa\u65f6\uff0c\u8868\u793a\u6a21\u578b\u5df2\u751f\u6210\u3002"),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Alots/Alots17.png",alt:null})),(0,i.yg)("h4",{id:"\u673a\u5668\u5b66\u4e60\u6a21\u578b\u90e8\u7f72"},"\u673a\u5668\u5b66\u4e60\u6a21\u578b\u90e8\u7f72"),(0,i.yg)("p",null,"\u73b0\u5728\uff0c\u60a8\u53ef\u4ee5\u5c06\u673a\u5668\u5b66\u4e60\u6a21\u578b\u90e8\u7f72\u5230Wio Terminal\u4e0a\u3002"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"\u6b65\u9aa4 9"),". \u5728\u5de6\u4fa7\u9009\u62e9\u5e76\u70b9\u51fb ",(0,i.yg)("inlineCode",{parentName:"li"},"Deployment")," \u680f\u3002")),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Alots/Alots18.png",alt:null})),(0,i.yg)("p",null,"\u7136\u540e\u9009\u62e9 ",(0,i.yg)("inlineCode",{parentName:"p"},"Arduino Library"),", \u5728\u5e95\u90e8\u9009\u62e9 ",(0,i.yg)("inlineCode",{parentName:"p"},"build")," \u4ee5\u521b\u5efaArduino\u6240\u9700\u7684\u5e93\u3002\u5b83\u5c06\u81ea\u52a8\u4e0b\u8f7d\u4e00\u4e2a\u5305\u542b\u7b2c\u4e09\u65b9\u5e93\u7684zip\u6587\u4ef6\u3002"),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Alots/Alots19.png",alt:null})),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Alots/Alots20.png",alt:null})),(0,i.yg)("p",null,"\u6240\u9700\u5e93\u7684\u540d\u79f0\u4e0e\u9879\u76ee\u540d\u79f0\u76f8\u5173\uff0c\u8fd9\u610f\u5473\u7740\u60a8\u5728 ",(0,i.yg)("strong",{parentName:"p"},"step 2")," \u4e2d\u8f93\u5165\u7684\u540d\u79f0\u5c06\u5728\u6b64\u5904\u663e\u793a\u3002\u5b83\u53ef\u4ee5\u5e2e\u52a9\u60a8\u627e\u5230\u6240\u9700\u7684\u6b63\u786e\u6587\u4ef6\u3002"),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Alots/Alots21.png",alt:null})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"\u6b65\u9aa4 10"),". \u4eceGithub\u4e0b\u8f7d ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/0hotpotman0/AIoTs_GPS_state_tester"},"code")," \u6587\u4ef6\uff0c\u5e76\u4f7f\u7528Arduino IDE\u6253\u5f00\u5b83\u3002\u5c06\u4ee3\u7801\u4e2d\u7684\u7b2c\u4e09\u65b9\u5e93\u66f4\u6539\u4e3a\u60a8\u81ea\u5df1\u7684\u5e93\uff0c\u5982\u4e0a\u6240\u8ff0\uff0c\u7136\u540e\u8fd0\u884c\u4ee3\u7801\u3002")),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Alots/Alots22.png",alt:null})),(0,i.yg)("p",null,":::\u6ce8\n\u7531\u4e8e\u5168\u7403\u533a\u57df\u7684\u5dee\u5f02\uff0c\u6587\u4ef6\u4e2d\u7684\u4ee3\u7801\u5e94\u8be5\u7a0d\u4f5c\u4fee\u6539\uff1a\n:::"),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Alots/Alots35.png",alt:null})),(0,i.yg)("p",null,"\u5982\u679c\u60a8\u8fde\u63a5\u7684\u662f 'America server' \uff0c\u90a3\u4e48\u60a8\u4e0d\u7528\u62c5\u5fc3\u793a\u4f8b\u4ee3\u7801\uff0c\u4f46\u5176\u4ed6\u5730\u65b9\u9700\u8981\u8fdb\u884c\u5982\u4e0b\u8bbe\u7f6e('CN_470_510' means in China the value should be the range from 470 to 510):"),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Alots/Alots36.png",alt:null})),(0,i.yg)("p",null,"\u6700\u7ec8\uff0c\u7ed3\u679c\u5e94\u8be5\u662f\u8fd9\u6837\u7684\uff1a"),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Alots/connect1.jpg",alt:null})),(0,i.yg)("p",null,":::\u6ce8\n\u5982\u679c\u60a8\u60f3\u4e86\u89e3\u6709\u5173Edge Impulse\u7684\u66f4\u591a\u4fe1\u606f\u6216\u6709\u4efb\u4f55\u4e0d\u6e05\u695a\u7684\u5730\u65b9\uff0c\u8bf7\u53c2\u9605 ",(0,i.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-TinyML-EI-1/"},"Wio Terminal Edge Impulse Getting Started")," \u83b7\u53d6\u66f4\u591a\u4fe1\u606f\u3002\n:::"),(0,i.yg)("h3",{id:"\u901a\u8fc7lora\u5728thethingsnetwork\u4e0a\u663e\u793a\u6570\u636e"},"\u901a\u8fc7LoRa\u5728TheThingsNetwork\u4e0a\u663e\u793a\u6570\u636e"),(0,i.yg)("p",null,"\u5728\u6211\u4eec\u8bad\u7ec3\u4e86\u4e00\u4e2a\u673a\u5668\u5b66\u4e60\u6a21\u578b\u5e76\u6536\u96c6\u4e86\u6570\u636e\u4e4b\u540e\uff0c\u5982\u679c\u6211\u4eec\u80fd\u591f\u5c06\u6570\u636e\u4f20\u8f93\u5230\u4e91\u7aef\uff0c\u5c06\u4f1a\u66f4\u6709\u8da3\u3002\u5728\u8fd9\u4e2a\u9879\u76ee\u4e2d\uff0c\u6211\u4eec\u5c06\u901a\u8fc7LoRa\u5c06\u6570\u636e\u663e\u793a\u5728 ",(0,i.yg)("a",{parentName:"p",href:"https://www.thethingsnetwork.org/"},"TheThingsNetwork")," \u5e73\u53f0\uff08\u4e91\u7aef\uff09\u4e0a\u3002"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"\u6240\u9700\u786c\u4ef6")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u7f51\u5173")),(0,i.yg)("p",null,"\u60a8\u9996\u5148\u9700\u8981\u8bbe\u7f6e\u4e00\u4e2a\u7f51\u5173\uff0c\u4ee5\u4fbf\u80fd\u591f\u8fde\u63a5Wio Terminal\u548cTTN\uff08TheThingsNetwork\uff09\u4e91\u3002"),(0,i.yg)("h4",{id:"thethingsnetwork\u663e\u793a\u6570\u636e\u7684\u5f00\u59cb"},"TheThingsNetwork\u663e\u793a\u6570\u636e\u7684\u5f00\u59cb"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 1")," \u767b\u5f55 ",(0,i.yg)("a",{parentName:"p",href:"https://id.thethingsnetwork.org/oidc/interaction/3v59Li6ZEHe8cq1O0Ft1w"},"TTN website")," \u5e76\u521b\u5efa\u60a8\u7684\u8d26\u6237\uff0c\u7136\u540e\u70b9\u51fb ",(0,i.yg)("inlineCode",{parentName:"p"},"go to gateways")," \u4ee5\u8bbe\u7f6e\u8bbe\u5907\u3002"),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Alots/Alots24a.png",alt:null})),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 2")," \u70b9\u51fb\u7f51\u5173\u9875\u9762\u4e0a\u7684 ",(0,i.yg)("inlineCode",{parentName:"p"},"Add gateway")," \u3002"),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Alots/Alots25.png",alt:null})),(0,i.yg)("p",null,"\u6dfb\u52a0\u60a8\u81ea\u5df1\u7684\u7f51\u5173\u4fe1\u606f\uff1a"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u6240\u6709\u8005\uff08\u60a8\u7684\u59d3\u540d\uff09"),(0,i.yg)("li",{parentName:"ul"},"\u7f51\u5173ID\uff08\u6839\u636e\u7f51\u5173\u800c\u5b9a\uff09"),(0,i.yg)("li",{parentName:"ul"},"\u7f51\u5173EUI\uff08\u6839\u636e\u7f51\u5173\uff0c\u6709\u65f6\u4e0e\u7f51\u5173ID\u76f8\u540c\uff09"),(0,i.yg)("li",{parentName:"ul"},"\u7f51\u5173\u540d\u79f0\uff08\u60a8\u7684\u9009\u62e9\uff09")),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Alots/Alots26.png",alt:null})),(0,i.yg)("p",null,"LoRaWAN\u9009\u9879\u4e2d\u7684 ",(0,i.yg)("inlineCode",{parentName:"p"},"Frequence plan")," \u53d6\u51b3\u4e8e\u60a8\u6240\u5728\u7684\u4f4d\u7f6e \uff0c\u5728\u6dfb\u52a0 ",(0,i.yg)("inlineCode",{parentName:"p"},"Add gateway"),"\u4e4b\u524d, \u60a8\u53ef\u80fd\u4f1a\u627e\u5230\u4e00\u4e2a\u5305\u542b\u4e00\u4e9b\u96c6\u7fa4\u7684\u9875\u9762\u3002\u5728    ",(0,i.yg)("inlineCode",{parentName:"p"},"Frequence Plan")," \u4e2d\u9009\u62e9\u7684\u503c\u5e94\u4e0e\u60a8\u5728\u6b65\u9aa42\u4e2d\u9009\u62e9\u7684\u503c\u76f8\u540c\uff0c\u4e5f\u5c31\u662f\u9009\u62e9\u4e0e\u60a8\u6240\u5728\u5730\u6700\u63a5\u8fd1\u7684\u5730\u533a\u3002"),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Alots/Alots27.png",alt:null})),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Alots/Alots27a.png",alt:null})),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 3")," \u8bbe\u7f6e\u597d\u7f51\u5173\u540e\uff0c\u60a8\u73b0\u5728\u53ef\u4ee5\u5728\u5e94\u7528\u7a0b\u5e8f\u9875\u9762\u4e0a\u6dfb\u52a0\u8fde\u63a5\u5230\u5b83\u7684Wio Terminal\u8282\u70b9\u4e86\u3002\u70b9\u51fb ",(0,i.yg)("inlineCode",{parentName:"p"},"Add application"),":"),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Alots/Alots28.png",alt:null})),(0,i.yg)("p",null,"\u6309\u7167\u60a8\u7684\u610f\u613f\u586b\u5199\u4ee5\u4e0b\u4fe1\u606f\uff1a"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u6240\u6709\u8005"),(0,i.yg)("li",{parentName:"ul"},"\u5e94\u7528\u7a0b\u5e8fID"),(0,i.yg)("li",{parentName:"ul"},"\u5e94\u7528\u7a0b\u5e8fID")),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Alots/Alots29.png",alt:null})),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 4")," \u521b\u5efa\u5e94\u7528\u7a0b\u5e8f\u540e\uff0c\u60a8\u53ef\u4ee5\u5728\u53f3\u4e0b\u89d2\u770b\u5230\u4e00\u4e2a ",(0,i.yg)("inlineCode",{parentName:"p"},"Add end device")," \u7684\u9009\u9879\uff0c\u53ef\u4ee5\u5e2e\u52a9\u60a8\u6dfb\u52a0\u8fde\u63a5\u5230Wio Terminal\u8bbe\u5907\u3002"),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Alots/Alots30.png",alt:null})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u9009\u62e9 ",(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"Brand"))," \u4e3a ",(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"Select Sense CAP"))),(0,i.yg)("li",{parentName:"ul"},"\u9009\u62e9 ",(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"Model"))," \u4e3a ",(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"LoRa-E5"))),(0,i.yg)("li",{parentName:"ul"},"\u786c\u4ef6\u7248\u672c\u548c\u56fa\u4ef6\u7248\u672c\u9ed8\u8ba4\u8bbe\u7f6e"),(0,i.yg)("li",{parentName:"ul"},"\u914d\u7f6e\u6587\u4ef6\uff08\u533a\u57df\uff09\u6839\u636e\u60a8\u7684\u4f4d\u7f6e\u8bbe\u7f6e (\u4e0e ",(0,i.yg)("inlineCode",{parentName:"li"},"Frequncy plan")," \u76f8\u540c)"),(0,i.yg)("li",{parentName:"ul"},"\u9891\u7387\u8ba1\u5212\u4e0e\u60a8\u5728 ",(0,i.yg)("strong",{parentName:"li"},"Step 2")," \u4e2d\u9009\u62e9\u7684\u4e00\u6837"),(0,i.yg)("li",{parentName:"ul"},"AppEUI\u3001DevEUI\u548cAppKey\u5728\u4e0d\u540c\u7684LoRa-E5\u8bbe\u5907\u4e2d\u662f\u552f\u4e00\u7684\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7\u5c06\u4e00\u4e2a\u56fa\u4ef6 ",(0,i.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Alots/Gateway_Tester.uf2"},"Gateway_Tester.uf2")," \u7f16\u7a0b\u5230\u8bbe\u5907\u4e2d\u6765\u8f7b\u677e\u5730\u627e\u5230\u5b83\u4eec\u3002\u5c31\u50cf\u5728Edge Impulse\u7684\u6559\u7a0b\u4e2d\u4e00\u6837\uff0c\u53ea\u9700\u5c06uf2\u6587\u4ef6\u62d6\u653e\u5230Wio Terminal\u5de6\u4fa7\u7684\u9a71\u52a8\u5668\u4e2d\u3002")),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Alots/Alots37.png",alt:null})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u5728\u8f93\u5165DevEUI\u540e\uff0cEnd Device ID\u5c06\u81ea\u52a8\u586b\u5145\u3002")),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Alots/Alots31.png",alt:null})),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 5")," \u8fde\u63a5\u8bbe\u5907\u540e\uff0c\u4f1a\u51fa\u73b0 ",(0,i.yg)("inlineCode",{parentName:"p"},"Payload formatters")," \u9009\u62e9\uff0c\u60a8\u9700\u8981\u6dfb\u52a0\u4e00\u4e9b\u4ee3\u7801\u6765\u89e3\u7801\u6570\u636e(\u9009\u62e9Formatter\u7c7b\u578b\u4e3a 'Javascript'):"),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Alots/Alots32.png",alt:null})),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-c++"},"function Decoder(bytes, port) {\n \n  var decoded = {};\n  if (port === 8) {\n    decoded.Stop   = bytes[1];\n    decoded.Turn   = bytes[3];\n    decoded.Wave   = bytes[5];\n  }\n \n  return decoded;\n}\n")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 6")," \u6700\u540e, \u8f6c\u5230\u7f51\u5173\uff0c\u7136\u540e\u70b9\u51fb ",(0,i.yg)("inlineCode",{parentName:"p"},"Live data")," \u3002\u60a8\u53ef\u80fd\u4f1a\u770b\u5230\u7ed3\u679c\uff1a"),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Alots/Alots33a.png",alt:null})))}u.isMDXComponent=!0}}]);