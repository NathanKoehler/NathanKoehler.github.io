(this.webpackJsonpnew=this.webpackJsonpnew||[]).push([[0],{26:function(e,t,a){},51:function(e,t,a){},61:function(e,t,a){},68:function(e,t,a){},70:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var i,n,s,c,r=a(1),l=a.n(r),o=a(29),d=a.n(o),j=a(6),b=a(84),m=a(7),h=(a(61),a(13)),u=a(14),g=u.a.nav(i||(i=Object(h.a)(["\n  --background: ",";\n\n  --purewhite: ",";\n\n  --darkgray: ",";\n\n  --vivid: ",";\n  --rotate: ",";\n\n  transition: 800ms background-color ease, 800ms color ease;\n"],["\n  --background: ",";\n\n  --purewhite: ",";\n\n  --darkgray: ",";\n\n  --vivid: ",";\\\n\n  --rotate: ",";\n\n  transition: 800ms background-color ease, 800ms color ease;\n"])),(function(e){return e.scrollNav?"rgb(238, 238, 238)":"rgb(20, 20, 20)"}),(function(e){return e.scrollNav?"#000000":"#ffffff"}),(function(e){return e.scrollNav?"#eeeeee":"#dbdbdb"}),(function(e){return e.scrollNav?"#2373db":"#fcc83f"}),(function(e){return e.scrollNav?"0deg":"360deg"})),x=u.a.h4(n||(n=Object(h.a)(["\n  transform: ",";\n\n  z-index: 2;\n\n  transition: 500ms transform ease-in-out, 500ms color ease-in-out;\n"])),(function(e){return e.scrollNav?"translate3d(-2px, -2px, 0px)":"translate3d(0px, 0px, 0px)"})),O=u.a.h4(s||(s=Object(h.a)(["\n  opacity: ",";\n\n  transform: ",";\n\n  z-index: 1;\n\n  transition: 1000ms transform ease-in-out, 1000ms opacity ease-in-out,\n    1000ms color ease-in-out;\n"])),(function(e){return e.scrollNav?"0":"1"}),(function(e){return e.scrollNav?"translate3d(12px, 12px, 0px)":"translate3d(0px, 0px, 0px)"})),f=u.a.h4(c||(c=Object(h.a)(["\n  transform: ",";\n  opacity: ",";\n\n  z-index: 0;\n\n  transition: 1100ms all ease-in;\n"])),(function(e){return e.scrollNav?"translate3d(2px, 2px, 0px)":"translate3d(0px, 0px, 0px)"}),(function(e){return e.scrollNav?"1":"0"})),p=a(0);var v=function(){var e=Object(r.useState)(!1),t=Object(m.a)(e,2),a=t[0],i=t[1],n=Object(r.useState)(!1),s=Object(m.a)(n,2),c=s[0],l=s[1],o=function(){i(!1)},d=function(){"/"===window.location.pathname&&(window.scrollY>=window.innerHeight-100?l(!0):l(!1))},b=window.location.pathname;return Object(r.useEffect)((function(){"/"===window.location.pathname?l(!1):l(!0)}),[b]),Object(r.useEffect)((function(){return window.addEventListener("scroll",d),function(){window.removeEventListener("scroll",d)}}),[]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:"navbar-invisible-box"}),Object(p.jsx)(g,{scrollNav:c,className:"navbar",children:Object(p.jsxs)("section",{className:"navbar-container",children:[Object(p.jsx)(j.b,{to:"/",className:"navbar-logo",onClick:o,children:Object(p.jsxs)("div",{className:"navbar-name",children:[Object(p.jsxs)(x,{className:"navbar-name-front",scrollNav:c,children:["NATE KOEHLER"," ",Object(p.jsx)("i",{className:"fas fa-palette"})]}),Object(p.jsxs)(O,{scrollNav:c,className:"navbar-name-middle",children:["NATE KOEHLER"," ",Object(p.jsx)("i",{className:"fas fa-palette"})]}),Object(p.jsxs)(f,{scrollNav:c,className:"navbar-name-backdrop",children:["NATE KOEHLER"," ",Object(p.jsx)("i",{className:"fas fa-palette"})]})]})}),Object(p.jsx)("div",{className:"menu-icon",onClick:function(){return i(!a)},children:Object(p.jsx)("i",{className:a?"fas fa-times":"fas fa-bars"})}),Object(p.jsxs)("ul",{className:a?"nav-menu active":"nav-menu",children:[Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(j.b,{to:"/",className:"nav-links",onClick:o,children:"HOME"})}),Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)("a",{href:"resources/Resume.pdf",target:"_blank",className:"nav-links",children:"RESUME"})}),Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(j.b,{to:"/artwork",className:"nav-links",onClick:o,children:"ARTWORK"})}),Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(j.b,{to:"/about-me",className:"nav-links",onClick:o,children:"ABOUT"})})]})]})})]})},N=(a(26),a(4)),w=(a(68),a(33)),y=a.n(w),k=(a(70),a(19)),S=["btn--primary","btn--outline","btn--outline2","btn--invisible"],E=["btn--medium","btn--large","btn--large--invisible"],_=function(e){var t=e.children,a=e.type,i=e.goTo,n=e.onClick,s=e.vOffset,c=e.vDuration,r=e.buttonStyle,l=e.buttonSize,o=S.includes(r)?r:S[0],d=E.includes(l)?l:E[0];return Object(p.jsx)(k.Link,{to:i,spy:!0,smooth:!0,offset:s,duration:c,className:"btn-mobile",children:Object(p.jsx)("button",{className:"btn ".concat(o," ").concat(d),onClick:n,type:a,children:t})})},A=function(e){var t=e.children,a=(e.type,e.goTo),i=(e.onClick,e.classN),n=e.vOffset,s=e.vDuration;e.buttonStyle,e.buttonSize;return Object(p.jsx)(k.Link,{to:a,spy:!0,smooth:!0,offset:n,duration:s,className:i,children:t})};_.defaultProps={vDuration:1800,vOffset:100,goTo:""};var T=a(23),C=a.n(T);var D,R=function(){return Object(p.jsx)("div",{className:"hero-invisible-width",children:Object(p.jsxs)("div",{id:"top",className:"hero-container",children:[Object(p.jsx)("video",{src:"/videos/stars.mp4",autoPlay:!0,loop:!0,muted:!0}),Object(p.jsxs)(y.a,{speed:6,className:"hero-parallax",children:[Object(p.jsxs)("h1",{children:["NATE IS A ",Object(p.jsx)(A,{goTo:"footer",vOffset:-250,children:Object(p.jsx)("mark",{className:"light-blue",children:"UI/UX"})})," DESIGNER"]}),Object(p.jsx)("p",{children:"Undergrad student at Georgia Tech studying Media and Interaction Design looking for a 2022 internship."}),Object(p.jsxs)("div",{className:"hero-btns",children:[Object(p.jsx)(A,{goTo:"cards",vOffset:-250,children:"PROJECTS"}),Object(p.jsx)(j.b,{to:"/artwork",children:"GALLERY"}),Object(p.jsx)(A,{goTo:"skills",vOffset:-250,children:"SKILLS"}),Object(p.jsx)(A,{goTo:"footer",vOffset:-250,children:"CONTACT"})]}),Object(p.jsx)(C.a,{delayedCall:"true",intervalDelay:"1000",children:function(e){var t=e.isVisible;return Object(p.jsx)("div",{className:"to-cards-button",style:t?{opacity:1}:{opacity:0},children:Object(p.jsx)(_,{goTo:"cards",vDuration:800,vOffset:-250,className:"btns",buttonStyle:"btn--invisible",buttonSize:"btn--large--invisible",children:Object(p.jsx)("div",{className:"to-cards-arrow","aria-label":"Scroll To Cards",children:Object(p.jsx)("i",{className:"fas fa-chevron-down"})})})})}})]})]})})},I=(a(51),a(47)),L=u.a.div(D||(D=Object(h.a)(["\n  opacity: ",";\n\n  transform: ",";\n\n  position: relative;\n  width:100%;\n  height:100%;\n\n  transition: 500ms all ease-in-out;\n"])),(function(e){return e.show?"1":"0"}),(function(e){return e.show?"translate3d(0px, 0px, 0px)":"translate3d(0px, 36px, 0px)"}));var H=function(e){var t=Object(r.useRef)(null),a=Object(r.useState)(0),i=Object(m.a)(a,2),n=i[0],s=i[1];Object(r.useEffect)((function(){var e=function(){s(t.current?t.current.offsetWidth:0)};return t.current&&s(t.current?t.current.offsetWidth:0),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[t]);var c=function(e){var t=Object(r.useState)(e),a=Object(m.a)(t,2),i=a[0],n=a[1],s=Object(r.useState)(i),c=Object(m.a)(s,2),l=c[0],o=c[1];Object(r.useEffect)((function(){i&&o(!0)}),[i]);return[l,n,{style:{animation:"".concat(i?"fadeIn":"fadeOut"," .3s")},onAnimationEnd:function(){i||o(!1)}}]}(),l=Object(m.a)(c,3),o=l[0],d=l[1],b=l[2];return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(L,{show:"true",children:Object(p.jsx)("li",{className:"cards__item",children:Object(p.jsx)(j.b,{className:"cards__item__link",onMouseEnter:function(){return d(!0)},onMouseLeave:function(){return d(!1)},onClick:function(){null!=e.aPath&&window.open(e.aPath,"_blank")},to:e.path,children:Object(p.jsxs)("div",{ref:t,className:"cards__inner__box",children:[Object(p.jsxs)("figure",{className:"cards__item__pic-wrap","data-category":e.label,children:[Object(p.jsx)("img",{src:e.src,alt:"Work",className:"cards__item__img"}),Object(p.jsx)("img",{src:e.srcAlt,alt:"Work",className:"cards__item__img__background"})]}),o&&Object(p.jsx)("div",Object(I.a)(Object(I.a)({},b),{},{className:"cards__item__info",children:Object(p.jsx)("h5",{style:{fontSize:n/22},className:"cards__item__text",children:e.text})}))]})})})})})};var M,G,U=function(){return Object(p.jsxs)("section",{className:"cards",children:[Object(p.jsx)("h1",{className:"card__title",children:"Work"}),Object(p.jsx)("div",{className:"cards__container",children:Object(p.jsxs)("div",{className:"cards__wrapper",children:[Object(p.jsxs)("ul",{id:"cards",className:"cards__items",children:[Object(p.jsx)(H,{src:"images/AHS-Robotics.png",srcAlt:"images/AHS-Robotics-Background.png",text:"Web design and illustration work to redesign the website and digital marketing for the Alpharetta Robotics Team. My role as head of marketing was to redesign the online webpage and the social media platforms.",label:"Web Dev",path:"/"}),Object(p.jsx)(H,{src:"images/TheAscentTitleScreen.png",srcAlt:"images/TheAscent-Background.png",text:"Illustration and C# coding for the Ascent, a 2D platformer built in built in Unity Game Engine. I led the project to win 1st at the Georgia FBLA 2020 Conference for Game Development and Simulation.",label:"Game Design",path:"/"})]}),Object(p.jsxs)("ul",{className:"cards__items",children:[Object(p.jsx)(H,{src:"images/PostCard.png",srcAlt:"images/PostCard-Background.png",text:"Graphics Design work for a series of digitally illustrated postcards and stamps. The series took an honorable mention within the Summer 2021 UGA Digital Illustration review.",label:"Graphics Design",path:"/"}),Object(p.jsx)(H,{src:"images/CurrencyMockup.png",srcAlt:"images/CurrencyMockup-Background.png",text:"Drafting and illustration work two sets of mock currency during the spring and summer of 2021, later posted for a UGA illustration and design portfolio within the Dodd School of Art.",label:"Graphics Design",path:"/"}),Object(p.jsx)(H,{src:"images/UGAHacks6.png",srcAlt:"images/UGAHacks6-Background.png",text:"Graphics Design and C# coding work for the coop indie game Swap. I led the project with my work in art and programming and was featured on the 2021 UGAHacks6 Hackathion social media page.",label:"Game Design",path:"/"})]}),Object(p.jsxs)("ul",{className:"cards__items",children:[Object(p.jsx)(H,{src:"images/FingersCrossed.png",srcAlt:"images/FingersCrossed-Background.png",text:"UX Design and 3D-Modeling work for a 8+ tabletop board game Fingers Crossed. I worked in graphics design prior to making 3D virtual and physical mockups for the game in Maya.",label:"UI / UX"}),Object(p.jsx)(H,{src:"images/Aframe.png",srcAlt:"images/Aframe-Background.png",text:"Created a virtual VR environment utilizing Aframe, Autodesk Maya Arnold procedural generation and Blender UV wrapping for class demonstration. Click to try it out:",label:"AR / VR",path:"/",aPath:"/Aframe-3D-Replica/"})]}),Object(p.jsxs)("ul",{className:"cards__items",children:[Object(p.jsx)(H,{src:"images/RollerRush.png",srcAlt:"images/RollerRush-Background.png",text:"Created a multiplayer web game using Three.js and Cannon.js in tandem with vanilla CSS and HTML as a part of the Computational Media interaction design track.",label:"JavaScript",path:"/"}),Object(p.jsx)(H,{src:"images/Todo.png",srcAlt:"images/Todo-Background.png",text:"Web design work for a Todo application built in React.js and TypeScript. Designed a modular Todo web app with streamlined sorting and editing. Click to try it out:",label:"Web Dev",path:"/",aPath:"/fall2021-dev-takehome/"})]})]})})]})},B=(a(78),u.a.i(M||(M=Object(h.a)(["\n  transform: ",";\n  opacity: ",";\n\n  z-index: 2;\n    \n  transition: 250ms all ease-in-out;\n"])),(function(e){return e.scrollNav?"translate3d(0px, -12px, 0px)":"translate3d(0px, 0px, 0px)"}),(function(e){return e.scrollNav?"0":"1"}))),z=u.a.i(G||(G=Object(h.a)(["\n  transform: ",";\n    \n\n  z-index: 1;\n\n  transition: 250ms all ease-in-out;\n"])),(function(e){return e.scrollNav?"translate3d(0px, -12px, 0px)":"translate3d(0px, 0px, 0px)"}));var F=function(){var e=Object(r.useState)(!1),t=Object(m.a)(e,2),a=t[0],i=t[1],n=Object(r.useState)(0),s=Object(m.a)(n,2),c=s[0],l=s[1],o=function(){return l(window.scrollY/(Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight)-window.innerHeight))};Object(r.useEffect)((function(){return window.addEventListener("scroll",o),function(){window.removeEventListener("scroll",o)}}),[]);var d=Object(r.useRef)(null);return Object(p.jsx)("section",{className:"footer-container",children:Object(p.jsxs)("div",{id:"footer",className:"footer-parallax",style:{opacity:"".concat(c*c*100,"%"),transform:"translateY(".concat(500-500*c,"px)")},children:[Object(p.jsx)("div",{className:"footer-links",children:Object(p.jsx)("div",{className:"footer-link-wrapper",children:Object(p.jsxs)("div",{className:"footer-link-items",children:[Object(p.jsx)("h2",{children:"Let's Talk!"}),Object(p.jsx)("p",{children:"Check out my social media below and shoot me an email for inquiries or to say hello."})]})})}),Object(p.jsx)("section",{className:"social-media",children:Object(p.jsx)("div",{className:"social-media-wrap",children:Object(p.jsx)(C.a,{delayedCall:"true",intervalDelay:"500",onChange:function(e){return function(e){if(e){var t=new MouseEvent("mouseover",{view:window,bubbles:!0,cancelable:!0}),a=new MouseEvent("mouseout",{view:window,bubbles:!0,cancelable:!0});d.current.dispatchEvent(t),setTimeout((function(){d.current.dispatchEvent(a)}),500)}}(e)},children:Object(p.jsxs)("div",{className:"social-icons",children:[Object(p.jsx)(j.b,{className:"social-icon-link github",to:{pathname:"https://github.com/NathanKoehler"},target:"_blank","aria-label":"Github",children:Object(p.jsx)("i",{className:"fab fa-github"})}),Object(p.jsx)("div",{className:"holder",onMouseOver:function(){return i(!0)},onMouseLeave:function(){return i(!1)},children:Object(p.jsxs)(j.b,{ref:d,className:"instagram",to:{pathname:"https://www.instagram.com/nate_koe/"},target:"_blank","aria-label":"Instagram",children:[Object(p.jsx)("div",{className:"instagram-background",children:Object(p.jsx)(z,{scrollNav:a,className:"fab fa-instagram"})}),Object(p.jsx)(B,{scrollNav:a,className:"fab fa-instagram"})]})}),Object(p.jsx)("a",{className:"social-icon-link email",href:"mailto:nathankoehle@gmail.com?subject=Business Inquiry&body=Hello!",children:Object(p.jsx)("i",{className:"far fa-envelope"})}),Object(p.jsx)(j.b,{className:"social-icon-link twitter",to:{pathname:"https://twitter.com/Natpoki"},target:"_blank","aria-label":"Twitter",children:Object(p.jsx)("i",{className:"fab fa-twitter"})}),Object(p.jsx)(j.b,{className:"social-icon-link linkedin",to:{pathname:"https://www.linkedin.com/in/natekoehler/"},target:"_blank","aria-label":"LinkedIn",children:Object(p.jsx)("i",{className:"fab fa-linkedin"})})]})})})}),Object(p.jsx)(C.a,{delayedCall:"true",intervalDelay:"1000",children:function(e){var t=e.isVisible;return Object(p.jsx)("div",{className:"to-top-button",style:t?{opacity:1}:{opacity:0},children:Object(p.jsx)(_,{onClick:function(){k.animateScroll.scrollToTop()},className:"btns",buttonStyle:"btn--invisible",buttonSize:"btn--large--invisible",children:Object(p.jsx)("div",{className:"social-icon-link to-top-arrow","aria-label":"Scroll To Top",children:Object(p.jsx)("i",{className:"fas fa-chevron-up"})})})})}})]})})},q=a(83),P={type:"tween",ease:"anticipate",duration:1},W={initial:{opacity:0,x:0},in:{opacity:1,x:0},out:{opacity:0,x:-100}};a(79);var V=function(){return Object(p.jsxs)("section",{className:"slider",children:[Object(p.jsxs)("div",{className:"slider-top",children:[Object(p.jsx)("div",{className:"slider-title-sub",children:Object(p.jsx)(j.b,{className:"slider-links",to:"/about-me",children:Object(p.jsx)("h2",{className:"slider-title-left",children:"\u6211 \u61c2 \u4e2d \u6587"})})}),Object(p.jsx)("h1",{className:"slider-title",children:"Skills"}),Object(p.jsx)("div",{className:"slider-title-sub",children:Object(p.jsx)(j.b,{className:"slider-links",to:"/artwork",children:Object(p.jsx)("h2",{className:"slider-title-right",children:"View my art skills"})})})]}),Object(p.jsx)("div",{id:"skills",className:"marquee-background",children:Object(p.jsx)("div",{className:"marquee",children:Object(p.jsxs)("ul",{className:"marquee-content",children:[Object(p.jsx)("li",{children:"React Native"}),Object(p.jsx)("li",{children:"Unity"}),Object(p.jsx)("li",{children:"Autodesk Maya"}),Object(p.jsx)("li",{children:"React.js"}),Object(p.jsx)("li",{children:"After Effects"}),Object(p.jsx)("li",{children:"Illustrator"}),Object(p.jsx)("li",{children:"Unreal Engine"}),Object(p.jsx)("li",{style:{color:"#72b7e8"},children:"Photoshop"}),Object(p.jsx)("li",{children:"InDesign"}),Object(p.jsx)("li",{children:"React Native"}),Object(p.jsx)("li",{children:"Unity"}),Object(p.jsx)("li",{children:"Autodesk Maya"}),Object(p.jsx)("li",{children:"React.js"}),Object(p.jsx)("li",{children:"After Effects"})]})})}),Object(p.jsx)("div",{className:"marquee-background",children:Object(p.jsx)("div",{className:"i-marquee",children:Object(p.jsxs)("ul",{className:"i-marquee-content",children:[Object(p.jsx)("li",{children:Object(p.jsx)("i",{className:"fab fa-aws"})}),Object(p.jsx)("li",{children:Object(p.jsx)("i",{className:"devicon-react-original colored"})}),Object(p.jsx)("li",{children:Object(p.jsx)("i",{className:"fab fa-js-square"})}),Object(p.jsx)("li",{children:Object(p.jsx)("i",{className:"fab fa-rust"})}),Object(p.jsx)("li",{children:Object(p.jsx)("i",{className:"fab fa-linux"})}),Object(p.jsx)("li",{children:Object(p.jsx)("i",{className:"fab fa-git-alt"})}),Object(p.jsx)("li",{children:Object(p.jsx)("i",{className:"fab fa-wix"})}),Object(p.jsx)("li",{children:Object(p.jsx)("i",{className:"fab fa-python"})}),Object(p.jsx)("li",{children:Object(p.jsx)("i",{className:"fab fa-node"})}),Object(p.jsx)("li",{children:Object(p.jsx)("i",{className:"devicon-c-plain"})}),Object(p.jsx)("li",{children:Object(p.jsx)("i",{className:"devicon-cplusplus-plain"})}),Object(p.jsx)("li",{children:Object(p.jsx)("i",{className:"devicon-csharp-plain"})}),Object(p.jsx)("li",{children:Object(p.jsx)("i",{className:"devicon-kotlin-plain"})}),Object(p.jsx)("li",{children:Object(p.jsx)("i",{className:"devicon-apple-original"})}),Object(p.jsx)("li",{children:Object(p.jsx)("i",{className:"devicon-tailwindcss-plain colored"})}),Object(p.jsx)("li",{children:Object(p.jsx)("i",{className:"devicon-illustrator-plain"})}),Object(p.jsx)("li",{children:Object(p.jsx)("i",{className:"devicon-photoshop-line colored"})}),Object(p.jsx)("li",{children:Object(p.jsx)("i",{className:"devicon-aftereffects-plain"})}),Object(p.jsx)("li",{children:Object(p.jsx)("i",{className:"fab fa-aws"})}),Object(p.jsx)("li",{children:Object(p.jsx)("i",{className:"devicon-react-original colored"})}),Object(p.jsx)("li",{children:Object(p.jsx)("i",{className:"fab fa-js-square"})}),Object(p.jsx)("li",{children:Object(p.jsx)("i",{className:"fab fa-rust"})}),Object(p.jsx)("li",{children:Object(p.jsx)("i",{className:"fab fa-linux"})}),Object(p.jsx)("li",{children:Object(p.jsx)("i",{className:"fab fa-git-alt"})}),Object(p.jsx)("li",{children:Object(p.jsx)("i",{className:"fab fa-wix"})})]})})})]})};var K=function(e){return Object(p.jsxs)(q.a.div,{style:{position:"absolute",width:"100%"},initial:"initial",animate:"in",exit:"out",variants:W,transition:P,children:[Object(p.jsx)(R,{navRef:e.navRef}),Object(p.jsx)(U,{}),Object(p.jsx)(V,{}),Object(p.jsx)(F,{})]})};function Y(){return Object(p.jsx)(q.a.div,{style:{position:"absolute",width:"100%"},initial:"initial",animate:"in",exit:"out",variants:W,transition:P,children:Object(p.jsx)("h1",{className:"services",children:"SERVICES"})})}var J,X=a(56),Q=(a(80),u.a.div(J||(J=Object(h.a)(["\n  opacity: ",";\n\n  transform: ",";\n\n  position: relative;\n\n  transition: 500ms all ease-in-out;\n"])),(function(e){return e.show?"1":"0"}),(function(e){return e.show?"translate3d(0px, 0px, 0px)":"translate3d(0px, 36px, 0px)"}))),Z=function(e,t){var a=l.a.useState(e),i=Object(m.a)(a,2),n=i[0],s=i[1];return l.a.useEffect((function(){s(e);var a=new Image;a.src=t,a.onload=function(){s(t)}}),[e,t]),[n,n===e]},$=function(){var e=[{id:1,height:2400,width:1800,imgSrc:Z("images/gallery/blurred/bpillar.jpg","images/gallery/pillar.png")},{id:2,height:1333,width:2400,imgSrc:Z("images/gallery/blurred/bglaveborn.jpg","images/gallery/glaveborn.png")},{id:3,height:1400,width:1400,imgSrc:Z("images/gallery/blurred/banta.jpg","images/gallery/anta.png")},{id:4,height:3600,width:1500,imgSrc:Z("images/gallery/blurred/bnewrohcaw.jpg","images/gallery/newrohcaw.jpg")},{id:5,height:1668,width:2434,imgSrc:Z("images/gallery/blurred/bfire.jpg","images/gallery/fire.png")},{id:6,height:612,width:1500,imgSrc:Z("images/gallery/blurred/bmountain.jpg","images/gallery/mountain.png")},{id:7,height:1853,width:1133,imgSrc:Z("images/gallery/blurred/bwinter.jpg","images/gallery/winter.png")},{id:8,height:2341,width:3300,imgSrc:Z("images/gallery/blurred/btree.jpg","images/gallery/tree.png")},{id:9,height:2128,width:2856,imgSrc:Z("images/gallery/blurred/bbarter.jpg","images/gallery/barter.png")},{id:10,height:2808,width:2152,imgSrc:Z("images/gallery/blurred/btemple.jpg","images/gallery/temple.png")},{id:11,height:3600,width:1500,imgSrc:Z("images/gallery/blurred/bnewrohcawback.jpg","images/gallery/newrohcawback.jpg")},{id:12,height:3300,width:2550,imgSrc:Z("images/gallery/blurred/bfish.jpg","images/gallery/fish.png")},{id:13,height:2400,width:1800,imgSrc:Z("images/gallery/blurred/bwall.jpg","images/gallery/wall.png")},{id:14,height:2400,width:1800,imgSrc:Z("images/gallery/blurred/bfoundry.jpg","images/gallery/foundry.png")},{id:15,height:1960,width:1441,imgSrc:Z("images/gallery/blurred/bsit.jpg","images/gallery/sit.jpeg")},{id:16,height:2550,width:3300,imgSrc:Z("images/gallery/blurred/bwater.jpg","images/gallery/water.png")},{id:17,height:3300,width:2550,imgSrc:Z("images/gallery/blurred/bsorcerer.jpg","images/gallery/sorcerer.jpeg")},{id:18,height:2956,width:2683,imgSrc:Z("images/gallery/blurred/bcrown.jpg","images/gallery/crown.png")},{id:19,height:2956,width:2683,imgSrc:Z("images/gallery/blurred/bice.jpg","images/gallery/ice.png")}],t=Object(r.useState)(Array(e.length).fill(!1)),a=Object(m.a)(t,2),i=a[0],n=a[1],s=Object(r.useState)(!1),c=Object(m.a)(s,2),l=c[0],o=c[1],d=Object(r.useState)(""),j=Object(m.a)(d,2),b=j[0],h=j[1];return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:l?"model open":"model",children:[Object(p.jsx)("img",{src:b,alt:"Focus"}),Object(p.jsx)("i",{className:"fas fa-times",onClick:function(){return o(!1)}})]}),Object(p.jsxs)("section",{className:"gallery-page",children:[Object(p.jsx)("div",{className:"gallery-title",children:Object(p.jsxs)("div",{className:"gallery-title-box",children:[Object(p.jsx)("div",{className:"gallery-title-text",children:Object(p.jsx)("h1",{children:"Image Gallery"})}),Object(p.jsx)("h2",{children:'"Fresh from the head, delivered by hand."'})]})}),Object(p.jsx)("div",{className:"gallery-wrapper",children:e&&e.map((function(e,t){return Object(p.jsx)(C.a,{partialVisibility:!0,offset:{top:200},intervalDelay:"300",intervalCheck:"false",delayedCall:"true",onChange:function(e){return function(e,t){t&&n((function(t){return t[e]=!0,Object(X.a)(t)}))}(t,e)},children:Object(p.jsx)(Q,{show:i[t],children:Object(p.jsx)("div",{className:"pics",onClick:function(){return t=e.imgSrc[0],h(t),void o(!0);var t},children:Object(p.jsx)("img",{className:"images",src:e.imgSrc[0],height:e.height,width:e.width,alt:"Gallery",style:{filter:e.imgSrc[1]?"blur(20px)":"none",transition:e.imgSrc[1]?"none":"filter 0.3s ease-out"}})},t)})},t)}))})]})]})};function ee(){return Object(p.jsxs)(q.a.div,{style:{position:"absolute",width:"100%"},initial:"initial",animate:"in",exit:"out",variants:W,transition:P,children:[Object(p.jsx)($,{}),Object(p.jsx)(F,{})]})}a(81);var te=function(){var e=Object(r.useState)(0),t=Object(m.a)(e,2),a=t[0],i=t[1],n=Object(r.useState)(!1),s=Object(m.a)(n,2),c=s[0],l=s[1],o=function(){return i(window.scrollY/(Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight)-window.innerHeight))};return Object(r.useEffect)((function(){window.addEventListener("scroll",o);var e=setTimeout((function(){l(!0)}),2e3);return function(){window.removeEventListener("scroll",o),clearTimeout(e)}}),[]),Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("section",{className:"profile",children:Object(p.jsxs)("div",{className:"profile-top",children:[Object(p.jsx)(y.a,{speed:1,className:"text-over-image",children:Object(p.jsxs)("h1",{children:["My Name Is ",Object(p.jsx)("mark",{className:"light-red",children:"Nate"})]})}),Object(p.jsxs)(y.a,{style:{opacity:"".concat(170-170*a,"%"),width:"100%",height:"100%"},speed:-7,className:"profile-top-container",children:[Object(p.jsx)("img",{src:"/images/selfie.png",alt:"Selfie",className:"profile-img"}),Object(p.jsxs)("div",{className:"profile-top-content",children:[Object(p.jsxs)("div",{className:"profile-top-text",children:[Object(p.jsxs)("h2",{children:["But you can call me ",Object(p.jsx)("mark",{className:"red",children:"Nathan"}),","," ",Object(p.jsx)("mark",{className:"red",children:"Nathaniel"}),", or"," ",Object(p.jsx)("mark",{className:"red",children:"\u66fe\u96f7\u751f"})," \ud83d\ude04"]}),Object(p.jsxs)("p",{children:["I'm currenty a undergrad studying Media and Design at"," ",Object(p.jsx)("mark",{className:"small-red",children:"Georgia Tech."})," \ud83d\udc1d"," "]}),Object(p.jsxs)("p",{children:["I came from a trilingual family and enjoy both coding and illustration. \ud83d\udcbb"," "]}),Object(p.jsxs)("p",{children:["If you are interested in hiring me, you can check out my"," ",Object(p.jsx)("mark",{className:"small-red",children:Object(p.jsx)(k.Link,{to:"footer",spy:!0,smooth:!0,offset:-500,children:"info below."})})," ","\ud83d\udc47"," "]}),Object(p.jsxs)("p",{children:["I'm now available for"," ",Object(p.jsx)("mark",{className:"small-red",children:Object(p.jsx)(k.Link,{to:"footer",spy:!0,smooth:!0,offset:-500,children:"part-time roles"})}),","," ",Object(p.jsx)("mark",{className:"small-red",children:Object(p.jsx)(k.Link,{to:"footer",spy:!0,smooth:!0,offset:-500,children:"internships"})}),", and"," ",Object(p.jsx)("mark",{className:"small-red",children:Object(p.jsx)(k.Link,{to:"footer",spy:!0,smooth:!0,offset:-500,children:"co-ops."})})," ","\ud83d\ude80"," "]}),Object(p.jsx)("p",{children:"If you're just browsing, check out my work in the art gallery, too. \ud83c\udfa8"}),Object(p.jsx)("p",{children:"I also have a huge addication to game jams and hackathons. \ud83d\udcc6"}),Object(p.jsxs)("p",{children:["If you want any website or app created today"," ",Object(p.jsx)("mark",{className:"small-red",children:Object(p.jsx)(k.Link,{to:"footer",spy:!0,smooth:!0,offset:-500,children:"let me know!"})})," ",Object(p.jsx)("span",{className:"wave",children:"\ud83d\udc4b"})]})]}),Object(p.jsx)("div",{className:"about-footer-button",style:c?{opacity:1}:{opacity:0},children:Object(p.jsx)(_,{goTo:"footer",vDuration:800,vOffset:-500,className:"btns",buttonStyle:"btn--invisible",buttonSize:"btn--large--invisible",children:Object(p.jsx)("div",{className:"about-footer-arrow","aria-label":"Scroll To Bottom",children:Object(p.jsx)("i",{className:"fas fa-chevron-down"})})})})]})]})]})})})};function ae(){return Object(p.jsxs)(q.a.div,{style:{position:"absolute",width:"100%"},initial:"initial",animate:"in",exit:"out",variants:W,transition:P,children:[Object(p.jsx)(te,{}),Object(p.jsx)(F,{})]})}var ie=function(){var e=Object(N.f)();return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(v,{}),Object(p.jsx)("main",{children:Object(p.jsx)(b.a,{inital:!1,exitBeforeEnter:!0,onExitComplete:function(){return window.scrollTo(0,0)},children:Object(p.jsxs)(N.c,{location:e,children:[Object(p.jsx)(N.a,{exact:!0,path:"/",component:K}),Object(p.jsx)(N.a,{exact:!0,path:"/services",component:Y}),Object(p.jsx)(N.a,{exact:!0,path:"/artwork",component:ee}),Object(p.jsx)(N.a,{exact:!0,path:"/about-me",component:ae})]},e.pathname)})})]})};d.a.render(Object(p.jsx)(j.a,{basename:"",children:Object(p.jsx)(ie,{})}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.7eb72377.chunk.js.map