(this.webpackJsonpnew=this.webpackJsonpnew||[]).push([[0],{25:function(e,a,t){},49:function(e,a,t){},55:function(e,a,t){e.exports=t(84)},60:function(e,a,t){},70:function(e,a,t){},72:function(e,a,t){},80:function(e,a,t){},81:function(e,a,t){},82:function(e,a,t){},83:function(e,a,t){},84:function(e,a,t){"use strict";t.r(a);var n,l,r,i,c=t(0),s=t.n(c),o=t(28),m=t.n(o),u=t(5),d=t(86),f=t(6),E=(t(60),t(12)),g=t(13),p=g.a.nav(n||(n=Object(E.a)(["\n  --background: ",";\n\n  --purewhite: ",";\n\n  --darkgray: ",";\n\n  --vivid: ",";\n  --rotate: ",";\n\n  transition: 800ms background-color ease, 800ms color ease;\n"],["\n  --background: ",";\n\n  --purewhite: ",";\n\n  --darkgray: ",";\n\n  --vivid: ",";\\\n\n  --rotate: ",";\n\n  transition: 800ms background-color ease, 800ms color ease;\n"])),(function(e){return e.scrollNav?"rgb(238, 238, 238)":"rgb(20, 20, 20)"}),(function(e){return e.scrollNav?"#000000":"#ffffff"}),(function(e){return e.scrollNav?"#eeeeee":"#dbdbdb"}),(function(e){return e.scrollNav?"#2373db":"#fcc83f"}),(function(e){return e.scrollNav?"0deg":"360deg"})),b=g.a.h4(l||(l=Object(E.a)(["\n  transform: ",";\n\n  z-index: 2;\n\n  transition: 500ms transform ease-in-out, 500ms color ease-in-out;\n"])),(function(e){return e.scrollNav?"translate3d(-2px, -2px, 0px)":"translate3d(0px, 0px, 0px)"})),h=g.a.h4(r||(r=Object(E.a)(["\n  opacity: ",";\n\n  transform: ",";\n\n  z-index: 1;\n\n  transition: 1000ms transform ease-in-out, 1000ms opacity ease-in-out,\n    1000ms color ease-in-out;\n"])),(function(e){return e.scrollNav?"0":"1"}),(function(e){return e.scrollNav?"translate3d(12px, 12px, 0px)":"translate3d(0px, 0px, 0px)"})),v=g.a.h4(i||(i=Object(E.a)(["\n  transform: ",";\n  opacity: ",";\n\n  z-index: 0;\n\n  transition: 1100ms all ease-in;\n"])),(function(e){return e.scrollNav?"translate3d(2px, 2px, 0px)":"translate3d(0px, 0px, 0px)"}),(function(e){return e.scrollNav?"1":"0"}));var N=function(){var e=Object(c.useState)(!1),a=Object(f.a)(e,2),t=a[0],n=a[1],l=Object(c.useState)(!1),r=Object(f.a)(l,2),i=r[0],o=r[1],m=function(){n(!1)},d=function(){"/"===window.location.pathname&&(window.scrollY>=window.innerHeight-100?o(!0):o(!1))},E=window.location.pathname;return Object(c.useEffect)((function(){"/"===window.location.pathname?o(!1):o(!0)}),[E]),Object(c.useEffect)((function(){return window.addEventListener("scroll",d),function(){window.removeEventListener("scroll",d)}}),[]),s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"navbar-invisible-box"}),s.a.createElement(p,{scrollNav:i,className:"navbar"},s.a.createElement("section",{className:"navbar-container"},s.a.createElement(u.b,{to:"/",className:"navbar-logo",onClick:m},s.a.createElement("div",{className:"navbar-name"},s.a.createElement(b,{className:"navbar-name-front",scrollNav:i},"NATE KOEHLER"," ",s.a.createElement("i",{className:"fas fa-palette"})),s.a.createElement(h,{scrollNav:i,className:"navbar-name-middle"},"NATE KOEHLER"," ",s.a.createElement("i",{className:"fas fa-palette"})),s.a.createElement(v,{scrollNav:i,className:"navbar-name-backdrop"},"NATE KOEHLER"," ",s.a.createElement("i",{className:"fas fa-palette"})))),s.a.createElement("div",{className:"menu-icon",onClick:function(){return n(!t)}},s.a.createElement("i",{className:t?"fas fa-times":"fas fa-bars"})),s.a.createElement("ul",{className:t?"nav-menu active":"nav-menu"},s.a.createElement("li",{className:"nav-item"},s.a.createElement(u.b,{to:"/",className:"nav-links",onClick:m},"HOME")),s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{href:"resources/Resume.pdf",target:"_blank",className:"nav-links"},"RESUME")),s.a.createElement("li",{className:"nav-item"},s.a.createElement(u.b,{to:"/artwork",className:"nav-links",onClick:m},"ARTWORK")),s.a.createElement("li",{className:"nav-item"},s.a.createElement(u.b,{to:"/about-me",className:"nav-links",onClick:m},"ABOUT"))))))},w=(t(25),t(3)),y=(t(70),t(31)),k=t.n(y),x=(t(72),t(18)),j=["btn--primary","btn--outline","btn--outline2","btn--invisible"],O=["btn--medium","btn--large","btn--large--invisible"],S=function(e){var a=e.children,t=e.type,n=e.goTo,l=e.onClick,r=e.vOffset,i=e.vDuration,c=e.buttonStyle,o=e.buttonSize,m=j.includes(c)?c:j[0],u=O.includes(o)?o:O[0];return s.a.createElement(x.Link,{to:n,spy:!0,smooth:!0,offset:r,duration:i,className:"btn-mobile"},s.a.createElement("button",{className:"btn ".concat(m," ").concat(u),onClick:l,type:t},a))},_=function(e){var a=e.children,t=(e.type,e.goTo),n=(e.onClick,e.classN),l=e.vOffset,r=e.vDuration;e.buttonStyle,e.buttonSize;return s.a.createElement(x.Link,{to:t,spy:!0,smooth:!0,offset:l,duration:r,className:n},a)};S.defaultProps={vDuration:1800,vOffset:100,goTo:""};var T=t(22),A=t.n(T);var C,I=function(){return s.a.createElement("div",{className:"hero-invisible-width"},s.a.createElement("div",{id:"top",className:"hero-container"},s.a.createElement("video",{src:"/videos/stars.mp4",autoPlay:!0,loop:!0,muted:!0}),s.a.createElement(k.a,{speed:6,className:"hero-parallax"},s.a.createElement("h1",null,"NATE IS A ",s.a.createElement("mark",{className:"light-blue"},"UI/UX")," DESIGNER"),s.a.createElement("p",null,"Undergrad student at Georgia Tech studying Media and Interaction Design looking for a 2022 spring internship."),s.a.createElement("div",{className:"hero-btns"},s.a.createElement(_,{goTo:"cards",vOffset:-250},"PROJECTS"),s.a.createElement(u.b,{to:"/artwork"},"ARTWORK"),s.a.createElement(_,{goTo:"skills",vOffset:-250},"SKILLS"),s.a.createElement(_,{goTo:"footer",vOffset:-250},"CONTACT ",s.a.createElement("i",{className:"fas fa-chevron-circle-down"}))),s.a.createElement(A.a,{delayedCall:"true",intervalDelay:"1000"},(function(e){var a=e.isVisible;return s.a.createElement("div",{className:"to-cards-button",style:a?{opacity:1}:{opacity:0}},s.a.createElement(S,{goTo:"cards",vDuration:800,vOffset:-250,className:"btns",buttonStyle:"btn--invisible",buttonSize:"btn--large--invisible"},s.a.createElement("div",{className:"to-cards-arrow","aria-label":"Scroll To Cards"},s.a.createElement("i",{className:"fas fa-chevron-down"}))))})))))},L=(t(49),g.a.div(C||(C=Object(E.a)(["\n  opacity: ",";\n\n  transform: ",";\n\n  position: relative;\n  width:100%;\n  height:100%;\n\n  transition: 500ms all ease-in-out;\n"])),(function(e){return e.show?"1":"0"}),(function(e){return e.show?"translate3d(0px, 0px, 0px)":"translate3d(0px, 36px, 0px)"})));var D=function(e){var a=Object(c.useRef)(null),t=Object(c.useState)(0),n=Object(f.a)(t,2),l=n[0],r=n[1];Object(c.useEffect)((function(){var e=function(){r(a.current?a.current.offsetWidth:0)};return a.current&&r(a.current?a.current.offsetWidth:0),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[a]);var i=function(e){var a=Object(c.useState)(e),t=Object(f.a)(a,2),n=t[0],l=t[1],r=Object(c.useState)(n),i=Object(f.a)(r,2),s=i[0],o=i[1];Object(c.useEffect)((function(){n&&o(!0)}),[n]);return[s,l,{style:{animation:"".concat(n?"fadeIn":"fadeOut"," .3s")},onAnimationEnd:function(){n||o(!1)}}]}(),o=Object(f.a)(i,3),m=o[0],d=o[1],E=o[2];return s.a.createElement(s.a.Fragment,null,s.a.createElement(L,{show:"true"},s.a.createElement("li",{className:"cards__item"},s.a.createElement(u.b,{className:"cards__item__link",onMouseEnter:function(){return d(!0)},onMouseLeave:function(){return d(!1)},to:e.path},s.a.createElement("div",{ref:a,className:"cards__inner__box"},s.a.createElement("figure",{className:"cards__item__pic-wrap","data-category":e.label},s.a.createElement("img",{src:e.src,alt:"Work",className:"cards__item__img"}),s.a.createElement("img",{src:e.srcAlt,alt:"Work",className:"cards__item__img__background"})),m&&s.a.createElement("div",Object.assign({},E,{className:"cards__item__info"}),s.a.createElement("h5",{style:{fontSize:l/22},className:"cards__item__text"},e.text)))))))};var H,R,G=function(){return s.a.createElement("section",{className:"cards"},s.a.createElement("h1",{className:"card__title"},"Work"),s.a.createElement("div",{className:"cards__container"},s.a.createElement("div",{className:"cards__wrapper"},s.a.createElement("ul",{id:"cards",className:"cards__items"},s.a.createElement(D,{src:"images/AHS-Robotics.png",srcAlt:"images/AHS-Robotics-Background.png",text:"Web design and illustration work to redesign the website and digital marketing for the Alpharetta Robotics Team. My role as head of marketing was to redesign the online webpage and the social media platforms.",label:"UI / UX",path:"/"}),s.a.createElement(D,{src:"images/TheAscentTitleScreen.png",srcAlt:"images/TheAscent-Background.png",text:"Illustration and C# coding for the Ascent, a 2D platformer built in built in Unity Game Engine. I led the project to win 1st at the Georgia FBLA 2020 Conference for Game Development and Simulation.",label:"Game Design",path:"/"})),s.a.createElement("ul",{className:"cards__items"},s.a.createElement(D,{src:"images/PostCard.png",srcAlt:"images/PostCard-Background.png",text:"Graphics Design work for a series of digitally illustrated postcards and stamps. The series took an honorable mention within the Summer 2021 UGA Digital Illustration review.",label:"Graphics Design",path:"/"}),s.a.createElement(D,{src:"images/CurrencyMockup.png",srcAlt:"images/CurrencyMockup-Background.png",text:"Drafting and illustration work two sets of mock currency during the spring and summer of 2021, later posted for a UGA illustration and design portfolio within the Dodd School of Art.",label:"Graphics Design",path:"/"}),s.a.createElement(D,{src:"images/UGAHacks6.png",srcAlt:"images/UGAHacks6-Background.png",text:"Graphics Design and C# coding work for the coop indie game Swap. I led the project with my work in art and programming and was featured on the 2021 UGAHacks6 Hackathion social media page.",label:"Game Design",path:"/"})))))},M=(t(80),g.a.i(H||(H=Object(E.a)(["\n  transform: ",";\n  opacity: ",";\n\n  z-index: 2;\n    \n  transition: 250ms all ease-in-out;\n"])),(function(e){return e.scrollNav?"translate3d(0px, -12px, 0px)":"translate3d(0px, 0px, 0px)"}),(function(e){return e.scrollNav?"0":"1"}))),U=g.a.i(R||(R=Object(E.a)(["\n  transform: ",";\n    \n\n  z-index: 1;\n\n  transition: 250ms all ease-in-out;\n"])),(function(e){return e.scrollNav?"translate3d(0px, -12px, 0px)":"translate3d(0px, 0px, 0px)"}));var z=function(){var e=Object(c.useState)(!1),a=Object(f.a)(e,2),t=a[0],n=a[1],l=Object(c.useState)(0),r=Object(f.a)(l,2),i=r[0],o=r[1],m=function(){return o(window.scrollY/(Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight)-window.innerHeight))};Object(c.useEffect)((function(){return window.addEventListener("scroll",m),function(){window.removeEventListener("scroll",m)}}),[]);var d=Object(c.useRef)(null);return s.a.createElement("section",{className:"footer-container"},s.a.createElement("div",{id:"footer",className:"footer-parallax",style:{opacity:"".concat(i*i*100,"%"),transform:"translateY(".concat(500-500*i,"px)")}},s.a.createElement("div",{className:"footer-links"},s.a.createElement("div",{className:"footer-link-wrapper"},s.a.createElement("div",{className:"footer-link-items"},s.a.createElement("h2",null,"Let's Talk!"),s.a.createElement("p",null,"Check out my social media below and shoot me an email for inquiries or to say hello.")))),s.a.createElement("section",{className:"social-media"},s.a.createElement("div",{className:"social-media-wrap"},s.a.createElement(A.a,{delayedCall:"true",intervalDelay:"500",onChange:function(e){return function(e){if(e){var a=new MouseEvent("mouseover",{view:window,bubbles:!0,cancelable:!0}),t=new MouseEvent("mouseout",{view:window,bubbles:!0,cancelable:!0});d.current.dispatchEvent(a),setTimeout((function(){d.current.dispatchEvent(t)}),500)}}(e)}},s.a.createElement("div",{className:"social-icons"},s.a.createElement(u.b,{className:"social-icon-link github",to:{pathname:"https://github.com/NathanKoehler"},target:"_blank","aria-label":"Github"},s.a.createElement("i",{className:"fab fa-github"})),s.a.createElement("div",{className:"holder",onMouseOver:function(){return n(!0)},onMouseLeave:function(){return n(!1)}},s.a.createElement(u.b,{ref:d,className:"instagram",to:{pathname:"https://www.instagram.com/nate_koe/"},target:"_blank","aria-label":"Instagram"},s.a.createElement("div",{className:"instagram-background"},s.a.createElement(U,{scrollNav:t,className:"fab fa-instagram"})),s.a.createElement(M,{scrollNav:t,className:"fab fa-instagram"}))),s.a.createElement("a",{className:"social-icon-link email",href:"mailto:nathankoehle@gmail.com?subject=Business Inquiry&body=Hello!"},s.a.createElement("i",{className:"far fa-envelope"})),s.a.createElement(u.b,{className:"social-icon-link twitter",to:{pathname:"https://twitter.com/Natpoki"},target:"_blank","aria-label":"Twitter"},s.a.createElement("i",{className:"fab fa-twitter"})),s.a.createElement(u.b,{className:"social-icon-link linkedin",to:{pathname:"https://www.linkedin.com/in/natekoehler/"},target:"_blank","aria-label":"LinkedIn"},s.a.createElement("i",{className:"fab fa-linkedin"})))))),s.a.createElement(A.a,{delayedCall:"true",intervalDelay:"1000"},(function(e){var a=e.isVisible;return s.a.createElement("div",{className:"to-top-button",style:a?{opacity:1}:{opacity:0}},s.a.createElement(S,{onClick:function(){x.animateScroll.scrollToTop()},className:"btns",buttonStyle:"btn--invisible",buttonSize:"btn--large--invisible"},s.a.createElement("div",{className:"social-icon-link to-top-arrow","aria-label":"Scroll To Top"},s.a.createElement("i",{className:"fas fa-chevron-up"}))))}))))},B=t(85),q={type:"tween",ease:"anticipate",duration:1},F={initial:{opacity:0,x:0},in:{opacity:1,x:0},out:{opacity:0,x:-100}};t(81);var W=function(){return s.a.createElement("section",{className:"slider"},s.a.createElement("div",{className:"slider-top"},s.a.createElement("div",{className:"slider-title-sub"},s.a.createElement(u.b,{className:"slider-links",to:"/about-me"},s.a.createElement("h2",{className:"slider-title-left"},"\u6211 \u61c2 \u4e2d \u6587"))),s.a.createElement("h1",{className:"slider-title"},"Skills"),s.a.createElement("div",{className:"slider-title-sub"},s.a.createElement(u.b,{className:"slider-links",to:"/artwork"},s.a.createElement("h2",{className:"slider-title-right"},"View my art skills")))),s.a.createElement("div",{id:"skills",className:"marquee-background"},s.a.createElement("div",{className:"marquee"},s.a.createElement("ul",{className:"marquee-content"},s.a.createElement("li",null,"React Native"),s.a.createElement("li",null,"Unity"),s.a.createElement("li",null,"Autodesk Maya"),s.a.createElement("li",null,"React.js"),s.a.createElement("li",null,"After Effects"),s.a.createElement("li",null,"Illustrator"),s.a.createElement("li",null,"Unreal Engine"),s.a.createElement("li",{style:{color:"#72b7e8"}},"Photoshop"),s.a.createElement("li",null,"InDesign"),s.a.createElement("li",null,"React Native"),s.a.createElement("li",null,"Unity"),s.a.createElement("li",null,"Autodesk Maya"),s.a.createElement("li",null,"React.js"),s.a.createElement("li",null,"After Effects")))),s.a.createElement("div",{className:"marquee-background"},s.a.createElement("div",{className:"i-marquee"},s.a.createElement("ul",{className:"i-marquee-content"},s.a.createElement("li",null,s.a.createElement("i",{className:"fab fa-aws"})),s.a.createElement("li",null,s.a.createElement("i",{className:"devicon-react-original colored"})),s.a.createElement("li",null,s.a.createElement("i",{className:"fab fa-js-square"})),s.a.createElement("li",null,s.a.createElement("i",{className:"fab fa-rust"})),s.a.createElement("li",null,s.a.createElement("i",{className:"fab fa-linux"})),s.a.createElement("li",null,s.a.createElement("i",{className:"fab fa-git-alt"})),s.a.createElement("li",null,s.a.createElement("i",{className:"fab fa-wix"})),s.a.createElement("li",null,s.a.createElement("i",{className:"fab fa-python"})),s.a.createElement("li",null,s.a.createElement("i",{className:"fab fa-node"})),s.a.createElement("li",null,s.a.createElement("i",{className:"devicon-c-plain"})),s.a.createElement("li",null,s.a.createElement("i",{className:"devicon-cplusplus-plain"})),s.a.createElement("li",null,s.a.createElement("i",{className:"devicon-csharp-plain"})),s.a.createElement("li",null,s.a.createElement("i",{className:"devicon-kotlin-plain"})),s.a.createElement("li",null,s.a.createElement("i",{className:"devicon-apple-original"})),s.a.createElement("li",null,s.a.createElement("i",{className:"devicon-tailwindcss-plain colored"})),s.a.createElement("li",null,s.a.createElement("i",{className:"devicon-illustrator-plain"})),s.a.createElement("li",null,s.a.createElement("i",{className:"devicon-photoshop-line colored"})),s.a.createElement("li",null,s.a.createElement("i",{className:"devicon-aftereffects-plain"})),s.a.createElement("li",null,s.a.createElement("i",{className:"fab fa-aws"})),s.a.createElement("li",null,s.a.createElement("i",{className:"devicon-react-original colored"})),s.a.createElement("li",null,s.a.createElement("i",{className:"fab fa-js-square"})),s.a.createElement("li",null,s.a.createElement("i",{className:"fab fa-rust"})),s.a.createElement("li",null,s.a.createElement("i",{className:"fab fa-linux"})),s.a.createElement("li",null,s.a.createElement("i",{className:"fab fa-git-alt"})),s.a.createElement("li",null,s.a.createElement("i",{className:"fab fa-wix"}))))))};var K=function(e){return s.a.createElement(B.a.div,{style:{position:"absolute",width:"100%"},initial:"initial",animate:"in",exit:"out",variants:F,transition:q},s.a.createElement(I,{navRef:e.navRef}),s.a.createElement(G,null),s.a.createElement(W,null),s.a.createElement(z,null))};function P(){return s.a.createElement(B.a.div,{style:{position:"absolute",width:"100%"},initial:"initial",animate:"in",exit:"out",variants:F,transition:q},s.a.createElement("h1",{className:"services"},"SERVICES"))}var V,Y=t(54),J=(t(82),g.a.div(V||(V=Object(E.a)(["\n  opacity: ",";\n\n  transform: ",";\n\n  position: relative;\n\n  transition: 500ms all ease-in-out;\n"])),(function(e){return e.show?"1":"0"}),(function(e){return e.show?"translate3d(0px, 0px, 0px)":"translate3d(0px, 36px, 0px)"}))),X=function(e,a){var t=s.a.useState(e),n=Object(f.a)(t,2),l=n[0],r=n[1];return s.a.useEffect((function(){r(e);var t=new Image;t.src=a,t.onload=function(){r(a)}}),[e,a]),[l,l===e]},Q=function(){var e=[{id:1,height:2400,width:1800,imgSrc:X("images/gallery/blurred/bpillar.jpg","images/gallery/pillar.png")},{id:2,height:1333,width:2400,imgSrc:X("images/gallery/blurred/bglaveborn.jpg","images/gallery/glaveborn.png")},{id:3,height:1400,width:1400,imgSrc:X("images/gallery/blurred/banta.jpg","images/gallery/anta.png")},{id:4,height:3600,width:1500,imgSrc:X("images/gallery/blurred/bnewrohcaw.jpg","images/gallery/newrohcaw.jpg")},{id:5,height:1668,width:2434,imgSrc:X("images/gallery/blurred/bfire.jpg","images/gallery/fire.png")},{id:6,height:612,width:1500,imgSrc:X("images/gallery/blurred/bmountain.jpg","images/gallery/mountain.png")},{id:7,height:1853,width:1133,imgSrc:X("images/gallery/blurred/bwinter.jpg","images/gallery/winter.png")},{id:8,height:2341,width:3300,imgSrc:X("images/gallery/blurred/btree.jpg","images/gallery/tree.png")},{id:9,height:3600,width:1500,imgSrc:X("images/gallery/blurred/bnewrohcawback.jpg","images/gallery/newrohcawback.jpg")},{id:10,height:3300,width:2550,imgSrc:X("images/gallery/blurred/bfish.jpg","images/gallery/fish.png")},{id:11,height:2400,width:1800,imgSrc:X("images/gallery/blurred/bfoundry.jpg","images/gallery/foundry.png")},{id:12,height:2400,width:1800,imgSrc:X("images/gallery/blurred/bwall.jpg","images/gallery/wall.png")},{id:13,height:1960,width:1441,imgSrc:X("images/gallery/blurred/bsit.jpg","images/gallery/sit.jpeg")},{id:14,height:2550,width:3300,imgSrc:X("images/gallery/blurred/bwater.jpg","images/gallery/water.png")},{id:15,height:3300,width:2550,imgSrc:X("images/gallery/blurred/bsorcerer.jpg","images/gallery/sorcerer.jpeg")}],a=Object(c.useState)(Array(e.length).fill(!1)),t=Object(f.a)(a,2),n=t[0],l=t[1],r=Object(c.useState)(!1),i=Object(f.a)(r,2),o=i[0],m=i[1],u=Object(c.useState)(""),d=Object(f.a)(u,2),E=d[0],g=d[1];return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:o?"model open":"model"},s.a.createElement("img",{src:E,alt:"Focus"}),s.a.createElement("i",{className:"fas fa-times",onClick:function(){return m(!1)}})),s.a.createElement("section",{className:"gallery-page"},s.a.createElement("div",{className:"gallery-title"},s.a.createElement("div",{className:"gallery-title-box"},s.a.createElement("div",{className:"gallery-title-text"},s.a.createElement("h1",null,"Image Gallery")),s.a.createElement("h2",null,'"Fresh from the head, delivered by hand."'))),s.a.createElement("div",{className:"gallery-wrapper"},e&&e.map((function(e,a){return s.a.createElement(A.a,{key:a,partialVisibility:!0,offset:{top:200},intervalDelay:"300",intervalCheck:"false",delayedCall:"true",onChange:function(e){return function(e,a){a&&l((function(a){return a[e]=!0,Object(Y.a)(a)}))}(a,e)}},s.a.createElement(J,{show:n[a]},s.a.createElement("div",{className:"pics",key:a,onClick:function(){return a=e.imgSrc[0],g(a),void m(!0);var a}},s.a.createElement("img",{className:"images",src:e.imgSrc[0],height:e.height,width:e.width,alt:"Gallery",style:{filter:e.imgSrc[1]?"blur(20px)":"none",transition:e.imgSrc[1]?"none":"filter 0.3s ease-out"}}))))})))))};function Z(){return s.a.createElement(B.a.div,{style:{position:"absolute",width:"100%"},initial:"initial",animate:"in",exit:"out",variants:F,transition:q},s.a.createElement(Q,null),s.a.createElement(z,null))}t(83);var $=function(){var e=Object(c.useState)(0),a=Object(f.a)(e,2),t=a[0],n=a[1],l=Object(c.useState)(!1),r=Object(f.a)(l,2),i=r[0],o=r[1],m=function(){return n(window.scrollY/(Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight)-window.innerHeight))};return Object(c.useEffect)((function(){window.addEventListener("scroll",m);var e=setTimeout((function(){o(!0)}),2e3);return function(){window.removeEventListener("scroll",m),clearTimeout(e)}}),[]),s.a.createElement(s.a.Fragment,null,s.a.createElement("section",{className:"profile"},s.a.createElement("div",{className:"profile-top"},s.a.createElement(k.a,{speed:1,className:"text-over-image"},s.a.createElement("h1",null,"My Name Is ",s.a.createElement("mark",{className:"light-red"},"Nate"))),s.a.createElement(k.a,{style:{opacity:"".concat(170-170*t,"%"),width:"100%",height:"100%"},speed:-7,className:"profile-top-container"},s.a.createElement("img",{src:"/images/selfie.png",alt:"Selfie",className:"profile-img"}),s.a.createElement("div",{className:"profile-top-content"},s.a.createElement("div",{className:"profile-top-text"},s.a.createElement("h2",null,"But you can call me ",s.a.createElement("mark",{className:"red"},"Nathan"),","," ",s.a.createElement("mark",{className:"red"},"Nathaniel"),", or"," ",s.a.createElement("mark",{className:"red"},"\u66fe\u96f7\u751f")," \ud83d\ude04"),s.a.createElement("p",null,"I'm currenty a undergrad studying Media and Design at"," ",s.a.createElement("mark",{className:"small-red"},"Georgia Tech.")," \ud83d\udc1d"," "),s.a.createElement("p",null,"I came from a trilingual family and enjoy both coding and illustration. \ud83d\udcbb"," "),s.a.createElement("p",null,"If you are interested in hiring me, you can check out my"," ",s.a.createElement("mark",{className:"small-red"},s.a.createElement(x.Link,{to:"footer",spy:!0,smooth:!0,offset:-500},"info below."))," ","\ud83d\udc47"," "),s.a.createElement("p",null,"I'm now available for"," ",s.a.createElement("mark",{className:"small-red"},s.a.createElement(x.Link,{to:"footer",spy:!0,smooth:!0,offset:-500},"part-time roles")),","," ",s.a.createElement("mark",{className:"small-red"},s.a.createElement(x.Link,{to:"footer",spy:!0,smooth:!0,offset:-500},"internships")),", and"," ",s.a.createElement("mark",{className:"small-red"},s.a.createElement(x.Link,{to:"footer",spy:!0,smooth:!0,offset:-500},"co-ops."))," ","\ud83d\ude80"," "),s.a.createElement("p",null,"If you're just browsing, check out my work in the art gallery, too. \ud83c\udfa8"),s.a.createElement("p",null,"I also have a huge addication to game jams and hackathons. \ud83d\udcc6"),s.a.createElement("p",null,"If you want any website or app created today"," ",s.a.createElement("mark",{className:"small-red"},s.a.createElement(x.Link,{to:"footer",spy:!0,smooth:!0,offset:-500},"let me know!"))," ",s.a.createElement("span",{className:"wave"},"\ud83d\udc4b"))),s.a.createElement("div",{className:"about-footer-button",style:i?{opacity:1}:{opacity:0}},s.a.createElement(S,{goTo:"footer",vDuration:800,vOffset:-500,className:"btns",buttonStyle:"btn--invisible",buttonSize:"btn--large--invisible"},s.a.createElement("div",{className:"about-footer-arrow","aria-label":"Scroll To Bottom"},s.a.createElement("i",{className:"fas fa-chevron-down"})))))))))};function ee(){return s.a.createElement(B.a.div,{style:{position:"absolute",width:"100%"},initial:"initial",animate:"in",exit:"out",variants:F,transition:q},s.a.createElement($,null),s.a.createElement(z,null))}var ae=function(){var e=Object(w.f)();return s.a.createElement(s.a.Fragment,null,s.a.createElement(N,null),s.a.createElement("main",null,s.a.createElement(d.a,{inital:!1,exitBeforeEnter:!0,onExitComplete:function(){return window.scrollTo(0,0)}},s.a.createElement(w.c,{location:e,key:e.pathname},s.a.createElement(w.a,{exact:!0,path:"/",component:K}),s.a.createElement(w.a,{exact:!0,path:"/services",component:P}),s.a.createElement(w.a,{exact:!0,path:"/artwork",component:Z}),s.a.createElement(w.a,{exact:!0,path:"/about-me",component:ee})))))};m.a.render(s.a.createElement(u.a,{basename:""},s.a.createElement(ae,null)),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.f4533079.chunk.js.map