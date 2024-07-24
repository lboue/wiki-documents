"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[57736],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>y});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,y=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(y,a(a({ref:t},u),{},{components:n})):r.createElement(y,a({ref:t},u))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},81516:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(58168),o=(n(96540),n(15680));const i={title:"I2C\u7aef\u53e3",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Wio-Terminal-IO-I2C/",slug:"/cn/Wio-Terminal-IO-I2C",last_update:{date:"3/10/2024",author:"\u91d1\u83ca"}},a="\u5728Wio Terminal\u4e0a\u4f7f\u7528Grove I2C\u7aef\u53e3",l={unversionedId:"zh-CN/Sensor/Wio_Terminal/Hardware_Overview/Input&Output/CN-Wio-Terminal-IO-I2C",id:"zh-CN/Sensor/Wio_Terminal/Hardware_Overview/Input&Output/CN-Wio-Terminal-IO-I2C",title:"I2C\u7aef\u53e3",description:"\u8fd9\u4e2a\u4ed3\u5e93\u6f14\u793a\u4e86\u5982\u4f55\u5728Wio Terminal\u4e0a\u4f7f\u7528Grove I2C\u7aef\u53e3\uff0c\u60a8\u53ef\u4ee5\u76f4\u63a5\u4e0eGrove\u751f\u6001\u7cfb\u7edf\u8fdb\u884c\u63d2\u62d4\u5f0f\u529f\u80fd\u7684\u4f7f\u7528\uff01",source:"@site/docs/zh-CN/Sensor/Wio_Terminal/Hardware_Overview/Input&Output/CN-Wio-Terminal-IO-I2C.md",sourceDirName:"zh-CN/Sensor/Wio_Terminal/Hardware_Overview/Input&Output",slug:"/cn/Wio-Terminal-IO-I2C",permalink:"/cn/Wio-Terminal-IO-I2C",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/zh-CN/Sensor/Wio_Terminal/Hardware_Overview/Input&Output/CN-Wio-Terminal-IO-I2C.md",tags:[],version:"current",lastUpdatedBy:"\u91d1\u83ca",lastUpdatedAt:1710028800,formattedLastUpdatedAt:"Mar 10, 2024",frontMatter:{title:"I2C\u7aef\u53e3",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Wio-Terminal-IO-I2C/",slug:"/cn/Wio-Terminal-IO-I2C",last_update:{date:"3/10/2024",author:"\u91d1\u83ca"}},sidebar:"CNSidebar",previous:{title:"\u6570\u5b57\u7aef\u53e3",permalink:"/cn/Wio-Terminal-IO-Digital"},next:{title:"SPI",permalink:"/cn/Wio-Terminal-IO-SPI"}},s={},c=[{value:"\u7aef\u53e3\u914d\u7f6e",id:"\u7aef\u53e3\u914d\u7f6e",level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"\u6280\u672f\u652f\u6301 &amp; \u4ea7\u54c1\u8ba8\u8bba",id:"\u6280\u672f\u652f\u6301--\u4ea7\u54c1\u8ba8\u8bba",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.yg)(p,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"\u5728wio-terminal\u4e0a\u4f7f\u7528grove-i2c\u7aef\u53e3"},"\u5728Wio Terminal\u4e0a\u4f7f\u7528Grove I2C\u7aef\u53e3"),(0,o.yg)("p",null,"\u8fd9\u4e2a\u4ed3\u5e93\u6f14\u793a\u4e86\u5982\u4f55\u5728Wio Terminal\u4e0a\u4f7f\u7528Grove I2C\u7aef\u53e3\uff0c\u60a8\u53ef\u4ee5\u76f4\u63a5\u4e0eGrove\u751f\u6001\u7cfb\u7edf\u8fdb\u884c\u63d2\u62d4\u5f0f\u529f\u80fd\u7684\u4f7f\u7528\uff01"),(0,o.yg)("h2",{id:"\u7aef\u53e3\u914d\u7f6e"},"\u7aef\u53e3\u914d\u7f6e"),(0,o.yg)("p",null,"\u8981\u5728Wio Terminal\u4e0a\u4f7f\u7528Grove I2C\u7aef\u53e3\uff0c\u53ea\u9700\u5c06\u4f7f\u7528I2C\u7684Grove\u4f20\u611f\u5668\u8fde\u63a5\u5230Wio Terminal\u4e0a\u7684\u7269\u7406I2C\u7aef\u53e3\u5373\u53ef\u3002"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Note:")," \u8bb0\u5f97\u5728Arduino IDE\u4e2d\u5305\u542b\u4f20\u611f\u5668\u5e93\u3002\u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u8003 ",(0,o.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/How_to_install_Arduino_Library/"},"\u5982\u4f55\u5b89\u88c5\u5e93")," \u3002"),(0,o.yg)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,o.yg)("p",null,"\u5728\u8fd9\u4e2a\u793a\u4f8b\u4e2d\uff0c\u4f7f\u7528\u4e86\u4e00\u4e2aGrove LCD\u6765\u6f14\u793a\u3002\u8fd9\u662fRGB LCD\u5e93\u4e2d\u7684 ",(0,o.yg)("inlineCode",{parentName:"p"},"HelloWorld")," \u793a\u4f8b\u3002"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-cpp"},'#include <Wire.h>\n#include "rgb_lcd.h"\n\nrgb_lcd lcd;\n\nconst int colorR = 255;\nconst int colorG = 0;\nconst int colorB = 0;\n\nvoid setup()\n{\n    // set up the LCD\'s number of columns and rows:\n    lcd.begin(16, 2);\n    \n    lcd.setRGB(colorR, colorG, colorB);\n    \n    // Print a message to the LCD.\n    lcd.print("hello, world!");\n\n    delay(1000);\n}\n\nvoid loop() \n{\n    // set the cursor to column 0, line 1\n    // (note: line 1 is the second row, since counting begins with 0):\n    lcd.setCursor(0, 1);\n    // print the number of seconds since reset:\n    lcd.print(millis()/1000);\n\n    delay(100);\n}\n')),(0,o.yg)("h2",{id:"\u6280\u672f\u652f\u6301--\u4ea7\u54c1\u8ba8\u8bba"},"\u6280\u672f\u652f\u6301 & \u4ea7\u54c1\u8ba8\u8bba"),(0,o.yg)("p",null,"\u611f\u8c22\u60a8\u9009\u62e9\u6211\u4eec\u7684\u4ea7\u54c1\uff01\u6211\u4eec\u81f4\u529b\u4e8e\u4e3a\u60a8\u63d0\u4f9b\u4e0d\u540c\u7684\u652f\u6301\uff0c\u4ee5\u786e\u4fdd\u60a8\u5bf9\u6211\u4eec\u7684\u4ea7\u54c1\u62e5\u6709\u5c3d\u53ef\u80fd\u987a\u7545\u7684\u4f53\u9a8c\u3002\u6211\u4eec\u63d0\u4f9b\u591a\u79cd\u6c9f\u901a\u6e20\u9053\uff0c\u4ee5\u6ee1\u8db3\u4e0d\u540c\u7684\u504f\u597d\u548c\u9700\u6c42\u3002"),(0,o.yg)("div",{class:"button_tech_support_container"},(0,o.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,o.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,o.yg)("div",{class:"button_tech_support_container"},(0,o.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,o.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}d.isMDXComponent=!0}}]);