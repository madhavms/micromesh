"use strict";(self.webpackChunkhost=self.webpackChunkhost||[]).push([[372],{2562:(n,e,t)=>{t.r(e);var r=t(5558),o=t.n(r),a=t(2169),l=t.n(a),c=t(3379),i=t.n(c),s=t(7795),u=t.n(s),d=t(569),p=t.n(d),f=t(3565),m=t.n(f),g=t(9216),h=t.n(g),x=t(4589),b=t.n(x),w=t(28),E={};E.styleTagTransform=b(),E.setAttributes=m(),E.insert=p().bind(null,"head"),E.domAPI=u(),E.insertStyleElement=h(),i()(w.Z,E),w.Z&&w.Z.locals&&w.Z.locals;var k=t(885),v=(0,r.createContext)(),Z=function(n){var e=(0,r.useState)(!1),t=(0,k.Z)(e,2),a=t[0],l=t[1],c=(0,r.useRef)(),i=(0,r.useRef)(),s=(0,r.useRef)();return o().createElement(v.Provider,{value:[a,l,c,i,s]},n.children)},y=t(9655),S=t(9250),I=t(5861),A=t(4687),C=t.n(A),N=t(1120),R=t(5258),z=t(8358),j=t(2318),B=t(7812),M=t(3521),F=t(3320),L=t(8884),O=t(7159),P=t(2822),T=t(998),H=t(5757),J=t(5639),W=t(5675),_=(0,N.Z)((function(n){return{root:{flexGrow:1},otherLinks:{color:"white"},menuButton:{marginRight:n.spacing(2)},title:{flexGrow:1,textAlign:"center",color:"white"},appBar:{position:"fixed",top:0,width:"100%",zIndex:10,backgroundColor:function(n){return"light"===n.mode?"#7b68ee":"#212121"}},drawer:{width:240},drawerPaper:{width:240}}}));function G(n){var e=n.mode,t=n.setMode,a=n.menu,l=void 0===a?[]:a,c=n.handleMenuSelection,i=(0,r.useState)(!1),s=(0,k.Z)(i,2),u=s[0],d=s[1],p=(0,r.useState)(null),f=(0,k.Z)(p,2),m=f[0],g=f[1],h=_({mode:e}),x=function(){d(!u)},b=function(){g(null)};return o().createElement("div",{className:h.root},o().createElement(R.Z,{position:"static",className:h.appBar},o().createElement(z.Z,null,o().createElement(B.Z,{onClick:x,edge:"start",className:h.menuButton},o().createElement(L.Z,null)),o().createElement(j.Z,{variant:"subtitle1",className:h.menuTitle},"Menu"),o().createElement(j.Z,{variant:"h6",className:h.title},"Host Application"),o().createElement(B.Z,{onClick:function(){var n="light"===e?"dark":"light";t(n),localStorage.setItem("mode",n)}},"light"===e?o().createElement(F.Z,null):o().createElement(M.Z,null)),o().createElement(B.Z,{onClick:function(n){g(n.currentTarget)}},o().createElement(j.Z,{variant:"subtitle1",className:h.otherLinks},"Related Apps")),o().createElement(W.Z,{anchorEl:m,keepMounted:!0,open:Boolean(m),onClose:b},o().createElement(J.Z,{onClick:b,component:"a",href:process.env.SHOWCASE_URL,target:"_blank",rel:"noopener noreferrer"},"Showcase App"),o().createElement(J.Z,{onClick:b,component:"a",href:process.env.ONBOARDING_URL,target:"_blank",rel:"noopener noreferrer"},"Onboarding App")))),o().createElement(O.ZP,{className:h.drawer,classes:{paper:h.drawerPaper},open:u,onClose:x},o().createElement(P.Z,null,0!==l.length&&l.map((function(n){return o().createElement(T.Z,{key:n.appId,button:!0,onClick:function(e){return c(e,n.appId,d)}},o().createElement(H.Z,{primary:n.label}))})))))}var D=t(8721);const U=function(n){var e=n.children,t=n.style,l=n.placeholder,c=(0,r.useState)(null),i=(0,k.Z)(c,2),s=i[0],u=i[1],d=(0,r.useRef)(),p=(0,r.useState)(!1),f=(0,k.Z)(p,2),m=f[0],g=f[1];return(0,r.useEffect)((function(){var n=d.current;u(n.attachShadow({mode:"open"}));var e=document.createElement("style");e.innerHTML="div { display:none;}",n.shadowRoot.appendChild(e)}),[]),(0,r.useEffect)((function(){if(t){g(!0);var n=d.current,e=document.createElement("style");e.innerHTML=t.innerHTML+"div { display:block;}",n.shadowRoot.appendChild(e)}}),[t]),o().createElement(r.Fragment,null,o().createElement("div",{ref:d,className:"host-node-".concat((0,D.Z)())}),s&&(0,a.createPortal)(e,s),!m&&l)};var K=t(4465);const V=function(){return o().createElement("div",{className:"text-center mt-4"})},q=function(){function n(n){return new Promise((function(e,t){var r=document.createElement("script");r.src=n,r.onload=e,r.onerror=t,document.head.appendChild(r)}))}var e=(0,r.useState)(null),a=(0,k.Z)(e,2),l=a[0],c=a[1],i=(0,r.useState)(localStorage.getItem("mode")||"light"),s=(0,k.Z)(i,2),u=s[0],d=s[1],p=(0,r.useState)(""),f=(0,k.Z)(p,2),m=f[0],g=f[1],h=(0,r.useState)([]),x=(0,k.Z)(h,2),b=x[0],w=x[1],E=(0,r.useState)([]),v=(0,k.Z)(E,2),Z=v[0],y=v[1],S=(0,r.useState)((0,D.Z)()),A=(0,k.Z)(S,2),N=A[0],R=(A[1],function(n){(0,K.lW)({data:n.data,uuid:N})}),z=function(e){return(0,I.Z)(C().mark((function r(){var o,a,l;return C().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n(e.url);case 2:return o=window[e.remoteId],r.next=5,o.init(t.S.default);case 5:return r.next=7,window[e.remoteId].get("./".concat(e.appId));case 7:return a=r.sent,l=a(),r.abrupt("return",l);case 10:case"end":return r.stop()}}),r)})))};return(0,r.useEffect)((function(){var n,e,t=sessionStorage.getItem("currentAppId"),r=JSON.parse(sessionStorage.getItem("apps"))||[];"undefined"!==t&&r.length&&(console.log("this is hit!!"),n=t,e=(JSON.parse(sessionStorage.getItem("apps"))||[]).filter((function(e){return e.appId===n}))[0],n&&c(o().lazy(z(e))))}),[]),(0,r.useEffect)((function(){return(0,K.Ld)(R),function(){(0,K.r1)(R)}}),[]),(0,r.useEffect)((function(){function n(){return(n=(0,I.Z)(C().mark((function n(){var e,t;return C().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat("https://reactmfehost.japaneast.cloudapp.azure.com","/menu"));case 2:return e=n.sent,n.next=5,e.json();case 5:t=n.sent,y(t);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function e(){return(e=(0,I.Z)(C().mark((function n(){var e,t;return C().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat("https://reactmfehost.japaneast.cloudapp.azure.com","/widgets"));case 2:return e=n.sent,n.next=5,e.json();case 5:t=n.sent,sessionStorage.setItem("apps",JSON.stringify(t)),w(t);case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}(),function(){e.apply(this,arguments)}()}),[]),o().createElement("div",{className:"light"===u?"body":"body-dark"},o().createElement(G,{className:"nav",mode:u,setMode:d,menu:Z,handleMenuSelection:function(n,e,t){t(!1);var r=b.filter((function(n){return n.appId===e}))[0];r.appId&&(c(o().lazy(z(r))),sessionStorage.setItem("currentAppId",r.appId))}}),o().createElement("div",{className:"light"===u?"container":"container-dark"},o().createElement("br",null),o().createElement("br",null),o().createElement("br",null)," ",o().createElement("div",null,o().createElement(o().Suspense,{fallback:o().createElement(V,null)},o().createElement(U,{style:m},l?o().createElement(l,{setWidgetStyle:g,widgetStyle:m,handleClose:function(){c(null),sessionStorage.setItem("currentAppId",""),sessionStorage.setItem("apps",JSON.stringify([]))},uuid:N}):o().createElement("div",null))))))},Q=function(){return o().createElement(y.VK,null,o().createElement(S.Z5,null,o().createElement(S.AW,{exact:!0,path:"/react-host-remote",element:o().createElement(q,null)})))};var X=document.getElementById("root");l().render(o().createElement(Z,null,o().createElement(Q,null)),X)},28:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(8081),o=t.n(r),a=t(3645),l=t.n(a)()(o());l.push([n.id,".fin-widget {\n  width: 250px;\n  margin-top: 20px;\n}\n\n* {\nmargin:0px;\n}\n\n\n.redbutton {\n  background-color: #f44336;\n  padding: 15px;\n  border-radius: 10px;\n  color: white;\n  font-weight: bold;\n  font-size: 15px;\n} /* Red */\n\n.rounded-lg {\n  border-radius: 0.5rem;\n}\n\n.shadow-md {\n  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n}\n\n.p-4 {\n  padding: 40px;\n}\n\n.bg-gray-800 {\n  background-color: rgb(31 41 55);\n}\n\n.w-64 {\n  width: 14rem; /* 256px */\n}\n\n.h-52px {\n  height: 52px;\n}\n\n.m-auto {\n  margin: auto;\n}\n\n.mt-5 {\n  margin-top: 1.25rem; /* 20px */\n}\n\n.text-2xs {\n  font-size: 0.7rem;\n  line-height: 0.75rem;\n}\n\n.text-sm {\n  font-size: 0.875rem; /* 14px */\n  line-height: 1.25rem; /* 20px */\n}\n\n.text-white {\n  color: white;\n}\n\n.font-bold {\n  font-weight: bold;\n}\n\n.text-gray-400 {\n  color: rgb(156 163 175);\n}\n\nmt-1 {\n  margin-top: 0.25rem;\n}\n\n.ml-1 {\n  margin-left: 0.25rem; /* 4px */\n}\n\n.flex {\n  display: flex;\n}\n\n.flex-row {\n  flex-direction: row;\n}\n\n.justify-between {\n  justify-content: space-between;\n}\n\n.self-center {\n  align-self: center;\n}\n\n.text-2xl {\n  font-size: 1.5rem; /* 24px */\n  line-height: 2rem; /* 32px */\n}\n\n.items-center {\n  align-items: center;\n}\n\n.flex-col {\n  flex-direction: column;\n}\n\n.text-right {\n  text-align: right;\n}\n\n.text-red-500 {\n  color: rgb(239 68 68);\n}\n\n.text-green-500 {\n  color: rgb(34 197 94);\n}\n\n.ui-sans-serif {\n  font-family: ui-sans-serif;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  background: #FAFAFA;\n  overflow: scroll;\n  margin-top: 60px;\n}\n\n.body {\n  background: #FAFAFA;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n}\n\n.body-dark {\n  background: #333333;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n}\n\n.light {\n  background-color: #9BB9D4;\n}\n\n.dark {\n  background-color: #2C2F3C;\n}\n\n.container-dark {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  background: #333333;\n  overflow: scroll;\n  margin-top: 60px;\n}\n\n.select-dark {\n  width: 240px;\n  padding: 15px;\n  margin-top: 30px;\n  font-weight: bold;\n  text-align: center;\n  font-size: 1rem;\n  color: #ffffff; /* text color */\n  background-color: #333333; /* dropdown background color */\n  border: 1px solid #ffffff; /* border color */\n}\n\n.select-dark option {\n  color: #ffffff; /* option text color */\n  background-color: #212121; /* option background color */\n}\n\n.select {\n  width: 240px;\n  padding: 15px;\n  margin-top: 30px;\n  font-weight: bold;\n  text-align: center;\n  font-size: 1rem;\n  color: #212121; /* text color */\n  background-color: #ffffff; /* dropdown background color */\n  border: 1px solid #212121; /* border color */\n}\n\n.select option {\n  color: #212121; /* option text color */\n  background-color: #ffffff; /* option background color */\n}\n\n\n.flex-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.spacer {\n  width: 100px;\n  height: 100px;\n  margin: 10px;\n}\n\n.image {\n  margin: 10px;\n  width: 30px;\n  height: 30px;\n}\n\n.image:hover {\n  cursor: pointer;\n}\n\n.cursor:hover {\n  cursor: pointer;\n}\n\n.grid-container {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: 1fr;\n  grid-gap: 16px;\n  margin-bottom: 15px;\n}\n\nbody {\n  background: #f5f5f5;\n}",""]);const c=l}}]);