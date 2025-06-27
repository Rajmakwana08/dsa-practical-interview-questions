(function(){const cl=document.createElement("link").relList;if(cl&&cl.supports&&cl.supports("modulepreload"))return;for(const q of document.querySelectorAll('link[rel="modulepreload"]'))m(q);new MutationObserver(q=>{for(const J of q)if(J.type==="childList")for(const dl of J.addedNodes)dl.tagName==="LINK"&&dl.rel==="modulepreload"&&m(dl)}).observe(document,{childList:!0,subtree:!0});function W(q){const J={};return q.integrity&&(J.integrity=q.integrity),q.referrerPolicy&&(J.referrerPolicy=q.referrerPolicy),q.crossOrigin==="use-credentials"?J.credentials="include":q.crossOrigin==="anonymous"?J.credentials="omit":J.credentials="same-origin",J}function m(q){if(q.ep)return;q.ep=!0;const J=W(q);fetch(q.href,J)}})();var Wf={exports:{}},vu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wo;function D0(){if(Wo)return vu;Wo=1;var M=Symbol.for("react.transitional.element"),cl=Symbol.for("react.fragment");function W(m,q,J){var dl=null;if(J!==void 0&&(dl=""+J),q.key!==void 0&&(dl=""+q.key),"key"in q){J={};for(var xl in q)xl!=="key"&&(J[xl]=q[xl])}else J=q;return q=J.ref,{$$typeof:M,type:m,key:dl,ref:q!==void 0?q:null,props:J}}return vu.Fragment=cl,vu.jsx=W,vu.jsxs=W,vu}var $o;function U0(){return $o||($o=1,Wf.exports=D0()),Wf.exports}var Yl=U0(),$f={exports:{}},G={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fo;function R0(){if(Fo)return G;Fo=1;var M=Symbol.for("react.transitional.element"),cl=Symbol.for("react.portal"),W=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),q=Symbol.for("react.profiler"),J=Symbol.for("react.consumer"),dl=Symbol.for("react.context"),xl=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),T=Symbol.for("react.memo"),U=Symbol.for("react.lazy"),nl=Symbol.iterator;function al(s){return s===null||typeof s!="object"?null:(s=nl&&s[nl]||s["@@iterator"],typeof s=="function"?s:null)}var Hl={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ql=Object.assign,ot={};function jl(s,E,z){this.props=s,this.context=E,this.refs=ot,this.updater=z||Hl}jl.prototype.isReactComponent={},jl.prototype.setState=function(s,E){if(typeof s!="object"&&typeof s!="function"&&s!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,s,E,"setState")},jl.prototype.forceUpdate=function(s){this.updater.enqueueForceUpdate(this,s,"forceUpdate")};function oe(){}oe.prototype=jl.prototype;function _t(s,E,z){this.props=s,this.context=E,this.refs=ot,this.updater=z||Hl}var Ol=_t.prototype=new oe;Ol.constructor=_t,ql(Ol,jl.prototype),Ol.isPureReactComponent=!0;var dt=Array.isArray,w={H:null,A:null,T:null,S:null,V:null},Ll=Object.prototype.hasOwnProperty;function wl(s,E,z,_,N,V){return z=V.ref,{$$typeof:M,type:s,key:E,ref:z!==void 0?z:null,props:V}}function Vl(s,E){return wl(s.type,E,void 0,void 0,void 0,s.props)}function mt(s){return typeof s=="object"&&s!==null&&s.$$typeof===M}function xe(s){var E={"=":"=0",":":"=2"};return"$"+s.replace(/[=:]/g,function(z){return E[z]})}var At=/\/+/g;function Ml(s,E){return typeof s=="object"&&s!==null&&s.key!=null?xe(""+s.key):E.toString(36)}function de(){}function he(s){switch(s.status){case"fulfilled":return s.value;case"rejected":throw s.reason;default:switch(typeof s.status=="string"?s.then(de,de):(s.status="pending",s.then(function(E){s.status==="pending"&&(s.status="fulfilled",s.value=E)},function(E){s.status==="pending"&&(s.status="rejected",s.reason=E)})),s.status){case"fulfilled":return s.value;case"rejected":throw s.reason}}throw s}function Dl(s,E,z,_,N){var V=typeof s;(V==="undefined"||V==="boolean")&&(s=null);var j=!1;if(s===null)j=!0;else switch(V){case"bigint":case"string":case"number":j=!0;break;case"object":switch(s.$$typeof){case M:case cl:j=!0;break;case U:return j=s._init,Dl(j(s._payload),E,z,_,N)}}if(j)return N=N(s),j=_===""?"."+Ml(s,0):_,dt(N)?(z="",j!=null&&(z=j.replace(At,"$&/")+"/"),Dl(N,E,z,"",function(Qt){return Qt})):N!=null&&(mt(N)&&(N=Vl(N,z+(N.key==null||s&&s.key===N.key?"":(""+N.key).replace(At,"$&/")+"/")+j)),E.push(N)),1;j=0;var Kl=_===""?".":_+":";if(dt(s))for(var il=0;il<s.length;il++)_=s[il],V=Kl+Ml(_,il),j+=Dl(_,E,z,V,N);else if(il=al(s),typeof il=="function")for(s=il.call(s),il=0;!(_=s.next()).done;)_=_.value,V=Kl+Ml(_,il++),j+=Dl(_,E,z,V,N);else if(V==="object"){if(typeof s.then=="function")return Dl(he(s),E,z,_,N);throw E=String(s),Error("Objects are not valid as a React child (found: "+(E==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":E)+"). If you meant to render a collection of children, use an array instead.")}return j}function S(s,E,z){if(s==null)return s;var _=[],N=0;return Dl(s,_,"","",function(V){return E.call(z,V,N++)}),_}function A(s){if(s._status===-1){var E=s._result;E=E(),E.then(function(z){(s._status===0||s._status===-1)&&(s._status=1,s._result=z)},function(z){(s._status===0||s._status===-1)&&(s._status=2,s._result=z)}),s._status===-1&&(s._status=0,s._result=E)}if(s._status===1)return s._result.default;throw s._result}var B=typeof reportError=="function"?reportError:function(s){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var E=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof s=="object"&&s!==null&&typeof s.message=="string"?String(s.message):String(s),error:s});if(!window.dispatchEvent(E))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",s);return}console.error(s)};function tl(){}return G.Children={map:S,forEach:function(s,E,z){S(s,function(){E.apply(this,arguments)},z)},count:function(s){var E=0;return S(s,function(){E++}),E},toArray:function(s){return S(s,function(E){return E})||[]},only:function(s){if(!mt(s))throw Error("React.Children.only expected to receive a single React element child.");return s}},G.Component=jl,G.Fragment=W,G.Profiler=q,G.PureComponent=_t,G.StrictMode=m,G.Suspense=R,G.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,G.__COMPILER_RUNTIME={__proto__:null,c:function(s){return w.H.useMemoCache(s)}},G.cache=function(s){return function(){return s.apply(null,arguments)}},G.cloneElement=function(s,E,z){if(s==null)throw Error("The argument must be a React element, but you passed "+s+".");var _=ql({},s.props),N=s.key,V=void 0;if(E!=null)for(j in E.ref!==void 0&&(V=void 0),E.key!==void 0&&(N=""+E.key),E)!Ll.call(E,j)||j==="key"||j==="__self"||j==="__source"||j==="ref"&&E.ref===void 0||(_[j]=E[j]);var j=arguments.length-2;if(j===1)_.children=z;else if(1<j){for(var Kl=Array(j),il=0;il<j;il++)Kl[il]=arguments[il+2];_.children=Kl}return wl(s.type,N,void 0,void 0,V,_)},G.createContext=function(s){return s={$$typeof:dl,_currentValue:s,_currentValue2:s,_threadCount:0,Provider:null,Consumer:null},s.Provider=s,s.Consumer={$$typeof:J,_context:s},s},G.createElement=function(s,E,z){var _,N={},V=null;if(E!=null)for(_ in E.key!==void 0&&(V=""+E.key),E)Ll.call(E,_)&&_!=="key"&&_!=="__self"&&_!=="__source"&&(N[_]=E[_]);var j=arguments.length-2;if(j===1)N.children=z;else if(1<j){for(var Kl=Array(j),il=0;il<j;il++)Kl[il]=arguments[il+2];N.children=Kl}if(s&&s.defaultProps)for(_ in j=s.defaultProps,j)N[_]===void 0&&(N[_]=j[_]);return wl(s,V,void 0,void 0,null,N)},G.createRef=function(){return{current:null}},G.forwardRef=function(s){return{$$typeof:xl,render:s}},G.isValidElement=mt,G.lazy=function(s){return{$$typeof:U,_payload:{_status:-1,_result:s},_init:A}},G.memo=function(s,E){return{$$typeof:T,type:s,compare:E===void 0?null:E}},G.startTransition=function(s){var E=w.T,z={};w.T=z;try{var _=s(),N=w.S;N!==null&&N(z,_),typeof _=="object"&&_!==null&&typeof _.then=="function"&&_.then(tl,B)}catch(V){B(V)}finally{w.T=E}},G.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},G.use=function(s){return w.H.use(s)},G.useActionState=function(s,E,z){return w.H.useActionState(s,E,z)},G.useCallback=function(s,E){return w.H.useCallback(s,E)},G.useContext=function(s){return w.H.useContext(s)},G.useDebugValue=function(){},G.useDeferredValue=function(s,E){return w.H.useDeferredValue(s,E)},G.useEffect=function(s,E,z){var _=w.H;if(typeof z=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return _.useEffect(s,E)},G.useId=function(){return w.H.useId()},G.useImperativeHandle=function(s,E,z){return w.H.useImperativeHandle(s,E,z)},G.useInsertionEffect=function(s,E){return w.H.useInsertionEffect(s,E)},G.useLayoutEffect=function(s,E){return w.H.useLayoutEffect(s,E)},G.useMemo=function(s,E){return w.H.useMemo(s,E)},G.useOptimistic=function(s,E){return w.H.useOptimistic(s,E)},G.useReducer=function(s,E,z){return w.H.useReducer(s,E,z)},G.useRef=function(s){return w.H.useRef(s)},G.useState=function(s){return w.H.useState(s)},G.useSyncExternalStore=function(s,E,z){return w.H.useSyncExternalStore(s,E,z)},G.useTransition=function(){return w.H.useTransition()},G.version="19.1.0",G}var Io;function tc(){return Io||(Io=1,$f.exports=R0()),$f.exports}var nd=tc(),Ff={exports:{}},mu={},If={exports:{}},Pf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Po;function N0(){return Po||(Po=1,function(M){function cl(S,A){var B=S.length;S.push(A);l:for(;0<B;){var tl=B-1>>>1,s=S[tl];if(0<q(s,A))S[tl]=A,S[B]=s,B=tl;else break l}}function W(S){return S.length===0?null:S[0]}function m(S){if(S.length===0)return null;var A=S[0],B=S.pop();if(B!==A){S[0]=B;l:for(var tl=0,s=S.length,E=s>>>1;tl<E;){var z=2*(tl+1)-1,_=S[z],N=z+1,V=S[N];if(0>q(_,B))N<s&&0>q(V,_)?(S[tl]=V,S[N]=B,tl=N):(S[tl]=_,S[z]=B,tl=z);else if(N<s&&0>q(V,B))S[tl]=V,S[N]=B,tl=N;else break l}}return A}function q(S,A){var B=S.sortIndex-A.sortIndex;return B!==0?B:S.id-A.id}if(M.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var J=performance;M.unstable_now=function(){return J.now()}}else{var dl=Date,xl=dl.now();M.unstable_now=function(){return dl.now()-xl}}var R=[],T=[],U=1,nl=null,al=3,Hl=!1,ql=!1,ot=!1,jl=!1,oe=typeof setTimeout=="function"?setTimeout:null,_t=typeof clearTimeout=="function"?clearTimeout:null,Ol=typeof setImmediate<"u"?setImmediate:null;function dt(S){for(var A=W(T);A!==null;){if(A.callback===null)m(T);else if(A.startTime<=S)m(T),A.sortIndex=A.expirationTime,cl(R,A);else break;A=W(T)}}function w(S){if(ot=!1,dt(S),!ql)if(W(R)!==null)ql=!0,Ll||(Ll=!0,Ml());else{var A=W(T);A!==null&&Dl(w,A.startTime-S)}}var Ll=!1,wl=-1,Vl=5,mt=-1;function xe(){return jl?!0:!(M.unstable_now()-mt<Vl)}function At(){if(jl=!1,Ll){var S=M.unstable_now();mt=S;var A=!0;try{l:{ql=!1,ot&&(ot=!1,_t(wl),wl=-1),Hl=!0;var B=al;try{t:{for(dt(S),nl=W(R);nl!==null&&!(nl.expirationTime>S&&xe());){var tl=nl.callback;if(typeof tl=="function"){nl.callback=null,al=nl.priorityLevel;var s=tl(nl.expirationTime<=S);if(S=M.unstable_now(),typeof s=="function"){nl.callback=s,dt(S),A=!0;break t}nl===W(R)&&m(R),dt(S)}else m(R);nl=W(R)}if(nl!==null)A=!0;else{var E=W(T);E!==null&&Dl(w,E.startTime-S),A=!1}}break l}finally{nl=null,al=B,Hl=!1}A=void 0}}finally{A?Ml():Ll=!1}}}var Ml;if(typeof Ol=="function")Ml=function(){Ol(At)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,he=de.port2;de.port1.onmessage=At,Ml=function(){he.postMessage(null)}}else Ml=function(){oe(At,0)};function Dl(S,A){wl=oe(function(){S(M.unstable_now())},A)}M.unstable_IdlePriority=5,M.unstable_ImmediatePriority=1,M.unstable_LowPriority=4,M.unstable_NormalPriority=3,M.unstable_Profiling=null,M.unstable_UserBlockingPriority=2,M.unstable_cancelCallback=function(S){S.callback=null},M.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Vl=0<S?Math.floor(1e3/S):5},M.unstable_getCurrentPriorityLevel=function(){return al},M.unstable_next=function(S){switch(al){case 1:case 2:case 3:var A=3;break;default:A=al}var B=al;al=A;try{return S()}finally{al=B}},M.unstable_requestPaint=function(){jl=!0},M.unstable_runWithPriority=function(S,A){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var B=al;al=S;try{return A()}finally{al=B}},M.unstable_scheduleCallback=function(S,A,B){var tl=M.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?tl+B:tl):B=tl,S){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=B+s,S={id:U++,callback:A,priorityLevel:S,startTime:B,expirationTime:s,sortIndex:-1},B>tl?(S.sortIndex=B,cl(T,S),W(R)===null&&S===W(T)&&(ot?(_t(wl),wl=-1):ot=!0,Dl(w,B-tl))):(S.sortIndex=s,cl(R,S),ql||Hl||(ql=!0,Ll||(Ll=!0,Ml()))),S},M.unstable_shouldYield=xe,M.unstable_wrapCallback=function(S){var A=al;return function(){var B=al;al=A;try{return S.apply(this,arguments)}finally{al=B}}}}(Pf)),Pf}var ld;function x0(){return ld||(ld=1,If.exports=N0()),If.exports}var lc={exports:{}},Nl={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var td;function H0(){if(td)return Nl;td=1;var M=tc();function cl(R){var T="https://react.dev/errors/"+R;if(1<arguments.length){T+="?args[]="+encodeURIComponent(arguments[1]);for(var U=2;U<arguments.length;U++)T+="&args[]="+encodeURIComponent(arguments[U])}return"Minified React error #"+R+"; visit "+T+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function W(){}var m={d:{f:W,r:function(){throw Error(cl(522))},D:W,C:W,L:W,m:W,X:W,S:W,M:W},p:0,findDOMNode:null},q=Symbol.for("react.portal");function J(R,T,U){var nl=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:q,key:nl==null?null:""+nl,children:R,containerInfo:T,implementation:U}}var dl=M.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function xl(R,T){if(R==="font")return"";if(typeof T=="string")return T==="use-credentials"?T:""}return Nl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=m,Nl.createPortal=function(R,T){var U=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!T||T.nodeType!==1&&T.nodeType!==9&&T.nodeType!==11)throw Error(cl(299));return J(R,T,null,U)},Nl.flushSync=function(R){var T=dl.T,U=m.p;try{if(dl.T=null,m.p=2,R)return R()}finally{dl.T=T,m.p=U,m.d.f()}},Nl.preconnect=function(R,T){typeof R=="string"&&(T?(T=T.crossOrigin,T=typeof T=="string"?T==="use-credentials"?T:"":void 0):T=null,m.d.C(R,T))},Nl.prefetchDNS=function(R){typeof R=="string"&&m.d.D(R)},Nl.preinit=function(R,T){if(typeof R=="string"&&T&&typeof T.as=="string"){var U=T.as,nl=xl(U,T.crossOrigin),al=typeof T.integrity=="string"?T.integrity:void 0,Hl=typeof T.fetchPriority=="string"?T.fetchPriority:void 0;U==="style"?m.d.S(R,typeof T.precedence=="string"?T.precedence:void 0,{crossOrigin:nl,integrity:al,fetchPriority:Hl}):U==="script"&&m.d.X(R,{crossOrigin:nl,integrity:al,fetchPriority:Hl,nonce:typeof T.nonce=="string"?T.nonce:void 0})}},Nl.preinitModule=function(R,T){if(typeof R=="string")if(typeof T=="object"&&T!==null){if(T.as==null||T.as==="script"){var U=xl(T.as,T.crossOrigin);m.d.M(R,{crossOrigin:U,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0})}}else T==null&&m.d.M(R)},Nl.preload=function(R,T){if(typeof R=="string"&&typeof T=="object"&&T!==null&&typeof T.as=="string"){var U=T.as,nl=xl(U,T.crossOrigin);m.d.L(R,U,{crossOrigin:nl,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0,type:typeof T.type=="string"?T.type:void 0,fetchPriority:typeof T.fetchPriority=="string"?T.fetchPriority:void 0,referrerPolicy:typeof T.referrerPolicy=="string"?T.referrerPolicy:void 0,imageSrcSet:typeof T.imageSrcSet=="string"?T.imageSrcSet:void 0,imageSizes:typeof T.imageSizes=="string"?T.imageSizes:void 0,media:typeof T.media=="string"?T.media:void 0})}},Nl.preloadModule=function(R,T){if(typeof R=="string")if(T){var U=xl(T.as,T.crossOrigin);m.d.m(R,{as:typeof T.as=="string"&&T.as!=="script"?T.as:void 0,crossOrigin:U,integrity:typeof T.integrity=="string"?T.integrity:void 0})}else m.d.m(R)},Nl.requestFormReset=function(R){m.d.r(R)},Nl.unstable_batchedUpdates=function(R,T){return R(T)},Nl.useFormState=function(R,T,U){return dl.H.useFormState(R,T,U)},Nl.useFormStatus=function(){return dl.H.useHostTransitionStatus()},Nl.version="19.1.0",Nl}var ed;function q0(){if(ed)return lc.exports;ed=1;function M(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(M)}catch(cl){console.error(cl)}}return M(),lc.exports=H0(),lc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ad;function B0(){if(ad)return mu;ad=1;var M=x0(),cl=tc(),W=q0();function m(l){var t="https://react.dev/errors/"+l;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var e=2;e<arguments.length;e++)t+="&args[]="+encodeURIComponent(arguments[e])}return"Minified React error #"+l+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function q(l){return!(!l||l.nodeType!==1&&l.nodeType!==9&&l.nodeType!==11)}function J(l){var t=l,e=l;if(l.alternate)for(;t.return;)t=t.return;else{l=t;do t=l,(t.flags&4098)!==0&&(e=t.return),l=t.return;while(l)}return t.tag===3?e:null}function dl(l){if(l.tag===13){var t=l.memoizedState;if(t===null&&(l=l.alternate,l!==null&&(t=l.memoizedState)),t!==null)return t.dehydrated}return null}function xl(l){if(J(l)!==l)throw Error(m(188))}function R(l){var t=l.alternate;if(!t){if(t=J(l),t===null)throw Error(m(188));return t!==l?null:l}for(var e=l,a=t;;){var u=e.return;if(u===null)break;var n=u.alternate;if(n===null){if(a=u.return,a!==null){e=a;continue}break}if(u.child===n.child){for(n=u.child;n;){if(n===e)return xl(u),l;if(n===a)return xl(u),t;n=n.sibling}throw Error(m(188))}if(e.return!==a.return)e=u,a=n;else{for(var i=!1,f=u.child;f;){if(f===e){i=!0,e=u,a=n;break}if(f===a){i=!0,a=u,e=n;break}f=f.sibling}if(!i){for(f=n.child;f;){if(f===e){i=!0,e=n,a=u;break}if(f===a){i=!0,a=n,e=u;break}f=f.sibling}if(!i)throw Error(m(189))}}if(e.alternate!==a)throw Error(m(190))}if(e.tag!==3)throw Error(m(188));return e.stateNode.current===e?l:t}function T(l){var t=l.tag;if(t===5||t===26||t===27||t===6)return l;for(l=l.child;l!==null;){if(t=T(l),t!==null)return t;l=l.sibling}return null}var U=Object.assign,nl=Symbol.for("react.element"),al=Symbol.for("react.transitional.element"),Hl=Symbol.for("react.portal"),ql=Symbol.for("react.fragment"),ot=Symbol.for("react.strict_mode"),jl=Symbol.for("react.profiler"),oe=Symbol.for("react.provider"),_t=Symbol.for("react.consumer"),Ol=Symbol.for("react.context"),dt=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),Ll=Symbol.for("react.suspense_list"),wl=Symbol.for("react.memo"),Vl=Symbol.for("react.lazy"),mt=Symbol.for("react.activity"),xe=Symbol.for("react.memo_cache_sentinel"),At=Symbol.iterator;function Ml(l){return l===null||typeof l!="object"?null:(l=At&&l[At]||l["@@iterator"],typeof l=="function"?l:null)}var de=Symbol.for("react.client.reference");function he(l){if(l==null)return null;if(typeof l=="function")return l.$$typeof===de?null:l.displayName||l.name||null;if(typeof l=="string")return l;switch(l){case ql:return"Fragment";case jl:return"Profiler";case ot:return"StrictMode";case w:return"Suspense";case Ll:return"SuspenseList";case mt:return"Activity"}if(typeof l=="object")switch(l.$$typeof){case Hl:return"Portal";case Ol:return(l.displayName||"Context")+".Provider";case _t:return(l._context.displayName||"Context")+".Consumer";case dt:var t=l.render;return l=l.displayName,l||(l=t.displayName||t.name||"",l=l!==""?"ForwardRef("+l+")":"ForwardRef"),l;case wl:return t=l.displayName||null,t!==null?t:he(l.type)||"Memo";case Vl:t=l._payload,l=l._init;try{return he(l(t))}catch{}}return null}var Dl=Array.isArray,S=cl.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,A=W.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B={pending:!1,data:null,method:null,action:null},tl=[],s=-1;function E(l){return{current:l}}function z(l){0>s||(l.current=tl[s],tl[s]=null,s--)}function _(l,t){s++,tl[s]=l.current,l.current=t}var N=E(null),V=E(null),j=E(null),Kl=E(null);function il(l,t){switch(_(j,t),_(V,l),_(N,null),t.nodeType){case 9:case 11:l=(l=t.documentElement)&&(l=l.namespaceURI)?_o(l):0;break;default:if(l=t.tagName,t=t.namespaceURI)t=_o(t),l=Ao(t,l);else switch(l){case"svg":l=1;break;case"math":l=2;break;default:l=0}}z(N),_(N,l)}function Qt(){z(N),z(V),z(j)}function Hn(l){l.memoizedState!==null&&_(Kl,l);var t=N.current,e=Ao(t,l.type);t!==e&&(_(V,l),_(N,e))}function gu(l){V.current===l&&(z(N),z(V)),Kl.current===l&&(z(Kl),ru._currentValue=B)}var qn=Object.prototype.hasOwnProperty,Bn=M.unstable_scheduleCallback,Yn=M.unstable_cancelCallback,id=M.unstable_shouldYield,fd=M.unstable_requestPaint,gt=M.unstable_now,cd=M.unstable_getCurrentPriorityLevel,ec=M.unstable_ImmediatePriority,ac=M.unstable_UserBlockingPriority,Su=M.unstable_NormalPriority,sd=M.unstable_LowPriority,uc=M.unstable_IdlePriority,rd=M.log,od=M.unstable_setDisableYieldValue,Sa=null,Jl=null;function Ct(l){if(typeof rd=="function"&&od(l),Jl&&typeof Jl.setStrictMode=="function")try{Jl.setStrictMode(Sa,l)}catch{}}var kl=Math.clz32?Math.clz32:yd,dd=Math.log,hd=Math.LN2;function yd(l){return l>>>=0,l===0?32:31-(dd(l)/hd|0)|0}var pu=256,bu=4194304;function ye(l){var t=l&42;if(t!==0)return t;switch(l&-l){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return l&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return l&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return l}}function Eu(l,t,e){var a=l.pendingLanes;if(a===0)return 0;var u=0,n=l.suspendedLanes,i=l.pingedLanes;l=l.warmLanes;var f=a&134217727;return f!==0?(a=f&~n,a!==0?u=ye(a):(i&=f,i!==0?u=ye(i):e||(e=f&~l,e!==0&&(u=ye(e))))):(f=a&~n,f!==0?u=ye(f):i!==0?u=ye(i):e||(e=a&~l,e!==0&&(u=ye(e)))),u===0?0:t!==0&&t!==u&&(t&n)===0&&(n=u&-u,e=t&-t,n>=e||n===32&&(e&4194048)!==0)?t:u}function pa(l,t){return(l.pendingLanes&~(l.suspendedLanes&~l.pingedLanes)&t)===0}function vd(l,t){switch(l){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nc(){var l=pu;return pu<<=1,(pu&4194048)===0&&(pu=256),l}function ic(){var l=bu;return bu<<=1,(bu&62914560)===0&&(bu=4194304),l}function jn(l){for(var t=[],e=0;31>e;e++)t.push(l);return t}function ba(l,t){l.pendingLanes|=t,t!==268435456&&(l.suspendedLanes=0,l.pingedLanes=0,l.warmLanes=0)}function md(l,t,e,a,u,n){var i=l.pendingLanes;l.pendingLanes=e,l.suspendedLanes=0,l.pingedLanes=0,l.warmLanes=0,l.expiredLanes&=e,l.entangledLanes&=e,l.errorRecoveryDisabledLanes&=e,l.shellSuspendCounter=0;var f=l.entanglements,c=l.expirationTimes,h=l.hiddenUpdates;for(e=i&~e;0<e;){var g=31-kl(e),b=1<<g;f[g]=0,c[g]=-1;var y=h[g];if(y!==null)for(h[g]=null,g=0;g<y.length;g++){var v=y[g];v!==null&&(v.lane&=-536870913)}e&=~b}a!==0&&fc(l,a,0),n!==0&&u===0&&l.tag!==0&&(l.suspendedLanes|=n&~(i&~t))}function fc(l,t,e){l.pendingLanes|=t,l.suspendedLanes&=~t;var a=31-kl(t);l.entangledLanes|=t,l.entanglements[a]=l.entanglements[a]|1073741824|e&4194090}function cc(l,t){var e=l.entangledLanes|=t;for(l=l.entanglements;e;){var a=31-kl(e),u=1<<a;u&t|l[a]&t&&(l[a]|=t),e&=~u}}function Gn(l){switch(l){case 2:l=1;break;case 8:l=4;break;case 32:l=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:l=128;break;case 268435456:l=134217728;break;default:l=0}return l}function Xn(l){return l&=-l,2<l?8<l?(l&134217727)!==0?32:268435456:8:2}function sc(){var l=A.p;return l!==0?l:(l=window.event,l===void 0?32:Lo(l.type))}function gd(l,t){var e=A.p;try{return A.p=l,t()}finally{A.p=e}}var Zt=Math.random().toString(36).slice(2),Ul="__reactFiber$"+Zt,Gl="__reactProps$"+Zt,He="__reactContainer$"+Zt,Qn="__reactEvents$"+Zt,Sd="__reactListeners$"+Zt,pd="__reactHandles$"+Zt,rc="__reactResources$"+Zt,Ea="__reactMarker$"+Zt;function Cn(l){delete l[Ul],delete l[Gl],delete l[Qn],delete l[Sd],delete l[pd]}function qe(l){var t=l[Ul];if(t)return t;for(var e=l.parentNode;e;){if(t=e[He]||e[Ul]){if(e=t.alternate,t.child!==null||e!==null&&e.child!==null)for(l=Do(l);l!==null;){if(e=l[Ul])return e;l=Do(l)}return t}l=e,e=l.parentNode}return null}function Be(l){if(l=l[Ul]||l[He]){var t=l.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return l}return null}function Ta(l){var t=l.tag;if(t===5||t===26||t===27||t===6)return l.stateNode;throw Error(m(33))}function Ye(l){var t=l[rc];return t||(t=l[rc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function pl(l){l[Ea]=!0}var oc=new Set,dc={};function ve(l,t){je(l,t),je(l+"Capture",t)}function je(l,t){for(dc[l]=t,l=0;l<t.length;l++)oc.add(t[l])}var bd=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),hc={},yc={};function Ed(l){return qn.call(yc,l)?!0:qn.call(hc,l)?!1:bd.test(l)?yc[l]=!0:(hc[l]=!0,!1)}function Tu(l,t,e){if(Ed(t))if(e===null)l.removeAttribute(t);else{switch(typeof e){case"undefined":case"function":case"symbol":l.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){l.removeAttribute(t);return}}l.setAttribute(t,""+e)}}function _u(l,t,e){if(e===null)l.removeAttribute(t);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":l.removeAttribute(t);return}l.setAttribute(t,""+e)}}function zt(l,t,e,a){if(a===null)l.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":l.removeAttribute(e);return}l.setAttributeNS(t,e,""+a)}}var Zn,vc;function Ge(l){if(Zn===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Zn=t&&t[1]||"",vc=-1<e.stack.indexOf(`
    at`)?" (<anonymous>)":-1<e.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Zn+l+vc}var Ln=!1;function wn(l,t){if(!l||Ln)return"";Ln=!0;var e=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var b=function(){throw Error()};if(Object.defineProperty(b.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(b,[])}catch(v){var y=v}Reflect.construct(l,[],b)}else{try{b.call()}catch(v){y=v}l.call(b.prototype)}}else{try{throw Error()}catch(v){y=v}(b=l())&&typeof b.catch=="function"&&b.catch(function(){})}}catch(v){if(v&&y&&typeof v.stack=="string")return[v.stack,y.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var n=a.DetermineComponentFrameRoot(),i=n[0],f=n[1];if(i&&f){var c=i.split(`
`),h=f.split(`
`);for(u=a=0;a<c.length&&!c[a].includes("DetermineComponentFrameRoot");)a++;for(;u<h.length&&!h[u].includes("DetermineComponentFrameRoot");)u++;if(a===c.length||u===h.length)for(a=c.length-1,u=h.length-1;1<=a&&0<=u&&c[a]!==h[u];)u--;for(;1<=a&&0<=u;a--,u--)if(c[a]!==h[u]){if(a!==1||u!==1)do if(a--,u--,0>u||c[a]!==h[u]){var g=`
`+c[a].replace(" at new "," at ");return l.displayName&&g.includes("<anonymous>")&&(g=g.replace("<anonymous>",l.displayName)),g}while(1<=a&&0<=u);break}}}finally{Ln=!1,Error.prepareStackTrace=e}return(e=l?l.displayName||l.name:"")?Ge(e):""}function Td(l){switch(l.tag){case 26:case 27:case 5:return Ge(l.type);case 16:return Ge("Lazy");case 13:return Ge("Suspense");case 19:return Ge("SuspenseList");case 0:case 15:return wn(l.type,!1);case 11:return wn(l.type.render,!1);case 1:return wn(l.type,!0);case 31:return Ge("Activity");default:return""}}function mc(l){try{var t="";do t+=Td(l),l=l.return;while(l);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}function et(l){switch(typeof l){case"bigint":case"boolean":case"number":case"string":case"undefined":return l;case"object":return l;default:return""}}function gc(l){var t=l.type;return(l=l.nodeName)&&l.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function _d(l){var t=gc(l)?"checked":"value",e=Object.getOwnPropertyDescriptor(l.constructor.prototype,t),a=""+l[t];if(!l.hasOwnProperty(t)&&typeof e<"u"&&typeof e.get=="function"&&typeof e.set=="function"){var u=e.get,n=e.set;return Object.defineProperty(l,t,{configurable:!0,get:function(){return u.call(this)},set:function(i){a=""+i,n.call(this,i)}}),Object.defineProperty(l,t,{enumerable:e.enumerable}),{getValue:function(){return a},setValue:function(i){a=""+i},stopTracking:function(){l._valueTracker=null,delete l[t]}}}}function Au(l){l._valueTracker||(l._valueTracker=_d(l))}function Sc(l){if(!l)return!1;var t=l._valueTracker;if(!t)return!0;var e=t.getValue(),a="";return l&&(a=gc(l)?l.checked?"true":"false":l.value),l=a,l!==e?(t.setValue(l),!0):!1}function zu(l){if(l=l||(typeof document<"u"?document:void 0),typeof l>"u")return null;try{return l.activeElement||l.body}catch{return l.body}}var Ad=/[\n"\\]/g;function at(l){return l.replace(Ad,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Vn(l,t,e,a,u,n,i,f){l.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?l.type=i:l.removeAttribute("type"),t!=null?i==="number"?(t===0&&l.value===""||l.value!=t)&&(l.value=""+et(t)):l.value!==""+et(t)&&(l.value=""+et(t)):i!=="submit"&&i!=="reset"||l.removeAttribute("value"),t!=null?Kn(l,i,et(t)):e!=null?Kn(l,i,et(e)):a!=null&&l.removeAttribute("value"),u==null&&n!=null&&(l.defaultChecked=!!n),u!=null&&(l.checked=u&&typeof u!="function"&&typeof u!="symbol"),f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?l.name=""+et(f):l.removeAttribute("name")}function pc(l,t,e,a,u,n,i,f){if(n!=null&&typeof n!="function"&&typeof n!="symbol"&&typeof n!="boolean"&&(l.type=n),t!=null||e!=null){if(!(n!=="submit"&&n!=="reset"||t!=null))return;e=e!=null?""+et(e):"",t=t!=null?""+et(t):e,f||t===l.value||(l.value=t),l.defaultValue=t}a=a??u,a=typeof a!="function"&&typeof a!="symbol"&&!!a,l.checked=f?l.checked:!!a,l.defaultChecked=!!a,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(l.name=i)}function Kn(l,t,e){t==="number"&&zu(l.ownerDocument)===l||l.defaultValue===""+e||(l.defaultValue=""+e)}function Xe(l,t,e,a){if(l=l.options,t){t={};for(var u=0;u<e.length;u++)t["$"+e[u]]=!0;for(e=0;e<l.length;e++)u=t.hasOwnProperty("$"+l[e].value),l[e].selected!==u&&(l[e].selected=u),u&&a&&(l[e].defaultSelected=!0)}else{for(e=""+et(e),t=null,u=0;u<l.length;u++){if(l[u].value===e){l[u].selected=!0,a&&(l[u].defaultSelected=!0);return}t!==null||l[u].disabled||(t=l[u])}t!==null&&(t.selected=!0)}}function bc(l,t,e){if(t!=null&&(t=""+et(t),t!==l.value&&(l.value=t),e==null)){l.defaultValue!==t&&(l.defaultValue=t);return}l.defaultValue=e!=null?""+et(e):""}function Ec(l,t,e,a){if(t==null){if(a!=null){if(e!=null)throw Error(m(92));if(Dl(a)){if(1<a.length)throw Error(m(93));a=a[0]}e=a}e==null&&(e=""),t=e}e=et(t),l.defaultValue=e,a=l.textContent,a===e&&a!==""&&a!==null&&(l.value=a)}function Qe(l,t){if(t){var e=l.firstChild;if(e&&e===l.lastChild&&e.nodeType===3){e.nodeValue=t;return}}l.textContent=t}var zd=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Tc(l,t,e){var a=t.indexOf("--")===0;e==null||typeof e=="boolean"||e===""?a?l.setProperty(t,""):t==="float"?l.cssFloat="":l[t]="":a?l.setProperty(t,e):typeof e!="number"||e===0||zd.has(t)?t==="float"?l.cssFloat=e:l[t]=(""+e).trim():l[t]=e+"px"}function _c(l,t,e){if(t!=null&&typeof t!="object")throw Error(m(62));if(l=l.style,e!=null){for(var a in e)!e.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?l.setProperty(a,""):a==="float"?l.cssFloat="":l[a]="");for(var u in t)a=t[u],t.hasOwnProperty(u)&&e[u]!==a&&Tc(l,u,a)}else for(var n in t)t.hasOwnProperty(n)&&Tc(l,n,t[n])}function Jn(l){if(l.indexOf("-")===-1)return!1;switch(l){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Od=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Md=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ou(l){return Md.test(""+l)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":l}var kn=null;function Wn(l){return l=l.target||l.srcElement||window,l.correspondingUseElement&&(l=l.correspondingUseElement),l.nodeType===3?l.parentNode:l}var Ce=null,Ze=null;function Ac(l){var t=Be(l);if(t&&(l=t.stateNode)){var e=l[Gl]||null;l:switch(l=t.stateNode,t.type){case"input":if(Vn(l,e.value,e.defaultValue,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name),t=e.name,e.type==="radio"&&t!=null){for(e=l;e.parentNode;)e=e.parentNode;for(e=e.querySelectorAll('input[name="'+at(""+t)+'"][type="radio"]'),t=0;t<e.length;t++){var a=e[t];if(a!==l&&a.form===l.form){var u=a[Gl]||null;if(!u)throw Error(m(90));Vn(a,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(t=0;t<e.length;t++)a=e[t],a.form===l.form&&Sc(a)}break l;case"textarea":bc(l,e.value,e.defaultValue);break l;case"select":t=e.value,t!=null&&Xe(l,!!e.multiple,t,!1)}}}var $n=!1;function zc(l,t,e){if($n)return l(t,e);$n=!0;try{var a=l(t);return a}finally{if($n=!1,(Ce!==null||Ze!==null)&&(dn(),Ce&&(t=Ce,l=Ze,Ze=Ce=null,Ac(t),l)))for(t=0;t<l.length;t++)Ac(l[t])}}function _a(l,t){var e=l.stateNode;if(e===null)return null;var a=e[Gl]||null;if(a===null)return null;e=a[t];l:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(l=l.type,a=!(l==="button"||l==="input"||l==="select"||l==="textarea")),l=!a;break l;default:l=!1}if(l)return null;if(e&&typeof e!="function")throw Error(m(231,t,typeof e));return e}var Ot=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fn=!1;if(Ot)try{var Aa={};Object.defineProperty(Aa,"passive",{get:function(){Fn=!0}}),window.addEventListener("test",Aa,Aa),window.removeEventListener("test",Aa,Aa)}catch{Fn=!1}var Lt=null,In=null,Mu=null;function Oc(){if(Mu)return Mu;var l,t=In,e=t.length,a,u="value"in Lt?Lt.value:Lt.textContent,n=u.length;for(l=0;l<e&&t[l]===u[l];l++);var i=e-l;for(a=1;a<=i&&t[e-a]===u[n-a];a++);return Mu=u.slice(l,1<a?1-a:void 0)}function Du(l){var t=l.keyCode;return"charCode"in l?(l=l.charCode,l===0&&t===13&&(l=13)):l=t,l===10&&(l=13),32<=l||l===13?l:0}function Uu(){return!0}function Mc(){return!1}function Xl(l){function t(e,a,u,n,i){this._reactName=e,this._targetInst=u,this.type=a,this.nativeEvent=n,this.target=i,this.currentTarget=null;for(var f in l)l.hasOwnProperty(f)&&(e=l[f],this[f]=e?e(n):n[f]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?Uu:Mc,this.isPropagationStopped=Mc,this}return U(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=Uu)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=Uu)},persist:function(){},isPersistent:Uu}),t}var me={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(l){return l.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ru=Xl(me),za=U({},me,{view:0,detail:0}),Dd=Xl(za),Pn,li,Oa,Nu=U({},za,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ei,button:0,buttons:0,relatedTarget:function(l){return l.relatedTarget===void 0?l.fromElement===l.srcElement?l.toElement:l.fromElement:l.relatedTarget},movementX:function(l){return"movementX"in l?l.movementX:(l!==Oa&&(Oa&&l.type==="mousemove"?(Pn=l.screenX-Oa.screenX,li=l.screenY-Oa.screenY):li=Pn=0,Oa=l),Pn)},movementY:function(l){return"movementY"in l?l.movementY:li}}),Dc=Xl(Nu),Ud=U({},Nu,{dataTransfer:0}),Rd=Xl(Ud),Nd=U({},za,{relatedTarget:0}),ti=Xl(Nd),xd=U({},me,{animationName:0,elapsedTime:0,pseudoElement:0}),Hd=Xl(xd),qd=U({},me,{clipboardData:function(l){return"clipboardData"in l?l.clipboardData:window.clipboardData}}),Bd=Xl(qd),Yd=U({},me,{data:0}),Uc=Xl(Yd),jd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Xd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qd(l){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(l):(l=Xd[l])?!!t[l]:!1}function ei(){return Qd}var Cd=U({},za,{key:function(l){if(l.key){var t=jd[l.key]||l.key;if(t!=="Unidentified")return t}return l.type==="keypress"?(l=Du(l),l===13?"Enter":String.fromCharCode(l)):l.type==="keydown"||l.type==="keyup"?Gd[l.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ei,charCode:function(l){return l.type==="keypress"?Du(l):0},keyCode:function(l){return l.type==="keydown"||l.type==="keyup"?l.keyCode:0},which:function(l){return l.type==="keypress"?Du(l):l.type==="keydown"||l.type==="keyup"?l.keyCode:0}}),Zd=Xl(Cd),Ld=U({},Nu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rc=Xl(Ld),wd=U({},za,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ei}),Vd=Xl(wd),Kd=U({},me,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jd=Xl(Kd),kd=U({},Nu,{deltaX:function(l){return"deltaX"in l?l.deltaX:"wheelDeltaX"in l?-l.wheelDeltaX:0},deltaY:function(l){return"deltaY"in l?l.deltaY:"wheelDeltaY"in l?-l.wheelDeltaY:"wheelDelta"in l?-l.wheelDelta:0},deltaZ:0,deltaMode:0}),Wd=Xl(kd),$d=U({},me,{newState:0,oldState:0}),Fd=Xl($d),Id=[9,13,27,32],ai=Ot&&"CompositionEvent"in window,Ma=null;Ot&&"documentMode"in document&&(Ma=document.documentMode);var Pd=Ot&&"TextEvent"in window&&!Ma,Nc=Ot&&(!ai||Ma&&8<Ma&&11>=Ma),xc=" ",Hc=!1;function qc(l,t){switch(l){case"keyup":return Id.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bc(l){return l=l.detail,typeof l=="object"&&"data"in l?l.data:null}var Le=!1;function lh(l,t){switch(l){case"compositionend":return Bc(t);case"keypress":return t.which!==32?null:(Hc=!0,xc);case"textInput":return l=t.data,l===xc&&Hc?null:l;default:return null}}function th(l,t){if(Le)return l==="compositionend"||!ai&&qc(l,t)?(l=Oc(),Mu=In=Lt=null,Le=!1,l):null;switch(l){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Nc&&t.locale!=="ko"?null:t.data;default:return null}}var eh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yc(l){var t=l&&l.nodeName&&l.nodeName.toLowerCase();return t==="input"?!!eh[l.type]:t==="textarea"}function jc(l,t,e,a){Ce?Ze?Ze.push(a):Ze=[a]:Ce=a,t=Sn(t,"onChange"),0<t.length&&(e=new Ru("onChange","change",null,e,a),l.push({event:e,listeners:t}))}var Da=null,Ua=null;function ah(l){So(l,0)}function xu(l){var t=Ta(l);if(Sc(t))return l}function Gc(l,t){if(l==="change")return t}var Xc=!1;if(Ot){var ui;if(Ot){var ni="oninput"in document;if(!ni){var Qc=document.createElement("div");Qc.setAttribute("oninput","return;"),ni=typeof Qc.oninput=="function"}ui=ni}else ui=!1;Xc=ui&&(!document.documentMode||9<document.documentMode)}function Cc(){Da&&(Da.detachEvent("onpropertychange",Zc),Ua=Da=null)}function Zc(l){if(l.propertyName==="value"&&xu(Ua)){var t=[];jc(t,Ua,l,Wn(l)),zc(ah,t)}}function uh(l,t,e){l==="focusin"?(Cc(),Da=t,Ua=e,Da.attachEvent("onpropertychange",Zc)):l==="focusout"&&Cc()}function nh(l){if(l==="selectionchange"||l==="keyup"||l==="keydown")return xu(Ua)}function ih(l,t){if(l==="click")return xu(t)}function fh(l,t){if(l==="input"||l==="change")return xu(t)}function ch(l,t){return l===t&&(l!==0||1/l===1/t)||l!==l&&t!==t}var Wl=typeof Object.is=="function"?Object.is:ch;function Ra(l,t){if(Wl(l,t))return!0;if(typeof l!="object"||l===null||typeof t!="object"||t===null)return!1;var e=Object.keys(l),a=Object.keys(t);if(e.length!==a.length)return!1;for(a=0;a<e.length;a++){var u=e[a];if(!qn.call(t,u)||!Wl(l[u],t[u]))return!1}return!0}function Lc(l){for(;l&&l.firstChild;)l=l.firstChild;return l}function wc(l,t){var e=Lc(l);l=0;for(var a;e;){if(e.nodeType===3){if(a=l+e.textContent.length,l<=t&&a>=t)return{node:e,offset:t-l};l=a}l:{for(;e;){if(e.nextSibling){e=e.nextSibling;break l}e=e.parentNode}e=void 0}e=Lc(e)}}function Vc(l,t){return l&&t?l===t?!0:l&&l.nodeType===3?!1:t&&t.nodeType===3?Vc(l,t.parentNode):"contains"in l?l.contains(t):l.compareDocumentPosition?!!(l.compareDocumentPosition(t)&16):!1:!1}function Kc(l){l=l!=null&&l.ownerDocument!=null&&l.ownerDocument.defaultView!=null?l.ownerDocument.defaultView:window;for(var t=zu(l.document);t instanceof l.HTMLIFrameElement;){try{var e=typeof t.contentWindow.location.href=="string"}catch{e=!1}if(e)l=t.contentWindow;else break;t=zu(l.document)}return t}function ii(l){var t=l&&l.nodeName&&l.nodeName.toLowerCase();return t&&(t==="input"&&(l.type==="text"||l.type==="search"||l.type==="tel"||l.type==="url"||l.type==="password")||t==="textarea"||l.contentEditable==="true")}var sh=Ot&&"documentMode"in document&&11>=document.documentMode,we=null,fi=null,Na=null,ci=!1;function Jc(l,t,e){var a=e.window===e?e.document:e.nodeType===9?e:e.ownerDocument;ci||we==null||we!==zu(a)||(a=we,"selectionStart"in a&&ii(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Na&&Ra(Na,a)||(Na=a,a=Sn(fi,"onSelect"),0<a.length&&(t=new Ru("onSelect","select",null,t,e),l.push({event:t,listeners:a}),t.target=we)))}function ge(l,t){var e={};return e[l.toLowerCase()]=t.toLowerCase(),e["Webkit"+l]="webkit"+t,e["Moz"+l]="moz"+t,e}var Ve={animationend:ge("Animation","AnimationEnd"),animationiteration:ge("Animation","AnimationIteration"),animationstart:ge("Animation","AnimationStart"),transitionrun:ge("Transition","TransitionRun"),transitionstart:ge("Transition","TransitionStart"),transitioncancel:ge("Transition","TransitionCancel"),transitionend:ge("Transition","TransitionEnd")},si={},kc={};Ot&&(kc=document.createElement("div").style,"AnimationEvent"in window||(delete Ve.animationend.animation,delete Ve.animationiteration.animation,delete Ve.animationstart.animation),"TransitionEvent"in window||delete Ve.transitionend.transition);function Se(l){if(si[l])return si[l];if(!Ve[l])return l;var t=Ve[l],e;for(e in t)if(t.hasOwnProperty(e)&&e in kc)return si[l]=t[e];return l}var Wc=Se("animationend"),$c=Se("animationiteration"),Fc=Se("animationstart"),rh=Se("transitionrun"),oh=Se("transitionstart"),dh=Se("transitioncancel"),Ic=Se("transitionend"),Pc=new Map,ri="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ri.push("scrollEnd");function ht(l,t){Pc.set(l,t),ve(t,[l])}var ls=new WeakMap;function ut(l,t){if(typeof l=="object"&&l!==null){var e=ls.get(l);return e!==void 0?e:(t={value:l,source:t,stack:mc(t)},ls.set(l,t),t)}return{value:l,source:t,stack:mc(t)}}var nt=[],Ke=0,oi=0;function Hu(){for(var l=Ke,t=oi=Ke=0;t<l;){var e=nt[t];nt[t++]=null;var a=nt[t];nt[t++]=null;var u=nt[t];nt[t++]=null;var n=nt[t];if(nt[t++]=null,a!==null&&u!==null){var i=a.pending;i===null?u.next=u:(u.next=i.next,i.next=u),a.pending=u}n!==0&&ts(e,u,n)}}function qu(l,t,e,a){nt[Ke++]=l,nt[Ke++]=t,nt[Ke++]=e,nt[Ke++]=a,oi|=a,l.lanes|=a,l=l.alternate,l!==null&&(l.lanes|=a)}function di(l,t,e,a){return qu(l,t,e,a),Bu(l)}function Je(l,t){return qu(l,null,null,t),Bu(l)}function ts(l,t,e){l.lanes|=e;var a=l.alternate;a!==null&&(a.lanes|=e);for(var u=!1,n=l.return;n!==null;)n.childLanes|=e,a=n.alternate,a!==null&&(a.childLanes|=e),n.tag===22&&(l=n.stateNode,l===null||l._visibility&1||(u=!0)),l=n,n=n.return;return l.tag===3?(n=l.stateNode,u&&t!==null&&(u=31-kl(e),l=n.hiddenUpdates,a=l[u],a===null?l[u]=[t]:a.push(t),t.lane=e|536870912),n):null}function Bu(l){if(50<eu)throw eu=0,pf=null,Error(m(185));for(var t=l.return;t!==null;)l=t,t=l.return;return l.tag===3?l.stateNode:null}var ke={};function hh(l,t,e,a){this.tag=l,this.key=e,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $l(l,t,e,a){return new hh(l,t,e,a)}function hi(l){return l=l.prototype,!(!l||!l.isReactComponent)}function Mt(l,t){var e=l.alternate;return e===null?(e=$l(l.tag,t,l.key,l.mode),e.elementType=l.elementType,e.type=l.type,e.stateNode=l.stateNode,e.alternate=l,l.alternate=e):(e.pendingProps=t,e.type=l.type,e.flags=0,e.subtreeFlags=0,e.deletions=null),e.flags=l.flags&65011712,e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,t=l.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},e.sibling=l.sibling,e.index=l.index,e.ref=l.ref,e.refCleanup=l.refCleanup,e}function es(l,t){l.flags&=65011714;var e=l.alternate;return e===null?(l.childLanes=0,l.lanes=t,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,l.type=e.type,t=e.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),l}function Yu(l,t,e,a,u,n){var i=0;if(a=l,typeof l=="function")hi(l)&&(i=1);else if(typeof l=="string")i=v0(l,e,N.current)?26:l==="html"||l==="head"||l==="body"?27:5;else l:switch(l){case mt:return l=$l(31,e,t,u),l.elementType=mt,l.lanes=n,l;case ql:return pe(e.children,u,n,t);case ot:i=8,u|=24;break;case jl:return l=$l(12,e,t,u|2),l.elementType=jl,l.lanes=n,l;case w:return l=$l(13,e,t,u),l.elementType=w,l.lanes=n,l;case Ll:return l=$l(19,e,t,u),l.elementType=Ll,l.lanes=n,l;default:if(typeof l=="object"&&l!==null)switch(l.$$typeof){case oe:case Ol:i=10;break l;case _t:i=9;break l;case dt:i=11;break l;case wl:i=14;break l;case Vl:i=16,a=null;break l}i=29,e=Error(m(130,l===null?"null":typeof l,"")),a=null}return t=$l(i,e,t,u),t.elementType=l,t.type=a,t.lanes=n,t}function pe(l,t,e,a){return l=$l(7,l,a,t),l.lanes=e,l}function yi(l,t,e){return l=$l(6,l,null,t),l.lanes=e,l}function vi(l,t,e){return t=$l(4,l.children!==null?l.children:[],l.key,t),t.lanes=e,t.stateNode={containerInfo:l.containerInfo,pendingChildren:null,implementation:l.implementation},t}var We=[],$e=0,ju=null,Gu=0,it=[],ft=0,be=null,Dt=1,Ut="";function Ee(l,t){We[$e++]=Gu,We[$e++]=ju,ju=l,Gu=t}function as(l,t,e){it[ft++]=Dt,it[ft++]=Ut,it[ft++]=be,be=l;var a=Dt;l=Ut;var u=32-kl(a)-1;a&=~(1<<u),e+=1;var n=32-kl(t)+u;if(30<n){var i=u-u%5;n=(a&(1<<i)-1).toString(32),a>>=i,u-=i,Dt=1<<32-kl(t)+u|e<<u|a,Ut=n+l}else Dt=1<<n|e<<u|a,Ut=l}function mi(l){l.return!==null&&(Ee(l,1),as(l,1,0))}function gi(l){for(;l===ju;)ju=We[--$e],We[$e]=null,Gu=We[--$e],We[$e]=null;for(;l===be;)be=it[--ft],it[ft]=null,Ut=it[--ft],it[ft]=null,Dt=it[--ft],it[ft]=null}var Bl=null,rl=null,k=!1,Te=null,St=!1,Si=Error(m(519));function _e(l){var t=Error(m(418,""));throw qa(ut(t,l)),Si}function us(l){var t=l.stateNode,e=l.type,a=l.memoizedProps;switch(t[Ul]=l,t[Gl]=a,e){case"dialog":Z("cancel",t),Z("close",t);break;case"iframe":case"object":case"embed":Z("load",t);break;case"video":case"audio":for(e=0;e<uu.length;e++)Z(uu[e],t);break;case"source":Z("error",t);break;case"img":case"image":case"link":Z("error",t),Z("load",t);break;case"details":Z("toggle",t);break;case"input":Z("invalid",t),pc(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),Au(t);break;case"select":Z("invalid",t);break;case"textarea":Z("invalid",t),Ec(t,a.value,a.defaultValue,a.children),Au(t)}e=a.children,typeof e!="string"&&typeof e!="number"&&typeof e!="bigint"||t.textContent===""+e||a.suppressHydrationWarning===!0||To(t.textContent,e)?(a.popover!=null&&(Z("beforetoggle",t),Z("toggle",t)),a.onScroll!=null&&Z("scroll",t),a.onScrollEnd!=null&&Z("scrollend",t),a.onClick!=null&&(t.onclick=pn),t=!0):t=!1,t||_e(l)}function ns(l){for(Bl=l.return;Bl;)switch(Bl.tag){case 5:case 13:St=!1;return;case 27:case 3:St=!0;return;default:Bl=Bl.return}}function xa(l){if(l!==Bl)return!1;if(!k)return ns(l),k=!0,!1;var t=l.tag,e;if((e=t!==3&&t!==27)&&((e=t===5)&&(e=l.type,e=!(e!=="form"&&e!=="button")||Bf(l.type,l.memoizedProps)),e=!e),e&&rl&&_e(l),ns(l),t===13){if(l=l.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(m(317));l:{for(l=l.nextSibling,t=0;l;){if(l.nodeType===8)if(e=l.data,e==="/$"){if(t===0){rl=vt(l.nextSibling);break l}t--}else e!=="$"&&e!=="$!"&&e!=="$?"||t++;l=l.nextSibling}rl=null}}else t===27?(t=rl,ne(l.type)?(l=Xf,Xf=null,rl=l):rl=t):rl=Bl?vt(l.stateNode.nextSibling):null;return!0}function Ha(){rl=Bl=null,k=!1}function is(){var l=Te;return l!==null&&(Zl===null?Zl=l:Zl.push.apply(Zl,l),Te=null),l}function qa(l){Te===null?Te=[l]:Te.push(l)}var pi=E(null),Ae=null,Rt=null;function wt(l,t,e){_(pi,t._currentValue),t._currentValue=e}function Nt(l){l._currentValue=pi.current,z(pi)}function bi(l,t,e){for(;l!==null;){var a=l.alternate;if((l.childLanes&t)!==t?(l.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),l===e)break;l=l.return}}function Ei(l,t,e,a){var u=l.child;for(u!==null&&(u.return=l);u!==null;){var n=u.dependencies;if(n!==null){var i=u.child;n=n.firstContext;l:for(;n!==null;){var f=n;n=u;for(var c=0;c<t.length;c++)if(f.context===t[c]){n.lanes|=e,f=n.alternate,f!==null&&(f.lanes|=e),bi(n.return,e,l),a||(i=null);break l}n=f.next}}else if(u.tag===18){if(i=u.return,i===null)throw Error(m(341));i.lanes|=e,n=i.alternate,n!==null&&(n.lanes|=e),bi(i,e,l),i=null}else i=u.child;if(i!==null)i.return=u;else for(i=u;i!==null;){if(i===l){i=null;break}if(u=i.sibling,u!==null){u.return=i.return,i=u;break}i=i.return}u=i}}function Ba(l,t,e,a){l=null;for(var u=t,n=!1;u!==null;){if(!n){if((u.flags&524288)!==0)n=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var i=u.alternate;if(i===null)throw Error(m(387));if(i=i.memoizedProps,i!==null){var f=u.type;Wl(u.pendingProps.value,i.value)||(l!==null?l.push(f):l=[f])}}else if(u===Kl.current){if(i=u.alternate,i===null)throw Error(m(387));i.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(l!==null?l.push(ru):l=[ru])}u=u.return}l!==null&&Ei(t,l,e,a),t.flags|=262144}function Xu(l){for(l=l.firstContext;l!==null;){if(!Wl(l.context._currentValue,l.memoizedValue))return!0;l=l.next}return!1}function ze(l){Ae=l,Rt=null,l=l.dependencies,l!==null&&(l.firstContext=null)}function Rl(l){return fs(Ae,l)}function Qu(l,t){return Ae===null&&ze(l),fs(l,t)}function fs(l,t){var e=t._currentValue;if(t={context:t,memoizedValue:e,next:null},Rt===null){if(l===null)throw Error(m(308));Rt=t,l.dependencies={lanes:0,firstContext:t},l.flags|=524288}else Rt=Rt.next=t;return e}var yh=typeof AbortController<"u"?AbortController:function(){var l=[],t=this.signal={aborted:!1,addEventListener:function(e,a){l.push(a)}};this.abort=function(){t.aborted=!0,l.forEach(function(e){return e()})}},vh=M.unstable_scheduleCallback,mh=M.unstable_NormalPriority,gl={$$typeof:Ol,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ti(){return{controller:new yh,data:new Map,refCount:0}}function Ya(l){l.refCount--,l.refCount===0&&vh(mh,function(){l.controller.abort()})}var ja=null,_i=0,Fe=0,Ie=null;function gh(l,t){if(ja===null){var e=ja=[];_i=0,Fe=Of(),Ie={status:"pending",value:void 0,then:function(a){e.push(a)}}}return _i++,t.then(cs,cs),t}function cs(){if(--_i===0&&ja!==null){Ie!==null&&(Ie.status="fulfilled");var l=ja;ja=null,Fe=0,Ie=null;for(var t=0;t<l.length;t++)(0,l[t])()}}function Sh(l,t){var e=[],a={status:"pending",value:null,reason:null,then:function(u){e.push(u)}};return l.then(function(){a.status="fulfilled",a.value=t;for(var u=0;u<e.length;u++)(0,e[u])(t)},function(u){for(a.status="rejected",a.reason=u,u=0;u<e.length;u++)(0,e[u])(void 0)}),a}var ss=S.S;S.S=function(l,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&gh(l,t),ss!==null&&ss(l,t)};var Oe=E(null);function Ai(){var l=Oe.current;return l!==null?l:ul.pooledCache}function Cu(l,t){t===null?_(Oe,Oe.current):_(Oe,t.pool)}function rs(){var l=Ai();return l===null?null:{parent:gl._currentValue,pool:l}}var Ga=Error(m(460)),os=Error(m(474)),Zu=Error(m(542)),zi={then:function(){}};function ds(l){return l=l.status,l==="fulfilled"||l==="rejected"}function Lu(){}function hs(l,t,e){switch(e=l[e],e===void 0?l.push(t):e!==t&&(t.then(Lu,Lu),t=e),t.status){case"fulfilled":return t.value;case"rejected":throw l=t.reason,vs(l),l;default:if(typeof t.status=="string")t.then(Lu,Lu);else{if(l=ul,l!==null&&100<l.shellSuspendCounter)throw Error(m(482));l=t,l.status="pending",l.then(function(a){if(t.status==="pending"){var u=t;u.status="fulfilled",u.value=a}},function(a){if(t.status==="pending"){var u=t;u.status="rejected",u.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw l=t.reason,vs(l),l}throw Xa=t,Ga}}var Xa=null;function ys(){if(Xa===null)throw Error(m(459));var l=Xa;return Xa=null,l}function vs(l){if(l===Ga||l===Zu)throw Error(m(483))}var Vt=!1;function Oi(l){l.updateQueue={baseState:l.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Mi(l,t){l=l.updateQueue,t.updateQueue===l&&(t.updateQueue={baseState:l.baseState,firstBaseUpdate:l.firstBaseUpdate,lastBaseUpdate:l.lastBaseUpdate,shared:l.shared,callbacks:null})}function Kt(l){return{lane:l,tag:0,payload:null,callback:null,next:null}}function Jt(l,t,e){var a=l.updateQueue;if(a===null)return null;if(a=a.shared,($&2)!==0){var u=a.pending;return u===null?t.next=t:(t.next=u.next,u.next=t),a.pending=t,t=Bu(l),ts(l,null,e),t}return qu(l,a,t,e),Bu(l)}function Qa(l,t,e){if(t=t.updateQueue,t!==null&&(t=t.shared,(e&4194048)!==0)){var a=t.lanes;a&=l.pendingLanes,e|=a,t.lanes=e,cc(l,e)}}function Di(l,t){var e=l.updateQueue,a=l.alternate;if(a!==null&&(a=a.updateQueue,e===a)){var u=null,n=null;if(e=e.firstBaseUpdate,e!==null){do{var i={lane:e.lane,tag:e.tag,payload:e.payload,callback:null,next:null};n===null?u=n=i:n=n.next=i,e=e.next}while(e!==null);n===null?u=n=t:n=n.next=t}else u=n=t;e={baseState:a.baseState,firstBaseUpdate:u,lastBaseUpdate:n,shared:a.shared,callbacks:a.callbacks},l.updateQueue=e;return}l=e.lastBaseUpdate,l===null?e.firstBaseUpdate=t:l.next=t,e.lastBaseUpdate=t}var Ui=!1;function Ca(){if(Ui){var l=Ie;if(l!==null)throw l}}function Za(l,t,e,a){Ui=!1;var u=l.updateQueue;Vt=!1;var n=u.firstBaseUpdate,i=u.lastBaseUpdate,f=u.shared.pending;if(f!==null){u.shared.pending=null;var c=f,h=c.next;c.next=null,i===null?n=h:i.next=h,i=c;var g=l.alternate;g!==null&&(g=g.updateQueue,f=g.lastBaseUpdate,f!==i&&(f===null?g.firstBaseUpdate=h:f.next=h,g.lastBaseUpdate=c))}if(n!==null){var b=u.baseState;i=0,g=h=c=null,f=n;do{var y=f.lane&-536870913,v=y!==f.lane;if(v?(L&y)===y:(a&y)===y){y!==0&&y===Fe&&(Ui=!0),g!==null&&(g=g.next={lane:0,tag:f.tag,payload:f.payload,callback:null,next:null});l:{var Y=l,x=f;y=t;var ll=e;switch(x.tag){case 1:if(Y=x.payload,typeof Y=="function"){b=Y.call(ll,b,y);break l}b=Y;break l;case 3:Y.flags=Y.flags&-65537|128;case 0:if(Y=x.payload,y=typeof Y=="function"?Y.call(ll,b,y):Y,y==null)break l;b=U({},b,y);break l;case 2:Vt=!0}}y=f.callback,y!==null&&(l.flags|=64,v&&(l.flags|=8192),v=u.callbacks,v===null?u.callbacks=[y]:v.push(y))}else v={lane:y,tag:f.tag,payload:f.payload,callback:f.callback,next:null},g===null?(h=g=v,c=b):g=g.next=v,i|=y;if(f=f.next,f===null){if(f=u.shared.pending,f===null)break;v=f,f=v.next,v.next=null,u.lastBaseUpdate=v,u.shared.pending=null}}while(!0);g===null&&(c=b),u.baseState=c,u.firstBaseUpdate=h,u.lastBaseUpdate=g,n===null&&(u.shared.lanes=0),te|=i,l.lanes=i,l.memoizedState=b}}function ms(l,t){if(typeof l!="function")throw Error(m(191,l));l.call(t)}function gs(l,t){var e=l.callbacks;if(e!==null)for(l.callbacks=null,l=0;l<e.length;l++)ms(e[l],t)}var Pe=E(null),wu=E(0);function Ss(l,t){l=Gt,_(wu,l),_(Pe,t),Gt=l|t.baseLanes}function Ri(){_(wu,Gt),_(Pe,Pe.current)}function Ni(){Gt=wu.current,z(Pe),z(wu)}var kt=0,X=null,I=null,vl=null,Vu=!1,la=!1,Me=!1,Ku=0,La=0,ta=null,ph=0;function hl(){throw Error(m(321))}function xi(l,t){if(t===null)return!1;for(var e=0;e<t.length&&e<l.length;e++)if(!Wl(l[e],t[e]))return!1;return!0}function Hi(l,t,e,a,u,n){return kt=n,X=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,S.H=l===null||l.memoizedState===null?tr:er,Me=!1,n=e(a,u),Me=!1,la&&(n=bs(t,e,a,u)),ps(l),n}function ps(l){S.H=Iu;var t=I!==null&&I.next!==null;if(kt=0,vl=I=X=null,Vu=!1,La=0,ta=null,t)throw Error(m(300));l===null||bl||(l=l.dependencies,l!==null&&Xu(l)&&(bl=!0))}function bs(l,t,e,a){X=l;var u=0;do{if(la&&(ta=null),La=0,la=!1,25<=u)throw Error(m(301));if(u+=1,vl=I=null,l.updateQueue!=null){var n=l.updateQueue;n.lastEffect=null,n.events=null,n.stores=null,n.memoCache!=null&&(n.memoCache.index=0)}S.H=Oh,n=t(e,a)}while(la);return n}function bh(){var l=S.H,t=l.useState()[0];return t=typeof t.then=="function"?wa(t):t,l=l.useState()[0],(I!==null?I.memoizedState:null)!==l&&(X.flags|=1024),t}function qi(){var l=Ku!==0;return Ku=0,l}function Bi(l,t,e){t.updateQueue=l.updateQueue,t.flags&=-2053,l.lanes&=~e}function Yi(l){if(Vu){for(l=l.memoizedState;l!==null;){var t=l.queue;t!==null&&(t.pending=null),l=l.next}Vu=!1}kt=0,vl=I=X=null,la=!1,La=Ku=0,ta=null}function Ql(){var l={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vl===null?X.memoizedState=vl=l:vl=vl.next=l,vl}function ml(){if(I===null){var l=X.alternate;l=l!==null?l.memoizedState:null}else l=I.next;var t=vl===null?X.memoizedState:vl.next;if(t!==null)vl=t,I=l;else{if(l===null)throw X.alternate===null?Error(m(467)):Error(m(310));I=l,l={memoizedState:I.memoizedState,baseState:I.baseState,baseQueue:I.baseQueue,queue:I.queue,next:null},vl===null?X.memoizedState=vl=l:vl=vl.next=l}return vl}function ji(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function wa(l){var t=La;return La+=1,ta===null&&(ta=[]),l=hs(ta,l,t),t=X,(vl===null?t.memoizedState:vl.next)===null&&(t=t.alternate,S.H=t===null||t.memoizedState===null?tr:er),l}function Ju(l){if(l!==null&&typeof l=="object"){if(typeof l.then=="function")return wa(l);if(l.$$typeof===Ol)return Rl(l)}throw Error(m(438,String(l)))}function Gi(l){var t=null,e=X.updateQueue;if(e!==null&&(t=e.memoCache),t==null){var a=X.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(u){return u.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),e===null&&(e=ji(),X.updateQueue=e),e.memoCache=t,e=t.data[t.index],e===void 0)for(e=t.data[t.index]=Array(l),a=0;a<l;a++)e[a]=xe;return t.index++,e}function xt(l,t){return typeof t=="function"?t(l):t}function ku(l){var t=ml();return Xi(t,I,l)}function Xi(l,t,e){var a=l.queue;if(a===null)throw Error(m(311));a.lastRenderedReducer=e;var u=l.baseQueue,n=a.pending;if(n!==null){if(u!==null){var i=u.next;u.next=n.next,n.next=i}t.baseQueue=u=n,a.pending=null}if(n=l.baseState,u===null)l.memoizedState=n;else{t=u.next;var f=i=null,c=null,h=t,g=!1;do{var b=h.lane&-536870913;if(b!==h.lane?(L&b)===b:(kt&b)===b){var y=h.revertLane;if(y===0)c!==null&&(c=c.next={lane:0,revertLane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),b===Fe&&(g=!0);else if((kt&y)===y){h=h.next,y===Fe&&(g=!0);continue}else b={lane:0,revertLane:h.revertLane,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},c===null?(f=c=b,i=n):c=c.next=b,X.lanes|=y,te|=y;b=h.action,Me&&e(n,b),n=h.hasEagerState?h.eagerState:e(n,b)}else y={lane:b,revertLane:h.revertLane,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},c===null?(f=c=y,i=n):c=c.next=y,X.lanes|=b,te|=b;h=h.next}while(h!==null&&h!==t);if(c===null?i=n:c.next=f,!Wl(n,l.memoizedState)&&(bl=!0,g&&(e=Ie,e!==null)))throw e;l.memoizedState=n,l.baseState=i,l.baseQueue=c,a.lastRenderedState=n}return u===null&&(a.lanes=0),[l.memoizedState,a.dispatch]}function Qi(l){var t=ml(),e=t.queue;if(e===null)throw Error(m(311));e.lastRenderedReducer=l;var a=e.dispatch,u=e.pending,n=t.memoizedState;if(u!==null){e.pending=null;var i=u=u.next;do n=l(n,i.action),i=i.next;while(i!==u);Wl(n,t.memoizedState)||(bl=!0),t.memoizedState=n,t.baseQueue===null&&(t.baseState=n),e.lastRenderedState=n}return[n,a]}function Es(l,t,e){var a=X,u=ml(),n=k;if(n){if(e===void 0)throw Error(m(407));e=e()}else e=t();var i=!Wl((I||u).memoizedState,e);i&&(u.memoizedState=e,bl=!0),u=u.queue;var f=As.bind(null,a,u,l);if(Va(2048,8,f,[l]),u.getSnapshot!==t||i||vl!==null&&vl.memoizedState.tag&1){if(a.flags|=2048,ea(9,Wu(),_s.bind(null,a,u,e,t),null),ul===null)throw Error(m(349));n||(kt&124)!==0||Ts(a,t,e)}return e}function Ts(l,t,e){l.flags|=16384,l={getSnapshot:t,value:e},t=X.updateQueue,t===null?(t=ji(),X.updateQueue=t,t.stores=[l]):(e=t.stores,e===null?t.stores=[l]:e.push(l))}function _s(l,t,e,a){t.value=e,t.getSnapshot=a,zs(t)&&Os(l)}function As(l,t,e){return e(function(){zs(t)&&Os(l)})}function zs(l){var t=l.getSnapshot;l=l.value;try{var e=t();return!Wl(l,e)}catch{return!0}}function Os(l){var t=Je(l,2);t!==null&&tt(t,l,2)}function Ci(l){var t=Ql();if(typeof l=="function"){var e=l;if(l=e(),Me){Ct(!0);try{e()}finally{Ct(!1)}}}return t.memoizedState=t.baseState=l,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xt,lastRenderedState:l},t}function Ms(l,t,e,a){return l.baseState=e,Xi(l,I,typeof a=="function"?a:xt)}function Eh(l,t,e,a,u){if(Fu(l))throw Error(m(485));if(l=t.action,l!==null){var n={payload:u,action:l,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){n.listeners.push(i)}};S.T!==null?e(!0):n.isTransition=!1,a(n),e=t.pending,e===null?(n.next=t.pending=n,Ds(t,n)):(n.next=e.next,t.pending=e.next=n)}}function Ds(l,t){var e=t.action,a=t.payload,u=l.state;if(t.isTransition){var n=S.T,i={};S.T=i;try{var f=e(u,a),c=S.S;c!==null&&c(i,f),Us(l,t,f)}catch(h){Zi(l,t,h)}finally{S.T=n}}else try{n=e(u,a),Us(l,t,n)}catch(h){Zi(l,t,h)}}function Us(l,t,e){e!==null&&typeof e=="object"&&typeof e.then=="function"?e.then(function(a){Rs(l,t,a)},function(a){return Zi(l,t,a)}):Rs(l,t,e)}function Rs(l,t,e){t.status="fulfilled",t.value=e,Ns(t),l.state=e,t=l.pending,t!==null&&(e=t.next,e===t?l.pending=null:(e=e.next,t.next=e,Ds(l,e)))}function Zi(l,t,e){var a=l.pending;if(l.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=e,Ns(t),t=t.next;while(t!==a)}l.action=null}function Ns(l){l=l.listeners;for(var t=0;t<l.length;t++)(0,l[t])()}function xs(l,t){return t}function Hs(l,t){if(k){var e=ul.formState;if(e!==null){l:{var a=X;if(k){if(rl){t:{for(var u=rl,n=St;u.nodeType!==8;){if(!n){u=null;break t}if(u=vt(u.nextSibling),u===null){u=null;break t}}n=u.data,u=n==="F!"||n==="F"?u:null}if(u){rl=vt(u.nextSibling),a=u.data==="F!";break l}}_e(a)}a=!1}a&&(t=e[0])}}return e=Ql(),e.memoizedState=e.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xs,lastRenderedState:t},e.queue=a,e=Is.bind(null,X,a),a.dispatch=e,a=Ci(!1),n=Ji.bind(null,X,!1,a.queue),a=Ql(),u={state:t,dispatch:null,action:l,pending:null},a.queue=u,e=Eh.bind(null,X,u,n,e),u.dispatch=e,a.memoizedState=l,[t,e,!1]}function qs(l){var t=ml();return Bs(t,I,l)}function Bs(l,t,e){if(t=Xi(l,t,xs)[0],l=ku(xt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=wa(t)}catch(i){throw i===Ga?Zu:i}else a=t;t=ml();var u=t.queue,n=u.dispatch;return e!==t.memoizedState&&(X.flags|=2048,ea(9,Wu(),Th.bind(null,u,e),null)),[a,n,l]}function Th(l,t){l.action=t}function Ys(l){var t=ml(),e=I;if(e!==null)return Bs(t,e,l);ml(),t=t.memoizedState,e=ml();var a=e.queue.dispatch;return e.memoizedState=l,[t,a,!1]}function ea(l,t,e,a){return l={tag:l,create:e,deps:a,inst:t,next:null},t=X.updateQueue,t===null&&(t=ji(),X.updateQueue=t),e=t.lastEffect,e===null?t.lastEffect=l.next=l:(a=e.next,e.next=l,l.next=a,t.lastEffect=l),l}function Wu(){return{destroy:void 0,resource:void 0}}function js(){return ml().memoizedState}function $u(l,t,e,a){var u=Ql();a=a===void 0?null:a,X.flags|=l,u.memoizedState=ea(1|t,Wu(),e,a)}function Va(l,t,e,a){var u=ml();a=a===void 0?null:a;var n=u.memoizedState.inst;I!==null&&a!==null&&xi(a,I.memoizedState.deps)?u.memoizedState=ea(t,n,e,a):(X.flags|=l,u.memoizedState=ea(1|t,n,e,a))}function Gs(l,t){$u(8390656,8,l,t)}function Xs(l,t){Va(2048,8,l,t)}function Qs(l,t){return Va(4,2,l,t)}function Cs(l,t){return Va(4,4,l,t)}function Zs(l,t){if(typeof t=="function"){l=l();var e=t(l);return function(){typeof e=="function"?e():t(null)}}if(t!=null)return l=l(),t.current=l,function(){t.current=null}}function Ls(l,t,e){e=e!=null?e.concat([l]):null,Va(4,4,Zs.bind(null,t,l),e)}function Li(){}function ws(l,t){var e=ml();t=t===void 0?null:t;var a=e.memoizedState;return t!==null&&xi(t,a[1])?a[0]:(e.memoizedState=[l,t],l)}function Vs(l,t){var e=ml();t=t===void 0?null:t;var a=e.memoizedState;if(t!==null&&xi(t,a[1]))return a[0];if(a=l(),Me){Ct(!0);try{l()}finally{Ct(!1)}}return e.memoizedState=[a,t],a}function wi(l,t,e){return e===void 0||(kt&1073741824)!==0?l.memoizedState=t:(l.memoizedState=e,l=kr(),X.lanes|=l,te|=l,e)}function Ks(l,t,e,a){return Wl(e,t)?e:Pe.current!==null?(l=wi(l,e,a),Wl(l,t)||(bl=!0),l):(kt&42)===0?(bl=!0,l.memoizedState=e):(l=kr(),X.lanes|=l,te|=l,t)}function Js(l,t,e,a,u){var n=A.p;A.p=n!==0&&8>n?n:8;var i=S.T,f={};S.T=f,Ji(l,!1,t,e);try{var c=u(),h=S.S;if(h!==null&&h(f,c),c!==null&&typeof c=="object"&&typeof c.then=="function"){var g=Sh(c,a);Ka(l,t,g,lt(l))}else Ka(l,t,a,lt(l))}catch(b){Ka(l,t,{then:function(){},status:"rejected",reason:b},lt())}finally{A.p=n,S.T=i}}function _h(){}function Vi(l,t,e,a){if(l.tag!==5)throw Error(m(476));var u=ks(l).queue;Js(l,u,t,B,e===null?_h:function(){return Ws(l),e(a)})}function ks(l){var t=l.memoizedState;if(t!==null)return t;t={memoizedState:B,baseState:B,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xt,lastRenderedState:B},next:null};var e={};return t.next={memoizedState:e,baseState:e,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xt,lastRenderedState:e},next:null},l.memoizedState=t,l=l.alternate,l!==null&&(l.memoizedState=t),t}function Ws(l){var t=ks(l).next.queue;Ka(l,t,{},lt())}function Ki(){return Rl(ru)}function $s(){return ml().memoizedState}function Fs(){return ml().memoizedState}function Ah(l){for(var t=l.return;t!==null;){switch(t.tag){case 24:case 3:var e=lt();l=Kt(e);var a=Jt(t,l,e);a!==null&&(tt(a,t,e),Qa(a,t,e)),t={cache:Ti()},l.payload=t;return}t=t.return}}function zh(l,t,e){var a=lt();e={lane:a,revertLane:0,action:e,hasEagerState:!1,eagerState:null,next:null},Fu(l)?Ps(t,e):(e=di(l,t,e,a),e!==null&&(tt(e,l,a),lr(e,t,a)))}function Is(l,t,e){var a=lt();Ka(l,t,e,a)}function Ka(l,t,e,a){var u={lane:a,revertLane:0,action:e,hasEagerState:!1,eagerState:null,next:null};if(Fu(l))Ps(t,u);else{var n=l.alternate;if(l.lanes===0&&(n===null||n.lanes===0)&&(n=t.lastRenderedReducer,n!==null))try{var i=t.lastRenderedState,f=n(i,e);if(u.hasEagerState=!0,u.eagerState=f,Wl(f,i))return qu(l,t,u,0),ul===null&&Hu(),!1}catch{}finally{}if(e=di(l,t,u,a),e!==null)return tt(e,l,a),lr(e,t,a),!0}return!1}function Ji(l,t,e,a){if(a={lane:2,revertLane:Of(),action:a,hasEagerState:!1,eagerState:null,next:null},Fu(l)){if(t)throw Error(m(479))}else t=di(l,e,a,2),t!==null&&tt(t,l,2)}function Fu(l){var t=l.alternate;return l===X||t!==null&&t===X}function Ps(l,t){la=Vu=!0;var e=l.pending;e===null?t.next=t:(t.next=e.next,e.next=t),l.pending=t}function lr(l,t,e){if((e&4194048)!==0){var a=t.lanes;a&=l.pendingLanes,e|=a,t.lanes=e,cc(l,e)}}var Iu={readContext:Rl,use:Ju,useCallback:hl,useContext:hl,useEffect:hl,useImperativeHandle:hl,useLayoutEffect:hl,useInsertionEffect:hl,useMemo:hl,useReducer:hl,useRef:hl,useState:hl,useDebugValue:hl,useDeferredValue:hl,useTransition:hl,useSyncExternalStore:hl,useId:hl,useHostTransitionStatus:hl,useFormState:hl,useActionState:hl,useOptimistic:hl,useMemoCache:hl,useCacheRefresh:hl},tr={readContext:Rl,use:Ju,useCallback:function(l,t){return Ql().memoizedState=[l,t===void 0?null:t],l},useContext:Rl,useEffect:Gs,useImperativeHandle:function(l,t,e){e=e!=null?e.concat([l]):null,$u(4194308,4,Zs.bind(null,t,l),e)},useLayoutEffect:function(l,t){return $u(4194308,4,l,t)},useInsertionEffect:function(l,t){$u(4,2,l,t)},useMemo:function(l,t){var e=Ql();t=t===void 0?null:t;var a=l();if(Me){Ct(!0);try{l()}finally{Ct(!1)}}return e.memoizedState=[a,t],a},useReducer:function(l,t,e){var a=Ql();if(e!==void 0){var u=e(t);if(Me){Ct(!0);try{e(t)}finally{Ct(!1)}}}else u=t;return a.memoizedState=a.baseState=u,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:l,lastRenderedState:u},a.queue=l,l=l.dispatch=zh.bind(null,X,l),[a.memoizedState,l]},useRef:function(l){var t=Ql();return l={current:l},t.memoizedState=l},useState:function(l){l=Ci(l);var t=l.queue,e=Is.bind(null,X,t);return t.dispatch=e,[l.memoizedState,e]},useDebugValue:Li,useDeferredValue:function(l,t){var e=Ql();return wi(e,l,t)},useTransition:function(){var l=Ci(!1);return l=Js.bind(null,X,l.queue,!0,!1),Ql().memoizedState=l,[!1,l]},useSyncExternalStore:function(l,t,e){var a=X,u=Ql();if(k){if(e===void 0)throw Error(m(407));e=e()}else{if(e=t(),ul===null)throw Error(m(349));(L&124)!==0||Ts(a,t,e)}u.memoizedState=e;var n={value:e,getSnapshot:t};return u.queue=n,Gs(As.bind(null,a,n,l),[l]),a.flags|=2048,ea(9,Wu(),_s.bind(null,a,n,e,t),null),e},useId:function(){var l=Ql(),t=ul.identifierPrefix;if(k){var e=Ut,a=Dt;e=(a&~(1<<32-kl(a)-1)).toString(32)+e,t="«"+t+"R"+e,e=Ku++,0<e&&(t+="H"+e.toString(32)),t+="»"}else e=ph++,t="«"+t+"r"+e.toString(32)+"»";return l.memoizedState=t},useHostTransitionStatus:Ki,useFormState:Hs,useActionState:Hs,useOptimistic:function(l){var t=Ql();t.memoizedState=t.baseState=l;var e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=e,t=Ji.bind(null,X,!0,e),e.dispatch=t,[l,t]},useMemoCache:Gi,useCacheRefresh:function(){return Ql().memoizedState=Ah.bind(null,X)}},er={readContext:Rl,use:Ju,useCallback:ws,useContext:Rl,useEffect:Xs,useImperativeHandle:Ls,useInsertionEffect:Qs,useLayoutEffect:Cs,useMemo:Vs,useReducer:ku,useRef:js,useState:function(){return ku(xt)},useDebugValue:Li,useDeferredValue:function(l,t){var e=ml();return Ks(e,I.memoizedState,l,t)},useTransition:function(){var l=ku(xt)[0],t=ml().memoizedState;return[typeof l=="boolean"?l:wa(l),t]},useSyncExternalStore:Es,useId:$s,useHostTransitionStatus:Ki,useFormState:qs,useActionState:qs,useOptimistic:function(l,t){var e=ml();return Ms(e,I,l,t)},useMemoCache:Gi,useCacheRefresh:Fs},Oh={readContext:Rl,use:Ju,useCallback:ws,useContext:Rl,useEffect:Xs,useImperativeHandle:Ls,useInsertionEffect:Qs,useLayoutEffect:Cs,useMemo:Vs,useReducer:Qi,useRef:js,useState:function(){return Qi(xt)},useDebugValue:Li,useDeferredValue:function(l,t){var e=ml();return I===null?wi(e,l,t):Ks(e,I.memoizedState,l,t)},useTransition:function(){var l=Qi(xt)[0],t=ml().memoizedState;return[typeof l=="boolean"?l:wa(l),t]},useSyncExternalStore:Es,useId:$s,useHostTransitionStatus:Ki,useFormState:Ys,useActionState:Ys,useOptimistic:function(l,t){var e=ml();return I!==null?Ms(e,I,l,t):(e.baseState=l,[l,e.queue.dispatch])},useMemoCache:Gi,useCacheRefresh:Fs},aa=null,Ja=0;function Pu(l){var t=Ja;return Ja+=1,aa===null&&(aa=[]),hs(aa,l,t)}function ka(l,t){t=t.props.ref,l.ref=t!==void 0?t:null}function ln(l,t){throw t.$$typeof===nl?Error(m(525)):(l=Object.prototype.toString.call(t),Error(m(31,l==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":l)))}function ar(l){var t=l._init;return t(l._payload)}function ur(l){function t(o,r){if(l){var d=o.deletions;d===null?(o.deletions=[r],o.flags|=16):d.push(r)}}function e(o,r){if(!l)return null;for(;r!==null;)t(o,r),r=r.sibling;return null}function a(o){for(var r=new Map;o!==null;)o.key!==null?r.set(o.key,o):r.set(o.index,o),o=o.sibling;return r}function u(o,r){return o=Mt(o,r),o.index=0,o.sibling=null,o}function n(o,r,d){return o.index=d,l?(d=o.alternate,d!==null?(d=d.index,d<r?(o.flags|=67108866,r):d):(o.flags|=67108866,r)):(o.flags|=1048576,r)}function i(o){return l&&o.alternate===null&&(o.flags|=67108866),o}function f(o,r,d,p){return r===null||r.tag!==6?(r=yi(d,o.mode,p),r.return=o,r):(r=u(r,d),r.return=o,r)}function c(o,r,d,p){var O=d.type;return O===ql?g(o,r,d.props.children,p,d.key):r!==null&&(r.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Vl&&ar(O)===r.type)?(r=u(r,d.props),ka(r,d),r.return=o,r):(r=Yu(d.type,d.key,d.props,null,o.mode,p),ka(r,d),r.return=o,r)}function h(o,r,d,p){return r===null||r.tag!==4||r.stateNode.containerInfo!==d.containerInfo||r.stateNode.implementation!==d.implementation?(r=vi(d,o.mode,p),r.return=o,r):(r=u(r,d.children||[]),r.return=o,r)}function g(o,r,d,p,O){return r===null||r.tag!==7?(r=pe(d,o.mode,p,O),r.return=o,r):(r=u(r,d),r.return=o,r)}function b(o,r,d){if(typeof r=="string"&&r!==""||typeof r=="number"||typeof r=="bigint")return r=yi(""+r,o.mode,d),r.return=o,r;if(typeof r=="object"&&r!==null){switch(r.$$typeof){case al:return d=Yu(r.type,r.key,r.props,null,o.mode,d),ka(d,r),d.return=o,d;case Hl:return r=vi(r,o.mode,d),r.return=o,r;case Vl:var p=r._init;return r=p(r._payload),b(o,r,d)}if(Dl(r)||Ml(r))return r=pe(r,o.mode,d,null),r.return=o,r;if(typeof r.then=="function")return b(o,Pu(r),d);if(r.$$typeof===Ol)return b(o,Qu(o,r),d);ln(o,r)}return null}function y(o,r,d,p){var O=r!==null?r.key:null;if(typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint")return O!==null?null:f(o,r,""+d,p);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case al:return d.key===O?c(o,r,d,p):null;case Hl:return d.key===O?h(o,r,d,p):null;case Vl:return O=d._init,d=O(d._payload),y(o,r,d,p)}if(Dl(d)||Ml(d))return O!==null?null:g(o,r,d,p,null);if(typeof d.then=="function")return y(o,r,Pu(d),p);if(d.$$typeof===Ol)return y(o,r,Qu(o,d),p);ln(o,d)}return null}function v(o,r,d,p,O){if(typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint")return o=o.get(d)||null,f(r,o,""+p,O);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case al:return o=o.get(p.key===null?d:p.key)||null,c(r,o,p,O);case Hl:return o=o.get(p.key===null?d:p.key)||null,h(r,o,p,O);case Vl:var Q=p._init;return p=Q(p._payload),v(o,r,d,p,O)}if(Dl(p)||Ml(p))return o=o.get(d)||null,g(r,o,p,O,null);if(typeof p.then=="function")return v(o,r,d,Pu(p),O);if(p.$$typeof===Ol)return v(o,r,d,Qu(r,p),O);ln(r,p)}return null}function Y(o,r,d,p){for(var O=null,Q=null,D=r,H=r=0,Tl=null;D!==null&&H<d.length;H++){D.index>H?(Tl=D,D=null):Tl=D.sibling;var K=y(o,D,d[H],p);if(K===null){D===null&&(D=Tl);break}l&&D&&K.alternate===null&&t(o,D),r=n(K,r,H),Q===null?O=K:Q.sibling=K,Q=K,D=Tl}if(H===d.length)return e(o,D),k&&Ee(o,H),O;if(D===null){for(;H<d.length;H++)D=b(o,d[H],p),D!==null&&(r=n(D,r,H),Q===null?O=D:Q.sibling=D,Q=D);return k&&Ee(o,H),O}for(D=a(D);H<d.length;H++)Tl=v(D,o,H,d[H],p),Tl!==null&&(l&&Tl.alternate!==null&&D.delete(Tl.key===null?H:Tl.key),r=n(Tl,r,H),Q===null?O=Tl:Q.sibling=Tl,Q=Tl);return l&&D.forEach(function(re){return t(o,re)}),k&&Ee(o,H),O}function x(o,r,d,p){if(d==null)throw Error(m(151));for(var O=null,Q=null,D=r,H=r=0,Tl=null,K=d.next();D!==null&&!K.done;H++,K=d.next()){D.index>H?(Tl=D,D=null):Tl=D.sibling;var re=y(o,D,K.value,p);if(re===null){D===null&&(D=Tl);break}l&&D&&re.alternate===null&&t(o,D),r=n(re,r,H),Q===null?O=re:Q.sibling=re,Q=re,D=Tl}if(K.done)return e(o,D),k&&Ee(o,H),O;if(D===null){for(;!K.done;H++,K=d.next())K=b(o,K.value,p),K!==null&&(r=n(K,r,H),Q===null?O=K:Q.sibling=K,Q=K);return k&&Ee(o,H),O}for(D=a(D);!K.done;H++,K=d.next())K=v(D,o,H,K.value,p),K!==null&&(l&&K.alternate!==null&&D.delete(K.key===null?H:K.key),r=n(K,r,H),Q===null?O=K:Q.sibling=K,Q=K);return l&&D.forEach(function(M0){return t(o,M0)}),k&&Ee(o,H),O}function ll(o,r,d,p){if(typeof d=="object"&&d!==null&&d.type===ql&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case al:l:{for(var O=d.key;r!==null;){if(r.key===O){if(O=d.type,O===ql){if(r.tag===7){e(o,r.sibling),p=u(r,d.props.children),p.return=o,o=p;break l}}else if(r.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Vl&&ar(O)===r.type){e(o,r.sibling),p=u(r,d.props),ka(p,d),p.return=o,o=p;break l}e(o,r);break}else t(o,r);r=r.sibling}d.type===ql?(p=pe(d.props.children,o.mode,p,d.key),p.return=o,o=p):(p=Yu(d.type,d.key,d.props,null,o.mode,p),ka(p,d),p.return=o,o=p)}return i(o);case Hl:l:{for(O=d.key;r!==null;){if(r.key===O)if(r.tag===4&&r.stateNode.containerInfo===d.containerInfo&&r.stateNode.implementation===d.implementation){e(o,r.sibling),p=u(r,d.children||[]),p.return=o,o=p;break l}else{e(o,r);break}else t(o,r);r=r.sibling}p=vi(d,o.mode,p),p.return=o,o=p}return i(o);case Vl:return O=d._init,d=O(d._payload),ll(o,r,d,p)}if(Dl(d))return Y(o,r,d,p);if(Ml(d)){if(O=Ml(d),typeof O!="function")throw Error(m(150));return d=O.call(d),x(o,r,d,p)}if(typeof d.then=="function")return ll(o,r,Pu(d),p);if(d.$$typeof===Ol)return ll(o,r,Qu(o,d),p);ln(o,d)}return typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint"?(d=""+d,r!==null&&r.tag===6?(e(o,r.sibling),p=u(r,d),p.return=o,o=p):(e(o,r),p=yi(d,o.mode,p),p.return=o,o=p),i(o)):e(o,r)}return function(o,r,d,p){try{Ja=0;var O=ll(o,r,d,p);return aa=null,O}catch(D){if(D===Ga||D===Zu)throw D;var Q=$l(29,D,null,o.mode);return Q.lanes=p,Q.return=o,Q}finally{}}}var ua=ur(!0),nr=ur(!1),ct=E(null),pt=null;function Wt(l){var t=l.alternate;_(Sl,Sl.current&1),_(ct,l),pt===null&&(t===null||Pe.current!==null||t.memoizedState!==null)&&(pt=l)}function ir(l){if(l.tag===22){if(_(Sl,Sl.current),_(ct,l),pt===null){var t=l.alternate;t!==null&&t.memoizedState!==null&&(pt=l)}}else $t()}function $t(){_(Sl,Sl.current),_(ct,ct.current)}function Ht(l){z(ct),pt===l&&(pt=null),z(Sl)}var Sl=E(0);function tn(l){for(var t=l;t!==null;){if(t.tag===13){var e=t.memoizedState;if(e!==null&&(e=e.dehydrated,e===null||e.data==="$?"||Gf(e)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===l)break;for(;t.sibling===null;){if(t.return===null||t.return===l)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function ki(l,t,e,a){t=l.memoizedState,e=e(a,t),e=e==null?t:U({},t,e),l.memoizedState=e,l.lanes===0&&(l.updateQueue.baseState=e)}var Wi={enqueueSetState:function(l,t,e){l=l._reactInternals;var a=lt(),u=Kt(a);u.payload=t,e!=null&&(u.callback=e),t=Jt(l,u,a),t!==null&&(tt(t,l,a),Qa(t,l,a))},enqueueReplaceState:function(l,t,e){l=l._reactInternals;var a=lt(),u=Kt(a);u.tag=1,u.payload=t,e!=null&&(u.callback=e),t=Jt(l,u,a),t!==null&&(tt(t,l,a),Qa(t,l,a))},enqueueForceUpdate:function(l,t){l=l._reactInternals;var e=lt(),a=Kt(e);a.tag=2,t!=null&&(a.callback=t),t=Jt(l,a,e),t!==null&&(tt(t,l,e),Qa(t,l,e))}};function fr(l,t,e,a,u,n,i){return l=l.stateNode,typeof l.shouldComponentUpdate=="function"?l.shouldComponentUpdate(a,n,i):t.prototype&&t.prototype.isPureReactComponent?!Ra(e,a)||!Ra(u,n):!0}function cr(l,t,e,a){l=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(e,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(e,a),t.state!==l&&Wi.enqueueReplaceState(t,t.state,null)}function De(l,t){var e=t;if("ref"in t){e={};for(var a in t)a!=="ref"&&(e[a]=t[a])}if(l=l.defaultProps){e===t&&(e=U({},e));for(var u in l)e[u]===void 0&&(e[u]=l[u])}return e}var en=typeof reportError=="function"?reportError:function(l){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof l=="object"&&l!==null&&typeof l.message=="string"?String(l.message):String(l),error:l});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",l);return}console.error(l)};function sr(l){en(l)}function rr(l){console.error(l)}function or(l){en(l)}function an(l,t){try{var e=l.onUncaughtError;e(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function dr(l,t,e){try{var a=l.onCaughtError;a(e.value,{componentStack:e.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function $i(l,t,e){return e=Kt(e),e.tag=3,e.payload={element:null},e.callback=function(){an(l,t)},e}function hr(l){return l=Kt(l),l.tag=3,l}function yr(l,t,e,a){var u=e.type.getDerivedStateFromError;if(typeof u=="function"){var n=a.value;l.payload=function(){return u(n)},l.callback=function(){dr(t,e,a)}}var i=e.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(l.callback=function(){dr(t,e,a),typeof u!="function"&&(ee===null?ee=new Set([this]):ee.add(this));var f=a.stack;this.componentDidCatch(a.value,{componentStack:f!==null?f:""})})}function Mh(l,t,e,a,u){if(e.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=e.alternate,t!==null&&Ba(t,e,u,!0),e=ct.current,e!==null){switch(e.tag){case 13:return pt===null?Ef():e.alternate===null&&ol===0&&(ol=3),e.flags&=-257,e.flags|=65536,e.lanes=u,a===zi?e.flags|=16384:(t=e.updateQueue,t===null?e.updateQueue=new Set([a]):t.add(a),_f(l,a,u)),!1;case 22:return e.flags|=65536,a===zi?e.flags|=16384:(t=e.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},e.updateQueue=t):(e=t.retryQueue,e===null?t.retryQueue=new Set([a]):e.add(a)),_f(l,a,u)),!1}throw Error(m(435,e.tag))}return _f(l,a,u),Ef(),!1}if(k)return t=ct.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=u,a!==Si&&(l=Error(m(422),{cause:a}),qa(ut(l,e)))):(a!==Si&&(t=Error(m(423),{cause:a}),qa(ut(t,e))),l=l.current.alternate,l.flags|=65536,u&=-u,l.lanes|=u,a=ut(a,e),u=$i(l.stateNode,a,u),Di(l,u),ol!==4&&(ol=2)),!1;var n=Error(m(520),{cause:a});if(n=ut(n,e),tu===null?tu=[n]:tu.push(n),ol!==4&&(ol=2),t===null)return!0;a=ut(a,e),e=t;do{switch(e.tag){case 3:return e.flags|=65536,l=u&-u,e.lanes|=l,l=$i(e.stateNode,a,l),Di(e,l),!1;case 1:if(t=e.type,n=e.stateNode,(e.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||n!==null&&typeof n.componentDidCatch=="function"&&(ee===null||!ee.has(n))))return e.flags|=65536,u&=-u,e.lanes|=u,u=hr(u),yr(u,l,e,a),Di(e,u),!1}e=e.return}while(e!==null);return!1}var vr=Error(m(461)),bl=!1;function _l(l,t,e,a){t.child=l===null?nr(t,null,e,a):ua(t,l.child,e,a)}function mr(l,t,e,a,u){e=e.render;var n=t.ref;if("ref"in a){var i={};for(var f in a)f!=="ref"&&(i[f]=a[f])}else i=a;return ze(t),a=Hi(l,t,e,i,n,u),f=qi(),l!==null&&!bl?(Bi(l,t,u),qt(l,t,u)):(k&&f&&mi(t),t.flags|=1,_l(l,t,a,u),t.child)}function gr(l,t,e,a,u){if(l===null){var n=e.type;return typeof n=="function"&&!hi(n)&&n.defaultProps===void 0&&e.compare===null?(t.tag=15,t.type=n,Sr(l,t,n,a,u)):(l=Yu(e.type,null,a,t,t.mode,u),l.ref=t.ref,l.return=t,t.child=l)}if(n=l.child,!uf(l,u)){var i=n.memoizedProps;if(e=e.compare,e=e!==null?e:Ra,e(i,a)&&l.ref===t.ref)return qt(l,t,u)}return t.flags|=1,l=Mt(n,a),l.ref=t.ref,l.return=t,t.child=l}function Sr(l,t,e,a,u){if(l!==null){var n=l.memoizedProps;if(Ra(n,a)&&l.ref===t.ref)if(bl=!1,t.pendingProps=a=n,uf(l,u))(l.flags&131072)!==0&&(bl=!0);else return t.lanes=l.lanes,qt(l,t,u)}return Fi(l,t,e,a,u)}function pr(l,t,e){var a=t.pendingProps,u=a.children,n=l!==null?l.memoizedState:null;if(a.mode==="hidden"){if((t.flags&128)!==0){if(a=n!==null?n.baseLanes|e:e,l!==null){for(u=t.child=l.child,n=0;u!==null;)n=n|u.lanes|u.childLanes,u=u.sibling;t.childLanes=n&~a}else t.childLanes=0,t.child=null;return br(l,t,a,e)}if((e&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},l!==null&&Cu(t,n!==null?n.cachePool:null),n!==null?Ss(t,n):Ri(),ir(t);else return t.lanes=t.childLanes=536870912,br(l,t,n!==null?n.baseLanes|e:e,e)}else n!==null?(Cu(t,n.cachePool),Ss(t,n),$t(),t.memoizedState=null):(l!==null&&Cu(t,null),Ri(),$t());return _l(l,t,u,e),t.child}function br(l,t,e,a){var u=Ai();return u=u===null?null:{parent:gl._currentValue,pool:u},t.memoizedState={baseLanes:e,cachePool:u},l!==null&&Cu(t,null),Ri(),ir(t),l!==null&&Ba(l,t,a,!0),null}function un(l,t){var e=t.ref;if(e===null)l!==null&&l.ref!==null&&(t.flags|=4194816);else{if(typeof e!="function"&&typeof e!="object")throw Error(m(284));(l===null||l.ref!==e)&&(t.flags|=4194816)}}function Fi(l,t,e,a,u){return ze(t),e=Hi(l,t,e,a,void 0,u),a=qi(),l!==null&&!bl?(Bi(l,t,u),qt(l,t,u)):(k&&a&&mi(t),t.flags|=1,_l(l,t,e,u),t.child)}function Er(l,t,e,a,u,n){return ze(t),t.updateQueue=null,e=bs(t,a,e,u),ps(l),a=qi(),l!==null&&!bl?(Bi(l,t,n),qt(l,t,n)):(k&&a&&mi(t),t.flags|=1,_l(l,t,e,n),t.child)}function Tr(l,t,e,a,u){if(ze(t),t.stateNode===null){var n=ke,i=e.contextType;typeof i=="object"&&i!==null&&(n=Rl(i)),n=new e(a,n),t.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Wi,t.stateNode=n,n._reactInternals=t,n=t.stateNode,n.props=a,n.state=t.memoizedState,n.refs={},Oi(t),i=e.contextType,n.context=typeof i=="object"&&i!==null?Rl(i):ke,n.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(ki(t,e,i,a),n.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(i=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),i!==n.state&&Wi.enqueueReplaceState(n,n.state,null),Za(t,a,n,u),Ca(),n.state=t.memoizedState),typeof n.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(l===null){n=t.stateNode;var f=t.memoizedProps,c=De(e,f);n.props=c;var h=n.context,g=e.contextType;i=ke,typeof g=="object"&&g!==null&&(i=Rl(g));var b=e.getDerivedStateFromProps;g=typeof b=="function"||typeof n.getSnapshotBeforeUpdate=="function",f=t.pendingProps!==f,g||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(f||h!==i)&&cr(t,n,a,i),Vt=!1;var y=t.memoizedState;n.state=y,Za(t,a,n,u),Ca(),h=t.memoizedState,f||y!==h||Vt?(typeof b=="function"&&(ki(t,e,b,a),h=t.memoizedState),(c=Vt||fr(t,e,c,a,y,h,i))?(g||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount()),typeof n.componentDidMount=="function"&&(t.flags|=4194308)):(typeof n.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=h),n.props=a,n.state=h,n.context=i,a=c):(typeof n.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{n=t.stateNode,Mi(l,t),i=t.memoizedProps,g=De(e,i),n.props=g,b=t.pendingProps,y=n.context,h=e.contextType,c=ke,typeof h=="object"&&h!==null&&(c=Rl(h)),f=e.getDerivedStateFromProps,(h=typeof f=="function"||typeof n.getSnapshotBeforeUpdate=="function")||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(i!==b||y!==c)&&cr(t,n,a,c),Vt=!1,y=t.memoizedState,n.state=y,Za(t,a,n,u),Ca();var v=t.memoizedState;i!==b||y!==v||Vt||l!==null&&l.dependencies!==null&&Xu(l.dependencies)?(typeof f=="function"&&(ki(t,e,f,a),v=t.memoizedState),(g=Vt||fr(t,e,g,a,y,v,c)||l!==null&&l.dependencies!==null&&Xu(l.dependencies))?(h||typeof n.UNSAFE_componentWillUpdate!="function"&&typeof n.componentWillUpdate!="function"||(typeof n.componentWillUpdate=="function"&&n.componentWillUpdate(a,v,c),typeof n.UNSAFE_componentWillUpdate=="function"&&n.UNSAFE_componentWillUpdate(a,v,c)),typeof n.componentDidUpdate=="function"&&(t.flags|=4),typeof n.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof n.componentDidUpdate!="function"||i===l.memoizedProps&&y===l.memoizedState||(t.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||i===l.memoizedProps&&y===l.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=v),n.props=a,n.state=v,n.context=c,a=g):(typeof n.componentDidUpdate!="function"||i===l.memoizedProps&&y===l.memoizedState||(t.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||i===l.memoizedProps&&y===l.memoizedState||(t.flags|=1024),a=!1)}return n=a,un(l,t),a=(t.flags&128)!==0,n||a?(n=t.stateNode,e=a&&typeof e.getDerivedStateFromError!="function"?null:n.render(),t.flags|=1,l!==null&&a?(t.child=ua(t,l.child,null,u),t.child=ua(t,null,e,u)):_l(l,t,e,u),t.memoizedState=n.state,l=t.child):l=qt(l,t,u),l}function _r(l,t,e,a){return Ha(),t.flags|=256,_l(l,t,e,a),t.child}var Ii={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Pi(l){return{baseLanes:l,cachePool:rs()}}function lf(l,t,e){return l=l!==null?l.childLanes&~e:0,t&&(l|=st),l}function Ar(l,t,e){var a=t.pendingProps,u=!1,n=(t.flags&128)!==0,i;if((i=n)||(i=l!==null&&l.memoizedState===null?!1:(Sl.current&2)!==0),i&&(u=!0,t.flags&=-129),i=(t.flags&32)!==0,t.flags&=-33,l===null){if(k){if(u?Wt(t):$t(),k){var f=rl,c;if(c=f){l:{for(c=f,f=St;c.nodeType!==8;){if(!f){f=null;break l}if(c=vt(c.nextSibling),c===null){f=null;break l}}f=c}f!==null?(t.memoizedState={dehydrated:f,treeContext:be!==null?{id:Dt,overflow:Ut}:null,retryLane:536870912,hydrationErrors:null},c=$l(18,null,null,0),c.stateNode=f,c.return=t,t.child=c,Bl=t,rl=null,c=!0):c=!1}c||_e(t)}if(f=t.memoizedState,f!==null&&(f=f.dehydrated,f!==null))return Gf(f)?t.lanes=32:t.lanes=536870912,null;Ht(t)}return f=a.children,a=a.fallback,u?($t(),u=t.mode,f=nn({mode:"hidden",children:f},u),a=pe(a,u,e,null),f.return=t,a.return=t,f.sibling=a,t.child=f,u=t.child,u.memoizedState=Pi(e),u.childLanes=lf(l,i,e),t.memoizedState=Ii,a):(Wt(t),tf(t,f))}if(c=l.memoizedState,c!==null&&(f=c.dehydrated,f!==null)){if(n)t.flags&256?(Wt(t),t.flags&=-257,t=ef(l,t,e)):t.memoizedState!==null?($t(),t.child=l.child,t.flags|=128,t=null):($t(),u=a.fallback,f=t.mode,a=nn({mode:"visible",children:a.children},f),u=pe(u,f,e,null),u.flags|=2,a.return=t,u.return=t,a.sibling=u,t.child=a,ua(t,l.child,null,e),a=t.child,a.memoizedState=Pi(e),a.childLanes=lf(l,i,e),t.memoizedState=Ii,t=u);else if(Wt(t),Gf(f)){if(i=f.nextSibling&&f.nextSibling.dataset,i)var h=i.dgst;i=h,a=Error(m(419)),a.stack="",a.digest=i,qa({value:a,source:null,stack:null}),t=ef(l,t,e)}else if(bl||Ba(l,t,e,!1),i=(e&l.childLanes)!==0,bl||i){if(i=ul,i!==null&&(a=e&-e,a=(a&42)!==0?1:Gn(a),a=(a&(i.suspendedLanes|e))!==0?0:a,a!==0&&a!==c.retryLane))throw c.retryLane=a,Je(l,a),tt(i,l,a),vr;f.data==="$?"||Ef(),t=ef(l,t,e)}else f.data==="$?"?(t.flags|=192,t.child=l.child,t=null):(l=c.treeContext,rl=vt(f.nextSibling),Bl=t,k=!0,Te=null,St=!1,l!==null&&(it[ft++]=Dt,it[ft++]=Ut,it[ft++]=be,Dt=l.id,Ut=l.overflow,be=t),t=tf(t,a.children),t.flags|=4096);return t}return u?($t(),u=a.fallback,f=t.mode,c=l.child,h=c.sibling,a=Mt(c,{mode:"hidden",children:a.children}),a.subtreeFlags=c.subtreeFlags&65011712,h!==null?u=Mt(h,u):(u=pe(u,f,e,null),u.flags|=2),u.return=t,a.return=t,a.sibling=u,t.child=a,a=u,u=t.child,f=l.child.memoizedState,f===null?f=Pi(e):(c=f.cachePool,c!==null?(h=gl._currentValue,c=c.parent!==h?{parent:h,pool:h}:c):c=rs(),f={baseLanes:f.baseLanes|e,cachePool:c}),u.memoizedState=f,u.childLanes=lf(l,i,e),t.memoizedState=Ii,a):(Wt(t),e=l.child,l=e.sibling,e=Mt(e,{mode:"visible",children:a.children}),e.return=t,e.sibling=null,l!==null&&(i=t.deletions,i===null?(t.deletions=[l],t.flags|=16):i.push(l)),t.child=e,t.memoizedState=null,e)}function tf(l,t){return t=nn({mode:"visible",children:t},l.mode),t.return=l,l.child=t}function nn(l,t){return l=$l(22,l,null,t),l.lanes=0,l.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},l}function ef(l,t,e){return ua(t,l.child,null,e),l=tf(t,t.pendingProps.children),l.flags|=2,t.memoizedState=null,l}function zr(l,t,e){l.lanes|=t;var a=l.alternate;a!==null&&(a.lanes|=t),bi(l.return,t,e)}function af(l,t,e,a,u){var n=l.memoizedState;n===null?l.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:e,tailMode:u}:(n.isBackwards=t,n.rendering=null,n.renderingStartTime=0,n.last=a,n.tail=e,n.tailMode=u)}function Or(l,t,e){var a=t.pendingProps,u=a.revealOrder,n=a.tail;if(_l(l,t,a.children,e),a=Sl.current,(a&2)!==0)a=a&1|2,t.flags|=128;else{if(l!==null&&(l.flags&128)!==0)l:for(l=t.child;l!==null;){if(l.tag===13)l.memoizedState!==null&&zr(l,e,t);else if(l.tag===19)zr(l,e,t);else if(l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break l;for(;l.sibling===null;){if(l.return===null||l.return===t)break l;l=l.return}l.sibling.return=l.return,l=l.sibling}a&=1}switch(_(Sl,a),u){case"forwards":for(e=t.child,u=null;e!==null;)l=e.alternate,l!==null&&tn(l)===null&&(u=e),e=e.sibling;e=u,e===null?(u=t.child,t.child=null):(u=e.sibling,e.sibling=null),af(t,!1,u,e,n);break;case"backwards":for(e=null,u=t.child,t.child=null;u!==null;){if(l=u.alternate,l!==null&&tn(l)===null){t.child=u;break}l=u.sibling,u.sibling=e,e=u,u=l}af(t,!0,e,null,n);break;case"together":af(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function qt(l,t,e){if(l!==null&&(t.dependencies=l.dependencies),te|=t.lanes,(e&t.childLanes)===0)if(l!==null){if(Ba(l,t,e,!1),(e&t.childLanes)===0)return null}else return null;if(l!==null&&t.child!==l.child)throw Error(m(153));if(t.child!==null){for(l=t.child,e=Mt(l,l.pendingProps),t.child=e,e.return=t;l.sibling!==null;)l=l.sibling,e=e.sibling=Mt(l,l.pendingProps),e.return=t;e.sibling=null}return t.child}function uf(l,t){return(l.lanes&t)!==0?!0:(l=l.dependencies,!!(l!==null&&Xu(l)))}function Dh(l,t,e){switch(t.tag){case 3:il(t,t.stateNode.containerInfo),wt(t,gl,l.memoizedState.cache),Ha();break;case 27:case 5:Hn(t);break;case 4:il(t,t.stateNode.containerInfo);break;case 10:wt(t,t.type,t.memoizedProps.value);break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(Wt(t),t.flags|=128,null):(e&t.child.childLanes)!==0?Ar(l,t,e):(Wt(t),l=qt(l,t,e),l!==null?l.sibling:null);Wt(t);break;case 19:var u=(l.flags&128)!==0;if(a=(e&t.childLanes)!==0,a||(Ba(l,t,e,!1),a=(e&t.childLanes)!==0),u){if(a)return Or(l,t,e);t.flags|=128}if(u=t.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),_(Sl,Sl.current),a)break;return null;case 22:case 23:return t.lanes=0,pr(l,t,e);case 24:wt(t,gl,l.memoizedState.cache)}return qt(l,t,e)}function Mr(l,t,e){if(l!==null)if(l.memoizedProps!==t.pendingProps)bl=!0;else{if(!uf(l,e)&&(t.flags&128)===0)return bl=!1,Dh(l,t,e);bl=(l.flags&131072)!==0}else bl=!1,k&&(t.flags&1048576)!==0&&as(t,Gu,t.index);switch(t.lanes=0,t.tag){case 16:l:{l=t.pendingProps;var a=t.elementType,u=a._init;if(a=u(a._payload),t.type=a,typeof a=="function")hi(a)?(l=De(a,l),t.tag=1,t=Tr(null,t,a,l,e)):(t.tag=0,t=Fi(null,t,a,l,e));else{if(a!=null){if(u=a.$$typeof,u===dt){t.tag=11,t=mr(null,t,a,l,e);break l}else if(u===wl){t.tag=14,t=gr(null,t,a,l,e);break l}}throw t=he(a)||a,Error(m(306,t,""))}}return t;case 0:return Fi(l,t,t.type,t.pendingProps,e);case 1:return a=t.type,u=De(a,t.pendingProps),Tr(l,t,a,u,e);case 3:l:{if(il(t,t.stateNode.containerInfo),l===null)throw Error(m(387));a=t.pendingProps;var n=t.memoizedState;u=n.element,Mi(l,t),Za(t,a,null,e);var i=t.memoizedState;if(a=i.cache,wt(t,gl,a),a!==n.cache&&Ei(t,[gl],e,!0),Ca(),a=i.element,n.isDehydrated)if(n={element:a,isDehydrated:!1,cache:i.cache},t.updateQueue.baseState=n,t.memoizedState=n,t.flags&256){t=_r(l,t,a,e);break l}else if(a!==u){u=ut(Error(m(424)),t),qa(u),t=_r(l,t,a,e);break l}else{switch(l=t.stateNode.containerInfo,l.nodeType){case 9:l=l.body;break;default:l=l.nodeName==="HTML"?l.ownerDocument.body:l}for(rl=vt(l.firstChild),Bl=t,k=!0,Te=null,St=!0,e=nr(t,null,a,e),t.child=e;e;)e.flags=e.flags&-3|4096,e=e.sibling}else{if(Ha(),a===u){t=qt(l,t,e);break l}_l(l,t,a,e)}t=t.child}return t;case 26:return un(l,t),l===null?(e=xo(t.type,null,t.pendingProps,null))?t.memoizedState=e:k||(e=t.type,l=t.pendingProps,a=bn(j.current).createElement(e),a[Ul]=t,a[Gl]=l,zl(a,e,l),pl(a),t.stateNode=a):t.memoizedState=xo(t.type,l.memoizedProps,t.pendingProps,l.memoizedState),null;case 27:return Hn(t),l===null&&k&&(a=t.stateNode=Uo(t.type,t.pendingProps,j.current),Bl=t,St=!0,u=rl,ne(t.type)?(Xf=u,rl=vt(a.firstChild)):rl=u),_l(l,t,t.pendingProps.children,e),un(l,t),l===null&&(t.flags|=4194304),t.child;case 5:return l===null&&k&&((u=a=rl)&&(a=e0(a,t.type,t.pendingProps,St),a!==null?(t.stateNode=a,Bl=t,rl=vt(a.firstChild),St=!1,u=!0):u=!1),u||_e(t)),Hn(t),u=t.type,n=t.pendingProps,i=l!==null?l.memoizedProps:null,a=n.children,Bf(u,n)?a=null:i!==null&&Bf(u,i)&&(t.flags|=32),t.memoizedState!==null&&(u=Hi(l,t,bh,null,null,e),ru._currentValue=u),un(l,t),_l(l,t,a,e),t.child;case 6:return l===null&&k&&((l=e=rl)&&(e=a0(e,t.pendingProps,St),e!==null?(t.stateNode=e,Bl=t,rl=null,l=!0):l=!1),l||_e(t)),null;case 13:return Ar(l,t,e);case 4:return il(t,t.stateNode.containerInfo),a=t.pendingProps,l===null?t.child=ua(t,null,a,e):_l(l,t,a,e),t.child;case 11:return mr(l,t,t.type,t.pendingProps,e);case 7:return _l(l,t,t.pendingProps,e),t.child;case 8:return _l(l,t,t.pendingProps.children,e),t.child;case 12:return _l(l,t,t.pendingProps.children,e),t.child;case 10:return a=t.pendingProps,wt(t,t.type,a.value),_l(l,t,a.children,e),t.child;case 9:return u=t.type._context,a=t.pendingProps.children,ze(t),u=Rl(u),a=a(u),t.flags|=1,_l(l,t,a,e),t.child;case 14:return gr(l,t,t.type,t.pendingProps,e);case 15:return Sr(l,t,t.type,t.pendingProps,e);case 19:return Or(l,t,e);case 31:return a=t.pendingProps,e=t.mode,a={mode:a.mode,children:a.children},l===null?(e=nn(a,e),e.ref=t.ref,t.child=e,e.return=t,t=e):(e=Mt(l.child,a),e.ref=t.ref,t.child=e,e.return=t,t=e),t;case 22:return pr(l,t,e);case 24:return ze(t),a=Rl(gl),l===null?(u=Ai(),u===null&&(u=ul,n=Ti(),u.pooledCache=n,n.refCount++,n!==null&&(u.pooledCacheLanes|=e),u=n),t.memoizedState={parent:a,cache:u},Oi(t),wt(t,gl,u)):((l.lanes&e)!==0&&(Mi(l,t),Za(t,null,null,e),Ca()),u=l.memoizedState,n=t.memoizedState,u.parent!==a?(u={parent:a,cache:a},t.memoizedState=u,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=u),wt(t,gl,a)):(a=n.cache,wt(t,gl,a),a!==u.cache&&Ei(t,[gl],e,!0))),_l(l,t,t.pendingProps.children,e),t.child;case 29:throw t.pendingProps}throw Error(m(156,t.tag))}function Bt(l){l.flags|=4}function Dr(l,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)l.flags&=-16777217;else if(l.flags|=16777216,!jo(t)){if(t=ct.current,t!==null&&((L&4194048)===L?pt!==null:(L&62914560)!==L&&(L&536870912)===0||t!==pt))throw Xa=zi,os;l.flags|=8192}}function fn(l,t){t!==null&&(l.flags|=4),l.flags&16384&&(t=l.tag!==22?ic():536870912,l.lanes|=t,ca|=t)}function Wa(l,t){if(!k)switch(l.tailMode){case"hidden":t=l.tail;for(var e=null;t!==null;)t.alternate!==null&&(e=t),t=t.sibling;e===null?l.tail=null:e.sibling=null;break;case"collapsed":e=l.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t||l.tail===null?l.tail=null:l.tail.sibling=null:a.sibling=null}}function sl(l){var t=l.alternate!==null&&l.alternate.child===l.child,e=0,a=0;if(t)for(var u=l.child;u!==null;)e|=u.lanes|u.childLanes,a|=u.subtreeFlags&65011712,a|=u.flags&65011712,u.return=l,u=u.sibling;else for(u=l.child;u!==null;)e|=u.lanes|u.childLanes,a|=u.subtreeFlags,a|=u.flags,u.return=l,u=u.sibling;return l.subtreeFlags|=a,l.childLanes=e,t}function Uh(l,t,e){var a=t.pendingProps;switch(gi(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return sl(t),null;case 1:return sl(t),null;case 3:return e=t.stateNode,a=null,l!==null&&(a=l.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Nt(gl),Qt(),e.pendingContext&&(e.context=e.pendingContext,e.pendingContext=null),(l===null||l.child===null)&&(xa(t)?Bt(t):l===null||l.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,is())),sl(t),null;case 26:return e=t.memoizedState,l===null?(Bt(t),e!==null?(sl(t),Dr(t,e)):(sl(t),t.flags&=-16777217)):e?e!==l.memoizedState?(Bt(t),sl(t),Dr(t,e)):(sl(t),t.flags&=-16777217):(l.memoizedProps!==a&&Bt(t),sl(t),t.flags&=-16777217),null;case 27:gu(t),e=j.current;var u=t.type;if(l!==null&&t.stateNode!=null)l.memoizedProps!==a&&Bt(t);else{if(!a){if(t.stateNode===null)throw Error(m(166));return sl(t),null}l=N.current,xa(t)?us(t):(l=Uo(u,a,e),t.stateNode=l,Bt(t))}return sl(t),null;case 5:if(gu(t),e=t.type,l!==null&&t.stateNode!=null)l.memoizedProps!==a&&Bt(t);else{if(!a){if(t.stateNode===null)throw Error(m(166));return sl(t),null}if(l=N.current,xa(t))us(t);else{switch(u=bn(j.current),l){case 1:l=u.createElementNS("http://www.w3.org/2000/svg",e);break;case 2:l=u.createElementNS("http://www.w3.org/1998/Math/MathML",e);break;default:switch(e){case"svg":l=u.createElementNS("http://www.w3.org/2000/svg",e);break;case"math":l=u.createElementNS("http://www.w3.org/1998/Math/MathML",e);break;case"script":l=u.createElement("div"),l.innerHTML="<script><\/script>",l=l.removeChild(l.firstChild);break;case"select":l=typeof a.is=="string"?u.createElement("select",{is:a.is}):u.createElement("select"),a.multiple?l.multiple=!0:a.size&&(l.size=a.size);break;default:l=typeof a.is=="string"?u.createElement(e,{is:a.is}):u.createElement(e)}}l[Ul]=t,l[Gl]=a;l:for(u=t.child;u!==null;){if(u.tag===5||u.tag===6)l.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break l;for(;u.sibling===null;){if(u.return===null||u.return===t)break l;u=u.return}u.sibling.return=u.return,u=u.sibling}t.stateNode=l;l:switch(zl(l,e,a),e){case"button":case"input":case"select":case"textarea":l=!!a.autoFocus;break l;case"img":l=!0;break l;default:l=!1}l&&Bt(t)}}return sl(t),t.flags&=-16777217,null;case 6:if(l&&t.stateNode!=null)l.memoizedProps!==a&&Bt(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(m(166));if(l=j.current,xa(t)){if(l=t.stateNode,e=t.memoizedProps,a=null,u=Bl,u!==null)switch(u.tag){case 27:case 5:a=u.memoizedProps}l[Ul]=t,l=!!(l.nodeValue===e||a!==null&&a.suppressHydrationWarning===!0||To(l.nodeValue,e)),l||_e(t)}else l=bn(l).createTextNode(a),l[Ul]=t,t.stateNode=l}return sl(t),null;case 13:if(a=t.memoizedState,l===null||l.memoizedState!==null&&l.memoizedState.dehydrated!==null){if(u=xa(t),a!==null&&a.dehydrated!==null){if(l===null){if(!u)throw Error(m(318));if(u=t.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(m(317));u[Ul]=t}else Ha(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;sl(t),u=!1}else u=is(),l!==null&&l.memoizedState!==null&&(l.memoizedState.hydrationErrors=u),u=!0;if(!u)return t.flags&256?(Ht(t),t):(Ht(t),null)}if(Ht(t),(t.flags&128)!==0)return t.lanes=e,t;if(e=a!==null,l=l!==null&&l.memoizedState!==null,e){a=t.child,u=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(u=a.alternate.memoizedState.cachePool.pool);var n=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(n=a.memoizedState.cachePool.pool),n!==u&&(a.flags|=2048)}return e!==l&&e&&(t.child.flags|=8192),fn(t,t.updateQueue),sl(t),null;case 4:return Qt(),l===null&&Rf(t.stateNode.containerInfo),sl(t),null;case 10:return Nt(t.type),sl(t),null;case 19:if(z(Sl),u=t.memoizedState,u===null)return sl(t),null;if(a=(t.flags&128)!==0,n=u.rendering,n===null)if(a)Wa(u,!1);else{if(ol!==0||l!==null&&(l.flags&128)!==0)for(l=t.child;l!==null;){if(n=tn(l),n!==null){for(t.flags|=128,Wa(u,!1),l=n.updateQueue,t.updateQueue=l,fn(t,l),t.subtreeFlags=0,l=e,e=t.child;e!==null;)es(e,l),e=e.sibling;return _(Sl,Sl.current&1|2),t.child}l=l.sibling}u.tail!==null&&gt()>rn&&(t.flags|=128,a=!0,Wa(u,!1),t.lanes=4194304)}else{if(!a)if(l=tn(n),l!==null){if(t.flags|=128,a=!0,l=l.updateQueue,t.updateQueue=l,fn(t,l),Wa(u,!0),u.tail===null&&u.tailMode==="hidden"&&!n.alternate&&!k)return sl(t),null}else 2*gt()-u.renderingStartTime>rn&&e!==536870912&&(t.flags|=128,a=!0,Wa(u,!1),t.lanes=4194304);u.isBackwards?(n.sibling=t.child,t.child=n):(l=u.last,l!==null?l.sibling=n:t.child=n,u.last=n)}return u.tail!==null?(t=u.tail,u.rendering=t,u.tail=t.sibling,u.renderingStartTime=gt(),t.sibling=null,l=Sl.current,_(Sl,a?l&1|2:l&1),t):(sl(t),null);case 22:case 23:return Ht(t),Ni(),a=t.memoizedState!==null,l!==null?l.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(e&536870912)!==0&&(t.flags&128)===0&&(sl(t),t.subtreeFlags&6&&(t.flags|=8192)):sl(t),e=t.updateQueue,e!==null&&fn(t,e.retryQueue),e=null,l!==null&&l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(e=l.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==e&&(t.flags|=2048),l!==null&&z(Oe),null;case 24:return e=null,l!==null&&(e=l.memoizedState.cache),t.memoizedState.cache!==e&&(t.flags|=2048),Nt(gl),sl(t),null;case 25:return null;case 30:return null}throw Error(m(156,t.tag))}function Rh(l,t){switch(gi(t),t.tag){case 1:return l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 3:return Nt(gl),Qt(),l=t.flags,(l&65536)!==0&&(l&128)===0?(t.flags=l&-65537|128,t):null;case 26:case 27:case 5:return gu(t),null;case 13:if(Ht(t),l=t.memoizedState,l!==null&&l.dehydrated!==null){if(t.alternate===null)throw Error(m(340));Ha()}return l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 19:return z(Sl),null;case 4:return Qt(),null;case 10:return Nt(t.type),null;case 22:case 23:return Ht(t),Ni(),l!==null&&z(Oe),l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 24:return Nt(gl),null;case 25:return null;default:return null}}function Ur(l,t){switch(gi(t),t.tag){case 3:Nt(gl),Qt();break;case 26:case 27:case 5:gu(t);break;case 4:Qt();break;case 13:Ht(t);break;case 19:z(Sl);break;case 10:Nt(t.type);break;case 22:case 23:Ht(t),Ni(),l!==null&&z(Oe);break;case 24:Nt(gl)}}function $a(l,t){try{var e=t.updateQueue,a=e!==null?e.lastEffect:null;if(a!==null){var u=a.next;e=u;do{if((e.tag&l)===l){a=void 0;var n=e.create,i=e.inst;a=n(),i.destroy=a}e=e.next}while(e!==u)}}catch(f){el(t,t.return,f)}}function Ft(l,t,e){try{var a=t.updateQueue,u=a!==null?a.lastEffect:null;if(u!==null){var n=u.next;a=n;do{if((a.tag&l)===l){var i=a.inst,f=i.destroy;if(f!==void 0){i.destroy=void 0,u=t;var c=e,h=f;try{h()}catch(g){el(u,c,g)}}}a=a.next}while(a!==n)}}catch(g){el(t,t.return,g)}}function Rr(l){var t=l.updateQueue;if(t!==null){var e=l.stateNode;try{gs(t,e)}catch(a){el(l,l.return,a)}}}function Nr(l,t,e){e.props=De(l.type,l.memoizedProps),e.state=l.memoizedState;try{e.componentWillUnmount()}catch(a){el(l,t,a)}}function Fa(l,t){try{var e=l.ref;if(e!==null){switch(l.tag){case 26:case 27:case 5:var a=l.stateNode;break;case 30:a=l.stateNode;break;default:a=l.stateNode}typeof e=="function"?l.refCleanup=e(a):e.current=a}}catch(u){el(l,t,u)}}function bt(l,t){var e=l.ref,a=l.refCleanup;if(e!==null)if(typeof a=="function")try{a()}catch(u){el(l,t,u)}finally{l.refCleanup=null,l=l.alternate,l!=null&&(l.refCleanup=null)}else if(typeof e=="function")try{e(null)}catch(u){el(l,t,u)}else e.current=null}function xr(l){var t=l.type,e=l.memoizedProps,a=l.stateNode;try{l:switch(t){case"button":case"input":case"select":case"textarea":e.autoFocus&&a.focus();break l;case"img":e.src?a.src=e.src:e.srcSet&&(a.srcset=e.srcSet)}}catch(u){el(l,l.return,u)}}function nf(l,t,e){try{var a=l.stateNode;Fh(a,l.type,e,t),a[Gl]=t}catch(u){el(l,l.return,u)}}function Hr(l){return l.tag===5||l.tag===3||l.tag===26||l.tag===27&&ne(l.type)||l.tag===4}function ff(l){l:for(;;){for(;l.sibling===null;){if(l.return===null||Hr(l.return))return null;l=l.return}for(l.sibling.return=l.return,l=l.sibling;l.tag!==5&&l.tag!==6&&l.tag!==18;){if(l.tag===27&&ne(l.type)||l.flags&2||l.child===null||l.tag===4)continue l;l.child.return=l,l=l.child}if(!(l.flags&2))return l.stateNode}}function cf(l,t,e){var a=l.tag;if(a===5||a===6)l=l.stateNode,t?(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e).insertBefore(l,t):(t=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.appendChild(l),e=e._reactRootContainer,e!=null||t.onclick!==null||(t.onclick=pn));else if(a!==4&&(a===27&&ne(l.type)&&(e=l.stateNode,t=null),l=l.child,l!==null))for(cf(l,t,e),l=l.sibling;l!==null;)cf(l,t,e),l=l.sibling}function cn(l,t,e){var a=l.tag;if(a===5||a===6)l=l.stateNode,t?e.insertBefore(l,t):e.appendChild(l);else if(a!==4&&(a===27&&ne(l.type)&&(e=l.stateNode),l=l.child,l!==null))for(cn(l,t,e),l=l.sibling;l!==null;)cn(l,t,e),l=l.sibling}function qr(l){var t=l.stateNode,e=l.memoizedProps;try{for(var a=l.type,u=t.attributes;u.length;)t.removeAttributeNode(u[0]);zl(t,a,e),t[Ul]=l,t[Gl]=e}catch(n){el(l,l.return,n)}}var Yt=!1,yl=!1,sf=!1,Br=typeof WeakSet=="function"?WeakSet:Set,El=null;function Nh(l,t){if(l=l.containerInfo,Hf=On,l=Kc(l),ii(l)){if("selectionStart"in l)var e={start:l.selectionStart,end:l.selectionEnd};else l:{e=(e=l.ownerDocument)&&e.defaultView||window;var a=e.getSelection&&e.getSelection();if(a&&a.rangeCount!==0){e=a.anchorNode;var u=a.anchorOffset,n=a.focusNode;a=a.focusOffset;try{e.nodeType,n.nodeType}catch{e=null;break l}var i=0,f=-1,c=-1,h=0,g=0,b=l,y=null;t:for(;;){for(var v;b!==e||u!==0&&b.nodeType!==3||(f=i+u),b!==n||a!==0&&b.nodeType!==3||(c=i+a),b.nodeType===3&&(i+=b.nodeValue.length),(v=b.firstChild)!==null;)y=b,b=v;for(;;){if(b===l)break t;if(y===e&&++h===u&&(f=i),y===n&&++g===a&&(c=i),(v=b.nextSibling)!==null)break;b=y,y=b.parentNode}b=v}e=f===-1||c===-1?null:{start:f,end:c}}else e=null}e=e||{start:0,end:0}}else e=null;for(qf={focusedElem:l,selectionRange:e},On=!1,El=t;El!==null;)if(t=El,l=t.child,(t.subtreeFlags&1024)!==0&&l!==null)l.return=t,El=l;else for(;El!==null;){switch(t=El,n=t.alternate,l=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((l&1024)!==0&&n!==null){l=void 0,e=t,u=n.memoizedProps,n=n.memoizedState,a=e.stateNode;try{var Y=De(e.type,u,e.elementType===e.type);l=a.getSnapshotBeforeUpdate(Y,n),a.__reactInternalSnapshotBeforeUpdate=l}catch(x){el(e,e.return,x)}}break;case 3:if((l&1024)!==0){if(l=t.stateNode.containerInfo,e=l.nodeType,e===9)jf(l);else if(e===1)switch(l.nodeName){case"HEAD":case"HTML":case"BODY":jf(l);break;default:l.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((l&1024)!==0)throw Error(m(163))}if(l=t.sibling,l!==null){l.return=t.return,El=l;break}El=t.return}}function Yr(l,t,e){var a=e.flags;switch(e.tag){case 0:case 11:case 15:It(l,e),a&4&&$a(5,e);break;case 1:if(It(l,e),a&4)if(l=e.stateNode,t===null)try{l.componentDidMount()}catch(i){el(e,e.return,i)}else{var u=De(e.type,t.memoizedProps);t=t.memoizedState;try{l.componentDidUpdate(u,t,l.__reactInternalSnapshotBeforeUpdate)}catch(i){el(e,e.return,i)}}a&64&&Rr(e),a&512&&Fa(e,e.return);break;case 3:if(It(l,e),a&64&&(l=e.updateQueue,l!==null)){if(t=null,e.child!==null)switch(e.child.tag){case 27:case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}try{gs(l,t)}catch(i){el(e,e.return,i)}}break;case 27:t===null&&a&4&&qr(e);case 26:case 5:It(l,e),t===null&&a&4&&xr(e),a&512&&Fa(e,e.return);break;case 12:It(l,e);break;case 13:It(l,e),a&4&&Xr(l,e),a&64&&(l=e.memoizedState,l!==null&&(l=l.dehydrated,l!==null&&(e=Qh.bind(null,e),u0(l,e))));break;case 22:if(a=e.memoizedState!==null||Yt,!a){t=t!==null&&t.memoizedState!==null||yl,u=Yt;var n=yl;Yt=a,(yl=t)&&!n?Pt(l,e,(e.subtreeFlags&8772)!==0):It(l,e),Yt=u,yl=n}break;case 30:break;default:It(l,e)}}function jr(l){var t=l.alternate;t!==null&&(l.alternate=null,jr(t)),l.child=null,l.deletions=null,l.sibling=null,l.tag===5&&(t=l.stateNode,t!==null&&Cn(t)),l.stateNode=null,l.return=null,l.dependencies=null,l.memoizedProps=null,l.memoizedState=null,l.pendingProps=null,l.stateNode=null,l.updateQueue=null}var fl=null,Cl=!1;function jt(l,t,e){for(e=e.child;e!==null;)Gr(l,t,e),e=e.sibling}function Gr(l,t,e){if(Jl&&typeof Jl.onCommitFiberUnmount=="function")try{Jl.onCommitFiberUnmount(Sa,e)}catch{}switch(e.tag){case 26:yl||bt(e,t),jt(l,t,e),e.memoizedState?e.memoizedState.count--:e.stateNode&&(e=e.stateNode,e.parentNode.removeChild(e));break;case 27:yl||bt(e,t);var a=fl,u=Cl;ne(e.type)&&(fl=e.stateNode,Cl=!1),jt(l,t,e),iu(e.stateNode),fl=a,Cl=u;break;case 5:yl||bt(e,t);case 6:if(a=fl,u=Cl,fl=null,jt(l,t,e),fl=a,Cl=u,fl!==null)if(Cl)try{(fl.nodeType===9?fl.body:fl.nodeName==="HTML"?fl.ownerDocument.body:fl).removeChild(e.stateNode)}catch(n){el(e,t,n)}else try{fl.removeChild(e.stateNode)}catch(n){el(e,t,n)}break;case 18:fl!==null&&(Cl?(l=fl,Mo(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,e.stateNode),yu(l)):Mo(fl,e.stateNode));break;case 4:a=fl,u=Cl,fl=e.stateNode.containerInfo,Cl=!0,jt(l,t,e),fl=a,Cl=u;break;case 0:case 11:case 14:case 15:yl||Ft(2,e,t),yl||Ft(4,e,t),jt(l,t,e);break;case 1:yl||(bt(e,t),a=e.stateNode,typeof a.componentWillUnmount=="function"&&Nr(e,t,a)),jt(l,t,e);break;case 21:jt(l,t,e);break;case 22:yl=(a=yl)||e.memoizedState!==null,jt(l,t,e),yl=a;break;default:jt(l,t,e)}}function Xr(l,t){if(t.memoizedState===null&&(l=t.alternate,l!==null&&(l=l.memoizedState,l!==null&&(l=l.dehydrated,l!==null))))try{yu(l)}catch(e){el(t,t.return,e)}}function xh(l){switch(l.tag){case 13:case 19:var t=l.stateNode;return t===null&&(t=l.stateNode=new Br),t;case 22:return l=l.stateNode,t=l._retryCache,t===null&&(t=l._retryCache=new Br),t;default:throw Error(m(435,l.tag))}}function rf(l,t){var e=xh(l);t.forEach(function(a){var u=Ch.bind(null,l,a);e.has(a)||(e.add(a),a.then(u,u))})}function Fl(l,t){var e=t.deletions;if(e!==null)for(var a=0;a<e.length;a++){var u=e[a],n=l,i=t,f=i;l:for(;f!==null;){switch(f.tag){case 27:if(ne(f.type)){fl=f.stateNode,Cl=!1;break l}break;case 5:fl=f.stateNode,Cl=!1;break l;case 3:case 4:fl=f.stateNode.containerInfo,Cl=!0;break l}f=f.return}if(fl===null)throw Error(m(160));Gr(n,i,u),fl=null,Cl=!1,n=u.alternate,n!==null&&(n.return=null),u.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)Qr(t,l),t=t.sibling}var yt=null;function Qr(l,t){var e=l.alternate,a=l.flags;switch(l.tag){case 0:case 11:case 14:case 15:Fl(t,l),Il(l),a&4&&(Ft(3,l,l.return),$a(3,l),Ft(5,l,l.return));break;case 1:Fl(t,l),Il(l),a&512&&(yl||e===null||bt(e,e.return)),a&64&&Yt&&(l=l.updateQueue,l!==null&&(a=l.callbacks,a!==null&&(e=l.shared.hiddenCallbacks,l.shared.hiddenCallbacks=e===null?a:e.concat(a))));break;case 26:var u=yt;if(Fl(t,l),Il(l),a&512&&(yl||e===null||bt(e,e.return)),a&4){var n=e!==null?e.memoizedState:null;if(a=l.memoizedState,e===null)if(a===null)if(l.stateNode===null){l:{a=l.type,e=l.memoizedProps,u=u.ownerDocument||u;t:switch(a){case"title":n=u.getElementsByTagName("title")[0],(!n||n[Ea]||n[Ul]||n.namespaceURI==="http://www.w3.org/2000/svg"||n.hasAttribute("itemprop"))&&(n=u.createElement(a),u.head.insertBefore(n,u.querySelector("head > title"))),zl(n,a,e),n[Ul]=l,pl(n),a=n;break l;case"link":var i=Bo("link","href",u).get(a+(e.href||""));if(i){for(var f=0;f<i.length;f++)if(n=i[f],n.getAttribute("href")===(e.href==null||e.href===""?null:e.href)&&n.getAttribute("rel")===(e.rel==null?null:e.rel)&&n.getAttribute("title")===(e.title==null?null:e.title)&&n.getAttribute("crossorigin")===(e.crossOrigin==null?null:e.crossOrigin)){i.splice(f,1);break t}}n=u.createElement(a),zl(n,a,e),u.head.appendChild(n);break;case"meta":if(i=Bo("meta","content",u).get(a+(e.content||""))){for(f=0;f<i.length;f++)if(n=i[f],n.getAttribute("content")===(e.content==null?null:""+e.content)&&n.getAttribute("name")===(e.name==null?null:e.name)&&n.getAttribute("property")===(e.property==null?null:e.property)&&n.getAttribute("http-equiv")===(e.httpEquiv==null?null:e.httpEquiv)&&n.getAttribute("charset")===(e.charSet==null?null:e.charSet)){i.splice(f,1);break t}}n=u.createElement(a),zl(n,a,e),u.head.appendChild(n);break;default:throw Error(m(468,a))}n[Ul]=l,pl(n),a=n}l.stateNode=a}else Yo(u,l.type,l.stateNode);else l.stateNode=qo(u,a,l.memoizedProps);else n!==a?(n===null?e.stateNode!==null&&(e=e.stateNode,e.parentNode.removeChild(e)):n.count--,a===null?Yo(u,l.type,l.stateNode):qo(u,a,l.memoizedProps)):a===null&&l.stateNode!==null&&nf(l,l.memoizedProps,e.memoizedProps)}break;case 27:Fl(t,l),Il(l),a&512&&(yl||e===null||bt(e,e.return)),e!==null&&a&4&&nf(l,l.memoizedProps,e.memoizedProps);break;case 5:if(Fl(t,l),Il(l),a&512&&(yl||e===null||bt(e,e.return)),l.flags&32){u=l.stateNode;try{Qe(u,"")}catch(v){el(l,l.return,v)}}a&4&&l.stateNode!=null&&(u=l.memoizedProps,nf(l,u,e!==null?e.memoizedProps:u)),a&1024&&(sf=!0);break;case 6:if(Fl(t,l),Il(l),a&4){if(l.stateNode===null)throw Error(m(162));a=l.memoizedProps,e=l.stateNode;try{e.nodeValue=a}catch(v){el(l,l.return,v)}}break;case 3:if(_n=null,u=yt,yt=En(t.containerInfo),Fl(t,l),yt=u,Il(l),a&4&&e!==null&&e.memoizedState.isDehydrated)try{yu(t.containerInfo)}catch(v){el(l,l.return,v)}sf&&(sf=!1,Cr(l));break;case 4:a=yt,yt=En(l.stateNode.containerInfo),Fl(t,l),Il(l),yt=a;break;case 12:Fl(t,l),Il(l);break;case 13:Fl(t,l),Il(l),l.child.flags&8192&&l.memoizedState!==null!=(e!==null&&e.memoizedState!==null)&&(mf=gt()),a&4&&(a=l.updateQueue,a!==null&&(l.updateQueue=null,rf(l,a)));break;case 22:u=l.memoizedState!==null;var c=e!==null&&e.memoizedState!==null,h=Yt,g=yl;if(Yt=h||u,yl=g||c,Fl(t,l),yl=g,Yt=h,Il(l),a&8192)l:for(t=l.stateNode,t._visibility=u?t._visibility&-2:t._visibility|1,u&&(e===null||c||Yt||yl||Ue(l)),e=null,t=l;;){if(t.tag===5||t.tag===26){if(e===null){c=e=t;try{if(n=c.stateNode,u)i=n.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{f=c.stateNode;var b=c.memoizedProps.style,y=b!=null&&b.hasOwnProperty("display")?b.display:null;f.style.display=y==null||typeof y=="boolean"?"":(""+y).trim()}}catch(v){el(c,c.return,v)}}}else if(t.tag===6){if(e===null){c=t;try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(v){el(c,c.return,v)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===l)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===l)break l;for(;t.sibling===null;){if(t.return===null||t.return===l)break l;e===t&&(e=null),t=t.return}e===t&&(e=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=l.updateQueue,a!==null&&(e=a.retryQueue,e!==null&&(a.retryQueue=null,rf(l,e))));break;case 19:Fl(t,l),Il(l),a&4&&(a=l.updateQueue,a!==null&&(l.updateQueue=null,rf(l,a)));break;case 30:break;case 21:break;default:Fl(t,l),Il(l)}}function Il(l){var t=l.flags;if(t&2){try{for(var e,a=l.return;a!==null;){if(Hr(a)){e=a;break}a=a.return}if(e==null)throw Error(m(160));switch(e.tag){case 27:var u=e.stateNode,n=ff(l);cn(l,n,u);break;case 5:var i=e.stateNode;e.flags&32&&(Qe(i,""),e.flags&=-33);var f=ff(l);cn(l,f,i);break;case 3:case 4:var c=e.stateNode.containerInfo,h=ff(l);cf(l,h,c);break;default:throw Error(m(161))}}catch(g){el(l,l.return,g)}l.flags&=-3}t&4096&&(l.flags&=-4097)}function Cr(l){if(l.subtreeFlags&1024)for(l=l.child;l!==null;){var t=l;Cr(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),l=l.sibling}}function It(l,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Yr(l,t.alternate,t),t=t.sibling}function Ue(l){for(l=l.child;l!==null;){var t=l;switch(t.tag){case 0:case 11:case 14:case 15:Ft(4,t,t.return),Ue(t);break;case 1:bt(t,t.return);var e=t.stateNode;typeof e.componentWillUnmount=="function"&&Nr(t,t.return,e),Ue(t);break;case 27:iu(t.stateNode);case 26:case 5:bt(t,t.return),Ue(t);break;case 22:t.memoizedState===null&&Ue(t);break;case 30:Ue(t);break;default:Ue(t)}l=l.sibling}}function Pt(l,t,e){for(e=e&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,u=l,n=t,i=n.flags;switch(n.tag){case 0:case 11:case 15:Pt(u,n,e),$a(4,n);break;case 1:if(Pt(u,n,e),a=n,u=a.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(h){el(a,a.return,h)}if(a=n,u=a.updateQueue,u!==null){var f=a.stateNode;try{var c=u.shared.hiddenCallbacks;if(c!==null)for(u.shared.hiddenCallbacks=null,u=0;u<c.length;u++)ms(c[u],f)}catch(h){el(a,a.return,h)}}e&&i&64&&Rr(n),Fa(n,n.return);break;case 27:qr(n);case 26:case 5:Pt(u,n,e),e&&a===null&&i&4&&xr(n),Fa(n,n.return);break;case 12:Pt(u,n,e);break;case 13:Pt(u,n,e),e&&i&4&&Xr(u,n);break;case 22:n.memoizedState===null&&Pt(u,n,e),Fa(n,n.return);break;case 30:break;default:Pt(u,n,e)}t=t.sibling}}function of(l,t){var e=null;l!==null&&l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(e=l.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==e&&(l!=null&&l.refCount++,e!=null&&Ya(e))}function df(l,t){l=null,t.alternate!==null&&(l=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==l&&(t.refCount++,l!=null&&Ya(l))}function Et(l,t,e,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Zr(l,t,e,a),t=t.sibling}function Zr(l,t,e,a){var u=t.flags;switch(t.tag){case 0:case 11:case 15:Et(l,t,e,a),u&2048&&$a(9,t);break;case 1:Et(l,t,e,a);break;case 3:Et(l,t,e,a),u&2048&&(l=null,t.alternate!==null&&(l=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==l&&(t.refCount++,l!=null&&Ya(l)));break;case 12:if(u&2048){Et(l,t,e,a),l=t.stateNode;try{var n=t.memoizedProps,i=n.id,f=n.onPostCommit;typeof f=="function"&&f(i,t.alternate===null?"mount":"update",l.passiveEffectDuration,-0)}catch(c){el(t,t.return,c)}}else Et(l,t,e,a);break;case 13:Et(l,t,e,a);break;case 23:break;case 22:n=t.stateNode,i=t.alternate,t.memoizedState!==null?n._visibility&2?Et(l,t,e,a):Ia(l,t):n._visibility&2?Et(l,t,e,a):(n._visibility|=2,na(l,t,e,a,(t.subtreeFlags&10256)!==0)),u&2048&&of(i,t);break;case 24:Et(l,t,e,a),u&2048&&df(t.alternate,t);break;default:Et(l,t,e,a)}}function na(l,t,e,a,u){for(u=u&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var n=l,i=t,f=e,c=a,h=i.flags;switch(i.tag){case 0:case 11:case 15:na(n,i,f,c,u),$a(8,i);break;case 23:break;case 22:var g=i.stateNode;i.memoizedState!==null?g._visibility&2?na(n,i,f,c,u):Ia(n,i):(g._visibility|=2,na(n,i,f,c,u)),u&&h&2048&&of(i.alternate,i);break;case 24:na(n,i,f,c,u),u&&h&2048&&df(i.alternate,i);break;default:na(n,i,f,c,u)}t=t.sibling}}function Ia(l,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var e=l,a=t,u=a.flags;switch(a.tag){case 22:Ia(e,a),u&2048&&of(a.alternate,a);break;case 24:Ia(e,a),u&2048&&df(a.alternate,a);break;default:Ia(e,a)}t=t.sibling}}var Pa=8192;function ia(l){if(l.subtreeFlags&Pa)for(l=l.child;l!==null;)Lr(l),l=l.sibling}function Lr(l){switch(l.tag){case 26:ia(l),l.flags&Pa&&l.memoizedState!==null&&g0(yt,l.memoizedState,l.memoizedProps);break;case 5:ia(l);break;case 3:case 4:var t=yt;yt=En(l.stateNode.containerInfo),ia(l),yt=t;break;case 22:l.memoizedState===null&&(t=l.alternate,t!==null&&t.memoizedState!==null?(t=Pa,Pa=16777216,ia(l),Pa=t):ia(l));break;default:ia(l)}}function wr(l){var t=l.alternate;if(t!==null&&(l=t.child,l!==null)){t.child=null;do t=l.sibling,l.sibling=null,l=t;while(l!==null)}}function lu(l){var t=l.deletions;if((l.flags&16)!==0){if(t!==null)for(var e=0;e<t.length;e++){var a=t[e];El=a,Kr(a,l)}wr(l)}if(l.subtreeFlags&10256)for(l=l.child;l!==null;)Vr(l),l=l.sibling}function Vr(l){switch(l.tag){case 0:case 11:case 15:lu(l),l.flags&2048&&Ft(9,l,l.return);break;case 3:lu(l);break;case 12:lu(l);break;case 22:var t=l.stateNode;l.memoizedState!==null&&t._visibility&2&&(l.return===null||l.return.tag!==13)?(t._visibility&=-3,sn(l)):lu(l);break;default:lu(l)}}function sn(l){var t=l.deletions;if((l.flags&16)!==0){if(t!==null)for(var e=0;e<t.length;e++){var a=t[e];El=a,Kr(a,l)}wr(l)}for(l=l.child;l!==null;){switch(t=l,t.tag){case 0:case 11:case 15:Ft(8,t,t.return),sn(t);break;case 22:e=t.stateNode,e._visibility&2&&(e._visibility&=-3,sn(t));break;default:sn(t)}l=l.sibling}}function Kr(l,t){for(;El!==null;){var e=El;switch(e.tag){case 0:case 11:case 15:Ft(8,e,t);break;case 23:case 22:if(e.memoizedState!==null&&e.memoizedState.cachePool!==null){var a=e.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Ya(e.memoizedState.cache)}if(a=e.child,a!==null)a.return=e,El=a;else l:for(e=l;El!==null;){a=El;var u=a.sibling,n=a.return;if(jr(a),a===e){El=null;break l}if(u!==null){u.return=n,El=u;break l}El=n}}}var Hh={getCacheForType:function(l){var t=Rl(gl),e=t.data.get(l);return e===void 0&&(e=l(),t.data.set(l,e)),e}},qh=typeof WeakMap=="function"?WeakMap:Map,$=0,ul=null,C=null,L=0,F=0,Pl=null,le=!1,fa=!1,hf=!1,Gt=0,ol=0,te=0,Re=0,yf=0,st=0,ca=0,tu=null,Zl=null,vf=!1,mf=0,rn=1/0,on=null,ee=null,Al=0,ae=null,sa=null,ra=0,gf=0,Sf=null,Jr=null,eu=0,pf=null;function lt(){if(($&2)!==0&&L!==0)return L&-L;if(S.T!==null){var l=Fe;return l!==0?l:Of()}return sc()}function kr(){st===0&&(st=(L&536870912)===0||k?nc():536870912);var l=ct.current;return l!==null&&(l.flags|=32),st}function tt(l,t,e){(l===ul&&(F===2||F===9)||l.cancelPendingCommit!==null)&&(oa(l,0),ue(l,L,st,!1)),ba(l,e),(($&2)===0||l!==ul)&&(l===ul&&(($&2)===0&&(Re|=e),ol===4&&ue(l,L,st,!1)),Tt(l))}function Wr(l,t,e){if(($&6)!==0)throw Error(m(327));var a=!e&&(t&124)===0&&(t&l.expiredLanes)===0||pa(l,t),u=a?jh(l,t):Tf(l,t,!0),n=a;do{if(u===0){fa&&!a&&ue(l,t,0,!1);break}else{if(e=l.current.alternate,n&&!Bh(e)){u=Tf(l,t,!1),n=!1;continue}if(u===2){if(n=t,l.errorRecoveryDisabledLanes&n)var i=0;else i=l.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){t=i;l:{var f=l;u=tu;var c=f.current.memoizedState.isDehydrated;if(c&&(oa(f,i).flags|=256),i=Tf(f,i,!1),i!==2){if(hf&&!c){f.errorRecoveryDisabledLanes|=n,Re|=n,u=4;break l}n=Zl,Zl=u,n!==null&&(Zl===null?Zl=n:Zl.push.apply(Zl,n))}u=i}if(n=!1,u!==2)continue}}if(u===1){oa(l,0),ue(l,t,0,!0);break}l:{switch(a=l,n=u,n){case 0:case 1:throw Error(m(345));case 4:if((t&4194048)!==t)break;case 6:ue(a,t,st,!le);break l;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(m(329))}if((t&62914560)===t&&(u=mf+300-gt(),10<u)){if(ue(a,t,st,!le),Eu(a,0,!0)!==0)break l;a.timeoutHandle=zo($r.bind(null,a,e,Zl,on,vf,t,st,Re,ca,le,n,2,-0,0),u);break l}$r(a,e,Zl,on,vf,t,st,Re,ca,le,n,0,-0,0)}}break}while(!0);Tt(l)}function $r(l,t,e,a,u,n,i,f,c,h,g,b,y,v){if(l.timeoutHandle=-1,b=t.subtreeFlags,(b&8192||(b&16785408)===16785408)&&(su={stylesheets:null,count:0,unsuspend:m0},Lr(t),b=S0(),b!==null)){l.cancelPendingCommit=b(ao.bind(null,l,t,n,e,a,u,i,f,c,g,1,y,v)),ue(l,n,i,!h);return}ao(l,t,n,e,a,u,i,f,c)}function Bh(l){for(var t=l;;){var e=t.tag;if((e===0||e===11||e===15)&&t.flags&16384&&(e=t.updateQueue,e!==null&&(e=e.stores,e!==null)))for(var a=0;a<e.length;a++){var u=e[a],n=u.getSnapshot;u=u.value;try{if(!Wl(n(),u))return!1}catch{return!1}}if(e=t.child,t.subtreeFlags&16384&&e!==null)e.return=t,t=e;else{if(t===l)break;for(;t.sibling===null;){if(t.return===null||t.return===l)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ue(l,t,e,a){t&=~yf,t&=~Re,l.suspendedLanes|=t,l.pingedLanes&=~t,a&&(l.warmLanes|=t),a=l.expirationTimes;for(var u=t;0<u;){var n=31-kl(u),i=1<<n;a[n]=-1,u&=~i}e!==0&&fc(l,e,t)}function dn(){return($&6)===0?(au(0),!1):!0}function bf(){if(C!==null){if(F===0)var l=C.return;else l=C,Rt=Ae=null,Yi(l),aa=null,Ja=0,l=C;for(;l!==null;)Ur(l.alternate,l),l=l.return;C=null}}function oa(l,t){var e=l.timeoutHandle;e!==-1&&(l.timeoutHandle=-1,Ph(e)),e=l.cancelPendingCommit,e!==null&&(l.cancelPendingCommit=null,e()),bf(),ul=l,C=e=Mt(l.current,null),L=t,F=0,Pl=null,le=!1,fa=pa(l,t),hf=!1,ca=st=yf=Re=te=ol=0,Zl=tu=null,vf=!1,(t&8)!==0&&(t|=t&32);var a=l.entangledLanes;if(a!==0)for(l=l.entanglements,a&=t;0<a;){var u=31-kl(a),n=1<<u;t|=l[u],a&=~n}return Gt=t,Hu(),e}function Fr(l,t){X=null,S.H=Iu,t===Ga||t===Zu?(t=ys(),F=3):t===os?(t=ys(),F=4):F=t===vr?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Pl=t,C===null&&(ol=1,an(l,ut(t,l.current)))}function Ir(){var l=S.H;return S.H=Iu,l===null?Iu:l}function Pr(){var l=S.A;return S.A=Hh,l}function Ef(){ol=4,le||(L&4194048)!==L&&ct.current!==null||(fa=!0),(te&134217727)===0&&(Re&134217727)===0||ul===null||ue(ul,L,st,!1)}function Tf(l,t,e){var a=$;$|=2;var u=Ir(),n=Pr();(ul!==l||L!==t)&&(on=null,oa(l,t)),t=!1;var i=ol;l:do try{if(F!==0&&C!==null){var f=C,c=Pl;switch(F){case 8:bf(),i=6;break l;case 3:case 2:case 9:case 6:ct.current===null&&(t=!0);var h=F;if(F=0,Pl=null,da(l,f,c,h),e&&fa){i=0;break l}break;default:h=F,F=0,Pl=null,da(l,f,c,h)}}Yh(),i=ol;break}catch(g){Fr(l,g)}while(!0);return t&&l.shellSuspendCounter++,Rt=Ae=null,$=a,S.H=u,S.A=n,C===null&&(ul=null,L=0,Hu()),i}function Yh(){for(;C!==null;)lo(C)}function jh(l,t){var e=$;$|=2;var a=Ir(),u=Pr();ul!==l||L!==t?(on=null,rn=gt()+500,oa(l,t)):fa=pa(l,t);l:do try{if(F!==0&&C!==null){t=C;var n=Pl;t:switch(F){case 1:F=0,Pl=null,da(l,t,n,1);break;case 2:case 9:if(ds(n)){F=0,Pl=null,to(t);break}t=function(){F!==2&&F!==9||ul!==l||(F=7),Tt(l)},n.then(t,t);break l;case 3:F=7;break l;case 4:F=5;break l;case 7:ds(n)?(F=0,Pl=null,to(t)):(F=0,Pl=null,da(l,t,n,7));break;case 5:var i=null;switch(C.tag){case 26:i=C.memoizedState;case 5:case 27:var f=C;if(!i||jo(i)){F=0,Pl=null;var c=f.sibling;if(c!==null)C=c;else{var h=f.return;h!==null?(C=h,hn(h)):C=null}break t}}F=0,Pl=null,da(l,t,n,5);break;case 6:F=0,Pl=null,da(l,t,n,6);break;case 8:bf(),ol=6;break l;default:throw Error(m(462))}}Gh();break}catch(g){Fr(l,g)}while(!0);return Rt=Ae=null,S.H=a,S.A=u,$=e,C!==null?0:(ul=null,L=0,Hu(),ol)}function Gh(){for(;C!==null&&!id();)lo(C)}function lo(l){var t=Mr(l.alternate,l,Gt);l.memoizedProps=l.pendingProps,t===null?hn(l):C=t}function to(l){var t=l,e=t.alternate;switch(t.tag){case 15:case 0:t=Er(e,t,t.pendingProps,t.type,void 0,L);break;case 11:t=Er(e,t,t.pendingProps,t.type.render,t.ref,L);break;case 5:Yi(t);default:Ur(e,t),t=C=es(t,Gt),t=Mr(e,t,Gt)}l.memoizedProps=l.pendingProps,t===null?hn(l):C=t}function da(l,t,e,a){Rt=Ae=null,Yi(t),aa=null,Ja=0;var u=t.return;try{if(Mh(l,u,t,e,L)){ol=1,an(l,ut(e,l.current)),C=null;return}}catch(n){if(u!==null)throw C=u,n;ol=1,an(l,ut(e,l.current)),C=null;return}t.flags&32768?(k||a===1?l=!0:fa||(L&536870912)!==0?l=!1:(le=l=!0,(a===2||a===9||a===3||a===6)&&(a=ct.current,a!==null&&a.tag===13&&(a.flags|=16384))),eo(t,l)):hn(t)}function hn(l){var t=l;do{if((t.flags&32768)!==0){eo(t,le);return}l=t.return;var e=Uh(t.alternate,t,Gt);if(e!==null){C=e;return}if(t=t.sibling,t!==null){C=t;return}C=t=l}while(t!==null);ol===0&&(ol=5)}function eo(l,t){do{var e=Rh(l.alternate,l);if(e!==null){e.flags&=32767,C=e;return}if(e=l.return,e!==null&&(e.flags|=32768,e.subtreeFlags=0,e.deletions=null),!t&&(l=l.sibling,l!==null)){C=l;return}C=l=e}while(l!==null);ol=6,C=null}function ao(l,t,e,a,u,n,i,f,c){l.cancelPendingCommit=null;do yn();while(Al!==0);if(($&6)!==0)throw Error(m(327));if(t!==null){if(t===l.current)throw Error(m(177));if(n=t.lanes|t.childLanes,n|=oi,md(l,e,n,i,f,c),l===ul&&(C=ul=null,L=0),sa=t,ae=l,ra=e,gf=n,Sf=u,Jr=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(l.callbackNode=null,l.callbackPriority=0,Zh(Su,function(){return co(),null})):(l.callbackNode=null,l.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=S.T,S.T=null,u=A.p,A.p=2,i=$,$|=4;try{Nh(l,t,e)}finally{$=i,A.p=u,S.T=a}}Al=1,uo(),no(),io()}}function uo(){if(Al===1){Al=0;var l=ae,t=sa,e=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||e){e=S.T,S.T=null;var a=A.p;A.p=2;var u=$;$|=4;try{Qr(t,l);var n=qf,i=Kc(l.containerInfo),f=n.focusedElem,c=n.selectionRange;if(i!==f&&f&&f.ownerDocument&&Vc(f.ownerDocument.documentElement,f)){if(c!==null&&ii(f)){var h=c.start,g=c.end;if(g===void 0&&(g=h),"selectionStart"in f)f.selectionStart=h,f.selectionEnd=Math.min(g,f.value.length);else{var b=f.ownerDocument||document,y=b&&b.defaultView||window;if(y.getSelection){var v=y.getSelection(),Y=f.textContent.length,x=Math.min(c.start,Y),ll=c.end===void 0?x:Math.min(c.end,Y);!v.extend&&x>ll&&(i=ll,ll=x,x=i);var o=wc(f,x),r=wc(f,ll);if(o&&r&&(v.rangeCount!==1||v.anchorNode!==o.node||v.anchorOffset!==o.offset||v.focusNode!==r.node||v.focusOffset!==r.offset)){var d=b.createRange();d.setStart(o.node,o.offset),v.removeAllRanges(),x>ll?(v.addRange(d),v.extend(r.node,r.offset)):(d.setEnd(r.node,r.offset),v.addRange(d))}}}}for(b=[],v=f;v=v.parentNode;)v.nodeType===1&&b.push({element:v,left:v.scrollLeft,top:v.scrollTop});for(typeof f.focus=="function"&&f.focus(),f=0;f<b.length;f++){var p=b[f];p.element.scrollLeft=p.left,p.element.scrollTop=p.top}}On=!!Hf,qf=Hf=null}finally{$=u,A.p=a,S.T=e}}l.current=t,Al=2}}function no(){if(Al===2){Al=0;var l=ae,t=sa,e=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||e){e=S.T,S.T=null;var a=A.p;A.p=2;var u=$;$|=4;try{Yr(l,t.alternate,t)}finally{$=u,A.p=a,S.T=e}}Al=3}}function io(){if(Al===4||Al===3){Al=0,fd();var l=ae,t=sa,e=ra,a=Jr;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Al=5:(Al=0,sa=ae=null,fo(l,l.pendingLanes));var u=l.pendingLanes;if(u===0&&(ee=null),Xn(e),t=t.stateNode,Jl&&typeof Jl.onCommitFiberRoot=="function")try{Jl.onCommitFiberRoot(Sa,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=S.T,u=A.p,A.p=2,S.T=null;try{for(var n=l.onRecoverableError,i=0;i<a.length;i++){var f=a[i];n(f.value,{componentStack:f.stack})}}finally{S.T=t,A.p=u}}(ra&3)!==0&&yn(),Tt(l),u=l.pendingLanes,(e&4194090)!==0&&(u&42)!==0?l===pf?eu++:(eu=0,pf=l):eu=0,au(0)}}function fo(l,t){(l.pooledCacheLanes&=t)===0&&(t=l.pooledCache,t!=null&&(l.pooledCache=null,Ya(t)))}function yn(l){return uo(),no(),io(),co()}function co(){if(Al!==5)return!1;var l=ae,t=gf;gf=0;var e=Xn(ra),a=S.T,u=A.p;try{A.p=32>e?32:e,S.T=null,e=Sf,Sf=null;var n=ae,i=ra;if(Al=0,sa=ae=null,ra=0,($&6)!==0)throw Error(m(331));var f=$;if($|=4,Vr(n.current),Zr(n,n.current,i,e),$=f,au(0,!1),Jl&&typeof Jl.onPostCommitFiberRoot=="function")try{Jl.onPostCommitFiberRoot(Sa,n)}catch{}return!0}finally{A.p=u,S.T=a,fo(l,t)}}function so(l,t,e){t=ut(e,t),t=$i(l.stateNode,t,2),l=Jt(l,t,2),l!==null&&(ba(l,2),Tt(l))}function el(l,t,e){if(l.tag===3)so(l,l,e);else for(;t!==null;){if(t.tag===3){so(t,l,e);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(ee===null||!ee.has(a))){l=ut(e,l),e=hr(2),a=Jt(t,e,2),a!==null&&(yr(e,a,t,l),ba(a,2),Tt(a));break}}t=t.return}}function _f(l,t,e){var a=l.pingCache;if(a===null){a=l.pingCache=new qh;var u=new Set;a.set(t,u)}else u=a.get(t),u===void 0&&(u=new Set,a.set(t,u));u.has(e)||(hf=!0,u.add(e),l=Xh.bind(null,l,t,e),t.then(l,l))}function Xh(l,t,e){var a=l.pingCache;a!==null&&a.delete(t),l.pingedLanes|=l.suspendedLanes&e,l.warmLanes&=~e,ul===l&&(L&e)===e&&(ol===4||ol===3&&(L&62914560)===L&&300>gt()-mf?($&2)===0&&oa(l,0):yf|=e,ca===L&&(ca=0)),Tt(l)}function ro(l,t){t===0&&(t=ic()),l=Je(l,t),l!==null&&(ba(l,t),Tt(l))}function Qh(l){var t=l.memoizedState,e=0;t!==null&&(e=t.retryLane),ro(l,e)}function Ch(l,t){var e=0;switch(l.tag){case 13:var a=l.stateNode,u=l.memoizedState;u!==null&&(e=u.retryLane);break;case 19:a=l.stateNode;break;case 22:a=l.stateNode._retryCache;break;default:throw Error(m(314))}a!==null&&a.delete(t),ro(l,e)}function Zh(l,t){return Bn(l,t)}var vn=null,ha=null,Af=!1,mn=!1,zf=!1,Ne=0;function Tt(l){l!==ha&&l.next===null&&(ha===null?vn=ha=l:ha=ha.next=l),mn=!0,Af||(Af=!0,wh())}function au(l,t){if(!zf&&mn){zf=!0;do for(var e=!1,a=vn;a!==null;){if(l!==0){var u=a.pendingLanes;if(u===0)var n=0;else{var i=a.suspendedLanes,f=a.pingedLanes;n=(1<<31-kl(42|l)+1)-1,n&=u&~(i&~f),n=n&201326741?n&201326741|1:n?n|2:0}n!==0&&(e=!0,vo(a,n))}else n=L,n=Eu(a,a===ul?n:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(n&3)===0||pa(a,n)||(e=!0,vo(a,n));a=a.next}while(e);zf=!1}}function Lh(){oo()}function oo(){mn=Af=!1;var l=0;Ne!==0&&(Ih()&&(l=Ne),Ne=0);for(var t=gt(),e=null,a=vn;a!==null;){var u=a.next,n=ho(a,t);n===0?(a.next=null,e===null?vn=u:e.next=u,u===null&&(ha=e)):(e=a,(l!==0||(n&3)!==0)&&(mn=!0)),a=u}au(l)}function ho(l,t){for(var e=l.suspendedLanes,a=l.pingedLanes,u=l.expirationTimes,n=l.pendingLanes&-62914561;0<n;){var i=31-kl(n),f=1<<i,c=u[i];c===-1?((f&e)===0||(f&a)!==0)&&(u[i]=vd(f,t)):c<=t&&(l.expiredLanes|=f),n&=~f}if(t=ul,e=L,e=Eu(l,l===t?e:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),a=l.callbackNode,e===0||l===t&&(F===2||F===9)||l.cancelPendingCommit!==null)return a!==null&&a!==null&&Yn(a),l.callbackNode=null,l.callbackPriority=0;if((e&3)===0||pa(l,e)){if(t=e&-e,t===l.callbackPriority)return t;switch(a!==null&&Yn(a),Xn(e)){case 2:case 8:e=ac;break;case 32:e=Su;break;case 268435456:e=uc;break;default:e=Su}return a=yo.bind(null,l),e=Bn(e,a),l.callbackPriority=t,l.callbackNode=e,t}return a!==null&&a!==null&&Yn(a),l.callbackPriority=2,l.callbackNode=null,2}function yo(l,t){if(Al!==0&&Al!==5)return l.callbackNode=null,l.callbackPriority=0,null;var e=l.callbackNode;if(yn()&&l.callbackNode!==e)return null;var a=L;return a=Eu(l,l===ul?a:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),a===0?null:(Wr(l,a,t),ho(l,gt()),l.callbackNode!=null&&l.callbackNode===e?yo.bind(null,l):null)}function vo(l,t){if(yn())return null;Wr(l,t,!0)}function wh(){l0(function(){($&6)!==0?Bn(ec,Lh):oo()})}function Of(){return Ne===0&&(Ne=nc()),Ne}function mo(l){return l==null||typeof l=="symbol"||typeof l=="boolean"?null:typeof l=="function"?l:Ou(""+l)}function go(l,t){var e=t.ownerDocument.createElement("input");return e.name=t.name,e.value=t.value,l.id&&e.setAttribute("form",l.id),t.parentNode.insertBefore(e,t),l=new FormData(l),e.parentNode.removeChild(e),l}function Vh(l,t,e,a,u){if(t==="submit"&&e&&e.stateNode===u){var n=mo((u[Gl]||null).action),i=a.submitter;i&&(t=(t=i[Gl]||null)?mo(t.formAction):i.getAttribute("formAction"),t!==null&&(n=t,i=null));var f=new Ru("action","action",null,a,u);l.push({event:f,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Ne!==0){var c=i?go(u,i):new FormData(u);Vi(e,{pending:!0,data:c,method:u.method,action:n},null,c)}}else typeof n=="function"&&(f.preventDefault(),c=i?go(u,i):new FormData(u),Vi(e,{pending:!0,data:c,method:u.method,action:n},n,c))},currentTarget:u}]})}}for(var Mf=0;Mf<ri.length;Mf++){var Df=ri[Mf],Kh=Df.toLowerCase(),Jh=Df[0].toUpperCase()+Df.slice(1);ht(Kh,"on"+Jh)}ht(Wc,"onAnimationEnd"),ht($c,"onAnimationIteration"),ht(Fc,"onAnimationStart"),ht("dblclick","onDoubleClick"),ht("focusin","onFocus"),ht("focusout","onBlur"),ht(rh,"onTransitionRun"),ht(oh,"onTransitionStart"),ht(dh,"onTransitionCancel"),ht(Ic,"onTransitionEnd"),je("onMouseEnter",["mouseout","mouseover"]),je("onMouseLeave",["mouseout","mouseover"]),je("onPointerEnter",["pointerout","pointerover"]),je("onPointerLeave",["pointerout","pointerover"]),ve("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ve("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ve("onBeforeInput",["compositionend","keypress","textInput","paste"]),ve("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ve("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ve("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var uu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(uu));function So(l,t){t=(t&4)!==0;for(var e=0;e<l.length;e++){var a=l[e],u=a.event;a=a.listeners;l:{var n=void 0;if(t)for(var i=a.length-1;0<=i;i--){var f=a[i],c=f.instance,h=f.currentTarget;if(f=f.listener,c!==n&&u.isPropagationStopped())break l;n=f,u.currentTarget=h;try{n(u)}catch(g){en(g)}u.currentTarget=null,n=c}else for(i=0;i<a.length;i++){if(f=a[i],c=f.instance,h=f.currentTarget,f=f.listener,c!==n&&u.isPropagationStopped())break l;n=f,u.currentTarget=h;try{n(u)}catch(g){en(g)}u.currentTarget=null,n=c}}}}function Z(l,t){var e=t[Qn];e===void 0&&(e=t[Qn]=new Set);var a=l+"__bubble";e.has(a)||(po(t,l,2,!1),e.add(a))}function Uf(l,t,e){var a=0;t&&(a|=4),po(e,l,a,t)}var gn="_reactListening"+Math.random().toString(36).slice(2);function Rf(l){if(!l[gn]){l[gn]=!0,oc.forEach(function(e){e!=="selectionchange"&&(kh.has(e)||Uf(e,!1,l),Uf(e,!0,l))});var t=l.nodeType===9?l:l.ownerDocument;t===null||t[gn]||(t[gn]=!0,Uf("selectionchange",!1,t))}}function po(l,t,e,a){switch(Lo(t)){case 2:var u=E0;break;case 8:u=T0;break;default:u=wf}e=u.bind(null,t,e,l),u=void 0,!Fn||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(u=!0),a?u!==void 0?l.addEventListener(t,e,{capture:!0,passive:u}):l.addEventListener(t,e,!0):u!==void 0?l.addEventListener(t,e,{passive:u}):l.addEventListener(t,e,!1)}function Nf(l,t,e,a,u){var n=a;if((t&1)===0&&(t&2)===0&&a!==null)l:for(;;){if(a===null)return;var i=a.tag;if(i===3||i===4){var f=a.stateNode.containerInfo;if(f===u)break;if(i===4)for(i=a.return;i!==null;){var c=i.tag;if((c===3||c===4)&&i.stateNode.containerInfo===u)return;i=i.return}for(;f!==null;){if(i=qe(f),i===null)return;if(c=i.tag,c===5||c===6||c===26||c===27){a=n=i;continue l}f=f.parentNode}}a=a.return}zc(function(){var h=n,g=Wn(e),b=[];l:{var y=Pc.get(l);if(y!==void 0){var v=Ru,Y=l;switch(l){case"keypress":if(Du(e)===0)break l;case"keydown":case"keyup":v=Zd;break;case"focusin":Y="focus",v=ti;break;case"focusout":Y="blur",v=ti;break;case"beforeblur":case"afterblur":v=ti;break;case"click":if(e.button===2)break l;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Dc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Rd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Vd;break;case Wc:case $c:case Fc:v=Hd;break;case Ic:v=Jd;break;case"scroll":case"scrollend":v=Dd;break;case"wheel":v=Wd;break;case"copy":case"cut":case"paste":v=Bd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Rc;break;case"toggle":case"beforetoggle":v=Fd}var x=(t&4)!==0,ll=!x&&(l==="scroll"||l==="scrollend"),o=x?y!==null?y+"Capture":null:y;x=[];for(var r=h,d;r!==null;){var p=r;if(d=p.stateNode,p=p.tag,p!==5&&p!==26&&p!==27||d===null||o===null||(p=_a(r,o),p!=null&&x.push(nu(r,p,d))),ll)break;r=r.return}0<x.length&&(y=new v(y,Y,null,e,g),b.push({event:y,listeners:x}))}}if((t&7)===0){l:{if(y=l==="mouseover"||l==="pointerover",v=l==="mouseout"||l==="pointerout",y&&e!==kn&&(Y=e.relatedTarget||e.fromElement)&&(qe(Y)||Y[He]))break l;if((v||y)&&(y=g.window===g?g:(y=g.ownerDocument)?y.defaultView||y.parentWindow:window,v?(Y=e.relatedTarget||e.toElement,v=h,Y=Y?qe(Y):null,Y!==null&&(ll=J(Y),x=Y.tag,Y!==ll||x!==5&&x!==27&&x!==6)&&(Y=null)):(v=null,Y=h),v!==Y)){if(x=Dc,p="onMouseLeave",o="onMouseEnter",r="mouse",(l==="pointerout"||l==="pointerover")&&(x=Rc,p="onPointerLeave",o="onPointerEnter",r="pointer"),ll=v==null?y:Ta(v),d=Y==null?y:Ta(Y),y=new x(p,r+"leave",v,e,g),y.target=ll,y.relatedTarget=d,p=null,qe(g)===h&&(x=new x(o,r+"enter",Y,e,g),x.target=d,x.relatedTarget=ll,p=x),ll=p,v&&Y)t:{for(x=v,o=Y,r=0,d=x;d;d=ya(d))r++;for(d=0,p=o;p;p=ya(p))d++;for(;0<r-d;)x=ya(x),r--;for(;0<d-r;)o=ya(o),d--;for(;r--;){if(x===o||o!==null&&x===o.alternate)break t;x=ya(x),o=ya(o)}x=null}else x=null;v!==null&&bo(b,y,v,x,!1),Y!==null&&ll!==null&&bo(b,ll,Y,x,!0)}}l:{if(y=h?Ta(h):window,v=y.nodeName&&y.nodeName.toLowerCase(),v==="select"||v==="input"&&y.type==="file")var O=Gc;else if(Yc(y))if(Xc)O=fh;else{O=nh;var Q=uh}else v=y.nodeName,!v||v.toLowerCase()!=="input"||y.type!=="checkbox"&&y.type!=="radio"?h&&Jn(h.elementType)&&(O=Gc):O=ih;if(O&&(O=O(l,h))){jc(b,O,e,g);break l}Q&&Q(l,y,h),l==="focusout"&&h&&y.type==="number"&&h.memoizedProps.value!=null&&Kn(y,"number",y.value)}switch(Q=h?Ta(h):window,l){case"focusin":(Yc(Q)||Q.contentEditable==="true")&&(we=Q,fi=h,Na=null);break;case"focusout":Na=fi=we=null;break;case"mousedown":ci=!0;break;case"contextmenu":case"mouseup":case"dragend":ci=!1,Jc(b,e,g);break;case"selectionchange":if(sh)break;case"keydown":case"keyup":Jc(b,e,g)}var D;if(ai)l:{switch(l){case"compositionstart":var H="onCompositionStart";break l;case"compositionend":H="onCompositionEnd";break l;case"compositionupdate":H="onCompositionUpdate";break l}H=void 0}else Le?qc(l,e)&&(H="onCompositionEnd"):l==="keydown"&&e.keyCode===229&&(H="onCompositionStart");H&&(Nc&&e.locale!=="ko"&&(Le||H!=="onCompositionStart"?H==="onCompositionEnd"&&Le&&(D=Oc()):(Lt=g,In="value"in Lt?Lt.value:Lt.textContent,Le=!0)),Q=Sn(h,H),0<Q.length&&(H=new Uc(H,l,null,e,g),b.push({event:H,listeners:Q}),D?H.data=D:(D=Bc(e),D!==null&&(H.data=D)))),(D=Pd?lh(l,e):th(l,e))&&(H=Sn(h,"onBeforeInput"),0<H.length&&(Q=new Uc("onBeforeInput","beforeinput",null,e,g),b.push({event:Q,listeners:H}),Q.data=D)),Vh(b,l,h,e,g)}So(b,t)})}function nu(l,t,e){return{instance:l,listener:t,currentTarget:e}}function Sn(l,t){for(var e=t+"Capture",a=[];l!==null;){var u=l,n=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||n===null||(u=_a(l,e),u!=null&&a.unshift(nu(l,u,n)),u=_a(l,t),u!=null&&a.push(nu(l,u,n))),l.tag===3)return a;l=l.return}return[]}function ya(l){if(l===null)return null;do l=l.return;while(l&&l.tag!==5&&l.tag!==27);return l||null}function bo(l,t,e,a,u){for(var n=t._reactName,i=[];e!==null&&e!==a;){var f=e,c=f.alternate,h=f.stateNode;if(f=f.tag,c!==null&&c===a)break;f!==5&&f!==26&&f!==27||h===null||(c=h,u?(h=_a(e,n),h!=null&&i.unshift(nu(e,h,c))):u||(h=_a(e,n),h!=null&&i.push(nu(e,h,c)))),e=e.return}i.length!==0&&l.push({event:t,listeners:i})}var Wh=/\r\n?/g,$h=/\u0000|\uFFFD/g;function Eo(l){return(typeof l=="string"?l:""+l).replace(Wh,`
`).replace($h,"")}function To(l,t){return t=Eo(t),Eo(l)===t}function pn(){}function P(l,t,e,a,u,n){switch(e){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||Qe(l,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&Qe(l,""+a);break;case"className":_u(l,"class",a);break;case"tabIndex":_u(l,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":_u(l,e,a);break;case"style":_c(l,a,n);break;case"data":if(t!=="object"){_u(l,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||e!=="href")){l.removeAttribute(e);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){l.removeAttribute(e);break}a=Ou(""+a),l.setAttribute(e,a);break;case"action":case"formAction":if(typeof a=="function"){l.setAttribute(e,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof n=="function"&&(e==="formAction"?(t!=="input"&&P(l,t,"name",u.name,u,null),P(l,t,"formEncType",u.formEncType,u,null),P(l,t,"formMethod",u.formMethod,u,null),P(l,t,"formTarget",u.formTarget,u,null)):(P(l,t,"encType",u.encType,u,null),P(l,t,"method",u.method,u,null),P(l,t,"target",u.target,u,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){l.removeAttribute(e);break}a=Ou(""+a),l.setAttribute(e,a);break;case"onClick":a!=null&&(l.onclick=pn);break;case"onScroll":a!=null&&Z("scroll",l);break;case"onScrollEnd":a!=null&&Z("scrollend",l);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(m(61));if(e=a.__html,e!=null){if(u.children!=null)throw Error(m(60));l.innerHTML=e}}break;case"multiple":l.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":l.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){l.removeAttribute("xlink:href");break}e=Ou(""+a),l.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",e);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?l.setAttribute(e,""+a):l.removeAttribute(e);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?l.setAttribute(e,""):l.removeAttribute(e);break;case"capture":case"download":a===!0?l.setAttribute(e,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?l.setAttribute(e,a):l.removeAttribute(e);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?l.setAttribute(e,a):l.removeAttribute(e);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?l.removeAttribute(e):l.setAttribute(e,a);break;case"popover":Z("beforetoggle",l),Z("toggle",l),Tu(l,"popover",a);break;case"xlinkActuate":zt(l,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":zt(l,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":zt(l,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":zt(l,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":zt(l,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":zt(l,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":zt(l,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":zt(l,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":zt(l,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Tu(l,"is",a);break;case"innerText":case"textContent":break;default:(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(e=Od.get(e)||e,Tu(l,e,a))}}function xf(l,t,e,a,u,n){switch(e){case"style":_c(l,a,n);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(m(61));if(e=a.__html,e!=null){if(u.children!=null)throw Error(m(60));l.innerHTML=e}}break;case"children":typeof a=="string"?Qe(l,a):(typeof a=="number"||typeof a=="bigint")&&Qe(l,""+a);break;case"onScroll":a!=null&&Z("scroll",l);break;case"onScrollEnd":a!=null&&Z("scrollend",l);break;case"onClick":a!=null&&(l.onclick=pn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!dc.hasOwnProperty(e))l:{if(e[0]==="o"&&e[1]==="n"&&(u=e.endsWith("Capture"),t=e.slice(2,u?e.length-7:void 0),n=l[Gl]||null,n=n!=null?n[e]:null,typeof n=="function"&&l.removeEventListener(t,n,u),typeof a=="function")){typeof n!="function"&&n!==null&&(e in l?l[e]=null:l.hasAttribute(e)&&l.removeAttribute(e)),l.addEventListener(t,a,u);break l}e in l?l[e]=a:a===!0?l.setAttribute(e,""):Tu(l,e,a)}}}function zl(l,t,e){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Z("error",l),Z("load",l);var a=!1,u=!1,n;for(n in e)if(e.hasOwnProperty(n)){var i=e[n];if(i!=null)switch(n){case"src":a=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(m(137,t));default:P(l,t,n,i,e,null)}}u&&P(l,t,"srcSet",e.srcSet,e,null),a&&P(l,t,"src",e.src,e,null);return;case"input":Z("invalid",l);var f=n=i=u=null,c=null,h=null;for(a in e)if(e.hasOwnProperty(a)){var g=e[a];if(g!=null)switch(a){case"name":u=g;break;case"type":i=g;break;case"checked":c=g;break;case"defaultChecked":h=g;break;case"value":n=g;break;case"defaultValue":f=g;break;case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(m(137,t));break;default:P(l,t,a,g,e,null)}}pc(l,n,f,c,h,i,u,!1),Au(l);return;case"select":Z("invalid",l),a=i=n=null;for(u in e)if(e.hasOwnProperty(u)&&(f=e[u],f!=null))switch(u){case"value":n=f;break;case"defaultValue":i=f;break;case"multiple":a=f;default:P(l,t,u,f,e,null)}t=n,e=i,l.multiple=!!a,t!=null?Xe(l,!!a,t,!1):e!=null&&Xe(l,!!a,e,!0);return;case"textarea":Z("invalid",l),n=u=a=null;for(i in e)if(e.hasOwnProperty(i)&&(f=e[i],f!=null))switch(i){case"value":a=f;break;case"defaultValue":u=f;break;case"children":n=f;break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(m(91));break;default:P(l,t,i,f,e,null)}Ec(l,a,u,n),Au(l);return;case"option":for(c in e)if(e.hasOwnProperty(c)&&(a=e[c],a!=null))switch(c){case"selected":l.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:P(l,t,c,a,e,null)}return;case"dialog":Z("beforetoggle",l),Z("toggle",l),Z("cancel",l),Z("close",l);break;case"iframe":case"object":Z("load",l);break;case"video":case"audio":for(a=0;a<uu.length;a++)Z(uu[a],l);break;case"image":Z("error",l),Z("load",l);break;case"details":Z("toggle",l);break;case"embed":case"source":case"link":Z("error",l),Z("load",l);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(h in e)if(e.hasOwnProperty(h)&&(a=e[h],a!=null))switch(h){case"children":case"dangerouslySetInnerHTML":throw Error(m(137,t));default:P(l,t,h,a,e,null)}return;default:if(Jn(t)){for(g in e)e.hasOwnProperty(g)&&(a=e[g],a!==void 0&&xf(l,t,g,a,e,void 0));return}}for(f in e)e.hasOwnProperty(f)&&(a=e[f],a!=null&&P(l,t,f,a,e,null))}function Fh(l,t,e,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,n=null,i=null,f=null,c=null,h=null,g=null;for(v in e){var b=e[v];if(e.hasOwnProperty(v)&&b!=null)switch(v){case"checked":break;case"value":break;case"defaultValue":c=b;default:a.hasOwnProperty(v)||P(l,t,v,null,a,b)}}for(var y in a){var v=a[y];if(b=e[y],a.hasOwnProperty(y)&&(v!=null||b!=null))switch(y){case"type":n=v;break;case"name":u=v;break;case"checked":h=v;break;case"defaultChecked":g=v;break;case"value":i=v;break;case"defaultValue":f=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(m(137,t));break;default:v!==b&&P(l,t,y,v,a,b)}}Vn(l,i,f,c,h,g,n,u);return;case"select":v=i=f=y=null;for(n in e)if(c=e[n],e.hasOwnProperty(n)&&c!=null)switch(n){case"value":break;case"multiple":v=c;default:a.hasOwnProperty(n)||P(l,t,n,null,a,c)}for(u in a)if(n=a[u],c=e[u],a.hasOwnProperty(u)&&(n!=null||c!=null))switch(u){case"value":y=n;break;case"defaultValue":f=n;break;case"multiple":i=n;default:n!==c&&P(l,t,u,n,a,c)}t=f,e=i,a=v,y!=null?Xe(l,!!e,y,!1):!!a!=!!e&&(t!=null?Xe(l,!!e,t,!0):Xe(l,!!e,e?[]:"",!1));return;case"textarea":v=y=null;for(f in e)if(u=e[f],e.hasOwnProperty(f)&&u!=null&&!a.hasOwnProperty(f))switch(f){case"value":break;case"children":break;default:P(l,t,f,null,a,u)}for(i in a)if(u=a[i],n=e[i],a.hasOwnProperty(i)&&(u!=null||n!=null))switch(i){case"value":y=u;break;case"defaultValue":v=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(m(91));break;default:u!==n&&P(l,t,i,u,a,n)}bc(l,y,v);return;case"option":for(var Y in e)if(y=e[Y],e.hasOwnProperty(Y)&&y!=null&&!a.hasOwnProperty(Y))switch(Y){case"selected":l.selected=!1;break;default:P(l,t,Y,null,a,y)}for(c in a)if(y=a[c],v=e[c],a.hasOwnProperty(c)&&y!==v&&(y!=null||v!=null))switch(c){case"selected":l.selected=y&&typeof y!="function"&&typeof y!="symbol";break;default:P(l,t,c,y,a,v)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var x in e)y=e[x],e.hasOwnProperty(x)&&y!=null&&!a.hasOwnProperty(x)&&P(l,t,x,null,a,y);for(h in a)if(y=a[h],v=e[h],a.hasOwnProperty(h)&&y!==v&&(y!=null||v!=null))switch(h){case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(m(137,t));break;default:P(l,t,h,y,a,v)}return;default:if(Jn(t)){for(var ll in e)y=e[ll],e.hasOwnProperty(ll)&&y!==void 0&&!a.hasOwnProperty(ll)&&xf(l,t,ll,void 0,a,y);for(g in a)y=a[g],v=e[g],!a.hasOwnProperty(g)||y===v||y===void 0&&v===void 0||xf(l,t,g,y,a,v);return}}for(var o in e)y=e[o],e.hasOwnProperty(o)&&y!=null&&!a.hasOwnProperty(o)&&P(l,t,o,null,a,y);for(b in a)y=a[b],v=e[b],!a.hasOwnProperty(b)||y===v||y==null&&v==null||P(l,t,b,y,a,v)}var Hf=null,qf=null;function bn(l){return l.nodeType===9?l:l.ownerDocument}function _o(l){switch(l){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ao(l,t){if(l===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return l===1&&t==="foreignObject"?0:l}function Bf(l,t){return l==="textarea"||l==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Yf=null;function Ih(){var l=window.event;return l&&l.type==="popstate"?l===Yf?!1:(Yf=l,!0):(Yf=null,!1)}var zo=typeof setTimeout=="function"?setTimeout:void 0,Ph=typeof clearTimeout=="function"?clearTimeout:void 0,Oo=typeof Promise=="function"?Promise:void 0,l0=typeof queueMicrotask=="function"?queueMicrotask:typeof Oo<"u"?function(l){return Oo.resolve(null).then(l).catch(t0)}:zo;function t0(l){setTimeout(function(){throw l})}function ne(l){return l==="head"}function Mo(l,t){var e=t,a=0,u=0;do{var n=e.nextSibling;if(l.removeChild(e),n&&n.nodeType===8)if(e=n.data,e==="/$"){if(0<a&&8>a){e=a;var i=l.ownerDocument;if(e&1&&iu(i.documentElement),e&2&&iu(i.body),e&4)for(e=i.head,iu(e),i=e.firstChild;i;){var f=i.nextSibling,c=i.nodeName;i[Ea]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&i.rel.toLowerCase()==="stylesheet"||e.removeChild(i),i=f}}if(u===0){l.removeChild(n),yu(t);return}u--}else e==="$"||e==="$?"||e==="$!"?u++:a=e.charCodeAt(0)-48;else a=0;e=n}while(e);yu(t)}function jf(l){var t=l.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var e=t;switch(t=t.nextSibling,e.nodeName){case"HTML":case"HEAD":case"BODY":jf(e),Cn(e);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(e.rel.toLowerCase()==="stylesheet")continue}l.removeChild(e)}}function e0(l,t,e,a){for(;l.nodeType===1;){var u=e;if(l.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(l.nodeName!=="INPUT"||l.type!=="hidden"))break}else if(a){if(!l[Ea])switch(t){case"meta":if(!l.hasAttribute("itemprop"))break;return l;case"link":if(n=l.getAttribute("rel"),n==="stylesheet"&&l.hasAttribute("data-precedence"))break;if(n!==u.rel||l.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||l.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||l.getAttribute("title")!==(u.title==null?null:u.title))break;return l;case"style":if(l.hasAttribute("data-precedence"))break;return l;case"script":if(n=l.getAttribute("src"),(n!==(u.src==null?null:u.src)||l.getAttribute("type")!==(u.type==null?null:u.type)||l.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&n&&l.hasAttribute("async")&&!l.hasAttribute("itemprop"))break;return l;default:return l}}else if(t==="input"&&l.type==="hidden"){var n=u.name==null?null:""+u.name;if(u.type==="hidden"&&l.getAttribute("name")===n)return l}else return l;if(l=vt(l.nextSibling),l===null)break}return null}function a0(l,t,e){if(t==="")return null;for(;l.nodeType!==3;)if((l.nodeType!==1||l.nodeName!=="INPUT"||l.type!=="hidden")&&!e||(l=vt(l.nextSibling),l===null))return null;return l}function Gf(l){return l.data==="$!"||l.data==="$?"&&l.ownerDocument.readyState==="complete"}function u0(l,t){var e=l.ownerDocument;if(l.data!=="$?"||e.readyState==="complete")t();else{var a=function(){t(),e.removeEventListener("DOMContentLoaded",a)};e.addEventListener("DOMContentLoaded",a),l._reactRetry=a}}function vt(l){for(;l!=null;l=l.nextSibling){var t=l.nodeType;if(t===1||t===3)break;if(t===8){if(t=l.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return l}var Xf=null;function Do(l){l=l.previousSibling;for(var t=0;l;){if(l.nodeType===8){var e=l.data;if(e==="$"||e==="$!"||e==="$?"){if(t===0)return l;t--}else e==="/$"&&t++}l=l.previousSibling}return null}function Uo(l,t,e){switch(t=bn(e),l){case"html":if(l=t.documentElement,!l)throw Error(m(452));return l;case"head":if(l=t.head,!l)throw Error(m(453));return l;case"body":if(l=t.body,!l)throw Error(m(454));return l;default:throw Error(m(451))}}function iu(l){for(var t=l.attributes;t.length;)l.removeAttributeNode(t[0]);Cn(l)}var rt=new Map,Ro=new Set;function En(l){return typeof l.getRootNode=="function"?l.getRootNode():l.nodeType===9?l:l.ownerDocument}var Xt=A.d;A.d={f:n0,r:i0,D:f0,C:c0,L:s0,m:r0,X:d0,S:o0,M:h0};function n0(){var l=Xt.f(),t=dn();return l||t}function i0(l){var t=Be(l);t!==null&&t.tag===5&&t.type==="form"?Ws(t):Xt.r(l)}var va=typeof document>"u"?null:document;function No(l,t,e){var a=va;if(a&&typeof t=="string"&&t){var u=at(t);u='link[rel="'+l+'"][href="'+u+'"]',typeof e=="string"&&(u+='[crossorigin="'+e+'"]'),Ro.has(u)||(Ro.add(u),l={rel:l,crossOrigin:e,href:t},a.querySelector(u)===null&&(t=a.createElement("link"),zl(t,"link",l),pl(t),a.head.appendChild(t)))}}function f0(l){Xt.D(l),No("dns-prefetch",l,null)}function c0(l,t){Xt.C(l,t),No("preconnect",l,t)}function s0(l,t,e){Xt.L(l,t,e);var a=va;if(a&&l&&t){var u='link[rel="preload"][as="'+at(t)+'"]';t==="image"&&e&&e.imageSrcSet?(u+='[imagesrcset="'+at(e.imageSrcSet)+'"]',typeof e.imageSizes=="string"&&(u+='[imagesizes="'+at(e.imageSizes)+'"]')):u+='[href="'+at(l)+'"]';var n=u;switch(t){case"style":n=ma(l);break;case"script":n=ga(l)}rt.has(n)||(l=U({rel:"preload",href:t==="image"&&e&&e.imageSrcSet?void 0:l,as:t},e),rt.set(n,l),a.querySelector(u)!==null||t==="style"&&a.querySelector(fu(n))||t==="script"&&a.querySelector(cu(n))||(t=a.createElement("link"),zl(t,"link",l),pl(t),a.head.appendChild(t)))}}function r0(l,t){Xt.m(l,t);var e=va;if(e&&l){var a=t&&typeof t.as=="string"?t.as:"script",u='link[rel="modulepreload"][as="'+at(a)+'"][href="'+at(l)+'"]',n=u;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":n=ga(l)}if(!rt.has(n)&&(l=U({rel:"modulepreload",href:l},t),rt.set(n,l),e.querySelector(u)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(e.querySelector(cu(n)))return}a=e.createElement("link"),zl(a,"link",l),pl(a),e.head.appendChild(a)}}}function o0(l,t,e){Xt.S(l,t,e);var a=va;if(a&&l){var u=Ye(a).hoistableStyles,n=ma(l);t=t||"default";var i=u.get(n);if(!i){var f={loading:0,preload:null};if(i=a.querySelector(fu(n)))f.loading=5;else{l=U({rel:"stylesheet",href:l,"data-precedence":t},e),(e=rt.get(n))&&Qf(l,e);var c=i=a.createElement("link");pl(c),zl(c,"link",l),c._p=new Promise(function(h,g){c.onload=h,c.onerror=g}),c.addEventListener("load",function(){f.loading|=1}),c.addEventListener("error",function(){f.loading|=2}),f.loading|=4,Tn(i,t,a)}i={type:"stylesheet",instance:i,count:1,state:f},u.set(n,i)}}}function d0(l,t){Xt.X(l,t);var e=va;if(e&&l){var a=Ye(e).hoistableScripts,u=ga(l),n=a.get(u);n||(n=e.querySelector(cu(u)),n||(l=U({src:l,async:!0},t),(t=rt.get(u))&&Cf(l,t),n=e.createElement("script"),pl(n),zl(n,"link",l),e.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},a.set(u,n))}}function h0(l,t){Xt.M(l,t);var e=va;if(e&&l){var a=Ye(e).hoistableScripts,u=ga(l),n=a.get(u);n||(n=e.querySelector(cu(u)),n||(l=U({src:l,async:!0,type:"module"},t),(t=rt.get(u))&&Cf(l,t),n=e.createElement("script"),pl(n),zl(n,"link",l),e.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},a.set(u,n))}}function xo(l,t,e,a){var u=(u=j.current)?En(u):null;if(!u)throw Error(m(446));switch(l){case"meta":case"title":return null;case"style":return typeof e.precedence=="string"&&typeof e.href=="string"?(t=ma(e.href),e=Ye(u).hoistableStyles,a=e.get(t),a||(a={type:"style",instance:null,count:0,state:null},e.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(e.rel==="stylesheet"&&typeof e.href=="string"&&typeof e.precedence=="string"){l=ma(e.href);var n=Ye(u).hoistableStyles,i=n.get(l);if(i||(u=u.ownerDocument||u,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},n.set(l,i),(n=u.querySelector(fu(l)))&&!n._p&&(i.instance=n,i.state.loading=5),rt.has(l)||(e={rel:"preload",as:"style",href:e.href,crossOrigin:e.crossOrigin,integrity:e.integrity,media:e.media,hrefLang:e.hrefLang,referrerPolicy:e.referrerPolicy},rt.set(l,e),n||y0(u,l,e,i.state))),t&&a===null)throw Error(m(528,""));return i}if(t&&a!==null)throw Error(m(529,""));return null;case"script":return t=e.async,e=e.src,typeof e=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ga(e),e=Ye(u).hoistableScripts,a=e.get(t),a||(a={type:"script",instance:null,count:0,state:null},e.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(m(444,l))}}function ma(l){return'href="'+at(l)+'"'}function fu(l){return'link[rel="stylesheet"]['+l+"]"}function Ho(l){return U({},l,{"data-precedence":l.precedence,precedence:null})}function y0(l,t,e,a){l.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=l.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),zl(t,"link",e),pl(t),l.head.appendChild(t))}function ga(l){return'[src="'+at(l)+'"]'}function cu(l){return"script[async]"+l}function qo(l,t,e){if(t.count++,t.instance===null)switch(t.type){case"style":var a=l.querySelector('style[data-href~="'+at(e.href)+'"]');if(a)return t.instance=a,pl(a),a;var u=U({},e,{"data-href":e.href,"data-precedence":e.precedence,href:null,precedence:null});return a=(l.ownerDocument||l).createElement("style"),pl(a),zl(a,"style",u),Tn(a,e.precedence,l),t.instance=a;case"stylesheet":u=ma(e.href);var n=l.querySelector(fu(u));if(n)return t.state.loading|=4,t.instance=n,pl(n),n;a=Ho(e),(u=rt.get(u))&&Qf(a,u),n=(l.ownerDocument||l).createElement("link"),pl(n);var i=n;return i._p=new Promise(function(f,c){i.onload=f,i.onerror=c}),zl(n,"link",a),t.state.loading|=4,Tn(n,e.precedence,l),t.instance=n;case"script":return n=ga(e.src),(u=l.querySelector(cu(n)))?(t.instance=u,pl(u),u):(a=e,(u=rt.get(n))&&(a=U({},e),Cf(a,u)),l=l.ownerDocument||l,u=l.createElement("script"),pl(u),zl(u,"link",a),l.head.appendChild(u),t.instance=u);case"void":return null;default:throw Error(m(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Tn(a,e.precedence,l));return t.instance}function Tn(l,t,e){for(var a=e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=a.length?a[a.length-1]:null,n=u,i=0;i<a.length;i++){var f=a[i];if(f.dataset.precedence===t)n=f;else if(n!==u)break}n?n.parentNode.insertBefore(l,n.nextSibling):(t=e.nodeType===9?e.head:e,t.insertBefore(l,t.firstChild))}function Qf(l,t){l.crossOrigin==null&&(l.crossOrigin=t.crossOrigin),l.referrerPolicy==null&&(l.referrerPolicy=t.referrerPolicy),l.title==null&&(l.title=t.title)}function Cf(l,t){l.crossOrigin==null&&(l.crossOrigin=t.crossOrigin),l.referrerPolicy==null&&(l.referrerPolicy=t.referrerPolicy),l.integrity==null&&(l.integrity=t.integrity)}var _n=null;function Bo(l,t,e){if(_n===null){var a=new Map,u=_n=new Map;u.set(e,a)}else u=_n,a=u.get(e),a||(a=new Map,u.set(e,a));if(a.has(l))return a;for(a.set(l,null),e=e.getElementsByTagName(l),u=0;u<e.length;u++){var n=e[u];if(!(n[Ea]||n[Ul]||l==="link"&&n.getAttribute("rel")==="stylesheet")&&n.namespaceURI!=="http://www.w3.org/2000/svg"){var i=n.getAttribute(t)||"";i=l+i;var f=a.get(i);f?f.push(n):a.set(i,[n])}}return a}function Yo(l,t,e){l=l.ownerDocument||l,l.head.insertBefore(e,t==="title"?l.querySelector("head > title"):null)}function v0(l,t,e){if(e===1||t.itemProp!=null)return!1;switch(l){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return l=t.disabled,typeof t.precedence=="string"&&l==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function jo(l){return!(l.type==="stylesheet"&&(l.state.loading&3)===0)}var su=null;function m0(){}function g0(l,t,e){if(su===null)throw Error(m(475));var a=su;if(t.type==="stylesheet"&&(typeof e.media!="string"||matchMedia(e.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var u=ma(e.href),n=l.querySelector(fu(u));if(n){l=n._p,l!==null&&typeof l=="object"&&typeof l.then=="function"&&(a.count++,a=An.bind(a),l.then(a,a)),t.state.loading|=4,t.instance=n,pl(n);return}n=l.ownerDocument||l,e=Ho(e),(u=rt.get(u))&&Qf(e,u),n=n.createElement("link"),pl(n);var i=n;i._p=new Promise(function(f,c){i.onload=f,i.onerror=c}),zl(n,"link",e),t.instance=n}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(t,l),(l=t.state.preload)&&(t.state.loading&3)===0&&(a.count++,t=An.bind(a),l.addEventListener("load",t),l.addEventListener("error",t))}}function S0(){if(su===null)throw Error(m(475));var l=su;return l.stylesheets&&l.count===0&&Zf(l,l.stylesheets),0<l.count?function(t){var e=setTimeout(function(){if(l.stylesheets&&Zf(l,l.stylesheets),l.unsuspend){var a=l.unsuspend;l.unsuspend=null,a()}},6e4);return l.unsuspend=t,function(){l.unsuspend=null,clearTimeout(e)}}:null}function An(){if(this.count--,this.count===0){if(this.stylesheets)Zf(this,this.stylesheets);else if(this.unsuspend){var l=this.unsuspend;this.unsuspend=null,l()}}}var zn=null;function Zf(l,t){l.stylesheets=null,l.unsuspend!==null&&(l.count++,zn=new Map,t.forEach(p0,l),zn=null,An.call(l))}function p0(l,t){if(!(t.state.loading&4)){var e=zn.get(l);if(e)var a=e.get(null);else{e=new Map,zn.set(l,e);for(var u=l.querySelectorAll("link[data-precedence],style[data-precedence]"),n=0;n<u.length;n++){var i=u[n];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(e.set(i.dataset.precedence,i),a=i)}a&&e.set(null,a)}u=t.instance,i=u.getAttribute("data-precedence"),n=e.get(i)||a,n===a&&e.set(null,u),e.set(i,u),this.count++,a=An.bind(this),u.addEventListener("load",a),u.addEventListener("error",a),n?n.parentNode.insertBefore(u,n.nextSibling):(l=l.nodeType===9?l.head:l,l.insertBefore(u,l.firstChild)),t.state.loading|=4}}var ru={$$typeof:Ol,Provider:null,Consumer:null,_currentValue:B,_currentValue2:B,_threadCount:0};function b0(l,t,e,a,u,n,i,f){this.tag=1,this.containerInfo=l,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=jn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=jn(0),this.hiddenUpdates=jn(null),this.identifierPrefix=a,this.onUncaughtError=u,this.onCaughtError=n,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=f,this.incompleteTransitions=new Map}function Go(l,t,e,a,u,n,i,f,c,h,g,b){return l=new b0(l,t,e,i,f,c,h,b),t=1,n===!0&&(t|=24),n=$l(3,null,null,t),l.current=n,n.stateNode=l,t=Ti(),t.refCount++,l.pooledCache=t,t.refCount++,n.memoizedState={element:a,isDehydrated:e,cache:t},Oi(n),l}function Xo(l){return l?(l=ke,l):ke}function Qo(l,t,e,a,u,n){u=Xo(u),a.context===null?a.context=u:a.pendingContext=u,a=Kt(t),a.payload={element:e},n=n===void 0?null:n,n!==null&&(a.callback=n),e=Jt(l,a,t),e!==null&&(tt(e,l,t),Qa(e,l,t))}function Co(l,t){if(l=l.memoizedState,l!==null&&l.dehydrated!==null){var e=l.retryLane;l.retryLane=e!==0&&e<t?e:t}}function Lf(l,t){Co(l,t),(l=l.alternate)&&Co(l,t)}function Zo(l){if(l.tag===13){var t=Je(l,67108864);t!==null&&tt(t,l,67108864),Lf(l,67108864)}}var On=!0;function E0(l,t,e,a){var u=S.T;S.T=null;var n=A.p;try{A.p=2,wf(l,t,e,a)}finally{A.p=n,S.T=u}}function T0(l,t,e,a){var u=S.T;S.T=null;var n=A.p;try{A.p=8,wf(l,t,e,a)}finally{A.p=n,S.T=u}}function wf(l,t,e,a){if(On){var u=Vf(a);if(u===null)Nf(l,t,a,Mn,e),wo(l,a);else if(A0(u,l,t,e,a))a.stopPropagation();else if(wo(l,a),t&4&&-1<_0.indexOf(l)){for(;u!==null;){var n=Be(u);if(n!==null)switch(n.tag){case 3:if(n=n.stateNode,n.current.memoizedState.isDehydrated){var i=ye(n.pendingLanes);if(i!==0){var f=n;for(f.pendingLanes|=2,f.entangledLanes|=2;i;){var c=1<<31-kl(i);f.entanglements[1]|=c,i&=~c}Tt(n),($&6)===0&&(rn=gt()+500,au(0))}}break;case 13:f=Je(n,2),f!==null&&tt(f,n,2),dn(),Lf(n,2)}if(n=Vf(a),n===null&&Nf(l,t,a,Mn,e),n===u)break;u=n}u!==null&&a.stopPropagation()}else Nf(l,t,a,null,e)}}function Vf(l){return l=Wn(l),Kf(l)}var Mn=null;function Kf(l){if(Mn=null,l=qe(l),l!==null){var t=J(l);if(t===null)l=null;else{var e=t.tag;if(e===13){if(l=dl(t),l!==null)return l;l=null}else if(e===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;l=null}else t!==l&&(l=null)}}return Mn=l,null}function Lo(l){switch(l){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(cd()){case ec:return 2;case ac:return 8;case Su:case sd:return 32;case uc:return 268435456;default:return 32}default:return 32}}var Jf=!1,ie=null,fe=null,ce=null,ou=new Map,du=new Map,se=[],_0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function wo(l,t){switch(l){case"focusin":case"focusout":ie=null;break;case"dragenter":case"dragleave":fe=null;break;case"mouseover":case"mouseout":ce=null;break;case"pointerover":case"pointerout":ou.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":du.delete(t.pointerId)}}function hu(l,t,e,a,u,n){return l===null||l.nativeEvent!==n?(l={blockedOn:t,domEventName:e,eventSystemFlags:a,nativeEvent:n,targetContainers:[u]},t!==null&&(t=Be(t),t!==null&&Zo(t)),l):(l.eventSystemFlags|=a,t=l.targetContainers,u!==null&&t.indexOf(u)===-1&&t.push(u),l)}function A0(l,t,e,a,u){switch(t){case"focusin":return ie=hu(ie,l,t,e,a,u),!0;case"dragenter":return fe=hu(fe,l,t,e,a,u),!0;case"mouseover":return ce=hu(ce,l,t,e,a,u),!0;case"pointerover":var n=u.pointerId;return ou.set(n,hu(ou.get(n)||null,l,t,e,a,u)),!0;case"gotpointercapture":return n=u.pointerId,du.set(n,hu(du.get(n)||null,l,t,e,a,u)),!0}return!1}function Vo(l){var t=qe(l.target);if(t!==null){var e=J(t);if(e!==null){if(t=e.tag,t===13){if(t=dl(e),t!==null){l.blockedOn=t,gd(l.priority,function(){if(e.tag===13){var a=lt();a=Gn(a);var u=Je(e,a);u!==null&&tt(u,e,a),Lf(e,a)}});return}}else if(t===3&&e.stateNode.current.memoizedState.isDehydrated){l.blockedOn=e.tag===3?e.stateNode.containerInfo:null;return}}}l.blockedOn=null}function Dn(l){if(l.blockedOn!==null)return!1;for(var t=l.targetContainers;0<t.length;){var e=Vf(l.nativeEvent);if(e===null){e=l.nativeEvent;var a=new e.constructor(e.type,e);kn=a,e.target.dispatchEvent(a),kn=null}else return t=Be(e),t!==null&&Zo(t),l.blockedOn=e,!1;t.shift()}return!0}function Ko(l,t,e){Dn(l)&&e.delete(t)}function z0(){Jf=!1,ie!==null&&Dn(ie)&&(ie=null),fe!==null&&Dn(fe)&&(fe=null),ce!==null&&Dn(ce)&&(ce=null),ou.forEach(Ko),du.forEach(Ko)}function Un(l,t){l.blockedOn===t&&(l.blockedOn=null,Jf||(Jf=!0,M.unstable_scheduleCallback(M.unstable_NormalPriority,z0)))}var Rn=null;function Jo(l){Rn!==l&&(Rn=l,M.unstable_scheduleCallback(M.unstable_NormalPriority,function(){Rn===l&&(Rn=null);for(var t=0;t<l.length;t+=3){var e=l[t],a=l[t+1],u=l[t+2];if(typeof a!="function"){if(Kf(a||e)===null)continue;break}var n=Be(e);n!==null&&(l.splice(t,3),t-=3,Vi(n,{pending:!0,data:u,method:e.method,action:a},a,u))}}))}function yu(l){function t(c){return Un(c,l)}ie!==null&&Un(ie,l),fe!==null&&Un(fe,l),ce!==null&&Un(ce,l),ou.forEach(t),du.forEach(t);for(var e=0;e<se.length;e++){var a=se[e];a.blockedOn===l&&(a.blockedOn=null)}for(;0<se.length&&(e=se[0],e.blockedOn===null);)Vo(e),e.blockedOn===null&&se.shift();if(e=(l.ownerDocument||l).$$reactFormReplay,e!=null)for(a=0;a<e.length;a+=3){var u=e[a],n=e[a+1],i=u[Gl]||null;if(typeof n=="function")i||Jo(e);else if(i){var f=null;if(n&&n.hasAttribute("formAction")){if(u=n,i=n[Gl]||null)f=i.formAction;else if(Kf(u)!==null)continue}else f=i.action;typeof f=="function"?e[a+1]=f:(e.splice(a,3),a-=3),Jo(e)}}}function kf(l){this._internalRoot=l}Nn.prototype.render=kf.prototype.render=function(l){var t=this._internalRoot;if(t===null)throw Error(m(409));var e=t.current,a=lt();Qo(e,a,l,t,null,null)},Nn.prototype.unmount=kf.prototype.unmount=function(){var l=this._internalRoot;if(l!==null){this._internalRoot=null;var t=l.containerInfo;Qo(l.current,2,null,l,null,null),dn(),t[He]=null}};function Nn(l){this._internalRoot=l}Nn.prototype.unstable_scheduleHydration=function(l){if(l){var t=sc();l={blockedOn:null,target:l,priority:t};for(var e=0;e<se.length&&t!==0&&t<se[e].priority;e++);se.splice(e,0,l),e===0&&Vo(l)}};var ko=cl.version;if(ko!=="19.1.0")throw Error(m(527,ko,"19.1.0"));A.findDOMNode=function(l){var t=l._reactInternals;if(t===void 0)throw typeof l.render=="function"?Error(m(188)):(l=Object.keys(l).join(","),Error(m(268,l)));return l=R(t),l=l!==null?T(l):null,l=l===null?null:l.stateNode,l};var O0={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:S,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xn.isDisabled&&xn.supportsFiber)try{Sa=xn.inject(O0),Jl=xn}catch{}}return mu.createRoot=function(l,t){if(!q(l))throw Error(m(299));var e=!1,a="",u=sr,n=rr,i=or,f=null;return t!=null&&(t.unstable_strictMode===!0&&(e=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(u=t.onUncaughtError),t.onCaughtError!==void 0&&(n=t.onCaughtError),t.onRecoverableError!==void 0&&(i=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(f=t.unstable_transitionCallbacks)),t=Go(l,1,!1,null,null,e,a,u,n,i,f,null),l[He]=t.current,Rf(l),new kf(t)},mu.hydrateRoot=function(l,t,e){if(!q(l))throw Error(m(299));var a=!1,u="",n=sr,i=rr,f=or,c=null,h=null;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(u=e.identifierPrefix),e.onUncaughtError!==void 0&&(n=e.onUncaughtError),e.onCaughtError!==void 0&&(i=e.onCaughtError),e.onRecoverableError!==void 0&&(f=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(c=e.unstable_transitionCallbacks),e.formState!==void 0&&(h=e.formState)),t=Go(l,1,!0,t,e??null,a,u,n,i,f,c,h),t.context=Xo(null),e=t.current,a=lt(),a=Gn(a),u=Kt(a),u.callback=null,Jt(e,u,a),e=a,t.current.lanes=e,ba(t,e),Tt(t),l[He]=t.current,Rf(l),new Nn(t)},mu.version="19.1.0",mu}var ud;function Y0(){if(ud)return Ff.exports;ud=1;function M(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(M)}catch(cl){console.error(cl)}}return M(),Ff.exports=B0(),Ff.exports}var j0=Y0();function G0(){const[M,cl]=nd.useState(null),W=[{id:1,question:"1. factorial and fibonacci series using Recursion",answer:"",codeExample:`
def factorial(n):
    if (n == 0 or n == 1):
        return 1
    else:
        return n * factorial(n-1)

def fibonacci(n):
    if n <= 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fibonacci(n-1) + fibonacci(n-2)


print(factorial(5))  
print(fibonacci(4))


# factorial
    #like 5 = 5 * 4 * 3 * 2 * 1 = 120

# fibonacci
    #   0,    1,    1,    2,    3,    5,    8,   13,   21, ...
    # f(0), f(1), f(2), f(3), f(4), f(5), f(6), f(7), f(8)
    # 1 + 1 = 2
    # 1 + 2 = 3

------------------------------------------------------------------------------------------

What is Recursion?
  Recursion is when a function calls itself to solve a smaller part of the problem.
  
It keeps calling itself until it reaches a condition called the base case, which stops the recursion.`},{id:2,question:"2. reverse a string",answer:"",codeExample:`
def reverse_string(s):
    return s[::-1]

print(reverse_string("hello"))  # Output: "olleh"


---------------------------------------------------------------------------------------
how this work why this started last charecter this is step not a star or stop:
📦 Python Slice Format Reminder:

s[start : stop : step]

s[::-1]


You're giving:

  start → missing
  stop → missing
  step = -1
  
Now the magic part is:

If you leave out start and give a negative step, Python automatically assumes:
    start = end of the string (last index)
    stop = before the beginning (index -1)
  `},{id:3,question:"3. Add Two Numbers",answer:"",codeExample:`
a = [1, 2, 3]
b = [4, 5, 6]

# Element-wise sum
result = [x + y for x, y in zip(a, b)]
print(result)  # Output: [5, 7, 9]


🧵 What is zip() in Python?
The built-in zip() function combines (or “zips”) two or more iterables (like lists or tuples) element by element, 
creating pairs (or tuples) of values.


It pairs the elements like:

1 with 4 → (1, 4)
2 with 5 → (2, 5)
3 with 6 → (3, 6)`},{id:4,question:"4. Product of Array Elements Excluding Target",answer:"",codeExample:`
from functools import reduce
import operator

def product_excluding_target(arr, target):
    filtered = [x for x in arr if x != target]
    return reduce(operator.mul, filtered, 1)   # you can removed the initial value of 1 this will also work

# Test
arr = [1, 2, 3, 4]
target = 3

result = product_excluding_target(arr, target)
print(result)  # Output: 8

----------------------------------------------------------------------------------------

🧠 What is reduce()?
  reduce() takes a list and reduces it to a single value
  by applying a function again and again to the elements.


🔍 Let's Understand Each Part
🔧 reduce(function, iterable, initial)
This means:

function: What to do (like add, multiply, etc.)

iterable: List of values

initial: What to start with (optional)


----------------------------------------------------------------------------------------

⚙️ In Your Case:

reduce(operator.mul, filtered, 1)

is the same as:

product = 1
for x in filtered:
    product = product * x
return product

✨ Example:
filtered = [1, 2, 4]

If you write:

reduce(operator.mul, filtered, 1)
# = 1 * 1 * 2 * 4 = 8 (✅ correct)


But if you write:

reduce(operator.mul, filtered, 2)
# = 2 * 1 * 2 * 4 = 16 ❌ (wrong)

  `},{id:5,question:"5. Second Largest Element in an Array and range inside.",answer:"",codeExample:`
# Python program to find the second largest element in the array
# using two traversals

# Function to find the second largest element in the array
def getSecondLargest(arr):
    n = len(arr)

    largest = -1
    secondLargest = -1

    # Finding the largest element
    for i in range(n):
        if arr[i] > largest:
            largest = arr[i]

    # Finding the second largest element
    for i in range(n):
        
        # Update second largest if the current element is greater
        # than second largest and not equal to the largest
        if arr[i] > secondLargest and arr[i] != largest:
            secondLargest = arr[i]
    
    return secondLargest

if __name__ == "__main__":
    arr = [12, 35, 1, 10, 34, 1]
    print(getSecondLargest(arr))

-----------------------------------------------------------------------------------------

👋 Yes, in Python, the range() function starts at 0 by default — unless you tell it otherwise.

✅ Basic Syntax:
range(stop)               # starts at 0, goes up to (but not including) stop
range(start, stop)        # starts at start, goes up to (but not including) stop
range(start, stop, step)  # step controls how much it counts by or skips elements

📘 Examples:
print(list(range(5)))        # [0, 1, 2, 3, 4]
print(list(range(2, 6)))     # [2, 3, 4, 5]
print(list(range(1, 10, 2))) # [1, 3, 5, 7, 9]


`},{id:6,question:"6. find not reapeated number",answer:"",codeExample:`
def uniqueElements(arr):
    result = []
    
    for num in arr:
        if arr.count(num) == 1:
            result.append(num)

    
    return result



print(uniqueElements([2, 1, 5, 5, 5, 5, 6, 6, 6, 6, 6]))   # ➜ [2, 1]
print(uniqueElements([1, 2, 3, 4, 5]))                    # ➜ [1, 2, 3, 4, 5]
print(uniqueElements([1, 2, 1, 4, 2, 1, 1, 2, 2, 4, 1, 5, 6, 7, 8]))  # ➜ [5, 6, 7, 8]

      `},{id:7,question:"7. Move all zeros to end of array",answer:"",codeExample:`


# Function which pushes all zeros to end
def pushZerosToEnd(arr):
    
    # Count of non-zero elements
    count = 0  

    # If the element is non-zero, replace the element at
    # index 'count' with this element and increment count
    for i in range(len(arr)):
        if arr[i] != 0:
            arr[count] = arr[i]
            count += 1

    # Now all non-zero elements have been shifted to
    # the front. Make all elements 0 from count to end.
    while count < len(arr):
        arr[count] = 0
        count += 1

if __name__ == "__main__":
    arr = [1, 2, 0, 4, 3, 0, 5, 0]
    pushZerosToEnd(arr)
    for num in arr:
        print(num, end=" ")
       
        
# Output: 1 2 4 3 5 0 0 0      

      `},{id:8,question:"8. Reverse an Array",answer:"",codeExample:`
# function to reverse an array
def reverseArray(arr):                                              |
    n = len(arr)                                                    |
                                                                    |
    # Temporary array to store elements in reversed order           |
    temp = [0] * n                                                  |
                                                                    |
    # Copy elements from original array to temp in reverse order    |    you can write only this to worked:
    for i in range(n):                                              |     return arr.reverse()
        temp[i] = arr[n - i - 1]                                    |
                                                                    |
    # Copy elements back to original array                          |
    for i in range(n):                                              |
        arr[i] = temp[i]                                            |

if __name__ == "__main__":
    arr = [1, 4, 3, 2, 6, 5]

    reverseArray(arr)
  
    for i in range(len(arr)):
        print(arr[i], end=" ")

 # Output: 5 6 2 3 4 1

------------------------------------------------------------------------------------------

🔁 1. reverse() → In-place method
✅ Works only on lists
🔧 Modifies the original list directly (no return)

lst = [1, 2, 3]
lst.reverse()
print(lst)  # ➤ [3, 2, 1]

❌ Doesn't work on strings or other iterables
✅ Changes the original list
⚠️ Returns None



🔁 2. reversed() → Built-in function
✅ Works on any iterable (lists, strings, tuples, etc.)
🔧 Returns an iterator (not a list!)

lst = [1, 2, 3]
print(list(reversed(lst)))  # ➤ [3, 2, 1]

s = "hello"
print("".join(reversed(s)))  # ➤ "olleh"


✅ Doesn't change the original object
✅ Works on strings, tuples, lists
✅ Returns a reversed view, which you can convert using list() or join()

-------------------------------------------------------------------------------------------

What is join() in Python?
      The join() function is used to join elements of a list (or iterable) into a single string, using a separator.

📘 Example:

words = ['hello', 'world']
sentence = " ".join(words)
print(sentence)  # ➤ "hello world"


Why do we use "".join(reversed(s)) instead of just reversed(s)?
      reversed(s) gives you a reversed iterator, not a string.
      To convert it back into a string, we use "".join(...)

reversed(s) → gives: ['o', 'l', 'l', 'e', 'h']

"".join(...) → joins it with no spaces: "olleh"



What is an iterator?
      An iterator is something you can loop through — one item at a time.

Iterator ->	Gives values one at a time
      `},{id:9,question:"9. Word-Length Dictionary",answer:"",codeExample:`
✅ Here's the code:

fruits = ["apple", "banana", "cherry"]
result = {len(fruit): fruit for fruit in fruits}
print(result)

🧾 Output:
{5: 'apple', 6: 'banana', 6: 'cherry'}

------------------------------------------------------------------------------------------

✅ If you want multiple values per key (like a list), do this:

fruits = ["apple", "banana", "cherry"]
result = {}

for fruit in fruits:
    length = len(fruit)
    if length not in result:
        result[length] = []     # Create an empty list for this key
    result[length].append(fruit)

print(result)


🧾 Output:
{5: ['apple'], 6: ['banana', 'cherry']}

------------------------------------------------------------------------------------------

----> group with first latter of alphabet

fruits = ["apple", "banana", "cherry"]
result = {}

for fruit in fruits:
    first_letter = fruit[0]  # Get first letter
    if first_letter not in result:
        result[first_letter] = []  # Create empty list for that letter
    result[first_letter].append(fruit)  # Add fruit to the list

print(result)


output:

{
    'a': ['apple'],
    'b': ['banana'],
    'c': ['cherry']
}


      `},{id:10,question:"10. remove duplicates from a sorted array in-place",answer:"",codeExample:`
def remove_duplicates(nums):
    if not nums:
        return 0

    # slow pointer
    i = 0

    for j in range(1, len(nums)):
        if nums[j] != nums[i]:
            i += 1
            nums[i] = nums[j]  # this is not remove and swap this assign the value or copy the value

    return i + 1

# Example usage
if __name__ == "__main__":
    nums = [1, 1, 2, 2, 3,]
    new_length = remove_duplicates(nums)
    print("Length of array after removing duplicates:", new_length)
    print("Array after removing duplicates:", nums[:new_length])

output:
Length of array after removing duplicates: 3
Array after removing duplicates: [1, 2, 3]

------------------------------------------------------------------------------------------

nums = [1, 2, 2, 3, 4, 4]
unique = list(set(nums))
print(unique)

🧾 Output (order not guaranteed):
[1, 2, 3, 4]

`},{id:11,question:"11. Majority Element II - Elements occurring more than ⌊N/3⌋ times",answer:"",codeExample:`
def majorityElement(arr):
    n = len(arr)
    
    result = []
    for candidate in arr:
        if candidate not in result and arr.count(candidate) > n // 3:  # this means first solve n//3 then check if the candidate is in the array
                                                                       # like n = 5 then 5//3 = 1
            result.append(candidate)
    

    return sorted(result)


print(majorityElement([2, 1, 5, 5, 5, 5, 6, 6, 6, 6, 6]))  # ➜ [5, 6]
print(majorityElement([1, 2, 3, 3, 1]))                   # ➜ [1, 3]
print(majorityElement([1, 2, 1, 4, 2, 1, 1, 2, 8, 8, 8, 2, 4, 1, 5, 6, 7, 8]))      `},{id:12,question:"12. Stock Buy and Sell - Multiple Transaction Allowed",answer:"Given an array prices[] of size n denoting the cost of stock on each day, the task is to find the maximum total profit if we can buy and sell the stocks any number of times.",codeExample:`
# Python Program to find the max profit when multiple
# transactions are allowed

def maximumProfit(prices):
    res = 0

    # Keep on adding the difference between
    # adjacent when the prices a
    for i in range(1, len(prices)):
        if prices[i] > prices[i - 1]:
            res += prices[i] - prices[i - 1]

    return res

if __name__ == "__main__":
    prices = [100, 180, 260, 310, 40, 535, 695]
    print(maximumProfit(prices))

# Output: 865
      `},{id:13,question:"13. Stock Buy and Sell - Max one Transaction Allowed",answer:"Given an array prices[] of length N, representing the prices of the stocks on different days, the task is to find the maximum profit possible by buying and selling the stocks on different days when at most one transaction is allowed. Here one transaction means 1 buy + 1 Sell.",codeExample:`
# Python Program to solve stock buy and sell by  
# exploring all possible pairs

def max_profit(prices):
    n = len(prices)
    res = 0

    # Explore all possible ways to buy and sell stock
    for i in range(n - 1):           # this check first of list but skip the last element
        for j in range(i + 1, n):    # this check last of list but skip the first element
            res = max(res, prices[j] - prices[i])
    
    return res

if __name__ == "__main__":
    prices = [7, 10, 1, 3, 6, 9, 2]
    print(max_profit(prices))


Output:
8

------------------------------------------------------------------------------------------

res is like a variable 

🔍 Variables:

  res: stores the maximum profit found so far
  prices[i]: buy price (day i)
  prices[j]: sell price (day j)
  prices[j] - prices[i]: current profit from buying at i and selling at j

📊 Visual Help:
| Day | Price | Buy Here?  | Best Sell After? | Max Profit |
| --- | ----- | ---------  | ---------------- | ---------- |
| 0   | 7     | ✅         | 10 (Day 1)       | 3          |
| 1   | 10    | ❌         | None             | -          |
| 2   | 1     | ✅✅✅    | 9 (Day 5)        | 🔥 8       |
| 3   | 3     | ✅         | 9                | 6          |
| 4   | 6     | ✅         | 9                | 3          |
| 5   | 9     | ✅         | 2                | -7         |
| 6   | 2     | ✅         | None             | -          |


------------------------------------------------------------------------------------------

❌ No, res does not store all the profits like [3, 8, 5, 2, ...].

✅ Instead, res stores only one value:
      The maximum profit found so far during the loop.

🔁 What really happens:
As the loop runs, it keeps checking profits like:

profit = prices[j] - prices[i]
res = max(res, profit)

Every time a new profit is found:

  If it's greater than the current res, we update res.

  If not, we leave res as is.


✅ Answer:
This line checks if prices[j] - prices[i] > res, and updates res only if the new profit is bigger.

So yes — it behaves like this:

profit = prices[j] - prices[i]
if profit > res:
    res = profit


But the max() function does this in one line:

res = max(res, profit)

`},{id:14,question:"14. How to find the length of the last word in a string",answer:"",codeExample:`
s = "Hello world from Python"
last_word_length = len(s.strip().split()[-1])
print(last_word_length)

Output:
6

🔍 Explanation:
s.strip()
Removes leading/trailing spaces.

.split()
Splits the string into a list of words (by spaces).

Example:
"Hello world from Python".split() → ['Hello', 'world', 'from', 'Python']

[-1]
Gets the last word in the list → 'Python'

len(...)
Returns the length of that last word → 6

------------------------------------------------------------------------------------------

🧼 What is strip()?
      strip() is a string method that removes spaces (and other whitespace like tabs and newlines) from the start and end of a string.

------------------------------------------------------------------------------------------

find the length of the last word in a string without using .strip().split()

s = "  Hello world  "
length = 0
i = len(s) - 1    # Start from the last index of the string like len(s)=15 to i = 14

# Step 1: Skip trailing spaces
while i >= 0 and s[i] == ' ':
    i -= 1

# Step 2: Count the length of the last word
while i >= 0 and s[i] != ' ':
    length += 1
    i -= 1

print(length)

Output:
5

      `},{id:15,question:"15. create sorted array",answer:"",codeExample:`
arr = [5, 2, 9, 1, 3]

for i in range(len(arr)):
    for j in range(len(arr) - 1):
        if arr[j] > arr[j + 1]:
            arr[j], arr[j + 1] = arr[j + 1], arr[j]

print(arr)  # Output: [1, 2, 3, 5, 9]

------------------------------------------------------------------------------------------

using sorted() function and soert() method

arr = [5, 2, 9, 1, 3]

sorted_arr = sorted(arr)  # Does not change the original list
print("Sorted:", sorted_arr)  # Output: [1, 2, 3, 5, 9]

--------------------------------------------------------------------

arr = [5, 2, 9, 1, 3]

arr.sort()  # Sorts the list in-place
print("Sorted:", arr)  # Output: [1, 2, 3, 5, 9]
`},{id:16,question:"16. positive and negative numbers to move right and left.",answer:"",codeExample:`
arr = [5, -2, 9, -1, 3, -7, 6]

positive = []
negative = []

for num in arr:
    if num >= 0:
        positive.append(num)
    else:
        negative.append(num)

result = positive + negative
print(result)
`},{id:17,question:"17. What is a Linked List?",answer:"",codeExample:`
A linked list is a linear data structure where elements (called nodes) are connected one after another.
Unlike arrays, which store elements in contiguous memory, linked lists use pointers to connect nodes.

Each node contains:
  The data
  A reference (pointer) to the next node


🟢 Why Use Linked Lists?
✅ Dynamic size (easy to grow/shrink)
✅ Efficient insertion/deletion (especially in the middle)
❌ Slower access (you must traverse from the head to reach an element)


🟢 Types of Linked Lists
Singly Linked List
Each node points to the next node.

Doubly Linked List
Each node points to both the next and the previous node.

Circular Linked List
The last node points back to the first node.

------------------------------------------------------------------------------------------

🟢 How to Implement a Singly Linked List in Python

1️⃣ Define the Node Class
Each node holds data and a pointer to the next node.

class Node:
    def __init__(self, data):
        self.data = data        # The value stored in the node
        self.next = None        # Pointer to the next node (default is None)

✅ Example:
node1 = Node(10)
node2 = Node(20)
node1.next = node2  # Linking node1 -> node2


2️⃣ Define the LinkedList Class
This class manages the head pointer and operations.

class LinkedList:
    def __init__(self):
        self.head = None  # Initially the list is empty

    # Insert at the end
    def append(self, data):
        new_node = Node(data)
        if self.head is None:
            self.head = new_node
            return
        last = self.head
        while last.next:
            last = last.next
        last.next = new_node

    # Display the list
    def display(self):
        current = self.head
        while current:
            print(current.data, end=" -> ")
            current = current.next
        print("None")

✅ Example Usage:
ll = LinkedList()
ll.append(5)
ll.append(15)
ll.append(25)

ll.display()


Output:
5 -> 15 -> 25 -> None

---------------------------------------------------

Let’s look at your LinkedList class:

    class LinkedList:
        def __init__(self):
            self.head = None  # List starts empty

✅ At the start, the list is empty:

    head ➡️ None
Suppose you do this:

    ll = LinkedList()
    ll.append(10)
    ll.append(20)
    ll.append(30)
    ll.display()
I will show you line by line what happens.

🔹 Step 1: append(10)

    new_node = Node(10)

Creates a Node:

    new_node:
      data = 10
      next = None
  
Then:

    if self.head is None:
        self.head = new_node

Since head is None, the list is empty, so now:

    head ➡️ [10 | next -> None]

✅ The list now has:

    [10]


🔹 Step 2: append(20)
Creates:

    new_node:
      data = 20
      next = None

Since self.head is not None (it points to the node with 10), we do:

    last = self.head

last points to:

    [10 | next -> None]

Then:

  while last.next:
      last = last.next
Since last.next is None, this loop stops.

Next:
    last.next = new_node


This connects the first node to the new one:

    head ➡️ [10 | next -> [20 | next -> None]]

✅ The list now:

    10 -> 20


🔹 Step 3: append(30)

Creates:

    new_node:
      data = 30
      next = None

last = self.head points to:

    [10]


The while loop:

First iteration: last.next is the node with 20, so:
last = last.next

Now last points to:
    [20]

Second iteration: last.next is None, so loop stops.

Finally:

    last.next = new_node

Now node 20 points to node 30:

    head ➡️ [10 | next -> [20 | next -> [30 | next -> None]]]

✅ The list:

    10 -> 20 -> 30


🔹 Step 4: display()

This prints all the data:

current = self.head

✅ Initially:

current ➡️ [10]
While loop:

Print 10 ->
Move current = current.next ➡️ node with 20

Print 20 ->
Move current = current.next ➡️ node with 30

Print 30 ->
Move current = current.next ➡️ None

Print None at the end.

✅ Full Visual Recap
After all appends:


head
  ↓
[10] -> [20] -> [30] -> None
Every append:

Creates a new node.

Traverses the list (last = self.head) to find the last node.

Updates last.next to point to the new node.


`},{id:4,question:"",answer:"",codeExample:""},{id:4,question:"",answer:"",codeExample:""},{id:4,question:"",answer:"",codeExample:""},{id:1.1,question:"1.1. Centered Pyramid Pattern",answer:"",codeExample:`
rows = 5  # Number of rows in the pyramid

for i in range(rows):
    stars = '*' * (2 * i + 1)                # Number of stars for this row
    spaces = ' ' * (rows - i - 1)            # Leading spaces for alignment
    print(spaces + stars)

Output:

    *
   ***
  *****
 *******
*********

      `},{id:1.2,question:"1.2. Hollow Pyramid Star Pattern",answer:"",codeExample:`
rows = 5

for i in range(1, rows + 1):
    spaces = ' ' * (rows - i)
    if i == 1:
        print(spaces + '*')
    elif i == rows:
        print('*' * (2 * rows - 1))
    else:
        middle_spaces = ' ' * (2 * i - 3)
        print(spaces + '*' + middle_spaces + '*')

Output:

    *
   * *
  *   *
 *     *
*********

`},{id:1.3,question:"1.3. Palindromic Number Pyramid Pattern",answer:"",codeExample:`
rows = 5

for i in range(1, rows + 1):
    spaces = ' ' * (rows - i)
    
    # Increasing numbers from 1 to i
    inc_numbers = ''.join(str(j) for j in range(1, i + 1))
    
    # Decreasing numbers from i-1 down to 1
    dec_numbers = ''.join(str(j) for j in range(i - 1, 0, -1))
    
    print(spaces + inc_numbers + dec_numbers)

Output:

    1
   121
  12321
 1234321
123454321

`},{id:1.4,question:"1.4. Right-Angled Triangle with Increasing Numbers and Right-Aligned Last Column",answer:"",codeExample:`
rows = 5

for i in range(1, rows + 1):
    if i == 1:
        # First row: print 1 to 5
        print(''.join(str(j) for j in range(1, rows + 1)))
    elif i == rows:
        # Last row: print only 5
        print(i)
    else:
        # Middle rows: print i, spaces, then 5
        spaces = ' ' * (rows - i - 1)
        print(f"{i}{spaces}5")

Output:

12345
2  5
3 5
45
5

      `},{id:1.5,question:"1.5. Diamond Number Pattern",answer:"",codeExample:`
# Upper part including the middle
for i in range(3, 7):  # from 3 to 6 inclusive
    print(str(i) * (i - 2))

# Lower part
for i in range(5, 2, -1):  # from 5 down to 3
    print(str(i) * (i - 2))


output:
3
44
555
6666
555
44
3
    `},{id:1.6,question:"1.6. Centered Palindromic Number Pyramid",answer:"",codeExample:`
rows = 5  # Height of the top half of the diamond

# Upper half including the middle line
for i in range(1, rows + 1):
    spaces = ' ' * (rows - i)
    numbers = str(i) * i
    print(spaces + numbers)

# Lower half
for i in range(rows - 1, 0, -1):
    spaces = ' ' * (rows - i)
    numbers = str(i) * i
    print(spaces + numbers)

Output:
    1
   22
  333
 4444
55555
 4444
  333
   22
    1
    `},{id:1.7,question:"1.7 Diamond pattern ",answer:"",codeExample:`
rows = 5  # height of the diamond (center line)

# Upper half (including middle line)
for i in range(rows):
    spaces = ' ' * (rows - i - 1)
    stars = '*' * (2 * i + 1)
    print(spaces + stars)

# Lower half
for i in range(rows - 2, -1, -1):
    spaces = ' ' * (rows - i - 1)
    stars = '*' * (2 * i + 1)
    print(spaces + stars)


Output:

    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
    
`},{id:1.8,question:"1.8. Diamond pattern but used numbers",answer:"",codeExample:`
rows = 5  # Height of the top half of the diamond

# Upper half including the middle line
for i in range(1, rows + 1):
    spaces = ' ' * (rows - i)
    numbers = str(i) * (2 * i - 1)
    print(spaces + numbers)

# Lower half
for i in range(rows - 1, 0, -1):
    spaces = ' ' * (rows - i)
    numbers = str(i) * (2 * i -1)
    print(spaces + numbers)

Output:

    1
   222
  33333
 4444444
555555555
 4444444
  33333
   222
    1

`},{id:1.9,question:"1.9 X-shaped pattern",answer:"",codeExample:`
size = 5

for i in range(size):
    for j in range(size):
        if j == i or j == size - i - 1:
            print("*", end="")
        else:
            print(" ", end="")
    print()

Output:

*   *   ← i = 0, j = 0 and 4
 * *    ← i = 1, j = 1 and 3
  *     ← i = 2, j = 2
 * *    ← i = 3, j = 1 and 3
*   *   ← i = 4, j = 0 and 4


what is used of OR.
      If either condition is true, then do something.

Syntax:
if condition1 or condition2:
    # run this code if at least one condition is true

`},{id:1.1,question:"1.10. Alphabet triangle pattern",answer:"",codeExample:`
      
rows = 5

for i in range(1, rows + 1):
    for j in range(65, 65 + i):  # ASCII value of 'A' is 65
        print(chr(j), end='')
    print()



✅ Output:

A
AB
ABC
ABCD
ABCDE

-----------------------------------------------------------------------------------------

🔤 ASCII = American Standard Code for Information Interchange
      It’s a system that assigns a number to every character — like letters, digits, and symbols — so computers can work with text.

💡 Examples:

| Character     | ASCII Code |
| ------------- | ---------- |
| 'A'           | 65         |
| 'B'           | 66         |
| 'C'           | 67         |
| 'a'           | 97         |
| 'b'           | 98         |
| '0'           | 48         |
| ' ' (space)   | 32         |

`},{id:4,question:"",answer:"",codeExample:""},{id:4,question:"",answer:"",codeExample:""},{id:4,question:"",answer:"",codeExample:""}],m=q=>{cl(M===q?null:q)};return Yl.jsxs("div",{className:"app-container",children:[Yl.jsx("h1",{children:"DSA Practical Interview Questions"}),Yl.jsx("div",{className:"questions-container",children:W.map(q=>Yl.jsxs("div",{className:"question-item",children:[Yl.jsx("button",{className:`question-button ${M===q.id?"active":""}`,onClick:()=>m(q.id),children:q.question}),M===q.id&&Yl.jsxs("div",{className:"answer-container",children:[Yl.jsxs("div",{className:"answer",children:[Yl.jsx("h3",{children:"Answer:"}),Yl.jsx("p",{children:q.answer})]}),q.codeExample&&Yl.jsxs("div",{className:"code-example",children:[Yl.jsx("h3",{children:"Code Example:"}),Yl.jsx("pre",{children:Yl.jsx("code",{children:q.codeExample})})]})]})]},q.id))})]})}j0.createRoot(document.getElementById("root")).render(Yl.jsx(nd.StrictMode,{children:Yl.jsx(G0,{})}));
