!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("React"),require("ReactDOM"),require("ReactRouter"),require("AMUITouch"));else if("function"==typeof define&&define.amd)define(["React","ReactDOM","ReactRouter","AMUITouch"],t);else{var n="object"==typeof exports?t(require("React"),require("ReactDOM"),require("ReactRouter"),require("AMUITouch")):t(e.React,e.ReactDOM,e.ReactRouter,e.AMUITouch);for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(this,function(e,t,n,r){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){var r=(n(1),n(2)),i=n(3);n(27);r.render(i,document.getElementById("container"))},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){var r=n(4).Router,i=n(4).Route,s=n(4).IndexRoute,o=n(4).hashHistory,a=n(5),c=n(23),l=n(24),h=n(26),u=React.createElement(r,{history:o},React.createElement(i,{path:"/",component:c},React.createElement(s,{component:h}),React.createElement(i,{path:"/diancai",component:a}),React.createElement(i,{path:":lianxi",component:l})));e.exports=u},function(e,t){e.exports=n},function(e,t,n){var r=n(1),i=n(6),s=(n(15).View,n(16)),o=n(20),a=r.createClass({displayName:"BaseComponent",render:function(){var e=i.getAllDishes();i.getAllTc();return r.createElement("div",{id:"diancaican"},r.createElement("div",{style:{height:"45px"}},"topbar"),r.createElement("div",null,r.createElement(o,{data:e}),r.createElement(s,{data:e})))}});e.exports=a},function(e,t,n){function r(e){u=l.alldish[e.dishIndex],p=e.dishIndex,d=e.actionType}var i=n(7),s=n(12),o=n(13).EventEmitter,a=n(14),c="change",l=JSON.parse(document.getElementById("dishdata").innerHTML),h={};""!=document.getElementById("tcdata").innerHTML&&(h=JSON.parse(document.getElementById("tcdata").innerHTML));var u=l.alldish[0],p=0,d="",f=a({},o.prototype,{getAllDishes:function(){return l},getAllTc:function(){return h},getCrtclass:function(){return u},getCrtclassIndex:function(){return p},getCrtActionType:function(){return d},emitChange:function(){this.emit(c)},addChangeListener:function(e){this.on(c,e)},removeChangeListener:function(e){this.removeListener(c,e)}});i.register(function(e){switch(e.actionType){case s.RIGHT_SCROLL:r(e),f.emitChange();break;case s.LFFT_CLICK:r(e),f.emitChange()}}),e.exports=f},function(e,t,n){var r=n(8).Dispatcher;e.exports=new r},function(e,t,n){e.exports.Dispatcher=n(9)},function(e,t,n){(function(r){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}t.__esModule=!0;var s=n(11),o="ID_",a=function(){function e(){i(this,e),this._callbacks={},this._isDispatching=!1,this._isHandled={},this._isPending={},this._lastID=1}return e.prototype.register=function(e){var t=o+this._lastID++;return this._callbacks[t]=e,t},e.prototype.unregister=function(e){this._callbacks[e]?void 0:"production"!==r.env.NODE_ENV?s(!1,"Dispatcher.unregister(...): `%s` does not map to a registered callback.",e):s(!1),delete this._callbacks[e]},e.prototype.waitFor=function(e){this._isDispatching?void 0:"production"!==r.env.NODE_ENV?s(!1,"Dispatcher.waitFor(...): Must be invoked while dispatching."):s(!1);for(var t=0;t<e.length;t++){var n=e[t];this._isPending[n]?this._isHandled[n]?void 0:"production"!==r.env.NODE_ENV?s(!1,"Dispatcher.waitFor(...): Circular dependency detected while waiting for `%s`.",n):s(!1):(this._callbacks[n]?void 0:"production"!==r.env.NODE_ENV?s(!1,"Dispatcher.waitFor(...): `%s` does not map to a registered callback.",n):s(!1),this._invokeCallback(n))}},e.prototype.dispatch=function(e){this._isDispatching?"production"!==r.env.NODE_ENV?s(!1,"Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch."):s(!1):void 0,this._startDispatching(e);try{for(var t in this._callbacks)this._isPending[t]||this._invokeCallback(t)}finally{this._stopDispatching()}},e.prototype.isDispatching=function(){return this._isDispatching},e.prototype._invokeCallback=function(e){this._isPending[e]=!0,this._callbacks[e](this._pendingPayload),this._isHandled[e]=!0},e.prototype._startDispatching=function(e){for(var t in this._callbacks)this._isPending[t]=!1,this._isHandled[t]=!1;this._pendingPayload=e,this._isDispatching=!0},e.prototype._stopDispatching=function(){delete this._pendingPayload,this._isDispatching=!1},e}();e.exports=a}).call(t,n(10))},function(e,t){function n(){u&&l&&(u=!1,l.length?h=l.concat(h):p=-1,h.length&&r())}function r(){if(!u){var e=o(n);u=!0;for(var t=h.length;t;){for(l=h,h=[];++p<t;)l&&l[p].run();p=-1,t=h.length}l=null,u=!1,a(e)}}function i(e,t){this.fun=e,this.array=t}function s(){}var o,a,c=e.exports={};!function(){try{o=setTimeout}catch(e){o=function(){throw new Error("setTimeout is not defined")}}try{a=clearTimeout}catch(e){a=function(){throw new Error("clearTimeout is not defined")}}}();var l,h=[],u=!1,p=-1;c.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];h.push(new i(e,t)),1!==h.length||u||o(r,0)},i.prototype.run=function(){this.fun.apply(null,this.array)},c.title="browser",c.browser=!0,c.env={},c.argv=[],c.version="",c.versions={},c.on=s,c.addListener=s,c.once=s,c.off=s,c.removeListener=s,c.removeAllListeners=s,c.emit=s,c.binding=function(e){throw new Error("process.binding is not supported")},c.cwd=function(){return"/"},c.chdir=function(e){throw new Error("process.chdir is not supported")},c.umask=function(){return 0}},function(e,t,n){(function(t){"use strict";var n=function(e,n,r,i,s,o,a,c){if("production"!==t.env.NODE_ENV&&void 0===n)throw new Error("invariant requires an error message argument");if(!e){var l;if(void 0===n)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var h=[r,i,s,o,a,c],u=0;l=new Error("Invariant Violation: "+n.replace(/%s/g,function(){return h[u++]}))}throw l.framesToPop=1,l}};e.exports=n}).call(t,n(10))},function(e,t){e.exports={RIGHT_SCROLL:"RIGHT_SCROLL",LFFT_CLICK:"LFFT_CLICK"}},function(e,t){function n(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function r(e){return"function"==typeof e}function i(e){return"number"==typeof e}function s(e){return"object"==typeof e&&null!==e}function o(e){return void 0===e}e.exports=n,n.EventEmitter=n,n.prototype._events=void 0,n.prototype._maxListeners=void 0,n.defaultMaxListeners=10,n.prototype.setMaxListeners=function(e){if(!i(e)||e<0||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},n.prototype.emit=function(e){var t,n,i,a,c,l;if(this._events||(this._events={}),"error"===e&&(!this._events.error||s(this._events.error)&&!this._events.error.length)){if(t=arguments[1],t instanceof Error)throw t;var h=new Error('Uncaught, unspecified "error" event. ('+t+")");throw h.context=t,h}if(n=this._events[e],o(n))return!1;if(r(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:a=Array.prototype.slice.call(arguments,1),n.apply(this,a)}else if(s(n))for(a=Array.prototype.slice.call(arguments,1),l=n.slice(),i=l.length,c=0;c<i;c++)l[c].apply(this,a);return!0},n.prototype.addListener=function(e,t){var i;if(!r(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,r(t.listener)?t.listener:t),this._events[e]?s(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,s(this._events[e])&&!this._events[e].warned&&(i=o(this._maxListeners)?n.defaultMaxListeners:this._maxListeners,i&&i>0&&this._events[e].length>i&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace())),this},n.prototype.on=n.prototype.addListener,n.prototype.once=function(e,t){function n(){this.removeListener(e,n),i||(i=!0,t.apply(this,arguments))}if(!r(t))throw TypeError("listener must be a function");var i=!1;return n.listener=t,this.on(e,n),this},n.prototype.removeListener=function(e,t){var n,i,o,a;if(!r(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(n=this._events[e],o=n.length,i=-1,n===t||r(n.listener)&&n.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(s(n)){for(a=o;a-- >0;)if(n[a]===t||n[a].listener&&n[a].listener===t){i=a;break}if(i<0)return this;1===n.length?(n.length=0,delete this._events[e]):n.splice(i,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},n.prototype.removeAllListeners=function(e){var t,n;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(n=this._events[e],r(n))this.removeListener(e,n);else if(n)for(;n.length;)this.removeListener(e,n[n.length-1]);return delete this._events[e],this},n.prototype.listeners=function(e){var t;return t=this._events&&this._events[e]?r(this._events[e])?[this._events[e]]:this._events[e].slice():[]},n.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(r(t))return 1;if(t)return t.length}return 0},n.listenerCount=function(e,t){return e.listenerCount(t)}},function(e,t){"use strict";function n(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function r(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==r.join(""))return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(e){i[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},i)).join("")}catch(s){return!1}}var i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;e.exports=r()?Object.assign:function(e,t){for(var r,o,a=n(e),c=1;c<arguments.length;c++){r=Object(arguments[c]);for(var l in r)i.call(r,l)&&(a[l]=r[l]);if(Object.getOwnPropertySymbols){o=Object.getOwnPropertySymbols(r);for(var h=0;h<o.length;h++)s.call(r,o[h])&&(a[o[h]]=r[o[h]])}}return a}},function(e,t){e.exports=r},function(e,t,n){var r=n(1),i=n(17),s=n(18),o=n(6),a=n(19),c=n(12),l=n(15).Container,h=r.createClass({displayName:"RightPart",componentDidMount:function(){document.getElementById("rightBoxIn").style.height=document.documentElement.clientHeight-this._topbarHeight+"px",o.addChangeListener(this._onChange);for(var e=[],t=0;t<document.getElementsByClassName("singleclassName").length;t++)e.push(document.getElementsByClassName("singleclassName")[t].getBoundingClientRect().top);this._wholeDisArr=e},componentWillMount:function(){o.removeChangeListener(this._onChange)},handleScroll:function(e){for(var t,n=0;(t=this._suchDom().foodCategory[n])&&t;n++){var r=this._suchDom().foodCategory[n+1],i=t.getBoundingClientRect().top;r?i<=this._topbarHeight&&r.getBoundingClientRect().top>this._topbarHeight&&a.rightpartScroll(n):i<=this._topbarHeight&&a.rightpartScroll(n)}},getInitialState:function(){return{crtClassName:o.getCrtclass().name}},render:function(){for(var e=this.props.data.alldish,t={},n=[],o=0;o<e.length;o++){var a=[];a.push(r.createElement(s,{data:e[o]}));for(var c=0;c<e[o].items.length;c++)a.push(r.createElement(i,{data:e[o].items[c]}));o==e.length-1&&(t={"min-height":this._suchDom().clientHeight-this._topbarHeight}),n.push(r.createElement(l,{className:"singleclassName",style:t},a))}return r.createElement("div",{id:"rightbox",className:"right"},r.createElement("div",{className:"floatClassName"},this.state.crtClassName),r.createElement("div",{id:"rightBoxIn",onTouchStart:this.handleScroll,onTouchMove:this.handleScroll,onScroll:this.handleScroll,onTouchEnd:this.handleScroll},n))},_onChange:function(){this.setState({crtClassName:o.getCrtclass().name}),o.getCrtActionType()==c.LFFT_CLICK&&(document.getElementById("rightBoxIn").scrollTop=this._wholeDisArr[o.getCrtclassIndex()]-this._topbarHeight,console.log(this._wholeDisArr))},_suchDom:function(){return{menuContent:document.getElementById("rightbox"),foodCategory:document.getElementsByClassName("singleclassName"),clientHeight:document.documentElement.clientHeight}},_topbarHeight:45});e.exports=h},function(e,t,n){var r=n(1),i=r.createClass({displayName:"DishCell",render:function(){var e=this.props.data;return r.createElement("div",null,r.createElement("div",null,r.createElement("img",{src:e.taFileName,alt:e.name,style:{height:"86px"}})),e.name)}});e.exports=i},function(e,t,n){var r=n(1),i=r.createClass({displayName:"DishclassCell",render:function(){var e=this.props.data;return r.createElement("div",{className:"dishGroupName"},e.name)}});e.exports=i},function(e,t,n){var r=n(7),i=n(12),s={rightpartScroll:function(e){r.dispatch({actionType:i.RIGHT_SCROLL,dishIndex:e})},leftBtnClick:function(e){r.dispatch({actionType:i.LFFT_CLICK,dishIndex:e})}};e.exports=s},function(e,t,n){var r=n(1),i=n(21),s=(n(15).Container,n(22)),o=r.createClass({displayName:"LeftPart",componentDidMount:function(){document.getElementById("leftbox").style.height=document.documentElement.clientHeight-45+"px"},render:function(){for(var e=this.props.data.alldish,t=[],n=0;n<e.length;n++)t.push(r.createElement(s,{singleClass:e[n],index:n}));return r.createElement("div",{id:"leftbox",className:"left"},t,r.createElement(i,null))}});e.exports=o},function(e,t,n){var r=n(1),i=n(15).Button,s=n(4).Link,o=r.createClass({displayName:"BackButton",render:function(){return r.createElement(i,null,r.createElement(s,{to:"/"},"返1回"))}});e.exports=o},function(e,t,n){var r=n(1),i=n(6),s=n(19),o=r.createClass({displayName:"LeftdishClasscell",getInitialState:function(){return{dishClassStyle:"LeftDishclass"}},componentDidMount:function(){i.addChangeListener(this._onChange)},componentWillMount:function(){i.removeChangeListener(this._onChange)},render:function(){var e=this.props.singleClass;this.props.index;return r.createElement("div",{key:e.itemClassId,onClick:this.clickHandler,className:this.state.dishClassStyle},e.name)},clickHandler:function(){s.leftBtnClick(this.props.index)},_onChange:function(){i.getCrtclassIndex()==this.props.index?this.setState({dishClassStyle:"LeftDishclass active"}):this.setState({dishClassStyle:"LeftDishclass"})}});e.exports=o},function(e,t,n){var r=n(1),i=n(15).Container,s=r.createClass({displayName:"RootAppComponent",render:function(){var e="sfr";return r.createElement(i,{direction:"column"},r.createElement(i,{transition:e},r.cloneElement(this.props.children,{key:this.props.location.key})))}});e.exports=s},function(e,t,n){var r=n(1),i=n(15).View,s={};s.lianxi=n(25);var o=r.createClass({displayName:"LianxiComponent",render:function(){var e=this.props.params.lianxi,t=s[e];return r.createElement(i,null,r.createElement(t,null))}});e.exports=o},function(e,t,n){var r=n(1),i=n(21),s=r.createClass({displayName:"LianxisonComponent",render:function(){return r.createElement("div",null,"hello i am son",r.createElement(i,null))}});e.exports=s},function(e,t,n){var r=n(1),i=n(4).Link,s=n(15).Container,o=n(15).List,a=n(15).NavBar,c=n(15).Group,l=n(15).View,h=["diancai","lianxi"],u=r.createClass({displayName:"HomeComponent",getDefaultProps:function(){return{transition:"rfr"}},render:function(){var e=h.map(function(e,t){return r.createElement(o.Item,{linkComponent:i,linkProps:{to:"/"+e.toLowerCase()},title:e,key:t})});return r.createElement(l,{id:"app-index"},r.createElement(a,{amStyle:"primary",title:"Amaze UI Touch"}),r.createElement(s,{scrollable:!0},r.createElement(c,{header:"Amaze UI Touch Components",noPadded:!0},r.createElement(o,null,e))))}});e.exports=u},function(e,t,n){var r=n(28);"string"==typeof r&&(r=[[e.id,r,""]]);n(30)(r,{});r.locals&&(e.exports=r.locals)},function(e,t,n){t=e.exports=n(29)(),t.push([e.id,"body{background:pink;margin:0}#diancaican .left{background:#ff0;overflow:scroll;display:inline-block;width:20%}#diancaican .right{background:pink;overflow:scroll;display:inline-block;width:80%}#rightBoxIn{overflow:scroll;-webkit-overflow-scrolling:touch}.floatClassName{position:absolute;z-index:20;background:#fff;width:100%;opacity:.6}.dishGroupName{background:red}::-webkit-scrollbar{width:0;height:0;background-color:red}#diancaican{width:100%}.active{background:pink}#dishScroller{overflow:scroll}.LeftDishclass{height:40px}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var s=this[i][0];"number"==typeof s&&(r[s]=!0)}for(i=0;i<t.length;i++){var o=t[i];"number"==typeof o[0]&&r[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),e.push(o))}},e}},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=d[r.id];if(i){i.refs++;for(var s=0;s<i.parts.length;s++)i.parts[s](r.parts[s]);for(;s<r.parts.length;s++)i.parts.push(l(r.parts[s],t))}else{for(var o=[],s=0;s<r.parts.length;s++)o.push(l(r.parts[s],t));d[r.id]={id:r.id,refs:1,parts:o}}}}function i(e){for(var t=[],n={},r=0;r<e.length;r++){var i=e[r],s=i[0],o=i[1],a=i[2],c=i[3],l={css:o,media:a,sourceMap:c};n[s]?n[s].parts.push(l):t.push(n[s]={id:s,parts:[l]})}return t}function s(e,t){var n=v(),r=_[_.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),_.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function o(e){e.parentNode.removeChild(e);var t=_.indexOf(e);t>=0&&_.splice(t,1)}function a(e){var t=document.createElement("style");return t.type="text/css",s(e,t),t}function c(e){var t=document.createElement("link");return t.rel="stylesheet",s(e,t),t}function l(e,t){var n,r,i;if(t.singleton){var s=y++;n=g||(g=a(t)),r=h.bind(null,n,s,!1),i=h.bind(null,n,s,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=c(t),r=p.bind(null,n),i=function(){o(n),n.href&&URL.revokeObjectURL(n.href)}):(n=a(t),r=u.bind(null,n),i=function(){o(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}function h(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=C(t,i);else{var s=document.createTextNode(i),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(s,o[t]):e.appendChild(s)}}function u(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function p(e,t){var n=t.css,r=t.sourceMap;r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var i=new Blob([n],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(i),s&&URL.revokeObjectURL(s)}var d={},f=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},m=f(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),v=f(function(){return document.head||document.getElementsByTagName("head")[0]}),g=null,y=0,_=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=m()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=i(e);return r(n,t),function(e){for(var s=[],o=0;o<n.length;o++){var a=n[o],c=d[a.id];c.refs--,s.push(c)}if(e){var l=i(e);r(l,t)}for(var o=0;o<s.length;o++){var c=s[o];if(0===c.refs){for(var h=0;h<c.parts.length;h++)c.parts[h]();delete d[c.id]}}}};var C=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()}])});