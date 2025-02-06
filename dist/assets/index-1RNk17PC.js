(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();function dR(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var mp={exports:{}},Fl={},gp={exports:{}},ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var av;function fR(){if(av)return ke;av=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),E=Symbol.iterator;function T(M){return M===null||typeof M!="object"?null:(M=E&&M[E]||M["@@iterator"],typeof M=="function"?M:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x=Object.assign,$={};function L(M,G,pe){this.props=M,this.context=G,this.refs=$,this.updater=pe||R}L.prototype.isReactComponent={},L.prototype.setState=function(M,G){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,G,"setState")},L.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function q(){}q.prototype=L.prototype;function ee(M,G,pe){this.props=M,this.context=G,this.refs=$,this.updater=pe||R}var X=ee.prototype=new q;X.constructor=ee,x(X,L.prototype),X.isPureReactComponent=!0;var de=Array.isArray,Ce=Object.prototype.hasOwnProperty,Ie={current:null},b={key:!0,ref:!0,__self:!0,__source:!0};function S(M,G,pe){var Re,Ae={},Oe=null,ze=null;if(G!=null)for(Re in G.ref!==void 0&&(ze=G.ref),G.key!==void 0&&(Oe=""+G.key),G)Ce.call(G,Re)&&!b.hasOwnProperty(Re)&&(Ae[Re]=G[Re]);var Be=arguments.length-2;if(Be===1)Ae.children=pe;else if(1<Be){for(var Qe=Array(Be),At=0;At<Be;At++)Qe[At]=arguments[At+2];Ae.children=Qe}if(M&&M.defaultProps)for(Re in Be=M.defaultProps,Be)Ae[Re]===void 0&&(Ae[Re]=Be[Re]);return{$$typeof:n,type:M,key:Oe,ref:ze,props:Ae,_owner:Ie.current}}function A(M,G){return{$$typeof:n,type:M.type,key:G,ref:M.ref,props:M.props,_owner:M._owner}}function N(M){return typeof M=="object"&&M!==null&&M.$$typeof===n}function O(M){var G={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(pe){return G[pe]})}var V=/\/+/g;function k(M,G){return typeof M=="object"&&M!==null&&M.key!=null?O(""+M.key):G.toString(36)}function ct(M,G,pe,Re,Ae){var Oe=typeof M;(Oe==="undefined"||Oe==="boolean")&&(M=null);var ze=!1;if(M===null)ze=!0;else switch(Oe){case"string":case"number":ze=!0;break;case"object":switch(M.$$typeof){case n:case e:ze=!0}}if(ze)return ze=M,Ae=Ae(ze),M=Re===""?"."+k(ze,0):Re,de(Ae)?(pe="",M!=null&&(pe=M.replace(V,"$&/")+"/"),ct(Ae,G,pe,"",function(At){return At})):Ae!=null&&(N(Ae)&&(Ae=A(Ae,pe+(!Ae.key||ze&&ze.key===Ae.key?"":(""+Ae.key).replace(V,"$&/")+"/")+M)),G.push(Ae)),1;if(ze=0,Re=Re===""?".":Re+":",de(M))for(var Be=0;Be<M.length;Be++){Oe=M[Be];var Qe=Re+k(Oe,Be);ze+=ct(Oe,G,pe,Qe,Ae)}else if(Qe=T(M),typeof Qe=="function")for(M=Qe.call(M),Be=0;!(Oe=M.next()).done;)Oe=Oe.value,Qe=Re+k(Oe,Be++),ze+=ct(Oe,G,pe,Qe,Ae);else if(Oe==="object")throw G=String(M),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.");return ze}function $t(M,G,pe){if(M==null)return M;var Re=[],Ae=0;return ct(M,Re,"","",function(Oe){return G.call(pe,Oe,Ae++)}),Re}function Wt(M){if(M._status===-1){var G=M._result;G=G(),G.then(function(pe){(M._status===0||M._status===-1)&&(M._status=1,M._result=pe)},function(pe){(M._status===0||M._status===-1)&&(M._status=2,M._result=pe)}),M._status===-1&&(M._status=0,M._result=G)}if(M._status===1)return M._result.default;throw M._result}var He={current:null},re={transition:null},ge={ReactCurrentDispatcher:He,ReactCurrentBatchConfig:re,ReactCurrentOwner:Ie};function oe(){throw Error("act(...) is not supported in production builds of React.")}return ke.Children={map:$t,forEach:function(M,G,pe){$t(M,function(){G.apply(this,arguments)},pe)},count:function(M){var G=0;return $t(M,function(){G++}),G},toArray:function(M){return $t(M,function(G){return G})||[]},only:function(M){if(!N(M))throw Error("React.Children.only expected to receive a single React element child.");return M}},ke.Component=L,ke.Fragment=t,ke.Profiler=s,ke.PureComponent=ee,ke.StrictMode=r,ke.Suspense=f,ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ge,ke.act=oe,ke.cloneElement=function(M,G,pe){if(M==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+M+".");var Re=x({},M.props),Ae=M.key,Oe=M.ref,ze=M._owner;if(G!=null){if(G.ref!==void 0&&(Oe=G.ref,ze=Ie.current),G.key!==void 0&&(Ae=""+G.key),M.type&&M.type.defaultProps)var Be=M.type.defaultProps;for(Qe in G)Ce.call(G,Qe)&&!b.hasOwnProperty(Qe)&&(Re[Qe]=G[Qe]===void 0&&Be!==void 0?Be[Qe]:G[Qe])}var Qe=arguments.length-2;if(Qe===1)Re.children=pe;else if(1<Qe){Be=Array(Qe);for(var At=0;At<Qe;At++)Be[At]=arguments[At+2];Re.children=Be}return{$$typeof:n,type:M.type,key:Ae,ref:Oe,props:Re,_owner:ze}},ke.createContext=function(M){return M={$$typeof:u,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},M.Provider={$$typeof:a,_context:M},M.Consumer=M},ke.createElement=S,ke.createFactory=function(M){var G=S.bind(null,M);return G.type=M,G},ke.createRef=function(){return{current:null}},ke.forwardRef=function(M){return{$$typeof:h,render:M}},ke.isValidElement=N,ke.lazy=function(M){return{$$typeof:y,_payload:{_status:-1,_result:M},_init:Wt}},ke.memo=function(M,G){return{$$typeof:m,type:M,compare:G===void 0?null:G}},ke.startTransition=function(M){var G=re.transition;re.transition={};try{M()}finally{re.transition=G}},ke.unstable_act=oe,ke.useCallback=function(M,G){return He.current.useCallback(M,G)},ke.useContext=function(M){return He.current.useContext(M)},ke.useDebugValue=function(){},ke.useDeferredValue=function(M){return He.current.useDeferredValue(M)},ke.useEffect=function(M,G){return He.current.useEffect(M,G)},ke.useId=function(){return He.current.useId()},ke.useImperativeHandle=function(M,G,pe){return He.current.useImperativeHandle(M,G,pe)},ke.useInsertionEffect=function(M,G){return He.current.useInsertionEffect(M,G)},ke.useLayoutEffect=function(M,G){return He.current.useLayoutEffect(M,G)},ke.useMemo=function(M,G){return He.current.useMemo(M,G)},ke.useReducer=function(M,G,pe){return He.current.useReducer(M,G,pe)},ke.useRef=function(M){return He.current.useRef(M)},ke.useState=function(M){return He.current.useState(M)},ke.useSyncExternalStore=function(M,G,pe){return He.current.useSyncExternalStore(M,G,pe)},ke.useTransition=function(){return He.current.useTransition()},ke.version="18.3.1",ke}var lv;function bm(){return lv||(lv=1,gp.exports=fR()),gp.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uv;function pR(){if(uv)return Fl;uv=1;var n=bm(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(h,f,m){var y,E={},T=null,R=null;m!==void 0&&(T=""+m),f.key!==void 0&&(T=""+f.key),f.ref!==void 0&&(R=f.ref);for(y in f)r.call(f,y)&&!a.hasOwnProperty(y)&&(E[y]=f[y]);if(h&&h.defaultProps)for(y in f=h.defaultProps,f)E[y]===void 0&&(E[y]=f[y]);return{$$typeof:e,type:h,key:T,ref:R,props:E,_owner:s.current}}return Fl.Fragment=t,Fl.jsx=u,Fl.jsxs=u,Fl}var cv;function mR(){return cv||(cv=1,mp.exports=pR()),mp.exports}var ne=mR(),z=bm();const Ws=dR(z);var rh={},_p={exports:{}},mn={},yp={exports:{}},vp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hv;function gR(){return hv||(hv=1,function(n){function e(re,ge){var oe=re.length;re.push(ge);e:for(;0<oe;){var M=oe-1>>>1,G=re[M];if(0<s(G,ge))re[M]=ge,re[oe]=G,oe=M;else break e}}function t(re){return re.length===0?null:re[0]}function r(re){if(re.length===0)return null;var ge=re[0],oe=re.pop();if(oe!==ge){re[0]=oe;e:for(var M=0,G=re.length,pe=G>>>1;M<pe;){var Re=2*(M+1)-1,Ae=re[Re],Oe=Re+1,ze=re[Oe];if(0>s(Ae,oe))Oe<G&&0>s(ze,Ae)?(re[M]=ze,re[Oe]=oe,M=Oe):(re[M]=Ae,re[Re]=oe,M=Re);else if(Oe<G&&0>s(ze,oe))re[M]=ze,re[Oe]=oe,M=Oe;else break e}}return ge}function s(re,ge){var oe=re.sortIndex-ge.sortIndex;return oe!==0?oe:re.id-ge.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var u=Date,h=u.now();n.unstable_now=function(){return u.now()-h}}var f=[],m=[],y=1,E=null,T=3,R=!1,x=!1,$=!1,L=typeof setTimeout=="function"?setTimeout:null,q=typeof clearTimeout=="function"?clearTimeout:null,ee=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function X(re){for(var ge=t(m);ge!==null;){if(ge.callback===null)r(m);else if(ge.startTime<=re)r(m),ge.sortIndex=ge.expirationTime,e(f,ge);else break;ge=t(m)}}function de(re){if($=!1,X(re),!x)if(t(f)!==null)x=!0,Wt(Ce);else{var ge=t(m);ge!==null&&He(de,ge.startTime-re)}}function Ce(re,ge){x=!1,$&&($=!1,q(S),S=-1),R=!0;var oe=T;try{for(X(ge),E=t(f);E!==null&&(!(E.expirationTime>ge)||re&&!O());){var M=E.callback;if(typeof M=="function"){E.callback=null,T=E.priorityLevel;var G=M(E.expirationTime<=ge);ge=n.unstable_now(),typeof G=="function"?E.callback=G:E===t(f)&&r(f),X(ge)}else r(f);E=t(f)}if(E!==null)var pe=!0;else{var Re=t(m);Re!==null&&He(de,Re.startTime-ge),pe=!1}return pe}finally{E=null,T=oe,R=!1}}var Ie=!1,b=null,S=-1,A=5,N=-1;function O(){return!(n.unstable_now()-N<A)}function V(){if(b!==null){var re=n.unstable_now();N=re;var ge=!0;try{ge=b(!0,re)}finally{ge?k():(Ie=!1,b=null)}}else Ie=!1}var k;if(typeof ee=="function")k=function(){ee(V)};else if(typeof MessageChannel<"u"){var ct=new MessageChannel,$t=ct.port2;ct.port1.onmessage=V,k=function(){$t.postMessage(null)}}else k=function(){L(V,0)};function Wt(re){b=re,Ie||(Ie=!0,k())}function He(re,ge){S=L(function(){re(n.unstable_now())},ge)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(re){re.callback=null},n.unstable_continueExecution=function(){x||R||(x=!0,Wt(Ce))},n.unstable_forceFrameRate=function(re){0>re||125<re?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<re?Math.floor(1e3/re):5},n.unstable_getCurrentPriorityLevel=function(){return T},n.unstable_getFirstCallbackNode=function(){return t(f)},n.unstable_next=function(re){switch(T){case 1:case 2:case 3:var ge=3;break;default:ge=T}var oe=T;T=ge;try{return re()}finally{T=oe}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(re,ge){switch(re){case 1:case 2:case 3:case 4:case 5:break;default:re=3}var oe=T;T=re;try{return ge()}finally{T=oe}},n.unstable_scheduleCallback=function(re,ge,oe){var M=n.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?M+oe:M):oe=M,re){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=oe+G,re={id:y++,callback:ge,priorityLevel:re,startTime:oe,expirationTime:G,sortIndex:-1},oe>M?(re.sortIndex=oe,e(m,re),t(f)===null&&re===t(m)&&($?(q(S),S=-1):$=!0,He(de,oe-M))):(re.sortIndex=G,e(f,re),x||R||(x=!0,Wt(Ce))),re},n.unstable_shouldYield=O,n.unstable_wrapCallback=function(re){var ge=T;return function(){var oe=T;T=ge;try{return re.apply(this,arguments)}finally{T=oe}}}}(vp)),vp}var dv;function _R(){return dv||(dv=1,yp.exports=gR()),yp.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fv;function yR(){if(fv)return mn;fv=1;var n=bm(),e=_R();function t(i){for(var o="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)o+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+o+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,s={};function a(i,o){u(i,o),u(i+"Capture",o)}function u(i,o){for(s[i]=o,i=0;i<o.length;i++)r.add(o[i])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},E={};function T(i){return f.call(E,i)?!0:f.call(y,i)?!1:m.test(i)?E[i]=!0:(y[i]=!0,!1)}function R(i,o,l,d){if(l!==null&&l.type===0)return!1;switch(typeof o){case"function":case"symbol":return!0;case"boolean":return d?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function x(i,o,l,d){if(o===null||typeof o>"u"||R(i,o,l,d))return!0;if(d)return!1;if(l!==null)switch(l.type){case 3:return!o;case 4:return o===!1;case 5:return isNaN(o);case 6:return isNaN(o)||1>o}return!1}function $(i,o,l,d,p,_,w){this.acceptsBooleans=o===2||o===3||o===4,this.attributeName=d,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=i,this.type=o,this.sanitizeURL=_,this.removeEmptyString=w}var L={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){L[i]=new $(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var o=i[0];L[o]=new $(o,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){L[i]=new $(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){L[i]=new $(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){L[i]=new $(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){L[i]=new $(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){L[i]=new $(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){L[i]=new $(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){L[i]=new $(i,5,!1,i.toLowerCase(),null,!1,!1)});var q=/[\-:]([a-z])/g;function ee(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var o=i.replace(q,ee);L[o]=new $(o,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var o=i.replace(q,ee);L[o]=new $(o,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var o=i.replace(q,ee);L[o]=new $(o,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){L[i]=new $(i,1,!1,i.toLowerCase(),null,!1,!1)}),L.xlinkHref=new $("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){L[i]=new $(i,1,!1,i.toLowerCase(),null,!0,!0)});function X(i,o,l,d){var p=L.hasOwnProperty(o)?L[o]:null;(p!==null?p.type!==0:d||!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(x(o,l,p,d)&&(l=null),d||p===null?T(o)&&(l===null?i.removeAttribute(o):i.setAttribute(o,""+l)):p.mustUseProperty?i[p.propertyName]=l===null?p.type===3?!1:"":l:(o=p.attributeName,d=p.attributeNamespace,l===null?i.removeAttribute(o):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,d?i.setAttributeNS(d,o,l):i.setAttribute(o,l))))}var de=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ce=Symbol.for("react.element"),Ie=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),N=Symbol.for("react.provider"),O=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),ct=Symbol.for("react.suspense_list"),$t=Symbol.for("react.memo"),Wt=Symbol.for("react.lazy"),He=Symbol.for("react.offscreen"),re=Symbol.iterator;function ge(i){return i===null||typeof i!="object"?null:(i=re&&i[re]||i["@@iterator"],typeof i=="function"?i:null)}var oe=Object.assign,M;function G(i){if(M===void 0)try{throw Error()}catch(l){var o=l.stack.trim().match(/\n( *(at )?)/);M=o&&o[1]||""}return`
`+M+i}var pe=!1;function Re(i,o){if(!i||pe)return"";pe=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(o)if(o=function(){throw Error()},Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(B){var d=B}Reflect.construct(i,[],o)}else{try{o.call()}catch(B){d=B}i.call(o.prototype)}else{try{throw Error()}catch(B){d=B}i()}}catch(B){if(B&&d&&typeof B.stack=="string"){for(var p=B.stack.split(`
`),_=d.stack.split(`
`),w=p.length-1,C=_.length-1;1<=w&&0<=C&&p[w]!==_[C];)C--;for(;1<=w&&0<=C;w--,C--)if(p[w]!==_[C]){if(w!==1||C!==1)do if(w--,C--,0>C||p[w]!==_[C]){var P=`
`+p[w].replace(" at new "," at ");return i.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",i.displayName)),P}while(1<=w&&0<=C);break}}}finally{pe=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?G(i):""}function Ae(i){switch(i.tag){case 5:return G(i.type);case 16:return G("Lazy");case 13:return G("Suspense");case 19:return G("SuspenseList");case 0:case 2:case 15:return i=Re(i.type,!1),i;case 11:return i=Re(i.type.render,!1),i;case 1:return i=Re(i.type,!0),i;default:return""}}function Oe(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case b:return"Fragment";case Ie:return"Portal";case A:return"Profiler";case S:return"StrictMode";case k:return"Suspense";case ct:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case O:return(i.displayName||"Context")+".Consumer";case N:return(i._context.displayName||"Context")+".Provider";case V:var o=i.render;return i=i.displayName,i||(i=o.displayName||o.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case $t:return o=i.displayName||null,o!==null?o:Oe(i.type)||"Memo";case Wt:o=i._payload,i=i._init;try{return Oe(i(o))}catch{}}return null}function ze(i){var o=i.type;switch(i.tag){case 24:return"Cache";case 9:return(o.displayName||"Context")+".Consumer";case 10:return(o._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=o.render,i=i.displayName||i.name||"",o.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return o;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Oe(o);case 8:return o===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o}return null}function Be(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Qe(i){var o=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(o==="checkbox"||o==="radio")}function At(i){var o=Qe(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,o),d=""+i[o];if(!i.hasOwnProperty(o)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,_=l.set;return Object.defineProperty(i,o,{configurable:!0,get:function(){return p.call(this)},set:function(w){d=""+w,_.call(this,w)}}),Object.defineProperty(i,o,{enumerable:l.enumerable}),{getValue:function(){return d},setValue:function(w){d=""+w},stopTracking:function(){i._valueTracker=null,delete i[o]}}}}function Or(i){i._valueTracker||(i._valueTracker=At(i))}function fo(i){if(!i)return!1;var o=i._valueTracker;if(!o)return!0;var l=o.getValue(),d="";return i&&(d=Qe(i)?i.checked?"true":"false":i.value),i=d,i!==l?(o.setValue(i),!0):!1}function gi(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function hs(i,o){var l=o.checked;return oe({},o,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function po(i,o){var l=o.defaultValue==null?"":o.defaultValue,d=o.checked!=null?o.checked:o.defaultChecked;l=Be(o.value!=null?o.value:l),i._wrapperState={initialChecked:d,initialValue:l,controlled:o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null}}function Wa(i,o){o=o.checked,o!=null&&X(i,"checked",o,!1)}function qa(i,o){Wa(i,o);var l=Be(o.value),d=o.type;if(l!=null)d==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(d==="submit"||d==="reset"){i.removeAttribute("value");return}o.hasOwnProperty("value")?mo(i,o.type,l):o.hasOwnProperty("defaultValue")&&mo(i,o.type,Be(o.defaultValue)),o.checked==null&&o.defaultChecked!=null&&(i.defaultChecked=!!o.defaultChecked)}function Bu(i,o,l){if(o.hasOwnProperty("value")||o.hasOwnProperty("defaultValue")){var d=o.type;if(!(d!=="submit"&&d!=="reset"||o.value!==void 0&&o.value!==null))return;o=""+i._wrapperState.initialValue,l||o===i.value||(i.value=o),i.defaultValue=o}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function mo(i,o,l){(o!=="number"||gi(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var Lr=Array.isArray;function Mr(i,o,l,d){if(i=i.options,o){o={};for(var p=0;p<l.length;p++)o["$"+l[p]]=!0;for(l=0;l<i.length;l++)p=o.hasOwnProperty("$"+i[l].value),i[l].selected!==p&&(i[l].selected=p),p&&d&&(i[l].defaultSelected=!0)}else{for(l=""+Be(l),o=null,p=0;p<i.length;p++){if(i[p].value===l){i[p].selected=!0,d&&(i[p].defaultSelected=!0);return}o!==null||i[p].disabled||(o=i[p])}o!==null&&(o.selected=!0)}}function Ha(i,o){if(o.dangerouslySetInnerHTML!=null)throw Error(t(91));return oe({},o,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function go(i,o){var l=o.value;if(l==null){if(l=o.children,o=o.defaultValue,l!=null){if(o!=null)throw Error(t(92));if(Lr(l)){if(1<l.length)throw Error(t(93));l=l[0]}o=l}o==null&&(o=""),l=o}i._wrapperState={initialValue:Be(l)}}function _o(i,o){var l=Be(o.value),d=Be(o.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),o.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),d!=null&&(i.defaultValue=""+d)}function Ga(i){var o=i.textContent;o===i._wrapperState.initialValue&&o!==""&&o!==null&&(i.value=o)}function Et(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wt(i,o){return i==null||i==="http://www.w3.org/1999/xhtml"?Et(o):i==="http://www.w3.org/2000/svg"&&o==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var Vr,Ka=function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(o,l,d,p){MSApp.execUnsafeLocalFunction(function(){return i(o,l,d,p)})}:i}(function(i,o){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=o;else{for(Vr=Vr||document.createElement("div"),Vr.innerHTML="<svg>"+o.valueOf().toString()+"</svg>",o=Vr.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;o.firstChild;)i.appendChild(o.firstChild)}});function _i(i,o){if(o){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=o;return}}i.textContent=o}var ds={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fs=["Webkit","ms","Moz","O"];Object.keys(ds).forEach(function(i){fs.forEach(function(o){o=o+i.charAt(0).toUpperCase()+i.substring(1),ds[o]=ds[i]})});function Qa(i,o,l){return o==null||typeof o=="boolean"||o===""?"":l||typeof o!="number"||o===0||ds.hasOwnProperty(i)&&ds[i]?(""+o).trim():o+"px"}function Ya(i,o){i=i.style;for(var l in o)if(o.hasOwnProperty(l)){var d=l.indexOf("--")===0,p=Qa(l,o[l],d);l==="float"&&(l="cssFloat"),d?i.setProperty(l,p):i[l]=p}}var Xa=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ja(i,o){if(o){if(Xa[i]&&(o.children!=null||o.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(o.dangerouslySetInnerHTML!=null){if(o.children!=null)throw Error(t(60));if(typeof o.dangerouslySetInnerHTML!="object"||!("__html"in o.dangerouslySetInnerHTML))throw Error(t(61))}if(o.style!=null&&typeof o.style!="object")throw Error(t(62))}}function Za(i,o){if(i.indexOf("-")===-1)return typeof o.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ps=null;function yo(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var vo=null,Nn=null,fr=null;function Eo(i){if(i=Il(i)){if(typeof vo!="function")throw Error(t(280));var o=i.stateNode;o&&(o=yc(o),vo(i.stateNode,i.type,o))}}function pr(i){Nn?fr?fr.push(i):fr=[i]:Nn=i}function el(){if(Nn){var i=Nn,o=fr;if(fr=Nn=null,Eo(i),o)for(i=0;i<o.length;i++)Eo(o[i])}}function ms(i,o){return i(o)}function tl(){}var Fr=!1;function nl(i,o,l){if(Fr)return i(o,l);Fr=!0;try{return ms(i,o,l)}finally{Fr=!1,(Nn!==null||fr!==null)&&(tl(),el())}}function ht(i,o){var l=i.stateNode;if(l===null)return null;var d=yc(l);if(d===null)return null;l=d[o];e:switch(o){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(i=i.type,d=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!d;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(t(231,o,typeof l));return l}var wo=!1;if(h)try{var Wn={};Object.defineProperty(Wn,"passive",{get:function(){wo=!0}}),window.addEventListener("test",Wn,Wn),window.removeEventListener("test",Wn,Wn)}catch{wo=!1}function gs(i,o,l,d,p,_,w,C,P){var B=Array.prototype.slice.call(arguments,3);try{o.apply(l,B)}catch(Y){this.onError(Y)}}var _s=!1,To=null,qn=!1,rl=null,Bd={onError:function(i){_s=!0,To=i}};function Io(i,o,l,d,p,_,w,C,P){_s=!1,To=null,gs.apply(Bd,arguments)}function $u(i,o,l,d,p,_,w,C,P){if(Io.apply(this,arguments),_s){if(_s){var B=To;_s=!1,To=null}else throw Error(t(198));qn||(qn=!0,rl=B)}}function Hn(i){var o=i,l=i;if(i.alternate)for(;o.return;)o=o.return;else{i=o;do o=i,o.flags&4098&&(l=o.return),i=o.return;while(i)}return o.tag===3?l:null}function ys(i){if(i.tag===13){var o=i.memoizedState;if(o===null&&(i=i.alternate,i!==null&&(o=i.memoizedState)),o!==null)return o.dehydrated}return null}function Gn(i){if(Hn(i)!==i)throw Error(t(188))}function Wu(i){var o=i.alternate;if(!o){if(o=Hn(i),o===null)throw Error(t(188));return o!==i?null:i}for(var l=i,d=o;;){var p=l.return;if(p===null)break;var _=p.alternate;if(_===null){if(d=p.return,d!==null){l=d;continue}break}if(p.child===_.child){for(_=p.child;_;){if(_===l)return Gn(p),i;if(_===d)return Gn(p),o;_=_.sibling}throw Error(t(188))}if(l.return!==d.return)l=p,d=_;else{for(var w=!1,C=p.child;C;){if(C===l){w=!0,l=p,d=_;break}if(C===d){w=!0,d=p,l=_;break}C=C.sibling}if(!w){for(C=_.child;C;){if(C===l){w=!0,l=_,d=p;break}if(C===d){w=!0,d=_,l=p;break}C=C.sibling}if(!w)throw Error(t(189))}}if(l.alternate!==d)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?i:o}function il(i){return i=Wu(i),i!==null?So(i):null}function So(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var o=So(i);if(o!==null)return o;i=i.sibling}return null}var Co=e.unstable_scheduleCallback,sl=e.unstable_cancelCallback,qu=e.unstable_shouldYield,$d=e.unstable_requestPaint,Ye=e.unstable_now,Hu=e.unstable_getCurrentPriorityLevel,vs=e.unstable_ImmediatePriority,yi=e.unstable_UserBlockingPriority,xn=e.unstable_NormalPriority,ol=e.unstable_LowPriority,Gu=e.unstable_IdlePriority,Es=null,En=null;function Ku(i){if(En&&typeof En.onCommitFiberRoot=="function")try{En.onCommitFiberRoot(Es,i,void 0,(i.current.flags&128)===128)}catch{}}var nn=Math.clz32?Math.clz32:Yu,al=Math.log,Qu=Math.LN2;function Yu(i){return i>>>=0,i===0?32:31-(al(i)/Qu|0)|0}var Ro=64,Ao=4194304;function vi(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function ws(i,o){var l=i.pendingLanes;if(l===0)return 0;var d=0,p=i.suspendedLanes,_=i.pingedLanes,w=l&268435455;if(w!==0){var C=w&~p;C!==0?d=vi(C):(_&=w,_!==0&&(d=vi(_)))}else w=l&~p,w!==0?d=vi(w):_!==0&&(d=vi(_));if(d===0)return 0;if(o!==0&&o!==d&&!(o&p)&&(p=d&-d,_=o&-o,p>=_||p===16&&(_&4194240)!==0))return o;if(d&4&&(d|=l&16),o=i.entangledLanes,o!==0)for(i=i.entanglements,o&=d;0<o;)l=31-nn(o),p=1<<l,d|=i[l],o&=~p;return d}function Wd(i,o){switch(i){case 1:case 2:case 4:return o+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ur(i,o){for(var l=i.suspendedLanes,d=i.pingedLanes,p=i.expirationTimes,_=i.pendingLanes;0<_;){var w=31-nn(_),C=1<<w,P=p[w];P===-1?(!(C&l)||C&d)&&(p[w]=Wd(C,o)):P<=o&&(i.expiredLanes|=C),_&=~C}}function wn(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function Ts(){var i=Ro;return Ro<<=1,!(Ro&4194240)&&(Ro=64),i}function Ei(i){for(var o=[],l=0;31>l;l++)o.push(i);return o}function wi(i,o,l){i.pendingLanes|=o,o!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,o=31-nn(o),i[o]=l}function Ke(i,o){var l=i.pendingLanes&~o;i.pendingLanes=o,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=o,i.mutableReadLanes&=o,i.entangledLanes&=o,o=i.entanglements;var d=i.eventTimes;for(i=i.expirationTimes;0<l;){var p=31-nn(l),_=1<<p;o[p]=0,d[p]=-1,i[p]=-1,l&=~_}}function Ti(i,o){var l=i.entangledLanes|=o;for(i=i.entanglements;l;){var d=31-nn(l),p=1<<d;p&o|i[d]&o&&(i[d]|=o),l&=~p}}var xe=0;function Ii(i){return i&=-i,1<i?4<i?i&268435455?16:536870912:4:1}var Xu,ko,Ju,Zu,ec,ll=!1,mr=[],Mt=null,Kn=null,Qn=null,Si=new Map,bn=new Map,gr=[],qd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function tc(i,o){switch(i){case"focusin":case"focusout":Mt=null;break;case"dragenter":case"dragleave":Kn=null;break;case"mouseover":case"mouseout":Qn=null;break;case"pointerover":case"pointerout":Si.delete(o.pointerId);break;case"gotpointercapture":case"lostpointercapture":bn.delete(o.pointerId)}}function ln(i,o,l,d,p,_){return i===null||i.nativeEvent!==_?(i={blockedOn:o,domEventName:l,eventSystemFlags:d,nativeEvent:_,targetContainers:[p]},o!==null&&(o=Il(o),o!==null&&ko(o)),i):(i.eventSystemFlags|=d,o=i.targetContainers,p!==null&&o.indexOf(p)===-1&&o.push(p),i)}function Hd(i,o,l,d,p){switch(o){case"focusin":return Mt=ln(Mt,i,o,l,d,p),!0;case"dragenter":return Kn=ln(Kn,i,o,l,d,p),!0;case"mouseover":return Qn=ln(Qn,i,o,l,d,p),!0;case"pointerover":var _=p.pointerId;return Si.set(_,ln(Si.get(_)||null,i,o,l,d,p)),!0;case"gotpointercapture":return _=p.pointerId,bn.set(_,ln(bn.get(_)||null,i,o,l,d,p)),!0}return!1}function nc(i){var o=As(i.target);if(o!==null){var l=Hn(o);if(l!==null){if(o=l.tag,o===13){if(o=ys(l),o!==null){i.blockedOn=o,ec(i.priority,function(){Ju(l)});return}}else if(o===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function jr(i){if(i.blockedOn!==null)return!1;for(var o=i.targetContainers;0<o.length;){var l=Po(i.domEventName,i.eventSystemFlags,o[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var d=new l.constructor(l.type,l);ps=d,l.target.dispatchEvent(d),ps=null}else return o=Il(l),o!==null&&ko(o),i.blockedOn=l,!1;o.shift()}return!0}function Is(i,o,l){jr(i)&&l.delete(o)}function rc(){ll=!1,Mt!==null&&jr(Mt)&&(Mt=null),Kn!==null&&jr(Kn)&&(Kn=null),Qn!==null&&jr(Qn)&&(Qn=null),Si.forEach(Is),bn.forEach(Is)}function Yn(i,o){i.blockedOn===o&&(i.blockedOn=null,ll||(ll=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,rc)))}function Xn(i){function o(p){return Yn(p,i)}if(0<mr.length){Yn(mr[0],i);for(var l=1;l<mr.length;l++){var d=mr[l];d.blockedOn===i&&(d.blockedOn=null)}}for(Mt!==null&&Yn(Mt,i),Kn!==null&&Yn(Kn,i),Qn!==null&&Yn(Qn,i),Si.forEach(o),bn.forEach(o),l=0;l<gr.length;l++)d=gr[l],d.blockedOn===i&&(d.blockedOn=null);for(;0<gr.length&&(l=gr[0],l.blockedOn===null);)nc(l),l.blockedOn===null&&gr.shift()}var zr=de.ReactCurrentBatchConfig,Ci=!0;function it(i,o,l,d){var p=xe,_=zr.transition;zr.transition=null;try{xe=1,ul(i,o,l,d)}finally{xe=p,zr.transition=_}}function Gd(i,o,l,d){var p=xe,_=zr.transition;zr.transition=null;try{xe=4,ul(i,o,l,d)}finally{xe=p,zr.transition=_}}function ul(i,o,l,d){if(Ci){var p=Po(i,o,l,d);if(p===null)sf(i,o,d,Ss,l),tc(i,d);else if(Hd(p,i,o,l,d))d.stopPropagation();else if(tc(i,d),o&4&&-1<qd.indexOf(i)){for(;p!==null;){var _=Il(p);if(_!==null&&Xu(_),_=Po(i,o,l,d),_===null&&sf(i,o,d,Ss,l),_===p)break;p=_}p!==null&&d.stopPropagation()}else sf(i,o,d,null,l)}}var Ss=null;function Po(i,o,l,d){if(Ss=null,i=yo(d),i=As(i),i!==null)if(o=Hn(i),o===null)i=null;else if(l=o.tag,l===13){if(i=ys(o),i!==null)return i;i=null}else if(l===3){if(o.stateNode.current.memoizedState.isDehydrated)return o.tag===3?o.stateNode.containerInfo:null;i=null}else o!==i&&(i=null);return Ss=i,null}function cl(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Hu()){case vs:return 1;case yi:return 4;case xn:case ol:return 16;case Gu:return 536870912;default:return 16}default:return 16}}var Tn=null,No=null,un=null;function hl(){if(un)return un;var i,o=No,l=o.length,d,p="value"in Tn?Tn.value:Tn.textContent,_=p.length;for(i=0;i<l&&o[i]===p[i];i++);var w=l-i;for(d=1;d<=w&&o[l-d]===p[_-d];d++);return un=p.slice(i,1<d?1-d:void 0)}function xo(i){var o=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&o===13&&(i=13)):i=o,i===10&&(i=13),32<=i||i===13?i:0}function _r(){return!0}function dl(){return!1}function Vt(i){function o(l,d,p,_,w){this._reactName=l,this._targetInst=p,this.type=d,this.nativeEvent=_,this.target=w,this.currentTarget=null;for(var C in i)i.hasOwnProperty(C)&&(l=i[C],this[C]=l?l(_):_[C]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?_r:dl,this.isPropagationStopped=dl,this}return oe(o.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=_r)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=_r)},persist:function(){},isPersistent:_r}),o}var Jn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bo=Vt(Jn),yr=oe({},Jn,{view:0,detail:0}),Kd=Vt(yr),Do,Br,Ri,Cs=oe({},yr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vr,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Ri&&(Ri&&i.type==="mousemove"?(Do=i.screenX-Ri.screenX,Br=i.screenY-Ri.screenY):Br=Do=0,Ri=i),Do)},movementY:function(i){return"movementY"in i?i.movementY:Br}}),Oo=Vt(Cs),fl=oe({},Cs,{dataTransfer:0}),ic=Vt(fl),Lo=oe({},yr,{relatedTarget:0}),Mo=Vt(Lo),sc=oe({},Jn,{animationName:0,elapsedTime:0,pseudoElement:0}),$r=Vt(sc),oc=oe({},Jn,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),ac=Vt(oc),lc=oe({},Jn,{data:0}),pl=Vt(lc),Vo={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},uc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cc(i){var o=this.nativeEvent;return o.getModifierState?o.getModifierState(i):(i=uc[i])?!!o[i]:!1}function vr(){return cc}var c=oe({},yr,{key:function(i){if(i.key){var o=Vo[i.key]||i.key;if(o!=="Unidentified")return o}return i.type==="keypress"?(i=xo(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?rn[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vr,charCode:function(i){return i.type==="keypress"?xo(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?xo(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),g=Vt(c),v=oe({},Cs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),I=Vt(v),F=oe({},yr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vr}),W=Vt(F),te=oe({},Jn,{propertyName:0,elapsedTime:0,pseudoElement:0}),qe=Vt(te),Tt=oe({},Cs,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),Le=Vt(Tt),kt=[9,13,27,32],pt=h&&"CompositionEvent"in window,Dn=null;h&&"documentMode"in document&&(Dn=document.documentMode);var In=h&&"TextEvent"in window&&!Dn,Rs=h&&(!pt||Dn&&8<Dn&&11>=Dn),Fo=" ",t_=!1;function n_(i,o){switch(i){case"keyup":return kt.indexOf(o.keyCode)!==-1;case"keydown":return o.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function r_(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Uo=!1;function u0(i,o){switch(i){case"compositionend":return r_(o);case"keypress":return o.which!==32?null:(t_=!0,Fo);case"textInput":return i=o.data,i===Fo&&t_?null:i;default:return null}}function c0(i,o){if(Uo)return i==="compositionend"||!pt&&n_(i,o)?(i=hl(),un=No=Tn=null,Uo=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(o.ctrlKey||o.altKey||o.metaKey)||o.ctrlKey&&o.altKey){if(o.char&&1<o.char.length)return o.char;if(o.which)return String.fromCharCode(o.which)}return null;case"compositionend":return Rs&&o.locale!=="ko"?null:o.data;default:return null}}var h0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function i_(i){var o=i&&i.nodeName&&i.nodeName.toLowerCase();return o==="input"?!!h0[i.type]:o==="textarea"}function s_(i,o,l,d){pr(d),o=mc(o,"onChange"),0<o.length&&(l=new bo("onChange","change",null,l,d),i.push({event:l,listeners:o}))}var ml=null,gl=null;function d0(i){I_(i,0)}function hc(i){var o=Wo(i);if(fo(o))return i}function f0(i,o){if(i==="change")return o}var o_=!1;if(h){var Qd;if(h){var Yd="oninput"in document;if(!Yd){var a_=document.createElement("div");a_.setAttribute("oninput","return;"),Yd=typeof a_.oninput=="function"}Qd=Yd}else Qd=!1;o_=Qd&&(!document.documentMode||9<document.documentMode)}function l_(){ml&&(ml.detachEvent("onpropertychange",u_),gl=ml=null)}function u_(i){if(i.propertyName==="value"&&hc(gl)){var o=[];s_(o,gl,i,yo(i)),nl(d0,o)}}function p0(i,o,l){i==="focusin"?(l_(),ml=o,gl=l,ml.attachEvent("onpropertychange",u_)):i==="focusout"&&l_()}function m0(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return hc(gl)}function g0(i,o){if(i==="click")return hc(o)}function _0(i,o){if(i==="input"||i==="change")return hc(o)}function y0(i,o){return i===o&&(i!==0||1/i===1/o)||i!==i&&o!==o}var Zn=typeof Object.is=="function"?Object.is:y0;function _l(i,o){if(Zn(i,o))return!0;if(typeof i!="object"||i===null||typeof o!="object"||o===null)return!1;var l=Object.keys(i),d=Object.keys(o);if(l.length!==d.length)return!1;for(d=0;d<l.length;d++){var p=l[d];if(!f.call(o,p)||!Zn(i[p],o[p]))return!1}return!0}function c_(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function h_(i,o){var l=c_(i);i=0;for(var d;l;){if(l.nodeType===3){if(d=i+l.textContent.length,i<=o&&d>=o)return{node:l,offset:o-i};i=d}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=c_(l)}}function d_(i,o){return i&&o?i===o?!0:i&&i.nodeType===3?!1:o&&o.nodeType===3?d_(i,o.parentNode):"contains"in i?i.contains(o):i.compareDocumentPosition?!!(i.compareDocumentPosition(o)&16):!1:!1}function f_(){for(var i=window,o=gi();o instanceof i.HTMLIFrameElement;){try{var l=typeof o.contentWindow.location.href=="string"}catch{l=!1}if(l)i=o.contentWindow;else break;o=gi(i.document)}return o}function Xd(i){var o=i&&i.nodeName&&i.nodeName.toLowerCase();return o&&(o==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||o==="textarea"||i.contentEditable==="true")}function v0(i){var o=f_(),l=i.focusedElem,d=i.selectionRange;if(o!==l&&l&&l.ownerDocument&&d_(l.ownerDocument.documentElement,l)){if(d!==null&&Xd(l)){if(o=d.start,i=d.end,i===void 0&&(i=o),"selectionStart"in l)l.selectionStart=o,l.selectionEnd=Math.min(i,l.value.length);else if(i=(o=l.ownerDocument||document)&&o.defaultView||window,i.getSelection){i=i.getSelection();var p=l.textContent.length,_=Math.min(d.start,p);d=d.end===void 0?_:Math.min(d.end,p),!i.extend&&_>d&&(p=d,d=_,_=p),p=h_(l,_);var w=h_(l,d);p&&w&&(i.rangeCount!==1||i.anchorNode!==p.node||i.anchorOffset!==p.offset||i.focusNode!==w.node||i.focusOffset!==w.offset)&&(o=o.createRange(),o.setStart(p.node,p.offset),i.removeAllRanges(),_>d?(i.addRange(o),i.extend(w.node,w.offset)):(o.setEnd(w.node,w.offset),i.addRange(o)))}}for(o=[],i=l;i=i.parentNode;)i.nodeType===1&&o.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<o.length;l++)i=o[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var E0=h&&"documentMode"in document&&11>=document.documentMode,jo=null,Jd=null,yl=null,Zd=!1;function p_(i,o,l){var d=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Zd||jo==null||jo!==gi(d)||(d=jo,"selectionStart"in d&&Xd(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),yl&&_l(yl,d)||(yl=d,d=mc(Jd,"onSelect"),0<d.length&&(o=new bo("onSelect","select",null,o,l),i.push({event:o,listeners:d}),o.target=jo)))}function dc(i,o){var l={};return l[i.toLowerCase()]=o.toLowerCase(),l["Webkit"+i]="webkit"+o,l["Moz"+i]="moz"+o,l}var zo={animationend:dc("Animation","AnimationEnd"),animationiteration:dc("Animation","AnimationIteration"),animationstart:dc("Animation","AnimationStart"),transitionend:dc("Transition","TransitionEnd")},ef={},m_={};h&&(m_=document.createElement("div").style,"AnimationEvent"in window||(delete zo.animationend.animation,delete zo.animationiteration.animation,delete zo.animationstart.animation),"TransitionEvent"in window||delete zo.transitionend.transition);function fc(i){if(ef[i])return ef[i];if(!zo[i])return i;var o=zo[i],l;for(l in o)if(o.hasOwnProperty(l)&&l in m_)return ef[i]=o[l];return i}var g_=fc("animationend"),__=fc("animationiteration"),y_=fc("animationstart"),v_=fc("transitionend"),E_=new Map,w_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ai(i,o){E_.set(i,o),a(o,[i])}for(var tf=0;tf<w_.length;tf++){var nf=w_[tf],w0=nf.toLowerCase(),T0=nf[0].toUpperCase()+nf.slice(1);Ai(w0,"on"+T0)}Ai(g_,"onAnimationEnd"),Ai(__,"onAnimationIteration"),Ai(y_,"onAnimationStart"),Ai("dblclick","onDoubleClick"),Ai("focusin","onFocus"),Ai("focusout","onBlur"),Ai(v_,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),I0=new Set("cancel close invalid load scroll toggle".split(" ").concat(vl));function T_(i,o,l){var d=i.type||"unknown-event";i.currentTarget=l,$u(d,o,void 0,i),i.currentTarget=null}function I_(i,o){o=(o&4)!==0;for(var l=0;l<i.length;l++){var d=i[l],p=d.event;d=d.listeners;e:{var _=void 0;if(o)for(var w=d.length-1;0<=w;w--){var C=d[w],P=C.instance,B=C.currentTarget;if(C=C.listener,P!==_&&p.isPropagationStopped())break e;T_(p,C,B),_=P}else for(w=0;w<d.length;w++){if(C=d[w],P=C.instance,B=C.currentTarget,C=C.listener,P!==_&&p.isPropagationStopped())break e;T_(p,C,B),_=P}}}if(qn)throw i=rl,qn=!1,rl=null,i}function Je(i,o){var l=o[hf];l===void 0&&(l=o[hf]=new Set);var d=i+"__bubble";l.has(d)||(S_(o,i,2,!1),l.add(d))}function rf(i,o,l){var d=0;o&&(d|=4),S_(l,i,d,o)}var pc="_reactListening"+Math.random().toString(36).slice(2);function El(i){if(!i[pc]){i[pc]=!0,r.forEach(function(l){l!=="selectionchange"&&(I0.has(l)||rf(l,!1,i),rf(l,!0,i))});var o=i.nodeType===9?i:i.ownerDocument;o===null||o[pc]||(o[pc]=!0,rf("selectionchange",!1,o))}}function S_(i,o,l,d){switch(cl(o)){case 1:var p=it;break;case 4:p=Gd;break;default:p=ul}l=p.bind(null,o,l,i),p=void 0,!wo||o!=="touchstart"&&o!=="touchmove"&&o!=="wheel"||(p=!0),d?p!==void 0?i.addEventListener(o,l,{capture:!0,passive:p}):i.addEventListener(o,l,!0):p!==void 0?i.addEventListener(o,l,{passive:p}):i.addEventListener(o,l,!1)}function sf(i,o,l,d,p){var _=d;if(!(o&1)&&!(o&2)&&d!==null)e:for(;;){if(d===null)return;var w=d.tag;if(w===3||w===4){var C=d.stateNode.containerInfo;if(C===p||C.nodeType===8&&C.parentNode===p)break;if(w===4)for(w=d.return;w!==null;){var P=w.tag;if((P===3||P===4)&&(P=w.stateNode.containerInfo,P===p||P.nodeType===8&&P.parentNode===p))return;w=w.return}for(;C!==null;){if(w=As(C),w===null)return;if(P=w.tag,P===5||P===6){d=_=w;continue e}C=C.parentNode}}d=d.return}nl(function(){var B=_,Y=yo(l),J=[];e:{var Q=E_.get(i);if(Q!==void 0){var se=bo,ue=i;switch(i){case"keypress":if(xo(l)===0)break e;case"keydown":case"keyup":se=g;break;case"focusin":ue="focus",se=Mo;break;case"focusout":ue="blur",se=Mo;break;case"beforeblur":case"afterblur":se=Mo;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":se=Oo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":se=ic;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":se=W;break;case g_:case __:case y_:se=$r;break;case v_:se=qe;break;case"scroll":se=Kd;break;case"wheel":se=Le;break;case"copy":case"cut":case"paste":se=ac;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":se=I}var he=(o&4)!==0,dt=!he&&i==="scroll",U=he?Q!==null?Q+"Capture":null:Q;he=[];for(var D=B,j;D!==null;){j=D;var Z=j.stateNode;if(j.tag===5&&Z!==null&&(j=Z,U!==null&&(Z=ht(D,U),Z!=null&&he.push(wl(D,Z,j)))),dt)break;D=D.return}0<he.length&&(Q=new se(Q,ue,null,l,Y),J.push({event:Q,listeners:he}))}}if(!(o&7)){e:{if(Q=i==="mouseover"||i==="pointerover",se=i==="mouseout"||i==="pointerout",Q&&l!==ps&&(ue=l.relatedTarget||l.fromElement)&&(As(ue)||ue[Wr]))break e;if((se||Q)&&(Q=Y.window===Y?Y:(Q=Y.ownerDocument)?Q.defaultView||Q.parentWindow:window,se?(ue=l.relatedTarget||l.toElement,se=B,ue=ue?As(ue):null,ue!==null&&(dt=Hn(ue),ue!==dt||ue.tag!==5&&ue.tag!==6)&&(ue=null)):(se=null,ue=B),se!==ue)){if(he=Oo,Z="onMouseLeave",U="onMouseEnter",D="mouse",(i==="pointerout"||i==="pointerover")&&(he=I,Z="onPointerLeave",U="onPointerEnter",D="pointer"),dt=se==null?Q:Wo(se),j=ue==null?Q:Wo(ue),Q=new he(Z,D+"leave",se,l,Y),Q.target=dt,Q.relatedTarget=j,Z=null,As(Y)===B&&(he=new he(U,D+"enter",ue,l,Y),he.target=j,he.relatedTarget=dt,Z=he),dt=Z,se&&ue)t:{for(he=se,U=ue,D=0,j=he;j;j=Bo(j))D++;for(j=0,Z=U;Z;Z=Bo(Z))j++;for(;0<D-j;)he=Bo(he),D--;for(;0<j-D;)U=Bo(U),j--;for(;D--;){if(he===U||U!==null&&he===U.alternate)break t;he=Bo(he),U=Bo(U)}he=null}else he=null;se!==null&&C_(J,Q,se,he,!1),ue!==null&&dt!==null&&C_(J,dt,ue,he,!0)}}e:{if(Q=B?Wo(B):window,se=Q.nodeName&&Q.nodeName.toLowerCase(),se==="select"||se==="input"&&Q.type==="file")var fe=f0;else if(i_(Q))if(o_)fe=_0;else{fe=m0;var _e=p0}else(se=Q.nodeName)&&se.toLowerCase()==="input"&&(Q.type==="checkbox"||Q.type==="radio")&&(fe=g0);if(fe&&(fe=fe(i,B))){s_(J,fe,l,Y);break e}_e&&_e(i,Q,B),i==="focusout"&&(_e=Q._wrapperState)&&_e.controlled&&Q.type==="number"&&mo(Q,"number",Q.value)}switch(_e=B?Wo(B):window,i){case"focusin":(i_(_e)||_e.contentEditable==="true")&&(jo=_e,Jd=B,yl=null);break;case"focusout":yl=Jd=jo=null;break;case"mousedown":Zd=!0;break;case"contextmenu":case"mouseup":case"dragend":Zd=!1,p_(J,l,Y);break;case"selectionchange":if(E0)break;case"keydown":case"keyup":p_(J,l,Y)}var ye;if(pt)e:{switch(i){case"compositionstart":var Ee="onCompositionStart";break e;case"compositionend":Ee="onCompositionEnd";break e;case"compositionupdate":Ee="onCompositionUpdate";break e}Ee=void 0}else Uo?n_(i,l)&&(Ee="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(Ee="onCompositionStart");Ee&&(Rs&&l.locale!=="ko"&&(Uo||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&Uo&&(ye=hl()):(Tn=Y,No="value"in Tn?Tn.value:Tn.textContent,Uo=!0)),_e=mc(B,Ee),0<_e.length&&(Ee=new pl(Ee,i,null,l,Y),J.push({event:Ee,listeners:_e}),ye?Ee.data=ye:(ye=r_(l),ye!==null&&(Ee.data=ye)))),(ye=In?u0(i,l):c0(i,l))&&(B=mc(B,"onBeforeInput"),0<B.length&&(Y=new pl("onBeforeInput","beforeinput",null,l,Y),J.push({event:Y,listeners:B}),Y.data=ye))}I_(J,o)})}function wl(i,o,l){return{instance:i,listener:o,currentTarget:l}}function mc(i,o){for(var l=o+"Capture",d=[];i!==null;){var p=i,_=p.stateNode;p.tag===5&&_!==null&&(p=_,_=ht(i,l),_!=null&&d.unshift(wl(i,_,p)),_=ht(i,o),_!=null&&d.push(wl(i,_,p))),i=i.return}return d}function Bo(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function C_(i,o,l,d,p){for(var _=o._reactName,w=[];l!==null&&l!==d;){var C=l,P=C.alternate,B=C.stateNode;if(P!==null&&P===d)break;C.tag===5&&B!==null&&(C=B,p?(P=ht(l,_),P!=null&&w.unshift(wl(l,P,C))):p||(P=ht(l,_),P!=null&&w.push(wl(l,P,C)))),l=l.return}w.length!==0&&i.push({event:o,listeners:w})}var S0=/\r\n?/g,C0=/\u0000|\uFFFD/g;function R_(i){return(typeof i=="string"?i:""+i).replace(S0,`
`).replace(C0,"")}function gc(i,o,l){if(o=R_(o),R_(i)!==o&&l)throw Error(t(425))}function _c(){}var of=null,af=null;function lf(i,o){return i==="textarea"||i==="noscript"||typeof o.children=="string"||typeof o.children=="number"||typeof o.dangerouslySetInnerHTML=="object"&&o.dangerouslySetInnerHTML!==null&&o.dangerouslySetInnerHTML.__html!=null}var uf=typeof setTimeout=="function"?setTimeout:void 0,R0=typeof clearTimeout=="function"?clearTimeout:void 0,A_=typeof Promise=="function"?Promise:void 0,A0=typeof queueMicrotask=="function"?queueMicrotask:typeof A_<"u"?function(i){return A_.resolve(null).then(i).catch(k0)}:uf;function k0(i){setTimeout(function(){throw i})}function cf(i,o){var l=o,d=0;do{var p=l.nextSibling;if(i.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(d===0){i.removeChild(p),Xn(o);return}d--}else l!=="$"&&l!=="$?"&&l!=="$!"||d++;l=p}while(l);Xn(o)}function ki(i){for(;i!=null;i=i.nextSibling){var o=i.nodeType;if(o===1||o===3)break;if(o===8){if(o=i.data,o==="$"||o==="$!"||o==="$?")break;if(o==="/$")return null}}return i}function k_(i){i=i.previousSibling;for(var o=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(o===0)return i;o--}else l==="/$"&&o++}i=i.previousSibling}return null}var $o=Math.random().toString(36).slice(2),Er="__reactFiber$"+$o,Tl="__reactProps$"+$o,Wr="__reactContainer$"+$o,hf="__reactEvents$"+$o,P0="__reactListeners$"+$o,N0="__reactHandles$"+$o;function As(i){var o=i[Er];if(o)return o;for(var l=i.parentNode;l;){if(o=l[Wr]||l[Er]){if(l=o.alternate,o.child!==null||l!==null&&l.child!==null)for(i=k_(i);i!==null;){if(l=i[Er])return l;i=k_(i)}return o}i=l,l=i.parentNode}return null}function Il(i){return i=i[Er]||i[Wr],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function Wo(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function yc(i){return i[Tl]||null}var df=[],qo=-1;function Pi(i){return{current:i}}function Ze(i){0>qo||(i.current=df[qo],df[qo]=null,qo--)}function Xe(i,o){qo++,df[qo]=i.current,i.current=o}var Ni={},qt=Pi(Ni),cn=Pi(!1),ks=Ni;function Ho(i,o){var l=i.type.contextTypes;if(!l)return Ni;var d=i.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===o)return d.__reactInternalMemoizedMaskedChildContext;var p={},_;for(_ in l)p[_]=o[_];return d&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=o,i.__reactInternalMemoizedMaskedChildContext=p),p}function hn(i){return i=i.childContextTypes,i!=null}function vc(){Ze(cn),Ze(qt)}function P_(i,o,l){if(qt.current!==Ni)throw Error(t(168));Xe(qt,o),Xe(cn,l)}function N_(i,o,l){var d=i.stateNode;if(o=o.childContextTypes,typeof d.getChildContext!="function")return l;d=d.getChildContext();for(var p in d)if(!(p in o))throw Error(t(108,ze(i)||"Unknown",p));return oe({},l,d)}function Ec(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||Ni,ks=qt.current,Xe(qt,i),Xe(cn,cn.current),!0}function x_(i,o,l){var d=i.stateNode;if(!d)throw Error(t(169));l?(i=N_(i,o,ks),d.__reactInternalMemoizedMergedChildContext=i,Ze(cn),Ze(qt),Xe(qt,i)):Ze(cn),Xe(cn,l)}var qr=null,wc=!1,ff=!1;function b_(i){qr===null?qr=[i]:qr.push(i)}function x0(i){wc=!0,b_(i)}function xi(){if(!ff&&qr!==null){ff=!0;var i=0,o=xe;try{var l=qr;for(xe=1;i<l.length;i++){var d=l[i];do d=d(!0);while(d!==null)}qr=null,wc=!1}catch(p){throw qr!==null&&(qr=qr.slice(i+1)),Co(vs,xi),p}finally{xe=o,ff=!1}}return null}var Go=[],Ko=0,Tc=null,Ic=0,On=[],Ln=0,Ps=null,Hr=1,Gr="";function Ns(i,o){Go[Ko++]=Ic,Go[Ko++]=Tc,Tc=i,Ic=o}function D_(i,o,l){On[Ln++]=Hr,On[Ln++]=Gr,On[Ln++]=Ps,Ps=i;var d=Hr;i=Gr;var p=32-nn(d)-1;d&=~(1<<p),l+=1;var _=32-nn(o)+p;if(30<_){var w=p-p%5;_=(d&(1<<w)-1).toString(32),d>>=w,p-=w,Hr=1<<32-nn(o)+p|l<<p|d,Gr=_+i}else Hr=1<<_|l<<p|d,Gr=i}function pf(i){i.return!==null&&(Ns(i,1),D_(i,1,0))}function mf(i){for(;i===Tc;)Tc=Go[--Ko],Go[Ko]=null,Ic=Go[--Ko],Go[Ko]=null;for(;i===Ps;)Ps=On[--Ln],On[Ln]=null,Gr=On[--Ln],On[Ln]=null,Hr=On[--Ln],On[Ln]=null}var Sn=null,Cn=null,st=!1,er=null;function O_(i,o){var l=Un(5,null,null,0);l.elementType="DELETED",l.stateNode=o,l.return=i,o=i.deletions,o===null?(i.deletions=[l],i.flags|=16):o.push(l)}function L_(i,o){switch(i.tag){case 5:var l=i.type;return o=o.nodeType!==1||l.toLowerCase()!==o.nodeName.toLowerCase()?null:o,o!==null?(i.stateNode=o,Sn=i,Cn=ki(o.firstChild),!0):!1;case 6:return o=i.pendingProps===""||o.nodeType!==3?null:o,o!==null?(i.stateNode=o,Sn=i,Cn=null,!0):!1;case 13:return o=o.nodeType!==8?null:o,o!==null?(l=Ps!==null?{id:Hr,overflow:Gr}:null,i.memoizedState={dehydrated:o,treeContext:l,retryLane:1073741824},l=Un(18,null,null,0),l.stateNode=o,l.return=i,i.child=l,Sn=i,Cn=null,!0):!1;default:return!1}}function gf(i){return(i.mode&1)!==0&&(i.flags&128)===0}function _f(i){if(st){var o=Cn;if(o){var l=o;if(!L_(i,o)){if(gf(i))throw Error(t(418));o=ki(l.nextSibling);var d=Sn;o&&L_(i,o)?O_(d,l):(i.flags=i.flags&-4097|2,st=!1,Sn=i)}}else{if(gf(i))throw Error(t(418));i.flags=i.flags&-4097|2,st=!1,Sn=i}}}function M_(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;Sn=i}function Sc(i){if(i!==Sn)return!1;if(!st)return M_(i),st=!0,!1;var o;if((o=i.tag!==3)&&!(o=i.tag!==5)&&(o=i.type,o=o!=="head"&&o!=="body"&&!lf(i.type,i.memoizedProps)),o&&(o=Cn)){if(gf(i))throw V_(),Error(t(418));for(;o;)O_(i,o),o=ki(o.nextSibling)}if(M_(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,o=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(o===0){Cn=ki(i.nextSibling);break e}o--}else l!=="$"&&l!=="$!"&&l!=="$?"||o++}i=i.nextSibling}Cn=null}}else Cn=Sn?ki(i.stateNode.nextSibling):null;return!0}function V_(){for(var i=Cn;i;)i=ki(i.nextSibling)}function Qo(){Cn=Sn=null,st=!1}function yf(i){er===null?er=[i]:er.push(i)}var b0=de.ReactCurrentBatchConfig;function Sl(i,o,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var d=l.stateNode}if(!d)throw Error(t(147,i));var p=d,_=""+i;return o!==null&&o.ref!==null&&typeof o.ref=="function"&&o.ref._stringRef===_?o.ref:(o=function(w){var C=p.refs;w===null?delete C[_]:C[_]=w},o._stringRef=_,o)}if(typeof i!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,i))}return i}function Cc(i,o){throw i=Object.prototype.toString.call(o),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":i))}function F_(i){var o=i._init;return o(i._payload)}function U_(i){function o(U,D){if(i){var j=U.deletions;j===null?(U.deletions=[D],U.flags|=16):j.push(D)}}function l(U,D){if(!i)return null;for(;D!==null;)o(U,D),D=D.sibling;return null}function d(U,D){for(U=new Map;D!==null;)D.key!==null?U.set(D.key,D):U.set(D.index,D),D=D.sibling;return U}function p(U,D){return U=Ui(U,D),U.index=0,U.sibling=null,U}function _(U,D,j){return U.index=j,i?(j=U.alternate,j!==null?(j=j.index,j<D?(U.flags|=2,D):j):(U.flags|=2,D)):(U.flags|=1048576,D)}function w(U){return i&&U.alternate===null&&(U.flags|=2),U}function C(U,D,j,Z){return D===null||D.tag!==6?(D=up(j,U.mode,Z),D.return=U,D):(D=p(D,j),D.return=U,D)}function P(U,D,j,Z){var fe=j.type;return fe===b?Y(U,D,j.props.children,Z,j.key):D!==null&&(D.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===Wt&&F_(fe)===D.type)?(Z=p(D,j.props),Z.ref=Sl(U,D,j),Z.return=U,Z):(Z=Qc(j.type,j.key,j.props,null,U.mode,Z),Z.ref=Sl(U,D,j),Z.return=U,Z)}function B(U,D,j,Z){return D===null||D.tag!==4||D.stateNode.containerInfo!==j.containerInfo||D.stateNode.implementation!==j.implementation?(D=cp(j,U.mode,Z),D.return=U,D):(D=p(D,j.children||[]),D.return=U,D)}function Y(U,D,j,Z,fe){return D===null||D.tag!==7?(D=Fs(j,U.mode,Z,fe),D.return=U,D):(D=p(D,j),D.return=U,D)}function J(U,D,j){if(typeof D=="string"&&D!==""||typeof D=="number")return D=up(""+D,U.mode,j),D.return=U,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Ce:return j=Qc(D.type,D.key,D.props,null,U.mode,j),j.ref=Sl(U,null,D),j.return=U,j;case Ie:return D=cp(D,U.mode,j),D.return=U,D;case Wt:var Z=D._init;return J(U,Z(D._payload),j)}if(Lr(D)||ge(D))return D=Fs(D,U.mode,j,null),D.return=U,D;Cc(U,D)}return null}function Q(U,D,j,Z){var fe=D!==null?D.key:null;if(typeof j=="string"&&j!==""||typeof j=="number")return fe!==null?null:C(U,D,""+j,Z);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Ce:return j.key===fe?P(U,D,j,Z):null;case Ie:return j.key===fe?B(U,D,j,Z):null;case Wt:return fe=j._init,Q(U,D,fe(j._payload),Z)}if(Lr(j)||ge(j))return fe!==null?null:Y(U,D,j,Z,null);Cc(U,j)}return null}function se(U,D,j,Z,fe){if(typeof Z=="string"&&Z!==""||typeof Z=="number")return U=U.get(j)||null,C(D,U,""+Z,fe);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case Ce:return U=U.get(Z.key===null?j:Z.key)||null,P(D,U,Z,fe);case Ie:return U=U.get(Z.key===null?j:Z.key)||null,B(D,U,Z,fe);case Wt:var _e=Z._init;return se(U,D,j,_e(Z._payload),fe)}if(Lr(Z)||ge(Z))return U=U.get(j)||null,Y(D,U,Z,fe,null);Cc(D,Z)}return null}function ue(U,D,j,Z){for(var fe=null,_e=null,ye=D,Ee=D=0,xt=null;ye!==null&&Ee<j.length;Ee++){ye.index>Ee?(xt=ye,ye=null):xt=ye.sibling;var je=Q(U,ye,j[Ee],Z);if(je===null){ye===null&&(ye=xt);break}i&&ye&&je.alternate===null&&o(U,ye),D=_(je,D,Ee),_e===null?fe=je:_e.sibling=je,_e=je,ye=xt}if(Ee===j.length)return l(U,ye),st&&Ns(U,Ee),fe;if(ye===null){for(;Ee<j.length;Ee++)ye=J(U,j[Ee],Z),ye!==null&&(D=_(ye,D,Ee),_e===null?fe=ye:_e.sibling=ye,_e=ye);return st&&Ns(U,Ee),fe}for(ye=d(U,ye);Ee<j.length;Ee++)xt=se(ye,U,Ee,j[Ee],Z),xt!==null&&(i&&xt.alternate!==null&&ye.delete(xt.key===null?Ee:xt.key),D=_(xt,D,Ee),_e===null?fe=xt:_e.sibling=xt,_e=xt);return i&&ye.forEach(function(ji){return o(U,ji)}),st&&Ns(U,Ee),fe}function he(U,D,j,Z){var fe=ge(j);if(typeof fe!="function")throw Error(t(150));if(j=fe.call(j),j==null)throw Error(t(151));for(var _e=fe=null,ye=D,Ee=D=0,xt=null,je=j.next();ye!==null&&!je.done;Ee++,je=j.next()){ye.index>Ee?(xt=ye,ye=null):xt=ye.sibling;var ji=Q(U,ye,je.value,Z);if(ji===null){ye===null&&(ye=xt);break}i&&ye&&ji.alternate===null&&o(U,ye),D=_(ji,D,Ee),_e===null?fe=ji:_e.sibling=ji,_e=ji,ye=xt}if(je.done)return l(U,ye),st&&Ns(U,Ee),fe;if(ye===null){for(;!je.done;Ee++,je=j.next())je=J(U,je.value,Z),je!==null&&(D=_(je,D,Ee),_e===null?fe=je:_e.sibling=je,_e=je);return st&&Ns(U,Ee),fe}for(ye=d(U,ye);!je.done;Ee++,je=j.next())je=se(ye,U,Ee,je.value,Z),je!==null&&(i&&je.alternate!==null&&ye.delete(je.key===null?Ee:je.key),D=_(je,D,Ee),_e===null?fe=je:_e.sibling=je,_e=je);return i&&ye.forEach(function(hR){return o(U,hR)}),st&&Ns(U,Ee),fe}function dt(U,D,j,Z){if(typeof j=="object"&&j!==null&&j.type===b&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case Ce:e:{for(var fe=j.key,_e=D;_e!==null;){if(_e.key===fe){if(fe=j.type,fe===b){if(_e.tag===7){l(U,_e.sibling),D=p(_e,j.props.children),D.return=U,U=D;break e}}else if(_e.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===Wt&&F_(fe)===_e.type){l(U,_e.sibling),D=p(_e,j.props),D.ref=Sl(U,_e,j),D.return=U,U=D;break e}l(U,_e);break}else o(U,_e);_e=_e.sibling}j.type===b?(D=Fs(j.props.children,U.mode,Z,j.key),D.return=U,U=D):(Z=Qc(j.type,j.key,j.props,null,U.mode,Z),Z.ref=Sl(U,D,j),Z.return=U,U=Z)}return w(U);case Ie:e:{for(_e=j.key;D!==null;){if(D.key===_e)if(D.tag===4&&D.stateNode.containerInfo===j.containerInfo&&D.stateNode.implementation===j.implementation){l(U,D.sibling),D=p(D,j.children||[]),D.return=U,U=D;break e}else{l(U,D);break}else o(U,D);D=D.sibling}D=cp(j,U.mode,Z),D.return=U,U=D}return w(U);case Wt:return _e=j._init,dt(U,D,_e(j._payload),Z)}if(Lr(j))return ue(U,D,j,Z);if(ge(j))return he(U,D,j,Z);Cc(U,j)}return typeof j=="string"&&j!==""||typeof j=="number"?(j=""+j,D!==null&&D.tag===6?(l(U,D.sibling),D=p(D,j),D.return=U,U=D):(l(U,D),D=up(j,U.mode,Z),D.return=U,U=D),w(U)):l(U,D)}return dt}var Yo=U_(!0),j_=U_(!1),Rc=Pi(null),Ac=null,Xo=null,vf=null;function Ef(){vf=Xo=Ac=null}function wf(i){var o=Rc.current;Ze(Rc),i._currentValue=o}function Tf(i,o,l){for(;i!==null;){var d=i.alternate;if((i.childLanes&o)!==o?(i.childLanes|=o,d!==null&&(d.childLanes|=o)):d!==null&&(d.childLanes&o)!==o&&(d.childLanes|=o),i===l)break;i=i.return}}function Jo(i,o){Ac=i,vf=Xo=null,i=i.dependencies,i!==null&&i.firstContext!==null&&(i.lanes&o&&(dn=!0),i.firstContext=null)}function Mn(i){var o=i._currentValue;if(vf!==i)if(i={context:i,memoizedValue:o,next:null},Xo===null){if(Ac===null)throw Error(t(308));Xo=i,Ac.dependencies={lanes:0,firstContext:i}}else Xo=Xo.next=i;return o}var xs=null;function If(i){xs===null?xs=[i]:xs.push(i)}function z_(i,o,l,d){var p=o.interleaved;return p===null?(l.next=l,If(o)):(l.next=p.next,p.next=l),o.interleaved=l,Kr(i,d)}function Kr(i,o){i.lanes|=o;var l=i.alternate;for(l!==null&&(l.lanes|=o),l=i,i=i.return;i!==null;)i.childLanes|=o,l=i.alternate,l!==null&&(l.childLanes|=o),l=i,i=i.return;return l.tag===3?l.stateNode:null}var bi=!1;function Sf(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function B_(i,o){i=i.updateQueue,o.updateQueue===i&&(o.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function Qr(i,o){return{eventTime:i,lane:o,tag:0,payload:null,callback:null,next:null}}function Di(i,o,l){var d=i.updateQueue;if(d===null)return null;if(d=d.shared,Ue&2){var p=d.pending;return p===null?o.next=o:(o.next=p.next,p.next=o),d.pending=o,Kr(i,l)}return p=d.interleaved,p===null?(o.next=o,If(d)):(o.next=p.next,p.next=o),d.interleaved=o,Kr(i,l)}function kc(i,o,l){if(o=o.updateQueue,o!==null&&(o=o.shared,(l&4194240)!==0)){var d=o.lanes;d&=i.pendingLanes,l|=d,o.lanes=l,Ti(i,l)}}function $_(i,o){var l=i.updateQueue,d=i.alternate;if(d!==null&&(d=d.updateQueue,l===d)){var p=null,_=null;if(l=l.firstBaseUpdate,l!==null){do{var w={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};_===null?p=_=w:_=_.next=w,l=l.next}while(l!==null);_===null?p=_=o:_=_.next=o}else p=_=o;l={baseState:d.baseState,firstBaseUpdate:p,lastBaseUpdate:_,shared:d.shared,effects:d.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=o:i.next=o,l.lastBaseUpdate=o}function Pc(i,o,l,d){var p=i.updateQueue;bi=!1;var _=p.firstBaseUpdate,w=p.lastBaseUpdate,C=p.shared.pending;if(C!==null){p.shared.pending=null;var P=C,B=P.next;P.next=null,w===null?_=B:w.next=B,w=P;var Y=i.alternate;Y!==null&&(Y=Y.updateQueue,C=Y.lastBaseUpdate,C!==w&&(C===null?Y.firstBaseUpdate=B:C.next=B,Y.lastBaseUpdate=P))}if(_!==null){var J=p.baseState;w=0,Y=B=P=null,C=_;do{var Q=C.lane,se=C.eventTime;if((d&Q)===Q){Y!==null&&(Y=Y.next={eventTime:se,lane:0,tag:C.tag,payload:C.payload,callback:C.callback,next:null});e:{var ue=i,he=C;switch(Q=o,se=l,he.tag){case 1:if(ue=he.payload,typeof ue=="function"){J=ue.call(se,J,Q);break e}J=ue;break e;case 3:ue.flags=ue.flags&-65537|128;case 0:if(ue=he.payload,Q=typeof ue=="function"?ue.call(se,J,Q):ue,Q==null)break e;J=oe({},J,Q);break e;case 2:bi=!0}}C.callback!==null&&C.lane!==0&&(i.flags|=64,Q=p.effects,Q===null?p.effects=[C]:Q.push(C))}else se={eventTime:se,lane:Q,tag:C.tag,payload:C.payload,callback:C.callback,next:null},Y===null?(B=Y=se,P=J):Y=Y.next=se,w|=Q;if(C=C.next,C===null){if(C=p.shared.pending,C===null)break;Q=C,C=Q.next,Q.next=null,p.lastBaseUpdate=Q,p.shared.pending=null}}while(!0);if(Y===null&&(P=J),p.baseState=P,p.firstBaseUpdate=B,p.lastBaseUpdate=Y,o=p.shared.interleaved,o!==null){p=o;do w|=p.lane,p=p.next;while(p!==o)}else _===null&&(p.shared.lanes=0);Os|=w,i.lanes=w,i.memoizedState=J}}function W_(i,o,l){if(i=o.effects,o.effects=null,i!==null)for(o=0;o<i.length;o++){var d=i[o],p=d.callback;if(p!==null){if(d.callback=null,d=l,typeof p!="function")throw Error(t(191,p));p.call(d)}}}var Cl={},wr=Pi(Cl),Rl=Pi(Cl),Al=Pi(Cl);function bs(i){if(i===Cl)throw Error(t(174));return i}function Cf(i,o){switch(Xe(Al,o),Xe(Rl,i),Xe(wr,Cl),i=o.nodeType,i){case 9:case 11:o=(o=o.documentElement)?o.namespaceURI:wt(null,"");break;default:i=i===8?o.parentNode:o,o=i.namespaceURI||null,i=i.tagName,o=wt(o,i)}Ze(wr),Xe(wr,o)}function Zo(){Ze(wr),Ze(Rl),Ze(Al)}function q_(i){bs(Al.current);var o=bs(wr.current),l=wt(o,i.type);o!==l&&(Xe(Rl,i),Xe(wr,l))}function Rf(i){Rl.current===i&&(Ze(wr),Ze(Rl))}var ot=Pi(0);function Nc(i){for(var o=i;o!==null;){if(o.tag===13){var l=o.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return o}else if(o.tag===19&&o.memoizedProps.revealOrder!==void 0){if(o.flags&128)return o}else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return null;o=o.return}o.sibling.return=o.return,o=o.sibling}return null}var Af=[];function kf(){for(var i=0;i<Af.length;i++)Af[i]._workInProgressVersionPrimary=null;Af.length=0}var xc=de.ReactCurrentDispatcher,Pf=de.ReactCurrentBatchConfig,Ds=0,at=null,It=null,Pt=null,bc=!1,kl=!1,Pl=0,D0=0;function Ht(){throw Error(t(321))}function Nf(i,o){if(o===null)return!1;for(var l=0;l<o.length&&l<i.length;l++)if(!Zn(i[l],o[l]))return!1;return!0}function xf(i,o,l,d,p,_){if(Ds=_,at=o,o.memoizedState=null,o.updateQueue=null,o.lanes=0,xc.current=i===null||i.memoizedState===null?V0:F0,i=l(d,p),kl){_=0;do{if(kl=!1,Pl=0,25<=_)throw Error(t(301));_+=1,Pt=It=null,o.updateQueue=null,xc.current=U0,i=l(d,p)}while(kl)}if(xc.current=Lc,o=It!==null&&It.next!==null,Ds=0,Pt=It=at=null,bc=!1,o)throw Error(t(300));return i}function bf(){var i=Pl!==0;return Pl=0,i}function Tr(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pt===null?at.memoizedState=Pt=i:Pt=Pt.next=i,Pt}function Vn(){if(It===null){var i=at.alternate;i=i!==null?i.memoizedState:null}else i=It.next;var o=Pt===null?at.memoizedState:Pt.next;if(o!==null)Pt=o,It=i;else{if(i===null)throw Error(t(310));It=i,i={memoizedState:It.memoizedState,baseState:It.baseState,baseQueue:It.baseQueue,queue:It.queue,next:null},Pt===null?at.memoizedState=Pt=i:Pt=Pt.next=i}return Pt}function Nl(i,o){return typeof o=="function"?o(i):o}function Df(i){var o=Vn(),l=o.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var d=It,p=d.baseQueue,_=l.pending;if(_!==null){if(p!==null){var w=p.next;p.next=_.next,_.next=w}d.baseQueue=p=_,l.pending=null}if(p!==null){_=p.next,d=d.baseState;var C=w=null,P=null,B=_;do{var Y=B.lane;if((Ds&Y)===Y)P!==null&&(P=P.next={lane:0,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null}),d=B.hasEagerState?B.eagerState:i(d,B.action);else{var J={lane:Y,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null};P===null?(C=P=J,w=d):P=P.next=J,at.lanes|=Y,Os|=Y}B=B.next}while(B!==null&&B!==_);P===null?w=d:P.next=C,Zn(d,o.memoizedState)||(dn=!0),o.memoizedState=d,o.baseState=w,o.baseQueue=P,l.lastRenderedState=d}if(i=l.interleaved,i!==null){p=i;do _=p.lane,at.lanes|=_,Os|=_,p=p.next;while(p!==i)}else p===null&&(l.lanes=0);return[o.memoizedState,l.dispatch]}function Of(i){var o=Vn(),l=o.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var d=l.dispatch,p=l.pending,_=o.memoizedState;if(p!==null){l.pending=null;var w=p=p.next;do _=i(_,w.action),w=w.next;while(w!==p);Zn(_,o.memoizedState)||(dn=!0),o.memoizedState=_,o.baseQueue===null&&(o.baseState=_),l.lastRenderedState=_}return[_,d]}function H_(){}function G_(i,o){var l=at,d=Vn(),p=o(),_=!Zn(d.memoizedState,p);if(_&&(d.memoizedState=p,dn=!0),d=d.queue,Lf(Y_.bind(null,l,d,i),[i]),d.getSnapshot!==o||_||Pt!==null&&Pt.memoizedState.tag&1){if(l.flags|=2048,xl(9,Q_.bind(null,l,d,p,o),void 0,null),Nt===null)throw Error(t(349));Ds&30||K_(l,o,p)}return p}function K_(i,o,l){i.flags|=16384,i={getSnapshot:o,value:l},o=at.updateQueue,o===null?(o={lastEffect:null,stores:null},at.updateQueue=o,o.stores=[i]):(l=o.stores,l===null?o.stores=[i]:l.push(i))}function Q_(i,o,l,d){o.value=l,o.getSnapshot=d,X_(o)&&J_(i)}function Y_(i,o,l){return l(function(){X_(o)&&J_(i)})}function X_(i){var o=i.getSnapshot;i=i.value;try{var l=o();return!Zn(i,l)}catch{return!0}}function J_(i){var o=Kr(i,1);o!==null&&ir(o,i,1,-1)}function Z_(i){var o=Tr();return typeof i=="function"&&(i=i()),o.memoizedState=o.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Nl,lastRenderedState:i},o.queue=i,i=i.dispatch=M0.bind(null,at,i),[o.memoizedState,i]}function xl(i,o,l,d){return i={tag:i,create:o,destroy:l,deps:d,next:null},o=at.updateQueue,o===null?(o={lastEffect:null,stores:null},at.updateQueue=o,o.lastEffect=i.next=i):(l=o.lastEffect,l===null?o.lastEffect=i.next=i:(d=l.next,l.next=i,i.next=d,o.lastEffect=i)),i}function ey(){return Vn().memoizedState}function Dc(i,o,l,d){var p=Tr();at.flags|=i,p.memoizedState=xl(1|o,l,void 0,d===void 0?null:d)}function Oc(i,o,l,d){var p=Vn();d=d===void 0?null:d;var _=void 0;if(It!==null){var w=It.memoizedState;if(_=w.destroy,d!==null&&Nf(d,w.deps)){p.memoizedState=xl(o,l,_,d);return}}at.flags|=i,p.memoizedState=xl(1|o,l,_,d)}function ty(i,o){return Dc(8390656,8,i,o)}function Lf(i,o){return Oc(2048,8,i,o)}function ny(i,o){return Oc(4,2,i,o)}function ry(i,o){return Oc(4,4,i,o)}function iy(i,o){if(typeof o=="function")return i=i(),o(i),function(){o(null)};if(o!=null)return i=i(),o.current=i,function(){o.current=null}}function sy(i,o,l){return l=l!=null?l.concat([i]):null,Oc(4,4,iy.bind(null,o,i),l)}function Mf(){}function oy(i,o){var l=Vn();o=o===void 0?null:o;var d=l.memoizedState;return d!==null&&o!==null&&Nf(o,d[1])?d[0]:(l.memoizedState=[i,o],i)}function ay(i,o){var l=Vn();o=o===void 0?null:o;var d=l.memoizedState;return d!==null&&o!==null&&Nf(o,d[1])?d[0]:(i=i(),l.memoizedState=[i,o],i)}function ly(i,o,l){return Ds&21?(Zn(l,o)||(l=Ts(),at.lanes|=l,Os|=l,i.baseState=!0),o):(i.baseState&&(i.baseState=!1,dn=!0),i.memoizedState=l)}function O0(i,o){var l=xe;xe=l!==0&&4>l?l:4,i(!0);var d=Pf.transition;Pf.transition={};try{i(!1),o()}finally{xe=l,Pf.transition=d}}function uy(){return Vn().memoizedState}function L0(i,o,l){var d=Vi(i);if(l={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null},cy(i))hy(o,l);else if(l=z_(i,o,l,d),l!==null){var p=on();ir(l,i,d,p),dy(l,o,d)}}function M0(i,o,l){var d=Vi(i),p={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null};if(cy(i))hy(o,p);else{var _=i.alternate;if(i.lanes===0&&(_===null||_.lanes===0)&&(_=o.lastRenderedReducer,_!==null))try{var w=o.lastRenderedState,C=_(w,l);if(p.hasEagerState=!0,p.eagerState=C,Zn(C,w)){var P=o.interleaved;P===null?(p.next=p,If(o)):(p.next=P.next,P.next=p),o.interleaved=p;return}}catch{}finally{}l=z_(i,o,p,d),l!==null&&(p=on(),ir(l,i,d,p),dy(l,o,d))}}function cy(i){var o=i.alternate;return i===at||o!==null&&o===at}function hy(i,o){kl=bc=!0;var l=i.pending;l===null?o.next=o:(o.next=l.next,l.next=o),i.pending=o}function dy(i,o,l){if(l&4194240){var d=o.lanes;d&=i.pendingLanes,l|=d,o.lanes=l,Ti(i,l)}}var Lc={readContext:Mn,useCallback:Ht,useContext:Ht,useEffect:Ht,useImperativeHandle:Ht,useInsertionEffect:Ht,useLayoutEffect:Ht,useMemo:Ht,useReducer:Ht,useRef:Ht,useState:Ht,useDebugValue:Ht,useDeferredValue:Ht,useTransition:Ht,useMutableSource:Ht,useSyncExternalStore:Ht,useId:Ht,unstable_isNewReconciler:!1},V0={readContext:Mn,useCallback:function(i,o){return Tr().memoizedState=[i,o===void 0?null:o],i},useContext:Mn,useEffect:ty,useImperativeHandle:function(i,o,l){return l=l!=null?l.concat([i]):null,Dc(4194308,4,iy.bind(null,o,i),l)},useLayoutEffect:function(i,o){return Dc(4194308,4,i,o)},useInsertionEffect:function(i,o){return Dc(4,2,i,o)},useMemo:function(i,o){var l=Tr();return o=o===void 0?null:o,i=i(),l.memoizedState=[i,o],i},useReducer:function(i,o,l){var d=Tr();return o=l!==void 0?l(o):o,d.memoizedState=d.baseState=o,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:o},d.queue=i,i=i.dispatch=L0.bind(null,at,i),[d.memoizedState,i]},useRef:function(i){var o=Tr();return i={current:i},o.memoizedState=i},useState:Z_,useDebugValue:Mf,useDeferredValue:function(i){return Tr().memoizedState=i},useTransition:function(){var i=Z_(!1),o=i[0];return i=O0.bind(null,i[1]),Tr().memoizedState=i,[o,i]},useMutableSource:function(){},useSyncExternalStore:function(i,o,l){var d=at,p=Tr();if(st){if(l===void 0)throw Error(t(407));l=l()}else{if(l=o(),Nt===null)throw Error(t(349));Ds&30||K_(d,o,l)}p.memoizedState=l;var _={value:l,getSnapshot:o};return p.queue=_,ty(Y_.bind(null,d,_,i),[i]),d.flags|=2048,xl(9,Q_.bind(null,d,_,l,o),void 0,null),l},useId:function(){var i=Tr(),o=Nt.identifierPrefix;if(st){var l=Gr,d=Hr;l=(d&~(1<<32-nn(d)-1)).toString(32)+l,o=":"+o+"R"+l,l=Pl++,0<l&&(o+="H"+l.toString(32)),o+=":"}else l=D0++,o=":"+o+"r"+l.toString(32)+":";return i.memoizedState=o},unstable_isNewReconciler:!1},F0={readContext:Mn,useCallback:oy,useContext:Mn,useEffect:Lf,useImperativeHandle:sy,useInsertionEffect:ny,useLayoutEffect:ry,useMemo:ay,useReducer:Df,useRef:ey,useState:function(){return Df(Nl)},useDebugValue:Mf,useDeferredValue:function(i){var o=Vn();return ly(o,It.memoizedState,i)},useTransition:function(){var i=Df(Nl)[0],o=Vn().memoizedState;return[i,o]},useMutableSource:H_,useSyncExternalStore:G_,useId:uy,unstable_isNewReconciler:!1},U0={readContext:Mn,useCallback:oy,useContext:Mn,useEffect:Lf,useImperativeHandle:sy,useInsertionEffect:ny,useLayoutEffect:ry,useMemo:ay,useReducer:Of,useRef:ey,useState:function(){return Of(Nl)},useDebugValue:Mf,useDeferredValue:function(i){var o=Vn();return It===null?o.memoizedState=i:ly(o,It.memoizedState,i)},useTransition:function(){var i=Of(Nl)[0],o=Vn().memoizedState;return[i,o]},useMutableSource:H_,useSyncExternalStore:G_,useId:uy,unstable_isNewReconciler:!1};function tr(i,o){if(i&&i.defaultProps){o=oe({},o),i=i.defaultProps;for(var l in i)o[l]===void 0&&(o[l]=i[l]);return o}return o}function Vf(i,o,l,d){o=i.memoizedState,l=l(d,o),l=l==null?o:oe({},o,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var Mc={isMounted:function(i){return(i=i._reactInternals)?Hn(i)===i:!1},enqueueSetState:function(i,o,l){i=i._reactInternals;var d=on(),p=Vi(i),_=Qr(d,p);_.payload=o,l!=null&&(_.callback=l),o=Di(i,_,p),o!==null&&(ir(o,i,p,d),kc(o,i,p))},enqueueReplaceState:function(i,o,l){i=i._reactInternals;var d=on(),p=Vi(i),_=Qr(d,p);_.tag=1,_.payload=o,l!=null&&(_.callback=l),o=Di(i,_,p),o!==null&&(ir(o,i,p,d),kc(o,i,p))},enqueueForceUpdate:function(i,o){i=i._reactInternals;var l=on(),d=Vi(i),p=Qr(l,d);p.tag=2,o!=null&&(p.callback=o),o=Di(i,p,d),o!==null&&(ir(o,i,d,l),kc(o,i,d))}};function fy(i,o,l,d,p,_,w){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(d,_,w):o.prototype&&o.prototype.isPureReactComponent?!_l(l,d)||!_l(p,_):!0}function py(i,o,l){var d=!1,p=Ni,_=o.contextType;return typeof _=="object"&&_!==null?_=Mn(_):(p=hn(o)?ks:qt.current,d=o.contextTypes,_=(d=d!=null)?Ho(i,p):Ni),o=new o(l,_),i.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=Mc,i.stateNode=o,o._reactInternals=i,d&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=p,i.__reactInternalMemoizedMaskedChildContext=_),o}function my(i,o,l,d){i=o.state,typeof o.componentWillReceiveProps=="function"&&o.componentWillReceiveProps(l,d),typeof o.UNSAFE_componentWillReceiveProps=="function"&&o.UNSAFE_componentWillReceiveProps(l,d),o.state!==i&&Mc.enqueueReplaceState(o,o.state,null)}function Ff(i,o,l,d){var p=i.stateNode;p.props=l,p.state=i.memoizedState,p.refs={},Sf(i);var _=o.contextType;typeof _=="object"&&_!==null?p.context=Mn(_):(_=hn(o)?ks:qt.current,p.context=Ho(i,_)),p.state=i.memoizedState,_=o.getDerivedStateFromProps,typeof _=="function"&&(Vf(i,o,_,l),p.state=i.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(o=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),o!==p.state&&Mc.enqueueReplaceState(p,p.state,null),Pc(i,l,p,d),p.state=i.memoizedState),typeof p.componentDidMount=="function"&&(i.flags|=4194308)}function ea(i,o){try{var l="",d=o;do l+=Ae(d),d=d.return;while(d);var p=l}catch(_){p=`
Error generating stack: `+_.message+`
`+_.stack}return{value:i,source:o,stack:p,digest:null}}function Uf(i,o,l){return{value:i,source:null,stack:l??null,digest:o??null}}function jf(i,o){try{console.error(o.value)}catch(l){setTimeout(function(){throw l})}}var j0=typeof WeakMap=="function"?WeakMap:Map;function gy(i,o,l){l=Qr(-1,l),l.tag=3,l.payload={element:null};var d=o.value;return l.callback=function(){$c||($c=!0,tp=d),jf(i,o)},l}function _y(i,o,l){l=Qr(-1,l),l.tag=3;var d=i.type.getDerivedStateFromError;if(typeof d=="function"){var p=o.value;l.payload=function(){return d(p)},l.callback=function(){jf(i,o)}}var _=i.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(l.callback=function(){jf(i,o),typeof d!="function"&&(Li===null?Li=new Set([this]):Li.add(this));var w=o.stack;this.componentDidCatch(o.value,{componentStack:w!==null?w:""})}),l}function yy(i,o,l){var d=i.pingCache;if(d===null){d=i.pingCache=new j0;var p=new Set;d.set(o,p)}else p=d.get(o),p===void 0&&(p=new Set,d.set(o,p));p.has(l)||(p.add(l),i=eR.bind(null,i,o,l),o.then(i,i))}function vy(i){do{var o;if((o=i.tag===13)&&(o=i.memoizedState,o=o!==null?o.dehydrated!==null:!0),o)return i;i=i.return}while(i!==null);return null}function Ey(i,o,l,d,p){return i.mode&1?(i.flags|=65536,i.lanes=p,i):(i===o?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(o=Qr(-1,1),o.tag=2,Di(l,o,1))),l.lanes|=1),i)}var z0=de.ReactCurrentOwner,dn=!1;function sn(i,o,l,d){o.child=i===null?j_(o,null,l,d):Yo(o,i.child,l,d)}function wy(i,o,l,d,p){l=l.render;var _=o.ref;return Jo(o,p),d=xf(i,o,l,d,_,p),l=bf(),i!==null&&!dn?(o.updateQueue=i.updateQueue,o.flags&=-2053,i.lanes&=~p,Yr(i,o,p)):(st&&l&&pf(o),o.flags|=1,sn(i,o,d,p),o.child)}function Ty(i,o,l,d,p){if(i===null){var _=l.type;return typeof _=="function"&&!lp(_)&&_.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(o.tag=15,o.type=_,Iy(i,o,_,d,p)):(i=Qc(l.type,null,d,o,o.mode,p),i.ref=o.ref,i.return=o,o.child=i)}if(_=i.child,!(i.lanes&p)){var w=_.memoizedProps;if(l=l.compare,l=l!==null?l:_l,l(w,d)&&i.ref===o.ref)return Yr(i,o,p)}return o.flags|=1,i=Ui(_,d),i.ref=o.ref,i.return=o,o.child=i}function Iy(i,o,l,d,p){if(i!==null){var _=i.memoizedProps;if(_l(_,d)&&i.ref===o.ref)if(dn=!1,o.pendingProps=d=_,(i.lanes&p)!==0)i.flags&131072&&(dn=!0);else return o.lanes=i.lanes,Yr(i,o,p)}return zf(i,o,l,d,p)}function Sy(i,o,l){var d=o.pendingProps,p=d.children,_=i!==null?i.memoizedState:null;if(d.mode==="hidden")if(!(o.mode&1))o.memoizedState={baseLanes:0,cachePool:null,transitions:null},Xe(na,Rn),Rn|=l;else{if(!(l&1073741824))return i=_!==null?_.baseLanes|l:l,o.lanes=o.childLanes=1073741824,o.memoizedState={baseLanes:i,cachePool:null,transitions:null},o.updateQueue=null,Xe(na,Rn),Rn|=i,null;o.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=_!==null?_.baseLanes:l,Xe(na,Rn),Rn|=d}else _!==null?(d=_.baseLanes|l,o.memoizedState=null):d=l,Xe(na,Rn),Rn|=d;return sn(i,o,p,l),o.child}function Cy(i,o){var l=o.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(o.flags|=512,o.flags|=2097152)}function zf(i,o,l,d,p){var _=hn(l)?ks:qt.current;return _=Ho(o,_),Jo(o,p),l=xf(i,o,l,d,_,p),d=bf(),i!==null&&!dn?(o.updateQueue=i.updateQueue,o.flags&=-2053,i.lanes&=~p,Yr(i,o,p)):(st&&d&&pf(o),o.flags|=1,sn(i,o,l,p),o.child)}function Ry(i,o,l,d,p){if(hn(l)){var _=!0;Ec(o)}else _=!1;if(Jo(o,p),o.stateNode===null)Fc(i,o),py(o,l,d),Ff(o,l,d,p),d=!0;else if(i===null){var w=o.stateNode,C=o.memoizedProps;w.props=C;var P=w.context,B=l.contextType;typeof B=="object"&&B!==null?B=Mn(B):(B=hn(l)?ks:qt.current,B=Ho(o,B));var Y=l.getDerivedStateFromProps,J=typeof Y=="function"||typeof w.getSnapshotBeforeUpdate=="function";J||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(C!==d||P!==B)&&my(o,w,d,B),bi=!1;var Q=o.memoizedState;w.state=Q,Pc(o,d,w,p),P=o.memoizedState,C!==d||Q!==P||cn.current||bi?(typeof Y=="function"&&(Vf(o,l,Y,d),P=o.memoizedState),(C=bi||fy(o,l,C,d,Q,P,B))?(J||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(o.flags|=4194308)):(typeof w.componentDidMount=="function"&&(o.flags|=4194308),o.memoizedProps=d,o.memoizedState=P),w.props=d,w.state=P,w.context=B,d=C):(typeof w.componentDidMount=="function"&&(o.flags|=4194308),d=!1)}else{w=o.stateNode,B_(i,o),C=o.memoizedProps,B=o.type===o.elementType?C:tr(o.type,C),w.props=B,J=o.pendingProps,Q=w.context,P=l.contextType,typeof P=="object"&&P!==null?P=Mn(P):(P=hn(l)?ks:qt.current,P=Ho(o,P));var se=l.getDerivedStateFromProps;(Y=typeof se=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(C!==J||Q!==P)&&my(o,w,d,P),bi=!1,Q=o.memoizedState,w.state=Q,Pc(o,d,w,p);var ue=o.memoizedState;C!==J||Q!==ue||cn.current||bi?(typeof se=="function"&&(Vf(o,l,se,d),ue=o.memoizedState),(B=bi||fy(o,l,B,d,Q,ue,P)||!1)?(Y||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(d,ue,P),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(d,ue,P)),typeof w.componentDidUpdate=="function"&&(o.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(o.flags|=1024)):(typeof w.componentDidUpdate!="function"||C===i.memoizedProps&&Q===i.memoizedState||(o.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||C===i.memoizedProps&&Q===i.memoizedState||(o.flags|=1024),o.memoizedProps=d,o.memoizedState=ue),w.props=d,w.state=ue,w.context=P,d=B):(typeof w.componentDidUpdate!="function"||C===i.memoizedProps&&Q===i.memoizedState||(o.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||C===i.memoizedProps&&Q===i.memoizedState||(o.flags|=1024),d=!1)}return Bf(i,o,l,d,_,p)}function Bf(i,o,l,d,p,_){Cy(i,o);var w=(o.flags&128)!==0;if(!d&&!w)return p&&x_(o,l,!1),Yr(i,o,_);d=o.stateNode,z0.current=o;var C=w&&typeof l.getDerivedStateFromError!="function"?null:d.render();return o.flags|=1,i!==null&&w?(o.child=Yo(o,i.child,null,_),o.child=Yo(o,null,C,_)):sn(i,o,C,_),o.memoizedState=d.state,p&&x_(o,l,!0),o.child}function Ay(i){var o=i.stateNode;o.pendingContext?P_(i,o.pendingContext,o.pendingContext!==o.context):o.context&&P_(i,o.context,!1),Cf(i,o.containerInfo)}function ky(i,o,l,d,p){return Qo(),yf(p),o.flags|=256,sn(i,o,l,d),o.child}var $f={dehydrated:null,treeContext:null,retryLane:0};function Wf(i){return{baseLanes:i,cachePool:null,transitions:null}}function Py(i,o,l){var d=o.pendingProps,p=ot.current,_=!1,w=(o.flags&128)!==0,C;if((C=w)||(C=i!==null&&i.memoizedState===null?!1:(p&2)!==0),C?(_=!0,o.flags&=-129):(i===null||i.memoizedState!==null)&&(p|=1),Xe(ot,p&1),i===null)return _f(o),i=o.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?(o.mode&1?i.data==="$!"?o.lanes=8:o.lanes=1073741824:o.lanes=1,null):(w=d.children,i=d.fallback,_?(d=o.mode,_=o.child,w={mode:"hidden",children:w},!(d&1)&&_!==null?(_.childLanes=0,_.pendingProps=w):_=Yc(w,d,0,null),i=Fs(i,d,l,null),_.return=o,i.return=o,_.sibling=i,o.child=_,o.child.memoizedState=Wf(l),o.memoizedState=$f,i):qf(o,w));if(p=i.memoizedState,p!==null&&(C=p.dehydrated,C!==null))return B0(i,o,w,d,C,p,l);if(_){_=d.fallback,w=o.mode,p=i.child,C=p.sibling;var P={mode:"hidden",children:d.children};return!(w&1)&&o.child!==p?(d=o.child,d.childLanes=0,d.pendingProps=P,o.deletions=null):(d=Ui(p,P),d.subtreeFlags=p.subtreeFlags&14680064),C!==null?_=Ui(C,_):(_=Fs(_,w,l,null),_.flags|=2),_.return=o,d.return=o,d.sibling=_,o.child=d,d=_,_=o.child,w=i.child.memoizedState,w=w===null?Wf(l):{baseLanes:w.baseLanes|l,cachePool:null,transitions:w.transitions},_.memoizedState=w,_.childLanes=i.childLanes&~l,o.memoizedState=$f,d}return _=i.child,i=_.sibling,d=Ui(_,{mode:"visible",children:d.children}),!(o.mode&1)&&(d.lanes=l),d.return=o,d.sibling=null,i!==null&&(l=o.deletions,l===null?(o.deletions=[i],o.flags|=16):l.push(i)),o.child=d,o.memoizedState=null,d}function qf(i,o){return o=Yc({mode:"visible",children:o},i.mode,0,null),o.return=i,i.child=o}function Vc(i,o,l,d){return d!==null&&yf(d),Yo(o,i.child,null,l),i=qf(o,o.pendingProps.children),i.flags|=2,o.memoizedState=null,i}function B0(i,o,l,d,p,_,w){if(l)return o.flags&256?(o.flags&=-257,d=Uf(Error(t(422))),Vc(i,o,w,d)):o.memoizedState!==null?(o.child=i.child,o.flags|=128,null):(_=d.fallback,p=o.mode,d=Yc({mode:"visible",children:d.children},p,0,null),_=Fs(_,p,w,null),_.flags|=2,d.return=o,_.return=o,d.sibling=_,o.child=d,o.mode&1&&Yo(o,i.child,null,w),o.child.memoizedState=Wf(w),o.memoizedState=$f,_);if(!(o.mode&1))return Vc(i,o,w,null);if(p.data==="$!"){if(d=p.nextSibling&&p.nextSibling.dataset,d)var C=d.dgst;return d=C,_=Error(t(419)),d=Uf(_,d,void 0),Vc(i,o,w,d)}if(C=(w&i.childLanes)!==0,dn||C){if(d=Nt,d!==null){switch(w&-w){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=p&(d.suspendedLanes|w)?0:p,p!==0&&p!==_.retryLane&&(_.retryLane=p,Kr(i,p),ir(d,i,p,-1))}return ap(),d=Uf(Error(t(421))),Vc(i,o,w,d)}return p.data==="$?"?(o.flags|=128,o.child=i.child,o=tR.bind(null,i),p._reactRetry=o,null):(i=_.treeContext,Cn=ki(p.nextSibling),Sn=o,st=!0,er=null,i!==null&&(On[Ln++]=Hr,On[Ln++]=Gr,On[Ln++]=Ps,Hr=i.id,Gr=i.overflow,Ps=o),o=qf(o,d.children),o.flags|=4096,o)}function Ny(i,o,l){i.lanes|=o;var d=i.alternate;d!==null&&(d.lanes|=o),Tf(i.return,o,l)}function Hf(i,o,l,d,p){var _=i.memoizedState;_===null?i.memoizedState={isBackwards:o,rendering:null,renderingStartTime:0,last:d,tail:l,tailMode:p}:(_.isBackwards=o,_.rendering=null,_.renderingStartTime=0,_.last=d,_.tail=l,_.tailMode=p)}function xy(i,o,l){var d=o.pendingProps,p=d.revealOrder,_=d.tail;if(sn(i,o,d.children,l),d=ot.current,d&2)d=d&1|2,o.flags|=128;else{if(i!==null&&i.flags&128)e:for(i=o.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&Ny(i,l,o);else if(i.tag===19)Ny(i,l,o);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===o)break e;for(;i.sibling===null;){if(i.return===null||i.return===o)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}d&=1}if(Xe(ot,d),!(o.mode&1))o.memoizedState=null;else switch(p){case"forwards":for(l=o.child,p=null;l!==null;)i=l.alternate,i!==null&&Nc(i)===null&&(p=l),l=l.sibling;l=p,l===null?(p=o.child,o.child=null):(p=l.sibling,l.sibling=null),Hf(o,!1,p,l,_);break;case"backwards":for(l=null,p=o.child,o.child=null;p!==null;){if(i=p.alternate,i!==null&&Nc(i)===null){o.child=p;break}i=p.sibling,p.sibling=l,l=p,p=i}Hf(o,!0,l,null,_);break;case"together":Hf(o,!1,null,null,void 0);break;default:o.memoizedState=null}return o.child}function Fc(i,o){!(o.mode&1)&&i!==null&&(i.alternate=null,o.alternate=null,o.flags|=2)}function Yr(i,o,l){if(i!==null&&(o.dependencies=i.dependencies),Os|=o.lanes,!(l&o.childLanes))return null;if(i!==null&&o.child!==i.child)throw Error(t(153));if(o.child!==null){for(i=o.child,l=Ui(i,i.pendingProps),o.child=l,l.return=o;i.sibling!==null;)i=i.sibling,l=l.sibling=Ui(i,i.pendingProps),l.return=o;l.sibling=null}return o.child}function $0(i,o,l){switch(o.tag){case 3:Ay(o),Qo();break;case 5:q_(o);break;case 1:hn(o.type)&&Ec(o);break;case 4:Cf(o,o.stateNode.containerInfo);break;case 10:var d=o.type._context,p=o.memoizedProps.value;Xe(Rc,d._currentValue),d._currentValue=p;break;case 13:if(d=o.memoizedState,d!==null)return d.dehydrated!==null?(Xe(ot,ot.current&1),o.flags|=128,null):l&o.child.childLanes?Py(i,o,l):(Xe(ot,ot.current&1),i=Yr(i,o,l),i!==null?i.sibling:null);Xe(ot,ot.current&1);break;case 19:if(d=(l&o.childLanes)!==0,i.flags&128){if(d)return xy(i,o,l);o.flags|=128}if(p=o.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Xe(ot,ot.current),d)break;return null;case 22:case 23:return o.lanes=0,Sy(i,o,l)}return Yr(i,o,l)}var by,Gf,Dy,Oy;by=function(i,o){for(var l=o.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===o)break;for(;l.sibling===null;){if(l.return===null||l.return===o)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Gf=function(){},Dy=function(i,o,l,d){var p=i.memoizedProps;if(p!==d){i=o.stateNode,bs(wr.current);var _=null;switch(l){case"input":p=hs(i,p),d=hs(i,d),_=[];break;case"select":p=oe({},p,{value:void 0}),d=oe({},d,{value:void 0}),_=[];break;case"textarea":p=Ha(i,p),d=Ha(i,d),_=[];break;default:typeof p.onClick!="function"&&typeof d.onClick=="function"&&(i.onclick=_c)}Ja(l,d);var w;l=null;for(B in p)if(!d.hasOwnProperty(B)&&p.hasOwnProperty(B)&&p[B]!=null)if(B==="style"){var C=p[B];for(w in C)C.hasOwnProperty(w)&&(l||(l={}),l[w]="")}else B!=="dangerouslySetInnerHTML"&&B!=="children"&&B!=="suppressContentEditableWarning"&&B!=="suppressHydrationWarning"&&B!=="autoFocus"&&(s.hasOwnProperty(B)?_||(_=[]):(_=_||[]).push(B,null));for(B in d){var P=d[B];if(C=p!=null?p[B]:void 0,d.hasOwnProperty(B)&&P!==C&&(P!=null||C!=null))if(B==="style")if(C){for(w in C)!C.hasOwnProperty(w)||P&&P.hasOwnProperty(w)||(l||(l={}),l[w]="");for(w in P)P.hasOwnProperty(w)&&C[w]!==P[w]&&(l||(l={}),l[w]=P[w])}else l||(_||(_=[]),_.push(B,l)),l=P;else B==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,C=C?C.__html:void 0,P!=null&&C!==P&&(_=_||[]).push(B,P)):B==="children"?typeof P!="string"&&typeof P!="number"||(_=_||[]).push(B,""+P):B!=="suppressContentEditableWarning"&&B!=="suppressHydrationWarning"&&(s.hasOwnProperty(B)?(P!=null&&B==="onScroll"&&Je("scroll",i),_||C===P||(_=[])):(_=_||[]).push(B,P))}l&&(_=_||[]).push("style",l);var B=_;(o.updateQueue=B)&&(o.flags|=4)}},Oy=function(i,o,l,d){l!==d&&(o.flags|=4)};function bl(i,o){if(!st)switch(i.tailMode){case"hidden":o=i.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var d=null;l!==null;)l.alternate!==null&&(d=l),l=l.sibling;d===null?o||i.tail===null?i.tail=null:i.tail.sibling=null:d.sibling=null}}function Gt(i){var o=i.alternate!==null&&i.alternate.child===i.child,l=0,d=0;if(o)for(var p=i.child;p!==null;)l|=p.lanes|p.childLanes,d|=p.subtreeFlags&14680064,d|=p.flags&14680064,p.return=i,p=p.sibling;else for(p=i.child;p!==null;)l|=p.lanes|p.childLanes,d|=p.subtreeFlags,d|=p.flags,p.return=i,p=p.sibling;return i.subtreeFlags|=d,i.childLanes=l,o}function W0(i,o,l){var d=o.pendingProps;switch(mf(o),o.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Gt(o),null;case 1:return hn(o.type)&&vc(),Gt(o),null;case 3:return d=o.stateNode,Zo(),Ze(cn),Ze(qt),kf(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(i===null||i.child===null)&&(Sc(o)?o.flags|=4:i===null||i.memoizedState.isDehydrated&&!(o.flags&256)||(o.flags|=1024,er!==null&&(ip(er),er=null))),Gf(i,o),Gt(o),null;case 5:Rf(o);var p=bs(Al.current);if(l=o.type,i!==null&&o.stateNode!=null)Dy(i,o,l,d,p),i.ref!==o.ref&&(o.flags|=512,o.flags|=2097152);else{if(!d){if(o.stateNode===null)throw Error(t(166));return Gt(o),null}if(i=bs(wr.current),Sc(o)){d=o.stateNode,l=o.type;var _=o.memoizedProps;switch(d[Er]=o,d[Tl]=_,i=(o.mode&1)!==0,l){case"dialog":Je("cancel",d),Je("close",d);break;case"iframe":case"object":case"embed":Je("load",d);break;case"video":case"audio":for(p=0;p<vl.length;p++)Je(vl[p],d);break;case"source":Je("error",d);break;case"img":case"image":case"link":Je("error",d),Je("load",d);break;case"details":Je("toggle",d);break;case"input":po(d,_),Je("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!_.multiple},Je("invalid",d);break;case"textarea":go(d,_),Je("invalid",d)}Ja(l,_),p=null;for(var w in _)if(_.hasOwnProperty(w)){var C=_[w];w==="children"?typeof C=="string"?d.textContent!==C&&(_.suppressHydrationWarning!==!0&&gc(d.textContent,C,i),p=["children",C]):typeof C=="number"&&d.textContent!==""+C&&(_.suppressHydrationWarning!==!0&&gc(d.textContent,C,i),p=["children",""+C]):s.hasOwnProperty(w)&&C!=null&&w==="onScroll"&&Je("scroll",d)}switch(l){case"input":Or(d),Bu(d,_,!0);break;case"textarea":Or(d),Ga(d);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(d.onclick=_c)}d=p,o.updateQueue=d,d!==null&&(o.flags|=4)}else{w=p.nodeType===9?p:p.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=Et(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=w.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof d.is=="string"?i=w.createElement(l,{is:d.is}):(i=w.createElement(l),l==="select"&&(w=i,d.multiple?w.multiple=!0:d.size&&(w.size=d.size))):i=w.createElementNS(i,l),i[Er]=o,i[Tl]=d,by(i,o,!1,!1),o.stateNode=i;e:{switch(w=Za(l,d),l){case"dialog":Je("cancel",i),Je("close",i),p=d;break;case"iframe":case"object":case"embed":Je("load",i),p=d;break;case"video":case"audio":for(p=0;p<vl.length;p++)Je(vl[p],i);p=d;break;case"source":Je("error",i),p=d;break;case"img":case"image":case"link":Je("error",i),Je("load",i),p=d;break;case"details":Je("toggle",i),p=d;break;case"input":po(i,d),p=hs(i,d),Je("invalid",i);break;case"option":p=d;break;case"select":i._wrapperState={wasMultiple:!!d.multiple},p=oe({},d,{value:void 0}),Je("invalid",i);break;case"textarea":go(i,d),p=Ha(i,d),Je("invalid",i);break;default:p=d}Ja(l,p),C=p;for(_ in C)if(C.hasOwnProperty(_)){var P=C[_];_==="style"?Ya(i,P):_==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,P!=null&&Ka(i,P)):_==="children"?typeof P=="string"?(l!=="textarea"||P!=="")&&_i(i,P):typeof P=="number"&&_i(i,""+P):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(s.hasOwnProperty(_)?P!=null&&_==="onScroll"&&Je("scroll",i):P!=null&&X(i,_,P,w))}switch(l){case"input":Or(i),Bu(i,d,!1);break;case"textarea":Or(i),Ga(i);break;case"option":d.value!=null&&i.setAttribute("value",""+Be(d.value));break;case"select":i.multiple=!!d.multiple,_=d.value,_!=null?Mr(i,!!d.multiple,_,!1):d.defaultValue!=null&&Mr(i,!!d.multiple,d.defaultValue,!0);break;default:typeof p.onClick=="function"&&(i.onclick=_c)}switch(l){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(o.flags|=4)}o.ref!==null&&(o.flags|=512,o.flags|=2097152)}return Gt(o),null;case 6:if(i&&o.stateNode!=null)Oy(i,o,i.memoizedProps,d);else{if(typeof d!="string"&&o.stateNode===null)throw Error(t(166));if(l=bs(Al.current),bs(wr.current),Sc(o)){if(d=o.stateNode,l=o.memoizedProps,d[Er]=o,(_=d.nodeValue!==l)&&(i=Sn,i!==null))switch(i.tag){case 3:gc(d.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&gc(d.nodeValue,l,(i.mode&1)!==0)}_&&(o.flags|=4)}else d=(l.nodeType===9?l:l.ownerDocument).createTextNode(d),d[Er]=o,o.stateNode=d}return Gt(o),null;case 13:if(Ze(ot),d=o.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(st&&Cn!==null&&o.mode&1&&!(o.flags&128))V_(),Qo(),o.flags|=98560,_=!1;else if(_=Sc(o),d!==null&&d.dehydrated!==null){if(i===null){if(!_)throw Error(t(318));if(_=o.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[Er]=o}else Qo(),!(o.flags&128)&&(o.memoizedState=null),o.flags|=4;Gt(o),_=!1}else er!==null&&(ip(er),er=null),_=!0;if(!_)return o.flags&65536?o:null}return o.flags&128?(o.lanes=l,o):(d=d!==null,d!==(i!==null&&i.memoizedState!==null)&&d&&(o.child.flags|=8192,o.mode&1&&(i===null||ot.current&1?St===0&&(St=3):ap())),o.updateQueue!==null&&(o.flags|=4),Gt(o),null);case 4:return Zo(),Gf(i,o),i===null&&El(o.stateNode.containerInfo),Gt(o),null;case 10:return wf(o.type._context),Gt(o),null;case 17:return hn(o.type)&&vc(),Gt(o),null;case 19:if(Ze(ot),_=o.memoizedState,_===null)return Gt(o),null;if(d=(o.flags&128)!==0,w=_.rendering,w===null)if(d)bl(_,!1);else{if(St!==0||i!==null&&i.flags&128)for(i=o.child;i!==null;){if(w=Nc(i),w!==null){for(o.flags|=128,bl(_,!1),d=w.updateQueue,d!==null&&(o.updateQueue=d,o.flags|=4),o.subtreeFlags=0,d=l,l=o.child;l!==null;)_=l,i=d,_.flags&=14680066,w=_.alternate,w===null?(_.childLanes=0,_.lanes=i,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=w.childLanes,_.lanes=w.lanes,_.child=w.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=w.memoizedProps,_.memoizedState=w.memoizedState,_.updateQueue=w.updateQueue,_.type=w.type,i=w.dependencies,_.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return Xe(ot,ot.current&1|2),o.child}i=i.sibling}_.tail!==null&&Ye()>ra&&(o.flags|=128,d=!0,bl(_,!1),o.lanes=4194304)}else{if(!d)if(i=Nc(w),i!==null){if(o.flags|=128,d=!0,l=i.updateQueue,l!==null&&(o.updateQueue=l,o.flags|=4),bl(_,!0),_.tail===null&&_.tailMode==="hidden"&&!w.alternate&&!st)return Gt(o),null}else 2*Ye()-_.renderingStartTime>ra&&l!==1073741824&&(o.flags|=128,d=!0,bl(_,!1),o.lanes=4194304);_.isBackwards?(w.sibling=o.child,o.child=w):(l=_.last,l!==null?l.sibling=w:o.child=w,_.last=w)}return _.tail!==null?(o=_.tail,_.rendering=o,_.tail=o.sibling,_.renderingStartTime=Ye(),o.sibling=null,l=ot.current,Xe(ot,d?l&1|2:l&1),o):(Gt(o),null);case 22:case 23:return op(),d=o.memoizedState!==null,i!==null&&i.memoizedState!==null!==d&&(o.flags|=8192),d&&o.mode&1?Rn&1073741824&&(Gt(o),o.subtreeFlags&6&&(o.flags|=8192)):Gt(o),null;case 24:return null;case 25:return null}throw Error(t(156,o.tag))}function q0(i,o){switch(mf(o),o.tag){case 1:return hn(o.type)&&vc(),i=o.flags,i&65536?(o.flags=i&-65537|128,o):null;case 3:return Zo(),Ze(cn),Ze(qt),kf(),i=o.flags,i&65536&&!(i&128)?(o.flags=i&-65537|128,o):null;case 5:return Rf(o),null;case 13:if(Ze(ot),i=o.memoizedState,i!==null&&i.dehydrated!==null){if(o.alternate===null)throw Error(t(340));Qo()}return i=o.flags,i&65536?(o.flags=i&-65537|128,o):null;case 19:return Ze(ot),null;case 4:return Zo(),null;case 10:return wf(o.type._context),null;case 22:case 23:return op(),null;case 24:return null;default:return null}}var Uc=!1,Kt=!1,H0=typeof WeakSet=="function"?WeakSet:Set,le=null;function ta(i,o){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(d){ut(i,o,d)}else l.current=null}function Kf(i,o,l){try{l()}catch(d){ut(i,o,d)}}var Ly=!1;function G0(i,o){if(of=Ci,i=f_(),Xd(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var d=l.getSelection&&l.getSelection();if(d&&d.rangeCount!==0){l=d.anchorNode;var p=d.anchorOffset,_=d.focusNode;d=d.focusOffset;try{l.nodeType,_.nodeType}catch{l=null;break e}var w=0,C=-1,P=-1,B=0,Y=0,J=i,Q=null;t:for(;;){for(var se;J!==l||p!==0&&J.nodeType!==3||(C=w+p),J!==_||d!==0&&J.nodeType!==3||(P=w+d),J.nodeType===3&&(w+=J.nodeValue.length),(se=J.firstChild)!==null;)Q=J,J=se;for(;;){if(J===i)break t;if(Q===l&&++B===p&&(C=w),Q===_&&++Y===d&&(P=w),(se=J.nextSibling)!==null)break;J=Q,Q=J.parentNode}J=se}l=C===-1||P===-1?null:{start:C,end:P}}else l=null}l=l||{start:0,end:0}}else l=null;for(af={focusedElem:i,selectionRange:l},Ci=!1,le=o;le!==null;)if(o=le,i=o.child,(o.subtreeFlags&1028)!==0&&i!==null)i.return=o,le=i;else for(;le!==null;){o=le;try{var ue=o.alternate;if(o.flags&1024)switch(o.tag){case 0:case 11:case 15:break;case 1:if(ue!==null){var he=ue.memoizedProps,dt=ue.memoizedState,U=o.stateNode,D=U.getSnapshotBeforeUpdate(o.elementType===o.type?he:tr(o.type,he),dt);U.__reactInternalSnapshotBeforeUpdate=D}break;case 3:var j=o.stateNode.containerInfo;j.nodeType===1?j.textContent="":j.nodeType===9&&j.documentElement&&j.removeChild(j.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Z){ut(o,o.return,Z)}if(i=o.sibling,i!==null){i.return=o.return,le=i;break}le=o.return}return ue=Ly,Ly=!1,ue}function Dl(i,o,l){var d=o.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var p=d=d.next;do{if((p.tag&i)===i){var _=p.destroy;p.destroy=void 0,_!==void 0&&Kf(o,l,_)}p=p.next}while(p!==d)}}function jc(i,o){if(o=o.updateQueue,o=o!==null?o.lastEffect:null,o!==null){var l=o=o.next;do{if((l.tag&i)===i){var d=l.create;l.destroy=d()}l=l.next}while(l!==o)}}function Qf(i){var o=i.ref;if(o!==null){var l=i.stateNode;switch(i.tag){case 5:i=l;break;default:i=l}typeof o=="function"?o(i):o.current=i}}function My(i){var o=i.alternate;o!==null&&(i.alternate=null,My(o)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(o=i.stateNode,o!==null&&(delete o[Er],delete o[Tl],delete o[hf],delete o[P0],delete o[N0])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function Vy(i){return i.tag===5||i.tag===3||i.tag===4}function Fy(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||Vy(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function Yf(i,o,l){var d=i.tag;if(d===5||d===6)i=i.stateNode,o?l.nodeType===8?l.parentNode.insertBefore(i,o):l.insertBefore(i,o):(l.nodeType===8?(o=l.parentNode,o.insertBefore(i,l)):(o=l,o.appendChild(i)),l=l._reactRootContainer,l!=null||o.onclick!==null||(o.onclick=_c));else if(d!==4&&(i=i.child,i!==null))for(Yf(i,o,l),i=i.sibling;i!==null;)Yf(i,o,l),i=i.sibling}function Xf(i,o,l){var d=i.tag;if(d===5||d===6)i=i.stateNode,o?l.insertBefore(i,o):l.appendChild(i);else if(d!==4&&(i=i.child,i!==null))for(Xf(i,o,l),i=i.sibling;i!==null;)Xf(i,o,l),i=i.sibling}var Ft=null,nr=!1;function Oi(i,o,l){for(l=l.child;l!==null;)Uy(i,o,l),l=l.sibling}function Uy(i,o,l){if(En&&typeof En.onCommitFiberUnmount=="function")try{En.onCommitFiberUnmount(Es,l)}catch{}switch(l.tag){case 5:Kt||ta(l,o);case 6:var d=Ft,p=nr;Ft=null,Oi(i,o,l),Ft=d,nr=p,Ft!==null&&(nr?(i=Ft,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):Ft.removeChild(l.stateNode));break;case 18:Ft!==null&&(nr?(i=Ft,l=l.stateNode,i.nodeType===8?cf(i.parentNode,l):i.nodeType===1&&cf(i,l),Xn(i)):cf(Ft,l.stateNode));break;case 4:d=Ft,p=nr,Ft=l.stateNode.containerInfo,nr=!0,Oi(i,o,l),Ft=d,nr=p;break;case 0:case 11:case 14:case 15:if(!Kt&&(d=l.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){p=d=d.next;do{var _=p,w=_.destroy;_=_.tag,w!==void 0&&(_&2||_&4)&&Kf(l,o,w),p=p.next}while(p!==d)}Oi(i,o,l);break;case 1:if(!Kt&&(ta(l,o),d=l.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=l.memoizedProps,d.state=l.memoizedState,d.componentWillUnmount()}catch(C){ut(l,o,C)}Oi(i,o,l);break;case 21:Oi(i,o,l);break;case 22:l.mode&1?(Kt=(d=Kt)||l.memoizedState!==null,Oi(i,o,l),Kt=d):Oi(i,o,l);break;default:Oi(i,o,l)}}function jy(i){var o=i.updateQueue;if(o!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new H0),o.forEach(function(d){var p=nR.bind(null,i,d);l.has(d)||(l.add(d),d.then(p,p))})}}function rr(i,o){var l=o.deletions;if(l!==null)for(var d=0;d<l.length;d++){var p=l[d];try{var _=i,w=o,C=w;e:for(;C!==null;){switch(C.tag){case 5:Ft=C.stateNode,nr=!1;break e;case 3:Ft=C.stateNode.containerInfo,nr=!0;break e;case 4:Ft=C.stateNode.containerInfo,nr=!0;break e}C=C.return}if(Ft===null)throw Error(t(160));Uy(_,w,p),Ft=null,nr=!1;var P=p.alternate;P!==null&&(P.return=null),p.return=null}catch(B){ut(p,o,B)}}if(o.subtreeFlags&12854)for(o=o.child;o!==null;)zy(o,i),o=o.sibling}function zy(i,o){var l=i.alternate,d=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(rr(o,i),Ir(i),d&4){try{Dl(3,i,i.return),jc(3,i)}catch(he){ut(i,i.return,he)}try{Dl(5,i,i.return)}catch(he){ut(i,i.return,he)}}break;case 1:rr(o,i),Ir(i),d&512&&l!==null&&ta(l,l.return);break;case 5:if(rr(o,i),Ir(i),d&512&&l!==null&&ta(l,l.return),i.flags&32){var p=i.stateNode;try{_i(p,"")}catch(he){ut(i,i.return,he)}}if(d&4&&(p=i.stateNode,p!=null)){var _=i.memoizedProps,w=l!==null?l.memoizedProps:_,C=i.type,P=i.updateQueue;if(i.updateQueue=null,P!==null)try{C==="input"&&_.type==="radio"&&_.name!=null&&Wa(p,_),Za(C,w);var B=Za(C,_);for(w=0;w<P.length;w+=2){var Y=P[w],J=P[w+1];Y==="style"?Ya(p,J):Y==="dangerouslySetInnerHTML"?Ka(p,J):Y==="children"?_i(p,J):X(p,Y,J,B)}switch(C){case"input":qa(p,_);break;case"textarea":_o(p,_);break;case"select":var Q=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!_.multiple;var se=_.value;se!=null?Mr(p,!!_.multiple,se,!1):Q!==!!_.multiple&&(_.defaultValue!=null?Mr(p,!!_.multiple,_.defaultValue,!0):Mr(p,!!_.multiple,_.multiple?[]:"",!1))}p[Tl]=_}catch(he){ut(i,i.return,he)}}break;case 6:if(rr(o,i),Ir(i),d&4){if(i.stateNode===null)throw Error(t(162));p=i.stateNode,_=i.memoizedProps;try{p.nodeValue=_}catch(he){ut(i,i.return,he)}}break;case 3:if(rr(o,i),Ir(i),d&4&&l!==null&&l.memoizedState.isDehydrated)try{Xn(o.containerInfo)}catch(he){ut(i,i.return,he)}break;case 4:rr(o,i),Ir(i);break;case 13:rr(o,i),Ir(i),p=i.child,p.flags&8192&&(_=p.memoizedState!==null,p.stateNode.isHidden=_,!_||p.alternate!==null&&p.alternate.memoizedState!==null||(ep=Ye())),d&4&&jy(i);break;case 22:if(Y=l!==null&&l.memoizedState!==null,i.mode&1?(Kt=(B=Kt)||Y,rr(o,i),Kt=B):rr(o,i),Ir(i),d&8192){if(B=i.memoizedState!==null,(i.stateNode.isHidden=B)&&!Y&&i.mode&1)for(le=i,Y=i.child;Y!==null;){for(J=le=Y;le!==null;){switch(Q=le,se=Q.child,Q.tag){case 0:case 11:case 14:case 15:Dl(4,Q,Q.return);break;case 1:ta(Q,Q.return);var ue=Q.stateNode;if(typeof ue.componentWillUnmount=="function"){d=Q,l=Q.return;try{o=d,ue.props=o.memoizedProps,ue.state=o.memoizedState,ue.componentWillUnmount()}catch(he){ut(d,l,he)}}break;case 5:ta(Q,Q.return);break;case 22:if(Q.memoizedState!==null){Wy(J);continue}}se!==null?(se.return=Q,le=se):Wy(J)}Y=Y.sibling}e:for(Y=null,J=i;;){if(J.tag===5){if(Y===null){Y=J;try{p=J.stateNode,B?(_=p.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(C=J.stateNode,P=J.memoizedProps.style,w=P!=null&&P.hasOwnProperty("display")?P.display:null,C.style.display=Qa("display",w))}catch(he){ut(i,i.return,he)}}}else if(J.tag===6){if(Y===null)try{J.stateNode.nodeValue=B?"":J.memoizedProps}catch(he){ut(i,i.return,he)}}else if((J.tag!==22&&J.tag!==23||J.memoizedState===null||J===i)&&J.child!==null){J.child.return=J,J=J.child;continue}if(J===i)break e;for(;J.sibling===null;){if(J.return===null||J.return===i)break e;Y===J&&(Y=null),J=J.return}Y===J&&(Y=null),J.sibling.return=J.return,J=J.sibling}}break;case 19:rr(o,i),Ir(i),d&4&&jy(i);break;case 21:break;default:rr(o,i),Ir(i)}}function Ir(i){var o=i.flags;if(o&2){try{e:{for(var l=i.return;l!==null;){if(Vy(l)){var d=l;break e}l=l.return}throw Error(t(160))}switch(d.tag){case 5:var p=d.stateNode;d.flags&32&&(_i(p,""),d.flags&=-33);var _=Fy(i);Xf(i,_,p);break;case 3:case 4:var w=d.stateNode.containerInfo,C=Fy(i);Yf(i,C,w);break;default:throw Error(t(161))}}catch(P){ut(i,i.return,P)}i.flags&=-3}o&4096&&(i.flags&=-4097)}function K0(i,o,l){le=i,By(i)}function By(i,o,l){for(var d=(i.mode&1)!==0;le!==null;){var p=le,_=p.child;if(p.tag===22&&d){var w=p.memoizedState!==null||Uc;if(!w){var C=p.alternate,P=C!==null&&C.memoizedState!==null||Kt;C=Uc;var B=Kt;if(Uc=w,(Kt=P)&&!B)for(le=p;le!==null;)w=le,P=w.child,w.tag===22&&w.memoizedState!==null?qy(p):P!==null?(P.return=w,le=P):qy(p);for(;_!==null;)le=_,By(_),_=_.sibling;le=p,Uc=C,Kt=B}$y(i)}else p.subtreeFlags&8772&&_!==null?(_.return=p,le=_):$y(i)}}function $y(i){for(;le!==null;){var o=le;if(o.flags&8772){var l=o.alternate;try{if(o.flags&8772)switch(o.tag){case 0:case 11:case 15:Kt||jc(5,o);break;case 1:var d=o.stateNode;if(o.flags&4&&!Kt)if(l===null)d.componentDidMount();else{var p=o.elementType===o.type?l.memoizedProps:tr(o.type,l.memoizedProps);d.componentDidUpdate(p,l.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var _=o.updateQueue;_!==null&&W_(o,_,d);break;case 3:var w=o.updateQueue;if(w!==null){if(l=null,o.child!==null)switch(o.child.tag){case 5:l=o.child.stateNode;break;case 1:l=o.child.stateNode}W_(o,w,l)}break;case 5:var C=o.stateNode;if(l===null&&o.flags&4){l=C;var P=o.memoizedProps;switch(o.type){case"button":case"input":case"select":case"textarea":P.autoFocus&&l.focus();break;case"img":P.src&&(l.src=P.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(o.memoizedState===null){var B=o.alternate;if(B!==null){var Y=B.memoizedState;if(Y!==null){var J=Y.dehydrated;J!==null&&Xn(J)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Kt||o.flags&512&&Qf(o)}catch(Q){ut(o,o.return,Q)}}if(o===i){le=null;break}if(l=o.sibling,l!==null){l.return=o.return,le=l;break}le=o.return}}function Wy(i){for(;le!==null;){var o=le;if(o===i){le=null;break}var l=o.sibling;if(l!==null){l.return=o.return,le=l;break}le=o.return}}function qy(i){for(;le!==null;){var o=le;try{switch(o.tag){case 0:case 11:case 15:var l=o.return;try{jc(4,o)}catch(P){ut(o,l,P)}break;case 1:var d=o.stateNode;if(typeof d.componentDidMount=="function"){var p=o.return;try{d.componentDidMount()}catch(P){ut(o,p,P)}}var _=o.return;try{Qf(o)}catch(P){ut(o,_,P)}break;case 5:var w=o.return;try{Qf(o)}catch(P){ut(o,w,P)}}}catch(P){ut(o,o.return,P)}if(o===i){le=null;break}var C=o.sibling;if(C!==null){C.return=o.return,le=C;break}le=o.return}}var Q0=Math.ceil,zc=de.ReactCurrentDispatcher,Jf=de.ReactCurrentOwner,Fn=de.ReactCurrentBatchConfig,Ue=0,Nt=null,mt=null,Ut=0,Rn=0,na=Pi(0),St=0,Ol=null,Os=0,Bc=0,Zf=0,Ll=null,fn=null,ep=0,ra=1/0,Xr=null,$c=!1,tp=null,Li=null,Wc=!1,Mi=null,qc=0,Ml=0,np=null,Hc=-1,Gc=0;function on(){return Ue&6?Ye():Hc!==-1?Hc:Hc=Ye()}function Vi(i){return i.mode&1?Ue&2&&Ut!==0?Ut&-Ut:b0.transition!==null?(Gc===0&&(Gc=Ts()),Gc):(i=xe,i!==0||(i=window.event,i=i===void 0?16:cl(i.type)),i):1}function ir(i,o,l,d){if(50<Ml)throw Ml=0,np=null,Error(t(185));wi(i,l,d),(!(Ue&2)||i!==Nt)&&(i===Nt&&(!(Ue&2)&&(Bc|=l),St===4&&Fi(i,Ut)),pn(i,d),l===1&&Ue===0&&!(o.mode&1)&&(ra=Ye()+500,wc&&xi()))}function pn(i,o){var l=i.callbackNode;Ur(i,o);var d=ws(i,i===Nt?Ut:0);if(d===0)l!==null&&sl(l),i.callbackNode=null,i.callbackPriority=0;else if(o=d&-d,i.callbackPriority!==o){if(l!=null&&sl(l),o===1)i.tag===0?x0(Gy.bind(null,i)):b_(Gy.bind(null,i)),A0(function(){!(Ue&6)&&xi()}),l=null;else{switch(Ii(d)){case 1:l=vs;break;case 4:l=yi;break;case 16:l=xn;break;case 536870912:l=Gu;break;default:l=xn}l=tv(l,Hy.bind(null,i))}i.callbackPriority=o,i.callbackNode=l}}function Hy(i,o){if(Hc=-1,Gc=0,Ue&6)throw Error(t(327));var l=i.callbackNode;if(ia()&&i.callbackNode!==l)return null;var d=ws(i,i===Nt?Ut:0);if(d===0)return null;if(d&30||d&i.expiredLanes||o)o=Kc(i,d);else{o=d;var p=Ue;Ue|=2;var _=Qy();(Nt!==i||Ut!==o)&&(Xr=null,ra=Ye()+500,Ms(i,o));do try{J0();break}catch(C){Ky(i,C)}while(!0);Ef(),zc.current=_,Ue=p,mt!==null?o=0:(Nt=null,Ut=0,o=St)}if(o!==0){if(o===2&&(p=wn(i),p!==0&&(d=p,o=rp(i,p))),o===1)throw l=Ol,Ms(i,0),Fi(i,d),pn(i,Ye()),l;if(o===6)Fi(i,d);else{if(p=i.current.alternate,!(d&30)&&!Y0(p)&&(o=Kc(i,d),o===2&&(_=wn(i),_!==0&&(d=_,o=rp(i,_))),o===1))throw l=Ol,Ms(i,0),Fi(i,d),pn(i,Ye()),l;switch(i.finishedWork=p,i.finishedLanes=d,o){case 0:case 1:throw Error(t(345));case 2:Vs(i,fn,Xr);break;case 3:if(Fi(i,d),(d&130023424)===d&&(o=ep+500-Ye(),10<o)){if(ws(i,0)!==0)break;if(p=i.suspendedLanes,(p&d)!==d){on(),i.pingedLanes|=i.suspendedLanes&p;break}i.timeoutHandle=uf(Vs.bind(null,i,fn,Xr),o);break}Vs(i,fn,Xr);break;case 4:if(Fi(i,d),(d&4194240)===d)break;for(o=i.eventTimes,p=-1;0<d;){var w=31-nn(d);_=1<<w,w=o[w],w>p&&(p=w),d&=~_}if(d=p,d=Ye()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*Q0(d/1960))-d,10<d){i.timeoutHandle=uf(Vs.bind(null,i,fn,Xr),d);break}Vs(i,fn,Xr);break;case 5:Vs(i,fn,Xr);break;default:throw Error(t(329))}}}return pn(i,Ye()),i.callbackNode===l?Hy.bind(null,i):null}function rp(i,o){var l=Ll;return i.current.memoizedState.isDehydrated&&(Ms(i,o).flags|=256),i=Kc(i,o),i!==2&&(o=fn,fn=l,o!==null&&ip(o)),i}function ip(i){fn===null?fn=i:fn.push.apply(fn,i)}function Y0(i){for(var o=i;;){if(o.flags&16384){var l=o.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var d=0;d<l.length;d++){var p=l[d],_=p.getSnapshot;p=p.value;try{if(!Zn(_(),p))return!1}catch{return!1}}}if(l=o.child,o.subtreeFlags&16384&&l!==null)l.return=o,o=l;else{if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return!0;o=o.return}o.sibling.return=o.return,o=o.sibling}}return!0}function Fi(i,o){for(o&=~Zf,o&=~Bc,i.suspendedLanes|=o,i.pingedLanes&=~o,i=i.expirationTimes;0<o;){var l=31-nn(o),d=1<<l;i[l]=-1,o&=~d}}function Gy(i){if(Ue&6)throw Error(t(327));ia();var o=ws(i,0);if(!(o&1))return pn(i,Ye()),null;var l=Kc(i,o);if(i.tag!==0&&l===2){var d=wn(i);d!==0&&(o=d,l=rp(i,d))}if(l===1)throw l=Ol,Ms(i,0),Fi(i,o),pn(i,Ye()),l;if(l===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=o,Vs(i,fn,Xr),pn(i,Ye()),null}function sp(i,o){var l=Ue;Ue|=1;try{return i(o)}finally{Ue=l,Ue===0&&(ra=Ye()+500,wc&&xi())}}function Ls(i){Mi!==null&&Mi.tag===0&&!(Ue&6)&&ia();var o=Ue;Ue|=1;var l=Fn.transition,d=xe;try{if(Fn.transition=null,xe=1,i)return i()}finally{xe=d,Fn.transition=l,Ue=o,!(Ue&6)&&xi()}}function op(){Rn=na.current,Ze(na)}function Ms(i,o){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,R0(l)),mt!==null)for(l=mt.return;l!==null;){var d=l;switch(mf(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&vc();break;case 3:Zo(),Ze(cn),Ze(qt),kf();break;case 5:Rf(d);break;case 4:Zo();break;case 13:Ze(ot);break;case 19:Ze(ot);break;case 10:wf(d.type._context);break;case 22:case 23:op()}l=l.return}if(Nt=i,mt=i=Ui(i.current,null),Ut=Rn=o,St=0,Ol=null,Zf=Bc=Os=0,fn=Ll=null,xs!==null){for(o=0;o<xs.length;o++)if(l=xs[o],d=l.interleaved,d!==null){l.interleaved=null;var p=d.next,_=l.pending;if(_!==null){var w=_.next;_.next=p,d.next=w}l.pending=d}xs=null}return i}function Ky(i,o){do{var l=mt;try{if(Ef(),xc.current=Lc,bc){for(var d=at.memoizedState;d!==null;){var p=d.queue;p!==null&&(p.pending=null),d=d.next}bc=!1}if(Ds=0,Pt=It=at=null,kl=!1,Pl=0,Jf.current=null,l===null||l.return===null){St=1,Ol=o,mt=null;break}e:{var _=i,w=l.return,C=l,P=o;if(o=Ut,C.flags|=32768,P!==null&&typeof P=="object"&&typeof P.then=="function"){var B=P,Y=C,J=Y.tag;if(!(Y.mode&1)&&(J===0||J===11||J===15)){var Q=Y.alternate;Q?(Y.updateQueue=Q.updateQueue,Y.memoizedState=Q.memoizedState,Y.lanes=Q.lanes):(Y.updateQueue=null,Y.memoizedState=null)}var se=vy(w);if(se!==null){se.flags&=-257,Ey(se,w,C,_,o),se.mode&1&&yy(_,B,o),o=se,P=B;var ue=o.updateQueue;if(ue===null){var he=new Set;he.add(P),o.updateQueue=he}else ue.add(P);break e}else{if(!(o&1)){yy(_,B,o),ap();break e}P=Error(t(426))}}else if(st&&C.mode&1){var dt=vy(w);if(dt!==null){!(dt.flags&65536)&&(dt.flags|=256),Ey(dt,w,C,_,o),yf(ea(P,C));break e}}_=P=ea(P,C),St!==4&&(St=2),Ll===null?Ll=[_]:Ll.push(_),_=w;do{switch(_.tag){case 3:_.flags|=65536,o&=-o,_.lanes|=o;var U=gy(_,P,o);$_(_,U);break e;case 1:C=P;var D=_.type,j=_.stateNode;if(!(_.flags&128)&&(typeof D.getDerivedStateFromError=="function"||j!==null&&typeof j.componentDidCatch=="function"&&(Li===null||!Li.has(j)))){_.flags|=65536,o&=-o,_.lanes|=o;var Z=_y(_,C,o);$_(_,Z);break e}}_=_.return}while(_!==null)}Xy(l)}catch(fe){o=fe,mt===l&&l!==null&&(mt=l=l.return);continue}break}while(!0)}function Qy(){var i=zc.current;return zc.current=Lc,i===null?Lc:i}function ap(){(St===0||St===3||St===2)&&(St=4),Nt===null||!(Os&268435455)&&!(Bc&268435455)||Fi(Nt,Ut)}function Kc(i,o){var l=Ue;Ue|=2;var d=Qy();(Nt!==i||Ut!==o)&&(Xr=null,Ms(i,o));do try{X0();break}catch(p){Ky(i,p)}while(!0);if(Ef(),Ue=l,zc.current=d,mt!==null)throw Error(t(261));return Nt=null,Ut=0,St}function X0(){for(;mt!==null;)Yy(mt)}function J0(){for(;mt!==null&&!qu();)Yy(mt)}function Yy(i){var o=ev(i.alternate,i,Rn);i.memoizedProps=i.pendingProps,o===null?Xy(i):mt=o,Jf.current=null}function Xy(i){var o=i;do{var l=o.alternate;if(i=o.return,o.flags&32768){if(l=q0(l,o),l!==null){l.flags&=32767,mt=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{St=6,mt=null;return}}else if(l=W0(l,o,Rn),l!==null){mt=l;return}if(o=o.sibling,o!==null){mt=o;return}mt=o=i}while(o!==null);St===0&&(St=5)}function Vs(i,o,l){var d=xe,p=Fn.transition;try{Fn.transition=null,xe=1,Z0(i,o,l,d)}finally{Fn.transition=p,xe=d}return null}function Z0(i,o,l,d){do ia();while(Mi!==null);if(Ue&6)throw Error(t(327));l=i.finishedWork;var p=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var _=l.lanes|l.childLanes;if(Ke(i,_),i===Nt&&(mt=Nt=null,Ut=0),!(l.subtreeFlags&2064)&&!(l.flags&2064)||Wc||(Wc=!0,tv(xn,function(){return ia(),null})),_=(l.flags&15990)!==0,l.subtreeFlags&15990||_){_=Fn.transition,Fn.transition=null;var w=xe;xe=1;var C=Ue;Ue|=4,Jf.current=null,G0(i,l),zy(l,i),v0(af),Ci=!!of,af=of=null,i.current=l,K0(l),$d(),Ue=C,xe=w,Fn.transition=_}else i.current=l;if(Wc&&(Wc=!1,Mi=i,qc=p),_=i.pendingLanes,_===0&&(Li=null),Ku(l.stateNode),pn(i,Ye()),o!==null)for(d=i.onRecoverableError,l=0;l<o.length;l++)p=o[l],d(p.value,{componentStack:p.stack,digest:p.digest});if($c)throw $c=!1,i=tp,tp=null,i;return qc&1&&i.tag!==0&&ia(),_=i.pendingLanes,_&1?i===np?Ml++:(Ml=0,np=i):Ml=0,xi(),null}function ia(){if(Mi!==null){var i=Ii(qc),o=Fn.transition,l=xe;try{if(Fn.transition=null,xe=16>i?16:i,Mi===null)var d=!1;else{if(i=Mi,Mi=null,qc=0,Ue&6)throw Error(t(331));var p=Ue;for(Ue|=4,le=i.current;le!==null;){var _=le,w=_.child;if(le.flags&16){var C=_.deletions;if(C!==null){for(var P=0;P<C.length;P++){var B=C[P];for(le=B;le!==null;){var Y=le;switch(Y.tag){case 0:case 11:case 15:Dl(8,Y,_)}var J=Y.child;if(J!==null)J.return=Y,le=J;else for(;le!==null;){Y=le;var Q=Y.sibling,se=Y.return;if(My(Y),Y===B){le=null;break}if(Q!==null){Q.return=se,le=Q;break}le=se}}}var ue=_.alternate;if(ue!==null){var he=ue.child;if(he!==null){ue.child=null;do{var dt=he.sibling;he.sibling=null,he=dt}while(he!==null)}}le=_}}if(_.subtreeFlags&2064&&w!==null)w.return=_,le=w;else e:for(;le!==null;){if(_=le,_.flags&2048)switch(_.tag){case 0:case 11:case 15:Dl(9,_,_.return)}var U=_.sibling;if(U!==null){U.return=_.return,le=U;break e}le=_.return}}var D=i.current;for(le=D;le!==null;){w=le;var j=w.child;if(w.subtreeFlags&2064&&j!==null)j.return=w,le=j;else e:for(w=D;le!==null;){if(C=le,C.flags&2048)try{switch(C.tag){case 0:case 11:case 15:jc(9,C)}}catch(fe){ut(C,C.return,fe)}if(C===w){le=null;break e}var Z=C.sibling;if(Z!==null){Z.return=C.return,le=Z;break e}le=C.return}}if(Ue=p,xi(),En&&typeof En.onPostCommitFiberRoot=="function")try{En.onPostCommitFiberRoot(Es,i)}catch{}d=!0}return d}finally{xe=l,Fn.transition=o}}return!1}function Jy(i,o,l){o=ea(l,o),o=gy(i,o,1),i=Di(i,o,1),o=on(),i!==null&&(wi(i,1,o),pn(i,o))}function ut(i,o,l){if(i.tag===3)Jy(i,i,l);else for(;o!==null;){if(o.tag===3){Jy(o,i,l);break}else if(o.tag===1){var d=o.stateNode;if(typeof o.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(Li===null||!Li.has(d))){i=ea(l,i),i=_y(o,i,1),o=Di(o,i,1),i=on(),o!==null&&(wi(o,1,i),pn(o,i));break}}o=o.return}}function eR(i,o,l){var d=i.pingCache;d!==null&&d.delete(o),o=on(),i.pingedLanes|=i.suspendedLanes&l,Nt===i&&(Ut&l)===l&&(St===4||St===3&&(Ut&130023424)===Ut&&500>Ye()-ep?Ms(i,0):Zf|=l),pn(i,o)}function Zy(i,o){o===0&&(i.mode&1?(o=Ao,Ao<<=1,!(Ao&130023424)&&(Ao=4194304)):o=1);var l=on();i=Kr(i,o),i!==null&&(wi(i,o,l),pn(i,l))}function tR(i){var o=i.memoizedState,l=0;o!==null&&(l=o.retryLane),Zy(i,l)}function nR(i,o){var l=0;switch(i.tag){case 13:var d=i.stateNode,p=i.memoizedState;p!==null&&(l=p.retryLane);break;case 19:d=i.stateNode;break;default:throw Error(t(314))}d!==null&&d.delete(o),Zy(i,l)}var ev;ev=function(i,o,l){if(i!==null)if(i.memoizedProps!==o.pendingProps||cn.current)dn=!0;else{if(!(i.lanes&l)&&!(o.flags&128))return dn=!1,$0(i,o,l);dn=!!(i.flags&131072)}else dn=!1,st&&o.flags&1048576&&D_(o,Ic,o.index);switch(o.lanes=0,o.tag){case 2:var d=o.type;Fc(i,o),i=o.pendingProps;var p=Ho(o,qt.current);Jo(o,l),p=xf(null,o,d,i,p,l);var _=bf();return o.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(o.tag=1,o.memoizedState=null,o.updateQueue=null,hn(d)?(_=!0,Ec(o)):_=!1,o.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,Sf(o),p.updater=Mc,o.stateNode=p,p._reactInternals=o,Ff(o,d,i,l),o=Bf(null,o,d,!0,_,l)):(o.tag=0,st&&_&&pf(o),sn(null,o,p,l),o=o.child),o;case 16:d=o.elementType;e:{switch(Fc(i,o),i=o.pendingProps,p=d._init,d=p(d._payload),o.type=d,p=o.tag=iR(d),i=tr(d,i),p){case 0:o=zf(null,o,d,i,l);break e;case 1:o=Ry(null,o,d,i,l);break e;case 11:o=wy(null,o,d,i,l);break e;case 14:o=Ty(null,o,d,tr(d.type,i),l);break e}throw Error(t(306,d,""))}return o;case 0:return d=o.type,p=o.pendingProps,p=o.elementType===d?p:tr(d,p),zf(i,o,d,p,l);case 1:return d=o.type,p=o.pendingProps,p=o.elementType===d?p:tr(d,p),Ry(i,o,d,p,l);case 3:e:{if(Ay(o),i===null)throw Error(t(387));d=o.pendingProps,_=o.memoizedState,p=_.element,B_(i,o),Pc(o,d,null,l);var w=o.memoizedState;if(d=w.element,_.isDehydrated)if(_={element:d,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},o.updateQueue.baseState=_,o.memoizedState=_,o.flags&256){p=ea(Error(t(423)),o),o=ky(i,o,d,l,p);break e}else if(d!==p){p=ea(Error(t(424)),o),o=ky(i,o,d,l,p);break e}else for(Cn=ki(o.stateNode.containerInfo.firstChild),Sn=o,st=!0,er=null,l=j_(o,null,d,l),o.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Qo(),d===p){o=Yr(i,o,l);break e}sn(i,o,d,l)}o=o.child}return o;case 5:return q_(o),i===null&&_f(o),d=o.type,p=o.pendingProps,_=i!==null?i.memoizedProps:null,w=p.children,lf(d,p)?w=null:_!==null&&lf(d,_)&&(o.flags|=32),Cy(i,o),sn(i,o,w,l),o.child;case 6:return i===null&&_f(o),null;case 13:return Py(i,o,l);case 4:return Cf(o,o.stateNode.containerInfo),d=o.pendingProps,i===null?o.child=Yo(o,null,d,l):sn(i,o,d,l),o.child;case 11:return d=o.type,p=o.pendingProps,p=o.elementType===d?p:tr(d,p),wy(i,o,d,p,l);case 7:return sn(i,o,o.pendingProps,l),o.child;case 8:return sn(i,o,o.pendingProps.children,l),o.child;case 12:return sn(i,o,o.pendingProps.children,l),o.child;case 10:e:{if(d=o.type._context,p=o.pendingProps,_=o.memoizedProps,w=p.value,Xe(Rc,d._currentValue),d._currentValue=w,_!==null)if(Zn(_.value,w)){if(_.children===p.children&&!cn.current){o=Yr(i,o,l);break e}}else for(_=o.child,_!==null&&(_.return=o);_!==null;){var C=_.dependencies;if(C!==null){w=_.child;for(var P=C.firstContext;P!==null;){if(P.context===d){if(_.tag===1){P=Qr(-1,l&-l),P.tag=2;var B=_.updateQueue;if(B!==null){B=B.shared;var Y=B.pending;Y===null?P.next=P:(P.next=Y.next,Y.next=P),B.pending=P}}_.lanes|=l,P=_.alternate,P!==null&&(P.lanes|=l),Tf(_.return,l,o),C.lanes|=l;break}P=P.next}}else if(_.tag===10)w=_.type===o.type?null:_.child;else if(_.tag===18){if(w=_.return,w===null)throw Error(t(341));w.lanes|=l,C=w.alternate,C!==null&&(C.lanes|=l),Tf(w,l,o),w=_.sibling}else w=_.child;if(w!==null)w.return=_;else for(w=_;w!==null;){if(w===o){w=null;break}if(_=w.sibling,_!==null){_.return=w.return,w=_;break}w=w.return}_=w}sn(i,o,p.children,l),o=o.child}return o;case 9:return p=o.type,d=o.pendingProps.children,Jo(o,l),p=Mn(p),d=d(p),o.flags|=1,sn(i,o,d,l),o.child;case 14:return d=o.type,p=tr(d,o.pendingProps),p=tr(d.type,p),Ty(i,o,d,p,l);case 15:return Iy(i,o,o.type,o.pendingProps,l);case 17:return d=o.type,p=o.pendingProps,p=o.elementType===d?p:tr(d,p),Fc(i,o),o.tag=1,hn(d)?(i=!0,Ec(o)):i=!1,Jo(o,l),py(o,d,p),Ff(o,d,p,l),Bf(null,o,d,!0,i,l);case 19:return xy(i,o,l);case 22:return Sy(i,o,l)}throw Error(t(156,o.tag))};function tv(i,o){return Co(i,o)}function rR(i,o,l,d){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=o,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Un(i,o,l,d){return new rR(i,o,l,d)}function lp(i){return i=i.prototype,!(!i||!i.isReactComponent)}function iR(i){if(typeof i=="function")return lp(i)?1:0;if(i!=null){if(i=i.$$typeof,i===V)return 11;if(i===$t)return 14}return 2}function Ui(i,o){var l=i.alternate;return l===null?(l=Un(i.tag,o,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=o,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,o=i.dependencies,l.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function Qc(i,o,l,d,p,_){var w=2;if(d=i,typeof i=="function")lp(i)&&(w=1);else if(typeof i=="string")w=5;else e:switch(i){case b:return Fs(l.children,p,_,o);case S:w=8,p|=8;break;case A:return i=Un(12,l,o,p|2),i.elementType=A,i.lanes=_,i;case k:return i=Un(13,l,o,p),i.elementType=k,i.lanes=_,i;case ct:return i=Un(19,l,o,p),i.elementType=ct,i.lanes=_,i;case He:return Yc(l,p,_,o);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case N:w=10;break e;case O:w=9;break e;case V:w=11;break e;case $t:w=14;break e;case Wt:w=16,d=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return o=Un(w,l,o,p),o.elementType=i,o.type=d,o.lanes=_,o}function Fs(i,o,l,d){return i=Un(7,i,d,o),i.lanes=l,i}function Yc(i,o,l,d){return i=Un(22,i,d,o),i.elementType=He,i.lanes=l,i.stateNode={isHidden:!1},i}function up(i,o,l){return i=Un(6,i,null,o),i.lanes=l,i}function cp(i,o,l){return o=Un(4,i.children!==null?i.children:[],i.key,o),o.lanes=l,o.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},o}function sR(i,o,l,d,p){this.tag=o,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ei(0),this.expirationTimes=Ei(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ei(0),this.identifierPrefix=d,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function hp(i,o,l,d,p,_,w,C,P){return i=new sR(i,o,l,C,P),o===1?(o=1,_===!0&&(o|=8)):o=0,_=Un(3,null,null,o),i.current=_,_.stateNode=i,_.memoizedState={element:d,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Sf(_),i}function oR(i,o,l){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ie,key:d==null?null:""+d,children:i,containerInfo:o,implementation:l}}function nv(i){if(!i)return Ni;i=i._reactInternals;e:{if(Hn(i)!==i||i.tag!==1)throw Error(t(170));var o=i;do{switch(o.tag){case 3:o=o.stateNode.context;break e;case 1:if(hn(o.type)){o=o.stateNode.__reactInternalMemoizedMergedChildContext;break e}}o=o.return}while(o!==null);throw Error(t(171))}if(i.tag===1){var l=i.type;if(hn(l))return N_(i,l,o)}return o}function rv(i,o,l,d,p,_,w,C,P){return i=hp(l,d,!0,i,p,_,w,C,P),i.context=nv(null),l=i.current,d=on(),p=Vi(l),_=Qr(d,p),_.callback=o??null,Di(l,_,p),i.current.lanes=p,wi(i,p,d),pn(i,d),i}function Xc(i,o,l,d){var p=o.current,_=on(),w=Vi(p);return l=nv(l),o.context===null?o.context=l:o.pendingContext=l,o=Qr(_,w),o.payload={element:i},d=d===void 0?null:d,d!==null&&(o.callback=d),i=Di(p,o,w),i!==null&&(ir(i,p,w,_),kc(i,p,w)),w}function Jc(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function iv(i,o){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<o?l:o}}function dp(i,o){iv(i,o),(i=i.alternate)&&iv(i,o)}function aR(){return null}var sv=typeof reportError=="function"?reportError:function(i){console.error(i)};function fp(i){this._internalRoot=i}Zc.prototype.render=fp.prototype.render=function(i){var o=this._internalRoot;if(o===null)throw Error(t(409));Xc(i,o,null,null)},Zc.prototype.unmount=fp.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var o=i.containerInfo;Ls(function(){Xc(null,i,null,null)}),o[Wr]=null}};function Zc(i){this._internalRoot=i}Zc.prototype.unstable_scheduleHydration=function(i){if(i){var o=Zu();i={blockedOn:null,target:i,priority:o};for(var l=0;l<gr.length&&o!==0&&o<gr[l].priority;l++);gr.splice(l,0,i),l===0&&nc(i)}};function pp(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function eh(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function ov(){}function lR(i,o,l,d,p){if(p){if(typeof d=="function"){var _=d;d=function(){var B=Jc(w);_.call(B)}}var w=rv(o,d,i,0,null,!1,!1,"",ov);return i._reactRootContainer=w,i[Wr]=w.current,El(i.nodeType===8?i.parentNode:i),Ls(),w}for(;p=i.lastChild;)i.removeChild(p);if(typeof d=="function"){var C=d;d=function(){var B=Jc(P);C.call(B)}}var P=hp(i,0,!1,null,null,!1,!1,"",ov);return i._reactRootContainer=P,i[Wr]=P.current,El(i.nodeType===8?i.parentNode:i),Ls(function(){Xc(o,P,l,d)}),P}function th(i,o,l,d,p){var _=l._reactRootContainer;if(_){var w=_;if(typeof p=="function"){var C=p;p=function(){var P=Jc(w);C.call(P)}}Xc(o,w,i,p)}else w=lR(l,o,i,p,d);return Jc(w)}Xu=function(i){switch(i.tag){case 3:var o=i.stateNode;if(o.current.memoizedState.isDehydrated){var l=vi(o.pendingLanes);l!==0&&(Ti(o,l|1),pn(o,Ye()),!(Ue&6)&&(ra=Ye()+500,xi()))}break;case 13:Ls(function(){var d=Kr(i,1);if(d!==null){var p=on();ir(d,i,1,p)}}),dp(i,1)}},ko=function(i){if(i.tag===13){var o=Kr(i,134217728);if(o!==null){var l=on();ir(o,i,134217728,l)}dp(i,134217728)}},Ju=function(i){if(i.tag===13){var o=Vi(i),l=Kr(i,o);if(l!==null){var d=on();ir(l,i,o,d)}dp(i,o)}},Zu=function(){return xe},ec=function(i,o){var l=xe;try{return xe=i,o()}finally{xe=l}},vo=function(i,o,l){switch(o){case"input":if(qa(i,l),o=l.name,l.type==="radio"&&o!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),o=0;o<l.length;o++){var d=l[o];if(d!==i&&d.form===i.form){var p=yc(d);if(!p)throw Error(t(90));fo(d),qa(d,p)}}}break;case"textarea":_o(i,l);break;case"select":o=l.value,o!=null&&Mr(i,!!l.multiple,o,!1)}},ms=sp,tl=Ls;var uR={usingClientEntryPoint:!1,Events:[Il,Wo,yc,pr,el,sp]},Vl={findFiberByHostInstance:As,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},cR={bundleType:Vl.bundleType,version:Vl.version,rendererPackageName:Vl.rendererPackageName,rendererConfig:Vl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:de.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=il(i),i===null?null:i.stateNode},findFiberByHostInstance:Vl.findFiberByHostInstance||aR,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nh.isDisabled&&nh.supportsFiber)try{Es=nh.inject(cR),En=nh}catch{}}return mn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uR,mn.createPortal=function(i,o){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!pp(o))throw Error(t(200));return oR(i,o,null,l)},mn.createRoot=function(i,o){if(!pp(i))throw Error(t(299));var l=!1,d="",p=sv;return o!=null&&(o.unstable_strictMode===!0&&(l=!0),o.identifierPrefix!==void 0&&(d=o.identifierPrefix),o.onRecoverableError!==void 0&&(p=o.onRecoverableError)),o=hp(i,1,!1,null,null,l,!1,d,p),i[Wr]=o.current,El(i.nodeType===8?i.parentNode:i),new fp(o)},mn.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var o=i._reactInternals;if(o===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=il(o),i=i===null?null:i.stateNode,i},mn.flushSync=function(i){return Ls(i)},mn.hydrate=function(i,o,l){if(!eh(o))throw Error(t(200));return th(null,i,o,!0,l)},mn.hydrateRoot=function(i,o,l){if(!pp(i))throw Error(t(405));var d=l!=null&&l.hydratedSources||null,p=!1,_="",w=sv;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(_=l.identifierPrefix),l.onRecoverableError!==void 0&&(w=l.onRecoverableError)),o=rv(o,null,i,1,l??null,p,!1,_,w),i[Wr]=o.current,El(i),d)for(i=0;i<d.length;i++)l=d[i],p=l._getVersion,p=p(l._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[l,p]:o.mutableSourceEagerHydrationData.push(l,p);return new Zc(o)},mn.render=function(i,o,l){if(!eh(o))throw Error(t(200));return th(null,i,o,!1,l)},mn.unmountComponentAtNode=function(i){if(!eh(i))throw Error(t(40));return i._reactRootContainer?(Ls(function(){th(null,null,i,!1,function(){i._reactRootContainer=null,i[Wr]=null})}),!0):!1},mn.unstable_batchedUpdates=sp,mn.unstable_renderSubtreeIntoContainer=function(i,o,l,d){if(!eh(l))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return th(i,o,l,!1,d)},mn.version="18.3.1-next-f1338f8080-20240426",mn}var pv;function vR(){if(pv)return _p.exports;pv=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),_p.exports=yR(),_p.exports}var mv;function ER(){if(mv)return rh;mv=1;var n=vR();return rh.createRoot=n.createRoot,rh.hydrateRoot=n.hydrateRoot,rh}var wR=ER(),Ul={},gv;function TR(){if(gv)return Ul;gv=1,Object.defineProperty(Ul,"__esModule",{value:!0}),Ul.parse=u,Ul.serialize=m;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,r=/^[\u0020-\u003A\u003D-\u007E]*$/,s=Object.prototype.toString,a=(()=>{const T=function(){};return T.prototype=Object.create(null),T})();function u(T,R){const x=new a,$=T.length;if($<2)return x;const L=(R==null?void 0:R.decode)||y;let q=0;do{const ee=T.indexOf("=",q);if(ee===-1)break;const X=T.indexOf(";",q),de=X===-1?$:X;if(ee>de){q=T.lastIndexOf(";",ee-1)+1;continue}const Ce=h(T,q,ee),Ie=f(T,ee,Ce),b=T.slice(Ce,Ie);if(x[b]===void 0){let S=h(T,ee+1,de),A=f(T,de,S);const N=L(T.slice(S,A));x[b]=N}q=de+1}while(q<$);return x}function h(T,R,x){do{const $=T.charCodeAt(R);if($!==32&&$!==9)return R}while(++R<x);return x}function f(T,R,x){for(;R>x;){const $=T.charCodeAt(--R);if($!==32&&$!==9)return R+1}return x}function m(T,R,x){const $=(x==null?void 0:x.encode)||encodeURIComponent;if(!n.test(T))throw new TypeError(`argument name is invalid: ${T}`);const L=$(R);if(!e.test(L))throw new TypeError(`argument val is invalid: ${R}`);let q=T+"="+L;if(!x)return q;if(x.maxAge!==void 0){if(!Number.isInteger(x.maxAge))throw new TypeError(`option maxAge is invalid: ${x.maxAge}`);q+="; Max-Age="+x.maxAge}if(x.domain){if(!t.test(x.domain))throw new TypeError(`option domain is invalid: ${x.domain}`);q+="; Domain="+x.domain}if(x.path){if(!r.test(x.path))throw new TypeError(`option path is invalid: ${x.path}`);q+="; Path="+x.path}if(x.expires){if(!E(x.expires)||!Number.isFinite(x.expires.valueOf()))throw new TypeError(`option expires is invalid: ${x.expires}`);q+="; Expires="+x.expires.toUTCString()}if(x.httpOnly&&(q+="; HttpOnly"),x.secure&&(q+="; Secure"),x.partitioned&&(q+="; Partitioned"),x.priority)switch(typeof x.priority=="string"?x.priority.toLowerCase():void 0){case"low":q+="; Priority=Low";break;case"medium":q+="; Priority=Medium";break;case"high":q+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${x.priority}`)}if(x.sameSite)switch(typeof x.sameSite=="string"?x.sameSite.toLowerCase():x.sameSite){case!0:case"strict":q+="; SameSite=Strict";break;case"lax":q+="; SameSite=Lax";break;case"none":q+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${x.sameSite}`)}return q}function y(T){if(T.indexOf("%")===-1)return T;try{return decodeURIComponent(T)}catch{return T}}function E(T){return s.call(T)==="[object Date]"}return Ul}TR();/**
 * react-router v7.1.5
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var _v="popstate";function IR(n={}){function e(r,s){let{pathname:a,search:u,hash:h}=r.location;return $p("",{pathname:a,search:u,hash:h},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function t(r,s){return typeof s=="string"?s:cu(s)}return CR(e,t,null,n)}function lt(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function xr(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function SR(){return Math.random().toString(36).substring(2,10)}function yv(n,e){return{usr:n.state,key:n.key,idx:e}}function $p(n,e,t=null,r){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?xa(e):e,state:t,key:e&&e.key||r||SR()}}function cu({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function xa(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let r=n.indexOf("?");r>=0&&(e.search=n.substring(r),n=n.substring(0,r)),n&&(e.pathname=n)}return e}function CR(n,e,t,r={}){let{window:s=document.defaultView,v5Compat:a=!1}=r,u=s.history,h="POP",f=null,m=y();m==null&&(m=0,u.replaceState({...u.state,idx:m},""));function y(){return(u.state||{idx:null}).idx}function E(){h="POP";let L=y(),q=L==null?null:L-m;m=L,f&&f({action:h,location:$.location,delta:q})}function T(L,q){h="PUSH";let ee=$p($.location,L,q);m=y()+1;let X=yv(ee,m),de=$.createHref(ee);try{u.pushState(X,"",de)}catch(Ce){if(Ce instanceof DOMException&&Ce.name==="DataCloneError")throw Ce;s.location.assign(de)}a&&f&&f({action:h,location:$.location,delta:1})}function R(L,q){h="REPLACE";let ee=$p($.location,L,q);m=y();let X=yv(ee,m),de=$.createHref(ee);u.replaceState(X,"",de),a&&f&&f({action:h,location:$.location,delta:0})}function x(L){let q=s.location.origin!=="null"?s.location.origin:s.location.href,ee=typeof L=="string"?L:cu(L);return ee=ee.replace(/ $/,"%20"),lt(q,`No window.location.(origin|href) available to create URL for href: ${ee}`),new URL(ee,q)}let $={get action(){return h},get location(){return n(s,u)},listen(L){if(f)throw new Error("A history only accepts one active listener");return s.addEventListener(_v,E),f=L,()=>{s.removeEventListener(_v,E),f=null}},createHref(L){return e(s,L)},createURL:x,encodeLocation(L){let q=x(L);return{pathname:q.pathname,search:q.search,hash:q.hash}},push:T,replace:R,go(L){return u.go(L)}};return $}function Ow(n,e,t="/"){return RR(n,e,t,!1)}function RR(n,e,t,r){let s=typeof e=="string"?xa(e):e,a=es(s.pathname||"/",t);if(a==null)return null;let u=Lw(n);AR(u);let h=null;for(let f=0;h==null&&f<u.length;++f){let m=FR(a);h=MR(u[f],m,r)}return h}function Lw(n,e=[],t=[],r=""){let s=(a,u,h)=>{let f={relativePath:h===void 0?a.path||"":h,caseSensitive:a.caseSensitive===!0,childrenIndex:u,route:a};f.relativePath.startsWith("/")&&(lt(f.relativePath.startsWith(r),`Absolute route path "${f.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),f.relativePath=f.relativePath.slice(r.length));let m=ii([r,f.relativePath]),y=t.concat(f);a.children&&a.children.length>0&&(lt(a.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),Lw(a.children,e,y,m)),!(a.path==null&&!a.index)&&e.push({path:m,score:OR(m,a.index),routesMeta:y})};return n.forEach((a,u)=>{var h;if(a.path===""||!((h=a.path)!=null&&h.includes("?")))s(a,u);else for(let f of Mw(a.path))s(a,u,f)}),e}function Mw(n){let e=n.split("/");if(e.length===0)return[];let[t,...r]=e,s=t.endsWith("?"),a=t.replace(/\?$/,"");if(r.length===0)return s?[a,""]:[a];let u=Mw(r.join("/")),h=[];return h.push(...u.map(f=>f===""?a:[a,f].join("/"))),s&&h.push(...u),h.map(f=>n.startsWith("/")&&f===""?"/":f)}function AR(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:LR(e.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}var kR=/^:[\w-]+$/,PR=3,NR=2,xR=1,bR=10,DR=-2,vv=n=>n==="*";function OR(n,e){let t=n.split("/"),r=t.length;return t.some(vv)&&(r+=DR),e&&(r+=NR),t.filter(s=>!vv(s)).reduce((s,a)=>s+(kR.test(a)?PR:a===""?xR:bR),r)}function LR(n,e){return n.length===e.length&&n.slice(0,-1).every((r,s)=>r===e[s])?n[n.length-1]-e[e.length-1]:0}function MR(n,e,t=!1){let{routesMeta:r}=n,s={},a="/",u=[];for(let h=0;h<r.length;++h){let f=r[h],m=h===r.length-1,y=a==="/"?e:e.slice(a.length)||"/",E=Nh({path:f.relativePath,caseSensitive:f.caseSensitive,end:m},y),T=f.route;if(!E&&m&&t&&!r[r.length-1].route.index&&(E=Nh({path:f.relativePath,caseSensitive:f.caseSensitive,end:!1},y)),!E)return null;Object.assign(s,E.params),u.push({params:s,pathname:ii([a,E.pathname]),pathnameBase:BR(ii([a,E.pathnameBase])),route:T}),E.pathnameBase!=="/"&&(a=ii([a,E.pathnameBase]))}return u}function Nh(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,r]=VR(n.path,n.caseSensitive,n.end),s=e.match(t);if(!s)return null;let a=s[0],u=a.replace(/(.)\/+$/,"$1"),h=s.slice(1);return{params:r.reduce((m,{paramName:y,isOptional:E},T)=>{if(y==="*"){let x=h[T]||"";u=a.slice(0,a.length-x.length).replace(/(.)\/+$/,"$1")}const R=h[T];return E&&!R?m[y]=void 0:m[y]=(R||"").replace(/%2F/g,"/"),m},{}),pathname:a,pathnameBase:u,pattern:n}}function VR(n,e=!1,t=!0){xr(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let r=[],s="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,h,f)=>(r.push({paramName:h,isOptional:f!=null}),f?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(r.push({paramName:"*"}),s+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?s+="\\/*$":n!==""&&n!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),r]}function FR(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return xr(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function es(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,r=n.charAt(t);return r&&r!=="/"?null:n.slice(t)||"/"}function UR(n,e="/"){let{pathname:t,search:r="",hash:s=""}=typeof n=="string"?xa(n):n;return{pathname:t?t.startsWith("/")?t:jR(t,e):e,search:$R(r),hash:WR(s)}}function jR(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(s=>{s===".."?t.length>1&&t.pop():s!=="."&&t.push(s)}),t.length>1?t.join("/"):"/"}function Ep(n,e,t,r){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function zR(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Vw(n){let e=zR(n);return e.map((t,r)=>r===e.length-1?t.pathname:t.pathnameBase)}function Fw(n,e,t,r=!1){let s;typeof n=="string"?s=xa(n):(s={...n},lt(!s.pathname||!s.pathname.includes("?"),Ep("?","pathname","search",s)),lt(!s.pathname||!s.pathname.includes("#"),Ep("#","pathname","hash",s)),lt(!s.search||!s.search.includes("#"),Ep("#","search","hash",s)));let a=n===""||s.pathname==="",u=a?"/":s.pathname,h;if(u==null)h=t;else{let E=e.length-1;if(!r&&u.startsWith("..")){let T=u.split("/");for(;T[0]==="..";)T.shift(),E-=1;s.pathname=T.join("/")}h=E>=0?e[E]:"/"}let f=UR(s,h),m=u&&u!=="/"&&u.endsWith("/"),y=(a||u===".")&&t.endsWith("/");return!f.pathname.endsWith("/")&&(m||y)&&(f.pathname+="/"),f}var ii=n=>n.join("/").replace(/\/\/+/g,"/"),BR=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),$R=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,WR=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function qR(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var Uw=["POST","PUT","PATCH","DELETE"];new Set(Uw);var HR=["GET",...Uw];new Set(HR);var ba=z.createContext(null);ba.displayName="DataRouter";var hd=z.createContext(null);hd.displayName="DataRouterState";var jw=z.createContext({isTransitioning:!1});jw.displayName="ViewTransition";var GR=z.createContext(new Map);GR.displayName="Fetchers";var KR=z.createContext(null);KR.displayName="Await";var Dr=z.createContext(null);Dr.displayName="Navigation";var Su=z.createContext(null);Su.displayName="Location";var pi=z.createContext({outlet:null,matches:[],isDataRoute:!1});pi.displayName="Route";var Dm=z.createContext(null);Dm.displayName="RouteError";function QR(n,{relative:e}={}){lt(Cu(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:r}=z.useContext(Dr),{hash:s,pathname:a,search:u}=Ru(n,{relative:e}),h=a;return t!=="/"&&(h=a==="/"?t:ii([t,a])),r.createHref({pathname:h,search:u,hash:s})}function Cu(){return z.useContext(Su)!=null}function eo(){return lt(Cu(),"useLocation() may be used only in the context of a <Router> component."),z.useContext(Su).location}var zw="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Bw(n){z.useContext(Dr).static||z.useLayoutEffect(n)}function Om(){let{isDataRoute:n}=z.useContext(pi);return n?lA():YR()}function YR(){lt(Cu(),"useNavigate() may be used only in the context of a <Router> component.");let n=z.useContext(ba),{basename:e,navigator:t}=z.useContext(Dr),{matches:r}=z.useContext(pi),{pathname:s}=eo(),a=JSON.stringify(Vw(r)),u=z.useRef(!1);return Bw(()=>{u.current=!0}),z.useCallback((f,m={})=>{if(xr(u.current,zw),!u.current)return;if(typeof f=="number"){t.go(f);return}let y=Fw(f,JSON.parse(a),s,m.relative==="path");n==null&&e!=="/"&&(y.pathname=y.pathname==="/"?e:ii([e,y.pathname])),(m.replace?t.replace:t.push)(y,m.state,m)},[e,t,a,s,n])}z.createContext(null);function Ru(n,{relative:e}={}){let{matches:t}=z.useContext(pi),{pathname:r}=eo(),s=JSON.stringify(Vw(t));return z.useMemo(()=>Fw(n,JSON.parse(s),r,e==="path"),[n,s,r,e])}function XR(n,e){return $w(n,e)}function $w(n,e,t,r){var ee;lt(Cu(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s,static:a}=z.useContext(Dr),{matches:u}=z.useContext(pi),h=u[u.length-1],f=h?h.params:{},m=h?h.pathname:"/",y=h?h.pathnameBase:"/",E=h&&h.route;{let X=E&&E.path||"";Ww(m,!E||X.endsWith("*")||X.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${X}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${X}"> to <Route path="${X==="/"?"*":`${X}/*`}">.`)}let T=eo(),R;if(e){let X=typeof e=="string"?xa(e):e;lt(y==="/"||((ee=X.pathname)==null?void 0:ee.startsWith(y)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${X.pathname}" was given in the \`location\` prop.`),R=X}else R=T;let x=R.pathname||"/",$=x;if(y!=="/"){let X=y.replace(/^\//,"").split("/");$="/"+x.replace(/^\//,"").split("/").slice(X.length).join("/")}let L=!a&&t&&t.matches&&t.matches.length>0?t.matches:Ow(n,{pathname:$});xr(E||L!=null,`No routes matched location "${R.pathname}${R.search}${R.hash}" `),xr(L==null||L[L.length-1].route.element!==void 0||L[L.length-1].route.Component!==void 0||L[L.length-1].route.lazy!==void 0,`Matched leaf route at location "${R.pathname}${R.search}${R.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let q=nA(L&&L.map(X=>Object.assign({},X,{params:Object.assign({},f,X.params),pathname:ii([y,s.encodeLocation?s.encodeLocation(X.pathname).pathname:X.pathname]),pathnameBase:X.pathnameBase==="/"?y:ii([y,s.encodeLocation?s.encodeLocation(X.pathnameBase).pathname:X.pathnameBase])})),u,t,r);return e&&q?z.createElement(Su.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...R},navigationType:"POP"}},q):q}function JR(){let n=aA(),e=qR(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,r="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:r},a={padding:"2px 4px",backgroundColor:r},u=null;return console.error("Error handled by React Router default ErrorBoundary:",n),u=z.createElement(z.Fragment,null,z.createElement("p",null,"💿 Hey developer 👋"),z.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",z.createElement("code",{style:a},"ErrorBoundary")," or"," ",z.createElement("code",{style:a},"errorElement")," prop on your route.")),z.createElement(z.Fragment,null,z.createElement("h2",null,"Unexpected Application Error!"),z.createElement("h3",{style:{fontStyle:"italic"}},e),t?z.createElement("pre",{style:s},t):null,u)}var ZR=z.createElement(JR,null),eA=class extends z.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){console.error("React Router caught the following error during render",n,e)}render(){return this.state.error!==void 0?z.createElement(pi.Provider,{value:this.props.routeContext},z.createElement(Dm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function tA({routeContext:n,match:e,children:t}){let r=z.useContext(ba);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),z.createElement(pi.Provider,{value:n},t)}function nA(n,e=[],t=null,r=null){if(n==null){if(!t)return null;if(t.errors)n=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let s=n,a=t==null?void 0:t.errors;if(a!=null){let f=s.findIndex(m=>m.route.id&&(a==null?void 0:a[m.route.id])!==void 0);lt(f>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(",")}`),s=s.slice(0,Math.min(s.length,f+1))}let u=!1,h=-1;if(t)for(let f=0;f<s.length;f++){let m=s[f];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(h=f),m.route.id){let{loaderData:y,errors:E}=t,T=m.route.loader&&!y.hasOwnProperty(m.route.id)&&(!E||E[m.route.id]===void 0);if(m.route.lazy||T){u=!0,h>=0?s=s.slice(0,h+1):s=[s[0]];break}}}return s.reduceRight((f,m,y)=>{let E,T=!1,R=null,x=null;t&&(E=a&&m.route.id?a[m.route.id]:void 0,R=m.route.errorElement||ZR,u&&(h<0&&y===0?(Ww("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),T=!0,x=null):h===y&&(T=!0,x=m.route.hydrateFallbackElement||null)));let $=e.concat(s.slice(0,y+1)),L=()=>{let q;return E?q=R:T?q=x:m.route.Component?q=z.createElement(m.route.Component,null):m.route.element?q=m.route.element:q=f,z.createElement(tA,{match:m,routeContext:{outlet:f,matches:$,isDataRoute:t!=null},children:q})};return t&&(m.route.ErrorBoundary||m.route.errorElement||y===0)?z.createElement(eA,{location:t.location,revalidation:t.revalidation,component:R,error:E,children:L(),routeContext:{outlet:null,matches:$,isDataRoute:!0}}):L()},null)}function Lm(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function rA(n){let e=z.useContext(ba);return lt(e,Lm(n)),e}function iA(n){let e=z.useContext(hd);return lt(e,Lm(n)),e}function sA(n){let e=z.useContext(pi);return lt(e,Lm(n)),e}function Mm(n){let e=sA(n),t=e.matches[e.matches.length-1];return lt(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function oA(){return Mm("useRouteId")}function aA(){var r;let n=z.useContext(Dm),e=iA("useRouteError"),t=Mm("useRouteError");return n!==void 0?n:(r=e.errors)==null?void 0:r[t]}function lA(){let{router:n}=rA("useNavigate"),e=Mm("useNavigate"),t=z.useRef(!1);return Bw(()=>{t.current=!0}),z.useCallback(async(s,a={})=>{xr(t.current,zw),t.current&&(typeof s=="number"?n.navigate(s):await n.navigate(s,{fromRouteId:e,...a}))},[n,e])}var Ev={};function Ww(n,e,t){!e&&!Ev[n]&&(Ev[n]=!0,xr(!1,t))}z.memo(uA);function uA({routes:n,future:e,state:t}){return $w(n,void 0,t,e)}function aa(n){lt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function cA({basename:n="/",children:e=null,location:t,navigationType:r="POP",navigator:s,static:a=!1}){lt(!Cu(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let u=n.replace(/^\/*/,"/"),h=z.useMemo(()=>({basename:u,navigator:s,static:a,future:{}}),[u,s,a]);typeof t=="string"&&(t=xa(t));let{pathname:f="/",search:m="",hash:y="",state:E=null,key:T="default"}=t,R=z.useMemo(()=>{let x=es(f,u);return x==null?null:{location:{pathname:x,search:m,hash:y,state:E,key:T},navigationType:r}},[u,f,m,y,E,T,r]);return xr(R!=null,`<Router basename="${u}"> is not able to match the URL "${f}${m}${y}" because it does not start with the basename, so the <Router> won't render anything.`),R==null?null:z.createElement(Dr.Provider,{value:h},z.createElement(Su.Provider,{children:e,value:R}))}function hA({children:n,location:e}){return XR(Wp(n),e)}function Wp(n,e=[]){let t=[];return z.Children.forEach(n,(r,s)=>{if(!z.isValidElement(r))return;let a=[...e,s];if(r.type===z.Fragment){t.push.apply(t,Wp(r.props.children,a));return}lt(r.type===aa,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),lt(!r.props.index||!r.props.children,"An index route cannot have child routes.");let u={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(u.children=Wp(r.props.children,a)),t.push(u)}),t}var mh="get",gh="application/x-www-form-urlencoded";function dd(n){return n!=null&&typeof n.tagName=="string"}function dA(n){return dd(n)&&n.tagName.toLowerCase()==="button"}function fA(n){return dd(n)&&n.tagName.toLowerCase()==="form"}function pA(n){return dd(n)&&n.tagName.toLowerCase()==="input"}function mA(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function gA(n,e){return n.button===0&&(!e||e==="_self")&&!mA(n)}var ih=null;function _A(){if(ih===null)try{new FormData(document.createElement("form"),0),ih=!1}catch{ih=!0}return ih}var yA=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function wp(n){return n!=null&&!yA.has(n)?(xr(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${gh}"`),null):n}function vA(n,e){let t,r,s,a,u;if(fA(n)){let h=n.getAttribute("action");r=h?es(h,e):null,t=n.getAttribute("method")||mh,s=wp(n.getAttribute("enctype"))||gh,a=new FormData(n)}else if(dA(n)||pA(n)&&(n.type==="submit"||n.type==="image")){let h=n.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let f=n.getAttribute("formaction")||h.getAttribute("action");if(r=f?es(f,e):null,t=n.getAttribute("formmethod")||h.getAttribute("method")||mh,s=wp(n.getAttribute("formenctype"))||wp(h.getAttribute("enctype"))||gh,a=new FormData(h,n),!_A()){let{name:m,type:y,value:E}=n;if(y==="image"){let T=m?`${m}.`:"";a.append(`${T}x`,"0"),a.append(`${T}y`,"0")}else m&&a.append(m,E)}}else{if(dd(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=mh,r=null,s=gh,u=n}return a&&s==="text/plain"&&(u=a,a=void 0),{action:r,method:t.toLowerCase(),encType:s,formData:a,body:u}}function Vm(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}async function EA(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function wA(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function TA(n,e,t){let r=await Promise.all(n.map(async s=>{let a=e.routes[s.route.id];if(a){let u=await EA(a,t);return u.links?u.links():[]}return[]}));return RA(r.flat(1).filter(wA).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function wv(n,e,t,r,s,a){let u=(f,m)=>t[m]?f.route.id!==t[m].route.id:!0,h=(f,m)=>{var y;return t[m].pathname!==f.pathname||((y=t[m].route.path)==null?void 0:y.endsWith("*"))&&t[m].params["*"]!==f.params["*"]};return a==="assets"?e.filter((f,m)=>u(f,m)||h(f,m)):a==="data"?e.filter((f,m)=>{var E;let y=r.routes[f.route.id];if(!y||!y.hasLoader)return!1;if(u(f,m)||h(f,m))return!0;if(f.route.shouldRevalidate){let T=f.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:((E=t[0])==null?void 0:E.params)||{},nextUrl:new URL(n,window.origin),nextParams:f.params,defaultShouldRevalidate:!0});if(typeof T=="boolean")return T}return!0}):[]}function IA(n,e){return SA(n.map(t=>{let r=e.routes[t.route.id];if(!r)return[];let s=[r.module];return r.imports&&(s=s.concat(r.imports)),s}).flat(1))}function SA(n){return[...new Set(n)]}function CA(n){let e={},t=Object.keys(n).sort();for(let r of t)e[r]=n[r];return e}function RA(n,e){let t=new Set;return new Set(e),n.reduce((r,s)=>{let a=JSON.stringify(CA(s));return t.has(a)||(t.add(a),r.push({key:a,link:s})),r},[])}function AA(n){let e=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function kA(){let n=z.useContext(ba);return Vm(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function PA(){let n=z.useContext(hd);return Vm(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Fm=z.createContext(void 0);Fm.displayName="FrameworkContext";function qw(){let n=z.useContext(Fm);return Vm(n,"You must render this element inside a <HydratedRouter> element"),n}function NA(n,e){let t=z.useContext(Fm),[r,s]=z.useState(!1),[a,u]=z.useState(!1),{onFocus:h,onBlur:f,onMouseEnter:m,onMouseLeave:y,onTouchStart:E}=e,T=z.useRef(null);z.useEffect(()=>{if(n==="render"&&u(!0),n==="viewport"){let $=q=>{q.forEach(ee=>{u(ee.isIntersecting)})},L=new IntersectionObserver($,{threshold:.5});return T.current&&L.observe(T.current),()=>{L.disconnect()}}},[n]),z.useEffect(()=>{if(r){let $=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout($)}}},[r]);let R=()=>{s(!0)},x=()=>{s(!1),u(!1)};return t?n!=="intent"?[a,T,{}]:[a,T,{onFocus:jl(h,R),onBlur:jl(f,x),onMouseEnter:jl(m,R),onMouseLeave:jl(y,x),onTouchStart:jl(E,R)}]:[!1,T,{}]}function jl(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function xA({page:n,...e}){let{router:t}=kA(),r=z.useMemo(()=>Ow(t.routes,n,t.basename),[t.routes,n,t.basename]);return r?z.createElement(DA,{page:n,matches:r,...e}):null}function bA(n){let{manifest:e,routeModules:t}=qw(),[r,s]=z.useState([]);return z.useEffect(()=>{let a=!1;return TA(n,e,t).then(u=>{a||s(u)}),()=>{a=!0}},[n,e,t]),r}function DA({page:n,matches:e,...t}){let r=eo(),{manifest:s,routeModules:a}=qw(),{loaderData:u,matches:h}=PA(),f=z.useMemo(()=>wv(n,e,h,s,r,"data"),[n,e,h,s,r]),m=z.useMemo(()=>wv(n,e,h,s,r,"assets"),[n,e,h,s,r]),y=z.useMemo(()=>{if(n===r.pathname+r.search+r.hash)return[];let R=new Set,x=!1;if(e.forEach(L=>{var ee;let q=s.routes[L.route.id];!q||!q.hasLoader||(!f.some(X=>X.route.id===L.route.id)&&L.route.id in u&&((ee=a[L.route.id])!=null&&ee.shouldRevalidate)||q.hasClientLoader?x=!0:R.add(L.route.id))}),R.size===0)return[];let $=AA(n);return x&&R.size>0&&$.searchParams.set("_routes",e.filter(L=>R.has(L.route.id)).map(L=>L.route.id).join(",")),[$.pathname+$.search]},[u,r,s,f,e,n,a]),E=z.useMemo(()=>IA(m,s),[m,s]),T=bA(m);return z.createElement(z.Fragment,null,y.map(R=>z.createElement("link",{key:R,rel:"prefetch",as:"fetch",href:R,...t})),E.map(R=>z.createElement("link",{key:R,rel:"modulepreload",href:R,...t})),T.map(({key:R,link:x})=>z.createElement("link",{key:R,...x})))}function OA(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var Hw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Hw&&(window.__reactRouterVersion="7.1.5")}catch{}function LA({basename:n,children:e,window:t}){let r=z.useRef();r.current==null&&(r.current=IR({window:t,v5Compat:!0}));let s=r.current,[a,u]=z.useState({action:s.action,location:s.location}),h=z.useCallback(f=>{z.startTransition(()=>u(f))},[u]);return z.useLayoutEffect(()=>s.listen(h),[s,h]),z.createElement(cA,{basename:n,children:e,location:a.location,navigationType:a.action,navigator:s})}var Gw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Xl=z.forwardRef(function({onClick:e,discover:t="render",prefetch:r="none",relative:s,reloadDocument:a,replace:u,state:h,target:f,to:m,preventScrollReset:y,viewTransition:E,...T},R){let{basename:x}=z.useContext(Dr),$=typeof m=="string"&&Gw.test(m),L,q=!1;if(typeof m=="string"&&$&&(L=m,Hw))try{let A=new URL(window.location.href),N=m.startsWith("//")?new URL(A.protocol+m):new URL(m),O=es(N.pathname,x);N.origin===A.origin&&O!=null?m=O+N.search+N.hash:q=!0}catch{xr(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let ee=QR(m,{relative:s}),[X,de,Ce]=NA(r,T),Ie=UA(m,{replace:u,state:h,target:f,preventScrollReset:y,relative:s,viewTransition:E});function b(A){e&&e(A),A.defaultPrevented||Ie(A)}let S=z.createElement("a",{...T,...Ce,href:L||ee,onClick:q||a?e:b,ref:OA(R,de),target:f,"data-discover":!$&&t==="render"?"true":void 0});return X&&!$?z.createElement(z.Fragment,null,S,z.createElement(xA,{page:ee})):S});Xl.displayName="Link";var MA=z.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:r="",end:s=!1,style:a,to:u,viewTransition:h,children:f,...m},y){let E=Ru(u,{relative:m.relative}),T=eo(),R=z.useContext(hd),{navigator:x,basename:$}=z.useContext(Dr),L=R!=null&&WA(E)&&h===!0,q=x.encodeLocation?x.encodeLocation(E).pathname:E.pathname,ee=T.pathname,X=R&&R.navigation&&R.navigation.location?R.navigation.location.pathname:null;t||(ee=ee.toLowerCase(),X=X?X.toLowerCase():null,q=q.toLowerCase()),X&&$&&(X=es(X,$)||X);const de=q!=="/"&&q.endsWith("/")?q.length-1:q.length;let Ce=ee===q||!s&&ee.startsWith(q)&&ee.charAt(de)==="/",Ie=X!=null&&(X===q||!s&&X.startsWith(q)&&X.charAt(q.length)==="/"),b={isActive:Ce,isPending:Ie,isTransitioning:L},S=Ce?e:void 0,A;typeof r=="function"?A=r(b):A=[r,Ce?"active":null,Ie?"pending":null,L?"transitioning":null].filter(Boolean).join(" ");let N=typeof a=="function"?a(b):a;return z.createElement(Xl,{...m,"aria-current":S,className:A,ref:y,style:N,to:u,viewTransition:h},typeof f=="function"?f(b):f)});MA.displayName="NavLink";var VA=z.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:r,replace:s,state:a,method:u=mh,action:h,onSubmit:f,relative:m,preventScrollReset:y,viewTransition:E,...T},R)=>{let x=BA(),$=$A(h,{relative:m}),L=u.toLowerCase()==="get"?"get":"post",q=typeof h=="string"&&Gw.test(h),ee=X=>{if(f&&f(X),X.defaultPrevented)return;X.preventDefault();let de=X.nativeEvent.submitter,Ce=(de==null?void 0:de.getAttribute("formmethod"))||u;x(de||X.currentTarget,{fetcherKey:e,method:Ce,navigate:t,replace:s,state:a,relative:m,preventScrollReset:y,viewTransition:E})};return z.createElement("form",{ref:R,method:L,action:$,onSubmit:r?f:ee,...T,"data-discover":!q&&n==="render"?"true":void 0})});VA.displayName="Form";function FA(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Kw(n){let e=z.useContext(ba);return lt(e,FA(n)),e}function UA(n,{target:e,replace:t,state:r,preventScrollReset:s,relative:a,viewTransition:u}={}){let h=Om(),f=eo(),m=Ru(n,{relative:a});return z.useCallback(y=>{if(gA(y,e)){y.preventDefault();let E=t!==void 0?t:cu(f)===cu(m);h(n,{replace:E,state:r,preventScrollReset:s,relative:a,viewTransition:u})}},[f,h,m,t,r,e,n,s,a,u])}var jA=0,zA=()=>`__${String(++jA)}__`;function BA(){let{router:n}=Kw("useSubmit"),{basename:e}=z.useContext(Dr),t=oA();return z.useCallback(async(r,s={})=>{let{action:a,method:u,encType:h,formData:f,body:m}=vA(r,e);if(s.navigate===!1){let y=s.fetcherKey||zA();await n.fetch(y,t,s.action||a,{preventScrollReset:s.preventScrollReset,formData:f,body:m,formMethod:s.method||u,formEncType:s.encType||h,flushSync:s.flushSync})}else await n.navigate(s.action||a,{preventScrollReset:s.preventScrollReset,formData:f,body:m,formMethod:s.method||u,formEncType:s.encType||h,replace:s.replace,state:s.state,fromRouteId:t,flushSync:s.flushSync,viewTransition:s.viewTransition})},[n,e,t])}function $A(n,{relative:e}={}){let{basename:t}=z.useContext(Dr),r=z.useContext(pi);lt(r,"useFormAction must be used inside a RouteContext");let[s]=r.matches.slice(-1),a={...Ru(n||".",{relative:e})},u=eo();if(n==null){a.search=u.search;let h=new URLSearchParams(a.search),f=h.getAll("index");if(f.some(y=>y==="")){h.delete("index"),f.filter(E=>E).forEach(E=>h.append("index",E));let y=h.toString();a.search=y?`?${y}`:""}}return(!n||n===".")&&s.route.index&&(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(a.pathname=a.pathname==="/"?t:ii([t,a.pathname])),cu(a)}function WA(n,e={}){let t=z.useContext(jw);lt(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Kw("useViewTransitionState"),s=Ru(n,{relative:e.relative});if(!t.isTransitioning)return!1;let a=es(t.currentLocation.pathname,r)||t.currentLocation.pathname,u=es(t.nextLocation.pathname,r)||t.nextLocation.pathname;return Nh(s.pathname,u)!=null||Nh(s.pathname,a)!=null}new TextEncoder;var Tv={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qw={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ie=function(n,e){if(!n)throw Da(e)},Da=function(n){return new Error("Firebase Database ("+Qw.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yw=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},qA=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const a=n[t++];e[r++]=String.fromCharCode((s&31)<<6|a&63)}else if(s>239&&s<365){const a=n[t++],u=n[t++],h=n[t++],f=((s&7)<<18|(a&63)<<12|(u&63)<<6|h&63)-65536;e[r++]=String.fromCharCode(55296+(f>>10)),e[r++]=String.fromCharCode(56320+(f&1023))}else{const a=n[t++],u=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(a&63)<<6|u&63)}}return e.join("")},Um={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const a=n[s],u=s+1<n.length,h=u?n[s+1]:0,f=s+2<n.length,m=f?n[s+2]:0,y=a>>2,E=(a&3)<<4|h>>4;let T=(h&15)<<2|m>>6,R=m&63;f||(R=64,u||(T=64)),r.push(t[y],t[E],t[T],t[R])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Yw(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):qA(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const a=t[n.charAt(s++)],h=s<n.length?t[n.charAt(s)]:0;++s;const m=s<n.length?t[n.charAt(s)]:64;++s;const E=s<n.length?t[n.charAt(s)]:64;if(++s,a==null||h==null||m==null||E==null)throw new HA;const T=a<<2|h>>4;if(r.push(T),m!==64){const R=h<<4&240|m>>2;if(r.push(R),E!==64){const x=m<<6&192|E;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class HA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Xw=function(n){const e=Yw(n);return Um.encodeByteArray(e,!0)},xh=function(n){return Xw(n).replace(/\./g,"")},bh=function(n){try{return Um.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GA(n){return Jw(void 0,n)}function Jw(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!KA(t)||(n[t]=Jw(n[t],e[t]));return n}function KA(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YA=()=>QA().__FIREBASE_DEFAULTS__,XA=()=>{if(typeof process>"u"||typeof Tv>"u")return;const n=Tv.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},JA=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&bh(n[1]);return e&&JSON.parse(e)},fd=()=>{try{return YA()||XA()||JA()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Zw=n=>{var e,t;return(t=(e=fd())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},eT=n=>{const e=Zw(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},tT=()=>{var n;return(n=fd())===null||n===void 0?void 0:n.config},nT=n=>{var e;return(e=fd())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rT(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,a=n.sub||n.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},n);return[xh(JSON.stringify(t)),xh(JSON.stringify(u)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function zm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(tn())}function ZA(){var n;const e=(n=fd())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ek(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function iT(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function sT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function tk(){const n=tn();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function nk(){return Qw.NODE_ADMIN===!0}function rk(){return!ZA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function oT(){try{return typeof indexedDB=="object"}catch{return!1}}function aT(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var a;e(((a=s.error)===null||a===void 0?void 0:a.message)||"")}}catch(t){e(t)}})}function ik(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sk="FirebaseError";class dr extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=sk,Object.setPrototypeOf(this,dr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,to.prototype.create)}}class to{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,a=this.errors[e],u=a?ok(a,r):"Error",h=`${this.serviceName}: ${u} (${s}).`;return new dr(s,h,r)}}function ok(n,e){return n.replace(ak,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const ak=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hu(n){return JSON.parse(n)}function jt(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lT=function(n){let e={},t={},r={},s="";try{const a=n.split(".");e=hu(bh(a[0])||""),t=hu(bh(a[1])||""),s=a[2],r=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:r,signature:s}},lk=function(n){const e=lT(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},uk=function(n){const e=lT(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mi(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function wa(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function qp(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Dh(n,e,t){const r={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(r[s]=e.call(t,n[s],s,n));return r}function du(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const a=n[s],u=e[s];if(Iv(a)&&Iv(u)){if(!du(a,u))return!1}else if(a!==u)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Iv(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oa(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ql(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,a]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(a)}}),e}function Hl(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ck{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const r=this.W_;if(typeof e=="string")for(let E=0;E<16;E++)r[E]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let E=0;E<16;E++)r[E]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let E=16;E<80;E++){const T=r[E-3]^r[E-8]^r[E-14]^r[E-16];r[E]=(T<<1|T>>>31)&4294967295}let s=this.chain_[0],a=this.chain_[1],u=this.chain_[2],h=this.chain_[3],f=this.chain_[4],m,y;for(let E=0;E<80;E++){E<40?E<20?(m=h^a&(u^h),y=1518500249):(m=a^u^h,y=1859775393):E<60?(m=a&u|h&(a|u),y=2400959708):(m=a^u^h,y=3395469782);const T=(s<<5|s>>>27)+m+f+y+r[E]&4294967295;f=h,h=u,u=(a<<30|a>>>2)&4294967295,a=s,s=T}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+a&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+h&4294967295,this.chain_[4]=this.chain_[4]+f&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const r=t-this.blockSize;let s=0;const a=this.buf_;let u=this.inbuf_;for(;s<t;){if(u===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(a[u]=e.charCodeAt(s),++u,++s,u===this.blockSize){this.compress_(a),u=0;break}}else for(;s<t;)if(a[u]=e[s],++u,++s,u===this.blockSize){this.compress_(a),u=0;break}}this.inbuf_=u,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let a=24;a>=0;a-=8)e[r]=this.chain_[s]>>a&255,++r;return e}}function hk(n,e){const t=new dk(n,e);return t.subscribe.bind(t)}class dk{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");fk(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Tp),s.error===void 0&&(s.error=Tp),s.complete===void 0&&(s.complete=Tp);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function fk(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Tp(){}function pk(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mk=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);if(s>=55296&&s<=56319){const a=s-55296;r++,ie(r<n.length,"Surrogate pair missing trail surrogate.");const u=n.charCodeAt(r)-56320;s=65536+(a<<10)+u}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},pd=function(n){let e=0;for(let t=0;t<n.length;t++){const r=n.charCodeAt(t);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gk=1e3,_k=2,yk=4*60*60*1e3,vk=.5;function Sv(n,e=gk,t=_k){const r=e*Math.pow(t,n),s=Math.round(vk*r*(Math.random()-.5)*2);return Math.min(yk,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(n){return n&&n._delegate?n._delegate:n}class Bn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Us="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ek{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new jm;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(a){if(s)return null;throw a}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Tk(e))try{this.getOrInitializeService({instanceIdentifier:Us})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:s});r.resolve(a)}catch{}}}}clearInstance(e=Us){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Us){return this.instances.has(e)}getOptions(e=Us){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[a,u]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(a);r===h&&u.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),a=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;a.add(e),this.onInitCallbacks.set(s,a);const u=this.instances.get(s);return u&&e(u,s),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:wk(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Us){return this.component?this.component.multipleInstances?e:Us:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function wk(n){return n===Us?void 0:n}function Tk(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ik{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Ek(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pe;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Pe||(Pe={}));const Sk={debug:Pe.DEBUG,verbose:Pe.VERBOSE,info:Pe.INFO,warn:Pe.WARN,error:Pe.ERROR,silent:Pe.SILENT},Ck=Pe.INFO,Rk={[Pe.DEBUG]:"log",[Pe.VERBOSE]:"log",[Pe.INFO]:"info",[Pe.WARN]:"warn",[Pe.ERROR]:"error"},Ak=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Rk[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Au{constructor(e){this.name=e,this._logLevel=Ck,this._logHandler=Ak,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Sk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Pe.DEBUG,...e),this._logHandler(this,Pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Pe.VERBOSE,...e),this._logHandler(this,Pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Pe.INFO,...e),this._logHandler(this,Pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Pe.WARN,...e),this._logHandler(this,Pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Pe.ERROR,...e),this._logHandler(this,Pe.ERROR,...e)}}const kk=(n,e)=>e.some(t=>n instanceof t);let Cv,Rv;function Pk(){return Cv||(Cv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Nk(){return Rv||(Rv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const uT=new WeakMap,Hp=new WeakMap,cT=new WeakMap,Ip=new WeakMap,Bm=new WeakMap;function xk(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",a),n.removeEventListener("error",u)},a=()=>{t(Ki(n.result)),s()},u=()=>{r(n.error),s()};n.addEventListener("success",a),n.addEventListener("error",u)});return e.then(t=>{t instanceof IDBCursor&&uT.set(t,n)}).catch(()=>{}),Bm.set(e,n),e}function bk(n){if(Hp.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",u),n.removeEventListener("abort",u)},a=()=>{t(),s()},u=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",a),n.addEventListener("error",u),n.addEventListener("abort",u)});Hp.set(n,e)}let Gp={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Hp.get(n);if(e==="objectStoreNames")return n.objectStoreNames||cT.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ki(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Dk(n){Gp=n(Gp)}function Ok(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Sp(this),e,...t);return cT.set(r,e.sort?e.sort():[e]),Ki(r)}:Nk().includes(n)?function(...e){return n.apply(Sp(this),e),Ki(uT.get(this))}:function(...e){return Ki(n.apply(Sp(this),e))}}function Lk(n){return typeof n=="function"?Ok(n):(n instanceof IDBTransaction&&bk(n),kk(n,Pk())?new Proxy(n,Gp):n)}function Ki(n){if(n instanceof IDBRequest)return xk(n);if(Ip.has(n))return Ip.get(n);const e=Lk(n);return e!==n&&(Ip.set(n,e),Bm.set(e,n)),e}const Sp=n=>Bm.get(n);function hT(n,e,{blocked:t,upgrade:r,blocking:s,terminated:a}={}){const u=indexedDB.open(n,e),h=Ki(u);return r&&u.addEventListener("upgradeneeded",f=>{r(Ki(u.result),f.oldVersion,f.newVersion,Ki(u.transaction),f)}),t&&u.addEventListener("blocked",f=>t(f.oldVersion,f.newVersion,f)),h.then(f=>{a&&f.addEventListener("close",()=>a()),s&&f.addEventListener("versionchange",m=>s(m.oldVersion,m.newVersion,m))}).catch(()=>{}),h}const Mk=["get","getKey","getAll","getAllKeys","count"],Vk=["put","add","delete","clear"],Cp=new Map;function Av(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Cp.get(e))return Cp.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=Vk.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Mk.includes(t)))return;const a=async function(u,...h){const f=this.transaction(u,s?"readwrite":"readonly");let m=f.store;return r&&(m=m.index(h.shift())),(await Promise.all([m[t](...h),s&&f.done]))[0]};return Cp.set(e,a),a}Dk(n=>({...n,get:(e,t,r)=>Av(e,t)||n.get(e,t,r),has:(e,t)=>!!Av(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Uk(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Uk(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Kp="@firebase/app",kv="0.10.18";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const li=new Au("@firebase/app"),jk="@firebase/app-compat",zk="@firebase/analytics-compat",Bk="@firebase/analytics",$k="@firebase/app-check-compat",Wk="@firebase/app-check",qk="@firebase/auth",Hk="@firebase/auth-compat",Gk="@firebase/database",Kk="@firebase/data-connect",Qk="@firebase/database-compat",Yk="@firebase/functions",Xk="@firebase/functions-compat",Jk="@firebase/installations",Zk="@firebase/installations-compat",eP="@firebase/messaging",tP="@firebase/messaging-compat",nP="@firebase/performance",rP="@firebase/performance-compat",iP="@firebase/remote-config",sP="@firebase/remote-config-compat",oP="@firebase/storage",aP="@firebase/storage-compat",lP="@firebase/firestore",uP="@firebase/vertexai",cP="@firebase/firestore-compat",hP="firebase",dP="11.2.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qp="[DEFAULT]",fP={[Kp]:"fire-core",[jk]:"fire-core-compat",[Bk]:"fire-analytics",[zk]:"fire-analytics-compat",[Wk]:"fire-app-check",[$k]:"fire-app-check-compat",[qk]:"fire-auth",[Hk]:"fire-auth-compat",[Gk]:"fire-rtdb",[Kk]:"fire-data-connect",[Qk]:"fire-rtdb-compat",[Yk]:"fire-fn",[Xk]:"fire-fn-compat",[Jk]:"fire-iid",[Zk]:"fire-iid-compat",[eP]:"fire-fcm",[tP]:"fire-fcm-compat",[nP]:"fire-perf",[rP]:"fire-perf-compat",[iP]:"fire-rc",[sP]:"fire-rc-compat",[oP]:"fire-gcs",[aP]:"fire-gcs-compat",[lP]:"fire-fst",[cP]:"fire-fst-compat",[uP]:"fire-vertex","fire-js":"fire-js",[hP]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oh=new Map,pP=new Map,Yp=new Map;function Pv(n,e){try{n.container.addComponent(e)}catch(t){li.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ur(n){const e=n.name;if(Yp.has(e))return li.debug(`There were multiple attempts to register component ${e}.`),!1;Yp.set(e,n);for(const t of Oh.values())Pv(t,n);for(const t of pP.values())Pv(t,n);return!0}function as(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Cr(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mP={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Qi=new to("app","Firebase",mP);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gP{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Bn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Qi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const no=dP;function dT(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Qp,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Qi.create("bad-app-name",{appName:String(s)});if(t||(t=tT()),!t)throw Qi.create("no-options");const a=Oh.get(s);if(a){if(du(t,a.options)&&du(r,a.config))return a;throw Qi.create("duplicate-app",{appName:s})}const u=new Ik(s);for(const f of Yp.values())u.addComponent(f);const h=new gP(t,r,u);return Oh.set(s,h),h}function md(n=Qp){const e=Oh.get(n);if(!e&&n===Qp&&tT())return dT();if(!e)throw Qi.create("no-app",{appName:n});return e}function yn(n,e,t){var r;let s=(r=fP[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const a=s.match(/\s|\//),u=e.match(/\s|\//);if(a||u){const h=[`Unable to register library "${s}" with version "${e}":`];a&&h.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&u&&h.push("and"),u&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),li.warn(h.join(" "));return}ur(new Bn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _P="firebase-heartbeat-database",yP=1,fu="firebase-heartbeat-store";let Rp=null;function fT(){return Rp||(Rp=hT(_P,yP,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(fu)}catch(t){console.warn(t)}}}}).catch(n=>{throw Qi.create("idb-open",{originalErrorMessage:n.message})})),Rp}async function vP(n){try{const t=(await fT()).transaction(fu),r=await t.objectStore(fu).get(pT(n));return await t.done,r}catch(e){if(e instanceof dr)li.warn(e.message);else{const t=Qi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});li.warn(t.message)}}}async function Nv(n,e){try{const r=(await fT()).transaction(fu,"readwrite");await r.objectStore(fu).put(e,pT(n)),await r.done}catch(t){if(t instanceof dr)li.warn(t.message);else{const r=Qi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});li.warn(r.message)}}}function pT(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EP=1024,wP=30*24*60*60*1e3;class TP{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new SP(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=xv();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(u=>u.date===a)?void 0:(this._heartbeatsCache.heartbeats.push({date:a,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(u=>{const h=new Date(u.date).valueOf();return Date.now()-h<=wP}),this._storage.overwrite(this._heartbeatsCache))}catch(r){li.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=xv(),{heartbeatsToSend:r,unsentEntries:s}=IP(this._heartbeatsCache.heartbeats),a=xh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(t){return li.warn(t),""}}}function xv(){return new Date().toISOString().substring(0,10)}function IP(n,e=EP){const t=[];let r=n.slice();for(const s of n){const a=t.find(u=>u.agent===s.agent);if(a){if(a.dates.push(s.date),bv(t)>e){a.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),bv(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class SP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return oT()?aT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await vP(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Nv(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Nv(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function bv(n){return xh(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CP(n){ur(new Bn("platform-logger",e=>new Fk(e),"PRIVATE")),ur(new Bn("heartbeat",e=>new TP(e),"PRIVATE")),yn(Kp,kv,n),yn(Kp,kv,"esm2017"),yn("fire-js","")}CP("");var RP="firebase",AP="11.2.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yn(RP,AP,"app");const mT="@firebase/installations",$m="0.6.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gT=1e4,_T=`w:${$m}`,yT="FIS_v2",kP="https://firebaseinstallations.googleapis.com/v1",PP=60*60*1e3,NP="installations",xP="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bP={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Hs=new to(NP,xP,bP);function vT(n){return n instanceof dr&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ET({projectId:n}){return`${kP}/projects/${n}/installations`}function wT(n){return{token:n.token,requestStatus:2,expiresIn:OP(n.expiresIn),creationTime:Date.now()}}async function TT(n,e){const r=(await e.json()).error;return Hs.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function IT({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function DP(n,{refreshToken:e}){const t=IT(n);return t.append("Authorization",LP(e)),t}async function ST(n){const e=await n();return e.status>=500&&e.status<600?n():e}function OP(n){return Number(n.replace("s","000"))}function LP(n){return`${yT} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MP({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=ET(n),s=IT(n),a=e.getImmediate({optional:!0});if(a){const m=await a.getHeartbeatsHeader();m&&s.append("x-firebase-client",m)}const u={fid:t,authVersion:yT,appId:n.appId,sdkVersion:_T},h={method:"POST",headers:s,body:JSON.stringify(u)},f=await ST(()=>fetch(r,h));if(f.ok){const m=await f.json();return{fid:m.fid||t,registrationStatus:2,refreshToken:m.refreshToken,authToken:wT(m.authToken)}}else throw await TT("Create Installation",f)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CT(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VP(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FP=/^[cdef][\w-]{21}$/,Xp="";function UP(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=jP(n);return FP.test(t)?t:Xp}catch{return Xp}}function jP(n){return VP(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gd(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RT=new Map;function AT(n,e){const t=gd(n);kT(t,e),zP(t,e)}function kT(n,e){const t=RT.get(n);if(t)for(const r of t)r(e)}function zP(n,e){const t=BP();t&&t.postMessage({key:n,fid:e}),$P()}let zs=null;function BP(){return!zs&&"BroadcastChannel"in self&&(zs=new BroadcastChannel("[Firebase] FID Change"),zs.onmessage=n=>{kT(n.data.key,n.data.fid)}),zs}function $P(){RT.size===0&&zs&&(zs.close(),zs=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WP="firebase-installations-database",qP=1,Gs="firebase-installations-store";let Ap=null;function Wm(){return Ap||(Ap=hT(WP,qP,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Gs)}}})),Ap}async function Lh(n,e){const t=gd(n),s=(await Wm()).transaction(Gs,"readwrite"),a=s.objectStore(Gs),u=await a.get(t);return await a.put(e,t),await s.done,(!u||u.fid!==e.fid)&&AT(n,e.fid),e}async function PT(n){const e=gd(n),r=(await Wm()).transaction(Gs,"readwrite");await r.objectStore(Gs).delete(e),await r.done}async function _d(n,e){const t=gd(n),s=(await Wm()).transaction(Gs,"readwrite"),a=s.objectStore(Gs),u=await a.get(t),h=e(u);return h===void 0?await a.delete(t):await a.put(h,t),await s.done,h&&(!u||u.fid!==h.fid)&&AT(n,h.fid),h}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qm(n){let e;const t=await _d(n.appConfig,r=>{const s=HP(r),a=GP(n,s);return e=a.registrationPromise,a.installationEntry});return t.fid===Xp?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function HP(n){const e=n||{fid:UP(),registrationStatus:0};return NT(e)}function GP(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Hs.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=KP(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:QP(n)}:{installationEntry:e}}async function KP(n,e){try{const t=await MP(n,e);return Lh(n.appConfig,t)}catch(t){throw vT(t)&&t.customData.serverCode===409?await PT(n.appConfig):await Lh(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function QP(n){let e=await Dv(n.appConfig);for(;e.registrationStatus===1;)await CT(100),e=await Dv(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await qm(n);return r||t}return e}function Dv(n){return _d(n,e=>{if(!e)throw Hs.create("installation-not-found");return NT(e)})}function NT(n){return YP(n)?{fid:n.fid,registrationStatus:0}:n}function YP(n){return n.registrationStatus===1&&n.registrationTime+gT<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XP({appConfig:n,heartbeatServiceProvider:e},t){const r=JP(n,t),s=DP(n,t),a=e.getImmediate({optional:!0});if(a){const m=await a.getHeartbeatsHeader();m&&s.append("x-firebase-client",m)}const u={installation:{sdkVersion:_T,appId:n.appId}},h={method:"POST",headers:s,body:JSON.stringify(u)},f=await ST(()=>fetch(r,h));if(f.ok){const m=await f.json();return wT(m)}else throw await TT("Generate Auth Token",f)}function JP(n,{fid:e}){return`${ET(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hm(n,e=!1){let t;const r=await _d(n.appConfig,a=>{if(!xT(a))throw Hs.create("not-registered");const u=a.authToken;if(!e&&t1(u))return a;if(u.requestStatus===1)return t=ZP(n,e),a;{if(!navigator.onLine)throw Hs.create("app-offline");const h=r1(a);return t=e1(n,h),h}});return t?await t:r.authToken}async function ZP(n,e){let t=await Ov(n.appConfig);for(;t.authToken.requestStatus===1;)await CT(100),t=await Ov(n.appConfig);const r=t.authToken;return r.requestStatus===0?Hm(n,e):r}function Ov(n){return _d(n,e=>{if(!xT(e))throw Hs.create("not-registered");const t=e.authToken;return i1(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function e1(n,e){try{const t=await XP(n,e),r=Object.assign(Object.assign({},e),{authToken:t});return await Lh(n.appConfig,r),t}catch(t){if(vT(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await PT(n.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Lh(n.appConfig,r)}throw t}}function xT(n){return n!==void 0&&n.registrationStatus===2}function t1(n){return n.requestStatus===2&&!n1(n)}function n1(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+PP}function r1(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function i1(n){return n.requestStatus===1&&n.requestTime+gT<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function s1(n){const e=n,{installationEntry:t,registrationPromise:r}=await qm(e);return r?r.catch(console.error):Hm(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o1(n,e=!1){const t=n;return await a1(t),(await Hm(t,e)).token}async function a1(n){const{registrationPromise:e}=await qm(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l1(n){if(!n||!n.options)throw kp("App Configuration");if(!n.name)throw kp("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw kp(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function kp(n){return Hs.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bT="installations",u1="installations-internal",c1=n=>{const e=n.getProvider("app").getImmediate(),t=l1(e),r=as(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},h1=n=>{const e=n.getProvider("app").getImmediate(),t=as(e,bT).getImmediate();return{getId:()=>s1(t),getToken:s=>o1(t,s)}};function d1(){ur(new Bn(bT,c1,"PUBLIC")),ur(new Bn(u1,h1,"PRIVATE"))}d1();yn(mT,$m);yn(mT,$m,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mh="analytics",f1="firebase_id",p1="origin",m1=60*1e3,g1="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Gm="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn=new Au("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _1={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},An=new to("analytics","Analytics",_1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y1(n){if(!n.startsWith(Gm)){const e=An.create("invalid-gtag-resource",{gtagURL:n});return vn.warn(e.message),""}return n}function DT(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function v1(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function E1(n,e){const t=v1("firebase-js-sdk-policy",{createScriptURL:y1}),r=document.createElement("script"),s=`${Gm}?l=${n}&id=${e}`;r.src=t?t==null?void 0:t.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function w1(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function T1(n,e,t,r,s,a){const u=r[s];try{if(u)await e[u];else{const f=(await DT(t)).find(m=>m.measurementId===s);f&&await e[f.appId]}}catch(h){vn.error(h)}n("config",s,a)}async function I1(n,e,t,r,s){try{let a=[];if(s&&s.send_to){let u=s.send_to;Array.isArray(u)||(u=[u]);const h=await DT(t);for(const f of u){const m=h.find(E=>E.measurementId===f),y=m&&e[m.appId];if(y)a.push(y);else{a=[];break}}}a.length===0&&(a=Object.values(e)),await Promise.all(a),n("event",r,s||{})}catch(a){vn.error(a)}}function S1(n,e,t,r){async function s(a,...u){try{if(a==="event"){const[h,f]=u;await I1(n,e,t,h,f)}else if(a==="config"){const[h,f]=u;await T1(n,e,t,r,h,f)}else if(a==="consent"){const[h,f]=u;n("consent",h,f)}else if(a==="get"){const[h,f,m]=u;n("get",h,f,m)}else if(a==="set"){const[h]=u;n("set",h)}else n(a,...u)}catch(h){vn.error(h)}}return s}function C1(n,e,t,r,s){let a=function(...u){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(a=window[s]),window[s]=S1(a,n,e,t),{gtagCore:a,wrappedGtag:window[s]}}function R1(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Gm)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A1=30,k1=1e3;class P1{constructor(e={},t=k1){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const OT=new P1;function N1(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function x1(n){var e;const{appId:t,apiKey:r}=n,s={method:"GET",headers:N1(r)},a=g1.replace("{app-id}",t),u=await fetch(a,s);if(u.status!==200&&u.status!==304){let h="";try{const f=await u.json();!((e=f.error)===null||e===void 0)&&e.message&&(h=f.error.message)}catch{}throw An.create("config-fetch-failed",{httpStatus:u.status,responseMessage:h})}return u.json()}async function b1(n,e=OT,t){const{appId:r,apiKey:s,measurementId:a}=n.options;if(!r)throw An.create("no-app-id");if(!s){if(a)return{measurementId:a,appId:r};throw An.create("no-api-key")}const u=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},h=new L1;return setTimeout(async()=>{h.abort()},m1),LT({appId:r,apiKey:s,measurementId:a},u,h,e)}async function LT(n,{throttleEndTimeMillis:e,backoffCount:t},r,s=OT){var a;const{appId:u,measurementId:h}=n;try{await D1(r,e)}catch(f){if(h)return vn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${h} provided in the "measurementId" field in the local Firebase config. [${f==null?void 0:f.message}]`),{appId:u,measurementId:h};throw f}try{const f=await x1(n);return s.deleteThrottleMetadata(u),f}catch(f){const m=f;if(!O1(m)){if(s.deleteThrottleMetadata(u),h)return vn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${h} provided in the "measurementId" field in the local Firebase config. [${m==null?void 0:m.message}]`),{appId:u,measurementId:h};throw f}const y=Number((a=m==null?void 0:m.customData)===null||a===void 0?void 0:a.httpStatus)===503?Sv(t,s.intervalMillis,A1):Sv(t,s.intervalMillis),E={throttleEndTimeMillis:Date.now()+y,backoffCount:t+1};return s.setThrottleMetadata(u,E),vn.debug(`Calling attemptFetch again in ${y} millis`),LT(n,E,r,s)}}function D1(n,e){return new Promise((t,r)=>{const s=Math.max(e-Date.now(),0),a=setTimeout(t,s);n.addEventListener(()=>{clearTimeout(a),r(An.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function O1(n){if(!(n instanceof dr)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class L1{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function M1(n,e,t,r,s){if(s&&s.global){n("event",t,r);return}else{const a=await e,u=Object.assign(Object.assign({},r),{send_to:a});n("event",t,u)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V1(){if(oT())try{await aT()}catch(n){return vn.warn(An.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return vn.warn(An.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function F1(n,e,t,r,s,a,u){var h;const f=b1(n);f.then(R=>{t[R.measurementId]=R.appId,n.options.measurementId&&R.measurementId!==n.options.measurementId&&vn.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${R.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(R=>vn.error(R)),e.push(f);const m=V1().then(R=>{if(R)return r.getId()}),[y,E]=await Promise.all([f,m]);R1(a)||E1(a,y.measurementId),s("js",new Date);const T=(h=u==null?void 0:u.config)!==null&&h!==void 0?h:{};return T[p1]="firebase",T.update=!0,E!=null&&(T[f1]=E),s("config",y.measurementId,T),y.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U1{constructor(e){this.app=e}_delete(){return delete Jl[this.app.options.appId],Promise.resolve()}}let Jl={},Lv=[];const Mv={};let Pp="dataLayer",j1="gtag",Vv,MT,Fv=!1;function z1(){const n=[];if(iT()&&n.push("This is a browser extension environment."),ik()||n.push("Cookies are not available."),n.length>0){const e=n.map((r,s)=>`(${s+1}) ${r}`).join(" "),t=An.create("invalid-analytics-context",{errorInfo:e});vn.warn(t.message)}}function B1(n,e,t){z1();const r=n.options.appId;if(!r)throw An.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)vn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw An.create("no-api-key");if(Jl[r]!=null)throw An.create("already-exists",{id:r});if(!Fv){w1(Pp);const{wrappedGtag:a,gtagCore:u}=C1(Jl,Lv,Mv,Pp,j1);MT=a,Vv=u,Fv=!0}return Jl[r]=F1(n,Lv,Mv,e,Vv,Pp,t),new U1(n)}function $1(n=md()){n=yt(n);const e=as(n,Mh);return e.isInitialized()?e.getImmediate():W1(n)}function W1(n,e={}){const t=as(n,Mh);if(t.isInitialized()){const s=t.getImmediate();if(du(e,t.getOptions()))return s;throw An.create("already-initialized")}return t.initialize({options:e})}function q1(n,e,t,r){n=yt(n),M1(MT,Jl[n.app.options.appId],e,t,r).catch(s=>vn.error(s))}const Uv="@firebase/analytics",jv="0.10.11";function H1(){ur(new Bn(Mh,(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return B1(r,s,t)},"PUBLIC")),ur(new Bn("analytics-internal",n,"PRIVATE")),yn(Uv,jv),yn(Uv,jv,"esm2017");function n(e){try{const t=e.getProvider(Mh).getImmediate();return{logEvent:(r,s,a)=>q1(t,r,s,a)}}catch(t){throw An.create("interop-component-reg-failed",{reason:t})}}}H1();function Km(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function VT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const G1=VT,FT=new to("auth","Firebase",VT());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vh=new Au("@firebase/auth");function K1(n,...e){Vh.logLevel<=Pe.WARN&&Vh.warn(`Auth (${no}): ${n}`,...e)}function _h(n,...e){Vh.logLevel<=Pe.ERROR&&Vh.error(`Auth (${no}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(n,...e){throw Qm(n,...e)}function Ar(n,...e){return Qm(n,...e)}function UT(n,e,t){const r=Object.assign(Object.assign({},G1()),{[e]:t});return new to("auth","Firebase",r).create(e,{appName:n.name})}function si(n){return UT(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Qm(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return FT.create(n,...e)}function ve(n,e,...t){if(!n)throw Qm(e,...t)}function ei(n){const e="INTERNAL ASSERTION FAILED: "+n;throw _h(e),new Error(e)}function ui(n,e){n||ei(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jp(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Q1(){return zv()==="http:"||zv()==="https:"}function zv(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Q1()||iT()||"connection"in navigator)?navigator.onLine:!0}function X1(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(e,t){this.shortDelay=e,this.longDelay=t,ui(t>e,"Short delay should be less than long delay!"),this.isMobile=zm()||sT()}get(){return Y1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ym(n,e){ui(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jT{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ei("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ei("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ei("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z1=new ku(3e4,6e4);function ls(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function us(n,e,t,r,s={}){return zT(n,s,async()=>{let a={},u={};r&&(e==="GET"?u=r:a={body:JSON.stringify(r)});const h=Oa(Object.assign({key:n.config.apiKey},u)).slice(1),f=await n._getAdditionalHeaders();f["Content-Type"]="application/json",n.languageCode&&(f["X-Firebase-Locale"]=n.languageCode);const m=Object.assign({method:e,headers:f},a);return ek()||(m.referrerPolicy="no-referrer"),jT.fetch()(BT(n,n.config.apiHost,t,h),m)})}async function zT(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},J1),e);try{const s=new tN(n),a=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const u=await a.json();if("needConfirmation"in u)throw sh(n,"account-exists-with-different-credential",u);if(a.ok&&!("errorMessage"in u))return u;{const h=a.ok?u.errorMessage:u.error.message,[f,m]=h.split(" : ");if(f==="FEDERATED_USER_ID_ALREADY_LINKED")throw sh(n,"credential-already-in-use",u);if(f==="EMAIL_EXISTS")throw sh(n,"email-already-in-use",u);if(f==="USER_DISABLED")throw sh(n,"user-disabled",u);const y=r[f]||f.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw UT(n,y,m);cr(n,y)}}catch(s){if(s instanceof dr)throw s;cr(n,"network-request-failed",{message:String(s)})}}async function Pu(n,e,t,r,s={}){const a=await us(n,e,t,r,s);return"mfaPendingCredential"in a&&cr(n,"multi-factor-auth-required",{_serverResponse:a}),a}function BT(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?Ym(n.config,s):`${n.config.apiScheme}://${s}`}function eN(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class tN{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Ar(this.auth,"network-request-failed")),Z1.get())})}}function sh(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Ar(n,e,r);return s.customData._tokenResponse=t,s}function Bv(n){return n!==void 0&&n.enterprise!==void 0}class nN{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return eN(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function rN(n,e){return us(n,"GET","/v2/recaptchaConfig",ls(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iN(n,e){return us(n,"POST","/v1/accounts:delete",e)}async function $T(n,e){return us(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zl(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function sN(n,e=!1){const t=yt(n),r=await t.getIdToken(e),s=Xm(r);ve(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const a=typeof s.firebase=="object"?s.firebase:void 0,u=a==null?void 0:a.sign_in_provider;return{claims:s,token:r,authTime:Zl(Np(s.auth_time)),issuedAtTime:Zl(Np(s.iat)),expirationTime:Zl(Np(s.exp)),signInProvider:u||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function Np(n){return Number(n)*1e3}function Xm(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return _h("JWT malformed, contained fewer than 3 sections"),null;try{const s=bh(t);return s?JSON.parse(s):(_h("Failed to decode base64 JWT payload"),null)}catch(s){return _h("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function $v(n){const e=Xm(n);return ve(e,"internal-error"),ve(typeof e.exp<"u","internal-error"),ve(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pu(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof dr&&oN(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function oN({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Zl(this.lastLoginAt),this.creationTime=Zl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fh(n){var e;const t=n.auth,r=await n.getIdToken(),s=await pu(n,$T(t,{idToken:r}));ve(s==null?void 0:s.users.length,t,"internal-error");const a=s.users[0];n._notifyReloadListener(a);const u=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?WT(a.providerUserInfo):[],h=uN(n.providerData,u),f=n.isAnonymous,m=!(n.email&&a.passwordHash)&&!(h!=null&&h.length),y=f?m:!1,E={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:h,metadata:new Zp(a.createdAt,a.lastLoginAt),isAnonymous:y};Object.assign(n,E)}async function lN(n){const e=yt(n);await Fh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function uN(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function WT(n){return n.map(e=>{var{providerId:t}=e,r=Km(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cN(n,e){const t=await zT(n,{},async()=>{const r=Oa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:a}=n.config,u=BT(n,s,"/v1/token",`key=${a}`),h=await n._getAdditionalHeaders();return h["Content-Type"]="application/x-www-form-urlencoded",jT.fetch()(u,{method:"POST",headers:h,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function hN(n,e){return us(n,"POST","/v2/accounts:revokeToken",ls(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ve(e.idToken,"internal-error"),ve(typeof e.idToken<"u","internal-error"),ve(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):$v(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ve(e.length!==0,"internal-error");const t=$v(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ve(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:a}=await cN(e,t);this.updateTokensAndExpiration(r,s,Number(a))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:a}=t,u=new ma;return r&&(ve(typeof r=="string","internal-error",{appName:e}),u.refreshToken=r),s&&(ve(typeof s=="string","internal-error",{appName:e}),u.accessToken=s),a&&(ve(typeof a=="number","internal-error",{appName:e}),u.expirationTime=a),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ma,this.toJSON())}_performRefresh(){return ei("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(n,e){ve(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class ti{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,a=Km(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new aN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Zp(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await pu(this,this.stsTokenManager.getToken(this.auth,e));return ve(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return sN(this,e)}reload(){return lN(this)}_assign(e){this!==e&&(ve(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ti(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ve(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Fh(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Cr(this.auth.app))return Promise.reject(si(this.auth));const e=await this.getIdToken();return await pu(this,iN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,a,u,h,f,m,y;const E=(r=t.displayName)!==null&&r!==void 0?r:void 0,T=(s=t.email)!==null&&s!==void 0?s:void 0,R=(a=t.phoneNumber)!==null&&a!==void 0?a:void 0,x=(u=t.photoURL)!==null&&u!==void 0?u:void 0,$=(h=t.tenantId)!==null&&h!==void 0?h:void 0,L=(f=t._redirectEventId)!==null&&f!==void 0?f:void 0,q=(m=t.createdAt)!==null&&m!==void 0?m:void 0,ee=(y=t.lastLoginAt)!==null&&y!==void 0?y:void 0,{uid:X,emailVerified:de,isAnonymous:Ce,providerData:Ie,stsTokenManager:b}=t;ve(X&&b,e,"internal-error");const S=ma.fromJSON(this.name,b);ve(typeof X=="string",e,"internal-error"),zi(E,e.name),zi(T,e.name),ve(typeof de=="boolean",e,"internal-error"),ve(typeof Ce=="boolean",e,"internal-error"),zi(R,e.name),zi(x,e.name),zi($,e.name),zi(L,e.name),zi(q,e.name),zi(ee,e.name);const A=new ti({uid:X,auth:e,email:T,emailVerified:de,displayName:E,isAnonymous:Ce,photoURL:x,phoneNumber:R,tenantId:$,stsTokenManager:S,createdAt:q,lastLoginAt:ee});return Ie&&Array.isArray(Ie)&&(A.providerData=Ie.map(N=>Object.assign({},N))),L&&(A._redirectEventId=L),A}static async _fromIdTokenResponse(e,t,r=!1){const s=new ma;s.updateFromServerResponse(t);const a=new ti({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Fh(a),a}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];ve(s.localId!==void 0,"internal-error");const a=s.providerUserInfo!==void 0?WT(s.providerUserInfo):[],u=!(s.email&&s.passwordHash)&&!(a!=null&&a.length),h=new ma;h.updateFromIdToken(r);const f=new ti({uid:s.localId,auth:e,stsTokenManager:h,isAnonymous:u}),m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Zp(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(a!=null&&a.length)};return Object.assign(f,m),f}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wv=new Map;function ni(n){ui(n instanceof Function,"Expected a class definition");let e=Wv.get(n);return e?(ui(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Wv.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}qT.type="NONE";const qv=qT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yh(n,e,t){return`firebase:${n}:${e}:${t}`}class ga{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:a}=this.auth;this.fullUserKey=yh(this.userKey,s.apiKey,a),this.fullPersistenceKey=yh("persistence",s.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ti._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new ga(ni(qv),e,r);const s=(await Promise.all(t.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let a=s[0]||ni(qv);const u=yh(r,e.config.apiKey,e.name);let h=null;for(const m of t)try{const y=await m._get(u);if(y){const E=ti._fromJSON(e,y);m!==a&&(h=E),a=m;break}}catch{}const f=s.filter(m=>m._shouldAllowMigration);return!a._shouldAllowMigration||!f.length?new ga(a,e,r):(a=f[0],h&&await a._set(u,h.toJSON()),await Promise.all(t.map(async m=>{if(m!==a)try{await m._remove(u)}catch{}})),new ga(a,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hv(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(QT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(HT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(XT(e))return"Blackberry";if(JT(e))return"Webos";if(GT(e))return"Safari";if((e.includes("chrome/")||KT(e))&&!e.includes("edge/"))return"Chrome";if(YT(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function HT(n=tn()){return/firefox\//i.test(n)}function GT(n=tn()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function KT(n=tn()){return/crios\//i.test(n)}function QT(n=tn()){return/iemobile/i.test(n)}function YT(n=tn()){return/android/i.test(n)}function XT(n=tn()){return/blackberry/i.test(n)}function JT(n=tn()){return/webos/i.test(n)}function Jm(n=tn()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function dN(n=tn()){var e;return Jm(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function fN(){return tk()&&document.documentMode===10}function ZT(n=tn()){return Jm(n)||YT(n)||JT(n)||XT(n)||/windows phone/i.test(n)||QT(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eI(n,e=[]){let t;switch(n){case"Browser":t=Hv(tn());break;case"Worker":t=`${Hv(tn())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${no}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=a=>new Promise((u,h)=>{try{const f=e(a);u(f)}catch(f){h(f)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mN(n,e={}){return us(n,"GET","/v2/passwordPolicy",ls(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gN=6;class _N{constructor(e){var t,r,s,a;const u=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=u.minPasswordLength)!==null&&t!==void 0?t:gN,u.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=u.maxPasswordLength),u.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=u.containsLowercaseCharacter),u.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=u.containsUppercaseCharacter),u.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=u.containsNumericCharacter),u.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=u.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(a=e.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,a,u,h;const f={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,f),this.validatePasswordCharacterOptions(e,f),f.isValid&&(f.isValid=(t=f.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),f.isValid&&(f.isValid=(r=f.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),f.isValid&&(f.isValid=(s=f.containsLowercaseLetter)!==null&&s!==void 0?s:!0),f.isValid&&(f.isValid=(a=f.containsUppercaseLetter)!==null&&a!==void 0?a:!0),f.isValid&&(f.isValid=(u=f.containsNumericCharacter)!==null&&u!==void 0?u:!0),f.isValid&&(f.isValid=(h=f.containsNonAlphanumericCharacter)!==null&&h!==void 0?h:!0),f}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yN{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Gv(this),this.idTokenSubscription=new Gv(this),this.beforeStateQueue=new pN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=FT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ni(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await ga.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await $T(this,{idToken:e}),r=await ti._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Cr(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(h,h))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,h=s==null?void 0:s._redirectEventId,f=await this.tryRedirectSignIn(e);(!u||u===h)&&(f!=null&&f.user)&&(s=f.user,a=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(s)}catch(u){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ve(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Fh(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=X1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Cr(this.app))return Promise.reject(si(this));const t=e?yt(e):null;return t&&ve(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ve(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Cr(this.app)?Promise.reject(si(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Cr(this.app)?Promise.reject(si(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ni(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await mN(this),t=new _N(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new to("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await hN(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ni(e)||this._popupRedirectResolver;ve(t,this,"argument-error"),this.redirectPersistenceManager=await ga.create(this,[ni(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let u=!1;const h=this._isInitialized?Promise.resolve():this._initializationPromise;if(ve(h,this,"internal-error"),h.then(()=>{u||a(this.currentUser)}),typeof t=="function"){const f=e.addObserver(t,r,s);return()=>{u=!0,f()}}else{const f=e.addObserver(t);return()=>{u=!0,f()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ve(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=eI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&K1(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function ro(n){return yt(n)}class Gv{constructor(e){this.auth=e,this.observer=null,this.addObserver=hk(t=>this.observer=t)}get next(){return ve(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function vN(n){yd=n}function tI(n){return yd.loadJS(n)}function EN(){return yd.recaptchaEnterpriseScript}function wN(){return yd.gapiScript}function TN(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class IN{constructor(){this.enterprise=new SN}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class SN{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const CN="recaptcha-enterprise",nI="NO_RECAPTCHA";class RN{constructor(e){this.type=CN,this.auth=ro(e)}async verify(e="verify",t=!1){async function r(a){if(!t){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(u,h)=>{rN(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(f=>{if(f.recaptchaKey===void 0)h(new Error("recaptcha Enterprise site key undefined"));else{const m=new nN(f);return a.tenantId==null?a._agentRecaptchaConfig=m:a._tenantRecaptchaConfigs[a.tenantId]=m,u(m.siteKey)}}).catch(f=>{h(f)})})}function s(a,u,h){const f=window.grecaptcha;Bv(f)?f.enterprise.ready(()=>{f.enterprise.execute(a,{action:e}).then(m=>{u(m)}).catch(()=>{u(nI)})}):h(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new IN().execute("siteKey",{action:"verify"}):new Promise((a,u)=>{r(this.auth).then(h=>{if(!t&&Bv(window.grecaptcha))s(h,a,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}let f=EN();f.length!==0&&(f+=h),tI(f).then(()=>{s(h,a,u)}).catch(m=>{u(m)})}}).catch(h=>{u(h)})})}}async function Kv(n,e,t,r=!1,s=!1){const a=new RN(n);let u;if(s)u=nI;else try{u=await a.verify(t)}catch{u=await a.verify(t,!0)}const h=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in h){const f=h.phoneEnrollmentInfo.phoneNumber,m=h.phoneEnrollmentInfo.recaptchaToken;Object.assign(h,{phoneEnrollmentInfo:{phoneNumber:f,recaptchaToken:m,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in h){const f=h.phoneSignInInfo.recaptchaToken;Object.assign(h,{phoneSignInInfo:{recaptchaToken:f,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return h}return r?Object.assign(h,{captchaResp:u}):Object.assign(h,{captchaResponse:u}),Object.assign(h,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(h,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),h}async function em(n,e,t,r,s){var a;if(!((a=n._getRecaptchaConfig())===null||a===void 0)&&a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const u=await Kv(n,e,t,t==="getOobCode");return r(n,u)}else return r(n,e).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const h=await Kv(n,e,t,t==="getOobCode");return r(n,h)}else return Promise.reject(u)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AN(n,e){const t=as(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),a=t.getOptions();if(du(a,e??{}))return s;cr(s,"already-initialized")}return t.initialize({options:e})}function kN(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(ni);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function PN(n,e,t){const r=ro(n);ve(r._canInitEmulator,r,"emulator-config-failed"),ve(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,a=rI(e),{host:u,port:h}=NN(e),f=h===null?"":`:${h}`;r.config.emulator={url:`${a}//${u}${f}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:u,port:h,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:s})}),xN()}function rI(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function NN(n){const e=rI(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const a=s[1];return{host:a,port:Qv(r.substr(a.length+1))}}else{const[a,u]=r.split(":");return{host:a,port:Qv(u)}}}function Qv(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function xN(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ei("not implemented")}_getIdTokenResponse(e){return ei("not implemented")}_linkToIdToken(e,t){return ei("not implemented")}_getReauthenticationResolver(e){return ei("not implemented")}}async function bN(n,e){return us(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DN(n,e){return Pu(n,"POST","/v1/accounts:signInWithPassword",ls(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ON(n,e){return Pu(n,"POST","/v1/accounts:signInWithEmailLink",ls(n,e))}async function LN(n,e){return Pu(n,"POST","/v1/accounts:signInWithEmailLink",ls(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu extends Zm{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new mu(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new mu(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return em(e,t,"signInWithPassword",DN);case"emailLink":return ON(e,{email:this._email,oobCode:this._password});default:cr(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return em(e,r,"signUpPassword",bN);case"emailLink":return LN(e,{idToken:t,email:this._email,oobCode:this._password});default:cr(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _a(n,e){return Pu(n,"POST","/v1/accounts:signInWithIdp",ls(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MN="http://localhost";class Ks extends Zm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ks(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):cr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,a=Km(t,["providerId","signInMethod"]);if(!r||!s)return null;const u=new Ks(r,s);return u.idToken=a.idToken||void 0,u.accessToken=a.accessToken||void 0,u.secret=a.secret,u.nonce=a.nonce,u.pendingToken=a.pendingToken||null,u}_getIdTokenResponse(e){const t=this.buildRequest();return _a(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,_a(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,_a(e,t)}buildRequest(){const e={requestUri:MN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Oa(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VN(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function FN(n){const e=ql(Hl(n)).link,t=e?ql(Hl(e)).deep_link_id:null,r=ql(Hl(n)).deep_link_id;return(r?ql(Hl(r)).link:null)||r||t||e||n}class eg{constructor(e){var t,r,s,a,u,h;const f=ql(Hl(e)),m=(t=f.apiKey)!==null&&t!==void 0?t:null,y=(r=f.oobCode)!==null&&r!==void 0?r:null,E=VN((s=f.mode)!==null&&s!==void 0?s:null);ve(m&&y&&E,"argument-error"),this.apiKey=m,this.operation=E,this.code=y,this.continueUrl=(a=f.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(u=f.languageCode)!==null&&u!==void 0?u:null,this.tenantId=(h=f.tenantId)!==null&&h!==void 0?h:null}static parseLink(e){const t=FN(e);try{return new eg(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(){this.providerId=La.PROVIDER_ID}static credential(e,t){return mu._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=eg.parseLink(t);return ve(r,"argument-error"),mu._fromEmailAndCode(e,r.code,r.tenantId)}}La.PROVIDER_ID="password";La.EMAIL_PASSWORD_SIGN_IN_METHOD="password";La.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu extends iI{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi extends Nu{constructor(){super("facebook.com")}static credential(e){return Ks._fromParams({providerId:Bi.PROVIDER_ID,signInMethod:Bi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bi.credentialFromTaggedObject(e)}static credentialFromError(e){return Bi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Bi.credential(e.oauthAccessToken)}catch{return null}}}Bi.FACEBOOK_SIGN_IN_METHOD="facebook.com";Bi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i extends Nu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ks._fromParams({providerId:$i.PROVIDER_ID,signInMethod:$i.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return $i.credentialFromTaggedObject(e)}static credentialFromError(e){return $i.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return $i.credential(t,r)}catch{return null}}}$i.GOOGLE_SIGN_IN_METHOD="google.com";$i.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi extends Nu{constructor(){super("github.com")}static credential(e){return Ks._fromParams({providerId:Wi.PROVIDER_ID,signInMethod:Wi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wi.credentialFromTaggedObject(e)}static credentialFromError(e){return Wi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wi.credential(e.oauthAccessToken)}catch{return null}}}Wi.GITHUB_SIGN_IN_METHOD="github.com";Wi.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi extends Nu{constructor(){super("twitter.com")}static credential(e,t){return Ks._fromParams({providerId:qi.PROVIDER_ID,signInMethod:qi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return qi.credentialFromTaggedObject(e)}static credentialFromError(e){return qi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return qi.credential(t,r)}catch{return null}}}qi.TWITTER_SIGN_IN_METHOD="twitter.com";qi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UN(n,e){return Pu(n,"POST","/v1/accounts:signUp",ls(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const a=await ti._fromIdTokenResponse(e,r,s),u=Yv(r);return new Qs({user:a,providerId:u,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Yv(r);return new Qs({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Yv(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh extends dr{constructor(e,t,r,s){var a;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Uh.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Uh(e,t,r,s)}}function sI(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?Uh._fromErrorAndOperation(n,a,e,r):a})}async function jN(n,e,t=!1){const r=await pu(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Qs._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zN(n,e,t=!1){const{auth:r}=n;if(Cr(r.app))return Promise.reject(si(r));const s="reauthenticate";try{const a=await pu(n,sI(r,s,e,n),t);ve(a.idToken,r,"internal-error");const u=Xm(a.idToken);ve(u,r,"internal-error");const{sub:h}=u;return ve(n.uid===h,r,"user-mismatch"),Qs._forOperation(n,s,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&cr(r,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oI(n,e,t=!1){if(Cr(n.app))return Promise.reject(si(n));const r="signIn",s=await sI(n,r,e),a=await Qs._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(a.user),a}async function BN(n,e){return oI(ro(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aI(n){const e=ro(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function $N(n,e,t){if(Cr(n.app))return Promise.reject(si(n));const r=ro(n),u=await em(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",UN).catch(f=>{throw f.code==="auth/password-does-not-meet-requirements"&&aI(n),f}),h=await Qs._fromIdTokenResponse(r,"signIn",u);return await r._updateCurrentUser(h.user),h}function WN(n,e,t){return Cr(n.app)?Promise.reject(si(n)):BN(yt(n),La.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&aI(n),r})}function qN(n,e,t,r){return yt(n).onIdTokenChanged(e,t,r)}function HN(n,e,t){return yt(n).beforeAuthStateChanged(e,t)}function GN(n,e,t,r){return yt(n).onAuthStateChanged(e,t,r)}function KN(n){return yt(n).signOut()}const jh="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(jh,"1"),this.storage.removeItem(jh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QN=1e3,YN=10;class uI extends lI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ZT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((u,h,f)=>{this.notifyListeners(u,f)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const u=this.storage.getItem(r);!t&&this.localCache[r]===u||this.notifyListeners(r,u)},a=this.storage.getItem(r);fN()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,YN):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},QN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}uI.type="LOCAL";const XN=uI;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cI extends lI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}cI.type="SESSION";const hI=cI;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JN(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new vd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:a}=t.data,u=this.handlersMap[s];if(!(u!=null&&u.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const h=Array.from(u).map(async m=>m(t.origin,a)),f=await JN(h);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:f})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}vd.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tg(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let a,u;return new Promise((h,f)=>{const m=tg("",20);s.port1.start();const y=setTimeout(()=>{f(new Error("unsupported_event"))},r);u={messageChannel:s,onMessage(E){const T=E;if(T.data.eventId===m)switch(T.data.status){case"ack":clearTimeout(y),a=setTimeout(()=>{f(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),h(T.data.response);break;default:clearTimeout(y),clearTimeout(a),f(new Error("invalid_response"));break}}},this.handlers.add(u),s.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:m,data:t},[s.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kr(){return window}function ex(n){kr().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dI(){return typeof kr().WorkerGlobalScope<"u"&&typeof kr().importScripts=="function"}async function tx(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function nx(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function rx(){return dI()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fI="firebaseLocalStorageDb",ix=1,zh="firebaseLocalStorage",pI="fbase_key";class xu{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ed(n,e){return n.transaction([zh],e?"readwrite":"readonly").objectStore(zh)}function sx(){const n=indexedDB.deleteDatabase(fI);return new xu(n).toPromise()}function tm(){const n=indexedDB.open(fI,ix);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(zh,{keyPath:pI})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(zh)?e(r):(r.close(),await sx(),e(await tm()))})})}async function Xv(n,e,t){const r=Ed(n,!0).put({[pI]:e,value:t});return new xu(r).toPromise()}async function ox(n,e){const t=Ed(n,!1).get(e),r=await new xu(t).toPromise();return r===void 0?null:r.value}function Jv(n,e){const t=Ed(n,!0).delete(e);return new xu(t).toPromise()}const ax=800,lx=3;class mI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await tm(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>lx)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return dI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=vd._getInstance(rx()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await tx(),!this.activeServiceWorker)return;this.sender=new ZN(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||nx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await tm();return await Xv(e,jh,"1"),await Jv(e,jh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Xv(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>ox(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Jv(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const a=Ed(s,!1).getAll();return new xu(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:a}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(a)&&(this.notifyListeners(s,a),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ax)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}mI.type="LOCAL";const ux=mI;new ku(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cx(n,e){return e?ni(e):(ve(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng extends Zm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return _a(e,this._buildIdpRequest())}_linkToIdToken(e,t){return _a(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return _a(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function hx(n){return oI(n.auth,new ng(n),n.bypassAuthState)}function dx(n){const{auth:e,user:t}=n;return ve(t,e,"internal-error"),zN(t,new ng(n),n.bypassAuthState)}async function fx(n){const{auth:e,user:t}=n;return ve(t,e,"internal-error"),jN(t,new ng(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{constructor(e,t,r,s,a=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:a,error:u,type:h}=e;if(u){this.reject(u);return}const f={auth:this.auth,requestUri:t,sessionId:r,tenantId:a||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(h)(f))}catch(m){this.reject(m)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return hx;case"linkViaPopup":case"linkViaRedirect":return fx;case"reauthViaPopup":case"reauthViaRedirect":return dx;default:cr(this.auth,"internal-error")}}resolve(e){ui(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ui(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const px=new ku(2e3,1e4);class da extends gI{constructor(e,t,r,s,a){super(e,t,s,a),this.provider=r,this.authWindow=null,this.pollId=null,da.currentPopupAction&&da.currentPopupAction.cancel(),da.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ve(e,this.auth,"internal-error"),e}async onExecution(){ui(this.filter.length===1,"Popup operations only handle one event");const e=tg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ar(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ar(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,da.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ar(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,px.get())};e()}}da.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mx="pendingRedirect",vh=new Map;class gx extends gI{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=vh.get(this.auth._key());if(!e){try{const r=await _x(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}vh.set(this.auth._key(),e)}return this.bypassAuthState||vh.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function _x(n,e){const t=Ex(e),r=vx(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function yx(n,e){vh.set(n._key(),e)}function vx(n){return ni(n._redirectPersistence)}function Ex(n){return yh(mx,n.config.apiKey,n.name)}async function wx(n,e,t=!1){if(Cr(n.app))return Promise.reject(si(n));const r=ro(n),s=cx(r,e),u=await new gx(r,s,t).execute();return u&&!t&&(delete u.user._redirectEventId,await r._persistUserIfCurrent(u.user),await r._setRedirectUser(null,e)),u}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tx=10*60*1e3;class Ix{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Sx(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!_I(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Ar(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Tx&&this.cachedEventUids.clear(),this.cachedEventUids.has(Zv(e))}saveEventToCache(e){this.cachedEventUids.add(Zv(e)),this.lastProcessedEventTime=Date.now()}}function Zv(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function _I({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Sx(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return _I(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cx(n,e={}){return us(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ax=/^https?/;async function kx(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Cx(n);for(const t of e)try{if(Px(t))return}catch{}cr(n,"unauthorized-domain")}function Px(n){const e=Jp(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const u=new URL(n);return u.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&u.hostname===r}if(!Ax.test(t))return!1;if(Rx.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nx=new ku(3e4,6e4);function eE(){const n=kr().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function xx(n){return new Promise((e,t)=>{var r,s,a;function u(){eE(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{eE(),t(Ar(n,"network-request-failed"))},timeout:Nx.get()})}if(!((s=(r=kr().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((a=kr().gapi)===null||a===void 0)&&a.load)u();else{const h=TN("iframefcb");return kr()[h]=()=>{gapi.load?u():t(Ar(n,"network-request-failed"))},tI(`${wN()}?onload=${h}`).catch(f=>t(f))}}).catch(e=>{throw Eh=null,e})}let Eh=null;function bx(n){return Eh=Eh||xx(n),Eh}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dx=new ku(5e3,15e3),Ox="__/auth/iframe",Lx="emulator/auth/iframe",Mx={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Vx=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Fx(n){const e=n.config;ve(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Ym(e,Lx):`https://${n.config.authDomain}/${Ox}`,r={apiKey:e.apiKey,appName:n.name,v:no},s=Vx.get(n.config.apiHost);s&&(r.eid=s);const a=n._getFrameworks();return a.length&&(r.fw=a.join(",")),`${t}?${Oa(r).slice(1)}`}async function Ux(n){const e=await bx(n),t=kr().gapi;return ve(t,n,"internal-error"),e.open({where:document.body,url:Fx(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Mx,dontclear:!0},r=>new Promise(async(s,a)=>{await r.restyle({setHideOnLeave:!1});const u=Ar(n,"network-request-failed"),h=kr().setTimeout(()=>{a(u)},Dx.get());function f(){kr().clearTimeout(h),s(r)}r.ping(f).then(f,()=>{a(u)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jx={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},zx=500,Bx=600,$x="_blank",Wx="http://localhost";class tE{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function qx(n,e,t,r=zx,s=Bx){const a=Math.max((window.screen.availHeight-s)/2,0).toString(),u=Math.max((window.screen.availWidth-r)/2,0).toString();let h="";const f=Object.assign(Object.assign({},jx),{width:r.toString(),height:s.toString(),top:a,left:u}),m=tn().toLowerCase();t&&(h=KT(m)?$x:t),HT(m)&&(e=e||Wx,f.scrollbars="yes");const y=Object.entries(f).reduce((T,[R,x])=>`${T}${R}=${x},`,"");if(dN(m)&&h!=="_self")return Hx(e||"",h),new tE(null);const E=window.open(e||"",h,y);ve(E,n,"popup-blocked");try{E.focus()}catch{}return new tE(E)}function Hx(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gx="__/auth/handler",Kx="emulator/auth/handler",Qx=encodeURIComponent("fac");async function nE(n,e,t,r,s,a){ve(n.config.authDomain,n,"auth-domain-config-required"),ve(n.config.apiKey,n,"invalid-api-key");const u={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:no,eventId:s};if(e instanceof iI){e.setDefaultLanguage(n.languageCode),u.providerId=e.providerId||"",qp(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,E]of Object.entries({}))u[y]=E}if(e instanceof Nu){const y=e.getScopes().filter(E=>E!=="");y.length>0&&(u.scopes=y.join(","))}n.tenantId&&(u.tid=n.tenantId);const h=u;for(const y of Object.keys(h))h[y]===void 0&&delete h[y];const f=await n._getAppCheckToken(),m=f?`#${Qx}=${encodeURIComponent(f)}`:"";return`${Yx(n)}?${Oa(h).slice(1)}${m}`}function Yx({config:n}){return n.emulator?Ym(n,Kx):`https://${n.authDomain}/${Gx}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xp="webStorageSupport";class Xx{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=hI,this._completeRedirectFn=wx,this._overrideRedirectResult=yx}async _openPopup(e,t,r,s){var a;ui((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const u=await nE(e,t,r,Jp(),s);return qx(e,u,tg())}async _openRedirect(e,t,r,s){await this._originValidation(e);const a=await nE(e,t,r,Jp(),s);return ex(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:a}=this.eventManagers[t];return s?Promise.resolve(s):(ui(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Ux(e),r=new Ix(e);return t.register("authEvent",s=>(ve(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(xp,{type:xp},s=>{var a;const u=(a=s==null?void 0:s[0])===null||a===void 0?void 0:a[xp];u!==void 0&&t(!!u),cr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=kx(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ZT()||GT()||Jm()}}const Jx=Xx;var rE="@firebase/auth",iE="1.8.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ve(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eb(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function tb(n){ur(new Bn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:u,authDomain:h}=r.options;ve(u&&!u.includes(":"),"invalid-api-key",{appName:r.name});const f={apiKey:u,authDomain:h,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:eI(n)},m=new yN(r,s,a,f);return kN(m,t),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),ur(new Bn("auth-internal",e=>{const t=ro(e.getProvider("auth").getImmediate());return(r=>new Zx(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),yn(rE,iE,eb(n)),yn(rE,iE,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nb=5*60,rb=nT("authIdTokenMaxAge")||nb;let sE=null;const ib=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>rb)return;const s=t==null?void 0:t.token;sE!==s&&(sE=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function sb(n=md()){const e=as(n,"auth");if(e.isInitialized())return e.getImmediate();const t=AN(n,{popupRedirectResolver:Jx,persistence:[ux,XN,hI]}),r=nT("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(r,location.origin);if(location.origin===a.origin){const u=ib(a.toString());HN(t,u,()=>u(t.currentUser)),qN(t,h=>u(h))}}const s=Zw("auth");return s&&PN(t,`http://${s}`),t}function ob(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}vN({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const a=Ar("internal-error");a.customData=s,t(a)},r.type="text/javascript",r.charset="UTF-8",ob().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});tb("Browser");var oE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Yi,yI;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,S){function A(){}A.prototype=S.prototype,b.D=S.prototype,b.prototype=new A,b.prototype.constructor=b,b.C=function(N,O,V){for(var k=Array(arguments.length-2),ct=2;ct<arguments.length;ct++)k[ct-2]=arguments[ct];return S.prototype[O].apply(N,k)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,S,A){A||(A=0);var N=Array(16);if(typeof S=="string")for(var O=0;16>O;++O)N[O]=S.charCodeAt(A++)|S.charCodeAt(A++)<<8|S.charCodeAt(A++)<<16|S.charCodeAt(A++)<<24;else for(O=0;16>O;++O)N[O]=S[A++]|S[A++]<<8|S[A++]<<16|S[A++]<<24;S=b.g[0],A=b.g[1],O=b.g[2];var V=b.g[3],k=S+(V^A&(O^V))+N[0]+3614090360&4294967295;S=A+(k<<7&4294967295|k>>>25),k=V+(O^S&(A^O))+N[1]+3905402710&4294967295,V=S+(k<<12&4294967295|k>>>20),k=O+(A^V&(S^A))+N[2]+606105819&4294967295,O=V+(k<<17&4294967295|k>>>15),k=A+(S^O&(V^S))+N[3]+3250441966&4294967295,A=O+(k<<22&4294967295|k>>>10),k=S+(V^A&(O^V))+N[4]+4118548399&4294967295,S=A+(k<<7&4294967295|k>>>25),k=V+(O^S&(A^O))+N[5]+1200080426&4294967295,V=S+(k<<12&4294967295|k>>>20),k=O+(A^V&(S^A))+N[6]+2821735955&4294967295,O=V+(k<<17&4294967295|k>>>15),k=A+(S^O&(V^S))+N[7]+4249261313&4294967295,A=O+(k<<22&4294967295|k>>>10),k=S+(V^A&(O^V))+N[8]+1770035416&4294967295,S=A+(k<<7&4294967295|k>>>25),k=V+(O^S&(A^O))+N[9]+2336552879&4294967295,V=S+(k<<12&4294967295|k>>>20),k=O+(A^V&(S^A))+N[10]+4294925233&4294967295,O=V+(k<<17&4294967295|k>>>15),k=A+(S^O&(V^S))+N[11]+2304563134&4294967295,A=O+(k<<22&4294967295|k>>>10),k=S+(V^A&(O^V))+N[12]+1804603682&4294967295,S=A+(k<<7&4294967295|k>>>25),k=V+(O^S&(A^O))+N[13]+4254626195&4294967295,V=S+(k<<12&4294967295|k>>>20),k=O+(A^V&(S^A))+N[14]+2792965006&4294967295,O=V+(k<<17&4294967295|k>>>15),k=A+(S^O&(V^S))+N[15]+1236535329&4294967295,A=O+(k<<22&4294967295|k>>>10),k=S+(O^V&(A^O))+N[1]+4129170786&4294967295,S=A+(k<<5&4294967295|k>>>27),k=V+(A^O&(S^A))+N[6]+3225465664&4294967295,V=S+(k<<9&4294967295|k>>>23),k=O+(S^A&(V^S))+N[11]+643717713&4294967295,O=V+(k<<14&4294967295|k>>>18),k=A+(V^S&(O^V))+N[0]+3921069994&4294967295,A=O+(k<<20&4294967295|k>>>12),k=S+(O^V&(A^O))+N[5]+3593408605&4294967295,S=A+(k<<5&4294967295|k>>>27),k=V+(A^O&(S^A))+N[10]+38016083&4294967295,V=S+(k<<9&4294967295|k>>>23),k=O+(S^A&(V^S))+N[15]+3634488961&4294967295,O=V+(k<<14&4294967295|k>>>18),k=A+(V^S&(O^V))+N[4]+3889429448&4294967295,A=O+(k<<20&4294967295|k>>>12),k=S+(O^V&(A^O))+N[9]+568446438&4294967295,S=A+(k<<5&4294967295|k>>>27),k=V+(A^O&(S^A))+N[14]+3275163606&4294967295,V=S+(k<<9&4294967295|k>>>23),k=O+(S^A&(V^S))+N[3]+4107603335&4294967295,O=V+(k<<14&4294967295|k>>>18),k=A+(V^S&(O^V))+N[8]+1163531501&4294967295,A=O+(k<<20&4294967295|k>>>12),k=S+(O^V&(A^O))+N[13]+2850285829&4294967295,S=A+(k<<5&4294967295|k>>>27),k=V+(A^O&(S^A))+N[2]+4243563512&4294967295,V=S+(k<<9&4294967295|k>>>23),k=O+(S^A&(V^S))+N[7]+1735328473&4294967295,O=V+(k<<14&4294967295|k>>>18),k=A+(V^S&(O^V))+N[12]+2368359562&4294967295,A=O+(k<<20&4294967295|k>>>12),k=S+(A^O^V)+N[5]+4294588738&4294967295,S=A+(k<<4&4294967295|k>>>28),k=V+(S^A^O)+N[8]+2272392833&4294967295,V=S+(k<<11&4294967295|k>>>21),k=O+(V^S^A)+N[11]+1839030562&4294967295,O=V+(k<<16&4294967295|k>>>16),k=A+(O^V^S)+N[14]+4259657740&4294967295,A=O+(k<<23&4294967295|k>>>9),k=S+(A^O^V)+N[1]+2763975236&4294967295,S=A+(k<<4&4294967295|k>>>28),k=V+(S^A^O)+N[4]+1272893353&4294967295,V=S+(k<<11&4294967295|k>>>21),k=O+(V^S^A)+N[7]+4139469664&4294967295,O=V+(k<<16&4294967295|k>>>16),k=A+(O^V^S)+N[10]+3200236656&4294967295,A=O+(k<<23&4294967295|k>>>9),k=S+(A^O^V)+N[13]+681279174&4294967295,S=A+(k<<4&4294967295|k>>>28),k=V+(S^A^O)+N[0]+3936430074&4294967295,V=S+(k<<11&4294967295|k>>>21),k=O+(V^S^A)+N[3]+3572445317&4294967295,O=V+(k<<16&4294967295|k>>>16),k=A+(O^V^S)+N[6]+76029189&4294967295,A=O+(k<<23&4294967295|k>>>9),k=S+(A^O^V)+N[9]+3654602809&4294967295,S=A+(k<<4&4294967295|k>>>28),k=V+(S^A^O)+N[12]+3873151461&4294967295,V=S+(k<<11&4294967295|k>>>21),k=O+(V^S^A)+N[15]+530742520&4294967295,O=V+(k<<16&4294967295|k>>>16),k=A+(O^V^S)+N[2]+3299628645&4294967295,A=O+(k<<23&4294967295|k>>>9),k=S+(O^(A|~V))+N[0]+4096336452&4294967295,S=A+(k<<6&4294967295|k>>>26),k=V+(A^(S|~O))+N[7]+1126891415&4294967295,V=S+(k<<10&4294967295|k>>>22),k=O+(S^(V|~A))+N[14]+2878612391&4294967295,O=V+(k<<15&4294967295|k>>>17),k=A+(V^(O|~S))+N[5]+4237533241&4294967295,A=O+(k<<21&4294967295|k>>>11),k=S+(O^(A|~V))+N[12]+1700485571&4294967295,S=A+(k<<6&4294967295|k>>>26),k=V+(A^(S|~O))+N[3]+2399980690&4294967295,V=S+(k<<10&4294967295|k>>>22),k=O+(S^(V|~A))+N[10]+4293915773&4294967295,O=V+(k<<15&4294967295|k>>>17),k=A+(V^(O|~S))+N[1]+2240044497&4294967295,A=O+(k<<21&4294967295|k>>>11),k=S+(O^(A|~V))+N[8]+1873313359&4294967295,S=A+(k<<6&4294967295|k>>>26),k=V+(A^(S|~O))+N[15]+4264355552&4294967295,V=S+(k<<10&4294967295|k>>>22),k=O+(S^(V|~A))+N[6]+2734768916&4294967295,O=V+(k<<15&4294967295|k>>>17),k=A+(V^(O|~S))+N[13]+1309151649&4294967295,A=O+(k<<21&4294967295|k>>>11),k=S+(O^(A|~V))+N[4]+4149444226&4294967295,S=A+(k<<6&4294967295|k>>>26),k=V+(A^(S|~O))+N[11]+3174756917&4294967295,V=S+(k<<10&4294967295|k>>>22),k=O+(S^(V|~A))+N[2]+718787259&4294967295,O=V+(k<<15&4294967295|k>>>17),k=A+(V^(O|~S))+N[9]+3951481745&4294967295,b.g[0]=b.g[0]+S&4294967295,b.g[1]=b.g[1]+(O+(k<<21&4294967295|k>>>11))&4294967295,b.g[2]=b.g[2]+O&4294967295,b.g[3]=b.g[3]+V&4294967295}r.prototype.u=function(b,S){S===void 0&&(S=b.length);for(var A=S-this.blockSize,N=this.B,O=this.h,V=0;V<S;){if(O==0)for(;V<=A;)s(this,b,V),V+=this.blockSize;if(typeof b=="string"){for(;V<S;)if(N[O++]=b.charCodeAt(V++),O==this.blockSize){s(this,N),O=0;break}}else for(;V<S;)if(N[O++]=b[V++],O==this.blockSize){s(this,N),O=0;break}}this.h=O,this.o+=S},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var S=1;S<b.length-8;++S)b[S]=0;var A=8*this.o;for(S=b.length-8;S<b.length;++S)b[S]=A&255,A/=256;for(this.u(b),b=Array(16),S=A=0;4>S;++S)for(var N=0;32>N;N+=8)b[A++]=this.g[S]>>>N&255;return b};function a(b,S){var A=h;return Object.prototype.hasOwnProperty.call(A,b)?A[b]:A[b]=S(b)}function u(b,S){this.h=S;for(var A=[],N=!0,O=b.length-1;0<=O;O--){var V=b[O]|0;N&&V==S||(A[O]=V,N=!1)}this.g=A}var h={};function f(b){return-128<=b&&128>b?a(b,function(S){return new u([S|0],0>S?-1:0)}):new u([b|0],0>b?-1:0)}function m(b){if(isNaN(b)||!isFinite(b))return E;if(0>b)return L(m(-b));for(var S=[],A=1,N=0;b>=A;N++)S[N]=b/A|0,A*=4294967296;return new u(S,0)}function y(b,S){if(b.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(b.charAt(0)=="-")return L(y(b.substring(1),S));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=m(Math.pow(S,8)),N=E,O=0;O<b.length;O+=8){var V=Math.min(8,b.length-O),k=parseInt(b.substring(O,O+V),S);8>V?(V=m(Math.pow(S,V)),N=N.j(V).add(m(k))):(N=N.j(A),N=N.add(m(k)))}return N}var E=f(0),T=f(1),R=f(16777216);n=u.prototype,n.m=function(){if($(this))return-L(this).m();for(var b=0,S=1,A=0;A<this.g.length;A++){var N=this.i(A);b+=(0<=N?N:4294967296+N)*S,S*=4294967296}return b},n.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(x(this))return"0";if($(this))return"-"+L(this).toString(b);for(var S=m(Math.pow(b,6)),A=this,N="";;){var O=de(A,S).g;A=q(A,O.j(S));var V=((0<A.g.length?A.g[0]:A.h)>>>0).toString(b);if(A=O,x(A))return V+N;for(;6>V.length;)V="0"+V;N=V+N}},n.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function x(b){if(b.h!=0)return!1;for(var S=0;S<b.g.length;S++)if(b.g[S]!=0)return!1;return!0}function $(b){return b.h==-1}n.l=function(b){return b=q(this,b),$(b)?-1:x(b)?0:1};function L(b){for(var S=b.g.length,A=[],N=0;N<S;N++)A[N]=~b.g[N];return new u(A,~b.h).add(T)}n.abs=function(){return $(this)?L(this):this},n.add=function(b){for(var S=Math.max(this.g.length,b.g.length),A=[],N=0,O=0;O<=S;O++){var V=N+(this.i(O)&65535)+(b.i(O)&65535),k=(V>>>16)+(this.i(O)>>>16)+(b.i(O)>>>16);N=k>>>16,V&=65535,k&=65535,A[O]=k<<16|V}return new u(A,A[A.length-1]&-2147483648?-1:0)};function q(b,S){return b.add(L(S))}n.j=function(b){if(x(this)||x(b))return E;if($(this))return $(b)?L(this).j(L(b)):L(L(this).j(b));if($(b))return L(this.j(L(b)));if(0>this.l(R)&&0>b.l(R))return m(this.m()*b.m());for(var S=this.g.length+b.g.length,A=[],N=0;N<2*S;N++)A[N]=0;for(N=0;N<this.g.length;N++)for(var O=0;O<b.g.length;O++){var V=this.i(N)>>>16,k=this.i(N)&65535,ct=b.i(O)>>>16,$t=b.i(O)&65535;A[2*N+2*O]+=k*$t,ee(A,2*N+2*O),A[2*N+2*O+1]+=V*$t,ee(A,2*N+2*O+1),A[2*N+2*O+1]+=k*ct,ee(A,2*N+2*O+1),A[2*N+2*O+2]+=V*ct,ee(A,2*N+2*O+2)}for(N=0;N<S;N++)A[N]=A[2*N+1]<<16|A[2*N];for(N=S;N<2*S;N++)A[N]=0;return new u(A,0)};function ee(b,S){for(;(b[S]&65535)!=b[S];)b[S+1]+=b[S]>>>16,b[S]&=65535,S++}function X(b,S){this.g=b,this.h=S}function de(b,S){if(x(S))throw Error("division by zero");if(x(b))return new X(E,E);if($(b))return S=de(L(b),S),new X(L(S.g),L(S.h));if($(S))return S=de(b,L(S)),new X(L(S.g),S.h);if(30<b.g.length){if($(b)||$(S))throw Error("slowDivide_ only works with positive integers.");for(var A=T,N=S;0>=N.l(b);)A=Ce(A),N=Ce(N);var O=Ie(A,1),V=Ie(N,1);for(N=Ie(N,2),A=Ie(A,2);!x(N);){var k=V.add(N);0>=k.l(b)&&(O=O.add(A),V=k),N=Ie(N,1),A=Ie(A,1)}return S=q(b,O.j(S)),new X(O,S)}for(O=E;0<=b.l(S);){for(A=Math.max(1,Math.floor(b.m()/S.m())),N=Math.ceil(Math.log(A)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),V=m(A),k=V.j(S);$(k)||0<k.l(b);)A-=N,V=m(A),k=V.j(S);x(V)&&(V=T),O=O.add(V),b=q(b,k)}return new X(O,b)}n.A=function(b){return de(this,b).h},n.and=function(b){for(var S=Math.max(this.g.length,b.g.length),A=[],N=0;N<S;N++)A[N]=this.i(N)&b.i(N);return new u(A,this.h&b.h)},n.or=function(b){for(var S=Math.max(this.g.length,b.g.length),A=[],N=0;N<S;N++)A[N]=this.i(N)|b.i(N);return new u(A,this.h|b.h)},n.xor=function(b){for(var S=Math.max(this.g.length,b.g.length),A=[],N=0;N<S;N++)A[N]=this.i(N)^b.i(N);return new u(A,this.h^b.h)};function Ce(b){for(var S=b.g.length+1,A=[],N=0;N<S;N++)A[N]=b.i(N)<<1|b.i(N-1)>>>31;return new u(A,b.h)}function Ie(b,S){var A=S>>5;S%=32;for(var N=b.g.length-A,O=[],V=0;V<N;V++)O[V]=0<S?b.i(V+A)>>>S|b.i(V+A+1)<<32-S:b.i(V+A);return new u(O,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,yI=r,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=m,u.fromString=y,Yi=u}).apply(typeof oE<"u"?oE:typeof self<"u"?self:typeof window<"u"?window:{});var oh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var vI,Gl,EI,wh,nm,wI,TI,II;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,g,v){return c==Array.prototype||c==Object.prototype||(c[g]=v.value),c};function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof oh=="object"&&oh];for(var g=0;g<c.length;++g){var v=c[g];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var r=t(this);function s(c,g){if(g)e:{var v=r;c=c.split(".");for(var I=0;I<c.length-1;I++){var F=c[I];if(!(F in v))break e;v=v[F]}c=c[c.length-1],I=v[c],g=g(I),g!=I&&g!=null&&e(v,c,{configurable:!0,writable:!0,value:g})}}function a(c,g){c instanceof String&&(c+="");var v=0,I=!1,F={next:function(){if(!I&&v<c.length){var W=v++;return{value:g(W,c[W]),done:!1}}return I=!0,{done:!0,value:void 0}}};return F[Symbol.iterator]=function(){return F},F}s("Array.prototype.values",function(c){return c||function(){return a(this,function(g,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},h=this||self;function f(c){var g=typeof c;return g=g!="object"?g:c?Array.isArray(c)?"array":g:"null",g=="array"||g=="object"&&typeof c.length=="number"}function m(c){var g=typeof c;return g=="object"&&c!=null||g=="function"}function y(c,g,v){return c.call.apply(c.bind,arguments)}function E(c,g,v){if(!c)throw Error();if(2<arguments.length){var I=Array.prototype.slice.call(arguments,2);return function(){var F=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(F,I),c.apply(g,F)}}return function(){return c.apply(g,arguments)}}function T(c,g,v){return T=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?y:E,T.apply(null,arguments)}function R(c,g){var v=Array.prototype.slice.call(arguments,1);return function(){var I=v.slice();return I.push.apply(I,arguments),c.apply(this,I)}}function x(c,g){function v(){}v.prototype=g.prototype,c.aa=g.prototype,c.prototype=new v,c.prototype.constructor=c,c.Qb=function(I,F,W){for(var te=Array(arguments.length-2),qe=2;qe<arguments.length;qe++)te[qe-2]=arguments[qe];return g.prototype[F].apply(I,te)}}function $(c){const g=c.length;if(0<g){const v=Array(g);for(let I=0;I<g;I++)v[I]=c[I];return v}return[]}function L(c,g){for(let v=1;v<arguments.length;v++){const I=arguments[v];if(f(I)){const F=c.length||0,W=I.length||0;c.length=F+W;for(let te=0;te<W;te++)c[F+te]=I[te]}else c.push(I)}}class q{constructor(g,v){this.i=g,this.j=v,this.h=0,this.g=null}get(){let g;return 0<this.h?(this.h--,g=this.g,this.g=g.next,g.next=null):g=this.i(),g}}function ee(c){return/^[\s\xa0]*$/.test(c)}function X(){var c=h.navigator;return c&&(c=c.userAgent)?c:""}function de(c){return de[" "](c),c}de[" "]=function(){};var Ce=X().indexOf("Gecko")!=-1&&!(X().toLowerCase().indexOf("webkit")!=-1&&X().indexOf("Edge")==-1)&&!(X().indexOf("Trident")!=-1||X().indexOf("MSIE")!=-1)&&X().indexOf("Edge")==-1;function Ie(c,g,v){for(const I in c)g.call(v,c[I],I,c)}function b(c,g){for(const v in c)g.call(void 0,c[v],v,c)}function S(c){const g={};for(const v in c)g[v]=c[v];return g}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(c,g){let v,I;for(let F=1;F<arguments.length;F++){I=arguments[F];for(v in I)c[v]=I[v];for(let W=0;W<A.length;W++)v=A[W],Object.prototype.hasOwnProperty.call(I,v)&&(c[v]=I[v])}}function O(c){var g=1;c=c.split(":");const v=[];for(;0<g&&c.length;)v.push(c.shift()),g--;return c.length&&v.push(c.join(":")),v}function V(c){h.setTimeout(()=>{throw c},0)}function k(){var c=ge;let g=null;return c.g&&(g=c.g,c.g=c.g.next,c.g||(c.h=null),g.next=null),g}class ct{constructor(){this.h=this.g=null}add(g,v){const I=$t.get();I.set(g,v),this.h?this.h.next=I:this.g=I,this.h=I}}var $t=new q(()=>new Wt,c=>c.reset());class Wt{constructor(){this.next=this.g=this.h=null}set(g,v){this.h=g,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let He,re=!1,ge=new ct,oe=()=>{const c=h.Promise.resolve(void 0);He=()=>{c.then(M)}};var M=()=>{for(var c;c=k();){try{c.h.call(c.g)}catch(v){V(v)}var g=$t;g.j(c),100>g.h&&(g.h++,c.next=g.g,g.g=c)}re=!1};function G(){this.s=this.s,this.C=this.C}G.prototype.s=!1,G.prototype.ma=function(){this.s||(this.s=!0,this.N())},G.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function pe(c,g){this.type=c,this.g=this.target=g,this.defaultPrevented=!1}pe.prototype.h=function(){this.defaultPrevented=!0};var Re=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var c=!1,g=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const v=()=>{};h.addEventListener("test",v,g),h.removeEventListener("test",v,g)}catch{}return c}();function Ae(c,g){if(pe.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var v=this.type=c.type,I=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=g,g=c.relatedTarget){if(Ce){e:{try{de(g.nodeName);var F=!0;break e}catch{}F=!1}F||(g=null)}}else v=="mouseover"?g=c.fromElement:v=="mouseout"&&(g=c.toElement);this.relatedTarget=g,I?(this.clientX=I.clientX!==void 0?I.clientX:I.pageX,this.clientY=I.clientY!==void 0?I.clientY:I.pageY,this.screenX=I.screenX||0,this.screenY=I.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:Oe[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&Ae.aa.h.call(this)}}x(Ae,pe);var Oe={2:"touch",3:"pen",4:"mouse"};Ae.prototype.h=function(){Ae.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var ze="closure_listenable_"+(1e6*Math.random()|0),Be=0;function Qe(c,g,v,I,F){this.listener=c,this.proxy=null,this.src=g,this.type=v,this.capture=!!I,this.ha=F,this.key=++Be,this.da=this.fa=!1}function At(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Or(c){this.src=c,this.g={},this.h=0}Or.prototype.add=function(c,g,v,I,F){var W=c.toString();c=this.g[W],c||(c=this.g[W]=[],this.h++);var te=gi(c,g,I,F);return-1<te?(g=c[te],v||(g.fa=!1)):(g=new Qe(g,this.src,W,!!I,F),g.fa=v,c.push(g)),g};function fo(c,g){var v=g.type;if(v in c.g){var I=c.g[v],F=Array.prototype.indexOf.call(I,g,void 0),W;(W=0<=F)&&Array.prototype.splice.call(I,F,1),W&&(At(g),c.g[v].length==0&&(delete c.g[v],c.h--))}}function gi(c,g,v,I){for(var F=0;F<c.length;++F){var W=c[F];if(!W.da&&W.listener==g&&W.capture==!!v&&W.ha==I)return F}return-1}var hs="closure_lm_"+(1e6*Math.random()|0),po={};function Wa(c,g,v,I,F){if(Array.isArray(g)){for(var W=0;W<g.length;W++)Wa(c,g[W],v,I,F);return null}return v=Ga(v),c&&c[ze]?c.K(g,v,m(I)?!!I.capture:!1,F):qa(c,g,v,!1,I,F)}function qa(c,g,v,I,F,W){if(!g)throw Error("Invalid event type");var te=m(F)?!!F.capture:!!F,qe=go(c);if(qe||(c[hs]=qe=new Or(c)),v=qe.add(g,v,I,te,W),v.proxy)return v;if(I=Bu(),v.proxy=I,I.src=c,I.listener=v,c.addEventListener)Re||(F=te),F===void 0&&(F=!1),c.addEventListener(g.toString(),I,F);else if(c.attachEvent)c.attachEvent(Mr(g.toString()),I);else if(c.addListener&&c.removeListener)c.addListener(I);else throw Error("addEventListener and attachEvent are unavailable.");return v}function Bu(){function c(v){return g.call(c.src,c.listener,v)}const g=Ha;return c}function mo(c,g,v,I,F){if(Array.isArray(g))for(var W=0;W<g.length;W++)mo(c,g[W],v,I,F);else I=m(I)?!!I.capture:!!I,v=Ga(v),c&&c[ze]?(c=c.i,g=String(g).toString(),g in c.g&&(W=c.g[g],v=gi(W,v,I,F),-1<v&&(At(W[v]),Array.prototype.splice.call(W,v,1),W.length==0&&(delete c.g[g],c.h--)))):c&&(c=go(c))&&(g=c.g[g.toString()],c=-1,g&&(c=gi(g,v,I,F)),(v=-1<c?g[c]:null)&&Lr(v))}function Lr(c){if(typeof c!="number"&&c&&!c.da){var g=c.src;if(g&&g[ze])fo(g.i,c);else{var v=c.type,I=c.proxy;g.removeEventListener?g.removeEventListener(v,I,c.capture):g.detachEvent?g.detachEvent(Mr(v),I):g.addListener&&g.removeListener&&g.removeListener(I),(v=go(g))?(fo(v,c),v.h==0&&(v.src=null,g[hs]=null)):At(c)}}}function Mr(c){return c in po?po[c]:po[c]="on"+c}function Ha(c,g){if(c.da)c=!0;else{g=new Ae(g,this);var v=c.listener,I=c.ha||c.src;c.fa&&Lr(c),c=v.call(I,g)}return c}function go(c){return c=c[hs],c instanceof Or?c:null}var _o="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ga(c){return typeof c=="function"?c:(c[_o]||(c[_o]=function(g){return c.handleEvent(g)}),c[_o])}function Et(){G.call(this),this.i=new Or(this),this.M=this,this.F=null}x(Et,G),Et.prototype[ze]=!0,Et.prototype.removeEventListener=function(c,g,v,I){mo(this,c,g,v,I)};function wt(c,g){var v,I=c.F;if(I)for(v=[];I;I=I.F)v.push(I);if(c=c.M,I=g.type||g,typeof g=="string")g=new pe(g,c);else if(g instanceof pe)g.target=g.target||c;else{var F=g;g=new pe(I,c),N(g,F)}if(F=!0,v)for(var W=v.length-1;0<=W;W--){var te=g.g=v[W];F=Vr(te,I,!0,g)&&F}if(te=g.g=c,F=Vr(te,I,!0,g)&&F,F=Vr(te,I,!1,g)&&F,v)for(W=0;W<v.length;W++)te=g.g=v[W],F=Vr(te,I,!1,g)&&F}Et.prototype.N=function(){if(Et.aa.N.call(this),this.i){var c=this.i,g;for(g in c.g){for(var v=c.g[g],I=0;I<v.length;I++)At(v[I]);delete c.g[g],c.h--}}this.F=null},Et.prototype.K=function(c,g,v,I){return this.i.add(String(c),g,!1,v,I)},Et.prototype.L=function(c,g,v,I){return this.i.add(String(c),g,!0,v,I)};function Vr(c,g,v,I){if(g=c.i.g[String(g)],!g)return!0;g=g.concat();for(var F=!0,W=0;W<g.length;++W){var te=g[W];if(te&&!te.da&&te.capture==v){var qe=te.listener,Tt=te.ha||te.src;te.fa&&fo(c.i,te),F=qe.call(Tt,I)!==!1&&F}}return F&&!I.defaultPrevented}function Ka(c,g,v){if(typeof c=="function")v&&(c=T(c,v));else if(c&&typeof c.handleEvent=="function")c=T(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(g)?-1:h.setTimeout(c,g||0)}function _i(c){c.g=Ka(()=>{c.g=null,c.i&&(c.i=!1,_i(c))},c.l);const g=c.h;c.h=null,c.m.apply(null,g)}class ds extends G{constructor(g,v){super(),this.m=g,this.l=v,this.h=null,this.i=!1,this.g=null}j(g){this.h=arguments,this.g?this.i=!0:_i(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function fs(c){G.call(this),this.h=c,this.g={}}x(fs,G);var Qa=[];function Ya(c){Ie(c.g,function(g,v){this.g.hasOwnProperty(v)&&Lr(g)},c),c.g={}}fs.prototype.N=function(){fs.aa.N.call(this),Ya(this)},fs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Xa=h.JSON.stringify,Ja=h.JSON.parse,Za=class{stringify(c){return h.JSON.stringify(c,void 0)}parse(c){return h.JSON.parse(c,void 0)}};function ps(){}ps.prototype.h=null;function yo(c){return c.h||(c.h=c.i())}function vo(){}var Nn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function fr(){pe.call(this,"d")}x(fr,pe);function Eo(){pe.call(this,"c")}x(Eo,pe);var pr={},el=null;function ms(){return el=el||new Et}pr.La="serverreachability";function tl(c){pe.call(this,pr.La,c)}x(tl,pe);function Fr(c){const g=ms();wt(g,new tl(g))}pr.STAT_EVENT="statevent";function nl(c,g){pe.call(this,pr.STAT_EVENT,c),this.stat=g}x(nl,pe);function ht(c){const g=ms();wt(g,new nl(g,c))}pr.Ma="timingevent";function wo(c,g){pe.call(this,pr.Ma,c),this.size=g}x(wo,pe);function Wn(c,g){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){c()},g)}function gs(){this.g=!0}gs.prototype.xa=function(){this.g=!1};function _s(c,g,v,I,F,W){c.info(function(){if(c.g)if(W)for(var te="",qe=W.split("&"),Tt=0;Tt<qe.length;Tt++){var Le=qe[Tt].split("=");if(1<Le.length){var kt=Le[0];Le=Le[1];var pt=kt.split("_");te=2<=pt.length&&pt[1]=="type"?te+(kt+"="+Le+"&"):te+(kt+"=redacted&")}}else te=null;else te=W;return"XMLHTTP REQ ("+I+") [attempt "+F+"]: "+g+`
`+v+`
`+te})}function To(c,g,v,I,F,W,te){c.info(function(){return"XMLHTTP RESP ("+I+") [ attempt "+F+"]: "+g+`
`+v+`
`+W+" "+te})}function qn(c,g,v,I){c.info(function(){return"XMLHTTP TEXT ("+g+"): "+Bd(c,v)+(I?" "+I:"")})}function rl(c,g){c.info(function(){return"TIMEOUT: "+g})}gs.prototype.info=function(){};function Bd(c,g){if(!c.g)return g;if(!g)return null;try{var v=JSON.parse(g);if(v){for(c=0;c<v.length;c++)if(Array.isArray(v[c])){var I=v[c];if(!(2>I.length)){var F=I[1];if(Array.isArray(F)&&!(1>F.length)){var W=F[0];if(W!="noop"&&W!="stop"&&W!="close")for(var te=1;te<F.length;te++)F[te]=""}}}}return Xa(v)}catch{return g}}var Io={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},$u={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Hn;function ys(){}x(ys,ps),ys.prototype.g=function(){return new XMLHttpRequest},ys.prototype.i=function(){return{}},Hn=new ys;function Gn(c,g,v,I){this.j=c,this.i=g,this.l=v,this.R=I||1,this.U=new fs(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Wu}function Wu(){this.i=null,this.g="",this.h=!1}var il={},So={};function Co(c,g,v){c.L=1,c.v=Ti(wn(g)),c.m=v,c.P=!0,sl(c,null)}function sl(c,g){c.F=Date.now(),Ye(c),c.A=wn(c.v);var v=c.A,I=c.R;Array.isArray(I)||(I=[String(I)]),Si(v.i,"t",I),c.C=0,v=c.j.J,c.h=new Wu,c.g=lc(c.j,v?g:null,!c.m),0<c.O&&(c.M=new ds(T(c.Y,c,c.g),c.O)),g=c.U,v=c.g,I=c.ca;var F="readystatechange";Array.isArray(F)||(F&&(Qa[0]=F.toString()),F=Qa);for(var W=0;W<F.length;W++){var te=Wa(v,F[W],I||g.handleEvent,!1,g.h||g);if(!te)break;g.g[te.key]=te}g=c.H?S(c.H):{},c.m?(c.u||(c.u="POST"),g["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,g)):(c.u="GET",c.g.ea(c.A,c.u,null,g)),Fr(),_s(c.i,c.u,c.A,c.l,c.R,c.m)}Gn.prototype.ca=function(c){c=c.target;const g=this.M;g&&un(c)==3?g.j():this.Y(c)},Gn.prototype.Y=function(c){try{if(c==this.g)e:{const pt=un(this.g);var g=this.g.Ba();const Dn=this.g.Z();if(!(3>pt)&&(pt!=3||this.g&&(this.h.h||this.g.oa()||hl(this.g)))){this.J||pt!=4||g==7||(g==8||0>=Dn?Fr(3):Fr(2)),vs(this);var v=this.g.Z();this.X=v;t:if(qu(this)){var I=hl(this.g);c="";var F=I.length,W=un(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){xn(this),yi(this);var te="";break t}this.h.i=new h.TextDecoder}for(g=0;g<F;g++)this.h.h=!0,c+=this.h.i.decode(I[g],{stream:!(W&&g==F-1)});I.length=0,this.h.g+=c,this.C=0,te=this.h.g}else te=this.g.oa();if(this.o=v==200,To(this.i,this.u,this.A,this.l,this.R,pt,v),this.o){if(this.T&&!this.K){t:{if(this.g){var qe,Tt=this.g;if((qe=Tt.g?Tt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ee(qe)){var Le=qe;break t}}Le=null}if(v=Le)qn(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ol(this,v);else{this.o=!1,this.s=3,ht(12),xn(this),yi(this);break e}}if(this.P){v=!0;let In;for(;!this.J&&this.C<te.length;)if(In=$d(this,te),In==So){pt==4&&(this.s=4,ht(14),v=!1),qn(this.i,this.l,null,"[Incomplete Response]");break}else if(In==il){this.s=4,ht(15),qn(this.i,this.l,te,"[Invalid Chunk]"),v=!1;break}else qn(this.i,this.l,In,null),ol(this,In);if(qu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),pt!=4||te.length!=0||this.h.h||(this.s=1,ht(16),v=!1),this.o=this.o&&v,!v)qn(this.i,this.l,te,"[Invalid Chunked Response]"),xn(this),yi(this);else if(0<te.length&&!this.W){this.W=!0;var kt=this.j;kt.g==this&&kt.ba&&!kt.M&&(kt.j.info("Great, no buffering proxy detected. Bytes received: "+te.length),fl(kt),kt.M=!0,ht(11))}}else qn(this.i,this.l,te,null),ol(this,te);pt==4&&xn(this),this.o&&!this.J&&(pt==4?Mo(this.j,this):(this.o=!1,Ye(this)))}else xo(this.g),v==400&&0<te.indexOf("Unknown SID")?(this.s=3,ht(12)):(this.s=0,ht(13)),xn(this),yi(this)}}}catch{}finally{}};function qu(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function $d(c,g){var v=c.C,I=g.indexOf(`
`,v);return I==-1?So:(v=Number(g.substring(v,I)),isNaN(v)?il:(I+=1,I+v>g.length?So:(g=g.slice(I,I+v),c.C=I+v,g)))}Gn.prototype.cancel=function(){this.J=!0,xn(this)};function Ye(c){c.S=Date.now()+c.I,Hu(c,c.I)}function Hu(c,g){if(c.B!=null)throw Error("WatchDog timer not null");c.B=Wn(T(c.ba,c),g)}function vs(c){c.B&&(h.clearTimeout(c.B),c.B=null)}Gn.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(rl(this.i,this.A),this.L!=2&&(Fr(),ht(17)),xn(this),this.s=2,yi(this)):Hu(this,this.S-c)};function yi(c){c.j.G==0||c.J||Mo(c.j,c)}function xn(c){vs(c);var g=c.M;g&&typeof g.ma=="function"&&g.ma(),c.M=null,Ya(c.U),c.g&&(g=c.g,c.g=null,g.abort(),g.ma())}function ol(c,g){try{var v=c.j;if(v.G!=0&&(v.g==c||nn(v.h,c))){if(!c.K&&nn(v.h,c)&&v.G==3){try{var I=v.Da.g.parse(g)}catch{I=null}if(Array.isArray(I)&&I.length==3){var F=I;if(F[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<c.F)Lo(v),Jn(v);else break e;Oo(v),ht(18)}}else v.za=F[1],0<v.za-v.T&&37500>F[2]&&v.F&&v.v==0&&!v.C&&(v.C=Wn(T(v.Za,v),6e3));if(1>=Ku(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else $r(v,11)}else if((c.K||v.g==c)&&Lo(v),!ee(g))for(F=v.Da.g.parse(g),g=0;g<F.length;g++){let Le=F[g];if(v.T=Le[0],Le=Le[1],v.G==2)if(Le[0]=="c"){v.K=Le[1],v.ia=Le[2];const kt=Le[3];kt!=null&&(v.la=kt,v.j.info("VER="+v.la));const pt=Le[4];pt!=null&&(v.Aa=pt,v.j.info("SVER="+v.Aa));const Dn=Le[5];Dn!=null&&typeof Dn=="number"&&0<Dn&&(I=1.5*Dn,v.L=I,v.j.info("backChannelRequestTimeoutMs_="+I)),I=v;const In=c.g;if(In){const Rs=In.g?In.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Rs){var W=I.h;W.g||Rs.indexOf("spdy")==-1&&Rs.indexOf("quic")==-1&&Rs.indexOf("h2")==-1||(W.j=W.l,W.g=new Set,W.h&&(al(W,W.h),W.h=null))}if(I.D){const Fo=In.g?In.g.getResponseHeader("X-HTTP-Session-Id"):null;Fo&&(I.ya=Fo,Ke(I.I,I.D,Fo))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-c.F,v.j.info("Handshake RTT: "+v.R+"ms")),I=v;var te=c;if(I.qa=ac(I,I.J?I.ia:null,I.W),te.K){Qu(I.h,te);var qe=te,Tt=I.L;Tt&&(qe.I=Tt),qe.B&&(vs(qe),Ye(qe)),I.g=te}else Cs(I);0<v.i.length&&yr(v)}else Le[0]!="stop"&&Le[0]!="close"||$r(v,7);else v.G==3&&(Le[0]=="stop"||Le[0]=="close"?Le[0]=="stop"?$r(v,7):Vt(v):Le[0]!="noop"&&v.l&&v.l.ta(Le),v.v=0)}}Fr(4)}catch{}}var Gu=class{constructor(c,g){this.g=c,this.map=g}};function Es(c){this.l=c||10,h.PerformanceNavigationTiming?(c=h.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function En(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Ku(c){return c.h?1:c.g?c.g.size:0}function nn(c,g){return c.h?c.h==g:c.g?c.g.has(g):!1}function al(c,g){c.g?c.g.add(g):c.h=g}function Qu(c,g){c.h&&c.h==g?c.h=null:c.g&&c.g.has(g)&&c.g.delete(g)}Es.prototype.cancel=function(){if(this.i=Yu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Yu(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let g=c.i;for(const v of c.g.values())g=g.concat(v.D);return g}return $(c.i)}function Ro(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(f(c)){for(var g=[],v=c.length,I=0;I<v;I++)g.push(c[I]);return g}g=[],v=0;for(I in c)g[v++]=c[I];return g}function Ao(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(f(c)||typeof c=="string"){var g=[];c=c.length;for(var v=0;v<c;v++)g.push(v);return g}g=[],v=0;for(const I in c)g[v++]=I;return g}}}function vi(c,g){if(c.forEach&&typeof c.forEach=="function")c.forEach(g,void 0);else if(f(c)||typeof c=="string")Array.prototype.forEach.call(c,g,void 0);else for(var v=Ao(c),I=Ro(c),F=I.length,W=0;W<F;W++)g.call(void 0,I[W],v&&v[W],c)}var ws=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Wd(c,g){if(c){c=c.split("&");for(var v=0;v<c.length;v++){var I=c[v].indexOf("="),F=null;if(0<=I){var W=c[v].substring(0,I);F=c[v].substring(I+1)}else W=c[v];g(W,F?decodeURIComponent(F.replace(/\+/g," ")):"")}}}function Ur(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof Ur){this.h=c.h,Ts(this,c.j),this.o=c.o,this.g=c.g,Ei(this,c.s),this.l=c.l;var g=c.i,v=new mr;v.i=g.i,g.g&&(v.g=new Map(g.g),v.h=g.h),wi(this,v),this.m=c.m}else c&&(g=String(c).match(ws))?(this.h=!1,Ts(this,g[1]||"",!0),this.o=xe(g[2]||""),this.g=xe(g[3]||"",!0),Ei(this,g[4]),this.l=xe(g[5]||"",!0),wi(this,g[6]||"",!0),this.m=xe(g[7]||"")):(this.h=!1,this.i=new mr(null,this.h))}Ur.prototype.toString=function(){var c=[],g=this.j;g&&c.push(Ii(g,ko,!0),":");var v=this.g;return(v||g=="file")&&(c.push("//"),(g=this.o)&&c.push(Ii(g,ko,!0),"@"),c.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&c.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&c.push("/"),c.push(Ii(v,v.charAt(0)=="/"?Zu:Ju,!0))),(v=this.i.toString())&&c.push("?",v),(v=this.m)&&c.push("#",Ii(v,ll)),c.join("")};function wn(c){return new Ur(c)}function Ts(c,g,v){c.j=v?xe(g,!0):g,c.j&&(c.j=c.j.replace(/:$/,""))}function Ei(c,g){if(g){if(g=Number(g),isNaN(g)||0>g)throw Error("Bad port number "+g);c.s=g}else c.s=null}function wi(c,g,v){g instanceof mr?(c.i=g,gr(c.i,c.h)):(v||(g=Ii(g,ec)),c.i=new mr(g,c.h))}function Ke(c,g,v){c.i.set(g,v)}function Ti(c){return Ke(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function xe(c,g){return c?g?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Ii(c,g,v){return typeof c=="string"?(c=encodeURI(c).replace(g,Xu),v&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function Xu(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var ko=/[#\/\?@]/g,Ju=/[#\?:]/g,Zu=/[#\?]/g,ec=/[#\?@]/g,ll=/#/g;function mr(c,g){this.h=this.g=null,this.i=c||null,this.j=!!g}function Mt(c){c.g||(c.g=new Map,c.h=0,c.i&&Wd(c.i,function(g,v){c.add(decodeURIComponent(g.replace(/\+/g," ")),v)}))}n=mr.prototype,n.add=function(c,g){Mt(this),this.i=null,c=bn(this,c);var v=this.g.get(c);return v||this.g.set(c,v=[]),v.push(g),this.h+=1,this};function Kn(c,g){Mt(c),g=bn(c,g),c.g.has(g)&&(c.i=null,c.h-=c.g.get(g).length,c.g.delete(g))}function Qn(c,g){return Mt(c),g=bn(c,g),c.g.has(g)}n.forEach=function(c,g){Mt(this),this.g.forEach(function(v,I){v.forEach(function(F){c.call(g,F,I,this)},this)},this)},n.na=function(){Mt(this);const c=Array.from(this.g.values()),g=Array.from(this.g.keys()),v=[];for(let I=0;I<g.length;I++){const F=c[I];for(let W=0;W<F.length;W++)v.push(g[I])}return v},n.V=function(c){Mt(this);let g=[];if(typeof c=="string")Qn(this,c)&&(g=g.concat(this.g.get(bn(this,c))));else{c=Array.from(this.g.values());for(let v=0;v<c.length;v++)g=g.concat(c[v])}return g},n.set=function(c,g){return Mt(this),this.i=null,c=bn(this,c),Qn(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[g]),this.h+=1,this},n.get=function(c,g){return c?(c=this.V(c),0<c.length?String(c[0]):g):g};function Si(c,g,v){Kn(c,g),0<v.length&&(c.i=null,c.g.set(bn(c,g),$(v)),c.h+=v.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],g=Array.from(this.g.keys());for(var v=0;v<g.length;v++){var I=g[v];const W=encodeURIComponent(String(I)),te=this.V(I);for(I=0;I<te.length;I++){var F=W;te[I]!==""&&(F+="="+encodeURIComponent(String(te[I]))),c.push(F)}}return this.i=c.join("&")};function bn(c,g){return g=String(g),c.j&&(g=g.toLowerCase()),g}function gr(c,g){g&&!c.j&&(Mt(c),c.i=null,c.g.forEach(function(v,I){var F=I.toLowerCase();I!=F&&(Kn(this,I),Si(this,F,v))},c)),c.j=g}function qd(c,g){const v=new gs;if(h.Image){const I=new Image;I.onload=R(ln,v,"TestLoadImage: loaded",!0,g,I),I.onerror=R(ln,v,"TestLoadImage: error",!1,g,I),I.onabort=R(ln,v,"TestLoadImage: abort",!1,g,I),I.ontimeout=R(ln,v,"TestLoadImage: timeout",!1,g,I),h.setTimeout(function(){I.ontimeout&&I.ontimeout()},1e4),I.src=c}else g(!1)}function tc(c,g){const v=new gs,I=new AbortController,F=setTimeout(()=>{I.abort(),ln(v,"TestPingServer: timeout",!1,g)},1e4);fetch(c,{signal:I.signal}).then(W=>{clearTimeout(F),W.ok?ln(v,"TestPingServer: ok",!0,g):ln(v,"TestPingServer: server error",!1,g)}).catch(()=>{clearTimeout(F),ln(v,"TestPingServer: error",!1,g)})}function ln(c,g,v,I,F){try{F&&(F.onload=null,F.onerror=null,F.onabort=null,F.ontimeout=null),I(v)}catch{}}function Hd(){this.g=new Za}function nc(c,g,v){const I=v||"";try{vi(c,function(F,W){let te=F;m(F)&&(te=Xa(F)),g.push(I+W+"="+encodeURIComponent(te))})}catch(F){throw g.push(I+"type="+encodeURIComponent("_badmap")),F}}function jr(c){this.l=c.Ub||null,this.j=c.eb||!1}x(jr,ps),jr.prototype.g=function(){return new Is(this.l,this.j)},jr.prototype.i=function(c){return function(){return c}}({});function Is(c,g){Et.call(this),this.D=c,this.o=g,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}x(Is,Et),n=Is.prototype,n.open=function(c,g){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=g,this.readyState=1,Xn(this)},n.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const g={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(g.body=c),(this.D||h).fetch(new Request(this.A,g)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Yn(this)),this.readyState=0},n.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Xn(this)),this.g&&(this.readyState=3,Xn(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;rc(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function rc(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}n.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var g=c.value?c.value:new Uint8Array(0);(g=this.v.decode(g,{stream:!c.done}))&&(this.response=this.responseText+=g)}c.done?Yn(this):Xn(this),this.readyState==3&&rc(this)}},n.Ra=function(c){this.g&&(this.response=this.responseText=c,Yn(this))},n.Qa=function(c){this.g&&(this.response=c,Yn(this))},n.ga=function(){this.g&&Yn(this)};function Yn(c){c.readyState=4,c.l=null,c.j=null,c.v=null,Xn(c)}n.setRequestHeader=function(c,g){this.u.append(c,g)},n.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],g=this.h.entries();for(var v=g.next();!v.done;)v=v.value,c.push(v[0]+": "+v[1]),v=g.next();return c.join(`\r
`)};function Xn(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Is.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function zr(c){let g="";return Ie(c,function(v,I){g+=I,g+=":",g+=v,g+=`\r
`}),g}function Ci(c,g,v){e:{for(I in v){var I=!1;break e}I=!0}I||(v=zr(v),typeof c=="string"?v!=null&&encodeURIComponent(String(v)):Ke(c,g,v))}function it(c){Et.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}x(it,Et);var Gd=/^https?$/i,ul=["POST","PUT"];n=it.prototype,n.Ha=function(c){this.J=c},n.ea=function(c,g,v,I){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);g=g?g.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Hn.g(),this.v=this.o?yo(this.o):yo(Hn),this.g.onreadystatechange=T(this.Ea,this);try{this.B=!0,this.g.open(g,String(c),!0),this.B=!1}catch(W){Ss(this,W);return}if(c=v||"",v=new Map(this.headers),I)if(Object.getPrototypeOf(I)===Object.prototype)for(var F in I)v.set(F,I[F]);else if(typeof I.keys=="function"&&typeof I.get=="function")for(const W of I.keys())v.set(W,I.get(W));else throw Error("Unknown input type for opt_headers: "+String(I));I=Array.from(v.keys()).find(W=>W.toLowerCase()=="content-type"),F=h.FormData&&c instanceof h.FormData,!(0<=Array.prototype.indexOf.call(ul,g,void 0))||I||F||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[W,te]of v)this.g.setRequestHeader(W,te);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{No(this),this.u=!0,this.g.send(c),this.u=!1}catch(W){Ss(this,W)}};function Ss(c,g){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=g,c.m=5,Po(c),Tn(c)}function Po(c){c.A||(c.A=!0,wt(c,"complete"),wt(c,"error"))}n.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,wt(this,"complete"),wt(this,"abort"),Tn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Tn(this,!0)),it.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?cl(this):this.bb())},n.bb=function(){cl(this)};function cl(c){if(c.h&&typeof u<"u"&&(!c.v[1]||un(c)!=4||c.Z()!=2)){if(c.u&&un(c)==4)Ka(c.Ea,0,c);else if(wt(c,"readystatechange"),un(c)==4){c.h=!1;try{const te=c.Z();e:switch(te){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var g=!0;break e;default:g=!1}var v;if(!(v=g)){var I;if(I=te===0){var F=String(c.D).match(ws)[1]||null;!F&&h.self&&h.self.location&&(F=h.self.location.protocol.slice(0,-1)),I=!Gd.test(F?F.toLowerCase():"")}v=I}if(v)wt(c,"complete"),wt(c,"success");else{c.m=6;try{var W=2<un(c)?c.g.statusText:""}catch{W=""}c.l=W+" ["+c.Z()+"]",Po(c)}}finally{Tn(c)}}}}function Tn(c,g){if(c.g){No(c);const v=c.g,I=c.v[0]?()=>{}:null;c.g=null,c.v=null,g||wt(c,"ready");try{v.onreadystatechange=I}catch{}}}function No(c){c.I&&(h.clearTimeout(c.I),c.I=null)}n.isActive=function(){return!!this.g};function un(c){return c.g?c.g.readyState:0}n.Z=function(){try{return 2<un(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(c){if(this.g){var g=this.g.responseText;return c&&g.indexOf(c)==0&&(g=g.substring(c.length)),Ja(g)}};function hl(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function xo(c){const g={};c=(c.g&&2<=un(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let I=0;I<c.length;I++){if(ee(c[I]))continue;var v=O(c[I]);const F=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const W=g[F]||[];g[F]=W,W.push(v)}b(g,function(I){return I.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function _r(c,g,v){return v&&v.internalChannelParams&&v.internalChannelParams[c]||g}function dl(c){this.Aa=0,this.i=[],this.j=new gs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=_r("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=_r("baseRetryDelayMs",5e3,c),this.cb=_r("retryDelaySeedMs",1e4,c),this.Wa=_r("forwardChannelMaxRetries",2,c),this.wa=_r("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Es(c&&c.concurrentRequestLimit),this.Da=new Hd,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=dl.prototype,n.la=8,n.G=1,n.connect=function(c,g,v,I){ht(0),this.W=c,this.H=g||{},v&&I!==void 0&&(this.H.OSID=v,this.H.OAID=I),this.F=this.X,this.I=ac(this,null,this.W),yr(this)};function Vt(c){if(bo(c),c.G==3){var g=c.U++,v=wn(c.I);if(Ke(v,"SID",c.K),Ke(v,"RID",g),Ke(v,"TYPE","terminate"),Br(c,v),g=new Gn(c,c.j,g),g.L=2,g.v=Ti(wn(v)),v=!1,h.navigator&&h.navigator.sendBeacon)try{v=h.navigator.sendBeacon(g.v.toString(),"")}catch{}!v&&h.Image&&(new Image().src=g.v,v=!0),v||(g.g=lc(g.j,null),g.g.ea(g.v)),g.F=Date.now(),Ye(g)}oc(c)}function Jn(c){c.g&&(fl(c),c.g.cancel(),c.g=null)}function bo(c){Jn(c),c.u&&(h.clearTimeout(c.u),c.u=null),Lo(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&h.clearTimeout(c.s),c.s=null)}function yr(c){if(!En(c.h)&&!c.s){c.s=!0;var g=c.Ga;He||oe(),re||(He(),re=!0),ge.add(g,c),c.B=0}}function Kd(c,g){return Ku(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=g.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=Wn(T(c.Ga,c,g),sc(c,c.B)),c.B++,!0)}n.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const F=new Gn(this,this.j,c);let W=this.o;if(this.S&&(W?(W=S(W),N(W,this.S)):W=this.S),this.m!==null||this.O||(F.H=W,W=null),this.P)e:{for(var g=0,v=0;v<this.i.length;v++){t:{var I=this.i[v];if("__data__"in I.map&&(I=I.map.__data__,typeof I=="string")){I=I.length;break t}I=void 0}if(I===void 0)break;if(g+=I,4096<g){g=v;break e}if(g===4096||v===this.i.length-1){g=v+1;break e}}g=1e3}else g=1e3;g=Ri(this,F,g),v=wn(this.I),Ke(v,"RID",c),Ke(v,"CVER",22),this.D&&Ke(v,"X-HTTP-Session-Id",this.D),Br(this,v),W&&(this.O?g="headers="+encodeURIComponent(String(zr(W)))+"&"+g:this.m&&Ci(v,this.m,W)),al(this.h,F),this.Ua&&Ke(v,"TYPE","init"),this.P?(Ke(v,"$req",g),Ke(v,"SID","null"),F.T=!0,Co(F,v,null)):Co(F,v,g),this.G=2}}else this.G==3&&(c?Do(this,c):this.i.length==0||En(this.h)||Do(this))};function Do(c,g){var v;g?v=g.l:v=c.U++;const I=wn(c.I);Ke(I,"SID",c.K),Ke(I,"RID",v),Ke(I,"AID",c.T),Br(c,I),c.m&&c.o&&Ci(I,c.m,c.o),v=new Gn(c,c.j,v,c.B+1),c.m===null&&(v.H=c.o),g&&(c.i=g.D.concat(c.i)),g=Ri(c,v,1e3),v.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),al(c.h,v),Co(v,I,g)}function Br(c,g){c.H&&Ie(c.H,function(v,I){Ke(g,I,v)}),c.l&&vi({},function(v,I){Ke(g,I,v)})}function Ri(c,g,v){v=Math.min(c.i.length,v);var I=c.l?T(c.l.Na,c.l,c):null;e:{var F=c.i;let W=-1;for(;;){const te=["count="+v];W==-1?0<v?(W=F[0].g,te.push("ofs="+W)):W=0:te.push("ofs="+W);let qe=!0;for(let Tt=0;Tt<v;Tt++){let Le=F[Tt].g;const kt=F[Tt].map;if(Le-=W,0>Le)W=Math.max(0,F[Tt].g-100),qe=!1;else try{nc(kt,te,"req"+Le+"_")}catch{I&&I(kt)}}if(qe){I=te.join("&");break e}}}return c=c.i.splice(0,v),g.D=c,I}function Cs(c){if(!c.g&&!c.u){c.Y=1;var g=c.Fa;He||oe(),re||(He(),re=!0),ge.add(g,c),c.v=0}}function Oo(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=Wn(T(c.Fa,c),sc(c,c.v)),c.v++,!0)}n.Fa=function(){if(this.u=null,ic(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=Wn(T(this.ab,this),c)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ht(10),Jn(this),ic(this))};function fl(c){c.A!=null&&(h.clearTimeout(c.A),c.A=null)}function ic(c){c.g=new Gn(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var g=wn(c.qa);Ke(g,"RID","rpc"),Ke(g,"SID",c.K),Ke(g,"AID",c.T),Ke(g,"CI",c.F?"0":"1"),!c.F&&c.ja&&Ke(g,"TO",c.ja),Ke(g,"TYPE","xmlhttp"),Br(c,g),c.m&&c.o&&Ci(g,c.m,c.o),c.L&&(c.g.I=c.L);var v=c.g;c=c.ia,v.L=1,v.v=Ti(wn(g)),v.m=null,v.P=!0,sl(v,c)}n.Za=function(){this.C!=null&&(this.C=null,Jn(this),Oo(this),ht(19))};function Lo(c){c.C!=null&&(h.clearTimeout(c.C),c.C=null)}function Mo(c,g){var v=null;if(c.g==g){Lo(c),fl(c),c.g=null;var I=2}else if(nn(c.h,g))v=g.D,Qu(c.h,g),I=1;else return;if(c.G!=0){if(g.o)if(I==1){v=g.m?g.m.length:0,g=Date.now()-g.F;var F=c.B;I=ms(),wt(I,new wo(I,v)),yr(c)}else Cs(c);else if(F=g.s,F==3||F==0&&0<g.X||!(I==1&&Kd(c,g)||I==2&&Oo(c)))switch(v&&0<v.length&&(g=c.h,g.i=g.i.concat(v)),F){case 1:$r(c,5);break;case 4:$r(c,10);break;case 3:$r(c,6);break;default:$r(c,2)}}}function sc(c,g){let v=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(v*=2),v*g}function $r(c,g){if(c.j.info("Error code "+g),g==2){var v=T(c.fb,c),I=c.Xa;const F=!I;I=new Ur(I||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||Ts(I,"https"),Ti(I),F?qd(I.toString(),v):tc(I.toString(),v)}else ht(2);c.G=0,c.l&&c.l.sa(g),oc(c),bo(c)}n.fb=function(c){c?(this.j.info("Successfully pinged google.com"),ht(2)):(this.j.info("Failed to ping google.com"),ht(1))};function oc(c){if(c.G=0,c.ka=[],c.l){const g=Yu(c.h);(g.length!=0||c.i.length!=0)&&(L(c.ka,g),L(c.ka,c.i),c.h.i.length=0,$(c.i),c.i.length=0),c.l.ra()}}function ac(c,g,v){var I=v instanceof Ur?wn(v):new Ur(v);if(I.g!="")g&&(I.g=g+"."+I.g),Ei(I,I.s);else{var F=h.location;I=F.protocol,g=g?g+"."+F.hostname:F.hostname,F=+F.port;var W=new Ur(null);I&&Ts(W,I),g&&(W.g=g),F&&Ei(W,F),v&&(W.l=v),I=W}return v=c.D,g=c.ya,v&&g&&Ke(I,v,g),Ke(I,"VER",c.la),Br(c,I),I}function lc(c,g,v){if(g&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return g=c.Ca&&!c.pa?new it(new jr({eb:v})):new it(c.pa),g.Ha(c.J),g}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function pl(){}n=pl.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Vo(){}Vo.prototype.g=function(c,g){return new rn(c,g)};function rn(c,g){Et.call(this),this.g=new dl(g),this.l=c,this.h=g&&g.messageUrlParams||null,c=g&&g.messageHeaders||null,g&&g.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=g&&g.initMessageHeaders||null,g&&g.messageContentType&&(c?c["X-WebChannel-Content-Type"]=g.messageContentType:c={"X-WebChannel-Content-Type":g.messageContentType}),g&&g.va&&(c?c["X-WebChannel-Client-Profile"]=g.va:c={"X-WebChannel-Client-Profile":g.va}),this.g.S=c,(c=g&&g.Sb)&&!ee(c)&&(this.g.m=c),this.v=g&&g.supportsCrossDomainXhr||!1,this.u=g&&g.sendRawJson||!1,(g=g&&g.httpSessionIdParam)&&!ee(g)&&(this.g.D=g,c=this.h,c!==null&&g in c&&(c=this.h,g in c&&delete c[g])),this.j=new vr(this)}x(rn,Et),rn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},rn.prototype.close=function(){Vt(this.g)},rn.prototype.o=function(c){var g=this.g;if(typeof c=="string"){var v={};v.__data__=c,c=v}else this.u&&(v={},v.__data__=Xa(c),c=v);g.i.push(new Gu(g.Ya++,c)),g.G==3&&yr(g)},rn.prototype.N=function(){this.g.l=null,delete this.j,Vt(this.g),delete this.g,rn.aa.N.call(this)};function uc(c){fr.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var g=c.__sm__;if(g){e:{for(const v in g){c=v;break e}c=void 0}(this.i=c)&&(c=this.i,g=g!==null&&c in g?g[c]:void 0),this.data=g}else this.data=c}x(uc,fr);function cc(){Eo.call(this),this.status=1}x(cc,Eo);function vr(c){this.g=c}x(vr,pl),vr.prototype.ua=function(){wt(this.g,"a")},vr.prototype.ta=function(c){wt(this.g,new uc(c))},vr.prototype.sa=function(c){wt(this.g,new cc)},vr.prototype.ra=function(){wt(this.g,"b")},Vo.prototype.createWebChannel=Vo.prototype.g,rn.prototype.send=rn.prototype.o,rn.prototype.open=rn.prototype.m,rn.prototype.close=rn.prototype.close,II=function(){return new Vo},TI=function(){return ms()},wI=pr,nm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Io.NO_ERROR=0,Io.TIMEOUT=8,Io.HTTP_ERROR=6,wh=Io,$u.COMPLETE="complete",EI=$u,vo.EventType=Nn,Nn.OPEN="a",Nn.CLOSE="b",Nn.ERROR="c",Nn.MESSAGE="d",Et.prototype.listen=Et.prototype.K,Gl=vo,it.prototype.listenOnce=it.prototype.L,it.prototype.getLastError=it.prototype.Ka,it.prototype.getLastErrorCode=it.prototype.Ba,it.prototype.getStatus=it.prototype.Z,it.prototype.getResponseJson=it.prototype.Oa,it.prototype.getResponseText=it.prototype.oa,it.prototype.send=it.prototype.ea,it.prototype.setWithCredentials=it.prototype.Ha,vI=it}).apply(typeof oh<"u"?oh:typeof self<"u"?self:typeof window<"u"?window:{});const aE="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Yt.UNAUTHENTICATED=new Yt(null),Yt.GOOGLE_CREDENTIALS=new Yt("google-credentials-uid"),Yt.FIRST_PARTY=new Yt("first-party-uid"),Yt.MOCK_USER=new Yt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ma="11.2.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ys=new Au("@firebase/firestore");function la(){return Ys.logLevel}function ae(n,...e){if(Ys.logLevel<=Pe.DEBUG){const t=e.map(rg);Ys.debug(`Firestore (${Ma}): ${n}`,...t)}}function ci(n,...e){if(Ys.logLevel<=Pe.ERROR){const t=e.map(rg);Ys.error(`Firestore (${Ma}): ${n}`,...t)}}function Ta(n,...e){if(Ys.logLevel<=Pe.WARN){const t=e.map(rg);Ys.warn(`Firestore (${Ma}): ${n}`,...t)}}function rg(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(n="Unexpected state"){const e=`FIRESTORE (${Ma}) INTERNAL ASSERTION FAILED: `+n;throw ci(e),new Error(e)}function We(n,e){n||we()}function Se(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ce extends dr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SI{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ab{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Yt.UNAUTHENTICATED))}shutdown(){}}class lb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class ub{constructor(e){this.t=e,this.currentUser=Yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){We(this.o===void 0);let r=this.i;const s=f=>this.i!==r?(r=this.i,t(f)):Promise.resolve();let a=new qs;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new qs,e.enqueueRetryable(()=>s(this.currentUser))};const u=()=>{const f=a;e.enqueueRetryable(async()=>{await f.promise,await s(this.currentUser)})},h=f=>{ae("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit(f=>h(f)),setTimeout(()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?h(f):(ae("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new qs)}},0),u()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(ae("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(We(typeof r.accessToken=="string"),new SI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return We(e===null||typeof e=="string"),new Yt(e)}}class cb{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Yt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class hb{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new cb(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Yt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class db{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class fb{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){We(this.o===void 0);const r=a=>{a.error!=null&&ae("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const u=a.token!==this.R;return this.R=a.token,ae("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?t(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable(()=>r(a))};const s=a=>{ae("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(a=>s(a)),setTimeout(()=>{if(!this.appCheck){const a=this.A.getImmediate({optional:!0});a?s(a):ae("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(We(typeof t.token=="string"),this.R=t.token,new db(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pb(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=pb(40);for(let a=0;a<s.length;++a)r.length<20&&s[a]<t&&(r+=e.charAt(s[a]%e.length))}return r}}function be(n,e){return n<e?-1:n>e?1:0}function Ia(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{static now(){return Ct.fromMillis(Date.now())}static fromDate(e){return Ct.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new Ct(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ce(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ce(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new ce(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ce(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?be(this.nanoseconds,e.nanoseconds):be(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{static fromTimestamp(e){return new Te(e)}static min(){return new Te(new Ct(0,0))}static max(){return new Te(new Ct(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e,t,r){t===void 0?t=0:t>e.length&&we(),r===void 0?r=e.length-t:r>e.length-t&&we(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Sr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Sr?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const a=Sr.compareSegments(e.get(s),t.get(s));if(a!==0)return a}return Math.sign(e.length-t.length)}static compareSegments(e,t){const r=Sr.isNumericId(e),s=Sr.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?Sr.extractNumericId(e).compare(Sr.extractNumericId(t)):e<t?-1:e>t?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Yi.fromString(e.substring(4,e.length-2))}}class nt extends Sr{construct(e,t,r){return new nt(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new ce(K.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new nt(t)}static emptyPath(){return new nt([])}}const mb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class zt extends Sr{construct(e,t,r){return new zt(e,t,r)}static isValidIdentifier(e){return mb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),zt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new zt(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const a=()=>{if(r.length===0)throw new ce(K.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let u=!1;for(;s<e.length;){const h=e[s];if(h==="\\"){if(s+1===e.length)throw new ce(K.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const f=e[s+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new ce(K.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=f,s+=2}else h==="`"?(u=!u,s++):h!=="."||u?(r+=h,s++):(a(),s++)}if(a(),u)throw new ce(K.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new zt(t)}static emptyPath(){return new zt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e){this.path=e}static fromPath(e){return new me(nt.fromString(e))}static fromName(e){return new me(nt.fromString(e).popFirst(5))}static empty(){return new me(nt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&nt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return nt.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new me(new nt(e.slice()))}}function gb(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=Te.fromTimestamp(r===1e9?new Ct(t+1,0):new Ct(t,r));return new ts(s,me.empty(),e)}function _b(n){return new ts(n.readTime,n.key,-1)}class ts{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new ts(Te.min(),me.empty(),-1)}static max(){return new ts(Te.max(),me.empty(),-1)}}function yb(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=me.comparator(n.documentKey,e.documentKey),t!==0?t:be(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Eb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Va(n){if(n.code!==K.FAILED_PRECONDITION||n.message!==vb)throw n;ae("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&we(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new H((r,s)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(r,s)},this.catchCallback=a=>{this.wrapFailure(t,a).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof H?t:H.resolve(t)}catch(t){return H.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):H.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):H.reject(t)}static resolve(e){return new H((t,r)=>{t(e)})}static reject(e){return new H((t,r)=>{r(e)})}static waitFor(e){return new H((t,r)=>{let s=0,a=0,u=!1;e.forEach(h=>{++s,h.next(()=>{++a,u&&a===s&&t()},f=>r(f))}),u=!0,a===s&&t()})}static or(e){let t=H.resolve(!1);for(const r of e)t=t.next(s=>s?H.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,a)=>{r.push(t.call(this,s,a))}),this.waitFor(r)}static mapArray(e,t){return new H((r,s)=>{const a=e.length,u=new Array(a);let h=0;for(let f=0;f<a;f++){const m=f;t(e[m]).next(y=>{u[m]=y,++h,h===a&&r(u)},y=>s(y))}})}static doWhile(e,t){return new H((r,s)=>{const a=()=>{e()===!0?t().next(()=>{a()},s):r()};a()})}}function wb(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Fa(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}wd.oe=-1;function Td(n){return n==null}function Bh(n){return n===0&&1/n==-1/0}function Tb(n){return typeof n=="number"&&Number.isInteger(n)&&!Bh(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ib(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=lE(e)),e=Sb(n.get(t),e);return lE(e)}function Sb(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const a=n.charAt(s);switch(a){case"\0":t+="";break;case"":t+="";break;default:t+=a}}return t}function lE(n){return n+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uE(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function io(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function RI(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vt=class rm{constructor(e,t){this.comparator=e,this.root=t||Xi.EMPTY}insert(e,t){return new rm(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Xi.BLACK,null,null))}remove(e){return new rm(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Xi.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ah(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ah(this.root,e,this.comparator,!1)}getReverseIterator(){return new ah(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ah(this.root,e,this.comparator,!0)}},ah=class{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=t?r(e.key,t):1,t&&s&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Xi=class Zr{constructor(e,t,r,s,a){this.key=e,this.value=t,this.color=r??Zr.RED,this.left=s??Zr.EMPTY,this.right=a??Zr.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,a){return new Zr(e??this.key,t??this.value,r??this.color,s??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const a=r(e,s.key);return s=a<0?s.copy(null,null,null,s.left.insert(e,t,r),null):a===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Zr.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Zr.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Zr.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Zr.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw we();const e=this.left.check();if(e!==this.right.check())throw we();return e+(this.isRed()?0:1)}};Xi.EMPTY=null,Xi.RED=!0,Xi.BLACK=!1;Xi.EMPTY=new class{constructor(){this.size=0}get key(){throw we()}get value(){throw we()}get color(){throw we()}get left(){throw we()}get right(){throw we()}copy(e,t,r,s,a){return this}insert(e,t,r){return new Xi(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.comparator=e,this.data=new vt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new cE(this.data.getIterator())}getIteratorFrom(e){return new cE(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Rt)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,a=r.getNext().key;if(this.comparator(s,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Rt(this.comparator);return t.data=e,t}}class cE{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e){this.fields=e,e.sort(zt.comparator)}static empty(){return new or([])}unionWith(e){let t=new Rt(zt.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new or(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ia(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new AI("Invalid base64 string: "+a):a}}(e);return new Bt(t)}static fromUint8Array(e){const t=function(s){let a="";for(let u=0;u<s.length;++u)a+=String.fromCharCode(s[u]);return a}(e);return new Bt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return be(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Bt.EMPTY_BYTE_STRING=new Bt("");const Cb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ns(n){if(We(!!n),typeof n=="string"){let e=0;const t=Cb.exec(n);if(We(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ft(n.seconds),nanos:ft(n.nanos)}}function ft(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function rs(n){return typeof n=="string"?Bt.fromBase64String(n):Bt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ig(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Id(n){const e=n.mapValue.fields.__previous_value__;return ig(e)?Id(e):e}function gu(n){const e=ns(n.mapValue.fields.__local_write_time__.timestampValue);return new Ct(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rb{constructor(e,t,r,s,a,u,h,f,m){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=a,this.forceLongPolling=u,this.autoDetectLongPolling=h,this.longPollingOptions=f,this.useFetchStreams=m}}class _u{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new _u("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof _u&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lh={mapValue:{}};function is(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ig(n)?4:kb(n)?9007199254740991:Ab(n)?10:11:we()}function br(n,e){if(n===e)return!0;const t=is(n);if(t!==is(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return gu(n).isEqual(gu(e));case 3:return function(s,a){if(typeof s.timestampValue=="string"&&typeof a.timestampValue=="string"&&s.timestampValue.length===a.timestampValue.length)return s.timestampValue===a.timestampValue;const u=ns(s.timestampValue),h=ns(a.timestampValue);return u.seconds===h.seconds&&u.nanos===h.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,a){return rs(s.bytesValue).isEqual(rs(a.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,a){return ft(s.geoPointValue.latitude)===ft(a.geoPointValue.latitude)&&ft(s.geoPointValue.longitude)===ft(a.geoPointValue.longitude)}(n,e);case 2:return function(s,a){if("integerValue"in s&&"integerValue"in a)return ft(s.integerValue)===ft(a.integerValue);if("doubleValue"in s&&"doubleValue"in a){const u=ft(s.doubleValue),h=ft(a.doubleValue);return u===h?Bh(u)===Bh(h):isNaN(u)&&isNaN(h)}return!1}(n,e);case 9:return Ia(n.arrayValue.values||[],e.arrayValue.values||[],br);case 10:case 11:return function(s,a){const u=s.mapValue.fields||{},h=a.mapValue.fields||{};if(uE(u)!==uE(h))return!1;for(const f in u)if(u.hasOwnProperty(f)&&(h[f]===void 0||!br(u[f],h[f])))return!1;return!0}(n,e);default:return we()}}function yu(n,e){return(n.values||[]).find(t=>br(t,e))!==void 0}function Sa(n,e){if(n===e)return 0;const t=is(n),r=is(e);if(t!==r)return be(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return be(n.booleanValue,e.booleanValue);case 2:return function(a,u){const h=ft(a.integerValue||a.doubleValue),f=ft(u.integerValue||u.doubleValue);return h<f?-1:h>f?1:h===f?0:isNaN(h)?isNaN(f)?0:-1:1}(n,e);case 3:return hE(n.timestampValue,e.timestampValue);case 4:return hE(gu(n),gu(e));case 5:return be(n.stringValue,e.stringValue);case 6:return function(a,u){const h=rs(a),f=rs(u);return h.compareTo(f)}(n.bytesValue,e.bytesValue);case 7:return function(a,u){const h=a.split("/"),f=u.split("/");for(let m=0;m<h.length&&m<f.length;m++){const y=be(h[m],f[m]);if(y!==0)return y}return be(h.length,f.length)}(n.referenceValue,e.referenceValue);case 8:return function(a,u){const h=be(ft(a.latitude),ft(u.latitude));return h!==0?h:be(ft(a.longitude),ft(u.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return dE(n.arrayValue,e.arrayValue);case 10:return function(a,u){var h,f,m,y;const E=a.fields||{},T=u.fields||{},R=(h=E.value)===null||h===void 0?void 0:h.arrayValue,x=(f=T.value)===null||f===void 0?void 0:f.arrayValue,$=be(((m=R==null?void 0:R.values)===null||m===void 0?void 0:m.length)||0,((y=x==null?void 0:x.values)===null||y===void 0?void 0:y.length)||0);return $!==0?$:dE(R,x)}(n.mapValue,e.mapValue);case 11:return function(a,u){if(a===lh.mapValue&&u===lh.mapValue)return 0;if(a===lh.mapValue)return 1;if(u===lh.mapValue)return-1;const h=a.fields||{},f=Object.keys(h),m=u.fields||{},y=Object.keys(m);f.sort(),y.sort();for(let E=0;E<f.length&&E<y.length;++E){const T=be(f[E],y[E]);if(T!==0)return T;const R=Sa(h[f[E]],m[y[E]]);if(R!==0)return R}return be(f.length,y.length)}(n.mapValue,e.mapValue);default:throw we()}}function hE(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return be(n,e);const t=ns(n),r=ns(e),s=be(t.seconds,r.seconds);return s!==0?s:be(t.nanos,r.nanos)}function dE(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const a=Sa(t[s],r[s]);if(a)return a}return be(t.length,r.length)}function Ca(n){return im(n)}function im(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=ns(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return rs(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return me.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const a of t.values||[])s?s=!1:r+=",",r+=im(a);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",a=!0;for(const u of r)a?a=!1:s+=",",s+=`${u}:${im(t.fields[u])}`;return s+"}"}(n.mapValue):we()}function Th(n){switch(is(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Id(n);return e?16+Th(e):16;case 5:return 2*n.stringValue.length;case 6:return rs(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,a)=>s+Th(a),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return io(r.fields,(a,u)=>{s+=a.length+Th(u)}),s}(n.mapValue);default:throw we()}}function fE(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function sm(n){return!!n&&"integerValue"in n}function sg(n){return!!n&&"arrayValue"in n}function pE(n){return!!n&&"nullValue"in n}function mE(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ih(n){return!!n&&"mapValue"in n}function Ab(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function eu(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return io(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=eu(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=eu(n.arrayValue.values[t]);return e}return Object.assign({},n)}function kb(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e){this.value=e}static empty(){return new jn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Ih(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=eu(t)}setAll(e){let t=zt.emptyPath(),r={},s=[];e.forEach((u,h)=>{if(!t.isImmediateParentOf(h)){const f=this.getFieldsMap(t);this.applyChanges(f,r,s),r={},s=[],t=h.popLast()}u?r[h.lastSegment()]=eu(u):s.push(h.lastSegment())});const a=this.getFieldsMap(t);this.applyChanges(a,r,s)}delete(e){const t=this.field(e.popLast());Ih(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return br(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Ih(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){io(t,(s,a)=>e[s]=a);for(const s of r)delete e[s]}clone(){return new jn(eu(this.value))}}function kI(n){const e=[];return io(n.fields,(t,r)=>{const s=new zt([t]);if(Ih(r)){const a=kI(r.mapValue).fields;if(a.length===0)e.push(s);else for(const u of a)e.push(s.child(u))}else e.push(s)}),new or(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e,t,r,s,a,u,h){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=a,this.data=u,this.documentState=h}static newInvalidDocument(e){return new Xt(e,0,Te.min(),Te.min(),Te.min(),jn.empty(),0)}static newFoundDocument(e,t,r,s){return new Xt(e,1,t,Te.min(),r,s,0)}static newNoDocument(e,t){return new Xt(e,2,t,Te.min(),Te.min(),jn.empty(),0)}static newUnknownDocument(e,t){return new Xt(e,3,t,Te.min(),Te.min(),jn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=jn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=jn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Xt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Xt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(e,t){this.position=e,this.inclusive=t}}function gE(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const a=e[s],u=n.position[s];if(a.field.isKeyField()?r=me.comparator(me.fromName(u.referenceValue),t.key):r=Sa(u,t.data.field(a.field)),a.dir==="desc"&&(r*=-1),r!==0)break}return r}function _E(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!br(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(e,t="asc"){this.field=e,this.dir=t}}function Pb(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{}class _t extends PI{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new xb(e,t,r):t==="array-contains"?new Ob(e,r):t==="in"?new Lb(e,r):t==="not-in"?new Mb(e,r):t==="array-contains-any"?new Vb(e,r):new _t(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new bb(e,r):new Db(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Sa(t,this.value)):t!==null&&is(this.value)===is(t)&&this.matchesComparison(Sa(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return we()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class hr extends PI{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new hr(e,t)}matches(e){return NI(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function NI(n){return n.op==="and"}function xI(n){return Nb(n)&&NI(n)}function Nb(n){for(const e of n.filters)if(e instanceof hr)return!1;return!0}function om(n){if(n instanceof _t)return n.field.canonicalString()+n.op.toString()+Ca(n.value);if(xI(n))return n.filters.map(e=>om(e)).join(",");{const e=n.filters.map(t=>om(t)).join(",");return`${n.op}(${e})`}}function bI(n,e){return n instanceof _t?function(r,s){return s instanceof _t&&r.op===s.op&&r.field.isEqual(s.field)&&br(r.value,s.value)}(n,e):n instanceof hr?function(r,s){return s instanceof hr&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((a,u,h)=>a&&bI(u,s.filters[h]),!0):!1}(n,e):void we()}function DI(n){return n instanceof _t?function(t){return`${t.field.canonicalString()} ${t.op} ${Ca(t.value)}`}(n):n instanceof hr?function(t){return t.op.toString()+" {"+t.getFilters().map(DI).join(" ,")+"}"}(n):"Filter"}class xb extends _t{constructor(e,t,r){super(e,t,r),this.key=me.fromName(r.referenceValue)}matches(e){const t=me.comparator(e.key,this.key);return this.matchesComparison(t)}}class bb extends _t{constructor(e,t){super(e,"in",t),this.keys=OI("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Db extends _t{constructor(e,t){super(e,"not-in",t),this.keys=OI("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function OI(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>me.fromName(r.referenceValue))}class Ob extends _t{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return sg(t)&&yu(t.arrayValue,this.value)}}class Lb extends _t{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&yu(this.value.arrayValue,t)}}class Mb extends _t{constructor(e,t){super(e,"not-in",t)}matches(e){if(yu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!yu(this.value.arrayValue,t)}}class Vb extends _t{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!sg(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>yu(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fb{constructor(e,t=null,r=[],s=[],a=null,u=null,h=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=a,this.startAt=u,this.endAt=h,this.ue=null}}function yE(n,e=null,t=[],r=[],s=null,a=null,u=null){return new Fb(n,e,t,r,s,a,u)}function og(n){const e=Se(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>om(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(a){return a.field.canonicalString()+a.dir}(r)).join(","),Td(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Ca(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Ca(r)).join(",")),e.ue=t}return e.ue}function ag(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Pb(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!bI(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!_E(n.startAt,e.startAt)&&_E(n.endAt,e.endAt)}function am(n){return me.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(e,t=null,r=[],s=[],a=null,u="F",h=null,f=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=a,this.limitType=u,this.startAt=h,this.endAt=f,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Ub(n,e,t,r,s,a,u,h){return new Ua(n,e,t,r,s,a,u,h)}function lg(n){return new Ua(n)}function vE(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function LI(n){return n.collectionGroup!==null}function tu(n){const e=Se(n);if(e.ce===null){e.ce=[];const t=new Set;for(const a of e.explicitOrderBy)e.ce.push(a),t.add(a.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(u){let h=new Rt(zt.comparator);return u.filters.forEach(f=>{f.getFlattenedFilters().forEach(m=>{m.isInequality()&&(h=h.add(m.field))})}),h})(e).forEach(a=>{t.has(a.canonicalString())||a.isKeyField()||e.ce.push(new vu(a,r))}),t.has(zt.keyField().canonicalString())||e.ce.push(new vu(zt.keyField(),r))}return e.ce}function Pr(n){const e=Se(n);return e.le||(e.le=jb(e,tu(n))),e.le}function jb(n,e){if(n.limitType==="F")return yE(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const a=s.dir==="desc"?"asc":"desc";return new vu(s.field,a)});const t=n.endAt?new $h(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new $h(n.startAt.position,n.startAt.inclusive):null;return yE(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function lm(n,e){const t=n.filters.concat([e]);return new Ua(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function um(n,e,t){return new Ua(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Sd(n,e){return ag(Pr(n),Pr(e))&&n.limitType===e.limitType}function MI(n){return`${og(Pr(n))}|lt:${n.limitType}`}function ua(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>DI(s)).join(", ")}]`),Td(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>Ca(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>Ca(s)).join(",")),`Target(${r})`}(Pr(n))}; limitType=${n.limitType})`}function Cd(n,e){return e.isFoundDocument()&&function(r,s){const a=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(a):me.isDocumentKey(r.path)?r.path.isEqual(a):r.path.isImmediateParentOf(a)}(n,e)&&function(r,s){for(const a of tu(r))if(!a.field.isKeyField()&&s.data.field(a.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const a of r.filters)if(!a.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(u,h,f){const m=gE(u,h,f);return u.inclusive?m<=0:m<0}(r.startAt,tu(r),s)||r.endAt&&!function(u,h,f){const m=gE(u,h,f);return u.inclusive?m>=0:m>0}(r.endAt,tu(r),s))}(n,e)}function zb(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function VI(n){return(e,t)=>{let r=!1;for(const s of tu(n)){const a=Bb(s,e,t);if(a!==0)return a;r=r||s.field.isKeyField()}return 0}}function Bb(n,e,t){const r=n.field.isKeyField()?me.comparator(e.key,t.key):function(a,u,h){const f=u.data.field(a),m=h.data.field(a);return f!==null&&m!==null?Sa(f,m):we()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return we()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,a]of r)if(this.equalsFn(s,e))return a}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return void(s[a]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){io(this.inner,(t,r)=>{for(const[s,a]of r)e(s,a)})}isEmpty(){return RI(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $b=new vt(me.comparator);function hi(){return $b}const FI=new vt(me.comparator);function Kl(...n){let e=FI;for(const t of n)e=e.insert(t.key,t);return e}function UI(n){let e=FI;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Bs(){return nu()}function jI(){return nu()}function nu(){return new so(n=>n.toString(),(n,e)=>n.isEqual(e))}const Wb=new vt(me.comparator),qb=new Rt(me.comparator);function Ne(...n){let e=qb;for(const t of n)e=e.add(t);return e}const Hb=new Rt(be);function Gb(){return Hb}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ug(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Bh(e)?"-0":e}}function zI(n){return{integerValue:""+n}}function Kb(n,e){return Tb(e)?zI(e):ug(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(){this._=void 0}}function Qb(n,e,t){return n instanceof Wh?function(s,a){const u={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return a&&ig(a)&&(a=Id(a)),a&&(u.fields.__previous_value__=a),{mapValue:u}}(t,e):n instanceof Eu?$I(n,e):n instanceof wu?WI(n,e):function(s,a){const u=BI(s,a),h=EE(u)+EE(s.Pe);return sm(u)&&sm(s.Pe)?zI(h):ug(s.serializer,h)}(n,e)}function Yb(n,e,t){return n instanceof Eu?$I(n,e):n instanceof wu?WI(n,e):t}function BI(n,e){return n instanceof qh?function(r){return sm(r)||function(a){return!!a&&"doubleValue"in a}(r)}(e)?e:{integerValue:0}:null}class Wh extends Rd{}class Eu extends Rd{constructor(e){super(),this.elements=e}}function $I(n,e){const t=qI(e);for(const r of n.elements)t.some(s=>br(s,r))||t.push(r);return{arrayValue:{values:t}}}class wu extends Rd{constructor(e){super(),this.elements=e}}function WI(n,e){let t=qI(e);for(const r of n.elements)t=t.filter(s=>!br(s,r));return{arrayValue:{values:t}}}class qh extends Rd{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function EE(n){return ft(n.integerValue||n.doubleValue)}function qI(n){return sg(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Xb(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof Eu&&s instanceof Eu||r instanceof wu&&s instanceof wu?Ia(r.elements,s.elements,br):r instanceof qh&&s instanceof qh?br(r.Pe,s.Pe):r instanceof Wh&&s instanceof Wh}(n.transform,e.transform)}class Jb{constructor(e,t){this.version=e,this.transformResults=t}}class oi{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new oi}static exists(e){return new oi(void 0,e)}static updateTime(e){return new oi(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Sh(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Ad{}function HI(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new KI(n.key,oi.none()):new bu(n.key,n.data,oi.none());{const t=n.data,r=jn.empty();let s=new Rt(zt.comparator);for(let a of e.fields)if(!s.has(a)){let u=t.field(a);u===null&&a.length>1&&(a=a.popLast(),u=t.field(a)),u===null?r.delete(a):r.set(a,u),s=s.add(a)}return new oo(n.key,r,new or(s.toArray()),oi.none())}}function Zb(n,e,t){n instanceof bu?function(s,a,u){const h=s.value.clone(),f=TE(s.fieldTransforms,a,u.transformResults);h.setAll(f),a.convertToFoundDocument(u.version,h).setHasCommittedMutations()}(n,e,t):n instanceof oo?function(s,a,u){if(!Sh(s.precondition,a))return void a.convertToUnknownDocument(u.version);const h=TE(s.fieldTransforms,a,u.transformResults),f=a.data;f.setAll(GI(s)),f.setAll(h),a.convertToFoundDocument(u.version,f).setHasCommittedMutations()}(n,e,t):function(s,a,u){a.convertToNoDocument(u.version).setHasCommittedMutations()}(0,e,t)}function ru(n,e,t,r){return n instanceof bu?function(a,u,h,f){if(!Sh(a.precondition,u))return h;const m=a.value.clone(),y=IE(a.fieldTransforms,f,u);return m.setAll(y),u.convertToFoundDocument(u.version,m).setHasLocalMutations(),null}(n,e,t,r):n instanceof oo?function(a,u,h,f){if(!Sh(a.precondition,u))return h;const m=IE(a.fieldTransforms,f,u),y=u.data;return y.setAll(GI(a)),y.setAll(m),u.convertToFoundDocument(u.version,y).setHasLocalMutations(),h===null?null:h.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map(E=>E.field))}(n,e,t,r):function(a,u,h){return Sh(a.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):h}(n,e,t)}function eD(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),a=BI(r.transform,s||null);a!=null&&(t===null&&(t=jn.empty()),t.set(r.field,a))}return t||null}function wE(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ia(r,s,(a,u)=>Xb(a,u))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class bu extends Ad{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class oo extends Ad{constructor(e,t,r,s,a=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function GI(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function TE(n,e,t){const r=new Map;We(n.length===t.length);for(let s=0;s<t.length;s++){const a=n[s],u=a.transform,h=e.data.field(a.field);r.set(a.field,Yb(u,h,t[s]))}return r}function IE(n,e,t){const r=new Map;for(const s of n){const a=s.transform,u=t.data.field(s.field);r.set(s.field,Qb(a,u,e))}return r}class KI extends Ad{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class tD extends Ad{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nD{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const a=this.mutations[s];a.key.isEqual(e.key)&&Zb(a,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=ru(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=ru(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=jI();return this.mutations.forEach(s=>{const a=e.get(s.key),u=a.overlayedDocument;let h=this.applyToLocalView(u,a.mutatedFields);h=t.has(s.key)?null:h;const f=HI(u,h);f!==null&&r.set(s.key,f),u.isValidDocument()||u.convertToNoDocument(Te.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Ne())}isEqual(e){return this.batchId===e.batchId&&Ia(this.mutations,e.mutations,(t,r)=>wE(t,r))&&Ia(this.baseMutations,e.baseMutations,(t,r)=>wE(t,r))}}class cg{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){We(e.mutations.length===r.length);let s=function(){return Wb}();const a=e.mutations;for(let u=0;u<a.length;u++)s=s.insert(a[u].key,r[u].version);return new cg(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rD{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iD{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var gt,Me;function sD(n){switch(n){default:return we();case K.CANCELLED:case K.UNKNOWN:case K.DEADLINE_EXCEEDED:case K.RESOURCE_EXHAUSTED:case K.INTERNAL:case K.UNAVAILABLE:case K.UNAUTHENTICATED:return!1;case K.INVALID_ARGUMENT:case K.NOT_FOUND:case K.ALREADY_EXISTS:case K.PERMISSION_DENIED:case K.FAILED_PRECONDITION:case K.ABORTED:case K.OUT_OF_RANGE:case K.UNIMPLEMENTED:case K.DATA_LOSS:return!0}}function QI(n){if(n===void 0)return ci("GRPC error has no .code"),K.UNKNOWN;switch(n){case gt.OK:return K.OK;case gt.CANCELLED:return K.CANCELLED;case gt.UNKNOWN:return K.UNKNOWN;case gt.DEADLINE_EXCEEDED:return K.DEADLINE_EXCEEDED;case gt.RESOURCE_EXHAUSTED:return K.RESOURCE_EXHAUSTED;case gt.INTERNAL:return K.INTERNAL;case gt.UNAVAILABLE:return K.UNAVAILABLE;case gt.UNAUTHENTICATED:return K.UNAUTHENTICATED;case gt.INVALID_ARGUMENT:return K.INVALID_ARGUMENT;case gt.NOT_FOUND:return K.NOT_FOUND;case gt.ALREADY_EXISTS:return K.ALREADY_EXISTS;case gt.PERMISSION_DENIED:return K.PERMISSION_DENIED;case gt.FAILED_PRECONDITION:return K.FAILED_PRECONDITION;case gt.ABORTED:return K.ABORTED;case gt.OUT_OF_RANGE:return K.OUT_OF_RANGE;case gt.UNIMPLEMENTED:return K.UNIMPLEMENTED;case gt.DATA_LOSS:return K.DATA_LOSS;default:return we()}}(Me=gt||(gt={}))[Me.OK=0]="OK",Me[Me.CANCELLED=1]="CANCELLED",Me[Me.UNKNOWN=2]="UNKNOWN",Me[Me.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Me[Me.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Me[Me.NOT_FOUND=5]="NOT_FOUND",Me[Me.ALREADY_EXISTS=6]="ALREADY_EXISTS",Me[Me.PERMISSION_DENIED=7]="PERMISSION_DENIED",Me[Me.UNAUTHENTICATED=16]="UNAUTHENTICATED",Me[Me.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Me[Me.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Me[Me.ABORTED=10]="ABORTED",Me[Me.OUT_OF_RANGE=11]="OUT_OF_RANGE",Me[Me.UNIMPLEMENTED=12]="UNIMPLEMENTED",Me[Me.INTERNAL=13]="INTERNAL",Me[Me.UNAVAILABLE=14]="UNAVAILABLE",Me[Me.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oD(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aD=new Yi([4294967295,4294967295],0);function SE(n){const e=oD().encode(n),t=new yI;return t.update(e),new Uint8Array(t.digest())}function CE(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),a=e.getUint32(12,!0);return[new Yi([t,r],0),new Yi([s,a],0)]}class hg{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Ql(`Invalid padding: ${t}`);if(r<0)throw new Ql(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ql(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Ql(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=Yi.fromNumber(this.Te)}de(e,t,r){let s=e.add(t.multiply(Yi.fromNumber(r)));return s.compare(aD)===1&&(s=new Yi([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ie).toNumber()}Ee(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=SE(e),[r,s]=CE(t);for(let a=0;a<this.hashCount;a++){const u=this.de(r,s,a);if(!this.Ee(u))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),u=new hg(a,s,t);return r.forEach(h=>u.insert(h)),u}insert(e){if(this.Te===0)return;const t=SE(e),[r,s]=CE(t);for(let a=0;a<this.hashCount;a++){const u=this.de(r,s,a);this.Ae(u)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Ql extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(e,t,r,s,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Du.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new kd(Te.min(),s,new vt(be),hi(),Ne())}}class Du{constructor(e,t,r,s,a){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Du(r,t,Ne(),Ne(),Ne())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(e,t,r,s){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=s}}class YI{constructor(e,t){this.targetId=e,this.me=t}}class XI{constructor(e,t,r=Bt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class RE{constructor(){this.fe=0,this.ge=AE(),this.pe=Bt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Ne(),t=Ne(),r=Ne();return this.ge.forEach((s,a)=>{switch(a){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:we()}}),new Du(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=AE()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,We(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class lD{constructor(e){this.Be=e,this.Le=new Map,this.ke=hi(),this.qe=uh(),this.Qe=uh(),this.Ke=new vt(be)}$e(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{const r=this.ze(t);switch(e.state){case 0:this.je(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.je(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),r.De(e.resumeToken));break;default:we()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Le.forEach((r,s)=>{this.je(s)&&t(s)})}Je(e){const t=e.targetId,r=e.me.count,s=this.Ye(t);if(s){const a=s.target;if(am(a))if(r===0){const u=new me(a.path);this.We(t,u,Xt.newNoDocument(u,Te.min()))}else We(r===1);else{const u=this.Ze(t);if(u!==r){const h=this.Xe(e),f=h?this.et(h,e,u):1;if(f!==0){this.He(t);const m=f===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,m)}}}}}Xe(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:a=0}=t;let u,h;try{u=rs(r).toUint8Array()}catch(f){if(f instanceof AI)return Ta("Decoding the base64 bloom filter in existence filter failed ("+f.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw f}try{h=new hg(u,s,a)}catch(f){return Ta(f instanceof Ql?"BloomFilter error: ":"Applying bloom filter failed: ",f),null}return h.Te===0?null:h}et(e,t,r){return t.me.count===r-this.rt(e,t.targetId)?0:2}rt(e,t){const r=this.Be.getRemoteKeysForTarget(t);let s=0;return r.forEach(a=>{const u=this.Be.nt(),h=`projects/${u.projectId}/databases/${u.database}/documents/${a.path.canonicalString()}`;e.mightContain(h)||(this.We(t,a,null),s++)}),s}it(e){const t=new Map;this.Le.forEach((a,u)=>{const h=this.Ye(u);if(h){if(a.current&&am(h.target)){const f=new me(h.target.path);this.st(f).has(u)||this.ot(u,f)||this.We(u,f,Xt.newNoDocument(f,e))}a.be&&(t.set(u,a.ve()),a.Ce())}});let r=Ne();this.Qe.forEach((a,u)=>{let h=!0;u.forEachWhile(f=>{const m=this.Ye(f);return!m||m.purpose==="TargetPurposeLimboResolution"||(h=!1,!1)}),h&&(r=r.add(a))}),this.ke.forEach((a,u)=>u.setReadTime(e));const s=new kd(e,t,this.Ke,this.ke,r);return this.ke=hi(),this.qe=uh(),this.Qe=uh(),this.Ke=new vt(be),s}Ue(e,t){if(!this.je(e))return;const r=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,r){if(!this.je(e))return;const s=this.ze(e);this.ot(e,t)?s.Fe(t,1):s.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Le.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Le.get(e);return t||(t=new RE,this.Le.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new Rt(be),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Rt(be),this.qe=this.qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||ae("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.Le.get(e);return t&&t.Se?null:this.Be.ut(e)}He(e){this.Le.set(e,new RE),this.Be.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Be.getRemoteKeysForTarget(e).has(t)}}function uh(){return new vt(me.comparator)}function AE(){return new vt(me.comparator)}const uD={asc:"ASCENDING",desc:"DESCENDING"},cD={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},hD={and:"AND",or:"OR"};class dD{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function cm(n,e){return n.useProto3Json||Td(e)?e:{value:e}}function Hh(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function JI(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function fD(n,e){return Hh(n,e.toTimestamp())}function Nr(n){return We(!!n),Te.fromTimestamp(function(t){const r=ns(t);return new Ct(r.seconds,r.nanos)}(n))}function dg(n,e){return hm(n,e).canonicalString()}function hm(n,e){const t=function(s){return new nt(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function ZI(n){const e=nt.fromString(n);return We(iS(e)),e}function dm(n,e){return dg(n.databaseId,e.path)}function bp(n,e){const t=ZI(e);if(t.get(1)!==n.databaseId.projectId)throw new ce(K.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ce(K.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new me(tS(t))}function eS(n,e){return dg(n.databaseId,e)}function pD(n){const e=ZI(n);return e.length===4?nt.emptyPath():tS(e)}function fm(n){return new nt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function tS(n){return We(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function kE(n,e,t){return{name:dm(n,e),fields:t.value.mapValue.fields}}function mD(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(m){return m==="NO_CHANGE"?0:m==="ADD"?1:m==="REMOVE"?2:m==="CURRENT"?3:m==="RESET"?4:we()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],a=function(m,y){return m.useProto3Json?(We(y===void 0||typeof y=="string"),Bt.fromBase64String(y||"")):(We(y===void 0||y instanceof Buffer||y instanceof Uint8Array),Bt.fromUint8Array(y||new Uint8Array))}(n,e.targetChange.resumeToken),u=e.targetChange.cause,h=u&&function(m){const y=m.code===void 0?K.UNKNOWN:QI(m.code);return new ce(y,m.message||"")}(u);t=new XI(r,s,a,h||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=bp(n,r.document.name),a=Nr(r.document.updateTime),u=r.document.createTime?Nr(r.document.createTime):Te.min(),h=new jn({mapValue:{fields:r.document.fields}}),f=Xt.newFoundDocument(s,a,u,h),m=r.targetIds||[],y=r.removedTargetIds||[];t=new Ch(m,y,f.key,f)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=bp(n,r.document),a=r.readTime?Nr(r.readTime):Te.min(),u=Xt.newNoDocument(s,a),h=r.removedTargetIds||[];t=new Ch([],h,u.key,u)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=bp(n,r.document),a=r.removedTargetIds||[];t=new Ch([],a,s,null)}else{if(!("filter"in e))return we();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:a}=r,u=new iD(s,a),h=r.targetId;t=new YI(h,u)}}return t}function gD(n,e){let t;if(e instanceof bu)t={update:kE(n,e.key,e.value)};else if(e instanceof KI)t={delete:dm(n,e.key)};else if(e instanceof oo)t={update:kE(n,e.key,e.data),updateMask:CD(e.fieldMask)};else{if(!(e instanceof tD))return we();t={verify:dm(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(a,u){const h=u.transform;if(h instanceof Wh)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(h instanceof Eu)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:h.elements}};if(h instanceof wu)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:h.elements}};if(h instanceof qh)return{fieldPath:u.field.canonicalString(),increment:h.Pe};throw we()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,a){return a.updateTime!==void 0?{updateTime:fD(s,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:we()}(n,e.precondition)),t}function _D(n,e){return n&&n.length>0?(We(e!==void 0),n.map(t=>function(s,a){let u=s.updateTime?Nr(s.updateTime):Nr(a);return u.isEqual(Te.min())&&(u=Nr(a)),new Jb(u,s.transformResults||[])}(t,e))):[]}function yD(n,e){return{documents:[eS(n,e.path)]}}function vD(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=eS(n,s);const a=function(m){if(m.length!==0)return rS(hr.create(m,"and"))}(e.filters);a&&(t.structuredQuery.where=a);const u=function(m){if(m.length!==0)return m.map(y=>function(T){return{field:ca(T.field),direction:TD(T.dir)}}(y))}(e.orderBy);u&&(t.structuredQuery.orderBy=u);const h=cm(n,e.limit);return h!==null&&(t.structuredQuery.limit=h),e.startAt&&(t.structuredQuery.startAt=function(m){return{before:m.inclusive,values:m.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(m){return{before:!m.inclusive,values:m.position}}(e.endAt)),{ct:t,parent:s}}function ED(n){let e=pD(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){We(r===1);const y=t.from[0];y.allDescendants?s=y.collectionId:e=e.child(y.collectionId)}let a=[];t.where&&(a=function(E){const T=nS(E);return T instanceof hr&&xI(T)?T.getFilters():[T]}(t.where));let u=[];t.orderBy&&(u=function(E){return E.map(T=>function(x){return new vu(ha(x.field),function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(T))}(t.orderBy));let h=null;t.limit&&(h=function(E){let T;return T=typeof E=="object"?E.value:E,Td(T)?null:T}(t.limit));let f=null;t.startAt&&(f=function(E){const T=!!E.before,R=E.values||[];return new $h(R,T)}(t.startAt));let m=null;return t.endAt&&(m=function(E){const T=!E.before,R=E.values||[];return new $h(R,T)}(t.endAt)),Ub(e,s,u,a,h,"F",f,m)}function wD(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return we()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function nS(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=ha(t.unaryFilter.field);return _t.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ha(t.unaryFilter.field);return _t.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=ha(t.unaryFilter.field);return _t.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=ha(t.unaryFilter.field);return _t.create(u,"!=",{nullValue:"NULL_VALUE"});default:return we()}}(n):n.fieldFilter!==void 0?function(t){return _t.create(ha(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return we()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return hr.create(t.compositeFilter.filters.map(r=>nS(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return we()}}(t.compositeFilter.op))}(n):we()}function TD(n){return uD[n]}function ID(n){return cD[n]}function SD(n){return hD[n]}function ca(n){return{fieldPath:n.canonicalString()}}function ha(n){return zt.fromServerFormat(n.fieldPath)}function rS(n){return n instanceof _t?function(t){if(t.op==="=="){if(mE(t.value))return{unaryFilter:{field:ca(t.field),op:"IS_NAN"}};if(pE(t.value))return{unaryFilter:{field:ca(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(mE(t.value))return{unaryFilter:{field:ca(t.field),op:"IS_NOT_NAN"}};if(pE(t.value))return{unaryFilter:{field:ca(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ca(t.field),op:ID(t.op),value:t.value}}}(n):n instanceof hr?function(t){const r=t.getFilters().map(s=>rS(s));return r.length===1?r[0]:{compositeFilter:{op:SD(t.op),filters:r}}}(n):we()}function CD(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function iS(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e,t,r,s,a=Te.min(),u=Te.min(),h=Bt.EMPTY_BYTE_STRING,f=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=h,this.expectedCount=f}withSequenceNumber(e){return new Gi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Gi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Gi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Gi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RD{constructor(e){this.ht=e}}function AD(n){const e=ED({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?um(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kD{constructor(){this.ln=new PD}addToCollectionParentIndex(e,t){return this.ln.add(t),H.resolve()}getCollectionParents(e,t){return H.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return H.resolve()}deleteFieldIndex(e,t){return H.resolve()}deleteAllFieldIndexes(e){return H.resolve()}createTargetIndexes(e,t){return H.resolve()}getDocumentsMatchingTarget(e,t){return H.resolve(null)}getIndexType(e,t){return H.resolve(0)}getFieldIndexes(e,t){return H.resolve([])}getNextCollectionGroupToUpdate(e){return H.resolve(null)}getMinOffset(e,t){return H.resolve(ts.min())}getMinOffsetFromCollectionGroup(e,t){return H.resolve(ts.min())}updateCollectionGroup(e,t,r){return H.resolve()}updateIndexEntries(e,t){return H.resolve()}}class PD{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Rt(nt.comparator),a=!s.has(r);return this.index[t]=s.add(r),a}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Rt(nt.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PE={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class gn{static withCacheSize(e){return new gn(e,gn.DEFAULT_COLLECTION_PERCENTILE,gn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */gn.DEFAULT_COLLECTION_PERCENTILE=10,gn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,gn.DEFAULT=new gn(41943040,gn.DEFAULT_COLLECTION_PERCENTILE,gn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),gn.DISABLED=new gn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new Ra(0)}static Qn(){return new Ra(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NE([n,e],[t,r]){const s=be(n,t);return s===0?be(e,r):s}class ND{constructor(e){this.Gn=e,this.buffer=new Rt(NE),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();NE(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class xD{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){ae("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Fa(t)?ae("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Va(t)}await this.Yn(3e5)})}}class bD{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return H.resolve(wd.oe);const r=new ND(t);return this.Zn.forEachTarget(e,s=>r.Hn(s.sequenceNumber)).next(()=>this.Zn.er(e,s=>r.Hn(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Zn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ae("LruGarbageCollector","Garbage collection skipped; disabled"),H.resolve(PE)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(ae("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),PE):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let r,s,a,u,h,f,m;const y=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(E=>(E>this.params.maximumSequenceNumbersToCollect?(ae("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${E}`),s=this.params.maximumSequenceNumbersToCollect):s=E,u=Date.now(),this.nthSequenceNumber(e,s))).next(E=>(r=E,h=Date.now(),this.removeTargets(e,r,t))).next(E=>(a=E,f=Date.now(),this.removeOrphanedDocuments(e,r))).next(E=>(m=Date.now(),la()<=Pe.DEBUG&&ae("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-y}ms
	Determined least recently used ${s} in `+(h-u)+`ms
	Removed ${a} targets in `+(f-h)+`ms
	Removed ${E} documents in `+(m-f)+`ms
Total Duration: ${m-y}ms`),H.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:a,documentsRemoved:E})))}}function DD(n,e){return new bD(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OD{constructor(){this.changes=new so(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Xt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?H.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LD{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MD{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&ru(r.mutation,s,or.empty(),Ct.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,Ne()).next(()=>r))}getLocalViewOfDocuments(e,t,r=Ne()){const s=Bs();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(a=>{let u=Kl();return a.forEach((h,f)=>{u=u.insert(h,f.overlayedDocument)}),u}))}getOverlayedDocuments(e,t){const r=Bs();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,Ne()))}populateOverlays(e,t,r){const s=[];return r.forEach(a=>{t.has(a)||s.push(a)}),this.documentOverlayCache.getOverlays(e,s).next(a=>{a.forEach((u,h)=>{t.set(u,h)})})}computeViews(e,t,r,s){let a=hi();const u=nu(),h=function(){return nu()}();return t.forEach((f,m)=>{const y=r.get(m.key);s.has(m.key)&&(y===void 0||y.mutation instanceof oo)?a=a.insert(m.key,m):y!==void 0?(u.set(m.key,y.mutation.getFieldMask()),ru(y.mutation,m,y.mutation.getFieldMask(),Ct.now())):u.set(m.key,or.empty())}),this.recalculateAndSaveOverlays(e,a).next(f=>(f.forEach((m,y)=>u.set(m,y)),t.forEach((m,y)=>{var E;return h.set(m,new LD(y,(E=u.get(m))!==null&&E!==void 0?E:null))}),h))}recalculateAndSaveOverlays(e,t){const r=nu();let s=new vt((u,h)=>u-h),a=Ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(u=>{for(const h of u)h.keys().forEach(f=>{const m=t.get(f);if(m===null)return;let y=r.get(f)||or.empty();y=h.applyToLocalView(m,y),r.set(f,y);const E=(s.get(h.batchId)||Ne()).add(f);s=s.insert(h.batchId,E)})}).next(()=>{const u=[],h=s.getReverseIterator();for(;h.hasNext();){const f=h.getNext(),m=f.key,y=f.value,E=jI();y.forEach(T=>{if(!a.has(T)){const R=HI(t.get(T),r.get(T));R!==null&&E.set(T,R),a=a.add(T)}}),u.push(this.documentOverlayCache.saveOverlays(e,m,E))}return H.waitFor(u)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(u){return me.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):LI(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(a=>{const u=s-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-a.size):H.resolve(Bs());let h=-1,f=a;return u.next(m=>H.forEach(m,(y,E)=>(h<E.largestBatchId&&(h=E.largestBatchId),a.get(y)?H.resolve():this.remoteDocumentCache.getEntry(e,y).next(T=>{f=f.insert(y,T)}))).next(()=>this.populateOverlays(e,m,a)).next(()=>this.computeViews(e,f,m,Ne())).next(y=>({batchId:h,changes:UI(y)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new me(t)).next(r=>{let s=Kl();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const a=t.collectionGroup;let u=Kl();return this.indexManager.getCollectionParents(e,a).next(h=>H.forEach(h,f=>{const m=function(E,T){return new Ua(T,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)}(t,f.child(a));return this.getDocumentsMatchingCollectionQuery(e,m,r,s).next(y=>{y.forEach((E,T)=>{u=u.insert(E,T)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(e,t,r,s){let a;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(u=>(a=u,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,a,s))).next(u=>{a.forEach((f,m)=>{const y=m.getKey();u.get(y)===null&&(u=u.insert(y,Xt.newInvalidDocument(y)))});let h=Kl();return u.forEach((f,m)=>{const y=a.get(f);y!==void 0&&ru(y.mutation,m,or.empty(),Ct.now()),Cd(t,m)&&(h=h.insert(f,m))}),h})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VD{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return H.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Nr(s.createTime)}}(t)),H.resolve()}getNamedQuery(e,t){return H.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(s){return{name:s.name,query:AD(s.bundledQuery),readTime:Nr(s.readTime)}}(t)),H.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FD{constructor(){this.overlays=new vt(me.comparator),this.dr=new Map}getOverlay(e,t){return H.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Bs();return H.forEach(t,s=>this.getOverlay(e,s).next(a=>{a!==null&&r.set(s,a)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,a)=>{this.Tt(e,t,a)}),H.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.dr.get(r);return s!==void 0&&(s.forEach(a=>this.overlays=this.overlays.remove(a)),this.dr.delete(r)),H.resolve()}getOverlaysForCollection(e,t,r){const s=Bs(),a=t.length+1,u=new me(t.child("")),h=this.overlays.getIteratorFrom(u);for(;h.hasNext();){const f=h.getNext().value,m=f.getKey();if(!t.isPrefixOf(m.path))break;m.path.length===a&&f.largestBatchId>r&&s.set(f.getKey(),f)}return H.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let a=new vt((m,y)=>m-y);const u=this.overlays.getIterator();for(;u.hasNext();){const m=u.getNext().value;if(m.getKey().getCollectionGroup()===t&&m.largestBatchId>r){let y=a.get(m.largestBatchId);y===null&&(y=Bs(),a=a.insert(m.largestBatchId,y)),y.set(m.getKey(),m)}}const h=Bs(),f=a.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach((m,y)=>h.set(m,y)),!(h.size()>=s)););return H.resolve(h)}Tt(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const u=this.dr.get(s.largestBatchId).delete(r.key);this.dr.set(s.largestBatchId,u)}this.overlays=this.overlays.insert(r.key,new rD(t,r));let a=this.dr.get(t);a===void 0&&(a=Ne(),this.dr.set(t,a)),this.dr.set(t,a.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UD{constructor(){this.sessionToken=Bt.EMPTY_BYTE_STRING}getSessionToken(e){return H.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,H.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(){this.Er=new Rt(Dt.Ar),this.Rr=new Rt(Dt.Vr)}isEmpty(){return this.Er.isEmpty()}addReference(e,t){const r=new Dt(e,t);this.Er=this.Er.add(r),this.Rr=this.Rr.add(r)}mr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.gr(new Dt(e,t))}pr(e,t){e.forEach(r=>this.removeReference(r,t))}yr(e){const t=new me(new nt([])),r=new Dt(t,e),s=new Dt(t,e+1),a=[];return this.Rr.forEachInRange([r,s],u=>{this.gr(u),a.push(u.key)}),a}wr(){this.Er.forEach(e=>this.gr(e))}gr(e){this.Er=this.Er.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new me(new nt([])),r=new Dt(t,e),s=new Dt(t,e+1);let a=Ne();return this.Rr.forEachInRange([r,s],u=>{a=a.add(u.key)}),a}containsKey(e){const t=new Dt(e,0),r=this.Er.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Dt{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return me.comparator(e.key,t.key)||be(e.br,t.br)}static Vr(e,t){return be(e.br,t.br)||me.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jD{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new Rt(Dt.Ar)}checkEmpty(e){return H.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const a=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new nD(a,t,r,s);this.mutationQueue.push(u);for(const h of s)this.vr=this.vr.add(new Dt(h.key,a)),this.indexManager.addToCollectionParentIndex(e,h.key.path.popLast());return H.resolve(u)}lookupMutationBatch(e,t){return H.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Fr(r),a=s<0?0:s;return H.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return H.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return H.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Dt(t,0),s=new Dt(t,Number.POSITIVE_INFINITY),a=[];return this.vr.forEachInRange([r,s],u=>{const h=this.Cr(u.br);a.push(h)}),H.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Rt(be);return t.forEach(s=>{const a=new Dt(s,0),u=new Dt(s,Number.POSITIVE_INFINITY);this.vr.forEachInRange([a,u],h=>{r=r.add(h.br)})}),H.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let a=r;me.isDocumentKey(a)||(a=a.child(""));const u=new Dt(new me(a),0);let h=new Rt(be);return this.vr.forEachWhile(f=>{const m=f.key.path;return!!r.isPrefixOf(m)&&(m.length===s&&(h=h.add(f.br)),!0)},u),H.resolve(this.Mr(h))}Mr(e){const t=[];return e.forEach(r=>{const s=this.Cr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){We(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.vr;return H.forEach(t.mutations,s=>{const a=new Dt(s.key,t.batchId);return r=r.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.vr=r})}Bn(e){}containsKey(e,t){const r=new Dt(t,0),s=this.vr.firstAfterOrEqual(r);return H.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,H.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zD{constructor(e){this.Nr=e,this.docs=function(){return new vt(me.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),a=s?s.size:0,u=this.Nr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:u}),this.size+=u-a,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return H.resolve(r?r.document.mutableCopy():Xt.newInvalidDocument(t))}getEntries(e,t){let r=hi();return t.forEach(s=>{const a=this.docs.get(s);r=r.insert(s,a?a.document.mutableCopy():Xt.newInvalidDocument(s))}),H.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let a=hi();const u=t.path,h=new me(u.child("__id-9223372036854775808__")),f=this.docs.getIteratorFrom(h);for(;f.hasNext();){const{key:m,value:{document:y}}=f.getNext();if(!u.isPrefixOf(m.path))break;m.path.length>u.length+1||yb(_b(y),r)<=0||(s.has(y.key)||Cd(t,y))&&(a=a.insert(y.key,y.mutableCopy()))}return H.resolve(a)}getAllFromCollectionGroup(e,t,r,s){we()}Br(e,t){return H.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new BD(this)}getSize(e){return H.resolve(this.size)}}class BD extends OD{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.hr.addEntry(e,s)):this.hr.removeEntry(r)}),H.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $D{constructor(e){this.persistence=e,this.Lr=new so(t=>og(t),ag),this.lastRemoteSnapshotVersion=Te.min(),this.highestTargetId=0,this.kr=0,this.qr=new fg,this.targetCount=0,this.Qr=Ra.qn()}forEachTarget(e,t){return this.Lr.forEach((r,s)=>t(s)),H.resolve()}getLastRemoteSnapshotVersion(e){return H.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return H.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),H.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.kr&&(this.kr=t),H.resolve()}Un(e){this.Lr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new Ra(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,H.resolve()}updateTargetData(e,t){return this.Un(t),H.resolve()}removeTargetData(e,t){return this.Lr.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,H.resolve()}removeTargets(e,t,r){let s=0;const a=[];return this.Lr.forEach((u,h)=>{h.sequenceNumber<=t&&r.get(h.targetId)===null&&(this.Lr.delete(u),a.push(this.removeMatchingKeysForTargetId(e,h.targetId)),s++)}),H.waitFor(a).next(()=>s)}getTargetCount(e){return H.resolve(this.targetCount)}getTargetData(e,t){const r=this.Lr.get(t)||null;return H.resolve(r)}addMatchingKeys(e,t,r){return this.qr.mr(t,r),H.resolve()}removeMatchingKeys(e,t,r){this.qr.pr(t,r);const s=this.persistence.referenceDelegate,a=[];return s&&t.forEach(u=>{a.push(s.markPotentiallyOrphaned(e,u))}),H.waitFor(a)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),H.resolve()}getMatchingKeysForTargetId(e,t){const r=this.qr.Sr(t);return H.resolve(r)}containsKey(e,t){return H.resolve(this.qr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(e,t){this.Kr={},this.overlays={},this.$r=new wd(0),this.Ur=!1,this.Ur=!0,this.Wr=new UD,this.referenceDelegate=e(this),this.Gr=new $D(this),this.indexManager=new kD,this.remoteDocumentCache=function(s){return new zD(s)}(r=>this.referenceDelegate.zr(r)),this.serializer=new RD(t),this.jr=new VD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new FD,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Kr[e.toKey()];return r||(r=new jD(t,this.referenceDelegate),this.Kr[e.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,r){ae("MemoryPersistence","Starting transaction:",e);const s=new WD(this.$r.next());return this.referenceDelegate.Hr(),r(s).next(a=>this.referenceDelegate.Jr(s).next(()=>a)).toPromise().then(a=>(s.raiseOnCommittedEvent(),a))}Yr(e,t){return H.or(Object.values(this.Kr).map(r=>()=>r.containsKey(e,t)))}}class WD extends Eb{constructor(e){super(),this.currentSequenceNumber=e}}class pg{constructor(e){this.persistence=e,this.Zr=new fg,this.Xr=null}static ei(e){return new pg(e)}get ti(){if(this.Xr)return this.Xr;throw we()}addReference(e,t,r){return this.Zr.addReference(r,t),this.ti.delete(r.toString()),H.resolve()}removeReference(e,t,r){return this.Zr.removeReference(r,t),this.ti.add(r.toString()),H.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),H.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(s=>this.ti.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(a=>this.ti.add(a.toString()))}).next(()=>r.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return H.forEach(this.ti,r=>{const s=me.fromPath(r);return this.ni(e,s).next(a=>{a||t.removeEntry(s,Te.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(r=>{r?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return H.or([()=>H.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class Gh{constructor(e,t){this.persistence=e,this.ri=new so(r=>Ib(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=DD(this,t)}static ei(e,t){return new Gh(e,t)}Hr(){}Jr(e){return H.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}nr(e){let t=0;return this.er(e,r=>{t++}).next(()=>t)}er(e,t){return H.forEach(this.ri,(r,s)=>this.ir(e,r,s).next(a=>a?H.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),a=s.newChangeBuffer();return s.Br(e,u=>this.ir(e,u,t).next(h=>{h||(r++,a.removeEntry(u,Te.min()))})).next(()=>a.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),H.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.ri.set(r,e.currentSequenceNumber),H.resolve()}removeReference(e,t,r){return this.ri.set(r,e.currentSequenceNumber),H.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),H.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Th(e.data.value)),t}ir(e,t,r){return H.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.ri.get(t);return H.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Wi=r,this.Gi=s}static zi(e,t){let r=Ne(),s=Ne();for(const a of t.docChanges)switch(a.type){case 0:r=r.add(a.doc.key);break;case 1:s=s.add(a.doc.key)}return new mg(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qD{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HD{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return rk()?8:wb(tn())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,r,s){const a={result:null};return this.Xi(e,t).next(u=>{a.result=u}).next(()=>{if(!a.result)return this.es(e,t,s,r).next(u=>{a.result=u})}).next(()=>{if(a.result)return;const u=new qD;return this.ts(e,t,u).next(h=>{if(a.result=h,this.Hi)return this.ns(e,t,u,h.size)})}).next(()=>a.result)}ns(e,t,r,s){return r.documentReadCount<this.Ji?(la()<=Pe.DEBUG&&ae("QueryEngine","SDK will not create cache indexes for query:",ua(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),H.resolve()):(la()<=Pe.DEBUG&&ae("QueryEngine","Query:",ua(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Yi*s?(la()<=Pe.DEBUG&&ae("QueryEngine","The SDK decides to create cache indexes for query:",ua(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Pr(t))):H.resolve())}Xi(e,t){if(vE(t))return H.resolve(null);let r=Pr(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=um(t,null,"F"),r=Pr(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(a=>{const u=Ne(...a);return this.Zi.getDocuments(e,u).next(h=>this.indexManager.getMinOffset(e,r).next(f=>{const m=this.rs(t,h);return this.ss(t,m,u,f.readTime)?this.Xi(e,um(t,null,"F")):this.os(e,m,t,f)}))})))}es(e,t,r,s){return vE(t)||s.isEqual(Te.min())?H.resolve(null):this.Zi.getDocuments(e,r).next(a=>{const u=this.rs(t,a);return this.ss(t,u,r,s)?H.resolve(null):(la()<=Pe.DEBUG&&ae("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ua(t)),this.os(e,u,t,gb(s,-1)).next(h=>h))})}rs(e,t){let r=new Rt(VI(e));return t.forEach((s,a)=>{Cd(e,a)&&(r=r.add(a))}),r}ss(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const a=e.limitType==="F"?t.last():t.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(s)>0)}ts(e,t,r){return la()<=Pe.DEBUG&&ae("QueryEngine","Using full collection scan to execute query:",ua(t)),this.Zi.getDocumentsMatchingQuery(e,t,ts.min(),r)}os(e,t,r,s){return this.Zi.getDocumentsMatchingQuery(e,r,s).next(a=>(t.forEach(u=>{a=a.insert(u.key,u)}),a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GD{constructor(e,t,r,s){this.persistence=e,this._s=t,this.serializer=s,this.us=new vt(be),this.cs=new so(a=>og(a),ag),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(r)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new MD(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}function KD(n,e,t,r){return new GD(n,e,t,r)}async function oS(n,e){const t=Se(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(a=>(s=a,t.Ps(e),t.mutationQueue.getAllMutationBatches(r))).next(a=>{const u=[],h=[];let f=Ne();for(const m of s){u.push(m.batchId);for(const y of m.mutations)f=f.add(y.key)}for(const m of a){h.push(m.batchId);for(const y of m.mutations)f=f.add(y.key)}return t.localDocuments.getDocuments(r,f).next(m=>({Ts:m,removedBatchIds:u,addedBatchIds:h}))})})}function QD(n,e){const t=Se(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),a=t.hs.newChangeBuffer({trackRemovals:!0});return function(h,f,m,y){const E=m.batch,T=E.keys();let R=H.resolve();return T.forEach(x=>{R=R.next(()=>y.getEntry(f,x)).next($=>{const L=m.docVersions.get(x);We(L!==null),$.version.compareTo(L)<0&&(E.applyToRemoteDocument($,m),$.isValidDocument()&&($.setReadTime(m.commitVersion),y.addEntry($)))})}),R.next(()=>h.mutationQueue.removeMutationBatch(f,E))}(t,r,e,a).next(()=>a.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(h){let f=Ne();for(let m=0;m<h.mutationResults.length;++m)h.mutationResults[m].transformResults.length>0&&(f=f.add(h.batch.mutations[m].key));return f}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function aS(n){const e=Se(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function YD(n,e){const t=Se(n),r=e.snapshotVersion;let s=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",a=>{const u=t.hs.newChangeBuffer({trackRemovals:!0});s=t.us;const h=[];e.targetChanges.forEach((y,E)=>{const T=s.get(E);if(!T)return;h.push(t.Gr.removeMatchingKeys(a,y.removedDocuments,E).next(()=>t.Gr.addMatchingKeys(a,y.addedDocuments,E)));let R=T.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.get(E)!==null?R=R.withResumeToken(Bt.EMPTY_BYTE_STRING,Te.min()).withLastLimboFreeSnapshotVersion(Te.min()):y.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(y.resumeToken,r)),s=s.insert(E,R),function($,L,q){return $.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-$.snapshotVersion.toMicroseconds()>=3e8?!0:q.addedDocuments.size+q.modifiedDocuments.size+q.removedDocuments.size>0}(T,R,y)&&h.push(t.Gr.updateTargetData(a,R))});let f=hi(),m=Ne();if(e.documentUpdates.forEach(y=>{e.resolvedLimboDocuments.has(y)&&h.push(t.persistence.referenceDelegate.updateLimboDocument(a,y))}),h.push(XD(a,u,e.documentUpdates).next(y=>{f=y.Is,m=y.ds})),!r.isEqual(Te.min())){const y=t.Gr.getLastRemoteSnapshotVersion(a).next(E=>t.Gr.setTargetsMetadata(a,a.currentSequenceNumber,r));h.push(y)}return H.waitFor(h).next(()=>u.apply(a)).next(()=>t.localDocuments.getLocalViewOfDocuments(a,f,m)).next(()=>f)}).then(a=>(t.us=s,a))}function XD(n,e,t){let r=Ne(),s=Ne();return t.forEach(a=>r=r.add(a)),e.getEntries(n,r).next(a=>{let u=hi();return t.forEach((h,f)=>{const m=a.get(h);f.isFoundDocument()!==m.isFoundDocument()&&(s=s.add(h)),f.isNoDocument()&&f.version.isEqual(Te.min())?(e.removeEntry(h,f.readTime),u=u.insert(h,f)):!m.isValidDocument()||f.version.compareTo(m.version)>0||f.version.compareTo(m.version)===0&&m.hasPendingWrites?(e.addEntry(f),u=u.insert(h,f)):ae("LocalStore","Ignoring outdated watch update for ",h,". Current version:",m.version," Watch version:",f.version)}),{Is:u,ds:s}})}function JD(n,e){const t=Se(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function ZD(n,e){const t=Se(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Gr.getTargetData(r,e).next(a=>a?(s=a,H.resolve(s)):t.Gr.allocateTargetId(r).next(u=>(s=new Gi(e,u,"TargetPurposeListen",r.currentSequenceNumber),t.Gr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.us.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.us=t.us.insert(r.targetId,r),t.cs.set(e,r.targetId)),r})}async function pm(n,e,t){const r=Se(n),s=r.us.get(e),a=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",a,u=>r.persistence.referenceDelegate.removeTarget(u,s))}catch(u){if(!Fa(u))throw u;ae("LocalStore",`Failed to update sequence numbers for target ${e}: ${u}`)}r.us=r.us.remove(e),r.cs.delete(s.target)}function xE(n,e,t){const r=Se(n);let s=Te.min(),a=Ne();return r.persistence.runTransaction("Execute query","readwrite",u=>function(f,m,y){const E=Se(f),T=E.cs.get(y);return T!==void 0?H.resolve(E.us.get(T)):E.Gr.getTargetData(m,y)}(r,u,Pr(e)).next(h=>{if(h)return s=h.lastLimboFreeSnapshotVersion,r.Gr.getMatchingKeysForTargetId(u,h.targetId).next(f=>{a=f})}).next(()=>r._s.getDocumentsMatchingQuery(u,e,t?s:Te.min(),t?a:Ne())).next(h=>(eO(r,zb(e),h),{documents:h,Es:a})))}function eO(n,e,t){let r=n.ls.get(e)||Te.min();t.forEach((s,a)=>{a.readTime.compareTo(r)>0&&(r=a.readTime)}),n.ls.set(e,r)}class bE{constructor(){this.activeTargetIds=Gb()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class tO{constructor(){this._o=new bE,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,r){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new bE,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nO{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DE{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){ae("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){ae("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ch=null;function Dp(){return ch===null?ch=function(){return 268435456+Math.round(2147483648*Math.random())}():ch++,"0x"+ch.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iO{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt="WebChannelConnection";class sO extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.Fo=r+"://"+t.host,this.Mo=`projects/${s}/databases/${a}`,this.xo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${a}`}Oo(t,r,s,a,u){const h=Dp(),f=this.No(t,r.toUriEncodedString());ae("RestConnection",`Sending RPC '${t}' ${h}:`,f,s);const m={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Bo(m,a,u),this.Lo(t,f,m,s).then(y=>(ae("RestConnection",`Received RPC '${t}' ${h}: `,y),y),y=>{throw Ta("RestConnection",`RPC '${t}' ${h} failed with error: `,y,"url: ",f,"request:",s),y})}ko(t,r,s,a,u,h){return this.Oo(t,r,s,a,u)}Bo(t,r,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ma}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((a,u)=>t[u]=a),s&&s.headers.forEach((a,u)=>t[u]=a)}No(t,r){const s=rO[t];return`${this.Fo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Lo(e,t,r,s){const a=Dp();return new Promise((u,h)=>{const f=new vI;f.setWithCredentials(!0),f.listenOnce(EI.COMPLETE,()=>{try{switch(f.getLastErrorCode()){case wh.NO_ERROR:const y=f.getResponseJson();ae(Qt,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(y)),u(y);break;case wh.TIMEOUT:ae(Qt,`RPC '${e}' ${a} timed out`),h(new ce(K.DEADLINE_EXCEEDED,"Request time out"));break;case wh.HTTP_ERROR:const E=f.getStatus();if(ae(Qt,`RPC '${e}' ${a} failed with status:`,E,"response text:",f.getResponseText()),E>0){let T=f.getResponseJson();Array.isArray(T)&&(T=T[0]);const R=T==null?void 0:T.error;if(R&&R.status&&R.message){const x=function(L){const q=L.toLowerCase().replace(/_/g,"-");return Object.values(K).indexOf(q)>=0?q:K.UNKNOWN}(R.status);h(new ce(x,R.message))}else h(new ce(K.UNKNOWN,"Server responded with status "+f.getStatus()))}else h(new ce(K.UNAVAILABLE,"Connection failed."));break;default:we()}}finally{ae(Qt,`RPC '${e}' ${a} completed.`)}});const m=JSON.stringify(s);ae(Qt,`RPC '${e}' ${a} sending request:`,s),f.send(t,"POST",m,r,15)})}qo(e,t,r){const s=Dp(),a=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],u=II(),h=TI(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},m=this.longPollingOptions.timeoutSeconds;m!==void 0&&(f.longPollingTimeout=Math.round(1e3*m)),this.useFetchStreams&&(f.useFetchStreams=!0),this.Bo(f.initMessageHeaders,t,r),f.encodeInitMessageHeaders=!0;const y=a.join("");ae(Qt,`Creating RPC '${e}' stream ${s}: ${y}`,f);const E=u.createWebChannel(y,f);let T=!1,R=!1;const x=new iO({Eo:L=>{R?ae(Qt,`Not sending because RPC '${e}' stream ${s} is closed:`,L):(T||(ae(Qt,`Opening RPC '${e}' stream ${s} transport.`),E.open(),T=!0),ae(Qt,`RPC '${e}' stream ${s} sending:`,L),E.send(L))},Ao:()=>E.close()}),$=(L,q,ee)=>{L.listen(q,X=>{try{ee(X)}catch(de){setTimeout(()=>{throw de},0)}})};return $(E,Gl.EventType.OPEN,()=>{R||(ae(Qt,`RPC '${e}' stream ${s} transport opened.`),x.So())}),$(E,Gl.EventType.CLOSE,()=>{R||(R=!0,ae(Qt,`RPC '${e}' stream ${s} transport closed`),x.Do())}),$(E,Gl.EventType.ERROR,L=>{R||(R=!0,Ta(Qt,`RPC '${e}' stream ${s} transport errored:`,L),x.Do(new ce(K.UNAVAILABLE,"The operation could not be completed")))}),$(E,Gl.EventType.MESSAGE,L=>{var q;if(!R){const ee=L.data[0];We(!!ee);const X=ee,de=(X==null?void 0:X.error)||((q=X[0])===null||q===void 0?void 0:q.error);if(de){ae(Qt,`RPC '${e}' stream ${s} received error:`,de);const Ce=de.status;let Ie=function(A){const N=gt[A];if(N!==void 0)return QI(N)}(Ce),b=de.message;Ie===void 0&&(Ie=K.INTERNAL,b="Unknown error status: "+Ce+" with message "+de.message),R=!0,x.Do(new ce(Ie,b)),E.close()}else ae(Qt,`RPC '${e}' stream ${s} received:`,ee),x.vo(ee)}}),$(h,wI.STAT_EVENT,L=>{L.stat===nm.PROXY?ae(Qt,`RPC '${e}' stream ${s} detected buffering proxy`):L.stat===nm.NOPROXY&&ae(Qt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{x.bo()},0),x}}function Op(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pd(n){return new dD(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{constructor(e,t,r=1e3,s=1.5,a=6e4){this.li=e,this.timerId=t,this.Qo=r,this.Ko=s,this.$o=a,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),s=Math.max(0,t-r);s>0&&ae("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,s,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uS{constructor(e,t,r,s,a,u,h,f){this.li=e,this.Yo=r,this.Zo=s,this.connection=a,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=h,this.listener=f,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new lS(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===K.RESOURCE_EXHAUSTED?(ci(t.toString()),ci("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===K.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Xo===t&&this.I_(r,s)},r=>{e(()=>{const s=new ce(K.UNKNOWN,"Fetching auth token failed: "+r.message);return this.d_(s)})})}I_(e,t){const r=this.T_(this.Xo);this.stream=this.E_(e,t),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(s=>{r(()=>this.d_(s))}),this.stream.onMessage(s=>{r(()=>++this.n_==1?this.A_(s):this.onNext(s))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}d_(e){return ae("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(ae("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class oO extends uS{constructor(e,t,r,s,a,u){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,u),this.serializer=a}E_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const t=mD(this.serializer,e),r=function(a){if(!("targetChange"in a))return Te.min();const u=a.targetChange;return u.targetIds&&u.targetIds.length?Te.min():u.readTime?Nr(u.readTime):Te.min()}(e);return this.listener.R_(t,r)}V_(e){const t={};t.database=fm(this.serializer),t.addTarget=function(a,u){let h;const f=u.target;if(h=am(f)?{documents:yD(a,f)}:{query:vD(a,f).ct},h.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){h.resumeToken=JI(a,u.resumeToken);const m=cm(a,u.expectedCount);m!==null&&(h.expectedCount=m)}else if(u.snapshotVersion.compareTo(Te.min())>0){h.readTime=Hh(a,u.snapshotVersion.toTimestamp());const m=cm(a,u.expectedCount);m!==null&&(h.expectedCount=m)}return h}(this.serializer,e);const r=wD(this.serializer,e);r&&(t.labels=r),this.c_(t)}m_(e){const t={};t.database=fm(this.serializer),t.removeTarget=e,this.c_(t)}}class aO extends uS{constructor(e,t,r,s,a,u){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,u),this.serializer=a}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}E_(e,t){return this.connection.qo("Write",e,t)}A_(e){return We(!!e.streamToken),this.lastStreamToken=e.streamToken,We(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){We(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const t=_D(e.writeResults,e.commitTime),r=Nr(e.commitTime);return this.listener.y_(r,t)}w_(){const e={};e.database=fm(this.serializer),this.c_(e)}g_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>gD(this.serializer,r))};this.c_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lO extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.S_=!1}b_(){if(this.S_)throw new ce(K.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,r,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Oo(e,hm(t,r),s,a,u)).catch(a=>{throw a.name==="FirebaseError"?(a.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new ce(K.UNKNOWN,a.toString())})}ko(e,t,r,s,a){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,h])=>this.connection.ko(e,hm(t,r),s,u,h,a)).catch(u=>{throw u.name==="FirebaseError"?(u.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ce(K.UNKNOWN,u.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class uO{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(ci(t),this.C_=!1):ae("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cO{constructor(e,t,r,s,a){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.B_=[],this.L_=new Map,this.k_=new Set,this.q_=[],this.Q_=a,this.Q_.uo(u=>{r.enqueueAndForget(async()=>{ao(this)&&(ae("RemoteStore","Restarting streams for network reachability change."),await async function(f){const m=Se(f);m.k_.add(4),await Ou(m),m.K_.set("Unknown"),m.k_.delete(4),await Nd(m)}(this))})}),this.K_=new uO(r,s)}}async function Nd(n){if(ao(n))for(const e of n.q_)await e(!0)}async function Ou(n){for(const e of n.q_)await e(!1)}function cS(n,e){const t=Se(n);t.L_.has(e.targetId)||(t.L_.set(e.targetId,e),vg(t)?yg(t):ja(t).s_()&&_g(t,e))}function gg(n,e){const t=Se(n),r=ja(t);t.L_.delete(e),r.s_()&&hS(t,e),t.L_.size===0&&(r.s_()?r.a_():ao(t)&&t.K_.set("Unknown"))}function _g(n,e){if(n.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Te.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ja(n).V_(e)}function hS(n,e){n.U_.xe(e),ja(n).m_(e)}function yg(n){n.U_=new lD({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>n.L_.get(e)||null,nt:()=>n.datastore.serializer.databaseId}),ja(n).start(),n.K_.F_()}function vg(n){return ao(n)&&!ja(n).i_()&&n.L_.size>0}function ao(n){return Se(n).k_.size===0}function dS(n){n.U_=void 0}async function hO(n){n.K_.set("Online")}async function dO(n){n.L_.forEach((e,t)=>{_g(n,e)})}async function fO(n,e){dS(n),vg(n)?(n.K_.O_(e),yg(n)):n.K_.set("Unknown")}async function pO(n,e,t){if(n.K_.set("Online"),e instanceof XI&&e.state===2&&e.cause)try{await async function(s,a){const u=a.cause;for(const h of a.targetIds)s.L_.has(h)&&(await s.remoteSyncer.rejectListen(h,u),s.L_.delete(h),s.U_.removeTarget(h))}(n,e)}catch(r){ae("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Kh(n,r)}else if(e instanceof Ch?n.U_.$e(e):e instanceof YI?n.U_.Je(e):n.U_.Ge(e),!t.isEqual(Te.min()))try{const r=await aS(n.localStore);t.compareTo(r)>=0&&await function(a,u){const h=a.U_.it(u);return h.targetChanges.forEach((f,m)=>{if(f.resumeToken.approximateByteSize()>0){const y=a.L_.get(m);y&&a.L_.set(m,y.withResumeToken(f.resumeToken,u))}}),h.targetMismatches.forEach((f,m)=>{const y=a.L_.get(f);if(!y)return;a.L_.set(f,y.withResumeToken(Bt.EMPTY_BYTE_STRING,y.snapshotVersion)),hS(a,f);const E=new Gi(y.target,f,m,y.sequenceNumber);_g(a,E)}),a.remoteSyncer.applyRemoteEvent(h)}(n,t)}catch(r){ae("RemoteStore","Failed to raise snapshot:",r),await Kh(n,r)}}async function Kh(n,e,t){if(!Fa(e))throw e;n.k_.add(1),await Ou(n),n.K_.set("Offline"),t||(t=()=>aS(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{ae("RemoteStore","Retrying IndexedDB access"),await t(),n.k_.delete(1),await Nd(n)})}function fS(n,e){return e().catch(t=>Kh(n,t,e))}async function xd(n){const e=Se(n),t=ss(e);let r=e.B_.length>0?e.B_[e.B_.length-1].batchId:-1;for(;mO(e);)try{const s=await JD(e.localStore,r);if(s===null){e.B_.length===0&&t.a_();break}r=s.batchId,gO(e,s)}catch(s){await Kh(e,s)}pS(e)&&mS(e)}function mO(n){return ao(n)&&n.B_.length<10}function gO(n,e){n.B_.push(e);const t=ss(n);t.s_()&&t.f_&&t.g_(e.mutations)}function pS(n){return ao(n)&&!ss(n).i_()&&n.B_.length>0}function mS(n){ss(n).start()}async function _O(n){ss(n).w_()}async function yO(n){const e=ss(n);for(const t of n.B_)e.g_(t.mutations)}async function vO(n,e,t){const r=n.B_.shift(),s=cg.from(r,e,t);await fS(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await xd(n)}async function EO(n,e){e&&ss(n).f_&&await async function(r,s){if(function(u){return sD(u)&&u!==K.ABORTED}(s.code)){const a=r.B_.shift();ss(r).__(),await fS(r,()=>r.remoteSyncer.rejectFailedWrite(a.batchId,s)),await xd(r)}}(n,e),pS(n)&&mS(n)}async function OE(n,e){const t=Se(n);t.asyncQueue.verifyOperationInProgress(),ae("RemoteStore","RemoteStore received new credentials");const r=ao(t);t.k_.add(3),await Ou(t),r&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await Nd(t)}async function wO(n,e){const t=Se(n);e?(t.k_.delete(2),await Nd(t)):e||(t.k_.add(2),await Ou(t),t.K_.set("Unknown"))}function ja(n){return n.W_||(n.W_=function(t,r,s){const a=Se(t);return a.b_(),new oO(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,s)}(n.datastore,n.asyncQueue,{Ro:hO.bind(null,n),mo:dO.bind(null,n),po:fO.bind(null,n),R_:pO.bind(null,n)}),n.q_.push(async e=>{e?(n.W_.__(),vg(n)?yg(n):n.K_.set("Unknown")):(await n.W_.stop(),dS(n))})),n.W_}function ss(n){return n.G_||(n.G_=function(t,r,s){const a=Se(t);return a.b_(),new aO(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,s)}(n.datastore,n.asyncQueue,{Ro:()=>Promise.resolve(),mo:_O.bind(null,n),po:EO.bind(null,n),p_:yO.bind(null,n),y_:vO.bind(null,n)}),n.q_.push(async e=>{e?(n.G_.__(),await xd(n)):(await n.G_.stop(),n.B_.length>0&&(ae("RemoteStore",`Stopping write stream with ${n.B_.length} pending writes`),n.B_=[]))})),n.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(e,t,r,s,a){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=a,this.deferred=new qs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,a){const u=Date.now()+r,h=new Eg(e,t,u,s,a);return h.start(r),h}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ce(K.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function wg(n,e){if(ci("AsyncQueue",`${e}: ${n}`),Fa(n))return new ce(K.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{static emptySet(e){return new ya(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||me.comparator(t.key,r.key):(t,r)=>me.comparator(t.key,r.key),this.keyedMap=Kl(),this.sortedSet=new vt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ya)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,a=r.getNext().key;if(!s.isEqual(a))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new ya;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LE{constructor(){this.z_=new vt(me.comparator)}track(e){const t=e.doc.key,r=this.z_.get(t);r?e.type!==0&&r.type===3?this.z_=this.z_.insert(t,e):e.type===3&&r.type!==1?this.z_=this.z_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.z_=this.z_.remove(t):e.type===1&&r.type===2?this.z_=this.z_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):we():this.z_=this.z_.insert(t,e)}j_(){const e=[];return this.z_.inorderTraversal((t,r)=>{e.push(r)}),e}}class Aa{constructor(e,t,r,s,a,u,h,f,m){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=a,this.fromCache=u,this.syncStateChanged=h,this.excludesMetadataChanges=f,this.hasCachedResults=m}static fromInitialDocuments(e,t,r,s,a){const u=[];return t.forEach(h=>{u.push({type:0,doc:h})}),new Aa(e,t,ya.emptySet(t),u,r,s,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Sd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TO{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class IO{constructor(){this.queries=ME(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,r){const s=Se(t),a=s.queries;s.queries=ME(),a.forEach((u,h)=>{for(const f of h.J_)f.onError(r)})})(this,new ce(K.ABORTED,"Firestore shutting down"))}}function ME(){return new so(n=>MI(n),Sd)}async function SO(n,e){const t=Se(n);let r=3;const s=e.query;let a=t.queries.get(s);a?!a.Y_()&&e.Z_()&&(r=2):(a=new TO,r=e.Z_()?0:1);try{switch(r){case 0:a.H_=await t.onListen(s,!0);break;case 1:a.H_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(u){const h=wg(u,`Initialization of query '${ua(e.query)}' failed`);return void e.onError(h)}t.queries.set(s,a),a.J_.push(e),e.ea(t.onlineState),a.H_&&e.ta(a.H_)&&Tg(t)}async function CO(n,e){const t=Se(n),r=e.query;let s=3;const a=t.queries.get(r);if(a){const u=a.J_.indexOf(e);u>=0&&(a.J_.splice(u,1),a.J_.length===0?s=e.Z_()?0:1:!a.Y_()&&e.Z_()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function RO(n,e){const t=Se(n);let r=!1;for(const s of e){const a=s.query,u=t.queries.get(a);if(u){for(const h of u.J_)h.ta(s)&&(r=!0);u.H_=s}}r&&Tg(t)}function AO(n,e,t){const r=Se(n),s=r.queries.get(e);if(s)for(const a of s.J_)a.onError(t);r.queries.delete(e)}function Tg(n){n.X_.forEach(e=>{e.next()})}var mm,VE;(VE=mm||(mm={})).na="default",VE.Cache="cache";class kO{constructor(e,t,r){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=r||{}}ta(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Aa(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;const r=t!=="Offline";return(!this.options.ua||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=Aa.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==mm.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gS{constructor(e){this.key=e}}class _S{constructor(e){this.key=e}}class PO{constructor(e,t){this.query=e,this.Ea=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=Ne(),this.mutatedKeys=Ne(),this.Va=VI(e),this.ma=new ya(this.Va)}get fa(){return this.Ea}ga(e,t){const r=t?t.pa:new LE,s=t?t.ma:this.ma;let a=t?t.mutatedKeys:this.mutatedKeys,u=s,h=!1;const f=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,m=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((y,E)=>{const T=s.get(y),R=Cd(this.query,E)?E:null,x=!!T&&this.mutatedKeys.has(T.key),$=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let L=!1;T&&R?T.data.isEqual(R.data)?x!==$&&(r.track({type:3,doc:R}),L=!0):this.ya(T,R)||(r.track({type:2,doc:R}),L=!0,(f&&this.Va(R,f)>0||m&&this.Va(R,m)<0)&&(h=!0)):!T&&R?(r.track({type:0,doc:R}),L=!0):T&&!R&&(r.track({type:1,doc:T}),L=!0,(f||m)&&(h=!0)),L&&(R?(u=u.add(R),a=$?a.add(y):a.delete(y)):(u=u.delete(y),a=a.delete(y)))}),this.query.limit!==null)for(;u.size>this.query.limit;){const y=this.query.limitType==="F"?u.last():u.first();u=u.delete(y.key),a=a.delete(y.key),r.track({type:1,doc:y})}return{ma:u,pa:r,ss:h,mutatedKeys:a}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const a=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const u=e.pa.j_();u.sort((y,E)=>function(R,x){const $=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return we()}};return $(R)-$(x)}(y.type,E.type)||this.Va(y.doc,E.doc)),this.wa(r),s=s!=null&&s;const h=t&&!s?this.Sa():[],f=this.Ra.size===0&&this.current&&!s?1:0,m=f!==this.Aa;return this.Aa=f,u.length!==0||m?{snapshot:new Aa(this.query,e.ma,a,u,e.mutatedKeys,f===0,m,!1,!!r&&r.resumeToken.approximateByteSize()>0),ba:h}:{ba:h}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new LE,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.Ea.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.Ea=this.Ea.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ea=this.Ea.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=Ne(),this.ma.forEach(r=>{this.Da(r.key)&&(this.Ra=this.Ra.add(r.key))});const t=[];return e.forEach(r=>{this.Ra.has(r)||t.push(new _S(r))}),this.Ra.forEach(r=>{e.has(r)||t.push(new gS(r))}),t}va(e){this.Ea=e.Es,this.Ra=Ne();const t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return Aa.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class NO{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class xO{constructor(e){this.key=e,this.Fa=!1}}class bO{constructor(e,t,r,s,a,u){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=a,this.maxConcurrentLimboResolutions=u,this.Ma={},this.xa=new so(h=>MI(h),Sd),this.Oa=new Map,this.Na=new Set,this.Ba=new vt(me.comparator),this.La=new Map,this.ka=new fg,this.qa={},this.Qa=new Map,this.Ka=Ra.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function DO(n,e,t=!0){const r=IS(n);let s;const a=r.xa.get(e);return a?(r.sharedClientState.addLocalQueryTarget(a.targetId),s=a.view.Ca()):s=await yS(r,e,t,!0),s}async function OO(n,e){const t=IS(n);await yS(t,e,!0,!1)}async function yS(n,e,t,r){const s=await ZD(n.localStore,Pr(e)),a=s.targetId,u=n.sharedClientState.addLocalQueryTarget(a,t);let h;return r&&(h=await LO(n,e,a,u==="current",s.resumeToken)),n.isPrimaryClient&&t&&cS(n.remoteStore,s),h}async function LO(n,e,t,r,s){n.Ua=(E,T,R)=>async function($,L,q,ee){let X=L.view.ga(q);X.ss&&(X=await xE($.localStore,L.query,!1).then(({documents:b})=>L.view.ga(b,X)));const de=ee&&ee.targetChanges.get(L.targetId),Ce=ee&&ee.targetMismatches.get(L.targetId)!=null,Ie=L.view.applyChanges(X,$.isPrimaryClient,de,Ce);return UE($,L.targetId,Ie.ba),Ie.snapshot}(n,E,T,R);const a=await xE(n.localStore,e,!0),u=new PO(e,a.Es),h=u.ga(a.documents),f=Du.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),m=u.applyChanges(h,n.isPrimaryClient,f);UE(n,t,m.ba);const y=new NO(e,t,u);return n.xa.set(e,y),n.Oa.has(t)?n.Oa.get(t).push(e):n.Oa.set(t,[e]),m.snapshot}async function MO(n,e,t){const r=Se(n),s=r.xa.get(e),a=r.Oa.get(s.targetId);if(a.length>1)return r.Oa.set(s.targetId,a.filter(u=>!Sd(u,e))),void r.xa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await pm(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&gg(r.remoteStore,s.targetId),gm(r,s.targetId)}).catch(Va)):(gm(r,s.targetId),await pm(r.localStore,s.targetId,!0))}async function VO(n,e){const t=Se(n),r=t.xa.get(e),s=t.Oa.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),gg(t.remoteStore,r.targetId))}async function FO(n,e,t){const r=qO(n);try{const s=await function(u,h){const f=Se(u),m=Ct.now(),y=h.reduce((R,x)=>R.add(x.key),Ne());let E,T;return f.persistence.runTransaction("Locally write mutations","readwrite",R=>{let x=hi(),$=Ne();return f.hs.getEntries(R,y).next(L=>{x=L,x.forEach((q,ee)=>{ee.isValidDocument()||($=$.add(q))})}).next(()=>f.localDocuments.getOverlayedDocuments(R,x)).next(L=>{E=L;const q=[];for(const ee of h){const X=eD(ee,E.get(ee.key).overlayedDocument);X!=null&&q.push(new oo(ee.key,X,kI(X.value.mapValue),oi.exists(!0)))}return f.mutationQueue.addMutationBatch(R,m,q,h)}).next(L=>{T=L;const q=L.applyToLocalDocumentSet(E,$);return f.documentOverlayCache.saveOverlays(R,L.batchId,q)})}).then(()=>({batchId:T.batchId,changes:UI(E)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(u,h,f){let m=u.qa[u.currentUser.toKey()];m||(m=new vt(be)),m=m.insert(h,f),u.qa[u.currentUser.toKey()]=m}(r,s.batchId,t),await Lu(r,s.changes),await xd(r.remoteStore)}catch(s){const a=wg(s,"Failed to persist write");t.reject(a)}}async function vS(n,e){const t=Se(n);try{const r=await YD(t.localStore,e);e.targetChanges.forEach((s,a)=>{const u=t.La.get(a);u&&(We(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?u.Fa=!0:s.modifiedDocuments.size>0?We(u.Fa):s.removedDocuments.size>0&&(We(u.Fa),u.Fa=!1))}),await Lu(t,r,e)}catch(r){await Va(r)}}function FE(n,e,t){const r=Se(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.xa.forEach((a,u)=>{const h=u.view.ea(e);h.snapshot&&s.push(h.snapshot)}),function(u,h){const f=Se(u);f.onlineState=h;let m=!1;f.queries.forEach((y,E)=>{for(const T of E.J_)T.ea(h)&&(m=!0)}),m&&Tg(f)}(r.eventManager,e),s.length&&r.Ma.R_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function UO(n,e,t){const r=Se(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.La.get(e),a=s&&s.key;if(a){let u=new vt(me.comparator);u=u.insert(a,Xt.newNoDocument(a,Te.min()));const h=Ne().add(a),f=new kd(Te.min(),new Map,new vt(be),u,h);await vS(r,f),r.Ba=r.Ba.remove(a),r.La.delete(e),Ig(r)}else await pm(r.localStore,e,!1).then(()=>gm(r,e,t)).catch(Va)}async function jO(n,e){const t=Se(n),r=e.batch.batchId;try{const s=await QD(t.localStore,e);wS(t,r,null),ES(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Lu(t,s)}catch(s){await Va(s)}}async function zO(n,e,t){const r=Se(n);try{const s=await function(u,h){const f=Se(u);return f.persistence.runTransaction("Reject batch","readwrite-primary",m=>{let y;return f.mutationQueue.lookupMutationBatch(m,h).next(E=>(We(E!==null),y=E.keys(),f.mutationQueue.removeMutationBatch(m,E))).next(()=>f.mutationQueue.performConsistencyCheck(m)).next(()=>f.documentOverlayCache.removeOverlaysForBatchId(m,y,h)).next(()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(m,y)).next(()=>f.localDocuments.getDocuments(m,y))})}(r.localStore,e);wS(r,e,t),ES(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Lu(r,s)}catch(s){await Va(s)}}function ES(n,e){(n.Qa.get(e)||[]).forEach(t=>{t.resolve()}),n.Qa.delete(e)}function wS(n,e,t){const r=Se(n);let s=r.qa[r.currentUser.toKey()];if(s){const a=s.get(e);a&&(t?a.reject(t):a.resolve(),s=s.remove(e)),r.qa[r.currentUser.toKey()]=s}}function gm(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Oa.get(e))n.xa.delete(r),t&&n.Ma.Wa(r,t);n.Oa.delete(e),n.isPrimaryClient&&n.ka.yr(e).forEach(r=>{n.ka.containsKey(r)||TS(n,r)})}function TS(n,e){n.Na.delete(e.path.canonicalString());const t=n.Ba.get(e);t!==null&&(gg(n.remoteStore,t),n.Ba=n.Ba.remove(e),n.La.delete(t),Ig(n))}function UE(n,e,t){for(const r of t)r instanceof gS?(n.ka.addReference(r.key,e),BO(n,r)):r instanceof _S?(ae("SyncEngine","Document no longer in limbo: "+r.key),n.ka.removeReference(r.key,e),n.ka.containsKey(r.key)||TS(n,r.key)):we()}function BO(n,e){const t=e.key,r=t.path.canonicalString();n.Ba.get(t)||n.Na.has(r)||(ae("SyncEngine","New document in limbo: "+t),n.Na.add(r),Ig(n))}function Ig(n){for(;n.Na.size>0&&n.Ba.size<n.maxConcurrentLimboResolutions;){const e=n.Na.values().next().value;n.Na.delete(e);const t=new me(nt.fromString(e)),r=n.Ka.next();n.La.set(r,new xO(t)),n.Ba=n.Ba.insert(t,r),cS(n.remoteStore,new Gi(Pr(lg(t.path)),r,"TargetPurposeLimboResolution",wd.oe))}}async function Lu(n,e,t){const r=Se(n),s=[],a=[],u=[];r.xa.isEmpty()||(r.xa.forEach((h,f)=>{u.push(r.Ua(f,e,t).then(m=>{var y;if((m||t)&&r.isPrimaryClient){const E=m?!m.fromCache:(y=t==null?void 0:t.targetChanges.get(f.targetId))===null||y===void 0?void 0:y.current;r.sharedClientState.updateQueryState(f.targetId,E?"current":"not-current")}if(m){s.push(m);const E=mg.zi(f.targetId,m);a.push(E)}}))}),await Promise.all(u),r.Ma.R_(s),await async function(f,m){const y=Se(f);try{await y.persistence.runTransaction("notifyLocalViewChanges","readwrite",E=>H.forEach(m,T=>H.forEach(T.Wi,R=>y.persistence.referenceDelegate.addReference(E,T.targetId,R)).next(()=>H.forEach(T.Gi,R=>y.persistence.referenceDelegate.removeReference(E,T.targetId,R)))))}catch(E){if(!Fa(E))throw E;ae("LocalStore","Failed to update sequence numbers: "+E)}for(const E of m){const T=E.targetId;if(!E.fromCache){const R=y.us.get(T),x=R.snapshotVersion,$=R.withLastLimboFreeSnapshotVersion(x);y.us=y.us.insert(T,$)}}}(r.localStore,a))}async function $O(n,e){const t=Se(n);if(!t.currentUser.isEqual(e)){ae("SyncEngine","User change. New user:",e.toKey());const r=await oS(t.localStore,e);t.currentUser=e,function(a,u){a.Qa.forEach(h=>{h.forEach(f=>{f.reject(new ce(K.CANCELLED,u))})}),a.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Lu(t,r.Ts)}}function WO(n,e){const t=Se(n),r=t.La.get(e);if(r&&r.Fa)return Ne().add(r.key);{let s=Ne();const a=t.Oa.get(e);if(!a)return s;for(const u of a){const h=t.xa.get(u);s=s.unionWith(h.view.fa)}return s}}function IS(n){const e=Se(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=vS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=WO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=UO.bind(null,e),e.Ma.R_=RO.bind(null,e.eventManager),e.Ma.Wa=AO.bind(null,e.eventManager),e}function qO(n){const e=Se(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=jO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=zO.bind(null,e),e}class Qh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Pd(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return KD(this.persistence,new HD,e.initialUser,this.serializer)}ja(e){return new sS(pg.ei,this.serializer)}za(e){return new tO}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Qh.provider={build:()=>new Qh};class HO extends Qh{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){We(this.persistence.referenceDelegate instanceof Gh);const r=this.persistence.referenceDelegate.garbageCollector;return new xD(r,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?gn.withCacheSize(this.cacheSizeBytes):gn.DEFAULT;return new sS(r=>Gh.ei(r,t),this.serializer)}}class _m{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>FE(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=$O.bind(null,this.syncEngine),await wO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new IO}()}createDatastore(e){const t=Pd(e.databaseInfo.databaseId),r=function(a){return new sO(a)}(e.databaseInfo);return function(a,u,h,f){return new lO(a,u,h,f)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,a,u,h){return new cO(r,s,a,u,h)}(this.localStore,this.datastore,e.asyncQueue,t=>FE(this.syncEngine,t,0),function(){return DE.p()?new DE:new nO}())}createSyncEngine(e,t){return function(s,a,u,h,f,m,y){const E=new bO(s,a,u,h,f,m);return y&&(E.$a=!0),E}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const a=Se(s);ae("RemoteStore","RemoteStore shutting down."),a.k_.add(5),await Ou(a),a.Q_.shutdown(),a.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}_m.provider={build:()=>new _m};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GO{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):ci("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KO{constructor(e,t,r,s,a){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Yt.UNAUTHENTICATED,this.clientId=CI.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(r,async u=>{ae("FirestoreClient","Received user=",u.uid),await this.authCredentialListener(u),this.user=u}),this.appCheckCredentials.start(r,u=>(ae("FirestoreClient","Received new app check token=",u),this.appCheckCredentialListener(u,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new qs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=wg(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Lp(n,e){n.asyncQueue.verifyOperationInProgress(),ae("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await oS(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function jE(n,e){n.asyncQueue.verifyOperationInProgress();const t=await QO(n);ae("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>OE(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>OE(e.remoteStore,s)),n._onlineComponents=e}async function QO(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){ae("FirestoreClient","Using user provided OfflineComponentProvider");try{await Lp(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===K.FAILED_PRECONDITION||s.code===K.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Ta("Error using user provided cache. Falling back to memory cache: "+t),await Lp(n,new Qh)}}else ae("FirestoreClient","Using default OfflineComponentProvider"),await Lp(n,new HO(void 0));return n._offlineComponents}async function SS(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(ae("FirestoreClient","Using user provided OnlineComponentProvider"),await jE(n,n._uninitializedComponentsProvider._online)):(ae("FirestoreClient","Using default OnlineComponentProvider"),await jE(n,new _m))),n._onlineComponents}function YO(n){return SS(n).then(e=>e.syncEngine)}async function zE(n){const e=await SS(n),t=e.eventManager;return t.onListen=DO.bind(null,e.syncEngine),t.onUnlisten=MO.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=OO.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=VO.bind(null,e.syncEngine),t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CS(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BE=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RS(n,e,t){if(!t)throw new ce(K.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function XO(n,e,t,r){if(e===!0&&r===!0)throw new ce(K.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function $E(n){if(!me.isDocumentKey(n))throw new ce(K.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function WE(n){if(me.isDocumentKey(n))throw new ce(K.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function bd(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":we()}function iu(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ce(K.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=bd(n);throw new ce(K.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qE{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ce(K.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ce(K.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}XO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=CS((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new ce(K.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new ce(K.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new ce(K.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Dd{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new qE({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ce(K.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ce(K.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new qE(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new ab;switch(r.type){case"firstParty":return new hb(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ce(K.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=BE.get(t);r&&(ae("ComponentProvider","Removing Datastore"),BE.delete(t),r.terminate())}(this),Promise.resolve()}}function JO(n,e,t,r={}){var s;const a=(n=iu(n,Dd))._getSettings(),u=`${e}:${t}`;if(a.host!=="firestore.googleapis.com"&&a.host!==u&&Ta("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},a),{host:u,ssl:!1})),r.mockUserToken){let h,f;if(typeof r.mockUserToken=="string")h=r.mockUserToken,f=Yt.MOCK_USER;else{h=rT(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new ce(K.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new Yt(m)}n._authCredentials=new lb(new SI(h,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new lo(this.firestore,e,this._query)}}class kn{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ji(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new kn(this.firestore,e,this._key)}}class Ji extends lo{constructor(e,t,r){super(e,t,lg(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new kn(this.firestore,null,new me(e))}withConverter(e){return new Ji(this.firestore,e,this._path)}}function Yh(n,e,...t){if(n=yt(n),RS("collection","path",e),n instanceof Dd){const r=nt.fromString(e,...t);return WE(r),new Ji(n,null,r)}{if(!(n instanceof kn||n instanceof Ji))throw new ce(K.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(nt.fromString(e,...t));return WE(r),new Ji(n.firestore,null,r)}}function ZO(n,e,...t){if(n=yt(n),arguments.length===1&&(e=CI.newId()),RS("doc","path",e),n instanceof Dd){const r=nt.fromString(e,...t);return $E(r),new kn(n,null,new me(r))}{if(!(n instanceof kn||n instanceof Ji))throw new ce(K.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(nt.fromString(e,...t));return $E(r),new kn(n.firestore,n instanceof Ji?n.converter:null,new me(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HE{constructor(e=Promise.resolve()){this.Iu=[],this.du=!1,this.Eu=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new lS(this,"async_queue_retry"),this.fu=()=>{const r=Op();r&&ae("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=e;const t=Op();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.du}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.du){this.du=!0,this.Vu=e||!1;const t=Op();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.du)return new Promise(()=>{});const t=new qs;return this.yu(()=>this.du&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!Fa(e))throw e;ae("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const t=this.gu.then(()=>(this.Ru=!0,e().catch(r=>{this.Au=r,this.Ru=!1;const s=function(u){let h=u.message||"";return u.stack&&(h=u.stack.includes(u.message)?u.stack:u.message+`
`+u.stack),h}(r);throw ci("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ru=!1,r))));return this.gu=t,t}enqueueAfterDelay(e,t,r){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const s=Eg.createAndSchedule(this,e,t,r,a=>this.Su(a));return this.Eu.push(s),s}pu(){this.Au&&we()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.Eu)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.Eu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Eu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const t=this.Eu.indexOf(e);this.Eu.splice(t,1)}}function GE(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const a of r)if(a in s&&typeof s[a]=="function")return!0;return!1}(n,["next","error","complete"])}class Xh extends Dd{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new HE,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new HE(e),this._firestoreClient=void 0,await e}}}function eL(n,e){const t=typeof n=="object"?n:md(),r=typeof n=="string"?n:"(default)",s=as(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const a=eT("firestore");a&&JO(s,...a)}return s}function AS(n){if(n._terminated)throw new ce(K.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||tL(n),n._firestoreClient}function tL(n){var e,t,r;const s=n._freezeSettings(),a=function(h,f,m,y){return new Rb(h,f,m,y.host,y.ssl,y.experimentalForceLongPolling,y.experimentalAutoDetectLongPolling,CS(y.experimentalLongPollingOptions),y.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new KO(n._authCredentials,n._appCheckCredentials,n._queue,a,n._componentsProvider&&function(h){const f=h==null?void 0:h._online.build();return{_offline:h==null?void 0:h._offline.build(f),_online:f}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ka(Bt.fromBase64String(e))}catch(t){throw new ce(K.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ka(Bt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ce(K.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new zt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kS{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ce(K.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ce(K.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return be(this._lat,e._lat)||be(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let a=0;a<r.length;++a)if(r[a]!==s[a])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nL=/^__.*__$/;class rL{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new oo(e,this.data,this.fieldMask,t,this.fieldTransforms):new bu(e,this.data,t,this.fieldTransforms)}}function PS(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw we()}}class Ag{constructor(e,t,r,s,a,u){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,a===void 0&&this.Fu(),this.fieldTransforms=a||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new Ag(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.xu({path:r,Nu:!1});return s.Bu(e),s}Lu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.xu({path:r,Nu:!1});return s.Fu(),s}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return Jh(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Bu(this.path.get(e))}Bu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(PS(this.Mu)&&nL.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class iL{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Pd(e)}$u(e,t,r,s=!1){return new Ag({Mu:e,methodName:t,Ku:r,path:zt.emptyPath(),Nu:!1,Qu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function NS(n){const e=n._freezeSettings(),t=Pd(n._databaseId);return new iL(n._databaseId,!!e.ignoreUndefinedProperties,t)}function sL(n,e,t,r,s,a={}){const u=n.$u(a.merge||a.mergeFields?2:0,e,t,s);DS("Data must be an object, but it was:",u,r);const h=xS(r,u);let f,m;if(a.merge)f=new or(u.fieldMask),m=u.fieldTransforms;else if(a.mergeFields){const y=[];for(const E of a.mergeFields){const T=aL(e,E,t);if(!u.contains(T))throw new ce(K.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);uL(y,T)||y.push(T)}f=new or(y),m=u.fieldTransforms.filter(E=>f.covers(E.field))}else f=null,m=u.fieldTransforms;return new rL(new jn(h),f,m)}function oL(n,e,t,r=!1){return kg(t,n.$u(r?4:3,e))}function kg(n,e){if(bS(n=yt(n)))return DS("Unsupported field value:",e,n),xS(n,e);if(n instanceof kS)return function(r,s){if(!PS(s.Mu))throw s.qu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.qu(`${r._methodName}() is not currently supported inside arrays`);const a=r._toFieldTransform(s);a&&s.fieldTransforms.push(a)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(r,s){const a=[];let u=0;for(const h of r){let f=kg(h,s.ku(u));f==null&&(f={nullValue:"NULL_VALUE"}),a.push(f),u++}return{arrayValue:{values:a}}}(n,e)}return function(r,s){if((r=yt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Kb(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const a=Ct.fromDate(r);return{timestampValue:Hh(s.serializer,a)}}if(r instanceof Ct){const a=new Ct(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Hh(s.serializer,a)}}if(r instanceof Cg)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ka)return{bytesValue:JI(s.serializer,r._byteString)};if(r instanceof kn){const a=s.databaseId,u=r.firestore._databaseId;if(!u.isEqual(a))throw s.qu(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:dg(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Rg)return function(u,h){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:u.toArray().map(f=>{if(typeof f!="number")throw h.qu("VectorValues must only contain numeric values.");return ug(h.serializer,f)})}}}}}}(r,s);throw s.qu(`Unsupported field value: ${bd(r)}`)}(n,e)}function xS(n,e){const t={};return RI(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):io(n,(r,s)=>{const a=kg(s,e.Ou(r));a!=null&&(t[r]=a)}),{mapValue:{fields:t}}}function bS(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ct||n instanceof Cg||n instanceof ka||n instanceof kn||n instanceof kS||n instanceof Rg)}function DS(n,e,t){if(!bS(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=bd(t);throw r==="an object"?e.qu(n+" a custom object"):e.qu(n+" "+r)}}function aL(n,e,t){if((e=yt(e))instanceof Sg)return e._internalPath;if(typeof e=="string")return OS(n,e);throw Jh("Field path arguments must be of type string or ",n,!1,void 0,t)}const lL=new RegExp("[~\\*/\\[\\]]");function OS(n,e,t){if(e.search(lL)>=0)throw Jh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Sg(...e.split("."))._internalPath}catch{throw Jh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Jh(n,e,t,r,s){const a=r&&!r.isEmpty(),u=s!==void 0;let h=`Function ${e}() called with invalid data`;t&&(h+=" (via `toFirestore()`)"),h+=". ";let f="";return(a||u)&&(f+=" (found",a&&(f+=` in field ${r}`),u&&(f+=` in document ${s}`),f+=")"),new ce(K.INVALID_ARGUMENT,h+n+f)}function uL(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LS{constructor(e,t,r,s,a){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new kn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new cL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Pg("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class cL extends LS{data(){return super.data()}}function Pg(n,e){return typeof e=="string"?OS(n,e):e instanceof Sg?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hL(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new ce(K.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ng{}class MS extends Ng{}function dL(n,e,...t){let r=[];e instanceof Ng&&r.push(e),r=r.concat(t),function(a){const u=a.filter(f=>f instanceof bg).length,h=a.filter(f=>f instanceof xg).length;if(u>1||u>0&&h>0)throw new ce(K.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class xg extends MS{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new xg(e,t,r)}_apply(e){const t=this._parse(e);return VS(e._query,t),new lo(e.firestore,e.converter,lm(e._query,t))}_parse(e){const t=NS(e.firestore);return function(a,u,h,f,m,y,E){let T;if(m.isKeyField()){if(y==="array-contains"||y==="array-contains-any")throw new ce(K.INVALID_ARGUMENT,`Invalid Query. You can't perform '${y}' queries on documentId().`);if(y==="in"||y==="not-in"){QE(E,y);const R=[];for(const x of E)R.push(KE(f,a,x));T={arrayValue:{values:R}}}else T=KE(f,a,E)}else y!=="in"&&y!=="not-in"&&y!=="array-contains-any"||QE(E,y),T=oL(h,u,E,y==="in"||y==="not-in");return _t.create(m,y,T)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class bg extends Ng{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new bg(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:hr.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,a){let u=s;const h=a.getFlattenedFilters();for(const f of h)VS(u,f),u=lm(u,f)}(e._query,t),new lo(e.firestore,e.converter,lm(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Dg extends MS{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Dg(e,t)}_apply(e){const t=function(s,a,u){if(s.startAt!==null)throw new ce(K.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new ce(K.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new vu(a,u)}(e._query,this._field,this._direction);return new lo(e.firestore,e.converter,function(s,a){const u=s.explicitOrderBy.concat([a]);return new Ua(s.path,s.collectionGroup,u,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,t))}}function fL(n,e="asc"){const t=e,r=Pg("orderBy",n);return Dg._create(r,t)}function KE(n,e,t){if(typeof(t=yt(t))=="string"){if(t==="")throw new ce(K.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!LI(e)&&t.indexOf("/")!==-1)throw new ce(K.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(nt.fromString(t));if(!me.isDocumentKey(r))throw new ce(K.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return fE(n,new me(r))}if(t instanceof kn)return fE(n,t._key);throw new ce(K.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${bd(t)}.`)}function QE(n,e){if(!Array.isArray(n)||n.length===0)throw new ce(K.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function VS(n,e){const t=function(s,a){for(const u of s)for(const h of u.getFlattenedFilters())if(a.indexOf(h.op)>=0)return h.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new ce(K.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ce(K.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class pL{convertValue(e,t="none"){switch(is(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ft(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(rs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw we()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return io(e,(s,a)=>{r[s]=this.convertValue(a,t)}),r}convertVectorValue(e){var t,r,s;const a=(s=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(u=>ft(u.doubleValue));return new Rg(a)}convertGeoPoint(e){return new Cg(ft(e.latitude),ft(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Id(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(gu(e));default:return null}}convertTimestamp(e){const t=ns(e);return new Ct(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=nt.fromString(e);We(iS(r));const s=new _u(r.get(1),r.get(3)),a=new me(r.popFirst(5));return s.isEqual(t)||ci(`Document ${a} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mL(n,e,t){let r;return r=n?n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class FS extends LS{constructor(e,t,r,s,a,u){super(e,t,r,s,u),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Rh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Pg("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Rh extends FS{data(e={}){return super.data(e)}}class gL{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Yl(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Rh(this._firestore,this._userDataWriter,r.key,r,new Yl(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ce(K.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,a){if(s._snapshot.oldDocs.isEmpty()){let u=0;return s._snapshot.docChanges.map(h=>{const f=new Rh(s._firestore,s._userDataWriter,h.doc.key,h.doc,new Yl(s._snapshot.mutatedKeys.has(h.doc.key),s._snapshot.fromCache),s.query.converter);return h.doc,{type:"added",doc:f,oldIndex:-1,newIndex:u++}})}{let u=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(h=>a||h.type!==3).map(h=>{const f=new Rh(s._firestore,s._userDataWriter,h.doc.key,h.doc,new Yl(s._snapshot.mutatedKeys.has(h.doc.key),s._snapshot.fromCache),s.query.converter);let m=-1,y=-1;return h.type!==0&&(m=u.indexOf(h.doc.key),u=u.delete(h.doc.key)),h.type!==1&&(u=u.add(h.doc),y=u.indexOf(h.doc.key)),{type:_L(h.type),doc:f,oldIndex:m,newIndex:y}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function _L(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return we()}}class US extends pL{constructor(e){super(),this.firestore=e}convertBytes(e){return new ka(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new kn(this.firestore,null,t)}}function jS(n,e){const t=iu(n.firestore,Xh),r=ZO(n),s=mL(n.converter,e);return yL(t,[sL(NS(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,oi.exists(!1))]).then(()=>r)}function zS(n,...e){var t,r,s;n=yt(n);let a={includeMetadataChanges:!1,source:"default"},u=0;typeof e[u]!="object"||GE(e[u])||(a=e[u],u++);const h={includeMetadataChanges:a.includeMetadataChanges,source:a.source};if(GE(e[u])){const E=e[u];e[u]=(t=E.next)===null||t===void 0?void 0:t.bind(E),e[u+1]=(r=E.error)===null||r===void 0?void 0:r.bind(E),e[u+2]=(s=E.complete)===null||s===void 0?void 0:s.bind(E)}let f,m,y;if(n instanceof kn)m=iu(n.firestore,Xh),y=lg(n._key.path),f={next:E=>{e[u]&&e[u](vL(m,n,E))},error:e[u+1],complete:e[u+2]};else{const E=iu(n,lo);m=iu(E.firestore,Xh),y=E._query;const T=new US(m);f={next:R=>{e[u]&&e[u](new gL(m,T,E,R))},error:e[u+1],complete:e[u+2]},hL(n._query)}return function(T,R,x,$){const L=new GO($),q=new kO(R,L,x);return T.asyncQueue.enqueueAndForget(async()=>SO(await zE(T),q)),()=>{L.eu(),T.asyncQueue.enqueueAndForget(async()=>CO(await zE(T),q))}}(AS(m),y,h,f)}function yL(n,e){return function(r,s){const a=new qs;return r.asyncQueue.enqueueAndForget(async()=>FO(await YO(r),s,a)),a.promise}(AS(n),e)}function vL(n,e,t){const r=t.docs.get(e._key),s=new US(n);return new FS(n,s,e._key,r,new Yl(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(s){Ma=s})(no),ur(new Bn("firestore",(r,{instanceIdentifier:s,options:a})=>{const u=r.getProvider("app").getImmediate(),h=new Xh(new ub(r.getProvider("auth-internal")),new fb(r.getProvider("app-check-internal")),function(m,y){if(!Object.prototype.hasOwnProperty.apply(m.options,["projectId"]))throw new ce(K.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new _u(m.options.projectId,y)}(u,s),u);return a=Object.assign({useFetchStreams:t},a),h._setSettings(a),h},"PUBLIC").setMultipleInstances(!0)),yn(aE,"4.7.6",e),yn(aE,"4.7.6","esm2017")})();var YE={};const XE="@firebase/database",JE="1.0.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let BS="";function EL(n){BS=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wL{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),jt(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:hu(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TL{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return mi(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $S=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new wL(e)}}catch{}return new TL},$s=$S("localStorage"),IL=$S("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const va=new Au("@firebase/database"),SL=function(){let n=1;return function(){return n++}}(),WS=function(n){const e=mk(n),t=new ck;t.update(e);const r=t.digest();return Um.encodeByteArray(r)},Mu=function(...n){let e="";for(let t=0;t<n.length;t++){const r=n[t];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Mu.apply(null,r):typeof r=="object"?e+=jt(r):e+=r,e+=" "}return e};let su=null,ZE=!0;const CL=function(n,e){ie(!0,"Can't turn on custom loggers persistently."),va.logLevel=Pe.VERBOSE,su=va.log.bind(va)},Jt=function(...n){if(ZE===!0&&(ZE=!1,su===null&&IL.get("logging_enabled")===!0&&CL()),su){const e=Mu.apply(null,n);su(e)}},Vu=function(n){return function(...e){Jt(n,...e)}},ym=function(...n){const e="FIREBASE INTERNAL ERROR: "+Mu(...n);va.error(e)},di=function(...n){const e=`FIREBASE FATAL ERROR: ${Mu(...n)}`;throw va.error(e),new Error(e)},Pn=function(...n){const e="FIREBASE WARNING: "+Mu(...n);va.warn(e)},RL=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Pn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},qS=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},AL=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Pa="[MIN_NAME]",Xs="[MAX_NAME]",za=function(n,e){if(n===e)return 0;if(n===Pa||e===Xs)return-1;if(e===Pa||n===Xs)return 1;{const t=ew(n),r=ew(e);return t!==null?r!==null?t-r===0?n.length-e.length:t-r:-1:r!==null?1:n<e?-1:1}},kL=function(n,e){return n===e?0:n<e?-1:1},zl=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+jt(e))},Og=function(n){if(typeof n!="object"||n===null)return jt(n);const e=[];for(const r in n)e.push(r);e.sort();let t="{";for(let r=0;r<e.length;r++)r!==0&&(t+=","),t+=jt(e[r]),t+=":",t+=Og(n[e[r]]);return t+="}",t},HS=function(n,e){const t=n.length;if(t<=e)return[n];const r=[];for(let s=0;s<t;s+=e)s+e>t?r.push(n.substring(s,t)):r.push(n.substring(s,s+e));return r};function $n(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const GS=function(n){ie(!qS(n),"Invalid JSON number");const e=11,t=52,r=(1<<e-1)-1;let s,a,u,h,f;n===0?(a=0,u=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-r)?(h=Math.min(Math.floor(Math.log(n)/Math.LN2),r),a=h+r,u=Math.round(n*Math.pow(2,t-h)-Math.pow(2,t))):(a=0,u=Math.round(n/Math.pow(2,1-r-t))));const m=[];for(f=t;f;f-=1)m.push(u%2?1:0),u=Math.floor(u/2);for(f=e;f;f-=1)m.push(a%2?1:0),a=Math.floor(a/2);m.push(s?1:0),m.reverse();const y=m.join("");let E="";for(f=0;f<64;f+=8){let T=parseInt(y.substr(f,8),2).toString(16);T.length===1&&(T="0"+T),E=E+T}return E.toLowerCase()},PL=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},NL=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},xL=new RegExp("^-?(0*)\\d{1,10}$"),bL=-2147483648,DL=2147483647,ew=function(n){if(xL.test(n)){const e=Number(n);if(e>=bL&&e<=DL)return e}return null},Fu=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Pn("Exception was thrown by user callback.",t),e},Math.floor(0))}},OL=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ou=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LL{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Pn(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ML{constructor(e,t,r){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Jt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Pn(e)}}class Ah{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ah.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lg="5",KS="v",QS="s",YS="r",XS="f",JS=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,ZS="ls",eC="p",vm="ac",tC="websocket",nC="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{constructor(e,t,r,s,a=!1,u="",h=!1,f=!1){this.secure=t,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=a,this.persistenceKey=u,this.includeNamespaceInQueryParams=h,this.isUsingEmulator=f,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=$s.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&$s.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function VL(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function iC(n,e,t){ie(typeof e=="string","typeof type must == string"),ie(typeof t=="object","typeof params must == object");let r;if(e===tC)r=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===nC)r=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);VL(n)&&(t.ns=n.namespace);const s=[];return $n(t,(a,u)=>{s.push(a+"="+u)}),r+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FL{constructor(){this.counters_={}}incrementCounter(e,t=1){mi(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return GA(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mp={},Vp={};function Mg(n){const e=n.toString();return Mp[e]||(Mp[e]=new FL),Mp[e]}function UL(n,e){const t=n.toString();return Vp[t]||(Vp[t]=e()),Vp[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jL{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&Fu(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tw="start",zL="close",BL="pLPCommand",$L="pRTLPCB",sC="id",oC="pw",aC="ser",WL="cb",qL="seg",HL="ts",GL="d",KL="dframe",lC=1870,uC=30,QL=lC-uC,YL=25e3,XL=3e4;class fa{constructor(e,t,r,s,a,u,h){this.connId=e,this.repoInfo=t,this.applicationId=r,this.appCheckToken=s,this.authToken=a,this.transportSessionId=u,this.lastSessionId=h,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Vu(e),this.stats_=Mg(t),this.urlFn=f=>(this.appCheckToken&&(f[vm]=this.appCheckToken),iC(t,nC,f))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new jL(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(XL)),AL(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Vg((...a)=>{const[u,h,f,m,y]=a;if(this.incrementIncomingBytes_(a),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,u===tw)this.id=h,this.password=f;else if(u===zL)h?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(h,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+u)},(...a)=>{const[u,h]=a;this.incrementIncomingBytes_(a),this.myPacketOrderer.handleResponse(u,h)},()=>{this.onClosed_()},this.urlFn);const r={};r[tw]="t",r[aC]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[WL]=this.scriptTagHolder.uniqueCallbackIdentifier),r[KS]=Lg,this.transportSessionId&&(r[QS]=this.transportSessionId),this.lastSessionId&&(r[ZS]=this.lastSessionId),this.applicationId&&(r[eC]=this.applicationId),this.appCheckToken&&(r[vm]=this.appCheckToken),typeof location<"u"&&location.hostname&&JS.test(location.hostname)&&(r[YS]=XS);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){fa.forceAllow_=!0}static forceDisallow(){fa.forceDisallow_=!0}static isAvailable(){return fa.forceAllow_?!0:!fa.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!PL()&&!NL()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=jt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=Xw(t),s=HS(r,QL);for(let a=0;a<s.length;a++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[a]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const r={};r[KL]="t",r[sC]=e,r[oC]=t,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=jt(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Vg{constructor(e,t,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=SL(),window[BL+this.uniqueCallbackIdentifier]=e,window[$L+this.uniqueCallbackIdentifier]=t,this.myIFrame=Vg.createIFrame_();let a="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(a='<script>document.domain="'+document.domain+'";<\/script>');const u="<html><body>"+a+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(u),this.myIFrame.doc.close()}catch(h){Jt("frame writing exception"),h.stack&&Jt(h.stack),Jt(h)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Jt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[sC]=this.myID,e[oC]=this.myPW,e[aC]=this.currentSerial;let t=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+uC+r.length<=lC;){const u=this.pendingSegs.shift();r=r+"&"+qL+s+"="+u.seg+"&"+HL+s+"="+u.ts+"&"+GL+s+"="+u.d,s++}return t=t+r,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,r){this.pendingSegs.push({seg:e,ts:t,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const r=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(r,Math.floor(YL)),a=()=>{clearTimeout(s),r()};this.addTag(e,a)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),t())},r.onerror=()=>{Jt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JL=16384,ZL=45e3;let Zh=null;typeof MozWebSocket<"u"?Zh=MozWebSocket:typeof WebSocket<"u"&&(Zh=WebSocket);class sr{constructor(e,t,r,s,a,u,h){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=a,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Vu(this.connId),this.stats_=Mg(t),this.connURL=sr.connectionURL_(t,u,h,s,r),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,r,s,a){const u={};return u[KS]=Lg,typeof location<"u"&&location.hostname&&JS.test(location.hostname)&&(u[YS]=XS),t&&(u[QS]=t),r&&(u[ZS]=r),s&&(u[vm]=s),a&&(u[eC]=a),iC(e,tC,u)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,$s.set("previous_websocket_failure",!0);try{let r;nk(),this.mySock=new Zh(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){sr.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(t);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Zh!==null&&!sr.forceDisallow_}static previouslyFailed(){return $s.isInMemoryStorage||$s.get("previous_websocket_failure")===!0}markConnectionHealthy(){$s.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const r=hu(t);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(ie(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const r=this.extractFrameCount_(t);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const t=jt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=HS(t,JL);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(ZL))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}sr.responsesRequiredToBeHealthy=2;sr.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{static get ALL_TRANSPORTS(){return[fa,sr]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=sr&&sr.isAvailable();let r=t&&!sr.previouslyFailed();if(e.webSocketOnly&&(t||Pn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[sr];else{const s=this.transports_=[];for(const a of Tu.ALL_TRANSPORTS)a&&a.isAvailable()&&s.push(a);Tu.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Tu.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e2=6e4,t2=5e3,n2=10*1024,r2=100*1024,Fp="t",nw="d",i2="s",rw="r",s2="e",iw="o",sw="a",ow="n",aw="p",o2="h";class a2{constructor(e,t,r,s,a,u,h,f,m,y){this.id=e,this.repoInfo_=t,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=a,this.onMessage_=u,this.onReady_=h,this.onDisconnect_=f,this.onKill_=m,this.lastSessionId=y,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Vu("c:"+this.id+":"),this.transportManager_=new Tu(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=ou(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>r2?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>n2?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Fp in e){const t=e[Fp];t===sw?this.upgradeIfSecondaryHealthy_():t===rw?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===iw&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=zl("t",e),r=zl("d",e);if(t==="c")this.onSecondaryControl_(r);else if(t==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:aw,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:sw,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:ow,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=zl("t",e),r=zl("d",e);t==="c"?this.onControl_(r):t==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=zl(Fp,e);if(nw in e){const r=e[nw];if(t===o2){const s=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===ow){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===i2?this.onConnectionShutdown_(r):t===rw?this.onReset_(r):t===s2?ym("Server Error: "+r):t===iw?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ym("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Lg!==r&&Pn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,r),ou(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(e2))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ou(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(t2))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:aw,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&($s.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cC{put(e,t,r,s){}merge(e,t,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,r){}onDisconnectMerge(e,t,r){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hC{constructor(e){this.allowedEvents_=e,this.listeners_={},ie(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,t)}}on(e,t,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:r});const s=this.getInitialEvent(e);s&&t.apply(r,s)}off(e,t,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let a=0;a<s.length;a++)if(s[a].callback===t&&(!r||r===s[a].context)){s.splice(a,1);return}}validateEventType_(e){ie(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed extends hC{static getInstance(){return new ed}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!zm()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return ie(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lw=32,uw=768;class rt{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function Ge(){return new rt("")}function Ve(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function os(n){return n.pieces_.length-n.pieceNum_}function tt(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new rt(n.pieces_,e)}function dC(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function l2(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function fC(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function pC(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new rt(e,0)}function Lt(n,e){const t=[];for(let r=n.pieceNum_;r<n.pieces_.length;r++)t.push(n.pieces_[r]);if(e instanceof rt)for(let r=e.pieceNum_;r<e.pieces_.length;r++)t.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&t.push(r[s])}return new rt(t,0)}function De(n){return n.pieceNum_>=n.pieces_.length}function zn(n,e){const t=Ve(n),r=Ve(e);if(t===null)return e;if(t===r)return zn(tt(n),tt(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function mC(n,e){if(os(n)!==os(e))return!1;for(let t=n.pieceNum_,r=e.pieceNum_;t<=n.pieces_.length;t++,r++)if(n.pieces_[t]!==e.pieces_[r])return!1;return!0}function ar(n,e){let t=n.pieceNum_,r=e.pieceNum_;if(os(n)>os(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[r])return!1;++t,++r}return!0}class u2{constructor(e,t){this.errorPrefix_=t,this.parts_=fC(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=pd(this.parts_[r]);gC(this)}}function c2(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=pd(e),gC(n)}function h2(n){const e=n.parts_.pop();n.byteLength_-=pd(e),n.parts_.length>0&&(n.byteLength_-=1)}function gC(n){if(n.byteLength_>uw)throw new Error(n.errorPrefix_+"has a key path longer than "+uw+" bytes ("+n.byteLength_+").");if(n.parts_.length>lw)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+lw+") or object contains a cycle "+js(n))}function js(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg extends hC{static getInstance(){return new Fg}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return ie(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bl=1e3,d2=60*5*1e3,cw=30*1e3,f2=1.3,p2=3e4,m2="server_kill",hw=3;class ai extends cC{constructor(e,t,r,s,a,u,h,f){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=a,this.authTokenProvider_=u,this.appCheckTokenProvider_=h,this.authOverride_=f,this.id=ai.nextPersistentConnectionId_++,this.log_=Vu("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Bl,this.maxReconnectDelay_=d2,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,f)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Fg.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ed.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,r){const s=++this.requestNumber_,a={r:s,a:e,b:t};this.log_(jt(a)),ie(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(a),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const t=new jm,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:u=>{const h=u.d;u.s==="ok"?t.resolve(h):t.reject(h)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const a=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(a),t.promise}listen(e,t,r,s){this.initConnection_();const a=e._queryIdentifier,u=e._path.toString();this.log_("Listen called for "+u+" "+a),this.listens.has(u)||this.listens.set(u,new Map),ie(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),ie(!this.listens.get(u).has(a),"listen() called twice for same path/queryId.");const h={onComplete:s,hashFn:t,query:e,tag:r};this.listens.get(u).set(a,h),this.connected_&&this.sendListen_(h)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(r)})}sendListen_(e){const t=e.query,r=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+r+" for "+s);const a={p:r},u="q";e.tag&&(a.q=t._queryObject,a.t=e.tag),a.h=e.hashFn(),this.sendRequest(u,a,h=>{const f=h.d,m=h.s;ai.warnOnListenWarnings_(f,t),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",h),m!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(m,f))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&mi(e,"w")){const r=wa(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',a=t._path.toString();Pn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${a} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||uk(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=cw)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=lk(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(t,r,s=>{const a=s.s,u=s.d||"error";this.authToken_===e&&(a==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(a,u))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,r=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,r)})}unlisten(e,t){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),ie(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,t)}sendUnlisten_(e,t,r,s){this.log_("Unlisten on "+e+" for "+t);const a={p:e},u="n";s&&(a.q=r,a.t=s),this.sendRequest(u,a)}onDisconnectPut(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:r})}onDisconnectMerge(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:r})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,r,s){const a={p:t,d:r};this.log_("onDisconnect "+e,a),this.sendRequest(e,a,u=>{s&&setTimeout(()=>{s(u.s,u.d)},Math.floor(0))})}put(e,t,r,s){this.putInternal("p",e,t,r,s)}merge(e,t,r,s){this.putInternal("m",e,t,r,s)}putInternal(e,t,r,s,a){this.initConnection_();const u={p:t,d:r};a!==void 0&&(u.h=a),this.outstandingPuts_.push({action:e,request:u,onComplete:s}),this.outstandingPutCount_++;const h=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(h):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,r,a=>{this.log_(t+" response",a),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(a.s,a.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,r=>{if(r.s!=="ok"){const a=r.d;this.log_("reportStats","Error sending stats: "+a)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+jt(e));const t=e.r,r=this.requestCBHash_[t];r&&(delete this.requestCBHash_[t],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):ym("Unrecognized action received from server: "+jt(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){ie(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Bl,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Bl,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>p2&&(this.reconnectDelay_=Bl),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*f2)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+ai.nextConnectionId_++,a=this.lastSessionId;let u=!1,h=null;const f=function(){h?h.close():(u=!0,r())},m=function(E){ie(h,"sendRequest call when we're not connected not allowed."),h.sendRequest(E)};this.realtime_={close:f,sendRequest:m};const y=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[E,T]=await Promise.all([this.authTokenProvider_.getToken(y),this.appCheckTokenProvider_.getToken(y)]);u?Jt("getToken() completed but was canceled"):(Jt("getToken() completed. Creating connection."),this.authToken_=E&&E.accessToken,this.appCheckToken_=T&&T.token,h=new a2(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,r,R=>{Pn(R+" ("+this.repoInfo_.toString()+")"),this.interrupt(m2)},a))}catch(E){this.log_("Failed to get token: "+E),u||(this.repoInfo_.nodeAdmin&&Pn(E),f())}}}interrupt(e){Jt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Jt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],qp(this.interruptReasons_)&&(this.reconnectDelay_=Bl,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let r;t?r=t.map(a=>Og(a)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const r=new rt(e).toString();let s;if(this.listens.has(r)){const a=this.listens.get(r);s=a.get(t),a.delete(t),a.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,t){Jt("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=hw&&(this.reconnectDelay_=cw,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Jt("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=hw&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+BS.replace(/\./g,"-")]=1,zm()?e["framework.cordova"]=1:sT()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ed.getInstance().currentlyOnline();return qp(this.interruptReasons_)&&e}}ai.nextPersistentConnectionId_=0;ai.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Fe(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const r=new Fe(Pa,e),s=new Fe(Pa,t);return this.compare(r,s)!==0}minPost(){return Fe.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hh;class _C extends Od{static get __EMPTY_NODE(){return hh}static set __EMPTY_NODE(e){hh=e}compare(e,t){return za(e.name,t.name)}isDefinedOn(e){throw Da("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Fe.MIN}maxPost(){return new Fe(Xs,hh)}makePost(e,t){return ie(typeof e=="string","KeyIndex indexValue must always be a string."),new Fe(e,hh)}toString(){return".key"}}const Ea=new _C;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(e,t,r,s,a=null){this.isReverse_=s,this.resultGenerator_=a,this.nodeStack_=[];let u=1;for(;!e.isEmpty();)if(e=e,u=t?r(e.key,t):1,s&&(u*=-1),u<0)this.isReverse_?e=e.left:e=e.right;else if(u===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ot{constructor(e,t,r,s,a){this.key=e,this.value=t,this.color=r??Ot.RED,this.left=s??_n.EMPTY_NODE,this.right=a??_n.EMPTY_NODE}copy(e,t,r,s,a){return new Ot(e??this.key,t??this.value,r??this.color,s??this.left,a??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const a=r(e,s.key);return a<0?s=s.copy(null,null,null,s.left.insert(e,t,r),null):a===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return _n.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let r,s;if(r=this,t(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),t(e,r.key)===0){if(r.right.isEmpty())return _n.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ot.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ot.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ot.RED=!0;Ot.BLACK=!1;class g2{copy(e,t,r,s,a){return this}insert(e,t,r){return new Ot(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class _n{constructor(e,t=_n.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new _n(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Ot.BLACK,null,null))}remove(e){return new _n(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ot.BLACK,null,null))}get(e){let t,r=this.root_;for(;!r.isEmpty();){if(t=this.comparator_(e,r.key),t===0)return r.value;t<0?r=r.left:t>0&&(r=r.right)}return null}getPredecessorKey(e){let t,r=this.root_,s=null;for(;!r.isEmpty();)if(t=this.comparator_(e,r.key),t===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else t<0?r=r.left:t>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new dh(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new dh(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new dh(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new dh(this.root_,null,this.comparator_,!0,e)}}_n.EMPTY_NODE=new g2;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _2(n,e){return za(n.name,e.name)}function Ug(n,e){return za(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Em;function y2(n){Em=n}const yC=function(n){return typeof n=="number"?"number:"+GS(n):"string:"+n},vC=function(n){if(n.isLeafNode()){const e=n.val();ie(typeof e=="string"||typeof e=="number"||typeof e=="object"&&mi(e,".sv"),"Priority must be a string or number.")}else ie(n===Em||n.isEmpty(),"priority of unexpected type.");ie(n===Em||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dw;class bt{static set __childrenNodeConstructor(e){dw=e}static get __childrenNodeConstructor(){return dw}constructor(e,t=bt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,ie(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),vC(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new bt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:bt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return De(e)?this:Ve(e)===".priority"?this.priorityNode_:bt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:bt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const r=Ve(e);return r===null?t:t.isEmpty()&&r!==".priority"?this:(ie(r!==".priority"||os(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,bt.__childrenNodeConstructor.EMPTY_NODE.updateChild(tt(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+yC(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=GS(this.value_):e+=this.value_,this.lazyHash_=WS(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===bt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof bt.__childrenNodeConstructor?-1:(ie(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,r=typeof this.value_,s=bt.VALUE_TYPE_ORDER.indexOf(t),a=bt.VALUE_TYPE_ORDER.indexOf(r);return ie(s>=0,"Unknown leaf type: "+t),ie(a>=0,"Unknown leaf type: "+r),s===a?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:a-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}bt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let EC,wC;function v2(n){EC=n}function E2(n){wC=n}class w2 extends Od{compare(e,t){const r=e.node.getPriority(),s=t.node.getPriority(),a=r.compareTo(s);return a===0?za(e.name,t.name):a}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Fe.MIN}maxPost(){return new Fe(Xs,new bt("[PRIORITY-POST]",wC))}makePost(e,t){const r=EC(e);return new Fe(t,new bt("[PRIORITY-POST]",r))}toString(){return".priority"}}const en=new w2;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T2=Math.log(2);class I2{constructor(e){const t=a=>parseInt(Math.log(a)/T2,10),r=a=>parseInt(Array(a+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const td=function(n,e,t,r){n.sort(e);const s=function(f,m){const y=m-f;let E,T;if(y===0)return null;if(y===1)return E=n[f],T=t?t(E):E,new Ot(T,E.node,Ot.BLACK,null,null);{const R=parseInt(y/2,10)+f,x=s(f,R),$=s(R+1,m);return E=n[R],T=t?t(E):E,new Ot(T,E.node,Ot.BLACK,x,$)}},a=function(f){let m=null,y=null,E=n.length;const T=function(x,$){const L=E-x,q=E;E-=x;const ee=s(L+1,q),X=n[L],de=t?t(X):X;R(new Ot(de,X.node,$,null,ee))},R=function(x){m?(m.left=x,m=x):(y=x,m=x)};for(let x=0;x<f.count;++x){const $=f.nextBitIsOne(),L=Math.pow(2,f.count-(x+1));$?T(L,Ot.BLACK):(T(L,Ot.BLACK),T(L,Ot.RED))}return y},u=new I2(n.length),h=a(u);return new _n(r||e,h)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Up;const sa={};class ri{static get Default(){return ie(sa&&en,"ChildrenNode.ts has not been loaded"),Up=Up||new ri({".priority":sa},{".priority":en}),Up}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=wa(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof _n?t:null}hasIndex(e){return mi(this.indexSet_,e.toString())}addIndex(e,t){ie(e!==Ea,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const a=t.getIterator(Fe.Wrap);let u=a.getNext();for(;u;)s=s||e.isDefinedOn(u.node),r.push(u),u=a.getNext();let h;s?h=td(r,e.getCompare()):h=sa;const f=e.toString(),m=Object.assign({},this.indexSet_);m[f]=e;const y=Object.assign({},this.indexes_);return y[f]=h,new ri(y,m)}addToIndexes(e,t){const r=Dh(this.indexes_,(s,a)=>{const u=wa(this.indexSet_,a);if(ie(u,"Missing index implementation for "+a),s===sa)if(u.isDefinedOn(e.node)){const h=[],f=t.getIterator(Fe.Wrap);let m=f.getNext();for(;m;)m.name!==e.name&&h.push(m),m=f.getNext();return h.push(e),td(h,u.getCompare())}else return sa;else{const h=t.get(e.name);let f=s;return h&&(f=f.remove(new Fe(e.name,h))),f.insert(e,e.node)}});return new ri(r,this.indexSet_)}removeFromIndexes(e,t){const r=Dh(this.indexes_,s=>{if(s===sa)return s;{const a=t.get(e.name);return a?s.remove(new Fe(e.name,a)):s}});return new ri(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $l;class $e{static get EMPTY_NODE(){return $l||($l=new $e(new _n(Ug),null,ri.Default))}constructor(e,t,r){this.children_=e,this.priorityNode_=t,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&vC(this.priorityNode_),this.children_.isEmpty()&&ie(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||$l}updatePriority(e){return this.children_.isEmpty()?this:new $e(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?$l:t}}getChild(e){const t=Ve(e);return t===null?this:this.getImmediateChild(t).getChild(tt(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(ie(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const r=new Fe(e,t);let s,a;t.isEmpty()?(s=this.children_.remove(e),a=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,t),a=this.indexMap_.addToIndexes(r,this.children_));const u=s.isEmpty()?$l:this.priorityNode_;return new $e(s,u,a)}}updateChild(e,t){const r=Ve(e);if(r===null)return t;{ie(Ve(e)!==".priority"||os(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(tt(e),t);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let r=0,s=0,a=!0;if(this.forEachChild(en,(u,h)=>{t[u]=h.val(e),r++,a&&$e.INTEGER_REGEXP_.test(u)?s=Math.max(s,Number(u)):a=!1}),!e&&a&&s<2*r){const u=[];for(const h in t)u[h]=t[h];return u}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+yC(this.getPriority().val())+":"),this.forEachChild(en,(t,r)=>{const s=r.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":WS(e)}return this.lazyHash_}getPredecessorChildName(e,t,r){const s=this.resolveIndex_(r);if(s){const a=s.getPredecessorKey(new Fe(e,t));return a?a.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Fe(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Fe(t,this.children_.get(t)):null}forEachChild(e,t){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,Fe.Wrap);let a=s.peek();for(;a!=null&&t.compare(a,e)<0;)s.getNext(),a=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,Fe.Wrap);let a=s.peek();for(;a!=null&&t.compare(a,e)>0;)s.getNext(),a=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Uu?-1:0}withIndex(e){if(e===Ea||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new $e(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Ea||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const r=this.getIterator(en),s=t.getIterator(en);let a=r.getNext(),u=s.getNext();for(;a&&u;){if(a.name!==u.name||!a.node.equals(u.node))return!1;a=r.getNext(),u=s.getNext()}return a===null&&u===null}else return!1;else return!1}}resolveIndex_(e){return e===Ea?null:this.indexMap_.get(e.toString())}}$e.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class S2 extends $e{constructor(){super(new _n(Ug),$e.EMPTY_NODE,ri.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return $e.EMPTY_NODE}isEmpty(){return!1}}const Uu=new S2;Object.defineProperties(Fe,{MIN:{value:new Fe(Pa,$e.EMPTY_NODE)},MAX:{value:new Fe(Xs,Uu)}});_C.__EMPTY_NODE=$e.EMPTY_NODE;bt.__childrenNodeConstructor=$e;y2(Uu);E2(Uu);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C2=!0;function Zt(n,e=null){if(n===null)return $e.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),ie(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new bt(t,Zt(e))}if(!(n instanceof Array)&&C2){const t=[];let r=!1;if($n(n,(u,h)=>{if(u.substring(0,1)!=="."){const f=Zt(h);f.isEmpty()||(r=r||!f.getPriority().isEmpty(),t.push(new Fe(u,f)))}}),t.length===0)return $e.EMPTY_NODE;const a=td(t,_2,u=>u.name,Ug);if(r){const u=td(t,en.getCompare());return new $e(a,Zt(e),new ri({".priority":u},{".priority":en}))}else return new $e(a,Zt(e),ri.Default)}else{let t=$e.EMPTY_NODE;return $n(n,(r,s)=>{if(mi(n,r)&&r.substring(0,1)!=="."){const a=Zt(s);(a.isLeafNode()||!a.isEmpty())&&(t=t.updateImmediateChild(r,a))}}),t.updatePriority(Zt(e))}}v2(Zt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R2 extends Od{constructor(e){super(),this.indexPath_=e,ie(!De(e)&&Ve(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const r=this.extractChild(e.node),s=this.extractChild(t.node),a=r.compareTo(s);return a===0?za(e.name,t.name):a}makePost(e,t){const r=Zt(e),s=$e.EMPTY_NODE.updateChild(this.indexPath_,r);return new Fe(t,s)}maxPost(){const e=$e.EMPTY_NODE.updateChild(this.indexPath_,Uu);return new Fe(Xs,e)}toString(){return fC(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A2 extends Od{compare(e,t){const r=e.node.compareTo(t.node);return r===0?za(e.name,t.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Fe.MIN}maxPost(){return Fe.MAX}makePost(e,t){const r=Zt(e);return new Fe(t,r)}toString(){return".value"}}const k2=new A2;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P2(n){return{type:"value",snapshotNode:n}}function N2(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function x2(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function fw(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function b2(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=en}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return ie(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return ie(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Pa}hasEnd(){return this.endSet_}getIndexEndValue(){return ie(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return ie(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Xs}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return ie(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===en}copy(){const e=new jg;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function pw(n){const e={};if(n.isDefault())return e;let t;if(n.index_===en?t="$priority":n.index_===k2?t="$value":n.index_===Ea?t="$key":(ie(n.index_ instanceof R2,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=jt(t),n.startSet_){const r=n.startAfterSet_?"startAfter":"startAt";e[r]=jt(n.indexStartValue_),n.startNameSet_&&(e[r]+=","+jt(n.indexStartName_))}if(n.endSet_){const r=n.endBeforeSet_?"endBefore":"endAt";e[r]=jt(n.indexEndValue_),n.endNameSet_&&(e[r]+=","+jt(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function mw(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==en&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd extends cC{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(ie(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=Vu("p:rest:"),this.listens_={}}listen(e,t,r,s){const a=e._path.toString();this.log_("Listen called for "+a+" "+e._queryIdentifier);const u=nd.getListenId_(e,r),h={};this.listens_[u]=h;const f=pw(e._queryParams);this.restRequest_(a+".json",f,(m,y)=>{let E=y;if(m===404&&(E=null,m=null),m===null&&this.onDataUpdate_(a,E,!1,r),wa(this.listens_,u)===h){let T;m?m===401?T="permission_denied":T="rest_error:"+m:T="ok",s(T,null)}})}unlisten(e,t){const r=nd.getListenId_(e,t);delete this.listens_[r]}get(e){const t=pw(e._queryParams),r=e._path.toString(),s=new jm;return this.restRequest_(r+".json",t,(a,u)=>{let h=u;a===404&&(h=null,a=null),a===null?(this.onDataUpdate_(r,h,!1,null),s.resolve(h)):s.reject(new Error(h))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},r){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,a])=>{s&&s.accessToken&&(t.auth=s.accessToken),a&&a.token&&(t.ac=a.token);const u=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Oa(t);this.log_("Sending REST request for "+u);const h=new XMLHttpRequest;h.onreadystatechange=()=>{if(r&&h.readyState===4){this.log_("REST Response for "+u+" received. status:",h.status,"response:",h.responseText);let f=null;if(h.status>=200&&h.status<300){try{f=hu(h.responseText)}catch{Pn("Failed to parse JSON response for "+u+": "+h.responseText)}r(null,f)}else h.status!==401&&h.status!==404&&Pn("Got unsuccessful REST response for "+u+" Status: "+h.status),r(h.status);r=null}},h.open("GET",u,!0),h.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D2{constructor(){this.rootNode_=$e.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rd(){return{value:null,children:new Map}}function TC(n,e,t){if(De(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const r=Ve(e);n.children.has(r)||n.children.set(r,rd());const s=n.children.get(r);e=tt(e),TC(s,e,t)}}function wm(n,e,t){n.value!==null?t(e,n.value):O2(n,(r,s)=>{const a=new rt(e.toString()+"/"+r);wm(s,a,t)})}function O2(n,e){n.children.forEach((t,r)=>{e(r,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L2{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&$n(this.last_,(r,s)=>{t[r]=t[r]-s}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gw=10*1e3,M2=30*1e3,V2=5*60*1e3;class F2{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new L2(e);const r=gw+(M2-gw)*Math.random();ou(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),t={};let r=!1;$n(e,(s,a)=>{a>0&&mi(this.statsToReport_,s)&&(t[s]=a,r=!0)}),r&&this.server_.reportStats(t),ou(this.reportStats_.bind(this),Math.floor(Math.random()*2*V2))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Rr;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Rr||(Rr={}));function IC(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function SC(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function CC(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(e,t,r){this.path=e,this.affectedTree=t,this.revert=r,this.type=Rr.ACK_USER_WRITE,this.source=IC()}operationForChild(e){if(De(this.path)){if(this.affectedTree.value!=null)return ie(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new rt(e));return new id(Ge(),t,this.revert)}}else return ie(Ve(this.path)===e,"operationForChild called for unrelated child."),new id(tt(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e,t,r){this.source=e,this.path=t,this.snap=r,this.type=Rr.OVERWRITE}operationForChild(e){return De(this.path)?new Js(this.source,Ge(),this.snap.getImmediateChild(e)):new Js(this.source,tt(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(e,t,r){this.source=e,this.path=t,this.children=r,this.type=Rr.MERGE}operationForChild(e){if(De(this.path)){const t=this.children.subtree(new rt(e));return t.isEmpty()?null:t.value?new Js(this.source,Ge(),t.value):new Iu(this.source,Ge(),t)}else return ie(Ve(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Iu(this.source,tt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(e,t,r){this.node_=e,this.fullyInitialized_=t,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(De(e))return this.isFullyInitialized()&&!this.filtered_;const t=Ve(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function U2(n,e,t,r){const s=[],a=[];return e.forEach(u=>{u.type==="child_changed"&&n.index_.indexedValueChanged(u.oldSnap,u.snapshotNode)&&a.push(b2(u.childName,u.snapshotNode))}),Wl(n,s,"child_removed",e,r,t),Wl(n,s,"child_added",e,r,t),Wl(n,s,"child_moved",a,r,t),Wl(n,s,"child_changed",e,r,t),Wl(n,s,"value",e,r,t),s}function Wl(n,e,t,r,s,a){const u=r.filter(h=>h.type===t);u.sort((h,f)=>z2(n,h,f)),u.forEach(h=>{const f=j2(n,h,a);s.forEach(m=>{m.respondsTo(h.type)&&e.push(m.createEvent(f,n.query_))})})}function j2(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function z2(n,e,t){if(e.childName==null||t.childName==null)throw Da("Should only compare child_ events.");const r=new Fe(e.childName,e.snapshotNode),s=new Fe(t.childName,t.snapshotNode);return n.index_.compare(r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RC(n,e){return{eventCache:n,serverCache:e}}function au(n,e,t,r){return RC(new zg(e,t,r),n.serverCache)}function AC(n,e,t,r){return RC(n.eventCache,new zg(e,t,r))}function Tm(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Zs(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jp;const B2=()=>(jp||(jp=new _n(kL)),jp);class et{static fromObject(e){let t=new et(null);return $n(e,(r,s)=>{t=t.set(new rt(r),s)}),t}constructor(e,t=B2()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:Ge(),value:this.value};if(De(e))return null;{const r=Ve(e),s=this.children.get(r);if(s!==null){const a=s.findRootMostMatchingPathAndValue(tt(e),t);return a!=null?{path:Lt(new rt(r),a.path),value:a.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(De(e))return this;{const t=Ve(e),r=this.children.get(t);return r!==null?r.subtree(tt(e)):new et(null)}}set(e,t){if(De(e))return new et(t,this.children);{const r=Ve(e),a=(this.children.get(r)||new et(null)).set(tt(e),t),u=this.children.insert(r,a);return new et(this.value,u)}}remove(e){if(De(e))return this.children.isEmpty()?new et(null):new et(null,this.children);{const t=Ve(e),r=this.children.get(t);if(r){const s=r.remove(tt(e));let a;return s.isEmpty()?a=this.children.remove(t):a=this.children.insert(t,s),this.value===null&&a.isEmpty()?new et(null):new et(this.value,a)}else return this}}get(e){if(De(e))return this.value;{const t=Ve(e),r=this.children.get(t);return r?r.get(tt(e)):null}}setTree(e,t){if(De(e))return t;{const r=Ve(e),a=(this.children.get(r)||new et(null)).setTree(tt(e),t);let u;return a.isEmpty()?u=this.children.remove(r):u=this.children.insert(r,a),new et(this.value,u)}}fold(e){return this.fold_(Ge(),e)}fold_(e,t){const r={};return this.children.inorderTraversal((s,a)=>{r[s]=a.fold_(Lt(e,s),t)}),t(e,this.value,r)}findOnPath(e,t){return this.findOnPath_(e,Ge(),t)}findOnPath_(e,t,r){const s=this.value?r(t,this.value):!1;if(s)return s;if(De(e))return null;{const a=Ve(e),u=this.children.get(a);return u?u.findOnPath_(tt(e),Lt(t,a),r):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Ge(),t)}foreachOnPath_(e,t,r){if(De(e))return this;{this.value&&r(t,this.value);const s=Ve(e),a=this.children.get(s);return a?a.foreachOnPath_(tt(e),Lt(t,s),r):new et(null)}}foreach(e){this.foreach_(Ge(),e)}foreach_(e,t){this.children.inorderTraversal((r,s)=>{s.foreach_(Lt(e,r),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,r)=>{r.value&&e(t,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e){this.writeTree_=e}static empty(){return new lr(new et(null))}}function lu(n,e,t){if(De(e))return new lr(new et(t));{const r=n.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let a=r.value;const u=zn(s,e);return a=a.updateChild(u,t),new lr(n.writeTree_.set(s,a))}else{const s=new et(t),a=n.writeTree_.setTree(e,s);return new lr(a)}}}function _w(n,e,t){let r=n;return $n(t,(s,a)=>{r=lu(r,Lt(e,s),a)}),r}function yw(n,e){if(De(e))return lr.empty();{const t=n.writeTree_.setTree(e,new et(null));return new lr(t)}}function Im(n,e){return uo(n,e)!=null}function uo(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(zn(t.path,e)):null}function vw(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(en,(r,s)=>{e.push(new Fe(r,s))}):n.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new Fe(r,s.value))}),e}function Zi(n,e){if(De(e))return n;{const t=uo(n,e);return t!=null?new lr(new et(t)):new lr(n.writeTree_.subtree(e))}}function Sm(n){return n.writeTree_.isEmpty()}function Na(n,e){return kC(Ge(),n.writeTree_,e)}function kC(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let r=null;return e.children.inorderTraversal((s,a)=>{s===".priority"?(ie(a.value!==null,"Priority writes must always be leaf nodes"),r=a.value):t=kC(Lt(n,s),a,t)}),!t.getChild(n).isEmpty()&&r!==null&&(t=t.updateChild(Lt(n,".priority"),r)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PC(n,e){return OC(e,n)}function $2(n,e,t,r,s){ie(r>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:r,visible:s}),s&&(n.visibleWrites=lu(n.visibleWrites,e,t)),n.lastWriteId=r}function W2(n,e){for(let t=0;t<n.allWrites.length;t++){const r=n.allWrites[t];if(r.writeId===e)return r}return null}function q2(n,e){const t=n.allWrites.findIndex(h=>h.writeId===e);ie(t>=0,"removeWrite called with nonexistent writeId.");const r=n.allWrites[t];n.allWrites.splice(t,1);let s=r.visible,a=!1,u=n.allWrites.length-1;for(;s&&u>=0;){const h=n.allWrites[u];h.visible&&(u>=t&&H2(h,r.path)?s=!1:ar(r.path,h.path)&&(a=!0)),u--}if(s){if(a)return G2(n),!0;if(r.snap)n.visibleWrites=yw(n.visibleWrites,r.path);else{const h=r.children;$n(h,f=>{n.visibleWrites=yw(n.visibleWrites,Lt(r.path,f))})}return!0}else return!1}function H2(n,e){if(n.snap)return ar(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&ar(Lt(n.path,t),e))return!0;return!1}function G2(n){n.visibleWrites=NC(n.allWrites,K2,Ge()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function K2(n){return n.visible}function NC(n,e,t){let r=lr.empty();for(let s=0;s<n.length;++s){const a=n[s];if(e(a)){const u=a.path;let h;if(a.snap)ar(t,u)?(h=zn(t,u),r=lu(r,h,a.snap)):ar(u,t)&&(h=zn(u,t),r=lu(r,Ge(),a.snap.getChild(h)));else if(a.children){if(ar(t,u))h=zn(t,u),r=_w(r,h,a.children);else if(ar(u,t))if(h=zn(u,t),De(h))r=_w(r,Ge(),a.children);else{const f=wa(a.children,Ve(h));if(f){const m=f.getChild(tt(h));r=lu(r,Ge(),m)}}}else throw Da("WriteRecord should have .snap or .children")}}return r}function xC(n,e,t,r,s){if(!r&&!s){const a=uo(n.visibleWrites,e);if(a!=null)return a;{const u=Zi(n.visibleWrites,e);if(Sm(u))return t;if(t==null&&!Im(u,Ge()))return null;{const h=t||$e.EMPTY_NODE;return Na(u,h)}}}else{const a=Zi(n.visibleWrites,e);if(!s&&Sm(a))return t;if(!s&&t==null&&!Im(a,Ge()))return null;{const u=function(m){return(m.visible||s)&&(!r||!~r.indexOf(m.writeId))&&(ar(m.path,e)||ar(e,m.path))},h=NC(n.allWrites,u,e),f=t||$e.EMPTY_NODE;return Na(h,f)}}}function Q2(n,e,t){let r=$e.EMPTY_NODE;const s=uo(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(en,(a,u)=>{r=r.updateImmediateChild(a,u)}),r;if(t){const a=Zi(n.visibleWrites,e);return t.forEachChild(en,(u,h)=>{const f=Na(Zi(a,new rt(u)),h);r=r.updateImmediateChild(u,f)}),vw(a).forEach(u=>{r=r.updateImmediateChild(u.name,u.node)}),r}else{const a=Zi(n.visibleWrites,e);return vw(a).forEach(u=>{r=r.updateImmediateChild(u.name,u.node)}),r}}function Y2(n,e,t,r,s){ie(r||s,"Either existingEventSnap or existingServerSnap must exist");const a=Lt(e,t);if(Im(n.visibleWrites,a))return null;{const u=Zi(n.visibleWrites,a);return Sm(u)?s.getChild(t):Na(u,s.getChild(t))}}function X2(n,e,t,r){const s=Lt(e,t),a=uo(n.visibleWrites,s);if(a!=null)return a;if(r.isCompleteForChild(t)){const u=Zi(n.visibleWrites,s);return Na(u,r.getNode().getImmediateChild(t))}else return null}function J2(n,e){return uo(n.visibleWrites,e)}function Z2(n,e,t,r,s,a,u){let h;const f=Zi(n.visibleWrites,e),m=uo(f,Ge());if(m!=null)h=m;else if(t!=null)h=Na(f,t);else return[];if(h=h.withIndex(u),!h.isEmpty()&&!h.isLeafNode()){const y=[],E=u.getCompare(),T=a?h.getReverseIteratorFrom(r,u):h.getIteratorFrom(r,u);let R=T.getNext();for(;R&&y.length<s;)E(R,r)!==0&&y.push(R),R=T.getNext();return y}else return[]}function eM(){return{visibleWrites:lr.empty(),allWrites:[],lastWriteId:-1}}function Cm(n,e,t,r){return xC(n.writeTree,n.treePath,e,t,r)}function bC(n,e){return Q2(n.writeTree,n.treePath,e)}function Ew(n,e,t,r){return Y2(n.writeTree,n.treePath,e,t,r)}function sd(n,e){return J2(n.writeTree,Lt(n.treePath,e))}function tM(n,e,t,r,s,a){return Z2(n.writeTree,n.treePath,e,t,r,s,a)}function Bg(n,e,t){return X2(n.writeTree,n.treePath,e,t)}function DC(n,e){return OC(Lt(n.treePath,e),n.writeTree)}function OC(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nM{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,r=e.childName;ie(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),ie(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const a=s.type;if(t==="child_added"&&a==="child_removed")this.changeMap.set(r,fw(r,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&a==="child_added")this.changeMap.delete(r);else if(t==="child_removed"&&a==="child_changed")this.changeMap.set(r,x2(r,s.oldSnap));else if(t==="child_changed"&&a==="child_added")this.changeMap.set(r,N2(r,e.snapshotNode));else if(t==="child_changed"&&a==="child_changed")this.changeMap.set(r,fw(r,e.snapshotNode,s.oldSnap));else throw Da("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rM{getCompleteChild(e){return null}getChildAfterChild(e,t,r){return null}}const LC=new rM;class $g{constructor(e,t,r=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=r}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new zg(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Bg(this.writes_,e,r)}}getChildAfterChild(e,t,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Zs(this.viewCache_),a=tM(this.writes_,s,t,1,r,e);return a.length===0?null:a[0]}}function iM(n,e){ie(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),ie(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function sM(n,e,t,r,s){const a=new nM;let u,h;if(t.type===Rr.OVERWRITE){const m=t;m.source.fromUser?u=Rm(n,e,m.path,m.snap,r,s,a):(ie(m.source.fromServer,"Unknown source."),h=m.source.tagged||e.serverCache.isFiltered()&&!De(m.path),u=od(n,e,m.path,m.snap,r,s,h,a))}else if(t.type===Rr.MERGE){const m=t;m.source.fromUser?u=aM(n,e,m.path,m.children,r,s,a):(ie(m.source.fromServer,"Unknown source."),h=m.source.tagged||e.serverCache.isFiltered(),u=Am(n,e,m.path,m.children,r,s,h,a))}else if(t.type===Rr.ACK_USER_WRITE){const m=t;m.revert?u=cM(n,e,m.path,r,s,a):u=lM(n,e,m.path,m.affectedTree,r,s,a)}else if(t.type===Rr.LISTEN_COMPLETE)u=uM(n,e,t.path,r,a);else throw Da("Unknown operation type: "+t.type);const f=a.getChanges();return oM(e,u,f),{viewCache:u,changes:f}}function oM(n,e,t){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),a=Tm(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!r.getNode().equals(a)||!r.getNode().getPriority().equals(a.getPriority()))&&t.push(P2(Tm(e)))}}function MC(n,e,t,r,s,a){const u=e.eventCache;if(sd(r,t)!=null)return e;{let h,f;if(De(t))if(ie(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const m=Zs(e),y=m instanceof $e?m:$e.EMPTY_NODE,E=bC(r,y);h=n.filter.updateFullNode(e.eventCache.getNode(),E,a)}else{const m=Cm(r,Zs(e));h=n.filter.updateFullNode(e.eventCache.getNode(),m,a)}else{const m=Ve(t);if(m===".priority"){ie(os(t)===1,"Can't have a priority with additional path components");const y=u.getNode();f=e.serverCache.getNode();const E=Ew(r,t,y,f);E!=null?h=n.filter.updatePriority(y,E):h=u.getNode()}else{const y=tt(t);let E;if(u.isCompleteForChild(m)){f=e.serverCache.getNode();const T=Ew(r,t,u.getNode(),f);T!=null?E=u.getNode().getImmediateChild(m).updateChild(y,T):E=u.getNode().getImmediateChild(m)}else E=Bg(r,m,e.serverCache);E!=null?h=n.filter.updateChild(u.getNode(),m,E,y,s,a):h=u.getNode()}}return au(e,h,u.isFullyInitialized()||De(t),n.filter.filtersNodes())}}function od(n,e,t,r,s,a,u,h){const f=e.serverCache;let m;const y=u?n.filter:n.filter.getIndexedFilter();if(De(t))m=y.updateFullNode(f.getNode(),r,null);else if(y.filtersNodes()&&!f.isFiltered()){const R=f.getNode().updateChild(t,r);m=y.updateFullNode(f.getNode(),R,null)}else{const R=Ve(t);if(!f.isCompleteForPath(t)&&os(t)>1)return e;const x=tt(t),L=f.getNode().getImmediateChild(R).updateChild(x,r);R===".priority"?m=y.updatePriority(f.getNode(),L):m=y.updateChild(f.getNode(),R,L,x,LC,null)}const E=AC(e,m,f.isFullyInitialized()||De(t),y.filtersNodes()),T=new $g(s,E,a);return MC(n,E,t,s,T,h)}function Rm(n,e,t,r,s,a,u){const h=e.eventCache;let f,m;const y=new $g(s,e,a);if(De(t))m=n.filter.updateFullNode(e.eventCache.getNode(),r,u),f=au(e,m,!0,n.filter.filtersNodes());else{const E=Ve(t);if(E===".priority")m=n.filter.updatePriority(e.eventCache.getNode(),r),f=au(e,m,h.isFullyInitialized(),h.isFiltered());else{const T=tt(t),R=h.getNode().getImmediateChild(E);let x;if(De(T))x=r;else{const $=y.getCompleteChild(E);$!=null?dC(T)===".priority"&&$.getChild(pC(T)).isEmpty()?x=$:x=$.updateChild(T,r):x=$e.EMPTY_NODE}if(R.equals(x))f=e;else{const $=n.filter.updateChild(h.getNode(),E,x,T,y,u);f=au(e,$,h.isFullyInitialized(),n.filter.filtersNodes())}}}return f}function ww(n,e){return n.eventCache.isCompleteForChild(e)}function aM(n,e,t,r,s,a,u){let h=e;return r.foreach((f,m)=>{const y=Lt(t,f);ww(e,Ve(y))&&(h=Rm(n,h,y,m,s,a,u))}),r.foreach((f,m)=>{const y=Lt(t,f);ww(e,Ve(y))||(h=Rm(n,h,y,m,s,a,u))}),h}function Tw(n,e,t){return t.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function Am(n,e,t,r,s,a,u,h){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let f=e,m;De(t)?m=r:m=new et(null).setTree(t,r);const y=e.serverCache.getNode();return m.children.inorderTraversal((E,T)=>{if(y.hasChild(E)){const R=e.serverCache.getNode().getImmediateChild(E),x=Tw(n,R,T);f=od(n,f,new rt(E),x,s,a,u,h)}}),m.children.inorderTraversal((E,T)=>{const R=!e.serverCache.isCompleteForChild(E)&&T.value===null;if(!y.hasChild(E)&&!R){const x=e.serverCache.getNode().getImmediateChild(E),$=Tw(n,x,T);f=od(n,f,new rt(E),$,s,a,u,h)}}),f}function lM(n,e,t,r,s,a,u){if(sd(s,t)!=null)return e;const h=e.serverCache.isFiltered(),f=e.serverCache;if(r.value!=null){if(De(t)&&f.isFullyInitialized()||f.isCompleteForPath(t))return od(n,e,t,f.getNode().getChild(t),s,a,h,u);if(De(t)){let m=new et(null);return f.getNode().forEachChild(Ea,(y,E)=>{m=m.set(new rt(y),E)}),Am(n,e,t,m,s,a,h,u)}else return e}else{let m=new et(null);return r.foreach((y,E)=>{const T=Lt(t,y);f.isCompleteForPath(T)&&(m=m.set(y,f.getNode().getChild(T)))}),Am(n,e,t,m,s,a,h,u)}}function uM(n,e,t,r,s){const a=e.serverCache,u=AC(e,a.getNode(),a.isFullyInitialized()||De(t),a.isFiltered());return MC(n,u,t,r,LC,s)}function cM(n,e,t,r,s,a){let u;if(sd(r,t)!=null)return e;{const h=new $g(r,e,s),f=e.eventCache.getNode();let m;if(De(t)||Ve(t)===".priority"){let y;if(e.serverCache.isFullyInitialized())y=Cm(r,Zs(e));else{const E=e.serverCache.getNode();ie(E instanceof $e,"serverChildren would be complete if leaf node"),y=bC(r,E)}y=y,m=n.filter.updateFullNode(f,y,a)}else{const y=Ve(t);let E=Bg(r,y,e.serverCache);E==null&&e.serverCache.isCompleteForChild(y)&&(E=f.getImmediateChild(y)),E!=null?m=n.filter.updateChild(f,y,E,tt(t),h,a):e.eventCache.getNode().hasChild(y)?m=n.filter.updateChild(f,y,$e.EMPTY_NODE,tt(t),h,a):m=f,m.isEmpty()&&e.serverCache.isFullyInitialized()&&(u=Cm(r,Zs(e)),u.isLeafNode()&&(m=n.filter.updateFullNode(m,u,a)))}return u=e.serverCache.isFullyInitialized()||sd(r,Ge())!=null,au(e,m,u,n.filter.filtersNodes())}}function hM(n,e){const t=Zs(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!De(e)&&!t.getImmediateChild(Ve(e)).isEmpty())?t.getChild(e):null}function Iw(n,e,t,r){e.type===Rr.MERGE&&e.source.queryId!==null&&(ie(Zs(n.viewCache_),"We should always have a full cache before handling merges"),ie(Tm(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,a=sM(n.processor_,s,e,t,r);return iM(n.processor_,a.viewCache),ie(a.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=a.viewCache,dM(n,a.changes,a.viewCache.eventCache.getNode())}function dM(n,e,t,r){const s=n.eventRegistrations_;return U2(n.eventGenerator_,e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sw;function fM(n){ie(!Sw,"__referenceConstructor has already been defined"),Sw=n}function Wg(n,e,t,r){const s=e.source.queryId;if(s!==null){const a=n.views.get(s);return ie(a!=null,"SyncTree gave us an op for an invalid query."),Iw(a,e,t,r)}else{let a=[];for(const u of n.views.values())a=a.concat(Iw(u,e,t,r));return a}}function qg(n,e){let t=null;for(const r of n.views.values())t=t||hM(r,e);return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cw;function pM(n){ie(!Cw,"__referenceConstructor has already been defined"),Cw=n}class Rw{constructor(e){this.listenProvider_=e,this.syncPointTree_=new et(null),this.pendingWriteTree_=eM(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function mM(n,e,t,r,s){return $2(n.pendingWriteTree_,e,t,r,s),s?Md(n,new Js(IC(),e,t)):[]}function pa(n,e,t=!1){const r=W2(n.pendingWriteTree_,e);if(q2(n.pendingWriteTree_,e)){let a=new et(null);return r.snap!=null?a=a.set(Ge(),!0):$n(r.children,u=>{a=a.set(new rt(u),!0)}),Md(n,new id(r.path,a,t))}else return[]}function Ld(n,e,t){return Md(n,new Js(SC(),e,t))}function gM(n,e,t){const r=et.fromObject(t);return Md(n,new Iu(SC(),e,r))}function _M(n,e,t,r){const s=jC(n,r);if(s!=null){const a=zC(s),u=a.path,h=a.queryId,f=zn(u,e),m=new Js(CC(h),f,t);return BC(n,u,m)}else return[]}function yM(n,e,t,r){const s=jC(n,r);if(s){const a=zC(s),u=a.path,h=a.queryId,f=zn(u,e),m=et.fromObject(t),y=new Iu(CC(h),f,m);return BC(n,u,y)}else return[]}function VC(n,e,t){const s=n.pendingWriteTree_,a=n.syncPointTree_.findOnPath(e,(u,h)=>{const f=zn(u,e),m=qg(h,f);if(m)return m});return xC(s,e,a,t,!0)}function Md(n,e){return FC(e,n.syncPointTree_,null,PC(n.pendingWriteTree_,Ge()))}function FC(n,e,t,r){if(De(n.path))return UC(n,e,t,r);{const s=e.get(Ge());t==null&&s!=null&&(t=qg(s,Ge()));let a=[];const u=Ve(n.path),h=n.operationForChild(u),f=e.children.get(u);if(f&&h){const m=t?t.getImmediateChild(u):null,y=DC(r,u);a=a.concat(FC(h,f,m,y))}return s&&(a=a.concat(Wg(s,n,r,t))),a}}function UC(n,e,t,r){const s=e.get(Ge());t==null&&s!=null&&(t=qg(s,Ge()));let a=[];return e.children.inorderTraversal((u,h)=>{const f=t?t.getImmediateChild(u):null,m=DC(r,u),y=n.operationForChild(u);y&&(a=a.concat(UC(y,h,f,m)))}),s&&(a=a.concat(Wg(s,n,r,t))),a}function jC(n,e){return n.tagToQueryMap.get(e)}function zC(n){const e=n.indexOf("$");return ie(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new rt(n.substr(0,e))}}function BC(n,e,t){const r=n.syncPointTree_.get(e);ie(r,"Missing sync point for query tag that we're tracking");const s=PC(n.pendingWriteTree_,e);return Wg(r,t,s,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Hg(t)}node(){return this.node_}}class Gg{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Lt(this.path_,e);return new Gg(this.syncTree_,t)}node(){return VC(this.syncTree_,this.path_)}}const vM=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Aw=function(n,e,t){if(!n||typeof n!="object")return n;if(ie(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return EM(n[".sv"],e,t);if(typeof n[".sv"]=="object")return wM(n[".sv"],e);ie(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},EM=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:ie(!1,"Unexpected server value: "+n)}},wM=function(n,e,t){n.hasOwnProperty("increment")||ie(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const r=n.increment;typeof r!="number"&&ie(!1,"Unexpected increment value: "+r);const s=e.node();if(ie(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const u=s.getValue();return typeof u!="number"?r:u+r},TM=function(n,e,t,r){return Kg(e,new Gg(t,n),r)},IM=function(n,e,t){return Kg(n,new Hg(e),t)};function Kg(n,e,t){const r=n.getPriority().val(),s=Aw(r,e.getImmediateChild(".priority"),t);let a;if(n.isLeafNode()){const u=n,h=Aw(u.getValue(),e,t);return h!==u.getValue()||s!==u.getPriority().val()?new bt(h,Zt(s)):n}else{const u=n;return a=u,s!==u.getPriority().val()&&(a=a.updatePriority(new bt(s))),u.forEachChild(en,(h,f)=>{const m=Kg(f,e.getImmediateChild(h),t);m!==f&&(a=a.updateImmediateChild(h,m))}),a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(e="",t=null,r={children:{},childCount:0}){this.name=e,this.parent=t,this.node=r}}function Yg(n,e){let t=e instanceof rt?e:new rt(e),r=n,s=Ve(t);for(;s!==null;){const a=wa(r.node.children,s)||{children:{},childCount:0};r=new Qg(s,r,a),t=tt(t),s=Ve(t)}return r}function Ba(n){return n.node.value}function $C(n,e){n.node.value=e,km(n)}function WC(n){return n.node.childCount>0}function SM(n){return Ba(n)===void 0&&!WC(n)}function Vd(n,e){$n(n.node.children,(t,r)=>{e(new Qg(t,n,r))})}function qC(n,e,t,r){t&&e(n),Vd(n,s=>{qC(s,e,!0)})}function CM(n,e,t){let r=n.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function ju(n){return new rt(n.parent===null?n.name:ju(n.parent)+"/"+n.name)}function km(n){n.parent!==null&&RM(n.parent,n.name,n)}function RM(n,e,t){const r=SM(t),s=mi(n.node.children,e);r&&s?(delete n.node.children[e],n.node.childCount--,km(n)):!r&&!s&&(n.node.children[e]=t.node,n.node.childCount++,km(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AM=/[\[\].#$\/\u0000-\u001F\u007F]/,kM=/[\[\].#$\u0000-\u001F\u007F]/,zp=10*1024*1024,HC=function(n){return typeof n=="string"&&n.length!==0&&!AM.test(n)},PM=function(n){return typeof n=="string"&&n.length!==0&&!kM.test(n)},NM=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),PM(n)},GC=function(n,e,t){const r=t instanceof rt?new u2(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+js(r));if(typeof e=="function")throw new Error(n+"contains a function "+js(r)+" with contents = "+e.toString());if(qS(e))throw new Error(n+"contains "+e.toString()+" "+js(r));if(typeof e=="string"&&e.length>zp/3&&pd(e)>zp)throw new Error(n+"contains a string greater than "+zp+" utf8 bytes "+js(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,a=!1;if($n(e,(u,h)=>{if(u===".value")s=!0;else if(u!==".priority"&&u!==".sv"&&(a=!0,!HC(u)))throw new Error(n+" contains an invalid key ("+u+") "+js(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);c2(r,u),GC(n,h,r),h2(r)}),s&&a)throw new Error(n+' contains ".value" child '+js(r)+" in addition to actual children.")}},xM=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!HC(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!NM(t))throw new Error(pk(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bM{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function DM(n,e){let t=null;for(let r=0;r<e.length;r++){const s=e[r],a=s.getPath();t!==null&&!mC(a,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:a}),t.events.push(s)}t&&n.eventLists_.push(t)}function co(n,e,t){DM(n,t),OM(n,r=>ar(r,e)||ar(e,r))}function OM(n,e){n.recursionDepth_++;let t=!0;for(let r=0;r<n.eventLists_.length;r++){const s=n.eventLists_[r];if(s){const a=s.path;e(a)?(LM(n.eventLists_[r]),n.eventLists_[r]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function LM(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const r=t.getEventRunner();su&&Jt("event: "+t.toString()),Fu(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MM="repo_interrupt",VM=25;class FM{constructor(e,t,r,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new bM,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=rd(),this.transactionQueueTree_=new Qg,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function UM(n,e,t){if(n.stats_=Mg(n.repoInfo_),n.forceRestClient_||OL())n.server_=new nd(n.repoInfo_,(r,s,a,u)=>{kw(n,r,s,a,u)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Pw(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{jt(t)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}n.persistentConnection_=new ai(n.repoInfo_,e,(r,s,a,u)=>{kw(n,r,s,a,u)},r=>{Pw(n,r)},r=>{zM(n,r)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(r=>{n.server_.refreshAuthToken(r)}),n.appCheckProvider_.addTokenChangeListener(r=>{n.server_.refreshAppCheckToken(r.token)}),n.statsReporter_=UL(n.repoInfo_,()=>new F2(n.stats_,n.server_)),n.infoData_=new D2,n.infoSyncTree_=new Rw({startListening:(r,s,a,u)=>{let h=[];const f=n.infoData_.getNode(r._path);return f.isEmpty()||(h=Ld(n.infoSyncTree_,r._path,f),setTimeout(()=>{u("ok")},0)),h},stopListening:()=>{}}),Xg(n,"connected",!1),n.serverSyncTree_=new Rw({startListening:(r,s,a,u)=>(n.server_.listen(r,a,s,(h,f)=>{const m=u(h,f);co(n.eventQueue_,r._path,m)}),[]),stopListening:(r,s)=>{n.server_.unlisten(r,s)}})}function jM(n){const t=n.infoData_.getNode(new rt(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function KC(n){return vM({timestamp:jM(n)})}function kw(n,e,t,r,s){n.dataUpdateCount++;const a=new rt(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let u=[];if(s)if(r){const f=Dh(t,m=>Zt(m));u=yM(n.serverSyncTree_,a,f,s)}else{const f=Zt(t);u=_M(n.serverSyncTree_,a,f,s)}else if(r){const f=Dh(t,m=>Zt(m));u=gM(n.serverSyncTree_,a,f)}else{const f=Zt(t);u=Ld(n.serverSyncTree_,a,f)}let h=a;u.length>0&&(h=Zg(n,a)),co(n.eventQueue_,h,u)}function Pw(n,e){Xg(n,"connected",e),e===!1&&$M(n)}function zM(n,e){$n(e,(t,r)=>{Xg(n,t,r)})}function Xg(n,e,t){const r=new rt("/.info/"+e),s=Zt(t);n.infoData_.updateSnapshot(r,s);const a=Ld(n.infoSyncTree_,r,s);co(n.eventQueue_,r,a)}function BM(n){return n.nextWriteId_++}function $M(n){QC(n,"onDisconnectEvents");const e=KC(n),t=rd();wm(n.onDisconnect_,Ge(),(s,a)=>{const u=TM(s,a,n.serverSyncTree_,e);TC(t,s,u)});let r=[];wm(t,Ge(),(s,a)=>{r=r.concat(Ld(n.serverSyncTree_,s,a));const u=GM(n,s);Zg(n,u)}),n.onDisconnect_=rd(),co(n.eventQueue_,Ge(),r)}function WM(n){n.persistentConnection_&&n.persistentConnection_.interrupt(MM)}function QC(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),Jt(t,...e)}function YC(n,e,t){return VC(n.serverSyncTree_,e,t)||$e.EMPTY_NODE}function Jg(n,e=n.transactionQueueTree_){if(e||Fd(n,e),Ba(e)){const t=JC(n,e);ie(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&qM(n,ju(e),t)}else WC(e)&&Vd(e,t=>{Jg(n,t)})}function qM(n,e,t){const r=t.map(m=>m.currentWriteId),s=YC(n,e,r);let a=s;const u=s.hash();for(let m=0;m<t.length;m++){const y=t[m];ie(y.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),y.status=1,y.retryCount++;const E=zn(e,y.path);a=a.updateChild(E,y.currentOutputSnapshotRaw)}const h=a.val(!0),f=e;n.server_.put(f.toString(),h,m=>{QC(n,"transaction put response",{path:f.toString(),status:m});let y=[];if(m==="ok"){const E=[];for(let T=0;T<t.length;T++)t[T].status=2,y=y.concat(pa(n.serverSyncTree_,t[T].currentWriteId)),t[T].onComplete&&E.push(()=>t[T].onComplete(null,!0,t[T].currentOutputSnapshotResolved)),t[T].unwatcher();Fd(n,Yg(n.transactionQueueTree_,e)),Jg(n,n.transactionQueueTree_),co(n.eventQueue_,e,y);for(let T=0;T<E.length;T++)Fu(E[T])}else{if(m==="datastale")for(let E=0;E<t.length;E++)t[E].status===3?t[E].status=4:t[E].status=0;else{Pn("transaction at "+f.toString()+" failed: "+m);for(let E=0;E<t.length;E++)t[E].status=4,t[E].abortReason=m}Zg(n,e)}},u)}function Zg(n,e){const t=XC(n,e),r=ju(t),s=JC(n,t);return HM(n,s,r),r}function HM(n,e,t){if(e.length===0)return;const r=[];let s=[];const u=e.filter(h=>h.status===0).map(h=>h.currentWriteId);for(let h=0;h<e.length;h++){const f=e[h],m=zn(t,f.path);let y=!1,E;if(ie(m!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),f.status===4)y=!0,E=f.abortReason,s=s.concat(pa(n.serverSyncTree_,f.currentWriteId,!0));else if(f.status===0)if(f.retryCount>=VM)y=!0,E="maxretry",s=s.concat(pa(n.serverSyncTree_,f.currentWriteId,!0));else{const T=YC(n,f.path,u);f.currentInputSnapshot=T;const R=e[h].update(T.val());if(R!==void 0){GC("transaction failed: Data returned ",R,f.path);let x=Zt(R);typeof R=="object"&&R!=null&&mi(R,".priority")||(x=x.updatePriority(T.getPriority()));const L=f.currentWriteId,q=KC(n),ee=IM(x,T,q);f.currentOutputSnapshotRaw=x,f.currentOutputSnapshotResolved=ee,f.currentWriteId=BM(n),u.splice(u.indexOf(L),1),s=s.concat(mM(n.serverSyncTree_,f.path,ee,f.currentWriteId,f.applyLocally)),s=s.concat(pa(n.serverSyncTree_,L,!0))}else y=!0,E="nodata",s=s.concat(pa(n.serverSyncTree_,f.currentWriteId,!0))}co(n.eventQueue_,t,s),s=[],y&&(e[h].status=2,function(T){setTimeout(T,Math.floor(0))}(e[h].unwatcher),e[h].onComplete&&(E==="nodata"?r.push(()=>e[h].onComplete(null,!1,e[h].currentInputSnapshot)):r.push(()=>e[h].onComplete(new Error(E),!1,null))))}Fd(n,n.transactionQueueTree_);for(let h=0;h<r.length;h++)Fu(r[h]);Jg(n,n.transactionQueueTree_)}function XC(n,e){let t,r=n.transactionQueueTree_;for(t=Ve(e);t!==null&&Ba(r)===void 0;)r=Yg(r,t),e=tt(e),t=Ve(e);return r}function JC(n,e){const t=[];return ZC(n,e,t),t.sort((r,s)=>r.order-s.order),t}function ZC(n,e,t){const r=Ba(e);if(r)for(let s=0;s<r.length;s++)t.push(r[s]);Vd(e,s=>{ZC(n,s,t)})}function Fd(n,e){const t=Ba(e);if(t){let r=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[r]=t[s],r++);t.length=r,$C(e,t.length>0?t:void 0)}Vd(e,r=>{Fd(n,r)})}function GM(n,e){const t=ju(XC(n,e)),r=Yg(n.transactionQueueTree_,e);return CM(r,s=>{Bp(n,s)}),Bp(n,r),qC(r,s=>{Bp(n,s)}),t}function Bp(n,e){const t=Ba(e);if(t){const r=[];let s=[],a=-1;for(let u=0;u<t.length;u++)t[u].status===3||(t[u].status===1?(ie(a===u-1,"All SENT items should be at beginning of queue."),a=u,t[u].status=3,t[u].abortReason="set"):(ie(t[u].status===0,"Unexpected transaction status in abort"),t[u].unwatcher(),s=s.concat(pa(n.serverSyncTree_,t[u].currentWriteId,!0)),t[u].onComplete&&r.push(t[u].onComplete.bind(null,new Error("set"),!1,null))));a===-1?$C(e,void 0):t.length=a+1,co(n.eventQueue_,ju(e),s);for(let u=0;u<r.length;u++)Fu(r[u])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KM(n){let e="";const t=n.split("/");for(let r=0;r<t.length;r++)if(t[r].length>0){let s=t[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function QM(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const r=t.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Pn(`Invalid query segment '${t}' in query '${n}'`)}return e}const Nw=function(n,e){const t=YM(n),r=t.namespace;t.domain==="firebase.com"&&di(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&t.domain!=="localhost"&&di("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||RL();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new rC(t.host,t.secure,r,s,e,"",r!==t.subdomain),path:new rt(t.pathString)}},YM=function(n){let e="",t="",r="",s="",a="",u=!0,h="https",f=443;if(typeof n=="string"){let m=n.indexOf("//");m>=0&&(h=n.substring(0,m-1),n=n.substring(m+2));let y=n.indexOf("/");y===-1&&(y=n.length);let E=n.indexOf("?");E===-1&&(E=n.length),e=n.substring(0,Math.min(y,E)),y<E&&(s=KM(n.substring(y,E)));const T=QM(n.substring(Math.min(n.length,E)));m=e.indexOf(":"),m>=0?(u=h==="https"||h==="wss",f=parseInt(e.substring(m+1),10)):m=e.length;const R=e.slice(0,m);if(R.toLowerCase()==="localhost")t="localhost";else if(R.split(".").length<=2)t=R;else{const x=e.indexOf(".");r=e.substring(0,x).toLowerCase(),t=e.substring(x+1),a=r}"ns"in T&&(a=T.ns)}return{host:e,port:f,domain:t,subdomain:r,secure:u,scheme:h,pathString:s,namespace:a}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(e,t,r,s){this._repo=e,this._path=t,this._queryParams=r,this._orderByCalled=s}get key(){return De(this._path)?null:dC(this._path)}get ref(){return new $a(this._repo,this._path)}get _queryIdentifier(){const e=mw(this._queryParams),t=Og(e);return t==="{}"?"default":t}get _queryObject(){return mw(this._queryParams)}isEqual(e){if(e=yt(e),!(e instanceof e_))return!1;const t=this._repo===e._repo,r=mC(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+l2(this._path)}}class $a extends e_{constructor(e,t){super(e,t,new jg,!1)}get parent(){const e=pC(this._path);return e===null?null:new $a(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}fM($a);pM($a);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XM="FIREBASE_DATABASE_EMULATOR_HOST",Pm={};let JM=!1;function ZM(n,e,t,r){n.repoInfo_=new rC(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),r&&(n.authTokenProvider_=r)}function eV(n,e,t,r,s){let a=r||n.options.databaseURL;a===void 0&&(n.options.projectId||di("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Jt("Using default host for project ",n.options.projectId),a=`${n.options.projectId}-default-rtdb.firebaseio.com`);let u=Nw(a,s),h=u.repoInfo,f;typeof process<"u"&&YE&&(f=YE[XM]),f?(a=`http://${f}?ns=${h.namespace}`,u=Nw(a,s),h=u.repoInfo):u.repoInfo.secure;const m=new ML(n.name,n.options,e);xM("Invalid Firebase Database URL",u),De(u.path)||di("Database URL must point to the root of a Firebase Database (not including a child path).");const y=nV(h,n,m,new LL(n.name,t));return new rV(y,n)}function tV(n,e){const t=Pm[e];(!t||t[n.key]!==n)&&di(`Database ${e}(${n.repoInfo_}) has already been deleted.`),WM(n),delete t[n.key]}function nV(n,e,t,r){let s=Pm[e.name];s||(s={},Pm[e.name]=s);let a=s[n.toURLString()];return a&&di("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),a=new FM(n,JM,t,r),s[n.toURLString()]=a,a}class rV{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(UM(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new $a(this._repo,Ge())),this._rootInternal}_delete(){return this._rootInternal!==null&&(tV(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&di("Cannot call "+e+" on a deleted database.")}}function iV(n=md(),e){const t=as(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const r=eT("database");r&&sV(t,...r)}return t}function sV(n,e,t,r={}){n=yt(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&di("Cannot call useEmulator() after instance has already been initialized.");const s=n._repoInternal;let a;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&di('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),a=new Ah(Ah.OWNER);else if(r.mockUserToken){const u=typeof r.mockUserToken=="string"?r.mockUserToken:rT(r.mockUserToken,n.app.options.projectId);a=new Ah(u)}ZM(s,e,t,a)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oV(n){EL(no),ur(new Bn("database",(e,{instanceIdentifier:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),a=e.getProvider("app-check-internal");return eV(r,s,a,t)},"PUBLIC").setMultipleInstances(!0)),yn(XE,JE,n),yn(XE,JE,"esm2017")}ai.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};ai.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};oV();const aV={apiKey:"AIzaSyD7C75E888J1jGCGbr5TDSDGq9FlLz9sYA",authDomain:"dm-chat-37348.firebaseapp.com",projectId:"dm-chat-37348",storageBucket:"dm-chat-37348.appspot.com",messagingSenderId:"933748009558",appId:"1:933748009558:web:13dd93d1cbfe989f4f29f7",measurementId:"G-8PKEXJ5XMH"},Ud=dT(aV),ad=eL(Ud);iV(Ud);$1(Ud);const fh=sb(Ud);let lV={data:""},uV=n=>typeof window=="object"?((n?n.querySelector("#_goober"):window._goober)||Object.assign((n||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:n||lV,cV=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,hV=/\/\*[^]*?\*\/|  +/g,xw=/\n+/g,Hi=(n,e)=>{let t="",r="",s="";for(let a in n){let u=n[a];a[0]=="@"?a[1]=="i"?t=a+" "+u+";":r+=a[1]=="f"?Hi(u,a):a+"{"+Hi(u,a[1]=="k"?"":e)+"}":typeof u=="object"?r+=Hi(u,e?e.replace(/([^,])+/g,h=>a.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,f=>/&/.test(f)?f.replace(/&/g,h):h?h+" "+f:f)):a):u!=null&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=Hi.p?Hi.p(a,u):a+":"+u+";")}return t+(e&&s?e+"{"+s+"}":s)+r},Jr={},e0=n=>{if(typeof n=="object"){let e="";for(let t in n)e+=t+e0(n[t]);return e}return n},dV=(n,e,t,r,s)=>{let a=e0(n),u=Jr[a]||(Jr[a]=(f=>{let m=0,y=11;for(;m<f.length;)y=101*y+f.charCodeAt(m++)>>>0;return"go"+y})(a));if(!Jr[u]){let f=a!==n?n:(m=>{let y,E,T=[{}];for(;y=cV.exec(m.replace(hV,""));)y[4]?T.shift():y[3]?(E=y[3].replace(xw," ").trim(),T.unshift(T[0][E]=T[0][E]||{})):T[0][y[1]]=y[2].replace(xw," ").trim();return T[0]})(n);Jr[u]=Hi(s?{["@keyframes "+u]:f}:f,t?"":"."+u)}let h=t&&Jr.g?Jr.g:null;return t&&(Jr.g=Jr[u]),((f,m,y,E)=>{E?m.data=m.data.replace(E,f):m.data.indexOf(f)===-1&&(m.data=y?f+m.data:m.data+f)})(Jr[u],e,r,h),u},fV=(n,e,t)=>n.reduce((r,s,a)=>{let u=e[a];if(u&&u.call){let h=u(t),f=h&&h.props&&h.props.className||/^go/.test(h)&&h;u=f?"."+f:h&&typeof h=="object"?h.props?"":Hi(h,""):h===!1?"":h}return r+s+(u??"")},"");function jd(n){let e=this||{},t=n.call?n(e.p):n;return dV(t.unshift?t.raw?fV(t,[].slice.call(arguments,1),e.p):t.reduce((r,s)=>Object.assign(r,s&&s.call?s(e.p):s),{}):t,uV(e.target),e.g,e.o,e.k)}let t0,Nm,xm;jd.bind({g:1});let fi=jd.bind({k:1});function pV(n,e,t,r){Hi.p=e,t0=n,Nm=t,xm=r}function cs(n,e){let t=this||{};return function(){let r=arguments;function s(a,u){let h=Object.assign({},a),f=h.className||s.className;t.p=Object.assign({theme:Nm&&Nm()},h),t.o=/ *go\d+/.test(f),h.className=jd.apply(t,r)+(f?" "+f:"");let m=n;return n[0]&&(m=h.as||n,delete h.as),xm&&m[0]&&xm(h),t0(m,h)}return s}}var mV=n=>typeof n=="function",ld=(n,e)=>mV(n)?n(e):n,gV=(()=>{let n=0;return()=>(++n).toString()})(),n0=(()=>{let n;return()=>{if(n===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");n=!e||e.matches}return n}})(),_V=20,r0=(n,e)=>{switch(e.type){case 0:return{...n,toasts:[e.toast,...n.toasts].slice(0,_V)};case 1:return{...n,toasts:n.toasts.map(a=>a.id===e.toast.id?{...a,...e.toast}:a)};case 2:let{toast:t}=e;return r0(n,{type:n.toasts.find(a=>a.id===t.id)?1:0,toast:t});case 3:let{toastId:r}=e;return{...n,toasts:n.toasts.map(a=>a.id===r||r===void 0?{...a,dismissed:!0,visible:!1}:a)};case 4:return e.toastId===void 0?{...n,toasts:[]}:{...n,toasts:n.toasts.filter(a=>a.id!==e.toastId)};case 5:return{...n,pausedAt:e.time};case 6:let s=e.time-(n.pausedAt||0);return{...n,pausedAt:void 0,toasts:n.toasts.map(a=>({...a,pauseDuration:a.pauseDuration+s}))}}},kh=[],Ph={toasts:[],pausedAt:void 0},ho=n=>{Ph=r0(Ph,n),kh.forEach(e=>{e(Ph)})},yV={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},vV=(n={})=>{let[e,t]=z.useState(Ph);z.useEffect(()=>(kh.push(t),()=>{let s=kh.indexOf(t);s>-1&&kh.splice(s,1)}),[e]);let r=e.toasts.map(s=>{var a,u,h;return{...n,...n[s.type],...s,removeDelay:s.removeDelay||((a=n[s.type])==null?void 0:a.removeDelay)||(n==null?void 0:n.removeDelay),duration:s.duration||((u=n[s.type])==null?void 0:u.duration)||(n==null?void 0:n.duration)||yV[s.type],style:{...n.style,...(h=n[s.type])==null?void 0:h.style,...s.style}}});return{...e,toasts:r}},EV=(n,e="blank",t)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:n,pauseDuration:0,...t,id:(t==null?void 0:t.id)||gV()}),zu=n=>(e,t)=>{let r=EV(e,n,t);return ho({type:2,toast:r}),r.id},an=(n,e)=>zu("blank")(n,e);an.error=zu("error");an.success=zu("success");an.loading=zu("loading");an.custom=zu("custom");an.dismiss=n=>{ho({type:3,toastId:n})};an.remove=n=>ho({type:4,toastId:n});an.promise=(n,e,t)=>{let r=an.loading(e.loading,{...t,...t==null?void 0:t.loading});return typeof n=="function"&&(n=n()),n.then(s=>{let a=e.success?ld(e.success,s):void 0;return a?an.success(a,{id:r,...t,...t==null?void 0:t.success}):an.dismiss(r),s}).catch(s=>{let a=e.error?ld(e.error,s):void 0;a?an.error(a,{id:r,...t,...t==null?void 0:t.error}):an.dismiss(r)}),n};var wV=(n,e)=>{ho({type:1,toast:{id:n,height:e}})},TV=()=>{ho({type:5,time:Date.now()})},uu=new Map,IV=1e3,SV=(n,e=IV)=>{if(uu.has(n))return;let t=setTimeout(()=>{uu.delete(n),ho({type:4,toastId:n})},e);uu.set(n,t)},CV=n=>{let{toasts:e,pausedAt:t}=vV(n);z.useEffect(()=>{if(t)return;let a=Date.now(),u=e.map(h=>{if(h.duration===1/0)return;let f=(h.duration||0)+h.pauseDuration-(a-h.createdAt);if(f<0){h.visible&&an.dismiss(h.id);return}return setTimeout(()=>an.dismiss(h.id),f)});return()=>{u.forEach(h=>h&&clearTimeout(h))}},[e,t]);let r=z.useCallback(()=>{t&&ho({type:6,time:Date.now()})},[t]),s=z.useCallback((a,u)=>{let{reverseOrder:h=!1,gutter:f=8,defaultPosition:m}=u||{},y=e.filter(R=>(R.position||m)===(a.position||m)&&R.height),E=y.findIndex(R=>R.id===a.id),T=y.filter((R,x)=>x<E&&R.visible).length;return y.filter(R=>R.visible).slice(...h?[T+1]:[0,T]).reduce((R,x)=>R+(x.height||0)+f,0)},[e]);return z.useEffect(()=>{e.forEach(a=>{if(a.dismissed)SV(a.id,a.removeDelay);else{let u=uu.get(a.id);u&&(clearTimeout(u),uu.delete(a.id))}})},[e]),{toasts:e,handlers:{updateHeight:wV,startPause:TV,endPause:r,calculateOffset:s}}},RV=fi`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,AV=fi`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,kV=fi`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,PV=cs("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${n=>n.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${RV} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${AV} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${n=>n.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${kV} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,NV=fi`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,xV=cs("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${n=>n.secondary||"#e0e0e0"};
  border-right-color: ${n=>n.primary||"#616161"};
  animation: ${NV} 1s linear infinite;
`,bV=fi`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,DV=fi`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,OV=cs("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${n=>n.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${bV} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${DV} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${n=>n.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,LV=cs("div")`
  position: absolute;
`,MV=cs("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,VV=fi`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,FV=cs("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${VV} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,UV=({toast:n})=>{let{icon:e,type:t,iconTheme:r}=n;return e!==void 0?typeof e=="string"?z.createElement(FV,null,e):e:t==="blank"?null:z.createElement(MV,null,z.createElement(xV,{...r}),t!=="loading"&&z.createElement(LV,null,t==="error"?z.createElement(PV,{...r}):z.createElement(OV,{...r})))},jV=n=>`
0% {transform: translate3d(0,${n*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,zV=n=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${n*-150}%,-1px) scale(.6); opacity:0;}
`,BV="0%{opacity:0;} 100%{opacity:1;}",$V="0%{opacity:1;} 100%{opacity:0;}",WV=cs("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,qV=cs("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,HV=(n,e)=>{let t=n.includes("top")?1:-1,[r,s]=n0()?[BV,$V]:[jV(t),zV(t)];return{animation:e?`${fi(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${fi(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},GV=z.memo(({toast:n,position:e,style:t,children:r})=>{let s=n.height?HV(n.position||e||"top-center",n.visible):{opacity:0},a=z.createElement(UV,{toast:n}),u=z.createElement(qV,{...n.ariaProps},ld(n.message,n));return z.createElement(WV,{className:n.className,style:{...s,...t,...n.style}},typeof r=="function"?r({icon:a,message:u}):z.createElement(z.Fragment,null,a,u))});pV(z.createElement);var KV=({id:n,className:e,style:t,onHeightUpdate:r,children:s})=>{let a=z.useCallback(u=>{if(u){let h=()=>{let f=u.getBoundingClientRect().height;r(n,f)};h(),new MutationObserver(h).observe(u,{subtree:!0,childList:!0,characterData:!0})}},[n,r]);return z.createElement("div",{ref:a,className:e,style:t},s)},QV=(n,e)=>{let t=n.includes("top"),r=t?{top:0}:{bottom:0},s=n.includes("center")?{justifyContent:"center"}:n.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:n0()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(t?1:-1)}px)`,...r,...s}},YV=jd`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ph=16,XV=({reverseOrder:n,position:e="top-center",toastOptions:t,gutter:r,children:s,containerStyle:a,containerClassName:u})=>{let{toasts:h,handlers:f}=CV(t);return z.createElement("div",{id:"_rht_toaster",style:{position:"fixed",zIndex:9999,top:ph,left:ph,right:ph,bottom:ph,pointerEvents:"none",...a},className:u,onMouseEnter:f.startPause,onMouseLeave:f.endPause},h.map(m=>{let y=m.position||e,E=f.calculateOffset(m,{reverseOrder:n,gutter:r,defaultPosition:e}),T=QV(y,E);return z.createElement(KV,{id:m.id,key:m.id,onHeightUpdate:f.updateHeight,className:m.visible?YV:"",style:T},m.type==="custom"?ld(m.message,m):s?s(m):z.createElement(GV,{toast:m,position:y}))}))},oa=an;const i0=z.createContext(),JV=({children:n})=>{const[e,t]=z.useState(null);z.useEffect(()=>{const u=GN(fh,h=>{t(h)});return()=>u()},[]);const r=async(u,h,f)=>{try{const y=(await $N(fh,u,h)).user;await jS(Yh(ad,"users"),{uid:y.uid,email:y.email,username:f}),oa.success("Registration Successful")}catch(m){throw oa.error(m.message),new Error(m.message)}},s=async(u,h)=>{try{await WN(fh,u,h),oa.success("Login Successful")}catch(f){throw oa.error(f.message),new Error(f.message)}},a=async()=>{try{await KN(fh),oa.success("Logout Successful")}catch(u){throw oa.error(u.message),new Error(u.message)}};return ne.jsx(i0.Provider,{value:{user:e,signup:r,login:s,logout:a},children:n})},zd=()=>z.useContext(i0),ZV=()=>{const[n,e]=z.useState(""),[t,r]=z.useState(""),[s,a]=z.useState(""),[u,h]=z.useState(null),{signup:f}=zd(),m=async y=>{y.preventDefault(),h(null);try{await f(t,s,n),r(""),a(""),e("")}catch(E){h(E.message)}};return ne.jsx("div",{className:"flex items-center justify-center min-h-screen bg-gray-100",children:ne.jsxs("form",{onSubmit:m,className:"bg-white p-8 rounded-lg shadow-md w-full max-w-sm",children:[ne.jsx("h2",{className:"text-2xl font-bold mb-6 text-center",children:"Create an Account"}),u&&ne.jsx("p",{className:"text-red-500 mb-4 text-center",children:u}),ne.jsx("input",{type:"text",placeholder:"Username",value:n,onChange:y=>e(y.target.value),required:!0,className:"border border-gray-300 p-3 mb-4 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"}),ne.jsx("input",{type:"email",placeholder:"Email",value:t,onChange:y=>r(y.target.value),required:!0,className:"border border-gray-300 p-3 mb-4 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"}),ne.jsx("input",{type:"password",placeholder:"Password",value:s,onChange:y=>a(y.target.value),required:!0,className:"border border-gray-300 p-3 mb-4 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"}),ne.jsx("button",{type:"submit",className:"bg-blue-500 text-white p-3 rounded w-full hover:bg-blue-600 transition duration-200",children:"Register"}),ne.jsxs("p",{className:"mt-4 text-center text-gray-600",children:["Already have an account? ",ne.jsx("a",{href:"/login",className:"text-blue-500 hover:underline",children:"Login"})]})]})})},eF=()=>{const[n,e]=z.useState(""),[t,r]=z.useState(""),[s,a]=z.useState(null),{login:u}=zd(),h=Om(),f=async m=>{m.preventDefault(),a(null);try{await u(n,t),e(""),r(""),h("/dashboard")}catch(y){a(y.message)}};return ne.jsx("div",{className:"flex items-center justify-center min-h-screen bg-gray-100",children:ne.jsxs("form",{onSubmit:f,className:"bg-white p-8 rounded-lg shadow-md w-full max-w-sm",children:[ne.jsx("h2",{className:"text-2xl font-bold mb-6 text-center",children:"Login"}),s&&ne.jsx("p",{className:"text-red-500 mb-4 text-center",children:s}),ne.jsx("input",{type:"email",placeholder:"Email",value:n,onChange:m=>e(m.target.value),required:!0,className:"border border-gray-300 p-3 mb-4 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"}),ne.jsx("input",{type:"password",placeholder:"Password",value:t,onChange:m=>r(m.target.value),required:!0,className:"border border-gray-300 p-3 mb-4 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"}),ne.jsx("button",{type:"submit",className:"bg-blue-500 text-white p-3 rounded w-full hover:bg-blue-600 transition duration-200",children:"Login"}),ne.jsxs("p",{className:"mt-4 text-center text-gray-600",children:["Don't have an account? ",ne.jsx("a",{href:"/register",className:"text-blue-500 hover:underline",children:"Register"})]})]})})},s0=({selectedUser:n,currentUser:e})=>{const[t,r]=z.useState([]),[s,a]=z.useState("");z.useEffect(()=>{if(n){const h=Yh(ad,"messages"),f=dL(h,fL("createdAt")),m=zS(f,y=>{const E=y.docs.map(T=>({id:T.id,...T.data()})).filter(T=>T.sender===(e==null?void 0:e.uid)&&T.receiver===(n==null?void 0:n.uid)||T.sender===(n==null?void 0:n.uid)&&T.receiver===(e==null?void 0:e.uid));r(E)});return()=>m()}},[n,e]);const u=async h=>{if(h.preventDefault(),!(s.trim()===""||!e||!n)){if(console.log("Current User ID:",e.uid),console.log("Selected User ID:",n.uid),!e.uid||!n.uid){console.error("User  ID is undefined");return}await jS(Yh(ad,"messages"),{text:s,sender:e.uid,receiver:n.uid,createdAt:new Date}),a("")}};return ne.jsxs("div",{className:"flex flex-col h-full",children:[ne.jsx("div",{className:"flex-grow overflow-y-auto p-4 bg-gray-50",children:t.map(h=>ne.jsx("div",{className:`mb-2 flex ${h.sender===(e==null?void 0:e.uid)?"justify-end":"justify-start"}`,children:ne.jsxs("div",{className:`max-w-xs p-2 rounded-lg ${h.sender===(e==null?void 0:e.uid)?"bg-blue-500 text-white":"bg-gray-300"}`,children:[ne.jsx("p",{className:"font-medium",children:h.sender===(e==null?void 0:e.uid)?"You":n.username}),ne.jsx("p",{children:h.text}),ne.jsx("span",{className:"text-xs text-gray-500",children:new Date(h.createdAt.seconds*1e3).toLocaleTimeString()})]})},h.id))}),ne.jsxs("form",{onSubmit:u,className:"flex p-2",children:[ne.jsx("input",{type:"text",value:s,onChange:h=>a(h.target.value),placeholder:"Type a message...",className:"border border-gray-300 p-2 flex-grow rounded"}),ne.jsx("button",{type:"submit",className:"bg-blue-500 text-white p-2 rounded ml-2",children:"Send"})]})]})},tF=()=>ne.jsx("div",{className:"flex items-center justify-center h-screen",children:ne.jsxs("div",{className:"bg-white p-6 rounded shadow-md w-100 text-center",children:[ne.jsx("h2",{className:"text-lg font-bold mb-4 ",children:"Welcome to the Chat App"}),ne.jsxs("div",{className:"space-y-4 py-4 ",children:[ne.jsx(Xl,{to:"/register",children:ne.jsx("button",{className:"bg-blue-500 text-white p-2 rounded w-full my-4",children:"Register"})}),ne.jsx(Xl,{to:"/login",children:ne.jsx("button",{className:"bg-green-500 text-white p-2 rounded w-full my-4",children:"Login"})}),ne.jsx(Xl,{to:"/message",children:ne.jsx("button",{className:"bg-purple-500 text-white p-2 rounded w-full my-4",children:"Message"})})]})]})});var o0={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},bw=Ws.createContext&&Ws.createContext(o0),nF=["attr","size","title"];function rF(n,e){if(n==null)return{};var t=iF(n,e),r,s;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(s=0;s<a.length;s++)r=a[s],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(t[r]=n[r])}return t}function iF(n,e){if(n==null)return{};var t={};for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){if(e.indexOf(r)>=0)continue;t[r]=n[r]}return t}function ud(){return ud=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},ud.apply(this,arguments)}function Dw(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(n,s).enumerable})),t.push.apply(t,r)}return t}function cd(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Dw(Object(t),!0).forEach(function(r){sF(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Dw(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function sF(n,e,t){return e=oF(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function oF(n){var e=aF(n,"string");return typeof e=="symbol"?e:e+""}function aF(n,e){if(typeof n!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function a0(n){return n&&n.map((e,t)=>Ws.createElement(e.tag,cd({key:t},e.attr),a0(e.child)))}function l0(n){return e=>Ws.createElement(lF,ud({attr:cd({},n.attr)},e),a0(n.child))}function lF(n){var e=t=>{var{attr:r,size:s,title:a}=n,u=rF(n,nF),h=s||t.size||"1em",f;return t.className&&(f=t.className),n.className&&(f=(f?f+" ":"")+n.className),Ws.createElement("svg",ud({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,u,{className:f,style:cd(cd({color:n.color||t.color},t.style),n.style),height:h,width:h,xmlns:"http://www.w3.org/2000/svg"}),a&&Ws.createElement("title",null,a),n.children)};return bw!==void 0?Ws.createElement(bw.Consumer,null,t=>e(t)):e(o0)}function uF(n){return l0({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"},child:[]}]})(n)}function cF(n){return l0({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"},child:[]}]})(n)}const hF=()=>{const{logout:n,user:e}=zd(),[t,r]=z.useState(!1),s=()=>{r(!t)};return ne.jsxs("header",{className:"bg-blue-500 text-white p-4 flex justify-between items-center",children:[ne.jsx("h1",{className:"text-xl font-bold",children:"Chat Application"}),ne.jsxs("div",{className:"flex items-center",children:[ne.jsx("button",{className:"relative mr-4",children:ne.jsx(uF,{className:"text-white text-2xl"})}),ne.jsxs("div",{className:"relative",children:[ne.jsxs("button",{onClick:s,className:"flex items-center",children:[ne.jsx(cF,{className:"text-white text-2xl mr-2"}),ne.jsx("span",{children:e?e.email:"Guest"})," "]}),t&&ne.jsx("div",{className:"absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg z-10",children:ne.jsx("ul",{children:ne.jsx("li",{className:"px-4 py-2 hover:bg-gray-200 cursor-pointer",onClick:n,children:"Logout"})})})]})]})]})},dF=({setSelectedUser:n})=>{const[e,t]=z.useState([]);return z.useEffect(()=>{const r=zS(Yh(ad,"users"),s=>{const a=s.docs.map(u=>({id:u.id,...u.data()}));t(a)});return()=>r()},[]),ne.jsxs("div",{className:"p-4 w-1/4 bg-gray-100",children:[ne.jsx("h1",{className:"text-2xl font-bold mb-4",children:"User  List"}),ne.jsx("ul",{className:"space-y-2",children:e.map(r=>ne.jsx("li",{className:"p-2 bg-gray-200 rounded-lg cursor-pointer hover:bg-gray-300",onClick:()=>n(r),children:ne.jsx("span",{className:"font-medium",children:r.email})},r.id))})]})},fF=()=>{const{user:n}=zd(),[e,t]=z.useState(null),r=Om();return z.useEffect(()=>{console.log("user",n),n||r("/login")},[n,r]),ne.jsxs("div",{className:"flex flex-col h-screen",children:[ne.jsx(hF,{})," ",ne.jsxs("div",{className:"flex flex-grow",children:[ne.jsx(dF,{setSelectedUser:t}),ne.jsx("div",{className:"flex-grow",children:e?ne.jsx(s0,{selectedUser:e,currentUser:n}):ne.jsx("div",{className:"flex items-center justify-center h-full",children:ne.jsx("h2",{className:"text-xl",children:"Select a user to start chatting"})})})]})]})};function pF(){return ne.jsx(LA,{children:ne.jsxs(hA,{children:[ne.jsx(aa,{path:"/",element:ne.jsx(tF,{})}),ne.jsx(aa,{path:"/register",element:ne.jsx(ZV,{})}),ne.jsx(aa,{path:"/login",element:ne.jsx(eF,{})}),ne.jsx(aa,{path:"/message",element:ne.jsx(s0,{})}),ne.jsx(aa,{path:"/dashboard",element:ne.jsx(fF,{})})]})})}wR.createRoot(document.getElementById("root")).render(ne.jsxs(JV,{children:[ne.jsx(pF,{}),ne.jsx(XV,{})]}));
