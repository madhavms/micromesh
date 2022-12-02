(self.webpackChunkremote=self.webpackChunkremote||[]).push([[450],{1359:(e,t,n)=>{"use strict";n.r(t);var s=n(1369),r=n.n(s),a=n(7791),o=n(8444),c=n(824),l=n.n(c),i=n(1320),u=n.n(i),m=n(5007),d=function(){return r().createElement("div",{draggable:!0,className:"flex"},r().createElement(f,null),r().createElement("img",{className:"image",src:"https://gist.githubusercontent.com/madhavms/8cb87494048689fe98177ed2bb6ba329/raw/4d5b97da61310840957cf83fc101004f117a9947/trashcan.svg"}))},f=function(){return r().createElement("div",null,r().createElement("div",{className:"quote rounded-lg shadow-md p-4 bg-gray-800 w-64 h-52px"},r().createElement("span",{className:"text-white"},"Sorry unable to load data. ",r().createElement("br",null),"Please contact support.",r().createElement("br",null)," (+44 0000 000000)")))};const j=function(e){var t=e.stock,n=e.quote,s=e.varColor;return r().createElement("div",{className:"flex relative"},r().createElement("div",{className:"quote rounded-lg shadow-md p-4 bg-gray-800 w-64"},r().createElement("span",{className:"quoteSymbol text-sm text-white font-bold"},e.symbol),r().createElement("span",{className:"quoteSymbol ui-sans-serif text-2xs text-gray-400 ml-1"},t.name),r().createElement("span",{className:"quoteSymbol ui-sans-serif text-2xs text-gray-400 ml-1"},"(",t.stockExchange,")"),r().createElement("div",{className:"quote flex flex-row justify-between mt-1"},r().createElement("div",{className:"quotePrice ui-sans-serif self-center text-2xl font-bold items-center text-white"},"$",n.price),r().createElement("div",{className:"flex flex-col text-right"},r().createElement("div",{className:"quoteVar "+s},n.var,"%"),r().createElement("div",{className:"quoteTime ui-sans-serif text-right text-2xs text-gray-400"},n.time)))),r().createElement("img",{value:e.symbol,onClick:e.handleDelete,className:"image",src:"https://gist.githubusercontent.com/madhavms/8cb87494048689fe98177ed2bb6ba329/raw/4d5b97da61310840957cf83fc101004f117a9947/trashcan.svg"}))},p=function(e){var t=(0,s.useState)(""),n=(0,o.Z)(t,2),c=n[0],i=n[1],f=(0,s.useState)(!1),p=(0,o.Z)(f,2),h=p[0],v=p[1],b=(0,s.useState)({price:"--",var:"--",time:"--"}),g=(0,o.Z)(b,2),x=g[0],y=g[1],k=(0,s.useState)({stockExchange:"N/A",name:"N/A"}),w=(0,o.Z)(k,2),E=w[0],z=w[1];(0,s.useEffect)((function(){var e=setInterval((function(){i((new Date).getTime())}),3e3);return function(){return clearInterval(e)}}),[]),(0,s.useEffect)((function(){(0,a.Z)(l().mark((function t(){var n,s,r;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m.ZP.get("http://localhost:8000/stocks/".concat(e.symbol,"?v=").concat(c));case 3:if(n=t.sent,s=n.data,v(!1),s&&null!=e&&e.symbol){t.next=8;break}return t.abrupt("return");case 8:z({stockExchange:(r=s).stock_exchange,name:r.name}),y({price:r.last,var:Math.trunc(1e4*-(1-r.last/r.open))/100,time:u()(r.date).format("YYYY-MM-DD HH:mm")}),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),v(!0);case 16:case"end":return t.stop()}}),t,null,[[0,13]])})))()}),[c]);var N=x.var<0?"text-red-500":"text-green-500";return e.symbol&&!h?r().createElement(j,{props:e,stock:E,quote:x,varColor:N,symbol:e.symbol,handleDelete:e.handleDelete}):r().createElement(d,null)},h=function(e){return r().createElement("div",null,r().createElement("h1",{className:"text-center"},"Remote Application"))};var v=n(9679),b=n.n(v),g=n(1892),x=n.n(g),y=n(5760),k=n.n(y),w=n(8311),E=n.n(w),z=n(8192),N=n.n(z),S=n(8060),q=n.n(S),C=n(4865),T=n.n(C),M=n(8519),Z={};Z.styleTagTransform=T(),Z.setAttributes=N(),Z.insert=E().bind(null,"head"),Z.domAPI=k(),Z.insertStyleElement=q(),x()(M.Z,Z),M.Z&&M.Z.locals&&M.Z.locals;var A=document.getElementById("root");b().render(r().createElement(h,null),A);var D=document.querySelectorAll(".fin-widget"),I=function(e){return r().createElement(r().Suspense,{fallback:"Loading Button"},r().createElement(p,{symbol:e.symbol}))};D.forEach((function(e){b().render(r().createElement(I,{symbol:e.dataset.symbol}),e)}))},8519:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var s=n(4933),r=n.n(s),a=n(3476),o=n.n(a)()(r());o.push([e.id,".rounded-lg {\n  border-radius: 0.5rem;\n}\n\n.shadow-md {\n  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n}\n\n.p-4 {\n  padding: 40px;\n}\n\n.bg-gray-800 {\n  background-color: rgb(31 41 55);\n}\n\n.w-64 {\n  width: 14rem; /* 256px */\n}\n\n.m-auto {\n  margin: auto;\n}\n\n.mt-5 {\n  margin-top: 1.25rem; /* 20px */\n}\n\n.text-2xs {\n  font-size: 0.7rem;\n  line-height: 0.75rem;\n}\n\n.text-sm {\n  font-size: 0.875rem; /* 14px */\n  line-height: 1.25rem; /* 20px */\n}\n\n.text-white {\n  color: white;\n}\n\n.font-bold {\n  font-weight: bold;\n}\n\n.text-gray-400 {\n  color: rgb(156 163 175);\n}\n\n.ml-1 {\n  margin-left: 0.25rem; /* 4px */\n}\n\n.flex {\n  display: flex;\n}\n\n.flex-row {\n  flex-direction: row;\n}\n\n.justify-between {\n  justify-content: space-between;\n}\n\n.self-center {\n  align-self: center;\n}\n\n.text-2xl {\n  font-size: 1.5rem; /* 24px */\n  line-height: 2rem; /* 32px */\n}\n\n.items-center {\n  align-items: center;\n}\n\n.flex-col {\n  flex-direction: column;\n}\n\n.text-right {\n  text-align: right;\n}\n\n.text-red-500 {\n  color: rgb(239 68 68);\n}\n\n.text-green-500 {\n  color: rgb(34 197 94);\n}\n\n.ui-sans-serif {\n  font-family: ui-sans-serif;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.relative {\n  position: relative;\n}\n",""]);const c=o},3476:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",s=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),s&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),s&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,s,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(s)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(o[l]=!0)}for(var i=0;i<e.length;i++){var u=[].concat(e[i]);s&&o[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),t.push(u))}},t}},4933:e=>{"use strict";e.exports=function(e){return e[1]}},5126:(e,t,n)=>{var s={"./af":1009,"./af.js":1009,"./ar":8769,"./ar-dz":3739,"./ar-dz.js":3739,"./ar-kw":3745,"./ar-kw.js":3745,"./ar-ly":9576,"./ar-ly.js":9576,"./ar-ma":7408,"./ar-ma.js":7408,"./ar-sa":8781,"./ar-sa.js":8781,"./ar-tn":7856,"./ar-tn.js":7856,"./ar.js":8769,"./az":2030,"./az.js":2030,"./be":6476,"./be.js":6476,"./bg":5304,"./bg.js":5304,"./bm":8125,"./bm.js":8125,"./bn":34,"./bn-bd":9835,"./bn-bd.js":9835,"./bn.js":34,"./bo":4082,"./bo.js":4082,"./br":8317,"./br.js":8317,"./bs":3107,"./bs.js":3107,"./ca":8272,"./ca.js":8272,"./cs":8567,"./cs.js":8567,"./cv":1583,"./cv.js":1583,"./cy":76,"./cy.js":76,"./da":1760,"./da.js":1760,"./de":8973,"./de-at":3214,"./de-at.js":3214,"./de-ch":4728,"./de-ch.js":4728,"./de.js":8973,"./dv":4053,"./dv.js":4053,"./el":7499,"./el.js":7499,"./en-au":7876,"./en-au.js":7876,"./en-ca":7010,"./en-ca.js":7010,"./en-gb":4239,"./en-gb.js":4239,"./en-ie":9830,"./en-ie.js":9830,"./en-il":8438,"./en-il.js":8438,"./en-in":5322,"./en-in.js":5322,"./en-nz":3264,"./en-nz.js":3264,"./en-sg":5449,"./en-sg.js":5449,"./eo":9486,"./eo.js":9486,"./es":2430,"./es-do":6310,"./es-do.js":6310,"./es-mx":7038,"./es-mx.js":7038,"./es-us":3099,"./es-us.js":3099,"./es.js":2430,"./et":4975,"./et.js":4975,"./eu":7063,"./eu.js":7063,"./fa":8073,"./fa.js":8073,"./fi":957,"./fi.js":957,"./fil":8764,"./fil.js":8764,"./fo":1775,"./fo.js":1775,"./fr":4179,"./fr-ca":4306,"./fr-ca.js":4306,"./fr-ch":3791,"./fr-ch.js":3791,"./fr.js":4179,"./fy":7014,"./fy.js":7014,"./ga":6911,"./ga.js":6911,"./gd":2958,"./gd.js":2958,"./gl":7344,"./gl.js":7344,"./gom-deva":3161,"./gom-deva.js":3161,"./gom-latn":5798,"./gom-latn.js":5798,"./gu":8485,"./gu.js":8485,"./he":7917,"./he.js":7917,"./hi":2159,"./hi.js":2159,"./hr":5842,"./hr.js":5842,"./hu":5,"./hu.js":5,"./hy-am":1312,"./hy-am.js":1312,"./id":781,"./id.js":781,"./is":4101,"./is.js":4101,"./it":3467,"./it-ch":4759,"./it-ch.js":4759,"./it.js":3467,"./ja":4164,"./ja.js":4164,"./jv":79,"./jv.js":79,"./ka":7036,"./ka.js":7036,"./kk":2022,"./kk.js":2022,"./km":3418,"./km.js":3418,"./kn":3655,"./kn.js":3655,"./ko":986,"./ko.js":986,"./ku":1902,"./ku.js":1902,"./ky":4604,"./ky.js":4604,"./lb":9026,"./lb.js":9026,"./lo":537,"./lo.js":537,"./lt":2288,"./lt.js":2288,"./lv":1495,"./lv.js":1495,"./me":690,"./me.js":690,"./mi":2571,"./mi.js":2571,"./mk":3959,"./mk.js":3959,"./ml":7225,"./ml.js":7225,"./mn":88,"./mn.js":88,"./mr":6622,"./mr.js":6622,"./ms":1070,"./ms-my":8899,"./ms-my.js":8899,"./ms.js":1070,"./mt":3931,"./mt.js":3931,"./my":5393,"./my.js":5393,"./nb":4274,"./nb.js":4274,"./ne":8914,"./ne.js":8914,"./nl":3114,"./nl-be":8479,"./nl-be.js":8479,"./nl.js":3114,"./nn":4513,"./nn.js":4513,"./oc-lnc":6549,"./oc-lnc.js":6549,"./pa-in":8264,"./pa-in.js":8264,"./pl":2848,"./pl.js":2848,"./pt":899,"./pt-br":5077,"./pt-br.js":5077,"./pt.js":899,"./ro":2512,"./ro.js":2512,"./ru":1753,"./ru.js":1753,"./sd":6840,"./sd.js":6840,"./se":8362,"./se.js":8362,"./si":464,"./si.js":464,"./sk":6324,"./sk.js":6324,"./sl":1963,"./sl.js":1963,"./sq":3039,"./sq.js":3039,"./sr":3454,"./sr-cyrl":466,"./sr-cyrl.js":466,"./sr.js":3454,"./ss":5158,"./ss.js":5158,"./sv":8859,"./sv.js":8859,"./sw":7594,"./sw.js":7594,"./ta":6915,"./ta.js":6915,"./te":5677,"./te.js":5677,"./tet":2154,"./tet.js":2154,"./tg":4098,"./tg.js":4098,"./th":9071,"./th.js":9071,"./tk":9381,"./tk.js":9381,"./tl-ph":1869,"./tl-ph.js":1869,"./tlh":2346,"./tlh.js":2346,"./tr":1483,"./tr.js":1483,"./tzl":266,"./tzl.js":266,"./tzm":3138,"./tzm-latn":2960,"./tzm-latn.js":2960,"./tzm.js":3138,"./ug-cn":9456,"./ug-cn.js":9456,"./uk":805,"./uk.js":805,"./ur":1127,"./ur.js":1127,"./uz":9628,"./uz-latn":840,"./uz-latn.js":840,"./uz.js":9628,"./vi":6962,"./vi.js":6962,"./x-pseudo":9257,"./x-pseudo.js":9257,"./yo":2423,"./yo.js":2423,"./zh-cn":1002,"./zh-cn.js":1002,"./zh-hk":6046,"./zh-hk.js":6046,"./zh-mo":6903,"./zh-mo.js":6903,"./zh-tw":4710,"./zh-tw.js":4710};function r(e){var t=a(e);return n(t)}function a(e){if(!n.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}r.keys=function(){return Object.keys(s)},r.resolve=a,e.exports=r,r.id=5126},1892:e=>{"use strict";var t=[];function n(e){for(var n=-1,s=0;s<t.length;s++)if(t[s].identifier===e){n=s;break}return n}function s(e,s){for(var a={},o=[],c=0;c<e.length;c++){var l=e[c],i=s.base?l[0]+s.base:l[0],u=a[i]||0,m="".concat(i," ").concat(u);a[i]=u+1;var d=n(m),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==d)t[d].references++,t[d].updater(f);else{var j=r(f,s);s.byIndex=c,t.splice(c,0,{identifier:m,updater:j,references:1})}o.push(m)}return o}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=s(e=e||[],r=r||{});return function(e){e=e||[];for(var o=0;o<a.length;o++){var c=n(a[o]);t[c].references--}for(var l=s(e,r),i=0;i<a.length;i++){var u=n(a[i]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=l}}},8311:e=>{"use strict";var t={};e.exports=function(e,n){var s=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(n)}},8060:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},8192:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},5760:e=>{"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var s="";n.supports&&(s+="@supports (".concat(n.supports,") {")),n.media&&(s+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(s+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),s+=n.css,r&&(s+="}"),n.media&&(s+="}"),n.supports&&(s+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(s+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(s,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},4865:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}}]);