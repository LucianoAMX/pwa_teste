(function(e){function t(t){for(var r,i,s=t[0],u=t[1],c=t[2],l=0,f=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a=[];function i(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"5872b861"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=i(e);var c=new Error;a=function(t){u.onerror=u.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",c.name="ChunkLoadError",c.type=r,c.request=a,n[1](c)}o[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var d=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"01d7":function(e,t,n){},"034f":function(e,t,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),n("router-link",{attrs:{to:"/about"}},[e._v("Tabela")])],1),n("router-view"),n("v-snackbar",{attrs:{bottom:"",right:"",value:e.updateExists,timeout:-1,color:"primary"}},[e._v(" An update is available "),n("v-btn",{attrs:{text:""},on:{click:e.refreshApp}},[e._v(" Update ")])],1)],1)},a=[],i={data:function(){return{refreshing:!1,registration:null,updateExists:!1}},created:function(){var e=this;document.addEventListener("swUpdated",this.updateAvailable,{once:!0}),navigator.serviceWorker.addEventListener("controllerchange",(function(){e.refreshing||(e.refreshing=!0,window.location.reload())}))},methods:{updateAvailable:function(e){this.registration=e.detail,this.updateExists=!0},refreshApp:function(){this.updateExists=!1,this.registration&&this.registration.waiting&&this.registration.waiting.postMessage({type:"SKIP_WAITING"})}}},s={name:"App",data:function(){return{}},mixins:[i]},u=s,c=(n("034f"),n("2877")),l=Object(c["a"])(u,o,a,!1,null,null,null),d=l.exports,f=n("9483");Object(f["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(e){console.log("New content is available; please refresh."),document.dispatchEvent(new CustomEvent("swUpdated",{detail:e}))},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7");var p=n("8c4f"),v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("img",{attrs:{alt:"Vue logo",width:"150px",height:"150px",src:n("cf05")}}),r("HelloWorld",{attrs:{msg:"bem vindo ao PWA"}})],1)},g=[],h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),n("p",[e._v(" https://dev.to/drbragg/handling-service-worker-updates-in-your-vue-pwa-1pip ")])])},m=[],b={name:"HelloWorld",props:{msg:String}},w=b,y=(n("6c80"),Object(c["a"])(w,h,m,!1,null,"b4e28aba",null)),_=y.exports,x={name:"Home",components:{HelloWorld:_}},E=x,O=Object(c["a"])(E,v,g,!1,null,null,null),j=O.exports;r["default"].use(p["a"]);var k=[{path:"/",name:"Home",component:j},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],A=new p["a"]({mode:"history",base:"/",routes:k}),P=A,S=n("2f62");r["default"].use(S["a"]);var T=new S["a"].Store({state:{dialog:!1},getters:{get_dialog:function(e){return e.dialog}},mutations:{SET_DIALOG:function(e,t){e.dialog=t}},actions:{set_dialog:function(e,t){var n=e.commit;n("SET_DIALOG",t)}},modules:{}}),C=n("ce5b"),H=n.n(C);n("bf40");r["default"].use(H.a);var L=new H.a({});r["default"].config.productionTip=!1,new r["default"]({router:P,store:T,vuetify:L,render:function(e){return e(d)}}).$mount("#app")},"6c80":function(e,t,n){"use strict";var r=n("01d7"),o=n.n(r);o.a},"85ec":function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.7be70baa.png"}});
//# sourceMappingURL=app.3e29ca45.js.map