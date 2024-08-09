"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[81681],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>u});var a=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),g=o,u=d["".concat(s,".").concat(g)]||d[g]||m[g]||r;return n?a.createElement(u,l(l({ref:t},p),{},{components:n})):a.createElement(u,l({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},34629:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(58168),o=(n(96540),n(15680));const r={description:"\u57fa\u4e8eJetson\u548cLlamaIndex\u7684\u672c\u5730RAG",title:"\u57fa\u4e8eJetson\u548cLlamaIndex\u7684\u672c\u5730RAG",keywords:["Edge","reComputer","Jetson","LlamaIndex","RAG"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/Local_RAG_based_on_Jetson_with_LlamaIndex",last_update:{date:"05/15/2024",author:"Jiahao"},no_comments:!1},l="\u57fa\u4e8eJetson\u548cLlamaIndex\u7684\u672c\u5730RAG",i={unversionedId:"zh-CN/Edge/NVIDIA_Jetson/Application/Generative_AI/Local_RAG_based_on_Jetson_with_LlamaIndex",id:"zh-CN/Edge/NVIDIA_Jetson/Application/Generative_AI/Local_RAG_based_on_Jetson_with_LlamaIndex",title:"\u57fa\u4e8eJetson\u548cLlamaIndex\u7684\u672c\u5730RAG",description:"\u57fa\u4e8eJetson\u548cLlamaIndex\u7684\u672c\u5730RAG",source:"@site/docs/zh-CN/Edge/NVIDIA_Jetson/Application/Generative_AI/Local_RAG_based_on_Jetson_with_LlamaIndex.md",sourceDirName:"zh-CN/Edge/NVIDIA_Jetson/Application/Generative_AI",slug:"/cn/Local_RAG_based_on_Jetson_with_LlamaIndex",permalink:"/cn/Local_RAG_based_on_Jetson_with_LlamaIndex",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/zh-CN/Edge/NVIDIA_Jetson/Application/Generative_AI/Local_RAG_based_on_Jetson_with_LlamaIndex.md",tags:[],version:"current",lastUpdatedBy:"Jiahao",lastUpdatedAt:1715731200,formattedLastUpdatedAt:"May 15, 2024",frontMatter:{description:"\u57fa\u4e8eJetson\u548cLlamaIndex\u7684\u672c\u5730RAG",title:"\u57fa\u4e8eJetson\u548cLlamaIndex\u7684\u672c\u5730RAG",keywords:["Edge","reComputer","Jetson","LlamaIndex","RAG"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/Local_RAG_based_on_Jetson_with_LlamaIndex",last_update:{date:"05/15/2024",author:"Jiahao"},no_comments:!1},sidebar:"CNSidebar",previous:{title:"\u5728NVIDIA Jetson Orin\u4e0a\u90e8\u7f72Whisper\u8fdb\u884c\u5b9e\u65f6\u8bed\u97f3\u8f6c\u6587\u5b57",permalink:"/zh-CN/Edge/NVIDIA_Jetson/Application/Generative_AI/Whisper_on_Jetson_for_Real_Time_Speech_to_Text"},next:{title:"\u4f7f\u7528Langchain\u683c\u5f0f\u5316\u5927\u578b\u8bed\u8a00\u6a21\u578b\u7684\u8f93\u51fa",permalink:"/cn/How_to_Format_the_Output_of_LLM_Using_Langchain_on_Jetson"}},s={},c=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u786c\u4ef6\u7ec4\u4ef6",id:"\u786c\u4ef6\u7ec4\u4ef6",level:2},{value:"\u51c6\u5907\u8fd0\u884c\u73af\u5883",id:"\u51c6\u5907\u8fd0\u884c\u73af\u5883",level:2},{value:"Step 1: \u5b89\u88c5 MLC Jetson Container",id:"step-1-\u5b89\u88c5-mlc-jetson-container",level:3},{value:"\u6b65\u9aa4 2\uff1a\u5b89\u88c5\u9879\u76ee",id:"\u6b65\u9aa4-2\u5b89\u88c5\u9879\u76ee",level:3},{value:"\u6b65\u9aa4 3\uff1a\u5b89\u88c5\u7531 MLC LLM \u91cf\u5316\u7684 Llama2-7b \u6a21\u578b",id:"\u6b65\u9aa4-3\u5b89\u88c5\u7531-mlc-llm-\u91cf\u5316\u7684-llama2-7b-\u6a21\u578b",level:3},{value:"\u6b65\u9aa4 4\uff1a\u8fd0\u884c Docker \u5e76\u5b89\u88c5\u4f9d\u8d56",id:"\u6b65\u9aa4-4\u8fd0\u884c-docker-\u5e76\u5b89\u88c5\u4f9d\u8d56",level:3},{value:"\u8ba9\u6211\u4eec\u8fd0\u884c\u5b83",id:"\u8ba9\u6211\u4eec\u8fd0\u884c\u5b83",level:2}],p={toc:c},d="wrapper";function m(e){let{components:t,...n}=e;return(0,o.yg)(d,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"\u57fa\u4e8ejetson\u548cllamaindex\u7684\u672c\u5730rag"},"\u57fa\u4e8eJetson\u548cLlamaIndex\u7684\u672c\u5730RAG"),(0,o.yg)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,o.yg)("p",null,"\u5982\u4eca\uff0c\u8d8a\u6765\u8d8a\u591a\u7684\u4eba\u5f00\u59cb\u4f7f\u7528\u5927\u578b\u8bed\u8a00\u6a21\u578b\u6765\u89e3\u51b3\u65e5\u5e38\u95ee\u9898\u3002 \u7136\u800c\uff0c\u5927\u578b\u8bed\u8a00\u6a21\u578b\u5728\u56de\u7b54\u67d0\u4e9b\u95ee\u9898\u65f6\u53ef\u80fd\u4f1a\u51fa\u73b0\u5e7b\u89c9\uff0c\u5e76\u5411\u7528\u6237\u63d0\u4f9b\u4e0d\u6b63\u786e\u7684\u4fe1\u606f\u3002\u5c3d\u7ba1\u5982\u6b64\uff0c ",(0,o.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/blog/2024/04/25/build-a-local-rag-chatbot-on-jetson-orin-for-your-knowledge-base/"},"RAG\u6280\u672f")," \u53ef\u4ee5\u901a\u8fc7\u5411\u5927\u578b\u8bed\u8a00\u6a21\u578b\u63d0\u4f9b\u76f8\u5173\u6570\u636e\u6765\u51cf\u5c11\u5e7b\u89c9\u7684\u53d1\u751f\u3002 \u56e0\u6b64\uff0c\u4f7f\u7528RAG\u6280\u672f\u6765\u51cf\u5c11\u5927\u578b\u8bed\u8a00\u6a21\u578b\u4e2d\u5e7b\u89c9\u7684\u751f\u6210\u5df2\u6210\u4e3a\u4e00\u79cd\u8d8b\u52bf\u3002"),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/RAG-MLC-Jetson.gif",alt:"pir",width:800,height:"auto"})),(0,o.yg)("p",null,"\u5728\u8fd9\u91cc\uff0c\u6211\u4eec\u5411\u60a8\u4ecb\u7ecd ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Projects/RAG_based_on_Jetson"},"\u57fa\u4e8eJetson\u7684RAG"),", \u5b83\u4f7f\u7528",(0,o.yg)("a",{parentName:"p",href:"https://www.llamaindex.ai"},"LlamaIndex")," \u4f5c\u4e3aRAG\u6846\u67b6, ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/chroma-core/chroma"},"ChromaDB")," \u4f5c\u4e3a\u5411\u91cf\u6570\u636e\u5e93\uff0c\u4ee5\u53ca\u91cf\u5316\u7684Llama2-7b\u6a21\u578b ",(0,o.yg)("a",{parentName:"p",href:"https://llm.mlc.ai/"},"LLM MLC")," \u4f5c\u4e3a\u95ee\u7b54\u6a21\u578b\u3002 \u901a\u8fc7\u8fd9\u4e2a\u672c\u5730RAG\u9879\u76ee\uff0c\u5b83\u53ef\u4ee5\u4fdd\u62a4\u60a8\u7684\u6570\u636e\u9690\u79c1\uff0c\u5e76\u4e3a\u60a8\u63d0\u4f9b\u4f4e\u5ef6\u8fdf\u7684\u901a\u4fe1\u4f53\u9a8c"),(0,o.yg)("h2",{id:"\u786c\u4ef6\u7ec4\u4ef6"},"\u786c\u4ef6\u7ec4\u4ef6"),(0,o.yg)("div",{class:"table-center"},(0,o.yg)("table",{align:"center"},(0,o.yg)("tr",null,(0,o.yg)("th",null,"reComputer (based on Jetson with RAM >= 16GB)")),(0,o.yg)("tr",null,(0,o.yg)("td",null,(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recomputerj4012.jpg",style:{width:800,height:"auto"}})))),(0,o.yg)("tr",null,(0,o.yg)("td",null,(0,o.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/reComputer-J4012-p-5586.html"},(0,o.yg)("strong",null,(0,o.yg)("span",null,(0,o.yg)("font",{color:"FFFFFF",size:"4"}," \u7acb\u5373\u8d2d\u4e70 \ud83d\uddb1\ufe0f"))))))))),(0,o.yg)("h2",{id:"\u51c6\u5907\u8fd0\u884c\u73af\u5883"},"\u51c6\u5907\u8fd0\u884c\u73af\u5883"),(0,o.yg)("h3",{id:"step-1-\u5b89\u88c5-mlc-jetson-container"},"Step 1: \u5b89\u88c5 MLC Jetson Container"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"# Install jetson-container and its requirements\ngit clone --depth=1 https://github.com/dusty-nv/jetson-containers\ncd jetson-containers \npip install -r requirements.txt \n")),(0,o.yg)("h3",{id:"\u6b65\u9aa4-2\u5b89\u88c5\u9879\u76ee"},"\u6b65\u9aa4 2\uff1a\u5b89\u88c5\u9879\u76ee"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"# Install RAG project\ncd data\ngit clone https://github.com/Seeed-Projects/RAG_based_on_Jetson.git\n")),(0,o.yg)("h3",{id:"\u6b65\u9aa4-3\u5b89\u88c5\u7531-mlc-llm-\u91cf\u5316\u7684-llama2-7b-\u6a21\u578b"},"\u6b65\u9aa4 3\uff1a\u5b89\u88c5\u7531 MLC LLM \u91cf\u5316\u7684 Llama2-7b \u6a21\u578b"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"# Install LLM model\nsudo apt-get install git-lfs\ncd RAG_based_on_Jetson\ngit clone https://huggingface.co/JiahaoLi/llama2-7b-MLC-q4f16-jetson-containers \n")),(0,o.yg)("h3",{id:"\u6b65\u9aa4-4\u8fd0\u884c-docker-\u5e76\u5b89\u88c5\u4f9d\u8d56"},"\u6b65\u9aa4 4\uff1a\u8fd0\u884c Docker \u5e76\u5b89\u88c5\u4f9d\u8d56"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"cd ../../\n./run.sh $(./autotag mlc)\n # Here you will enter the Docker, and the commands below will run inside the Docker\ncd data/RAG_based_on_Jetson/\npip install -r requirements.txt\npip install chromadb==0.3.29\n")),(0,o.yg)("p",null,"\u8fd0\u884c\u540e ",(0,o.yg)("inlineCode",{parentName:"p"},"pip install chromadb==0.3.29")," \u4f60\u5c06\u770b\u5230\u5982\u4e0b\u6240\u793a\u7684\u754c\u9762\u3002"),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/RAG_Install_ChromaDB.png",alt:"pir",width:1e3,height:"auto"})),(0,o.yg)("p",null,":::\u63d0\u793a\n\u53ef\u4ee5\u5ffd\u7565\u62a5\u9519.\n:::"),(0,o.yg)("h2",{id:"\u8ba9\u6211\u4eec\u8fd0\u884c\u5b83"},"\u8ba9\u6211\u4eec\u8fd0\u884c\u5b83"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"# Run in the docker\npython3 RAG.py\n")),(0,o.yg)("div",{align:"center"},(0,o.yg)("iframe",{width:"800",height:"450",src:"https://www.youtube.com/embed/v1SDRko5cNM",title:"Jetson Orin NX RAG with MLC, Llama2-7b and ChromaDB",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:!0})),(0,o.yg)("p",null,"##\u9879\u76ee\u62d3\u5c55"),(0,o.yg)("p",null,"\u5728\u8fd9\u4e2a\u9879\u76ee\u4e2d\uff0cTXT \u548c PDF \u6587\u6863\u88ab\u89e3\u6790\u4e3a\u5411\u91cf\u6570\u636e\u5e93\uff0c\u5e76\u4f7f\u7528 RAG \u6280\u672f\u6765\u51cf\u5c11\u6a21\u578b\u5bf9\u7279\u5b9a\u95ee\u9898\u7684\u5e7b\u89c9\u3002 \u672a\u6765\uff0c\u6211\u4eec\u5c06\u4f7f\u7528\u591a\u6a21\u6001\u6a21\u578b\u6765\u652f\u6301\u56fe\u50cf\u548c\u89c6\u9891\u7684\u68c0\u7d22."))}m.isMDXComponent=!0}}]);