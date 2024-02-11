"use strict";(self.webpackChunkhost=self.webpackChunkhost||[]).push([[676],{5312:(e,n,t)=>{t.r(n);var r=t(7592),o=t(8920),a=t(1528),c=t(3248),i=t.n(c),l=t(3132),s=t.n(l),d=t(8352),u=t(4596),m=t.n(u),p=t(6520),f=t.n(p),g=t(6176),h=t.n(g),b=t(5120),w=t.n(b),x=t(6808),k=t.n(x),v=t(1936),y=t.n(v),E=t(7336),S={};S.styleTagTransform=y(),S.setAttributes=w(),S.insert=h().bind(null,"head"),S.domAPI=f(),S.insertStyleElement=k(),m()(E.c,S),E.c&&E.c.locals&&E.c.locals;var N=t(4768),C=t(3284),F=t(2536),I=t(2824),A=t(4840),O=t(8024),M=t(7420),j=t(8800),z=t(196),W=t(7120),P=t(7256),T=t(2368),B=t(7524),R=t(1728),J=t(8112),L=t(2484),D=t(3376),_=t(7132),H=(0,I.c)((function(e){return{root:{flexGrow:0},otherLinks:{color:function(e){return"light"===e.mode?"#0059b2":"white"},fontSize:"0.9rem"},menuButton:{marginRight:e.spacing(2)},title:(0,F.c)({flexGrow:1,textAlign:"center",color:function(e){return"light"===e.mode?"#0059b2":"white"},fontSize:"1.25rem"},e.breakpoints.down("sm"),{fontSize:"1.1rem"}),menuTitle:{color:function(e){return"light"===e.mode?"#0059b2":"white"},cursor:"pointer"},appBar:{top:0,width:"100%",zIndex:10,backgroundColor:function(e){return"light"===e.mode?"#F5F5F5":"#001e3c"}},drawer:{width:240},drawerPaper:{width:240,color:function(e){return"dark"===e.mode?"white":"black"},backgroundColor:function(e){return"light"===e.mode?"#F5F5F5":"#001e3c"}},menuIcon:{color:function(e){return"light"===e.mode?"#0059b2":"white"}},brightness4Icon:{color:"white"}}}));function G(e){var n=e.toggleMode,t=e.mode,r=e.menu,a=void 0===r?[]:r,c=e.handleMenuSelection,i=(0,l.useState)(!1),d=(0,o.c)(i,2),u=d[0],m=d[1],p=(0,l.useState)(null),f=(0,o.c)(p,2),g=f[0],h=f[1],b=H({mode:t}),w=function(){m(!u)},x=function(){h(null)};return s().createElement("div",{className:b.root},s().createElement(A.c,{position:"static",className:b.appBar},s().createElement(O.c,null,s().createElement(j.c,{onClick:w,edge:"start",className:b.menuButton},s().createElement(P.c,{className:b.menuIcon})),s().createElement(_.c,{xsDown:!0},s().createElement(M.c,{onClick:w,variant:"subtitle1",className:b.menuTitle},"Menu")),s().createElement(M.c,{variant:"h6",className:b.title},"Micromesh"),s().createElement(j.c,{onClick:n},"light"===t?s().createElement(W.c,null):s().createElement(z.c,{className:b.brightness4Icon})),s().createElement(j.c,{onClick:function(e){h(e.currentTarget)}},s().createElement(M.c,{variant:"subtitle1",className:b.otherLinks},"Related Apps")),s().createElement(D.c,{anchorEl:g,keepMounted:!0,open:Boolean(g),onClose:x,className:b.menu},s().createElement(L.c,{onClick:x,component:"a",href:"https://madhavms.github.io/widget-showcase",target:"_blank",rel:"noopener noreferrer"},"Showcase App"),s().createElement(L.c,{onClick:x,component:"a",href:"https://madhavms.github.io/onboarding-app",target:"_blank",rel:"noopener noreferrer"},"Onboarding App")))),s().createElement(T.cp,{className:b.drawer,classes:{paper:b.drawerPaper},open:u,onClose:w},s().createElement(B.c,null,0!==a.length&&a.filter((function(e){return e.display})).map((function(e){return s().createElement(R.c,{key:e.widget,button:!0,onClick:function(n){m(!1),c(n.target.innerText,e.widget)}},s().createElement(J.c,{primary:e.label}))})))))}var V=t(2112),X=t(2550);const Y=function(e){var n=e.children,t=e.style,r=e.placeholder,a=(0,l.useState)(null),c=(0,o.c)(a,2),i=c[0],d=c[1],u=(0,l.useRef)(),m=(0,l.useState)(!1),p=(0,o.c)(m,2),f=p[0],g=p[1];return(0,l.useEffect)((function(){var e=u.current;d(e.attachShadow({mode:"open"}));var n=document.createElement("style");n.innerHTML="div { display:none;}",e.shadowRoot.appendChild(n)}),[]),(0,l.useEffect)((function(){if(t){g(!0);var e=u.current,n=document.createElement("style");n.innerHTML=t.innerHTML+"div { display:block;}",e.shadowRoot.appendChild(n)}}),[t]),s().createElement(l.Fragment,null,s().createElement("div",{ref:u,className:"host-node-".concat((0,X.c)())}),i&&(0,V.createPortal)(n,i),!f&&r)},q=function(){return s().createElement("div",{className:"text-center mt-4"})};var K=t(6616),Q=t(4704),U=t(9192),Z=t(1624),$=t(4948),ee=t(4728),ne=(0,I.c)((function(e){return{footer:{padding:e.spacing(3,2),marginTop:"auto",color:function(e){return"dark"===e.mode?"white":"black"},backgroundColor:function(e){return"dark"===e.mode?"#132f4c":"#FAFAFA"},textAlign:"center"},link:{color:function(e){return"dark"===e.mode?"#90CAF9":"#2196F3"},margin:e.spacing(.8)},mediumIcon:{margin:"0px",height:"28px",width:"28px"}}}));function te(e){var n=e.classes;return s().createElement("img",{src:"https://raw.githubusercontent.com/madhavms/micromesh/main/hostApp/img/icons8-medium.svg",alt:"Medium",className:n.mediumIcon})}function re(e){var n=e.mode,t=ne({mode:n});return s().createElement("footer",{className:t.footer},s().createElement(K.c,{maxWidth:"sm"},s().createElement(ee.c,{container:!0,alignItems:"center",justifyContent:"center"},s().createElement(ee.c,{item:!0},s().createElement(M.c,{variant:"body1"},"Micromesh © ",(new Date).getFullYear())),s().createElement(ee.c,{item:!0},s().createElement($.c,null,s().createElement(Q.c,{href:"https://github.com/madhavms/react-host-remote",target:"_blank",rel:"noopener noreferrer",className:t.link},s().createElement(U.c,null)),s().createElement(Q.c,{href:"https://www.linkedin.com/in/madhavmanohars/",target:"_blank",rel:"noopener noreferrer",className:t.link},s().createElement(Z.c,null)),s().createElement(Q.c,{href:"https://medium.com/@madhavmanohar.s",target:"_blank",rel:"noopener noreferrer",className:t.link},s().createElement(te,{classes:t})))))))}var oe=t(8788),ae=(0,I.c)((function(e){return{container:(0,F.c)((0,F.c)({backgroundColor:function(e){return"dark"===e.mode?"#132f4c":"#FAFAFA"},color:function(e){return"dark"===e.mode?"#FFFFFF":"#333333"},padding:e.spacing(3),boxShadow:"0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)",transition:"box-shadow 0.4s ease-in-out",border:"none"},e.breakpoints.down("sm"),{maxWidth:"80vw"}),e.breakpoints.down("xs"),{maxWidth:"40ch"}),title:(0,F.c)({fontSize:"1.3rem",fontWeight:"bold",marginBottom:e.spacing(2),textAlign:"center"},e.breakpoints.down("sm"),{fontSize:"1rem"}),text:(0,F.c)({fontSize:"1.15rem",lineHeight:"1.5"},e.breakpoints.down("sm"),{fontSize:"0.9rem"}),textContainer:{maxWidth:"800px",margin:"0 auto",padding:e.spacing(2)}}}));const ce=function(e){var n=e.mode,t=ae({mode:n});return s().createElement($.c,{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"},s().createElement(oe.c,{className:t.container},s().createElement(M.c,{variant:"h1",className:t.title},"Micromesh Microfrontend Platform"),s().createElement($.c,{className:t.textContainer},s().createElement(M.c,{variant:"body1",className:t.text},"This platform is a micro-frontend solution that allows real-time discovery, loading, and orchestration of independently deployed applications in a micro-frontend compatible format."),s().createElement($.c,{mt:2},s().createElement(M.c,{variant:"body1",className:t.text},"To access the microfrontend widgets, use the global discovery menu on the left-hand side. The Micromesh platform provides a user-friendly global discovery menu to facilitate access to onboarded microfrontend applications. Additionally, the platform incorporates a practical workspace feature with a tabbed navigation system, enabling users to interact with multiple applications concurrently in an organized manner.")))))};var ie=t(7260),le=t(5719),se=t(7048),de=(0,I.c)((function(e){return{hiddenIndicator:{display:"none"},closeIcon:{color:"white",verticalAlign:"middle"},closeIconSelected:{color:function(e){return"light"===e.mode?"#0059b2":"white"},verticalAlign:"middle"},tabs:{flexGrow:1},tabsContainer:{backgroundColor:"black",paddingTop:e.spacing(1.2)},tab:{color:"white",backgroundColor:"black",fontSize:"0.8rem",borderTopLeftRadius:e.spacing(1),borderTopRightRadius:e.spacing(1),borderBottom:"None","&:hover":{opacity:"0.7"},"&.Mui-selected:hover":{opacity:"1"},"&.Mui-selected":{backgroundColor:function(e){return"light"===e.mode?"#F5F5F5":"#001e3c"},color:function(e){return"light"===e.mode?"#0059b2":"white"}},"&.Mui-focusVisible":{backgroundColor:function(e){return"light"===e.mode?"#F5F5F5":"#001e3c"}},closeButton:(0,F.c)({marginLeft:e.spacing(1),padding:0,display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer"},"marginLeft",e.spacing(1)),labelContainer:{display:"flex",alignItems:"center"}}}}));const ue=function(e){var n=e.workspaces,t=e.mode,r=e.handleWorkspaceSelection,o=e.handleCloseWorkspace,a=de({mode:t}),c=n.findIndex((function(e){return e.isSelected}));return s().createElement("div",{className:a.tabsContainer},s().createElement(ie.c,{value:c,onChange:function(e,t){var o;return r(null===(o=n[t])||void 0===o?void 0:o.label)},indicatorColor:"primary",textColor:"primary",classes:{indicator:a.hiddenIndicator},variant:"scrollable",scrollButtons:"auto"},n.map((function(e,n){return s().createElement(le.c,{key:e.label,label:s().createElement("span",{className:a.labelContainer},e.label,s().createElement("span",{className:a.closeButton,onClick:function(n){n.stopPropagation(),o(e.label)},size:"small"},s().createElement(se.c,{fontSize:"small",className:e.isSelected?a.closeIconSelected:a.closeIcon}))),value:n,className:a.tab})}))))};var me=function(e){return new Promise((function(n,t){var r=document.createElement("script");r.src=e,r.onload=n,r.onerror=t,document.head.appendChild(r)}))},pe=t(888);function fe(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function ge(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?fe(Object(t),!0).forEach((function(n){(0,F.c)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):fe(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var he=function(e,n){var t=JSON.parse(sessionStorage.getItem("workspaces"))||[],r=t.findIndex((function(n){return n.id===e}));-1!==r&&(t[r].state=n,sessionStorage.setItem("workspaces",JSON.stringify(t)))},be=function(e){var n=(JSON.parse(sessionStorage.getItem("workspaces"))||[]).find((function(n){return n.id===e}));return null==n?void 0:n.state};const we=function(e){var n=e.apps,r=e.menu,c=e.toggleMode,d=e.mode,u=(0,l.useState)(null),m=(0,o.c)(u,2),p=m[0],f=m[1],g=(0,l.useState)(""),h=(0,o.c)(g,2),b=h[0],w=h[1],x=(0,l.useState)((0,X.c)()),k=(0,o.c)(x,2),v=k[0],y=(k[1],function(e){var n,t=function(){return JSON.parse(sessionStorage.getItem("workspaces"))||[]},r=JSON.parse(sessionStorage.getItem("workspaces"))||[],a=(null===(n=r.find((function(e){return e.isSelected})))||void 0===n?void 0:n.id)||null,c=(0,l.useState)(r),i=(0,o.c)(c,2),s=i[0],d=i[1],u=(0,l.useState)(a),m=(0,o.c)(u,2),p=m[0],f=m[1],g=function(e){d(e),sessionStorage.setItem("workspaces",JSON.stringify(e))};return{workspaces:s,currentWorkspaceId:p,updateWorkspace:g,handleWorkspaceSelection:function(e){var n=s.find((function(n){return n.label===e}));if(null==n||!n.isSelected){var r=(t()||s).map((function(n){return ge(ge({},n),{},{isSelected:n.label===e})}));g(r),f((null==n?void 0:n.id)||null)}},handleMenuSelection:function(e,n){var r=t()||s,o=r.find((function(e){return e.widget===n})),a=r.map((function(e){return ge(ge({},e),{},{isSelected:!1})})),c={},i=e,l=1;if(o){var d=r.filter((function(n){return n.label.startsWith(e)}));d.length>0&&(l=d.length+1,i="".concat(e," (").concat(l-1,")"),c={id:(0,X.c)(),widget:n,label:i,isSelected:!0})}else c={id:(0,X.c)(),widget:n,label:e,isSelected:!0};g([].concat((0,pe.c)(a),[c])),f(c.id)},handleCloseWorkspace:function(e){var n=s.filter((function(n){return n.label!==e}));if(0===n.length)return g(n),void f(null);if(s.find((function(n){return n.label===e&&n.isSelected}))){var t=s.findIndex((function(n){return n.label===e})),r=Math.max(t-1,0),o=n[r];o&&(n[r].isSelected=!0,f(o.id),g(n))}else g(n)}}}()),E=y.workspaces,S=y.handleWorkspaceSelection,N=y.handleMenuSelection,C=y.handleCloseWorkspace,F=y.currentWorkspaceId;return(0,l.useEffect)((function(){var e=E||JSON.parse(sessionStorage.getItem("workspaces")),r=null==e?void 0:e.find((function(e){return e.isSelected}));r?function(e){var r=n.find((function(n){return n.template.id===e.widget})).template,o=[];r.widgets.forEach((function(e){var r=n.find((function(n){return n.template.id===e.widget})),c=r.template.widgets.find((function(n){return n.widget===e.widget})),l=function(e){var n=e.url,r=e.scope,o=e.widget;return(0,a.c)(i().mark((function e(){var a,c,l;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,me(n);case 2:return a=window[r],e.next=5,a.init(t.S.default);case 5:return e.next=7,a.get("./".concat(o));case 7:return c=e.sent,l=c(),e.abrupt("return",l);case 10:case"end":return e.stop()}}),e)})))}({url:r.url,scope:c.scope,widget:c.widget})().then((function(e){return e.default})).catch((function(e){return console.error("Error loading widget:",e),null}));o.push(l)})),Promise.all(o).then((function(e){var n=function(n){var t=n.mode,o=n.addStyleForShadowRoot,a=n.widgetStyle,c=n.uuid,i=n.setworkspaceState,l=n.getworkspaceState,d=n.currentWorkspaceId;return s().createElement(s().Fragment,null,r.layouts.map((function(n,r){var u=e[r];return u&&s().createElement("div",{key:r,style:{top:n.y,left:n.x,width:n.w,height:n.h}},s().createElement(u,{addStyleForShadowRoot:o,widgetStyle:a,uuid:c,setworkspaceState:i,getworkspaceState:l,currentWorkspaceId:d,mode:t}))})))};f((function(){return n}))})).catch((function(e){console.error("Error loading widgets:",e)}))}(r):f(null)}),[E]),s().createElement("div",{className:"".concat("light"===d?"body":"body-dark"," root-container")},s().createElement(ue,{workspaces:E,mode:d,handleWorkspaceSelection:S,handleCloseWorkspace:C}),s().createElement(G,{className:"nav",mode:d,toggleMode:c,menu:r,handleMenuSelection:N,workspaces:E}),s().createElement("div",{className:"light"===d?"container":"container-dark"},!p&&0===E.length&&s().createElement(ce,{mode:d}),s().createElement("div",null,s().createElement(s().Suspense,{fallback:s().createElement(q,null)},s().createElement(Y,{style:b},p?s().createElement(p,{addStyleForShadowRoot:function(){w(window["widget-style"])},setWidgetStyle:w,widgetStyle:b,uuid:v,setworkspaceState:he,getworkspaceState:be,currentWorkspaceId:F,mode:d}):s().createElement("div",null))))),s().createElement(re,{mode:d}))},xe=function(e){var n=e.apps,t=e.menu,r=e.toggleMode,o=e.mode;return s().createElement(N.kn,null,s().createElement(C.c5,null,s().createElement(C.kX,{path:"*",element:s().createElement(we,{apps:n,menu:t,toggleMode:r,mode:o})})))};var ke=t(312),ve={};ve.styleTagTransform=y(),ve.setAttributes=w(),ve.insert=h().bind(null,"head"),ve.domAPI=f(),ve.insertStyleElement=k(),m()(ke.c,ve),ke.c&&ke.c.locals&&ke.c.locals;const ye=function(){return s().createElement("div",{className:"loading-circle-container"},(0,pe.c)(Array(8)).map((function(e,n){return s().createElement("div",{key:n,className:"loading-circle loading-circle-".concat(n)})})))};var Ee=document.getElementById("root");function Se(){return Ne.apply(this,arguments)}function Ne(){return(Ne=(0,a.c)(i().mark((function e(){var n,t,a,c;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([fetch("".concat("https://micromeshcloudrun-msy6pdfnna-ew.a.run.app","/widgets")).then((function(e){return e.json()})),fetch("".concat("https://micromeshcloudrun-msy6pdfnna-ew.a.run.app","/menu")).then((function(e){return e.json()}))]);case 2:return n=e.sent,t=(0,o.c)(n,2),a=t[0],c=t[1],"Not Found"===a.detail?(sessionStorage.setItem("apps",JSON.stringify([])),(0,r.c)("apps")):sessionStorage.setItem("apps",JSON.stringify(a)),"Not Found"===c.detail&&(0,r.c)("menu"),e.abrupt("return",{apps:a,menu:c});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ce(){var e=(0,l.useState)(!0),n=(0,o.c)(e,2),t=n[0],r=n[1],c=(0,l.useState)([]),d=(0,o.c)(c,2),u=d[0],m=d[1],p=(0,l.useState)([]),f=(0,o.c)(p,2),g=f[0],h=f[1],b=(0,l.useState)(localStorage.getItem("mode")||"light"),w=(0,o.c)(b,2),x=w[0],k=w[1],v=(0,l.useState)(!1),y=(0,o.c)(v,2),E=(y[0],y[1]);return(0,l.useEffect)((function(){function e(){return e=(0,a.c)(i().mark((function e(){var n,t,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Se();case 2:n=e.sent,t=n.apps,o=n.menu,m(t),h(o),setTimeout((function(){r(!1),E(!0)}),800);case 8:case"end":return e.stop()}}),e)}))),e.apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),t?s().createElement("div",{className:"body".concat("light"===x?"":"-dark"," root-container")},s().createElement(ye,null)):s().createElement(xe,{apps:u,menu:g,toggleMode:function(){var e="light"===x?"dark":"light";k(e),localStorage.setItem("mode",e)},mode:x})}function Fe(){return(Fe=(0,a.c)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){(0,d.C)(Ee).render(s().createElement(Ce,null)),e()}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){Fe.apply(this,arguments)}()},312:(e,n,t)=>{t.d(n,{c:()=>i});var r=t(5500),o=t.n(r),a=t(2312),c=t.n(a)()(o());c.push([e.id,".loading-circle-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n  }\n  \n  .loading-circle {\n    width: 12px;\n    height: 12px;\n    margin: 2px;\n    background-color: #3498db;\n    border-radius: 50%;\n    animation: loading-circle-animation 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  }\n  \n  @keyframes loading-circle-animation {\n    0%,\n    100% {\n      opacity: 1;\n    }\n    50% {\n      opacity: 0.3;\n    }\n  }\n  \n  /* Adjust the size, color, and animation duration as per your preference */\n  ",""]);const i=c},7336:(e,n,t)=>{t.d(n,{c:()=>i});var r=t(5500),o=t.n(r),a=t(2312),c=t.n(a)()(o());c.push([e.id,".fin-widget {\n  width: 250px;\n  margin-top: 20px;\n}\n\n* {\nmargin:0px;\n}\n\n\n.redbutton {\n  background-color: #f44336;\n  padding: 15px;\n  border-radius: 10px;\n  color: white;\n  font-weight: bold;\n  font-size: 15px;\n} /* Red */\n\n.rounded-lg {\n  border-radius: 0.5rem;\n}\n\n.shadow-md {\n  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n}\n\n.p-4 {\n  padding: 40px;\n}\n\n.bg-gray-800 {\n  background-color: rgb(31 41 55);\n}\n\n.w-64 {\n  width: 14rem; /* 256px */\n}\n\n.h-52px {\n  height: 52px;\n}\n\n.m-auto {\n  margin: auto;\n}\n\n.mt-5 {\n  margin-top: 1.25rem; /* 20px */\n}\n\n.text-2xs {\n  font-size: 0.7rem;\n  line-height: 0.75rem;\n}\n\n.text-sm {\n  font-size: 0.875rem; /* 14px */\n  line-height: 1.25rem; /* 20px */\n}\n\n.text-white {\n  color: white;\n}\n\n.font-bold {\n  font-weight: bold;\n}\n\n.text-gray-400 {\n  color: rgb(156 163 175);\n}\n\nmt-1 {\n  margin-top: 0.25rem;\n}\n\n.ml-1 {\n  margin-left: 0.25rem; /* 4px */\n}\n\n.flex {\n  display: flex;\n}\n\n.flex-row {\n  flex-direction: row;\n}\n\n.justify-between {\n  justify-content: space-between;\n}\n\n.self-center {\n  align-self: center;\n}\n\n.text-2xl {\n  font-size: 1.1rem; /* 24px */\n  line-height: 2rem; /* 32px */\n}\n\n.text-xl {\n  font-size: 1rem; /* 24px */\n  line-height: 1.8rem; /* 32px */\n}\n\n.items-center {\n  align-items: center;\n}\n\n.flex-col {\n  flex-direction: column;\n}\n\n.text-right {\n  text-align: right;\n}\n\n.text-red-500 {\n  color: rgb(239 68 68);\n}\n\n.text-green-500 {\n  color: rgb(34 197 94);\n}\n\n.ui-sans-serif {\n  font-family: ui-sans-serif;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  background: #FAFAFA;\n  gap:10px;\n  margin-top: 10vh;\n}\n\n.body {\n  background: #FAFAFA;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n}\n\n.body-dark {\n  background: #132f4c;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n}\n\n.light {\n  background-color: #9BB9D4;\n}\n\n.dark {\n  background-color: #2C2F3C;\n}\n\n.container-dark {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  background: #132f4c;\n  gap:10px;\n  margin-top: 10vh;\n}\n\n.select-dark {\n  width: 240px;\n  padding: 15px;\n  margin-top: 30px;\n  font-weight: bold;\n  text-align: center;\n  font-size: 1rem;\n  color: #ffffff; /* text color */\n  background-color: #333333; /* dropdown background color */\n  border: 1px solid #ffffff; /* border color */\n}\n\n.select-dark option {\n  color: #ffffff; /* option text color */\n  background-color: #212121; /* option background color */\n}\n\n.select {\n  width: 240px;\n  padding: 15px;\n  margin-top: 30px;\n  font-weight: bold;\n  text-align: center;\n  font-size: 1rem;\n  color: #212121; /* text color */\n  background-color: #ffffff; /* dropdown background color */\n  border: 1px solid #212121; /* border color */\n}\n\n.select option {\n  color: #212121; /* option text color */\n  background-color: #ffffff; /* option background color */\n}\n\n\n.flex-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.spacer {\n  width: 100px;\n  height: 100px;\n  margin: 10px;\n}\n\n.image {\n  margin: 10px;\n  width: 30px;\n  height: 30px;\n}\n\n.image:hover {\n  cursor: pointer;\n}\n\n.cursor:hover {\n  cursor: pointer;\n}\n\n.grid-container {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: 1fr;\n  grid-gap: 16px;\n  margin-bottom: 15px;\n}\n\nbody {\n  background: #f5f5f5;\n}\n\n/* styles.css */\nhtml,\nbody,\n#root,\n.root-container {\n  height: 100%;\n}\n\n.root-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.footer {\n  margin-top: auto;\n}\n",""]);const i=c}}]);