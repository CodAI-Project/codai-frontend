"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[71],{348:function(e,t,n){t.Z=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=function e(t){var n,r,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t){if(Array.isArray(t))for(n=0;n<t.length;n++)t[n]&&(r=e(t[n]))&&(o&&(o+=" "),o+=r);else for(n in t)t[n]&&(o&&(o+=" "),o+=n)}return o}(e))&&(r&&(r+=" "),r+=t);return r}},622:function(e,t,n){/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(2265),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,i={},c=null,l=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(l=t.ref),t)u.call(t,r)&&!a.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:c,ref:l,props:i,_owner:s.current}}t.Fragment=i,t.jsx=c,t.jsxs=c},7437:function(e,t,n){e.exports=n(622)},6565:function(e,t,n){n.d(t,{Fx:function(){return S},MT:function(){return c},QL:function(){return h},cW:function(){return E},ex:function(){return u},kc:function(){return N}});var r=n(2265),o=n(2650),i=n(6820);function u(e){if("virtual"===(0,i.Jz)()){let t=document.activeElement;(0,o.QB)(()=>{document.activeElement===t&&document.contains(e)&&(0,o.Ao)(e)})}else(0,o.Ao)(e)}let s=r.createContext(null),a=null;function c(e){let t,n,{children:i,contain:u,restoreFocus:c,autoFocus:l}=e,d=(0,r.useRef)(),f=(0,r.useRef)(),E=(0,r.useRef)([]),{parentNode:P}=(0,r.useContext)(s)||{},S=(0,r.useMemo)(()=>new w({scopeRef:E}),[E]);(0,o.bt)(()=>{let e=P||L.root;if(L.getTreeNode(e.scopeRef)&&a&&!b(a,e.scopeRef)){let t=L.getTreeNode(a);t&&(e=t)}e.addChild(S),L.addNode(S)},[S,P]),(0,o.bt)(()=>{L.getTreeNode(E).contain=u},[u]),(0,o.bt)(()=>{let e=d.current.nextSibling,t=[];for(;e&&e!==f.current;)t.push(e),e=e.nextSibling;E.current=t},[i]),(0,o.bt)(()=>{if(c||u)return;let e=E.current,t=e=>{let t=e.target;g(t,E.current)?a=E:m(t)||(a=null)};return document.addEventListener("focusin",t,!1),e.forEach(e=>e.addEventListener("focusin",t,!1)),()=>{document.removeEventListener("focusin",t,!1),e.forEach(e=>e.removeEventListener("focusin",t,!1))}},[E,c,u]),t=(0,r.useRef)(),n=(0,r.useRef)(null),(0,o.bt)(()=>{let e=E.current;if(!u){n.current&&(cancelAnimationFrame(n.current),n.current=null);return}let r=e=>{if("Tab"!==e.key||e.altKey||e.ctrlKey||e.metaKey||!v(E))return;let t=document.activeElement,n=E.current;if(!g(t,n))return;let r=h(p(n),{tabbable:!0},n);r.currentNode=t;let o=e.shiftKey?r.previousNode():r.nextNode();o||(r.currentNode=e.shiftKey?n[n.length-1].nextElementSibling:n[0].previousElementSibling,o=e.shiftKey?r.previousNode():r.nextNode()),e.preventDefault(),o&&y(o,!0)},o=e=>{(!a||b(a,E))&&g(e.target,E.current)?(a=E,t.current=e.target):v(E)&&!m(e.target,E)?t.current?t.current.focus():a&&T(a.current):v(E)&&(t.current=e.target)},i=e=>{n.current&&cancelAnimationFrame(n.current),n.current=requestAnimationFrame(()=>{v(E)&&!m(document.activeElement,E)&&(a=E,document.body.contains(e.target)?(t.current=e.target,t.current.focus()):a&&T(a.current))})};return document.addEventListener("keydown",r,!1),document.addEventListener("focusin",o,!1),e.forEach(e=>e.addEventListener("focusin",o,!1)),e.forEach(e=>e.addEventListener("focusout",i,!1)),()=>{document.removeEventListener("keydown",r,!1),document.removeEventListener("focusin",o,!1),e.forEach(e=>e.removeEventListener("focusin",o,!1)),e.forEach(e=>e.removeEventListener("focusout",i,!1))}},[E,u]),(0,o.bt)(()=>()=>{n.current&&cancelAnimationFrame(n.current)},[n]),function(e,t,n){let i=(0,r.useRef)("undefined"!=typeof document?document.activeElement:null);(0,o.bt)(()=>{let r=e.current;if(!t||n)return;let o=()=>{(!a||b(a,e))&&g(document.activeElement,e.current)&&(a=e)};return document.addEventListener("focusin",o,!1),r.forEach(e=>e.addEventListener("focusin",o,!1)),()=>{document.removeEventListener("focusin",o,!1),r.forEach(e=>e.removeEventListener("focusin",o,!1))}},[e,n]),(0,o.bt)(()=>{if(!t)return;let r=t=>{if("Tab"!==t.key||t.altKey||t.ctrlKey||t.metaKey||!v(e))return;let n=document.activeElement;if(!g(n,e.current))return;let r=L.getTreeNode(e).nodeToRestore,o=h(document.body,{tabbable:!0});o.currentNode=n;let i=t.shiftKey?o.previousNode():o.nextNode();if(document.body.contains(r)&&r!==document.body||(r=null,L.getTreeNode(e).nodeToRestore=null),(!i||!g(i,e.current))&&r){o.currentNode=r;do i=t.shiftKey?o.previousNode():o.nextNode();while(g(i,e.current));(t.preventDefault(),t.stopPropagation(),i)?y(i,!0):m(r)?y(r,!0):n.blur()}};return n||document.addEventListener("keydown",r,!0),()=>{n||document.removeEventListener("keydown",r,!0)}},[e,t,n]),(0,o.bt)(()=>{if(t)return L.getTreeNode(e).nodeToRestore=i.current,()=>{let n=L.getTreeNode(e).nodeToRestore;if(t&&n&&(g(document.activeElement,e.current)||document.activeElement===document.body&&function(e){let t=L.getTreeNode(a);for(;t&&t.scopeRef!==e;){if(t.nodeToRestore)return!1;t=t.parent}return(null==t?void 0:t.scopeRef)===e}(e))){let t=L.clone();requestAnimationFrame(()=>{if(document.activeElement===document.body){let n=t.getTreeNode(e);for(;n;){if(n.nodeToRestore&&document.body.contains(n.nodeToRestore)){y(n.nodeToRestore);return}n=n.parent}for(n=t.getTreeNode(e);n;){if(n.scopeRef&&L.getTreeNode(n.scopeRef)){T(n.scopeRef.current,!0);return}n=n.parent}}})}}},[e,t])}(E,c,u),function(e,t){let n=r.useRef(t);(0,r.useEffect)(()=>{n.current&&(a=e,g(document.activeElement,a.current)||T(e.current)),n.current=!1},[e])}(E,l),(0,r.useEffect)(()=>{if(E){let e=document.activeElement,t=null;if(g(e,E.current)){for(let n of L.traverse())g(e,n.scopeRef.current)&&(t=n);t===L.getTreeNode(E)&&(a=t.scopeRef)}return()=>{let e=L.getTreeNode(E).parent.scopeRef;(E===a||b(E,a))&&(!e||L.getTreeNode(e))&&(a=e),L.removeTreeNode(E)}}},[E]);let R=(0,r.useMemo)(()=>({focusNext(e={}){let t=E.current,{from:n,tabbable:r,wrap:o,accept:i}=e,u=n||document.activeElement,s=t[0].previousElementSibling,a=h(p(t),{tabbable:r,accept:i},t);a.currentNode=g(u,t)?u:s;let c=a.nextNode();return!c&&o&&(a.currentNode=s,c=a.nextNode()),c&&y(c,!0),c},focusPrevious(e={}){let t=E.current,{from:n,tabbable:r,wrap:o,accept:i}=e,u=n||document.activeElement,s=t[t.length-1].nextElementSibling,a=h(p(t),{tabbable:r,accept:i},t);a.currentNode=g(u,t)?u:s;let c=a.previousNode();return!c&&o&&(a.currentNode=s,c=a.previousNode()),c&&y(c,!0),c},focusFirst(e={}){let t=E.current,{tabbable:n,accept:r}=e,o=h(p(t),{tabbable:n,accept:r},t);o.currentNode=t[0].previousElementSibling;let i=o.nextNode();return i&&y(i,!0),i},focusLast(e={}){let t=E.current,{tabbable:n,accept:r}=e,o=h(p(t),{tabbable:n,accept:r},t);o.currentNode=t[t.length-1].nextElementSibling;let i=o.previousNode();return i&&y(i,!0),i}}),[]),N=(0,r.useMemo)(()=>({focusManager:R,parentNode:S}),[S,R]);return r.createElement(s.Provider,{value:N},r.createElement("span",{"data-focus-scope-start":!0,hidden:!0,ref:d}),i,r.createElement("span",{"data-focus-scope-end":!0,hidden:!0,ref:f}))}let l=["input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[contenteditable]"],d=l.join(":not([hidden]),")+",[tabindex]:not([disabled]):not([hidden])";l.push('[tabindex]:not([tabindex="-1"]):not([disabled])');let f=l.join(':not([hidden]):not([tabindex="-1"]),');function p(e){return e[0].parentElement}function v(e){let t=L.getTreeNode(a);for(;t&&t.scopeRef!==e;){if(t.contain)return!1;t=t.parent}return!0}function g(e,t){return t.some(t=>t.contains(e))}function m(e,t=null){if(e instanceof Element&&e.closest("[data-react-aria-top-layer]"))return!0;for(let{scopeRef:n}of L.traverse(L.getTreeNode(t)))if(g(e,n.current))return!0;return!1}function E(e){return m(e,a)}function b(e,t){var n;let r=null===(n=L.getTreeNode(t))||void 0===n?void 0:n.parent;for(;r;){if(r.scopeRef===e)return!0;r=r.parent}return!1}function y(e,t=!1){if(null==e||t){if(null!=e)try{e.focus()}catch(e){}}else try{u(e)}catch(e){}}function T(e,t=!0){let n=e[0].previousElementSibling,r=h(p(e),{tabbable:t},e);r.currentNode=n;let o=r.nextNode();t&&!o&&((r=h(p(e),{tabbable:!1},e)).currentNode=n,o=r.nextNode()),y(o)}function h(e,t,n){let r=(null==t?void 0:t.tabbable)?f:d,o=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode(e){var o;return(null==t?void 0:null===(o=t.from)||void 0===o?void 0:o.contains(e))?NodeFilter.FILTER_REJECT:e.matches(r)&&function e(t,n){return"#comment"!==t.nodeName&&function(e){if(!(e instanceof HTMLElement)&&!(e instanceof SVGElement))return!1;let{display:t,visibility:n}=e.style,r="none"!==t&&"hidden"!==n&&"collapse"!==n;if(r){let{getComputedStyle:t}=e.ownerDocument.defaultView,{display:n,visibility:o}=t(e);r="none"!==n&&"hidden"!==o&&"collapse"!==o}return r}(t)&&!t.hasAttribute("hidden")&&("DETAILS"!==t.nodeName||!n||"SUMMARY"===n.nodeName||t.hasAttribute("open"))&&(!t.parentElement||e(t.parentElement,t))}(e)&&(!n||g(e,n))&&(!(null==t?void 0:t.accept)||t.accept(e))?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});return(null==t?void 0:t.from)&&(o.currentNode=t.from),o}class P{get size(){return this.fastMap.size}getTreeNode(e){return this.fastMap.get(e)}addTreeNode(e,t,n){let r=this.fastMap.get(null!=t?t:null),o=new w({scopeRef:e});r.addChild(o),o.parent=r,this.fastMap.set(e,o),n&&(o.nodeToRestore=n)}addNode(e){this.fastMap.set(e.scopeRef,e)}removeTreeNode(e){if(null===e)return;let t=this.fastMap.get(e),n=t.parent;for(let e of this.traverse())e!==t&&t.nodeToRestore&&e.nodeToRestore&&t.scopeRef.current&&g(e.nodeToRestore,t.scopeRef.current)&&(e.nodeToRestore=t.nodeToRestore);let r=t.children;n.removeChild(t),r.size>0&&r.forEach(e=>n.addChild(e)),this.fastMap.delete(t.scopeRef)}*traverse(e=this.root){if(null!=e.scopeRef&&(yield e),e.children.size>0)for(let t of e.children)yield*this.traverse(t)}clone(){let e=new P;for(let t of this.traverse())e.addTreeNode(t.scopeRef,t.parent.scopeRef,t.nodeToRestore);return e}constructor(){this.fastMap=new Map,this.root=new w({scopeRef:null}),this.fastMap.set(null,this.root)}}class w{addChild(e){this.children.add(e),e.parent=this}removeChild(e){this.children.delete(e),e.parent=void 0}constructor(e){this.children=new Set,this.contain=!1,this.scopeRef=e.scopeRef}}let L=new P;function S(e={}){let{autoFocus:t=!1,isTextInput:n,within:o}=e,u=(0,r.useRef)({isFocused:!1,isFocusVisible:t||(0,i.E)()}),[s,a]=(0,r.useState)(!1),[c,l]=(0,r.useState)(()=>u.current.isFocused&&u.current.isFocusVisible),d=(0,r.useCallback)(()=>l(u.current.isFocused&&u.current.isFocusVisible),[]),f=(0,r.useCallback)(e=>{u.current.isFocused=e,a(e),d()},[d]);(0,i.mG)(e=>{u.current.isFocusVisible=e,d()},[],{isTextInput:n});let{focusProps:p}=(0,i.KK)({isDisabled:o,onFocusChange:f}),{focusWithinProps:v}=(0,i.L_)({isDisabled:!o,onFocusWithinChange:f});return{isFocused:s,isFocusVisible:c,focusProps:o?v:p}}let R=r.createContext(null);function N(e,t){let{focusProps:n}=(0,i.KK)(e),{keyboardProps:s}=(0,i.v5)(e),a=(0,o.dG)(n,s),c=function(e){let t=(0,r.useContext)(R)||{};(0,o.lE)(t,e);let{ref:n,...i}=t;return i}(t),l=e.isDisabled?{}:c,d=(0,r.useRef)(e.autoFocus);return(0,r.useEffect)(()=>{d.current&&t.current&&u(t.current),d.current=!1},[t]),{focusableProps:(0,o.dG)({...a,tabIndex:e.excludeFromTabOrder&&!e.isDisabled?-1:void 0},l)}}},6820:function(e,t,n){n.d(t,{Jz:function(){return G},E:function(){return z},KK:function(){return N},mG:function(){return U},L_:function(){return B},XI:function(){return Z},Fc:function(){return q},v5:function(){return ee},TA:function(){return et},r7:function(){return g}});var r=n(2650),o=n(2265);function i(e,t,n){if(!t.has(e))throw TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}function u(e,t,n){var r=i(e,t,"set");return!function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw TypeError("attempted to set read only private field");t.value=n}}(e,r,n),n}let s="default",a="",c=new WeakMap;function l(e){(0,r.gn)()?("default"===s&&(a=document.documentElement.style.webkitUserSelect,document.documentElement.style.webkitUserSelect="none"),s="disabled"):(e instanceof HTMLElement||e instanceof SVGElement)&&(c.set(e,e.style.userSelect),e.style.userSelect="none")}function d(e){if((0,r.gn)())"disabled"===s&&(s="restoring",setTimeout(()=>{(0,r.QB)(()=>{"restoring"===s&&("none"===document.documentElement.style.webkitUserSelect&&(document.documentElement.style.webkitUserSelect=a||""),a="",s="default")})},300));else if((e instanceof HTMLElement||e instanceof SVGElement)&&e&&c.has(e)){let t=c.get(e);"none"===e.style.userSelect&&(e.style.userSelect=t),""===e.getAttribute("style")&&e.removeAttribute("style"),c.delete(e)}}let f=o.createContext(null);f.displayName="PressResponderContext";var p=new WeakMap;class v{continuePropagation(){u(this,p,!1)}get shouldStopPropagation(){var e;return(e=i(this,p,"get")).get?e.get.call(this):e.value}constructor(e,t,n){!function(e,t){if(t.has(e))throw TypeError("Cannot initialize the same private elements twice on an object")}(this,p),p.set(this,{writable:!0,value:void 0}),u(this,p,!0),this.type=e,this.pointerType=t,this.target=n.currentTarget,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.ctrlKey=n.ctrlKey,this.altKey=n.altKey}}function g(e){let{onPress:t,onPressChange:n,onPressStart:i,onPressEnd:u,onPressUp:s,isDisabled:a,isPressed:c,preventFocusOnPress:p,shouldCancelOnPointerExit:g,allowTextSelectionOnPress:w,ref:L,...S}=function(e){let t=(0,o.useContext)(f);if(t){let{register:n,...o}=t;e=(0,r.dG)(o,e),n()}return(0,r.lE)(t,e.ref),e}(e),[R,N]=(0,o.useState)(!1),M=(0,o.useRef)({isPressed:!1,ignoreEmulatedMouseEvents:!1,ignoreClickAfterPress:!1,didFirePressStart:!1,activePointerId:null,target:null,isOverTarget:!1,pointerType:null}),{addGlobalListener:k,removeAllGlobalListeners:C}=(0,r.xi)(),F=(0,r.iW)((e,t)=>{let r=M.current;if(a||r.didFirePressStart)return;let o=!0;if(i){let n=new v("pressstart",t,e);i(n),o=n.shouldStopPropagation}return n&&n(!0),r.didFirePressStart=!0,N(!0),o}),x=(0,r.iW)((e,r,o=!0)=>{let i=M.current;if(!i.didFirePressStart)return;i.ignoreClickAfterPress=!0,i.didFirePressStart=!1;let s=!0;if(u){let t=new v("pressend",r,e);u(t),s=t.shouldStopPropagation}if(n&&n(!1),N(!1),t&&o&&!a){let n=new v("press",r,e);t(n),s&&(s=n.shouldStopPropagation)}return s}),D=(0,r.iW)((e,t)=>{if(!a){if(s){let n=new v("pressup",t,e);return s(n),n.shouldStopPropagation}return!0}}),K=(0,r.iW)(e=>{let t=M.current;t.isPressed&&(t.isOverTarget&&x(y(t.target,e),t.pointerType,!1),t.isPressed=!1,t.isOverTarget=!1,t.activePointerId=null,t.pointerType=null,C(),w||d(t.target))}),O=(0,r.iW)(e=>{g&&K(e)}),A=(0,o.useMemo)(()=>{let e=M.current,t={onKeyDown(t){if(E(t.nativeEvent,t.currentTarget)&&t.currentTarget.contains(t.target)){P(t.target,t.key)&&t.preventDefault();let r=!0;e.isPressed||t.repeat||(e.target=t.currentTarget,e.isPressed=!0,r=F(t,"keyboard"),k(document,"keyup",n,!1)),r&&t.stopPropagation()}else"Enter"===t.key&&m(t.currentTarget)&&t.stopPropagation()},onKeyUp(t){E(t.nativeEvent,t.currentTarget)&&!t.repeat&&t.currentTarget.contains(t.target)&&D(y(e.target,t),"keyboard")},onClick(t){if((!t||t.currentTarget.contains(t.target))&&t&&0===t.button){let n=!0;if(a&&t.preventDefault(),!e.ignoreClickAfterPress&&!e.ignoreEmulatedMouseEvents&&("virtual"===e.pointerType||(0,r.Zj)(t.nativeEvent))){a||p||(0,r.Ao)(t.currentTarget);let e=F(t,"virtual"),o=D(t,"virtual"),i=x(t,"virtual");n=e&&o&&i}e.ignoreEmulatedMouseEvents=!1,e.ignoreClickAfterPress=!1,n&&t.stopPropagation()}}},n=t=>{if(e.isPressed&&E(t,e.target)){P(t.target,t.key)&&t.preventDefault(),e.isPressed=!1;let n=t.target,r=x(y(e.target,t),"keyboard",e.target.contains(n));C(),r&&t.stopPropagation(),e.target instanceof HTMLElement&&e.target.contains(n)&&(m(e.target)||"link"===e.target.getAttribute("role"))&&e.target.click()}};if("undefined"!=typeof PointerEvent){t.onPointerDown=t=>{if(0!==t.button||!t.currentTarget.contains(t.target))return;if((0,r.cr)(t.nativeEvent)){e.pointerType="virtual";return}h(t.currentTarget)&&t.preventDefault(),e.pointerType=t.pointerType;let u=!0;e.isPressed||(e.isPressed=!0,e.isOverTarget=!0,e.activePointerId=t.pointerId,e.target=t.currentTarget,a||p||(0,r.Ao)(t.currentTarget),w||l(e.target),u=F(t,e.pointerType),k(document,"pointermove",n,!1),k(document,"pointerup",o,!1),k(document,"pointercancel",i,!1)),u&&t.stopPropagation()},t.onMouseDown=e=>{e.currentTarget.contains(e.target)&&0===e.button&&(h(e.currentTarget)&&e.preventDefault(),e.stopPropagation())},t.onPointerUp=t=>{t.currentTarget.contains(t.target)&&"virtual"!==e.pointerType&&0===t.button&&T(t,t.currentTarget)&&D(t,e.pointerType||t.pointerType)};let n=t=>{t.pointerId===e.activePointerId&&(T(t,e.target)?e.isOverTarget||(e.isOverTarget=!0,F(y(e.target,t),e.pointerType)):e.isOverTarget&&(e.isOverTarget=!1,x(y(e.target,t),e.pointerType,!1),O(t)))},o=t=>{t.pointerId===e.activePointerId&&e.isPressed&&0===t.button&&(T(t,e.target)?x(y(e.target,t),e.pointerType):e.isOverTarget&&x(y(e.target,t),e.pointerType,!1),e.isPressed=!1,e.isOverTarget=!1,e.activePointerId=null,e.pointerType=null,C(),w||d(e.target))},i=e=>{K(e)};t.onDragStart=e=>{e.currentTarget.contains(e.target)&&K(e)}}else{t.onMouseDown=t=>{if(0===t.button&&t.currentTarget.contains(t.target)){if(h(t.currentTarget)&&t.preventDefault(),e.ignoreEmulatedMouseEvents){t.stopPropagation();return}e.isPressed=!0,e.isOverTarget=!0,e.target=t.currentTarget,e.pointerType=(0,r.Zj)(t.nativeEvent)?"virtual":"mouse",a||p||(0,r.Ao)(t.currentTarget),F(t,e.pointerType)&&t.stopPropagation(),k(document,"mouseup",n,!1)}},t.onMouseEnter=t=>{if(!t.currentTarget.contains(t.target))return;let n=!0;e.isPressed&&!e.ignoreEmulatedMouseEvents&&(e.isOverTarget=!0,n=F(t,e.pointerType)),n&&t.stopPropagation()},t.onMouseLeave=t=>{if(!t.currentTarget.contains(t.target))return;let n=!0;e.isPressed&&!e.ignoreEmulatedMouseEvents&&(e.isOverTarget=!1,n=x(t,e.pointerType,!1),O(t)),n&&t.stopPropagation()},t.onMouseUp=t=>{t.currentTarget.contains(t.target)&&!e.ignoreEmulatedMouseEvents&&0===t.button&&D(t,e.pointerType)};let n=t=>{if(0===t.button){if(e.isPressed=!1,C(),e.ignoreEmulatedMouseEvents){e.ignoreEmulatedMouseEvents=!1;return}T(t,e.target)?x(y(e.target,t),e.pointerType):e.isOverTarget&&x(y(e.target,t),e.pointerType,!1),e.isOverTarget=!1}};t.onTouchStart=t=>{if(!t.currentTarget.contains(t.target))return;let n=function(e){let{targetTouches:t}=e;return t.length>0?t[0]:null}(t.nativeEvent);n&&(e.activePointerId=n.identifier,e.ignoreEmulatedMouseEvents=!0,e.isOverTarget=!0,e.isPressed=!0,e.target=t.currentTarget,e.pointerType="touch",a||p||(0,r.Ao)(t.currentTarget),w||l(e.target),F(t,e.pointerType)&&t.stopPropagation(),k(window,"scroll",o,!0))},t.onTouchMove=t=>{if(!t.currentTarget.contains(t.target))return;if(!e.isPressed){t.stopPropagation();return}let n=b(t.nativeEvent,e.activePointerId),r=!0;n&&T(n,t.currentTarget)?e.isOverTarget||(e.isOverTarget=!0,r=F(t,e.pointerType)):e.isOverTarget&&(e.isOverTarget=!1,r=x(t,e.pointerType,!1),O(t)),r&&t.stopPropagation()},t.onTouchEnd=t=>{if(!t.currentTarget.contains(t.target))return;if(!e.isPressed){t.stopPropagation();return}let n=b(t.nativeEvent,e.activePointerId),r=!0;n&&T(n,t.currentTarget)?(D(t,e.pointerType),r=x(t,e.pointerType)):e.isOverTarget&&(r=x(t,e.pointerType,!1)),r&&t.stopPropagation(),e.isPressed=!1,e.activePointerId=null,e.isOverTarget=!1,e.ignoreEmulatedMouseEvents=!0,w||d(e.target),C()},t.onTouchCancel=t=>{t.currentTarget.contains(t.target)&&(t.stopPropagation(),e.isPressed&&K(t))};let o=t=>{e.isPressed&&t.target.contains(e.target)&&K({currentTarget:e.target,shiftKey:!1,ctrlKey:!1,metaKey:!1,altKey:!1})};t.onDragStart=e=>{e.currentTarget.contains(e.target)&&K(e)}}return t},[k,a,p,C,w,K,O,x,F,D]);return(0,o.useEffect)(()=>()=>{w||d(M.current.target)},[w]),{isPressed:c||R,pressProps:(0,r.dG)(S,A)}}function m(e){return"A"===e.tagName&&e.hasAttribute("href")}function E(e,t){let{key:n,code:r}=e,o=t.getAttribute("role");return("Enter"===n||" "===n||"Spacebar"===n||"Space"===r)&&!(t instanceof HTMLInputElement&&!L(t,n)||t instanceof HTMLTextAreaElement||t.isContentEditable)&&(!m(t)||"button"===o&&"Enter"!==n)&&!("link"===o&&"Enter"!==n)}function b(e,t){let n=e.changedTouches;for(let e=0;e<n.length;e++){let r=n[e];if(r.identifier===t)return r}return null}function y(e,t){return{currentTarget:e,shiftKey:t.shiftKey,ctrlKey:t.ctrlKey,metaKey:t.metaKey,altKey:t.altKey}}function T(e,t){let n,r,o=t.getBoundingClientRect(),i=(n=e.width/2||e.radiusX||0,r=e.height/2||e.radiusY||0,{top:e.clientY-r,right:e.clientX+n,bottom:e.clientY+r,left:e.clientX-n});return!(o.left>i.right)&&!(i.left>o.right)&&!(o.top>i.bottom)&&!(i.top>o.bottom)}function h(e){return!(e instanceof HTMLElement)||!e.draggable}function P(e,t){return e instanceof HTMLInputElement?!L(e,t):!(e instanceof HTMLButtonElement)||"submit"!==e.type&&"reset"!==e.type}let w=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);function L(e,t){return"checkbox"===e.type||"radio"===e.type?" "===t:w.has(e.type)}class S{isDefaultPrevented(){return this.nativeEvent.defaultPrevented}preventDefault(){this.defaultPrevented=!0,this.nativeEvent.preventDefault()}stopPropagation(){this.nativeEvent.stopPropagation(),this.isPropagationStopped=()=>!0}isPropagationStopped(){return!1}persist(){}constructor(e,t){this.nativeEvent=t,this.target=t.target,this.currentTarget=t.currentTarget,this.relatedTarget=t.relatedTarget,this.bubbles=t.bubbles,this.cancelable=t.cancelable,this.defaultPrevented=t.defaultPrevented,this.eventPhase=t.eventPhase,this.isTrusted=t.isTrusted,this.timeStamp=t.timeStamp,this.type=e}}function R(e){let t=(0,o.useRef)({isFocused:!1,observer:null});(0,r.bt)(()=>{let e=t.current;return()=>{e.observer&&(e.observer.disconnect(),e.observer=null)}},[]);let n=(0,r.iW)(t=>{null==e||e(t)});return(0,o.useCallback)(e=>{if(e.target instanceof HTMLButtonElement||e.target instanceof HTMLInputElement||e.target instanceof HTMLTextAreaElement||e.target instanceof HTMLSelectElement){t.current.isFocused=!0;let r=e.target;r.addEventListener("focusout",e=>{t.current.isFocused=!1,r.disabled&&n(new S("blur",e)),t.current.observer&&(t.current.observer.disconnect(),t.current.observer=null)},{once:!0}),t.current.observer=new MutationObserver(()=>{if(t.current.isFocused&&r.disabled){t.current.observer.disconnect();let e=r===document.activeElement?null:document.activeElement;r.dispatchEvent(new FocusEvent("blur",{relatedTarget:e})),r.dispatchEvent(new FocusEvent("focusout",{bubbles:!0,relatedTarget:e}))}}),t.current.observer.observe(r,{attributes:!0,attributeFilter:["disabled"]})}},[n])}function N(e){let{isDisabled:t,onFocus:n,onBlur:r,onFocusChange:i}=e,u=(0,o.useCallback)(e=>{if(e.target===e.currentTarget)return r&&r(e),i&&i(!1),!0},[r,i]),s=R(u),a=(0,o.useCallback)(e=>{e.target===e.currentTarget&&document.activeElement===e.target&&(n&&n(e),i&&i(!0),s(e))},[i,n,s]);return{focusProps:{onFocus:!t&&(n||i||r)?a:void 0,onBlur:!t&&(r||i)?u:void 0}}}let M=null,k=new Set,C=!1,F=!1,x=!1,D={Tab:!0,Escape:!0};function K(e,t){for(let n of k)n(e,t)}function O(e){F=!0,e.metaKey||!(0,r.V5)()&&e.altKey||e.ctrlKey||"Control"===e.key||"Shift"===e.key||"Meta"===e.key||(M="keyboard",K("keyboard",e))}function A(e){M="pointer",("mousedown"===e.type||"pointerdown"===e.type)&&(F=!0,K("pointer",e))}function I(e){(0,r.Zj)(e)&&(F=!0,M="virtual")}function _(e){e.target!==window&&e.target!==document&&(F||x||(M="virtual",K("virtual",e)),F=!1,x=!1)}function W(){F=!1,x=!0}function H(){if("undefined"==typeof window||C)return;let e=HTMLElement.prototype.focus;HTMLElement.prototype.focus=function(){F=!0,e.apply(this,arguments)},document.addEventListener("keydown",O,!0),document.addEventListener("keyup",O,!0),document.addEventListener("click",I,!0),window.addEventListener("focus",_,!0),window.addEventListener("blur",W,!1),"undefined"!=typeof PointerEvent?(document.addEventListener("pointerdown",A,!0),document.addEventListener("pointermove",A,!0),document.addEventListener("pointerup",A,!0)):(document.addEventListener("mousedown",A,!0),document.addEventListener("mousemove",A,!0),document.addEventListener("mouseup",A,!0)),C=!0}function z(){return"pointer"!==M}function G(){return M}function U(e,t,n){H(),(0,o.useEffect)(()=>{let t=(t,r)=>{(!((null==n?void 0:n.isTextInput)&&"keyboard"===t&&r instanceof KeyboardEvent)||D[r.key])&&e(z())};return k.add(t),()=>{k.delete(t)}},t)}function B(e){let{isDisabled:t,onBlurWithin:n,onFocusWithin:r,onFocusWithinChange:i}=e,u=(0,o.useRef)({isFocusWithin:!1}),s=(0,o.useCallback)(e=>{u.current.isFocusWithin&&!e.currentTarget.contains(e.relatedTarget)&&(u.current.isFocusWithin=!1,n&&n(e),i&&i(!1))},[n,i,u]),a=R(s),c=(0,o.useCallback)(e=>{u.current.isFocusWithin||document.activeElement!==e.target||(r&&r(e),i&&i(!0),u.current.isFocusWithin=!0,a(e))},[r,i,a]);return t?{focusWithinProps:{onFocus:null,onBlur:null}}:{focusWithinProps:{onFocus:c,onBlur:s}}}"undefined"!=typeof document&&("loading"!==document.readyState?H():document.addEventListener("DOMContentLoaded",H));let j=!1,V=0;function $(){j=!0,setTimeout(()=>{j=!1},50)}function Y(e){"touch"===e.pointerType&&$()}function X(){if("undefined"!=typeof document)return"undefined"!=typeof PointerEvent?document.addEventListener("pointerup",Y):document.addEventListener("touchend",$),V++,()=>{--V>0||("undefined"!=typeof PointerEvent?document.removeEventListener("pointerup",Y):document.removeEventListener("touchend",$))}}function Z(e){let{onHoverStart:t,onHoverChange:n,onHoverEnd:r,isDisabled:i}=e,[u,s]=(0,o.useState)(!1),a=(0,o.useRef)({isHovered:!1,ignoreEmulatedMouseEvents:!1,pointerType:"",target:null}).current;(0,o.useEffect)(X,[]);let{hoverProps:c,triggerHoverEnd:l}=(0,o.useMemo)(()=>{let e=(e,r)=>{if(a.pointerType=r,i||"touch"===r||a.isHovered||!e.currentTarget.contains(e.target))return;a.isHovered=!0;let o=e.currentTarget;a.target=o,t&&t({type:"hoverstart",target:o,pointerType:r}),n&&n(!0),s(!0)},o=(e,t)=>{if(a.pointerType="",a.target=null,"touch"===t||!a.isHovered)return;a.isHovered=!1;let o=e.currentTarget;r&&r({type:"hoverend",target:o,pointerType:t}),n&&n(!1),s(!1)},u={};return"undefined"!=typeof PointerEvent?(u.onPointerEnter=t=>{j&&"mouse"===t.pointerType||e(t,t.pointerType)},u.onPointerLeave=e=>{!i&&e.currentTarget.contains(e.target)&&o(e,e.pointerType)}):(u.onTouchStart=()=>{a.ignoreEmulatedMouseEvents=!0},u.onMouseEnter=t=>{a.ignoreEmulatedMouseEvents||j||e(t,"mouse"),a.ignoreEmulatedMouseEvents=!1},u.onMouseLeave=e=>{!i&&e.currentTarget.contains(e.target)&&o(e,"mouse")}),{hoverProps:u,triggerHoverEnd:o}},[t,n,r,i,a]);return(0,o.useEffect)(()=>{i&&l({currentTarget:a.target},a.pointerType)},[i]),{hoverProps:c,isHovered:u}}function q(e){let{ref:t,onInteractOutside:n,isDisabled:i,onInteractOutsideStart:u}=e,s=(0,o.useRef)({isPointerDown:!1,ignoreEmulatedMouseEvents:!1}),a=(0,r.iW)(e=>{n&&Q(e,t)&&(u&&u(e),s.current.isPointerDown=!0)}),c=(0,r.iW)(e=>{n&&n(e)});(0,o.useEffect)(()=>{let e=s.current;if(!i){if("undefined"!=typeof PointerEvent){let n=n=>{e.isPointerDown&&Q(n,t)&&c(n),e.isPointerDown=!1};return document.addEventListener("pointerdown",a,!0),document.addEventListener("pointerup",n,!0),()=>{document.removeEventListener("pointerdown",a,!0),document.removeEventListener("pointerup",n,!0)}}{let n=n=>{e.ignoreEmulatedMouseEvents?e.ignoreEmulatedMouseEvents=!1:e.isPointerDown&&Q(n,t)&&c(n),e.isPointerDown=!1},r=n=>{e.ignoreEmulatedMouseEvents=!0,e.isPointerDown&&Q(n,t)&&c(n),e.isPointerDown=!1};return document.addEventListener("mousedown",a,!0),document.addEventListener("mouseup",n,!0),document.addEventListener("touchstart",a,!0),document.addEventListener("touchend",r,!0),()=>{document.removeEventListener("mousedown",a,!0),document.removeEventListener("mouseup",n,!0),document.removeEventListener("touchstart",a,!0),document.removeEventListener("touchend",r,!0)}}}},[t,i,a,c])}function Q(e,t){if(e.button>0)return!1;if(e.target){let t=e.target.ownerDocument;if(!t||!t.documentElement.contains(e.target)||e.target.closest("[data-react-aria-top-layer]"))return!1}return t.current&&!t.current.contains(e.target)}function J(e){if(!e)return;let t=!0;return n=>{e({...n,preventDefault(){n.preventDefault()},isDefaultPrevented:()=>n.isDefaultPrevented(),stopPropagation(){console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.")},continuePropagation(){t=!1}}),t&&n.stopPropagation()}}function ee(e){return{keyboardProps:e.isDisabled?{}:{onKeyDown:J(e.onKeyDown),onKeyUp:J(e.onKeyUp)}}}function et(e){let{isDisabled:t,onLongPressStart:n,onLongPressEnd:i,onLongPress:u,threshold:s=500,accessibilityDescription:a}=e,c=(0,o.useRef)(null),{addGlobalListener:l,removeGlobalListener:d}=(0,r.xi)(),{pressProps:f}=g({isDisabled:t,onPressStart(e){if(e.continuePropagation(),("mouse"===e.pointerType||"touch"===e.pointerType)&&(n&&n({...e,type:"longpressstart"}),c.current=setTimeout(()=>{e.target.dispatchEvent(new PointerEvent("pointercancel",{bubbles:!0})),u&&u({...e,type:"longpress"}),c.current=null},s),"touch"===e.pointerType)){let t=e=>{e.preventDefault()};l(e.target,"contextmenu",t,{once:!0}),l(window,"pointerup",()=>{setTimeout(()=>{d(e.target,"contextmenu",t)},30)},{once:!0})}},onPressEnd(e){c.current&&clearTimeout(c.current),i&&("mouse"===e.pointerType||"touch"===e.pointerType)&&i({...e,type:"longpressend"})}}),p=(0,r.PK)(u&&!t?a:null);return{longPressProps:(0,r.dG)(f,p)}}},4256:function(e,t,n){n.d(t,{Av:function(){return f},gP:function(){return a}});var r=n(2265);let o={prefix:String(Math.round(1e10*Math.random())),current:0,isSSR:!1},i=r.createContext(o),u=!!("undefined"!=typeof window&&window.document&&window.document.createElement),s=new WeakMap,a="function"==typeof r.useId?function(e){let t=r.useId(),[n]=(0,r.useState)(f()),i=n?"react-aria":`react-aria${o.prefix}`;return e||`${i}-${t}`}:function(e){let t=(0,r.useContext)(i);t!==o||u||console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");let n=function(e=!1){let t=(0,r.useContext)(i),n=(0,r.useRef)(null);if(null===n.current&&!e){var o,u;let e=null===(o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)||void 0===o?void 0:null===(u=o.ReactCurrentOwner)||void 0===u?void 0:u.current;if(e){let n=s.get(e);null==n?s.set(e,{id:t.current,state:e.memoizedState}):e.memoizedState!==n.state&&(t.current=n.id,s.delete(e))}n.current=++t.current}return n.current}(!!e),a=`react-aria${t.prefix}`;return e||`${a}-${n}`};function c(){return!1}function l(){return!0}function d(e){return()=>{}}function f(){return"function"==typeof r.useSyncExternalStore?r.useSyncExternalStore(d,c,l):(0,r.useContext)(i).isSSR}},2650:function(e,t,n){n.d(t,{Ao:function(){return E},Gt:function(){return H},Me:function(){return a},PK:function(){return F},QB:function(){return P},V5:function(){return D},Zj:function(){return z},a9:function(){return M},ad:function(){return O},bE:function(){return L},bt:function(){return u},cr:function(){return G},dG:function(){return d},gn:function(){return K},iW:function(){return A},lE:function(){return R},lq:function(){return f},mp:function(){return c},tS:function(){return l},xi:function(){return w},y$:function(){return U},yU:function(){return S},zL:function(){return m},zT:function(){return _},zX:function(){return I}});var r=n(2265),o=n(4256),i=n(348);let u="undefined"!=typeof document?r.useLayoutEffect:()=>{},s=new Map;function a(e){let[t,n]=(0,r.useState)(e),i=(0,r.useRef)(null),a=(0,o.gP)(t),c=(0,r.useCallback)(e=>{i.current=e},[]);return s.set(a,c),u(()=>()=>{s.delete(a)},[a]),(0,r.useEffect)(()=>{let e=i.current;e&&(i.current=null,n(e))}),a}function c(e=[]){let t=a(),[n,o]=function(e){let[t,n]=(0,r.useState)(e),o=(0,r.useRef)(t),i=(0,r.useRef)(null),s=(0,r.useCallback)(()=>{let e=i.current.next();for(;!e.done&&o.current===e.value;)e=i.current.next();if(e.done){i.current=null;return}n(e.value),o.current=e.value},[n,o,i]);u(()=>{i.current&&s()});let a=(0,r.useCallback)(e=>{i.current=e(o.current),s()},[s,i,o]);return[t,a]}(t),i=(0,r.useCallback)(()=>{o(function*(){yield t,yield document.getElementById(t)?t:void 0})},[t,o]);return u(i,[t,i,...e]),n}function l(...e){return(...t)=>{for(let n of e)"function"==typeof n&&n(...t)}}function d(...e){let t={...e[0]};for(let n=1;n<e.length;n++){let r=e[n];for(let e in r){let n=t[e],o=r[e];"function"==typeof n&&"function"==typeof o&&"o"===e[0]&&"n"===e[1]&&e.charCodeAt(2)>=65&&90>=e.charCodeAt(2)?t[e]=l(n,o):("className"===e||"UNSAFE_className"===e)&&"string"==typeof n&&"string"==typeof o?t[e]=(0,i.Z)(n,o):"id"===e&&n&&o?t.id=function(e,t){if(e===t)return e;let n=s.get(e);if(n)return n(t),t;let r=s.get(t);return r?(r(e),e):t}(n,o):t[e]=void 0!==o?o:n}}return t}function f(...e){return 1===e.length?e[0]:t=>{for(let n of e)"function"==typeof n?n(t):null!=n&&(n.current=t)}}let p=new Set(["id"]),v=new Set(["aria-label","aria-labelledby","aria-describedby","aria-details"]),g=/^(data-.*)$/;function m(e,t={}){let{labelable:n,propNames:r}=t,o={};for(let t in e)Object.prototype.hasOwnProperty.call(e,t)&&(p.has(t)||n&&v.has(t)||(null==r?void 0:r.has(t))||g.test(t))&&(o[t]=e[t]);return o}function E(e){if(function(){if(null==b){b=!1;try{document.createElement("div").focus({get preventScroll(){return b=!0,!0}})}catch(e){}}return b}())e.focus({preventScroll:!0});else{let t=function(e){for(var t=e.parentNode,n=[],r=document.scrollingElement||document.documentElement;t instanceof HTMLElement&&t!==r;)(t.offsetHeight<t.scrollHeight||t.offsetWidth<t.scrollWidth)&&n.push({element:t,scrollTop:t.scrollTop,scrollLeft:t.scrollLeft}),t=t.parentNode;return r instanceof HTMLElement&&n.push({element:r,scrollTop:r.scrollTop,scrollLeft:r.scrollLeft}),n}(e);e.focus(),function(e){for(let{element:t,scrollTop:n,scrollLeft:r}of e)t.scrollTop=n,t.scrollLeft=r}(t)}}let b=null,y=new Map,T=new Set;function h(){if("undefined"==typeof window)return;let e=t=>{let n=y.get(t.target);if(n&&(n.delete(t.propertyName),0===n.size&&(t.target.removeEventListener("transitioncancel",e),y.delete(t.target)),0===y.size)){for(let e of T)e();T.clear()}};document.body.addEventListener("transitionrun",t=>{let n=y.get(t.target);n||(n=new Set,y.set(t.target,n),t.target.addEventListener("transitioncancel",e)),n.add(t.propertyName)}),document.body.addEventListener("transitionend",e)}function P(e){requestAnimationFrame(()=>{0===y.size?e():T.add(e)})}function w(){let e=(0,r.useRef)(new Map),t=(0,r.useCallback)((t,n,r,o)=>{let i=(null==o?void 0:o.once)?(...t)=>{e.current.delete(r),r(...t)}:r;e.current.set(r,{type:n,eventTarget:t,fn:i,options:o}),t.addEventListener(n,r,o)},[]),n=(0,r.useCallback)((t,n,r,o)=>{var i;let u=(null===(i=e.current.get(r))||void 0===i?void 0:i.fn)||r;t.removeEventListener(n,u,o),e.current.delete(r)},[]),o=(0,r.useCallback)(()=>{e.current.forEach((e,t)=>{n(e.eventTarget,e.type,t,e.options)})},[n]);return(0,r.useEffect)(()=>o,[o]),{addGlobalListener:t,removeGlobalListener:n,removeAllGlobalListeners:o}}function L(e,t){let{id:n,"aria-label":r,"aria-labelledby":o}=e;return n=a(n),o&&r?o=[...new Set([n,...o.trim().split(/\s+/)])].join(" "):o&&(o=o.trim().split(/\s+/).join(" ")),r||o||!t||(r=t),{id:n,"aria-label":r,"aria-labelledby":o}}function S(e){let{ref:t,onResize:n}=e;(0,r.useEffect)(()=>{let e=null==t?void 0:t.current;if(e){if(!(void 0!==window.ResizeObserver))return window.addEventListener("resize",n,!1),()=>{window.removeEventListener("resize",n,!1)};{let t=new window.ResizeObserver(e=>{e.length&&n()});return t.observe(e),()=>{e&&t.unobserve(e)}}}},[n,t])}function R(e,t){u(()=>{if(e&&e.ref&&t)return e.ref.current=t.current,()=>{e.ref.current=null}},[e,t])}function N(e){for(M(e)&&(e=e.parentElement);e&&!M(e);)e=e.parentElement;return e||document.scrollingElement||document.documentElement}function M(e){let t=window.getComputedStyle(e);return/(auto|scroll)/.test(t.overflow+t.overflowX+t.overflowY)}"undefined"!=typeof document&&("loading"!==document.readyState?h():document.addEventListener("DOMContentLoaded",h)),"undefined"!=typeof document&&window.visualViewport;let k=0,C=new Map;function F(e){let[t,n]=(0,r.useState)(void 0);return u(()=>{if(!e)return;let t=C.get(e);if(t)n(t.element.id);else{let r=`react-aria-description-${k++}`;n(r);let o=document.createElement("div");o.id=r,o.style.display="none",o.textContent=e,document.body.appendChild(o),t={refCount:0,element:o},C.set(e,t)}return t.refCount++,()=>{0==--t.refCount&&(t.element.remove(),C.delete(e))}},[e]),{"aria-describedby":e?t:void 0}}function x(e){var t;return"undefined"!=typeof window&&null!=window.navigator&&e.test((null===(t=window.navigator.userAgentData)||void 0===t?void 0:t.platform)||window.navigator.platform)}function D(){return x(/^Mac/i)}function K(){return x(/^iPhone/i)||x(/^iPad/i)||D()&&navigator.maxTouchPoints>1}function O(){return D()||K()}function A(e){let t=(0,r.useRef)(null);return u(()=>{t.current=e},[e]),(0,r.useCallback)((...e)=>{let n=t.current;return n(...e)},[])}function I(e,t,n,o){let i=A(n),u=null==n;(0,r.useEffect)(()=>{if(u)return;let n=e.current;return n.addEventListener(t,i,o),()=>{n.removeEventListener(t,i,o)}},[e,t,o,u,i])}function _(e,t){let n=W(e,t,"left"),r=W(e,t,"top"),o=t.offsetWidth,i=t.offsetHeight,u=e.scrollLeft,s=e.scrollTop,{borderTopWidth:a,borderLeftWidth:c}=getComputedStyle(e),l=e.scrollLeft+parseInt(c,10),d=e.scrollTop+parseInt(a,10),f=l+e.clientWidth,p=d+e.clientHeight;n<=u?u=n-parseInt(c,10):n+o>f&&(u+=n+o-f),r<=d?s=r-parseInt(a,10):r+i>p&&(s+=r+i-p),e.scrollLeft=u,e.scrollTop=s}function W(e,t,n){let r="left"===n?"offsetLeft":"offsetTop",o=0;for(;t.offsetParent&&(o+=t[r],t.offsetParent!==e);){if(t.offsetParent.contains(e)){o-=e[r];break}t=t.offsetParent}return o}function H(e,t){if(document.contains(e)){let u=document.scrollingElement||document.documentElement;if("hidden"===window.getComputedStyle(u).overflow){let t=N(e);for(;e&&t&&e!==u&&t!==u;)_(t,e),t=N(e=t)}else{var n,r,o,i;let{left:u,top:s}=e.getBoundingClientRect();null==e||null===(n=e.scrollIntoView)||void 0===n||n.call(e,{block:"nearest"});let{left:a,top:c}=e.getBoundingClientRect();(Math.abs(u-a)>1||Math.abs(s-c)>1)&&(null==t||null===(r=t.containingElement)||void 0===r||null===(o=r.scrollIntoView)||void 0===o||o.call(r,{block:"center",inline:"center"}),null===(i=e.scrollIntoView)||void 0===i||i.call(e,{block:"nearest"}))}}}function z(e){var t,n;return 0===e.mozInputSource&&!!e.isTrusted||((t=/Android/i,"undefined"!=typeof window&&null!=window.navigator&&((null===(n=window.navigator.userAgentData)||void 0===n?void 0:n.brands.some(e=>t.test(e.brand)))||t.test(window.navigator.userAgent))&&e.pointerType)?"click"===e.type&&1===e.buttons:0===e.detail&&!e.pointerType)}function G(e){return 0===e.width&&0===e.height||1===e.width&&1===e.height&&0===e.pressure&&0===e.detail&&"mouse"===e.pointerType}function U(e,t,n){let o=(0,r.useRef)(t),i=A(()=>{n&&n(o.current)});(0,r.useEffect)(()=>{var t;let n=null==e?void 0:null===(t=e.current)||void 0===t?void 0:t.form;return null==n||n.addEventListener("reset",i),()=>{null==n||n.removeEventListener("reset",i)}},[e,i])}}}]);