/******/ (function(modules) { // webpackBootstrap
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
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(340);


/***/ }),

/***/ 331:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _yquery = __webpack_require__(332);

	var _yquery2 = _interopRequireDefault(_yquery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Base = function () {
	    function Base() {
	        _classCallCheck(this, Base);

	        _lockBodyTop: void 0;
	        loader: false;
	    }

	    _createClass(Base, [{
	        key: 'lockBodyScroll',
	        value: function lockBodyScroll() {
	            this._lockBodyTop = document.body.scrollTop;
	            (0, _yquery2.default)('body').css({
	                position: 'fixed',
	                overflow: 'hidden',
	                height: document.body.clientHeight,
	                'top': this._lockBodyTop * -1
	            });
	        }
	    }, {
	        key: 'unLockBodyScroll',
	        value: function unLockBodyScroll() {

	            (0, _yquery2.default)('body').css({
	                position: '',
	                overflow: '',
	                height: '',
	                top: ''
	            });

	            document.documentElement.scrollTop = this._lockBodyTop;
	            document.body.scrollTop = this._lockBodyTop;
	        }
	    }, {
	        key: 'append',
	        value: function append(o, l, h) {
	            var local = ['beforeBegin', 'afterBegin', 'beforeEnd', 'afterEnd'];
	            o.insertAdjacentHTML(local[l], h);
	        }
	    }, {
	        key: 'loading',
	        value: function loading() {
	            this.append(document.body, 2, '<div class="loadBlock"><div class="loadBg"></div>' + '<div class="loadCartoon"> <div class="loadHead"></div> <div class="loadBody"></div>' + '<div class="loadDun"></div><div class="loadCappa"></div></div><div class="loadCon">加载中...</div>' + '<div class="backcolor"></div><div class="layer"></div></div>');
	            this.loader = true;
	        }
	    }, {
	        key: 'loaded',
	        value: function loaded() {
	            if (this.loader) {
	                document.body.removeChild((0, _yquery2.default)('.loadBlock').get(0));
	                this.loader = false;
	            }
	        }
	    }]);

	    return Base;
	}();

	exports.default = Base;

/***/ }),

/***/ 332:
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var doc = document;
	var getEles = function getEles(selector, context) {
	    return Array.from((context && context || doc).querySelectorAll(selector));
	};
	var isUndefined = function isUndefined(obj) {
	    return obj === void 0;
	};

	var Yquery = function () {
	    function Yquery(selector, context) {
	        _classCallCheck(this, Yquery);

	        this.elements = getEles(selector, context);
	    }

	    _createClass(Yquery, [{
	        key: 'optimizeCb',
	        value: function optimizeCb(callback) {
	            this.elements.forEach(callback);
	        }
	    }, {
	        key: 'get',
	        value: function get(index) {
	            return this.elements[index < 0 ? 0 : index];
	        }
	    }, {
	        key: 'html',
	        value: function html(sHtml) {
	            if (isUndefined(sHtml)) {
	                return this.get(0).innerHTML;
	            }

	            this.optimizeCb(function (ele) {
	                ele.innerHTML = sHtml;
	            });

	            return this;
	        }
	    }, {
	        key: 'value',
	        value: function value(sHtml) {
	            if (isUndefined(sHtml)) {
	                return this.get(0).value;
	            }

	            this.optimizeCb(function (ele) {
	                ele.value = sHtml;
	            });

	            return this;
	        }
	    }, {
	        key: 'addClass',
	        value: function addClass(iClass) {
	            this.optimizeCb(function (ele) {
	                if (ele.className.split(' ').indexOf(iClass) === -1) {
	                    ele.className += ' ' + iClass;
	                }
	            });

	            return this;
	        }
	    }, {
	        key: 'removeClass',
	        value: function removeClass(iClass) {
	            this.optimizeCb(function (ele) {
	                if (ele.className.split(' ').indexOf(iClass) > -1) {
	                    ele.className = ele.className.replace(iClass, '');
	                }
	            });
	            return this;
	        }
	    }, {
	        key: 'append',
	        value: function append(sHtml) {
	            this.optimizeCb(function (ele) {
	                ele.innerHTML += sHtml;
	            });

	            return this;
	        }
	    }, {
	        key: 'removeChild',
	        value: function removeChild(sHtml) {
	            this.optimizeCb(function (ele) {
	                if (ele.innerHTML.indexOf(sHtml)) {
	                    ele.innerHTML.replace(sHtml, '');
	                }
	            });

	            return this;
	        }
	    }, {
	        key: 'css',
	        value: function css(styles) {
	            if ((typeof styles === 'undefined' ? 'undefined' : _typeof(styles)) === 'object') {
	                this.optimizeCb(function (ele) {
	                    for (var key in styles) {
	                        ele.style[key] = styles[key];
	                    }
	                });
	            }
	            return this;
	        }
	    }, {
	        key: 'height',
	        value: function height(h) {
	            if (isUndefined(h)) {
	                return this.get(0).offsetHeight;
	            }

	            this.optimizeCb(function (ele) {
	                ele.style.height = h;
	            });
	        }
	    }, {
	        key: 'scrollTop',
	        value: function scrollTop(top) {
	            if (isUndefined(top)) {
	                return this.get(0).scrollTop;
	            }

	            this.optimizeCb(function (ele) {
	                ele.scrollTop = top;
	            });
	        }
	    }]);

	    return Yquery;
	}();

	exports.default = function (selector, context) {
	    return new Yquery(selector, context);
	};

/***/ }),

/***/ 334:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _yquery = __webpack_require__(332);

	var _yquery2 = _interopRequireDefault(_yquery);

	var _ajax = __webpack_require__(335);

	var _ajax2 = _interopRequireDefault(_ajax);

	var _eventUtil = __webpack_require__(337);

	var _eventUtil2 = _interopRequireDefault(_eventUtil);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Login = function () {
	    function Login() {
	        _classCallCheck(this, Login);
	    }

	    _createClass(Login, [{
	        key: 'tpl',
	        value: function tpl() {
	            var tpl = '<div id="login-box" class="auth-modal-box hide">\n            <div class="auth-form">\n                <div class="panfish" >\n                    <img src="//gold-cdn.xitu.io/v3/static/img/normal.0447fe9.png" class="normal" style="">\n                    <img src="//gold-cdn.xitu.io/v3/static/img/greeting.1415c1c.png" class="greeting" style="display: none;">\n                    <img src="//gold-cdn.xitu.io/v3/static/img/blindfold.58ce423.png" class="blindfold" style="display: none;">\n                </div>\n                <i title="\u5173\u95ED" class="close-btn iconfont icon-close"></i>\n                <div class="panel login-form">\n                    <h1 class="title">\u767B\u5F55</h1>\n                    <div class="input-group">\n                        <div class="input-box">\n                            <input name="loginAccount" maxlength="64" placeholder="\u8BF7\u586B\u5199\u6635\u79F0/\u8D26\u53F7" class="input">\n                        </div>\n                        <div class="input-box">\n                            <input name="loginPassword" type="password" maxlength="64" placeholder="\u8BF7\u8F93\u5165\u5BC6\u7801" class="input">\n                        </div>\n                    </div>\n                    <button class="btn" id="login">\u767B\u5F55</button>\n                    <div class="prompt-box">\u6CA1\u6709\u8D26\u53F7\uFF1F <span class="clickable register">\u6CE8\u518C</span></div>\n                </div>\n                <div class="panel hide register-form">\n                    <h1 class="title">\u6CE8\u518C</h1>\n                    <div class="input-group">\n                        <div class="input-box">\n                            <input name="Account" maxlength="64" placeholder="\u8BF7\u586B\u5199\u6635\u79F0/\u8D26\u53F7" class="input">\n                        </div>\n                        <div class="input-box">\n                            <input name="Password" type="password" maxlength="64" placeholder="\u8BF7\u8F93\u5165\u5BC6\u7801" class="input">\n                        </div>\n                        <div class="input-box">\n                            <input name="RePassword" type="password" maxlength="64" placeholder="\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801" class="input">\n                        </div>\n                    </div>\n                    <button class="btn" id="register">\u6CE8\u518C</button>\n                    <div class="prompt-box text-center"><span class="clickable entry">\u5DF2\u6709\u8D26\u53F7\u767B\u5F55</span></div>\n                </div>\n            </div>\n        </div>';
	            (0, _yquery2.default)('body').append(tpl);
	        }
	    }, {
	        key: 'openLogin',
	        value: function openLogin() {
	            if ((0, _yquery2.default)('#login-box').elements.length == 0) {
	                this.tpl();
	            }
	            (0, _yquery2.default)('#login-box').removeClass('hide');
	            (0, _yquery2.default)('input[name="loginAccount"]').get(0).focus();
	            this.activeEle();
	        }
	    }, {
	        key: 'closeLogin',
	        value: function closeLogin() {
	            (0, _yquery2.default)('#login-box').addClass('hide');
	        }
	    }, {
	        key: 'initLoginEvent',
	        value: function initLoginEvent() {
	            var _this = this;
	            _eventUtil2.default.addHandler((0, _yquery2.default)('body').get(0), 'click', _this.useEvent.bind(_this));
	            _eventUtil2.default.addHandler((0, _yquery2.default)('body').get(0), 'keyup', _this.activeEle);
	        }
	    }, {
	        key: 'clickResgister',
	        value: function clickResgister() {
	            var formData = {};
	            formData.username = (0, _yquery2.default)('input[name="Account"]').value();
	            formData.password = (0, _yquery2.default)('input[name="Password"]').value();
	            formData.repassword = (0, _yquery2.default)('input[name="RePassword"]').value();
	            this.registerAjax(formData);
	        }
	    }, {
	        key: 'clickLogin',
	        value: function clickLogin() {
	            var formData = {};
	            formData.username = (0, _yquery2.default)('input[name="loginAccount"]').value();
	            formData.password = (0, _yquery2.default)('input[name="loginPassword"]').value();
	            this.loginAjax(formData);
	        }
	    }, {
	        key: 'register',
	        value: function register() {
	            (0, _yquery2.default)('.login-form').addClass('hide');
	            (0, _yquery2.default)('.register-form').removeClass('hide');
	            (0, _yquery2.default)('.panfish').addClass('hide');
	            (0, _yquery2.default)('input[name="Account"]').get(0).focus();
	            this.activeEle();
	        }
	    }, {
	        key: 'entry',
	        value: function entry() {
	            (0, _yquery2.default)('.login-form').removeClass('hide');
	            (0, _yquery2.default)('.register-form').addClass('hide');
	            (0, _yquery2.default)('.panfish').removeClass('hide');
	            (0, _yquery2.default)('input[name="loginAccount"]').get(0).focus();
	            this.activeEle();
	        }
	    }, {
	        key: 'useEvent',
	        value: function useEvent(event) {
	            var events = _eventUtil2.default.getEvent(event);
	            var target = _eventUtil2.default.getTarget(events);
	            if (target.className.indexOf('close-btn') > -1) {
	                this.closeLogin();
	            } else if (target.className.indexOf('login-btn') > -1) {
	                this.openLogin();
	            } else if (target.className.indexOf('register') > -1) {
	                this.register();
	            } else if (target.className.indexOf('entry') > -1) {
	                this.entry();
	            } else if (target.id === 'register') {
	                this.clickResgister();
	            } else if (target.id === 'login') {
	                this.clickLogin();
	            }
	            this.activeEle();
	        }
	    }, {
	        key: 'activeEle',
	        value: function activeEle() {
	            var events = _eventUtil2.default.getEvent(event);
	            var code = events.keyCode;
	            var act = document.activeElement;
	            if (events.type === 'keyup' && code !== 9) {
	                return;
	            }
	            if (act.name === 'loginAccount') {
	                (0, _yquery2.default)('.normal').css({ display: 'none' });
	                (0, _yquery2.default)('.blindfold').css({ display: 'none' });
	                (0, _yquery2.default)('.greeting').css({ display: 'block' });
	            } else if (act.name === 'loginPassword') {
	                (0, _yquery2.default)('.normal').css({ display: 'none' });
	                (0, _yquery2.default)('.greeting').css({ display: 'none' });
	                (0, _yquery2.default)('.blindfold').css({ display: 'block' });
	            } else {
	                (0, _yquery2.default)('.greeting').css({ display: 'none' });
	                (0, _yquery2.default)('.blindfold').css({ display: 'none' });
	                (0, _yquery2.default)('.normal').css({ display: 'block' });
	            }
	        }
	    }]);

	    return Login;
	}();

	exports.default = Login;

/***/ }),

/***/ 335:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	__webpack_require__(336);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/* {credentials: 'include'}  option 请求带入cookie信息
	omit: 默认值，忽略cookie的发送
	same-origin: 表示cookie只能同域发送，不能跨域发送
	include: cookie既可以同域发送，也可以跨域发送 */

	/**
	 * 
	method: 请求使用的方法，如 GET、POST。
	headers: 请求的头信息，形式为 Headers 的对象或包含 ByteString 值的对象字面量。
	body: 请求的 body 信息：可能是一个 Blob、BufferSource、FormData、URLSearchParams 或者 USVString 对象。注意 GET 或 HEAD 方法的请求不能包含 body 信息。
	mode: 请求的模式，如 cors、 no-cors 或者 same-origin。
	credentials: 请求的 credentials，如 omit、same-origin 或者 include。为了在当前域名内自动发送 cookie ， 必须提供这个选项， 从 Chrome 50 开始， 这个属性也可以接受 FederatedCredential 实例或是一个 PasswordCredential 实例。
	cache:  请求的 cache 模式: default 、 no-store 、 reload 、 no-cache 、 force-cache 或者 only-if-cached 。
	redirect: 可用的 redirect 模式: follow (自动重定向), error (如果产生重定向将自动终止并且抛出一个错误), 或者 manual (手动处理重定向). 在Chrome中，Chrome 47之前的默认值是 follow，从 Chrome 47开始是 manual。
	referrer: 一个 USVString 可以是 no-referrer、client或一个 URL。默认是 client。
	referrerPolicy: Specifies the value of the referer HTTP header. May be one of no-referrer、 no-referrer-when-downgrade、 origin、 origin-when-cross-origin、 unsafe-url 。
	integrity: 包括请求的  subresource integrity 值 （ 例如： sha256-BpfBw7ivV8q2jLiT13fxDYAe2tJllusRSZ273h2nFSE=）。
	 */

	/**
	 * 
	 *fetch(url, {
	  method: "POST",
	  body: JSON.stringify(data),
	  headers: {
	    "Content-Type": "application/json"
	  },
	  credentials: "same-origin"
	}).then(function(response) {
	  response.status     //=> number 100–599
	  response.statusText //=> String
	  response.headers    //=> Headers
	  response.url        //=> String

	  response.text().then(function(responseText) { ... })
	}, function(error) {
	  error.message //=> String
	})
	 */
	var oldFetchfn = fetch; //拦截原始的fetch方法

	var __defaultOptions = {
	    body: "",
	    method: 'GET',
	    mode: 'cors',
	    cache: 'default',
	    credentials: 'include',
	    headers: function () {
	        var heads = {};
	        heads['Content-Type'] = "application/json";
	        return heads;
	    }()
	};

	function checkStatus(response) {
	    if (response.status >= 200 && response.status < 300) {
	        return response;
	    }
	    var error = new Error(response.statusText);
	    error.response = response;
	    throw error;
	}
	function parseJSON(response) {
	    return response.json();
	}
	function request(url, options) {
	    var opt = options || {};
	    return oldFetchfn(url, options).then(checkStatus).then(parseJSON).then(function (data) {
	        return data;
	    }).catch(function (err) {
	        return err;
	    });
	}
	/**
	 * //定义新的fetch方法，封装原有的fetch方法
	 * url 请求地址
	 * body 请求参数
	 * config 配置数据
	 */
	window.fetch = function (option) {
	    var fetchPromise = void 0; //定义的请求
	    var config = {}; //传给后端的参数
	    if (option.url instanceof Array) {
	        var ajaxArr = [];
	        for (var i = 0; i < option.url.length; i++) {
	            Object.assign(config, __defaultOptions);
	            config.body = JSON.stringify(option.body[i]);
	            var res = request(option.url[i], config);
	            ajaxArr.push(res);
	        }
	        fetchPromise = Promise.all(ajaxArr);
	    } else {
	        Object.assign(config, __defaultOptions);
	        config.body = JSON.stringify(option.body);
	        fetchPromise = request(option.url, config);
	    }
	    if (!config.timeout) {
	        config.timeout = 1000 * 60; //设置默认超时时间
	    }
	    var timeoutPromise = new Promise(function (resolve, reject) {
	        setTimeout(function () {
	            reject(new Error("请求超时"));
	        }, config.timeout);
	    });
	    var p = Promise.race([fetchPromise, timeoutPromise]);
	    return p;
	};

	var Ajax = function () {
	    function Ajax() {
	        _classCallCheck(this, Ajax);
	    }

	    _createClass(Ajax, [{
	        key: 'post',
	        value: function post(option) {
	            __defaultOptions.method = "POST";
	            return fetch(option);
	        }
	    }, {
	        key: 'get',
	        value: function get(option) {
	            __defaultOptions.method = "GET";
	            return fetch(option);
	        }
	    }]);

	    return Ajax;
	}();

	exports.default = new Ajax();

/***/ }),

/***/ 336:
/***/ (function(module, exports) {

	'use strict';

	(function (self) {
	  'use strict';

	  if (self.fetch) {
	    return;
	  }

	  var support = {
	    searchParams: 'URLSearchParams' in self,
	    iterable: 'Symbol' in self && 'iterator' in Symbol,
	    blob: 'FileReader' in self && 'Blob' in self && function () {
	      try {
	        new Blob();
	        return true;
	      } catch (e) {
	        return false;
	      }
	    }(),
	    formData: 'FormData' in self,
	    arrayBuffer: 'ArrayBuffer' in self
	  };

	  if (support.arrayBuffer) {
	    var viewClasses = ['[object Int8Array]', '[object Uint8Array]', '[object Uint8ClampedArray]', '[object Int16Array]', '[object Uint16Array]', '[object Int32Array]', '[object Uint32Array]', '[object Float32Array]', '[object Float64Array]'];

	    var isDataView = function isDataView(obj) {
	      return obj && DataView.prototype.isPrototypeOf(obj);
	    };

	    var isArrayBufferView = ArrayBuffer.isView || function (obj) {
	      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
	    };
	  }

	  function normalizeName(name) {
	    if (typeof name !== 'string') {
	      name = String(name);
	    }
	    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
	      throw new TypeError('Invalid character in header field name');
	    }
	    return name.toLowerCase();
	  }

	  function normalizeValue(value) {
	    if (typeof value !== 'string') {
	      value = String(value);
	    }
	    return value;
	  }

	  // Build a destructive iterator for the value list
	  function iteratorFor(items) {
	    var iterator = {
	      next: function next() {
	        var value = items.shift();
	        return { done: value === undefined, value: value };
	      }
	    };

	    if (support.iterable) {
	      iterator[Symbol.iterator] = function () {
	        return iterator;
	      };
	    }

	    return iterator;
	  }

	  function Headers(headers) {
	    this.map = {};

	    if (headers instanceof Headers) {
	      headers.forEach(function (value, name) {
	        this.append(name, value);
	      }, this);
	    } else if (Array.isArray(headers)) {
	      headers.forEach(function (header) {
	        this.append(header[0], header[1]);
	      }, this);
	    } else if (headers) {
	      Object.getOwnPropertyNames(headers).forEach(function (name) {
	        this.append(name, headers[name]);
	      }, this);
	    }
	  }

	  Headers.prototype.append = function (name, value) {
	    name = normalizeName(name);
	    value = normalizeValue(value);
	    var oldValue = this.map[name];
	    this.map[name] = oldValue ? oldValue + ',' + value : value;
	  };

	  Headers.prototype['delete'] = function (name) {
	    delete this.map[normalizeName(name)];
	  };

	  Headers.prototype.get = function (name) {
	    name = normalizeName(name);
	    return this.has(name) ? this.map[name] : null;
	  };

	  Headers.prototype.has = function (name) {
	    return this.map.hasOwnProperty(normalizeName(name));
	  };

	  Headers.prototype.set = function (name, value) {
	    this.map[normalizeName(name)] = normalizeValue(value);
	  };

	  Headers.prototype.forEach = function (callback, thisArg) {
	    for (var name in this.map) {
	      if (this.map.hasOwnProperty(name)) {
	        callback.call(thisArg, this.map[name], name, this);
	      }
	    }
	  };

	  Headers.prototype.keys = function () {
	    var items = [];
	    this.forEach(function (value, name) {
	      items.push(name);
	    });
	    return iteratorFor(items);
	  };

	  Headers.prototype.values = function () {
	    var items = [];
	    this.forEach(function (value) {
	      items.push(value);
	    });
	    return iteratorFor(items);
	  };

	  Headers.prototype.entries = function () {
	    var items = [];
	    this.forEach(function (value, name) {
	      items.push([name, value]);
	    });
	    return iteratorFor(items);
	  };

	  if (support.iterable) {
	    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
	  }

	  function consumed(body) {
	    if (body.bodyUsed) {
	      return Promise.reject(new TypeError('Already read'));
	    }
	    body.bodyUsed = true;
	  }

	  function fileReaderReady(reader) {
	    return new Promise(function (resolve, reject) {
	      reader.onload = function () {
	        resolve(reader.result);
	      };
	      reader.onerror = function () {
	        reject(reader.error);
	      };
	    });
	  }

	  function readBlobAsArrayBuffer(blob) {
	    var reader = new FileReader();
	    var promise = fileReaderReady(reader);
	    reader.readAsArrayBuffer(blob);
	    return promise;
	  }

	  function readBlobAsText(blob) {
	    var reader = new FileReader();
	    var promise = fileReaderReady(reader);
	    reader.readAsText(blob);
	    return promise;
	  }

	  function readArrayBufferAsText(buf) {
	    var view = new Uint8Array(buf);
	    var chars = new Array(view.length);

	    for (var i = 0; i < view.length; i++) {
	      chars[i] = String.fromCharCode(view[i]);
	    }
	    return chars.join('');
	  }

	  function bufferClone(buf) {
	    if (buf.slice) {
	      return buf.slice(0);
	    } else {
	      var view = new Uint8Array(buf.byteLength);
	      view.set(new Uint8Array(buf));
	      return view.buffer;
	    }
	  }

	  function Body() {
	    this.bodyUsed = false;

	    this._initBody = function (body) {
	      this._bodyInit = body;
	      if (!body) {
	        this._bodyText = '';
	      } else if (typeof body === 'string') {
	        this._bodyText = body;
	      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
	        this._bodyBlob = body;
	      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
	        this._bodyFormData = body;
	      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	        this._bodyText = body.toString();
	      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
	        this._bodyArrayBuffer = bufferClone(body.buffer);
	        // IE 10-11 can't handle a DataView body.
	        this._bodyInit = new Blob([this._bodyArrayBuffer]);
	      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
	        this._bodyArrayBuffer = bufferClone(body);
	      } else {
	        throw new Error('unsupported BodyInit type');
	      }

	      if (!this.headers.get('content-type')) {
	        if (typeof body === 'string') {
	          this.headers.set('content-type', 'text/plain;charset=UTF-8');
	        } else if (this._bodyBlob && this._bodyBlob.type) {
	          this.headers.set('content-type', this._bodyBlob.type);
	        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
	        }
	      }
	    };

	    if (support.blob) {
	      this.blob = function () {
	        var rejected = consumed(this);
	        if (rejected) {
	          return rejected;
	        }

	        if (this._bodyBlob) {
	          return Promise.resolve(this._bodyBlob);
	        } else if (this._bodyArrayBuffer) {
	          return Promise.resolve(new Blob([this._bodyArrayBuffer]));
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as blob');
	        } else {
	          return Promise.resolve(new Blob([this._bodyText]));
	        }
	      };

	      this.arrayBuffer = function () {
	        if (this._bodyArrayBuffer) {
	          return consumed(this) || Promise.resolve(this._bodyArrayBuffer);
	        } else {
	          return this.blob().then(readBlobAsArrayBuffer);
	        }
	      };
	    }

	    this.text = function () {
	      var rejected = consumed(this);
	      if (rejected) {
	        return rejected;
	      }

	      if (this._bodyBlob) {
	        return readBlobAsText(this._bodyBlob);
	      } else if (this._bodyArrayBuffer) {
	        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
	      } else if (this._bodyFormData) {
	        throw new Error('could not read FormData body as text');
	      } else {
	        return Promise.resolve(this._bodyText);
	      }
	    };

	    if (support.formData) {
	      this.formData = function () {
	        return this.text().then(decode);
	      };
	    }

	    this.json = function () {
	      return this.text().then(JSON.parse);
	    };

	    return this;
	  }

	  // HTTP methods whose capitalization should be normalized
	  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

	  function normalizeMethod(method) {
	    var upcased = method.toUpperCase();
	    return methods.indexOf(upcased) > -1 ? upcased : method;
	  }

	  function Request(input, options) {
	    options = options || {};
	    var body = options.body;

	    if (input instanceof Request) {
	      if (input.bodyUsed) {
	        throw new TypeError('Already read');
	      }
	      this.url = input.url;
	      this.credentials = input.credentials;
	      if (!options.headers) {
	        this.headers = new Headers(input.headers);
	      }
	      this.method = input.method;
	      this.mode = input.mode;
	      if (!body && input._bodyInit != null) {
	        body = input._bodyInit;
	        input.bodyUsed = true;
	      }
	    } else {
	      this.url = String(input);
	    }

	    this.credentials = options.credentials || this.credentials || 'omit';
	    if (options.headers || !this.headers) {
	      this.headers = new Headers(options.headers);
	    }
	    this.method = normalizeMethod(options.method || this.method || 'GET');
	    this.mode = options.mode || this.mode || null;
	    this.referrer = null;

	    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
	      throw new TypeError('Body not allowed for GET or HEAD requests');
	    }
	    this._initBody(body);
	  }

	  Request.prototype.clone = function () {
	    return new Request(this, { body: this._bodyInit });
	  };

	  function decode(body) {
	    var form = new FormData();
	    body.trim().split('&').forEach(function (bytes) {
	      if (bytes) {
	        var split = bytes.split('=');
	        var name = split.shift().replace(/\+/g, ' ');
	        var value = split.join('=').replace(/\+/g, ' ');
	        form.append(decodeURIComponent(name), decodeURIComponent(value));
	      }
	    });
	    return form;
	  }

	  function parseHeaders(rawHeaders) {
	    var headers = new Headers();
	    // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
	    // https://tools.ietf.org/html/rfc7230#section-3.2
	    var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ');
	    preProcessedHeaders.split(/\r?\n/).forEach(function (line) {
	      var parts = line.split(':');
	      var key = parts.shift().trim();
	      if (key) {
	        var value = parts.join(':').trim();
	        headers.append(key, value);
	      }
	    });
	    return headers;
	  }

	  Body.call(Request.prototype);

	  function Response(bodyInit, options) {
	    if (!options) {
	      options = {};
	    }

	    this.type = 'default';
	    this.status = options.status === undefined ? 200 : options.status;
	    this.ok = this.status >= 200 && this.status < 300;
	    this.statusText = 'statusText' in options ? options.statusText : 'OK';
	    this.headers = new Headers(options.headers);
	    this.url = options.url || '';
	    this._initBody(bodyInit);
	  }

	  Body.call(Response.prototype);

	  Response.prototype.clone = function () {
	    return new Response(this._bodyInit, {
	      status: this.status,
	      statusText: this.statusText,
	      headers: new Headers(this.headers),
	      url: this.url
	    });
	  };

	  Response.error = function () {
	    var response = new Response(null, { status: 0, statusText: '' });
	    response.type = 'error';
	    return response;
	  };

	  var redirectStatuses = [301, 302, 303, 307, 308];

	  Response.redirect = function (url, status) {
	    if (redirectStatuses.indexOf(status) === -1) {
	      throw new RangeError('Invalid status code');
	    }

	    return new Response(null, { status: status, headers: { location: url } });
	  };

	  self.Headers = Headers;
	  self.Request = Request;
	  self.Response = Response;

	  self.fetch = function (input, init) {
	    return new Promise(function (resolve, reject) {
	      var request = new Request(input, init);
	      var xhr = new XMLHttpRequest();

	      xhr.onload = function () {
	        var options = {
	          status: xhr.status,
	          statusText: xhr.statusText,
	          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
	        };
	        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
	        var body = 'response' in xhr ? xhr.response : xhr.responseText;
	        resolve(new Response(body, options));
	      };

	      xhr.onerror = function () {
	        reject(new TypeError('Network request failed'));
	      };

	      xhr.ontimeout = function () {
	        reject(new TypeError('Network request failed'));
	      };

	      xhr.open(request.method, request.url, true);

	      if (request.credentials === 'include') {
	        xhr.withCredentials = true;
	      } else if (request.credentials === 'omit') {
	        xhr.withCredentials = false;
	      }

	      if ('responseType' in xhr && support.blob) {
	        xhr.responseType = 'blob';
	      }

	      request.headers.forEach(function (value, name) {
	        xhr.setRequestHeader(name, value);
	      });

	      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
	    });
	  };
	  self.fetch.polyfill = true;
	})(typeof self !== 'undefined' ? self : undefined);

/***/ }),

/***/ 337:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //事件相关方法


	var _client = __webpack_require__(338);

	var _client2 = _interopRequireDefault(_client);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var client = (0, _client2.default)();

	var EventUntil = function () {
	    function EventUntil() {
	        _classCallCheck(this, EventUntil);
	    }

	    _createClass(EventUntil, [{
	        key: 'addHandler',

	        /**
	         * 兼容IE和其他浏览器的事件添加方法，
	         * @param {[object]} element [元素对象]
	         * @param {[string]} type    [事件类型 click等]
	         * @param {[function]} handler [操作函数]
	         */
	        value: function addHandler(element, type, handler) {
	            // 标准方法
	            if (element.addEventListener) {
	                // false表示冒泡
	                element.addEventListener(type, handler, false);
	            } else if (element.attachEvent) {
	                element.attachEvent('on' + type, handler);
	            } else {
	                // Dom0级事件
	                element['on' + type] = handler;
	            }
	        }
	    }, {
	        key: 'removeHandler',
	        value: function removeHandler(element, type, handler) {
	            if (element.removeEventListener) {
	                element.removeEventListener(type, handler);
	            } else if (element.detachEvent) {
	                element.detachEvent('on' + type, handler);
	            } else {
	                // Dom0级移除事件
	                element['on' + type] == null;
	            }
	        }
	        // 获取事件IE和w3c的不同

	    }, {
	        key: 'getEvent',
	        value: function getEvent(event) {
	            return event ? event : window.event;
	        }
	        // 事件的目标,就是指点在哪里

	    }, {
	        key: 'getTarget',
	        value: function getTarget(event) {
	            return event.target || event.srcElement;
	        }
	    }, {
	        key: 'preventDefault',
	        value: function preventDefault(event) {
	            if (event.preventDefault) {
	                // 阻止默认行为
	                event.preventDefault();
	            } else {
	                // IE阻止默认行为
	                event.returnValue = false;
	            }
	        }
	    }, {
	        key: 'stopPropagation',
	        value: function stopPropagation(event) {
	            if (event.stopPropagation) {
	                event.stopPropagation();
	            } else {
	                // IE取消冒泡
	                event.cancelBubble = true;
	            }
	        }
	        // 已经兼容了IE8和以下浏览器

	    }, {
	        key: 'getPageX',
	        value: function getPageX(event) {
	            var pagex = 0;

	            if (event.pageX === undefined) {
	                pagex = event.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft);
	            } else {
	                pagex = event.pageX;
	            }
	            return pagex;
	        }
	    }, {
	        key: 'getPageY',
	        value: function getPageY(event) {
	            var pagey = 0;
	            if (event.pageY === undefined) {
	                pagey = event.clientY + (document.documentElement.scrollTop || document.body.scrollTop);
	            } else {
	                pagey = event.pageY;
	            }
	            return pagey;
	        }
	    }, {
	        key: 'getRelatedTarget',
	        value: function getRelatedTarget(event) {
	            if (event.relatedTarget) {
	                return event.relatedTarget;
	            } else if (event.toElement) {
	                return event.toElement;
	            } else if (event.fromElement) {
	                return event.fromElement;
	            } else {
	                return null;
	            }
	        }
	    }, {
	        key: 'getWheelDelta',
	        value: function getWheelDelta(event) {
	            // 向上滚蛋为+120，向下滚动为-120
	            if (event.wheelDelta) {
	                // IE和其他浏览器支持mousewheel事件
	                return client.engine.opera && client.engine.opera < 9.5 ? -event.wheelDelta : event.wheelDelta;
	            } else {
	                // 火狐支持一个DOMMouseScroll事件
	                return -event.detail * 40;
	            }
	        }
	    }, {
	        key: 'getCharCode',
	        value: function getCharCode(event) {
	            if (typeof event.charCode == 'number') {
	                return event.charCode;
	            } else {
	                return event.keyCode;
	            }
	        }
	    }]);

	    return EventUntil;
	}();

	exports.default = new EventUntil();

	// //实例

	// document.onclick = function (event) {
	//     let e = eventUntil.getEvent(event);
	//     alert(eventUntil.getPageX(event) + ' ' + eventUntil.getPageY(event));
	// }
	// let mouse = document.getElementById('mouseover');
	// eventUntil.addHandler(mouse, 'mouseover', function (event) {
	//     let event = eventUntil.getEvent(event);
	//     let related = eventUntil.getRelatedTarget(event);
	//     alert(related);
	// });

	// eventUntil.addHandler(mouse, 'mouseout', function (event) {
	//     let event = eventUntil.getEvent(event);
	//     let related = eventUntil.getRelatedTarget(event);
	//     alert(related);
	// });

	// eventUntil.addHandler(document, 'click', function (event) {
	//     let event = eventUntil.getEvent(event);
	//     let btnValue = eventUntil.getButton(event);
	//     eventUntil.preventDefault(event);
	//     switch (btnValue) {
	//         case 0:
	//             alert('左键');
	//             break;
	//         case 1:
	//             alert('中键');
	//             break;
	//         case 2:
	//             alert('右键');
	//             break;
	//     }
	// });
	// 谷歌等其他滚动事件
	// eventUntil.addHandler(document, 'mousewheel', function (event) {
	//     let event = eventUntil.getEvent(event);
	//     alert(event.wheelDelta);
	// });
	// 火狐浏览器滚动事件
	// eventUntil.addHandler(window, 'DOMMouseScroll', function (event) {
	//     let event = eventUntil.getEvent(event);
	//     let detail = eventUntil.getWheelDelta(event);
	//     alert(detail);
	// });

	// eventUntil.addHandler(document.getElementById('keypress'), 'keypress', function (event) {
	//     let event = eventUntil.getEvent(event);
	//     let charcode = eventUntil.getCharCode(event);
	//     alert(charcode);
	// });

	// eventUntil.addHandler(window, 'scroll', function (event) {
	//     // 表示标准模式
	//     if (document.compatMode == 'CSS1Compat') {
	//         document.documentElement.scrollTop = '200';
	//     } else {
	//         alert(document.body.scrollLeft);
	//     }
	// });

/***/ }),

/***/ 338:
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//客户端相关检测 浏览器、系统、渲染引擎
	var Client = function Client() {
	    var engine = { //渲染引擎
	        ie: 0,
	        gecko: 0,
	        webkit: 0,
	        khtml: 0,
	        opera: 0,
	        ver: null
	    };
	    var browser = { //浏览器
	        ie: 0,
	        firefox: 0,
	        safari: 0,
	        konq: 0,
	        opera: 0,
	        chrome: 0,

	        ver: null
	    };
	    var system = { //系统平台
	        win: false,
	        mac: false,
	        x11: false,

	        //移动设备
	        iphone: false,
	        ipod: false,
	        ipad: false,
	        android: false,
	        nokiaN: false,
	        winMobile: false,

	        //游戏系统
	        wii: false,
	        ps: false
	    };

	    var ua = navigator.userAgent;
	    if (window.opera) {
	        engine.ver = browser.ver = window.opera.version();
	        engine.opera = browser.opera = parseFloat(engine.ver);
	    } else if (/AppleWebKit\/(\S+)/.test(ua)) {
	        engine.ver = RegExp["$1"];
	        engine.webkit = parseFloat(engine.ver);

	        if (/Chrome\/(\S+)/.test(ua)) {
	            browser.ver = RegExp["$1"];
	            browser.chrome = parseFloat(browser.ver);
	        } else if (/Version\/(\S+)/.test(ua)) {
	            browser.ver = RegExp["$1"];
	            browser.safari = parseFloat(browser.ver);
	        } else {
	            //近似地确定版本号
	            var safariVersion = 1;
	            if (engine.webkit < 100) {
	                safariVersion = 1;
	            } else if (engine.webkit < 312) {
	                safariVersion = 1.2;
	            } else if (engine.webkit < 412) {
	                safariVersion = 1.3;
	            } else {
	                safariVersion = 2;
	            }
	            browser.safari = browser.ver = safariVersion;
	        }
	    } else if (/KHTML\/(\S+)/.test(ua) || /Konqueror\/([^;]+)/.test(ua)) {
	        engine.ver = browser.ver = RegExp["$1"];
	        engine.khtml = browser.konq = parseFloat(engine.ver);
	    } else if (/rv:([^\)]+)\) Gecko\/\d{8}/.test(ua)) {
	        engine.ver = RegExp["$1"];
	        engine.gecko = parseFloat(engine.ver);

	        if (/Firefox\/(\S+)/.test(ua)) {
	            browser.ver = RegExp["$1"];
	            browser.firefox = parseFloat(browser.ver);
	        }
	    } else if (/MSIE ([^;]+)/.test(ua)) {
	        engine.ver = browser.ver = RegExp["$1"];
	        engine.ie = browser.ie = parseFloat(engine.ver);
	    }

	    var p = navigator.platform;
	    system.win = p.indexOf("Win") == 0;
	    system.mac = p.indexOf("Mac") == 0;
	    system.x11 = p == "X11" || p.indexOf("Linux") == 0;

	    if (system.win) {
	        if (/Win(?:dows )?([^do]{2})\s?(\d+\.\d+)?/.test(ua)) {
	            if (RegExp["$1"] == "NT") {
	                switch (RegExp["$2"]) {
	                    case "5.0":
	                        system.win = "2000";
	                        break;
	                    case "5.1":
	                        system.win = "XP";
	                        break;
	                    case "6.0":
	                        system.win = "Vista";
	                        break;
	                    case "6.1":
	                        system.win = "7";
	                        break;
	                    default:
	                        system.win = "NT";
	                        break;
	                }
	            } else if (RegExp["$1"] == '9x') {
	                system.win = "ME";
	            } else {
	                system.win = RegExp["$1"];
	            }
	        }
	    }

	    system.iphone = ua.indexOf("iPhone") > -1;
	    system.ipod = ua.indexOf("iPod") > -1;
	    system.ipad = ua.indexOf("iPad") > -1;
	    system.nokiaN = ua.indexOf("NokiaN") > -1;
	    if (system.win == "CE") {
	        system.winMobile = system.win;
	    } else if (system.win == "Ph") {
	        if (/Windows Phone OS (\d+\.\d+)/.test(ua)) {
	            system.win = "Phone";
	            system.winMobile = parseFloat(RegExp["$1"]);
	        }
	    }
	    if (system.mac && ua.indexOf("Mobile") > -1) {
	        if (/CPU (?:iPhone )?OS (\d+_\d+)/.test(ua)) {
	            system.ios = parseFloat(RegExp["$1"].replace("_", "."));
	        } else {
	            system.ios = 2; //近似
	        }
	    }
	    if (/Android (\d+\.\d+)/.test(ua)) {
	        system.android = parseFloat(RegExp["$1"]);
	    }
	    system.wii = ua.indexOf("Wii") > -1;
	    system.ps = /playstation/i.test(ua);

	    return {
	        engine: engine,
	        browser: browser,
	        system: system
	    };
	};

	exports.default = Client;

/***/ }),

/***/ 339:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _ajax = __webpack_require__(335);

	var _ajax2 = _interopRequireDefault(_ajax);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Interface = function () {
	    function Interface() {
	        _classCallCheck(this, Interface);
	    }

	    _createClass(Interface, [{
	        key: 'loginAjax',
	        value: function loginAjax(body) {
	            return _ajax2.default.post({ url: '/users/login', "body": body });
	        }
	    }, {
	        key: 'registerAjax',
	        value: function registerAjax(body) {
	            return _ajax2.default.post({ url: '/users/register', "body": body });
	        }
	    }]);

	    return Interface;
	}();

	exports.default = Interface;

/***/ }),

/***/ 340:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _base = __webpack_require__(331);

	var _base2 = _interopRequireDefault(_base);

	var _login = __webpack_require__(334);

	var _login2 = _interopRequireDefault(_login);

	var _yquery = __webpack_require__(332);

	var _yquery2 = _interopRequireDefault(_yquery);

	var _interface = __webpack_require__(339);

	var _interface2 = _interopRequireDefault(_interface);

	var _eventUtil = __webpack_require__(337);

	var _eventUtil2 = _interopRequireDefault(_eventUtil);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var copyProperties = function copyProperties(target, source) {
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	        for (var _iterator = Reflect.ownKeys(source)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var key = _step.value;

	            if (key !== 'constructor' && key !== 'prototype' && key !== 'name') {
	                var desc = Object.getOwnPropertyDescriptor(source, key);
	                Object.defineProperty(target, key, desc);
	            }
	        }
	    } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	                _iterator.return();
	            }
	        } finally {
	            if (_didIteratorError) {
	                throw _iteratorError;
	            }
	        }
	    }
	};
	var mix = function mix() {
	    var Mix = function Mix() {
	        _classCallCheck(this, Mix);
	    };

	    for (var _len = arguments.length, mixins = Array(_len), _key = 0; _key < _len; _key++) {
	        mixins[_key] = arguments[_key];
	    }

	    var _iteratorNormalCompletion2 = true;
	    var _didIteratorError2 = false;
	    var _iteratorError2 = undefined;

	    try {
	        for (var _iterator2 = mixins[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	            var mixin = _step2.value;

	            copyProperties(Mix, mixin);
	            copyProperties(Mix.prototype, mixin.prototype);
	        }
	    } catch (err) {
	        _didIteratorError2 = true;
	        _iteratorError2 = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                _iterator2.return();
	            }
	        } finally {
	            if (_didIteratorError2) {
	                throw _iteratorError2;
	            }
	        }
	    }

	    return Mix;
	};
	var log = console.log.bind(console);

	var Read = function (_mix) {
	    _inherits(Read, _mix);

	    function Read() {
	        _classCallCheck(this, Read);

	        // this.initStatus();
	        var _this2 = _possibleConstructorReturn(this, (Read.__proto__ || Object.getPrototypeOf(Read)).call(this));

	        _this2.initLoginEvent();
	        // this.initEVent()
	        return _this2;
	    }

	    _createClass(Read, [{
	        key: 'initStatus',
	        value: function initStatus() {}
	    }, {
	        key: 'initEVent',
	        value: function initEVent() {
	            var _this = this;
	        }
	    }]);

	    return Read;
	}(mix(_login2.default, _base2.default, _interface2.default));

	exports.default = Read;


	var read = new Read();
	window.read = read;
	window.$ = _yquery2.default;

/***/ })

/******/ });