"use strict";(self.webpackChunkhost=self.webpackChunkhost||[]).push([[945],{3846:(e,n,t)=>{t.r(n);var r=t(2860),o=t(885),a=t(5861),i=t(4687),l=t.n(i),c=t(5558),s=t.n(c),d=t(2169),m=t.n(d),u=t(3379),p=t.n(u),f=t(7795),g=t.n(f),h=t(569),b=t.n(h),x=t(3565),w=t.n(x),v=t(9216),k=t.n(v),Z=t(4589),E=t.n(Z),y=t(28),I={};I.styleTagTransform=E(),I.setAttributes=w(),I.insert=b().bind(null,"head"),I.domAPI=g(),I.insertStyleElement=k(),p()(y.Z,I),y.Z&&y.Z.locals&&y.Z.locals;var S=t(9655),N=t(9250),T=t(2982),C=t(1120),F=t(5258),A=t(8358),M=t(2318),z=t(7812),B=t(3521),O=t(3320),j=t(8884),J=t(7159),P=t(2822),R=t(998),W=t(5757),L=t(5639),_=t(5675),H=t(2613),D=(0,C.Z)((function(e){return{root:{flexGrow:0},otherLinks:{color:function(e){return"light"===e.mode?"#0059b2":"white"},fontSize:"0.9rem"},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,textAlign:"center",color:function(e){return"light"===e.mode?"#0059b2":"white"},fontSize:"1.25rem"},menuTitle:{color:function(e){return"light"===e.mode?"#0059b2":"white"}},appBar:{top:0,width:"100%",zIndex:10,backgroundColor:function(e){return"light"===e.mode?"#F5F5F5":"#001e3c"}},drawer:{width:240},drawerPaper:{width:240,color:function(e){return"dark"===e.mode?"white":"black"},backgroundColor:function(e){return"light"===e.mode?"#F5F5F5":"#001e3c"}},menuIcon:{color:function(e){return"light"===e.mode?"#0059b2":"white"}},brightness4Icon:{color:"white"}}}));function G(e){var n=e.mode,t=e.setMode,r=e.menu,a=void 0===r?[]:r,i=e.handleMenuSelection,l=(0,c.useState)(!1),d=(0,o.Z)(l,2),m=d[0],u=d[1],p=(0,c.useState)(null),f=(0,o.Z)(p,2),g=f[0],h=f[1],b=D({mode:n}),x=function(){u(!m)},w=function(){h(null)};return s().createElement("div",{className:b.root},s().createElement(F.Z,{position:"static",className:b.appBar},s().createElement(A.Z,null,s().createElement(z.Z,{onClick:x,edge:"start",className:b.menuButton},s().createElement(j.Z,{className:b.menuIcon})),s().createElement(H.Z,{xsDown:!0},s().createElement(M.Z,{variant:"subtitle1",className:b.menuTitle},"Menu")),s().createElement(M.Z,{variant:"h6",className:b.title},"MicroMesh"),s().createElement(z.Z,{onClick:function(){var e="light"===n?"dark":"light";t(e),localStorage.setItem("mode",e)}},"light"===n?s().createElement(O.Z,null):s().createElement(B.Z,{className:b.brightness4Icon})),s().createElement(z.Z,{onClick:function(e){h(e.currentTarget)}},s().createElement(M.Z,{variant:"subtitle1",className:b.otherLinks},"Related Apps")),s().createElement(_.Z,{anchorEl:g,keepMounted:!0,open:Boolean(g),onClose:w,className:b.menu},s().createElement(L.Z,{onClick:w,component:"a",href:"https://madhavms.github.io/widget-showcase",target:"_blank",rel:"noopener noreferrer"},"Showcase App"),s().createElement(L.Z,{onClick:w,component:"a",href:"https://madhavms.github.io/onboarding-app",target:"_blank",rel:"noopener noreferrer"},"Onboarding App")))),s().createElement(J.ZP,{className:b.drawer,classes:{paper:b.drawerPaper},open:m,onClose:x},s().createElement(P.Z,null,0!==a.length&&a.map((function(e){return s().createElement(R.Z,{key:e.appId,button:!0,onClick:function(n){return i(n,e.appId,u)}},s().createElement(W.Z,{primary:e.label}))})))))}var V=t(8721);const K=function(e){var n=e.children,t=e.style,r=e.placeholder,a=(0,c.useState)(null),i=(0,o.Z)(a,2),l=i[0],m=i[1],u=(0,c.useRef)(),p=(0,c.useState)(!1),f=(0,o.Z)(p,2),g=f[0],h=f[1];return(0,c.useEffect)((function(){var e=u.current;m(e.attachShadow({mode:"open"}));var n=document.createElement("style");n.innerHTML="div { display:none;}",e.shadowRoot.appendChild(n)}),[]),(0,c.useEffect)((function(){if(t){h(!0);var e=u.current,n=document.createElement("style");n.innerHTML=t.innerHTML+"div { display:block;}",e.shadowRoot.appendChild(n)}}),[t]),s().createElement(c.Fragment,null,s().createElement("div",{ref:u,className:"host-node-".concat((0,V.Z)())}),l&&(0,d.createPortal)(n,l),!g&&r)};var Y=t(4465);const q=function(){return s().createElement("div",{className:"text-center mt-4"})};var Q=t(3832),U=t(9659),X=t(2516),$=t(551),ee=t(9956),ne=t(1749),te=(0,C.Z)((function(e){return{footer:{padding:e.spacing(3,2),marginTop:"auto",color:function(e){return"dark"===e.mode?"white":"black"},backgroundColor:function(e){return"dark"===e.mode?"#132f4c":"#FAFAFA"},textAlign:"center"},link:{color:function(e){return"dark"===e.mode?"#90CAF9":"#2196F3"},margin:e.spacing(.8)},mediumIcon:{margin:"0px",height:"28px",width:"28px"}}}));function re(e){var n=e.classes;return s().createElement("img",{src:"https://raw.githubusercontent.com/madhavms/micromesh/main/hostApp/img/icons8-medium.svg",alt:"Medium",className:n.mediumIcon})}function oe(e){var n=e.mode,t=te({mode:n});return s().createElement("footer",{className:t.footer},s().createElement(Q.Z,{maxWidth:"sm"},s().createElement(ne.Z,{container:!0,alignItems:"center",justifyContent:"center"},s().createElement(ne.Z,{item:!0},s().createElement(M.Z,{variant:"body1"},"MicroMesh © ",(new Date).getFullYear())),s().createElement(ne.Z,{item:!0},s().createElement(ee.Z,null,s().createElement(U.Z,{href:"https://github.com/madhavms/react-host-remote",target:"_blank",rel:"noopener noreferrer",className:t.link},s().createElement(X.Z,null)),s().createElement(U.Z,{href:"https://www.linkedin.com/in/madhavmanohars/",target:"_blank",rel:"noopener noreferrer",className:t.link},s().createElement($.Z,null)),s().createElement(U.Z,{href:"https://medium.com/@madhavmanohar.s",target:"_blank",rel:"noopener noreferrer",className:t.link},s().createElement(re,{classes:t})))))))}var ae=t(4942),ie=t(9895),le=(0,C.Z)((function(e){var n;return{container:(n={backgroundColor:function(e){return"dark"===e.mode?"#132f4c":"#FAFAFA"},color:function(e){return"dark"===e.mode?"#FFFFFF":"#333333"},padding:e.spacing(3),boxShadow:"0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)",transition:"box-shadow 0.4s ease-in-out",border:"none"},(0,ae.Z)(n,e.breakpoints.down("sm"),{maxWidth:"80vw"}),(0,ae.Z)(n,e.breakpoints.down("xs"),{maxWidth:"40ch"}),n),title:(0,ae.Z)({fontSize:"1.3rem",fontWeight:"bold",marginBottom:e.spacing(2),textAlign:"center"},e.breakpoints.down("sm"),{fontSize:"1rem"}),text:(0,ae.Z)({fontSize:"1.15rem",lineHeight:"1.5"},e.breakpoints.down("sm"),{fontSize:"0.9rem"}),textContainer:{maxWidth:"800px",margin:"0 auto",padding:e.spacing(2)}}}));const ce=function(e){var n=e.mode,t=le({mode:n});return s().createElement(ee.Z,{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"},s().createElement(ie.Z,{className:t.container},s().createElement(M.Z,{variant:"h1",className:t.title},"MicroMesh Microfrontend Platform"),s().createElement(ee.Z,{className:t.textContainer},s().createElement(M.Z,{variant:"body1",className:t.text},"This platform is a micro-frontend solution that allows real-time discovery, loading, and orchestration of independently deployed applications in a micro-frontend compatible format."),s().createElement(ee.Z,{mt:2},s().createElement(M.Z,{variant:"body1",className:t.text},"To access the microfrontend widgets, use the global discovery menu on the left-hand side. The MicroMesh platform provides a user-friendly global discovery menu to facilitate access to onboarded microfrontend applications. Additionally, the platform incorporates a practical workspace feature with a tabbed navigation system, enabling users to interact with multiple applications concurrently in an organized manner.")))))};var se=t(65),de=t(1423),me=t(366),ue=(0,C.Z)((function(e){return{hiddenIndicator:{display:"none"},closeIcon:{color:"white"},closeIconSelected:{color:function(e){return"light"===e.mode?"#0059b2":"white"}},tabs:{flexGrow:1},tabsContainer:{backgroundColor:"black"},tab:{color:"white",backgroundColor:"black",fontSize:"0.8rem",marginTop:e.spacing(1),borderTopLeftRadius:e.spacing(1),borderTopRightRadius:e.spacing(1),borderBottom:"None","&:hover":{opacity:"0.7"},"&.Mui-selected:hover":{opacity:"1"},"&.Mui-selected":{backgroundColor:function(e){return"light"===e.mode?"#F5F5F5":"#001e3c"},color:function(e){return"light"===e.mode?"#0059b2":"white"}},"&.Mui-focusVisible":{backgroundColor:function(e){return"light"===e.mode?"#F5F5F5":"#001e3c"}},closeButton:{marginLeft:e.spacing(1),padding:0},labelContainer:{display:"flex",alignItems:"center"}}}}));const pe=function(e){var n,t=e.openTabs,r=e.selectedTab,o=e.mode,a=e.handleTabSelection,i=e.handleCloseTab,l=ue({mode:o});return console.log("openTabs?.selectedTab?.label",t[r],r),s().createElement("div",{className:l.tabsContainer},s().createElement(se.Z,{value:null===(n=t[r])||void 0===n?void 0:n.label,onChange:function(e,n){return a(e,n)},indicatorColor:"primary",textColor:"primary",classes:{indicator:l.hiddenIndicator},variant:"scrollable",scrollButtons:"auto"},t.map((function(e,n){return s().createElement(de.Z,{key:e.label,label:s().createElement("span",{className:l.labelContainer},e.label,s().createElement(z.Z,{className:l.closeButton,onClick:function(n){console.log("clicked",e.label),n.stopPropagation(),i(e.label)},size:"small"},s().createElement(me.Z,{fontSize:"small",className:r==n?l.closeIconSelected:l.closeIcon}))),value:e.label,className:l.tab})}))))},fe=function(e){var n=e.apps,r=e.menu;function i(e){return new Promise((function(n,t){var r=document.createElement("script");r.src=e,r.onload=n,r.onerror=t,document.head.appendChild(r)}))}var d=(0,c.useState)(null),m=(0,o.Z)(d,2),u=m[0],p=m[1],f=(0,c.useState)(localStorage.getItem("mode")||"light"),g=(0,o.Z)(f,2),h=g[0],b=g[1],x=(0,c.useState)(""),w=(0,o.Z)(x,2),v=w[0],k=w[1],Z=(0,c.useState)((0,V.Z)()),E=(0,o.Z)(Z,2),y=E[0],I=(E[1],(0,c.useState)(sessionStorage.getItem("selectedTab")||null)),S=(0,o.Z)(I,2),N=S[0],C=S[1],F=(0,c.useState)(JSON.parse(sessionStorage.getItem("openTabs"))||[]),A=(0,o.Z)(F,2),M=A[0],z=A[1],B=function(e){(0,Y.lW)({data:e.data,uuid:y})},O=function(e){return(0,a.Z)(l().mark((function n(){var r,o,a;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i(e.url);case 2:return r=window[e.remoteId],n.next=5,r.init(t.S.default);case 5:return n.next=7,window[e.remoteId].get("./".concat(e.appId));case 7:return o=n.sent,a=o(),n.abrupt("return",a);case 10:case"end":return n.stop()}}),n)})))};return(0,c.useEffect)((function(){var e,n,t=sessionStorage.getItem("currentAppId"),r=JSON.parse(sessionStorage.getItem("apps"))||[];"undefined"!==t&&t&&r.length&&(e=t,n=(JSON.parse(sessionStorage.getItem("apps"))||[]).filter((function(n){return n.appId===e}))[0],e&&M.length&&p(s().lazy(O(n))))}),[]),(0,c.useEffect)((function(){return(0,Y.Ld)(B),function(){(0,Y.r1)(B)}}),[]),s().createElement("div",{className:"".concat("light"===h?"body":"body-dark"," root-container")},s().createElement(pe,{openTabs:M,selectedTab:N,setSelectedTab:C,mode:h,handleTabSelection:function(e,t){var r=M.findIndex((function(e){return e.label===t})),o=M[r].appId;C(r),sessionStorage.setItem("selectedTab",r),M.find((function(e){return e.label===t}))||(z([].concat((0,T.Z)(M),[{appId:o,label:t}])),sessionStorage.setItem("openTabs",JSON.stringify([].concat((0,T.Z)(M),[{appId:o,label:t}]))));var a=n.filter((function(e){return e.appId===o}))[0];null!=a&&a.appId&&(p(s().lazy(O(a))),sessionStorage.setItem("currentAppId",a.appId))},handleCloseTab:function(e){var t=M.findIndex((function(n){return n.label===e})),r="";if(-1!==t){var o,a=(0,T.Z)(M);a.splice(t,1),a.length||p(null),z(a),sessionStorage.setItem("openTabs",JSON.stringify(a)),N===t?(C(Math.max(t-1,0)),sessionStorage.setItem("selectedTab",Math.max(t-1,0)),r=a[Math.max(t-1,0)]):N>t&&(C(N-1),sessionStorage.setItem("selectedTab",N-1),r=a[N-1]);var i=null===(o=r)||void 0===o?void 0:o.appId,l=n.filter((function(e){return e.appId===i}))[0];null!=l&&l.appId?(p(s().lazy(O(l))),sessionStorage.setItem("currentAppId",l.appId)):sessionStorage.setItem("currentAppId",null)}}}),s().createElement(G,{className:"nav",mode:h,setMode:b,menu:r,handleMenuSelection:function(e,t,r){r(!1);var o=M.find((function(e){return e.appId===t})),a=e.target.innerText;if(o){var i=a,l=1,c=M.filter((function(e){return e.label.startsWith(a)}));c.length>0&&(l=c.length+1,i="".concat(a," (").concat(l-1,")"));var d=[].concat((0,T.Z)(M),[{appId:t,label:i}]);z(d),sessionStorage.setItem("openTabs",JSON.stringify(d)),C(d.length-1),sessionStorage.setItem("selectedTab",d.length-1)}else{var m=[].concat((0,T.Z)(M),[{appId:t,label:a}]);z(m),sessionStorage.setItem("openTabs",JSON.stringify(m)),C(m.length-1),sessionStorage.setItem("selectedTab",m.length-1)}var u=n.filter((function(e){return e.appId===t}))[0];null!=u&&u.appId&&(p(s().lazy(O(u))),sessionStorage.setItem("currentAppId",u.appId))},selectedTab:N,openTabs:M,setSelectedTab:C}),s().createElement("div",{className:"light"===h?"container":"container-dark"},!M.length&&s().createElement(ce,{mode:h}),s().createElement("div",null,s().createElement(s().Suspense,{fallback:s().createElement(q,null)},s().createElement(K,{style:v},u?s().createElement(u,{setWidgetStyle:k,widgetStyle:v,uuid:y,mode:h}):s().createElement("div",null))))),s().createElement(oe,{mode:h}))},ge=function(e){var n=e.apps,t=e.menu;return s().createElement(S.VK,null,s().createElement(N.Z5,null,s().createElement(N.AW,{path:"*",element:s().createElement(fe,{apps:n,menu:t})})))};var he=document.getElementById("root");function be(){return xe.apply(this,arguments)}function xe(){return(xe=(0,a.Z)(l().mark((function e(){var n,t,a,i;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([fetch("".concat("https://micromeshcloudrun-msy6pdfnna-ew.a.run.app","/widgets")).then((function(e){return e.json()})),fetch("".concat("https://micromeshcloudrun-msy6pdfnna-ew.a.run.app","/menu")).then((function(e){return e.json()}))]);case 2:return n=e.sent,t=(0,o.Z)(n,2),a=t[0],i=t[1],"Not Found"===a.detail?(sessionStorage.setItem("apps",JSON.stringify([])),(0,r.Z)("apps")):sessionStorage.setItem("apps",JSON.stringify(a)),"Not Found"===i.detail&&(0,r.Z)("menu"),e.abrupt("return",{apps:a,menu:i});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function we(){return(we=(0,a.Z)(l().mark((function e(){var n,t,r;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,be();case 2:n=e.sent,t=n.apps,r=n.menu,m().render(s().createElement(ge,{apps:t,menu:r}),he);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){we.apply(this,arguments)}()},28:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(8081),o=t.n(r),a=t(3645),i=t.n(a)()(o());i.push([e.id,".fin-widget {\n  width: 250px;\n  margin-top: 20px;\n}\n\n* {\nmargin:0px;\n}\n\n\n.redbutton {\n  background-color: #f44336;\n  padding: 15px;\n  border-radius: 10px;\n  color: white;\n  font-weight: bold;\n  font-size: 15px;\n} /* Red */\n\n.rounded-lg {\n  border-radius: 0.5rem;\n}\n\n.shadow-md {\n  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n}\n\n.p-4 {\n  padding: 40px;\n}\n\n.bg-gray-800 {\n  background-color: rgb(31 41 55);\n}\n\n.w-64 {\n  width: 14rem; /* 256px */\n}\n\n.h-52px {\n  height: 52px;\n}\n\n.m-auto {\n  margin: auto;\n}\n\n.mt-5 {\n  margin-top: 1.25rem; /* 20px */\n}\n\n.text-2xs {\n  font-size: 0.7rem;\n  line-height: 0.75rem;\n}\n\n.text-sm {\n  font-size: 0.875rem; /* 14px */\n  line-height: 1.25rem; /* 20px */\n}\n\n.text-white {\n  color: white;\n}\n\n.font-bold {\n  font-weight: bold;\n}\n\n.text-gray-400 {\n  color: rgb(156 163 175);\n}\n\nmt-1 {\n  margin-top: 0.25rem;\n}\n\n.ml-1 {\n  margin-left: 0.25rem; /* 4px */\n}\n\n.flex {\n  display: flex;\n}\n\n.flex-row {\n  flex-direction: row;\n}\n\n.justify-between {\n  justify-content: space-between;\n}\n\n.self-center {\n  align-self: center;\n}\n\n.text-2xl {\n  font-size: 1.5rem; /* 24px */\n  line-height: 2rem; /* 32px */\n}\n\n.items-center {\n  align-items: center;\n}\n\n.flex-col {\n  flex-direction: column;\n}\n\n.text-right {\n  text-align: right;\n}\n\n.text-red-500 {\n  color: rgb(239 68 68);\n}\n\n.text-green-500 {\n  color: rgb(34 197 94);\n}\n\n.ui-sans-serif {\n  font-family: ui-sans-serif;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  background: #FAFAFA;\n  gap:10px;\n  margin-top: 10vh;\n}\n\n.body {\n  background: #FAFAFA;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n}\n\n.body-dark {\n  background: #132f4c;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n}\n\n.light {\n  background-color: #9BB9D4;\n}\n\n.dark {\n  background-color: #2C2F3C;\n}\n\n.container-dark {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  background: #132f4c;\n  overflow: scroll;\n  gap:10px;\n  margin-top: 10vh;\n}\n\n.select-dark {\n  width: 240px;\n  padding: 15px;\n  margin-top: 30px;\n  font-weight: bold;\n  text-align: center;\n  font-size: 1rem;\n  color: #ffffff; /* text color */\n  background-color: #333333; /* dropdown background color */\n  border: 1px solid #ffffff; /* border color */\n}\n\n.select-dark option {\n  color: #ffffff; /* option text color */\n  background-color: #212121; /* option background color */\n}\n\n.select {\n  width: 240px;\n  padding: 15px;\n  margin-top: 30px;\n  font-weight: bold;\n  text-align: center;\n  font-size: 1rem;\n  color: #212121; /* text color */\n  background-color: #ffffff; /* dropdown background color */\n  border: 1px solid #212121; /* border color */\n}\n\n.select option {\n  color: #212121; /* option text color */\n  background-color: #ffffff; /* option background color */\n}\n\n\n.flex-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.spacer {\n  width: 100px;\n  height: 100px;\n  margin: 10px;\n}\n\n.image {\n  margin: 10px;\n  width: 30px;\n  height: 30px;\n}\n\n.image:hover {\n  cursor: pointer;\n}\n\n.cursor:hover {\n  cursor: pointer;\n}\n\n.grid-container {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: 1fr;\n  grid-gap: 16px;\n  margin-bottom: 15px;\n}\n\nbody {\n  background: #f5f5f5;\n}\n\n/* styles.css */\nhtml,\nbody,\n#root,\n.root-container {\n  height: 100%;\n}\n\n.root-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.footer {\n  margin-top: auto;\n}\n",""]);const l=i}}]);