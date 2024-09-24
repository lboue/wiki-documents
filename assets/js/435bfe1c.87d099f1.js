"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[72042],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>m});var i=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),d=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(n),g=o,m=c["".concat(l,".").concat(g)]||c[g]||y[g]||r;return n?i.createElement(m,a(a({ref:t},p),{},{components:n})):i.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,a[1]=s;for(var d=2;d<r;d++)a[d]=n[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},76638:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>y,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var i=n(9668),o=(n(96540),n(15680));const r={description:"This is an open-source project / platform focused on embedded AI.",title:"Train and Deploy Your Own AI Model",keywords:["tinyml course"],image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/train_and_deploy_model",last_update:{date:"09/24/2024",author:"Frank"}},a="Train and Deploy Your Own AI Model",s={unversionedId:"Topics/TinyML/TinyML_Workshop/TrainModel",id:"Topics/TinyML/TinyML_Workshop/TrainModel",title:"Train and Deploy Your Own AI Model",description:"This is an open-source project / platform focused on embedded AI.",source:"@site/docs/Topics/TinyML/TinyML_Workshop/TrainModel.md",sourceDirName:"Topics/TinyML/TinyML_Workshop",slug:"/train_and_deploy_model",permalink:"/train_and_deploy_model",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Topics/TinyML/TinyML_Workshop/TrainModel.md",tags:[],version:"current",lastUpdatedBy:"Frank",lastUpdatedAt:1727136e3,formattedLastUpdatedAt:"Sep 24, 2024",frontMatter:{description:"This is an open-source project / platform focused on embedded AI.",title:"Train and Deploy Your Own AI Model",keywords:["tinyml course"],image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/train_and_deploy_model",last_update:{date:"09/24/2024",author:"Frank"}},sidebar:"ProductSidebar",previous:{title:'The AI "Blink"',permalink:"/sscma"},next:{title:"SenseCraft AI Model Assistant Overview",permalink:"/ModelAssistant_Introduce_Overview"}},l={},d=[{value:"SenseCraft AI Platform",id:"sensecraft-ai-platform",level:2},{value:"Start Training the Model",id:"start-training-the-model",level:2},{value:"Step 1. Install XIAO ESP32S3 Sense expansion board",id:"step-1-install-xiao-esp32s3-sense-expansion-board",level:4},{value:"Step 2. Connecting the XIAO to your PC",id:"step-2-connecting-the-xiao-to-your-pc",level:4},{value:"Step 3. Go to the SenseCraft AI Platform page and connect the XIAO",id:"step-3-go-to-the-sensecraft-ai-platform-page-and-connect-the-xiao",level:4},{value:"step 4. Start training the model",id:"step-4-start-training-the-model",level:4},{value:"step 5. Deploy the model",id:"step-5-deploy-the-model",level:4}],p={toc:d},c="wrapper";function y(e){let{components:t,...n}=e;return(0,o.yg)(c,(0,i.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"train-and-deploy-your-own-ai-model"},"Train and Deploy Your Own AI Model"),(0,o.yg)("h2",{id:"sensecraft-ai-platform"},"SenseCraft AI Platform"),(0,o.yg)("p",null,"Seeed Studio ",(0,o.yg)("a",{parentName:"p",href:"https://sensecraft.seeed.cc/ai/#/model"},"SenseCraft AI Platform")," is a browser-based AI Solution. "),(0,o.yg)("p",null,"It empowers users to effortlessly train and deploy their own models onto their edge devices, providing a seamless and user-friendly experience, allowing you to train and deploy your own models directly onto your edge devices with ",(0,o.yg)("strong",{parentName:"p"},"just a few clicks"),"."),(0,o.yg)("admonition",{type:"info"},(0,o.yg)("p",{parentName:"admonition"},"The core of it is an open source project and we have share it on the ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/ModelAssistant"},"GitHub")," and offer the ",(0,o.yg)("a",{parentName:"p",href:"/ModelAssistant_Introduce_Overview"},"development method")," as well.")),(0,o.yg)("h2",{id:"start-training-the-model"},"Start Training the Model"),(0,o.yg)("p",null,"We first go to the ",(0,o.yg)("a",{parentName:"p",href:"https://sensecraft.seeed.cc/ai/#/device/local?time=1724577953974"},"SenseCraft AI Deployment Website"),", then simply connect the XIAO ESP32S3 Sense to your PC via a data cable to instantly start using."),(0,o.yg)("h4",{id:"step-1-install-xiao-esp32s3-sense-expansion-board"},"Step 1. Install XIAO ESP32S3 Sense expansion board"),(0,o.yg)("p",null,'First, we need to properly connect the XIAO ESP32S3 Sense expansion board to the XIAO. Installing the expansion board is very simple, you just need to align the connector on the expansion board with the B2B connector on the XIAO ESP32S3, press it hard and hear a "click", the installation is complete.'),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/61.gif",style:{width:500,height:"auto"}})),(0,o.yg)("h4",{id:"step-2-connecting-the-xiao-to-your-pc"},"Step 2. Connecting the XIAO to your PC"),(0,o.yg)("p",null,"Connect the XIAO to your PC using a data cable with data transfer function."),(0,o.yg)("h4",{id:"step-3-go-to-the-sensecraft-ai-platform-page-and-connect-the-xiao"},"Step 3. Go to the SenseCraft AI Platform page and connect the XIAO"),(0,o.yg)("p",null,"Click the button below to go to the SenseCraft AI Platform homepage."),(0,o.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.yg)("a",{class:"get_one_now_item",href:"https://sensecraft.seeed.cc/ai/#/home"},(0,o.yg)("strong",null,(0,o.yg)("span",null,(0,o.yg)("font",{color:"FFFFFF",size:"2"},"SenseCraft AI Platform"))))),(0,o.yg)("br",null),(0,o.yg)("h4",{id:"step-4-start-training-the-model"},"step 4. Start training the model"),(0,o.yg)("p",null,"After entering the SenseCraft AI platform homepage, we first click ",(0,o.yg)("inlineCode",{parentName:"p"},"Training"),", then select ",(0,o.yg)("inlineCode",{parentName:"p"},"Classification Type"),", name your classes, and finally choose ",(0,o.yg)("inlineCode",{parentName:"p"},"XIAO ESP32S3 Sense"),"."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/tinyml-topic/trainingmodel/1.png",style:{width:800,height:"auto"}})),(0,o.yg)("p",null,"Then, based on your requirements for classification, refer to your class, and click ",(0,o.yg)("inlineCode",{parentName:"p"},"Hold to Record"),"."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/tinyml-topic/trainingmodel/2.png",style:{width:800,height:"auto"}})),(0,o.yg)("p",null,'This time, I chose the requirement for gesture recognition to classify "12345."'),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/tinyml-topic/trainingmodel/3.png",style:{width:800,height:"auto"}})),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"Capture pictures: Each one over 10 images will be fine, more are better.")),(0,o.yg)("p",null,"After data collection is complete, we select ",(0,o.yg)("inlineCode",{parentName:"p"},"XIAO ESP32S3 Sense")," in the Training section and click ",(0,o.yg)("inlineCode",{parentName:"p"},"Start Training"),"."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/tinyml-topic/trainingmodel/4.png",style:{width:800,height:"auto"}})),(0,o.yg)("p",null,"After training is complete, we can see our training results through a real-time preview."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/tinyml-topic/trainingmodel/5.png",style:{width:800,height:"auto"}})),(0,o.yg)("h4",{id:"step-5-deploy-the-model"},"step 5. Deploy the model"),(0,o.yg)("p",null,"After previewing and confirming that the trained model is fine, we select ",(0,o.yg)("inlineCode",{parentName:"p"},"Training Records"),", then choose the recently trained model (named \u201cClassTrain\u201d and \u201cXIAO\u201d) and click ",(0,o.yg)("inlineCode",{parentName:"p"},"Deploy to device"),"."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/tinyml-topic/trainingmodel/6.png",style:{width:800,height:"auto"}})),(0,o.yg)("p",null,"After successfully deploying to the device, you will see the results directly:"),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/tinyml-topic/trainingmodel/7.gif",style:{width:800,height:"auto"}})),(0,o.yg)("p",null,"You have successfully trained your first ML model!"),(0,o.yg)("admonition",{type:"info"},(0,o.yg)("p",{parentName:"admonition"},"If you have more time, you can try using ",(0,o.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/sscma/#2-sensecraft-triggers---do-a-simple-feedback-action"},"the ",(0,o.yg)("inlineCode",{parentName:"a"},"Output")," operation you've learned before"),"."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/tinyml-topic/trainingmodel/8.png",style:{width:800,height:"auto"}}))),(0,o.yg)("h1",{id:"todo"},"ToDo"),(0,o.yg)("ul",{className:"contains-task-list"},(0,o.yg)("li",{parentName:"ul",className:"task-list-item"},(0,o.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Train and deploy models using the SenseCraft AI platform."),(0,o.yg)("li",{parentName:"ul",className:"task-list-item"},(0,o.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Setup a Trigger and ",(0,o.yg)("strong",{parentName:"li"},"Control LED")," for your trained models with SenseCraft AI Platform.")))}y.isMDXComponent=!0}}]);