"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[75435],{15680:(e,n,a)=>{a.d(n,{xA:()=>m,yg:()=>y});var t=a(96540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function p(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=t.createContext({}),i=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},m=function(e){var n=i(e.components);return t.createElement(s.Provider,{value:n},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),g=i(a),c=r,y=g["".concat(s,".").concat(c)]||g[c]||u[c]||l;return a?t.createElement(y,o(o({ref:n},m),{},{components:a})):t.createElement(y,o({ref:n},m))}));function y(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=c;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p[g]="string"==typeof e?e:r,o[1]=p;for(var i=2;i<l;i++)o[i]=a[i];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},43877:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>i});var t=a(58168),r=(a(96540),a(15680));const l={description:"\u53e3\u7f69\u76f8\u673a - \u57fa\u4e8eJetson Nano\u7684\u4eba\u7fa4\u53e3\u7f69\u4f7f\u7528\u76d1\u6d4b",title:"\u53e3\u7f69\u76f8\u673a - \u57fa\u4e8eJetson Nano\u7684\u4eba\u7fa4\u53e3\u7f69\u4f7f\u7528\u76d1\u6d4b",keywords:["Edge","reComputer Application"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/Jetson-Nano-MaskCam",last_update:{date:"01/04/2023",author:"w0x7ce"},no_comments:!1},o="\u53e3\u7f69\u76f8\u673a - \u57fa\u4e8eJetson Nano\u7684\u4eba\u7fa4\u53e3\u7f69\u4f7f\u7528\u76d1\u6d4b",p={unversionedId:"zh-CN/Edge/NVIDIA_Jetson/Application/Computer_Vision/Jetson-Nano-MaskCam",id:"zh-CN/Edge/NVIDIA_Jetson/Application/Computer_Vision/Jetson-Nano-MaskCam",title:"\u53e3\u7f69\u76f8\u673a - \u57fa\u4e8eJetson Nano\u7684\u4eba\u7fa4\u53e3\u7f69\u4f7f\u7528\u76d1\u6d4b",description:"\u53e3\u7f69\u76f8\u673a - \u57fa\u4e8eJetson Nano\u7684\u4eba\u7fa4\u53e3\u7f69\u4f7f\u7528\u76d1\u6d4b",source:"@site/docs/zh-CN/Edge/NVIDIA_Jetson/Application/Computer_Vision/Jetson-Nano-MaskCam.md",sourceDirName:"zh-CN/Edge/NVIDIA_Jetson/Application/Computer_Vision",slug:"/cn/Jetson-Nano-MaskCam",permalink:"/cn/Jetson-Nano-MaskCam",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/zh-CN/Edge/NVIDIA_Jetson/Application/Computer_Vision/Jetson-Nano-MaskCam.md",tags:[],version:"current",lastUpdatedBy:"w0x7ce",lastUpdatedAt:1672790400,formattedLastUpdatedAt:"Jan 4, 2023",frontMatter:{description:"\u53e3\u7f69\u76f8\u673a - \u57fa\u4e8eJetson Nano\u7684\u4eba\u7fa4\u53e3\u7f69\u4f7f\u7528\u76d1\u6d4b",title:"\u53e3\u7f69\u76f8\u673a - \u57fa\u4e8eJetson Nano\u7684\u4eba\u7fa4\u53e3\u7f69\u4f7f\u7528\u76d1\u6d4b",keywords:["Edge","reComputer Application"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/Jetson-Nano-MaskCam",last_update:{date:"01/04/2023",author:"w0x7ce"},no_comments:!1},sidebar:"CNSidebar",previous:{title:"\u5982\u4f55\u5728reComputer\u4e0a\u8bad\u7ec3\u548c\u90e8\u7f72YOLOv8",permalink:"/cn/How_to_Train_and_Deploy_YOLOv8_on_reComputer"},next:{title:"\u5200\u5177\u68c0\u6d4b\uff1a\u57fa\u4e8ereComputer\u90e8\u7f72\u5728Triton\u63a8\u7406\u670d\u52a1\u5668\u4e0a\u7684\u7269\u4f53\u68c0\u6d4b\u6a21\u578b",permalink:"/cn/Security_Scan"}},s={},i=[{value:"<strong>\u7b80\u4ecb</strong>",id:"\u7b80\u4ecb",level:2},{value:"<strong>\u51c6\u5907\u5de5\u4f5c\u3002</strong>",id:"\u51c6\u5907\u5de5\u4f5c",level:2},{value:"<strong>\u786c\u4ef6\u8981\u6c42</strong>",id:"\u786c\u4ef6\u8981\u6c42",level:3},{value:"<strong>\u8f6f\u4ef6\u9700\u6c42</strong>",id:"\u8f6f\u4ef6\u9700\u6c42",level:3},{value:"<strong>\u5f00\u59cb\u5427\u3002</strong>",id:"\u5f00\u59cb\u5427",level:2},{value:"<strong>Jetson Nano \u8bbe\u7f6e</strong>",id:"jetson-nano-\u8bbe\u7f6e",level:3},{value:"<strong>MQTT\u670d\u52a1\u5668\u8bbe\u7f6e</strong>",id:"mqtt\u670d\u52a1\u5668\u8bbe\u7f6e",level:3},{value:"\u6280\u672f\u652f\u6301\u4e0e\u4ea7\u54c1\u8ba8\u8bba",id:"\u6280\u672f\u652f\u6301\u4e0e\u4ea7\u54c1\u8ba8\u8bba",level:2}],m={toc:i},g="wrapper";function u(e){let{components:n,...a}=e;return(0,r.yg)(g,(0,t.A)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"\u53e3\u7f69\u76f8\u673a---\u57fa\u4e8ejetson-nano\u7684\u4eba\u7fa4\u53e3\u7f69\u4f7f\u7528\u76d1\u6d4b"},"\u53e3\u7f69\u76f8\u673a - \u57fa\u4e8eJetson Nano\u7684\u4eba\u7fa4\u53e3\u7f69\u4f7f\u7528\u76d1\u6d4b"),(0,r.yg)("h2",{id:"\u7b80\u4ecb"},(0,r.yg)("strong",{parentName:"h2"},"\u7b80\u4ecb")),(0,r.yg)("p",null,"\u7531\u4e8e\u65b0\u51a0\u75ab\u60c5\u7684\u7834\u574f\uff0c\u5728\u8bb8\u591a\u516c\u5171\u573a\u6240\uff0c\u6211\u4eec\u7ecf\u5e38\u770b\u5230\u8981\u6c42\u4f69\u6234\u53e3\u7f69\u3002\u901a\u5e38\u5728\u533a\u57df\u95e8\u53e3\u6709\u7ba1\u7406\u4eba\u5458\u89c2\u5bdf\u4eba\u4eec\u662f\u5426\u4f69\u6234\u53e3\u7f69\u3002\u5bf9\u4e8e\u4eba\u7c7b\u6765\u8bf4\uff0c\u8fd9\u53ef\u80fd\u662f\u4e00\u4e2a\u975e\u5e38\u7b80\u5355\u7684\u4efb\u52a1\uff0c\u4f46\u5982\u679c\u6211\u4eec\u5c06\u5176\u4e0eJetson Nano\u3001\u56fe\u5f62\u6355\u6349\u548c\u8fb9\u7f18\u8ba1\u7b97\u76f8\u7ed3\u5408\uff0c\u8fd9\u5c06\u662f\u4e00\u4e2a\u975e\u5e38\u6709\u8da3\u548c\u5177\u6709\u793e\u4f1a\u4ef7\u503c\u7684\u4efb\u52a1\u3002"),(0,r.yg)("p",null,"MaskCam\u7531\u4f2f\u514b\u5229\u8bbe\u8ba1\u6280\u672f\u516c\u53f8\uff08BDTI\uff09\u548cTryolabs S.A.\u5f00\u53d1\uff0c\u5f00\u53d1\u8d44\u91d1\u7531NVIDIA\u63d0\u4f9b\u3002MaskCam\u91c7\u7528MIT\u8bb8\u53ef\u8bc1\u53d1\u5e03\u3002\u6709\u5173MaskCam\u7684\u66f4\u591a\u4fe1\u606f\uff0c",(0,r.yg)("a",{parentName:"p",href:"https://www.bdti.com/maskcam"},"\u8bf7\u53c2\u9605BDTI\u7684\u62a5\u544a"),"\u3002\u5982\u679c\u60a8\u6709\u7591\u95ee\uff0c\u8bf7\u53d1\u9001\u7535\u5b50\u90ae\u4ef6\u81f3",(0,r.yg)("a",{parentName:"p",href:"mailto:maskcam@bdti.com"},"maskcam@bdti.com"),"\u3002"),(0,r.yg)("p",null,"\u5728\u8fd9\u4e2a\u9879\u76ee\u4e2d\uff0c\u6211\u4eec\u5c06\u4f7f\u7528",(0,r.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/NVIDIA-Jetson-Nano-Development-Kit-B01-p-4437.html"},"NVIDIA\xae Jetson Nano\u2122 4GB Developer Kit"),"\u53ca\u5176\u4ed6\u914d\u4ef6\u3002\u4e0e\u6b64\u540c\u65f6\uff0c\u60a8\u4e5f\u53ef\u4ee5\u9009\u62e9Seeed\u7684",(0,r.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/A206-Carrier-Board-for-Jetson-Nano-Xavier-NX-p-5132.html"},"A206 Carrier Board"),"\uff0c\u5b83\u4e0eNVIDIA\u5b98\u65b9\u7684\u8f7d\u677f\u5177\u6709\u76f8\u540c\u7684\u5c3a\u5bf8\u548c\u529f\u80fd\u8bbe\u8ba1\uff0c\u540c\u65f6\u5177\u6709\u51fa\u8272\u7684\u7a33\u5b9a\u6027\u548c\u591a\u529f\u80fd\u6027\u3002"),(0,r.yg)("h2",{id:"\u51c6\u5907\u5de5\u4f5c"},(0,r.yg)("strong",{parentName:"h2"},"\u51c6\u5907\u5de5\u4f5c\u3002")),(0,r.yg)("h3",{id:"\u786c\u4ef6\u8981\u6c42"},(0,r.yg)("strong",{parentName:"h3"},"\u786c\u4ef6\u8981\u6c42")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/NVIDIA-Jetson-Nano-Development-Kit-B01-p-4437.html"},"\u82f1\u4f1f\u8fbe\xae Jetson Nano\u2122 4GB \u5f00\u53d1\u8005\u5957\u4ef6")," (JetPack 4.6)")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/A206-Carrier-Board-for-Jetson-Nano-Xavier-NX-p-5132.html"},"A206 \u8f7d\u677f"),"(optional)")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"7\u82f1\u5bf8HDMI\u76d1\u89c6\u5668\u548cHDMI\u8fde\u63a5\u7ebf")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"USB \u575e\u5f0f\u6269\u5c55\u5e95\u5ea7")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u9f20\u6807\u548c\u952e\u76d8")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"5V 4A \u7535\u6e90\u9002\u914d\u5668")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"USB \u6444\u50cf\u5934")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u4ee5\u592a\u7f51\u7ebf")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u5b89\u88c5 Windows11\uff08\u6216 Windows10/Ubuntu18.04/OSX Big Sur\uff09\u7684\u4e2a\u4eba\u7535\u8111"))),(0,r.yg)("h3",{id:"\u8f6f\u4ef6\u9700\u6c42"},(0,r.yg)("strong",{parentName:"h3"},"\u8f6f\u4ef6\u9700\u6c42")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"docker")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"docker-compose")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u89c6\u9891\u8f6f\u4ef6\uff08\u663e\u793aRTSP\u6d41\uff0c\u5982VLC/QuickTime/PotPlayer\uff09"))),(0,r.yg)("h2",{id:"\u5f00\u59cb\u5427"},(0,r.yg)("strong",{parentName:"h2"},"\u5f00\u59cb\u5427\u3002")),(0,r.yg)("h3",{id:"jetson-nano-\u8bbe\u7f6e"},(0,r.yg)("strong",{parentName:"h3"},"Jetson Nano \u8bbe\u7f6e")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("h4",{parentName:"li",id:"\u6b65\u9aa4-1-\u4ecedocker-hub\u4e0b\u8f7dmaskcam\u5bb9\u5668"},(0,r.yg)("strong",{parentName:"h4"},"\u6b65\u9aa4 1.")," \u4eceDocker Hub\u4e0b\u8f7dMaskCam\u5bb9\u5668"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"sudo docker pull maskcam/maskcam-beta\n")),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu12.png",alt:null})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("h4",{parentName:"li",id:"\u6b65\u9aa4-2-\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u67e5\u627ejetson-nano\u7684ip\u5730\u5740-ifconfig"},(0,r.yg)("strong",{parentName:"h4"},"\u6b65\u9aa4 2.")," \u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u67e5\u627eJetson Nano\u7684IP\u5730\u5740\u3002 ",(0,r.yg)("inlineCode",{parentName:"h4"},"ifconfig")))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"sudo ifconfig\n")),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu5.png",alt:null})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("h4",{parentName:"li",id:"\u6b65\u9aa4-3-\u4f7f\u7528docker\u542f\u52a8maskcam"},(0,r.yg)("strong",{parentName:"h4"},"\u6b65\u9aa4 3.")," \u4f7f\u7528docker\u542f\u52a8MaskCam\u3002"))),(0,r.yg)("p",null,"\u8bb0\u5f97\u5c06\u4f60\u7684Jetson Nano\u4e0eUSB\u6444\u50cf\u5934\u8fde\u63a5\uff0c\u7136\u540e\u5728\u7ec8\u7aef\u4e2d\u8f93\u5165\u4ee5\u4e0b\u547d\u4ee4\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"sudo docker run --runtime nvidia --privileged --rm -it --env MASKCAM_DEVICE_ADDRESS=<your-jetson-ip> -p 1883:1883 -p 8080:8080 -p 8554:8554 maskcam/maskcam-beta\n")),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu1.png",alt:null})),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u6ce8\u610f:")," \u8bf7\u5728\u8fd9\u4e2a\u547d\u4ee4\u4e2d\u7528\u60a8\u7684Jetson Nano\u7684IP\u5730\u5740\u66ff\u6362",(0,r.yg)("inlineCode",{parentName:"p"},"<your-jetson-ip>"),"\u3002"),(0,r.yg)("p",null,"\u5982\u679c\u4f60\u4e0d\u60f3\u4f7f\u7528\u9ed8\u8ba4\u8f93\u5165\u8bbe\u5907\uff0c\u4e5f\u6709\u4e24\u4e2a\u4e0d\u540c\u7684\u547d\u4ee4\u53ef\u4f9b\u9009\u62e9\u548c\u66ff\u6362\u4e0a\u8ff0\u547d\u4ee4\u3002"),(0,r.yg)("p",null,"\u8bf7\u4f7f\u7528/dev/video1\u6444\u50cf\u5934\u8bbe\u5907\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"#\u4f7f\u7528 /dev/video1 \u76f8\u673a\u8bbe\u5907\u3002\nsudo docker run --runtime nvidia --privileged --rm -it --env MASKCAM_INPUT=v4l2:///dev/video1 --env MASKCAM_DEVICE_ADDRESS=<your-jetson-ip> -p 1883:1883 -p 8080:8080 -p 8554:8554 maskcam/maskcam-beta\n")),(0,r.yg)("p",null,"\u8bf7\u4f7f\u7528CSI\u76f8\u673a\u8bbe\u5907\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"#\u8bf7\u4f7f\u7528CSI\u6444\u50cf\u5934\u8bbe\u5907\u3002\nsudo docker run --runtime nvidia --privileged --rm -it --env MASKCAM_INPUT=v4l2://0 --env MASKCAM_DEVICE_ADDRESS=<your-jetson-ip> -p 1883:1883 -p 8080:8080 -p 8554:8554 maskcam/maskcam-beta\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("h4",{parentName:"li",id:"\u6b65\u9aa4-4-\u901a\u8fc7\u89c2\u770b\u76f4\u64ad\u89c6\u9891\u6d41-maskcam_device_address"},(0,r.yg)("strong",{parentName:"h4"},"\u6b65\u9aa4 4.")," \u901a\u8fc7\u89c2\u770b\u76f4\u64ad\u89c6\u9891\u6d41\u3002 ",(0,r.yg)("inlineCode",{parentName:"h4"},"MASKCAM_DEVICE_ADDRESS")))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"Streaming at rtsp://aaa.bbb.ccc.ddd:8554/maskcam\n")),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu3.png",alt:null})),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Note:"),"  ",(0,r.yg)("inlineCode",{parentName:"p"},"aaa.bbb.ccc.ddd"),"\u662f\u60a8\u4e4b\u524d\u5728",(0,r.yg)("inlineCode",{parentName:"p"},"MASKCAM_DEVICE_ADDRESS"),"\u4e2d\u63d0\u4f9b\u7684\u5730\u5740\u3002"),(0,r.yg)("p",null,"\u60a8\u53ef\u4ee5\u5c06\u8be5URL\u590d\u5236\u7c98\u8d34\u5230\u53e6\u4e00\u53f0\u7535\u8111\u4e0a\u7684RSTP\u6d41\u5a92\u4f53\u67e5\u770b\u5668\u4e2d\u3002\u5728\u89c6\u9891\u6d41\u4e2d\uff0c\u5982\u679c\u60a8\u6ca1\u6709\u6234\u53e3\u7f69\uff0c\u60a8\u7684\u9762\u90e8\u5c06\u663e\u793a\u4e3a\u7ea2\u8272\u6846\u67b6\u3002\u5426\u5219\uff0c\u60a8\u5c06\u770b\u5230\u7eff\u8272\u6846\u67b6\u3002"),(0,r.yg)("h3",{id:"mqtt\u670d\u52a1\u5668\u8bbe\u7f6e"},(0,r.yg)("strong",{parentName:"h3"},"MQTT\u670d\u52a1\u5668\u8bbe\u7f6e")),(0,r.yg)("p",null," \u9664\u4e86\u57fa\u672c\u529f\u80fd\u5916\uff0c\u8fd9\u4e2a\u5e93\u8fd8\u5305\u62ec\u4e86\u8fdc\u7a0b\u670d\u52a1\u5668\u529f\u80fd\uff0c\u8fd9\u610f\u5473\u7740\u60a8\u7684\u8ba1\u7b97\u673a\u53ef\u4ee5\u4ece\u8bbe\u5907\u63a5\u6536\u7edf\u8ba1\u4fe1\u606f\uff0c\u5c06\u5176\u5b58\u50a8\u5728\u6570\u636e\u5e93\u4e2d\uff0c\u5e76\u62e5\u6709\u57fa\u4e8eweb\u7684GUI\u524d\u7aef\u6765\u5c55\u793a\u8fd9\u4e9b\u7edf\u8ba1\u6570\u636e\u3002"),(0,r.yg)("p",null,"\u5728\u672c\u6587\u4e2d\uff0c\u5173\u4e8e\u670d\u52a1\u5668\u7684\u6240\u6709\u6f14\u793a\u90fd\u57fa\u4e8eWindows 11\u7cfb\u7edf\u4e3b\u673a\uff0c\u60a8\u4e5f\u53ef\u4ee5\u901a\u8fc7\u672c\u6587\u627e\u5230\u5728Linux\u7cfb\u7edf\u4e0a\u7684\u6307\u5bfc\uff1a",(0,r.yg)("a",{parentName:"p",href:"https://github.com/bdtinc/maskcam"},"Maskcam"),"\u3002"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("h4",{parentName:"li",id:"\u6b65\u9aa41-\u5728\u60a8\u7684\u4e2a\u4eba\u7535\u8111\u4e0a\u5b89\u88c5docker\u548cdocker-compose"},(0,r.yg)("strong",{parentName:"h4"},"\u6b65\u9aa41.")," \u5728\u60a8\u7684\u4e2a\u4eba\u7535\u8111\u4e0a\u5b89\u88c5Docker\u548cDocker-compose\u3002"))),(0,r.yg)("p",null,"\u4ece\u5b98\u65b9\u7f51\u7ad9","[https://docs.docker.com/get-docker/]","\u4e0b\u8f7d",(0,r.yg)("a",{parentName:"p",href:"https://www.docker.com/"},"Docker"),"\u7684\u5b89\u88c5\u5305\u3002"),(0,r.yg)("p",null,"\u8bf7\u6ce8\u610f\uff1a\u5982\u679c\u5728\u5b89\u88c5\u8fc7\u7a0b\u4e2d\u51fa\u73b0\u6d88\u606f",(0,r.yg)("inlineCode",{parentName:"p"},"WLS 2 \u5b89\u88c5\u4e0d\u5b8c\u6574"),"\uff0c\u8bf7\u70b9\u51fb\u63d0\u793a\u6846\u4e2d\u7684\u94fe\u63a5\uff0c\u4e0b\u8f7d\u5e76\u5b89\u88c5 Linux \u5185\u6838\u66f4\u65b0\u5305\u3002\u7136\u540e\u53ef\u4ee5\u8fd0\u884c",(0,r.yg)("inlineCode",{parentName:"p"},"docker"),"\u3002"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("h4",{parentName:"li",id:"\u6b65\u9aa42-\u8bbe\u7f6e\u6784\u5efa\u76ee\u5f55"},(0,r.yg)("strong",{parentName:"h4"},"\u6b65\u9aa42.")," \u8bbe\u7f6e\u6784\u5efa\u76ee\u5f55\u3002"))),(0,r.yg)("p",null,"\u4ee5\u7ba1\u7406\u5458\u8eab\u4efd\u8fd0\u884c",(0,r.yg)("inlineCode",{parentName:"p"},"Windows PowerShell")),(0,r.yg)("p",null,"\u8f6c\u5230\u60a8\u5c06\u4f7f\u7528\u7684\u9a71\u52a8\u5668\u6839\u76ee\u5f55\uff0c\u4f8b\u5982\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"cd e:\\\n")),(0,r.yg)("p",null,"\u4e0b\u8f7d MaskCam \u4ee3\u7801\u5e93:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"Invoke-WebRequest https://github.com/bdtinc/maskcam/archive/refs/heads/main.zip -OutFile e:\\maskcam.zip\n")),(0,r.yg)("p",null,"\u89e3\u538b\u5230\u6307\u5b9a\u8def\u5f84\u3002 ",(0,r.yg)("inlineCode",{parentName:"p"},"e:\\maskcam")," :"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"Expand-Archive e:\\maskcam.zip -DestinationPath e:\\maskcam\n")),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu14.png",alt:null})),(0,r.yg)("p",null,"\u8f6c\u5230maskcam\u670d\u52a1\u5668\u6587\u4ef6\u5939\uff0c\u5176\u4e2d\u5305\u542b\u56db\u4e2a\u5bb9\u5668\uff1aMosquitto\u4ee3\u7406\u3001\u540e\u7aefAPI\u3001\u6570\u636e\u5e93\u548cStreamlit\u524d\u7aef\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"cd maskcam\\maskcam-main\\server\n")),(0,r.yg)("p",null,"\u7136\u540e\uff0c\u901a\u8fc7\u590d\u5236\u9ed8\u8ba4\u6a21\u677f\u6765\u521b\u5efa ",(0,r.yg)("inlineCode",{parentName:"p"},".env")," \u6587\u4ef6\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"cp database.env.template database.env\ncp frontend.env.template frontend.env\ncp backend.env.template backend.env\n")),(0,r.yg)("p",null,"\u6253\u5f00\u3002 ",(0,r.yg)("inlineCode",{parentName:"p"},"database.env")," :"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"notepad database.env\n")),(0,r.yg)("p",null,"\u8bf7\u7528\u60a8\u81ea\u5df1\u7684\u503c\u66ff\u6362",(0,r.yg)("inlineCode",{parentName:"p"},"<DATABASE_USER>"),"\uff0c",(0,r.yg)("inlineCode",{parentName:"p"},"<DATABASE_PASSWORD>"),"\u548c",(0,r.yg)("inlineCode",{parentName:"p"},"<DATABASE_NAME>"),"\u5b57\u6bb5\u3002"),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu15.png",alt:null})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("h4",{parentName:"li",id:"\u6b65\u9aa43-\u6784\u5efa\u548c\u8fd0\u884c\u672c\u5730\u670d\u52a1\u5668"},(0,r.yg)("strong",{parentName:"h4"},"\u6b65\u9aa43.")," \u6784\u5efa\u548c\u8fd0\u884c\u672c\u5730\u670d\u52a1\u5668\u3002"))),(0,r.yg)("p",null,"\u7f16\u8f91\u5b8c\u6570\u636e\u5e93\u73af\u5883\u6587\u4ef6\u540e\uff0c\u60a8\u53ef\u4ee5\u51c6\u5907\u4f7f\u7528\u5355\u4e2a\u547d\u4ee4\u6784\u5efa\u6240\u6709\u5bb9\u5668\u5e76\u8fd0\u884c\u5b83\u4eec\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"sudo docker-compose up -d\n")),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu6.png",alt:null})),(0,r.yg)("p",null,"\u63a5\u4e0b\u6765\uff0c\u6253\u5f00\u4e00\u4e2a\u7f51\u7edc\u6d4f\u89c8\u5668\uff0c\u8f93\u5165\u670d\u52a1\u5668IP\u5730\u5740\uff0c\u8bbf\u95ee\u524d\u7aef\u7f51\u9875\u3002"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"http://<server IP>:8501/")),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu8.png",alt:null})),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Note:")," \u8bf7\u7528\u60a8\u81ea\u5df1\u7684IP\u5730\u5740\u66ff\u6362",(0,r.yg)("inlineCode",{parentName:"p"},"<\u670d\u52a1\u5668IP>"),"\u3002"),(0,r.yg)("p",null,"\u5982\u679c\u5728\u524d\u7aef\u770b\u5230",(0,r.yg)("inlineCode",{parentName:"p"},"ConnectionError"),"\uff0c\u8bf7\u7b49\u5f85\u51e0\u79d2\u949f\u5e76\u91cd\u65b0\u52a0\u8f7d\u9875\u9762\u3002\u540e\u7aef\u5bb9\u5668\u53ef\u80fd\u9700\u8981\u4e00\u4e9b\u65f6\u95f4\u6765\u5b8c\u6210\u6570\u636e\u5e93\u8bbe\u7f6e\u3002"),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu7.png",alt:null})),(0,r.yg)("p",null,"\u5982\u679c\u60a8\u7b49\u5f85\u51e0\u79d2\u949f\u5e76\u91cd\u65b0\u52a0\u8f7d\u9875\u9762\uff0c\u4f46\u524d\u7aef\u4ecd\u7136\u663e\u793a",(0,r.yg)("inlineCode",{parentName:"p"},"ConnectionError"),"\uff0c\u8bf7\u786e\u4fdd\u7aef\u53e3\uff1a<5432>\u548c<80>\u6ca1\u6709\u88ab\u5360\u7528\u6216\u88ab\u76d1\u542c\u3002"),(0,r.yg)("p",null,"\u5982\u679c\u60a8\u7b2c\u4e00\u6b21\u6210\u529f\u8bbf\u95ee\u524d\u7aef\u7f51\u9875\uff0c\u4f46\u4e0b\u6b21\u5931\u8d25\uff0c\u8bf7\u76ee\u524d\u91cd\u65b0\u5b89\u88c5docker\u662f\u89e3\u51b3\u95ee\u9898\u7684\u6700\u4f73\u65b9\u6cd5\u3002"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("h4",{parentName:"li",id:"\u6b65\u9aa44-point-jetson-nano-at-your-local-server"},(0,r.yg)("strong",{parentName:"h4"},"\u6b65\u9aa44.")," Point Jetson Nano at your local server"))),(0,r.yg)("p",null,"\u8fd4\u56de\u5230Jetson Nano\u7684\u7ec8\u7aef\uff0c\u7136\u540e\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u8fd0\u884cmaskcam\u5bb9\u5668\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"sudo docker run --runtime nvidia --privileged --rm -it --env MQTT_BROKER_IP=<server IP> --env MQTT_DEVICE_NAME=my-jetson-1 --env MASKCAM_DEVICE_ADDRESS=<your-jetson-ip> -p 1883:1883 -p 8080:8080 -p 8554:8554 maskcam/maskcam-beta\n")),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu9.png",alt:null})),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Note:")," \u8bf7\u7528\u60a8\u81ea\u5df1\u7684\u670d\u52a1\u5668\u548cJetson Nano\u7684IP\u5730\u5740\u66ff\u6362",(0,r.yg)("inlineCode",{parentName:"p"},"<server IP>"),"\u548c",(0,r.yg)("inlineCode",{parentName:"p"},"<your-jetson-ip>"),"\u3002"),(0,r.yg)("p",null,"\u4e4b\u540e\uff0c\u60a8\u53ef\u4ee5\u5728\u7f51\u9875\u4e0a\u9009\u62e9\u60a8\u7684\u8bbe\u5907\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu10.png",alt:null})),(0,r.yg)("p",null,"\u6700\u540e\uff0c\u60a8\u53ef\u4ee5\u770b\u5230Jetson Nano\u6536\u96c6\u7684\u6570\u636e\u4f20\u8f93\u5230\u670d\u52a1\u5668\u3002"),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu11.png",alt:null})),(0,r.yg)("h2",{id:"\u6280\u672f\u652f\u6301\u4e0e\u4ea7\u54c1\u8ba8\u8bba"},"\u6280\u672f\u652f\u6301\u4e0e\u4ea7\u54c1\u8ba8\u8bba"),(0,r.yg)("p",null,"\u611f\u8c22\u60a8\u9009\u62e9\u6211\u4eec\u7684\u4ea7\u54c1\uff01\u6211\u4eec\u5728\u8fd9\u91cc\u4e3a\u60a8\u63d0\u4f9b\u4e0d\u540c\u7684\u652f\u6301\uff0c\u4ee5\u786e\u4fdd\u60a8\u4f7f\u7528\u6211\u4eec\u7684\u4ea7\u54c1\u7684\u4f53\u9a8c\u5c3d\u53ef\u80fd\u987a\u7545\u3002\u6211\u4eec\u63d0\u4f9b\u591a\u79cd\u6c9f\u901a\u6e20\u9053\uff0c\u4ee5\u6ee1\u8db3\u4e0d\u540c\u504f\u597d\u548c\u9700\u6c42\u3002"),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,r.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,r.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}u.isMDXComponent=!0}}]);