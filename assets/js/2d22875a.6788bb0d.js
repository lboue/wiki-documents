"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[59524],{15680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>g});var r=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(t),m=i,g=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return t?r.createElement(g,l(l({ref:n},s),{},{components:t})):r.createElement(g,l({ref:n},s))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=m;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},60229:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=t(58168),i=(t(96540),t(15680));const a={description:"\u8bed\u97f3\u8bc6\u522b\u548c\u8bed\u97f3-\u610f\u56fe",title:"\u8bed\u97f3\u8bc6\u522b\u548c\u8bed\u97f3-\u610f\u56fe",keywords:["Wio_terminal","Embedded_ML","Projects_based_TensorFlow_Lite"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/Wio-Terminal-TinyML-TFLM-3",last_update:{date:"3/06/2024",author:"\u91d1\u83ca"}},l="Wio Terminal\u4e0a\u7684TensorFlow Lite Micro\u8bed\u97f3\u8bc6\u522b-\u8bed\u97f3-\u610f\u56fe",o={unversionedId:"zh-CN/Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_TensorFlow_Lite/CN-Wio-Terminal-TinyML-TFLM-3",id:"zh-CN/Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_TensorFlow_Lite/CN-Wio-Terminal-TinyML-TFLM-3",title:"\u8bed\u97f3\u8bc6\u522b\u548c\u8bed\u97f3-\u610f\u56fe",description:"\u8bed\u97f3\u8bc6\u522b\u548c\u8bed\u97f3-\u610f\u56fe",source:"@site/docs/zh-CN/Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_TensorFlow_Lite/CN-Wio-Terminal-TinyML-TFLM-3.md",sourceDirName:"zh-CN/Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_TensorFlow_Lite",slug:"/cn/Wio-Terminal-TinyML-TFLM-3",permalink:"/cn/Wio-Terminal-TinyML-TFLM-3",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/zh-CN/Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_TensorFlow_Lite/CN-Wio-Terminal-TinyML-TFLM-3.md",tags:[],version:"current",lastUpdatedBy:"\u91d1\u83ca",lastUpdatedAt:1709683200,formattedLastUpdatedAt:"Mar 6, 2024",frontMatter:{description:"\u8bed\u97f3\u8bc6\u522b\u548c\u8bed\u97f3-\u610f\u56fe",title:"\u8bed\u97f3\u8bc6\u522b\u548c\u8bed\u97f3-\u610f\u56fe",keywords:["Wio_terminal","Embedded_ML","Projects_based_TensorFlow_Lite"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/Wio-Terminal-TinyML-TFLM-3",last_update:{date:"3/06/2024",author:"\u91d1\u83ca"}},sidebar:"CNSidebar",previous:{title:"BME280\u667a\u80fd\u6c14\u8c61\u7ad9",permalink:"/cn/Wio-Terminal-TinyML-TFLM-2"},next:{title:"\u4f7f\u7528Wio Terminal\u624b\u52bf\u8bc6\u522b",permalink:"/cn/Wio-Terminal-Gesture-Recognition"}},c={},p=[{value:"\u97f3\u9891\u91c7\u96c6",id:"\u97f3\u9891\u91c7\u96c6",level:2},{value:"MFCC \u8ba1\u7b97",id:"mfcc-\u8ba1\u7b97",level:2},{value:"\u5bf9MFCC\u7279\u5f81\u8fdb\u884c\u63a8\u65ad",id:"\u5bf9mfcc\u7279\u5f81\u8fdb\u884c\u63a8\u65ad",level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}],s={toc:p},u="wrapper";function d(e){let{components:n,...t}=e;return(0,i.yg)(u,(0,r.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"wio-terminal\u4e0a\u7684tensorflow-lite-micro\u8bed\u97f3\u8bc6\u522b-\u8bed\u97f3-\u610f\u56fe"},"Wio Terminal\u4e0a\u7684TensorFlow Lite Micro\u8bed\u97f3\u8bc6\u522b-\u8bed\u97f3-\u610f\u56fe"),(0,i.yg)("p",null,"A\u4f20\u7edf\u7684\u4f7f\u7528\u8bed\u97f3\u8fdb\u884c\u8bbe\u5907\u63a7\u5236/\u7528\u6237\u8bf7\u6c42\u6ee1\u8db3\u7684\u65b9\u6cd5\u662f\u5148\u5c06\u8bed\u97f3\u8f6c\u5f55\u4e3a\u6587\u672c\uff0c\u7136\u540e\u89e3\u6790\u6587\u672c\u4ee5\u5f97\u5230\u9002\u5f53\u683c\u5f0f\u7684\u547d\u4ee4/\u67e5\u8be2\u3002\u867d\u7136\u8fd9\u79cd\u65b9\u6cd5\u5728\u8bcd\u6c47\u91cf\u548c/\u6216\u5e94\u7528\u573a\u666f\u65b9\u9762\u63d0\u4f9b\u4e86\u5f88\u5927\u7684\u7075\u6d3b\u6027\uff0c\u4f46\u662f\u5c06\u8bed\u97f3\u8bc6\u522b\u6a21\u578b\u548c\u4e13\u7528\u89e3\u6790\u5668\u7ed3\u5408\u5728\u4e00\u8d77\u5e76\u4e0d\u9002\u5408\u4e8e\u8d44\u6e90\u53d7\u9650\u7684\u5fae\u63a7\u5236\u5668"),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-TFLM-3/image-6-1024x416.png"})),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"Source: Wio Terminal, Picovoice, Tensorflow Lite\n")),(0,i.yg)("p",null,"\u5728\u8fd9\u4e2a\u9879\u76ee\u4e2d\uff0c\u6211\u4eec\u5c06\u91c7\u7528\u4e00\u79cd\u66f4\u9ad8\u6548\u7684\u65b9\u6cd5\uff0c\u76f4\u63a5\u5c06\u7528\u6237\u7684\u8bdd\u8bed\u89e3\u6790\u4e3a\u53ef\u6267\u884c\u7684\u8f93\u51fa\uff0c\u5373\u610f\u56fe/\u69fd\u3002\u6211\u4eec\u5c06\u5206\u4eab\u8bad\u7ec3\u7279\u5b9a\u9886\u57df\u8bed\u97f3\u5230\u610f\u56fe\u6a21\u578b\u5e76\u5c06\u5176\u90e8\u7f72\u5230\u5185\u7f6e\u9ea6\u514b\u98ce\u7684\u57fa\u4e8eCortex M4F\u7684\u5f00\u53d1\u677fWio Terminal\u7684\u6280\u672f\u3002"),(0,i.yg)("p",null,"\u6709\u5173\u66f4\u591a\u7ec6\u8282\u548c\u89c6\u89c9\u6548\u679c\uff0c\u8bf7\u89c2\u770b\u76f8\u5e94\u7684\u89c6\u9891!"),(0,i.yg)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/CVq4cet5jgI",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,i.yg)("p",null,"\u6709\u4e0d\u540c\u7c7b\u578b\u7684\u8bed\u97f3\u8bc6\u522b\u4efb\u52a1\uff0c\u6211\u4eec\u53ef\u4ee5\u5927\u81f4\u5c06\u5b83\u4eec\u5206\u4e3a\u4e09\u7ec4\uff1a"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u5927\u8bcd\u6c47\u8fde\u7eed\u8bed\u97f3\u8bc6\u522b\uff08LVCSR\uff09"),(0,i.yg)("li",{parentName:"ul"},"\u5173\u952e\u8bcd\u68c0\u6d4b"),(0,i.yg)("li",{parentName:"ul"},"\u8bed\u97f3\u5230\u610f\u56fe")),(0,i.yg)("p",null,"\u5173\u952e\u8bcd\u68c0\u6d4b\u5728\u5fae\u63a7\u5236\u5668\u4e0a\u6548\u679c\u5f88\u597d\uff0c\u4f7f\u7528\u5404\u79cd\u65e0\u4ee3\u7801\u5f00\u6e90\u5de5\u5177\uff08\u4f8b\u5982Edge Impulse\uff09\u8fdb\u884c\u8bad\u7ec3\u76f8\u5bf9\u5bb9\u6613\uff0c\u4f46\u65e0\u6cd5\u5f88\u597d\u5730\u5904\u7406\u8f83\u5927\u7684\u8bcd\u6c47\u91cf\u3002"),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-TFLM-3/image-7-768x570.png"})),(0,i.yg)("p",null,"\u5982\u679c\u6211\u4eec\u5e0c\u671b\u8bbe\u5907\u80fd\u6839\u636e\u8bed\u97f3\u8f93\u5165\u6267\u884c\u6709\u7528\u7684\u64cd\u4f5c\uff0c\u6211\u4eec\u9700\u8981\u7ed3\u5408LVCSR\u6a21\u578b\u548c\u57fa\u4e8e\u6587\u672c\u7684\u81ea\u7136\u8bed\u8a00\u89e3\u6790\u5668\u3002\u8fd9\u79cd\u65b9\u6cd5\u9c81\u68d2\u6027\u5f3a\uff0c\u76f8\u5bf9\u5bb9\u6613\u5b9e\u73b0\uff0c\u56e0\u4e3a\u516c\u5f00\u53ef\u7528\u7684\u8bed\u97f3\u8bc6\u522b\u5f15\u64ce\u5f88\u591a\uff0c\u4f46\u662f\u5373\u4f7f\u5728\u5355\u677f\u8ba1\u7b97\u673a\u4e0a\u8fd0\u884c\u4e5f\u4e0d\u9002\u5408\uff0c\u66f4\u4e0d\u7528\u8bf4\u5fae\u63a7\u5236\u5668\u4e86\u3002"),(0,i.yg)("p",null,"\u8fd8\u6709\u7b2c\u4e09\u79cd\u65b9\u5f0f\uff0c\u76f4\u63a5\u5c06\u8bed\u97f3\u8f6c\u6362\u4e3a\u57fa\u4e8e\u7279\u5b9a\u9886\u57df\u8bcd\u6c47\u7684\u89e3\u6790\u610f\u56fe\u3002\u4ee5\u667a\u80fd\u6d17\u8863\u673a\u6216\u667a\u80fd\u706f\u4e3a\u4f8b\uff0c\u901a\u8fc7\u5904\u7406\u8bdd\u8bed\u201c\u6b63\u5e38\u5faa\u73af\u4f4e\u901f\u201d\uff0c\u8bed\u97f3\u5230\u610f\u56fe\u6a21\u578b\u5c06\u8f93\u51fa\u89e3\u6790\u7684\u610f\u56fe\uff0c\u4f8b\u5982\uff1a"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},"{ Intent: washClothes },\n{ Slots: cycle: normal,\n         spin: low,\n         water: default }\n")),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-TFLM-3/image-9-768x621.png"})),(0,i.yg)("p",null,"\u8fd9\u5c31\u662f\u6211\u4eec\u9700\u8981\u7684\u4e00\u5207\uff0c\u6211\u4eec\u53ef\u4ee5\u7528\u58f0\u97f3\u6765\u63a7\u5236\u667a\u80fd\u6d17\u8863\u673a\u3002"),(0,i.yg)("p",null,"\u8bed\u97f3\u5230\u610f\u56fe\u5728\u7814\u7a76\u4e2d\u5f97\u5230\u5f88\u597d\u7684\u4ee3\u8868\uff0c\u4f46\u7f3a\u4e4f\u9002\u7528\u4e8e\u5fae\u63a7\u5236\u5668\u7684\u5e7f\u6cdb\u5f00\u6e90\u5b9e\u73b0\u3002 \u9002\u7528\u4e8e\u5fae\u63a7\u5236\u5668\u7684\u5b9e\u73b0\u3002\n\u751f\u4ea7\u5c31\u7eea\uff0c\u800c\u4e0d\u662f\u5f00\u6e90:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Picovoice"),(0,i.yg)("li",{parentName:"ul"},"Fluent.ai")),(0,i.yg)("p",null,"\u9002\u7528\u4e8e\u751f\u4ea7\u7684\u5f00\u6e90\u8f6f\u4ef6\uff0c\u4e0d\u9002\u5408\u5fae\u63a7\u5236\u5668\uff1a"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Speechbrain.io")),(0,i.yg)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528\u6211\u4eec\u51c6\u5907\u7684Jupyter Notebook\u6216GitHub\u5b58\u50a8\u5e93\u4e2d\u7684\u8bad\u7ec3\u811a\u672c\u8fdb\u884c\u6a21\u578b\u8bad\u7ec3 (\u5728\u6587\u7ae0\u672b\u5c3e\u7684 ",(0,i.yg)("strong",{parentName:"p"},"Reference")," \u90e8\u5206\u627e\u5230)\u3002 Jupyter Notebook\u5305\u542b\u4e00\u4e2a\u975e\u5e38\u57fa\u672c\u7684\u53c2\u8003\u6a21\u578b\u5b9e\u73b0\uff0c\u5e76\u5bf9\u6bcf\u4e2a\u5355\u5143\u8fdb\u884c\u4e86\u89e3\u91ca\u3002"),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-TFLM-3/image-10.png"})),(0,i.yg)("p",null,"\u5728\u8bad\u7ec3\u6a21\u578b\u540e\uff0c\u5c06\u5176\u590d\u5236\u5230Wio Terminal\u4ee3\u7801\u6240\u5728\u7684\u6587\u4ef6\u5939\u4e2d\uff0c\u5e76\u5c06\u6a21\u578b\u7684\u540d\u79f0\u66f4\u6539\u4e3a ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/AIWintermuteAI/Speech-to-Intent-Micro/blob/886746bb1878971d43e3e39584e0e2a492933491/inference_code/Wio_Terminal/wio_speech_to_intent_150_10/wio_speech_to_intent_150_10.ino#L106"},"line 106")," \u4e2d\u7684\u6a21\u578b\u540d\u79f0\u3002\u8ba9\u6211\u4eec\u7b80\u8981\u4ecb\u7ecd\u4ee3\u7801\u7684\u6700\u91cd\u8981\u90e8\u5206\u3002\u5b83\u53ef\u4ee5\u5927\u81f4\u5206\u4e3a\u4e09\u4e2a\u90e8\u5206\uff1a"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u97f3\u9891\u83b7\u53d6"),(0,i.yg)("li",{parentName:"ul"},"MFCC\u8ba1\u7b97"),(0,i.yg)("li",{parentName:"ul"},"\u5bf9MFCC\u7279\u5f81\u8fdb\u884c\u63a8\u7406")),(0,i.yg)("h2",{id:"\u97f3\u9891\u91c7\u96c6"},"\u97f3\u9891\u91c7\u96c6"),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-TFLM-3/DMAPIO.GIF"})),(0,i.yg)("p",null,"\u4e3a\u4e86\u4f7f\u7528Wio\u7ec8\u7aef\u5185\u7f6e\u9ea6\u514b\u98ce\u5f55\u5236\u58f0\u97f3\u8fdb\u884c\u5904\u7406\uff0c\u6211\u4eec\u4f7f\u7528Cortex M4F MCU\u7684DMA ADC\u529f\u80fd\u3002DMA\u4ee3\u8868\u76f4\u63a5\u5185\u5b58\u8bbf\u95ee\uff0c\u5b83\u7684\u529f\u80fd\u5c31\u662f\u5b57\u9762\u610f\u4e49\u4e0a\u7684\u2014\u2014\u5728MCU\u4e2d\u7684\u4e00\u4e2a\u7279\u5b9a\u90e8\u5206\u79f0\u4e3aDMAC\u6216\u76f4\u63a5\u5185\u5b58\u8bbf\u95ee\u63a7\u5236\uff0c\u5728\u4e8b\u5148\u8bbe\u7f6e\u597d\u7684\u60c5\u51b5\u4e0b\uff0c\u5c06\u6570\u636e\u4ece\u4e00\u4e2a\u4f4d\u7f6e\uff08\u4f8b\u5982\u5185\u90e8\u5b58\u50a8\u5668\u3001SPI\u3001I2C\u3001ADC\u6216\u5176\u4ed6\u63a5\u53e3\uff09\u4f20\u8f93\u5230\u53e6\u4e00\u4e2a\u4f4d\u7f6e\u3002\u8fd9\u6837\uff0c\u4f20\u8f93\u53ef\u4ee5\u5728MCU\u7684\u8f83\u5c11\u53c2\u4e0e\u4e0b\u8fdb\u884c\uff0c\u9664\u4e86\u521d\u59cb\u8bbe\u7f6e\u4e4b\u5916\u3002\u6211\u4eec\u5728\u8fd9\u91cc\u8bbe\u7f6e\u4f20\u8f93\u7684\u6e90\u548c\u76ee\u7684\u5730\u3002"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-cpp"},"descriptor.descaddr = (uint32_t)&descriptor_section[1]; // Set up a circular descriptor\ndescriptor.srcaddr = (uint32_t)&ADC1->RESULT.reg; // Take the result from the ADC0 RESULT register\ndescriptor.dstaddr = (uint32_t)adc_buf_0 + sizeof(uint16_t) * ADC_BUF_LEN;  // Place it in the adc_buf_0 array\ndescriptor.btcnt = ADC_BUF_LEN;  // Beat count\ndescriptor.btctrl = DMAC_BTCTRL_BEATSIZE_HWORD |   // Beat size is HWORD (16-bits)\n                      DMAC_BTCTRL_DSTINC |      // Increment the destination address\n                      DMAC_BTCTRL_VALID |       // Descriptor is valid\n                      DMAC_BTCTRL_BLOCKACT_SUSPEND; // Suspend DMAC channel 0 after block transfer\nmemcpy(&descriptor_section[0], &descriptor, sizeof(descriptor));  // Copy the descriptor to the descriptor section\ndescriptor.descaddr = (uint32_t)&descriptor_section[0];           // Set up a circular descriptor\ndescriptor.srcaddr = (uint32_t)&ADC1->RESULT.reg;                 // Take the result from the ADC0 RESULT register\ndescriptor.dstaddr = (uint32_t)adc_buf_1 + sizeof(uint16_t) * ADC_BUF_LEN;  // Place it in the adc_buf_1 array\ndescriptor.btcnt = ADC_BUF_LEN;  // Beat count\ndescriptor.btctrl = DMAC_BTCTRL_BEATSIZE_HWORD |    // Beat size is HWORD (16-bits)\n                      DMAC_BTCTRL_DSTINC |    // Increment the destination address\n                      DMAC_BTCTRL_VALID |      // Descriptor is valid\n                      DMAC_BTCTRL_BLOCKACT_SUSPEND; // Suspend DMAC channel 0 after block transfer\nmemcpy(&descriptor_section[1], &descriptor, sizeof(descriptor));  // Copy the descriptor to the descriptor section\n")),(0,i.yg)("p",null,"\u6b63\u5982\u6211\u4eec\u5728DMA\u63cf\u8ff0\u7b26\u4e2d\u6307\u5b9a\u7684\u53c2\u6570DMAC_BTCTRL_BLOCKACT_SUSPEND\u4e00\u6837\uff0c\u5728\u5b8c\u6210\u4e00\u4e2a\u5757\u4f20\u8f93\u540e\uff0cDMA\u901a\u9053\u5e94\u6302\u8d77\u3002\u7136\u540e\uff0c\u6211\u4eec\u7ee7\u7eed\u8bbe\u7f6e\u4e00\u4e2a\u7531TC5\u5b9a\u65f6\u5668\u89e6\u53d1\u7684ISR\uff08\u4e2d\u65ad\u670d\u52a1\u7a0b\u5e8f\uff09\uff1a"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-cpp"}," // Configure Timer/Counter 5\nGCLK->PCHCTRL[TC5_GCLK_ID].reg = GCLK_PCHCTRL_CHEN | // Enable perhipheral channel for TC5\nGCLK_PCHCTRL_GEN_GCLK1;    // Connect generic clock 0 at 48MHz\nTC5->COUNT16.WAVE.reg = TC_WAVE_WAVEGEN_MFRQ;     // Set TC5 to Match Frequency(MFRQ) mode\nTC5->COUNT16.CC[0].reg = 3000 - 1;                          // Set the trigger to 16 kHz: (4Mhz / 16000) - 1\nwhile (TC5->COUNT16.SYNCBUSY.bit.CC0);                      // Wait for synchronization\n// Start Timer/Counter 5\nTC5->COUNT16.CTRLA.bit.ENABLE = 1;                          // Enable the TC5 timer\nwhile (TC5->COUNT16.SYNCBUSY.bit.ENABLE);                   // Wait for synchronization\n")),(0,i.yg)("p",null,"\u4e2d\u65ad\u670d\u52a1\u7a0b\u5e8f\uff08ISR\uff09\u5c06\u4ee5\u7b49\u95f4\u9694\u7684\u65f6\u95f4\u95f4\u9694\u8c03\u7528\u7279\u5b9a\u51fd\u6570\uff0c\u7531TC5\u5b9a\u65f6\u5668\u63a7\u5236\u3002\u8ba9\u6211\u4eec\u770b\u770b\u8fd9\u4e2a\u51fd\u6570\u3002"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-cpp"},"/**\n * Interrupt Service Routine (ISR) for DMAC 1\n */\nvoid DMAC_1_Handler() {\n\n  static uint8_t count = 0;\n\n  // Check if DMAC channel 1 has been suspended (SUSP)\n  if (DMAC->Channel[1].CHINTFLAG.bit.SUSP) {\n\n     // Debug: make pin high before copying buffer\n#ifdef DEBUG\n    digitalWrite(debug_pin, HIGH);\n#endif\n\n    // Restart DMAC on channel 1 and clear SUSP interrupt flag\n    DMAC->Channel[1].CHCTRLB.reg = DMAC_CHCTRLB_CMD_RESUME;\n    DMAC->Channel[1].CHINTFLAG.bit.SUSP = 1;\n\n    // See which buffer has filled up, and dump results into large buffer\n    if (count) {\n      audio_rec_callback(adc_buf_0, ADC_BUF_LEN);\n    } else {\n      audio_rec_callback(adc_buf_1, ADC_BUF_LEN);\n    }\n\n    // Flip to next buffer\n    count = (count + 1) % 2;\n\n    // Debug: make pin low after copying buffer\n#ifdef DEBUG\n    digitalWrite(debug_pin, LOW);\n#endif\n  }\n}\n")),(0,i.yg)("p",null,"ISR\u51fd\u6570DMAC1_Handler()\u68c0\u67e5\u662f\u5426\u6302\u8d77\u4e86DMAC\u901a\u90531\uff0c\u8fd9\u53d1\u751f\u5728\u4e00\u5757\u4fe1\u606f\u5f55\u5236\u5b8c\u6210\u65f6\u3002\u5982\u679c\u6302\u8d77\u4e86\uff0c\u5b83\u8c03\u7528\u7528\u6237\u5b9a\u4e49\u7684\u51fd\u6570audio_rec_callback()\uff0c\u5728\u8fd9\u4e2a\u51fd\u6570\u4e2d\uff0c\u6211\u4eec\u5c06\u586b\u5145\u7684DMA ADC\u7f13\u51b2\u533a\u7684\u5185\u5bb9\u590d\u5236\u5230\u4e00\u4e2a\uff08\u53ef\u80fd\u66f4\u5927\u7684\uff09\u7528\u4e8e\u8ba1\u7b97MFCC\u7279\u5f81\u7684\u7f13\u51b2\u533a\u4e2d\u3002\u5728\u6b64\u6b65\u9aa4\u4e2d\uff0c\u6211\u4eec\u8fd8\u53ef\u4ee5\u9009\u62e9\u5bf9\u58f0\u97f3\u8fdb\u884c\u4e00\u4e9b\u540e\u5904\u7406\u3002"),(0,i.yg)("h2",{id:"mfcc-\u8ba1\u7b97"},"MFCC \u8ba1\u7b97"),(0,i.yg)("p",null,"MFCC\u7279\u5f81\u63d0\u53d6\u4ee5\u4e0eTensorFlow MFCC Op\u4ee3\u7801\u5339\u914d\u7684\u65b9\u5f0f\u501f\u7528\u81eaARM\u5728ARM\u5fae\u63a7\u5236\u5668\u4e0a\u8fdb\u884c\u5173\u952e\u5b57\u641c\u7d22\u7684\u5b58\u50a8\u5e93\u3002\u60a8\u53ef\u4ee5\u5728 ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/ARM-software/ML-KWS-for-MCU"},"\u6b64\u5904")," \u6b64\u5904\u627e\u5230\u539f\u59cb\u4ee3\u7801\u3002"),(0,i.yg)("p",null,"\u4e0eMFCC\u7279\u5f81\u8ba1\u7b97\u76f8\u5173\u7684\u5927\u90e8\u5206\u5de5\u4f5c\u90fd\u53d1\u751f\u5728MFCC\u7c7b\u7684mfcc_compute (const int16_t ",(0,i.yg)("em",{parentName:"p"},"audio_data, float")," mfcc_out)\u65b9\u6cd5\u4e2d\u3002\u8be5\u65b9\u6cd5\u63a5\u6536\u4e00\u4e2a\u97f3\u9891\u6570\u636e\u7684\u6307\u9488\uff0c\u5bf9\u4e8e\u6211\u4eec\u7684\u60c5\u51b5\uff0c\u662f320\u4e2a\u58f0\u97f3\u6570\u636e\u70b9\u7684\u6307\u9488\uff0c\u4ee5\u53ca\u6307\u5411MFCC\u8f93\u51fa\u503c\u6570\u7ec4\u4e2d\u7279\u5b9a\u4f4d\u7f6e\u7684\u6307\u9488\u3002\u5bf9\u4e8e\u4e00\u4e2a\u65f6\u95f4\u7247\uff0c\u6211\u4eec\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a"),(0,i.yg)("p",null,"\u5c06\u6570\u636e\u5f52\u4e00\u5316\u4e3a-1\u52301\u4e4b\u95f4\u7684\u8303\u56f4\u5e76\u8fdb\u884c\u586b\u5145\uff08\u5728\u6211\u4eec\u7684\u60c5\u51b5\u4e0b\uff0c\u586b\u5145\u4e0d\u4f1a\u53d1\u751f\uff0c\u56e0\u4e3a\u97f3\u9891\u6570\u636e\u7684\u5927\u5c0f\u603b\u662f\u8db3\u591f\u8ba1\u7b97\u4e00\u4e2a\u65f6\u95f4\u7247\u7684MFCC\u7279\u5f81\uff09\uff1a"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-cpp"},"  //TensorFlow way of normalizing .wav data to (-1,1)\n  for (i = 0; i < frame_len; i++) {\n    frame[i] = (float)audio_data[i]/(1<<15); \n  }\n  //Fill up remaining with zeros\n  memset(&frame[frame_len], 0, sizeof(float) * (frame_len_padded-frame_len));\n")),(0,i.yg)("p",null,"\u4f7f\u7528ARM\u6570\u5b66\u5e93\u51fd\u6570\u8ba1\u7b97 RFTT or ",(0,i.yg)("a",{parentName:"p",href:"https://www.keil.com/pack/doc/CMSIS/DSP/html/group__RealFFT.html"},"\u5b9e\u6570\u5feb\u901f\u5085\u91cc\u53f6\u53d8\u6362")," \uff1a"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-cpp"},"  //Compute FFT\n  arm_rfft_fast_f32(rfft, frame, buffer, 0);\n")),(0,i.yg)("p",null,"\u5c06\u503c\u8f6c\u6362\u4e3a\u529f\u7387\u8c31\uff1a"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-cpp"},"  //frame is stored as [real0, realN/2-1, real1, im1, real2, im2, ...]\n  int32_t half_dim = frame_len_padded/2;\n  float first_energy = buffer[0] * buffer[0],\n        last_energy =  buffer[1] * buffer[1];  // handle this special case\n  for (i = 1; i < half_dim; i++) {\n    float real = buffer[i*2], im = buffer[i*2 + 1];\n    buffer[i] = real*real + im*im;\n  }\n  buffer[0] = first_energy;\n  buffer[half_dim] = last_energy;  \n")),(0,i.yg)("p",null,"\u7136\u540e\u5c06\u6885\u5c14\u6ee4\u6ce2\u5668\u5e94\u7528\u4e8e\u4fdd\u5b58\u5728\u4e0a\u4e00\u6b65\u7f13\u51b2\u533a\u4e2d\u7684\u6570\u636e\u7684\u5e73\u65b9\u6839\u3002\u6885\u5c14\u6ee4\u6ce2\u5668\u662f\u5728\u5b9e\u4f8b\u5316MFCC\u7c7b\u65f6\u521b\u5efa\u7684\uff0c\u5728create_mel_fbank()\u65b9\u6cd5\u4e2d\u3002\u7528\u6237\u4e8b\u5148\u6307\u5b9a\u4e86\u6ee4\u6ce2\u5668\u7684\u6570\u91cf\u3001\u6700\u5c0f\u548c\u6700\u5927\u9891\u7387\uff0c\u5e76\u4e14\u4fdd\u6301\u8fd9\u4e9b\u8bbe\u7f6e\u5728\u8bad\u7ec3\u811a\u672c\u548c\u63a8\u65ad\u4ee3\u7801\u4e4b\u95f4\u4e00\u81f4\u975e\u5e38\u91cd\u8981\uff0c\u5426\u5219\u4f1a\u5bfc\u81f4\u663e\u8457\u7684\u51c6\u786e\u6027\u4e0b\u964d\u3002"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-cpp"},"  float sqrt_data;\n  //Apply mel filterbanks\n  for (bin = 0; bin < NUM_FBANK_BINS; bin++) {\n    j = 0;\n    float mel_energy = 0;\n    int32_t first_index = fbank_filter_first[bin];\n    int32_t last_index = fbank_filter_last[bin];\n    for (i = first_index; i <= last_index; i++) {\n      arm_sqrt_f32(buffer[i],&sqrt_data);\n      mel_energy += (sqrt_data) * mel_fbank[bin][j++];\n    }\n    mel_energies[bin] = mel_energy;\n\n    //avoid log of zero\n    if (mel_energy == 0.0)\n      mel_energies[bin] = FLT_MIN;\n  }\n")),(0,i.yg)("p",null,"\u6700\u540e\uff0c\u6211\u4eec\u5bf9\u6885\u5c14\u80fd\u91cf\u6570\u7ec4\u8fdb\u884c ",(0,i.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Discrete_cosine_transform"},"\u79bb\u6563\u4f59\u5f26\u53d8\u6362")," \uff0c\u5e76\u5c06\u5176\u5199\u5165MFCC\u7279\u5f81\u8f93\u51fa\u6570\u7ec4\u3002\u5728\u539f\u59cb\u811a\u672c\u4e2d\uff0c\u8fd9\u4e00\u6b65\u8fd8\u8fdb\u884c\u4e86\u91cf\u5316\uff0c\u4f46\u6211\u9009\u62e9\u4f7f\u7528Tensorflow Lite for Microcontrollers\u793a\u4f8b\u4e2d\u7684\u91cf\u5316\u8fc7\u7a0b\u3002"),(0,i.yg)("h2",{id:"\u5bf9mfcc\u7279\u5f81\u8fdb\u884c\u63a8\u65ad"},"\u5bf9MFCC\u7279\u5f81\u8fdb\u884c\u63a8\u65ad"),(0,i.yg)("p",null,"\u4e00\u65e6\u4e00\u4e2a\u6837\u672c\uff083\u79d2\u5185\u7684\u6240\u6709\u97f3\u9891\uff09\u7684\u6240\u6709\u97f3\u9891\u90fd\u7ecf\u8fc7\u5904\u7406\u5e76\u8f6c\u6362\u4e3aMFCC\u7279\u5f81\uff0c\u6211\u4eec\u5c06\u6574\u4e2aMFCC\u7279\u5f81\u6570\u7ec4\u4eceFLOAT32\u8f6c\u6362\u4e3aINT8\u503c\uff0c\u5e76\u5c06\u5176\u8f93\u5165\u795e\u7ecf\u7f51\u7edc\u3002 TensorFlow Lite for Microcontrollers \u7684\u521d\u59cb\u5316\u548c\u63a8\u65ad\u8fc7\u7a0b\u5df2\u5728\u6211\u4e4b\u524d\u7684\u6587\u7ae0\u4e2d\u8fdb\u884c\u4e86\u63cf\u8ff0\uff0c\u56e0\u6b64\u6211\u5728\u8fd9\u91cc\u4e0d\u518d\u91cd\u590d\u3002"),(0,i.yg)("p",null,"\u5728\u7f16\u8bd1\u4ee3\u7801\u4e4b\u524d\uff0c\u8bf7\u786e\u4fdd\u5df2\u5b89\u88c5\u6240\u6709\u5fc5\u8981\u7684\u5e93\uff0c\u5e76\u4e14Seeed SAMD\u677f\u5b9a\u4e49\u7684\u7248\u672c\u81f3\u5c11\u4e3a1.8.2\u7248\u672c\u2014\u2014\u8fd9\u5bf9\u4e8eTensorFlow Lite\u5e93\u7684\u7f16\u8bd1\u975e\u5e38\u91cd\u8981\u3002\u7f16\u8bd1\u548c\u4e0a\u4f20\u4ee3\u7801\u2014\u2014\u5982\u679c\u5c06DEBUG\u53c2\u6570\u8bbe\u7f6e\u4e3afalse\uff0c\u4ee3\u7801\u5c06\u7acb\u5373\u5f00\u59cb\u8fd0\u884c\uff0c\u5e76\u4e14\u60a8\u53ea\u9700\u5728Wio\u7ec8\u7aef\u9876\u90e8\u6309\u4e0bC\u6309\u94ae\uff0c\u7136\u540e\u4ece\u6570\u636e\u96c6\u4e2d\u8bf4\u51fa\u4e00\u4e2a\u53e5\u5b50\u3002\u7ed3\u679c\u5c06\u540c\u65f6\u663e\u793a\u5728\u5c4f\u5e55\u4e0a\uff0c\u5e76\u5728\u8fde\u63a5\u5230\u8ba1\u7b97\u673a\u7684\u60c5\u51b5\u4e0b\u8f93\u51fa\u5230\u4e32\u884c\u76d1\u89c6\u5668\u3002"),(0,i.yg)("p",null,"\u867d\u7136\u672c\u8bfe\u7a0b\u57fa\u4e8eWio Terminal\uff0c\u56e0\u4e3a\u5b83\u975e\u5e38\u9002\u5408\u63a2\u7d22\u5d4c\u5165\u5f0f\u673a\u5668\u5b66\u4e60\uff0c\u4f46\u4e5f\u53ef\u4ee5\u5728\u5176\u4ed6\u8bbe\u5907\u4e0a\u5b9e\u73b0\u3002\u6700\u7b80\u5355\u7684\u65b9\u6cd5\u662f\u5c06\u4ee3\u7801\u79fb\u690d\u5230\u5176\u4ed6Cortex M4F MCU\uff0c\u4f8b\u5982Nano33 BLE Sense\u2014\u2014\u8fd9\u53ea\u9700\u8981\u8c03\u6574\u4ee5\u9002\u5e94\u4e0d\u540c\u7684\u9ea6\u514b\u98ce\u5373\u53ef\u3002\u79fb\u690d\u5230\u5176\u4ed6ARM MCU\u5e94\u8be5\u4e5f\u76f8\u5f53\u7b80\u5355\u3002"),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-TFLM-3/image-13-768x626.png"})),(0,i.yg)("p",null,"\u5982\u679c\u8981\u79fb\u690d\u5230\u5176\u4ed6\u4f53\u7cfb\u7ed3\u6784\uff0c\u5982ESP32\u6216K210\u6216\u5176\u4ed6\u4f53\u7cfb\u7ed3\u6784\uff0c\u9700\u8981\u91cd\u65b0\u5b9e\u73b0MFCC\u8ba1\u7b97\uff0c\u56e0\u4e3a\u5b83\u4eec\u4f7f\u7528CMSIS-DSP\u4e2d\u7684ARM\u7279\u5b9a\u51fd\u6570\u3002"),(0,i.yg)("p",null,"\u8be5\u9879\u76ee\u4e2d\u7684\u57fa\u672c\u795e\u7ecf\u7f51\u7edc\u67b6\u6784\u53ef\u4ee5\u8fdb\u884c\u591a\u79cd\u6539\u8fdb\u3002\u8fd9\u4e9b\u6539\u8fdb\u5305\u62ec\uff1a"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u6a21\u578b\u9884\u8bad\u7ec3"),(0,i.yg)("li",{parentName:"ul"},"seq2seq, LSTM, \u6ce8\u610f\u529b\u673a\u5236"),(0,i.yg)("li",{parentName:"ul"},"\u53ef\u8bad\u7ec3\u6ee4\u6ce2\u5668"),(0,i.yg)("li",{parentName:"ul"},"AutoML, \u5408\u6210\u6570\u636e")),(0,i.yg)("p",null,"\u8bf7\u89c2\u770b\u4e0e\u6b64\u4e3b\u9898\u76f8\u5173\u7684TinyML\u8bb2\u5ea7\uff0c\u4ee5\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\u5e76\u627e\u5230\u8bba\u6587\u94fe\u63a5\uff01"),(0,i.yg)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/YmJrr1D191k",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,i.yg)("p",null,"\u6211\u4eec\u9f13\u52b1\u60a8fork\u4ee3\u7801\u5b58\u50a8\u5e93\uff0c\u5c1d\u8bd5\u5728\u81ea\u5df1\u7684\u6570\u636e\u96c6\u4e0a\u8fdb\u884c\u8bad\u7ec3\uff0c\u6216\u8005\u5c1d\u8bd5\u5b9e\u73b0\u66f4\u9ad8\u7ea7\u7684\u67b6\u6784\u6216\u6a21\u578b\u8bad\u7ec3\u6280\u672f\u3002\u5982\u679c\u60a8\u8fd9\u6837\u505a\uff0c\u8bf7\u4e0d\u8981\u72b9\u8c6b\u5728\u8fd9\u91cc\u5411\u6211\u63d0\u95ee\u6216\u5728Github\u4e0a\u63d0\u4ea4PR\uff01"),(0,i.yg)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("a",{parentName:"p",href:"https://github.com/AIWintermuteAI/Speech-to-Intent-Micro/blob/main/jupyter_notebooks/prepare_data.ipynb"},"Jupyter notebook"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("a",{parentName:"p",href:"https://github.com/AIWintermuteAI/Speech-to-Intent-Micro"},"Project Github")))))}d.isMDXComponent=!0}}]);