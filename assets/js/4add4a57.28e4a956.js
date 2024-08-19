"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[40575],{15680:(e,t,i)=>{i.d(t,{xA:()=>u,yg:()=>h});var o=i(96540);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,o,r=function(e,t){if(null==e)return{};var i,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)i=n[o],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)i=n[o],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=o.createContext({}),d=function(e){var t=o.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},u=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var i=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(i),g=r,h=c["".concat(l,".").concat(g)]||c[g]||p[g]||n;return i?o.createElement(h,a(a({ref:t},u),{},{components:i})):o.createElement(h,a({ref:t},u))}));function h(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=i.length,a=new Array(n);a[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,a[1]=s;for(var d=2;d<n;d++)a[d]=i[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,i)}g.displayName="MDXCreateElement"},3098:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>d});var o=i(58168),r=(i(96540),i(15680));const n={description:"CircuitPython for ESP32S3",title:"CircuitPython for ESP32S3",image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/XIAO_ESP32S3_CircuitPython",last_update:{date:"08/09/2023",author:"Isaac"}},a="Project Overview",s={unversionedId:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3/XIAO_ESP32S3_CircuitPython",id:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3/XIAO_ESP32S3_CircuitPython",title:"CircuitPython for ESP32S3",description:"CircuitPython for ESP32S3",source:"@site/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3/XIAO_ESP32S3_CircuitPython.md",sourceDirName:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3",slug:"/XIAO_ESP32S3_CircuitPython",permalink:"/XIAO_ESP32S3_CircuitPython",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3/XIAO_ESP32S3_CircuitPython.md",tags:[],version:"current",lastUpdatedBy:"Isaac",lastUpdatedAt:1691539200,formattedLastUpdatedAt:"Aug 9, 2023",frontMatter:{description:"CircuitPython for ESP32S3",title:"CircuitPython for ESP32S3",image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/XIAO_ESP32S3_CircuitPython",last_update:{date:"08/09/2023",author:"Isaac"}}},l={},d=[{value:"Hardware Preparation",id:"hardware-preparation",level:2},{value:"Software Preparation",id:"software-preparation",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Connect the XIAO ESP32S3 board to PC under the BootLoader Mode",id:"connect-the-xiao-esp32s3-board-to-pc-under-the-bootloader-mode",level:3},{value:"Open Thonny and Configure the options",id:"open-thonny-and-configure-the-options",level:3},{value:"Flash CircuitPython firmware to the XIAO ESP32S3 board",id:"flash-circuitpython-firmware-to-the-xiao-esp32s3-board",level:3},{value:"Add the related files(libraries) to the &quot;CIRCUITPY&quot; driver",id:"add-the-related-fileslibraries-to-the-circuitpy-driver",level:3},{value:"Write code(IIC) and upload to achieve OLED display",id:"write-codeiic-and-upload-to-achieve-oled-display",level:3},{value:"What&#39;s more",id:"whats-more",level:2},{value:"\u2728 Contributor Project",id:"-contributor-project",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],u={toc:d},c="wrapper";function p(e){let{components:t,...i}=e;return(0,r.yg)(c,(0,o.A)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"project-overview"},"Project Overview"),(0,r.yg)("p",null,"CircuitPython is an ideal programming language for XIAO ESP32S3 as it simplifies physical computing projects. Based on Python, it has beginner-friendly syntax and includes modules for accessing hardware like sensors and displays. Since CircuitPython already supports the ESP32S3 chip, this project attempts to compile CircuitPython on Seeed Studio XIAO ESP32S3 Board."),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/13.jpg"})),(0,r.yg)("h2",{id:"hardware-preparation"},"Hardware Preparation"),(0,r.yg)("p",null,"I am using Seeed Studio XIAO ESPS3 and Seeed Studio Grove OLED Display 0.96 as the hardware here."),(0,r.yg)("div",{class:"table-center"},(0,r.yg)("table",{align:"center"},(0,r.yg)("tr",null,(0,r.yg)("th",null,"Seeed Studio XIAO ESP32S3"),(0,r.yg)("th",null,"Seeed Studio Grove OLED Display 0.96")),(0,r.yg)("tr",null,(0,r.yg)("td",null,(0,r.yg)("div",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg",style:{width:250,height:"auto"}}))),(0,r.yg)("td",null,(0,r.yg)("div",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/g/r/grove-oled-displey-0.96-ssd1315-preview.jpg",style:{width:250,height:"auto"}})))),(0,r.yg)("tr",null,(0,r.yg)("td",null,(0,r.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,r.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html"},(0,r.yg)("strong",null,(0,r.yg)("span",null,(0,r.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f")))))),(0,r.yg)("td",null,(0,r.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,r.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Grove-OLED-Display-0-96-SSD1315-p-4294.html"},(0,r.yg)("strong",null,(0,r.yg)("span",null,(0,r.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))))))),(0,r.yg)("h2",{id:"software-preparation"},"Software Preparation"),(0,r.yg)("p",null,"I am using Thonny IDE software(Windows) and some related libraries and files."),(0,r.yg)("div",{class:"table-center"},(0,r.yg)("table",{align:"center"},(0,r.yg)("tr",null,(0,r.yg)("th",null,"Thonny IDE"),(0,r.yg)("th",null,"related files(libraries)")),(0,r.yg)("tr",null,(0,r.yg)("td",null,(0,r.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,r.yg)("a",{class:"get_one_now_item",href:"https://thonny.org/"},(0,r.yg)("strong",null,(0,r.yg)("span",null,(0,r.yg)("font",{color:"FFFFFF",size:"4"}," Download \u23ec")))))),(0,r.yg)("td",null,(0,r.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,r.yg)("a",{class:"get_one_now_item",href:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/related-mpy.zip"},(0,r.yg)("strong",null,(0,r.yg)("span",null,(0,r.yg)("font",{color:"FFFFFF",size:"4"}," Download \u23ec"))))))))),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"Before using it, it is required for me to state the software/firmware I'm using here is designed for the ESP32S3 chip. Hence when you are trying to use pin, make sure the General Purpose Input/Output instead of the pin on the board.",(0,r.yg)("br",null),"\nFor example, when you are trying to use the pin in the first row on the left. Make sure it is ",(0,r.yg)("inlineCode",{parentName:"p"},"GPIO1")," instead of ",(0,r.yg)("inlineCode",{parentName:"p"},"A0")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"D0"),"."),(0,r.yg)("div",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/2.jpg",style:{width:500,height:"auto"}}))),(0,r.yg)("h2",{id:"getting-started"},"Getting Started"),(0,r.yg)("h3",{id:"connect-the-xiao-esp32s3-board-to-pc-under-the-bootloader-mode"},"Connect the XIAO ESP32S3 board to PC under the BootLoader Mode"),(0,r.yg)("p",null,"The specific method is:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Step 1"),". Press and hold the BOOT button on the XIAO ESP32S3 without releasing it.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Step 2"),". Keep the BOOT button pressed and then connect to the computer via the data cable. Release the BOOT button after connecting to the computer.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Step 3"),". Upload the ",(0,r.yg)("strong",{parentName:"p"},"Blink")," program to check the operation of the XIAO ESP32S3."))),(0,r.yg)("div",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/15.gif",style:{width:500,height:"auto"}})),(0,r.yg)("h3",{id:"open-thonny-and-configure-the-options"},"Open Thonny and Configure the options"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},'After running Thonny, navigate "Tools -> Options" and click the "Options" selection')),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:500,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/03.png"})),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},'Select "Interpreter" option and click the "CircuitPython (generic)" selection')),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:500,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/04.png"})),(0,r.yg)("h3",{id:"flash-circuitpython-firmware-to-the-xiao-esp32s3-board"},"Flash CircuitPython firmware to the XIAO ESP32S3 board"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},'Click on "(esptool)" in Thonny. It will prompt you to download the latest CircuitPython firmware and flash it to the board.')),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:500,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/06.png"})),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},'The "(esptool)" in Thonny is shown like below and fisrtly choose the right "Target port".')),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:500,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/07.png"})),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},'Select the CircuitPython family as "ESP32-S3" and choose variant as "Espressif\u2022ESP32-S3-DevKitC-1-N8".')),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:500,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/08.png"})),(0,r.yg)("ol",{start:4},(0,r.yg)("li",{parentName:"ol"},'Thonny will fill the reset and you can click the "Install" now.')),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:500,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/09.png"})),(0,r.yg)("ol",{start:5},(0,r.yg)("li",{parentName:"ol"},'After a while showing "Done", the window can be closed.')),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:500,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/10.png"})),(0,r.yg)("ol",{start:6},(0,r.yg)("li",{parentName:"ol"},'There will be a "CIRCUITPY" driver on the PC, which shows the board has successfully been flashed.')),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/11.png"})),(0,r.yg)("h3",{id:"add-the-related-fileslibraries-to-the-circuitpy-driver"},'Add the related files(libraries) to the "CIRCUITPY" driver'),(0,r.yg)("p",null,"Copy all the files from the ",(0,r.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/related-mpy.zip"},"related files(library)"),' to the "CIRCUITPY" driver.'),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/12.png"})),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},'The "adafruit_ssd1306.mpy" file and "adafruit_framebuf.mpy" file are necessary while using "Seeed Studio Grove OLED Display 0.96"'),(0,r.yg)("p",{parentName:"admonition"},"The adafruit_framebuf library uses a font file named font5x8.bin to render text. This file needs to be accessible within the environment where your code is executed.")),(0,r.yg)("h3",{id:"write-codeiic-and-upload-to-achieve-oled-display"},"Write code(IIC) and upload to achieve OLED display"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"After adding the files, I can now import the adafruit_ssd1306 library into the code using the command import adafruit_ssd1306 and the environment is now configured to drive the OLED display. The code is shown below:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},"from board import *\nfrom busio import I2C\nimport busio\nimport adafruit_ssd1306\n\ni2c = I2C(IO6,IO5)  # Initialize I2C communication using IO6 and IO5 pins\n\n# Create a display object with 128x64 resolution and an I2C address of 0x3C\ndisplay = adafruit_ssd1306.SSD1306_I2C(128, 64, i2c, addr=0x3C)\n\n# Clear the display\ndisplay.fill(0)\ndisplay.show()\n\n# Write text on the display\ndisplay.text('SeeedStudio ESP32S3', 0, 0 , 1)\ndisplay.text('Code by CircuitPython!', 0, 20 , 2)\ndisplay.show()\n")),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},'Upload the code by clicking the "Run" buttion')),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/14.png"})),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"The final result")),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/13.jpg"})),(0,r.yg)("h2",{id:"whats-more"},"What's more"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The related files are all from the assembled ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/adafruit/Adafruit_CircuitPython_Bundle/releases/download/20230718/adafruit-circuitpython-bundle-8.x-mpy-20230718.zip"},"Adafruit CircuitPython library bundle")," form ",(0,r.yg)("a",{parentName:"li",href:"https://circuitpython.org/libraries"},"https://circuitpython.org/libraries")," and you can find all the supported hardware files using CircuitPython."),(0,r.yg)("li",{parentName:"ul"},'The "font5x8.bin" file is from ',(0,r.yg)("a",{parentName:"li",href:"https://github.com/adafruit/Adafruit_CircuitPython_framebuf/blob/main/examples/font5x8.bin"},"here"))),(0,r.yg)("h2",{id:"-contributor-project"},"\u2728 Contributor Project"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"This project is supported by the Seeed Studio ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479"},"Contributor Project"),"."),(0,r.yg)("li",{parentName:"ul"},"Thanks ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=35178340"},"Isaac's efforts")," and your work will be ",(0,r.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Honorary-Contributors/"},"exhibited"),".")),(0,r.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,r.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,r.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,r.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}p.isMDXComponent=!0}}]);