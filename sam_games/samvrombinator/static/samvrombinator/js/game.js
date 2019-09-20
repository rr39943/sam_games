/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dessin.js":
/*!***********************!*\
  !*** ./src/dessin.js ***!
  \***********************/
/*! exports provided: Dessin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Dessin\", function() { return Dessin; });\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nvar Dessin =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(Dessin, _React$Component);\n\n  function Dessin(props) {\n    _classCallCheck(this, Dessin);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Dessin).call(this, props));\n  }\n\n  _createClass(Dessin, [{\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\"div\", {\n        id: \"dessin\"\n      }, React.createElement(\"img\", {\n        className: \"planete-g planete\",\n        src: \"/static/samvrombinator/img/Blue_Marble_rotating.gif\"\n      }), React.createElement(\"img\", {\n        id: \"fusee-b\",\n        className: \"fusee\",\n        src: \"/static/samvrombinator/img/rocket-space-blue.png\"\n      }), React.createElement(\"img\", {\n        id: \"fusee-r\",\n        className: \"fusee\",\n        src: \"/static/samvrombinator/img/rocket-space-red.png\"\n      }), React.createElement(\"img\", {\n        className: \"planete-d planete\",\n        src: \"/static/samvrombinator/img/mars_r.gif\"\n      }));\n    }\n  }]);\n\n  return Dessin;\n}(React.Component);\n\n\n\n//# sourceURL=webpack:///./src/dessin.js?");

/***/ }),

/***/ "./src/jeu.js":
/*!********************!*\
  !*** ./src/jeu.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mot.js */ \"./src/mot.js\");\n/* harmony import */ var _mots_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mots.js */ \"./src/mots.js\");\n/* harmony import */ var _message_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message.js */ \"./src/message.js\");\n/* harmony import */ var _dessin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dessin.js */ \"./src/dessin.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\nvar Jeu =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(Jeu, _React$Component);\n\n  function Jeu(props) {\n    var _this;\n\n    _classCallCheck(this, Jeu);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Jeu).call(this, props));\n    _this.state = {\n      mots: [],\n      longueur_partie: 1,\n      num_partie: 0,\n      mot: _this.build_mot('vide'),\n      score_joueur: 0,\n      score_ordi: 0,\n      score_perdu: 5,\n      message: '',\n      color: '',\n      fin: false\n    };\n    _this.creer_jeu = _this.creer_jeu.bind(_assertThisInitialized(_this));\n    _this.shuffle_mots = _this.shuffle_mots.bind(_assertThisInitialized(_this));\n    _this.build_mot = _this.build_mot.bind(_assertThisInitialized(_this));\n    _this.handleKeyPress = _this.handleKeyPress.bind(_assertThisInitialized(_this));\n    _this.set_score = _this.set_score.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(Jeu, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      function GetURLParameter(sParam) {\n        var sPageURL = window.location.search.substring(1);\n        var sURLVariables = sPageURL.split('&');\n\n        for (var i = 0; i < sURLVariables.length; i++) {\n          var sParameterName = sURLVariables[i].split('=');\n\n          if (sParameterName[0] == sParam) {\n            return sParameterName[1];\n          }\n        }\n      }\n\n      ;\n      var voc = GetURLParameter('voc_selected');\n      var score_perdu = GetURLParameter('nb_errors') ? parseInt(GetURLParameter('nb_errors')) + 1 : this.state.score_perdu;\n      var fetch_url = voc ? './get_words' + '?voc=' + voc : './get_words';\n      var response = fetch(fetch_url).then(function (response) {\n        return response.json();\n      }).then(function (data) {\n        var list_mots = _this2.shuffle_mots(data['words']);\n\n        if (GetURLParameter('nb_words') && parseInt(GetURLParameter('nb_words')) < list_mots.length) {\n          var longueur_partie = parseInt(GetURLParameter('nb_words'));\n        } else {\n          var longueur_partie = list_mots.length;\n        }\n\n        _this2.setState({\n          mots: list_mots,\n          score_perdu: score_perdu,\n          longueur_partie: longueur_partie\n        });\n\n        _this2.creer_jeu();\n      });\n    }\n  }, {\n    key: \"creer_jeu\",\n    value: function creer_jeu() {\n      this.setState({\n        num_partie: this.state.num_partie + 1,\n        mot: this.build_mot(this.state.mots[this.state.num_partie]),\n        score_joueur: 0,\n        score_ordi: 0\n      }, this.transform_dessin);\n    }\n  }, {\n    key: \"check_score_ordi\",\n    value: function check_score_ordi() {\n      this.transform_dessin();\n\n      if (this.state.score_ordi == this.state.score_perdu) {\n        this.setState({\n          message: 'PERDU !',\n          color: 'rose',\n          mot: this.state.mot.map(function (value, index) {\n            return {\n              carac: value.carac,\n              hide: false\n            };\n          }),\n          fin: true\n        });\n        this.fin_partie();\n      }\n    }\n  }, {\n    key: \"check_score_joueur\",\n    value: function check_score_joueur() {\n      var _this3 = this;\n\n      this.transform_dessin();\n\n      if (this.state.score_joueur === this.state.mot.length) {\n        if (this.state.longueur_partie > this.state.num_partie) {\n          this.setState({\n            message: 'Bravo !',\n            color: 'rose'\n          });\n          setTimeout(function () {\n            _this3.setState({\n              message: '',\n              color: 'rose'\n            });\n\n            _this3.creer_jeu();\n          }, 2000);\n        } else {\n          this.setState({\n            message: 'GAGNÉ !',\n            color: 'rose',\n            fin: true\n          });\n          this.fin_partie();\n        }\n      }\n    }\n  }, {\n    key: \"set_score\",\n    value: function set_score() {\n      var temp_score = this.state.mot.filter(function (value) {\n        return !value.hide;\n      }).length;\n\n      if (this.state.score_joueur < temp_score) {\n        this.setState({\n          score_joueur: temp_score\n        }, this.check_score_joueur);\n      } else {\n        this.setState({\n          score_ordi: this.state.score_ordi + 1\n        }, this.check_score_ordi);\n      }\n    }\n  }, {\n    key: \"transform_dessin\",\n    value: function transform_dessin() {\n      var largeur = jQuery('#dessin').width() - 340;\n      jQuery('#fusee-b').animate({\n        'left': String(largeur / this.state.score_perdu * this.state.score_ordi + 200) + 'px'\n      }, 1000);\n      jQuery('#fusee-r').animate({\n        'left': String(largeur / this.state.mot.length * this.state.score_joueur + 200) + 'px'\n      }, 1000);\n    }\n  }, {\n    key: \"build_mot\",\n    value: function build_mot(mot) {\n      return mot.split('').map(function (value, index) {\n        return {\n          'carac': value,\n          'hide': true\n        };\n      });\n    }\n  }, {\n    key: \"test_key\",\n    value: function test_key(key, carac) {\n      carac = carac.toLowerCase().replace(/[àäâ]/g, \"a\").replace(/[éèêë]/g, \"e\").replace(/[öô]/g, \"o\").replace(/[ùü]/g, \"u\");\n      return carac == key.toLowerCase() ? true : false;\n    }\n  }, {\n    key: \"handleKeyPress\",\n    value: function handleKeyPress(event) {\n      var _this4 = this;\n\n      var pressed_carac = event.key;\n      this.setState({\n        mot: this.state.mot.map(function (value, index) {\n          return {\n            carac: value.carac,\n            hide: !value.hide || _this4.test_key(pressed_carac, value.carac) ? false : true\n          };\n        })\n      });\n      this.set_score();\n    }\n  }, {\n    key: \"fin_partie\",\n    value: function fin_partie() {\n      document.removeEventListener('keypress', this.handleKeyPress);\n      jQuery('#fin').css(\"font-size\", \"100px\");\n    }\n  }, {\n    key: \"shuffle_mots\",\n    value: function shuffle_mots(mots) {\n      var array = new Array();\n      mots.map(function (e) {\n        return array.push(e);\n      });\n\n      for (var i = array.length - 1; i > 0; i--) {\n        var j = Math.floor(Math.random() * (i + 1));\n        var temp = array[i];\n        array[i] = array[j];\n        array[j] = temp;\n      }\n\n      return array;\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\"div\", null, React.createElement(\"div\", {\n        className: \"container mt-4\"\n      }, React.createElement(\"div\", {\n        className: \"card\"\n      }, React.createElement(_mot_js__WEBPACK_IMPORTED_MODULE_0__[\"Mot\"], {\n        mot: this.state.mot,\n        handleKeyPress: this.handleKeyPress\n      }))), React.createElement(_message_js__WEBPACK_IMPORTED_MODULE_2__[\"Message\"], {\n        message: this.state.message\n      }), React.createElement(_dessin_js__WEBPACK_IMPORTED_MODULE_3__[\"Dessin\"], null));\n    }\n  }]);\n\n  return Jeu;\n}(React.Component);\n\nReactDOM.render(React.createElement(Jeu, null), document.getElementById('root'));\n\n//# sourceURL=webpack:///./src/jeu.js?");

/***/ }),

/***/ "./src/lettre.js":
/*!***********************!*\
  !*** ./src/lettre.js ***!
  \***********************/
/*! exports provided: Lettre */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Lettre\", function() { return Lettre; });\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nvar Lettre =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(Lettre, _React$Component);\n\n  function Lettre(props) {\n    _classCallCheck(this, Lettre);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Lettre).call(this, props));\n  }\n\n  _createClass(Lettre, [{\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\"span\", null, this.props.hide ? '_' : this.props.carac.replace(' ', \"\\xA0\"), \" \");\n    }\n  }]);\n\n  return Lettre;\n}(React.Component);\n\n\n\n//# sourceURL=webpack:///./src/lettre.js?");

/***/ }),

/***/ "./src/message.js":
/*!************************!*\
  !*** ./src/message.js ***!
  \************************/
/*! exports provided: Message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Message\", function() { return Message; });\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nvar Message =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(Message, _React$Component);\n\n  function Message(props) {\n    _classCallCheck(this, Message);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Message).call(this, props));\n  }\n\n  _createClass(Message, [{\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\"div\", {\n        id: \"fin\"\n      }, this.props.message);\n    }\n  }]);\n\n  return Message;\n}(React.Component);\n\n\n\n//# sourceURL=webpack:///./src/message.js?");

/***/ }),

/***/ "./src/mot.js":
/*!********************!*\
  !*** ./src/mot.js ***!
  \********************/
/*! exports provided: Mot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Mot\", function() { return Mot; });\n/* harmony import */ var _lettre_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lettre.js */ \"./src/lettre.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar Mot =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(Mot, _React$Component);\n\n  function Mot(props) {\n    _classCallCheck(this, Mot);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Mot).call(this, props));\n  }\n\n  _createClass(Mot, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      document.addEventListener('keypress', this.props.handleKeyPress);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\"div\", {\n        id: \"mot\"\n      }, React.createElement(\"p\", null, this.props.mot.map(function (value, index) {\n        return React.createElement(_lettre_js__WEBPACK_IMPORTED_MODULE_0__[\"Lettre\"], {\n          key: index,\n          carac: value.carac,\n          hide: value.hide\n        });\n      })));\n    }\n  }]);\n\n  return Mot;\n}(React.Component);\n\n\n\n//# sourceURL=webpack:///./src/mot.js?");

/***/ }),

/***/ "./src/mots.js":
/*!*********************!*\
  !*** ./src/mots.js ***!
  \*********************/
/*! exports provided: mots */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mots\", function() { return mots; });\n// const mots = ['arbre',\n// 'sac',\n// 'Samuel',\n// 'Timothée',\n// 'fusée',\n// 'planète',\n// 'lune',\n// 'poule',\n// 'toupie',\n// 'terre',\n// 'mouton',\n// 'cheval',\n// 'coq',\n// 'pantalon',\n// 'chaussures',\n// 'garage',\n// 'Raphaël',\n// 'Vanessa',\n// 'ordinateur',\n// 'étoile',\n// 'soleil',\n// 'casque',\n// 'gants',\n// 'usine',\n// 'école',\n// 'bateau',\n// 'vaisseau',\n// 'voiture',\n// 'mains',\n// 'pieds',\n// 'bouteille',\n// 'montagne',\n// 'train',\n// 'table',\n// 'chaise',\n// 'film',\n// 'voler',\n// 'dormir',\n// 'jouer',\n// 'jeu'\n// ]\n// const mots = ['reine',\n// 'chaise',\n// 'laine',\n// 'maison',\n// 'neige'];\n// const mots = ['blanc',\n// 'manteau',\n// 'ruban',\n// 'je',\n// 'mange',\n// 'diamant',\n// 'kangourou'];\n// const mots = ['élève',\n// 'élèves',\n// 'rentrée',\n// 'école',\n// 'agenda',\n// 'sac'];\nvar mots = ['les sacs'];\n\n\n//# sourceURL=webpack:///./src/mots.js?");

/***/ }),

/***/ "./src/style.less":
/*!************************!*\
  !*** ./src/style.less ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/style.less?");

/***/ }),

/***/ 0:
/*!*******************************************!*\
  !*** multi ./src/jeu.js ./src/style.less ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/jeu.js */\"./src/jeu.js\");\nmodule.exports = __webpack_require__(/*! ./src/style.less */\"./src/style.less\");\n\n\n//# sourceURL=webpack:///multi_./src/jeu.js_./src/style.less?");

/***/ })

/******/ });