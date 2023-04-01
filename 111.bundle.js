"use strict";(self.webpackChunkhost=self.webpackChunkhost||[]).push([[111],{633:(e,n,t)=>{t.r(n);var r=t(5558),o=t.n(r),a=t(2169),i=t.n(a),c=t(3379),l=t.n(c),s=t(7795),d=t.n(s),m=t(569),u=t.n(m),p=t(3565),f=t.n(p),g=t(9216),h=t.n(g),x=t(4589),b=t.n(x),w=t(28),E={};E.styleTagTransform=b(),E.setAttributes=f(),E.insert=u().bind(null,"head"),E.domAPI=d(),E.insertStyleElement=h(),l()(w.Z,E),w.Z&&w.Z.locals&&w.Z.locals;var Z=t(885),k=(0,r.createContext)(),v=function(e){var n=(0,r.useState)(!1),t=(0,Z.Z)(n,2),a=t[0],i=t[1],c=(0,r.useRef)(),l=(0,r.useRef)(),s=(0,r.useRef)();return o().createElement(k.Provider,{value:[a,i,c,l,s]},e.children)},y=t(9655),S=t(9250),A=t(5861),I=t(4687),F=t.n(I),N=t(1120),C=t(5258),z=t(8358),M=t(2318),P=t(7812),T=t(3521),j=t(3320),B=t(8884),R=t(7159),W=t(2822),L=t(998),O=t(5757),_=t(5639),H=t(5675),J=t(2613),D=(0,N.Z)((function(e){return{root:{flexGrow:0},otherLinks:{color:function(e){return"light"===e.mode?"#0059b2":"white"},fontSize:"0.9rem"},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,textAlign:"center",color:function(e){return"light"===e.mode?"#0059b2":"white"},fontSize:"1.25rem"},menuTitle:{color:function(e){return"light"===e.mode?"#0059b2":"white"}},appBar:{position:"fixed",top:0,width:"100%",zIndex:10,backgroundColor:function(e){return"light"===e.mode?"#FAFAFA":"#001e3c"}},drawer:{width:240},drawerPaper:{width:240,color:function(e){return"dark"===e.mode?"white":"black"},backgroundColor:function(e){return"light"===e.mode?"#FAFAFA":"#001e3c"}},menuIcon:{color:function(e){return"light"===e.mode?"#0059b2":"white"}},brightness4Icon:{color:"white"}}}));function G(e){var n=e.mode,t=e.setMode,a=e.menu,i=void 0===a?[]:a,c=e.handleMenuSelection,l=(0,r.useState)(!1),s=(0,Z.Z)(l,2),d=s[0],m=s[1],u=(0,r.useState)(null),p=(0,Z.Z)(u,2),f=p[0],g=p[1],h=D({mode:n}),x=function(){m(!d)},b=function(){g(null)};return o().createElement("div",{className:h.root},o().createElement(C.Z,{position:"static",className:h.appBar},o().createElement(z.Z,null,o().createElement(P.Z,{onClick:x,edge:"start",className:h.menuButton},o().createElement(B.Z,{className:h.menuIcon})),o().createElement(J.Z,{xsDown:!0},o().createElement(M.Z,{variant:"subtitle1",className:h.menuTitle},"Menu")),o().createElement(M.Z,{variant:"h6",className:h.title},"MicroMesh"),o().createElement(P.Z,{onClick:function(){var e="light"===n?"dark":"light";t(e),localStorage.setItem("mode",e)}},"light"===n?o().createElement(j.Z,null):o().createElement(T.Z,{className:h.brightness4Icon})),o().createElement(P.Z,{onClick:function(e){g(e.currentTarget)}},o().createElement(M.Z,{variant:"subtitle1",className:h.otherLinks},"Related Apps")),o().createElement(H.Z,{anchorEl:f,keepMounted:!0,open:Boolean(f),onClose:b},o().createElement(_.Z,{onClick:b,component:"a",href:"https://madhavms.github.io/widget-showcase",target:"_blank",rel:"noopener noreferrer"},"Showcase App"),o().createElement(_.Z,{onClick:b,component:"a",href:"https://madhavms.github.io/onboarding-app",target:"_blank",rel:"noopener noreferrer"},"Onboarding App")))),o().createElement(R.ZP,{className:h.drawer,classes:{paper:h.drawerPaper},open:d,onClose:x},o().createElement(W.Z,null,0!==i.length&&i.map((function(e){return o().createElement(L.Z,{key:e.appId,button:!0,onClick:function(n){return c(n,e.appId,m)}},o().createElement(O.Z,{primary:e.label}))})))))}var K=t(8721);const V=function(e){var n=e.children,t=e.style,i=e.placeholder,c=(0,r.useState)(null),l=(0,Z.Z)(c,2),s=l[0],d=l[1],m=(0,r.useRef)(),u=(0,r.useState)(!1),p=(0,Z.Z)(u,2),f=p[0],g=p[1];return(0,r.useEffect)((function(){var e=m.current;d(e.attachShadow({mode:"open"}));var n=document.createElement("style");n.innerHTML="div { display:none;}",e.shadowRoot.appendChild(n)}),[]),(0,r.useEffect)((function(){if(t){g(!0);var e=m.current,n=document.createElement("style");n.innerHTML=t.innerHTML+"div { display:block;}",e.shadowRoot.appendChild(n)}}),[t]),o().createElement(r.Fragment,null,o().createElement("div",{ref:m,className:"host-node-".concat((0,K.Z)())}),s&&(0,a.createPortal)(n,s),!f&&i)};var Y=t(4465);const q=function(){return o().createElement("div",{className:"text-center mt-4"})};var Q=t(3832),U=t(9659),X=t(2516),$=t(551),ee=t(9956),ne=t(1749),te=(0,N.Z)((function(e){return{footer:{padding:e.spacing(3,2),marginTop:"auto",color:function(e){return"dark"===e.mode?"white":"black"},backgroundColor:function(e){return"dark"===e.mode?"#132f4c":"#FAFAFA"},textAlign:"center"},link:{color:function(e){return"dark"===e.mode?"#90CAF9":"#2196F3"},margin:e.spacing(.8)},mediumIcon:{margin:"0px",height:"28px",width:"28px"}}}));function re(e){var n=e.classes;return o().createElement("img",{src:"https://raw.githubusercontent.com/madhavms/micromesh/main/hostApp/img/icons8-medium.svg",alt:"Medium",className:n.mediumIcon})}function oe(e){var n=e.mode,t=te({mode:n});return o().createElement("footer",{className:t.footer},o().createElement(Q.Z,{maxWidth:"sm"},o().createElement(ne.Z,{container:!0,alignItems:"center",justifyContent:"center"},o().createElement(ne.Z,{item:!0},o().createElement(M.Z,{variant:"body1"},"MicroMesh © ",(new Date).getFullYear())),o().createElement(ne.Z,{item:!0},o().createElement(ee.Z,null,o().createElement(U.Z,{href:"https://github.com/madhavms/react-host-remote",target:"_blank",rel:"noopener noreferrer",className:t.link},o().createElement(X.Z,null)),o().createElement(U.Z,{href:"https://www.linkedin.com/in/madhavmanohars/",target:"_blank",rel:"noopener noreferrer",className:t.link},o().createElement($.Z,null)),o().createElement(U.Z,{href:"https://medium.com/@madhavmanohar.s",target:"_blank",rel:"noopener noreferrer",className:t.link},o().createElement(re,{classes:t})))))))}var ae=t(9895),ie=(0,N.Z)((function(e){return{container:{backgroundColor:function(e){return"dark"===e.mode?"#132f4c":"#FAFAFA"},color:function(e){return"dark"===e.mode?"#FFFFFF":"#333333"},padding:e.spacing(3),boxShadow:"0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)",transition:"box-shadow 0.4s ease-in-out",border:"none"},title:{fontSize:"1.3rem",fontWeight:"bold",marginBottom:e.spacing(2),textAlign:"center"},text:{fontSize:"1.15rem",lineHeight:"1.5"},textContainer:{maxWidth:"800px",margin:"0 auto",padding:e.spacing(2)}}}));const ce=function(e){var n=e.mode,t=ie({mode:n});return o().createElement(ee.Z,{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"},o().createElement(ae.Z,{className:t.container},o().createElement(M.Z,{variant:"h1",className:t.title},"MicroMesh Microfrontend Platform"),o().createElement(ee.Z,{className:t.textContainer},o().createElement(M.Z,{variant:"body1",className:t.text},"This is a micro-frontend platform that performs run-time discovery, integration and orchestration of independently deployed applications bundled in micro-frontend compatible format. The application uses Webpack module federation plugin to achieve runtime loading and orchestration of modules."),o().createElement(ee.Z,{mt:2},o().createElement(M.Z,{variant:"body1",className:t.text},"To access the microfrontend widgets, please use the global discovery menu on the left-hand.")))))};var le,se,de,me,ue,pe,fe=t(168),ge=t(2788);ge.ZP.div(le||(le=(0,fe.Z)(["\n  background-color: #f5f5f5;\n  border-radius: 8px;\n  padding:24px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n"]))),ge.ZP.h2(se||(se=(0,fe.Z)(["\n  margin-bottom: 24px;\n  font-size: 32px;\n  font-weight: bold;\n"]))),ge.ZP.h3(de||(de=(0,fe.Z)(["\n  margin-top: 48px;\n  margin-bottom: 24px;\n  font-size: 24px;\n  font-weight: bold;\n"]))),ge.ZP.p(me||(me=(0,fe.Z)(["\n  margin-bottom: 24px;\n  font-size: 16px;\n  line-height: 1.5;\n"]))),ge.ZP.img(ue||(ue=(0,fe.Z)(["\n  display: block;\n  margin: 24px auto;\n  max-width: 100%;\n"]))),ge.ZP.code(pe||(pe=(0,fe.Z)(['\n  font-family: "Courier New", Courier, monospace;\n  font-size: 14px;\n  padding: 4px 8px;\n  background-color: #f9f9f9;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n'])));const he=function(){function e(e){return new Promise((function(n,t){var r=document.createElement("script");r.src=e,r.onload=n,r.onerror=t,document.head.appendChild(r)}))}var n=(0,r.useState)(null),a=(0,Z.Z)(n,2),i=a[0],c=a[1],l=(0,r.useState)(localStorage.getItem("mode")||"light"),s=(0,Z.Z)(l,2),d=s[0],m=s[1],u=(0,r.useState)(""),p=(0,Z.Z)(u,2),f=p[0],g=p[1],h=(0,r.useState)([]),x=(0,Z.Z)(h,2),b=x[0],w=x[1],E=(0,r.useState)([]),k=(0,Z.Z)(E,2),v=k[0],y=k[1],S=(0,r.useState)((0,K.Z)()),I=(0,Z.Z)(S,2),N=I[0],C=(I[1],(0,r.useState)(!0)),z=(0,Z.Z)(C,2),M=z[0],P=z[1],T=function(e){(0,Y.lW)({data:e.data,uuid:N})},j=function(n){return(0,A.Z)(F().mark((function r(){var o,a,i;return F().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e(n.url);case 2:return o=window[n.remoteId],r.next=5,o.init(t.S.default);case 5:return r.next=7,window[n.remoteId].get("./".concat(n.appId));case 7:return a=r.sent,i=a(),r.abrupt("return",i);case 10:case"end":return r.stop()}}),r)})))};return(0,r.useEffect)((function(){var e,n,t=sessionStorage.getItem("currentAppId"),r=JSON.parse(sessionStorage.getItem("apps"))||[];"undefined"!==t&&t&&r.length&&(P(!1),e=t,n=(JSON.parse(sessionStorage.getItem("apps"))||[]).filter((function(n){return n.appId===e}))[0],e&&c(o().lazy(j(n))))}),[]),(0,r.useEffect)((function(){return(0,Y.Ld)(T),function(){(0,Y.r1)(T)}}),[]),(0,r.useEffect)((function(){function e(){return(e=(0,A.Z)(F().mark((function e(){var n,t;return F().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://micromeshcloudrun-msy6pdfnna-ew.a.run.app","/menu"));case 2:return n=e.sent,e.next=5,n.json();case 5:"Not Found"===(t=e.sent).detail&&(t=[]),y(t);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function n(){return(n=(0,A.Z)(F().mark((function e(){var n,t;return F().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://micromeshcloudrun-msy6pdfnna-ew.a.run.app","/widgets"));case 2:return n=e.sent,e.next=5,n.json();case 5:"Not Found"===(t=e.sent).detail&&(t=[]),sessionStorage.setItem("apps",JSON.stringify(t)),w(t);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),function(){n.apply(this,arguments)}()}),[]),o().createElement("div",{className:"".concat("light"===d?"body":"body-dark"," root-container")},o().createElement(G,{className:"nav",mode:d,setMode:m,menu:v,handleMenuSelection:function(e,n,t){P(!1),t(!1);var r=b.filter((function(e){return e.appId===n}))[0];r.appId&&(c(o().lazy(j(r))),sessionStorage.setItem("currentAppId",r.appId))}}),o().createElement("div",{className:"light"===d?"container":"container-dark"},o().createElement("br",null),o().createElement("br",null),o().createElement("br",null)," ",M&&o().createElement(ce,{mode:d}),o().createElement("div",null,o().createElement(o().Suspense,{fallback:o().createElement(q,null)},o().createElement(V,{style:f},i?o().createElement(i,{setWidgetStyle:g,widgetStyle:f,handleClose:function(){c(null),sessionStorage.setItem("currentAppId",""),sessionStorage.setItem("apps",JSON.stringify([])),P(!0)},uuid:N,mode:d}):o().createElement("div",null))))),o().createElement(oe,{mode:d}))},xe=function(){return o().createElement(y.VK,null,o().createElement(S.Z5,null,o().createElement(S.AW,{path:"*",element:o().createElement(he,null)})))};var be=document.getElementById("root");i().render(o().createElement(v,null,o().createElement(xe,null)),be)},28:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(8081),o=t.n(r),a=t(3645),i=t.n(a)()(o());i.push([e.id,".fin-widget {\n  width: 250px;\n  margin-top: 20px;\n}\n\n* {\nmargin:0px;\n}\n\n\n.redbutton {\n  background-color: #f44336;\n  padding: 15px;\n  border-radius: 10px;\n  color: white;\n  font-weight: bold;\n  font-size: 15px;\n} /* Red */\n\n.rounded-lg {\n  border-radius: 0.5rem;\n}\n\n.shadow-md {\n  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n}\n\n.p-4 {\n  padding: 40px;\n}\n\n.bg-gray-800 {\n  background-color: rgb(31 41 55);\n}\n\n.w-64 {\n  width: 14rem; /* 256px */\n}\n\n.h-52px {\n  height: 52px;\n}\n\n.m-auto {\n  margin: auto;\n}\n\n.mt-5 {\n  margin-top: 1.25rem; /* 20px */\n}\n\n.text-2xs {\n  font-size: 0.7rem;\n  line-height: 0.75rem;\n}\n\n.text-sm {\n  font-size: 0.875rem; /* 14px */\n  line-height: 1.25rem; /* 20px */\n}\n\n.text-white {\n  color: white;\n}\n\n.font-bold {\n  font-weight: bold;\n}\n\n.text-gray-400 {\n  color: rgb(156 163 175);\n}\n\nmt-1 {\n  margin-top: 0.25rem;\n}\n\n.ml-1 {\n  margin-left: 0.25rem; /* 4px */\n}\n\n.flex {\n  display: flex;\n}\n\n.flex-row {\n  flex-direction: row;\n}\n\n.justify-between {\n  justify-content: space-between;\n}\n\n.self-center {\n  align-self: center;\n}\n\n.text-2xl {\n  font-size: 1.5rem; /* 24px */\n  line-height: 2rem; /* 32px */\n}\n\n.items-center {\n  align-items: center;\n}\n\n.flex-col {\n  flex-direction: column;\n}\n\n.text-right {\n  text-align: right;\n}\n\n.text-red-500 {\n  color: rgb(239 68 68);\n}\n\n.text-green-500 {\n  color: rgb(34 197 94);\n}\n\n.ui-sans-serif {\n  font-family: ui-sans-serif;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  background: #FAFAFA;\n  gap:10px;\n  overflow: scroll;\n  margin-top: 60px;\n}\n\n.body {\n  background: #FAFAFA;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n}\n\n.body-dark {\n  background: #132f4c;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n}\n\n.light {\n  background-color: #9BB9D4;\n}\n\n.dark {\n  background-color: #2C2F3C;\n}\n\n.container-dark {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  background: #132f4c;\n  overflow: scroll;\n  gap:10px;\n  margin-top: 60px;\n}\n\n.select-dark {\n  width: 240px;\n  padding: 15px;\n  margin-top: 30px;\n  font-weight: bold;\n  text-align: center;\n  font-size: 1rem;\n  color: #ffffff; /* text color */\n  background-color: #333333; /* dropdown background color */\n  border: 1px solid #ffffff; /* border color */\n}\n\n.select-dark option {\n  color: #ffffff; /* option text color */\n  background-color: #212121; /* option background color */\n}\n\n.select {\n  width: 240px;\n  padding: 15px;\n  margin-top: 30px;\n  font-weight: bold;\n  text-align: center;\n  font-size: 1rem;\n  color: #212121; /* text color */\n  background-color: #ffffff; /* dropdown background color */\n  border: 1px solid #212121; /* border color */\n}\n\n.select option {\n  color: #212121; /* option text color */\n  background-color: #ffffff; /* option background color */\n}\n\n\n.flex-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.spacer {\n  width: 100px;\n  height: 100px;\n  margin: 10px;\n}\n\n.image {\n  margin: 10px;\n  width: 30px;\n  height: 30px;\n}\n\n.image:hover {\n  cursor: pointer;\n}\n\n.cursor:hover {\n  cursor: pointer;\n}\n\n.grid-container {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: 1fr;\n  grid-gap: 16px;\n  margin-bottom: 15px;\n}\n\nbody {\n  background: #f5f5f5;\n}\n\n/* styles.css */\nhtml,\nbody,\n#root,\n.root-container {\n  height: 100%;\n}\n\n.root-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.footer {\n  margin-top: auto;\n}\n",""]);const c=i}}]);