(this.webpackJsonpnew=this.webpackJsonpnew||[]).push([[0],{24:function(e,t,a){},47:function(e,t,a){},51:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var n,s=a(1),c=a(27),i=a.n(c),l=a(6),r=a(83),o=a(8),b=a(10),j=(a(47),a(11)),d=a(0),m=["btn--primary","btn--outline","btn--outline2","btn--invisible"],u=["btn--medium","btn--large","btn--large--invisible"],h=function(e){var t=e.children,a=e.type,n=e.goTo,s=e.onClick,c=e.buttonStyle,i=e.buttonSize,r=m.includes(c)?c:m[0],o=u.includes(i)?i:u[0];return Object(d.jsx)(l.b,{to:n,className:"btn-mobile",children:Object(d.jsx)("button",{className:"btn ".concat(r," ").concat(o),onClick:s,type:a,children:t})})};j.a.button(n||(n=Object(b.a)(["\n  --background: ",";\n\n  --purewhite: ",";\n\n  --darkgray: ",";\n\n  transition: 0.8s all ease;\n"])),(function(e){return e.switcher?"rgb(238, 238, 238)":"rgb(20, 20, 20)"}),(function(e){return e.switcher?"#000000":"#ffffff"}),(function(e){return e.switcher?"#eeeeee":"#dbdbdb"}));h.defaultProps={goTo:"/"};a(68);var x,O,p,f,g=j.a.nav(x||(x=Object(b.a)(["\n  --background: ",";\n\n  --purewhite: ",";\n\n  --darkgray: ",";\n\n  --vivid: ",";\n\n  transition: 800ms all ease;\n"])),(function(e){return e.scrollNav?"rgb(238, 238, 238)":"rgb(20, 20, 20)"}),(function(e){return e.scrollNav?"#000000":"#ffffff"}),(function(e){return e.scrollNav?"#eeeeee":"#dbdbdb"}),(function(e){return e.scrollNav?"#2373db":"#fcc83f"})),v=j.a.h4(O||(O=Object(b.a)(["\n  transform: ",";\n\n  z-index: 2;\n\n  transition: 500ms all ease-in-out;\n"])),(function(e){return e.scrollNav?"translate3d(-2px, -2px, 0px)":"translate3d(0px, 0px, 0px)"})),w=j.a.h4(p||(p=Object(b.a)(["\n  opacity: ",";\n\n  transform: ",";\n\n  z-index: 1;\n\n  transition: 1000ms all ease-in-out;\n"])),(function(e){return e.scrollNav?"0":"1"}),(function(e){return e.scrollNav?"translate3d(12px, 12px, 0px)":"translate3d(0px, 0px, 0px)"})),N=j.a.h4(f||(f=Object(b.a)(["\n  transform: ",";\n  opacity: ",";\n\n  z-index: 0;\n\n  transition: 1100ms all ease-in;\n"])),(function(e){return e.scrollNav?"translate3d(2px, 2px, 0px)":"translate3d(0px, 0px, 0px)"}),(function(e){return e.scrollNav?"1":"0"}));var k=function(){var e=Object(s.useState)(!1),t=Object(o.a)(e,2),a=t[0],n=t[1],c=Object(s.useState)(!0),i=Object(o.a)(c,2),r=i[0],b=i[1],j=function(){return n(!1)},m=function(){window.innerWidth<=960?b(!1):b(!0)},u=Object(s.useState)(!1),x=Object(o.a)(u,2),O=x[0],p=x[1],f=Object(s.useState)("btn--outline"),k=Object(o.a)(f,2),y=k[0],S=k[1],_=function(){"/"===window.location.pathname&&(window.scrollY>=window.innerHeight-100?(p(!0),S("btn--outline2")):(p(!1),S("btn--outline")))};return Object(s.useEffect)((function(){window.addEventListener("resize",m),window.addEventListener("scroll",_),m()}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"navbar-invisible-box"}),Object(d.jsx)(g,{scrollNav:O,className:"navbar",children:Object(d.jsxs)("section",{className:"navbar-container",children:[Object(d.jsx)(l.b,{to:"/",className:"navbar-logo",onClick:j,children:Object(d.jsxs)("div",{className:"navbar-name",children:[Object(d.jsxs)(v,{className:"navbar-name-front",scrollNav:O,children:["NATE KOEHLER"," ",Object(d.jsx)("i",{className:"fas fa-palette"})]}),Object(d.jsxs)(w,{scrollNav:O,className:"navbar-name-middle",children:["NATE KOEHLER"," ",Object(d.jsx)("i",{className:"fas fa-palette"})]}),Object(d.jsxs)(N,{scrollNav:O,className:"navbar-name-backdrop",children:["NATE KOEHLER"," ",Object(d.jsx)("i",{className:"fas fa-palette"})]})]})}),Object(d.jsx)("div",{className:"menu-icon",onClick:function(){return n(!a)},children:Object(d.jsx)("i",{className:a?"fas fa-times":"fas fa-bars"})}),Object(d.jsxs)("ul",{className:a?"nav-menu active":"nav-menu",children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(l.b,{to:"/",className:"nav-links",onClick:j,children:"Home"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)("a",{href:"resources/Resume.pdf",target:"_blank",className:"nav-links",onClick:j,children:"Resume"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(l.b,{to:"/artwork",className:"nav-links",onClick:j,children:"Artwork"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(l.b,{to:"/about-me",className:"nav-links-mobile",onClick:j,children:"About Me"})})]}),r&&Object(d.jsx)(h,{buttonStyle:y,children:"ABOUT ME"})]})})]})},y=(a(24),a(4)),S=(a(69),a(56)),_=a.n(S),E=a(36),z=["btn--primary","btn--outline","btn--outline2","btn--invisible"],A=["btn--medium","btn--large","btn--large--invisible"],C=function(e){var t=e.children,a=e.type,n=e.goTo,s=e.onClick,c=e.vOffset,i=e.vDuration,l=e.buttonStyle,r=e.buttonSize,o=z.includes(l)?l:z[0],b=A.includes(r)?r:A[0];return Object(d.jsx)(E.Link,{to:n,spy:!0,smooth:!0,offset:c,duration:i,className:"btn-mobile",children:Object(d.jsx)("button",{className:"btn ".concat(o," ").concat(b),onClick:s,type:a,children:t})})};C.defaultProps={vDuration:1800,vOffset:-100,goTo:"/"};var T,R=function(){return Object(d.jsx)("div",{className:"hero-invisible-width",children:Object(d.jsxs)("div",{id:"top",className:"hero-container",children:[Object(d.jsx)("video",{src:"/videos/video-1.mp4",autoPlay:!0,loop:!0,muted:!0}),Object(d.jsxs)(_.a,{speed:6,className:"hero-parallax",children:[Object(d.jsxs)("h1",{children:["NATE IS A ",Object(d.jsx)("mark",{className:"light-blue",children:"UI/UX"})," DESIGNER"]}),Object(d.jsx)("p",{children:"Undergrad student at Georgia Tech studying Media and Interaction Design looking for a 2022 spring internship."}),Object(d.jsxs)("div",{className:"hero-btns",children:[Object(d.jsx)(h,{goTo:"/artwork",className:"btns",buttonStyle:"btn--outline",buttonSize:"btn-large",children:"ARTWORK"}),Object(d.jsxs)(C,{goTo:"footer",className:"btns",buttonStyle:"btn--primary",buttonSize:"btn-large",children:["CONTACT ME ",Object(d.jsx)("i",{className:"fas fa-chevron-circle-down"})]})]})]})]})})},D=(a(51),a(46)),G=j.a.div(T||(T=Object(b.a)(["\n  opacity: ",";\n\n  transform: ",";\n\n  position: relative;\n  width:100%;\n  height:100%;\n\n  transition: 500ms all ease-in-out;\n"])),(function(e){return e.show?"1":"0"}),(function(e){return e.show?"translate3d(0px, 0px, 0px)":"translate3d(0px, 36px, 0px)"}));var H=function(e){var t=Object(s.useRef)(null),a=Object(s.useState)(0),n=Object(o.a)(a,2),c=n[0],i=n[1];Object(s.useEffect)((function(){var e=function(){i(t.current?t.current.offsetWidth:0)};return t.current&&i(t.current?t.current.offsetWidth:0),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[t]);var r=function(e){var t=Object(s.useState)(e),a=Object(o.a)(t,2),n=a[0],c=a[1],i=Object(s.useState)(n),l=Object(o.a)(i,2),r=l[0],b=l[1];Object(s.useEffect)((function(){n&&b(!0)}),[n]);return[r,c,{style:{animation:"".concat(n?"fadeIn":"fadeOut"," .3s")},onAnimationEnd:function(){n||b(!1)}}]}(),b=Object(o.a)(r,3),j=b[0],m=b[1],u=b[2];return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(G,{show:"true",children:Object(d.jsx)("li",{className:"cards__item",children:Object(d.jsx)(l.b,{className:"cards__item__link",onMouseEnter:function(){return m(!0)},onMouseLeave:function(){return m(!1)},to:e.path,children:Object(d.jsxs)("div",{ref:t,className:"cards__inner__box",children:[Object(d.jsxs)("figure",{className:"cards__item__pic-wrap","data-category":e.label,children:[Object(d.jsx)("img",{src:e.src,alt:"Work",className:"cards__item__img"}),Object(d.jsx)("img",{src:e.srcAlt,alt:"Work",className:"cards__item__img__background"})]}),j&&Object(d.jsx)("div",Object(D.a)(Object(D.a)({},u),{},{className:"cards__item__info",children:Object(d.jsx)("h5",{style:{fontSize:c/22},className:"cards__item__text",children:e.text})}))]})})})})})};var I,M,U=function(){return Object(d.jsxs)("section",{className:"cards",children:[Object(d.jsx)("h1",{className:"card__title",children:"Work"}),Object(d.jsx)("div",{className:"cards__container",children:Object(d.jsxs)("div",{className:"cards__wrapper",children:[Object(d.jsxs)("ul",{className:"cards__items",children:[Object(d.jsx)(H,{src:"https://personal-react-aws-bucket.s3.amazonaws.com/album1/AHS-Robotics.png",srcAlt:"https://personal-react-aws-bucket.s3.amazonaws.com/album1/AHS-Robotics-Background.png",text:"Web design and illustration work to redesign the website and digital marketing for the Alpharetta Robotics Team. My role as head of marketing was to redesign the online webpage and the social media platforms.",label:"UI / UX",path:"/services"}),Object(d.jsx)(H,{src:"https://personal-react-aws-bucket.s3.amazonaws.com/album1/TheAscentTitleScreen.png",srcAlt:"https://personal-react-aws-bucket.s3.amazonaws.com/album1/TheAscent-Background.png",text:"Illustration and C# coding for the Ascent, a 2D platformer built in built in Unity Game Engine. I led the project to win 1st at the Georgia FBLA 2020 Conference for Game Development and Simulation.",label:"Game Design",path:"/services"})]}),Object(d.jsxs)("ul",{className:"cards__items",children:[Object(d.jsx)(H,{src:"https://personal-react-aws-bucket.s3.amazonaws.com/album1/PostCard.png",srcAlt:"https://personal-react-aws-bucket.s3.amazonaws.com/album1/PostCard-Background.png",text:"Graphics Design work for a series of digitally illustrated postcards and stamps. The series took an honorable mention within the Summer 2021 UGA Digital Illustration review.",label:"Graphics Design",path:"/products"}),Object(d.jsx)(H,{src:"https://personal-react-aws-bucket.s3.amazonaws.com/album1/CurrencyMockup.png",srcAlt:"https://personal-react-aws-bucket.s3.amazonaws.com/album1/CurrencyMockup-Background.png",text:"Drafting and illustration work two sets of mock currency during the spring and summer of 2021, later posted for a UGA illustration and design portfolio within the Dodd School of Art.",label:"Graphics Design",path:"/sign-up"}),Object(d.jsx)(H,{src:"https://personal-react-aws-bucket.s3.amazonaws.com/album1/UGAHacks6.png",srcAlt:"https://personal-react-aws-bucket.s3.amazonaws.com/album1/UGAHacks6-Background.png",text:"Graphics Design and C# coding work for the coop indie game Swap. I led the project with my work in art and programming and was featured on the 2021 UGAHacks6 Hackathion social media page.",label:"Game Design",path:"/services"})]})]})})]})},L=(a(78),j.a.i(I||(I=Object(b.a)(["\n  transform: ",";\n  opacity: ",";\n\n  z-index: 2;\n    \n  transition: 250ms all ease-in-out;\n"])),(function(e){return e.scrollNav?"translate3d(0px, -12px, 0px)":"translate3d(0px, 0px, 0px)"}),(function(e){return e.scrollNav?"0":"1"}))),B=j.a.i(M||(M=Object(b.a)(["\n  transform: ",";\n    \n\n  z-index: 1;\n\n  transition: 250ms all ease-in-out;\n"])),(function(e){return e.scrollNav?"translate3d(0px, -12px, 0px)":"translate3d(0px, 0px, 0px)"})),q=a(31),F=a.n(q);var W=function(){var e=Object(s.useState)(!1),t=Object(o.a)(e,2),a=t[0],n=t[1],c=Object(s.useState)(0),i=Object(o.a)(c,2),r=i[0],b=i[1],j=function(){return b(window.scrollY/(Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight)-window.innerHeight))};Object(s.useEffect)((function(){return window.addEventListener("scroll",j),function(){window.removeEventListener("scroll",j)}}),[]);var m=Object(s.useRef)(null);return Object(d.jsx)("section",{id:"footer",className:"footer-container",children:Object(d.jsxs)("div",{className:"footer-parallax",style:{opacity:"".concat(r*r*100,"%"),transform:"translateY(".concat(500-500*r,"px)")},children:[Object(d.jsx)("div",{className:"footer-links",children:Object(d.jsx)("div",{className:"footer-link-wrapper",children:Object(d.jsxs)("div",{className:"footer-link-items",children:[Object(d.jsx)("h2",{children:"Let's Talk!"}),Object(d.jsx)("p",{children:"Check out my social media below, or send me an email for inquiries and to say hello."})]})})}),Object(d.jsx)("section",{className:"social-media",children:Object(d.jsx)("div",{className:"social-media-wrap",children:Object(d.jsx)(F.a,{delayedCall:"true",intervalDelay:"500",onChange:function(e){return function(e){if(e){var t=new MouseEvent("mouseover",{view:window,bubbles:!0,cancelable:!0}),a=new MouseEvent("mouseout",{view:window,bubbles:!0,cancelable:!0});m.current.dispatchEvent(t),setTimeout((function(){m.current.dispatchEvent(a)}),500)}}(e)},children:Object(d.jsxs)("div",{className:"social-icons",children:[Object(d.jsx)(l.b,{className:"social-icon-link facebook",to:{pathname:"https://www.facebook.com/nathaniel.koehler.79"},target:"_blank","aria-label":"Facebook",children:Object(d.jsx)("i",{className:"fab fa-facebook-f"})}),Object(d.jsx)("div",{className:"holder",onMouseOver:function(){return n(!0)},onMouseLeave:function(){return n(!1)},children:Object(d.jsxs)(l.b,{ref:m,className:"instagram",to:{pathname:"https://www.instagram.com/nate_koe/"},target:"_blank","aria-label":"Instagram",children:[Object(d.jsx)("div",{className:"instagram-background",children:Object(d.jsx)(B,{scrollNav:a,className:"fab fa-instagram"})}),Object(d.jsx)(L,{scrollNav:a,className:"fab fa-instagram"})]})}),Object(d.jsx)("a",{className:"social-icon-link email",href:"mailto:nathankoehle@gmail.com?subject=Business Inquiry&body=Hello!",children:Object(d.jsx)("i",{className:"far fa-envelope"})}),Object(d.jsx)(l.b,{className:"social-icon-link twitter",to:{pathname:"https://twitter.com/Natpoki"},target:"_blank","aria-label":"Twitter",children:Object(d.jsx)("i",{className:"fab fa-twitter"})}),Object(d.jsx)(l.b,{className:"social-icon-link linkedin",to:{pathname:"https://www.linkedin.com/in/nathaniel-koehler-52a5491ab/"},target:"_blank","aria-label":"LinkedIn",children:Object(d.jsx)("i",{className:"fab fa-linkedin"})})]})})})}),Object(d.jsx)(F.a,{delayedCall:"true",intervalDelay:"1000",children:function(e){var t=e.isVisible;return Object(d.jsx)("div",{className:"to-top-button",style:t?{opacity:1}:{opacity:0},children:Object(d.jsx)(C,{onClick:function(){E.animateScroll.scrollToTop()},className:"btns",buttonStyle:"btn--invisible",buttonSize:"btn--large--invisible",children:Object(d.jsx)("div",{className:"social-icon-link to-top-arrow","aria-label":"Scroll To Top",children:Object(d.jsx)("i",{className:"fas fa-chevron-up"})})})})}})]})})},P=a(82),K={type:"tween",ease:"anticipate",duration:1},V={initial:{opacity:0,x:0},in:{opacity:1,x:0},out:{opacity:0,x:-100}};a(79);var Y=function(){return Object(d.jsxs)("section",{className:"slider",children:[Object(d.jsxs)("div",{className:"slider-top",children:[Object(d.jsx)(l.b,{className:"slider-links-left",to:"/",children:Object(d.jsx)("h2",{className:"slider-title-left",children:"\u6211 \u61c2 \u4e2d \u6587"})}),Object(d.jsx)("h1",{className:"slider-title",children:"Skills"}),Object(d.jsx)(l.b,{className:"slider-links-right",to:"/artwork",children:Object(d.jsx)("h2",{className:"slider-title-right",children:"View my art skills"})})]}),Object(d.jsx)("div",{className:"marquee-background",children:Object(d.jsx)("div",{className:"marquee",children:Object(d.jsxs)("ul",{className:"marquee-content",children:[Object(d.jsx)("li",{children:"React Native"}),Object(d.jsx)("li",{children:"Unity"}),Object(d.jsx)("li",{children:"Autodesk Maya"}),Object(d.jsx)("li",{children:"React.js"}),Object(d.jsx)("li",{children:"After Effects"}),Object(d.jsx)("li",{children:"Illustrator"}),Object(d.jsx)("li",{children:"Unreal Engine"}),Object(d.jsx)("li",{style:{color:"#72b7e8"},children:"Photoshop"}),Object(d.jsx)("li",{children:"InDesign"}),Object(d.jsx)("li",{children:"React Native"}),Object(d.jsx)("li",{children:"Unity"}),Object(d.jsx)("li",{children:"Autodesk Maya"}),Object(d.jsx)("li",{children:"React.js"}),Object(d.jsx)("li",{children:"After Effects"})]})})}),Object(d.jsx)("div",{className:"marquee-background",children:Object(d.jsx)("div",{className:"i-marquee",children:Object(d.jsxs)("ul",{className:"i-marquee-content",children:[Object(d.jsx)("li",{children:Object(d.jsx)("i",{className:"fab fa-aws"})}),Object(d.jsx)("li",{children:Object(d.jsx)("i",{className:"devicon-react-original colored"})}),Object(d.jsx)("li",{children:Object(d.jsx)("i",{className:"fab fa-js-square"})}),Object(d.jsx)("li",{children:Object(d.jsx)("i",{className:"fab fa-rust"})}),Object(d.jsx)("li",{children:Object(d.jsx)("i",{className:"fab fa-linux"})}),Object(d.jsx)("li",{children:Object(d.jsx)("i",{className:"fab fa-git-alt"})}),Object(d.jsx)("li",{children:Object(d.jsx)("i",{className:"fab fa-wix"})}),Object(d.jsx)("li",{children:Object(d.jsx)("i",{className:"fab fa-python"})}),Object(d.jsx)("li",{children:Object(d.jsx)("i",{className:"fab fa-node"})}),Object(d.jsx)("li",{children:Object(d.jsx)("i",{className:"devicon-c-plain"})}),Object(d.jsx)("li",{children:Object(d.jsx)("i",{className:"devicon-cplusplus-plain"})}),Object(d.jsx)("li",{children:Object(d.jsx)("i",{className:"devicon-csharp-plain"})}),Object(d.jsx)("li",{children:Object(d.jsx)("i",{className:"devicon-kotlin-plain"})}),Object(d.jsx)("li",{children:Object(d.jsx)("i",{className:"devicon-apple-original"})}),Object(d.jsx)("li",{children:Object(d.jsx)("i",{className:"devicon-tailwindcss-plain colored"})}),Object(d.jsx)("li",{children:Object(d.jsx)("i",{className:"devicon-illustrator-plain"})}),Object(d.jsx)("li",{children:Object(d.jsx)("i",{className:"devicon-photoshop-line colored"})}),Object(d.jsx)("li",{children:Object(d.jsx)("i",{className:"devicon-aftereffects-plain"})}),Object(d.jsx)("li",{children:Object(d.jsx)("i",{className:"fab fa-aws"})}),Object(d.jsx)("li",{children:Object(d.jsx)("i",{className:"devicon-react-original colored"})}),Object(d.jsx)("li",{children:Object(d.jsx)("i",{className:"fab fa-js-square"})}),Object(d.jsx)("li",{children:Object(d.jsx)("i",{className:"fab fa-rust"})}),Object(d.jsx)("li",{children:Object(d.jsx)("i",{className:"fab fa-linux"})}),Object(d.jsx)("li",{children:Object(d.jsx)("i",{className:"fab fa-git-alt"})}),Object(d.jsx)("li",{children:Object(d.jsx)("i",{className:"fab fa-wix"})})]})})})]})};var J=function(e){return Object(d.jsxs)(P.a.div,{style:{position:"absolute",width:"100%"},initial:"initial",animate:"in",exit:"out",variants:V,transition:K,children:[Object(d.jsx)(R,{navRef:e.navRef}),Object(d.jsx)(U,{}),Object(d.jsx)(Y,{}),Object(d.jsx)(W,{})]})};function X(){return Object(d.jsx)(P.a.div,{style:{position:"absolute"},initial:"initial",animate:"in",exit:"out",variants:V,transition:K,children:Object(d.jsx)("h1",{className:"services",children:"SERVICES"})})}var Q,Z=a(57),$=(a(80),j.a.div(Q||(Q=Object(b.a)(["\n  opacity: ",";\n\n  transform: ",";\n\n  position: relative;\n\n  transition: 500ms all ease-in-out;\n"])),(function(e){return e.show?"1":"0"}),(function(e){return e.show?"translate3d(0px, 0px, 0px)":"translate3d(0px, 36px, 0px)"}))),ee=function(){var e=[{id:1,height:2400,imgSrc:"https://personal-react-aws-bucket.s3.amazonaws.com/album1/gallery/pillar.png"},{id:2,height:1333,imgSrc:"https://personal-react-aws-bucket.s3.amazonaws.com/album1/gallery/glaveborn.png"},{id:3,height:1400,imgSrc:"https://personal-react-aws-bucket.s3.amazonaws.com/album1/gallery/anta.png"},{id:4,height:3600,imgSrc:"https://personal-react-aws-bucket.s3.amazonaws.com/album1/gallery/newrohcaw.jpg"},{id:5,height:1668,imgSrc:"https://personal-react-aws-bucket.s3.amazonaws.com/album1/gallery/fire.png"},{id:6,height:612,imgSrc:"https://personal-react-aws-bucket.s3.amazonaws.com/album1/gallery/mountain.png"},{id:7,height:1853,imgSrc:"https://personal-react-aws-bucket.s3.amazonaws.com/album1/gallery/winter.png"},{id:8,height:2341,imgSrc:"https://personal-react-aws-bucket.s3.amazonaws.com/album1/gallery/tree.png"},{id:9,height:3600,imgSrc:"https://personal-react-aws-bucket.s3.amazonaws.com/album1/gallery/newrohcawback.jpg"},{id:10,height:3300,imgSrc:"https://personal-react-aws-bucket.s3.amazonaws.com/album1/gallery/fish.png"},{id:11,height:2400,imgSrc:"https://personal-react-aws-bucket.s3.amazonaws.com/album1/gallery/foundry.png"},{id:12,height:2400,imgSrc:"https://personal-react-aws-bucket.s3.amazonaws.com/album1/gallery/wall.png"},{id:13,height:1960,imgSrc:"https://personal-react-aws-bucket.s3.amazonaws.com/album1/gallery/sit.jpeg"},{id:14,height:2550,imgSrc:"https://personal-react-aws-bucket.s3.amazonaws.com/album1/gallery/water.png"},{id:15,height:3300,imgSrc:"https://personal-react-aws-bucket.s3.amazonaws.com/album1/gallery/sorcerer.jpeg"}],t=Object(s.useState)(Array(e.length).fill(!1)),a=Object(o.a)(t,2),n=a[0],c=a[1],i=Object(s.useState)(!1),l=Object(o.a)(i,2),r=l[0],b=l[1],j=Object(s.useState)(""),m=Object(o.a)(j,2),u=m[0],h=m[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:r?"model open":"model",children:[Object(d.jsx)("img",{src:u,alt:"Focus"}),Object(d.jsx)("i",{className:"fas fa-times",onClick:function(){return b(!1)}})]}),Object(d.jsxs)("section",{className:"gallery-page",children:[Object(d.jsx)("div",{className:"gallery-title",children:Object(d.jsxs)("div",{className:"gallery-title-box",children:[Object(d.jsx)("div",{className:"gallery-title-text",children:Object(d.jsx)("h1",{children:"Image Gallery"})}),Object(d.jsx)("h2",{children:'"Fresh from the head, delivered by hand."'})]})}),Object(d.jsx)("div",{className:"gallery",children:e&&e.map((function(e,t){return Object(d.jsx)(F.a,{partialVisibility:!0,offset:{top:200},intervalDelay:"400",intervalCheck:"false",delayedCall:"true",onChange:function(e){return function(e,t){t&&c((function(t){return t[e]=!0,Object(Z.a)(t)}))}(t,e)},children:Object(d.jsx)($,{show:n[t],children:Object(d.jsx)("div",{height:e.height,className:"pics",onClick:function(){return t=e.imgSrc,h(t),void b(!0);var t},children:Object(d.jsx)("div",{height:e.height,children:Object(d.jsx)("img",{loading:"lazy",className:"images",src:e.imgSrc,alt:"Gallery"})})},t)})},t)}))})]})]})};function te(){return Object(d.jsxs)(P.a.div,{style:{position:"absolute"},initial:"initial",animate:"in",exit:"out",variants:V,transition:K,children:[Object(d.jsx)(ee,{}),Object(d.jsx)(W,{})]})}function ae(){return Object(d.jsx)(P.a.div,{style:{position:"absolute"},initial:"initial",animate:"in",exit:"out",variants:V,transition:K,children:Object(d.jsx)("h1",{className:"sign-up",children:"ABOUT ME"})})}var ne=function(){var e=Object(y.f)();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(k,{}),Object(d.jsx)("main",{children:Object(d.jsx)(r.a,{inital:!1,exitBeforeEnter:!0,onExitComplete:function(){return window.scrollTo(0,0)},children:Object(d.jsxs)(y.c,{location:e,children:[Object(d.jsx)(y.a,{exact:!0,path:"/",component:J}),Object(d.jsx)(y.a,{exact:!0,path:"/services",component:X}),Object(d.jsx)(y.a,{exact:!0,path:"/artwork",component:te}),Object(d.jsx)(y.a,{exact:!0,path:"/about-me",component:ae})]},e.pathname)})})]})};i.a.render(Object(d.jsx)(l.a,{basename:"",children:Object(d.jsx)(ne,{})}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.533cfd80.chunk.js.map