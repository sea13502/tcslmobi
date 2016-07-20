(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"), require("ReactDOM"), require("ReactRouter"), require("AMUITouch"));
	else if(typeof define === 'function' && define.amd)
		define(["React", "ReactDOM", "ReactRouter", "AMUITouch"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("React"), require("ReactDOM"), require("ReactRouter"), require("AMUITouch")) : factory(root["React"], root["ReactDOM"], root["ReactRouter"], root["AMUITouch"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_15__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__( 1 );
	var ReactDom = __webpack_require__( 2 );
	var routes = __webpack_require__( 3 );
	var css = __webpack_require__( 27 );

	ReactDom.render(routes,
		document.getElementById("container"));

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var Router = __webpack_require__( 4 ).Router;
	var Route = __webpack_require__( 4 ).Route;
	var IndexRoute = __webpack_require__( 4 ).IndexRoute;
	var hashHistory = __webpack_require__( 4 ).hashHistory;

	var BaseComponent = __webpack_require__( 5 );
	var RootApp = __webpack_require__( 23 );
	var LianxiComponent = __webpack_require__( 24 );
	var Home = __webpack_require__( 26 );


	var routes = (
		React.createElement(Router, {history:  hashHistory }, 
			React.createElement(Route, {path: "/", component:  RootApp }, 
				React.createElement(IndexRoute, {component:  Home }), 
				React.createElement(Route, {path: "/diancai", component:  BaseComponent }), 
				React.createElement(Route, {path: ":lianxi", component:  LianxiComponent })
			)
		)
	);

	module.exports = routes;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__( 1 );
	var DishStore = __webpack_require__( 6 );

	var View = __webpack_require__( 15 ).View;

	var RightPart = __webpack_require__( 16 );
	var LeftPart = __webpack_require__( 20 );

	var BaseComponent = React.createClass({displayName: "BaseComponent",

		// getInitialState:function(){
		// 	return DishStore.getAllDishes();
		// },

		// componentDidMount:function(){
		// 	document.getElementById("leftbox").style.height = document.documentElement.clientHeight + "px";
		// 	document.getElementById("rightbox").style.height = document.documentElement.clientHeight + "px";
		// },

		render:function(){
			var allDish = DishStore.getAllDishes();
			var allTc = DishStore.getAllTc();

			//console.log( allTc );

			return(
				React.createElement("div", {id: "diancaican"}, 
					React.createElement("div", {style: { height:"45px"}}, 
						"topbar"
					), 
					React.createElement("div", null, 
						React.createElement(LeftPart, {data: allDish}), 
						React.createElement(RightPart, {data: allDish})				
					)
				)
			)
		}

	});

	module.exports = BaseComponent;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var AppDispatcher = __webpack_require__( 7 );
	var DishConstants = __webpack_require__( 12 );
	var EventEmitter = __webpack_require__(13).EventEmitter;

	var assign = __webpack_require__(14);

	var CHANGE_EVENT = "change";

	var allDishes = JSON.parse( 
	document.getElementById("dishdata").innerHTML );
	var allTc = {};
	if( document.getElementById("tcdata").innerHTML != "" ){
		allTc = JSON.parse( document.getElementById("tcdata").innerHTML );
	}
	var dishCrtclass = allDishes.alldish[0];
	var dishCrtclassIndex = 0;
	var crtActionType = "";

	function updateDishCrtclass( action ){
		dishCrtclass = allDishes.alldish[ action.dishIndex ];
		dishCrtclassIndex = action.dishIndex;
		crtActionType = action.actionType;
	}

	var DishStore = assign({},EventEmitter.prototype,{
		getAllDishes:function(){
			return allDishes;
		},
		getAllTc:function(){
			return allTc;
		},
		getCrtclass:function(){
			return dishCrtclass;
		},
		getCrtclassIndex:function(){
			return dishCrtclassIndex;
		},
		getCrtActionType:function(){
			return crtActionType;
		},
		emitChange:function(){
			this.emit( CHANGE_EVENT );
		},
		addChangeListener:function( callback ){
			this.on( CHANGE_EVENT,callback );
		},
		removeChangeListener: function(callback) {
		    this.removeListener(CHANGE_EVENT, callback);
		}
	});

	AppDispatcher.register(function( action ){
		switch( action.actionType ){
			case DishConstants.RIGHT_SCROLL:
				//更新数据
				updateDishCrtclass( action );
				DishStore.emitChange();
				break;
			case DishConstants.LFFT_CLICK:
				updateDishCrtclass( action );
				DishStore.emitChange();
			default:
		}
	});

	module.exports = DishStore;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var Dispatcher = __webpack_require__(8).Dispatcher;

	module.exports = new Dispatcher();

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	module.exports.Dispatcher = __webpack_require__(9);


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule Dispatcher
	 * 
	 * @preventMunge
	 */

	'use strict';

	exports.__esModule = true;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var invariant = __webpack_require__(11);

	var _prefix = 'ID_';

	/**
	 * Dispatcher is used to broadcast payloads to registered callbacks. This is
	 * different from generic pub-sub systems in two ways:
	 *
	 *   1) Callbacks are not subscribed to particular events. Every payload is
	 *      dispatched to every registered callback.
	 *   2) Callbacks can be deferred in whole or part until other callbacks have
	 *      been executed.
	 *
	 * For example, consider this hypothetical flight destination form, which
	 * selects a default city when a country is selected:
	 *
	 *   var flightDispatcher = new Dispatcher();
	 *
	 *   // Keeps track of which country is selected
	 *   var CountryStore = {country: null};
	 *
	 *   // Keeps track of which city is selected
	 *   var CityStore = {city: null};
	 *
	 *   // Keeps track of the base flight price of the selected city
	 *   var FlightPriceStore = {price: null}
	 *
	 * When a user changes the selected city, we dispatch the payload:
	 *
	 *   flightDispatcher.dispatch({
	 *     actionType: 'city-update',
	 *     selectedCity: 'paris'
	 *   });
	 *
	 * This payload is digested by `CityStore`:
	 *
	 *   flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'city-update') {
	 *       CityStore.city = payload.selectedCity;
	 *     }
	 *   });
	 *
	 * When the user selects a country, we dispatch the payload:
	 *
	 *   flightDispatcher.dispatch({
	 *     actionType: 'country-update',
	 *     selectedCountry: 'australia'
	 *   });
	 *
	 * This payload is digested by both stores:
	 *
	 *   CountryStore.dispatchToken = flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'country-update') {
	 *       CountryStore.country = payload.selectedCountry;
	 *     }
	 *   });
	 *
	 * When the callback to update `CountryStore` is registered, we save a reference
	 * to the returned token. Using this token with `waitFor()`, we can guarantee
	 * that `CountryStore` is updated before the callback that updates `CityStore`
	 * needs to query its data.
	 *
	 *   CityStore.dispatchToken = flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'country-update') {
	 *       // `CountryStore.country` may not be updated.
	 *       flightDispatcher.waitFor([CountryStore.dispatchToken]);
	 *       // `CountryStore.country` is now guaranteed to be updated.
	 *
	 *       // Select the default city for the new country
	 *       CityStore.city = getDefaultCityForCountry(CountryStore.country);
	 *     }
	 *   });
	 *
	 * The usage of `waitFor()` can be chained, for example:
	 *
	 *   FlightPriceStore.dispatchToken =
	 *     flightDispatcher.register(function(payload) {
	 *       switch (payload.actionType) {
	 *         case 'country-update':
	 *         case 'city-update':
	 *           flightDispatcher.waitFor([CityStore.dispatchToken]);
	 *           FlightPriceStore.price =
	 *             getFlightPriceStore(CountryStore.country, CityStore.city);
	 *           break;
	 *     }
	 *   });
	 *
	 * The `country-update` payload will be guaranteed to invoke the stores'
	 * registered callbacks in order: `CountryStore`, `CityStore`, then
	 * `FlightPriceStore`.
	 */

	var Dispatcher = (function () {
	  function Dispatcher() {
	    _classCallCheck(this, Dispatcher);

	    this._callbacks = {};
	    this._isDispatching = false;
	    this._isHandled = {};
	    this._isPending = {};
	    this._lastID = 1;
	  }

	  /**
	   * Registers a callback to be invoked with every dispatched payload. Returns
	   * a token that can be used with `waitFor()`.
	   */

	  Dispatcher.prototype.register = function register(callback) {
	    var id = _prefix + this._lastID++;
	    this._callbacks[id] = callback;
	    return id;
	  };

	  /**
	   * Removes a callback based on its token.
	   */

	  Dispatcher.prototype.unregister = function unregister(id) {
	    !this._callbacks[id] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.unregister(...): `%s` does not map to a registered callback.', id) : invariant(false) : undefined;
	    delete this._callbacks[id];
	  };

	  /**
	   * Waits for the callbacks specified to be invoked before continuing execution
	   * of the current callback. This method should only be used by a callback in
	   * response to a dispatched payload.
	   */

	  Dispatcher.prototype.waitFor = function waitFor(ids) {
	    !this._isDispatching ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.waitFor(...): Must be invoked while dispatching.') : invariant(false) : undefined;
	    for (var ii = 0; ii < ids.length; ii++) {
	      var id = ids[ii];
	      if (this._isPending[id]) {
	        !this._isHandled[id] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.waitFor(...): Circular dependency detected while ' + 'waiting for `%s`.', id) : invariant(false) : undefined;
	        continue;
	      }
	      !this._callbacks[id] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.waitFor(...): `%s` does not map to a registered callback.', id) : invariant(false) : undefined;
	      this._invokeCallback(id);
	    }
	  };

	  /**
	   * Dispatches a payload to all registered callbacks.
	   */

	  Dispatcher.prototype.dispatch = function dispatch(payload) {
	    !!this._isDispatching ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch.') : invariant(false) : undefined;
	    this._startDispatching(payload);
	    try {
	      for (var id in this._callbacks) {
	        if (this._isPending[id]) {
	          continue;
	        }
	        this._invokeCallback(id);
	      }
	    } finally {
	      this._stopDispatching();
	    }
	  };

	  /**
	   * Is this Dispatcher currently dispatching.
	   */

	  Dispatcher.prototype.isDispatching = function isDispatching() {
	    return this._isDispatching;
	  };

	  /**
	   * Call the callback stored with the given id. Also do some internal
	   * bookkeeping.
	   *
	   * @internal
	   */

	  Dispatcher.prototype._invokeCallback = function _invokeCallback(id) {
	    this._isPending[id] = true;
	    this._callbacks[id](this._pendingPayload);
	    this._isHandled[id] = true;
	  };

	  /**
	   * Set up bookkeeping needed when dispatching.
	   *
	   * @internal
	   */

	  Dispatcher.prototype._startDispatching = function _startDispatching(payload) {
	    for (var id in this._callbacks) {
	      this._isPending[id] = false;
	      this._isHandled[id] = false;
	    }
	    this._pendingPayload = payload;
	    this._isDispatching = true;
	  };

	  /**
	   * Clear bookkeeping used for dispatching.
	   *
	   * @internal
	   */

	  Dispatcher.prototype._stopDispatching = function _stopDispatching() {
	    delete this._pendingPayload;
	    this._isDispatching = false;
	  };

	  return Dispatcher;
	})();

	module.exports = Dispatcher;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 10 */
/***/ function(module, exports) {

	// shim for using process in browser

	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	(function () {
	  try {
	    cachedSetTimeout = setTimeout;
	  } catch (e) {
	    cachedSetTimeout = function () {
	      throw new Error('setTimeout is not defined');
	    }
	  }
	  try {
	    cachedClearTimeout = clearTimeout;
	  } catch (e) {
	    cachedClearTimeout = function () {
	      throw new Error('clearTimeout is not defined');
	    }
	  }
	} ())
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = cachedSetTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    cachedClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        cachedSetTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule invariant
	 */

	"use strict";

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function (condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error('Invariant Violation: ' + format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = {
	  RIGHT_SCROLL: "RIGHT_SCROLL",
	  LFFT_CLICK:"LFFT_CLICK"
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;

	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;

	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;

	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;

	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function(n) {
	  if (!isNumber(n) || n < 0 || isNaN(n))
	    throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};

	EventEmitter.prototype.emit = function(type) {
	  var er, handler, len, args, i, listeners;

	  if (!this._events)
	    this._events = {};

	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error ||
	        (isObject(this._events.error) && !this._events.error.length)) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      } else {
	        // At least give some kind of context to the user
	        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
	        err.context = er;
	        throw err;
	      }
	    }
	  }

	  handler = this._events[type];

	  if (isUndefined(handler))
	    return false;

	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        args = Array.prototype.slice.call(arguments, 1);
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    args = Array.prototype.slice.call(arguments, 1);
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++)
	      listeners[i].apply(this, args);
	  }

	  return true;
	};

	EventEmitter.prototype.addListener = function(type, listener) {
	  var m;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events)
	    this._events = {};

	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener)
	    this.emit('newListener', type,
	              isFunction(listener.listener) ?
	              listener.listener : listener);

	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;
	  else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);
	  else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];

	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }

	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' +
	                    'leak detected. %d listeners added. ' +
	                    'Use emitter.setMaxListeners() to increase limit.',
	                    this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }

	  return this;
	};

	EventEmitter.prototype.on = EventEmitter.prototype.addListener;

	EventEmitter.prototype.once = function(type, listener) {
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  var fired = false;

	  function g() {
	    this.removeListener(type, g);

	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }

	  g.listener = listener;
	  this.on(type, g);

	  return this;
	};

	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function(type, listener) {
	  var list, position, length, i;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events || !this._events[type])
	    return this;

	  list = this._events[type];
	  length = list.length;
	  position = -1;

	  if (list === listener ||
	      (isFunction(list.listener) && list.listener === listener)) {
	    delete this._events[type];
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);

	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener ||
	          (list[i].listener && list[i].listener === listener)) {
	        position = i;
	        break;
	      }
	    }

	    if (position < 0)
	      return this;

	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }

	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	  }

	  return this;
	};

	EventEmitter.prototype.removeAllListeners = function(type) {
	  var key, listeners;

	  if (!this._events)
	    return this;

	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0)
	      this._events = {};
	    else if (this._events[type])
	      delete this._events[type];
	    return this;
	  }

	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }

	  listeners = this._events[type];

	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else if (listeners) {
	    // LIFO order
	    while (listeners.length)
	      this.removeListener(type, listeners[listeners.length - 1]);
	  }
	  delete this._events[type];

	  return this;
	};

	EventEmitter.prototype.listeners = function(type) {
	  var ret;
	  if (!this._events || !this._events[type])
	    ret = [];
	  else if (isFunction(this._events[type]))
	    ret = [this._events[type]];
	  else
	    ret = this._events[type].slice();
	  return ret;
	};

	EventEmitter.prototype.listenerCount = function(type) {
	  if (this._events) {
	    var evlistener = this._events[type];

	    if (isFunction(evlistener))
	      return 1;
	    else if (evlistener)
	      return evlistener.length;
	  }
	  return 0;
	};

	EventEmitter.listenerCount = function(emitter, type) {
	  return emitter.listenerCount(type);
	};

	function isFunction(arg) {
	  return typeof arg === 'function';
	}

	function isNumber(arg) {
	  return typeof arg === 'number';
	}

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}

	function isUndefined(arg) {
	  return arg === void 0;
	}


/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';
	/* eslint-disable no-unused-vars */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (e) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_15__;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__( 1 );
	var DishCell = __webpack_require__( 17 );
	var DishclassCell = __webpack_require__( 18 );
	var DishStore = __webpack_require__( 6 );
	var DishActions = __webpack_require__( 19 );
	var DishConstants = __webpack_require__( 12 );
	var Container = __webpack_require__( 15 ).Container;

	//检测图片是不是显示出来了
	function checkDishShow( dishImgGroup,dishes,canHeight ){
		var scrollTop = document.getElementById("rightBoxIn").scrollTop;
		for( var i = 0 ; i < dishes.length ; i++ ){
			if( dishes[i] - 45 > scrollTop && ( scrollTop + canHeight ) > ( dishes[i] - 45 ) ){
				console.log( dishImgGroup[i] );
				dishImgGroup[i].setAttribute( "src" , dishImgGroup[i].getAttribute( "data-lazy-src" ) );
			}
		}
		//console.log( dishes );
	}

	var RightPart = React.createClass({displayName: "RightPart",
		componentDidMount:function(){
			document.getElementById( "rightBoxIn" ).style.height = document.documentElement.clientHeight - this._topbarHeight + "px";

		    DishStore.addChangeListener( this._onChange );

		    var wholeDis = [];
			for( 
				var i = 0 ;
				i < document.getElementsByClassName( "singleclassName" ).length ;
				i++	
			 ){
				wholeDis.push( 
					document.getElementsByClassName( "singleclassName" )[i].getBoundingClientRect().top
				)
			}
			this._wholeDisArr = wholeDis;
			//所有的菜品图距离上面的距离
			var wholedishDis = [];
			var dishImgGroup = document.getElementsByClassName("dishImg");

			var canHeight = Number( document.getElementById("rightBoxIn").style.height.slice(0,-2) );
			for(
				var j = 0 ;
				j < dishImgGroup.length ;
				j++
			){
				wholedishDis.push(
					dishImgGroup[j].offsetTop
				);
			}
			var _wholeDishDis = wholedishDis;

			setInterval( function(){
				checkDishShow( dishImgGroup,_wholeDishDis,canHeight );
			},1000 );
		},
		componentWillMount:function(){
		    DishStore.removeChangeListener( this._onChange );
		},
		handleScroll:function(e){
			for( var i = 0 , $category ; $category = this._suchDom().foodCategory[i] ; i++ ){
				if (!$category) {
	                break;
	            }
	            var $categoryNext = this._suchDom().foodCategory[i+1];
	            var pTop = $category.getBoundingClientRect().top;
				if( $categoryNext ){
					if( pTop <= this._topbarHeight && $categoryNext.getBoundingClientRect().top > this._topbarHeight ){
						DishActions.rightpartScroll( i );
					}
				}else if( pTop <= this._topbarHeight ){
					DishActions.rightpartScroll( i );
				}

			}
		},
		getInitialState:function() {
		    return {
		        crtClassName:DishStore.getCrtclass().name
		    };
		},
		render:function(){
			var allDish = this.props.data.alldish;

			var styleObj = {};
			
			var allDishArr = [];
			for( var i = 0 ; i < allDish.length ; i++ ){
				var dishInClass = [];
				dishInClass.push(
					React.createElement(DishclassCell, {data:  allDish[i] })
				);
				for( var j = 0 ; j < allDish[i].items.length ; j++ ){
					dishInClass.push(
						React.createElement(DishCell, {data:  allDish[i].items[j] })
					);
				}
				//判断是不是最后一个，然后给对应的样式，让最后一个菜类能撑满
				if( i == allDish.length-1 ){
					styleObj = { "min-height":this._suchDom().clientHeight - this._topbarHeight };
				}
				allDishArr.push(
					React.createElement(Container, {className: "singleclassName", style:  styleObj }, 
						dishInClass
					)
				);
			}

			return (
				React.createElement("div", {id: "rightbox", className: "right"}, 
					React.createElement("div", {className: "floatClassName"}, 
						 this.state.crtClassName
					), 
					React.createElement("div", {id: "rightBoxIn", 
						onTouchStart:  this.handleScroll, 
						onTouchMove:  this.handleScroll, 
				  		onScroll:  this.handleScroll, 
				  		onTouchEnd:  this.handleScroll
				  	}, 
						 allDishArr 
					)
				)
			);
		},
		_onChange:function(){
			//获取新的菜类名在浮动菜类上面显示 console.log(  "scrolling");
			this.setState( { crtClassName:DishStore.getCrtclass().name } );
			if( DishStore.getCrtActionType() == DishConstants.LFFT_CLICK ){
				document.getElementById( "rightBoxIn" ).scrollTop = this._wholeDisArr[ DishStore.getCrtclassIndex() ] - this._topbarHeight;
				console.log( this._wholeDisArr );
			}
		
		},
		_suchDom:function(){
			return{ 
				menuContent:document.getElementById( "rightbox" ),
				foodCategory:document.getElementsByClassName( "singleclassName" ),
				clientHeight:document.documentElement.clientHeight
			}
		},
		_topbarHeight:45
	});

	module.exports = RightPart;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	//var LazyImage = require('lazyimage');
	//console.log( LazyLoad );
	var DishCell = React.createClass({displayName: "DishCell",
		render:function(){
			var data = this.props.data;

			return(
				React.createElement("div", null, 
					
					React.createElement("img", {className: "dishImg", id:  data.itemId, "data-lazy-src":  data.taFileName, style: { height:86}}), 

					 data.name
				)
			)
		}
	});

	module.exports = DishCell;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);

	var DishclassCell = React.createClass({displayName: "DishclassCell",
		render:function(){
			var data = this.props.data;

			return(
				React.createElement("div", {className: "dishGroupName"}, 
						 data.name
				)
			)
		}
	});

	module.exports = DishclassCell;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var AppDispatcher = __webpack_require__(7);
	var DishConstants = __webpack_require__( 12 );

	var DishActions = {
		rightpartScroll : function( dishIndex ){
			AppDispatcher.dispatch({
				actionType : DishConstants.RIGHT_SCROLL,
				dishIndex : dishIndex
			});
		},
		leftBtnClick : function( dishIndex ){
			AppDispatcher.dispatch({
				actionType : DishConstants.LFFT_CLICK,
				dishIndex : dishIndex
			});
		}
	};

	module.exports = DishActions;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__( 1 );
	var BackButton = __webpack_require__( 21 );
	var Container = __webpack_require__( 15 ).Container;
	var LeftdishClasscell = __webpack_require__( 22 );

	var LeftPart = React.createClass({displayName: "LeftPart",
		componentDidMount:function(){
			document.getElementById( "leftbox" ).style.height = document.documentElement.clientHeight - 45 + "px";
		},
		render:function(){
			var allDish = this.props.data.alldish;

			var allDishClassArr = [];
			for( var i = 0 ; i < allDish.length ; i++ ){
				allDishClassArr.push( 
					React.createElement(LeftdishClasscell, {singleClass:  allDish[i], index:  i })
				);
			}

			return (
				React.createElement("div", {id: "leftbox", className: "left"}, 
					 allDishClassArr, 
					React.createElement(BackButton, null)
				)
			)
		}
	});

	module.exports = LeftPart;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__( 1 );
	var Button = __webpack_require__( 15 ).Button;

	var Link = __webpack_require__( 4 ).Link;

	var BackButton = React.createClass({displayName: "BackButton",
		render:function(){
			return(
				React.createElement(Button, null, 
					React.createElement(Link, {to: "/"}, "返1回")
				)
			)
		}
	});

	module.exports = BackButton;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__( 1 );
	var DishStore = __webpack_require__( 6 );
	var DishActions = __webpack_require__( 19 );

	var LeftdishClasscell = React.createClass({displayName: "LeftdishClasscell",
		getInitialState:function(){
		    return {
		          dishClassStyle:"LeftDishclass"
		    };
		},
		componentDidMount:function() {
		    DishStore.addChangeListener( this._onChange );
		},
		componentWillMount:function(){
		    DishStore.removeChangeListener( this._onChange );
		},
		render:function(){
			var singleClass = this.props.singleClass;
			var index = this.props.index;

			return(
				React.createElement("div", {key:  singleClass.itemClassId, 
					 onClick:  this.clickHandler, 
					 className:  this.state.dishClassStyle
				}, 
					 singleClass.name
				)
			)
		},
		clickHandler:function(){
			//console.log( this.props.singleClass );
			DishActions.leftBtnClick( this.props.index );
		},
		_onChange:function(){
			if(DishStore.getCrtclassIndex() == this.props.index){
				this.setState( { dishClassStyle : "LeftDishclass active" } );
			}else{
				this.setState( { dishClassStyle : "LeftDishclass" } );
			}
		}
	});

	module.exports = LeftdishClasscell;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__( 1 );
	var Container = __webpack_require__( 15 ).Container;

	var RootAppComponent = React.createClass({displayName: "RootAppComponent",
		render:function(){
			var transition = 'sfr';
			return (
				React.createElement(Container, {direction: "column"}, 
					React.createElement(Container, {transition:  transition }, 
						React.cloneElement(this.props.children, {key: this.props.location.key})
					)
				)
				
			)
		}
	});

	module.exports = RootAppComponent;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__( 1 );
	var View = __webpack_require__( 15 ).View;
	//var pages = require( "../components/*" );
	var pages = {};
	pages["lianxi"] = __webpack_require__( 25 );

	var LianxiComponent = React.createClass({displayName: "LianxiComponent",

		render:function(){

			var component = this.props.params.lianxi;

			var Comp = pages[ component ];

			return (
				React.createElement(View, null, 
					React.createElement(Comp, null)
				)
			)
		}
	});

	module.exports = LianxiComponent;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__( 1 );
	var BackButton = __webpack_require__( 21 );

	var LianxisonComponent = React.createClass({displayName: "LianxisonComponent",
		render:function(){
			return (
				React.createElement("div", null, 
					"hello i am son", 
					React.createElement(BackButton, null)
				)
			)
		}
	});

	module.exports = LianxisonComponent;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__( 1 );
	var Link = __webpack_require__( 4 ).Link;

	var Container = __webpack_require__( 15 ).Container;
	var List = __webpack_require__( 15 ).List;
	var NavBar = __webpack_require__( 15 ).NavBar;
	var Group = __webpack_require__( 15 ).Group;
	var View = __webpack_require__( 15 ).View;

	var pages = [
		"diancai","lianxi"
	];

	var HomeComponent = React.createClass({displayName: "HomeComponent",
		getDefaultProps:function() {
		    return {
		      transition: 'rfr'
		    };
		},

		render:function(){
			var items = pages.map(function( item,i ){
				return(
					React.createElement(List.Item, {
			          linkComponent: Link, 
			          linkProps: {to: '/' + item.toLowerCase()}, 
			          title: item, 
			          key: i}
			        )
				)
			});

			return (
				React.createElement(View, {id: "app-index"}, 
			        React.createElement(NavBar, {
			          amStyle: "primary", 
			          title: "Amaze UI Touch"}
			        ), 
			        React.createElement(Container, {scrollable: true}, 
			          React.createElement(Group, {
			            header: "Amaze UI Touch Components", 
			            noPadded: true
			          }, 
			            React.createElement(List, null, 
			              items
			            )
			          )
			        )
			    )
			)
		}
	});

	module.exports = HomeComponent;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(28);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(30)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./text.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./text.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(29)();
	// imports


	// module
	exports.push([module.id, "body{\n    background:pink;\n    margin: 0;\n}\n#diancaican .left{\n\tbackground: yellow;\n    overflow: scroll;\n    display:inline-block;\n    width: 20%;\n}\n#diancaican .right{\n\tbackground: pink;\n    overflow: scroll;\n    display:inline-block;\n    width: 80%;\n}\n#rightBoxIn{\n    overflow: scroll;\n    -webkit-overflow-scrolling : touch;\n}\n.floatClassName{\n    position: absolute;\n    z-index: 20;\n    background:#fff;\n    width:100%;\n    opacity: 0.6;\n}\n.dishGroupName{\n\tbackground:red;\n}\n/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/  \n*::-webkit-scrollbar  \n{  \n    width: 0px;  \n    height: 0px;  \n    background-color: red;  \n}  \n#diancaican{\n    width:100%;\n}\n.active{\n    background:pink;\n}\n#dishScroller{\n    overflow: scroll;   \n}\n\n.LeftDishclass{\n    height: 40px;\n}", ""]);

	// exports


/***/ },
/* 29 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ])
});
;