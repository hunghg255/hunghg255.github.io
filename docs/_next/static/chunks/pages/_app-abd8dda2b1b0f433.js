(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6489:function(e,t){"use strict";/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */ t.parse=function(e,t){if("string"!=typeof e)throw TypeError("argument str must be a string");for(var r={},o=e.split(";"),i=(t||{}).decode||n,s=0;s<o.length;s++){var c=o[s],l=c.indexOf("=");if(!(l<0)){var u=c.substring(0,l).trim();if(void 0==r[u]){var d=c.substring(l+1,c.length).trim();'"'===d[0]&&(d=d.slice(1,-1)),r[u]=a(d,i)}}}return r},t.serialize=function(e,t,n){var a=n||{},i=a.encode||r;if("function"!=typeof i)throw TypeError("option encode is invalid");if(!o.test(e))throw TypeError("argument name is invalid");var s=i(t);if(s&&!o.test(s))throw TypeError("argument val is invalid");var c=e+"="+s;if(null!=a.maxAge){var l=a.maxAge-0;if(isNaN(l)||!isFinite(l))throw TypeError("option maxAge is invalid");c+="; Max-Age="+Math.floor(l)}if(a.domain){if(!o.test(a.domain))throw TypeError("option domain is invalid");c+="; Domain="+a.domain}if(a.path){if(!o.test(a.path))throw TypeError("option path is invalid");c+="; Path="+a.path}if(a.expires){if("function"!=typeof a.expires.toUTCString)throw TypeError("option expires is invalid");c+="; Expires="+a.expires.toUTCString()}if(a.httpOnly&&(c+="; HttpOnly"),a.secure&&(c+="; Secure"),a.sameSite){var u="string"==typeof a.sameSite?a.sameSite.toLowerCase():a.sameSite;switch(u){case!0:case"strict":c+="; SameSite=Strict";break;case"lax":c+="; SameSite=Lax";break;case"none":c+="; SameSite=None";break;default:throw TypeError("option sameSite is invalid")}}return c};var n=decodeURIComponent,r=encodeURIComponent,o=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function a(e,t){try{return t(e)}catch(n){return e}}},7041:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};Object.defineProperty(t,"__esModule",{value:!0}),t.checkCookies=t.hasCookie=t.removeCookies=t.deleteCookie=t.setCookies=t.setCookie=t.getCookie=t.getCookies=void 0;var a=n(6489),i=function(){return"undefined"!=typeof window},s=function(e){void 0===e&&(e="");try{var t=JSON.stringify(e);return/^[\{\[]/.test(t)?t:e}catch(n){return e}},c=function(e){if(e&&(t=e.req),!i())return t&&t.cookies?t.cookies:t&&t.headers&&t.headers.cookie?(0,a.parse)(t.headers.cookie):{};for(var t,n={},r=document.cookie?document.cookie.split("; "):[],o=0,s=r.length;o<s;o++){var c=r[o].split("="),l=c.slice(1).join("=");n[c[0]]=l}return n};t.getCookies=c;var l=function(e,n){var r,o,a=(0,t.getCookies)(n)[e];if(void 0!==a){return r=(o=a)?o.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent):o,"true"===r||"false"!==r&&("undefined"!==r?"null"===r?null:r:void 0)}};t.getCookie=l;var u=function(e,t,n){if(n){var c,l,u,d=n.req,f=n.res,$=o(n,["req","res"]);l=d,u=f,c=$}var h=(0,a.serialize)(e,s(t),r({path:"/"},c));if(i())document.cookie=h;else if(u&&l){var p=u.getHeader("Set-Cookie");if(Array.isArray(p)||(p=p?[String(p)]:[]),u.setHeader("Set-Cookie",p.concat(h)),l&&l.cookies){var v=l.cookies;""===t?delete v[e]:v[e]=s(t)}if(l&&l.headers&&l.headers.cookie){var v=(0,a.parse)(l.headers.cookie);""===t?delete v[e]:v[e]=s(t),l.headers.cookie=Object.entries(v).reduce(function(e,t){return e.concat("".concat(t[0],"=").concat(t[1],";"))},"")}}};t.setCookie=u;var d=function(e,n,r){return console.warn("[WARN]: setCookies was deprecated. It will be deleted in the new version. Use setCookie instead."),(0,t.setCookie)(e,n,r)};t.setCookies=d;var f=function(e,n){return(0,t.setCookie)(e,"",r(r({},n),{maxAge:-1}))};t.deleteCookie=f;var $=function(e,n){return console.warn("[WARN]: removeCookies was deprecated. It will be deleted in the new version. Use deleteCookie instead."),(0,t.deleteCookie)(e,n)};t.removeCookies=$;var h=function(e,n){return!!e&&(0,t.getCookies)(n).hasOwnProperty(e)};t.hasCookie=h;var p=function(e,n){return console.warn("[WARN]: checkCookies was deprecated. It will be deleted in the new version. Use hasCookie instead."),(0,t.hasCookie)(e,n)};t.checkCookies=p},6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(3359)}])},638:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(6856).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=i.default,a={loading:function(e){return e.error,e.isLoading,e.pastDelay,null}};if(r(e,Promise)?a.loader=function(){return e}:"function"==typeof e?a.loader=e:"object"==typeof e&&(a=o({},a,e)),(a=o({},a,t)).loadableGenerated&&delete(a=o({},a,a.loadableGenerated)).loadableGenerated,"boolean"==typeof a.ssr&&!a.suspense){if(!a.ssr)return delete a.ssr,s(n,a);delete a.ssr}return n(a)},t.noSSR=s;var o=n(6495).Z,a=n(2648).Z,i=(a(n(7294)),a(n(4302)));function s(e,t){return delete t.webpack,delete t.modules,e(t)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6319:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var r=(0,n(2648).Z)(n(7294)).default.createContext(null);t.LoadableContext=r},4302:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(9658).Z,o=n(7222).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(6495).Z,i=(0,n(2648).Z)(n(7294)),s=n(6319),c=n(7294).useSyncExternalStore,l=[],u=[],d=!1;function f(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then(function(e){return n.loading=!1,n.loaded=e,e}).catch(function(e){throw n.loading=!1,n.error=e,e}),n}var $=function(){function e(t,n){r(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return o(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"==typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout(function(){e._update({pastDelay:!0})},n.delay)),"number"==typeof n.timeout&&(this._timeout=setTimeout(function(){e._update({timedOut:!0})},n.timeout))),this._res.promise.then(function(){e._update({}),e._clearTimeouts()}).catch(function(t){e._update({}),e._clearTimeouts()}),this._update({})}},{key:"_update",value:function(e){this._state=a({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(function(e){return e()})}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function h(e){return function(e,t){var n=function(){if(!h){var t=new $(e,f);h={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return h.promise()},r=function(){n();var e=i.default.useContext(s.LoadableContext);e&&Array.isArray(f.modules)&&f.modules.forEach(function(t){e(t)})},o=function(e,t){r();var n=c(h.subscribe,h.getCurrentValue,h.getCurrentValue);return i.default.useImperativeHandle(t,function(){return{retry:h.retry}},[]),i.default.useMemo(function(){var t;return n.loading||n.error?i.default.createElement(f.loading,{isLoading:n.loading,pastDelay:n.pastDelay,timedOut:n.timedOut,error:n.error,retry:h.retry}):n.loaded?i.default.createElement((t=n.loaded)&&t.__esModule?t.default:t,e):null},[e,n])},l=function(e,t){return r(),i.default.createElement(f.lazy,a({},e,{ref:t}))},f=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);f.suspense&&(f.lazy=i.default.lazy(f.loader));var h=null;if(!d){var p=f.webpack?f.webpack():f.modules;p&&u.push(function(e){var t=!0,r=!1,o=void 0;try{for(var a,i=p[Symbol.iterator]();!(t=(a=i.next()).done);t=!0){var s=a.value;if(-1!==e.indexOf(s))return n()}}catch(c){r=!0,o=c}finally{try{t||null==i.return||i.return()}finally{if(r)throw o}}})}var v=f.suspense?l:o;return v.preload=function(){return n()},v.displayName="LoadableComponent",i.default.forwardRef(v)}(f,e)}function p(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then(function(){if(e.length)return p(e,t)})}h.preloadAll=function(){return new Promise(function(e,t){p(l).then(e,t)})},h.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(function(t){var n=function(){return d=!0,t()};p(u,e).then(n,n)})},window.__NEXT_PRELOADREADY=h.preloadReady,t.default=h},3359:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return O}});var r=n(4924),o=n(5893),a=n(5152),i=n.n(a),s=n(9008),c=n.n(s),l=n(7041),u=n(7294),d=n(3293),f=n(5154),$=n.n(f);function h(){var e=(0,u.useState)(!1),t=e[0],n=e[1];(0,u.useEffect)(function(){window.addEventListener("scroll",function(){window.scrollY>0?n(!0):n(!1)})},[t]);var r=function(){n(!1),(0,d.V)("header")};return(0,o.jsx)("div",{className:"".concat($().btnScrollTop," ").concat(t?$().btnScrollTopActive:""),children:(0,o.jsx)("button",{type:"button",onClick:r,"aria-label":"Button Scroll Top",children:(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",children:(0,o.jsx)("path",{d:"M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z"})})})})}var p=n(8038),v=n.n(p),m=n(9919),g=n.n(m);function b(e){var t=u.useRef(null),n=e.id,r=e.handleToggle,a=e.isChecked;return u.useEffect(function(){if(a){t&&t.current&&(t.current.checked=!0);return}t&&t.current&&(t.current.checked=!1)},[a]),(0,o.jsxs)("div",{className:g().checkboxIos,children:[(0,o.jsx)("input",{type:"checkbox",ref:t,id:"cbios-".concat(n),className:g().cbios,onChange:r}),(0,o.jsxs)("label",{htmlFor:"cbios-".concat(n),className:g().cbiosLabel,children:[(0,o.jsxs)("span",{className:g().btnToggleCircle,children:[(0,o.jsx)("span",{className:"".concat(g().btnCircle," ").concat(g().circle1)}),(0,o.jsx)("span",{className:"".concat(g().btnCircle," ").concat(g().circle2)}),(0,o.jsx)("span",{className:"".concat(g().btnCircle," ").concat(g().circle3)})]}),(0,o.jsx)("span",{className:"".concat(g().btnToggleStar," ").concat(g().star1)}),(0,o.jsx)("span",{className:"".concat(g().btnToggleStar," ").concat(g().star2)}),(0,o.jsx)("span",{className:"".concat(g().btnToggleStar," ").concat(g().star3)}),(0,o.jsx)("span",{className:"".concat(g().btnToggleStar," ").concat(g().star4)}),(0,o.jsx)("span",{className:"".concat(g().btnToggleStar," ").concat(g().star5)})]})]})}var x=n(6820),_=n(9498),k=n(1163),y=n.n(k),C=u.memo(function(e){var t=e.handleToggleDarkTheme,n=e.toggle,r=(0,k.useRouter)();return(0,o.jsx)("nav",{className:v().navBar,children:(0,o.jsx)("div",{className:"container",children:(0,o.jsxs)("ul",{className:v().navList,children:[(0,o.jsx)("li",{className:"".concat(v().navItem," ").concat(v().navItemLogo),onClick:function(){return r.push("/")},children:(0,o.jsx)(_.Z,{children:(0,o.jsx)(x.Z,{})})}),"/"===r.pathname?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("li",{className:v().navItem,onClick:function(){return(0,d.V)("sectionAbout")},children:"About me"}),(0,o.jsx)("li",{className:v().navItem,onClick:function(){return(0,d.V)("sectionPortfolio")},children:"Portfolio"})]}):(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("li",{className:v().navItem,onClick:function(){return y().push("/")},children:"Home"})}),(0,o.jsx)("li",{className:v().navItem,onClick:function(){return y().push("/blog")},children:"Blogs"}),(0,o.jsx)("li",{className:v().navItem,onClick:function(){return y().push("/contact")},children:"Contact"}),(0,o.jsx)("li",{className:v().navItem,children:(0,o.jsx)(b,{id:2,isChecked:n,handleToggle:t})})]})})})}),j=n(7723),S=n.n(j),w=n(6472),N=n.n(w);function I(e){return(0,o.jsxs)("div",{className:"".concat(N().btnBurger," ").concat(e.isToggle?N().btnBurgerActive:""),onClick:e.toggle,children:[(0,o.jsx)("div",{className:N().btnBurgerLine}),(0,o.jsx)("div",{className:N().btnBurgerLine}),(0,o.jsx)("div",{className:N().btnBurgerLine})]})}var T=u.memo(function(e){var t=e.toggle,n=e.handleToggleDarkTheme,r=(0,k.useRouter)(),a=(0,u.useState)(!1),i=a[0],s=a[1],c=function(){s(!i)};(0,u.useEffect)(function(){s(!1)},[r.pathname]),(0,u.useEffect)(function(){window.addEventListener("resize",function(){window.innerHeight>600&&s(!1)})},[]);var l=function(e){(0,d.V)(e),s(!1)};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("nav",{className:"".concat(S().navSideDraw," ").concat(i?S().navSideDrawActive:""),children:(0,o.jsx)("div",{className:"container",children:(0,o.jsxs)("ul",{className:S().navSideDrawList,children:[(0,o.jsx)("li",{className:"".concat(S().navSideDrawItem," ").concat(S().navSideDrawLogo),onClick:function(){return r.push("/")},children:(0,o.jsx)(_.Z,{children:(0,o.jsx)(x.Z,{})})}),(0,o.jsx)("li",{className:S().navSideDrawItem,children:(0,o.jsx)(I,{isToggle:i,toggle:c})})]})})}),(0,o.jsxs)("div",{className:"".concat(S().navSide," ").concat(i?S().navSideActive:""),children:[(0,o.jsxs)("ul",{className:"Nav__side--list",children:["/"===r.pathname?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("li",{className:S().navSideItem,onClick:function(){return l("sectionAbout")},children:"About me"}),(0,o.jsx)("li",{className:S().navSideItem,onClick:function(){return l("sectionPortfolio")},children:"Portfolio"})]}):(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("li",{className:S().navSideItem,onClick:function(){return y().push("/")},children:"Home"})}),(0,o.jsx)("li",{className:S().navSideItem,onClick:function(){return y().push("/blog")},children:"Blogs"}),(0,o.jsx)("li",{className:S().navSideItem,onClick:function(){return y().push("/contact")},children:"Contact"})]}),(0,o.jsx)("div",{className:S().btnToggle,children:(0,o.jsx)(b,{id:1,isChecked:t,handleToggle:n})})]})]})});function A(e){var t=(0,u.useState)("dark"===(0,l.getCookie)("data-theme")),n=t[0],r=t[1];(0,u.useEffect)(function(){"dark"===(0,l.getCookie)("data-theme")&&document.documentElement.setAttribute("data-theme","dark")},[]);var a=function(){!1===n?(null==localStorage||localStorage.setItem("data-theme","dark"),(0,l.setCookie)("data-theme","dark",{maxAge:2147483647}),document.documentElement.setAttribute("data-theme","dark"),r(!0)):((0,l.setCookie)("data-theme","light",{maxAge:2147483647}),document.documentElement.removeAttribute("data-theme"),r(!1))};return(0,o.jsxs)("div",{className:"Wrapper",id:"header",children:[(0,o.jsx)(C,{handleToggleDarkTheme:a,toggle:n}),(0,o.jsx)(T,{handleToggleDarkTheme:a,toggle:n}),(0,o.jsx)("main",{children:e.children}),(0,o.jsx)(h,{})]})}n(4831);var D=i()(function(){return n.e(782).then(n.bind(n,782))},{loadableGenerated:{webpack:function(){return[782]}},ssr:!1}),E=i()(function(){return n.e(521).then(n.bind(n,5521))},{loadableGenerated:{webpack:function(){return[5521]}},ssr:!1}),L=i()(function(){return n.e(841).then(n.bind(n,2841))},{loadableGenerated:{webpack:function(){return[2841]}},ssr:!1}),O=function(e){var t=e.Component,n=e.pageProps;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(c(),{children:[(0,o.jsx)("meta",{charSet:"utf-8"}),(0,o.jsx)("title",{children:"Hunghg | Front-end Developer"}),(0,o.jsx)("meta",{property:"og:type",content:"website"}),(0,o.jsx)("link",{rel:"shortcut icon",href:"/favicon.ico"}),(0,o.jsx)("meta",{name:"title",content:"Hunghg | Front-end Developer"}),(0,o.jsx)("meta",{name:"description",content:"I'm Hung an Front-end Developer. I got a bachelor of Electronics Telecommunication Engineering at Ha Noi University of Science and Technology (2015 - 2020)"}),(0,o.jsx)("meta",{property:"og:type",content:"website"}),(0,o.jsx)("meta",{property:"og:url",content:"https://hunghg.vercel.app/"}),(0,o.jsx)("meta",{property:"og:title",content:"Hunghg | Front-end Developer"}),(0,o.jsx)("meta",{property:"og:description",content:"I'm Hung an Front-end Developer. I got a bachelor of Electronics Telecommunication Engineering at Ha Noi University of Science and Technology (2015 - 2020)"}),(0,o.jsx)("meta",{property:"og:image",content:"https://res.cloudinary.com/hunghg255/image/upload/v1654956015/Screen_Shot_2022-06-07_at_11.25.34_bpnymt.png"}),(0,o.jsx)("meta",{property:"twitter:card",content:"summary_large_image"}),(0,o.jsx)("meta",{property:"twitter:url",content:"https://hunghg.vercel.app/"}),(0,o.jsx)("meta",{property:"twitter:title",content:"Hunghg | Front-end Developer"}),(0,o.jsx)("meta",{property:"twitter:description",content:"I'm Hung an Front-end Developer. I got a bachelor of Electronics Telecommunication Engineering at Ha Noi University of Science and Technology (2015 - 2020)"}),(0,o.jsx)("meta",{property:"twitter:image",content:"https://res.cloudinary.com/hunghg255/image/upload/v1654956015/Screen_Shot_2022-06-07_at_11.25.34_bpnymt.png"}),(0,o.jsx)("meta",{property:"og:image:type",content:"image/jpeg"})]}),(0,o.jsx)(A,{children:(0,o.jsx)(t,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){(0,r.Z)(e,t,n[t])})}return e}({},n))}),(0,o.jsx)(D,{}),(0,o.jsx)(E,{}),(0,o.jsx)(L,{})]})}},6820:function(e,t,n){"use strict";var r=n(5893);n(7294);var o=function(){return(0,r.jsx)("div",{className:"icon-logo",children:(0,r.jsxs)("svg",{viewBox:"0 0 304 304",width:60,fill:"none",children:[(0,r.jsx)("path",{className:"logo_circle__6ao4W",d:"M7 152C7 71.88 71.88 7 152 7c80.01 0 145 64.88 145 145 0 80.01-64.88 145-145 145C71.99 297 7 232.01 7 152Z",strokeWidth:14}),(0,r.jsx)("path",{className:"logo_letters__1_W2_",d:"M134.53 76v111.49a35.08 35.08 0 0 1-35.21 35.01C79.83 222.5 64 206.76 64 187.49c0-19.27 15.83-35.1 35.32-35.1h30.22l40.98.09h34.26c19.48 0 35.22-16.6 35.22-35.97a35.08 35.08 0 0 0-35.22-35.01c-19.48 0-35.22 15.74-35.22 35.01V229",strokeWidth:12})]})})};t.Z=o},9498:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,{Z:function(){return p}});var o=n(5893),a=n(7294),i=n(8774),s=n.n(i),c=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},l=["#4da1ff","#ffc24e","#59aa43","#ba53ff","#56acb8","#7764ed","#16d5ff","#00dfb7","#1d297f","#476055","#ee7420","#06c270","#ffb800","#ff3b3b",],u=function(){return l[Math.floor(Math.random()*l.length)]},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#FFC700";return{id:String(c(1e4,99999)),createdAt:Date.now(),color:e,size:c(15,30),style:{position:"absolute",top:c(0,100)+"%",left:c(0,100)+"%",zIndex:2}}},f=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=[];void 0===t&&(t=e,e=0);for(var o=e;o<t;o+=n)r.push(o);return r},$=function(e,t,n){var r=a.useRef(null),o=a.useRef(e);return a.useEffect(function(){o.current=e},[e]),a.useEffect(function(){if("number"==typeof t&&"number"==typeof n){var e=function(){var a=c(t,n);r.current=window.setTimeout(function(){o.current(),e()},a)};e()}return function(){return window.clearTimeout(r.current)}},[t,n]),a.useCallback(function(){window.clearTimeout(r.current)},[])};function h(e){var t=e.color,n=e.size,r=e.style;return(0,o.jsx)("span",{className:s().svgWrap,style:r,children:(0,o.jsx)("svg",{width:n,height:n,viewBox:"0 0 68 68",fill:"none",style:r,className:s().svg,children:(0,o.jsx)("path",{d:"M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z",fill:t})})})}var p=function(e){var t,n=e.children,i=function(e){if(Array.isArray(e))return e}(t=a.useState(function(){return f(0,3).map(function(){return d(u())})}))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t,2)||function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}}(t,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),s=i[0],c=i[1];return $(function(){var e=Date.now(),t=d(u()),n=s.filter(function(t){return e-t.createdAt<1e3});n.push(t),c(n)},50,500),(0,o.jsxs)("span",{style:{position:"relative",display:"inline-block"},children:[s.map(function(e){return(0,o.jsx)(h,{color:e.color,size:e.size,style:e.style},e.id)}),(0,o.jsx)("strong",{style:{position:"relative",zIndex:1,fontWeight:"bold"},children:n})]})}},3293:function(e,t,n){"use strict";n.d(t,{V:function(){return o}});var r=function(e){var t=e.getBoundingClientRect().top-40,n=window.pageYOffset,r=0;function o(e){r||(r=e);var a,i,s,c=e-r,l=(a=c,i=n,-(s=t)/2*(Math.cos(Math.PI*a/500)-1)+i);window.scrollTo(0,l),c<500&&requestAnimationFrame(o)}requestAnimationFrame(o)},o=function(e){var t=document.querySelector("#".concat(e));t&&r(t)}},6472:function(e){e.exports={btnBurger:"ButtonBurger_btnBurger__izZJ4",btnBurgerLine:"ButtonBurger_btnBurgerLine__6wfzH",btnBurgerActive:"ButtonBurger_btnBurgerActive__6iVwG"}},9919:function(e){e.exports={checkboxIos:"CheckboxIos_checkboxIos__jpLKA",cbios:"CheckboxIos_cbios__hcuCl",cbiosLabel:"CheckboxIos_cbiosLabel__nv728",btnToggleCircle:"CheckboxIos_btnToggleCircle__rNEGr",btnCircle:"CheckboxIos_btnCircle__EMWxa",circle1:"CheckboxIos_circle1__MxklN",circle2:"CheckboxIos_circle2__XItVC",circle3:"CheckboxIos_circle3__IMgsu",btnToggleStar:"CheckboxIos_btnToggleStar__7AK5y",star1:"CheckboxIos_star1__11ScE",star2:"CheckboxIos_star2__aZWUu",star3:"CheckboxIos_star3__x4zQX",star4:"CheckboxIos_star4__pQU4z",star5:"CheckboxIos_star5__PQOGK",star6:"CheckboxIos_star6__NzsM_"}},8774:function(e){e.exports={svg:"Sparkles_svg__Tz5Nx",spin:"Sparkles_spin__zV_LX",svgWrap:"Sparkles_svgWrap__HzKAz",comeInOut:"Sparkles_comeInOut__5hm3c"}},5154:function(e){e.exports={btnScrollTop:"ButtonScrollTop_btnScrollTop__U59uG",btnScrollTopActive:"ButtonScrollTop_btnScrollTopActive__rINpS"}},8038:function(e){e.exports={navBar:"Navbar_navBar__h81mJ",navList:"Navbar_navList__YpOkh",navItemLogo:"Navbar_navItemLogo__iWnXn",navItem:"Navbar_navItem__Vns02"}},7723:function(e){e.exports={navSideDraw:"SideDraw_navSideDraw__fN7x7",navSideDrawActive:"SideDraw_navSideDrawActive__ZqOfJ",navSideDrawList:"SideDraw_navSideDrawList__7dW_Q",navSideDrawLogo:"SideDraw_navSideDrawLogo__OjlDj",navSide:"SideDraw_navSide__uONzf",navSideActive:"SideDraw_navSideActive__DQVCh",navSideItem:"SideDraw_navSideItem__LAHJd",btnToggle:"SideDraw_btnToggle__vSAku"}},4831:function(){},5152:function(e,t,n){e.exports=n(638)},9008:function(e,t,n){e.exports=n(5443)},1163:function(e,t,n){e.exports=n(387)},4924:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(387)}),_N_E=e.O()}]);