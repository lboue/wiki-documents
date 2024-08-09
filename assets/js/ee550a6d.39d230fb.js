"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[18452],{15680:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>m});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},g=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,g=p(e,["components","mdxType","originalType","parentName"]),c=s(n),d=r,m=c["".concat(l,".").concat(d)]||c[d]||u[d]||o;return n?a.createElement(m,i(i({ref:t},g),{},{components:n})):a.createElement(m,i({ref:t},g))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9861:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var a=n(58168),r=(n(96540),n(15680));const o={description:"\u5982\u4f55\u5728reComputer\u4e0a\u8bad\u7ec3\u548c\u90e8\u7f72YOLOv8",title:"\u5982\u4f55\u5728reComputer\u4e0a\u8bad\u7ec3\u548c\u90e8\u7f72YOLOv8",keywords:["reComputer","Train YOLOv8"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/How_to_Train_and_Deploy_YOLOv8_on_reComputer",last_update:{date:"12/6/2023",author:"Youjiang"}},i="\u5982\u4f55\u5728reComputer\u4e0a\u8bad\u7ec3\u548c\u90e8\u7f72YOLOv8",p={unversionedId:"zh-CN/Edge/NVIDIA_Jetson/Application/Computer_Vision/How_to_Train_and_Deploy_YOLOv8_on_reComputer",id:"zh-CN/Edge/NVIDIA_Jetson/Application/Computer_Vision/How_to_Train_and_Deploy_YOLOv8_on_reComputer",title:"\u5982\u4f55\u5728reComputer\u4e0a\u8bad\u7ec3\u548c\u90e8\u7f72YOLOv8",description:"\u5982\u4f55\u5728reComputer\u4e0a\u8bad\u7ec3\u548c\u90e8\u7f72YOLOv8",source:"@site/docs/zh-CN/Edge/NVIDIA_Jetson/Application/Computer_Vision/How_to_Train_and_Deploy_YOLOv8_on_reComputer.md",sourceDirName:"zh-CN/Edge/NVIDIA_Jetson/Application/Computer_Vision",slug:"/cn/How_to_Train_and_Deploy_YOLOv8_on_reComputer",permalink:"/cn/How_to_Train_and_Deploy_YOLOv8_on_reComputer",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/zh-CN/Edge/NVIDIA_Jetson/Application/Computer_Vision/How_to_Train_and_Deploy_YOLOv8_on_reComputer.md",tags:[],version:"current",lastUpdatedBy:"Youjiang",lastUpdatedAt:1701820800,formattedLastUpdatedAt:"Dec 6, 2023",frontMatter:{description:"\u5982\u4f55\u5728reComputer\u4e0a\u8bad\u7ec3\u548c\u90e8\u7f72YOLOv8",title:"\u5982\u4f55\u5728reComputer\u4e0a\u8bad\u7ec3\u548c\u90e8\u7f72YOLOv8",keywords:["reComputer","Train YOLOv8"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/How_to_Train_and_Deploy_YOLOv8_on_reComputer",last_update:{date:"12/6/2023",author:"Youjiang"}},sidebar:"CNSidebar",previous:{title:"\u4f7f\u7528Langchain\u683c\u5f0f\u5316\u5927\u578b\u8bed\u8a00\u6a21\u578b\u7684\u8f93\u51fa",permalink:"/cn/How_to_Format_the_Output_of_LLM_Using_Langchain_on_Jetson"},next:{title:"\u53e3\u7f69\u76f8\u673a - \u57fa\u4e8eJetson Nano\u7684\u4eba\u7fa4\u53e3\u7f69\u4f7f\u7528\u76d1\u6d4b",permalink:"/cn/Jetson-Nano-MaskCam"}},l={},s=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u6570\u636e\u96c6",id:"\u6570\u636e\u96c6",level:2},{value:"\u4e0b\u8f7d\u516c\u5171\u6570\u636e\u96c6",id:"\u4e0b\u8f7d\u516c\u5171\u6570\u636e\u96c6",level:3},{value:"\u6536\u96c6\u548c\u6ce8\u89e3\u6570\u636e\u3002",id:"\u6536\u96c6\u548c\u6ce8\u89e3\u6570\u636e",level:3},{value:"\u6a21\u578b",id:"\u6a21\u578b",level:2},{value:"\u8bad\u7ec3",id:"\u8bad\u7ec3",level:2},{value:"\u9a8c\u8bc1",id:"\u9a8c\u8bc1",level:2},{value:"\u90e8\u7f72",id:"\u90e8\u7f72",level:2},{value:"\u6458\u8981",id:"\u6458\u8981",level:2},{value:"\u6280\u672f\u652f\u6301\u4e0e\u4ea7\u54c1\u8ba8\u8bba",id:"\u6280\u672f\u652f\u6301\u4e0e\u4ea7\u54c1\u8ba8\u8bba",level:2}],g={toc:s},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(c,(0,a.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"\u5982\u4f55\u5728recomputer\u4e0a\u8bad\u7ec3\u548c\u90e8\u7f72yolov8"},"\u5982\u4f55\u5728reComputer\u4e0a\u8bad\u7ec3\u548c\u90e8\u7f72YOLOv8"),(0,r.yg)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,r.yg)("p",null,"\u9762\u5bf9\u65e5\u76ca\u590d\u6742\u548c\u52a8\u6001\u7684\u6311\u6218\uff0c\u4eba\u5de5\u667a\u80fd\u7684\u5e94\u7528\u4e3a\u89e3\u51b3\u95ee\u9898\u5f00\u8f9f\u4e86\u65b0\u9014\u5f84\uff0c\u5e76\u5bf9\u5168\u7403\u793e\u4f1a\u7684\u53ef\u6301\u7eed\u53d1\u5c55\u548c\u4eba\u6c11\u751f\u6d3b\u8d28\u91cf\u7684\u63d0\u9ad8\u505a\u51fa\u4e86\u91cd\u8981\u8d21\u732e\u3002\u901a\u5e38\u5728\u90e8\u7f72\u4eba\u5de5\u667a\u80fd\u7b97\u6cd5\u4e4b\u524d\uff0cAI\u6a21\u578b\u7684\u8bbe\u8ba1\u548c\u8bad\u7ec3\u90fd\u662f\u5728\u9ad8\u6027\u80fd\u8ba1\u7b97\u670d\u52a1\u5668\u4e0a\u8fdb\u884c\u7684\u3002\u4e00\u65e6\u6a21\u578b\u8bad\u7ec3\u5b8c\u6210\uff0c\u5b83\u5c31\u88ab\u5bfc\u51fa\u5230\u8fb9\u7f18\u8ba1\u7b97\u8bbe\u5907\u8fdb\u884c\u63a8\u65ad\u3002\u4e8b\u5b9e\u4e0a\uff0c\u6240\u6709\u8fd9\u4e9b\u8fc7\u7a0b\u90fd\u53ef\u4ee5\u76f4\u63a5\u5728\u8fb9\u7f18\u8ba1\u7b97\u8bbe\u5907\u4e0a\u8fdb\u884c\u3002\u5177\u4f53\u6765\u8bf4\uff0c\u51c6\u5907\u6570\u636e\u96c6\u3001\u8bad\u7ec3\u795e\u7ecf\u7f51\u7edc\u3001\u9a8c\u8bc1\u795e\u7ecf\u7f51\u7edc\u548c\u90e8\u7f72\u6a21\u578b\u7b49\u4efb\u52a1\u90fd\u53ef\u4ee5\u5728\u8fb9\u7f18\u8bbe\u5907\u4e0a\u6267\u884c\u3002\u8fd9\u4e0d\u4ec5\u786e\u4fdd\u4e86\u6570\u636e\u5b89\u5168\uff0c\u8fd8\u8282\u7701\u4e86\u8d2d\u4e70\u989d\u5916\u8bbe\u5907\u7684\u6210\u672c\u3002"),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_J4012.png"})),(0,r.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,r.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/reComputer-J4012-p-5586.html?queryID=3d7dba9378be2accafeaff54420edb6a&objectID=5586&indexName=bazaar_retailer_products"},(0,r.yg)("strong",null,(0,r.yg)("span",null,(0,r.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))),(0,r.yg)("p",null,"\u5728\u8fd9\u4efd\u6587\u6863\u4e2d\uff0c\u6211\u4eec\u5728 ",(0,r.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/reComputer-J4012-p-5586.html?queryID=f6de8f6c8d814c021e13f4455d041d03&objectID=5586&indexName=bazaar_retailer_products"},"reComputer J4012")," \u4e0a\u4e3a\u4ea4\u901a\u573a\u666f\u8bad\u7ec3\u548c\u90e8\u7f72\u7269\u4f53\u68c0\u6d4b\u6a21\u578b\u3002\u672c\u6587\u4ee5 ",(0,r.yg)("a",{parentName:"p",href:"https://www.ultralytics.com/"},"YOLOv8")," \u7269\u4f53\u68c0\u6d4b\u7b97\u6cd5\u4e3a\u4f8b\uff0c\u8be6\u7ec6\u6982\u8ff0\u6574\u4e2a\u8fc7\u7a0b\u3002\u8bf7\u6ce8\u610f\uff0c\u4ee5\u4e0b\u6240\u6709\u64cd\u4f5c\u5747\u5728 Jetson \u8fb9\u7f18\u8ba1\u7b97\u8bbe\u5907\u4e0a\u8fdb\u884c\uff0c\u786e\u4fdd Jetson \u8bbe\u5907\u5b89\u88c5\u4e86 ",(0,r.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/NVIDIA_Jetson/"},"JetPack 5.0")," \u6216\u66f4\u9ad8\u7248\u672c\u7684\u64cd\u4f5c\u7cfb\u7edf\u3002"),(0,r.yg)("h2",{id:"\u6570\u636e\u96c6"},"\u6570\u636e\u96c6"),(0,r.yg)("p",null,"\u673a\u5668\u5b66\u4e60\u7684\u8fc7\u7a0b\u6d89\u53ca\u5728\u7ed9\u5b9a\u6570\u636e\u4e2d\u627e\u5230\u6a21\u5f0f\uff0c\u7136\u540e\u4f7f\u7528\u51fd\u6570\u6355\u83b7\u8fd9\u4e9b\u6a21\u5f0f\u3002\u56e0\u6b64\uff0c\u6570\u636e\u96c6\u7684\u8d28\u91cf\u76f4\u63a5\u5f71\u54cd\u6a21\u578b\u7684\u6027\u80fd\u3002\u4e00\u822c\u6765\u8bf4\uff0c\u8bad\u7ec3\u6570\u636e\u7684\u8d28\u91cf\u548c\u6570\u91cf\u8d8a\u597d\uff0c\u8bad\u7ec3\u7684\u6a21\u578b\u5c31\u8d8a\u597d\u3002\u56e0\u6b64\uff0c\u6570\u636e\u96c6\u7684\u51c6\u5907\u81f3\u5173\u91cd\u8981\u3002"),(0,r.yg)("p",null,"\u6536\u96c6\u8bad\u7ec3\u6570\u636e\u96c6\u7684\u65b9\u6cd5\u6709\u5f88\u591a\u79cd\u3002\u8fd9\u91cc\u4ecb\u7ecd\u4e86\u4e24\u79cd\u65b9\u6cd5\uff1a1. \u4e0b\u8f7d\u9884\u5148\u6ce8\u91ca\u7684\u5f00\u6e90\u516c\u5171\u6570\u636e\u96c6\u30022. \u6536\u96c6\u5e76\u6ce8\u91ca\u8bad\u7ec3\u6570\u636e\u3002\u6700\u540e\uff0c\u6574\u5408\u6240\u6709\u6570\u636e\u4ee5\u51c6\u5907\u540e\u7eed\u7684\u8bad\u7ec3\u9636\u6bb5\u3002"),(0,r.yg)("h3",{id:"\u4e0b\u8f7d\u516c\u5171\u6570\u636e\u96c6"},"\u4e0b\u8f7d\u516c\u5171\u6570\u636e\u96c6"),(0,r.yg)("p",null,"\u516c\u5171\u6570\u636e\u96c6\u662f\u5728\u673a\u5668\u5b66\u4e60\u548c\u4eba\u5de5\u667a\u80fd\u7814\u7a76\u4e2d\u5e7f\u6cdb\u4f7f\u7528\u7684\u5171\u4eab\u6807\u51c6\u5316\u6570\u636e\u8d44\u6e90\u3002\u5b83\u4eec\u4e3a\u7814\u7a76\u4eba\u5458\u63d0\u4f9b\u4e86\u8bc4\u4f30\u7b97\u6cd5\u6027\u80fd\u7684\u6807\u51c6\u57fa\u51c6\uff0c\u4fc3\u8fdb\u9886\u57df\u5185\u7684\u521b\u65b0\u548c\u5408\u4f5c\u3002\u8fd9\u4e9b\u6570\u636e\u96c6\u63a8\u52a8\u7740\u4eba\u5de5\u667a\u80fd\u793e\u533a\u671d\u7740\u66f4\u52a0\u5f00\u653e\u3001\u521b\u65b0\u548c\u53ef\u6301\u7eed\u7684\u65b9\u5411\u53d1\u5c55\u3002"),(0,r.yg)("p",null,"\u5728\u8bb8\u591a\u5e73\u53f0\u4e0a\uff0c\u60a8\u53ef\u4ee5\u81ea\u7531\u4e0b\u8f7d\u6570\u636e\u96c6\uff0c\u4f8b\u5982\n",(0,r.yg)("a",{parentName:"p",href:"https://roboflow.com/"},"Roboflow"),",\n",(0,r.yg)("a",{parentName:"p",href:"https://www.kaggle.com/"},"Kaggle"),",\n\u7b49\u7b49\u3002\u8fd9\u91cc\uff0c\u6211\u4eec\u4ece Kaggle \u4e0b\u8f7d\u4e00\u4e2a\u6709\u5173\u4ea4\u901a\u573a\u666f\u7684\u6807\u6ce8\u6570\u636e\u96c6\uff0c\u540d\u4e3a, ",(0,r.yg)("a",{parentName:"p",href:"https://www.kaggle.com/datasets/yusufberksardoan/traffic-detection-project/download?datasetVersionNumber=1"},"Traffic Detection Project"),", "),(0,r.yg)("p",null,"\u63d0\u53d6\u540e\u7684\u6587\u4ef6\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"archive\n\u251c\u2500\u2500 data.yaml\n\u251c\u2500\u2500 README.dataset.txt\n\u251c\u2500\u2500 README.roboflow.txt\n\u251c\u2500\u2500 test\n\u2502   \u251c\u2500\u2500 images\n\u2502   \u2502   \u251c\u2500\u2500 aguanambi-1000_png_jpg.rf.7179a0df58ad6448028bc5bc21dca41e.jpg\n\u2502   \u2502   \u251c\u2500\u2500 aguanambi-1095_png_jpg.rf.4d9f0370f1c09fb2a1d1666b155911e3.jpg\n\u2502   \u2502   \u251c\u2500\u2500 ...\n\u2502   \u2514\u2500\u2500 labels\n\u2502       \u251c\u2500\u2500 aguanambi-1000_png_jpg.rf.7179a0df58ad6448028bc5bc21dca41e.txt\n\u2502       \u251c\u2500\u2500 aguanambi-1095_png_jpg.rf.4d9f0370f1c09fb2a1d1666b155911e3.txt\n\u2502       \u251c\u2500\u2500 ...\n\u251c\u2500\u2500 train\n\u2502   \u251c\u2500\u2500 images\n\u2502   \u2502   \u251c\u2500\u2500 aguanambi-1000_png_jpg.rf.0ab6f274892b9b370e6441886b2d7b9d.jpg\n\u2502   \u2502   \u251c\u2500\u2500 aguanambi-1000_png_jpg.rf.dc59d3c5df5d991c1475e5957ea9948c.jpg\n\u2502   \u2502   \u251c\u2500\u2500 ...\n\u2502   \u2514\u2500\u2500 labels\n\u2502       \u251c\u2500\u2500 aguanambi-1000_png_jpg.rf.0ab6f274892b9b370e6441886b2d7b9d.txt\n\u2502       \u251c\u2500\u2500 aguanambi-1000_png_jpg.rf.dc59d3c5df5d991c1475e5957ea9948c.txt\n\u2502       \u251c\u2500\u2500 ...\n\u2514\u2500\u2500 valid\n    \u251c\u2500\u2500 images\n    \u2502   \u251c\u2500\u2500 aguanambi-1085_png_jpg.rf.0608a42a5c9090a4efaf9567f80fa992.jpg\n    \u2502   \u251c\u2500\u2500 aguanambi-1105_png_jpg.rf.0aa6c5d1769ce60a33d7b51247f2a627.jpg\n    \u2502   \u251c\u2500\u2500 ...\n    \u2514\u2500\u2500 labels\n        \u251c\u2500\u2500 aguanambi-1085_png_jpg.rf.0608a42a5c9090a4efaf9567f80fa992.txt\n        \u251c\u2500\u2500 aguanambi-1105_png_jpg.rf.0aa6c5d1769ce60a33d7b51247f2a627.txt\n        \u251c\u2500\u2500...\n")),(0,r.yg)("p",null,"\u6bcf\u4e2a\u56fe\u50cf\u90fd\u6709\u4e00\u4e2a\u76f8\u5e94\u7684\u6587\u672c\u6587\u4ef6\uff0c\u5176\u4e2d\u5305\u542b\u8be5\u56fe\u50cf\u7684\u5b8c\u6574\u6ce8\u91ca\u4fe1\u606f\u3002",(0,r.yg)("inlineCode",{parentName:"p"},"data.json"),"\u6587\u4ef6\u8bb0\u5f55\u4e86\u8bad\u7ec3\u3001\u6d4b\u8bd5\u548c\u9a8c\u8bc1\u96c6\u7684\u4f4d\u7f6e\uff0c\u60a8\u9700\u8981\u4fee\u6539\u8def\u5f84\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},"train: ./train/images\nval: ./valid/images\ntest: ./test/images\n\nnc: 5\nnames: ['bicycle', 'bus', 'car', 'motorbike', 'person']\n")),(0,r.yg)("h3",{id:"\u6536\u96c6\u548c\u6ce8\u89e3\u6570\u636e"},"\u6536\u96c6\u548c\u6ce8\u89e3\u6570\u636e\u3002"),(0,r.yg)("p",null,"\u5f53\u516c\u5171\u6570\u636e\u96c6\u65e0\u6cd5\u6ee1\u8db3\u7528\u6237\u9700\u6c42\u65f6\uff0c\u9700\u8981\u8003\u8651\u6536\u96c6\u548c\u521b\u5efa\u5b9a\u5236\u6570\u636e\u96c6\uff0c\u4ee5\u6ee1\u8db3\u7279\u5b9a\u9700\u6c42\u3002\u53ef\u4ee5\u901a\u8fc7\u6536\u96c6\u3001\u6807\u6ce8\u548c\u7ec4\u7ec7\u76f8\u5173\u6570\u636e\u6765\u5b9e\u73b0\u8fd9\u4e00\u76ee\u6807\u3002\n\u4e3a\u4e86\u6f14\u793a\u76ee\u7684\uff0c\u6211\u4ece",(0,r.yg)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=iJZcjZD0fw0"},"YouTube"),"\u4e0a\u6355\u6349\u5e76\u4fdd\u5b58\u4e86\u4e09\u5f20\u56fe\u7247\uff0c\u5c1d\u8bd5\u4f7f\u7528",(0,r.yg)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=iJZcjZD0fw0"},"Label Studio"),"\u6765\u6807\u6ce8\u8fd9\u4e9b\u56fe\u7247\u3002"),(0,r.yg)("p",null,"\u7b2c1\u6b65\u3002\u6536\u96c6\u539f\u59cb\u6570\u636e\uff1a"),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_is_all_you_need/raw_datas.png"})),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u6b65\u9aa42.")," \u5b89\u88c5\u5e76\u8fd0\u884c\u6807\u6ce8\u5de5\u5177\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"sudo groupadd docker\nsudo gpasswd -a ${USER} docker\nsudo systemctl restart docker\nsudo chmod a+rw /var/run/docker.sock\n\nmkdir label_studio_data\nsudo chmod -R 776 label_studio_data\ndocker run -it -p 8080:8080 -v $(pwd)/label_studio_data:/label-studio/data heartexlabs/label-studio:latest\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 3.")," \u521b\u5efa\u4e00\u4e2a\u65b0\u9879\u76ee\uff0c\u5e76\u6839\u636e\u63d0\u793a\u5b8c\u6210\u6807\u6ce8\u3002\n",(0,r.yg)("a",{parentName:"p",href:"https://labelstud.io/blog/quickly-create-datasets-for-training-yolo-object-detection-with-label-studio/#output-the-dataset-in-yolo-format"},"\u6807\u7b7e\u5de5\u4f5c\u5ba4\u53c2\u8003\u6587\u6863\u3002")),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_is_all_you_need/labeling.png"})),(0,r.yg)("p",null,"\u5b8c\u6210\u6807\u6ce8\u540e\uff0c\u60a8\u53ef\u4ee5\u5c06\u6570\u636e\u96c6\u4ee5YOLO\u683c\u5f0f\u5bfc\u51fa\uff0c\u5e76\u5c06\u6807\u6ce8\u6570\u636e\u4e0e\u4e0b\u8f7d\u7684\u6570\u636e\u6574\u7406\u5728\u4e00\u8d77\u3002\u6700\u7b80\u5355\u7684\u65b9\u6cd5\u662f\u5c06\u6240\u6709\u56fe\u50cf\u590d\u5236\u5230\u516c\u5171\u6570\u636e\u96c6\u7684train/images\u6587\u4ef6\u5939\u4e2d\uff0c\u5c06\u751f\u6210\u7684\u6807\u6ce8\u6587\u672c\u6587\u4ef6\u590d\u5236\u5230\u516c\u5171\u6570\u636e\u96c6\u7684train/labels\u6587\u4ef6\u5939\u4e2d\u3002"),(0,r.yg)("p",null,"\u6b64\u65f6\uff0c\u6211\u4eec\u5df2\u7ecf\u901a\u8fc7\u4e24\u79cd\u4e0d\u540c\u7684\u65b9\u6cd5\u83b7\u53d6\u4e86\u8bad\u7ec3\u6570\u636e\u5e76\u8fdb\u884c\u4e86\u6574\u5408\u3002\u5982\u679c\u60a8\u5e0c\u671b\u83b7\u5f97\u66f4\u9ad8\u8d28\u91cf\u7684\u8bad\u7ec3\u6570\u636e\uff0c\u8fd8\u6709\u8bb8\u591a\u989d\u5916\u7684\u6b65\u9aa4\u9700\u8981\u8003\u8651\uff0c\u6bd4\u5982\u6570\u636e\u6e05\u6d17\u3001\u7c7b\u522b\u5e73\u8861\u7b49\u3002\u7531\u4e8e\u6211\u4eec\u7684\u4efb\u52a1\u76f8\u5bf9\u7b80\u5355\uff0c\u6211\u4eec\u5c06\u6682\u65f6\u8df3\u8fc7\u8fd9\u4e9b\u6b65\u9aa4\uff0c\u5e76\u4f7f\u7528\u4e0a\u9762\u83b7\u5f97\u7684\u6570\u636e\u8fdb\u884c\u8bad\u7ec3\u3002"),(0,r.yg)("h2",{id:"\u6a21\u578b"},"\u6a21\u578b"),(0,r.yg)("p",null,"\u5728\u8fd9\u4e00\u90e8\u5206\uff0c\u6211\u4eec\u5c06\u5728reComputer\u4e0a\u4e0b\u8f7dYOLOv8\u6e90\u4ee3\u7801\uff0c\u5e76\u914d\u7f6e\u8fd0\u884c\u65f6\u73af\u5883\u3002"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u7b2c1\u6b65\u3002"),"\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u4e0b\u8f7d\u6e90\u4ee3\u7801\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/ultralytics/ultralytics.git\ncd ultralytics\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u7b2c2\u6b65.")," \u6253\u5f00requirements.txt\u5e76\u4fee\u6539\u76f8\u5173\u5185\u5bb9\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"# Use the `vi` command to open the file\nvi requirements.txt\n\n# Press `a` to enter edit mode, and modify the following content:\ntorch>=1.7.0 --\x3e # torch>=1.7.0\ntorchvision>=0.8.1 --\x3e # torchvision>=0.8.1\n\n# Press `ESC` to exit edit mode, and finally input `:wq` to save and exit the file.\n\n\u7b2c3\u6b65\u3002\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u4e0b\u8f7dYOLO\u6240\u9700\u7684\u4f9d\u8d56\u5e76\u5b89\u88c5YOLOv8\uff1a\npip3 install -e .\ncd ..\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u7b2c4\u6b65.")," \u5b89\u88c5Jetson\u7248\u672c\u7684PyTorch\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install -y libopenblas-base libopenmpi-dev\nwget https://developer.download.nvidia.cn/compute/redist/jp/v512/pytorch/torch-2.1.0a0+41361538.nv23.06-cp38-cp38-linux_aarch64.whl -O torch-2.1.0a0+41361538.nv23.06-cp38-cp38-linux_aarch64.whl\npip3 install torch-2.1.0a0+41361538.nv23.06-cp38-cp38-linux_aarch64.whl\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u7b2c5\u6b65.")," \u5b89\u88c5\u5bf9\u5e94\u7684torchvision\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"sudo apt install -y libjpeg-dev zlib1g-dev\ngit clone --branch v0.16.0 https://github.com/pytorch/vision torchvision\ncd torchvision\npython3 setup.py install --user\ncd ..\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u7b2c6\u6b65.")," \u8bf7\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u786e\u4fddYOLO\u5df2\u6210\u529f\u5b89\u88c5\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"yolo detect predict model=yolov8s.pt source='https://ultralytics.com/images/bus.jpg'\n")),(0,r.yg)("h2",{id:"\u8bad\u7ec3"},"\u8bad\u7ec3"),(0,r.yg)("p",null,"\u6a21\u578b\u8bad\u7ec3\u662f\u66f4\u65b0\u6a21\u578b\u6743\u91cd\u7684\u8fc7\u7a0b\u3002\u901a\u8fc7\u5bf9\u6a21\u578b\u8fdb\u884c\u8bad\u7ec3\uff0c\u673a\u5668\u5b66\u4e60\u7b97\u6cd5\u53ef\u4ee5\u4ece\u6570\u636e\u4e2d\u5b66\u4e60\u8bc6\u522b\u6a21\u5f0f\u548c\u5173\u7cfb\uff0c\u4ece\u800c\u5b9e\u73b0\u5bf9\u65b0\u6570\u636e\u7684\u9884\u6d4b\u548c\u51b3\u7b56\u3002"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u7b2c1\u6b65\u3002"),"\u521b\u5efa\u4e00\u4e2a\u7528\u4e8e\u8bad\u7ec3\u7684Python\u811a\u672c\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"vi train.py\n")),(0,r.yg)("p",null,"\u8bf7\u6309",(0,r.yg)("inlineCode",{parentName:"p"},"a"),"\u952e\u8fdb\u5165\u7f16\u8f91\u6a21\u5f0f\uff0c\u5e76\u4fee\u6539\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"from ultralytics import YOLO\n\n# \u52a0\u8f7d\u6a21\u578b\nmodel = YOLO('yolov8s.pt')\n\n# \u8bad\u7ec3\u6a21\u578b\u3002\nresults = model.train(\n    data='/home/nvidia/Everything_Happens_Locally/Dataset/data.yaml', \n    batch=8, epochs=100, imgsz=640, save_period=5\n)\n")),(0,r.yg)("p",null,"\u6309",(0,r.yg)("inlineCode",{parentName:"p"},"ESC"),"\u9000\u51fa\u7f16\u8f91\u6a21\u5f0f\uff0c\u6700\u540e\u8f93\u5165",(0,r.yg)("inlineCode",{parentName:"p"},":wq"),"\u4fdd\u5b58\u5e76\u9000\u51fa\u6587\u4ef6\u3002",(0,r.yg)("inlineCode",{parentName:"p"},"YOLO.train()"),"\u65b9\u6cd5\u6709\u5f88\u591a\u914d\u7f6e\u53c2\u6570\uff1b\u8bf7\u53c2\u8003",(0,r.yg)("a",{parentName:"p",href:"https://docs.ultralytics.com/modes/train/#arguments"},"\u6587\u6863"),"\u83b7\u53d6\u8be6\u7ec6\u4fe1\u606f\u3002\u6b64\u5916\uff0c\u60a8\u8fd8\u53ef\u4ee5\u4f7f\u7528\u66f4\u7b80\u6d01\u7684",(0,r.yg)("inlineCode",{parentName:"p"},"CLI"),"\u65b9\u6cd5\u6839\u636e\u60a8\u7684\u7279\u5b9a\u8981\u6c42\u5f00\u59cb\u8bad\u7ec3\u3002"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u7b2c2\u6b65.")," \u8bf7\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5f00\u59cb\u8bad\u7ec3\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"python3 train.py\n")),(0,r.yg)("p",null,"\u63a5\u4e0b\u6765\u662f\u6f2b\u957f\u7684\u7b49\u5f85\u8fc7\u7a0b\u3002\u8003\u8651\u5230\u5728\u7b49\u5f85\u8fc7\u7a0b\u4e2d\u5173\u95ed\u8fdc\u7a0b\u8fde\u63a5\u7a97\u53e3\u7684\u53ef\u80fd\u6027\uff0c\u672c\u6559\u7a0b\u4f7f\u7528",(0,r.yg)("a",{parentName:"p",href:"https://github.com/tmux/tmux/wiki"},"Tmux"),"\u7ec8\u7aef\u590d\u7528\u5668\u3002\u56e0\u6b64\uff0c\u6211\u5728\u6574\u4e2a\u8fc7\u7a0b\u4e2d\u770b\u5230\u7684\u754c\u9762\u662f\u8fd9\u6837\u7684\uff1a"),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_is_all_you_need/training.png"})),(0,r.yg)("p",null,"Tmux\u662f\u53ef\u9009\u7684\uff1b\u53ea\u8981\u6a21\u578b\u6b63\u5e38\u8bad\u7ec3\u5373\u53ef\u3002\u8bad\u7ec3\u7a0b\u5e8f\u5b8c\u6210\u540e\uff0c\u60a8\u53ef\u4ee5\u5728\u6307\u5b9a\u6587\u4ef6\u5939\u4e2d\u627e\u5230\u5728\u8bad\u7ec3\u8fc7\u7a0b\u4e2d\u4fdd\u5b58\u7684\u6a21\u578b\u6743\u91cd\u6587\u4ef6\u3002"),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_is_all_you_need/models.png"})),(0,r.yg)("h2",{id:"\u9a8c\u8bc1"},"\u9a8c\u8bc1"),(0,r.yg)("p",null,"\u9a8c\u8bc1\u8fc7\u7a0b\u5305\u62ec\u4f7f\u7528\u90e8\u5206\u6570\u636e\u6765\u9a8c\u8bc1\u6a21\u578b\u7684\u53ef\u9760\u6027\u3002\u8fd9\u4e2a\u8fc7\u7a0b\u6709\u52a9\u4e8e\u786e\u4fdd\u6a21\u578b\u80fd\u591f\u5728\u771f\u5b9e\u4e16\u754c\u7684\u5e94\u7528\u4e2d\u51c6\u786e\u800c\u7a33\u5065\u5730\u6267\u884c\u4efb\u52a1\u3002\u5982\u679c\u4f60\u4ed4\u7ec6\u89c2\u5bdf\u8bad\u7ec3\u8fc7\u7a0b\u4e2d\u7684\u4fe1\u606f\u8f93\u51fa\uff0c\u4f60\u4f1a\u6ce8\u610f\u5230\u8bb8\u591a\u9a8c\u8bc1\u8fc7\u7a0b\u7a7f\u63d2\u5728\u8bad\u7ec3\u4e2d\u3002\u672c\u8282\u4e0d\u4f1a\u5206\u6790\u6bcf\u4e2a\u8bc4\u4f30\u6307\u6807\u7684\u542b\u4e49\uff0c\u800c\u662f\u901a\u8fc7\u68c0\u67e5\u9884\u6d4b\u7ed3\u679c\u6765\u5206\u6790\u6a21\u578b\u7684\u53ef\u7528\u6027\u3002"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 1.")," \u4f7f\u7528\u8bad\u7ec3\u597d\u7684\u6a21\u578b\u6765\u63a8\u65ad\u7279\u5b9a\u56fe\u50cf\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"yolo detect predict \\\n    model='./runs/detect/train2/weights/best.pt' \\ \n    source='./datas/test/images/ant_sales-2615_png_jpg.rf.0ceaf2af2a89d4080000f35af44d1b03.jpg' \\\n    save=True show=False\n")),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_is_all_you_need/inference_cmd.png"})),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 2.")," \u67e5\u770b\u63a8\u7406\u7ed3\u679c\u3002"),(0,r.yg)("p",null,"\u6839\u636e\u68c0\u6d4b\u7ed3\u679c\uff0c\u53ef\u4ee5\u89c2\u5bdf\u5230\u8bad\u7ec3\u6a21\u578b\u8fbe\u5230\u4e86\u9884\u671f\u7684\u68c0\u6d4b\u6027\u80fd\u3002"),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_is_all_you_need/inference.jpeg"})),(0,r.yg)("h2",{id:"\u90e8\u7f72"},"\u90e8\u7f72"),(0,r.yg)("p",null,"\u90e8\u7f72\u662f\u5c06\u7ecf\u8fc7\u8bad\u7ec3\u7684\u673a\u5668\u5b66\u4e60\u6216\u6df1\u5ea6\u5b66\u4e60\u6a21\u578b\u5e94\u7528\u4e8e\u771f\u5b9e\u573a\u666f\u7684\u8fc7\u7a0b\u3002\u4e0a\u9762\u4ecb\u7ecd\u7684\u5185\u5bb9\u5df2\u7ecf\u9a8c\u8bc1\u4e86\u6a21\u578b\u7684\u53ef\u884c\u6027\uff0c\u4f46\u5e76\u672a\u8003\u8651\u6a21\u578b\u7684\u63a8\u7406\u6548\u7387\u3002\u5728\u90e8\u7f72\u9636\u6bb5\uff0c\u6709\u5fc5\u8981\u5728\u68c0\u6d4b\u7cbe\u5ea6\u548c\u6548\u7387\u4e4b\u95f4\u627e\u5230\u5e73\u8861\u3002\u53ef\u4ee5\u4f7f\u7528TensorRT\u63a8\u7406\u5f15\u64ce\u6765\u63d0\u9ad8\u6a21\u578b\u7684\u63a8\u7406\u901f\u5ea6\u3002"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 1.")," \u4e3a\u4e86\u76f4\u89c2\u5c55\u793a\u8f7b\u91cf\u7ea7\u6a21\u578b\u548c\u539f\u59cb\u6a21\u578b\u4e4b\u95f4\u7684\u5bf9\u6bd4\uff0c\u4f7f\u7528vi\u5de5\u5177\u521b\u5efa\u4e00\u4e2a\u65b0\u7684",(0,r.yg)("inlineCode",{parentName:"p"},"inference.py"),"\u6587\u4ef6\u6765\u5b9e\u73b0\u89c6\u9891\u6587\u4ef6\u63a8\u65ad\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539\u7b2c8\u548c\u7b2c9\u884c\u6765\u66ff\u6362\u63a8\u65ad\u6a21\u578b\u548c\u8f93\u5165\u89c6\u9891\u3002\u6b64\u6587\u6863\u4e2d\u7684\u8f93\u5165\u662f\u6211\u7528\u624b\u673a\u62cd\u6444\u7684\u89c6\u9891\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},"from ultralytics import YOLO\nimport os\nimport cv2\nimport time\nimport datetime\n\n\nmodel = YOLO(\"/home/nvidia/Everything_Happens_Locally/runs/detect/train2/weights/best.pt\")\ncap = cv2.VideoCapture('./sample_video.mp4')\n\nsave_dir = os.path.join('runs/inference_test', datetime.datetime.now().strftime('%Y-%m-%d-%H-%M-%S'))\nif not os.path.exists(save_dir):\n    os.makedirs(save_dir)\nfourcc = cv2.VideoWriter_fourcc(*'mp4v')\nfps = cap.get(cv2.CAP_PROP_FPS)\nsize = (int(cap.get(cv2.CAP_PROP_FRAME_WIDTH)), int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT)))\noutput = cv2.VideoWriter(os.path.join(save_dir, 'result.mp4'), fourcc, fps, size)\n\nwhile cap.isOpened():\n    success, frame = cap.read()\n    if success:\n        start_time = time.time()\n        results = model(frame)\n        annotated_frame = results[0].plot()\n        total_time = time.time() - start_time\n        fps = 1/total_time\n        cv2.rectangle(annotated_frame, (20, 20), (200, 60), (55, 104, 0), -1)\n        cv2.putText(annotated_frame, f'FPS: {round(fps, 2)}', (30, 50), 0, 0.9, (255, 255, 255), thickness=2, lineType=cv2.LINE_AA)\n        print(f'FPS: {fps}')\n        cv2.imshow(\"YOLOv8 Inference\", annotated_frame)\n        output.write(annotated_frame)\n        if cv2.waitKey(1) & 0xFF == ord(\"q\"):\n            break\n    else:\n        break\n\ncv2.destroyAllWindows()\ncap.release()\noutput.release()\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 2.")," \u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u5e76\u8bb0\u5f55\u6a21\u578b\u91cf\u5316\u4e4b\u524d\u7684\u63a8\u7406\u901f\u5ea6\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"python3 inference.py\n")),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_is_all_you_need/inference_pt.png"})),(0,r.yg)("p",null,"\u6a21\u578b\u91cf\u5316\u4e4b\u524d\u7684\u63a8\u7406\u901f\u5ea6\u4e3a21.9\u5e27\u6bcf\u79d2\u3002"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 3.")," \u751f\u6210\u91cf\u5316\u6a21\u578b\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"pip3 install onnx\nyolo export model=/home/nvidia/Everything_Happens_Locally/runs/detect/train2/weights/best.pt format=engine half=True device=0\n")),(0,r.yg)("p",null,"\u5b8c\u6210\u7a0b\u5e8f\u540e(\u5927\u7ea610-20\u5206\u949f)\uff0c\u5728\u4e0e\u8f93\u5165\u6a21\u578b\u76f8\u540c\u7684\u76ee\u5f55\u4e2d\u5c06\u751f\u6210\u4e00\u4e2a",(0,r.yg)("inlineCode",{parentName:"p"},".engine"),"\u6587\u4ef6\u3002\u8fd9\u4e2a\u6587\u4ef6\u662f\u91cf\u5316\u540e\u7684\u6a21\u578b\u3002"),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_is_all_you_need/model_engine.png"})),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 4.")," \u4f7f\u7528\u91cf\u5316\u6a21\u578b\u6d4b\u8bd5\u63a8\u65ad\u901f\u5ea6\u3002"),(0,r.yg)("p",null,"\u5728\u8fd9\u91cc\uff0c\u60a8\u9700\u8981\u4fee\u6539\u5728\u7b2c1\u6b65\u521b\u5efa\u7684\u811a\u672c\u4e2d\u7684\u7b2c8\u884c\u5185\u5bb9\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"model = YOLO(<path to .pt>) --\x3e model = YOLO(<path to .engine>)\n")),(0,r.yg)("p",null,"\u7136\u540e\uff0c\u91cd\u65b0\u8fd0\u884c\u63a8\u65ad\u547d\u4ee4\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"python3 inference.py\n")),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_is_all_you_need/inference_engine.png"})),(0,r.yg)("p",null,"\u4ece\u63a8\u7406\u6548\u7387\u7684\u89d2\u5ea6\u6765\u770b\uff0c\u91cf\u5316\u6a21\u578b\u663e\u793a\u51fa\u63a8\u7406\u901f\u5ea6\u663e\u8457\u63d0\u9ad8\u3002"),(0,r.yg)("h2",{id:"\u6458\u8981"},"\u6458\u8981"),(0,r.yg)("p",null,"\u672c\u6587\u4e3a\u8bfb\u8005\u63d0\u4f9b\u4e86\u4e00\u4e2a\u5168\u9762\u6307\u5357\uff0c\u6db5\u76d6\u4e86\u4ece\u6570\u636e\u6536\u96c6\u548c\u6a21\u578b\u8bad\u7ec3\u5230\u90e8\u7f72\u7684\u5404\u4e2a\u65b9\u9762\u3002\u91cd\u8981\u7684\u662f\uff0c\u6240\u6709\u7684\u6d41\u7a0b\u90fd\u5728reComputer\u4e2d\u8fdb\u884c\uff0c\u6d88\u9664\u4e86\u7528\u6237\u989d\u5916\u9700\u8981GPU\u7684\u9700\u6c42\u3002"),(0,r.yg)("h2",{id:"\u6280\u672f\u652f\u6301\u4e0e\u4ea7\u54c1\u8ba8\u8bba"},"\u6280\u672f\u652f\u6301\u4e0e\u4ea7\u54c1\u8ba8\u8bba"),(0,r.yg)("p",null,"\u611f\u8c22\u60a8\u9009\u62e9\u6211\u4eec\u7684\u4ea7\u54c1\uff01\u6211\u4eec\u5728\u8fd9\u91cc\u4e3a\u60a8\u63d0\u4f9b\u4e0d\u540c\u7684\u652f\u6301\uff0c\u4ee5\u786e\u4fdd\u60a8\u5bf9\u6211\u4eec\u7684\u4ea7\u54c1\u7684\u4f53\u9a8c\u5c3d\u53ef\u80fd\u987a\u5229\u3002\u6211\u4eec\u63d0\u4f9b\u591a\u79cd\u6c9f\u901a\u6e20\u9053\uff0c\u4ee5\u6ee1\u8db3\u4e0d\u540c\u7684\u504f\u597d\u548c\u9700\u6c42\u3002"),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,r.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,r.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}u.isMDXComponent=!0}}]);