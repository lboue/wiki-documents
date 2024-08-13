"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[68164],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>m});var i=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),g=a,m=d["".concat(l,".").concat(g)]||d[g]||c[g]||o;return n?i.createElement(m,r(r({ref:t},u),{},{components:n})):i.createElement(m,r({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},19365:(e,t,n)=>{n.d(t,{A:()=>r});var i=n(96540),a=n(20053);const o={tabItem:"tabItem_Ymn6"};function r(e){let{children:t,hidden:n,className:r}=e;return i.createElement("div",{role:"tabpanel",className:(0,a.A)(o.tabItem,r),hidden:n},t)}},11470:(e,t,n)=>{n.d(t,{A:()=>v});var i=n(58168),a=n(96540),o=n(20053),r=n(23104),s=n(56347),l=n(57485),p=n(31682),u=n(89466);function d(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:i,default:a}}=e;return{value:t,label:n,attributes:i,default:a}}))}function c(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,p.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function g(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const i=(0,s.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(i.location.search);t.set(o,e),i.replace({...i.location,search:t.toString()})}),[o,i])]}function y(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,o=c(e),[r,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const i=n.find((e=>e.default))??n[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:t,tabValues:o}))),[l,p]=m({queryString:n,groupId:i}),[d,y]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,o]=(0,u.Dv)(n);return[i,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:i}),h=(()=>{const e=l??d;return g({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:r,selectValue:(0,a.useCallback)((e=>{if(!g({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),p(e),y(e)}),[p,y,o]),tabValues:o}}var h=n(92303);const _={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.a_)(),c=e=>{const t=e.currentTarget,n=u.indexOf(t),i=p[n].value;i!==s&&(d(t),l(i))},g=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:r}=e;return a.createElement("li",(0,i.A)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:g,onClick:c},r,{className:(0,o.A)("tabs__item",_.tabItem,r?.className,{"tabs__item--active":s===t})}),n??t)})))}function b(e){let{lazy:t,children:n,selectedValue:i}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===i));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==i}))))}function w(e){const t=y(e);return a.createElement("div",{className:(0,o.A)("tabs-container",_.tabList)},a.createElement(f,(0,i.A)({},e,t)),a.createElement(b,(0,i.A)({},e,t)))}function v(e){const t=(0,h.A)();return a.createElement(w,(0,i.A)({key:String(t)},e))}},52094:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var i=n(58168),a=(n(96540),n(15680)),o=n(11470),r=n(19365);const s={description:"how to use SDK for RP2350",title:"Seeed Studio XIAO RP2350 with C/C++ SDK",image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/xiao-rp2350-c-cpp-sdk",sidebar_position:2,last_update:{date:new Date("2024-08-13T08:42:31.057Z"),author:"Spencer"}},l=void 0,p={unversionedId:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2350/XIAO-RP2350-with-SDK",id:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2350/XIAO-RP2350-with-SDK",title:"Seeed Studio XIAO RP2350 with C/C++ SDK",description:"how to use SDK for RP2350",source:"@site/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2350/XIAO-RP2350-with-SDK.md",sourceDirName:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2350",slug:"/xiao-rp2350-c-cpp-sdk",permalink:"/xiao-rp2350-c-cpp-sdk",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2350/XIAO-RP2350-with-SDK.md",tags:[],version:"current",lastUpdatedBy:"Spencer",lastUpdatedAt:1723538551.057,formattedLastUpdatedAt:"Aug 13, 2024",sidebarPosition:2,frontMatter:{description:"how to use SDK for RP2350",title:"Seeed Studio XIAO RP2350 with C/C++ SDK",image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/xiao-rp2350-c-cpp-sdk",sidebar_position:2,last_update:{date:"2024-08-13T08:42:31.057Z",author:"Spencer"}},sidebar:"ProductSidebar",previous:{title:"Getting Started with Seeed Studio XIAO RP2350",permalink:"/getting-started-xiao-rp2350"},next:{title:"Getting Started with XIAO nRF52840",permalink:"/XIAO_BLE"}},u={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation Guide Via Vscode",id:"installation-guide-via-vscode",level:2},{value:"Step 1: Install the Extension",id:"step-1-install-the-extension",level:4},{value:"Step 2: Create a New Project",id:"step-2-create-a-new-project",level:4},{value:"Step 3: Configure Your Project",id:"step-3-configure-your-project",level:4},{value:"Step 4: Build the Project",id:"step-4-build-the-project",level:4},{value:"Example 1: LED Blink",id:"example-1-led-blink",level:2},{value:"Example 2: RGB Blink",id:"example-2-rgb-blink",level:2},{value:"Exmaple 3: UART print",id:"exmaple-3-uart-print",level:2},{value:"Exmaple 4: Read Battery Voltage",id:"exmaple-4-read-battery-voltage",level:2},{value:"FAQ",id:"faq",level:2},{value:"TinyUSB Submodule Not Initialized; USB Support Unavailable",id:"tinyusb-submodule-not-initialized-usb-support-unavailable",level:4},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],c={toc:d},g="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(g,(0,i.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"introduction"},"Introduction"),(0,a.yg)("p",null,"The Seeed Studio XIAO RP2350, powered by the RP2350 microcontroller, offers robust performance in a small form factor. This guide provides essential steps for setting up and using the C/C++ SDK with the XIAO RP2350."),(0,a.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.yg)("p",null,"Before starting, ensure you have the following:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"A computer running Windows, macOS, or Linux."),(0,a.yg)("li",{parentName:"ul"},"A USB cable to connect the XIAO RP2350 to your computer."),(0,a.yg)("li",{parentName:"ul"},"Basic knowledge of C/C++ programming.")),(0,a.yg)("h2",{id:"installation-guide-via-vscode"},"Installation Guide Via Vscode"),(0,a.yg)("admonition",{type:"info"},(0,a.yg)("p",{parentName:"admonition"},"For those who prefer the native development experience, explore the ",(0,a.yg)("a",{parentName:"p",href:"https://datasheets.raspberrypi.com/pico/raspberry-pi-pico-c-sdk.pdf"},"Raspberry Pi Pico C/C++ SDK Documentation")," or ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/raspberrypi/pico-sdk"},"Raspberry Pi Pico SDK | GitHub"),".")),(0,a.yg)("p",null,"For an easier and more streamlined experience with SDK programming, especially for those new to it, you can install the ",(0,a.yg)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=raspberry-pi.raspberry-pi-pico"},"Raspberry Pi Pico")," extension for Visual Studio Code (VSCode)."),(0,a.yg)("p",null,"This extension simplifies the setup process by guiding you through the necessary toolchain installations, avoiding the need to manually install each tool individually. However, you will still need to ensure your system meets the platform requirements: Windows x64, macOS (Sonoma and newer), Linux x64, or arm64."),(0,a.yg)("p",null,"For detailed installation instructions tailored to your operating system, please refer to the ",(0,a.yg)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=raspberry-pi.raspberry-pi-pico"},"Raspberry Pi Pico Extension for VSCode")," page."),(0,a.yg)("h4",{id:"step-1-install-the-extension"},"Step 1: Install the Extension"),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-RP2350/img/sdk/0-install-pico-extension.png",style:{width:500,height:"auto"}}),(0,a.yg)("div",{style:{marginTop:"-8px"}},(0,a.yg)("em",null,"Install Extension on VSCode")),(0,a.yg)("br",null)),(0,a.yg)("h4",{id:"step-2-create-a-new-project"},"Step 2: Create a New Project"),(0,a.yg)("p",null,"Once the page loads, you can see the required content."),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-RP2350/img/sdk/1-new-example-project.png",style:{width:500,height:"auto"}}),(0,a.yg)("div",{style:{marginTop:"-8px"}},(0,a.yg)("em",null,"Create a New Project from Examples")),(0,a.yg)("br",null)),(0,a.yg)("p",null,"Try create a project via ",(0,a.yg)("inlineCode",{parentName:"p"},"New Project From Examples"),"."),(0,a.yg)("h4",{id:"step-3-configure-your-project"},"Step 3: Configure Your Project"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Name:")," Typically, this will be the example project name; in this case, we\u2019ll choose the ",(0,a.yg)("inlineCode",{parentName:"li"},"blink")," project."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Board Type:")," ",(0,a.yg)("inlineCode",{parentName:"li"},"Pico 2")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Location:")," Choose where you want to store your XIAO RP2350 project."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"SDK Version:")," Must be version ",(0,a.yg)("inlineCode",{parentName:"li"},"v2.0.0")," or later."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Debugger:")," If you plan to use the SWD debugging interface, check the SWD Debugger option to enable debugging later.")),(0,a.yg)(o.A,{mdxType:"Tabs"},(0,a.yg)(r.A,{value:"c1",label:"Configure project",mdxType:"TabItem"},(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-RP2350/img/sdk/2-create-blink-project.png",style:{width:500,height:"auto"}}))),(0,a.yg)(r.A,{value:"c2",label:"Adavanced Options",mdxType:"TabItem"},(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-RP2350/img/sdk/3-advanced-options.png",style:{width:500,height:"auto"}})),(0,a.yg)("p",null,"If you want to fine-tune your toolchain setup and avoid downloading redundant resources, check the ",(0,a.yg)("strong",{parentName:"p"},"Advanced Options"),". Here, you can specify paths for tools like Ninja and CMake. If you haven't previously installed CMake or a Python environment, or if you'd rather not worry about it, you can skip this step."),(0,a.yg)("p",null,"In this example, I'll use the system versions already installed on my Windows machine and added to the system PATH. Therefore, I select ",(0,a.yg)("strong",{parentName:"p"},"Use system version"),"."))),(0,a.yg)("p",null,"If this is your first time running the setup, when you click ",(0,a.yg)("inlineCode",{parentName:"p"},"Create"),", the extension will download and manage the SDK for you. On Windows, the SDK will typically be placed in ",(0,a.yg)("inlineCode",{parentName:"p"},"%userprofile%\\.pico-sdk"),". The time it takes to set up depends on your internet speed. Once completed, a new window will open with your project."),(0,a.yg)("h4",{id:"step-4-build-the-project"},"Step 4: Build the Project"),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-RP2350/img/sdk/4-blink-example-created.png",style:{width:500,height:"auto"}})),(0,a.yg)("admonition",{title:"Attention",type:"caution"},(0,a.yg)("p",{parentName:"admonition"},"The first time you set up your project, you'll need to manually modify the board type in the CMake project because the extension doesn't include the XIAO RP2350 board by default. Set the board to ",(0,a.yg)("inlineCode",{parentName:"p"},"seeed_xiao_rp2350")," as shown below:"),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-RP2350/img/sdk/set-xiao-rp2350-board.png",style:{width:500,height:"auto"}})),(0,a.yg)("p",{parentName:"admonition"},(0,a.yg)("strong",{parentName:"p"},"After modifying the board type, clean up the ",(0,a.yg)("inlineCode",{parentName:"strong"},"build")," folder")," to ensure that it uses the correct board configuration from ",(0,a.yg)("inlineCode",{parentName:"p"},"%userprofile%/.pico-sdk/sdk/2.0.0/src/boards/include/boards/seeed_xiao_rp2350.h"),". Then type the following commands to generate the CMake cache in the build folder:"),(0,a.yg)("pre",{parentName:"admonition"},(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"cmake .. # in build folder\n")),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-RP2350/img/sdk/get-cmake-cache.png",style:{width:500,height:"auto"}})),(0,a.yg)("p",{parentName:"admonition"},"This will allow the compile task of the extension to work correctly.")),(0,a.yg)(o.A,{mdxType:"Tabs"},(0,a.yg)(r.A,{value:"compile",label:"Compile Project",mdxType:"TabItem"},(0,a.yg)("p",null,"Now you can press the ",(0,a.yg)("strong",{parentName:"p"},"Compile")," button to build the project. This will generate the ",(0,a.yg)("inlineCode",{parentName:"p"},"blink.uf2")," file in the ",(0,a.yg)("inlineCode",{parentName:"p"},"build")," folder, which you can drag and drop to the RP2350 drive recognized by your computer."),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-RP2350/img/sdk/5-compile-project.png",style:{width:500,height:"auto"}}))),(0,a.yg)(r.A,{value:"run",label:"Run Project",mdxType:"TabItem"},(0,a.yg)("p",null,"If your device is in BOOT mode, you can press the ",(0,a.yg)("strong",{parentName:"p"},"Run")," button to compile and automatically copy the ",(0,a.yg)("inlineCode",{parentName:"p"},".uf2")," file to the RP2350, eliminating the need to manually drag and drop the file."),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-RP2350/img/sdk/6-run-project.png",style:{width:500,height:"auto"}})))),(0,a.yg)("p",null,"We've just set up the development environment and successfully created a new project using the Raspberry Pi Pico extension for VSCode. With the project ready and your tools configured, you can easily compile and run your code on the XIAO RP2350, streamlining your development process."),(0,a.yg)("h2",{id:"example-1-led-blink"},"Example 1: LED Blink"),(0,a.yg)("p",null,"To demonstrate basic SDK usage, the following example details programming the onboard LED to blink:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-c",metastring:'title="blink.c"',title:'"blink.c"'},'#include "pico/stdlib.h"\n\nconst int sleep_time = 250;\n\nint main() {\n    const uint LED_PIN = PICO_DEFAULT_LED_PIN; // GPIO25\n    gpio_init(LED_PIN);\n    gpio_set_dir(LED_PIN, GPIO_OUT);\n    while (true) {\n        gpio_put(LED_PIN, 1);\n        sleep_ms(sleep_time);\n        gpio_put(LED_PIN, 0);\n        sleep_ms(sleep_time);\n    }\n}\n')),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-RP2350/img/rp2350-blink.gif",style:{width:400,height:"auto","border-radius":"12.8px"}})),(0,a.yg)("h2",{id:"example-2-rgb-blink"},"Example 2: RGB Blink"),(0,a.yg)(o.A,{mdxType:"Tabs"},(0,a.yg)(r.A,{value:"ws2812.c",label:"ws2812.c",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-c"},'/**\n * Copyright (c) 2020 Raspberry Pi (Trading) Ltd.\n *\n * SPDX-License-Identifier: BSD-3-Clause\n */\n\n#include <stdio.h>\n#include <stdlib.h>\n\n#include "pico/stdlib.h"\n#include "hardware/pio.h"\n#include "hardware/clocks.h"\n#include "ws2812.pio.h"\n\n#define IS_RGBW true\n#define NUM_PIXELS 1\n\n#ifdef PICO_DEFAULT_WS2812_PIN\n#define WS2812_PIN PICO_DEFAULT_WS2812_PIN\n#else\n// default to pin 2 if the board doesn\'t have a default WS2812 pin defined\n#define WS2812_PIN 22\n#endif\n\nstatic inline void put_pixel(uint32_t pixel_grb) {\n    pio_sm_put_blocking(pio0, 0, pixel_grb << 8u);\n}\n\nstatic inline uint32_t urgb_u32(uint8_t r, uint8_t g, uint8_t b) {\n    return\n            ((uint32_t) (r) << 8) |\n            ((uint32_t) (g) << 16) |\n            (uint32_t) (b);\n}\n\nvoid pattern_snakes(uint len, uint t) {\n    for (uint i = 0; i < len; ++i) {\n        uint x = (i + (t >> 1)) % 64;\n        if (x < 10)\n            put_pixel(urgb_u32(0xff, 0, 0));\n        else if (x >= 15 && x < 25)\n            put_pixel(urgb_u32(0, 0xff, 0));\n        else if (x >= 30 && x < 40)\n            put_pixel(urgb_u32(0, 0, 0xff));\n        else\n            put_pixel(0);\n    }\n}\n\nvoid pattern_random(uint len, uint t) {\n    if (t % 8)\n        return;\n    for (int i = 0; i < len; ++i)\n        put_pixel(rand());\n}\n\nvoid pattern_sparkle(uint len, uint t) {\n    if (t % 8)\n        return;\n    for (int i = 0; i < len; ++i)\n        put_pixel(rand() % 16 ? 0 : 0xffffffff);\n}\n\nvoid pattern_greys(uint len, uint t) {\n    int max = 100; // let\'s not draw too much current!\n    t %= max;\n    for (int i = 0; i < len; ++i) {\n        put_pixel(t * 0x10101);\n        if (++t >= max) t = 0;\n    }\n}\n\ntypedef void (*pattern)(uint len, uint t);\nconst struct {\n    pattern pat;\n    const char *name;\n} pattern_table[] = {\n        {pattern_snakes,  "Snakes!"},\n        {pattern_random,  "Random data"},\n        {pattern_sparkle, "Sparkles"},\n        {pattern_greys,   "Greys"},\n};\n\nint main() {\n    //set_sys_clock_48();\n    stdio_init_all();\n\n    const int RGB_POWER = 23;\n    gpio_init(RGB_POWER);\n    gpio_set_dir(RGB_POWER, GPIO_OUT);\n    gpio_put(RGB_POWER, 1);\n\n    printf("WS2812 Smoke Test, using pin %d", WS2812_PIN);\n\n    // todo get free sm\n    PIO pio = pio0;\n    int sm = 0;\n    uint offset = pio_add_program(pio, &ws2812_program);\n\n    ws2812_program_init(pio, sm, offset, WS2812_PIN, 800000, IS_RGBW);\n\n    int t = 0;\n    while (1) {\n        int pat = rand() % count_of(pattern_table);\n        int dir = (rand() >> 30) & 1 ? 1 : -1;\n        puts(pattern_table[pat].name);\n        puts(dir == 1 ? "(forward)" : "(backward)");\n        for (int i = 0; i < 1000; ++i) {\n            pattern_table[pat].pat(NUM_PIXELS, t);\n            sleep_ms(10);\n            t += dir;\n        }\n    }\n}\n'))),(0,a.yg)(r.A,{value:"ws2812.pio",label:"ws2812.pio",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-assembly"},';\n; Copyright (c) 2020 Raspberry Pi (Trading) Ltd.\n;\n; SPDX-License-Identifier: BSD-3-Clause\n;\n\n.program ws2812\n.side_set 1\n\n.define public T1 2\n.define public T2 5\n.define public T3 3\n\n.lang_opt python sideset_init = pico.PIO.OUT_HIGH\n.lang_opt python out_init     = pico.PIO.OUT_HIGH\n.lang_opt python out_shiftdir = 1\n\n.wrap_target\nbitloop:\n    out x, 1       side 0 [T3 - 1] ; Side-set still takes place when instruction stalls\n    jmp !x do_zero side 1 [T1 - 1] ; Branch on the bit we shifted out. Positive pulse\ndo_one:\n    jmp  bitloop   side 1 [T2 - 1] ; Continue driving high, for a long pulse\ndo_zero:\n    nop            side 0 [T2 - 1] ; Or drive low, for a short pulse\n.wrap\n\n% c-sdk {\n#include "hardware/clocks.h"\n\nstatic inline void ws2812_program_init(PIO pio, uint sm, uint offset, uint pin, float freq, bool rgbw) {\n\n    pio_gpio_init(pio, pin);\n    pio_sm_set_consecutive_pindirs(pio, sm, pin, 1, true);\n\n    pio_sm_config c = ws2812_program_get_default_config(offset);\n    sm_config_set_sideset_pins(&c, pin);\n    sm_config_set_out_shift(&c, false, true, rgbw ? 32 : 24);\n    sm_config_set_fifo_join(&c, PIO_FIFO_JOIN_TX);\n\n    int cycles_per_bit = ws2812_T1 + ws2812_T2 + ws2812_T3;\n    float div = clock_get_hz(clk_sys) / (freq * cycles_per_bit);\n    sm_config_set_clkdiv(&c, div);\n\n    pio_sm_init(pio, sm, offset, &c);\n    pio_sm_set_enabled(pio, sm, true);\n}\n%}\n\n.program ws2812_parallel\n\n.define public T1 2\n.define public T2 5\n.define public T3 3\n\n.wrap_target\n    out x, 32\n    mov pins, !null [T1-1]\n    mov pins, x     [T2-1]\n    mov pins, null  [T3-2]\n.wrap\n\n% c-sdk {\n#include "hardware/clocks.h"\n\nstatic inline void ws2812_parallel_program_init(PIO pio, uint sm, uint offset, uint pin_base, uint pin_count, float freq) {\n    for(uint i=pin_base; i<pin_base+pin_count; i++) {\n        pio_gpio_init(pio, i);\n    }\n    pio_sm_set_consecutive_pindirs(pio, sm, pin_base, pin_count, true);\n\n    pio_sm_config c = ws2812_parallel_program_get_default_config(offset);\n    sm_config_set_out_shift(&c, true, true, 32);\n    sm_config_set_out_pins(&c, pin_base, pin_count);\n    sm_config_set_set_pins(&c, pin_base, pin_count);\n    sm_config_set_fifo_join(&c, PIO_FIFO_JOIN_TX);\n\n    int cycles_per_bit = ws2812_parallel_T1 + ws2812_parallel_T2 + ws2812_parallel_T3;\n    float div = clock_get_hz(clk_sys) / (freq * cycles_per_bit);\n    sm_config_set_clkdiv(&c, div);\n\n    pio_sm_init(pio, sm, offset, &c);\n    pio_sm_set_enabled(pio, sm, true);\n}\n%}\n'))),(0,a.yg)(r.A,{value:"ws2812-cmake",label:"CMakeLists.txt",mdxType:"TabItem"},(0,a.yg)("p",null,"Copy the following snippet and append it to your ",(0,a.yg)("inlineCode",{parentName:"p"},"CMakeLists.txt")," file."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cmake",metastring:'title="CMakeLists.txt"',title:'"CMakeLists.txt"'},"project(pio_ws2812 C CXX ASM)\n\n# Initialise the Raspberry Pi Pico SDK\npico_sdk_init()\n\n# Add executable target for pio_ws2812\nadd_executable(pio_ws2812)\n\n# Create a directory for generated files\nfile(MAKE_DIRECTORY ${CMAKE_CURRENT_LIST_DIR}/generated)\n\n# Generate the PIO header file from ws2812.pio\npico_generate_pio_header(pio_ws2812 ${CMAKE_CURRENT_LIST_DIR}/ws2812.pio OUTPUT_DIR ${CMAKE_CURRENT_LIST_DIR}/generated)\n\n# Add the source file to the pio_ws2812 target\ntarget_sources(pio_ws2812 PRIVATE ws2812.c)\n\n# Link necessary libraries to the pio_ws2812 target\ntarget_link_libraries(pio_ws2812 PRIVATE pico_stdlib hardware_pio)\n\n# Generate additional output formats (e.g., UF2, BIN)\npico_add_extra_outputs(pio_ws2812)\n\n# Optionally, generate a Python file from the PIO assembly for further analysis or documentation\nadd_custom_command(OUTPUT ${CMAKE_CURRENT_LIST_DIR}/generated/ws2812.py\n    DEPENDS ${CMAKE_CURRENT_LIST_DIR}/ws2812.pio\n    COMMAND pioasm -o python ${CMAKE_CURRENT_LIST_DIR}/ws2812.pio ${CMAKE_CURRENT_LIST_DIR}/generated/ws2812.py\n    VERBATIM)\nadd_custom_target(pio_ws2812_datasheet DEPENDS ${CMAKE_CURRENT_LIST_DIR}/generated/ws2812.py)\nadd_dependencies(pio_ws2812 pio_ws2812_datasheet)\n")),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-RP2350/img/sdk/11-ws2812-rgb-cmake.png",style:{width:500,height:"auto"}})))),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-RP2350/img/sdk/rp2350-rgb.gif",style:{width:240,height:"auto","border-radius":"12.8px"}})),(0,a.yg)("h2",{id:"exmaple-3-uart-print"},"Exmaple 3: UART print"),(0,a.yg)("admonition",{title:"USB Serial",type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"If you want to enable ",(0,a.yg)("inlineCode",{parentName:"p"},"printf")," output to your computer via USB, you'll need to configure your project's ",(0,a.yg)("inlineCode",{parentName:"p"},"CMakeLists.txt")," file by adding the following line:"),(0,a.yg)("pre",{parentName:"admonition"},(0,a.yg)("code",{parentName:"pre",className:"language-cmake"},"pico_enable_stdio_usb(your_project_name 1)\n")),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-RP2350/img/sdk/10-cmake-usb-enabled.png",alt:"CMake USB Enabled",style:{width:400,height:"auto"}})),(0,a.yg)("p",{parentName:"admonition"},"Additionally, ensure you initialize standard I/O in your code by adding ",(0,a.yg)("inlineCode",{parentName:"p"},"stdio_init_all();")," in your main function.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-c",metastring:'title="hello_uart.c"',title:'"hello_uart.c"'},'#include "hardware/uart.h"\n#include "pico/stdlib.h"\n#include <pico/stdio.h>\n#include <pico/time.h>\n#include <stdio.h>\n\n#define UART_ID uart0\n#define BAUD_RATE 115200\n\n// We are using pins 0 and 1, but see the GPIO function select table in the\n// datasheet for information on which other pins can be used.\n#define UART_TX_PIN 0\n#define UART_RX_PIN 1\n\nint main() {\n   stdio_init_all();\n  // Set up our UART with the required speed.\n  uart_init(UART_ID, BAUD_RATE);\n\n  // Set the TX and RX pins by using the function select on the GPIO\n  // Set datasheet for more information on function select\n  gpio_set_function(UART_TX_PIN, UART_FUNCSEL_NUM(UART_ID, UART_TX_PIN));\n  gpio_set_function(UART_RX_PIN, UART_FUNCSEL_NUM(UART_ID, UART_RX_PIN));\n\n  // Use some the various UART functions to send out data\n  // In a default system, printf will also output via the default UART\n\n  // Send out a character without any conversions\n  uart_putc_raw(UART_ID, \'A\');\n\n  // Send out a character but do CR/LF conversions\n  uart_putc(UART_ID, \'B\');\n\n  // Send out a string, with CR/LF conversions\n  uart_puts(UART_ID, " Hello, UART!\\n");\n\n  // Print test\n  int i = 0;\n  for (;;) {\n    sleep_ms(500);\n    printf("Hello %d", i++);\n  }\n}\n')),(0,a.yg)("h2",{id:"exmaple-4-read-battery-voltage"},"Exmaple 4: Read Battery Voltage"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-c",metastring:'title="hello_adc.c"',title:'"hello_adc.c"'},'#include <stdio.h>\n#include "pico/stdlib.h"\n#include "hardware/gpio.h"\n#include "hardware/adc.h"\n\nvoid init_gpio() {\n    const int gpio = 19;\n\n    gpio_init(gpio);\n    gpio_set_dir(gpio, GPIO_OUT);\n    gpio_put(gpio, 1);\n}\n\nint main() {\n    stdio_init_all();\n    printf("ADC battery Example - GPIO29 A3\\n");\n\n    init_gpio();\n    adc_init();\n\n    // Make sure GPIO is high-impedance, no pullups etc\n    adc_gpio_init(29);\n    // Select ADC input 0 (GPIO26)\n    adc_select_input(3);\n\n    while (1) {\n        // 12-bit conversion, assume max value == ADC_VREF == 3.3 V\n        const float conversion_factor = 3.3f / (1 << 12);\n        uint16_t result = adc_read();\n        printf("Raw value: 0x%03x, voltage: %f V\\n", result, result * conversion_factor * 2);\n        sleep_ms(500);\n    }\n}\n')),(0,a.yg)("h2",{id:"faq"},"FAQ"),(0,a.yg)("h4",{id:"tinyusb-submodule-not-initialized-usb-support-unavailable"},"TinyUSB Submodule Not Initialized; USB Support Unavailable"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Issue:"),"\nWhen building a project, you may see this warning:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-plaintext"},"TinyUSB submodule has not been initialized; USB support will be unavailable\n")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Solution:")),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Open Terminal")," on Linux/macOS or Command Prompt/PowerShell/Git Bash on Windows.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Navigate to the Pico SDK directory:")),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"cd /path/to/your/pico-sdk\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Initialize the submodule:")),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"git submodule update --init\n")))),(0,a.yg)("p",null,"This will enable USB support in your project."),(0,a.yg)("h2",{id:"resources"},"Resources"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\ud83d\udd17 ",(0,a.yg)("strong",{parentName:"li"},"[Link]")," ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/raspberrypi/pico-sdk"},"Raspberry Pi Pico SDK | GitHub")),(0,a.yg)("li",{parentName:"ul"},"\ud83d\udcc4 ",(0,a.yg)("strong",{parentName:"li"},"[PDF]")," ",(0,a.yg)("a",{parentName:"li",href:"https://datasheets.raspberrypi.com/pico/raspberry-pi-pico-c-sdk.pdf"},"Raspberry Pi Pico-series C/C++SDK")," the book which documents the SDK APIs"),(0,a.yg)("li",{parentName:"ul"},"\ud83d\udcc4 ",(0,a.yg)("strong",{parentName:"li"},"[PDF]")," ",(0,a.yg)("a",{parentName:"li",href:"https://datasheets.raspberrypi.com/pico/getting-started-with-pico.pdf"},"Getting started with Raspberry Pi Pico-series"),"  - Official Raspberry Pi documentation."),(0,a.yg)("li",{parentName:"ul"},"\ud83d\udcfd\ufe0f ",(0,a.yg)("strong",{parentName:"li"},"[Video]")," ",(0,a.yg)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=B5rQSoOmR5w"},"Intro to Raspberry Pi Pico and RP2040")," -  A video tutorial.")),(0,a.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,a.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,a.yg)("div",{class:"button_tech_support_container"},(0,a.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,a.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,a.yg)("div",{class:"button_tech_support_container"},(0,a.yg)("a",{href:"https://discord.gg/kpY74apCWj",class:"button_discord"}),(0,a.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}m.isMDXComponent=!0}}]);