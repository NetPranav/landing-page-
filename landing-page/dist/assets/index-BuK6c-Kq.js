var iE=Object.defineProperty;var Qg=n=>{throw TypeError(n)};var rE=(n,e,t)=>e in n?iE(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var dt=(n,e,t)=>rE(n,typeof e!="symbol"?e+"":e,t),Wf=(n,e,t)=>e.has(n)||Qg("Cannot "+t);var et=(n,e,t)=>(Wf(n,e,"read from private field"),t?t.call(n):e.get(n)),Ln=(n,e,t)=>e.has(n)?Qg("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(n):e.set(n,t),Bi=(n,e,t,i)=>(Wf(n,e,"write to private field"),i?i.call(n,t):e.set(n,t),t),wt=(n,e,t)=>(Wf(n,e,"access private method"),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function sE(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var kv={exports:{}},_f={},Bv={exports:{}},$e={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ru=Symbol.for("react.element"),oE=Symbol.for("react.portal"),aE=Symbol.for("react.fragment"),lE=Symbol.for("react.strict_mode"),uE=Symbol.for("react.profiler"),cE=Symbol.for("react.provider"),fE=Symbol.for("react.context"),dE=Symbol.for("react.forward_ref"),hE=Symbol.for("react.suspense"),pE=Symbol.for("react.memo"),mE=Symbol.for("react.lazy"),Jg=Symbol.iterator;function gE(n){return n===null||typeof n!="object"?null:(n=Jg&&n[Jg]||n["@@iterator"],typeof n=="function"?n:null)}var zv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Vv=Object.assign,Gv={};function Da(n,e,t){this.props=n,this.context=e,this.refs=Gv,this.updater=t||zv}Da.prototype.isReactComponent={};Da.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};Da.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function Hv(){}Hv.prototype=Da.prototype;function cm(n,e,t){this.props=n,this.context=e,this.refs=Gv,this.updater=t||zv}var fm=cm.prototype=new Hv;fm.constructor=cm;Vv(fm,Da.prototype);fm.isPureReactComponent=!0;var e_=Array.isArray,Wv=Object.prototype.hasOwnProperty,dm={current:null},Xv={key:!0,ref:!0,__self:!0,__source:!0};function Yv(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Wv.call(e,i)&&!Xv.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ru,type:n,key:s,ref:o,props:r,_owner:dm.current}}function _E(n,e){return{$$typeof:ru,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function hm(n){return typeof n=="object"&&n!==null&&n.$$typeof===ru}function vE(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var t_=/\/+/g;function Xf(n,e){return typeof n=="object"&&n!==null&&n.key!=null?vE(""+n.key):e.toString(36)}function rc(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case ru:case oE:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Xf(o,0):i,e_(r)?(t="",n!=null&&(t=n.replace(t_,"$&/")+"/"),rc(r,e,t,"",function(u){return u})):r!=null&&(hm(r)&&(r=_E(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(t_,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",e_(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Xf(s,a);o+=rc(s,e,t,l,r)}else if(l=gE(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Xf(s,a++),o+=rc(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function hu(n,e,t){if(n==null)return n;var i=[],r=0;return rc(n,i,"","",function(s){return e.call(t,s,r++)}),i}function xE(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var Pn={current:null},sc={transition:null},yE={ReactCurrentDispatcher:Pn,ReactCurrentBatchConfig:sc,ReactCurrentOwner:dm};function jv(){throw Error("act(...) is not supported in production builds of React.")}$e.Children={map:hu,forEach:function(n,e,t){hu(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return hu(n,function(){e++}),e},toArray:function(n){return hu(n,function(e){return e})||[]},only:function(n){if(!hm(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};$e.Component=Da;$e.Fragment=aE;$e.Profiler=uE;$e.PureComponent=cm;$e.StrictMode=lE;$e.Suspense=hE;$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yE;$e.act=jv;$e.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=Vv({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=dm.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)Wv.call(e,l)&&!Xv.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:ru,type:n.type,key:r,ref:s,props:i,_owner:o}};$e.createContext=function(n){return n={$$typeof:fE,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:cE,_context:n},n.Consumer=n};$e.createElement=Yv;$e.createFactory=function(n){var e=Yv.bind(null,n);return e.type=n,e};$e.createRef=function(){return{current:null}};$e.forwardRef=function(n){return{$$typeof:dE,render:n}};$e.isValidElement=hm;$e.lazy=function(n){return{$$typeof:mE,_payload:{_status:-1,_result:n},_init:xE}};$e.memo=function(n,e){return{$$typeof:pE,type:n,compare:e===void 0?null:e}};$e.startTransition=function(n){var e=sc.transition;sc.transition={};try{n()}finally{sc.transition=e}};$e.unstable_act=jv;$e.useCallback=function(n,e){return Pn.current.useCallback(n,e)};$e.useContext=function(n){return Pn.current.useContext(n)};$e.useDebugValue=function(){};$e.useDeferredValue=function(n){return Pn.current.useDeferredValue(n)};$e.useEffect=function(n,e){return Pn.current.useEffect(n,e)};$e.useId=function(){return Pn.current.useId()};$e.useImperativeHandle=function(n,e,t){return Pn.current.useImperativeHandle(n,e,t)};$e.useInsertionEffect=function(n,e){return Pn.current.useInsertionEffect(n,e)};$e.useLayoutEffect=function(n,e){return Pn.current.useLayoutEffect(n,e)};$e.useMemo=function(n,e){return Pn.current.useMemo(n,e)};$e.useReducer=function(n,e,t){return Pn.current.useReducer(n,e,t)};$e.useRef=function(n){return Pn.current.useRef(n)};$e.useState=function(n){return Pn.current.useState(n)};$e.useSyncExternalStore=function(n,e,t){return Pn.current.useSyncExternalStore(n,e,t)};$e.useTransition=function(){return Pn.current.useTransition()};$e.version="18.3.1";Bv.exports=$e;var js=Bv.exports;const rh=sE(js);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var SE=js,ME=Symbol.for("react.element"),EE=Symbol.for("react.fragment"),TE=Object.prototype.hasOwnProperty,wE=SE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,AE={key:!0,ref:!0,__self:!0,__source:!0};function qv(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)TE.call(e,i)&&!AE.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:ME,type:n,key:s,ref:o,props:r,_owner:wE.current}}_f.Fragment=EE;_f.jsx=qv;_f.jsxs=qv;kv.exports=_f;var ot=kv.exports,sh={},$v={exports:{}},li={},Kv={exports:{}},Zv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(F,X){var Q=F.length;F.push(X);e:for(;0<Q;){var re=Q-1>>>1,ce=F[re];if(0<r(ce,X))F[re]=X,F[Q]=ce,Q=re;else break e}}function t(F){return F.length===0?null:F[0]}function i(F){if(F.length===0)return null;var X=F[0],Q=F.pop();if(Q!==X){F[0]=Q;e:for(var re=0,ce=F.length,Oe=ce>>>1;re<Oe;){var Le=2*(re+1)-1,Ae=F[Le],$=Le+1,pe=F[$];if(0>r(Ae,Q))$<ce&&0>r(pe,Ae)?(F[re]=pe,F[$]=Q,re=$):(F[re]=Ae,F[Le]=Q,re=Le);else if($<ce&&0>r(pe,Q))F[re]=pe,F[$]=Q,re=$;else break e}}return X}function r(F,X){var Q=F.sortIndex-X.sortIndex;return Q!==0?Q:F.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,p=!1,_=!1,v=!1,g=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(F){for(var X=t(u);X!==null;){if(X.callback===null)i(u);else if(X.startTime<=F)i(u),X.sortIndex=X.expirationTime,e(l,X);else break;X=t(u)}}function S(F){if(v=!1,x(F),!_)if(t(l)!==null)_=!0,z(T);else{var X=t(u);X!==null&&N(S,X.startTime-F)}}function T(F,X){_=!1,v&&(v=!1,h(y),y=-1),p=!0;var Q=f;try{for(x(X),d=t(l);d!==null&&(!(d.expirationTime>X)||F&&!P());){var re=d.callback;if(typeof re=="function"){d.callback=null,f=d.priorityLevel;var ce=re(d.expirationTime<=X);X=n.unstable_now(),typeof ce=="function"?d.callback=ce:d===t(l)&&i(l),x(X)}else i(l);d=t(l)}if(d!==null)var Oe=!0;else{var Le=t(u);Le!==null&&N(S,Le.startTime-X),Oe=!1}return Oe}finally{d=null,f=Q,p=!1}}var E=!1,A=null,y=-1,C=5,b=-1;function P(){return!(n.unstable_now()-b<C)}function U(){if(A!==null){var F=n.unstable_now();b=F;var X=!0;try{X=A(!0,F)}finally{X?H():(E=!1,A=null)}}else E=!1}var H;if(typeof m=="function")H=function(){m(U)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,L=j.port2;j.port1.onmessage=U,H=function(){L.postMessage(null)}}else H=function(){g(U,0)};function z(F){A=F,E||(E=!0,H())}function N(F,X){y=g(function(){F(n.unstable_now())},X)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(F){F.callback=null},n.unstable_continueExecution=function(){_||p||(_=!0,z(T))},n.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<F?Math.floor(1e3/F):5},n.unstable_getCurrentPriorityLevel=function(){return f},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(F){switch(f){case 1:case 2:case 3:var X=3;break;default:X=f}var Q=f;f=X;try{return F()}finally{f=Q}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(F,X){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var Q=f;f=F;try{return X()}finally{f=Q}},n.unstable_scheduleCallback=function(F,X,Q){var re=n.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?re+Q:re):Q=re,F){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=Q+ce,F={id:c++,callback:X,priorityLevel:F,startTime:Q,expirationTime:ce,sortIndex:-1},Q>re?(F.sortIndex=Q,e(u,F),t(l)===null&&F===t(u)&&(v?(h(y),y=-1):v=!0,N(S,Q-re))):(F.sortIndex=ce,e(l,F),_||p||(_=!0,z(T))),F},n.unstable_shouldYield=P,n.unstable_wrapCallback=function(F){var X=f;return function(){var Q=f;f=X;try{return F.apply(this,arguments)}finally{f=Q}}}})(Zv);Kv.exports=Zv;var CE=Kv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var RE=js,si=CE;function ie(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Qv=new Set,Rl={};function ao(n,e){ma(n,e),ma(n+"Capture",e)}function ma(n,e){for(Rl[n]=e,n=0;n<e.length;n++)Qv.add(e[n])}var Tr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),oh=Object.prototype.hasOwnProperty,bE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,n_={},i_={};function PE(n){return oh.call(i_,n)?!0:oh.call(n_,n)?!1:bE.test(n)?i_[n]=!0:(n_[n]=!0,!1)}function DE(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function LE(n,e,t,i){if(e===null||typeof e>"u"||DE(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Dn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var un={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){un[n]=new Dn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];un[e]=new Dn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){un[n]=new Dn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){un[n]=new Dn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){un[n]=new Dn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){un[n]=new Dn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){un[n]=new Dn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){un[n]=new Dn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){un[n]=new Dn(n,5,!1,n.toLowerCase(),null,!1,!1)});var pm=/[\-:]([a-z])/g;function mm(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(pm,mm);un[e]=new Dn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(pm,mm);un[e]=new Dn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(pm,mm);un[e]=new Dn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){un[n]=new Dn(n,1,!1,n.toLowerCase(),null,!1,!1)});un.xlinkHref=new Dn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){un[n]=new Dn(n,1,!1,n.toLowerCase(),null,!0,!0)});function gm(n,e,t,i){var r=un.hasOwnProperty(e)?un[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(LE(e,t,r,i)&&(t=null),i||r===null?PE(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Ir=RE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,pu=Symbol.for("react.element"),Uo=Symbol.for("react.portal"),Fo=Symbol.for("react.fragment"),_m=Symbol.for("react.strict_mode"),ah=Symbol.for("react.profiler"),Jv=Symbol.for("react.provider"),ex=Symbol.for("react.context"),vm=Symbol.for("react.forward_ref"),lh=Symbol.for("react.suspense"),uh=Symbol.for("react.suspense_list"),xm=Symbol.for("react.memo"),Wr=Symbol.for("react.lazy"),tx=Symbol.for("react.offscreen"),r_=Symbol.iterator;function Ba(n){return n===null||typeof n!="object"?null:(n=r_&&n[r_]||n["@@iterator"],typeof n=="function"?n:null)}var Nt=Object.assign,Yf;function il(n){if(Yf===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Yf=e&&e[1]||""}return`
`+Yf+n}var jf=!1;function qf(n,e){if(!n||jf)return"";jf=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{jf=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?il(n):""}function IE(n){switch(n.tag){case 5:return il(n.type);case 16:return il("Lazy");case 13:return il("Suspense");case 19:return il("SuspenseList");case 0:case 2:case 15:return n=qf(n.type,!1),n;case 11:return n=qf(n.type.render,!1),n;case 1:return n=qf(n.type,!0),n;default:return""}}function ch(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Fo:return"Fragment";case Uo:return"Portal";case ah:return"Profiler";case _m:return"StrictMode";case lh:return"Suspense";case uh:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case ex:return(n.displayName||"Context")+".Consumer";case Jv:return(n._context.displayName||"Context")+".Provider";case vm:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case xm:return e=n.displayName||null,e!==null?e:ch(n.type)||"Memo";case Wr:e=n._payload,n=n._init;try{return ch(n(e))}catch{}}return null}function NE(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ch(e);case 8:return e===_m?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ms(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function nx(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function UE(n){var e=nx(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function mu(n){n._valueTracker||(n._valueTracker=UE(n))}function ix(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=nx(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Rc(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function fh(n,e){var t=e.checked;return Nt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function s_(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=ms(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function rx(n,e){e=e.checked,e!=null&&gm(n,"checked",e,!1)}function dh(n,e){rx(n,e);var t=ms(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?hh(n,e.type,t):e.hasOwnProperty("defaultValue")&&hh(n,e.type,ms(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function o_(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function hh(n,e,t){(e!=="number"||Rc(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var rl=Array.isArray;function Zo(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+ms(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function ph(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ie(91));return Nt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function a_(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(ie(92));if(rl(t)){if(1<t.length)throw Error(ie(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:ms(t)}}function sx(n,e){var t=ms(e.value),i=ms(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function l_(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function ox(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function mh(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?ox(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var gu,ax=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(gu=gu||document.createElement("div"),gu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=gu.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function bl(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var fl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},FE=["Webkit","ms","Moz","O"];Object.keys(fl).forEach(function(n){FE.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),fl[e]=fl[n]})});function lx(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||fl.hasOwnProperty(n)&&fl[n]?(""+e).trim():e+"px"}function ux(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=lx(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var OE=Nt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gh(n,e){if(e){if(OE[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ie(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ie(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ie(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ie(62))}}function _h(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vh=null;function ym(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var xh=null,Qo=null,Jo=null;function u_(n){if(n=au(n)){if(typeof xh!="function")throw Error(ie(280));var e=n.stateNode;e&&(e=Mf(e),xh(n.stateNode,n.type,e))}}function cx(n){Qo?Jo?Jo.push(n):Jo=[n]:Qo=n}function fx(){if(Qo){var n=Qo,e=Jo;if(Jo=Qo=null,u_(n),e)for(n=0;n<e.length;n++)u_(e[n])}}function dx(n,e){return n(e)}function hx(){}var $f=!1;function px(n,e,t){if($f)return n(e,t);$f=!0;try{return dx(n,e,t)}finally{$f=!1,(Qo!==null||Jo!==null)&&(hx(),fx())}}function Pl(n,e){var t=n.stateNode;if(t===null)return null;var i=Mf(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(ie(231,e,typeof t));return t}var yh=!1;if(Tr)try{var za={};Object.defineProperty(za,"passive",{get:function(){yh=!0}}),window.addEventListener("test",za,za),window.removeEventListener("test",za,za)}catch{yh=!1}function kE(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var dl=!1,bc=null,Pc=!1,Sh=null,BE={onError:function(n){dl=!0,bc=n}};function zE(n,e,t,i,r,s,o,a,l){dl=!1,bc=null,kE.apply(BE,arguments)}function VE(n,e,t,i,r,s,o,a,l){if(zE.apply(this,arguments),dl){if(dl){var u=bc;dl=!1,bc=null}else throw Error(ie(198));Pc||(Pc=!0,Sh=u)}}function lo(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function mx(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function c_(n){if(lo(n)!==n)throw Error(ie(188))}function GE(n){var e=n.alternate;if(!e){if(e=lo(n),e===null)throw Error(ie(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return c_(r),n;if(s===i)return c_(r),e;s=s.sibling}throw Error(ie(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(ie(189))}}if(t.alternate!==i)throw Error(ie(190))}if(t.tag!==3)throw Error(ie(188));return t.stateNode.current===t?n:e}function gx(n){return n=GE(n),n!==null?_x(n):null}function _x(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=_x(n);if(e!==null)return e;n=n.sibling}return null}var vx=si.unstable_scheduleCallback,f_=si.unstable_cancelCallback,HE=si.unstable_shouldYield,WE=si.unstable_requestPaint,Gt=si.unstable_now,XE=si.unstable_getCurrentPriorityLevel,Sm=si.unstable_ImmediatePriority,xx=si.unstable_UserBlockingPriority,Dc=si.unstable_NormalPriority,YE=si.unstable_LowPriority,yx=si.unstable_IdlePriority,vf=null,Qi=null;function jE(n){if(Qi&&typeof Qi.onCommitFiberRoot=="function")try{Qi.onCommitFiberRoot(vf,n,void 0,(n.current.flags&128)===128)}catch{}}var Ni=Math.clz32?Math.clz32:KE,qE=Math.log,$E=Math.LN2;function KE(n){return n>>>=0,n===0?32:31-(qE(n)/$E|0)|0}var _u=64,vu=4194304;function sl(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Lc(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=sl(a):(s&=o,s!==0&&(i=sl(s)))}else o=t&~r,o!==0?i=sl(o):s!==0&&(i=sl(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-Ni(e),r=1<<t,i|=n[t],e&=~r;return i}function ZE(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function QE(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-Ni(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=ZE(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function Mh(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Sx(){var n=_u;return _u<<=1,!(_u&4194240)&&(_u=64),n}function Kf(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function su(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-Ni(e),n[e]=t}function JE(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-Ni(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function Mm(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-Ni(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var ct=0;function Mx(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Ex,Em,Tx,wx,Ax,Eh=!1,xu=[],ss=null,os=null,as=null,Dl=new Map,Ll=new Map,jr=[],e1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function d_(n,e){switch(n){case"focusin":case"focusout":ss=null;break;case"dragenter":case"dragleave":os=null;break;case"mouseover":case"mouseout":as=null;break;case"pointerover":case"pointerout":Dl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ll.delete(e.pointerId)}}function Va(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=au(e),e!==null&&Em(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function t1(n,e,t,i,r){switch(e){case"focusin":return ss=Va(ss,n,e,t,i,r),!0;case"dragenter":return os=Va(os,n,e,t,i,r),!0;case"mouseover":return as=Va(as,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return Dl.set(s,Va(Dl.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ll.set(s,Va(Ll.get(s)||null,n,e,t,i,r)),!0}return!1}function Cx(n){var e=Bs(n.target);if(e!==null){var t=lo(e);if(t!==null){if(e=t.tag,e===13){if(e=mx(t),e!==null){n.blockedOn=e,Ax(n.priority,function(){Tx(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function oc(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Th(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);vh=i,t.target.dispatchEvent(i),vh=null}else return e=au(t),e!==null&&Em(e),n.blockedOn=t,!1;e.shift()}return!0}function h_(n,e,t){oc(n)&&t.delete(e)}function n1(){Eh=!1,ss!==null&&oc(ss)&&(ss=null),os!==null&&oc(os)&&(os=null),as!==null&&oc(as)&&(as=null),Dl.forEach(h_),Ll.forEach(h_)}function Ga(n,e){n.blockedOn===e&&(n.blockedOn=null,Eh||(Eh=!0,si.unstable_scheduleCallback(si.unstable_NormalPriority,n1)))}function Il(n){function e(r){return Ga(r,n)}if(0<xu.length){Ga(xu[0],n);for(var t=1;t<xu.length;t++){var i=xu[t];i.blockedOn===n&&(i.blockedOn=null)}}for(ss!==null&&Ga(ss,n),os!==null&&Ga(os,n),as!==null&&Ga(as,n),Dl.forEach(e),Ll.forEach(e),t=0;t<jr.length;t++)i=jr[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<jr.length&&(t=jr[0],t.blockedOn===null);)Cx(t),t.blockedOn===null&&jr.shift()}var ea=Ir.ReactCurrentBatchConfig,Ic=!0;function i1(n,e,t,i){var r=ct,s=ea.transition;ea.transition=null;try{ct=1,Tm(n,e,t,i)}finally{ct=r,ea.transition=s}}function r1(n,e,t,i){var r=ct,s=ea.transition;ea.transition=null;try{ct=4,Tm(n,e,t,i)}finally{ct=r,ea.transition=s}}function Tm(n,e,t,i){if(Ic){var r=Th(n,e,t,i);if(r===null)od(n,e,i,Nc,t),d_(n,i);else if(t1(r,n,e,t,i))i.stopPropagation();else if(d_(n,i),e&4&&-1<e1.indexOf(n)){for(;r!==null;){var s=au(r);if(s!==null&&Ex(s),s=Th(n,e,t,i),s===null&&od(n,e,i,Nc,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else od(n,e,i,null,t)}}var Nc=null;function Th(n,e,t,i){if(Nc=null,n=ym(i),n=Bs(n),n!==null)if(e=lo(n),e===null)n=null;else if(t=e.tag,t===13){if(n=mx(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Nc=n,null}function Rx(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(XE()){case Sm:return 1;case xx:return 4;case Dc:case YE:return 16;case yx:return 536870912;default:return 16}default:return 16}}var Zr=null,wm=null,ac=null;function bx(){if(ac)return ac;var n,e=wm,t=e.length,i,r="value"in Zr?Zr.value:Zr.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return ac=r.slice(n,1<i?1-i:void 0)}function lc(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function yu(){return!0}function p_(){return!1}function ui(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?yu:p_,this.isPropagationStopped=p_,this}return Nt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=yu)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=yu)},persist:function(){},isPersistent:yu}),e}var La={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Am=ui(La),ou=Nt({},La,{view:0,detail:0}),s1=ui(ou),Zf,Qf,Ha,xf=Nt({},ou,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cm,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ha&&(Ha&&n.type==="mousemove"?(Zf=n.screenX-Ha.screenX,Qf=n.screenY-Ha.screenY):Qf=Zf=0,Ha=n),Zf)},movementY:function(n){return"movementY"in n?n.movementY:Qf}}),m_=ui(xf),o1=Nt({},xf,{dataTransfer:0}),a1=ui(o1),l1=Nt({},ou,{relatedTarget:0}),Jf=ui(l1),u1=Nt({},La,{animationName:0,elapsedTime:0,pseudoElement:0}),c1=ui(u1),f1=Nt({},La,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),d1=ui(f1),h1=Nt({},La,{data:0}),g_=ui(h1),p1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},m1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},g1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _1(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=g1[n])?!!e[n]:!1}function Cm(){return _1}var v1=Nt({},ou,{key:function(n){if(n.key){var e=p1[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=lc(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?m1[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cm,charCode:function(n){return n.type==="keypress"?lc(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?lc(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),x1=ui(v1),y1=Nt({},xf,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),__=ui(y1),S1=Nt({},ou,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cm}),M1=ui(S1),E1=Nt({},La,{propertyName:0,elapsedTime:0,pseudoElement:0}),T1=ui(E1),w1=Nt({},xf,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),A1=ui(w1),C1=[9,13,27,32],Rm=Tr&&"CompositionEvent"in window,hl=null;Tr&&"documentMode"in document&&(hl=document.documentMode);var R1=Tr&&"TextEvent"in window&&!hl,Px=Tr&&(!Rm||hl&&8<hl&&11>=hl),v_=" ",x_=!1;function Dx(n,e){switch(n){case"keyup":return C1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lx(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Oo=!1;function b1(n,e){switch(n){case"compositionend":return Lx(e);case"keypress":return e.which!==32?null:(x_=!0,v_);case"textInput":return n=e.data,n===v_&&x_?null:n;default:return null}}function P1(n,e){if(Oo)return n==="compositionend"||!Rm&&Dx(n,e)?(n=bx(),ac=wm=Zr=null,Oo=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Px&&e.locale!=="ko"?null:e.data;default:return null}}var D1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function y_(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!D1[n.type]:e==="textarea"}function Ix(n,e,t,i){cx(i),e=Uc(e,"onChange"),0<e.length&&(t=new Am("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var pl=null,Nl=null;function L1(n){Wx(n,0)}function yf(n){var e=zo(n);if(ix(e))return n}function I1(n,e){if(n==="change")return e}var Nx=!1;if(Tr){var ed;if(Tr){var td="oninput"in document;if(!td){var S_=document.createElement("div");S_.setAttribute("oninput","return;"),td=typeof S_.oninput=="function"}ed=td}else ed=!1;Nx=ed&&(!document.documentMode||9<document.documentMode)}function M_(){pl&&(pl.detachEvent("onpropertychange",Ux),Nl=pl=null)}function Ux(n){if(n.propertyName==="value"&&yf(Nl)){var e=[];Ix(e,Nl,n,ym(n)),px(L1,e)}}function N1(n,e,t){n==="focusin"?(M_(),pl=e,Nl=t,pl.attachEvent("onpropertychange",Ux)):n==="focusout"&&M_()}function U1(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return yf(Nl)}function F1(n,e){if(n==="click")return yf(e)}function O1(n,e){if(n==="input"||n==="change")return yf(e)}function k1(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Oi=typeof Object.is=="function"?Object.is:k1;function Ul(n,e){if(Oi(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!oh.call(e,r)||!Oi(n[r],e[r]))return!1}return!0}function E_(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function T_(n,e){var t=E_(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=E_(t)}}function Fx(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Fx(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Ox(){for(var n=window,e=Rc();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Rc(n.document)}return e}function bm(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function B1(n){var e=Ox(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&Fx(t.ownerDocument.documentElement,t)){if(i!==null&&bm(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=T_(t,s);var o=T_(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var z1=Tr&&"documentMode"in document&&11>=document.documentMode,ko=null,wh=null,ml=null,Ah=!1;function w_(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Ah||ko==null||ko!==Rc(i)||(i=ko,"selectionStart"in i&&bm(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ml&&Ul(ml,i)||(ml=i,i=Uc(wh,"onSelect"),0<i.length&&(e=new Am("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=ko)))}function Su(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Bo={animationend:Su("Animation","AnimationEnd"),animationiteration:Su("Animation","AnimationIteration"),animationstart:Su("Animation","AnimationStart"),transitionend:Su("Transition","TransitionEnd")},nd={},kx={};Tr&&(kx=document.createElement("div").style,"AnimationEvent"in window||(delete Bo.animationend.animation,delete Bo.animationiteration.animation,delete Bo.animationstart.animation),"TransitionEvent"in window||delete Bo.transitionend.transition);function Sf(n){if(nd[n])return nd[n];if(!Bo[n])return n;var e=Bo[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in kx)return nd[n]=e[t];return n}var Bx=Sf("animationend"),zx=Sf("animationiteration"),Vx=Sf("animationstart"),Gx=Sf("transitionend"),Hx=new Map,A_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ss(n,e){Hx.set(n,e),ao(e,[n])}for(var id=0;id<A_.length;id++){var rd=A_[id],V1=rd.toLowerCase(),G1=rd[0].toUpperCase()+rd.slice(1);Ss(V1,"on"+G1)}Ss(Bx,"onAnimationEnd");Ss(zx,"onAnimationIteration");Ss(Vx,"onAnimationStart");Ss("dblclick","onDoubleClick");Ss("focusin","onFocus");Ss("focusout","onBlur");Ss(Gx,"onTransitionEnd");ma("onMouseEnter",["mouseout","mouseover"]);ma("onMouseLeave",["mouseout","mouseover"]);ma("onPointerEnter",["pointerout","pointerover"]);ma("onPointerLeave",["pointerout","pointerover"]);ao("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ao("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ao("onBeforeInput",["compositionend","keypress","textInput","paste"]);ao("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ao("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ao("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ol="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),H1=new Set("cancel close invalid load scroll toggle".split(" ").concat(ol));function C_(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,VE(i,e,void 0,n),n.currentTarget=null}function Wx(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;C_(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;C_(r,a,u),s=l}}}if(Pc)throw n=Sh,Pc=!1,Sh=null,n}function yt(n,e){var t=e[Dh];t===void 0&&(t=e[Dh]=new Set);var i=n+"__bubble";t.has(i)||(Xx(e,n,2,!1),t.add(i))}function sd(n,e,t){var i=0;e&&(i|=4),Xx(t,n,i,e)}var Mu="_reactListening"+Math.random().toString(36).slice(2);function Fl(n){if(!n[Mu]){n[Mu]=!0,Qv.forEach(function(t){t!=="selectionchange"&&(H1.has(t)||sd(t,!1,n),sd(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Mu]||(e[Mu]=!0,sd("selectionchange",!1,e))}}function Xx(n,e,t,i){switch(Rx(e)){case 1:var r=i1;break;case 4:r=r1;break;default:r=Tm}t=r.bind(null,e,t,n),r=void 0,!yh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function od(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Bs(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}px(function(){var u=s,c=ym(t),d=[];e:{var f=Hx.get(n);if(f!==void 0){var p=Am,_=n;switch(n){case"keypress":if(lc(t)===0)break e;case"keydown":case"keyup":p=x1;break;case"focusin":_="focus",p=Jf;break;case"focusout":_="blur",p=Jf;break;case"beforeblur":case"afterblur":p=Jf;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=m_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=a1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=M1;break;case Bx:case zx:case Vx:p=c1;break;case Gx:p=T1;break;case"scroll":p=s1;break;case"wheel":p=A1;break;case"copy":case"cut":case"paste":p=d1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=__}var v=(e&4)!==0,g=!v&&n==="scroll",h=v?f!==null?f+"Capture":null:f;v=[];for(var m=u,x;m!==null;){x=m;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,h!==null&&(S=Pl(m,h),S!=null&&v.push(Ol(m,S,x)))),g)break;m=m.return}0<v.length&&(f=new p(f,_,null,t,c),d.push({event:f,listeners:v}))}}if(!(e&7)){e:{if(f=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",f&&t!==vh&&(_=t.relatedTarget||t.fromElement)&&(Bs(_)||_[wr]))break e;if((p||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,p?(_=t.relatedTarget||t.toElement,p=u,_=_?Bs(_):null,_!==null&&(g=lo(_),_!==g||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=u),p!==_)){if(v=m_,S="onMouseLeave",h="onMouseEnter",m="mouse",(n==="pointerout"||n==="pointerover")&&(v=__,S="onPointerLeave",h="onPointerEnter",m="pointer"),g=p==null?f:zo(p),x=_==null?f:zo(_),f=new v(S,m+"leave",p,t,c),f.target=g,f.relatedTarget=x,S=null,Bs(c)===u&&(v=new v(h,m+"enter",_,t,c),v.target=x,v.relatedTarget=g,S=v),g=S,p&&_)t:{for(v=p,h=_,m=0,x=v;x;x=mo(x))m++;for(x=0,S=h;S;S=mo(S))x++;for(;0<m-x;)v=mo(v),m--;for(;0<x-m;)h=mo(h),x--;for(;m--;){if(v===h||h!==null&&v===h.alternate)break t;v=mo(v),h=mo(h)}v=null}else v=null;p!==null&&R_(d,f,p,v,!1),_!==null&&g!==null&&R_(d,g,_,v,!0)}}e:{if(f=u?zo(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var T=I1;else if(y_(f))if(Nx)T=O1;else{T=U1;var E=N1}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(T=F1);if(T&&(T=T(n,u))){Ix(d,T,t,c);break e}E&&E(n,f,u),n==="focusout"&&(E=f._wrapperState)&&E.controlled&&f.type==="number"&&hh(f,"number",f.value)}switch(E=u?zo(u):window,n){case"focusin":(y_(E)||E.contentEditable==="true")&&(ko=E,wh=u,ml=null);break;case"focusout":ml=wh=ko=null;break;case"mousedown":Ah=!0;break;case"contextmenu":case"mouseup":case"dragend":Ah=!1,w_(d,t,c);break;case"selectionchange":if(z1)break;case"keydown":case"keyup":w_(d,t,c)}var A;if(Rm)e:{switch(n){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Oo?Dx(n,t)&&(y="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(y="onCompositionStart");y&&(Px&&t.locale!=="ko"&&(Oo||y!=="onCompositionStart"?y==="onCompositionEnd"&&Oo&&(A=bx()):(Zr=c,wm="value"in Zr?Zr.value:Zr.textContent,Oo=!0)),E=Uc(u,y),0<E.length&&(y=new g_(y,n,null,t,c),d.push({event:y,listeners:E}),A?y.data=A:(A=Lx(t),A!==null&&(y.data=A)))),(A=R1?b1(n,t):P1(n,t))&&(u=Uc(u,"onBeforeInput"),0<u.length&&(c=new g_("onBeforeInput","beforeinput",null,t,c),d.push({event:c,listeners:u}),c.data=A))}Wx(d,e)})}function Ol(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Uc(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Pl(n,t),s!=null&&i.unshift(Ol(n,s,r)),s=Pl(n,e),s!=null&&i.push(Ol(n,s,r))),n=n.return}return i}function mo(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function R_(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Pl(t,s),l!=null&&o.unshift(Ol(t,l,a))):r||(l=Pl(t,s),l!=null&&o.push(Ol(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var W1=/\r\n?/g,X1=/\u0000|\uFFFD/g;function b_(n){return(typeof n=="string"?n:""+n).replace(W1,`
`).replace(X1,"")}function Eu(n,e,t){if(e=b_(e),b_(n)!==e&&t)throw Error(ie(425))}function Fc(){}var Ch=null,Rh=null;function bh(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ph=typeof setTimeout=="function"?setTimeout:void 0,Y1=typeof clearTimeout=="function"?clearTimeout:void 0,P_=typeof Promise=="function"?Promise:void 0,j1=typeof queueMicrotask=="function"?queueMicrotask:typeof P_<"u"?function(n){return P_.resolve(null).then(n).catch(q1)}:Ph;function q1(n){setTimeout(function(){throw n})}function ad(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),Il(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);Il(e)}function ls(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function D_(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var Ia=Math.random().toString(36).slice(2),Yi="__reactFiber$"+Ia,kl="__reactProps$"+Ia,wr="__reactContainer$"+Ia,Dh="__reactEvents$"+Ia,$1="__reactListeners$"+Ia,K1="__reactHandles$"+Ia;function Bs(n){var e=n[Yi];if(e)return e;for(var t=n.parentNode;t;){if(e=t[wr]||t[Yi]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=D_(n);n!==null;){if(t=n[Yi])return t;n=D_(n)}return e}n=t,t=n.parentNode}return null}function au(n){return n=n[Yi]||n[wr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function zo(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(ie(33))}function Mf(n){return n[kl]||null}var Lh=[],Vo=-1;function Ms(n){return{current:n}}function St(n){0>Vo||(n.current=Lh[Vo],Lh[Vo]=null,Vo--)}function xt(n,e){Vo++,Lh[Vo]=n.current,n.current=e}var gs={},yn=Ms(gs),Fn=Ms(!1),eo=gs;function ga(n,e){var t=n.type.contextTypes;if(!t)return gs;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function On(n){return n=n.childContextTypes,n!=null}function Oc(){St(Fn),St(yn)}function L_(n,e,t){if(yn.current!==gs)throw Error(ie(168));xt(yn,e),xt(Fn,t)}function Yx(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ie(108,NE(n)||"Unknown",r));return Nt({},t,i)}function kc(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||gs,eo=yn.current,xt(yn,n),xt(Fn,Fn.current),!0}function I_(n,e,t){var i=n.stateNode;if(!i)throw Error(ie(169));t?(n=Yx(n,e,eo),i.__reactInternalMemoizedMergedChildContext=n,St(Fn),St(yn),xt(yn,n)):St(Fn),xt(Fn,t)}var pr=null,Ef=!1,ld=!1;function jx(n){pr===null?pr=[n]:pr.push(n)}function Z1(n){Ef=!0,jx(n)}function Es(){if(!ld&&pr!==null){ld=!0;var n=0,e=ct;try{var t=pr;for(ct=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}pr=null,Ef=!1}catch(r){throw pr!==null&&(pr=pr.slice(n+1)),vx(Sm,Es),r}finally{ct=e,ld=!1}}return null}var Go=[],Ho=0,Bc=null,zc=0,hi=[],pi=0,to=null,_r=1,vr="";function Is(n,e){Go[Ho++]=zc,Go[Ho++]=Bc,Bc=n,zc=e}function qx(n,e,t){hi[pi++]=_r,hi[pi++]=vr,hi[pi++]=to,to=n;var i=_r;n=vr;var r=32-Ni(i)-1;i&=~(1<<r),t+=1;var s=32-Ni(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,_r=1<<32-Ni(e)+r|t<<r|i,vr=s+n}else _r=1<<s|t<<r|i,vr=n}function Pm(n){n.return!==null&&(Is(n,1),qx(n,1,0))}function Dm(n){for(;n===Bc;)Bc=Go[--Ho],Go[Ho]=null,zc=Go[--Ho],Go[Ho]=null;for(;n===to;)to=hi[--pi],hi[pi]=null,vr=hi[--pi],hi[pi]=null,_r=hi[--pi],hi[pi]=null}var ii=null,ei=null,At=!1,Pi=null;function $x(n,e){var t=gi(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function N_(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,ii=n,ei=ls(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,ii=n,ei=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=to!==null?{id:_r,overflow:vr}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=gi(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,ii=n,ei=null,!0):!1;default:return!1}}function Ih(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Nh(n){if(At){var e=ei;if(e){var t=e;if(!N_(n,e)){if(Ih(n))throw Error(ie(418));e=ls(t.nextSibling);var i=ii;e&&N_(n,e)?$x(i,t):(n.flags=n.flags&-4097|2,At=!1,ii=n)}}else{if(Ih(n))throw Error(ie(418));n.flags=n.flags&-4097|2,At=!1,ii=n}}}function U_(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;ii=n}function Tu(n){if(n!==ii)return!1;if(!At)return U_(n),At=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!bh(n.type,n.memoizedProps)),e&&(e=ei)){if(Ih(n))throw Kx(),Error(ie(418));for(;e;)$x(n,e),e=ls(e.nextSibling)}if(U_(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(ie(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){ei=ls(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}ei=null}}else ei=ii?ls(n.stateNode.nextSibling):null;return!0}function Kx(){for(var n=ei;n;)n=ls(n.nextSibling)}function _a(){ei=ii=null,At=!1}function Lm(n){Pi===null?Pi=[n]:Pi.push(n)}var Q1=Ir.ReactCurrentBatchConfig;function Wa(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(ie(309));var i=t.stateNode}if(!i)throw Error(ie(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(ie(284));if(!t._owner)throw Error(ie(290,n))}return n}function wu(n,e){throw n=Object.prototype.toString.call(e),Error(ie(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function F_(n){var e=n._init;return e(n._payload)}function Zx(n){function e(h,m){if(n){var x=h.deletions;x===null?(h.deletions=[m],h.flags|=16):x.push(m)}}function t(h,m){if(!n)return null;for(;m!==null;)e(h,m),m=m.sibling;return null}function i(h,m){for(h=new Map;m!==null;)m.key!==null?h.set(m.key,m):h.set(m.index,m),m=m.sibling;return h}function r(h,m){return h=ds(h,m),h.index=0,h.sibling=null,h}function s(h,m,x){return h.index=x,n?(x=h.alternate,x!==null?(x=x.index,x<m?(h.flags|=2,m):x):(h.flags|=2,m)):(h.flags|=1048576,m)}function o(h){return n&&h.alternate===null&&(h.flags|=2),h}function a(h,m,x,S){return m===null||m.tag!==6?(m=md(x,h.mode,S),m.return=h,m):(m=r(m,x),m.return=h,m)}function l(h,m,x,S){var T=x.type;return T===Fo?c(h,m,x.props.children,S,x.key):m!==null&&(m.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Wr&&F_(T)===m.type)?(S=r(m,x.props),S.ref=Wa(h,m,x),S.return=h,S):(S=mc(x.type,x.key,x.props,null,h.mode,S),S.ref=Wa(h,m,x),S.return=h,S)}function u(h,m,x,S){return m===null||m.tag!==4||m.stateNode.containerInfo!==x.containerInfo||m.stateNode.implementation!==x.implementation?(m=gd(x,h.mode,S),m.return=h,m):(m=r(m,x.children||[]),m.return=h,m)}function c(h,m,x,S,T){return m===null||m.tag!==7?(m=$s(x,h.mode,S,T),m.return=h,m):(m=r(m,x),m.return=h,m)}function d(h,m,x){if(typeof m=="string"&&m!==""||typeof m=="number")return m=md(""+m,h.mode,x),m.return=h,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case pu:return x=mc(m.type,m.key,m.props,null,h.mode,x),x.ref=Wa(h,null,m),x.return=h,x;case Uo:return m=gd(m,h.mode,x),m.return=h,m;case Wr:var S=m._init;return d(h,S(m._payload),x)}if(rl(m)||Ba(m))return m=$s(m,h.mode,x,null),m.return=h,m;wu(h,m)}return null}function f(h,m,x,S){var T=m!==null?m.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return T!==null?null:a(h,m,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case pu:return x.key===T?l(h,m,x,S):null;case Uo:return x.key===T?u(h,m,x,S):null;case Wr:return T=x._init,f(h,m,T(x._payload),S)}if(rl(x)||Ba(x))return T!==null?null:c(h,m,x,S,null);wu(h,x)}return null}function p(h,m,x,S,T){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(x)||null,a(m,h,""+S,T);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case pu:return h=h.get(S.key===null?x:S.key)||null,l(m,h,S,T);case Uo:return h=h.get(S.key===null?x:S.key)||null,u(m,h,S,T);case Wr:var E=S._init;return p(h,m,x,E(S._payload),T)}if(rl(S)||Ba(S))return h=h.get(x)||null,c(m,h,S,T,null);wu(m,S)}return null}function _(h,m,x,S){for(var T=null,E=null,A=m,y=m=0,C=null;A!==null&&y<x.length;y++){A.index>y?(C=A,A=null):C=A.sibling;var b=f(h,A,x[y],S);if(b===null){A===null&&(A=C);break}n&&A&&b.alternate===null&&e(h,A),m=s(b,m,y),E===null?T=b:E.sibling=b,E=b,A=C}if(y===x.length)return t(h,A),At&&Is(h,y),T;if(A===null){for(;y<x.length;y++)A=d(h,x[y],S),A!==null&&(m=s(A,m,y),E===null?T=A:E.sibling=A,E=A);return At&&Is(h,y),T}for(A=i(h,A);y<x.length;y++)C=p(A,h,y,x[y],S),C!==null&&(n&&C.alternate!==null&&A.delete(C.key===null?y:C.key),m=s(C,m,y),E===null?T=C:E.sibling=C,E=C);return n&&A.forEach(function(P){return e(h,P)}),At&&Is(h,y),T}function v(h,m,x,S){var T=Ba(x);if(typeof T!="function")throw Error(ie(150));if(x=T.call(x),x==null)throw Error(ie(151));for(var E=T=null,A=m,y=m=0,C=null,b=x.next();A!==null&&!b.done;y++,b=x.next()){A.index>y?(C=A,A=null):C=A.sibling;var P=f(h,A,b.value,S);if(P===null){A===null&&(A=C);break}n&&A&&P.alternate===null&&e(h,A),m=s(P,m,y),E===null?T=P:E.sibling=P,E=P,A=C}if(b.done)return t(h,A),At&&Is(h,y),T;if(A===null){for(;!b.done;y++,b=x.next())b=d(h,b.value,S),b!==null&&(m=s(b,m,y),E===null?T=b:E.sibling=b,E=b);return At&&Is(h,y),T}for(A=i(h,A);!b.done;y++,b=x.next())b=p(A,h,y,b.value,S),b!==null&&(n&&b.alternate!==null&&A.delete(b.key===null?y:b.key),m=s(b,m,y),E===null?T=b:E.sibling=b,E=b);return n&&A.forEach(function(U){return e(h,U)}),At&&Is(h,y),T}function g(h,m,x,S){if(typeof x=="object"&&x!==null&&x.type===Fo&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case pu:e:{for(var T=x.key,E=m;E!==null;){if(E.key===T){if(T=x.type,T===Fo){if(E.tag===7){t(h,E.sibling),m=r(E,x.props.children),m.return=h,h=m;break e}}else if(E.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Wr&&F_(T)===E.type){t(h,E.sibling),m=r(E,x.props),m.ref=Wa(h,E,x),m.return=h,h=m;break e}t(h,E);break}else e(h,E);E=E.sibling}x.type===Fo?(m=$s(x.props.children,h.mode,S,x.key),m.return=h,h=m):(S=mc(x.type,x.key,x.props,null,h.mode,S),S.ref=Wa(h,m,x),S.return=h,h=S)}return o(h);case Uo:e:{for(E=x.key;m!==null;){if(m.key===E)if(m.tag===4&&m.stateNode.containerInfo===x.containerInfo&&m.stateNode.implementation===x.implementation){t(h,m.sibling),m=r(m,x.children||[]),m.return=h,h=m;break e}else{t(h,m);break}else e(h,m);m=m.sibling}m=gd(x,h.mode,S),m.return=h,h=m}return o(h);case Wr:return E=x._init,g(h,m,E(x._payload),S)}if(rl(x))return _(h,m,x,S);if(Ba(x))return v(h,m,x,S);wu(h,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,m!==null&&m.tag===6?(t(h,m.sibling),m=r(m,x),m.return=h,h=m):(t(h,m),m=md(x,h.mode,S),m.return=h,h=m),o(h)):t(h,m)}return g}var va=Zx(!0),Qx=Zx(!1),Vc=Ms(null),Gc=null,Wo=null,Im=null;function Nm(){Im=Wo=Gc=null}function Um(n){var e=Vc.current;St(Vc),n._currentValue=e}function Uh(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function ta(n,e){Gc=n,Im=Wo=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(Un=!0),n.firstContext=null)}function Si(n){var e=n._currentValue;if(Im!==n)if(n={context:n,memoizedValue:e,next:null},Wo===null){if(Gc===null)throw Error(ie(308));Wo=n,Gc.dependencies={lanes:0,firstContext:n}}else Wo=Wo.next=n;return e}var zs=null;function Fm(n){zs===null?zs=[n]:zs.push(n)}function Jx(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,Fm(e)):(t.next=r.next,r.next=t),e.interleaved=t,Ar(n,i)}function Ar(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var Xr=!1;function Om(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ey(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Sr(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function us(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,it&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ar(n,t)}return r=i.interleaved,r===null?(e.next=e,Fm(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ar(n,t)}function uc(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Mm(n,t)}}function O_(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Hc(n,e,t,i){var r=n.updateQueue;Xr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=n,v=a;switch(f=e,p=t,v.tag){case 1:if(_=v.payload,typeof _=="function"){d=_.call(p,d,f);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=v.payload,f=typeof _=="function"?_.call(p,d,f):_,f==null)break e;d=Nt({},d,f);break e;case 2:Xr=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=d):c=c.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(c===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);io|=o,n.lanes=o,n.memoizedState=d}}function k_(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(ie(191,r));r.call(i)}}}var lu={},Ji=Ms(lu),Bl=Ms(lu),zl=Ms(lu);function Vs(n){if(n===lu)throw Error(ie(174));return n}function km(n,e){switch(xt(zl,e),xt(Bl,n),xt(Ji,lu),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:mh(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=mh(e,n)}St(Ji),xt(Ji,e)}function xa(){St(Ji),St(Bl),St(zl)}function ty(n){Vs(zl.current);var e=Vs(Ji.current),t=mh(e,n.type);e!==t&&(xt(Bl,n),xt(Ji,t))}function Bm(n){Bl.current===n&&(St(Ji),St(Bl))}var Pt=Ms(0);function Wc(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ud=[];function zm(){for(var n=0;n<ud.length;n++)ud[n]._workInProgressVersionPrimary=null;ud.length=0}var cc=Ir.ReactCurrentDispatcher,cd=Ir.ReactCurrentBatchConfig,no=0,It=null,jt=null,Qt=null,Xc=!1,gl=!1,Vl=0,J1=0;function fn(){throw Error(ie(321))}function Vm(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!Oi(n[t],e[t]))return!1;return!0}function Gm(n,e,t,i,r,s){if(no=s,It=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,cc.current=n===null||n.memoizedState===null?iT:rT,n=t(i,r),gl){s=0;do{if(gl=!1,Vl=0,25<=s)throw Error(ie(301));s+=1,Qt=jt=null,e.updateQueue=null,cc.current=sT,n=t(i,r)}while(gl)}if(cc.current=Yc,e=jt!==null&&jt.next!==null,no=0,Qt=jt=It=null,Xc=!1,e)throw Error(ie(300));return n}function Hm(){var n=Vl!==0;return Vl=0,n}function Hi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qt===null?It.memoizedState=Qt=n:Qt=Qt.next=n,Qt}function Mi(){if(jt===null){var n=It.alternate;n=n!==null?n.memoizedState:null}else n=jt.next;var e=Qt===null?It.memoizedState:Qt.next;if(e!==null)Qt=e,jt=n;else{if(n===null)throw Error(ie(310));jt=n,n={memoizedState:jt.memoizedState,baseState:jt.baseState,baseQueue:jt.baseQueue,queue:jt.queue,next:null},Qt===null?It.memoizedState=Qt=n:Qt=Qt.next=n}return Qt}function Gl(n,e){return typeof e=="function"?e(n):e}function fd(n){var e=Mi(),t=e.queue;if(t===null)throw Error(ie(311));t.lastRenderedReducer=n;var i=jt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((no&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,It.lanes|=c,io|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,Oi(i,e.memoizedState)||(Un=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,It.lanes|=s,io|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function dd(n){var e=Mi(),t=e.queue;if(t===null)throw Error(ie(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);Oi(s,e.memoizedState)||(Un=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function ny(){}function iy(n,e){var t=It,i=Mi(),r=e(),s=!Oi(i.memoizedState,r);if(s&&(i.memoizedState=r,Un=!0),i=i.queue,Wm(oy.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||Qt!==null&&Qt.memoizedState.tag&1){if(t.flags|=2048,Hl(9,sy.bind(null,t,i,r,e),void 0,null),en===null)throw Error(ie(349));no&30||ry(t,e,r)}return r}function ry(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=It.updateQueue,e===null?(e={lastEffect:null,stores:null},It.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function sy(n,e,t,i){e.value=t,e.getSnapshot=i,ay(e)&&ly(n)}function oy(n,e,t){return t(function(){ay(e)&&ly(n)})}function ay(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!Oi(n,t)}catch{return!0}}function ly(n){var e=Ar(n,1);e!==null&&Ui(e,n,1,-1)}function B_(n){var e=Hi();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Gl,lastRenderedState:n},e.queue=n,n=n.dispatch=nT.bind(null,It,n),[e.memoizedState,n]}function Hl(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=It.updateQueue,e===null?(e={lastEffect:null,stores:null},It.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function uy(){return Mi().memoizedState}function fc(n,e,t,i){var r=Hi();It.flags|=n,r.memoizedState=Hl(1|e,t,void 0,i===void 0?null:i)}function Tf(n,e,t,i){var r=Mi();i=i===void 0?null:i;var s=void 0;if(jt!==null){var o=jt.memoizedState;if(s=o.destroy,i!==null&&Vm(i,o.deps)){r.memoizedState=Hl(e,t,s,i);return}}It.flags|=n,r.memoizedState=Hl(1|e,t,s,i)}function z_(n,e){return fc(8390656,8,n,e)}function Wm(n,e){return Tf(2048,8,n,e)}function cy(n,e){return Tf(4,2,n,e)}function fy(n,e){return Tf(4,4,n,e)}function dy(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function hy(n,e,t){return t=t!=null?t.concat([n]):null,Tf(4,4,dy.bind(null,e,n),t)}function Xm(){}function py(n,e){var t=Mi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Vm(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function my(n,e){var t=Mi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Vm(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function gy(n,e,t){return no&21?(Oi(t,e)||(t=Sx(),It.lanes|=t,io|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,Un=!0),n.memoizedState=t)}function eT(n,e){var t=ct;ct=t!==0&&4>t?t:4,n(!0);var i=cd.transition;cd.transition={};try{n(!1),e()}finally{ct=t,cd.transition=i}}function _y(){return Mi().memoizedState}function tT(n,e,t){var i=fs(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},vy(n))xy(e,t);else if(t=Jx(n,e,t,i),t!==null){var r=Cn();Ui(t,n,i,r),yy(t,e,i)}}function nT(n,e,t){var i=fs(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(vy(n))xy(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,Oi(a,o)){var l=e.interleaved;l===null?(r.next=r,Fm(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=Jx(n,e,r,i),t!==null&&(r=Cn(),Ui(t,n,i,r),yy(t,e,i))}}function vy(n){var e=n.alternate;return n===It||e!==null&&e===It}function xy(n,e){gl=Xc=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function yy(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Mm(n,t)}}var Yc={readContext:Si,useCallback:fn,useContext:fn,useEffect:fn,useImperativeHandle:fn,useInsertionEffect:fn,useLayoutEffect:fn,useMemo:fn,useReducer:fn,useRef:fn,useState:fn,useDebugValue:fn,useDeferredValue:fn,useTransition:fn,useMutableSource:fn,useSyncExternalStore:fn,useId:fn,unstable_isNewReconciler:!1},iT={readContext:Si,useCallback:function(n,e){return Hi().memoizedState=[n,e===void 0?null:e],n},useContext:Si,useEffect:z_,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,fc(4194308,4,dy.bind(null,e,n),t)},useLayoutEffect:function(n,e){return fc(4194308,4,n,e)},useInsertionEffect:function(n,e){return fc(4,2,n,e)},useMemo:function(n,e){var t=Hi();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=Hi();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=tT.bind(null,It,n),[i.memoizedState,n]},useRef:function(n){var e=Hi();return n={current:n},e.memoizedState=n},useState:B_,useDebugValue:Xm,useDeferredValue:function(n){return Hi().memoizedState=n},useTransition:function(){var n=B_(!1),e=n[0];return n=eT.bind(null,n[1]),Hi().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=It,r=Hi();if(At){if(t===void 0)throw Error(ie(407));t=t()}else{if(t=e(),en===null)throw Error(ie(349));no&30||ry(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,z_(oy.bind(null,i,s,n),[n]),i.flags|=2048,Hl(9,sy.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=Hi(),e=en.identifierPrefix;if(At){var t=vr,i=_r;t=(i&~(1<<32-Ni(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Vl++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=J1++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},rT={readContext:Si,useCallback:py,useContext:Si,useEffect:Wm,useImperativeHandle:hy,useInsertionEffect:cy,useLayoutEffect:fy,useMemo:my,useReducer:fd,useRef:uy,useState:function(){return fd(Gl)},useDebugValue:Xm,useDeferredValue:function(n){var e=Mi();return gy(e,jt.memoizedState,n)},useTransition:function(){var n=fd(Gl)[0],e=Mi().memoizedState;return[n,e]},useMutableSource:ny,useSyncExternalStore:iy,useId:_y,unstable_isNewReconciler:!1},sT={readContext:Si,useCallback:py,useContext:Si,useEffect:Wm,useImperativeHandle:hy,useInsertionEffect:cy,useLayoutEffect:fy,useMemo:my,useReducer:dd,useRef:uy,useState:function(){return dd(Gl)},useDebugValue:Xm,useDeferredValue:function(n){var e=Mi();return jt===null?e.memoizedState=n:gy(e,jt.memoizedState,n)},useTransition:function(){var n=dd(Gl)[0],e=Mi().memoizedState;return[n,e]},useMutableSource:ny,useSyncExternalStore:iy,useId:_y,unstable_isNewReconciler:!1};function Ri(n,e){if(n&&n.defaultProps){e=Nt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Fh(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:Nt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var wf={isMounted:function(n){return(n=n._reactInternals)?lo(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Cn(),r=fs(n),s=Sr(i,r);s.payload=e,t!=null&&(s.callback=t),e=us(n,s,r),e!==null&&(Ui(e,n,r,i),uc(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Cn(),r=fs(n),s=Sr(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=us(n,s,r),e!==null&&(Ui(e,n,r,i),uc(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Cn(),i=fs(n),r=Sr(t,i);r.tag=2,e!=null&&(r.callback=e),e=us(n,r,i),e!==null&&(Ui(e,n,i,t),uc(e,n,i))}};function V_(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ul(t,i)||!Ul(r,s):!0}function Sy(n,e,t){var i=!1,r=gs,s=e.contextType;return typeof s=="object"&&s!==null?s=Si(s):(r=On(e)?eo:yn.current,i=e.contextTypes,s=(i=i!=null)?ga(n,r):gs),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=wf,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function G_(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&wf.enqueueReplaceState(e,e.state,null)}function Oh(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},Om(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Si(s):(s=On(e)?eo:yn.current,r.context=ga(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Fh(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&wf.enqueueReplaceState(r,r.state,null),Hc(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function ya(n,e){try{var t="",i=e;do t+=IE(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function hd(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function kh(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var oT=typeof WeakMap=="function"?WeakMap:Map;function My(n,e,t){t=Sr(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){qc||(qc=!0,qh=i),kh(n,e)},t}function Ey(n,e,t){t=Sr(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){kh(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){kh(n,e),typeof i!="function"&&(cs===null?cs=new Set([this]):cs.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function H_(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new oT;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=yT.bind(null,n,e,t),e.then(n,n))}function W_(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function X_(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Sr(-1,1),e.tag=2,us(t,e,1))),t.lanes|=1),n)}var aT=Ir.ReactCurrentOwner,Un=!1;function An(n,e,t,i){e.child=n===null?Qx(e,null,t,i):va(e,n.child,t,i)}function Y_(n,e,t,i,r){t=t.render;var s=e.ref;return ta(e,r),i=Gm(n,e,t,i,s,r),t=Hm(),n!==null&&!Un?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Cr(n,e,r)):(At&&t&&Pm(e),e.flags|=1,An(n,e,i,r),e.child)}function j_(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!Jm(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,Ty(n,e,s,i,r)):(n=mc(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:Ul,t(o,i)&&n.ref===e.ref)return Cr(n,e,r)}return e.flags|=1,n=ds(s,i),n.ref=e.ref,n.return=e,e.child=n}function Ty(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(Ul(s,i)&&n.ref===e.ref)if(Un=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(Un=!0);else return e.lanes=n.lanes,Cr(n,e,r)}return Bh(n,e,t,i,r)}function wy(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},xt(Yo,jn),jn|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,xt(Yo,jn),jn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,xt(Yo,jn),jn|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,xt(Yo,jn),jn|=i;return An(n,e,r,t),e.child}function Ay(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Bh(n,e,t,i,r){var s=On(t)?eo:yn.current;return s=ga(e,s),ta(e,r),t=Gm(n,e,t,i,s,r),i=Hm(),n!==null&&!Un?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Cr(n,e,r)):(At&&i&&Pm(e),e.flags|=1,An(n,e,t,r),e.child)}function q_(n,e,t,i,r){if(On(t)){var s=!0;kc(e)}else s=!1;if(ta(e,r),e.stateNode===null)dc(n,e),Sy(e,t,i),Oh(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=Si(u):(u=On(t)?eo:yn.current,u=ga(e,u));var c=t.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&G_(e,o,i,u),Xr=!1;var f=e.memoizedState;o.state=f,Hc(e,i,o,r),l=e.memoizedState,a!==i||f!==l||Fn.current||Xr?(typeof c=="function"&&(Fh(e,t,c,i),l=e.memoizedState),(a=Xr||V_(e,t,a,i,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,ey(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:Ri(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=Si(l):(l=On(t)?eo:yn.current,l=ga(e,l));var p=t.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&G_(e,o,i,l),Xr=!1,f=e.memoizedState,o.state=f,Hc(e,i,o,r);var _=e.memoizedState;a!==d||f!==_||Fn.current||Xr?(typeof p=="function"&&(Fh(e,t,p,i),_=e.memoizedState),(u=Xr||V_(e,t,u,i,f,_,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),i=!1)}return zh(n,e,t,i,s,r)}function zh(n,e,t,i,r,s){Ay(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&I_(e,t,!1),Cr(n,e,s);i=e.stateNode,aT.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=va(e,n.child,null,s),e.child=va(e,null,a,s)):An(n,e,a,s),e.memoizedState=i.state,r&&I_(e,t,!0),e.child}function Cy(n){var e=n.stateNode;e.pendingContext?L_(n,e.pendingContext,e.pendingContext!==e.context):e.context&&L_(n,e.context,!1),km(n,e.containerInfo)}function $_(n,e,t,i,r){return _a(),Lm(r),e.flags|=256,An(n,e,t,i),e.child}var Vh={dehydrated:null,treeContext:null,retryLane:0};function Gh(n){return{baseLanes:n,cachePool:null,transitions:null}}function Ry(n,e,t){var i=e.pendingProps,r=Pt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),xt(Pt,r&1),n===null)return Nh(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Rf(o,i,0,null),n=$s(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Gh(t),e.memoizedState=Vh,n):Ym(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return lT(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=ds(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=ds(a,s):(s=$s(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?Gh(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=Vh,i}return s=n.child,n=s.sibling,i=ds(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Ym(n,e){return e=Rf({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Au(n,e,t,i){return i!==null&&Lm(i),va(e,n.child,null,t),n=Ym(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function lT(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=hd(Error(ie(422))),Au(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Rf({mode:"visible",children:i.children},r,0,null),s=$s(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&va(e,n.child,null,o),e.child.memoizedState=Gh(o),e.memoizedState=Vh,s);if(!(e.mode&1))return Au(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ie(419)),i=hd(s,i,void 0),Au(n,e,o,i)}if(a=(o&n.childLanes)!==0,Un||a){if(i=en,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ar(n,r),Ui(i,n,r,-1))}return Qm(),i=hd(Error(ie(421))),Au(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=ST.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,ei=ls(r.nextSibling),ii=e,At=!0,Pi=null,n!==null&&(hi[pi++]=_r,hi[pi++]=vr,hi[pi++]=to,_r=n.id,vr=n.overflow,to=e),e=Ym(e,i.children),e.flags|=4096,e)}function K_(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Uh(n.return,e,t)}function pd(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function by(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(An(n,e,i.children,t),i=Pt.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&K_(n,t,e);else if(n.tag===19)K_(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(xt(Pt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Wc(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),pd(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Wc(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}pd(e,!0,t,null,s);break;case"together":pd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function dc(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Cr(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),io|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(ie(153));if(e.child!==null){for(n=e.child,t=ds(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=ds(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function uT(n,e,t){switch(e.tag){case 3:Cy(e),_a();break;case 5:ty(e);break;case 1:On(e.type)&&kc(e);break;case 4:km(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;xt(Vc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(xt(Pt,Pt.current&1),e.flags|=128,null):t&e.child.childLanes?Ry(n,e,t):(xt(Pt,Pt.current&1),n=Cr(n,e,t),n!==null?n.sibling:null);xt(Pt,Pt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return by(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),xt(Pt,Pt.current),i)break;return null;case 22:case 23:return e.lanes=0,wy(n,e,t)}return Cr(n,e,t)}var Py,Hh,Dy,Ly;Py=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Hh=function(){};Dy=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,Vs(Ji.current);var s=null;switch(t){case"input":r=fh(n,r),i=fh(n,i),s=[];break;case"select":r=Nt({},r,{value:void 0}),i=Nt({},i,{value:void 0}),s=[];break;case"textarea":r=ph(n,r),i=ph(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Fc)}gh(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Rl.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Rl.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&yt("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Ly=function(n,e,t,i){t!==i&&(e.flags|=4)};function Xa(n,e){if(!At)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function dn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function cT(n,e,t){var i=e.pendingProps;switch(Dm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dn(e),null;case 1:return On(e.type)&&Oc(),dn(e),null;case 3:return i=e.stateNode,xa(),St(Fn),St(yn),zm(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Tu(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Pi!==null&&(Zh(Pi),Pi=null))),Hh(n,e),dn(e),null;case 5:Bm(e);var r=Vs(zl.current);if(t=e.type,n!==null&&e.stateNode!=null)Dy(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ie(166));return dn(e),null}if(n=Vs(Ji.current),Tu(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[Yi]=e,i[kl]=s,n=(e.mode&1)!==0,t){case"dialog":yt("cancel",i),yt("close",i);break;case"iframe":case"object":case"embed":yt("load",i);break;case"video":case"audio":for(r=0;r<ol.length;r++)yt(ol[r],i);break;case"source":yt("error",i);break;case"img":case"image":case"link":yt("error",i),yt("load",i);break;case"details":yt("toggle",i);break;case"input":s_(i,s),yt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},yt("invalid",i);break;case"textarea":a_(i,s),yt("invalid",i)}gh(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Eu(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Eu(i.textContent,a,n),r=["children",""+a]):Rl.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&yt("scroll",i)}switch(t){case"input":mu(i),o_(i,s,!0);break;case"textarea":mu(i),l_(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Fc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ox(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[Yi]=e,n[kl]=i,Py(n,e,!1,!1),e.stateNode=n;e:{switch(o=_h(t,i),t){case"dialog":yt("cancel",n),yt("close",n),r=i;break;case"iframe":case"object":case"embed":yt("load",n),r=i;break;case"video":case"audio":for(r=0;r<ol.length;r++)yt(ol[r],n);r=i;break;case"source":yt("error",n),r=i;break;case"img":case"image":case"link":yt("error",n),yt("load",n),r=i;break;case"details":yt("toggle",n),r=i;break;case"input":s_(n,i),r=fh(n,i),yt("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=Nt({},i,{value:void 0}),yt("invalid",n);break;case"textarea":a_(n,i),r=ph(n,i),yt("invalid",n);break;default:r=i}gh(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?ux(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&ax(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&bl(n,l):typeof l=="number"&&bl(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Rl.hasOwnProperty(s)?l!=null&&s==="onScroll"&&yt("scroll",n):l!=null&&gm(n,s,l,o))}switch(t){case"input":mu(n),o_(n,i,!1);break;case"textarea":mu(n),l_(n);break;case"option":i.value!=null&&n.setAttribute("value",""+ms(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?Zo(n,!!i.multiple,s,!1):i.defaultValue!=null&&Zo(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Fc)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return dn(e),null;case 6:if(n&&e.stateNode!=null)Ly(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ie(166));if(t=Vs(zl.current),Vs(Ji.current),Tu(e)){if(i=e.stateNode,t=e.memoizedProps,i[Yi]=e,(s=i.nodeValue!==t)&&(n=ii,n!==null))switch(n.tag){case 3:Eu(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Eu(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Yi]=e,e.stateNode=i}return dn(e),null;case 13:if(St(Pt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(At&&ei!==null&&e.mode&1&&!(e.flags&128))Kx(),_a(),e.flags|=98560,s=!1;else if(s=Tu(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(ie(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ie(317));s[Yi]=e}else _a(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;dn(e),s=!1}else Pi!==null&&(Zh(Pi),Pi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||Pt.current&1?qt===0&&(qt=3):Qm())),e.updateQueue!==null&&(e.flags|=4),dn(e),null);case 4:return xa(),Hh(n,e),n===null&&Fl(e.stateNode.containerInfo),dn(e),null;case 10:return Um(e.type._context),dn(e),null;case 17:return On(e.type)&&Oc(),dn(e),null;case 19:if(St(Pt),s=e.memoizedState,s===null)return dn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Xa(s,!1);else{if(qt!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=Wc(n),o!==null){for(e.flags|=128,Xa(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return xt(Pt,Pt.current&1|2),e.child}n=n.sibling}s.tail!==null&&Gt()>Sa&&(e.flags|=128,i=!0,Xa(s,!1),e.lanes=4194304)}else{if(!i)if(n=Wc(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Xa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!At)return dn(e),null}else 2*Gt()-s.renderingStartTime>Sa&&t!==1073741824&&(e.flags|=128,i=!0,Xa(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Gt(),e.sibling=null,t=Pt.current,xt(Pt,i?t&1|2:t&1),e):(dn(e),null);case 22:case 23:return Zm(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?jn&1073741824&&(dn(e),e.subtreeFlags&6&&(e.flags|=8192)):dn(e),null;case 24:return null;case 25:return null}throw Error(ie(156,e.tag))}function fT(n,e){switch(Dm(e),e.tag){case 1:return On(e.type)&&Oc(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return xa(),St(Fn),St(yn),zm(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Bm(e),null;case 13:if(St(Pt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(ie(340));_a()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return St(Pt),null;case 4:return xa(),null;case 10:return Um(e.type._context),null;case 22:case 23:return Zm(),null;case 24:return null;default:return null}}var Cu=!1,mn=!1,dT=typeof WeakSet=="function"?WeakSet:Set,Te=null;function Xo(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Ft(n,e,i)}else t.current=null}function Wh(n,e,t){try{t()}catch(i){Ft(n,e,i)}}var Z_=!1;function hT(n,e){if(Ch=Ic,n=Ox(),bm(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=n,f=null;t:for(;;){for(var p;d!==t||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===n)break t;if(f===t&&++u===r&&(a=o),f===s&&++c===i&&(l=o),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Rh={focusedElem:n,selectionRange:t},Ic=!1,Te=e;Te!==null;)if(e=Te,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,Te=n;else for(;Te!==null;){e=Te;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var v=_.memoizedProps,g=_.memoizedState,h=e.stateNode,m=h.getSnapshotBeforeUpdate(e.elementType===e.type?v:Ri(e.type,v),g);h.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ie(163))}}catch(S){Ft(e,e.return,S)}if(n=e.sibling,n!==null){n.return=e.return,Te=n;break}Te=e.return}return _=Z_,Z_=!1,_}function _l(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Wh(e,t,s)}r=r.next}while(r!==i)}}function Af(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Xh(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function Iy(n){var e=n.alternate;e!==null&&(n.alternate=null,Iy(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Yi],delete e[kl],delete e[Dh],delete e[$1],delete e[K1])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Ny(n){return n.tag===5||n.tag===3||n.tag===4}function Q_(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Ny(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Yh(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Fc));else if(i!==4&&(n=n.child,n!==null))for(Yh(n,e,t),n=n.sibling;n!==null;)Yh(n,e,t),n=n.sibling}function jh(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(jh(n,e,t),n=n.sibling;n!==null;)jh(n,e,t),n=n.sibling}var rn=null,bi=!1;function Or(n,e,t){for(t=t.child;t!==null;)Uy(n,e,t),t=t.sibling}function Uy(n,e,t){if(Qi&&typeof Qi.onCommitFiberUnmount=="function")try{Qi.onCommitFiberUnmount(vf,t)}catch{}switch(t.tag){case 5:mn||Xo(t,e);case 6:var i=rn,r=bi;rn=null,Or(n,e,t),rn=i,bi=r,rn!==null&&(bi?(n=rn,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):rn.removeChild(t.stateNode));break;case 18:rn!==null&&(bi?(n=rn,t=t.stateNode,n.nodeType===8?ad(n.parentNode,t):n.nodeType===1&&ad(n,t),Il(n)):ad(rn,t.stateNode));break;case 4:i=rn,r=bi,rn=t.stateNode.containerInfo,bi=!0,Or(n,e,t),rn=i,bi=r;break;case 0:case 11:case 14:case 15:if(!mn&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Wh(t,e,o),r=r.next}while(r!==i)}Or(n,e,t);break;case 1:if(!mn&&(Xo(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){Ft(t,e,a)}Or(n,e,t);break;case 21:Or(n,e,t);break;case 22:t.mode&1?(mn=(i=mn)||t.memoizedState!==null,Or(n,e,t),mn=i):Or(n,e,t);break;default:Or(n,e,t)}}function J_(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new dT),e.forEach(function(i){var r=MT.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Ei(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:rn=a.stateNode,bi=!1;break e;case 3:rn=a.stateNode.containerInfo,bi=!0;break e;case 4:rn=a.stateNode.containerInfo,bi=!0;break e}a=a.return}if(rn===null)throw Error(ie(160));Uy(s,o,r),rn=null,bi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Ft(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Fy(e,n),e=e.sibling}function Fy(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Ei(e,n),zi(n),i&4){try{_l(3,n,n.return),Af(3,n)}catch(v){Ft(n,n.return,v)}try{_l(5,n,n.return)}catch(v){Ft(n,n.return,v)}}break;case 1:Ei(e,n),zi(n),i&512&&t!==null&&Xo(t,t.return);break;case 5:if(Ei(e,n),zi(n),i&512&&t!==null&&Xo(t,t.return),n.flags&32){var r=n.stateNode;try{bl(r,"")}catch(v){Ft(n,n.return,v)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&rx(r,s),_h(a,o);var u=_h(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?ux(r,d):c==="dangerouslySetInnerHTML"?ax(r,d):c==="children"?bl(r,d):gm(r,c,d,u)}switch(a){case"input":dh(r,s);break;case"textarea":sx(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Zo(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?Zo(r,!!s.multiple,s.defaultValue,!0):Zo(r,!!s.multiple,s.multiple?[]:"",!1))}r[kl]=s}catch(v){Ft(n,n.return,v)}}break;case 6:if(Ei(e,n),zi(n),i&4){if(n.stateNode===null)throw Error(ie(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(v){Ft(n,n.return,v)}}break;case 3:if(Ei(e,n),zi(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{Il(e.containerInfo)}catch(v){Ft(n,n.return,v)}break;case 4:Ei(e,n),zi(n);break;case 13:Ei(e,n),zi(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||($m=Gt())),i&4&&J_(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(mn=(u=mn)||c,Ei(e,n),mn=u):Ei(e,n),zi(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(Te=n,c=n.child;c!==null;){for(d=Te=c;Te!==null;){switch(f=Te,p=f.child,f.tag){case 0:case 11:case 14:case 15:_l(4,f,f.return);break;case 1:Xo(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){i=f,t=f.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(v){Ft(i,t,v)}}break;case 5:Xo(f,f.return);break;case 22:if(f.memoizedState!==null){t0(d);continue}}p!==null?(p.return=f,Te=p):t0(d)}c=c.sibling}e:for(c=null,d=n;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=lx("display",o))}catch(v){Ft(n,n.return,v)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(v){Ft(n,n.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===n)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===n)break e;for(;d.sibling===null;){if(d.return===null||d.return===n)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Ei(e,n),zi(n),i&4&&J_(n);break;case 21:break;default:Ei(e,n),zi(n)}}function zi(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(Ny(t)){var i=t;break e}t=t.return}throw Error(ie(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(bl(r,""),i.flags&=-33);var s=Q_(n);jh(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Q_(n);Yh(n,a,o);break;default:throw Error(ie(161))}}catch(l){Ft(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function pT(n,e,t){Te=n,Oy(n)}function Oy(n,e,t){for(var i=(n.mode&1)!==0;Te!==null;){var r=Te,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Cu;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||mn;a=Cu;var u=mn;if(Cu=o,(mn=l)&&!u)for(Te=r;Te!==null;)o=Te,l=o.child,o.tag===22&&o.memoizedState!==null?n0(r):l!==null?(l.return=o,Te=l):n0(r);for(;s!==null;)Te=s,Oy(s),s=s.sibling;Te=r,Cu=a,mn=u}e0(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Te=s):e0(n)}}function e0(n){for(;Te!==null;){var e=Te;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:mn||Af(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!mn)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:Ri(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&k_(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}k_(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Il(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ie(163))}mn||e.flags&512&&Xh(e)}catch(f){Ft(e,e.return,f)}}if(e===n){Te=null;break}if(t=e.sibling,t!==null){t.return=e.return,Te=t;break}Te=e.return}}function t0(n){for(;Te!==null;){var e=Te;if(e===n){Te=null;break}var t=e.sibling;if(t!==null){t.return=e.return,Te=t;break}Te=e.return}}function n0(n){for(;Te!==null;){var e=Te;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Af(4,e)}catch(l){Ft(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Ft(e,r,l)}}var s=e.return;try{Xh(e)}catch(l){Ft(e,s,l)}break;case 5:var o=e.return;try{Xh(e)}catch(l){Ft(e,o,l)}}}catch(l){Ft(e,e.return,l)}if(e===n){Te=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Te=a;break}Te=e.return}}var mT=Math.ceil,jc=Ir.ReactCurrentDispatcher,jm=Ir.ReactCurrentOwner,xi=Ir.ReactCurrentBatchConfig,it=0,en=null,Xt=null,an=0,jn=0,Yo=Ms(0),qt=0,Wl=null,io=0,Cf=0,qm=0,vl=null,In=null,$m=0,Sa=1/0,dr=null,qc=!1,qh=null,cs=null,Ru=!1,Qr=null,$c=0,xl=0,$h=null,hc=-1,pc=0;function Cn(){return it&6?Gt():hc!==-1?hc:hc=Gt()}function fs(n){return n.mode&1?it&2&&an!==0?an&-an:Q1.transition!==null?(pc===0&&(pc=Sx()),pc):(n=ct,n!==0||(n=window.event,n=n===void 0?16:Rx(n.type)),n):1}function Ui(n,e,t,i){if(50<xl)throw xl=0,$h=null,Error(ie(185));su(n,t,i),(!(it&2)||n!==en)&&(n===en&&(!(it&2)&&(Cf|=t),qt===4&&qr(n,an)),kn(n,i),t===1&&it===0&&!(e.mode&1)&&(Sa=Gt()+500,Ef&&Es()))}function kn(n,e){var t=n.callbackNode;QE(n,e);var i=Lc(n,n===en?an:0);if(i===0)t!==null&&f_(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&f_(t),e===1)n.tag===0?Z1(i0.bind(null,n)):jx(i0.bind(null,n)),j1(function(){!(it&6)&&Es()}),t=null;else{switch(Mx(i)){case 1:t=Sm;break;case 4:t=xx;break;case 16:t=Dc;break;case 536870912:t=yx;break;default:t=Dc}t=Xy(t,ky.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function ky(n,e){if(hc=-1,pc=0,it&6)throw Error(ie(327));var t=n.callbackNode;if(na()&&n.callbackNode!==t)return null;var i=Lc(n,n===en?an:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=Kc(n,i);else{e=i;var r=it;it|=2;var s=zy();(en!==n||an!==e)&&(dr=null,Sa=Gt()+500,qs(n,e));do try{vT();break}catch(a){By(n,a)}while(!0);Nm(),jc.current=s,it=r,Xt!==null?e=0:(en=null,an=0,e=qt)}if(e!==0){if(e===2&&(r=Mh(n),r!==0&&(i=r,e=Kh(n,r))),e===1)throw t=Wl,qs(n,0),qr(n,i),kn(n,Gt()),t;if(e===6)qr(n,i);else{if(r=n.current.alternate,!(i&30)&&!gT(r)&&(e=Kc(n,i),e===2&&(s=Mh(n),s!==0&&(i=s,e=Kh(n,s))),e===1))throw t=Wl,qs(n,0),qr(n,i),kn(n,Gt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(ie(345));case 2:Ns(n,In,dr);break;case 3:if(qr(n,i),(i&130023424)===i&&(e=$m+500-Gt(),10<e)){if(Lc(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){Cn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Ph(Ns.bind(null,n,In,dr),e);break}Ns(n,In,dr);break;case 4:if(qr(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-Ni(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Gt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*mT(i/1960))-i,10<i){n.timeoutHandle=Ph(Ns.bind(null,n,In,dr),i);break}Ns(n,In,dr);break;case 5:Ns(n,In,dr);break;default:throw Error(ie(329))}}}return kn(n,Gt()),n.callbackNode===t?ky.bind(null,n):null}function Kh(n,e){var t=vl;return n.current.memoizedState.isDehydrated&&(qs(n,e).flags|=256),n=Kc(n,e),n!==2&&(e=In,In=t,e!==null&&Zh(e)),n}function Zh(n){In===null?In=n:In.push.apply(In,n)}function gT(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!Oi(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function qr(n,e){for(e&=~qm,e&=~Cf,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-Ni(e),i=1<<t;n[t]=-1,e&=~i}}function i0(n){if(it&6)throw Error(ie(327));na();var e=Lc(n,0);if(!(e&1))return kn(n,Gt()),null;var t=Kc(n,e);if(n.tag!==0&&t===2){var i=Mh(n);i!==0&&(e=i,t=Kh(n,i))}if(t===1)throw t=Wl,qs(n,0),qr(n,e),kn(n,Gt()),t;if(t===6)throw Error(ie(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Ns(n,In,dr),kn(n,Gt()),null}function Km(n,e){var t=it;it|=1;try{return n(e)}finally{it=t,it===0&&(Sa=Gt()+500,Ef&&Es())}}function ro(n){Qr!==null&&Qr.tag===0&&!(it&6)&&na();var e=it;it|=1;var t=xi.transition,i=ct;try{if(xi.transition=null,ct=1,n)return n()}finally{ct=i,xi.transition=t,it=e,!(it&6)&&Es()}}function Zm(){jn=Yo.current,St(Yo)}function qs(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,Y1(t)),Xt!==null)for(t=Xt.return;t!==null;){var i=t;switch(Dm(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Oc();break;case 3:xa(),St(Fn),St(yn),zm();break;case 5:Bm(i);break;case 4:xa();break;case 13:St(Pt);break;case 19:St(Pt);break;case 10:Um(i.type._context);break;case 22:case 23:Zm()}t=t.return}if(en=n,Xt=n=ds(n.current,null),an=jn=e,qt=0,Wl=null,qm=Cf=io=0,In=vl=null,zs!==null){for(e=0;e<zs.length;e++)if(t=zs[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}zs=null}return n}function By(n,e){do{var t=Xt;try{if(Nm(),cc.current=Yc,Xc){for(var i=It.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Xc=!1}if(no=0,Qt=jt=It=null,gl=!1,Vl=0,jm.current=null,t===null||t.return===null){qt=1,Wl=e,Xt=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=an,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=W_(o);if(p!==null){p.flags&=-257,X_(p,o,a,s,e),p.mode&1&&H_(s,u,e),e=p,l=u;var _=e.updateQueue;if(_===null){var v=new Set;v.add(l),e.updateQueue=v}else _.add(l);break e}else{if(!(e&1)){H_(s,u,e),Qm();break e}l=Error(ie(426))}}else if(At&&a.mode&1){var g=W_(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),X_(g,o,a,s,e),Lm(ya(l,a));break e}}s=l=ya(l,a),qt!==4&&(qt=2),vl===null?vl=[s]:vl.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=My(s,l,e);O_(s,h);break e;case 1:a=l;var m=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(cs===null||!cs.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=Ey(s,a,e);O_(s,S);break e}}s=s.return}while(s!==null)}Gy(t)}catch(T){e=T,Xt===t&&t!==null&&(Xt=t=t.return);continue}break}while(!0)}function zy(){var n=jc.current;return jc.current=Yc,n===null?Yc:n}function Qm(){(qt===0||qt===3||qt===2)&&(qt=4),en===null||!(io&268435455)&&!(Cf&268435455)||qr(en,an)}function Kc(n,e){var t=it;it|=2;var i=zy();(en!==n||an!==e)&&(dr=null,qs(n,e));do try{_T();break}catch(r){By(n,r)}while(!0);if(Nm(),it=t,jc.current=i,Xt!==null)throw Error(ie(261));return en=null,an=0,qt}function _T(){for(;Xt!==null;)Vy(Xt)}function vT(){for(;Xt!==null&&!HE();)Vy(Xt)}function Vy(n){var e=Wy(n.alternate,n,jn);n.memoizedProps=n.pendingProps,e===null?Gy(n):Xt=e,jm.current=null}function Gy(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=fT(t,e),t!==null){t.flags&=32767,Xt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{qt=6,Xt=null;return}}else if(t=cT(t,e,jn),t!==null){Xt=t;return}if(e=e.sibling,e!==null){Xt=e;return}Xt=e=n}while(e!==null);qt===0&&(qt=5)}function Ns(n,e,t){var i=ct,r=xi.transition;try{xi.transition=null,ct=1,xT(n,e,t,i)}finally{xi.transition=r,ct=i}return null}function xT(n,e,t,i){do na();while(Qr!==null);if(it&6)throw Error(ie(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(ie(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(JE(n,s),n===en&&(Xt=en=null,an=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Ru||(Ru=!0,Xy(Dc,function(){return na(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=xi.transition,xi.transition=null;var o=ct;ct=1;var a=it;it|=4,jm.current=null,hT(n,t),Fy(t,n),B1(Rh),Ic=!!Ch,Rh=Ch=null,n.current=t,pT(t),WE(),it=a,ct=o,xi.transition=s}else n.current=t;if(Ru&&(Ru=!1,Qr=n,$c=r),s=n.pendingLanes,s===0&&(cs=null),jE(t.stateNode),kn(n,Gt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(qc)throw qc=!1,n=qh,qh=null,n;return $c&1&&n.tag!==0&&na(),s=n.pendingLanes,s&1?n===$h?xl++:(xl=0,$h=n):xl=0,Es(),null}function na(){if(Qr!==null){var n=Mx($c),e=xi.transition,t=ct;try{if(xi.transition=null,ct=16>n?16:n,Qr===null)var i=!1;else{if(n=Qr,Qr=null,$c=0,it&6)throw Error(ie(331));var r=it;for(it|=4,Te=n.current;Te!==null;){var s=Te,o=s.child;if(Te.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(Te=u;Te!==null;){var c=Te;switch(c.tag){case 0:case 11:case 15:_l(8,c,s)}var d=c.child;if(d!==null)d.return=c,Te=d;else for(;Te!==null;){c=Te;var f=c.sibling,p=c.return;if(Iy(c),c===u){Te=null;break}if(f!==null){f.return=p,Te=f;break}Te=p}}}var _=s.alternate;if(_!==null){var v=_.child;if(v!==null){_.child=null;do{var g=v.sibling;v.sibling=null,v=g}while(v!==null)}}Te=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Te=o;else e:for(;Te!==null;){if(s=Te,s.flags&2048)switch(s.tag){case 0:case 11:case 15:_l(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,Te=h;break e}Te=s.return}}var m=n.current;for(Te=m;Te!==null;){o=Te;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,Te=x;else e:for(o=m;Te!==null;){if(a=Te,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Af(9,a)}}catch(T){Ft(a,a.return,T)}if(a===o){Te=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,Te=S;break e}Te=a.return}}if(it=r,Es(),Qi&&typeof Qi.onPostCommitFiberRoot=="function")try{Qi.onPostCommitFiberRoot(vf,n)}catch{}i=!0}return i}finally{ct=t,xi.transition=e}}return!1}function r0(n,e,t){e=ya(t,e),e=My(n,e,1),n=us(n,e,1),e=Cn(),n!==null&&(su(n,1,e),kn(n,e))}function Ft(n,e,t){if(n.tag===3)r0(n,n,t);else for(;e!==null;){if(e.tag===3){r0(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(cs===null||!cs.has(i))){n=ya(t,n),n=Ey(e,n,1),e=us(e,n,1),n=Cn(),e!==null&&(su(e,1,n),kn(e,n));break}}e=e.return}}function yT(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=Cn(),n.pingedLanes|=n.suspendedLanes&t,en===n&&(an&t)===t&&(qt===4||qt===3&&(an&130023424)===an&&500>Gt()-$m?qs(n,0):qm|=t),kn(n,e)}function Hy(n,e){e===0&&(n.mode&1?(e=vu,vu<<=1,!(vu&130023424)&&(vu=4194304)):e=1);var t=Cn();n=Ar(n,e),n!==null&&(su(n,e,t),kn(n,t))}function ST(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),Hy(n,t)}function MT(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(ie(314))}i!==null&&i.delete(e),Hy(n,t)}var Wy;Wy=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||Fn.current)Un=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return Un=!1,uT(n,e,t);Un=!!(n.flags&131072)}else Un=!1,At&&e.flags&1048576&&qx(e,zc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;dc(n,e),n=e.pendingProps;var r=ga(e,yn.current);ta(e,t),r=Gm(null,e,i,n,r,t);var s=Hm();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,On(i)?(s=!0,kc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Om(e),r.updater=wf,e.stateNode=r,r._reactInternals=e,Oh(e,i,n,t),e=zh(null,e,i,!0,s,t)):(e.tag=0,At&&s&&Pm(e),An(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(dc(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=TT(i),n=Ri(i,n),r){case 0:e=Bh(null,e,i,n,t);break e;case 1:e=q_(null,e,i,n,t);break e;case 11:e=Y_(null,e,i,n,t);break e;case 14:e=j_(null,e,i,Ri(i.type,n),t);break e}throw Error(ie(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ri(i,r),Bh(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ri(i,r),q_(n,e,i,r,t);case 3:e:{if(Cy(e),n===null)throw Error(ie(387));i=e.pendingProps,s=e.memoizedState,r=s.element,ey(n,e),Hc(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ya(Error(ie(423)),e),e=$_(n,e,i,t,r);break e}else if(i!==r){r=ya(Error(ie(424)),e),e=$_(n,e,i,t,r);break e}else for(ei=ls(e.stateNode.containerInfo.firstChild),ii=e,At=!0,Pi=null,t=Qx(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(_a(),i===r){e=Cr(n,e,t);break e}An(n,e,i,t)}e=e.child}return e;case 5:return ty(e),n===null&&Nh(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,bh(i,r)?o=null:s!==null&&bh(i,s)&&(e.flags|=32),Ay(n,e),An(n,e,o,t),e.child;case 6:return n===null&&Nh(e),null;case 13:return Ry(n,e,t);case 4:return km(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=va(e,null,i,t):An(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ri(i,r),Y_(n,e,i,r,t);case 7:return An(n,e,e.pendingProps,t),e.child;case 8:return An(n,e,e.pendingProps.children,t),e.child;case 12:return An(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,xt(Vc,i._currentValue),i._currentValue=o,s!==null)if(Oi(s.value,o)){if(s.children===r.children&&!Fn.current){e=Cr(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Sr(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Uh(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ie(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Uh(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}An(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ta(e,t),r=Si(r),i=i(r),e.flags|=1,An(n,e,i,t),e.child;case 14:return i=e.type,r=Ri(i,e.pendingProps),r=Ri(i.type,r),j_(n,e,i,r,t);case 15:return Ty(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ri(i,r),dc(n,e),e.tag=1,On(i)?(n=!0,kc(e)):n=!1,ta(e,t),Sy(e,i,r),Oh(e,i,r,t),zh(null,e,i,!0,n,t);case 19:return by(n,e,t);case 22:return wy(n,e,t)}throw Error(ie(156,e.tag))};function Xy(n,e){return vx(n,e)}function ET(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gi(n,e,t,i){return new ET(n,e,t,i)}function Jm(n){return n=n.prototype,!(!n||!n.isReactComponent)}function TT(n){if(typeof n=="function")return Jm(n)?1:0;if(n!=null){if(n=n.$$typeof,n===vm)return 11;if(n===xm)return 14}return 2}function ds(n,e){var t=n.alternate;return t===null?(t=gi(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function mc(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")Jm(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case Fo:return $s(t.children,r,s,e);case _m:o=8,r|=8;break;case ah:return n=gi(12,t,e,r|2),n.elementType=ah,n.lanes=s,n;case lh:return n=gi(13,t,e,r),n.elementType=lh,n.lanes=s,n;case uh:return n=gi(19,t,e,r),n.elementType=uh,n.lanes=s,n;case tx:return Rf(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Jv:o=10;break e;case ex:o=9;break e;case vm:o=11;break e;case xm:o=14;break e;case Wr:o=16,i=null;break e}throw Error(ie(130,n==null?n:typeof n,""))}return e=gi(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function $s(n,e,t,i){return n=gi(7,n,i,e),n.lanes=t,n}function Rf(n,e,t,i){return n=gi(22,n,i,e),n.elementType=tx,n.lanes=t,n.stateNode={isHidden:!1},n}function md(n,e,t){return n=gi(6,n,null,e),n.lanes=t,n}function gd(n,e,t){return e=gi(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function wT(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Kf(0),this.expirationTimes=Kf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Kf(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function eg(n,e,t,i,r,s,o,a,l){return n=new wT(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=gi(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Om(s),n}function AT(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Uo,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function Yy(n){if(!n)return gs;n=n._reactInternals;e:{if(lo(n)!==n||n.tag!==1)throw Error(ie(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(On(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ie(171))}if(n.tag===1){var t=n.type;if(On(t))return Yx(n,t,e)}return e}function jy(n,e,t,i,r,s,o,a,l){return n=eg(t,i,!0,n,r,s,o,a,l),n.context=Yy(null),t=n.current,i=Cn(),r=fs(t),s=Sr(i,r),s.callback=e??null,us(t,s,r),n.current.lanes=r,su(n,r,i),kn(n,i),n}function bf(n,e,t,i){var r=e.current,s=Cn(),o=fs(r);return t=Yy(t),e.context===null?e.context=t:e.pendingContext=t,e=Sr(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=us(r,e,o),n!==null&&(Ui(n,r,o,s),uc(n,r,o)),o}function Zc(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function s0(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function tg(n,e){s0(n,e),(n=n.alternate)&&s0(n,e)}function CT(){return null}var qy=typeof reportError=="function"?reportError:function(n){console.error(n)};function ng(n){this._internalRoot=n}Pf.prototype.render=ng.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(ie(409));bf(n,e,null,null)};Pf.prototype.unmount=ng.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;ro(function(){bf(null,n,null,null)}),e[wr]=null}};function Pf(n){this._internalRoot=n}Pf.prototype.unstable_scheduleHydration=function(n){if(n){var e=wx();n={blockedOn:null,target:n,priority:e};for(var t=0;t<jr.length&&e!==0&&e<jr[t].priority;t++);jr.splice(t,0,n),t===0&&Cx(n)}};function ig(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Df(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function o0(){}function RT(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Zc(o);s.call(u)}}var o=jy(e,i,n,0,null,!1,!1,"",o0);return n._reactRootContainer=o,n[wr]=o.current,Fl(n.nodeType===8?n.parentNode:n),ro(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Zc(l);a.call(u)}}var l=eg(n,0,!1,null,null,!1,!1,"",o0);return n._reactRootContainer=l,n[wr]=l.current,Fl(n.nodeType===8?n.parentNode:n),ro(function(){bf(e,l,t,i)}),l}function Lf(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Zc(o);a.call(l)}}bf(e,o,n,r)}else o=RT(t,e,n,r,i);return Zc(o)}Ex=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=sl(e.pendingLanes);t!==0&&(Mm(e,t|1),kn(e,Gt()),!(it&6)&&(Sa=Gt()+500,Es()))}break;case 13:ro(function(){var i=Ar(n,1);if(i!==null){var r=Cn();Ui(i,n,1,r)}}),tg(n,1)}};Em=function(n){if(n.tag===13){var e=Ar(n,134217728);if(e!==null){var t=Cn();Ui(e,n,134217728,t)}tg(n,134217728)}};Tx=function(n){if(n.tag===13){var e=fs(n),t=Ar(n,e);if(t!==null){var i=Cn();Ui(t,n,e,i)}tg(n,e)}};wx=function(){return ct};Ax=function(n,e){var t=ct;try{return ct=n,e()}finally{ct=t}};xh=function(n,e,t){switch(e){case"input":if(dh(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Mf(i);if(!r)throw Error(ie(90));ix(i),dh(i,r)}}}break;case"textarea":sx(n,t);break;case"select":e=t.value,e!=null&&Zo(n,!!t.multiple,e,!1)}};dx=Km;hx=ro;var bT={usingClientEntryPoint:!1,Events:[au,zo,Mf,cx,fx,Km]},Ya={findFiberByHostInstance:Bs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},PT={bundleType:Ya.bundleType,version:Ya.version,rendererPackageName:Ya.rendererPackageName,rendererConfig:Ya.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ir.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=gx(n),n===null?null:n.stateNode},findFiberByHostInstance:Ya.findFiberByHostInstance||CT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bu.isDisabled&&bu.supportsFiber)try{vf=bu.inject(PT),Qi=bu}catch{}}li.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bT;li.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ig(e))throw Error(ie(200));return AT(n,e,null,t)};li.createRoot=function(n,e){if(!ig(n))throw Error(ie(299));var t=!1,i="",r=qy;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=eg(n,1,!1,null,null,t,!1,i,r),n[wr]=e.current,Fl(n.nodeType===8?n.parentNode:n),new ng(e)};li.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(ie(188)):(n=Object.keys(n).join(","),Error(ie(268,n)));return n=gx(e),n=n===null?null:n.stateNode,n};li.flushSync=function(n){return ro(n)};li.hydrate=function(n,e,t){if(!Df(e))throw Error(ie(200));return Lf(null,n,e,!0,t)};li.hydrateRoot=function(n,e,t){if(!ig(n))throw Error(ie(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=qy;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=jy(e,null,n,1,t??null,r,!1,s,o),n[wr]=e.current,Fl(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Pf(e)};li.render=function(n,e,t){if(!Df(e))throw Error(ie(200));return Lf(null,n,e,!1,t)};li.unmountComponentAtNode=function(n){if(!Df(n))throw Error(ie(40));return n._reactRootContainer?(ro(function(){Lf(null,null,n,!1,function(){n._reactRootContainer=null,n[wr]=null})}),!0):!1};li.unstable_batchedUpdates=Km;li.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Df(t))throw Error(ie(200));if(n==null||n._reactInternals===void 0)throw Error(ie(38));return Lf(n,e,t,!1,i)};li.version="18.3.1-next-f1338f8080-20240426";function $y(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($y)}catch(n){console.error(n)}}$y(),$v.exports=li;var DT=$v.exports,a0=DT;sh.createRoot=a0.createRoot,sh.hydrateRoot=a0.hydrateRoot;function hr(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Ky(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ri={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Xl={duration:.5,overwrite:!1,delay:0},rg,ln,Ct,_i=1e8,_t=1/_i,Qh=Math.PI*2,LT=Qh/4,IT=0,Zy=Math.sqrt,NT=Math.cos,UT=Math.sin,tn=function(e){return typeof e=="string"},kt=function(e){return typeof e=="function"},Rr=function(e){return typeof e=="number"},sg=function(e){return typeof e>"u"},nr=function(e){return typeof e=="object"},Bn=function(e){return e!==!1},og=function(){return typeof window<"u"},Pu=function(e){return kt(e)||tn(e)},Qy=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},vn=Array.isArray,FT=/random\([^)]+\)/g,OT=/,\s*/g,l0=/(?:-?\.?\d|\.)+/gi,Jy=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,jo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,_d=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,eS=/[+-]=-?[.\d]+/,kT=/[^,'"\[\]\s]+/gi,BT=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Dt,Wi,Jh,ag,oi={},Qc={},tS,nS=function(e){return(Qc=Ma(e,oi))&&Hn},lg=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Yl=function(e,t){return!t&&console.warn(e)},iS=function(e,t){return e&&(oi[e]=t)&&Qc&&(Qc[e]=t)||oi},jl=function(){return 0},zT={suppressEvents:!0,isStart:!0,kill:!1},gc={suppressEvents:!0,kill:!1},VT={suppressEvents:!0},ug={},hs=[],ep={},rS,qn={},vd={},u0=30,_c=[],cg="",fg=function(e){var t=e[0],i,r;if(nr(t)||kt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=_c.length;r--&&!_c[r].targetTest(t););i=_c[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new AS(e[r],i)))||e.splice(r,1);return e},Ks=function(e){return e._gsap||fg(vi(e))[0]._gsap},sS=function(e,t,i){return(i=e[t])&&kt(i)?e[t]():sg(i)&&e.getAttribute&&e.getAttribute(t)||i},zn=function(e,t){return(e=e.split(",")).forEach(t)||e},Vt=function(e){return Math.round(e*1e5)/1e5||0},bt=function(e){return Math.round(e*1e7)/1e7||0},ia=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},GT=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},Jc=function(){var e=hs.length,t=hs.slice(0),i,r;for(ep={},hs.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},dg=function(e){return!!(e._initted||e._startAt||e.add)},oS=function(e,t,i,r){hs.length&&!ln&&Jc(),e.render(t,i,!!(ln&&t<0&&dg(e))),hs.length&&!ln&&Jc()},aS=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(kT).length<2?t:tn(e)?e.trim():e},lS=function(e){return e},ai=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},HT=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},Ma=function(e,t){for(var i in t)e[i]=t[i];return e},c0=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=nr(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},ef=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},yl=function(e){var t=e.parent||Dt,i=e.keyframes?HT(vn(e.keyframes)):ai;if(Bn(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},WT=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},uS=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},If=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},_s=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Zs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},XT=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},tp=function(e,t,i,r){return e._startAt&&(ln?e._startAt.revert(gc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},YT=function n(e){return!e||e._ts&&n(e.parent)},f0=function(e){return e._repeat?Ea(e._tTime,e=e.duration()+e._rDelay)*e:0},Ea=function(e,t){var i=Math.floor(e=bt(e/t));return e&&i===e?i-1:i},tf=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Nf=function(e){return e._end=bt(e._start+(e._tDur/Math.abs(e._ts||e._rts||_t)||0))},Uf=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=bt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Nf(e),i._dirty||Zs(i,e)),e},cS=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=tf(e.rawTime(),t),(!t._dur||uu(0,t.totalDuration(),i)-t._tTime>_t)&&t.render(i,!0)),Zs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-_t}},ji=function(e,t,i,r){return t.parent&&_s(t),t._start=bt((Rr(i)?i:i||e!==Dt?di(e,i,t):e._time)+t._delay),t._end=bt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),uS(e,t,"_first","_last",e._sort?"_start":0),np(t)||(e._recent=t),r||cS(e,t),e._ts<0&&Uf(e,e._tTime),e},fS=function(e,t){return(oi.ScrollTrigger||lg("scrollTrigger",t))&&oi.ScrollTrigger.create(t,e)},dS=function(e,t,i,r,s){if(pg(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!ln&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&rS!==Zn.frame)return hs.push(e),e._lazy=[s,r],1},jT=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},np=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},qT=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&jT(e)&&!(!e._initted&&np(e))||(e._ts<0||e._dp._ts<0)&&!np(e))?0:1,a=e._rDelay,l=0,u,c,d;if(a&&e._repeat&&(l=uu(0,e._tDur,t),c=Ea(l,a),e._yoyo&&c&1&&(o=1-o),c!==Ea(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||ln||r||e._zTime===_t||!t&&e._zTime){if(!e._initted&&dS(e,t,r,i,l))return;for(d=e._zTime,e._zTime=t||(i?_t:0),i||(i=t&&!d),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&tp(e,t,i,!0),e._onUpdate&&!i&&ti(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&ti(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&_s(e,1),!i&&!ln&&(ti(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},$T=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Ta=function(e,t,i,r){var s=e._repeat,o=bt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:bt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&Uf(e,e._tTime=e._tDur*a),e.parent&&Nf(e),i||Zs(e.parent,e),e},d0=function(e){return e instanceof Nn?Zs(e):Ta(e,e._dur)},KT={_start:0,endTime:jl,totalDuration:jl},di=function n(e,t,i){var r=e.labels,s=e._recent||KT,o=e.duration()>=_i?s.endTime(!1):e._dur,a,l,u;return tn(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&i&&(l=l/100*(vn(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},Sl=function(e,t,i){var r=Rr(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Bn(l.vars.inherit)&&l.parent;o.immediateRender=Bn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Wt(t[0],o,t[s+1])},Ts=function(e,t){return e||e===0?t(e):t},uu=function(e,t,i){return i<e?e:i>t?t:i},gn=function(e,t){return!tn(e)||!(t=BT.exec(e))?"":t[1]},ZT=function(e,t,i){return Ts(i,function(r){return uu(e,t,r)})},ip=[].slice,hS=function(e,t){return e&&nr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&nr(e[0]))&&!e.nodeType&&e!==Wi},QT=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return tn(r)&&!t||hS(r,1)?(s=i).push.apply(s,vi(r)):i.push(r)})||i},vi=function(e,t,i){return Ct&&!t&&Ct.selector?Ct.selector(e):tn(e)&&!i&&(Jh||!wa())?ip.call((t||ag).querySelectorAll(e),0):vn(e)?QT(e,i):hS(e)?ip.call(e,0):e?[e]:[]},rp=function(e){return e=vi(e)[0]||Yl("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return vi(t,i.querySelectorAll?i:i===e?Yl("Invalid scope")||ag.createElement("div"):e)}},pS=function(e){return e.sort(function(){return .5-Math.random()})},mS=function(e){if(kt(e))return e;var t=nr(e)?e:{each:e},i=Qs(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,u=t.axis,c=r,d=r;return tn(r)?c=d={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(c=r[0],d=r[1]),function(f,p,_){var v=(_||t).length,g=o[v],h,m,x,S,T,E,A,y,C;if(!g){if(C=t.grid==="auto"?0:(t.grid||[1,_i])[1],!C){for(A=-_i;A<(A=_[C++].getBoundingClientRect().left)&&C<v;);C<v&&C--}for(g=o[v]=[],h=l?Math.min(C,v)*c-.5:r%C,m=C===_i?0:l?v*d/C-.5:r/C|0,A=0,y=_i,E=0;E<v;E++)x=E%C-h,S=m-(E/C|0),g[E]=T=u?Math.abs(u==="y"?S:x):Zy(x*x+S*S),T>A&&(A=T),T<y&&(y=T);r==="random"&&pS(g),g.max=A-y,g.min=y,g.v=v=(parseFloat(t.amount)||parseFloat(t.each)*(C>v?v-1:u?u==="y"?v/C:C:Math.max(C,v/C))||0)*(r==="edges"?-1:1),g.b=v<0?s-v:s,g.u=gn(t.amount||t.each)||0,i=i&&v<0?fw(i):i}return v=(g[f]-g.min)/g.max||0,bt(g.b+(i?i(v):v)*g.v)+g.u}},sp=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=bt(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(Rr(i)?0:gn(i))}},gS=function(e,t){var i=vn(e),r,s;return!i&&nr(e)&&(r=i=e.radius||_i,e.values?(e=vi(e.values),(s=!Rr(e[0]))&&(r*=r)):e=sp(e.increment)),Ts(t,i?kt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=_i,c=0,d=e.length,f,p;d--;)s?(f=e[d].x-a,p=e[d].y-l,f=f*f+p*p):f=Math.abs(e[d]-a),f<u&&(u=f,c=d);return c=!r||u<=r?e[c]:o,s||c===o||Rr(o)?c:c+gn(o)}:sp(e))},_S=function(e,t,i,r){return Ts(vn(e)?!t:i===!0?!!(i=0):!r,function(){return vn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},JT=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},ew=function(e,t){return function(i){return e(parseFloat(i))+(t||gn(i))}},tw=function(e,t,i){return xS(e,t,0,1,i)},vS=function(e,t,i){return Ts(i,function(r){return e[~~t(r)]})},nw=function n(e,t,i){var r=t-e;return vn(e)?vS(e,n(0,e.length),t):Ts(i,function(s){return(r+(s-e)%r)%r+e})},iw=function n(e,t,i){var r=t-e,s=r*2;return vn(e)?vS(e,n(0,e.length-1),t):Ts(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},ql=function(e){return e.replace(FT,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(OT);return _S(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},xS=function(e,t,i,r,s){var o=t-e,a=r-i;return Ts(s,function(l){return i+((l-e)/o*a||0)})},rw=function n(e,t,i,r){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var o=tn(e),a={},l,u,c,d,f;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(vn(e)&&!vn(t)){for(c=[],d=e.length,f=d-2,u=1;u<d;u++)c.push(n(e[u-1],e[u]));d--,s=function(_){_*=d;var v=Math.min(f,~~_);return c[v](_-v)},i=t}else r||(e=Ma(vn(e)?[]:{},e));if(!c){for(l in t)hg.call(a,e,l,"get",t[l]);s=function(_){return _g(_,a)||(o?e.p:e)}}}return Ts(i,s)},h0=function(e,t,i){var r=e.labels,s=_i,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},ti=function(e,t,i){var r=e.vars,s=r[t],o=Ct,a=e._ctx,l,u,c;if(s)return l=r[t+"Params"],u=r.callbackScope||e,i&&hs.length&&Jc(),a&&(Ct=a),c=l?s.apply(u,l):s.call(u),Ct=o,c},al=function(e){return _s(e),e.scrollTrigger&&e.scrollTrigger.kill(!!ln),e.progress()<1&&ti(e,"onInterrupt"),e},qo,yS=[],SS=function(e){if(e)if(e=!e.name&&e.default||e,og()||e.headless){var t=e.name,i=kt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:jl,render:_g,add:hg,kill:Sw,modifier:yw,rawVars:0},o={targetTest:0,get:0,getSetter:gg,aliases:{},register:0};if(wa(),e!==r){if(qn[t])return;ai(r,ai(ef(e,s),o)),Ma(r.prototype,Ma(s,ef(e,o))),qn[r.prop=t]=r,e.targetTest&&(_c.push(r),ug[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}iS(t,r),e.register&&e.register(Hn,r,Vn)}else yS.push(e)},gt=255,ll={aqua:[0,gt,gt],lime:[0,gt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,gt],navy:[0,0,128],white:[gt,gt,gt],olive:[128,128,0],yellow:[gt,gt,0],orange:[gt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[gt,0,0],pink:[gt,192,203],cyan:[0,gt,gt],transparent:[gt,gt,gt,0]},xd=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*gt+.5|0},MS=function(e,t,i){var r=e?Rr(e)?[e>>16,e>>8&gt,e&gt]:0:ll.black,s,o,a,l,u,c,d,f,p,_;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ll[e])r=ll[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&gt,r&gt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&gt,e&gt]}else if(e.substr(0,3)==="hsl"){if(r=_=e.match(l0),!t)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,o=c<=.5?c*(u+1):c+u-c*u,s=c*2-o,r.length>3&&(r[3]*=1),r[0]=xd(l+1/3,s,o),r[1]=xd(l,s,o),r[2]=xd(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(Jy),i&&r.length<4&&(r[3]=1),r}else r=e.match(l0)||ll.transparent;r=r.map(Number)}return t&&!_&&(s=r[0]/gt,o=r[1]/gt,a=r[2]/gt,d=Math.max(s,o,a),f=Math.min(s,o,a),c=(d+f)/2,d===f?l=u=0:(p=d-f,u=c>.5?p/(2-d-f):p/(d+f),l=d===s?(o-a)/p+(o<a?6:0):d===o?(a-s)/p+2:(s-o)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},ES=function(e){var t=[],i=[],r=-1;return e.split(ps).forEach(function(s){var o=s.match(jo)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},p0=function(e,t,i){var r="",s=(e+r).match(ps),o=t?"hsla(":"rgba(",a=0,l,u,c,d;if(!s)return e;if(s=s.map(function(f){return(f=MS(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(c=ES(e),l=i.c,l.join(r)!==c.c.join(r)))for(u=e.replace(ps,"1").split(jo),d=u.length-1;a<d;a++)r+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=e.split(ps),d=u.length-1;a<d;a++)r+=u[a]+s[a];return r+u[d]},ps=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ll)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),sw=/hsl[a]?\(/,TS=function(e){var t=e.join(" "),i;if(ps.lastIndex=0,ps.test(t))return i=sw.test(t),e[1]=p0(e[1],i),e[0]=p0(e[0],i,ES(e[1])),!0},$l,Zn=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,u,c,d,f,p,_=function v(g){var h=n()-r,m=g===!0,x,S,T,E;if((h>e||h<0)&&(i+=h-t),r+=h,T=r-i,x=T-o,(x>0||m)&&(E=++d.frame,f=T-d.time*1e3,d.time=T=T/1e3,o+=x+(x>=s?4:s-x),S=1),m||(l=u(v)),S)for(p=0;p<a.length;p++)a[p](T,f,E,g)};return d={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(g){return f/(1e3/(g||60))},wake:function(){tS&&(!Jh&&og()&&(Wi=Jh=window,ag=Wi.document||{},oi.gsap=Hn,(Wi.gsapVersions||(Wi.gsapVersions=[])).push(Hn.version),nS(Qc||Wi.GreenSockGlobals||!Wi.gsap&&Wi||{}),yS.forEach(SS)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),u=c||function(g){return setTimeout(g,o-d.time*1e3+1|0)},$l=1,_(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),$l=0,u=jl},lagSmoothing:function(g,h){e=g||1/0,t=Math.min(h||33,e)},fps:function(g){s=1e3/(g||240),o=d.time*1e3+s},add:function(g,h,m){var x=h?function(S,T,E,A){g(S,T,E,A),d.remove(x)}:g;return d.remove(g),a[m?"unshift":"push"](x),wa(),x},remove:function(g,h){~(h=a.indexOf(g))&&a.splice(h,1)&&p>=h&&p--},_listeners:a},d}(),wa=function(){return!$l&&Zn.wake()},Je={},ow=/^[\d.\-M][\d.\-,\s]/,aw=/["']/g,lw=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,u;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),t[r]=isNaN(u)?u.replace(aw,"").trim():+u,r=l.substr(a+1).trim();return t},uw=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},cw=function(e){var t=(e+"").split("("),i=Je[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[lw(t[1])]:uw(e).split(",").map(aS)):Je._CE&&ow.test(e)?Je._CE("",e):i},fw=function(e){return function(t){return 1-e(1-t)}},Qs=function(e,t){return e&&(kt(e)?e:Je[e]||cw(e))||t},uo=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return zn(e,function(a){Je[a]=oi[a]=s,Je[o=a.toLowerCase()]=i;for(var l in s)Je[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Je[a+"."+l]=s[l]}),s},wS=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},yd=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/Qh*(Math.asin(1/r)||0),a=function(c){return c===1?1:r*Math.pow(2,-10*c)*UT((c-o)*s)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:wS(a);return s=Qh/s,l.config=function(u,c){return n(e,u,c)},l},Sd=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:wS(i);return r.config=function(s){return n(e,s)},r};zn("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;uo(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});Je.Linear.easeNone=Je.none=Je.Linear.easeIn;uo("Elastic",yd("in"),yd("out"),yd());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};uo("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);uo("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});uo("Circ",function(n){return-(Zy(1-n*n)-1)});uo("Sine",function(n){return n===1?1:-NT(n*LT)+1});uo("Back",Sd("in"),Sd("out"),Sd());Je.SteppedEase=Je.steps=oi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-_t;return function(a){return((r*uu(0,o,a)|0)+s)*i}}};Xl.ease=Je["quad.out"];zn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return cg+=n+","+n+"Params,"});var AS=function(e,t){this.id=IT++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:sS,this.set=t?t.getSetter:gg},Kl=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ta(this,+t.duration,1,1),this.data=t.data,Ct&&(this._ctx=Ct,Ct.data.push(this)),$l||Zn.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Ta(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(wa(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Uf(this,i),!s._dp||s.parent||cS(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&ji(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===_t||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),oS(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+f0(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+f0(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?Ea(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-_t?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?tf(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-_t?0:this._rts,this.totalTime(uu(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),Nf(this),XT(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(wa(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==_t&&(this._tTime-=_t)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=bt(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&ji(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(Bn(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?tf(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=VT);var r=ln;return ln=i,dg(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),ln=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,d0(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,d0(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(di(this,i),Bn(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,Bn(r)),this._dur||(this._zTime=-_t),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-_t:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-_t,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-_t)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(o){var a=kt(i)?i:lS,l=function(){var c=r.then;r.then=null,s&&s(),kt(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=c),o(a),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){al(this)},n}();ai(Kl.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-_t,_prom:0,_ps:!1,_rts:1});var Nn=function(n){Ky(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=Bn(i.sortChildren),Dt&&ji(i.parent||Dt,hr(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&fS(hr(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return Sl(0,arguments,this),this},t.from=function(r,s,o){return Sl(1,arguments,this),this},t.fromTo=function(r,s,o,a){return Sl(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,yl(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Wt(r,s,di(this,o),1),this},t.call=function(r,s,o){return ji(this,Wt.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,u,c){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new Wt(r,o,di(this,l)),this},t.staggerFrom=function(r,s,o,a,l,u,c){return o.runBackwards=1,yl(o).immediateRender=Bn(o.immediateRender),this.staggerTo(r,s,o,a,l,u,c)},t.staggerFromTo=function(r,s,o,a,l,u,c,d){return a.startAt=o,yl(a).immediateRender=Bn(a.immediateRender),this.staggerTo(r,s,a,l,u,c,d)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:bt(r),d=this._zTime<0!=r<0&&(this._initted||!u),f,p,_,v,g,h,m,x,S,T,E,A;if(this!==Dt&&c>l&&r>=0&&(c=l),c!==this._tTime||o||d){if(a!==this._time&&u&&(c+=this._time-a,r+=this._time-a),f=c,S=this._start,x=this._ts,h=!x,d&&(u||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(E=this._yoyo,g=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(g*100+r,s,o);if(f=bt(c%g),c===l?(v=this._repeat,f=u):(T=bt(c/g),v=~~T,v&&v===T&&(f=u,v--),f>u&&(f=u)),T=Ea(this._tTime,g),!a&&this._tTime&&T!==v&&this._tTime-T*g-this._dur<=0&&(T=v),E&&v&1&&(f=u-f,A=1),v!==T&&!this._lock){var y=E&&T&1,C=y===(E&&v&1);if(v<T&&(y=!y),a=y?0:c%u?u:c,this._lock=1,this.render(a||(A?0:bt(v*g)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&ti(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,T=v),a&&a!==this._time||h!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,C&&(this._lock=2,a=y?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!h)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(m=$T(this,bt(a),bt(f)),m&&(c-=f-(f=m._start))),this._tTime=c,this._time=f,this._act=!!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&c&&u&&!s&&!T&&(ti(this,"onStart"),this._tTime!==c))return this;if(f>=a&&r>=0)for(p=this._first;p;){if(_=p._next,(p._act||f>=p._start)&&p._ts&&m!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(f-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(f-p._start)*p._ts,s,o),f!==this._time||!this._ts&&!h){m=0,_&&(c+=this._zTime=-_t);break}}p=_}else{p=this._last;for(var b=r<0?r:f;p;){if(_=p._prev,(p._act||b<=p._end)&&p._ts&&m!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(b-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(b-p._start)*p._ts,s,o||ln&&dg(p)),f!==this._time||!this._ts&&!h){m=0,_&&(c+=this._zTime=b?-_t:_t);break}}p=_}}if(m&&!s&&(this.pause(),m.render(f>=a?0:-_t)._zTime=f>=a?1:-1,this._ts))return this._start=S,Nf(this),this.render(r,s,o);this._onUpdate&&!s&&ti(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(S===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&_s(this,1),!s&&!(r<0&&!a)&&(c||a||!l)&&(ti(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(Rr(s)||(s=di(this,s,r)),!(r instanceof Kl)){if(vn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(tn(r))return this.addLabel(r,s);if(kt(r))r=Wt.delayedCall(0,r);else return this}return this!==r?ji(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-_i);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof Wt?s&&l.push(u):(o&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return tn(r)?this.removeLabel(r):kt(r)?this.killTweensOf(r):(r.parent===this&&If(this,r),r===this._recent&&(this._recent=this._last),Zs(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=bt(Zn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=di(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=Wt.delayedCall(0,s||jl,o);return a.data="isPause",this._hasPause=1,ji(this,a,di(this,r))},t.removePause=function(r){var s=this._first;for(r=di(this,r);s;)s._start===r&&s.data==="isPause"&&_s(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)Jr!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=vi(r),l=this._first,u=Rr(s),c;l;)l instanceof Wt?GT(l._targets,a)&&(u?(!Jr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(c=l.getTweensOf(a,s)).length&&o.push.apply(o,c),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=di(o,r),l=s,u=l.startAt,c=l.onStart,d=l.onStartParams,f=l.immediateRender,p,_=Wt.to(o,ai({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||_t,onStart:function(){if(o.pause(),!p){var g=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());_._dur!==g&&Ta(_,g,0,1).render(_._time,!0,!0),p=1}c&&c.apply(_,d||[])}},s));return f?_.render(0):_},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,ai({startAt:{time:di(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),h0(this,di(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),h0(this,di(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+_t)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,u;for(r=bt(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=r);return Zs(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Zs(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=_i,u,c,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(d=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,ji(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(s-=c,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=bt(c/o._ts),o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;Ta(o,o===Dt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(Dt._ts&&(oS(Dt,tf(r,Dt)),rS=Zn.frame),Zn.frame>=u0){u0+=ri.autoSleep||120;var s=Dt._first;if((!s||!s._ts)&&ri.autoSleep&&Zn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Zn.sleep()}}},e}(Kl);ai(Nn.prototype,{_lock:0,_hasPause:0,_forcing:0});var dw=function(e,t,i,r,s,o,a){var l=new Vn(this._pt,e,t,0,1,LS,null,s),u=0,c=0,d,f,p,_,v,g,h,m;for(l.b=i,l.e=r,i+="",r+="",(h=~r.indexOf("random("))&&(r=ql(r)),o&&(m=[i,r],o(m,e,t),i=m[0],r=m[1]),f=i.match(_d)||[];d=_d.exec(r);)_=d[0],v=r.substring(u,d.index),p?p=(p+1)%5:v.substr(-5)==="rgba("&&(p=1),_!==f[c++]&&(g=parseFloat(f[c-1])||0,l._pt={_next:l._pt,p:v||c===1?v:",",s:g,c:_.charAt(1)==="="?ia(g,_)-g:parseFloat(_)-g,m:p&&p<4?Math.round:0},u=_d.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=a,(eS.test(r)||h)&&(l.e=0),this._pt=l,l},hg=function(e,t,i,r,s,o,a,l,u,c){kt(r)&&(r=r(s||0,e,o));var d=e[t],f=i!=="get"?i:kt(d)?u?e[t.indexOf("set")||!kt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():d,p=kt(d)?u?_w:PS:mg,_;if(tn(r)&&(~r.indexOf("random(")&&(r=ql(r)),r.charAt(1)==="="&&(_=ia(f,r)+(gn(f)||0),(_||_===0)&&(r=_))),!c||f!==r||op)return!isNaN(f*r)&&r!==""?(_=new Vn(this._pt,e,t,+f||0,r-(f||0),typeof d=="boolean"?xw:DS,0,p),u&&(_.fp=u),a&&_.modifier(a,this,e),this._pt=_):(!d&&!(t in e)&&lg(t,r),dw.call(this,e,t,f,r,p,l||ri.stringFilter,u))},hw=function(e,t,i,r,s){if(kt(e)&&(e=Ml(e,s,t,i,r)),!nr(e)||e.style&&e.nodeType||vn(e)||Qy(e))return tn(e)?Ml(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=Ml(e[a],s,t,i,r);return o},CS=function(e,t,i,r,s,o){var a,l,u,c;if(qn[e]&&(a=new qn[e]).init(s,a.rawVars?t[e]:hw(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new Vn(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==qo))for(u=i._ptLookup[i._targets.indexOf(s)],c=a._props.length;c--;)u[a._props[c]]=l;return a},Jr,op,pg=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.runBackwards,d=r.yoyoEase,f=r.keyframes,p=r.autoRevert,_=e._dur,v=e._startAt,g=e._targets,h=e.parent,m=h&&h.data==="nested"?h.vars.targets:g,x=e._overwrite==="auto"&&!rg,S=e.timeline,T=r.easeReverse||d,E,A,y,C,b,P,U,H,j,L,z,N,F;if(S&&(!f||!s)&&(s="none"),e._ease=Qs(s,Xl.ease),e._rEase=T&&(Qs(T)||e._ease),e._from=!S&&!!r.runBackwards,e._from&&(e.ratio=1),!S||f&&!r.stagger){if(H=g[0]?Ks(g[0]).harness:0,N=H&&r[H.prop],E=ef(r,ug),v&&(v._zTime<0&&v.progress(1),t<0&&c&&a&&!p?v.render(-1,!0):v.revert(c&&_?gc:zT),v._lazy=0),o){if(_s(e._startAt=Wt.set(g,ai({data:"isStart",overwrite:!1,parent:h,immediateRender:!0,lazy:!v&&Bn(l),startAt:null,delay:0,onUpdate:u&&function(){return ti(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(ln||!a&&!p)&&e._startAt.revert(gc),a&&_&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(c&&_&&!v){if(t&&(a=!1),y=ai({overwrite:!1,data:"isFromStart",lazy:a&&!v&&Bn(l),immediateRender:a,stagger:0,parent:h},E),N&&(y[H.prop]=N),_s(e._startAt=Wt.set(g,y)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(ln?e._startAt.revert(gc):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,_t,_t);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&Bn(l)||l&&!_,A=0;A<g.length;A++){if(b=g[A],U=b._gsap||fg(g)[A]._gsap,e._ptLookup[A]=L={},ep[U.id]&&hs.length&&Jc(),z=m===g?A:m.indexOf(b),H&&(j=new H).init(b,N||E,e,z,m)!==!1&&(e._pt=C=new Vn(e._pt,b,j.name,0,1,j.render,j,0,j.priority),j._props.forEach(function(X){L[X]=C}),j.priority&&(P=1)),!H||N)for(y in E)qn[y]&&(j=CS(y,E,e,z,b,m))?j.priority&&(P=1):L[y]=C=hg.call(e,b,y,"get",E[y],z,m,0,r.stringFilter);e._op&&e._op[A]&&e.kill(b,e._op[A]),x&&e._pt&&(Jr=e,Dt.killTweensOf(b,L,e.globalTime(t)),F=!e.parent,Jr=0),e._pt&&l&&(ep[U.id]=1)}P&&IS(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!F,f&&t<=0&&S.render(_i,!0,!0)},pw=function(e,t,i,r,s,o,a,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,d,f,p;if(!u)for(u=e._ptCache[t]=[],f=e._ptLookup,p=e._targets.length;p--;){if(c=f[p][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return op=1,e.vars[t]="+=0",pg(e,a),op=0,l?Yl(t+" not eligible for reset. Try splitting into individual properties"):1;u.push(c)}for(p=u.length;p--;)d=u[p],c=d._pt||d,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=i-c.s,d.e&&(d.e=Vt(i)+gn(d.e)),d.b&&(d.b=c.s+gn(d.b))},mw=function(e,t){var i=e[0]?Ks(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=Ma({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},gw=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(vn(t))a=i[e]||(i[e]=[]),t.forEach(function(l,u){return a.push({t:u/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Ml=function(e,t,i,r,s){return kt(e)?e.call(t,i,r,s):tn(e)&&~e.indexOf("random(")?ql(e):e},RS=cg+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",bS={};zn(RS+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return bS[n]=1});var Wt=function(n){Ky(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:yl(r))||this;var l=a.vars,u=l.duration,c=l.delay,d=l.immediateRender,f=l.stagger,p=l.overwrite,_=l.keyframes,v=l.defaults,g=l.scrollTrigger,h=r.parent||Dt,m=(vn(i)||Qy(i)?Rr(i[0]):"length"in r)?[i]:vi(i),x,S,T,E,A,y,C,b;if(a._targets=m.length?fg(m):Yl("GSAP target "+i+" not found. https://gsap.com",!ri.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,_||f||Pu(u)||Pu(c)){r=a.vars;var P=r.easeReverse||r.yoyoEase;if(x=a.timeline=new Nn({data:"nested",defaults:v||{},targets:h&&h.data==="nested"?h.vars.targets:m}),x.kill(),x.parent=x._dp=hr(a),x._start=0,f||Pu(u)||Pu(c)){if(E=m.length,C=f&&mS(f),nr(f))for(A in f)~RS.indexOf(A)&&(b||(b={}),b[A]=f[A]);for(S=0;S<E;S++)T=ef(r,bS),T.stagger=0,P&&(T.easeReverse=P),b&&Ma(T,b),y=m[S],T.duration=+Ml(u,hr(a),S,y,m),T.delay=(+Ml(c,hr(a),S,y,m)||0)-a._delay,!f&&E===1&&T.delay&&(a._delay=c=T.delay,a._start+=c,T.delay=0),x.to(y,T,C?C(S,y,m):0),x._ease=Je.none;x.duration()?u=c=0:a.timeline=0}else if(_){yl(ai(x.vars.defaults,{ease:"none"})),x._ease=Qs(_.ease||r.ease||"none");var U=0,H,j,L;if(vn(_))_.forEach(function(z){return x.to(m,z,">")}),x.duration();else{T={};for(A in _)A==="ease"||A==="easeEach"||gw(A,_[A],T,_.easeEach);for(A in T)for(H=T[A].sort(function(z,N){return z.t-N.t}),U=0,S=0;S<H.length;S++)j=H[S],L={ease:j.e,duration:(j.t-(S?H[S-1].t:0))/100*u},L[A]=j.v,x.to(m,L,U),U+=L.duration;x.duration()<u&&x.to({},{duration:u-x.duration()})}}u||a.duration(u=x.duration())}else a.timeline=0;return p===!0&&!rg&&(Jr=hr(a),Dt.killTweensOf(m),Jr=0),ji(h,hr(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(d||!u&&!_&&a._start===bt(h._time)&&Bn(d)&&YT(hr(a))&&h.data!=="nested")&&(a._tTime=-_t,a.render(Math.max(0,-c)||0)),g&&fS(hr(a),g),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,u=this._dur,c=r<0,d=r>l-_t&&!c?l:r<_t?0:r,f,p,_,v,g,h,m,x;if(!u)qT(this,r,s,o);else if(d!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(f=d,x=this.timeline,this._repeat){if(v=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(v*100+r,s,o);if(f=bt(d%v),d===l?(_=this._repeat,f=u):(g=bt(d/v),_=~~g,_&&_===g?(f=u,_--):f>u&&(f=u)),h=this._yoyo&&_&1,h&&(f=u-f),g=Ea(this._tTime,v),f===a&&!o&&this._initted&&_===g)return this._tTime=d,this;_!==g&&this.vars.repeatRefresh&&!h&&!this._lock&&f!==v&&this._initted&&(this._lock=o=1,this.render(bt(v*_),!0).invalidate()._lock=0)}if(!this._initted){if(dS(this,c?r:f,o,s,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==g))return this;if(u!==this._dur)return this.render(r,s,o)}if(this._rEase){var S=f<a;if(S!==this._inv){var T=S?a:u-a;this._inv=S,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=T?(S?-1:1)/T:0,this._invScale=S?-this.ratio:1-this.ratio,this._invEase=S?this._rEase:this._ease}this.ratio=m=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=m=this._ease(f/u);if(this._from&&(this.ratio=m=1-m),this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&d&&!s&&!g&&(ti(this,"onStart"),this._tTime!==d))return this;for(p=this._pt;p;)p.r(m,p.d),p=p._next;x&&x.render(r<0?r:x._dur*x._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&tp(this,r,s,o),ti(this,"onUpdate")),this._repeat&&_!==g&&this.vars.onRepeat&&!s&&this.parent&&ti(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(c&&!this._onUpdate&&tp(this,r,!0,!0),(r||!u)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&_s(this,1),!s&&!(c&&!a)&&(d||a||h)&&(ti(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){$l||Zn.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||pg(this,u),c=this._ease(u/this._dur),pw(this,r,s,o,a,c,u,l)?this.resetTo(r,s,o,a,1):(Uf(this,0),this.parent||uS(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?al(this):this.scrollTrigger&&this.scrollTrigger.kill(!!ln),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Jr&&Jr.vars.overwrite!==!0)._first||al(this),this.parent&&o!==this.timeline.totalDuration()&&Ta(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?vi(r):a,u=this._ptLookup,c=this._pt,d,f,p,_,v,g,h;if((!s||s==="all")&&WT(a,l))return s==="all"&&(this._pt=0),al(this);for(d=this._op=this._op||[],s!=="all"&&(tn(s)&&(v={},zn(s,function(m){return v[m]=1}),s=v),s=mw(a,s)),h=a.length;h--;)if(~l.indexOf(a[h])){f=u[h],s==="all"?(d[h]=s,_=f,p={}):(p=d[h]=d[h]||{},_=s);for(v in _)g=f&&f[v],g&&((!("kill"in g.d)||g.d.kill(v)===!0)&&If(this,g,"_pt"),delete f[v]),p!=="all"&&(p[v]=1)}return this._initted&&!this._pt&&c&&al(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Sl(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return Sl(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return Dt.killTweensOf(r,s,o)},e}(Kl);ai(Wt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});zn("staggerTo,staggerFrom,staggerFromTo",function(n){Wt[n]=function(){var e=new Nn,t=ip.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var mg=function(e,t,i){return e[t]=i},PS=function(e,t,i){return e[t](i)},_w=function(e,t,i,r){return e[t](r.fp,i)},vw=function(e,t,i){return e.setAttribute(t,i)},gg=function(e,t){return kt(e[t])?PS:sg(e[t])&&e.setAttribute?vw:mg},DS=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},xw=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},LS=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},_g=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},yw=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},Sw=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?If(this,t,"_pt"):t.dep||(i=1),t=r;return!i},Mw=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},IS=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},Vn=function(){function n(t,i,r,s,o,a,l,u,c){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||DS,this.d=l||this,this.set=u||mg,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=Mw,this.m=i,this.mt=s,this.tween=r},n}();zn(cg+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(n){return ug[n]=1});oi.TweenMax=oi.TweenLite=Wt;oi.TimelineLite=oi.TimelineMax=Nn;Dt=new Nn({sortChildren:!1,defaults:Xl,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ri.stringFilter=TS;var Js=[],vc={},Ew=[],m0=0,Tw=0,Md=function(e){return(vc[e]||Ew).map(function(t){return t()})},ap=function(){var e=Date.now(),t=[];e-m0>2&&(Md("matchMediaInit"),Js.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,u;for(a in r)o=Wi.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(i.revert(),l&&t.push(i))}),Md("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),m0=e,Md("matchMedia"))},NS=function(){function n(t,i){this.selector=i&&rp(i),this.data=[],this._r=[],this.isReverted=!1,this.id=Tw++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){kt(i)&&(s=r,r=i,i=kt);var o=this,a=function(){var u=Ct,c=o.selector,d;return u&&u!==o&&u.data.push(o),s&&(o.selector=rp(s)),Ct=o,d=r.apply(o,arguments),kt(d)&&o._r.push(d),Ct=u,o.selector=c,o.isReverted=!1,d};return o.last=a,i===kt?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=Ct;Ct=null,i(this),Ct=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof Wt&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}));for(a.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,d){return d.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=s.data.length;l--;)u=s.data[l],u instanceof Nn?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof Wt)&&u.revert&&u.revert(i);s._r.forEach(function(c){return c(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=Js.length;o--;)Js[o].id===this.id&&Js.splice(o,1)},e.revert=function(i){this.kill(i||{})},n}(),ww=function(){function n(t){this.contexts=[],this.scope=t,Ct&&Ct.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){nr(i)||(i={matches:i});var o=new NS(0,s||this.scope),a=o.conditions={},l,u,c;Ct&&!o.selector&&(o.selector=Ct.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(u in i)u==="all"?c=1:(l=Wi.matchMedia(i[u]),l&&(Js.indexOf(o)<0&&Js.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(ap):l.addEventListener("change",ap)));return c&&r(o,function(d){return o.add(null,d)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),nf={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return SS(r)})},timeline:function(e){return new Nn(e)},getTweensOf:function(e,t){return Dt.getTweensOf(e,t)},getProperty:function(e,t,i,r){tn(e)&&(e=vi(e)[0]);var s=Ks(e||{}).get,o=i?lS:aS;return i==="native"&&(i=""),e&&(t?o((qn[t]&&qn[t].get||s)(e,t,i,r)):function(a,l,u){return o((qn[a]&&qn[a].get||s)(e,a,l,u))})},quickSetter:function(e,t,i){if(e=vi(e),e.length>1){var r=e.map(function(c){return Hn.quickSetter(c,t,i)}),s=r.length;return function(c){for(var d=s;d--;)r[d](c)}}e=e[0]||{};var o=qn[t],a=Ks(e),l=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(c){var d=new o;qo._pt=0,d.init(e,i?c+i:c,qo,0,[e]),d.render(1,d),qo._pt&&_g(1,qo)}:a.set(e,l);return o?u:function(c){return u(e,l,i?c+i:c,a,1)}},quickTo:function(e,t,i){var r,s=Hn.to(e,ai((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,u,c){return s.resetTo(t,l,u,c)};return o.tween=s,o},isTweening:function(e){return Dt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Qs(e.ease,Xl.ease)),c0(Xl,e||{})},config:function(e){return c0(ri,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!qn[a]&&!oi[a]&&Yl(t+" effect requires "+a+" plugin.")}),vd[t]=function(a,l,u){return i(vi(a),ai(l||{},s),u)},o&&(Nn.prototype[t]=function(a,l,u){return this.add(vd[t](a,nr(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){Je[e]=Qs(t)},parseEase:function(e,t){return arguments.length?Qs(e,t):Je},getById:function(e){return Dt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new Nn(e),r,s;for(i.smoothChildTiming=Bn(e.smoothChildTiming),Dt.remove(i),i._dp=0,i._time=i._tTime=Dt._time,r=Dt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Wt&&r.vars.onComplete===r._targets[0]))&&ji(i,r,r._start-r._delay),r=s;return ji(Dt,i,0),i},context:function(e,t){return e?new NS(e,t):Ct},matchMedia:function(e){return new ww(e)},matchMediaRefresh:function(){return Js.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||ap()},addEventListener:function(e,t){var i=vc[e]||(vc[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=vc[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:nw,wrapYoyo:iw,distribute:mS,random:_S,snap:gS,normalize:tw,getUnit:gn,clamp:ZT,splitColor:MS,toArray:vi,selector:rp,mapRange:xS,pipe:JT,unitize:ew,interpolate:rw,shuffle:pS},install:nS,effects:vd,ticker:Zn,updateRoot:Nn.updateRoot,plugins:qn,globalTimeline:Dt,core:{PropTween:Vn,globals:iS,Tween:Wt,Timeline:Nn,Animation:Kl,getCache:Ks,_removeLinkedListItem:If,reverting:function(){return ln},context:function(e){return e&&Ct&&(Ct.data.push(e),e._ctx=Ct),Ct},suppressOverwrites:function(e){return rg=e}}};zn("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return nf[n]=Wt[n]});Zn.add(Nn.updateRoot);qo=nf.to({},{duration:0});var Aw=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},Cw=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=Aw(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},Ed=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,u;if(tn(s)&&(l={},zn(s,function(c){return l[c]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}Cw(a,s)}}}},Hn=nf.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)ln?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Ed("roundProps",sp),Ed("modifiers"),Ed("snap",gS))||nf;Wt.version=Nn.version=Hn.version="3.15.0";tS=1;og()&&wa();Je.Power0;Je.Power1;Je.Power2;Je.Power3;Je.Power4;Je.Linear;Je.Quad;Je.Cubic;Je.Quart;Je.Quint;Je.Strong;Je.Elastic;Je.Back;Je.SteppedEase;Je.Bounce;Je.Sine;Je.Expo;Je.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var g0,es,ra,vg,Gs,_0,xg,Rw=function(){return typeof window<"u"},br={},Us=180/Math.PI,sa=Math.PI/180,go=Math.atan2,v0=1e8,yg=/([A-Z])/g,bw=/(left|right|width|margin|padding|x)/i,Pw=/[\s,\(]\S/,qi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},lp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Dw=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Lw=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Iw=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Nw=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},US=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},FS=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Uw=function(e,t,i){return e.style[t]=i},Fw=function(e,t,i){return e.style.setProperty(t,i)},Ow=function(e,t,i){return e._gsap[t]=i},kw=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},Bw=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},zw=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},Lt="transform",Gn=Lt+"Origin",Vw=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in br&&s){if(this.tfm=this.tfm||{},e!=="transform")e=qi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=mr(r,a)}):this.tfm[e]=o.x?o[e]:mr(r,e),e===Gn&&(this.tfm.zOrigin=o.zOrigin);else return qi.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(Lt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Gn,t,"")),e=Lt}(s||t)&&this.props.push(e,t,s[e])},OS=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Gw=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(yg,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=xg(),(!s||!s.isStart)&&!i[Lt]&&(OS(i),r.zOrigin&&i[Gn]&&(i[Gn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},kS=function(e,t){var i={target:e,props:[],revert:Gw,save:Vw};return e._gsap||Hn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},BS,up=function(e,t){var i=es.createElementNS?es.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):es.createElement(e);return i&&i.style?i:es.createElement(e)},ni=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(yg,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,Aa(t)||t,1)||""},x0="O,Moz,ms,Ms,Webkit".split(","),Aa=function(e,t,i){var r=t||Gs,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(x0[o]+e in s););return o<0?null:(o===3?"ms":o>=0?x0[o]:"")+e},cp=function(){Rw()&&window.document&&(g0=window,es=g0.document,ra=es.documentElement,Gs=up("div")||{style:{}},up("div"),Lt=Aa(Lt),Gn=Lt+"Origin",Gs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",BS=!!Aa("perspective"),xg=Hn.core.reverting,vg=1)},y0=function(e){var t=e.ownerSVGElement,i=up("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),ra.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),ra.removeChild(i),s},S0=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},zS=function(e){var t,i;try{t=e.getBBox()}catch{t=y0(e),i=1}return t&&(t.width||t.height)||i||(t=y0(e)),t&&!t.width&&!t.x&&!t.y?{x:+S0(e,["x","cx","x1"])||0,y:+S0(e,["y","cy","y1"])||0,width:0,height:0}:t},VS=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&zS(e))},vs=function(e,t){if(t){var i=e.style,r;t in br&&t!==Gn&&(t=Lt),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(yg,"-$1").toLowerCase())):i.removeAttribute(t)}},ts=function(e,t,i,r,s,o){var a=new Vn(e._pt,t,i,0,1,o?FS:US);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},M0={deg:1,rad:1,turn:1},Hw={grid:1,flex:1},xs=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=Gs.style,l=bw.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),d=100,f=r==="px",p=r==="%",_,v,g,h;if(r===o||!s||M0[r]||M0[o])return s;if(o!=="px"&&!f&&(s=n(e,t,i,"px")),h=e.getCTM&&VS(e),(p||o==="%")&&(br[t]||~t.indexOf("adius")))return _=h?e.getBBox()[l?"width":"height"]:e[c],Vt(p?s/_*d:s/100*_);if(a[l?"width":"height"]=d+(f?o:r),v=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,h&&(v=(e.ownerSVGElement||{}).parentNode),(!v||v===es||!v.appendChild)&&(v=es.body),g=v._gsap,g&&p&&g.width&&l&&g.time===Zn.time&&!g.uncache)return Vt(s/g.width*d);if(p&&(t==="height"||t==="width")){var m=e.style[t];e.style[t]=d+r,_=e[c],m?e.style[t]=m:vs(e,t)}else(p||o==="%")&&!Hw[ni(v,"display")]&&(a.position=ni(e,"position")),v===e&&(a.position="static"),v.appendChild(Gs),_=Gs[c],v.removeChild(Gs),a.position="absolute";return l&&p&&(g=Ks(v),g.time=Zn.time,g.width=v[c]),Vt(f?_*s/d:_&&s?d/_*s:0)},mr=function(e,t,i,r){var s;return vg||cp(),t in qi&&t!=="transform"&&(t=qi[t],~t.indexOf(",")&&(t=t.split(",")[0])),br[t]&&t!=="transform"?(s=Ql(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:sf(ni(e,Gn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=rf[t]&&rf[t](e,t,i)||ni(e,t)||sS(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?xs(e,t,s,i)+i:s},Ww=function(e,t,i,r){if(!i||i==="none"){var s=Aa(t,e,1),o=s&&ni(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=ni(e,"borderTopColor"))}var a=new Vn(this._pt,e.style,t,0,1,LS),l=0,u=0,c,d,f,p,_,v,g,h,m,x,S,T;if(a.b=i,a.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=ni(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(v=e.style[t],e.style[t]=r,r=ni(e,t)||r,v?e.style[t]=v:vs(e,t)),c=[i,r],TS(c),i=c[0],r=c[1],f=i.match(jo)||[],T=r.match(jo)||[],T.length){for(;d=jo.exec(r);)g=d[0],m=r.substring(l,d.index),_?_=(_+1)%5:(m.substr(-5)==="rgba("||m.substr(-5)==="hsla(")&&(_=1),g!==(v=f[u++]||"")&&(p=parseFloat(v)||0,S=v.substr((p+"").length),g.charAt(1)==="="&&(g=ia(p,g)+S),h=parseFloat(g),x=g.substr((h+"").length),l=jo.lastIndex-x.length,x||(x=x||ri.units[t]||S,l===r.length&&(r+=x,a.e+=x)),S!==x&&(p=xs(e,t,v,x)||0),a._pt={_next:a._pt,p:m||u===1?m:",",s:p,c:h-p,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?FS:US;return eS.test(r)&&(a.e=0),this._pt=a,a},E0={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Xw=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=E0[i]||i,t[1]=E0[r]||r,t.join(" ")},Yw=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],br[a]&&(l=1,a=a==="transformOrigin"?Gn:Lt),vs(i,a);l&&(vs(i,Lt),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Ql(i,1),o.uncache=1,OS(r)))}},rf={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new Vn(e._pt,t,i,0,0,Yw);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},Zl=[1,0,0,1,0,0],GS={},HS=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},T0=function(e){var t=ni(e,Lt);return HS(t)?Zl:t.substr(7).match(Jy).map(Vt)},Sg=function(e,t){var i=e._gsap||Ks(e),r=e.style,s=T0(e),o,a,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Zl:s):(s===Zl&&!e.offsetParent&&e!==ra&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(u=1,a=e.nextElementSibling,ra.appendChild(e)),s=T0(e),l?r.display=l:vs(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):ra.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},fp=function(e,t,i,r,s,o){var a=e._gsap,l=s||Sg(e,!0),u=a.xOrigin||0,c=a.yOrigin||0,d=a.xOffset||0,f=a.yOffset||0,p=l[0],_=l[1],v=l[2],g=l[3],h=l[4],m=l[5],x=t.split(" "),S=parseFloat(x[0])||0,T=parseFloat(x[1])||0,E,A,y,C;i?l!==Zl&&(A=p*g-_*v)&&(y=S*(g/A)+T*(-v/A)+(v*m-g*h)/A,C=S*(-_/A)+T*(p/A)-(p*m-_*h)/A,S=y,T=C):(E=zS(e),S=E.x+(~x[0].indexOf("%")?S/100*E.width:S),T=E.y+(~(x[1]||x[0]).indexOf("%")?T/100*E.height:T)),r||r!==!1&&a.smooth?(h=S-u,m=T-c,a.xOffset=d+(h*p+m*v)-h,a.yOffset=f+(h*_+m*g)-m):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=T,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[Gn]="0px 0px",o&&(ts(o,a,"xOrigin",u,S),ts(o,a,"yOrigin",c,T),ts(o,a,"xOffset",d,a.xOffset),ts(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",S+" "+T)},Ql=function(e,t){var i=e._gsap||new AS(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=ni(e,Gn)||"0",c,d,f,p,_,v,g,h,m,x,S,T,E,A,y,C,b,P,U,H,j,L,z,N,F,X,Q,re,ce,Oe,Le,Ae;return c=d=f=v=g=h=m=x=S=0,p=_=1,i.svg=!!(e.getCTM&&VS(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Lt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Lt]!=="none"?l[Lt]:"")),r.scale=r.rotate=r.translate="none"),A=Sg(e,i.svg),i.svg&&(i.uncache?(F=e.getBBox(),u=i.xOrigin-F.x+"px "+(i.yOrigin-F.y)+"px",N=""):N=!t&&e.getAttribute("data-svg-origin"),fp(e,N||u,!!N||i.originIsAbsolute,i.smooth!==!1,A)),T=i.xOrigin||0,E=i.yOrigin||0,A!==Zl&&(P=A[0],U=A[1],H=A[2],j=A[3],c=L=A[4],d=z=A[5],A.length===6?(p=Math.sqrt(P*P+U*U),_=Math.sqrt(j*j+H*H),v=P||U?go(U,P)*Us:0,m=H||j?go(H,j)*Us+v:0,m&&(_*=Math.abs(Math.cos(m*sa))),i.svg&&(c-=T-(T*P+E*H),d-=E-(T*U+E*j))):(Ae=A[6],Oe=A[7],Q=A[8],re=A[9],ce=A[10],Le=A[11],c=A[12],d=A[13],f=A[14],y=go(Ae,ce),g=y*Us,y&&(C=Math.cos(-y),b=Math.sin(-y),N=L*C+Q*b,F=z*C+re*b,X=Ae*C+ce*b,Q=L*-b+Q*C,re=z*-b+re*C,ce=Ae*-b+ce*C,Le=Oe*-b+Le*C,L=N,z=F,Ae=X),y=go(-H,ce),h=y*Us,y&&(C=Math.cos(-y),b=Math.sin(-y),N=P*C-Q*b,F=U*C-re*b,X=H*C-ce*b,Le=j*b+Le*C,P=N,U=F,H=X),y=go(U,P),v=y*Us,y&&(C=Math.cos(y),b=Math.sin(y),N=P*C+U*b,F=L*C+z*b,U=U*C-P*b,z=z*C-L*b,P=N,L=F),g&&Math.abs(g)+Math.abs(v)>359.9&&(g=v=0,h=180-h),p=Vt(Math.sqrt(P*P+U*U+H*H)),_=Vt(Math.sqrt(z*z+Ae*Ae)),y=go(L,z),m=Math.abs(y)>2e-4?y*Us:0,S=Le?1/(Le<0?-Le:Le):0),i.svg&&(N=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!HS(ni(e,Lt)),N&&e.setAttribute("transform",N))),Math.abs(m)>90&&Math.abs(m)<270&&(s?(p*=-1,m+=v<=0?180:-180,v+=v<=0?180:-180):(_*=-1,m+=m<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=d-((i.yPercent=d&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=f+o,i.scaleX=Vt(p),i.scaleY=Vt(_),i.rotation=Vt(v)+a,i.rotationX=Vt(g)+a,i.rotationY=Vt(h)+a,i.skewX=m+a,i.skewY=x+a,i.transformPerspective=S+o,(i.zOrigin=parseFloat(u.split(" ")[2])||!t&&i.zOrigin||0)&&(r[Gn]=sf(u)),i.xOffset=i.yOffset=0,i.force3D=ri.force3D,i.renderTransform=i.svg?qw:BS?WS:jw,i.uncache=0,i},sf=function(e){return(e=e.split(" "))[0]+" "+e[1]},Td=function(e,t,i){var r=gn(t);return Vt(parseFloat(t)+parseFloat(xs(e,"x",i+"px",r)))+r},jw=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,WS(e,t)},Cs="0deg",ja="0px",Rs=") ",WS=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,c=i.rotationY,d=i.rotationX,f=i.skewX,p=i.skewY,_=i.scaleX,v=i.scaleY,g=i.transformPerspective,h=i.force3D,m=i.target,x=i.zOrigin,S="",T=h==="auto"&&e&&e!==1||h===!0;if(x&&(d!==Cs||c!==Cs)){var E=parseFloat(c)*sa,A=Math.sin(E),y=Math.cos(E),C;E=parseFloat(d)*sa,C=Math.cos(E),o=Td(m,o,A*C*-x),a=Td(m,a,-Math.sin(E)*-x),l=Td(m,l,y*C*-x+x)}g!==ja&&(S+="perspective("+g+Rs),(r||s)&&(S+="translate("+r+"%, "+s+"%) "),(T||o!==ja||a!==ja||l!==ja)&&(S+=l!==ja||T?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Rs),u!==Cs&&(S+="rotate("+u+Rs),c!==Cs&&(S+="rotateY("+c+Rs),d!==Cs&&(S+="rotateX("+d+Rs),(f!==Cs||p!==Cs)&&(S+="skew("+f+", "+p+Rs),(_!==1||v!==1)&&(S+="scale("+_+", "+v+Rs),m.style[Lt]=S||"translate(0, 0)"},qw=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,c=i.skewY,d=i.scaleX,f=i.scaleY,p=i.target,_=i.xOrigin,v=i.yOrigin,g=i.xOffset,h=i.yOffset,m=i.forceCSS,x=parseFloat(o),S=parseFloat(a),T,E,A,y,C;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=sa,u*=sa,T=Math.cos(l)*d,E=Math.sin(l)*d,A=Math.sin(l-u)*-f,y=Math.cos(l-u)*f,u&&(c*=sa,C=Math.tan(u-c),C=Math.sqrt(1+C*C),A*=C,y*=C,c&&(C=Math.tan(c),C=Math.sqrt(1+C*C),T*=C,E*=C)),T=Vt(T),E=Vt(E),A=Vt(A),y=Vt(y)):(T=d,y=f,E=A=0),(x&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(x=xs(p,"x",o,"px"),S=xs(p,"y",a,"px")),(_||v||g||h)&&(x=Vt(x+_-(_*T+v*A)+g),S=Vt(S+v-(_*E+v*y)+h)),(r||s)&&(C=p.getBBox(),x=Vt(x+r/100*C.width),S=Vt(S+s/100*C.height)),C="matrix("+T+","+E+","+A+","+y+","+x+","+S+")",p.setAttribute("transform",C),m&&(p.style[Lt]=C)},$w=function(e,t,i,r,s){var o=360,a=tn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Us:1),u=l-r,c=r+u+"deg",d,f;return a&&(d=s.split("_")[1],d==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),d==="cw"&&u<0?u=(u+o*v0)%o-~~(u/o)*o:d==="ccw"&&u>0&&(u=(u-o*v0)%o-~~(u/o)*o)),e._pt=f=new Vn(e._pt,t,i,r,u,Dw),f.e=c,f.u="deg",e._props.push(i),f},w0=function(e,t){for(var i in t)e[i]=t[i];return e},Kw=function(e,t,i){var r=w0({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,c,d,f,p,_;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[Lt]=t,a=Ql(i,1),vs(i,Lt),i.setAttribute("transform",u)):(u=getComputedStyle(i)[Lt],o[Lt]=t,a=Ql(i,1),o[Lt]=u);for(l in br)u=r[l],c=a[l],u!==c&&s.indexOf(l)<0&&(p=gn(u),_=gn(c),d=p!==_?xs(i,l,u,_):parseFloat(u),f=parseFloat(c),e._pt=new Vn(e._pt,a,l,d,f-d,lp),e._pt.u=_||0,e._props.push(l));w0(a,r)};zn("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});rf[e>1?"border"+n:n]=function(a,l,u,c,d){var f,p;if(arguments.length<4)return f=o.map(function(_){return mr(a,_,u)}),p=f.join(" "),p.split(f[0]).length===5?f[0]:p;f=(c+"").split(" "),p={},o.forEach(function(_,v){return p[_]=f[v]=f[v]||f[(v-1)/2|0]}),a.init(l,p,d)}});var XS={name:"css",register:cp,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,u,c,d,f,p,_,v,g,h,m,x,S,T,E,A,y,C;vg||cp(),this.styles=this.styles||kS(e),y=this.styles.props,this.tween=i;for(v in t)if(v!=="autoRound"&&(c=t[v],!(qn[v]&&CS(v,t,i,r,e,s)))){if(p=typeof c,_=rf[v],p==="function"&&(c=c.call(i,r,e,s),p=typeof c),p==="string"&&~c.indexOf("random(")&&(c=ql(c)),_)_(this,e,v,c,i)&&(A=1);else if(v.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(v)+"").trim(),c+="",ps.lastIndex=0,ps.test(u)||(g=gn(u),h=gn(c),h?g!==h&&(u=xs(e,v,u,h)+h):g&&(c+=g)),this.add(a,"setProperty",u,c,r,s,0,0,v),o.push(v),y.push(v,0,a[v]);else if(p!=="undefined"){if(l&&v in l?(u=typeof l[v]=="function"?l[v].call(i,r,e,s):l[v],tn(u)&&~u.indexOf("random(")&&(u=ql(u)),gn(u+"")||u==="auto"||(u+=ri.units[v]||gn(mr(e,v))||""),(u+"").charAt(1)==="="&&(u=mr(e,v))):u=mr(e,v),f=parseFloat(u),m=p==="string"&&c.charAt(1)==="="&&c.substr(0,2),m&&(c=c.substr(2)),d=parseFloat(c),v in qi&&(v==="autoAlpha"&&(f===1&&mr(e,"visibility")==="hidden"&&d&&(f=0),y.push("visibility",0,a.visibility),ts(this,a,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),v!=="scale"&&v!=="transform"&&(v=qi[v],~v.indexOf(",")&&(v=v.split(",")[0]))),x=v in br,x){if(this.styles.save(v),C=c,p==="string"&&c.substring(0,6)==="var(--"){if(c=ni(e,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var b=e.style.perspective;e.style.perspective=c,c=ni(e,"perspective"),b?e.style.perspective=b:vs(e,"perspective")}d=parseFloat(c)}if(S||(T=e._gsap,T.renderTransform&&!t.parseTransform||Ql(e,t.parseTransform),E=t.smoothOrigin!==!1&&T.smooth,S=this._pt=new Vn(this._pt,a,Lt,0,1,T.renderTransform,T,0,-1),S.dep=1),v==="scale")this._pt=new Vn(this._pt,T,"scaleY",T.scaleY,(m?ia(T.scaleY,m+d):d)-T.scaleY||0,lp),this._pt.u=0,o.push("scaleY",v),v+="X";else if(v==="transformOrigin"){y.push(Gn,0,a[Gn]),c=Xw(c),T.svg?fp(e,c,0,E,0,this):(h=parseFloat(c.split(" ")[2])||0,h!==T.zOrigin&&ts(this,T,"zOrigin",T.zOrigin,h),ts(this,a,v,sf(u),sf(c)));continue}else if(v==="svgOrigin"){fp(e,c,1,E,0,this);continue}else if(v in GS){$w(this,T,v,f,m?ia(f,m+c):c);continue}else if(v==="smoothOrigin"){ts(this,T,"smooth",T.smooth,c);continue}else if(v==="force3D"){T[v]=c;continue}else if(v==="transform"){Kw(this,c,e);continue}}else v in a||(v=Aa(v)||v);if(x||(d||d===0)&&(f||f===0)&&!Pw.test(c)&&v in a)g=(u+"").substr((f+"").length),d||(d=0),h=gn(c)||(v in ri.units?ri.units[v]:g),g!==h&&(f=xs(e,v,u,h)),this._pt=new Vn(this._pt,x?T:a,v,f,(m?ia(f,m+d):d)-f,!x&&(h==="px"||v==="zIndex")&&t.autoRound!==!1?Nw:lp),this._pt.u=h||0,x&&C!==c?(this._pt.b=u,this._pt.e=C,this._pt.r=Iw):g!==h&&h!=="%"&&(this._pt.b=u,this._pt.r=Lw);else if(v in a)Ww.call(this,e,v,u,m?m+c:c);else if(v in e)this.add(e,v,u||e[v],m?m+c:c,r,s);else if(v!=="parseTransform"){lg(v,c);continue}x||(v in a?y.push(v,0,a[v]):typeof e[v]=="function"?y.push(v,2,e[v]()):y.push(v,1,u||e[v])),o.push(v)}}A&&IS(this)},render:function(e,t){if(t.tween._time||!xg())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:mr,aliases:qi,getSetter:function(e,t,i){var r=qi[t];return r&&r.indexOf(",")<0&&(t=r),t in br&&t!==Gn&&(e._gsap.x||mr(e,"x"))?i&&_0===i?t==="scale"?kw:Ow:(_0=i||{})&&(t==="scale"?Bw:zw):e.style&&!sg(e.style[t])?Uw:~t.indexOf("-")?Fw:gg(e,t)},core:{_removeProperty:vs,_getMatrix:Sg}};Hn.utils.checkPrefix=Aa;Hn.core.getStyleSaver=kS;(function(n,e,t,i){var r=zn(n+","+e+","+t,function(s){br[s]=1});zn(e,function(s){ri.units[s]="deg",GS[s]=1}),qi[r[13]]=n+","+e,zn(i,function(s){var o=s.split(":");qi[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");zn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){ri.units[n]="px"});Hn.registerPlugin(XS);var YS=Hn.registerPlugin(XS)||Hn;YS.core.Tween;function Zw(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function Qw(n,e,t){return e&&Zw(n.prototype,e),n}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var sn,xc,Qn,ns,is,oa,jS,Fs,aa,qS,xr,Ci,$S,KS=function(){return sn||typeof window<"u"&&(sn=window.gsap)&&sn.registerPlugin&&sn},ZS=1,$o=[],mi=[],El=[],Tl=Date.now,dp=function(e,t){return t},Jw=function(){var e=aa.core,t=e.bridge||{},i=e._scrollers,r=e._proxies;i.push.apply(i,mi),r.push.apply(r,El),mi=i,El=r,dp=function(o,a){return t[o](a)}},eA=function(e,t){return~El.indexOf(e)&&El[El.indexOf(e)+1][t]},wl=function(e){return!!~qS.indexOf(e)},Mn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:r!==!1,capture:!!s})},Sn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},Du="scrollLeft",Lu="scrollTop",hp=function(){return xr&&xr.isPressed||mi.cache++},of=function(e,t){var i=function r(s){if(s||s===0){ZS&&(Qn.history.scrollRestoration="manual");var o=xr&&xr.isPressed;s=r.v=Math.round(s)||(xr&&xr.iOS?1:0),e(s),r.cacheID=mi.cache,o&&dp("ss",s)}else(t||mi.cache!==r.cacheID||dp("ref"))&&(r.cacheID=mi.cache,r.v=e());return r.v+r.offset};return i.offset=0,e&&i},af={s:Du,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:of(function(n){return arguments.length?Qn.scrollTo(n,Ff.sc()):Qn.pageXOffset||ns[Du]||is[Du]||oa[Du]||0})},Ff={s:Lu,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:af,sc:of(function(n){return arguments.length?Qn.scrollTo(af.sc(),n):Qn.pageYOffset||ns[Lu]||is[Lu]||oa[Lu]||0})},tA=function(e,t){return(t&&t._ctx&&t._ctx.selector||sn.utils.toArray)(e)[0]||(typeof e=="string"&&sn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},nA=function(e,t){for(var i=t.length;i--;)if(t[i]===e||t[i].contains(e))return!0;return!1},A0=function(e,t){var i=t.s,r=t.sc;wl(e)&&(e=ns.scrollingElement||is);var s=mi.indexOf(e),o=r===Ff.sc?1:2;!~s&&(s=mi.push(e)-1),mi[s+o]||Mn(e,"scroll",hp);var a=mi[s+o],l=a||(mi[s+o]=of(eA(e,i),!0)||(wl(e)?r:of(function(u){return arguments.length?e[i]=u:e[i]})));return l.target=e,a||(l.smooth=sn.getProperty(e,"scrollBehavior")==="smooth"),l},C0=function(e,t,i){var r=e,s=e,o=Tl(),a=o,l=t,u=Math.max(500,l*3),c=function(_,v){var g=Tl();v||g-o>l?(s=r,r=_,a=o,o=g):r+=_},d=function(){s=r=0,a=o=0},f=function(_){var v=a,g=s,h=Tl();return(_||_===0)&&_!==r&&c(_),o===a||h-a>u?0:(r+g)/(h-v)*1e3};return{update:c,reset:d,getVelocity:f}},qa=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},R0=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},QS=function(){aa=sn.core.globals().ScrollTrigger,aa&&aa.core&&Jw()},JS=function(e){return sn=e||KS(),!xc&&sn&&typeof document<"u"&&document.body&&(Qn=window,ns=document,is=ns.documentElement,oa=ns.body,qS=[Qn,ns,is,oa],sn.utils.clamp,$S=sn.core.context||function(){},Fs="onpointerenter"in oa?"pointer":"mouse",jS=ir.isTouch=Qn.matchMedia&&Qn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Qn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ci=ir.eventTypes=("ontouchstart"in is?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in is?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return ZS=0},500),xc=1),aa||QS(),xc};af.op=Ff;mi.cache=0;var ir=function(){function n(t){this.init(t)}var e=n.prototype;return e.init=function(i){xc||JS(sn)||console.warn("Please gsap.registerPlugin(Observer)"),aa||QS();var r=i.tolerance,s=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,u=i.debounce,c=i.preventDefault,d=i.onStop,f=i.onStopDelay,p=i.ignore,_=i.wheelSpeed,v=i.event,g=i.onDragStart,h=i.onDragEnd,m=i.onDrag,x=i.onPress,S=i.onRelease,T=i.onRight,E=i.onLeft,A=i.onUp,y=i.onDown,C=i.onChangeX,b=i.onChangeY,P=i.onChange,U=i.onToggleX,H=i.onToggleY,j=i.onHover,L=i.onHoverEnd,z=i.onMove,N=i.ignoreCheck,F=i.isNormalizer,X=i.onGestureStart,Q=i.onGestureEnd,re=i.onWheel,ce=i.onEnable,Oe=i.onDisable,Le=i.onClick,Ae=i.scrollSpeed,$=i.capture,pe=i.allowClicks,he=i.lockAxis,Pe=i.onLockAxis;this.target=a=tA(a)||is,this.vars=i,p&&(p=sn.utils.toArray(p)),r=r||1e-9,s=s||0,_=_||1,Ae=Ae||1,o=o||"wheel,touch,pointer",u=u!==!1,l||(l=parseFloat(Qn.getComputedStyle(oa).lineHeight)||22);var Ie,Re,rt,Ge,st,lt,Be,Y=this,ht=0,nn=0,I=i.passive||!c&&i.passive!==!1,Et=A0(a,af),He=A0(a,Ff),at=Et(),me=He(),Tt=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Ci[0]==="pointerdown",R=wl(a),M=a.ownerDocument||ns,k=[0,0,0],K=[0,0,0],te=0,le=function(){return te=Tl()},oe=function(se,De){return(Y.event=se)&&p&&nA(se.target,p)||De&&Tt&&se.pointerType!=="touch"||N&&N(se,De)},q=function(){Y._vx.reset(),Y._vy.reset(),Re.pause(),d&&d(Y)},J=function(){var se=Y.deltaX=R0(k),De=Y.deltaY=R0(K),Fe=Math.abs(se)>=r,Rt=Math.abs(De)>=r;P&&(Fe||Rt)&&P(Y,se,De,k,K),Fe&&(T&&Y.deltaX>0&&T(Y),E&&Y.deltaX<0&&E(Y),C&&C(Y),U&&Y.deltaX<0!=ht<0&&U(Y),ht=Y.deltaX,k[0]=k[1]=k[2]=0),Rt&&(y&&Y.deltaY>0&&y(Y),A&&Y.deltaY<0&&A(Y),b&&b(Y),H&&Y.deltaY<0!=nn<0&&H(Y),nn=Y.deltaY,K[0]=K[1]=K[2]=0),(Ge||rt)&&(z&&z(Y),rt&&(g&&rt===1&&g(Y),m&&m(Y),rt=0),Ge=!1),lt&&!(lt=!1)&&Pe&&Pe(Y),st&&(re(Y),st=!1),Ie=0},ge=function(se,De,Fe){k[Fe]+=se,K[Fe]+=De,Y._vx.update(se),Y._vy.update(De),u?Ie||(Ie=requestAnimationFrame(J)):J()},Se=function(se,De){he&&!Be&&(Y.axis=Be=Math.abs(se)>Math.abs(De)?"x":"y",lt=!0),Be!=="y"&&(k[2]+=se,Y._vx.update(se,!0)),Be!=="x"&&(K[2]+=De,Y._vy.update(De,!0)),u?Ie||(Ie=requestAnimationFrame(J)):J()},fe=function(se){if(!oe(se,1)){se=qa(se,c);var De=se.clientX,Fe=se.clientY,Rt=De-Y.x,Yt=Fe-Y.y,ws=Y.isDragging;Y.x=De,Y.y=Fe,(ws||(Rt||Yt)&&(Math.abs(Y.startX-De)>=s||Math.abs(Y.startY-Fe)>=s))&&(rt||(rt=ws?2:1),ws||(Y.isDragging=!0),Se(Rt,Yt))}},ae=Y.onPress=function(ne){oe(ne,1)||ne&&ne.button||(Y.axis=Be=null,Re.pause(),Y.isPressed=!0,ne=qa(ne),ht=nn=0,Y.startX=Y.x=ne.clientX,Y.startY=Y.y=ne.clientY,Y._vx.reset(),Y._vy.reset(),Mn(F?a:M,Ci[1],fe,I,!0),Y.deltaX=Y.deltaY=0,x&&x(Y))},Ne=Y.onRelease=function(ne){if(!oe(ne,1)){Sn(F?a:M,Ci[1],fe,!0);var se=!isNaN(Y.y-Y.startY),De=Y.isDragging,Fe=De&&(Math.abs(Y.x-Y.startX)>3||Math.abs(Y.y-Y.startY)>3),Rt=qa(ne);!Fe&&se&&(Y._vx.reset(),Y._vy.reset(),c&&pe&&sn.delayedCall(.08,function(){if(Tl()-te>300&&!ne.defaultPrevented){if(ne.target.click)ne.target.click();else if(M.createEvent){var Yt=M.createEvent("MouseEvents");Yt.initMouseEvent("click",!0,!0,Qn,1,Rt.screenX,Rt.screenY,Rt.clientX,Rt.clientY,!1,!1,!1,!1,0,null),ne.target.dispatchEvent(Yt)}}})),Y.isDragging=Y.isGesturing=Y.isPressed=!1,d&&De&&!F&&Re.restart(!0),rt&&J(),h&&De&&h(Y),S&&S(Y,Fe)}},ke=function(se){return se.touches&&se.touches.length>1&&(Y.isGesturing=!0)&&X(se,Y.isDragging)},Ze=function(){return(Y.isGesturing=!1)||Q(Y)},D=function(se){if(!oe(se)){var De=Et(),Fe=He();ge((De-at)*Ae,(Fe-me)*Ae,1),at=De,me=Fe,d&&Re.restart(!0)}},ue=function(se){if(!oe(se)){se=qa(se,c),re&&(st=!0);var De=(se.deltaMode===1?l:se.deltaMode===2?Qn.innerHeight:1)*_;ge(se.deltaX*De,se.deltaY*De,0),d&&!F&&Re.restart(!0)}},Z=function(se){if(!oe(se)){var De=se.clientX,Fe=se.clientY,Rt=De-Y.x,Yt=Fe-Y.y;Y.x=De,Y.y=Fe,Ge=!0,d&&Re.restart(!0),(Rt||Yt)&&Se(Rt,Yt)}},ye=function(se){Y.event=se,j(Y)},de=function(se){Y.event=se,L(Y)},ee=function(se){return oe(se)||qa(se,c)&&Le(Y)};Re=Y._dc=sn.delayedCall(f||.25,q).pause(),Y.deltaX=Y.deltaY=0,Y._vx=C0(0,50),Y._vy=C0(0,50),Y.scrollX=Et,Y.scrollY=He,Y.isDragging=Y.isGesturing=Y.isPressed=!1,$S(this),Y.enable=function(ne){return Y.isEnabled||(Mn(R?M:a,"scroll",hp),o.indexOf("scroll")>=0&&Mn(R?M:a,"scroll",D,I,$),o.indexOf("wheel")>=0&&Mn(a,"wheel",ue,I,$),(o.indexOf("touch")>=0&&jS||o.indexOf("pointer")>=0)&&(Mn(a,Ci[0],ae,I,$),Mn(M,Ci[2],Ne),Mn(M,Ci[3],Ne),pe&&Mn(a,"click",le,!0,!0),Le&&Mn(a,"click",ee),X&&Mn(M,"gesturestart",ke),Q&&Mn(M,"gestureend",Ze),j&&Mn(a,Fs+"enter",ye),L&&Mn(a,Fs+"leave",de),z&&Mn(a,Fs+"move",Z)),Y.isEnabled=!0,Y.isDragging=Y.isGesturing=Y.isPressed=Ge=rt=!1,Y._vx.reset(),Y._vy.reset(),at=Et(),me=He(),ne&&ne.type&&ae(ne),ce&&ce(Y)),Y},Y.disable=function(){Y.isEnabled&&($o.filter(function(ne){return ne!==Y&&wl(ne.target)}).length||Sn(R?M:a,"scroll",hp),Y.isPressed&&(Y._vx.reset(),Y._vy.reset(),Sn(F?a:M,Ci[1],fe,!0)),Sn(R?M:a,"scroll",D,$),Sn(a,"wheel",ue,$),Sn(a,Ci[0],ae,$),Sn(M,Ci[2],Ne),Sn(M,Ci[3],Ne),Sn(a,"click",le,!0),Sn(a,"click",ee),Sn(M,"gesturestart",ke),Sn(M,"gestureend",Ze),Sn(a,Fs+"enter",ye),Sn(a,Fs+"leave",de),Sn(a,Fs+"move",Z),Y.isEnabled=Y.isPressed=Y.isDragging=!1,Oe&&Oe(Y))},Y.kill=Y.revert=function(){Y.disable();var ne=$o.indexOf(Y);ne>=0&&$o.splice(ne,1),xr===Y&&(xr=0)},$o.push(Y),F&&wl(a)&&(xr=Y),Y.enable(v)},Qw(n,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),n}();ir.version="3.15.0";ir.create=function(n){return new ir(n)};ir.register=JS;ir.getAll=function(){return $o.slice()};ir.getById=function(n){return $o.filter(function(e){return e.vars.id===n})[0]};KS()&&sn.registerPlugin(ir);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Mg="184",iA=0,b0=1,rA=2,yc=1,sA=2,ul=3,ys=0,Rn=1,gr=2,Mr=0,la=1,P0=2,D0=3,L0=4,oA=5,Os=100,aA=101,lA=102,uA=103,cA=104,fA=200,dA=201,hA=202,pA=203,pp=204,mp=205,mA=206,gA=207,_A=208,vA=209,xA=210,yA=211,SA=212,MA=213,EA=214,gp=0,_p=1,vp=2,Ca=3,xp=4,yp=5,Sp=6,Mp=7,Eg=0,TA=1,wA=2,er=0,eM=1,tM=2,nM=3,Tg=4,iM=5,rM=6,sM=7,oM=300,so=301,Ra=302,wd=303,Ad=304,Of=306,Ep=1e3,yr=1001,Tp=1002,on=1003,AA=1004,Iu=1005,_n=1006,Cd=1007,Hs=1008,Jn=1009,aM=1010,lM=1011,Jl=1012,wg=1013,rr=1014,Li=1015,Pr=1016,Ag=1017,Cg=1018,eu=1020,uM=35902,cM=35899,fM=1021,dM=1022,Ii=1023,Dr=1026,Ws=1027,Rg=1028,bg=1029,oo=1030,Pg=1031,Dg=1033,Sc=33776,Mc=33777,Ec=33778,Tc=33779,wp=35840,Ap=35841,Cp=35842,Rp=35843,bp=36196,Pp=37492,Dp=37496,Lp=37488,Ip=37489,lf=37490,Np=37491,Up=37808,Fp=37809,Op=37810,kp=37811,Bp=37812,zp=37813,Vp=37814,Gp=37815,Hp=37816,Wp=37817,Xp=37818,Yp=37819,jp=37820,qp=37821,$p=36492,Kp=36494,Zp=36495,Qp=36283,Jp=36284,uf=36285,em=36286,CA=3200,cf=0,RA=1,$r="",$n="srgb",ff="srgb-linear",df="linear",ut="srgb",_o=7680,I0=519,bA=512,PA=513,DA=514,Lg=515,LA=516,IA=517,Ig=518,NA=519,N0=35044,U0="300 es",$i=2e3,tu=2001;function UA(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function hf(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function FA(){const n=hf("canvas");return n.style.display="block",n}const F0={};function O0(...n){const e="THREE."+n.shift();console.log(e,...n)}function hM(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ue(...n){n=hM(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function tt(...n){n=hM(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function tm(...n){const e=n.join(" ");e in F0||(F0[e]=!0,Ue(...n))}function OA(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const kA={[gp]:_p,[vp]:Sp,[xp]:Mp,[Ca]:yp,[_p]:gp,[Sp]:vp,[Mp]:xp,[yp]:Ca};class co{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let k0=1234567;const Al=Math.PI/180,nu=180/Math.PI;function Na(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(hn[n&255]+hn[n>>8&255]+hn[n>>16&255]+hn[n>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[t&63|128]+hn[t>>8&255]+"-"+hn[t>>16&255]+hn[t>>24&255]+hn[i&255]+hn[i>>8&255]+hn[i>>16&255]+hn[i>>24&255]).toLowerCase()}function je(n,e,t){return Math.max(e,Math.min(t,n))}function Ng(n,e){return(n%e+e)%e}function BA(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function zA(n,e,t){return n!==e?(t-n)/(e-n):0}function Cl(n,e,t){return(1-t)*n+t*e}function VA(n,e,t,i){return Cl(n,e,1-Math.exp(-t*i))}function GA(n,e=1){return e-Math.abs(Ng(n,e*2)-e)}function HA(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function WA(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function XA(n,e){return n+Math.floor(Math.random()*(e-n+1))}function YA(n,e){return n+Math.random()*(e-n)}function jA(n){return n*(.5-Math.random())}function qA(n){n!==void 0&&(k0=n);let e=k0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function $A(n){return n*Al}function KA(n){return n*nu}function ZA(n){return(n&n-1)===0&&n!==0}function QA(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function JA(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function eC(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),u=s((e+i)/2),c=o((e+i)/2),d=s((e-i)/2),f=o((e-i)/2),p=s((i-e)/2),_=o((i-e)/2);switch(r){case"XYX":n.set(a*c,l*d,l*f,a*u);break;case"YZY":n.set(l*f,a*c,l*d,a*u);break;case"ZXZ":n.set(l*d,l*f,a*c,a*u);break;case"XZX":n.set(a*c,l*_,l*p,a*u);break;case"YXY":n.set(l*p,a*c,l*_,a*u);break;case"ZYZ":n.set(l*_,l*p,a*c,a*u);break;default:Ue("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function No(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function En(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Ko={DEG2RAD:Al,RAD2DEG:nu,generateUUID:Na,clamp:je,euclideanModulo:Ng,mapLinear:BA,inverseLerp:zA,lerp:Cl,damp:VA,pingpong:GA,smoothstep:HA,smootherstep:WA,randInt:XA,randFloat:YA,randFloatSpread:jA,seededRandom:qA,degToRad:$A,radToDeg:KA,isPowerOfTwo:ZA,ceilPowerOfTwo:QA,floorPowerOfTwo:JA,setQuaternionFromProperEuler:eC,normalize:En,denormalize:No},Bg=class Bg{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Bg.prototype.isVector2=!0;let Ke=Bg;class Ua{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3],f=s[o+0],p=s[o+1],_=s[o+2],v=s[o+3];if(d!==v||l!==f||u!==p||c!==_){let g=l*f+u*p+c*_+d*v;g<0&&(f=-f,p=-p,_=-_,v=-v,g=-g);let h=1-a;if(g<.9995){const m=Math.acos(g),x=Math.sin(m);h=Math.sin(h*m)/x,a=Math.sin(a*m)/x,l=l*h+f*a,u=u*h+p*a,c=c*h+_*a,d=d*h+v*a}else{l=l*h+f*a,u=u*h+p*a,c=c*h+_*a,d=d*h+v*a;const m=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=m,u*=m,c*=m,d*=m}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=s[o],f=s[o+1],p=s[o+2],_=s[o+3];return e[t]=a*_+c*d+l*p-u*f,e[t+1]=l*_+c*f+u*d-a*p,e[t+2]=u*_+c*p+a*f-l*d,e[t+3]=c*_-a*d-l*f-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),d=a(s/2),f=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=f*c*d+u*p*_,this._y=u*p*d-f*c*_,this._z=u*c*_+f*p*d,this._w=u*c*d-f*p*_;break;case"YXZ":this._x=f*c*d+u*p*_,this._y=u*p*d-f*c*_,this._z=u*c*_-f*p*d,this._w=u*c*d+f*p*_;break;case"ZXY":this._x=f*c*d-u*p*_,this._y=u*p*d+f*c*_,this._z=u*c*_+f*p*d,this._w=u*c*d-f*p*_;break;case"ZYX":this._x=f*c*d-u*p*_,this._y=u*p*d+f*c*_,this._z=u*c*_-f*p*d,this._w=u*c*d+f*p*_;break;case"YZX":this._x=f*c*d+u*p*_,this._y=u*p*d+f*c*_,this._z=u*c*_-f*p*d,this._w=u*c*d-f*p*_;break;case"XZY":this._x=f*c*d-u*p*_,this._y=u*p*d-f*c*_,this._z=u*c*_+f*p*d,this._w=u*c*d+f*p*_;break;default:Ue("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],d=t[10],f=i+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){const u=Math.acos(a),c=Math.sin(u);l=Math.sin(l*u)/c,t=Math.sin(t*u)/c,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const zg=class zg{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(B0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(B0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+l*u+o*d-a*c,this.y=i+l*c+a*u-s*d,this.z=r+l*d+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Rd.copy(this).projectOnVector(e),this.sub(Rd)}reflect(e){return this.sub(Rd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};zg.prototype.isVector3=!0;let B=zg;const Rd=new B,B0=new Ua,Vg=class Vg{constructor(e,t,i,r,s,o,a,l,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],d=i[7],f=i[2],p=i[5],_=i[8],v=r[0],g=r[3],h=r[6],m=r[1],x=r[4],S=r[7],T=r[2],E=r[5],A=r[8];return s[0]=o*v+a*m+l*T,s[3]=o*g+a*x+l*E,s[6]=o*h+a*S+l*A,s[1]=u*v+c*m+d*T,s[4]=u*g+c*x+d*E,s[7]=u*h+c*S+d*A,s[2]=f*v+p*m+_*T,s[5]=f*g+p*x+_*E,s[8]=f*h+p*S+_*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=c*o-a*u,f=a*l-c*s,p=u*s-o*l,_=t*d+i*f+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=d*v,e[1]=(r*u-c*i)*v,e[2]=(a*i-r*o)*v,e[3]=f*v,e[4]=(c*t-r*l)*v,e[5]=(r*s-a*t)*v,e[6]=p*v,e[7]=(i*l-u*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(bd.makeScale(e,t)),this}rotate(e){return this.premultiply(bd.makeRotation(-e)),this}translate(e,t){return this.premultiply(bd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Vg.prototype.isMatrix3=!0;let ze=Vg;const bd=new ze,z0=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),V0=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function tC(){const n={enabled:!0,workingColorSpace:ff,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ut&&(r.r=Er(r.r),r.g=Er(r.g),r.b=Er(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ut&&(r.r=ua(r.r),r.g=ua(r.g),r.b=ua(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===$r?df:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return tm("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return tm("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ff]:{primaries:e,whitePoint:i,transfer:df,toXYZ:z0,fromXYZ:V0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:$n},outputColorSpaceConfig:{drawingBufferColorSpace:$n}},[$n]:{primaries:e,whitePoint:i,transfer:ut,toXYZ:z0,fromXYZ:V0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:$n}}}),n}const Qe=tC();function Er(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ua(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let vo;class nC{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{vo===void 0&&(vo=hf("canvas")),vo.width=e.width,vo.height=e.height;const r=vo.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=vo}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=hf("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Er(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Er(t[i]/255)*255):t[i]=Er(t[i]);return{data:t,width:e.width,height:e.height}}else return Ue("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let iC=0;class Ug{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:iC++}),this.uuid=Na(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Pd(r[o].image)):s.push(Pd(r[o]))}else s=Pd(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Pd(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?nC.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ue("Texture: Unable to serialize Texture."),{})}let rC=0;const Dd=new B;class bn extends co{constructor(e=bn.DEFAULT_IMAGE,t=bn.DEFAULT_MAPPING,i=yr,r=yr,s=_n,o=Hs,a=Ii,l=Jn,u=bn.DEFAULT_ANISOTROPY,c=$r){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rC++}),this.uuid=Na(),this.name="",this.source=new Ug(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Dd).x}get height(){return this.source.getSize(Dd).y}get depth(){return this.source.getSize(Dd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ue(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ue(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==oM)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ep:e.x=e.x-Math.floor(e.x);break;case yr:e.x=e.x<0?0:1;break;case Tp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ep:e.y=e.y-Math.floor(e.y);break;case yr:e.y=e.y<0?0:1;break;case Tp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}bn.DEFAULT_IMAGE=null;bn.DEFAULT_MAPPING=oM;bn.DEFAULT_ANISOTROPY=1;const Gg=class Gg{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],d=l[8],f=l[1],p=l[5],_=l[9],v=l[2],g=l[6],h=l[10];if(Math.abs(c-f)<.01&&Math.abs(d-v)<.01&&Math.abs(_-g)<.01){if(Math.abs(c+f)<.1&&Math.abs(d+v)<.1&&Math.abs(_+g)<.1&&Math.abs(u+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(u+1)/2,S=(p+1)/2,T=(h+1)/2,E=(c+f)/4,A=(d+v)/4,y=(_+g)/4;return x>S&&x>T?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=E/i,s=A/i):S>T?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=E/r,s=y/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=A/s,r=y/s),this.set(i,r,s,t),this}let m=Math.sqrt((g-_)*(g-_)+(d-v)*(d-v)+(f-c)*(f-c));return Math.abs(m)<.001&&(m=1),this.x=(g-_)/m,this.y=(d-v)/m,this.z=(f-c)/m,this.w=Math.acos((u+p+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Gg.prototype.isVector4=!0;let Ot=Gg;class sC extends co{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Ot(0,0,e,t),this.scissorTest=!1,this.viewport=new Ot(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new bn(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:_n,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Ug(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class tr extends sC{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class pM extends bn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class oC extends bn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const pf=class pf{constructor(e,t,i,r,s,o,a,l,u,c,d,f,p,_,v,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,c,d,f,p,_,v,g)}set(e,t,i,r,s,o,a,l,u,c,d,f,p,_,v,g){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=u,h[6]=c,h[10]=d,h[14]=f,h[3]=p,h[7]=_,h[11]=v,h[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pf().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,r=1/xo.setFromMatrixColumn(e,0).length(),s=1/xo.setFromMatrixColumn(e,1).length(),o=1/xo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*c,p=o*d,_=a*c,v=a*d;t[0]=l*c,t[4]=-l*d,t[8]=u,t[1]=p+_*u,t[5]=f-v*u,t[9]=-a*l,t[2]=v-f*u,t[6]=_+p*u,t[10]=o*l}else if(e.order==="YXZ"){const f=l*c,p=l*d,_=u*c,v=u*d;t[0]=f+v*a,t[4]=_*a-p,t[8]=o*u,t[1]=o*d,t[5]=o*c,t[9]=-a,t[2]=p*a-_,t[6]=v+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*c,p=l*d,_=u*c,v=u*d;t[0]=f-v*a,t[4]=-o*d,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*c,t[9]=v-f*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*c,p=o*d,_=a*c,v=a*d;t[0]=l*c,t[4]=_*u-p,t[8]=f*u+v,t[1]=l*d,t[5]=v*u+f,t[9]=p*u-_,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*u,_=a*l,v=a*u;t[0]=l*c,t[4]=v-f*d,t[8]=_*d+p,t[1]=d,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=p*d+_,t[10]=f-v*d}else if(e.order==="XZY"){const f=o*l,p=o*u,_=a*l,v=a*u;t[0]=l*c,t[4]=-d,t[8]=u*c,t[1]=f*d+v,t[5]=o*c,t[9]=p*d-_,t[2]=_*d-p,t[6]=a*c,t[10]=v*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(aC,e,lC)}lookAt(e,t,i){const r=this.elements;return Xn.subVectors(e,t),Xn.lengthSq()===0&&(Xn.z=1),Xn.normalize(),kr.crossVectors(i,Xn),kr.lengthSq()===0&&(Math.abs(i.z)===1?Xn.x+=1e-4:Xn.z+=1e-4,Xn.normalize(),kr.crossVectors(i,Xn)),kr.normalize(),Nu.crossVectors(Xn,kr),r[0]=kr.x,r[4]=Nu.x,r[8]=Xn.x,r[1]=kr.y,r[5]=Nu.y,r[9]=Xn.y,r[2]=kr.z,r[6]=Nu.z,r[10]=Xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],d=i[5],f=i[9],p=i[13],_=i[2],v=i[6],g=i[10],h=i[14],m=i[3],x=i[7],S=i[11],T=i[15],E=r[0],A=r[4],y=r[8],C=r[12],b=r[1],P=r[5],U=r[9],H=r[13],j=r[2],L=r[6],z=r[10],N=r[14],F=r[3],X=r[7],Q=r[11],re=r[15];return s[0]=o*E+a*b+l*j+u*F,s[4]=o*A+a*P+l*L+u*X,s[8]=o*y+a*U+l*z+u*Q,s[12]=o*C+a*H+l*N+u*re,s[1]=c*E+d*b+f*j+p*F,s[5]=c*A+d*P+f*L+p*X,s[9]=c*y+d*U+f*z+p*Q,s[13]=c*C+d*H+f*N+p*re,s[2]=_*E+v*b+g*j+h*F,s[6]=_*A+v*P+g*L+h*X,s[10]=_*y+v*U+g*z+h*Q,s[14]=_*C+v*H+g*N+h*re,s[3]=m*E+x*b+S*j+T*F,s[7]=m*A+x*P+S*L+T*X,s[11]=m*y+x*U+S*z+T*Q,s[15]=m*C+x*H+S*N+T*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],d=e[6],f=e[10],p=e[14],_=e[3],v=e[7],g=e[11],h=e[15],m=l*p-u*f,x=a*p-u*d,S=a*f-l*d,T=o*p-u*c,E=o*f-l*c,A=o*d-a*c;return t*(v*m-g*x+h*S)-i*(_*m-g*T+h*E)+r*(_*x-v*T+h*A)-s*(_*S-v*E+g*A)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=e[9],f=e[10],p=e[11],_=e[12],v=e[13],g=e[14],h=e[15],m=t*a-i*o,x=t*l-r*o,S=t*u-s*o,T=i*l-r*a,E=i*u-s*a,A=r*u-s*l,y=c*v-d*_,C=c*g-f*_,b=c*h-p*_,P=d*g-f*v,U=d*h-p*v,H=f*h-p*g,j=m*H-x*U+S*P+T*b-E*C+A*y;if(j===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/j;return e[0]=(a*H-l*U+u*P)*L,e[1]=(r*U-i*H-s*P)*L,e[2]=(v*A-g*E+h*T)*L,e[3]=(f*E-d*A-p*T)*L,e[4]=(l*b-o*H-u*C)*L,e[5]=(t*H-r*b+s*C)*L,e[6]=(g*S-_*A-h*x)*L,e[7]=(c*A-f*S+p*x)*L,e[8]=(o*U-a*b+u*y)*L,e[9]=(i*b-t*U-s*y)*L,e[10]=(_*E-v*S+h*m)*L,e[11]=(d*S-c*E-p*m)*L,e[12]=(a*C-o*P-l*y)*L,e[13]=(t*P-i*C+r*y)*L,e[14]=(v*x-_*T-g*m)*L,e[15]=(c*T-d*x+f*m)*L,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,d=a+a,f=s*u,p=s*c,_=s*d,v=o*c,g=o*d,h=a*d,m=l*u,x=l*c,S=l*d,T=i.x,E=i.y,A=i.z;return r[0]=(1-(v+h))*T,r[1]=(p+S)*T,r[2]=(_-x)*T,r[3]=0,r[4]=(p-S)*E,r[5]=(1-(f+h))*E,r[6]=(g+m)*E,r[7]=0,r[8]=(_+x)*A,r[9]=(g-m)*A,r[10]=(1-(f+v))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),t.identity(),this;let o=xo.set(r[0],r[1],r[2]).length();const a=xo.set(r[4],r[5],r[6]).length(),l=xo.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Ti.copy(this);const u=1/o,c=1/a,d=1/l;return Ti.elements[0]*=u,Ti.elements[1]*=u,Ti.elements[2]*=u,Ti.elements[4]*=c,Ti.elements[5]*=c,Ti.elements[6]*=c,Ti.elements[8]*=d,Ti.elements[9]*=d,Ti.elements[10]*=d,t.setFromRotationMatrix(Ti),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,r,s,o,a=$i,l=!1){const u=this.elements,c=2*s/(t-e),d=2*s/(i-r),f=(t+e)/(t-e),p=(i+r)/(i-r);let _,v;if(l)_=s/(o-s),v=o*s/(o-s);else if(a===$i)_=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===tu)_=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return u[0]=c,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=d,u[9]=p,u[13]=0,u[2]=0,u[6]=0,u[10]=_,u[14]=v,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=$i,l=!1){const u=this.elements,c=2/(t-e),d=2/(i-r),f=-(t+e)/(t-e),p=-(i+r)/(i-r);let _,v;if(l)_=1/(o-s),v=o/(o-s);else if(a===$i)_=-2/(o-s),v=-(o+s)/(o-s);else if(a===tu)_=-1/(o-s),v=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return u[0]=c,u[4]=0,u[8]=0,u[12]=f,u[1]=0,u[5]=d,u[9]=0,u[13]=p,u[2]=0,u[6]=0,u[10]=_,u[14]=v,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};pf.prototype.isMatrix4=!0;let Mt=pf;const xo=new B,Ti=new Mt,aC=new B(0,0,0),lC=new B(1,1,1),kr=new B,Nu=new B,Xn=new B,G0=new Mt,H0=new Ua;class Lr{constructor(e=0,t=0,i=0,r=Lr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],d=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-je(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(je(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-je(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:Ue("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return G0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(G0,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return H0.setFromEuler(this),this.setFromQuaternion(H0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Lr.DEFAULT_ORDER="XYZ";class Fg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let uC=0;const W0=new B,yo=new Ua,ar=new Mt,Uu=new B,$a=new B,cC=new B,fC=new Ua,X0=new B(1,0,0),Y0=new B(0,1,0),j0=new B(0,0,1),q0={type:"added"},dC={type:"removed"},So={type:"childadded",child:null},Ld={type:"childremoved",child:null};class xn extends co{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uC++}),this.uuid=Na(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xn.DEFAULT_UP.clone();const e=new B,t=new Lr,i=new Ua,r=new B(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Mt},normalMatrix:{value:new ze}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return yo.setFromAxisAngle(e,t),this.quaternion.multiply(yo),this}rotateOnWorldAxis(e,t){return yo.setFromAxisAngle(e,t),this.quaternion.premultiply(yo),this}rotateX(e){return this.rotateOnAxis(X0,e)}rotateY(e){return this.rotateOnAxis(Y0,e)}rotateZ(e){return this.rotateOnAxis(j0,e)}translateOnAxis(e,t){return W0.copy(e).applyQuaternion(this.quaternion),this.position.add(W0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(X0,e)}translateY(e){return this.translateOnAxis(Y0,e)}translateZ(e){return this.translateOnAxis(j0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ar.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Uu.copy(e):Uu.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),$a.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ar.lookAt($a,Uu,this.up):ar.lookAt(Uu,$a,this.up),this.quaternion.setFromRotationMatrix(ar),r&&(ar.extractRotation(r.matrixWorld),yo.setFromRotationMatrix(ar),this.quaternion.premultiply(yo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(tt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(q0),So.child=e,this.dispatchEvent(So),So.child=null):tt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(dC),Ld.child=e,this.dispatchEvent(Ld),Ld.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ar.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ar.multiply(e.parent.matrixWorld)),e.applyMatrix4(ar),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(q0),So.child=e,this.dispatchEvent(So),So.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($a,e,cC),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($a,fC,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}xn.DEFAULT_UP=new B(0,1,0);xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Fu extends xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hC={type:"move"};class Id{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const v of e.hand.values()){const g=t.getJointPose(v,i),h=this._getHandJoint(u,v);g!==null&&(h.matrix.fromArray(g.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=g.radius),h.visible=g!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=c.position.distanceTo(d.position),p=.02,_=.005;u.inputState.pinching&&f>p+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=p-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(hC)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Fu;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const mM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Br={h:0,s:0,l:0},Ou={h:0,s:0,l:0};function Nd(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ye{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Qe.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Qe.workingColorSpace){if(e=Ng(e,1),t=je(t,0,1),i=je(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Nd(o,s,e+1/3),this.g=Nd(o,s,e),this.b=Nd(o,s,e-1/3)}return Qe.colorSpaceToWorking(this,r),this}setStyle(e,t=$n){function i(s){s!==void 0&&parseFloat(s)<1&&Ue("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ue("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);Ue("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=$n){const i=mM[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ue("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Er(e.r),this.g=Er(e.g),this.b=Er(e.b),this}copyLinearToSRGB(e){return this.r=ua(e.r),this.g=ua(e.g),this.b=ua(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$n){return Qe.workingToColorSpace(pn.copy(this),e),Math.round(je(pn.r*255,0,255))*65536+Math.round(je(pn.g*255,0,255))*256+Math.round(je(pn.b*255,0,255))}getHexString(e=$n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.workingToColorSpace(pn.copy(this),t);const i=pn.r,r=pn.g,s=pn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=c<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=Qe.workingColorSpace){return Qe.workingToColorSpace(pn.copy(this),t),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=$n){Qe.workingToColorSpace(pn.copy(this),e);const t=pn.r,i=pn.g,r=pn.b;return e!==$n?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Br),this.setHSL(Br.h+e,Br.s+t,Br.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Br),e.getHSL(Ou);const i=Cl(Br.h,Ou.h,t),r=Cl(Br.s,Ou.s,t),s=Cl(Br.l,Ou.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pn=new Ye;Ye.NAMES=mM;class gM extends xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Lr,this.environmentIntensity=1,this.environmentRotation=new Lr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const wi=new B,lr=new B,Ud=new B,ur=new B,Mo=new B,Eo=new B,$0=new B,Fd=new B,Od=new B,kd=new B,Bd=new Ot,zd=new Ot,Vd=new Ot;class Di{constructor(e=new B,t=new B,i=new B){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),wi.subVectors(e,t),r.cross(wi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){wi.subVectors(r,t),lr.subVectors(i,t),Ud.subVectors(e,t);const o=wi.dot(wi),a=wi.dot(lr),l=wi.dot(Ud),u=lr.dot(lr),c=lr.dot(Ud),d=o*u-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(u*l-a*c)*f,_=(o*c-a*l)*f;return s.set(1-p-_,_,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,ur)===null?!1:ur.x>=0&&ur.y>=0&&ur.x+ur.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,ur)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ur.x),l.addScaledVector(o,ur.y),l.addScaledVector(a,ur.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return Bd.setScalar(0),zd.setScalar(0),Vd.setScalar(0),Bd.fromBufferAttribute(e,t),zd.fromBufferAttribute(e,i),Vd.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Bd,s.x),o.addScaledVector(zd,s.y),o.addScaledVector(Vd,s.z),o}static isFrontFacing(e,t,i,r){return wi.subVectors(i,t),lr.subVectors(e,t),wi.cross(lr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wi.subVectors(this.c,this.b),lr.subVectors(this.a,this.b),wi.cross(lr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Di.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Di.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Mo.subVectors(r,i),Eo.subVectors(s,i),Fd.subVectors(e,i);const l=Mo.dot(Fd),u=Eo.dot(Fd);if(l<=0&&u<=0)return t.copy(i);Od.subVectors(e,r);const c=Mo.dot(Od),d=Eo.dot(Od);if(c>=0&&d<=c)return t.copy(r);const f=l*d-c*u;if(f<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(Mo,o);kd.subVectors(e,s);const p=Mo.dot(kd),_=Eo.dot(kd);if(_>=0&&p<=_)return t.copy(s);const v=p*u-l*_;if(v<=0&&u>=0&&_<=0)return a=u/(u-_),t.copy(i).addScaledVector(Eo,a);const g=c*_-p*d;if(g<=0&&d-c>=0&&p-_>=0)return $0.subVectors(s,r),a=(d-c)/(d-c+(p-_)),t.copy(r).addScaledVector($0,a);const h=1/(g+v+f);return o=v*h,a=f*h,t.copy(i).addScaledVector(Mo,o).addScaledVector(Eo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class fo{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ai.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ai.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ai.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ai):Ai.fromBufferAttribute(s,o),Ai.applyMatrix4(e.matrixWorld),this.expandByPoint(Ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ku.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ku.copy(i.boundingBox)),ku.applyMatrix4(e.matrixWorld),this.union(ku)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ai),Ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ka),Bu.subVectors(this.max,Ka),To.subVectors(e.a,Ka),wo.subVectors(e.b,Ka),Ao.subVectors(e.c,Ka),zr.subVectors(wo,To),Vr.subVectors(Ao,wo),bs.subVectors(To,Ao);let t=[0,-zr.z,zr.y,0,-Vr.z,Vr.y,0,-bs.z,bs.y,zr.z,0,-zr.x,Vr.z,0,-Vr.x,bs.z,0,-bs.x,-zr.y,zr.x,0,-Vr.y,Vr.x,0,-bs.y,bs.x,0];return!Gd(t,To,wo,Ao,Bu)||(t=[1,0,0,0,1,0,0,0,1],!Gd(t,To,wo,Ao,Bu))?!1:(zu.crossVectors(zr,Vr),t=[zu.x,zu.y,zu.z],Gd(t,To,wo,Ao,Bu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(cr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),cr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),cr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),cr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),cr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),cr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),cr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),cr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(cr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const cr=[new B,new B,new B,new B,new B,new B,new B,new B],Ai=new B,ku=new fo,To=new B,wo=new B,Ao=new B,zr=new B,Vr=new B,bs=new B,Ka=new B,Bu=new B,zu=new B,Ps=new B;function Gd(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Ps.fromArray(n,s);const a=r.x*Math.abs(Ps.x)+r.y*Math.abs(Ps.y)+r.z*Math.abs(Ps.z),l=e.dot(Ps),u=t.dot(Ps),c=i.dot(Ps);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const Ht=new B,Vu=new Ke;let pC=0;class Fi extends co{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:pC++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=N0,this.updateRanges=[],this.gpuType=Li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Vu.fromBufferAttribute(this,t),Vu.applyMatrix3(e),this.setXY(t,Vu.x,Vu.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix3(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=No(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=En(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=No(t,this.array)),t}setX(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=No(t,this.array)),t}setY(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=No(t,this.array)),t}setZ(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=No(t,this.array)),t}setW(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=En(t,this.array),i=En(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=En(t,this.array),i=En(i,this.array),r=En(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=En(t,this.array),i=En(i,this.array),r=En(r,this.array),s=En(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==N0&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class _M extends Fi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class vM extends Fi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class yi extends Fi{constructor(e,t,i){super(new Float32Array(e),t,i)}}const mC=new fo,Za=new B,Hd=new B;class cu{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):mC.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Za.subVectors(e,this.center);const t=Za.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Za,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Za.copy(e.center).add(Hd)),this.expandByPoint(Za.copy(e.center).sub(Hd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let gC=0;const fi=new Mt,Wd=new xn,Co=new B,Yn=new fo,Qa=new fo,Zt=new B;class or extends co{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gC++}),this.uuid=Na(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(UA(e)?vM:_M)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fi.makeRotationFromQuaternion(e),this.applyMatrix4(fi),this}rotateX(e){return fi.makeRotationX(e),this.applyMatrix4(fi),this}rotateY(e){return fi.makeRotationY(e),this.applyMatrix4(fi),this}rotateZ(e){return fi.makeRotationZ(e),this.applyMatrix4(fi),this}translate(e,t,i){return fi.makeTranslation(e,t,i),this.applyMatrix4(fi),this}scale(e,t,i){return fi.makeScale(e,t,i),this.applyMatrix4(fi),this}lookAt(e){return Wd.lookAt(e),Wd.updateMatrix(),this.applyMatrix4(Wd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Co).negate(),this.translate(Co.x,Co.y,Co.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new yi(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ue("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Yn.setFromBufferAttribute(s),this.morphTargetsRelative?(Zt.addVectors(this.boundingBox.min,Yn.min),this.boundingBox.expandByPoint(Zt),Zt.addVectors(this.boundingBox.max,Yn.max),this.boundingBox.expandByPoint(Zt)):(this.boundingBox.expandByPoint(Yn.min),this.boundingBox.expandByPoint(Yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&tt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(Yn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Qa.setFromBufferAttribute(a),this.morphTargetsRelative?(Zt.addVectors(Yn.min,Qa.min),Yn.expandByPoint(Zt),Zt.addVectors(Yn.max,Qa.max),Yn.expandByPoint(Zt)):(Yn.expandByPoint(Qa.min),Yn.expandByPoint(Qa.max))}Yn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Zt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Zt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Zt.fromBufferAttribute(a,u),l&&(Co.fromBufferAttribute(e,u),Zt.add(Co)),r=Math.max(r,i.distanceToSquared(Zt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&tt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){tt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fi(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let y=0;y<i.count;y++)a[y]=new B,l[y]=new B;const u=new B,c=new B,d=new B,f=new Ke,p=new Ke,_=new Ke,v=new B,g=new B;function h(y,C,b){u.fromBufferAttribute(i,y),c.fromBufferAttribute(i,C),d.fromBufferAttribute(i,b),f.fromBufferAttribute(s,y),p.fromBufferAttribute(s,C),_.fromBufferAttribute(s,b),c.sub(u),d.sub(u),p.sub(f),_.sub(f);const P=1/(p.x*_.y-_.x*p.y);isFinite(P)&&(v.copy(c).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(P),g.copy(d).multiplyScalar(p.x).addScaledVector(c,-_.x).multiplyScalar(P),a[y].add(v),a[C].add(v),a[b].add(v),l[y].add(g),l[C].add(g),l[b].add(g))}let m=this.groups;m.length===0&&(m=[{start:0,count:e.count}]);for(let y=0,C=m.length;y<C;++y){const b=m[y],P=b.start,U=b.count;for(let H=P,j=P+U;H<j;H+=3)h(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const x=new B,S=new B,T=new B,E=new B;function A(y){T.fromBufferAttribute(r,y),E.copy(T);const C=a[y];x.copy(C),x.sub(T.multiplyScalar(T.dot(C))).normalize(),S.crossVectors(E,C);const P=S.dot(l[y])<0?-1:1;o.setXYZW(y,x.x,x.y,x.z,P)}for(let y=0,C=m.length;y<C;++y){const b=m[y],P=b.start,U=b.count;for(let H=P,j=P+U;H<j;H+=3)A(e.getX(H+0)),A(e.getX(H+1)),A(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Fi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new B,s=new B,o=new B,a=new B,l=new B,u=new B,c=new B,d=new B;if(e)for(let f=0,p=e.count;f<p;f+=3){const _=e.getX(f+0),v=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,g),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),u.fromBufferAttribute(i,g),a.add(c),l.add(c),u.add(c),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(g,u.x,u.y,u.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Zt.fromBufferAttribute(e,t),Zt.normalize(),e.setXYZ(t,Zt.x,Zt.y,Zt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,d=a.normalized,f=new u.constructor(l.length*c);let p=0,_=0;for(let v=0,g=l.length;v<g;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*c;for(let h=0;h<c;h++)f[_++]=u[p++]}return new Fi(f,c,d)}if(this.index===null)return Ue("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new or,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,d=u.length;c<d;c++){const f=u[c],p=e(f,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,f=u.length;d<f;d++){const p=u[d];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],d=s[u];for(let f=0,p=d.length;f<p;f++)c.push(d[f].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let _C=0;class Fa extends co{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_C++}),this.uuid=Na(),this.name="",this.type="Material",this.blending=la,this.side=ys,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pp,this.blendDst=mp,this.blendEquation=Os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=Ca,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=I0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_o,this.stencilZFail=_o,this.stencilZPass=_o,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ue(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ue(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==la&&(i.blending=this.blending),this.side!==ys&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==pp&&(i.blendSrc=this.blendSrc),this.blendDst!==mp&&(i.blendDst=this.blendDst),this.blendEquation!==Os&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ca&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==I0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_o&&(i.stencilFail=this.stencilFail),this.stencilZFail!==_o&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==_o&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const fr=new B,Xd=new B,Gu=new B,Gr=new B,Yd=new B,Hu=new B,jd=new B;class xM{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=fr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fr.copy(this.origin).addScaledVector(this.direction,t),fr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Xd.copy(e).add(t).multiplyScalar(.5),Gu.copy(t).sub(e).normalize(),Gr.copy(this.origin).sub(Xd);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Gu),a=Gr.dot(this.direction),l=-Gr.dot(Gu),u=Gr.lengthSq(),c=Math.abs(1-o*o);let d,f,p,_;if(c>0)if(d=o*l-a,f=o*a-l,_=s*c,d>=0)if(f>=-_)if(f<=_){const v=1/c;d*=v,f*=v,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+u}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+u;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+u;else f<=-_?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+u):f<=_?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+u):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+u);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Xd).addScaledVector(Gu,f),p}intersectSphere(e,t){fr.subVectors(e.center,this.origin);const i=fr.dot(this.direction),r=fr.dot(fr)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),c>=0?(s=(e.min.y-f.y)*c,o=(e.max.y-f.y)*c):(s=(e.max.y-f.y)*c,o=(e.min.y-f.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,fr)!==null}intersectTriangle(e,t,i,r,s){Yd.subVectors(t,e),Hu.subVectors(i,e),jd.crossVectors(Yd,Hu);let o=this.direction.dot(jd),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Gr.subVectors(this.origin,e);const l=a*this.direction.dot(Hu.crossVectors(Gr,Hu));if(l<0)return null;const u=a*this.direction.dot(Yd.cross(Gr));if(u<0||l+u>o)return null;const c=-a*Gr.dot(jd);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yM extends Fa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Lr,this.combine=Eg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const K0=new Mt,Ds=new xM,Wu=new cu,Z0=new B,Xu=new B,Yu=new B,ju=new B,qd=new B,qu=new B,Q0=new B,$u=new B;class Jt extends xn{constructor(e=new or,t=new yM){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){qu.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],d=s[l];c!==0&&(qd.fromBufferAttribute(d,e),o?qu.addScaledVector(qd,c):qu.addScaledVector(qd.sub(t),c))}t.add(qu)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Wu.copy(i.boundingSphere),Wu.applyMatrix4(s),Ds.copy(e.ray).recast(e.near),!(Wu.containsPoint(Ds.origin)===!1&&(Ds.intersectSphere(Wu,Z0)===null||Ds.origin.distanceToSquared(Z0)>(e.far-e.near)**2))&&(K0.copy(s).invert(),Ds.copy(e.ray).applyMatrix4(K0),!(i.boundingBox!==null&&Ds.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ds)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=f.length;_<v;_++){const g=f[_],h=o[g.materialIndex],m=Math.max(g.start,p.start),x=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let S=m,T=x;S<T;S+=3){const E=a.getX(S),A=a.getX(S+1),y=a.getX(S+2);r=Ku(this,h,e,i,u,c,d,E,A,y),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let g=_,h=v;g<h;g+=3){const m=a.getX(g),x=a.getX(g+1),S=a.getX(g+2);r=Ku(this,o,e,i,u,c,d,m,x,S),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,v=f.length;_<v;_++){const g=f[_],h=o[g.materialIndex],m=Math.max(g.start,p.start),x=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let S=m,T=x;S<T;S+=3){const E=S,A=S+1,y=S+2;r=Ku(this,h,e,i,u,c,d,E,A,y),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let g=_,h=v;g<h;g+=3){const m=g,x=g+1,S=g+2;r=Ku(this,o,e,i,u,c,d,m,x,S),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function vC(n,e,t,i,r,s,o,a){let l;if(e.side===Rn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===ys,a),l===null)return null;$u.copy(a),$u.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo($u);return u<t.near||u>t.far?null:{distance:u,point:$u.clone(),object:n}}function Ku(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,Xu),n.getVertexPosition(l,Yu),n.getVertexPosition(u,ju);const c=vC(n,e,t,i,Xu,Yu,ju,Q0);if(c){const d=new B;Di.getBarycoord(Q0,Xu,Yu,ju,d),r&&(c.uv=Di.getInterpolatedAttribute(r,a,l,u,d,new Ke)),s&&(c.uv1=Di.getInterpolatedAttribute(s,a,l,u,d,new Ke)),o&&(c.normal=Di.getInterpolatedAttribute(o,a,l,u,d,new B),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new B,materialIndex:0};Di.getNormal(Xu,Yu,ju,f.normal),c.face=f,c.barycoord=d}return c}class SM extends bn{constructor(e=null,t=1,i=1,r,s,o,a,l,u=on,c=on,d,f){super(null,o,a,l,u,c,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class J0 extends Fi{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ro=new Mt,ev=new Mt,Zu=[],tv=new fo,xC=new Mt,Ja=new Jt,el=new cu;class MM extends Jt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new J0(new Float32Array(i*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,xC)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new fo),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ro),tv.copy(e.boundingBox).applyMatrix4(Ro),this.boundingBox.union(tv)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new cu),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ro),el.copy(e.boundingSphere).applyMatrix4(Ro),this.boundingSphere.union(el)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(Ja.geometry=this.geometry,Ja.material=this.material,Ja.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),el.copy(this.boundingSphere),el.applyMatrix4(i),e.ray.intersectsSphere(el)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Ro),ev.multiplyMatrices(i,Ro),Ja.matrixWorld=ev,Ja.raycast(e,Zu);for(let o=0,a=Zu.length;o<a;o++){const l=Zu[o];l.instanceId=s,l.object=this,t.push(l)}Zu.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new J0(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new SM(new Float32Array(r*this.count),r,this.count,Rg,Li));const s=this.morphTexture.source.data.data;let o=0;for(let u=0;u<i.length;u++)o+=i[u];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;return s[l]=a,s.set(i,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const $d=new B,yC=new B,SC=new ze;class Yr{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=$d.subVectors(i,t).cross(yC.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const r=e.delta($d),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||SC.getNormalMatrix(e),r=this.coplanarPoint($d).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ls=new cu,MC=new Ke(.5,.5),Qu=new B;class Og{constructor(e=new Yr,t=new Yr,i=new Yr,r=new Yr,s=new Yr,o=new Yr){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=$i,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],u=s[3],c=s[4],d=s[5],f=s[6],p=s[7],_=s[8],v=s[9],g=s[10],h=s[11],m=s[12],x=s[13],S=s[14],T=s[15];if(r[0].setComponents(u-o,p-c,h-_,T-m).normalize(),r[1].setComponents(u+o,p+c,h+_,T+m).normalize(),r[2].setComponents(u+a,p+d,h+v,T+x).normalize(),r[3].setComponents(u-a,p-d,h-v,T-x).normalize(),i)r[4].setComponents(l,f,g,S).normalize(),r[5].setComponents(u-l,p-f,h-g,T-S).normalize();else if(r[4].setComponents(u-l,p-f,h-g,T-S).normalize(),t===$i)r[5].setComponents(u+l,p+f,h+g,T+S).normalize();else if(t===tu)r[5].setComponents(l,f,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ls.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ls.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ls)}intersectsSprite(e){Ls.center.set(0,0,0);const t=MC.distanceTo(e.center);return Ls.radius=.7071067811865476+t,Ls.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ls)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Qu.x=r.normal.x>0?e.max.x:e.min.x,Qu.y=r.normal.y>0?e.max.y:e.min.y,Qu.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Qu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class EM extends bn{constructor(e=[],t=so,i,r,s,o,a,l,u,c){super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ba extends bn{constructor(e,t,i=rr,r,s,o,a=on,l=on,u,c=Dr,d=1){if(c!==Dr&&c!==Ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ug(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class EC extends ba{constructor(e,t=rr,i=so,r,s,o=on,a=on,l,u=Dr){const c={width:e,height:e,depth:1},d=[c,c,c,c,c,c];super(e,e,t,i,r,s,o,a,l,u),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class TM extends bn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Oa extends or{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],d=[];let f=0,p=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new yi(u,3)),this.setAttribute("normal",new yi(c,3)),this.setAttribute("uv",new yi(d,2));function _(v,g,h,m,x,S,T,E,A,y,C){const b=S/A,P=T/y,U=S/2,H=T/2,j=E/2,L=A+1,z=y+1;let N=0,F=0;const X=new B;for(let Q=0;Q<z;Q++){const re=Q*P-H;for(let ce=0;ce<L;ce++){const Oe=ce*b-U;X[v]=Oe*m,X[g]=re*x,X[h]=j,u.push(X.x,X.y,X.z),X[v]=0,X[g]=0,X[h]=E>0?1:-1,c.push(X.x,X.y,X.z),d.push(ce/A),d.push(1-Q/y),N+=1}}for(let Q=0;Q<y;Q++)for(let re=0;re<A;re++){const ce=f+re+L*Q,Oe=f+re+L*(Q+1),Le=f+(re+1)+L*(Q+1),Ae=f+(re+1)+L*Q;l.push(ce,Oe,Ae),l.push(Oe,Le,Ae),F+=6}a.addGroup(p,F,C),p+=F,f+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class kf extends or{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,d=e/a,f=t/l,p=[],_=[],v=[],g=[];for(let h=0;h<c;h++){const m=h*f-o;for(let x=0;x<u;x++){const S=x*d-s;_.push(S,-m,0),v.push(0,0,1),g.push(x/a),g.push(1-h/l)}}for(let h=0;h<l;h++)for(let m=0;m<a;m++){const x=m+u*h,S=m+u*(h+1),T=m+1+u*(h+1),E=m+1+u*h;p.push(x,S,E),p.push(S,T,E)}this.setIndex(p),this.setAttribute("position",new yi(_,3)),this.setAttribute("normal",new yi(v,3)),this.setAttribute("uv",new yi(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kf(e.width,e.height,e.widthSegments,e.heightSegments)}}class kg extends or{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const c=[],d=new B,f=new B,p=[],_=[],v=[],g=[];for(let h=0;h<=i;h++){const m=[],x=h/i;let S=0;h===0&&o===0?S=.5/t:h===i&&l===Math.PI&&(S=-.5/t);for(let T=0;T<=t;T++){const E=T/t;d.x=-e*Math.cos(r+E*s)*Math.sin(o+x*a),d.y=e*Math.cos(o+x*a),d.z=e*Math.sin(r+E*s)*Math.sin(o+x*a),_.push(d.x,d.y,d.z),f.copy(d).normalize(),v.push(f.x,f.y,f.z),g.push(E+S,1-x),m.push(u++)}c.push(m)}for(let h=0;h<i;h++)for(let m=0;m<t;m++){const x=c[h][m+1],S=c[h][m],T=c[h+1][m],E=c[h+1][m+1];(h!==0||o>0)&&p.push(x,S,E),(h!==i-1||l<Math.PI)&&p.push(S,T,E)}this.setIndex(p),this.setAttribute("position",new yi(_,3)),this.setAttribute("normal",new yi(v,3)),this.setAttribute("uv",new yi(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kg(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Pa(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];if(nv(r))r.isRenderTargetTexture?(Ue("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(nv(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function Tn(n){const e={};for(let t=0;t<n.length;t++){const i=Pa(n[t]);for(const r in i)e[r]=i[r]}return e}function nv(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function TC(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function wM(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const wC={clone:Pa,merge:Tn};var AC=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,CC=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class sr extends Fa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=AC,this.fragmentShader=CC,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Pa(e.uniforms),this.uniformsGroups=TC(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class RC extends sr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class nm extends Fa{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cf,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Lr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class bC extends nm{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ke(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ye(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ye(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ye(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class PC extends Fa{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cf,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Lr,this.combine=Eg,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class DC extends Fa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=CA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class LC extends Fa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class AM extends xn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Kd=new Mt,iv=new B,rv=new B;class IC{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ke(512,512),this.mapType=Jn,this.map=null,this.mapPass=null,this.matrix=new Mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Og,this._frameExtents=new Ke(1,1),this._viewportCount=1,this._viewports=[new Ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;iv.setFromMatrixPosition(e.matrixWorld),t.position.copy(iv),rv.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(rv),t.updateMatrixWorld(),Kd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kd,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===tu||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Kd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ju=new B,ec=new Ua,Vi=new B;class CM extends xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=$i,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ju,ec,Vi),Vi.x===1&&Vi.y===1&&Vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ju,ec,Vi.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Ju,ec,Vi),Vi.x===1&&Vi.y===1&&Vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ju,ec,Vi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Hr=new B,sv=new Ke,ov=new Ke;class Kn extends CM{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=nu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Al*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return nu*2*Math.atan(Math.tan(Al*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Hr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Hr.x,Hr.y).multiplyScalar(-e/Hr.z),Hr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Hr.x,Hr.y).multiplyScalar(-e/Hr.z)}getViewSize(e,t){return this.getViewBounds(e,sv,ov),t.subVectors(ov,sv)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Al*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class NC extends IC{constructor(){super(new Kn(90,1,.5,500)),this.isPointLightShadow=!0}}class RM extends AM{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new NC}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class bM extends CM{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class UC extends AM{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const bo=-90,Po=1;class FC extends xn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Kn(bo,Po,e,t);r.layers=this.layers,this.add(r);const s=new Kn(bo,Po,e,t);s.layers=this.layers,this.add(s);const o=new Kn(bo,Po,e,t);o.layers=this.layers,this.add(o);const a=new Kn(bo,Po,e,t);a.layers=this.layers,this.add(a);const l=new Kn(bo,Po,e,t);l.layers=this.layers,this.add(l);const u=new Kn(bo,Po,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===$i)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===tu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(d,f,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class OC extends Kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const av=new Mt;class kC{constructor(e,t,i=0,r=1/0){this.ray=new xM(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Fg,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):tt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return av.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(av),this}intersectObject(e,t=!0,i=[]){return im(e,this,i,t),i.sort(lv),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)im(e[r],this,i,t);return i.sort(lv),i}}function lv(n,e){return n.distance-e.distance}function im(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let o=0,a=s.length;o<a;o++)im(s[o],e,t,!0)}}class BC{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ue("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Hg=class Hg{constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}};Hg.prototype.isMatrix2=!0;let uv=Hg;function cv(n,e,t,i){const r=zC(i);switch(t){case fM:return n*e;case Rg:return n*e/r.components*r.byteLength;case bg:return n*e/r.components*r.byteLength;case oo:return n*e*2/r.components*r.byteLength;case Pg:return n*e*2/r.components*r.byteLength;case dM:return n*e*3/r.components*r.byteLength;case Ii:return n*e*4/r.components*r.byteLength;case Dg:return n*e*4/r.components*r.byteLength;case Sc:case Mc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ec:case Tc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ap:case Rp:return Math.max(n,16)*Math.max(e,8)/4;case wp:case Cp:return Math.max(n,8)*Math.max(e,8)/2;case bp:case Pp:case Lp:case Ip:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Dp:case lf:case Np:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Up:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Fp:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Op:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case kp:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Bp:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case zp:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Vp:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Gp:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Hp:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Wp:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Xp:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Yp:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case jp:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case qp:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case $p:case Kp:case Zp:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Qp:case Jp:return Math.ceil(n/4)*Math.ceil(e/4)*8;case uf:case em:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function zC(n){switch(n){case Jn:case aM:return{byteLength:1,components:1};case Jl:case lM:case Pr:return{byteLength:2,components:1};case Ag:case Cg:return{byteLength:2,components:4};case rr:case wg:case Li:return{byteLength:4,components:1};case uM:case cM:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mg}}));typeof window<"u"&&(window.__THREE__?Ue("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mg);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function PM(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function VC(n){const e=new WeakMap;function t(a,l){const u=a.array,c=a.usage,d=u.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,u,c),a.onUploadCallback();let p;if(u instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)p=n.HALF_FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=n.SHORT;else if(u instanceof Uint32Array)p=n.UNSIGNED_INT;else if(u instanceof Int32Array)p=n.INT;else if(u instanceof Int8Array)p=n.BYTE;else if(u instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,u){const c=l.array,d=l.updateRanges;if(n.bindBuffer(u,a),d.length===0)n.bufferSubData(u,0,c);else{d.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<d.length;p++){const _=d[f],v=d[p];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++f,d[f]=v)}d.length=f+1;for(let p=0,_=d.length;p<_;p++){const v=d[p];n.bufferSubData(u,v.start*c.BYTES_PER_ELEMENT,c,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,t(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}var GC=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,HC=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,WC=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,XC=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,YC=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jC=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qC=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,$C=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,KC=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,ZC=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,QC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,JC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,eR=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,tR=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,nR=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,iR=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,rR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,oR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,aR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,lR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,uR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,cR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,fR=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,dR=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,hR=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,pR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_R=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vR="gl_FragColor = linearToOutputTexel( gl_FragColor );",xR=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,SR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,MR=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ER=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,TR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,AR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,CR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,RR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bR=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,PR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,DR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,LR=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,IR=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,NR=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,UR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,FR=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,OR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kR=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,BR=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,zR=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,VR=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,GR=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,HR=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,WR=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,XR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,YR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$R=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,KR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ZR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,QR=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,JR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ib=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,sb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ob=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ab=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,lb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ub=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,db=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_b=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,vb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Eb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,wb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ab=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Cb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Rb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Pb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Db=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Lb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ib=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ub=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ob=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,kb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Bb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Vb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Gb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,$b=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Kb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Zb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Qb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eP=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tP=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nP=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,iP=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rP=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sP=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oP=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,aP=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lP=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,uP=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,cP=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fP=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dP=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,hP=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pP=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mP=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gP=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,_P=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vP=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xP=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yP=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,SP=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,We={alphahash_fragment:GC,alphahash_pars_fragment:HC,alphamap_fragment:WC,alphamap_pars_fragment:XC,alphatest_fragment:YC,alphatest_pars_fragment:jC,aomap_fragment:qC,aomap_pars_fragment:$C,batching_pars_vertex:KC,batching_vertex:ZC,begin_vertex:QC,beginnormal_vertex:JC,bsdfs:eR,iridescence_fragment:tR,bumpmap_pars_fragment:nR,clipping_planes_fragment:iR,clipping_planes_pars_fragment:rR,clipping_planes_pars_vertex:sR,clipping_planes_vertex:oR,color_fragment:aR,color_pars_fragment:lR,color_pars_vertex:uR,color_vertex:cR,common:fR,cube_uv_reflection_fragment:dR,defaultnormal_vertex:hR,displacementmap_pars_vertex:pR,displacementmap_vertex:mR,emissivemap_fragment:gR,emissivemap_pars_fragment:_R,colorspace_fragment:vR,colorspace_pars_fragment:xR,envmap_fragment:yR,envmap_common_pars_fragment:SR,envmap_pars_fragment:MR,envmap_pars_vertex:ER,envmap_physical_pars_fragment:NR,envmap_vertex:TR,fog_vertex:wR,fog_pars_vertex:AR,fog_fragment:CR,fog_pars_fragment:RR,gradientmap_pars_fragment:bR,lightmap_pars_fragment:PR,lights_lambert_fragment:DR,lights_lambert_pars_fragment:LR,lights_pars_begin:IR,lights_toon_fragment:UR,lights_toon_pars_fragment:FR,lights_phong_fragment:OR,lights_phong_pars_fragment:kR,lights_physical_fragment:BR,lights_physical_pars_fragment:zR,lights_fragment_begin:VR,lights_fragment_maps:GR,lights_fragment_end:HR,lightprobes_pars_fragment:WR,logdepthbuf_fragment:XR,logdepthbuf_pars_fragment:YR,logdepthbuf_pars_vertex:jR,logdepthbuf_vertex:qR,map_fragment:$R,map_pars_fragment:KR,map_particle_fragment:ZR,map_particle_pars_fragment:QR,metalnessmap_fragment:JR,metalnessmap_pars_fragment:eb,morphinstance_vertex:tb,morphcolor_vertex:nb,morphnormal_vertex:ib,morphtarget_pars_vertex:rb,morphtarget_vertex:sb,normal_fragment_begin:ob,normal_fragment_maps:ab,normal_pars_fragment:lb,normal_pars_vertex:ub,normal_vertex:cb,normalmap_pars_fragment:fb,clearcoat_normal_fragment_begin:db,clearcoat_normal_fragment_maps:hb,clearcoat_pars_fragment:pb,iridescence_pars_fragment:mb,opaque_fragment:gb,packing:_b,premultiplied_alpha_fragment:vb,project_vertex:xb,dithering_fragment:yb,dithering_pars_fragment:Sb,roughnessmap_fragment:Mb,roughnessmap_pars_fragment:Eb,shadowmap_pars_fragment:Tb,shadowmap_pars_vertex:wb,shadowmap_vertex:Ab,shadowmask_pars_fragment:Cb,skinbase_vertex:Rb,skinning_pars_vertex:bb,skinning_vertex:Pb,skinnormal_vertex:Db,specularmap_fragment:Lb,specularmap_pars_fragment:Ib,tonemapping_fragment:Nb,tonemapping_pars_fragment:Ub,transmission_fragment:Fb,transmission_pars_fragment:Ob,uv_pars_fragment:kb,uv_pars_vertex:Bb,uv_vertex:zb,worldpos_vertex:Vb,background_vert:Gb,background_frag:Hb,backgroundCube_vert:Wb,backgroundCube_frag:Xb,cube_vert:Yb,cube_frag:jb,depth_vert:qb,depth_frag:$b,distance_vert:Kb,distance_frag:Zb,equirect_vert:Qb,equirect_frag:Jb,linedashed_vert:eP,linedashed_frag:tP,meshbasic_vert:nP,meshbasic_frag:iP,meshlambert_vert:rP,meshlambert_frag:sP,meshmatcap_vert:oP,meshmatcap_frag:aP,meshnormal_vert:lP,meshnormal_frag:uP,meshphong_vert:cP,meshphong_frag:fP,meshphysical_vert:dP,meshphysical_frag:hP,meshtoon_vert:pP,meshtoon_frag:mP,points_vert:gP,points_frag:_P,shadow_vert:vP,shadow_frag:xP,sprite_vert:yP,sprite_frag:SP},_e={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new B},probesMax:{value:new B},probesResolution:{value:new B}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},Xi={basic:{uniforms:Tn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Tn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ye(0)},envMapIntensity:{value:1}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Tn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Tn([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Tn([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new Ye(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Tn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Tn([_e.points,_e.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Tn([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Tn([_e.common,_e.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Tn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Tn([_e.sprite,_e.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distance:{uniforms:Tn([_e.common,_e.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distance_vert,fragmentShader:We.distance_frag},shadow:{uniforms:Tn([_e.lights,_e.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};Xi.physical={uniforms:Tn([Xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const tc={r:0,b:0,g:0},MP=new Mt,DM=new ze;DM.set(-1,0,0,0,1,0,0,0,1);function EP(n,e,t,i,r,s){const o=new Ye(0);let a=r===!0?0:1,l,u,c=null,d=0,f=null;function p(m){let x=m.isScene===!0?m.background:null;if(x&&x.isTexture){const S=m.backgroundBlurriness>0;x=e.get(x,S)}return x}function _(m){let x=!1;const S=p(m);S===null?g(o,a):S&&S.isColor&&(g(S,1),x=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||x)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(m,x){const S=p(x);S&&(S.isCubeTexture||S.mapping===Of)?(u===void 0&&(u=new Jt(new Oa(1,1,1),new sr({name:"BackgroundCubeMaterial",uniforms:Pa(Xi.backgroundCube.uniforms),vertexShader:Xi.backgroundCube.vertexShader,fragmentShader:Xi.backgroundCube.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=S,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(MP.makeRotationFromEuler(x.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(DM),u.material.toneMapped=Qe.getTransfer(S.colorSpace)!==ut,(c!==S||d!==S.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,c=S,d=S.version,f=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Jt(new kf(2,2),new sr({name:"BackgroundMaterial",uniforms:Pa(Xi.background.uniforms),vertexShader:Xi.background.vertexShader,fragmentShader:Xi.background.fragmentShader,side:ys,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=Qe.getTransfer(S.colorSpace)!==ut,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(c!==S||d!==S.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,c=S,d=S.version,f=n.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,x){m.getRGB(tc,wM(n)),t.buffers.color.setClear(tc.r,tc.g,tc.b,x,s)}function h(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(m,x=1){o.set(m),a=x,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(m){a=m,g(o,a)},render:_,addToRenderList:v,dispose:h}}function TP(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(P,U,H,j,L){let z=!1;const N=d(P,j,H,U);s!==N&&(s=N,u(s.object)),z=p(P,j,H,L),z&&_(P,j,H,L),L!==null&&e.update(L,n.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,S(P,U,H,j),L!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function l(){return n.createVertexArray()}function u(P){return n.bindVertexArray(P)}function c(P){return n.deleteVertexArray(P)}function d(P,U,H,j){const L=j.wireframe===!0;let z=i[U.id];z===void 0&&(z={},i[U.id]=z);const N=P.isInstancedMesh===!0?P.id:0;let F=z[N];F===void 0&&(F={},z[N]=F);let X=F[H.id];X===void 0&&(X={},F[H.id]=X);let Q=X[L];return Q===void 0&&(Q=f(l()),X[L]=Q),Q}function f(P){const U=[],H=[],j=[];for(let L=0;L<t;L++)U[L]=0,H[L]=0,j[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:H,attributeDivisors:j,object:P,attributes:{},index:null}}function p(P,U,H,j){const L=s.attributes,z=U.attributes;let N=0;const F=H.getAttributes();for(const X in F)if(F[X].location>=0){const re=L[X];let ce=z[X];if(ce===void 0&&(X==="instanceMatrix"&&P.instanceMatrix&&(ce=P.instanceMatrix),X==="instanceColor"&&P.instanceColor&&(ce=P.instanceColor)),re===void 0||re.attribute!==ce||ce&&re.data!==ce.data)return!0;N++}return s.attributesNum!==N||s.index!==j}function _(P,U,H,j){const L={},z=U.attributes;let N=0;const F=H.getAttributes();for(const X in F)if(F[X].location>=0){let re=z[X];re===void 0&&(X==="instanceMatrix"&&P.instanceMatrix&&(re=P.instanceMatrix),X==="instanceColor"&&P.instanceColor&&(re=P.instanceColor));const ce={};ce.attribute=re,re&&re.data&&(ce.data=re.data),L[X]=ce,N++}s.attributes=L,s.attributesNum=N,s.index=j}function v(){const P=s.newAttributes;for(let U=0,H=P.length;U<H;U++)P[U]=0}function g(P){h(P,0)}function h(P,U){const H=s.newAttributes,j=s.enabledAttributes,L=s.attributeDivisors;H[P]=1,j[P]===0&&(n.enableVertexAttribArray(P),j[P]=1),L[P]!==U&&(n.vertexAttribDivisor(P,U),L[P]=U)}function m(){const P=s.newAttributes,U=s.enabledAttributes;for(let H=0,j=U.length;H<j;H++)U[H]!==P[H]&&(n.disableVertexAttribArray(H),U[H]=0)}function x(P,U,H,j,L,z,N){N===!0?n.vertexAttribIPointer(P,U,H,L,z):n.vertexAttribPointer(P,U,H,j,L,z)}function S(P,U,H,j){v();const L=j.attributes,z=H.getAttributes(),N=U.defaultAttributeValues;for(const F in z){const X=z[F];if(X.location>=0){let Q=L[F];if(Q===void 0&&(F==="instanceMatrix"&&P.instanceMatrix&&(Q=P.instanceMatrix),F==="instanceColor"&&P.instanceColor&&(Q=P.instanceColor)),Q!==void 0){const re=Q.normalized,ce=Q.itemSize,Oe=e.get(Q);if(Oe===void 0)continue;const Le=Oe.buffer,Ae=Oe.type,$=Oe.bytesPerElement,pe=Ae===n.INT||Ae===n.UNSIGNED_INT||Q.gpuType===wg;if(Q.isInterleavedBufferAttribute){const he=Q.data,Pe=he.stride,Ie=Q.offset;if(he.isInstancedInterleavedBuffer){for(let Re=0;Re<X.locationSize;Re++)h(X.location+Re,he.meshPerAttribute);P.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Re=0;Re<X.locationSize;Re++)g(X.location+Re);n.bindBuffer(n.ARRAY_BUFFER,Le);for(let Re=0;Re<X.locationSize;Re++)x(X.location+Re,ce/X.locationSize,Ae,re,Pe*$,(Ie+ce/X.locationSize*Re)*$,pe)}else{if(Q.isInstancedBufferAttribute){for(let he=0;he<X.locationSize;he++)h(X.location+he,Q.meshPerAttribute);P.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let he=0;he<X.locationSize;he++)g(X.location+he);n.bindBuffer(n.ARRAY_BUFFER,Le);for(let he=0;he<X.locationSize;he++)x(X.location+he,ce/X.locationSize,Ae,re,ce*$,ce/X.locationSize*he*$,pe)}}else if(N!==void 0){const re=N[F];if(re!==void 0)switch(re.length){case 2:n.vertexAttrib2fv(X.location,re);break;case 3:n.vertexAttrib3fv(X.location,re);break;case 4:n.vertexAttrib4fv(X.location,re);break;default:n.vertexAttrib1fv(X.location,re)}}}}m()}function T(){C();for(const P in i){const U=i[P];for(const H in U){const j=U[H];for(const L in j){const z=j[L];for(const N in z)c(z[N].object),delete z[N];delete j[L]}}delete i[P]}}function E(P){if(i[P.id]===void 0)return;const U=i[P.id];for(const H in U){const j=U[H];for(const L in j){const z=j[L];for(const N in z)c(z[N].object),delete z[N];delete j[L]}}delete i[P.id]}function A(P){for(const U in i){const H=i[U];for(const j in H){const L=H[j];if(L[P.id]===void 0)continue;const z=L[P.id];for(const N in z)c(z[N].object),delete z[N];delete L[P.id]}}}function y(P){for(const U in i){const H=i[U],j=P.isInstancedMesh===!0?P.id:0,L=H[j];if(L!==void 0){for(const z in L){const N=L[z];for(const F in N)c(N[F].object),delete N[F];delete L[z]}delete H[j],Object.keys(H).length===0&&delete i[U]}}}function C(){b(),o=!0,s!==r&&(s=r,u(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:C,resetDefaultState:b,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfObject:y,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:g,disableUnusedAttributes:m}}function wP(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function o(l,u,c){c!==0&&(n.drawArraysInstanced(i,l,u,c),t.update(u,i,c))}function a(l,u,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,c);let f=0;for(let p=0;p<c;p++)f+=u[p];t.update(f,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function AP(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==Ii&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const y=A===Pr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Jn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Li&&!y)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const c=l(u);c!==u&&(Ue("WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&Ue("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:g,maxAttributes:h,maxVertexUniforms:m,maxVaryings:x,maxFragmentUniforms:S,maxSamples:T,samples:E}}function CP(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Yr,a=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=c(d,f,0)},this.setState=function(d,f,p){const _=d.clippingPlanes,v=d.clipIntersection,g=d.clipShadows,h=n.get(d);if(!r||_===null||_.length===0||s&&!g)s?c(null):u();else{const m=s?0:i,x=m*4;let S=h.clippingState||null;l.value=S,S=c(_,f,x,p);for(let T=0;T!==x;++T)S[T]=t[T];h.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=m}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,f,p,_){const v=d!==null?d.length:0;let g=null;if(v!==0){if(g=l.value,_!==!0||g===null){const h=p+v*4,m=f.matrixWorldInverse;a.getNormalMatrix(m),(g===null||g.length<h)&&(g=new Float32Array(h));for(let x=0,S=p;x!==v;++x,S+=4)o.copy(d[x]).applyMatrix4(m,a),o.normal.toArray(g,S),g[S+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}const rs=4,fv=[.125,.215,.35,.446,.526,.582],ks=20,RP=256,tl=new bM,dv=new Ye;let Zd=null,Qd=0,Jd=0,eh=!1;const bP=new B;class rm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=bP}=s;Zd=this._renderer.getRenderTarget(),Qd=this._renderer.getActiveCubeFace(),Jd=this._renderer.getActiveMipmapLevel(),eh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Zd,Qd,Jd),this._renderer.xr.enabled=eh,e.scissorTest=!1,Do(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===so||e.mapping===Ra?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zd=this._renderer.getRenderTarget(),Qd=this._renderer.getActiveCubeFace(),Jd=this._renderer.getActiveMipmapLevel(),eh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:Pr,format:Ii,colorSpace:ff,depthBuffer:!1},r=hv(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hv(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=PP(s)),this._blurMaterial=LP(s,e,t),this._ggxMaterial=DP(s,e,t)}return r}_compileMaterial(e){const t=new Jt(new or,e);this._renderer.compile(t,tl)}_sceneToCubeUV(e,t,i,r,s){const l=new Kn(90,1,t,i),u=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(dv),d.toneMapping=er,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Jt(new Oa,new yM({name:"PMREM.Background",side:Rn,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,g=v.material;let h=!1;const m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,h=!0):(g.color.copy(dv),h=!0);for(let x=0;x<6;x++){const S=x%3;S===0?(l.up.set(0,u[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+c[x],s.y,s.z)):S===1?(l.up.set(0,0,u[x]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+c[x],s.z)):(l.up.set(0,u[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+c[x]));const T=this._cubeSize;Do(r,S*T,x>2?T:0,T,T),d.setRenderTarget(r),h&&d.render(v,l),d.render(e,l)}d.toneMapping=p,d.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===so||e.mapping===Ra;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=mv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pv());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Do(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,tl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,u=i/(this._lodMeshes.length-1),c=t/(this._lodMeshes.length-1),d=Math.sqrt(u*u-c*c),f=0+u*1.25,p=d*f,{_lodMax:_}=this,v=this._sizeLods[i],g=3*v*(i>_-rs?i-_+rs:0),h=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=_-t,Do(s,g,h,3*v,2*v),r.setRenderTarget(s),r.render(a,tl),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-i,Do(e,g,h,3*v,2*v),r.setRenderTarget(e),r.render(a,tl)}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&tt("blur direction must be either latitudinal or longitudinal!");const c=3,d=this._lodMeshes[r];d.material=u;const f=u.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ks-1),v=s/_,g=isFinite(s)?1+Math.floor(c*v):ks;g>ks&&Ue(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ks}`);const h=[];let m=0;for(let A=0;A<ks;++A){const y=A/v,C=Math.exp(-y*y/2);h.push(C),A===0?m+=C:A<g&&(m+=2*C)}for(let A=0;A<h.length;A++)h[A]=h[A]/m;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=_,f.mipInt.value=x-i;const S=this._sizeLods[r],T=3*S*(r>x-rs?r-x+rs:0),E=4*(this._cubeSize-S);Do(t,T,E,3*S,2*S),l.setRenderTarget(t),l.render(d,tl)}}function PP(n){const e=[],t=[],i=[];let r=n;const s=n-rs+1+fv.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>n-rs?l=fv[o-n+rs-1]:o===0&&(l=0),t.push(l);const u=1/(a-2),c=-u,d=1+u,f=[c,c,d,c,d,d,c,c,d,d,c,d],p=6,_=6,v=3,g=2,h=1,m=new Float32Array(v*_*p),x=new Float32Array(g*_*p),S=new Float32Array(h*_*p);for(let E=0;E<p;E++){const A=E%3*2/3-1,y=E>2?0:-1,C=[A,y,0,A+2/3,y,0,A+2/3,y+1,0,A,y,0,A+2/3,y+1,0,A,y+1,0];m.set(C,v*_*E),x.set(f,g*_*E);const b=[E,E,E,E,E,E];S.set(b,h*_*E)}const T=new or;T.setAttribute("position",new Fi(m,v)),T.setAttribute("uv",new Fi(x,g)),T.setAttribute("faceIndex",new Fi(S,h)),i.push(new Jt(T,null)),r>rs&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function hv(n,e,t){const i=new tr(n,e,t);return i.texture.mapping=Of,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Do(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function DP(n,e,t){return new sr({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:RP,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Bf(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function LP(n,e,t){const i=new Float32Array(ks),r=new B(0,1,0);return new sr({name:"SphericalGaussianBlur",defines:{n:ks,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Bf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function pv(){return new sr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function mv(){return new sr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function Bf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class LM extends tr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new EM(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Oa(5,5,5),s=new sr({name:"CubemapFromEquirect",uniforms:Pa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Rn,blending:Mr});s.uniforms.tEquirect.value=t;const o=new Jt(r,s),a=t.minFilter;return t.minFilter===Hs&&(t.minFilter=_n),new FC(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}function IP(n){let e=new WeakMap,t=new WeakMap,i=null;function r(f,p=!1){return f==null?null:p?o(f):s(f)}function s(f){if(f&&f.isTexture){const p=f.mapping;if(p===wd||p===Ad)if(e.has(f)){const _=e.get(f).texture;return a(_,f.mapping)}else{const _=f.image;if(_&&_.height>0){const v=new LM(_.height);return v.fromEquirectangularTexture(n,f),e.set(f,v),f.addEventListener("dispose",u),a(v.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){const p=f.mapping,_=p===wd||p===Ad,v=p===so||p===Ra;if(_||v){let g=t.get(f);const h=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==h)return i===null&&(i=new rm(n)),g=_?i.fromEquirectangular(f,g):i.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),g.texture;if(g!==void 0)return g.texture;{const m=f.image;return _&&m&&m.height>0||v&&m&&l(m)?(i===null&&(i=new rm(n)),g=_?i.fromEquirectangular(f):i.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),f.addEventListener("dispose",c),g.texture):null}}}return f}function a(f,p){return p===wd?f.mapping=so:p===Ad&&(f.mapping=Ra),f}function l(f){let p=0;const _=6;for(let v=0;v<_;v++)f[v]!==void 0&&p++;return p===_}function u(f){const p=f.target;p.removeEventListener("dispose",u);const _=e.get(p);_!==void 0&&(e.delete(p),_.dispose())}function c(f){const p=f.target;p.removeEventListener("dispose",c);const _=t.get(p);_!==void 0&&(t.delete(p),_.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function NP(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&tm("WebGLRenderer: "+i+" extension not supported."),r}}}function UP(n,e,t,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const p in f)e.update(f[p],n.ARRAY_BUFFER)}function u(d){const f=[],p=d.index,_=d.attributes.position;let v=0;if(_===void 0)return;if(p!==null){const m=p.array;v=p.version;for(let x=0,S=m.length;x<S;x+=3){const T=m[x+0],E=m[x+1],A=m[x+2];f.push(T,E,E,A,A,T)}}else{const m=_.array;v=_.version;for(let x=0,S=m.length/3-1;x<S;x+=3){const T=x+0,E=x+1,A=x+2;f.push(T,E,E,A,A,T)}}const g=new(_.count>=65535?vM:_M)(f,1);g.version=v;const h=s.get(d);h&&e.remove(h),s.set(d,g)}function c(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function FP(n,e,t){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,f){n.drawElements(i,f,s,d*o),t.update(f,i,1)}function u(d,f,p){p!==0&&(n.drawElementsInstanced(i,f,s,d*o,p),t.update(f,i,p))}function c(d,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,p);let v=0;for(let g=0;g<p;g++)v+=f[g];t.update(v,i,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c}function OP(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:tt("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function kP(n,e,t){const i=new WeakMap,r=new Ot;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=c!==void 0?c.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let b=function(){y.dispose(),i.delete(a),a.removeEventListener("dispose",b)};var p=b;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let S=0;_===!0&&(S=1),v===!0&&(S=2),g===!0&&(S=3);let T=a.attributes.position.count*S,E=1;T>e.maxTextureSize&&(E=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const A=new Float32Array(T*E*4*d),y=new pM(A,T,E,d);y.type=Li,y.needsUpdate=!0;const C=S*4;for(let P=0;P<d;P++){const U=h[P],H=m[P],j=x[P],L=T*E*4*P;for(let z=0;z<U.count;z++){const N=z*C;_===!0&&(r.fromBufferAttribute(U,z),A[L+N+0]=r.x,A[L+N+1]=r.y,A[L+N+2]=r.z,A[L+N+3]=0),v===!0&&(r.fromBufferAttribute(H,z),A[L+N+4]=r.x,A[L+N+5]=r.y,A[L+N+6]=r.z,A[L+N+7]=0),g===!0&&(r.fromBufferAttribute(j,z),A[L+N+8]=r.x,A[L+N+9]=r.y,A[L+N+10]=r.z,A[L+N+11]=j.itemSize===4?r.w:1)}}f={count:d,texture:y,size:new Ke(T,E)},i.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let _=0;for(let g=0;g<u.length;g++)_+=u[g];const v=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function BP(n,e,t,i,r){let s=new WeakMap;function o(u){const c=r.render.frame,d=u.geometry,f=e.get(u,d);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),s.get(u)!==c&&(t.update(u.instanceMatrix,n.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,n.ARRAY_BUFFER),s.set(u,c))),u.isSkinnedMesh){const p=u.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return f}function a(){s=new WeakMap}function l(u){const c=u.target;c.removeEventListener("dispose",l),i.releaseStatesOfObject(c),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:o,dispose:a}}const zP={[eM]:"LINEAR_TONE_MAPPING",[tM]:"REINHARD_TONE_MAPPING",[nM]:"CINEON_TONE_MAPPING",[Tg]:"ACES_FILMIC_TONE_MAPPING",[rM]:"AGX_TONE_MAPPING",[sM]:"NEUTRAL_TONE_MAPPING",[iM]:"CUSTOM_TONE_MAPPING"};function VP(n,e,t,i,r){const s=new tr(e,t,{type:n,depthBuffer:i,stencilBuffer:r,depthTexture:i?new ba(e,t):void 0}),o=new tr(e,t,{type:Pr,depthBuffer:!1,stencilBuffer:!1}),a=new or;a.setAttribute("position",new yi([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new yi([0,2,0,0,2,0],2));const l=new RC({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Jt(a,l),c=new bM(-1,1,1,-1,0,1);let d=null,f=null,p=!1,_,v=null,g=[],h=!1;this.setSize=function(m,x){s.setSize(m,x),o.setSize(m,x);for(let S=0;S<g.length;S++){const T=g[S];T.setSize&&T.setSize(m,x)}},this.setEffects=function(m){g=m,h=g.length>0&&g[0].isRenderPass===!0;const x=s.width,S=s.height;for(let T=0;T<g.length;T++){const E=g[T];E.setSize&&E.setSize(x,S)}},this.begin=function(m,x){if(p||m.toneMapping===er&&g.length===0)return!1;if(v=x,x!==null){const S=x.width,T=x.height;(s.width!==S||s.height!==T)&&this.setSize(S,T)}return h===!1&&m.setRenderTarget(s),_=m.toneMapping,m.toneMapping=er,!0},this.hasRenderPass=function(){return h},this.end=function(m,x){m.toneMapping=_,p=!0;let S=s,T=o;for(let E=0;E<g.length;E++){const A=g[E];if(A.enabled!==!1&&(A.render(m,T,S,x),A.needsSwap!==!1)){const y=S;S=T,T=y}}if(d!==m.outputColorSpace||f!==m.toneMapping){d=m.outputColorSpace,f=m.toneMapping,l.defines={},Qe.getTransfer(d)===ut&&(l.defines.SRGB_TRANSFER="");const E=zP[f];E&&(l.defines[E]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,m.setRenderTarget(v),m.render(u,c),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const IM=new bn,sm=new ba(1,1),NM=new pM,UM=new oC,FM=new EM,gv=[],_v=[],vv=new Float32Array(16),xv=new Float32Array(9),yv=new Float32Array(4);function ka(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=gv[r];if(s===void 0&&(s=new Float32Array(r),gv[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function $t(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Kt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function zf(n,e){let t=_v[e];t===void 0&&(t=new Int32Array(e),_v[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function GP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function HP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;n.uniform2fv(this.addr,e),Kt(t,e)}}function WP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if($t(t,e))return;n.uniform3fv(this.addr,e),Kt(t,e)}}function XP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;n.uniform4fv(this.addr,e),Kt(t,e)}}function YP(n,e){const t=this.cache,i=e.elements;if(i===void 0){if($t(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Kt(t,e)}else{if($t(t,i))return;yv.set(i),n.uniformMatrix2fv(this.addr,!1,yv),Kt(t,i)}}function jP(n,e){const t=this.cache,i=e.elements;if(i===void 0){if($t(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Kt(t,e)}else{if($t(t,i))return;xv.set(i),n.uniformMatrix3fv(this.addr,!1,xv),Kt(t,i)}}function qP(n,e){const t=this.cache,i=e.elements;if(i===void 0){if($t(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Kt(t,e)}else{if($t(t,i))return;vv.set(i),n.uniformMatrix4fv(this.addr,!1,vv),Kt(t,i)}}function $P(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function KP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;n.uniform2iv(this.addr,e),Kt(t,e)}}function ZP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;n.uniform3iv(this.addr,e),Kt(t,e)}}function QP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;n.uniform4iv(this.addr,e),Kt(t,e)}}function JP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function e3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;n.uniform2uiv(this.addr,e),Kt(t,e)}}function t3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;n.uniform3uiv(this.addr,e),Kt(t,e)}}function n3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;n.uniform4uiv(this.addr,e),Kt(t,e)}}function i3(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(sm.compareFunction=t.isReversedDepthBuffer()?Ig:Lg,s=sm):s=IM,t.setTexture2D(e||s,r)}function r3(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||UM,r)}function s3(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||FM,r)}function o3(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||NM,r)}function a3(n){switch(n){case 5126:return GP;case 35664:return HP;case 35665:return WP;case 35666:return XP;case 35674:return YP;case 35675:return jP;case 35676:return qP;case 5124:case 35670:return $P;case 35667:case 35671:return KP;case 35668:case 35672:return ZP;case 35669:case 35673:return QP;case 5125:return JP;case 36294:return e3;case 36295:return t3;case 36296:return n3;case 35678:case 36198:case 36298:case 36306:case 35682:return i3;case 35679:case 36299:case 36307:return r3;case 35680:case 36300:case 36308:case 36293:return s3;case 36289:case 36303:case 36311:case 36292:return o3}}function l3(n,e){n.uniform1fv(this.addr,e)}function u3(n,e){const t=ka(e,this.size,2);n.uniform2fv(this.addr,t)}function c3(n,e){const t=ka(e,this.size,3);n.uniform3fv(this.addr,t)}function f3(n,e){const t=ka(e,this.size,4);n.uniform4fv(this.addr,t)}function d3(n,e){const t=ka(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function h3(n,e){const t=ka(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function p3(n,e){const t=ka(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function m3(n,e){n.uniform1iv(this.addr,e)}function g3(n,e){n.uniform2iv(this.addr,e)}function _3(n,e){n.uniform3iv(this.addr,e)}function v3(n,e){n.uniform4iv(this.addr,e)}function x3(n,e){n.uniform1uiv(this.addr,e)}function y3(n,e){n.uniform2uiv(this.addr,e)}function S3(n,e){n.uniform3uiv(this.addr,e)}function M3(n,e){n.uniform4uiv(this.addr,e)}function E3(n,e,t){const i=this.cache,r=e.length,s=zf(t,r);$t(i,s)||(n.uniform1iv(this.addr,s),Kt(i,s));let o;this.type===n.SAMPLER_2D_SHADOW?o=sm:o=IM;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function T3(n,e,t){const i=this.cache,r=e.length,s=zf(t,r);$t(i,s)||(n.uniform1iv(this.addr,s),Kt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||UM,s[o])}function w3(n,e,t){const i=this.cache,r=e.length,s=zf(t,r);$t(i,s)||(n.uniform1iv(this.addr,s),Kt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||FM,s[o])}function A3(n,e,t){const i=this.cache,r=e.length,s=zf(t,r);$t(i,s)||(n.uniform1iv(this.addr,s),Kt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||NM,s[o])}function C3(n){switch(n){case 5126:return l3;case 35664:return u3;case 35665:return c3;case 35666:return f3;case 35674:return d3;case 35675:return h3;case 35676:return p3;case 5124:case 35670:return m3;case 35667:case 35671:return g3;case 35668:case 35672:return _3;case 35669:case 35673:return v3;case 5125:return x3;case 36294:return y3;case 36295:return S3;case 36296:return M3;case 35678:case 36198:case 36298:case 36306:case 35682:return E3;case 35679:case 36299:case 36307:return T3;case 35680:case 36300:case 36308:case 36293:return w3;case 36289:case 36303:case 36311:case 36292:return A3}}class R3{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=a3(t.type)}}class b3{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=C3(t.type)}}class P3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const th=/(\w+)(\])?(\[|\.)?/g;function Sv(n,e){n.seq.push(e),n.map[e.id]=e}function D3(n,e,t){const i=n.name,r=i.length;for(th.lastIndex=0;;){const s=th.exec(i),o=th.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Sv(t,u===void 0?new R3(a,n,e):new b3(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new P3(a),Sv(t,d)),t=d}}}class wc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);D3(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Mv(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const L3=37297;let I3=0;function N3(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Ev=new ze;function U3(n){Qe._getMatrix(Ev,Qe.workingColorSpace,n);const e=`mat3( ${Ev.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(n)){case df:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return Ue("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Tv(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+N3(n.getShaderSource(e),a)}else return s}function F3(n,e){const t=U3(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const O3={[eM]:"Linear",[tM]:"Reinhard",[nM]:"Cineon",[Tg]:"ACESFilmic",[rM]:"AgX",[sM]:"Neutral",[iM]:"Custom"};function k3(n,e){const t=O3[e];return t===void 0?(Ue("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const nc=new B;function B3(){Qe.getLuminanceCoefficients(nc);const n=nc.x.toFixed(4),e=nc.y.toFixed(4),t=nc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function z3(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cl).join(`
`)}function V3(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function G3(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function cl(n){return n!==""}function wv(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Av(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const H3=/^[ \t]*#include +<([\w\d./]+)>/gm;function om(n){return n.replace(H3,X3)}const W3=new Map;function X3(n,e){let t=We[e];if(t===void 0){const i=W3.get(e);if(i!==void 0)t=We[i],Ue('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return om(t)}const Y3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cv(n){return n.replace(Y3,j3)}function j3(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Rv(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const q3={[yc]:"SHADOWMAP_TYPE_PCF",[ul]:"SHADOWMAP_TYPE_VSM"};function $3(n){return q3[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const K3={[so]:"ENVMAP_TYPE_CUBE",[Ra]:"ENVMAP_TYPE_CUBE",[Of]:"ENVMAP_TYPE_CUBE_UV"};function Z3(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":K3[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const Q3={[Ra]:"ENVMAP_MODE_REFRACTION"};function J3(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Q3[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const e2={[Eg]:"ENVMAP_BLENDING_MULTIPLY",[TA]:"ENVMAP_BLENDING_MIX",[wA]:"ENVMAP_BLENDING_ADD"};function t2(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":e2[n.combine]||"ENVMAP_BLENDING_NONE"}function n2(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function i2(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=$3(t),u=Z3(t),c=J3(t),d=t2(t),f=n2(t),p=z3(t),_=V3(s),v=r.createProgram();let g,h,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(cl).join(`
`),g.length>0&&(g+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(cl).join(`
`),h.length>0&&(h+=`
`)):(g=[Rv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cl).join(`
`),h=[Rv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==er?"#define TONE_MAPPING":"",t.toneMapping!==er?We.tonemapping_pars_fragment:"",t.toneMapping!==er?k3("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,F3("linearToOutputTexel",t.outputColorSpace),B3(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(cl).join(`
`)),o=om(o),o=wv(o,t),o=Av(o,t),a=om(a),a=wv(a,t),a=Av(a,t),o=Cv(o),a=Cv(a),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,h=["#define varying in",t.glslVersion===U0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===U0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const x=m+g+o,S=m+h+a,T=Mv(r,r.VERTEX_SHADER,x),E=Mv(r,r.FRAGMENT_SHADER,S);r.attachShader(v,T),r.attachShader(v,E),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function A(P){if(n.debug.checkShaderErrors){const U=r.getProgramInfoLog(v)||"",H=r.getShaderInfoLog(T)||"",j=r.getShaderInfoLog(E)||"",L=U.trim(),z=H.trim(),N=j.trim();let F=!0,X=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(F=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,T,E);else{const Q=Tv(r,T,"vertex"),re=Tv(r,E,"fragment");tt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+L+`
`+Q+`
`+re)}else L!==""?Ue("WebGLProgram: Program Info Log:",L):(z===""||N==="")&&(X=!1);X&&(P.diagnostics={runnable:F,programLog:L,vertexShader:{log:z,prefix:g},fragmentShader:{log:N,prefix:h}})}r.deleteShader(T),r.deleteShader(E),y=new wc(r,v),C=G3(r,v)}let y;this.getUniforms=function(){return y===void 0&&A(this),y};let C;this.getAttributes=function(){return C===void 0&&A(this),C};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(v,L3)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=I3++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=E,this}let r2=0;class s2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new o2(e),t.set(e,i)),i}}class o2{constructor(e){this.id=r2++,this.code=e,this.usedTimes=0}}function a2(n){return n===oo||n===lf||n===uf}function l2(n,e,t,i,r,s){const o=new Fg,a=new s2,l=new Set,u=[],c=new Map,d=i.logarithmicDepthBuffer;let f=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return l.add(y),y===0?"uv":`uv${y}`}function v(y,C,b,P,U,H){const j=P.fog,L=U.geometry,z=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?P.environment:null,N=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,F=e.get(y.envMap||z,N),X=F&&F.mapping===Of?F.image.height:null,Q=p[y.type];y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&Ue("WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const re=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,ce=re!==void 0?re.length:0;let Oe=0;L.morphAttributes.position!==void 0&&(Oe=1),L.morphAttributes.normal!==void 0&&(Oe=2),L.morphAttributes.color!==void 0&&(Oe=3);let Le,Ae,$,pe;if(Q){const se=Xi[Q];Le=se.vertexShader,Ae=se.fragmentShader}else Le=y.vertexShader,Ae=y.fragmentShader,a.update(y),$=a.getVertexShaderID(y),pe=a.getFragmentShaderID(y);const he=n.getRenderTarget(),Pe=n.state.buffers.depth.getReversed(),Ie=U.isInstancedMesh===!0,Re=U.isBatchedMesh===!0,rt=!!y.map,Ge=!!y.matcap,st=!!F,lt=!!y.aoMap,Be=!!y.lightMap,Y=!!y.bumpMap,ht=!!y.normalMap,nn=!!y.displacementMap,I=!!y.emissiveMap,Et=!!y.metalnessMap,He=!!y.roughnessMap,at=y.anisotropy>0,me=y.clearcoat>0,Tt=y.dispersion>0,R=y.iridescence>0,M=y.sheen>0,k=y.transmission>0,K=at&&!!y.anisotropyMap,te=me&&!!y.clearcoatMap,le=me&&!!y.clearcoatNormalMap,oe=me&&!!y.clearcoatRoughnessMap,q=R&&!!y.iridescenceMap,J=R&&!!y.iridescenceThicknessMap,ge=M&&!!y.sheenColorMap,Se=M&&!!y.sheenRoughnessMap,fe=!!y.specularMap,ae=!!y.specularColorMap,Ne=!!y.specularIntensityMap,ke=k&&!!y.transmissionMap,Ze=k&&!!y.thicknessMap,D=!!y.gradientMap,ue=!!y.alphaMap,Z=y.alphaTest>0,ye=!!y.alphaHash,de=!!y.extensions;let ee=er;y.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(ee=n.toneMapping);const ne={shaderID:Q,shaderType:y.type,shaderName:y.name,vertexShader:Le,fragmentShader:Ae,defines:y.defines,customVertexShaderID:$,customFragmentShaderID:pe,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:Re,batchingColor:Re&&U._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&U.instanceColor!==null,instancingMorph:Ie&&U.morphTexture!==null,outputColorSpace:he===null?n.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:Qe.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:rt,matcap:Ge,envMap:st,envMapMode:st&&F.mapping,envMapCubeUVHeight:X,aoMap:lt,lightMap:Be,bumpMap:Y,normalMap:ht,displacementMap:nn,emissiveMap:I,normalMapObjectSpace:ht&&y.normalMapType===RA,normalMapTangentSpace:ht&&y.normalMapType===cf,packedNormalMap:ht&&y.normalMapType===cf&&a2(y.normalMap.format),metalnessMap:Et,roughnessMap:He,anisotropy:at,anisotropyMap:K,clearcoat:me,clearcoatMap:te,clearcoatNormalMap:le,clearcoatRoughnessMap:oe,dispersion:Tt,iridescence:R,iridescenceMap:q,iridescenceThicknessMap:J,sheen:M,sheenColorMap:ge,sheenRoughnessMap:Se,specularMap:fe,specularColorMap:ae,specularIntensityMap:Ne,transmission:k,transmissionMap:ke,thicknessMap:Ze,gradientMap:D,opaque:y.transparent===!1&&y.blending===la&&y.alphaToCoverage===!1,alphaMap:ue,alphaTest:Z,alphaHash:ye,combine:y.combine,mapUv:rt&&_(y.map.channel),aoMapUv:lt&&_(y.aoMap.channel),lightMapUv:Be&&_(y.lightMap.channel),bumpMapUv:Y&&_(y.bumpMap.channel),normalMapUv:ht&&_(y.normalMap.channel),displacementMapUv:nn&&_(y.displacementMap.channel),emissiveMapUv:I&&_(y.emissiveMap.channel),metalnessMapUv:Et&&_(y.metalnessMap.channel),roughnessMapUv:He&&_(y.roughnessMap.channel),anisotropyMapUv:K&&_(y.anisotropyMap.channel),clearcoatMapUv:te&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:le&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:q&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:J&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Se&&_(y.sheenRoughnessMap.channel),specularMapUv:fe&&_(y.specularMap.channel),specularColorMapUv:ae&&_(y.specularColorMap.channel),specularIntensityMapUv:Ne&&_(y.specularIntensityMap.channel),transmissionMapUv:ke&&_(y.transmissionMap.channel),thicknessMapUv:Ze&&_(y.thicknessMap.channel),alphaMapUv:ue&&_(y.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(ht||at),vertexNormals:!!L.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!L.attributes.uv&&(rt||ue),fog:!!j,useFog:y.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||L.attributes.normal===void 0&&ht===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Pe,skinning:U.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:Oe,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&b.length>0,shadowMapType:n.shadowMap.type,toneMapping:ee,decodeVideoTexture:rt&&y.map.isVideoTexture===!0&&Qe.getTransfer(y.map.colorSpace)===ut,decodeVideoTextureEmissive:I&&y.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(y.emissiveMap.colorSpace)===ut,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===gr,flipSided:y.side===Rn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:de&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(de&&y.extensions.multiDraw===!0||Re)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ne.vertexUv1s=l.has(1),ne.vertexUv2s=l.has(2),ne.vertexUv3s=l.has(3),l.clear(),ne}function g(y){const C=[];if(y.shaderID?C.push(y.shaderID):(C.push(y.customVertexShaderID),C.push(y.customFragmentShaderID)),y.defines!==void 0)for(const b in y.defines)C.push(b),C.push(y.defines[b]);return y.isRawShaderMaterial===!1&&(h(C,y),m(C,y),C.push(n.outputColorSpace)),C.push(y.customProgramCacheKey),C.join()}function h(y,C){y.push(C.precision),y.push(C.outputColorSpace),y.push(C.envMapMode),y.push(C.envMapCubeUVHeight),y.push(C.mapUv),y.push(C.alphaMapUv),y.push(C.lightMapUv),y.push(C.aoMapUv),y.push(C.bumpMapUv),y.push(C.normalMapUv),y.push(C.displacementMapUv),y.push(C.emissiveMapUv),y.push(C.metalnessMapUv),y.push(C.roughnessMapUv),y.push(C.anisotropyMapUv),y.push(C.clearcoatMapUv),y.push(C.clearcoatNormalMapUv),y.push(C.clearcoatRoughnessMapUv),y.push(C.iridescenceMapUv),y.push(C.iridescenceThicknessMapUv),y.push(C.sheenColorMapUv),y.push(C.sheenRoughnessMapUv),y.push(C.specularMapUv),y.push(C.specularColorMapUv),y.push(C.specularIntensityMapUv),y.push(C.transmissionMapUv),y.push(C.thicknessMapUv),y.push(C.combine),y.push(C.fogExp2),y.push(C.sizeAttenuation),y.push(C.morphTargetsCount),y.push(C.morphAttributeCount),y.push(C.numDirLights),y.push(C.numPointLights),y.push(C.numSpotLights),y.push(C.numSpotLightMaps),y.push(C.numHemiLights),y.push(C.numRectAreaLights),y.push(C.numDirLightShadows),y.push(C.numPointLightShadows),y.push(C.numSpotLightShadows),y.push(C.numSpotLightShadowsWithMaps),y.push(C.numLightProbes),y.push(C.shadowMapType),y.push(C.toneMapping),y.push(C.numClippingPlanes),y.push(C.numClipIntersection),y.push(C.depthPacking)}function m(y,C){o.disableAll(),C.instancing&&o.enable(0),C.instancingColor&&o.enable(1),C.instancingMorph&&o.enable(2),C.matcap&&o.enable(3),C.envMap&&o.enable(4),C.normalMapObjectSpace&&o.enable(5),C.normalMapTangentSpace&&o.enable(6),C.clearcoat&&o.enable(7),C.iridescence&&o.enable(8),C.alphaTest&&o.enable(9),C.vertexColors&&o.enable(10),C.vertexAlphas&&o.enable(11),C.vertexUv1s&&o.enable(12),C.vertexUv2s&&o.enable(13),C.vertexUv3s&&o.enable(14),C.vertexTangents&&o.enable(15),C.anisotropy&&o.enable(16),C.alphaHash&&o.enable(17),C.batching&&o.enable(18),C.dispersion&&o.enable(19),C.batchingColor&&o.enable(20),C.gradientMap&&o.enable(21),C.packedNormalMap&&o.enable(22),C.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.reversedDepthBuffer&&o.enable(4),C.skinning&&o.enable(5),C.morphTargets&&o.enable(6),C.morphNormals&&o.enable(7),C.morphColors&&o.enable(8),C.premultipliedAlpha&&o.enable(9),C.shadowMapEnabled&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),C.decodeVideoTextureEmissive&&o.enable(20),C.alphaToCoverage&&o.enable(21),C.numLightProbeGrids>0&&o.enable(22),y.push(o.mask)}function x(y){const C=p[y.type];let b;if(C){const P=Xi[C];b=wC.clone(P.uniforms)}else b=y.uniforms;return b}function S(y,C){let b=c.get(C);return b!==void 0?++b.usedTimes:(b=new i2(n,C,y,r),u.push(b),c.set(C,b)),b}function T(y){if(--y.usedTimes===0){const C=u.indexOf(y);u[C]=u[u.length-1],u.pop(),c.delete(y.cacheKey),y.destroy()}}function E(y){a.remove(y)}function A(){a.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:x,acquireProgram:S,releaseProgram:T,releaseShaderCache:E,programs:u,dispose:A}}function u2(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function c2(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function bv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Pv(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function a(f,p,_,v,g,h){let m=n[e];return m===void 0?(m={id:f.id,object:f,geometry:p,material:_,materialVariant:o(f),groupOrder:v,renderOrder:f.renderOrder,z:g,group:h},n[e]=m):(m.id=f.id,m.object=f,m.geometry=p,m.material=_,m.materialVariant=o(f),m.groupOrder=v,m.renderOrder=f.renderOrder,m.z=g,m.group=h),e++,m}function l(f,p,_,v,g,h){const m=a(f,p,_,v,g,h);_.transmission>0?i.push(m):_.transparent===!0?r.push(m):t.push(m)}function u(f,p,_,v,g,h){const m=a(f,p,_,v,g,h);_.transmission>0?i.unshift(m):_.transparent===!0?r.unshift(m):t.unshift(m)}function c(f,p){t.length>1&&t.sort(f||c2),i.length>1&&i.sort(p||bv),r.length>1&&r.sort(p||bv)}function d(){for(let f=e,p=n.length;f<p;f++){const _=n[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:u,finish:d,sort:c}}function f2(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Pv,n.set(i,[o])):r>=s.length?(o=new Pv,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function d2(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new Ye};break;case"SpotLight":t={position:new B,direction:new B,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new B,halfWidth:new B,halfHeight:new B};break}return n[e.id]=t,t}}}function h2(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let p2=0;function m2(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function g2(n){const e=new d2,t=h2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new B);const r=new B,s=new Mt,o=new Mt;function a(u){let c=0,d=0,f=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let p=0,_=0,v=0,g=0,h=0,m=0,x=0,S=0,T=0,E=0,A=0;u.sort(m2);for(let C=0,b=u.length;C<b;C++){const P=u[C],U=P.color,H=P.intensity,j=P.distance;let L=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===oo?L=P.shadow.map.texture:L=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)c+=U.r*H,d+=U.g*H,f+=U.b*H;else if(P.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(P.sh.coefficients[z],H);A++}else if(P.isDirectionalLight){const z=e.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const N=P.shadow,F=t.get(P);F.shadowIntensity=N.intensity,F.shadowBias=N.bias,F.shadowNormalBias=N.normalBias,F.shadowRadius=N.radius,F.shadowMapSize=N.mapSize,i.directionalShadow[p]=F,i.directionalShadowMap[p]=L,i.directionalShadowMatrix[p]=P.shadow.matrix,m++}i.directional[p]=z,p++}else if(P.isSpotLight){const z=e.get(P);z.position.setFromMatrixPosition(P.matrixWorld),z.color.copy(U).multiplyScalar(H),z.distance=j,z.coneCos=Math.cos(P.angle),z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),z.decay=P.decay,i.spot[v]=z;const N=P.shadow;if(P.map&&(i.spotLightMap[T]=P.map,T++,N.updateMatrices(P),P.castShadow&&E++),i.spotLightMatrix[v]=N.matrix,P.castShadow){const F=t.get(P);F.shadowIntensity=N.intensity,F.shadowBias=N.bias,F.shadowNormalBias=N.normalBias,F.shadowRadius=N.radius,F.shadowMapSize=N.mapSize,i.spotShadow[v]=F,i.spotShadowMap[v]=L,S++}v++}else if(P.isRectAreaLight){const z=e.get(P);z.color.copy(U).multiplyScalar(H),z.halfWidth.set(P.width*.5,0,0),z.halfHeight.set(0,P.height*.5,0),i.rectArea[g]=z,g++}else if(P.isPointLight){const z=e.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),z.distance=P.distance,z.decay=P.decay,P.castShadow){const N=P.shadow,F=t.get(P);F.shadowIntensity=N.intensity,F.shadowBias=N.bias,F.shadowNormalBias=N.normalBias,F.shadowRadius=N.radius,F.shadowMapSize=N.mapSize,F.shadowCameraNear=N.camera.near,F.shadowCameraFar=N.camera.far,i.pointShadow[_]=F,i.pointShadowMap[_]=L,i.pointShadowMatrix[_]=P.shadow.matrix,x++}i.point[_]=z,_++}else if(P.isHemisphereLight){const z=e.get(P);z.skyColor.copy(P.color).multiplyScalar(H),z.groundColor.copy(P.groundColor).multiplyScalar(H),i.hemi[h]=z,h++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=d,i.ambient[2]=f;const y=i.hash;(y.directionalLength!==p||y.pointLength!==_||y.spotLength!==v||y.rectAreaLength!==g||y.hemiLength!==h||y.numDirectionalShadows!==m||y.numPointShadows!==x||y.numSpotShadows!==S||y.numSpotMaps!==T||y.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=g,i.point.length=_,i.hemi.length=h,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=S+T-E,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=A,y.directionalLength=p,y.pointLength=_,y.spotLength=v,y.rectAreaLength=g,y.hemiLength=h,y.numDirectionalShadows=m,y.numPointShadows=x,y.numSpotShadows=S,y.numSpotMaps=T,y.numLightProbes=A,i.version=p2++)}function l(u,c){let d=0,f=0,p=0,_=0,v=0;const g=c.matrixWorldInverse;for(let h=0,m=u.length;h<m;h++){const x=u[h];if(x.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),d++}else if(x.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),p++}else if(x.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(g),o.identity(),s.copy(x.matrixWorld),s.premultiply(g),o.extractRotation(s),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(x.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(g),f++}else if(x.isHemisphereLight){const S=i.hemi[v];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(g),v++}}}return{setup:a,setupView:l,state:i}}function Dv(n){const e=new g2(n),t=[],i=[],r=[];function s(f){d.camera=f,t.length=0,i.length=0,r.length=0}function o(f){t.push(f)}function a(f){i.push(f)}function l(f){r.push(f)}function u(){e.setup(t)}function c(f){e.setupView(t,f)}const d={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:u,setupLightsView:c,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function _2(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Dv(n),e.set(r,[a])):s>=o.length?(a=new Dv(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const v2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,x2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,y2=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],S2=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],Lv=new Mt,nl=new B,nh=new B;function M2(n,e,t){let i=new Og;const r=new Ke,s=new Ke,o=new Ot,a=new DC,l=new LC,u={},c=t.maxTextureSize,d={[ys]:Rn,[Rn]:ys,[gr]:gr},f=new sr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:v2,fragmentShader:x2}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new or;_.setAttribute("position",new Fi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Jt(_,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yc;let h=this.type;this.render=function(E,A,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;this.type===sA&&(Ue("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=yc);const C=n.getRenderTarget(),b=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),U=n.state;U.setBlending(Mr),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const H=h!==this.type;H&&A.traverse(function(j){j.material&&(Array.isArray(j.material)?j.material.forEach(L=>L.needsUpdate=!0):j.material.needsUpdate=!0)});for(let j=0,L=E.length;j<L;j++){const z=E[j],N=z.shadow;if(N===void 0){Ue("WebGLShadowMap:",z,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const F=N.getFrameExtents();r.multiply(F),s.copy(N.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/F.x),r.x=s.x*F.x,N.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/F.y),r.y=s.y*F.y,N.mapSize.y=s.y));const X=n.state.buffers.depth.getReversed();if(N.camera._reversedDepth=X,N.map===null||H===!0){if(N.map!==null&&(N.map.depthTexture!==null&&(N.map.depthTexture.dispose(),N.map.depthTexture=null),N.map.dispose()),this.type===ul){if(z.isPointLight){Ue("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new tr(r.x,r.y,{format:oo,type:Pr,minFilter:_n,magFilter:_n,generateMipmaps:!1}),N.map.texture.name=z.name+".shadowMap",N.map.depthTexture=new ba(r.x,r.y,Li),N.map.depthTexture.name=z.name+".shadowMapDepth",N.map.depthTexture.format=Dr,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=on,N.map.depthTexture.magFilter=on}else z.isPointLight?(N.map=new LM(r.x),N.map.depthTexture=new EC(r.x,rr)):(N.map=new tr(r.x,r.y),N.map.depthTexture=new ba(r.x,r.y,rr)),N.map.depthTexture.name=z.name+".shadowMap",N.map.depthTexture.format=Dr,this.type===yc?(N.map.depthTexture.compareFunction=X?Ig:Lg,N.map.depthTexture.minFilter=_n,N.map.depthTexture.magFilter=_n):(N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=on,N.map.depthTexture.magFilter=on);N.camera.updateProjectionMatrix()}const Q=N.map.isWebGLCubeRenderTarget?6:1;for(let re=0;re<Q;re++){if(N.map.isWebGLCubeRenderTarget)n.setRenderTarget(N.map,re),n.clear();else{re===0&&(n.setRenderTarget(N.map),n.clear());const ce=N.getViewport(re);o.set(s.x*ce.x,s.y*ce.y,s.x*ce.z,s.y*ce.w),U.viewport(o)}if(z.isPointLight){const ce=N.camera,Oe=N.matrix,Le=z.distance||ce.far;Le!==ce.far&&(ce.far=Le,ce.updateProjectionMatrix()),nl.setFromMatrixPosition(z.matrixWorld),ce.position.copy(nl),nh.copy(ce.position),nh.add(y2[re]),ce.up.copy(S2[re]),ce.lookAt(nh),ce.updateMatrixWorld(),Oe.makeTranslation(-nl.x,-nl.y,-nl.z),Lv.multiplyMatrices(ce.projectionMatrix,ce.matrixWorldInverse),N._frustum.setFromProjectionMatrix(Lv,ce.coordinateSystem,ce.reversedDepth)}else N.updateMatrices(z);i=N.getFrustum(),S(A,y,N.camera,z,this.type)}N.isPointLightShadow!==!0&&this.type===ul&&m(N,y),N.needsUpdate=!1}h=this.type,g.needsUpdate=!1,n.setRenderTarget(C,b,P)};function m(E,A){const y=e.update(v);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new tr(r.x,r.y,{format:oo,type:Pr})),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(A,null,y,f,v,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(A,null,y,p,v,null)}function x(E,A,y,C){let b=null;const P=y.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)b=P;else if(b=y.isPointLight===!0?l:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const U=b.uuid,H=A.uuid;let j=u[U];j===void 0&&(j={},u[U]=j);let L=j[H];L===void 0&&(L=b.clone(),j[H]=L,A.addEventListener("dispose",T)),b=L}if(b.visible=A.visible,b.wireframe=A.wireframe,C===ul?b.side=A.shadowSide!==null?A.shadowSide:A.side:b.side=A.shadowSide!==null?A.shadowSide:d[A.side],b.alphaMap=A.alphaMap,b.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,b.map=A.map,b.clipShadows=A.clipShadows,b.clippingPlanes=A.clippingPlanes,b.clipIntersection=A.clipIntersection,b.displacementMap=A.displacementMap,b.displacementScale=A.displacementScale,b.displacementBias=A.displacementBias,b.wireframeLinewidth=A.wireframeLinewidth,b.linewidth=A.linewidth,y.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const U=n.properties.get(b);U.light=y}return b}function S(E,A,y,C,b){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&b===ul)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,E.matrixWorld);const H=e.update(E),j=E.material;if(Array.isArray(j)){const L=H.groups;for(let z=0,N=L.length;z<N;z++){const F=L[z],X=j[F.materialIndex];if(X&&X.visible){const Q=x(E,X,C,b);E.onBeforeShadow(n,E,A,y,H,Q,F),n.renderBufferDirect(y,null,H,Q,E,F),E.onAfterShadow(n,E,A,y,H,Q,F)}}}else if(j.visible){const L=x(E,j,C,b);E.onBeforeShadow(n,E,A,y,H,L,null),n.renderBufferDirect(y,null,H,L,E,null),E.onAfterShadow(n,E,A,y,H,L,null)}}const U=E.children;for(let H=0,j=U.length;H<j;H++)S(U[H],A,y,C,b)}function T(E){E.target.removeEventListener("dispose",T);for(const y in u){const C=u[y],b=E.target.uuid;b in C&&(C[b].dispose(),delete C[b])}}}function E2(n,e){function t(){let D=!1;const ue=new Ot;let Z=null;const ye=new Ot(0,0,0,0);return{setMask:function(de){Z!==de&&!D&&(n.colorMask(de,de,de,de),Z=de)},setLocked:function(de){D=de},setClear:function(de,ee,ne,se,De){De===!0&&(de*=se,ee*=se,ne*=se),ue.set(de,ee,ne,se),ye.equals(ue)===!1&&(n.clearColor(de,ee,ne,se),ye.copy(ue))},reset:function(){D=!1,Z=null,ye.set(-1,0,0,0)}}}function i(){let D=!1,ue=!1,Z=null,ye=null,de=null;return{setReversed:function(ee){if(ue!==ee){const ne=e.get("EXT_clip_control");ee?ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.ZERO_TO_ONE_EXT):ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.NEGATIVE_ONE_TO_ONE_EXT),ue=ee;const se=de;de=null,this.setClear(se)}},getReversed:function(){return ue},setTest:function(ee){ee?he(n.DEPTH_TEST):Pe(n.DEPTH_TEST)},setMask:function(ee){Z!==ee&&!D&&(n.depthMask(ee),Z=ee)},setFunc:function(ee){if(ue&&(ee=kA[ee]),ye!==ee){switch(ee){case gp:n.depthFunc(n.NEVER);break;case _p:n.depthFunc(n.ALWAYS);break;case vp:n.depthFunc(n.LESS);break;case Ca:n.depthFunc(n.LEQUAL);break;case xp:n.depthFunc(n.EQUAL);break;case yp:n.depthFunc(n.GEQUAL);break;case Sp:n.depthFunc(n.GREATER);break;case Mp:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ye=ee}},setLocked:function(ee){D=ee},setClear:function(ee){de!==ee&&(de=ee,ue&&(ee=1-ee),n.clearDepth(ee))},reset:function(){D=!1,Z=null,ye=null,de=null,ue=!1}}}function r(){let D=!1,ue=null,Z=null,ye=null,de=null,ee=null,ne=null,se=null,De=null;return{setTest:function(Fe){D||(Fe?he(n.STENCIL_TEST):Pe(n.STENCIL_TEST))},setMask:function(Fe){ue!==Fe&&!D&&(n.stencilMask(Fe),ue=Fe)},setFunc:function(Fe,Rt,Yt){(Z!==Fe||ye!==Rt||de!==Yt)&&(n.stencilFunc(Fe,Rt,Yt),Z=Fe,ye=Rt,de=Yt)},setOp:function(Fe,Rt,Yt){(ee!==Fe||ne!==Rt||se!==Yt)&&(n.stencilOp(Fe,Rt,Yt),ee=Fe,ne=Rt,se=Yt)},setLocked:function(Fe){D=Fe},setClear:function(Fe){De!==Fe&&(n.clearStencil(Fe),De=Fe)},reset:function(){D=!1,ue=null,Z=null,ye=null,de=null,ee=null,ne=null,se=null,De=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,u=new WeakMap;let c={},d={},f={},p=new WeakMap,_=[],v=null,g=!1,h=null,m=null,x=null,S=null,T=null,E=null,A=null,y=new Ye(0,0,0),C=0,b=!1,P=null,U=null,H=null,j=null,L=null;const z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,F=0;const X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(X)[1]),N=F>=1):X.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),N=F>=2);let Q=null,re={};const ce=n.getParameter(n.SCISSOR_BOX),Oe=n.getParameter(n.VIEWPORT),Le=new Ot().fromArray(ce),Ae=new Ot().fromArray(Oe);function $(D,ue,Z,ye){const de=new Uint8Array(4),ee=n.createTexture();n.bindTexture(D,ee),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ne=0;ne<Z;ne++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(ue,0,n.RGBA,1,1,ye,0,n.RGBA,n.UNSIGNED_BYTE,de):n.texImage2D(ue+ne,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,de);return ee}const pe={};pe[n.TEXTURE_2D]=$(n.TEXTURE_2D,n.TEXTURE_2D,1),pe[n.TEXTURE_CUBE_MAP]=$(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[n.TEXTURE_2D_ARRAY]=$(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),pe[n.TEXTURE_3D]=$(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),he(n.DEPTH_TEST),o.setFunc(Ca),Y(!1),ht(b0),he(n.CULL_FACE),lt(Mr);function he(D){c[D]!==!0&&(n.enable(D),c[D]=!0)}function Pe(D){c[D]!==!1&&(n.disable(D),c[D]=!1)}function Ie(D,ue){return f[D]!==ue?(n.bindFramebuffer(D,ue),f[D]=ue,D===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=ue),D===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=ue),!0):!1}function Re(D,ue){let Z=_,ye=!1;if(D){Z=p.get(ue),Z===void 0&&(Z=[],p.set(ue,Z));const de=D.textures;if(Z.length!==de.length||Z[0]!==n.COLOR_ATTACHMENT0){for(let ee=0,ne=de.length;ee<ne;ee++)Z[ee]=n.COLOR_ATTACHMENT0+ee;Z.length=de.length,ye=!0}}else Z[0]!==n.BACK&&(Z[0]=n.BACK,ye=!0);ye&&n.drawBuffers(Z)}function rt(D){return v!==D?(n.useProgram(D),v=D,!0):!1}const Ge={[Os]:n.FUNC_ADD,[aA]:n.FUNC_SUBTRACT,[lA]:n.FUNC_REVERSE_SUBTRACT};Ge[uA]=n.MIN,Ge[cA]=n.MAX;const st={[fA]:n.ZERO,[dA]:n.ONE,[hA]:n.SRC_COLOR,[pp]:n.SRC_ALPHA,[xA]:n.SRC_ALPHA_SATURATE,[_A]:n.DST_COLOR,[mA]:n.DST_ALPHA,[pA]:n.ONE_MINUS_SRC_COLOR,[mp]:n.ONE_MINUS_SRC_ALPHA,[vA]:n.ONE_MINUS_DST_COLOR,[gA]:n.ONE_MINUS_DST_ALPHA,[yA]:n.CONSTANT_COLOR,[SA]:n.ONE_MINUS_CONSTANT_COLOR,[MA]:n.CONSTANT_ALPHA,[EA]:n.ONE_MINUS_CONSTANT_ALPHA};function lt(D,ue,Z,ye,de,ee,ne,se,De,Fe){if(D===Mr){g===!0&&(Pe(n.BLEND),g=!1);return}if(g===!1&&(he(n.BLEND),g=!0),D!==oA){if(D!==h||Fe!==b){if((m!==Os||T!==Os)&&(n.blendEquation(n.FUNC_ADD),m=Os,T=Os),Fe)switch(D){case la:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case P0:n.blendFunc(n.ONE,n.ONE);break;case D0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case L0:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:tt("WebGLState: Invalid blending: ",D);break}else switch(D){case la:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case P0:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case D0:tt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case L0:tt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:tt("WebGLState: Invalid blending: ",D);break}x=null,S=null,E=null,A=null,y.set(0,0,0),C=0,h=D,b=Fe}return}de=de||ue,ee=ee||Z,ne=ne||ye,(ue!==m||de!==T)&&(n.blendEquationSeparate(Ge[ue],Ge[de]),m=ue,T=de),(Z!==x||ye!==S||ee!==E||ne!==A)&&(n.blendFuncSeparate(st[Z],st[ye],st[ee],st[ne]),x=Z,S=ye,E=ee,A=ne),(se.equals(y)===!1||De!==C)&&(n.blendColor(se.r,se.g,se.b,De),y.copy(se),C=De),h=D,b=!1}function Be(D,ue){D.side===gr?Pe(n.CULL_FACE):he(n.CULL_FACE);let Z=D.side===Rn;ue&&(Z=!Z),Y(Z),D.blending===la&&D.transparent===!1?lt(Mr):lt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),s.setMask(D.colorWrite);const ye=D.stencilWrite;a.setTest(ye),ye&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),I(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?he(n.SAMPLE_ALPHA_TO_COVERAGE):Pe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Y(D){P!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),P=D)}function ht(D){D!==iA?(he(n.CULL_FACE),D!==U&&(D===b0?n.cullFace(n.BACK):D===rA?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Pe(n.CULL_FACE),U=D}function nn(D){D!==H&&(N&&n.lineWidth(D),H=D)}function I(D,ue,Z){D?(he(n.POLYGON_OFFSET_FILL),(j!==ue||L!==Z)&&(j=ue,L=Z,o.getReversed()&&(ue=-ue),n.polygonOffset(ue,Z))):Pe(n.POLYGON_OFFSET_FILL)}function Et(D){D?he(n.SCISSOR_TEST):Pe(n.SCISSOR_TEST)}function He(D){D===void 0&&(D=n.TEXTURE0+z-1),Q!==D&&(n.activeTexture(D),Q=D)}function at(D,ue,Z){Z===void 0&&(Q===null?Z=n.TEXTURE0+z-1:Z=Q);let ye=re[Z];ye===void 0&&(ye={type:void 0,texture:void 0},re[Z]=ye),(ye.type!==D||ye.texture!==ue)&&(Q!==Z&&(n.activeTexture(Z),Q=Z),n.bindTexture(D,ue||pe[D]),ye.type=D,ye.texture=ue)}function me(){const D=re[Q];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Tt(){try{n.compressedTexImage2D(...arguments)}catch(D){tt("WebGLState:",D)}}function R(){try{n.compressedTexImage3D(...arguments)}catch(D){tt("WebGLState:",D)}}function M(){try{n.texSubImage2D(...arguments)}catch(D){tt("WebGLState:",D)}}function k(){try{n.texSubImage3D(...arguments)}catch(D){tt("WebGLState:",D)}}function K(){try{n.compressedTexSubImage2D(...arguments)}catch(D){tt("WebGLState:",D)}}function te(){try{n.compressedTexSubImage3D(...arguments)}catch(D){tt("WebGLState:",D)}}function le(){try{n.texStorage2D(...arguments)}catch(D){tt("WebGLState:",D)}}function oe(){try{n.texStorage3D(...arguments)}catch(D){tt("WebGLState:",D)}}function q(){try{n.texImage2D(...arguments)}catch(D){tt("WebGLState:",D)}}function J(){try{n.texImage3D(...arguments)}catch(D){tt("WebGLState:",D)}}function ge(D){return d[D]!==void 0?d[D]:n.getParameter(D)}function Se(D,ue){d[D]!==ue&&(n.pixelStorei(D,ue),d[D]=ue)}function fe(D){Le.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),Le.copy(D))}function ae(D){Ae.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),Ae.copy(D))}function Ne(D,ue){let Z=u.get(ue);Z===void 0&&(Z=new WeakMap,u.set(ue,Z));let ye=Z.get(D);ye===void 0&&(ye=n.getUniformBlockIndex(ue,D.name),Z.set(D,ye))}function ke(D,ue){const ye=u.get(ue).get(D);l.get(ue)!==ye&&(n.uniformBlockBinding(ue,ye,D.__bindingPointIndex),l.set(ue,ye))}function Ze(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),c={},d={},Q=null,re={},f={},p=new WeakMap,_=[],v=null,g=!1,h=null,m=null,x=null,S=null,T=null,E=null,A=null,y=new Ye(0,0,0),C=0,b=!1,P=null,U=null,H=null,j=null,L=null,Le.set(0,0,n.canvas.width,n.canvas.height),Ae.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:he,disable:Pe,bindFramebuffer:Ie,drawBuffers:Re,useProgram:rt,setBlending:lt,setMaterial:Be,setFlipSided:Y,setCullFace:ht,setLineWidth:nn,setPolygonOffset:I,setScissorTest:Et,activeTexture:He,bindTexture:at,unbindTexture:me,compressedTexImage2D:Tt,compressedTexImage3D:R,texImage2D:q,texImage3D:J,pixelStorei:Se,getParameter:ge,updateUBOMapping:Ne,uniformBlockBinding:ke,texStorage2D:le,texStorage3D:oe,texSubImage2D:M,texSubImage3D:k,compressedTexSubImage2D:K,compressedTexSubImage3D:te,scissor:fe,viewport:ae,reset:Ze}}function T2(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ke,c=new WeakMap,d=new Set;let f;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,M){return _?new OffscreenCanvas(R,M):hf("canvas")}function g(R,M,k){let K=1;const te=Tt(R);if((te.width>k||te.height>k)&&(K=k/Math.max(te.width,te.height)),K<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const le=Math.floor(K*te.width),oe=Math.floor(K*te.height);f===void 0&&(f=v(le,oe));const q=M?v(le,oe):f;return q.width=le,q.height=oe,q.getContext("2d").drawImage(R,0,0,le,oe),Ue("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+le+"x"+oe+")."),q}else return"data"in R&&Ue("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),R;return R}function h(R){return R.generateMipmaps}function m(R){n.generateMipmap(R)}function x(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(R,M,k,K,te,le=!1){if(R!==null){if(n[R]!==void 0)return n[R];Ue("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let oe;K&&(oe=e.get("EXT_texture_norm16"),oe||Ue("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=M;if(M===n.RED&&(k===n.FLOAT&&(q=n.R32F),k===n.HALF_FLOAT&&(q=n.R16F),k===n.UNSIGNED_BYTE&&(q=n.R8),k===n.UNSIGNED_SHORT&&oe&&(q=oe.R16_EXT),k===n.SHORT&&oe&&(q=oe.R16_SNORM_EXT)),M===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(q=n.R8UI),k===n.UNSIGNED_SHORT&&(q=n.R16UI),k===n.UNSIGNED_INT&&(q=n.R32UI),k===n.BYTE&&(q=n.R8I),k===n.SHORT&&(q=n.R16I),k===n.INT&&(q=n.R32I)),M===n.RG&&(k===n.FLOAT&&(q=n.RG32F),k===n.HALF_FLOAT&&(q=n.RG16F),k===n.UNSIGNED_BYTE&&(q=n.RG8),k===n.UNSIGNED_SHORT&&oe&&(q=oe.RG16_EXT),k===n.SHORT&&oe&&(q=oe.RG16_SNORM_EXT)),M===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(q=n.RG8UI),k===n.UNSIGNED_SHORT&&(q=n.RG16UI),k===n.UNSIGNED_INT&&(q=n.RG32UI),k===n.BYTE&&(q=n.RG8I),k===n.SHORT&&(q=n.RG16I),k===n.INT&&(q=n.RG32I)),M===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(q=n.RGB8UI),k===n.UNSIGNED_SHORT&&(q=n.RGB16UI),k===n.UNSIGNED_INT&&(q=n.RGB32UI),k===n.BYTE&&(q=n.RGB8I),k===n.SHORT&&(q=n.RGB16I),k===n.INT&&(q=n.RGB32I)),M===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),k===n.UNSIGNED_INT&&(q=n.RGBA32UI),k===n.BYTE&&(q=n.RGBA8I),k===n.SHORT&&(q=n.RGBA16I),k===n.INT&&(q=n.RGBA32I)),M===n.RGB&&(k===n.UNSIGNED_SHORT&&oe&&(q=oe.RGB16_EXT),k===n.SHORT&&oe&&(q=oe.RGB16_SNORM_EXT),k===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),k===n.UNSIGNED_INT_10F_11F_11F_REV&&(q=n.R11F_G11F_B10F)),M===n.RGBA){const J=le?df:Qe.getTransfer(te);k===n.FLOAT&&(q=n.RGBA32F),k===n.HALF_FLOAT&&(q=n.RGBA16F),k===n.UNSIGNED_BYTE&&(q=J===ut?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT&&oe&&(q=oe.RGBA16_EXT),k===n.SHORT&&oe&&(q=oe.RGBA16_SNORM_EXT),k===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function T(R,M){let k;return R?M===null||M===rr||M===eu?k=n.DEPTH24_STENCIL8:M===Li?k=n.DEPTH32F_STENCIL8:M===Jl&&(k=n.DEPTH24_STENCIL8,Ue("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===rr||M===eu?k=n.DEPTH_COMPONENT24:M===Li?k=n.DEPTH_COMPONENT32F:M===Jl&&(k=n.DEPTH_COMPONENT16),k}function E(R,M){return h(R)===!0||R.isFramebufferTexture&&R.minFilter!==on&&R.minFilter!==_n?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function A(R){const M=R.target;M.removeEventListener("dispose",A),C(M),M.isVideoTexture&&c.delete(M),M.isHTMLTexture&&d.delete(M)}function y(R){const M=R.target;M.removeEventListener("dispose",y),P(M)}function C(R){const M=i.get(R);if(M.__webglInit===void 0)return;const k=R.source,K=p.get(k);if(K){const te=K[M.__cacheKey];te.usedTimes--,te.usedTimes===0&&b(R),Object.keys(K).length===0&&p.delete(k)}i.remove(R)}function b(R){const M=i.get(R);n.deleteTexture(M.__webglTexture);const k=R.source,K=p.get(k);delete K[M.__cacheKey],o.memory.textures--}function P(R){const M=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(M.__webglFramebuffer[K]))for(let te=0;te<M.__webglFramebuffer[K].length;te++)n.deleteFramebuffer(M.__webglFramebuffer[K][te]);else n.deleteFramebuffer(M.__webglFramebuffer[K]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[K])}else{if(Array.isArray(M.__webglFramebuffer))for(let K=0;K<M.__webglFramebuffer.length;K++)n.deleteFramebuffer(M.__webglFramebuffer[K]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let K=0;K<M.__webglColorRenderbuffer.length;K++)M.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[K]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const k=R.textures;for(let K=0,te=k.length;K<te;K++){const le=i.get(k[K]);le.__webglTexture&&(n.deleteTexture(le.__webglTexture),o.memory.textures--),i.remove(k[K])}i.remove(R)}let U=0;function H(){U=0}function j(){return U}function L(R){U=R}function z(){const R=U;return R>=r.maxTextures&&Ue("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),U+=1,R}function N(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function F(R,M){const k=i.get(R);if(R.isVideoTexture&&at(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&k.__version!==R.version){const K=R.image;if(K===null)Ue("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)Ue("WebGLRenderer: Texture marked for update but image is incomplete");else{Pe(k,R,M);return}}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+M)}function X(R,M){const k=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){Pe(k,R,M);return}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+M)}function Q(R,M){const k=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){Pe(k,R,M);return}t.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+M)}function re(R,M){const k=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&k.__version!==R.version){Ie(k,R,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+M)}const ce={[Ep]:n.REPEAT,[yr]:n.CLAMP_TO_EDGE,[Tp]:n.MIRRORED_REPEAT},Oe={[on]:n.NEAREST,[AA]:n.NEAREST_MIPMAP_NEAREST,[Iu]:n.NEAREST_MIPMAP_LINEAR,[_n]:n.LINEAR,[Cd]:n.LINEAR_MIPMAP_NEAREST,[Hs]:n.LINEAR_MIPMAP_LINEAR},Le={[bA]:n.NEVER,[NA]:n.ALWAYS,[PA]:n.LESS,[Lg]:n.LEQUAL,[DA]:n.EQUAL,[Ig]:n.GEQUAL,[LA]:n.GREATER,[IA]:n.NOTEQUAL};function Ae(R,M){if(M.type===Li&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===_n||M.magFilter===Cd||M.magFilter===Iu||M.magFilter===Hs||M.minFilter===_n||M.minFilter===Cd||M.minFilter===Iu||M.minFilter===Hs)&&Ue("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,ce[M.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,ce[M.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,ce[M.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,Oe[M.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,Oe[M.minFilter]),M.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,Le[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===on||M.minFilter!==Iu&&M.minFilter!==Hs||M.type===Li&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function $(R,M){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",A));const K=M.source;let te=p.get(K);te===void 0&&(te={},p.set(K,te));const le=N(M);if(le!==R.__cacheKey){te[le]===void 0&&(te[le]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,k=!0),te[le].usedTimes++;const oe=te[R.__cacheKey];oe!==void 0&&(te[R.__cacheKey].usedTimes--,oe.usedTimes===0&&b(M)),R.__cacheKey=le,R.__webglTexture=te[le].texture}return k}function pe(R,M,k){return Math.floor(Math.floor(R/k)/M)}function he(R,M,k,K){const le=R.updateRanges;if(le.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,M.width,M.height,k,K,M.data);else{le.sort((Se,fe)=>Se.start-fe.start);let oe=0;for(let Se=1;Se<le.length;Se++){const fe=le[oe],ae=le[Se],Ne=fe.start+fe.count,ke=pe(ae.start,M.width,4),Ze=pe(fe.start,M.width,4);ae.start<=Ne+1&&ke===Ze&&pe(ae.start+ae.count-1,M.width,4)===ke?fe.count=Math.max(fe.count,ae.start+ae.count-fe.start):(++oe,le[oe]=ae)}le.length=oe+1;const q=t.getParameter(n.UNPACK_ROW_LENGTH),J=t.getParameter(n.UNPACK_SKIP_PIXELS),ge=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,M.width);for(let Se=0,fe=le.length;Se<fe;Se++){const ae=le[Se],Ne=Math.floor(ae.start/4),ke=Math.ceil(ae.count/4),Ze=Ne%M.width,D=Math.floor(Ne/M.width),ue=ke,Z=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Ze),t.pixelStorei(n.UNPACK_SKIP_ROWS,D),t.texSubImage2D(n.TEXTURE_2D,0,Ze,D,ue,Z,k,K,M.data)}R.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,q),t.pixelStorei(n.UNPACK_SKIP_PIXELS,J),t.pixelStorei(n.UNPACK_SKIP_ROWS,ge)}}function Pe(R,M,k){let K=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(K=n.TEXTURE_3D);const te=$(R,M),le=M.source;t.bindTexture(K,R.__webglTexture,n.TEXTURE0+k);const oe=i.get(le);if(le.version!==oe.__version||te===!0){if(t.activeTexture(n.TEXTURE0+k),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const Z=Qe.getPrimaries(Qe.workingColorSpace),ye=M.colorSpace===$r?null:Qe.getPrimaries(M.colorSpace),de=M.colorSpace===$r||Z===ye?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,de)}t.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment);let J=g(M.image,!1,r.maxTextureSize);J=me(M,J);const ge=s.convert(M.format,M.colorSpace),Se=s.convert(M.type);let fe=S(M.internalFormat,ge,Se,M.normalized,M.colorSpace,M.isVideoTexture);Ae(K,M);let ae;const Ne=M.mipmaps,ke=M.isVideoTexture!==!0,Ze=oe.__version===void 0||te===!0,D=le.dataReady,ue=E(M,J);if(M.isDepthTexture)fe=T(M.format===Ws,M.type),Ze&&(ke?t.texStorage2D(n.TEXTURE_2D,1,fe,J.width,J.height):t.texImage2D(n.TEXTURE_2D,0,fe,J.width,J.height,0,ge,Se,null));else if(M.isDataTexture)if(Ne.length>0){ke&&Ze&&t.texStorage2D(n.TEXTURE_2D,ue,fe,Ne[0].width,Ne[0].height);for(let Z=0,ye=Ne.length;Z<ye;Z++)ae=Ne[Z],ke?D&&t.texSubImage2D(n.TEXTURE_2D,Z,0,0,ae.width,ae.height,ge,Se,ae.data):t.texImage2D(n.TEXTURE_2D,Z,fe,ae.width,ae.height,0,ge,Se,ae.data);M.generateMipmaps=!1}else ke?(Ze&&t.texStorage2D(n.TEXTURE_2D,ue,fe,J.width,J.height),D&&he(M,J,ge,Se)):t.texImage2D(n.TEXTURE_2D,0,fe,J.width,J.height,0,ge,Se,J.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ke&&Ze&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ue,fe,Ne[0].width,Ne[0].height,J.depth);for(let Z=0,ye=Ne.length;Z<ye;Z++)if(ae=Ne[Z],M.format!==Ii)if(ge!==null)if(ke){if(D)if(M.layerUpdates.size>0){const de=cv(ae.width,ae.height,M.format,M.type);for(const ee of M.layerUpdates){const ne=ae.data.subarray(ee*de/ae.data.BYTES_PER_ELEMENT,(ee+1)*de/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,ee,ae.width,ae.height,1,ge,ne)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,ae.width,ae.height,J.depth,ge,ae.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Z,fe,ae.width,ae.height,J.depth,0,ae.data,0,0);else Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?D&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,ae.width,ae.height,J.depth,ge,Se,ae.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Z,fe,ae.width,ae.height,J.depth,0,ge,Se,ae.data)}else{ke&&Ze&&t.texStorage2D(n.TEXTURE_2D,ue,fe,Ne[0].width,Ne[0].height);for(let Z=0,ye=Ne.length;Z<ye;Z++)ae=Ne[Z],M.format!==Ii?ge!==null?ke?D&&t.compressedTexSubImage2D(n.TEXTURE_2D,Z,0,0,ae.width,ae.height,ge,ae.data):t.compressedTexImage2D(n.TEXTURE_2D,Z,fe,ae.width,ae.height,0,ae.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?D&&t.texSubImage2D(n.TEXTURE_2D,Z,0,0,ae.width,ae.height,ge,Se,ae.data):t.texImage2D(n.TEXTURE_2D,Z,fe,ae.width,ae.height,0,ge,Se,ae.data)}else if(M.isDataArrayTexture)if(ke){if(Ze&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ue,fe,J.width,J.height,J.depth),D)if(M.layerUpdates.size>0){const Z=cv(J.width,J.height,M.format,M.type);for(const ye of M.layerUpdates){const de=J.data.subarray(ye*Z/J.data.BYTES_PER_ELEMENT,(ye+1)*Z/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ye,J.width,J.height,1,ge,Se,de)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ge,Se,J.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,fe,J.width,J.height,J.depth,0,ge,Se,J.data);else if(M.isData3DTexture)ke?(Ze&&t.texStorage3D(n.TEXTURE_3D,ue,fe,J.width,J.height,J.depth),D&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ge,Se,J.data)):t.texImage3D(n.TEXTURE_3D,0,fe,J.width,J.height,J.depth,0,ge,Se,J.data);else if(M.isFramebufferTexture){if(Ze)if(ke)t.texStorage2D(n.TEXTURE_2D,ue,fe,J.width,J.height);else{let Z=J.width,ye=J.height;for(let de=0;de<ue;de++)t.texImage2D(n.TEXTURE_2D,de,fe,Z,ye,0,ge,Se,null),Z>>=1,ye>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in n){const Z=n.canvas;if(Z.hasAttribute("layoutsubtree")||Z.setAttribute("layoutsubtree","true"),J.parentNode!==Z){Z.appendChild(J),d.add(M),Z.onpaint=se=>{const De=se.changedElements;for(const Fe of d)De.includes(Fe.image)&&(Fe.needsUpdate=!0)},Z.requestPaint();return}const ye=0,de=n.RGBA,ee=n.RGBA,ne=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,ye,de,ee,ne,J),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ne.length>0){if(ke&&Ze){const Z=Tt(Ne[0]);t.texStorage2D(n.TEXTURE_2D,ue,fe,Z.width,Z.height)}for(let Z=0,ye=Ne.length;Z<ye;Z++)ae=Ne[Z],ke?D&&t.texSubImage2D(n.TEXTURE_2D,Z,0,0,ge,Se,ae):t.texImage2D(n.TEXTURE_2D,Z,fe,ge,Se,ae);M.generateMipmaps=!1}else if(ke){if(Ze){const Z=Tt(J);t.texStorage2D(n.TEXTURE_2D,ue,fe,Z.width,Z.height)}D&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ge,Se,J)}else t.texImage2D(n.TEXTURE_2D,0,fe,ge,Se,J);h(M)&&m(K),oe.__version=le.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Ie(R,M,k){if(M.image.length!==6)return;const K=$(R,M),te=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+k);const le=i.get(te);if(te.version!==le.__version||K===!0){t.activeTexture(n.TEXTURE0+k);const oe=Qe.getPrimaries(Qe.workingColorSpace),q=M.colorSpace===$r?null:Qe.getPrimaries(M.colorSpace),J=M.colorSpace===$r||oe===q?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);const ge=M.isCompressedTexture||M.image[0].isCompressedTexture,Se=M.image[0]&&M.image[0].isDataTexture,fe=[];for(let ee=0;ee<6;ee++)!ge&&!Se?fe[ee]=g(M.image[ee],!0,r.maxCubemapSize):fe[ee]=Se?M.image[ee].image:M.image[ee],fe[ee]=me(M,fe[ee]);const ae=fe[0],Ne=s.convert(M.format,M.colorSpace),ke=s.convert(M.type),Ze=S(M.internalFormat,Ne,ke,M.normalized,M.colorSpace),D=M.isVideoTexture!==!0,ue=le.__version===void 0||K===!0,Z=te.dataReady;let ye=E(M,ae);Ae(n.TEXTURE_CUBE_MAP,M);let de;if(ge){D&&ue&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ye,Ze,ae.width,ae.height);for(let ee=0;ee<6;ee++){de=fe[ee].mipmaps;for(let ne=0;ne<de.length;ne++){const se=de[ne];M.format!==Ii?Ne!==null?D?Z&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ne,0,0,se.width,se.height,Ne,se.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ne,Ze,se.width,se.height,0,se.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?Z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ne,0,0,se.width,se.height,Ne,ke,se.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ne,Ze,se.width,se.height,0,Ne,ke,se.data)}}}else{if(de=M.mipmaps,D&&ue){de.length>0&&ye++;const ee=Tt(fe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ye,Ze,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(Se){D?Z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,fe[ee].width,fe[ee].height,Ne,ke,fe[ee].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ze,fe[ee].width,fe[ee].height,0,Ne,ke,fe[ee].data);for(let ne=0;ne<de.length;ne++){const De=de[ne].image[ee].image;D?Z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ne+1,0,0,De.width,De.height,Ne,ke,De.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ne+1,Ze,De.width,De.height,0,Ne,ke,De.data)}}else{D?Z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Ne,ke,fe[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ze,Ne,ke,fe[ee]);for(let ne=0;ne<de.length;ne++){const se=de[ne];D?Z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ne+1,0,0,Ne,ke,se.image[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ne+1,Ze,Ne,ke,se.image[ee])}}}h(M)&&m(n.TEXTURE_CUBE_MAP),le.__version=te.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Re(R,M,k,K,te,le){const oe=s.convert(k.format,k.colorSpace),q=s.convert(k.type),J=S(k.internalFormat,oe,q,k.normalized,k.colorSpace),ge=i.get(M),Se=i.get(k);if(Se.__renderTarget=M,!ge.__hasExternalTextures){const fe=Math.max(1,M.width>>le),ae=Math.max(1,M.height>>le);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,le,J,fe,ae,M.depth,0,oe,q,null):t.texImage2D(te,le,J,fe,ae,0,oe,q,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),He(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,te,Se.__webglTexture,0,Et(M)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,te,Se.__webglTexture,le),t.bindFramebuffer(n.FRAMEBUFFER,null)}function rt(R,M,k){if(n.bindRenderbuffer(n.RENDERBUFFER,R),M.depthBuffer){const K=M.depthTexture,te=K&&K.isDepthTexture?K.type:null,le=T(M.stencilBuffer,te),oe=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;He(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Et(M),le,M.width,M.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,Et(M),le,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,le,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,oe,n.RENDERBUFFER,R)}else{const K=M.textures;for(let te=0;te<K.length;te++){const le=K[te],oe=s.convert(le.format,le.colorSpace),q=s.convert(le.type),J=S(le.internalFormat,oe,q,le.normalized,le.colorSpace);He(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Et(M),J,M.width,M.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,Et(M),J,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,J,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ge(R,M,k){const K=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const te=i.get(M.depthTexture);if(te.__renderTarget=M,(!te.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),K){if(te.__webglInit===void 0&&(te.__webglInit=!0,M.depthTexture.addEventListener("dispose",A)),te.__webglTexture===void 0){te.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,te.__webglTexture),Ae(n.TEXTURE_CUBE_MAP,M.depthTexture);const ge=s.convert(M.depthTexture.format),Se=s.convert(M.depthTexture.type);let fe;M.depthTexture.format===Dr?fe=n.DEPTH_COMPONENT24:M.depthTexture.format===Ws&&(fe=n.DEPTH24_STENCIL8);for(let ae=0;ae<6;ae++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,fe,M.width,M.height,0,ge,Se,null)}}else F(M.depthTexture,0);const le=te.__webglTexture,oe=Et(M),q=K?n.TEXTURE_CUBE_MAP_POSITIVE_X+k:n.TEXTURE_2D,J=M.depthTexture.format===Ws?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(M.depthTexture.format===Dr)He(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,q,le,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,J,q,le,0);else if(M.depthTexture.format===Ws)He(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,q,le,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,J,q,le,0);else throw new Error("Unknown depthTexture format")}function st(R){const M=i.get(R),k=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const K=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),K){const te=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,K.removeEventListener("dispose",te)};K.addEventListener("dispose",te),M.__depthDisposeCallback=te}M.__boundDepthTexture=K}if(R.depthTexture&&!M.__autoAllocateDepthBuffer)if(k)for(let K=0;K<6;K++)Ge(M.__webglFramebuffer[K],R,K);else{const K=R.texture.mipmaps;K&&K.length>0?Ge(M.__webglFramebuffer[0],R,0):Ge(M.__webglFramebuffer,R,0)}else if(k){M.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[K]),M.__webglDepthbuffer[K]===void 0)M.__webglDepthbuffer[K]=n.createRenderbuffer(),rt(M.__webglDepthbuffer[K],R,!1);else{const te=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=M.__webglDepthbuffer[K];n.bindRenderbuffer(n.RENDERBUFFER,le),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,le)}}else{const K=R.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),rt(M.__webglDepthbuffer,R,!1);else{const te=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,le),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,le)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function lt(R,M,k){const K=i.get(R);M!==void 0&&Re(K.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&st(R)}function Be(R){const M=R.texture,k=i.get(R),K=i.get(M);R.addEventListener("dispose",y);const te=R.textures,le=R.isWebGLCubeRenderTarget===!0,oe=te.length>1;if(oe||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=M.version,o.memory.textures++),le){k.__webglFramebuffer=[];for(let q=0;q<6;q++)if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer[q]=[];for(let J=0;J<M.mipmaps.length;J++)k.__webglFramebuffer[q][J]=n.createFramebuffer()}else k.__webglFramebuffer[q]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer=[];for(let q=0;q<M.mipmaps.length;q++)k.__webglFramebuffer[q]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(oe)for(let q=0,J=te.length;q<J;q++){const ge=i.get(te[q]);ge.__webglTexture===void 0&&(ge.__webglTexture=n.createTexture(),o.memory.textures++)}if(R.samples>0&&He(R)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let q=0;q<te.length;q++){const J=te[q];k.__webglColorRenderbuffer[q]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[q]);const ge=s.convert(J.format,J.colorSpace),Se=s.convert(J.type),fe=S(J.internalFormat,ge,Se,J.normalized,J.colorSpace,R.isXRRenderTarget===!0),ae=Et(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,ae,fe,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+q,n.RENDERBUFFER,k.__webglColorRenderbuffer[q])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),rt(k.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(le){t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),Ae(n.TEXTURE_CUBE_MAP,M);for(let q=0;q<6;q++)if(M.mipmaps&&M.mipmaps.length>0)for(let J=0;J<M.mipmaps.length;J++)Re(k.__webglFramebuffer[q][J],R,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+q,J);else Re(k.__webglFramebuffer[q],R,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);h(M)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){for(let q=0,J=te.length;q<J;q++){const ge=te[q],Se=i.get(ge);let fe=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(fe=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,Se.__webglTexture),Ae(fe,ge),Re(k.__webglFramebuffer,R,ge,n.COLOR_ATTACHMENT0+q,fe,0),h(ge)&&m(fe)}t.unbindTexture()}else{let q=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(q=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(q,K.__webglTexture),Ae(q,M),M.mipmaps&&M.mipmaps.length>0)for(let J=0;J<M.mipmaps.length;J++)Re(k.__webglFramebuffer[J],R,M,n.COLOR_ATTACHMENT0,q,J);else Re(k.__webglFramebuffer,R,M,n.COLOR_ATTACHMENT0,q,0);h(M)&&m(q),t.unbindTexture()}R.depthBuffer&&st(R)}function Y(R){const M=R.textures;for(let k=0,K=M.length;k<K;k++){const te=M[k];if(h(te)){const le=x(R),oe=i.get(te).__webglTexture;t.bindTexture(le,oe),m(le),t.unbindTexture()}}}const ht=[],nn=[];function I(R){if(R.samples>0){if(He(R)===!1){const M=R.textures,k=R.width,K=R.height;let te=n.COLOR_BUFFER_BIT;const le=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=i.get(R),q=M.length>1;if(q)for(let ge=0;ge<M.length;ge++)t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer);const J=R.texture.mipmaps;J&&J.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let ge=0;ge<M.length;ge++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),q){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,oe.__webglColorRenderbuffer[ge]);const Se=i.get(M[ge]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Se,0)}n.blitFramebuffer(0,0,k,K,0,0,k,K,te,n.NEAREST),l===!0&&(ht.length=0,nn.length=0,ht.push(n.COLOR_ATTACHMENT0+ge),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ht.push(le),nn.push(le),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,nn)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ht))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),q)for(let ge=0;ge<M.length;ge++){t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,oe.__webglColorRenderbuffer[ge]);const Se=i.get(M[ge]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,Se,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const M=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function Et(R){return Math.min(r.maxSamples,R.samples)}function He(R){const M=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function at(R){const M=o.render.frame;c.get(R)!==M&&(c.set(R,M),R.update())}function me(R,M){const k=R.colorSpace,K=R.format,te=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==ff&&k!==$r&&(Qe.getTransfer(k)===ut?(K!==Ii||te!==Jn)&&Ue("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):tt("WebGLTextures: Unsupported texture color space:",k)),M}function Tt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(u.width=R.naturalWidth||R.width,u.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(u.width=R.displayWidth,u.height=R.displayHeight):(u.width=R.width,u.height=R.height),u}this.allocateTextureUnit=z,this.resetTextureUnits=H,this.getTextureUnits=j,this.setTextureUnits=L,this.setTexture2D=F,this.setTexture2DArray=X,this.setTexture3D=Q,this.setTextureCube=re,this.rebindTextures=lt,this.setupRenderTarget=Be,this.updateRenderTargetMipmap=Y,this.updateMultisampleRenderTarget=I,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=He,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function w2(n,e){function t(i,r=$r){let s;const o=Qe.getTransfer(r);if(i===Jn)return n.UNSIGNED_BYTE;if(i===Ag)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Cg)return n.UNSIGNED_SHORT_5_5_5_1;if(i===uM)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===cM)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===aM)return n.BYTE;if(i===lM)return n.SHORT;if(i===Jl)return n.UNSIGNED_SHORT;if(i===wg)return n.INT;if(i===rr)return n.UNSIGNED_INT;if(i===Li)return n.FLOAT;if(i===Pr)return n.HALF_FLOAT;if(i===fM)return n.ALPHA;if(i===dM)return n.RGB;if(i===Ii)return n.RGBA;if(i===Dr)return n.DEPTH_COMPONENT;if(i===Ws)return n.DEPTH_STENCIL;if(i===Rg)return n.RED;if(i===bg)return n.RED_INTEGER;if(i===oo)return n.RG;if(i===Pg)return n.RG_INTEGER;if(i===Dg)return n.RGBA_INTEGER;if(i===Sc||i===Mc||i===Ec||i===Tc)if(o===ut)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Sc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Mc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ec)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Tc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Sc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Mc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ec)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Tc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===wp||i===Ap||i===Cp||i===Rp)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===wp)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ap)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Cp)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Rp)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===bp||i===Pp||i===Dp||i===Lp||i===Ip||i===lf||i===Np)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===bp||i===Pp)return o===ut?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Dp)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Lp)return s.COMPRESSED_R11_EAC;if(i===Ip)return s.COMPRESSED_SIGNED_R11_EAC;if(i===lf)return s.COMPRESSED_RG11_EAC;if(i===Np)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Up||i===Fp||i===Op||i===kp||i===Bp||i===zp||i===Vp||i===Gp||i===Hp||i===Wp||i===Xp||i===Yp||i===jp||i===qp)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Up)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Fp)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Op)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===kp)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Bp)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===zp)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Vp)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Gp)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Hp)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Wp)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Xp)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Yp)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===jp)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===qp)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===$p||i===Kp||i===Zp)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===$p)return o===ut?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Kp)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Zp)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Qp||i===Jp||i===uf||i===em)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Qp)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Jp)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===uf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===em)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===eu?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const A2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,C2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class R2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new TM(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new sr({vertexShader:A2,fragmentShader:C2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Jt(new kf(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class b2 extends co{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,d=null,f=null,p=null,_=null;const v=typeof XRWebGLBinding<"u",g=new R2,h={},m=t.getContextAttributes();let x=null,S=null;const T=[],E=[],A=new Ke;let y=null;const C=new Kn;C.viewport=new Ot;const b=new Kn;b.viewport=new Ot;const P=[C,b],U=new OC;let H=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let pe=T[$];return pe===void 0&&(pe=new Id,T[$]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function($){let pe=T[$];return pe===void 0&&(pe=new Id,T[$]=pe),pe.getGripSpace()},this.getHand=function($){let pe=T[$];return pe===void 0&&(pe=new Id,T[$]=pe),pe.getHandSpace()};function L($){const pe=E.indexOf($.inputSource);if(pe===-1)return;const he=T[pe];he!==void 0&&(he.update($.inputSource,$.frame,u||o),he.dispatchEvent({type:$.type,data:$.inputSource}))}function z(){r.removeEventListener("select",L),r.removeEventListener("selectstart",L),r.removeEventListener("selectend",L),r.removeEventListener("squeeze",L),r.removeEventListener("squeezestart",L),r.removeEventListener("squeezeend",L),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",N);for(let $=0;$<T.length;$++){const pe=E[$];pe!==null&&(E[$]=null,T[$].disconnect(pe))}H=null,j=null,g.reset();for(const $ in h)delete h[$];e.setRenderTarget(x),p=null,f=null,d=null,r=null,S=null,Ae.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&Ue("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&Ue("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function($){u=$},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(x=e.getRenderTarget(),r.addEventListener("select",L),r.addEventListener("selectstart",L),r.addEventListener("selectend",L),r.addEventListener("squeeze",L),r.addEventListener("squeezestart",L),r.addEventListener("squeezeend",L),r.addEventListener("end",z),r.addEventListener("inputsourceschange",N),m.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(A),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,Pe=null,Ie=null;m.depth&&(Ie=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=m.stencil?Ws:Dr,Pe=m.stencil?eu:rr);const Re={colorFormat:t.RGBA8,depthFormat:Ie,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(Re),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new tr(f.textureWidth,f.textureHeight,{format:Ii,type:Jn,depthTexture:new ba(f.textureWidth,f.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const he={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,he),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new tr(p.framebufferWidth,p.framebufferHeight,{format:Ii,type:Jn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Ae.setContext(r),Ae.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function N($){for(let pe=0;pe<$.removed.length;pe++){const he=$.removed[pe],Pe=E.indexOf(he);Pe>=0&&(E[Pe]=null,T[Pe].disconnect(he))}for(let pe=0;pe<$.added.length;pe++){const he=$.added[pe];let Pe=E.indexOf(he);if(Pe===-1){for(let Re=0;Re<T.length;Re++)if(Re>=E.length){E.push(he),Pe=Re;break}else if(E[Re]===null){E[Re]=he,Pe=Re;break}if(Pe===-1)break}const Ie=T[Pe];Ie&&Ie.connect(he)}}const F=new B,X=new B;function Q($,pe,he){F.setFromMatrixPosition(pe.matrixWorld),X.setFromMatrixPosition(he.matrixWorld);const Pe=F.distanceTo(X),Ie=pe.projectionMatrix.elements,Re=he.projectionMatrix.elements,rt=Ie[14]/(Ie[10]-1),Ge=Ie[14]/(Ie[10]+1),st=(Ie[9]+1)/Ie[5],lt=(Ie[9]-1)/Ie[5],Be=(Ie[8]-1)/Ie[0],Y=(Re[8]+1)/Re[0],ht=rt*Be,nn=rt*Y,I=Pe/(-Be+Y),Et=I*-Be;if(pe.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Et),$.translateZ(I),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ie[10]===-1)$.projectionMatrix.copy(pe.projectionMatrix),$.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const He=rt+I,at=Ge+I,me=ht-Et,Tt=nn+(Pe-Et),R=st*Ge/at*He,M=lt*Ge/at*He;$.projectionMatrix.makePerspective(me,Tt,R,M,He,at),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function re($,pe){pe===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(pe.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let pe=$.near,he=$.far;g.texture!==null&&(g.depthNear>0&&(pe=g.depthNear),g.depthFar>0&&(he=g.depthFar)),U.near=b.near=C.near=pe,U.far=b.far=C.far=he,(H!==U.near||j!==U.far)&&(r.updateRenderState({depthNear:U.near,depthFar:U.far}),H=U.near,j=U.far),U.layers.mask=$.layers.mask|6,C.layers.mask=U.layers.mask&-5,b.layers.mask=U.layers.mask&-3;const Pe=$.parent,Ie=U.cameras;re(U,Pe);for(let Re=0;Re<Ie.length;Re++)re(Ie[Re],Pe);Ie.length===2?Q(U,C,b):U.projectionMatrix.copy(C.projectionMatrix),ce($,U,Pe)};function ce($,pe,he){he===null?$.matrix.copy(pe.matrixWorld):($.matrix.copy(he.matrixWorld),$.matrix.invert(),$.matrix.multiply(pe.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(pe.projectionMatrix),$.projectionMatrixInverse.copy(pe.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=nu*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(U)},this.getCameraTexture=function($){return h[$]};let Oe=null;function Le($,pe){if(c=pe.getViewerPose(u||o),_=pe,c!==null){const he=c.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let Pe=!1;he.length!==U.cameras.length&&(U.cameras.length=0,Pe=!0);for(let Ge=0;Ge<he.length;Ge++){const st=he[Ge];let lt=null;if(p!==null)lt=p.getViewport(st);else{const Y=d.getViewSubImage(f,st);lt=Y.viewport,Ge===0&&(e.setRenderTargetTextures(S,Y.colorTexture,Y.depthStencilTexture),e.setRenderTarget(S))}let Be=P[Ge];Be===void 0&&(Be=new Kn,Be.layers.enable(Ge),Be.viewport=new Ot,P[Ge]=Be),Be.matrix.fromArray(st.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(st.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(lt.x,lt.y,lt.width,lt.height),Ge===0&&(U.matrix.copy(Be.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Pe===!0&&U.cameras.push(Be)}const Ie=r.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){d=i.getBinding();const Ge=d.getDepthInformation(he[0]);Ge&&Ge.isValid&&Ge.texture&&g.init(Ge,r.renderState)}if(Ie&&Ie.includes("camera-access")&&v){e.state.unbindTexture(),d=i.getBinding();for(let Ge=0;Ge<he.length;Ge++){const st=he[Ge].camera;if(st){let lt=h[st];lt||(lt=new TM,h[st]=lt);const Be=d.getCameraImage(st);lt.sourceTexture=Be}}}}for(let he=0;he<T.length;he++){const Pe=E[he],Ie=T[he];Pe!==null&&Ie!==void 0&&Ie.update(Pe,pe,u||o)}Oe&&Oe($,pe),pe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:pe}),_=null}const Ae=new PM;Ae.setAnimationLoop(Le),this.setAnimationLoop=function($){Oe=$},this.dispose=function(){}}}const P2=new Mt,OM=new ze;OM.set(-1,0,0,0,1,0,0,0,1);function D2(n,e){function t(g,h){g.matrixAutoUpdate===!0&&g.updateMatrix(),h.value.copy(g.matrix)}function i(g,h){h.color.getRGB(g.fogColor.value,wM(n)),h.isFog?(g.fogNear.value=h.near,g.fogFar.value=h.far):h.isFogExp2&&(g.fogDensity.value=h.density)}function r(g,h,m,x,S){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?s(g,h):h.isMeshLambertMaterial?(s(g,h),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(s(g,h),d(g,h)):h.isMeshPhongMaterial?(s(g,h),c(g,h),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(s(g,h),f(g,h),h.isMeshPhysicalMaterial&&p(g,h,S)):h.isMeshMatcapMaterial?(s(g,h),_(g,h)):h.isMeshDepthMaterial?s(g,h):h.isMeshDistanceMaterial?(s(g,h),v(g,h)):h.isMeshNormalMaterial?s(g,h):h.isLineBasicMaterial?(o(g,h),h.isLineDashedMaterial&&a(g,h)):h.isPointsMaterial?l(g,h,m,x):h.isSpriteMaterial?u(g,h):h.isShadowMaterial?(g.color.value.copy(h.color),g.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(g,h){g.opacity.value=h.opacity,h.color&&g.diffuse.value.copy(h.color),h.emissive&&g.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(g.map.value=h.map,t(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,t(h.alphaMap,g.alphaMapTransform)),h.bumpMap&&(g.bumpMap.value=h.bumpMap,t(h.bumpMap,g.bumpMapTransform),g.bumpScale.value=h.bumpScale,h.side===Rn&&(g.bumpScale.value*=-1)),h.normalMap&&(g.normalMap.value=h.normalMap,t(h.normalMap,g.normalMapTransform),g.normalScale.value.copy(h.normalScale),h.side===Rn&&g.normalScale.value.negate()),h.displacementMap&&(g.displacementMap.value=h.displacementMap,t(h.displacementMap,g.displacementMapTransform),g.displacementScale.value=h.displacementScale,g.displacementBias.value=h.displacementBias),h.emissiveMap&&(g.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,g.emissiveMapTransform)),h.specularMap&&(g.specularMap.value=h.specularMap,t(h.specularMap,g.specularMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest);const m=e.get(h),x=m.envMap,S=m.envMapRotation;x&&(g.envMap.value=x,g.envMapRotation.value.setFromMatrix4(P2.makeRotationFromEuler(S)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(OM),g.reflectivity.value=h.reflectivity,g.ior.value=h.ior,g.refractionRatio.value=h.refractionRatio),h.lightMap&&(g.lightMap.value=h.lightMap,g.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,g.lightMapTransform)),h.aoMap&&(g.aoMap.value=h.aoMap,g.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,g.aoMapTransform))}function o(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,h.map&&(g.map.value=h.map,t(h.map,g.mapTransform))}function a(g,h){g.dashSize.value=h.dashSize,g.totalSize.value=h.dashSize+h.gapSize,g.scale.value=h.scale}function l(g,h,m,x){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.size.value=h.size*m,g.scale.value=x*.5,h.map&&(g.map.value=h.map,t(h.map,g.uvTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,t(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function u(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.rotation.value=h.rotation,h.map&&(g.map.value=h.map,t(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,t(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function c(g,h){g.specular.value.copy(h.specular),g.shininess.value=Math.max(h.shininess,1e-4)}function d(g,h){h.gradientMap&&(g.gradientMap.value=h.gradientMap)}function f(g,h){g.metalness.value=h.metalness,h.metalnessMap&&(g.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,g.metalnessMapTransform)),g.roughness.value=h.roughness,h.roughnessMap&&(g.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,g.roughnessMapTransform)),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)}function p(g,h,m){g.ior.value=h.ior,h.sheen>0&&(g.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),g.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(g.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,g.sheenColorMapTransform)),h.sheenRoughnessMap&&(g.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,g.sheenRoughnessMapTransform))),h.clearcoat>0&&(g.clearcoat.value=h.clearcoat,g.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(g.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,g.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(g.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Rn&&g.clearcoatNormalScale.value.negate())),h.dispersion>0&&(g.dispersion.value=h.dispersion),h.iridescence>0&&(g.iridescence.value=h.iridescence,g.iridescenceIOR.value=h.iridescenceIOR,g.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(g.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,g.iridescenceMapTransform)),h.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),h.transmission>0&&(g.transmission.value=h.transmission,g.transmissionSamplerMap.value=m.texture,g.transmissionSamplerSize.value.set(m.width,m.height),h.transmissionMap&&(g.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,g.transmissionMapTransform)),g.thickness.value=h.thickness,h.thicknessMap&&(g.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=h.attenuationDistance,g.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(g.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(g.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=h.specularIntensity,g.specularColor.value.copy(h.specularColor),h.specularColorMap&&(g.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,g.specularColorMapTransform)),h.specularIntensityMap&&(g.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,h){h.matcap&&(g.matcap.value=h.matcap)}function v(g,h){const m=e.get(h).light;g.referencePosition.value.setFromMatrixPosition(m.matrixWorld),g.nearDistance.value=m.shadow.camera.near,g.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function L2(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(m,x){const S=x.program;i.uniformBlockBinding(m,S)}function u(m,x){let S=r[m.id];S===void 0&&(_(m),S=c(m),r[m.id]=S,m.addEventListener("dispose",g));const T=x.program;i.updateUBOMapping(m,T);const E=e.render.frame;s[m.id]!==E&&(f(m),s[m.id]=E)}function c(m){const x=d();m.__bindingPointIndex=x;const S=n.createBuffer(),T=m.__size,E=m.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,T,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,S),S}function d(){for(let m=0;m<a;m++)if(o.indexOf(m)===-1)return o.push(m),m;return tt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(m){const x=r[m.id],S=m.uniforms,T=m.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let E=0,A=S.length;E<A;E++){const y=Array.isArray(S[E])?S[E]:[S[E]];for(let C=0,b=y.length;C<b;C++){const P=y[C];if(p(P,E,C,T)===!0){const U=P.__offset,H=Array.isArray(P.value)?P.value:[P.value];let j=0;for(let L=0;L<H.length;L++){const z=H[L],N=v(z);typeof z=="number"||typeof z=="boolean"?(P.__data[0]=z,n.bufferSubData(n.UNIFORM_BUFFER,U+j,P.__data)):z.isMatrix3?(P.__data[0]=z.elements[0],P.__data[1]=z.elements[1],P.__data[2]=z.elements[2],P.__data[3]=0,P.__data[4]=z.elements[3],P.__data[5]=z.elements[4],P.__data[6]=z.elements[5],P.__data[7]=0,P.__data[8]=z.elements[6],P.__data[9]=z.elements[7],P.__data[10]=z.elements[8],P.__data[11]=0):ArrayBuffer.isView(z)?P.__data.set(new z.constructor(z.buffer,z.byteOffset,P.__data.length)):(z.toArray(P.__data,j),j+=N.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(m,x,S,T){const E=m.value,A=x+"_"+S;if(T[A]===void 0)return typeof E=="number"||typeof E=="boolean"?T[A]=E:ArrayBuffer.isView(E)?T[A]=E.slice():T[A]=E.clone(),!0;{const y=T[A];if(typeof E=="number"||typeof E=="boolean"){if(y!==E)return T[A]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(y.equals(E)===!1)return y.copy(E),!0}}return!1}function _(m){const x=m.uniforms;let S=0;const T=16;for(let A=0,y=x.length;A<y;A++){const C=Array.isArray(x[A])?x[A]:[x[A]];for(let b=0,P=C.length;b<P;b++){const U=C[b],H=Array.isArray(U.value)?U.value:[U.value];for(let j=0,L=H.length;j<L;j++){const z=H[j],N=v(z),F=S%T,X=F%N.boundary,Q=F+X;S+=X,Q!==0&&T-Q<N.storage&&(S+=T-Q),U.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=S,S+=N.storage}}}const E=S%T;return E>0&&(S+=T-E),m.__size=S,m.__cache={},this}function v(m){const x={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(x.boundary=4,x.storage=4):m.isVector2?(x.boundary=8,x.storage=8):m.isVector3||m.isColor?(x.boundary=16,x.storage=12):m.isVector4?(x.boundary=16,x.storage=16):m.isMatrix3?(x.boundary=48,x.storage=48):m.isMatrix4?(x.boundary=64,x.storage=64):m.isTexture?Ue("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(m)?(x.boundary=16,x.storage=m.byteLength):Ue("WebGLRenderer: Unsupported uniform value type.",m),x}function g(m){const x=m.target;x.removeEventListener("dispose",g);const S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function h(){for(const m in r)n.deleteBuffer(r[m]);o=[],r={},s={}}return{bind:l,update:u,dispose:h}}const I2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Gi=null;function N2(){return Gi===null&&(Gi=new SM(I2,16,16,oo,Pr),Gi.name="DFG_LUT",Gi.minFilter=_n,Gi.magFilter=_n,Gi.wrapS=yr,Gi.wrapT=yr,Gi.generateMipmaps=!1,Gi.needsUpdate=!0),Gi}class U2{constructor(e={}){const{canvas:t=FA(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:p=Jn}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=o;const v=p,g=new Set([Dg,Pg,bg]),h=new Set([Jn,rr,Jl,eu,Ag,Cg]),m=new Uint32Array(4),x=new Int32Array(4),S=new B;let T=null,E=null;const A=[],y=[];let C=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=er,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let P=!1,U=null;this._outputColorSpace=$n;let H=0,j=0,L=null,z=-1,N=null;const F=new Ot,X=new Ot;let Q=null;const re=new Ye(0);let ce=0,Oe=t.width,Le=t.height,Ae=1,$=null,pe=null;const he=new Ot(0,0,Oe,Le),Pe=new Ot(0,0,Oe,Le);let Ie=!1;const Re=new Og;let rt=!1,Ge=!1;const st=new Mt,lt=new B,Be=new Ot,Y={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ht=!1;function nn(){return L===null?Ae:1}let I=i;function Et(w,O){return t.getContext(w,O)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Mg}`),t.addEventListener("webglcontextlost",ee,!1),t.addEventListener("webglcontextrestored",ne,!1),t.addEventListener("webglcontextcreationerror",se,!1),I===null){const O="webgl2";if(I=Et(O,w),I===null)throw Et(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw tt("WebGLRenderer: "+w.message),w}let He,at,me,Tt,R,M,k,K,te,le,oe,q,J,ge,Se,fe,ae,Ne,ke,Ze,D,ue,Z;function ye(){He=new NP(I),He.init(),D=new w2(I,He),at=new AP(I,He,e,D),me=new E2(I,He),at.reversedDepthBuffer&&f&&me.buffers.depth.setReversed(!0),Tt=new OP(I),R=new u2,M=new T2(I,He,me,R,at,D,Tt),k=new IP(b),K=new VC(I),ue=new TP(I,K),te=new UP(I,K,Tt,ue),le=new BP(I,te,K,ue,Tt),Ne=new kP(I,at,M),Se=new CP(R),oe=new l2(b,k,He,at,ue,Se),q=new D2(b,R),J=new f2,ge=new _2(He),ae=new EP(b,k,me,le,_,l),fe=new M2(b,le,at),Z=new L2(I,Tt,at,me),ke=new wP(I,He,Tt),Ze=new FP(I,He,Tt),Tt.programs=oe.programs,b.capabilities=at,b.extensions=He,b.properties=R,b.renderLists=J,b.shadowMap=fe,b.state=me,b.info=Tt}ye(),v!==Jn&&(C=new VP(v,t.width,t.height,r,s));const de=new b2(b,I);this.xr=de,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const w=He.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=He.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Ae},this.setPixelRatio=function(w){w!==void 0&&(Ae=w,this.setSize(Oe,Le,!1))},this.getSize=function(w){return w.set(Oe,Le)},this.setSize=function(w,O,W=!0){if(de.isPresenting){Ue("WebGLRenderer: Can't change size while VR device is presenting.");return}Oe=w,Le=O,t.width=Math.floor(w*Ae),t.height=Math.floor(O*Ae),W===!0&&(t.style.width=w+"px",t.style.height=O+"px"),C!==null&&C.setSize(t.width,t.height),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(Oe*Ae,Le*Ae).floor()},this.setDrawingBufferSize=function(w,O,W){Oe=w,Le=O,Ae=W,t.width=Math.floor(w*W),t.height=Math.floor(O*W),this.setViewport(0,0,w,O)},this.setEffects=function(w){if(v===Jn){tt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let O=0;O<w.length;O++)if(w[O].isOutputPass===!0){Ue("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(F)},this.getViewport=function(w){return w.copy(he)},this.setViewport=function(w,O,W,V){w.isVector4?he.set(w.x,w.y,w.z,w.w):he.set(w,O,W,V),me.viewport(F.copy(he).multiplyScalar(Ae).round())},this.getScissor=function(w){return w.copy(Pe)},this.setScissor=function(w,O,W,V){w.isVector4?Pe.set(w.x,w.y,w.z,w.w):Pe.set(w,O,W,V),me.scissor(X.copy(Pe).multiplyScalar(Ae).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(w){me.setScissorTest(Ie=w)},this.setOpaqueSort=function(w){$=w},this.setTransparentSort=function(w){pe=w},this.getClearColor=function(w){return w.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor(...arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha(...arguments)},this.clear=function(w=!0,O=!0,W=!0){let V=0;if(w){let G=!1;if(L!==null){const xe=L.texture.format;G=g.has(xe)}if(G){const xe=L.texture.type,Ee=h.has(xe),ve=ae.getClearColor(),we=ae.getClearAlpha(),Ce=ve.r,Ve=ve.g,Xe=ve.b;Ee?(m[0]=Ce,m[1]=Ve,m[2]=Xe,m[3]=we,I.clearBufferuiv(I.COLOR,0,m)):(x[0]=Ce,x[1]=Ve,x[2]=Xe,x[3]=we,I.clearBufferiv(I.COLOR,0,x))}else V|=I.COLOR_BUFFER_BIT}O&&(V|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(V|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&I.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),U=w},this.dispose=function(){t.removeEventListener("webglcontextlost",ee,!1),t.removeEventListener("webglcontextrestored",ne,!1),t.removeEventListener("webglcontextcreationerror",se,!1),ae.dispose(),J.dispose(),ge.dispose(),R.dispose(),k.dispose(),le.dispose(),ue.dispose(),Z.dispose(),oe.dispose(),de.dispose(),de.removeEventListener("sessionstart",Wg),de.removeEventListener("sessionend",Xg),As.stop()};function ee(w){w.preventDefault(),O0("WebGLRenderer: Context Lost."),P=!0}function ne(){O0("WebGLRenderer: Context Restored."),P=!1;const w=Tt.autoReset,O=fe.enabled,W=fe.autoUpdate,V=fe.needsUpdate,G=fe.type;ye(),Tt.autoReset=w,fe.enabled=O,fe.autoUpdate=W,fe.needsUpdate=V,fe.type=G}function se(w){tt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function De(w){const O=w.target;O.removeEventListener("dispose",De),Fe(O)}function Fe(w){Rt(w),R.remove(w)}function Rt(w){const O=R.get(w).programs;O!==void 0&&(O.forEach(function(W){oe.releaseProgram(W)}),w.isShaderMaterial&&oe.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,W,V,G,xe){O===null&&(O=Y);const Ee=G.isMesh&&G.matrixWorld.determinant()<0,ve=ZM(w,O,W,V,G);me.setMaterial(V,Ee);let we=W.index,Ce=1;if(V.wireframe===!0){if(we=te.getWireframeAttribute(W),we===void 0)return;Ce=2}const Ve=W.drawRange,Xe=W.attributes.position;let be=Ve.start*Ce,ft=(Ve.start+Ve.count)*Ce;xe!==null&&(be=Math.max(be,xe.start*Ce),ft=Math.min(ft,(xe.start+xe.count)*Ce)),we!==null?(be=Math.max(be,0),ft=Math.min(ft,we.count)):Xe!=null&&(be=Math.max(be,0),ft=Math.min(ft,Xe.count));const Bt=ft-be;if(Bt<0||Bt===1/0)return;ue.setup(G,V,ve,W,we);let Ut,pt=ke;if(we!==null&&(Ut=K.get(we),pt=Ze,pt.setIndex(Ut)),G.isMesh)V.wireframe===!0?(me.setLineWidth(V.wireframeLinewidth*nn()),pt.setMode(I.LINES)):pt.setMode(I.TRIANGLES);else if(G.isLine){let cn=V.linewidth;cn===void 0&&(cn=1),me.setLineWidth(cn*nn()),G.isLineSegments?pt.setMode(I.LINES):G.isLineLoop?pt.setMode(I.LINE_LOOP):pt.setMode(I.LINE_STRIP)}else G.isPoints?pt.setMode(I.POINTS):G.isSprite&&pt.setMode(I.TRIANGLES);if(G.isBatchedMesh)if(He.get("WEBGL_multi_draw"))pt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const cn=G._multiDrawStarts,Me=G._multiDrawCounts,Wn=G._multiDrawCount,nt=we?K.get(we).bytesPerElement:1,ci=R.get(V).currentProgram.getUniforms();for(let ki=0;ki<Wn;ki++)ci.setValue(I,"_gl_DrawID",ki),pt.render(cn[ki]/nt,Me[ki])}else if(G.isInstancedMesh)pt.renderInstances(be,Bt,G.count);else if(W.isInstancedBufferGeometry){const cn=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Me=Math.min(W.instanceCount,cn);pt.renderInstances(be,Bt,Me)}else pt.render(be,Bt)};function Yt(w,O,W){w.transparent===!0&&w.side===gr&&w.forceSinglePass===!1?(w.side=Rn,w.needsUpdate=!0,du(w,O,W),w.side=ys,w.needsUpdate=!0,du(w,O,W),w.side=gr):du(w,O,W)}this.compile=function(w,O,W=null){W===null&&(W=w),E=ge.get(W),E.init(O),y.push(E),W.traverseVisible(function(G){G.isLight&&G.layers.test(O.layers)&&(E.pushLight(G),G.castShadow&&E.pushShadow(G))}),w!==W&&w.traverseVisible(function(G){G.isLight&&G.layers.test(O.layers)&&(E.pushLight(G),G.castShadow&&E.pushShadow(G))}),E.setupLights();const V=new Set;return w.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const xe=G.material;if(xe)if(Array.isArray(xe))for(let Ee=0;Ee<xe.length;Ee++){const ve=xe[Ee];Yt(ve,W,G),V.add(ve)}else Yt(xe,W,G),V.add(xe)}),E=y.pop(),V},this.compileAsync=function(w,O,W=null){const V=this.compile(w,O,W);return new Promise(G=>{function xe(){if(V.forEach(function(Ee){R.get(Ee).currentProgram.isReady()&&V.delete(Ee)}),V.size===0){G(w);return}setTimeout(xe,10)}He.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let ws=null;function $M(w){ws&&ws(w)}function Wg(){As.stop()}function Xg(){As.start()}const As=new PM;As.setAnimationLoop($M),typeof self<"u"&&As.setContext(self),this.setAnimationLoop=function(w){ws=w,de.setAnimationLoop(w),w===null?As.stop():As.start()},de.addEventListener("sessionstart",Wg),de.addEventListener("sessionend",Xg),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){tt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;U!==null&&U.renderStart(w,O);const W=de.enabled===!0&&de.isPresenting===!0,V=C!==null&&(L===null||W)&&C.begin(b,L);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(de.cameraAutoUpdate===!0&&de.updateCamera(O),O=de.getCamera()),w.isScene===!0&&w.onBeforeRender(b,w,O,L),E=ge.get(w,y.length),E.init(O),E.state.textureUnits=M.getTextureUnits(),y.push(E),st.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Re.setFromProjectionMatrix(st,$i,O.reversedDepth),Ge=this.localClippingEnabled,rt=Se.init(this.clippingPlanes,Ge),T=J.get(w,A.length),T.init(),A.push(T),de.enabled===!0&&de.isPresenting===!0){const Ee=b.xr.getDepthSensingMesh();Ee!==null&&Hf(Ee,O,-1/0,b.sortObjects)}Hf(w,O,0,b.sortObjects),T.finish(),b.sortObjects===!0&&T.sort($,pe),ht=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,ht&&ae.addToRenderList(T,w),this.info.render.frame++,rt===!0&&Se.beginShadows();const G=E.state.shadowsArray;if(fe.render(G,w,O),rt===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset(),(V&&C.hasRenderPass())===!1){const Ee=T.opaque,ve=T.transmissive;if(E.setupLights(),O.isArrayCamera){const we=O.cameras;if(ve.length>0)for(let Ce=0,Ve=we.length;Ce<Ve;Ce++){const Xe=we[Ce];jg(Ee,ve,w,Xe)}ht&&ae.render(w);for(let Ce=0,Ve=we.length;Ce<Ve;Ce++){const Xe=we[Ce];Yg(T,w,Xe,Xe.viewport)}}else ve.length>0&&jg(Ee,ve,w,O),ht&&ae.render(w),Yg(T,w,O)}L!==null&&j===0&&(M.updateMultisampleRenderTarget(L),M.updateRenderTargetMipmap(L)),V&&C.end(b),w.isScene===!0&&w.onAfterRender(b,w,O),ue.resetDefaultState(),z=-1,N=null,y.pop(),y.length>0?(E=y[y.length-1],M.setTextureUnits(E.state.textureUnits),rt===!0&&Se.setGlobalState(b.clippingPlanes,E.state.camera)):E=null,A.pop(),A.length>0?T=A[A.length-1]:T=null,U!==null&&U.renderEnd()};function Hf(w,O,W,V){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)W=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLightProbeGrid)E.pushLightProbeGrid(w);else if(w.isLight)E.pushLight(w),w.castShadow&&E.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Re.intersectsSprite(w)){V&&Be.setFromMatrixPosition(w.matrixWorld).applyMatrix4(st);const Ee=le.update(w),ve=w.material;ve.visible&&T.push(w,Ee,ve,W,Be.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Re.intersectsObject(w))){const Ee=le.update(w),ve=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Be.copy(w.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Be.copy(Ee.boundingSphere.center)),Be.applyMatrix4(w.matrixWorld).applyMatrix4(st)),Array.isArray(ve)){const we=Ee.groups;for(let Ce=0,Ve=we.length;Ce<Ve;Ce++){const Xe=we[Ce],be=ve[Xe.materialIndex];be&&be.visible&&T.push(w,Ee,be,W,Be.z,Xe)}}else ve.visible&&T.push(w,Ee,ve,W,Be.z,null)}}const xe=w.children;for(let Ee=0,ve=xe.length;Ee<ve;Ee++)Hf(xe[Ee],O,W,V)}function Yg(w,O,W,V){const{opaque:G,transmissive:xe,transparent:Ee}=w;E.setupLightsView(W),rt===!0&&Se.setGlobalState(b.clippingPlanes,W),V&&me.viewport(F.copy(V)),G.length>0&&fu(G,O,W),xe.length>0&&fu(xe,O,W),Ee.length>0&&fu(Ee,O,W),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function jg(w,O,W,V){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[V.id]===void 0){const be=He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[V.id]=new tr(1,1,{generateMipmaps:!0,type:be?Pr:Jn,minFilter:Hs,samples:Math.max(4,at.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace})}const xe=E.state.transmissionRenderTarget[V.id],Ee=V.viewport||F;xe.setSize(Ee.z*b.transmissionResolutionScale,Ee.w*b.transmissionResolutionScale);const ve=b.getRenderTarget(),we=b.getActiveCubeFace(),Ce=b.getActiveMipmapLevel();b.setRenderTarget(xe),b.getClearColor(re),ce=b.getClearAlpha(),ce<1&&b.setClearColor(16777215,.5),b.clear(),ht&&ae.render(W);const Ve=b.toneMapping;b.toneMapping=er;const Xe=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),E.setupLightsView(V),rt===!0&&Se.setGlobalState(b.clippingPlanes,V),fu(w,W,V),M.updateMultisampleRenderTarget(xe),M.updateRenderTargetMipmap(xe),He.has("WEBGL_multisampled_render_to_texture")===!1){let be=!1;for(let ft=0,Bt=O.length;ft<Bt;ft++){const Ut=O[ft],{object:pt,geometry:cn,material:Me,group:Wn}=Ut;if(Me.side===gr&&pt.layers.test(V.layers)){const nt=Me.side;Me.side=Rn,Me.needsUpdate=!0,qg(pt,W,V,cn,Me,Wn),Me.side=nt,Me.needsUpdate=!0,be=!0}}be===!0&&(M.updateMultisampleRenderTarget(xe),M.updateRenderTargetMipmap(xe))}b.setRenderTarget(ve,we,Ce),b.setClearColor(re,ce),Xe!==void 0&&(V.viewport=Xe),b.toneMapping=Ve}function fu(w,O,W){const V=O.isScene===!0?O.overrideMaterial:null;for(let G=0,xe=w.length;G<xe;G++){const Ee=w[G],{object:ve,geometry:we,group:Ce}=Ee;let Ve=Ee.material;Ve.allowOverride===!0&&V!==null&&(Ve=V),ve.layers.test(W.layers)&&qg(ve,O,W,we,Ve,Ce)}}function qg(w,O,W,V,G,xe){w.onBeforeRender(b,O,W,V,G,xe),w.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),G.onBeforeRender(b,O,W,V,w,xe),G.transparent===!0&&G.side===gr&&G.forceSinglePass===!1?(G.side=Rn,G.needsUpdate=!0,b.renderBufferDirect(W,O,V,G,w,xe),G.side=ys,G.needsUpdate=!0,b.renderBufferDirect(W,O,V,G,w,xe),G.side=gr):b.renderBufferDirect(W,O,V,G,w,xe),w.onAfterRender(b,O,W,V,G,xe)}function du(w,O,W){O.isScene!==!0&&(O=Y);const V=R.get(w),G=E.state.lights,xe=E.state.shadowsArray,Ee=G.state.version,ve=oe.getParameters(w,G.state,xe,O,W,E.state.lightProbeGridArray),we=oe.getProgramCacheKey(ve);let Ce=V.programs;V.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?O.environment:null,V.fog=O.fog;const Ve=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;V.envMap=k.get(w.envMap||V.environment,Ve),V.envMapRotation=V.environment!==null&&w.envMap===null?O.environmentRotation:w.envMapRotation,Ce===void 0&&(w.addEventListener("dispose",De),Ce=new Map,V.programs=Ce);let Xe=Ce.get(we);if(Xe!==void 0){if(V.currentProgram===Xe&&V.lightsStateVersion===Ee)return Kg(w,ve),Xe}else ve.uniforms=oe.getUniforms(w),U!==null&&w.isNodeMaterial&&U.build(w,W,ve),w.onBeforeCompile(ve,b),Xe=oe.acquireProgram(ve,we),Ce.set(we,Xe),V.uniforms=ve.uniforms;const be=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(be.clippingPlanes=Se.uniform),Kg(w,ve),V.needsLights=JM(w),V.lightsStateVersion=Ee,V.needsLights&&(be.ambientLightColor.value=G.state.ambient,be.lightProbe.value=G.state.probe,be.directionalLights.value=G.state.directional,be.directionalLightShadows.value=G.state.directionalShadow,be.spotLights.value=G.state.spot,be.spotLightShadows.value=G.state.spotShadow,be.rectAreaLights.value=G.state.rectArea,be.ltc_1.value=G.state.rectAreaLTC1,be.ltc_2.value=G.state.rectAreaLTC2,be.pointLights.value=G.state.point,be.pointLightShadows.value=G.state.pointShadow,be.hemisphereLights.value=G.state.hemi,be.directionalShadowMatrix.value=G.state.directionalShadowMatrix,be.spotLightMatrix.value=G.state.spotLightMatrix,be.spotLightMap.value=G.state.spotLightMap,be.pointShadowMatrix.value=G.state.pointShadowMatrix),V.lightProbeGrid=E.state.lightProbeGridArray.length>0,V.currentProgram=Xe,V.uniformsList=null,Xe}function $g(w){if(w.uniformsList===null){const O=w.currentProgram.getUniforms();w.uniformsList=wc.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function Kg(w,O){const W=R.get(w);W.outputColorSpace=O.outputColorSpace,W.batching=O.batching,W.batchingColor=O.batchingColor,W.instancing=O.instancing,W.instancingColor=O.instancingColor,W.instancingMorph=O.instancingMorph,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function KM(w,O){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;S.setFromMatrixPosition(O.matrixWorld);for(let W=0,V=w.length;W<V;W++){const G=w[W];if(G.texture!==null&&G.boundingBox.containsPoint(S))return G}return null}function ZM(w,O,W,V,G){O.isScene!==!0&&(O=Y),M.resetTextureUnits();const xe=O.fog,Ee=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?O.environment:null,ve=L===null?b.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Qe.workingColorSpace,we=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Ce=k.get(V.envMap||Ee,we),Ve=V.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Xe=!!W.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),be=!!W.morphAttributes.position,ft=!!W.morphAttributes.normal,Bt=!!W.morphAttributes.color;let Ut=er;V.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Ut=b.toneMapping);const pt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,cn=pt!==void 0?pt.length:0,Me=R.get(V),Wn=E.state.lights;if(rt===!0&&(Ge===!0||w!==N)){const vt=w===N&&V.id===z;Se.setState(V,w,vt)}let nt=!1;V.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==Wn.state.version||Me.outputColorSpace!==ve||G.isBatchedMesh&&Me.batching===!1||!G.isBatchedMesh&&Me.batching===!0||G.isBatchedMesh&&Me.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Me.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Me.instancing===!1||!G.isInstancedMesh&&Me.instancing===!0||G.isSkinnedMesh&&Me.skinning===!1||!G.isSkinnedMesh&&Me.skinning===!0||G.isInstancedMesh&&Me.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Me.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Me.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Me.instancingMorph===!1&&G.morphTexture!==null||Me.envMap!==Ce||V.fog===!0&&Me.fog!==xe||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==Se.numPlanes||Me.numIntersection!==Se.numIntersection)||Me.vertexAlphas!==Ve||Me.vertexTangents!==Xe||Me.morphTargets!==be||Me.morphNormals!==ft||Me.morphColors!==Bt||Me.toneMapping!==Ut||Me.morphTargetsCount!==cn||!!Me.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(nt=!0):(nt=!0,Me.__version=V.version);let ci=Me.currentProgram;nt===!0&&(ci=du(V,O,G),U&&V.isNodeMaterial&&U.onUpdateProgram(V,ci,Me));let ki=!1,Nr=!1,ho=!1;const mt=ci.getUniforms(),zt=Me.uniforms;if(me.useProgram(ci.program)&&(ki=!0,Nr=!0,ho=!0),V.id!==z&&(z=V.id,Nr=!0),Me.needsLights){const vt=KM(E.state.lightProbeGridArray,G);Me.lightProbeGrid!==vt&&(Me.lightProbeGrid=vt,Nr=!0)}if(ki||N!==w){me.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),mt.setValue(I,"projectionMatrix",w.projectionMatrix),mt.setValue(I,"viewMatrix",w.matrixWorldInverse);const Fr=mt.map.cameraPosition;Fr!==void 0&&Fr.setValue(I,lt.setFromMatrixPosition(w.matrixWorld)),at.logarithmicDepthBuffer&&mt.setValue(I,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&mt.setValue(I,"isOrthographic",w.isOrthographicCamera===!0),N!==w&&(N=w,Nr=!0,ho=!0)}if(Me.needsLights&&(Wn.state.directionalShadowMap.length>0&&mt.setValue(I,"directionalShadowMap",Wn.state.directionalShadowMap,M),Wn.state.spotShadowMap.length>0&&mt.setValue(I,"spotShadowMap",Wn.state.spotShadowMap,M),Wn.state.pointShadowMap.length>0&&mt.setValue(I,"pointShadowMap",Wn.state.pointShadowMap,M)),G.isSkinnedMesh){mt.setOptional(I,G,"bindMatrix"),mt.setOptional(I,G,"bindMatrixInverse");const vt=G.skeleton;vt&&(vt.boneTexture===null&&vt.computeBoneTexture(),mt.setValue(I,"boneTexture",vt.boneTexture,M))}G.isBatchedMesh&&(mt.setOptional(I,G,"batchingTexture"),mt.setValue(I,"batchingTexture",G._matricesTexture,M),mt.setOptional(I,G,"batchingIdTexture"),mt.setValue(I,"batchingIdTexture",G._indirectTexture,M),mt.setOptional(I,G,"batchingColorTexture"),G._colorsTexture!==null&&mt.setValue(I,"batchingColorTexture",G._colorsTexture,M));const Ur=W.morphAttributes;if((Ur.position!==void 0||Ur.normal!==void 0||Ur.color!==void 0)&&Ne.update(G,W,ci),(Nr||Me.receiveShadow!==G.receiveShadow)&&(Me.receiveShadow=G.receiveShadow,mt.setValue(I,"receiveShadow",G.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&O.environment!==null&&(zt.envMapIntensity.value=O.environmentIntensity),zt.dfgLUT!==void 0&&(zt.dfgLUT.value=N2()),Nr){if(mt.setValue(I,"toneMappingExposure",b.toneMappingExposure),Me.needsLights&&QM(zt,ho),xe&&V.fog===!0&&q.refreshFogUniforms(zt,xe),q.refreshMaterialUniforms(zt,V,Ae,Le,E.state.transmissionRenderTarget[w.id]),Me.needsLights&&Me.lightProbeGrid){const vt=Me.lightProbeGrid;zt.probesSH.value=vt.texture,zt.probesMin.value.copy(vt.boundingBox.min),zt.probesMax.value.copy(vt.boundingBox.max),zt.probesResolution.value.copy(vt.resolution)}wc.upload(I,$g(Me),zt,M)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(wc.upload(I,$g(Me),zt,M),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&mt.setValue(I,"center",G.center),mt.setValue(I,"modelViewMatrix",G.modelViewMatrix),mt.setValue(I,"normalMatrix",G.normalMatrix),mt.setValue(I,"modelMatrix",G.matrixWorld),V.uniformsGroups!==void 0){const vt=V.uniformsGroups;for(let Fr=0,po=vt.length;Fr<po;Fr++){const Zg=vt[Fr];Z.update(Zg,ci),Z.bind(Zg,ci)}}return ci}function QM(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function JM(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(w,O,W){const V=R.get(w);V.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),R.get(w.texture).__webglTexture=O,R.get(w.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:W,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,O){const W=R.get(w);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0};const eE=I.createFramebuffer();this.setRenderTarget=function(w,O=0,W=0){L=w,H=O,j=W;let V=null,G=!1,xe=!1;if(w){const ve=R.get(w);if(ve.__useDefaultFramebuffer!==void 0){me.bindFramebuffer(I.FRAMEBUFFER,ve.__webglFramebuffer),F.copy(w.viewport),X.copy(w.scissor),Q=w.scissorTest,me.viewport(F),me.scissor(X),me.setScissorTest(Q),z=-1;return}else if(ve.__webglFramebuffer===void 0)M.setupRenderTarget(w);else if(ve.__hasExternalTextures)M.rebindTextures(w,R.get(w.texture).__webglTexture,R.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Ve=w.depthTexture;if(ve.__boundDepthTexture!==Ve){if(Ve!==null&&R.has(Ve)&&(w.width!==Ve.image.width||w.height!==Ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(w)}}const we=w.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(xe=!0);const Ce=R.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ce[O])?V=Ce[O][W]:V=Ce[O],G=!0):w.samples>0&&M.useMultisampledRTT(w)===!1?V=R.get(w).__webglMultisampledFramebuffer:Array.isArray(Ce)?V=Ce[W]:V=Ce,F.copy(w.viewport),X.copy(w.scissor),Q=w.scissorTest}else F.copy(he).multiplyScalar(Ae).floor(),X.copy(Pe).multiplyScalar(Ae).floor(),Q=Ie;if(W!==0&&(V=eE),me.bindFramebuffer(I.FRAMEBUFFER,V)&&me.drawBuffers(w,V),me.viewport(F),me.scissor(X),me.setScissorTest(Q),G){const ve=R.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+O,ve.__webglTexture,W)}else if(xe){const ve=O;for(let we=0;we<w.textures.length;we++){const Ce=R.get(w.textures[we]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+we,Ce.__webglTexture,W,ve)}}else if(w!==null&&W!==0){const ve=R.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ve.__webglTexture,W)}z=-1},this.readRenderTargetPixels=function(w,O,W,V,G,xe,Ee,ve=0){if(!(w&&w.isWebGLRenderTarget)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=R.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ee!==void 0&&(we=we[Ee]),we){me.bindFramebuffer(I.FRAMEBUFFER,we);try{const Ce=w.textures[ve],Ve=Ce.format,Xe=Ce.type;if(w.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ve),!at.textureFormatReadable(Ve)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!at.textureTypeReadable(Xe)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-V&&W>=0&&W<=w.height-G&&I.readPixels(O,W,V,G,D.convert(Ve),D.convert(Xe),xe)}finally{const Ce=L!==null?R.get(L).__webglFramebuffer:null;me.bindFramebuffer(I.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(w,O,W,V,G,xe,Ee,ve=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=R.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ee!==void 0&&(we=we[Ee]),we)if(O>=0&&O<=w.width-V&&W>=0&&W<=w.height-G){me.bindFramebuffer(I.FRAMEBUFFER,we);const Ce=w.textures[ve],Ve=Ce.format,Xe=Ce.type;if(w.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ve),!at.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!at.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const be=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,be),I.bufferData(I.PIXEL_PACK_BUFFER,xe.byteLength,I.STREAM_READ),I.readPixels(O,W,V,G,D.convert(Ve),D.convert(Xe),0);const ft=L!==null?R.get(L).__webglFramebuffer:null;me.bindFramebuffer(I.FRAMEBUFFER,ft);const Bt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await OA(I,Bt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,be),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,xe),I.deleteBuffer(be),I.deleteSync(Bt),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,O=null,W=0){const V=Math.pow(2,-W),G=Math.floor(w.image.width*V),xe=Math.floor(w.image.height*V),Ee=O!==null?O.x:0,ve=O!==null?O.y:0;M.setTexture2D(w,0),I.copyTexSubImage2D(I.TEXTURE_2D,W,0,0,Ee,ve,G,xe),me.unbindTexture()};const tE=I.createFramebuffer(),nE=I.createFramebuffer();this.copyTextureToTexture=function(w,O,W=null,V=null,G=0,xe=0){let Ee,ve,we,Ce,Ve,Xe,be,ft,Bt;const Ut=w.isCompressedTexture?w.mipmaps[xe]:w.image;if(W!==null)Ee=W.max.x-W.min.x,ve=W.max.y-W.min.y,we=W.isBox3?W.max.z-W.min.z:1,Ce=W.min.x,Ve=W.min.y,Xe=W.isBox3?W.min.z:0;else{const zt=Math.pow(2,-G);Ee=Math.floor(Ut.width*zt),ve=Math.floor(Ut.height*zt),w.isDataArrayTexture?we=Ut.depth:w.isData3DTexture?we=Math.floor(Ut.depth*zt):we=1,Ce=0,Ve=0,Xe=0}V!==null?(be=V.x,ft=V.y,Bt=V.z):(be=0,ft=0,Bt=0);const pt=D.convert(O.format),cn=D.convert(O.type);let Me;O.isData3DTexture?(M.setTexture3D(O,0),Me=I.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(M.setTexture2DArray(O,0),Me=I.TEXTURE_2D_ARRAY):(M.setTexture2D(O,0),Me=I.TEXTURE_2D),me.activeTexture(I.TEXTURE0),me.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,O.flipY),me.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),me.pixelStorei(I.UNPACK_ALIGNMENT,O.unpackAlignment);const Wn=me.getParameter(I.UNPACK_ROW_LENGTH),nt=me.getParameter(I.UNPACK_IMAGE_HEIGHT),ci=me.getParameter(I.UNPACK_SKIP_PIXELS),ki=me.getParameter(I.UNPACK_SKIP_ROWS),Nr=me.getParameter(I.UNPACK_SKIP_IMAGES);me.pixelStorei(I.UNPACK_ROW_LENGTH,Ut.width),me.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ut.height),me.pixelStorei(I.UNPACK_SKIP_PIXELS,Ce),me.pixelStorei(I.UNPACK_SKIP_ROWS,Ve),me.pixelStorei(I.UNPACK_SKIP_IMAGES,Xe);const ho=w.isDataArrayTexture||w.isData3DTexture,mt=O.isDataArrayTexture||O.isData3DTexture;if(w.isDepthTexture){const zt=R.get(w),Ur=R.get(O),vt=R.get(zt.__renderTarget),Fr=R.get(Ur.__renderTarget);me.bindFramebuffer(I.READ_FRAMEBUFFER,vt.__webglFramebuffer),me.bindFramebuffer(I.DRAW_FRAMEBUFFER,Fr.__webglFramebuffer);for(let po=0;po<we;po++)ho&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,R.get(w).__webglTexture,G,Xe+po),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,R.get(O).__webglTexture,xe,Bt+po)),I.blitFramebuffer(Ce,Ve,Ee,ve,be,ft,Ee,ve,I.DEPTH_BUFFER_BIT,I.NEAREST);me.bindFramebuffer(I.READ_FRAMEBUFFER,null),me.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(G!==0||w.isRenderTargetTexture||R.has(w)){const zt=R.get(w),Ur=R.get(O);me.bindFramebuffer(I.READ_FRAMEBUFFER,tE),me.bindFramebuffer(I.DRAW_FRAMEBUFFER,nE);for(let vt=0;vt<we;vt++)ho?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,zt.__webglTexture,G,Xe+vt):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,zt.__webglTexture,G),mt?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ur.__webglTexture,xe,Bt+vt):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ur.__webglTexture,xe),G!==0?I.blitFramebuffer(Ce,Ve,Ee,ve,be,ft,Ee,ve,I.COLOR_BUFFER_BIT,I.NEAREST):mt?I.copyTexSubImage3D(Me,xe,be,ft,Bt+vt,Ce,Ve,Ee,ve):I.copyTexSubImage2D(Me,xe,be,ft,Ce,Ve,Ee,ve);me.bindFramebuffer(I.READ_FRAMEBUFFER,null),me.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else mt?w.isDataTexture||w.isData3DTexture?I.texSubImage3D(Me,xe,be,ft,Bt,Ee,ve,we,pt,cn,Ut.data):O.isCompressedArrayTexture?I.compressedTexSubImage3D(Me,xe,be,ft,Bt,Ee,ve,we,pt,Ut.data):I.texSubImage3D(Me,xe,be,ft,Bt,Ee,ve,we,pt,cn,Ut):w.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,xe,be,ft,Ee,ve,pt,cn,Ut.data):w.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,xe,be,ft,Ut.width,Ut.height,pt,Ut.data):I.texSubImage2D(I.TEXTURE_2D,xe,be,ft,Ee,ve,pt,cn,Ut);me.pixelStorei(I.UNPACK_ROW_LENGTH,Wn),me.pixelStorei(I.UNPACK_IMAGE_HEIGHT,nt),me.pixelStorei(I.UNPACK_SKIP_PIXELS,ci),me.pixelStorei(I.UNPACK_SKIP_ROWS,ki),me.pixelStorei(I.UNPACK_SKIP_IMAGES,Nr),xe===0&&O.generateMipmaps&&I.generateMipmap(Me),me.unbindTexture()},this.initRenderTarget=function(w){R.get(w).__webglFramebuffer===void 0&&M.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?M.setTextureCube(w,0):w.isData3DTexture?M.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?M.setTexture2DArray(w,0):M.setTexture2D(w,0),me.unbindTexture()},this.resetState=function(){H=0,j=0,L=null,me.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}}class F2 extends gM{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const e=new Oa;e.deleteAttribute("uv");const t=new nm({side:Rn}),i=new nm,r=new RM(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);const s=new Jt(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const o=new MM(e,i,6),a=new xn;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);const l=new Jt(e,Lo(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);const u=new Jt(e,Lo(50));u.position.set(-16.109,18.021,-8.207),u.scale.set(.1,2.425,2.751),this.add(u);const c=new Jt(e,Lo(17));c.position.set(14.904,12.198,-1.832),c.scale.set(.15,4.265,6.331),this.add(c);const d=new Jt(e,Lo(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);const f=new Jt(e,Lo(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);const p=new Jt(e,Lo(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function Lo(n){return new PC({color:0,emissive:16777215,emissiveIntensity:n})}YS.registerPlugin(ir);var wn,Xs,ca,fa,da,iu,ha,Kr,pa,Ys,qe,kM,BM,zM,VM,Ac,GM,am,HM,WM,lm,um,Cc,XM,YM;class O2{constructor(e){Ln(this,qe);Ln(this,wn);Ln(this,Xs);Ln(this,ca);Ln(this,fa);Ln(this,da);Ln(this,iu,0);Ln(this,ha,new BC);Ln(this,Kr,{elapsed:0,delta:0});Ln(this,pa,!1);Ln(this,Ys,!1);dt(this,"canvas");dt(this,"camera");dt(this,"cameraMinAspect");dt(this,"cameraMaxAspect");dt(this,"cameraFov");dt(this,"maxPixelRatio");dt(this,"minPixelRatio");dt(this,"scene");dt(this,"renderer");dt(this,"size",{width:0,height:0,wWidth:0,wHeight:0,ratio:0,pixelRatio:0});dt(this,"render",wt(this,qe,XM).bind(this));dt(this,"onBeforeRender",()=>{});dt(this,"onAfterRender",()=>{});dt(this,"onAfterResize",()=>{});dt(this,"isDisposed",!1);Bi(this,wn,{...e}),wt(this,qe,kM).call(this),wt(this,qe,BM).call(this),wt(this,qe,zM).call(this),this.resize(),wt(this,qe,VM).call(this)}resize(){let e,t;et(this,wn).size instanceof Object?(e=et(this,wn).size.width,t=et(this,wn).size.height):et(this,wn).size==="parent"&&this.canvas.parentNode?(e=this.canvas.parentNode.offsetWidth,t=this.canvas.parentNode.offsetHeight):(e=window.innerWidth,t=window.innerHeight),this.size.width=e,this.size.height=t,this.size.ratio=e/t,wt(this,qe,GM).call(this),wt(this,qe,HM).call(this),this.onAfterResize(this.size)}updateWorldSize(){if(this.camera.isPerspectiveCamera){const e=this.camera.fov*Math.PI/180;this.size.wHeight=2*Math.tan(e/2)*this.camera.position.length(),this.size.wWidth=this.size.wHeight*this.camera.aspect}else if(this.camera.isOrthographicCamera){const e=this.camera;this.size.wHeight=e.top-e.bottom,this.size.wWidth=e.right-e.left}}get postprocessing(){return et(this,Xs)}set postprocessing(e){Bi(this,Xs,e),this.render=e.render.bind(e)}clear(){this.scene.traverse(e=>{e.isMesh&&typeof e.material=="object"&&e.material!==null&&(Object.keys(e.material).forEach(t=>{const i=e.material[t];i&&typeof i=="object"&&typeof i.dispose=="function"&&i.dispose()}),e.material.dispose(),e.geometry.dispose())}),this.scene.clear()}dispose(){var e;wt(this,qe,YM).call(this),wt(this,qe,Cc).call(this),this.clear(),(e=et(this,Xs))==null||e.dispose(),this.renderer.dispose(),this.isDisposed=!0}}wn=new WeakMap,Xs=new WeakMap,ca=new WeakMap,fa=new WeakMap,da=new WeakMap,iu=new WeakMap,ha=new WeakMap,Kr=new WeakMap,pa=new WeakMap,Ys=new WeakMap,qe=new WeakSet,kM=function(){this.camera=new Kn,this.cameraFov=this.camera.fov},BM=function(){this.scene=new gM},zM=function(){if(et(this,wn).canvas)this.canvas=et(this,wn).canvas;else if(et(this,wn).id){const t=document.getElementById(et(this,wn).id);t instanceof HTMLCanvasElement?this.canvas=t:console.error("Three: Missing canvas or id parameter")}else console.error("Three: Missing canvas or id parameter");this.canvas.style.display="block";const e={canvas:this.canvas,powerPreference:"high-performance",...et(this,wn).rendererOptions??{}};this.renderer=new U2(e),this.renderer.outputColorSpace=$n},VM=function(){et(this,wn).size instanceof Object||(window.addEventListener("resize",wt(this,qe,Ac).bind(this)),et(this,wn).size==="parent"&&this.canvas.parentNode&&(Bi(this,ca,new ResizeObserver(wt(this,qe,Ac).bind(this))),et(this,ca).observe(this.canvas.parentNode))),Bi(this,fa,new IntersectionObserver(wt(this,qe,WM).bind(this),{root:null,rootMargin:"0px",threshold:0})),et(this,fa).observe(this.canvas),document.addEventListener("visibilitychange",wt(this,qe,lm).bind(this))},Ac=function(){et(this,da)&&clearTimeout(et(this,da)),Bi(this,da,window.setTimeout(this.resize.bind(this),100))},GM=function(){this.camera.aspect=this.size.width/this.size.height,this.camera.isPerspectiveCamera&&this.cameraFov&&(this.cameraMinAspect&&this.camera.aspect<this.cameraMinAspect?wt(this,qe,am).call(this,this.cameraMinAspect):this.cameraMaxAspect&&this.camera.aspect>this.cameraMaxAspect?wt(this,qe,am).call(this,this.cameraMaxAspect):this.camera.fov=this.cameraFov),this.camera.updateProjectionMatrix(),this.updateWorldSize()},am=function(e){const i=Math.tan(Ko.degToRad(this.cameraFov/2))/(this.camera.aspect/e);this.camera.fov=2*Ko.radToDeg(Math.atan(i))},HM=function(){var t;this.renderer.setSize(this.size.width,this.size.height),(t=et(this,Xs))==null||t.setSize(this.size.width,this.size.height);let e=window.devicePixelRatio;this.maxPixelRatio&&e>this.maxPixelRatio?e=this.maxPixelRatio:this.minPixelRatio&&e<this.minPixelRatio&&(e=this.minPixelRatio),this.renderer.setPixelRatio(e),this.size.pixelRatio=e},WM=function(e){Bi(this,pa,e[0].isIntersecting),et(this,pa)?wt(this,qe,um).call(this):wt(this,qe,Cc).call(this)},lm=function(){et(this,pa)&&(document.hidden?wt(this,qe,Cc).call(this):wt(this,qe,um).call(this))},um=function(){if(et(this,Ys))return;const e=()=>{Bi(this,iu,requestAnimationFrame(e)),et(this,Kr).delta=et(this,ha).getDelta(),et(this,Kr).elapsed+=et(this,Kr).delta,this.onBeforeRender(et(this,Kr)),this.render(),this.onAfterRender(et(this,Kr))};Bi(this,Ys,!0),et(this,ha).start(),e()},Cc=function(){et(this,Ys)&&(cancelAnimationFrame(et(this,iu)),Bi(this,Ys,!1),et(this,ha).stop())},XM=function(){this.renderer.render(this.scene,this.camera)},YM=function(){var e,t;window.removeEventListener("resize",wt(this,qe,Ac).bind(this)),(e=et(this,ca))==null||e.disconnect(),(t=et(this,fa))==null||t.disconnect(),document.removeEventListener("visibilitychange",wt(this,qe,lm).bind(this))};var mf,jM;class k2{constructor(e){Ln(this,mf);dt(this,"config");dt(this,"positionData");dt(this,"velocityData");dt(this,"sizeData");dt(this,"center",new B);this.config=e,this.positionData=new Float32Array(3*e.count).fill(0),this.velocityData=new Float32Array(3*e.count).fill(0),this.sizeData=new Float32Array(e.count).fill(1),this.center=new B,wt(this,mf,jM).call(this),this.setSizes()}setSizes(){const{config:e,sizeData:t}=this;t[0]=e.size0;for(let i=1;i<e.count;i++)t[i]=Ko.randFloat(e.minSize,e.maxSize)}update(e){const{config:t,center:i,positionData:r,sizeData:s,velocityData:o}=this;let a=0;t.controlSphere0&&(a=1,new B().fromArray(r,0).lerp(i,.1).toArray(r,0),new B(0,0,0).toArray(o,0));for(let l=a;l<t.count;l++){const u=3*l,c=new B().fromArray(r,u),d=new B().fromArray(o,u);d.y-=e.delta*t.gravity*s[l],d.multiplyScalar(t.friction),d.clampLength(0,t.maxVelocity),c.add(d),c.toArray(r,u),d.toArray(o,u)}for(let l=a;l<t.count;l++){const u=3*l,c=new B().fromArray(r,u),d=new B().fromArray(o,u),f=s[l];for(let _=l+1;_<t.count;_++){const v=3*_,g=new B().fromArray(r,v),h=new B().fromArray(o,v),m=new B().copy(g).sub(c),x=m.length(),S=f+s[_];if(x<S){const T=S-x,E=m.normalize().multiplyScalar(.5*T),A=E.clone().multiplyScalar(Math.max(d.length(),1));c.sub(E),d.sub(A),c.toArray(r,u),d.toArray(o,u),g.add(E),h.add(E.clone().multiplyScalar(Math.max(h.length(),1))),g.toArray(r,v),h.toArray(o,v)}}if(t.controlSphere0){const _=new B().copy(new B().fromArray(r,0)).sub(c),v=_.length(),g=f+s[0];if(v<g){const h=_.normalize().multiplyScalar(g-v),m=h.clone().multiplyScalar(Math.max(d.length(),2));c.sub(h),d.sub(m)}}Math.abs(c.x)+f>t.maxX&&(c.x=Math.sign(c.x)*(t.maxX-f),d.x=-d.x*t.wallBounce),t.gravity===0?Math.abs(c.y)+f>t.maxY&&(c.y=Math.sign(c.y)*(t.maxY-f),d.y=-d.y*t.wallBounce):c.y-f<-t.maxY&&(c.y=-t.maxY+f,d.y=-d.y*t.wallBounce);const p=Math.max(t.maxZ,t.maxSize);Math.abs(c.z)+f>p&&(c.z=Math.sign(c.z)*(t.maxZ-f),d.z=-d.z*t.wallBounce),c.toArray(r,u),d.toArray(o,u)}}}mf=new WeakSet,jM=function(){const{config:e,positionData:t}=this;this.center.toArray(t,0);for(let i=1;i<e.count;i++){const r=3*i;t[r]=Ko.randFloatSpread(2*e.maxX),t[r+1]=Ko.randFloatSpread(2*e.maxY),t[r+2]=Ko.randFloatSpread(2*e.maxZ)}};class B2 extends bC{constructor(t){super(t);dt(this,"uniforms",{thicknessDistortion:{value:.1},thicknessAmbient:{value:0},thicknessAttenuation:{value:.1},thicknessPower:{value:2},thicknessScale:{value:10}});dt(this,"defines");dt(this,"onBeforeCompile2");this.defines={USE_UV:""},this.onBeforeCompile=i=>{Object.assign(i.uniforms,this.uniforms),i.fragmentShader=`
        uniform float thicknessPower;
        uniform float thicknessScale;
        uniform float thicknessDistortion;
        uniform float thicknessAmbient;
        uniform float thicknessAttenuation;
        `+i.fragmentShader,i.fragmentShader=i.fragmentShader.replace("void main() {",`
        void RE_Direct_Scattering(const in IncidentLight directLight, const in vec2 uv, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, inout ReflectedLight reflectedLight) {
          vec3 scatteringHalf = normalize(directLight.direction + (geometryNormal * thicknessDistortion));
          float scatteringDot = pow(saturate(dot(geometryViewDir, -scatteringHalf)), thicknessPower) * thicknessScale;
          #ifdef USE_COLOR
            vec3 scatteringIllu = (scatteringDot + thicknessAmbient) * vColor.rgb;
          #else
            vec3 scatteringIllu = (scatteringDot + thicknessAmbient) * diffuse;
          #endif
          reflectedLight.directDiffuse += scatteringIllu * thicknessAttenuation * directLight.color;
        }

        void main() {
        `);const r=We.lights_fragment_begin.replaceAll("RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );",`
          RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
          RE_Direct_Scattering(directLight, vUv, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, reflectedLight);
        `);i.fragmentShader=i.fragmentShader.replace("#include <lights_fragment_begin>",r),this.onBeforeCompile2&&this.onBeforeCompile2(i)}}}const z2={count:200,colors:[0,0,0],ambientColor:16777215,ambientIntensity:1,lightIntensity:200,materialParams:{metalness:.5,roughness:.5,clearcoat:1,clearcoatRoughness:.15},minSize:.5,maxSize:1,size0:1,gravity:.5,friction:.9975,wallBounce:.95,maxVelocity:.15,maxX:5,maxY:5,maxZ:2,controlSphere0:!1,followCursor:!0},Io=new xn;let ih=!1;const Ki=new Ke,Zi=new Map;function V2(n){const e={position:new Ke,nPosition:new Ke,hover:!1,touching:!1,onEnter:()=>{},onMove:()=>{},onClick:()=>{},onLeave:()=>{},...n};return Zi.has(n.domElement)||(Zi.set(n.domElement,e),ih||(document.body.addEventListener("pointermove",Iv),document.body.addEventListener("pointerleave",Ov),document.body.addEventListener("click",Fv),document.body.addEventListener("touchstart",Nv,{passive:!1}),document.body.addEventListener("touchmove",Uv,{passive:!1}),document.body.addEventListener("touchend",ic,{passive:!1}),document.body.addEventListener("touchcancel",ic,{passive:!1}),ih=!0)),e.dispose=()=>{Zi.delete(n.domElement),Zi.size===0&&(document.body.removeEventListener("pointermove",Iv),document.body.removeEventListener("pointerleave",Ov),document.body.removeEventListener("click",Fv),document.body.removeEventListener("touchstart",Nv),document.body.removeEventListener("touchmove",Uv),document.body.removeEventListener("touchend",ic),document.body.removeEventListener("touchcancel",ic),ih=!1)},e}function Iv(n){Ki.set(n.clientX,n.clientY),G2()}function G2(){for(const[n,e]of Zi){const t=n.getBoundingClientRect();Gf(t)?(Vf(e,t),e.hover||(e.hover=!0,e.onEnter(e)),e.onMove(e)):e.hover&&!e.touching&&(e.hover=!1,e.onLeave(e))}}function Nv(n){if(n.touches.length>0){n.preventDefault(),Ki.set(n.touches[0].clientX,n.touches[0].clientY);for(const[e,t]of Zi){const i=e.getBoundingClientRect();Gf(i)&&(t.touching=!0,Vf(t,i),t.hover||(t.hover=!0,t.onEnter(t)),t.onMove(t))}}}function Uv(n){if(n.touches.length>0){n.preventDefault(),Ki.set(n.touches[0].clientX,n.touches[0].clientY);for(const[e,t]of Zi){const i=e.getBoundingClientRect();Vf(t,i),Gf(i)?(t.hover||(t.hover=!0,t.touching=!0,t.onEnter(t)),t.onMove(t)):t.hover&&t.touching&&t.onMove(t)}}}function ic(){for(const[,n]of Zi)n.touching&&(n.touching=!1,n.hover&&(n.hover=!1,n.onLeave(n)))}function Fv(n){Ki.set(n.clientX,n.clientY);for(const[e,t]of Zi){const i=e.getBoundingClientRect();Vf(t,i),Gf(i)&&t.onClick(t)}}function Ov(){for(const n of Zi.values())n.hover&&(n.hover=!1,n.onLeave(n))}function Vf(n,e){n.position.set(Ki.x-e.left,Ki.y-e.top),n.nPosition.set(n.position.x/e.width*2-1,-n.position.y/e.height*2+1)}function Gf(n){return Ki.x>=n.left&&Ki.x<=n.left+n.width&&Ki.y>=n.top&&Ki.y<=n.top+n.height}var gf,qM;class H2 extends MM{constructor(t,i={}){const r={...z2,...i},s=new F2,a=new rm(t).fromScene(s).texture,l=new kg,u=new B2({envMap:a,...r.materialParams});u.envMapRotation.x=-Math.PI/2;super(l,u,r.count);Ln(this,gf);dt(this,"config");dt(this,"physics");dt(this,"ambientLight");dt(this,"light");this.config=r,this.physics=new k2(r),wt(this,gf,qM).call(this),this.setColors(r.colors)}setColors(t){if(Array.isArray(t)&&t.length>1){const i=function(r){let s=r,o=[];return s.forEach(a=>{o.push(new Ye(a))}),{setColors:a=>{s=a,o=[],s.forEach(l=>{o.push(new Ye(l))})},getColorAt:(a,l=new Ye)=>{const c=Math.max(0,Math.min(1,a))*(s.length-1),d=Math.floor(c),f=o[d];if(d>=s.length-1)return f.clone();const p=c-d,_=o[d+1];return l.r=f.r+p*(_.r-f.r),l.g=f.g+p*(_.g-f.g),l.b=f.b+p*(_.b-f.b),l}}}(t);for(let r=0;r<this.count;r++)this.setColorAt(r,i.getColorAt(r/this.count)),r===0&&this.light.color.copy(i.getColorAt(r/this.count));if(!this.instanceColor)return;this.instanceColor.needsUpdate=!0}}update(t){this.physics.update(t);for(let i=0;i<this.count;i++)Io.position.fromArray(this.physics.positionData,3*i),i===0&&this.config.followCursor===!1?Io.scale.setScalar(0):Io.scale.setScalar(this.physics.sizeData[i]),Io.updateMatrix(),this.setMatrixAt(i,Io.matrix),i===0&&this.light.position.copy(Io.position);this.instanceMatrix.needsUpdate=!0}}gf=new WeakSet,qM=function(){this.ambientLight=new UC(this.config.ambientColor,this.config.ambientIntensity),this.add(this.ambientLight),this.light=new RM(this.config.colors[0],this.config.lightIntensity),this.add(this.light)};function W2(n,e={}){const t=new O2({canvas:n,size:"parent",rendererOptions:{antialias:!0,alpha:!0}});let i;t.renderer.toneMapping=Tg,t.camera.position.set(0,0,20),t.camera.lookAt(0,0,0),t.cameraMaxAspect=1.5,t.resize(),u(e);const r=new kC,s=new Yr(new B(0,0,1),0),o=new B;let a=!1;n.style.touchAction="none",n.style.userSelect="none",n.style.webkitUserSelect="none";const l=V2({domElement:n,onMove(){i.config.ignoreCursor||(r.setFromCamera(l.nPosition,t.camera),t.camera.getWorldDirection(s.normal),r.ray.intersectPlane(s,o),i.physics.center.copy(o),i.config.controlSphere0=!0)},onLeave(){i.config.ignoreCursor||(i.config.controlSphere0=!1)}});function u(c){i&&(t.clear(),t.scene.remove(i)),i=new H2(t.renderer,c),t.scene.add(i)}return t.onBeforeRender=c=>{a||i.update(c)},t.onAfterResize=c=>{i.config.maxX=c.wWidth/2,i.config.maxY=c.wHeight/2},{three:t,get spheres(){return i},setCount(c){u({...i.config,count:c})},togglePause(){a=!a},dispose(){var c;(c=l.dispose)==null||c.call(l),t.dispose()}}}const X2=rh.forwardRef(({className:n="",followCursor:e=!0,...t},i)=>{const r=js.useRef(null),s=js.useRef(null);return rh.useImperativeHandle(i,()=>({setGravity:o=>{s.current&&(s.current.spheres.physics.config.gravity=o)},dropCursorBalloon:()=>{if(s.current){const o=s.current.spheres.physics;s.current.spheres.config.ignoreCursor=!0,s.current.spheres.config.controlSphere0=!1,o.velocityData[1]=-2.5}},restoreCursorBalloon:()=>{s.current&&(s.current.spheres.config.ignoreCursor=!1,s.current.spheres.config.controlSphere0=!0)}})),js.useEffect(()=>{const o=r.current;if(o)return s.current=W2(o,{followCursor:e,...t}),()=>{s.current&&s.current.dispose()}},[]),ot.jsx("canvas",{className:n,ref:r,style:{width:"100%",height:"100%"}})});function Y2(){const n=js.useRef(null),e=()=>{n.current&&n.current.dropCursorBalloon()},t=()=>{n.current&&n.current.restoreCursorBalloon()};return ot.jsxs(ot.Fragment,{children:[ot.jsx("div",{style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",zIndex:-1},children:ot.jsx(X2,{ref:n,count:100,gravity:.1,friction:.9975,wallBounce:.95,followCursor:!0,colors:["#5227FF","#7cff67","#ff6b6b"]})}),ot.jsx("header",{children:ot.jsxs("div",{className:"logo",children:["Marg ",ot.jsx("span",{children:"OS"})]})}),ot.jsxs("main",{children:[ot.jsx("h1",{children:"Welcome to Marg OS Ecosystem"}),ot.jsx("p",{className:"subtitle",children:"A unified platform orchestrating seamless logistics across factories, warehouses, and drivers."}),ot.jsxs("div",{className:"cards-container",children:[ot.jsxs("a",{href:"https://marg-driver.vercel.app",className:"glass-card",onMouseEnter:e,onMouseLeave:t,children:[ot.jsx("div",{className:"card-icon",children:ot.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:ot.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"})})}),ot.jsx("h3",{children:"Visit Driver's Dashboard"}),ot.jsx("span",{children:"Launch Portal →"})]}),ot.jsxs("a",{href:"https://marg-factory-seven.vercel.app",className:"glass-card",onMouseEnter:e,onMouseLeave:t,children:[ot.jsx("div",{className:"card-icon",children:ot.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:ot.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"})})}),ot.jsx("h3",{children:"Visit Factory Dashboard"}),ot.jsx("span",{children:"Launch Portal →"})]}),ot.jsxs("a",{href:"https://marg-warehouse.vercel.app",className:"glass-card",onMouseEnter:e,onMouseLeave:t,children:[ot.jsx("div",{className:"card-icon",children:ot.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:ot.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"})})}),ot.jsx("h3",{children:"Visit Warehouse Dashboard"}),ot.jsx("span",{children:"Launch Portal →"})]})]})]})]})}sh.createRoot(document.getElementById("root")).render(ot.jsx(rh.StrictMode,{children:ot.jsx(Y2,{})}));
