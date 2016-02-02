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
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _canvas = __webpack_require__(1);

	var _canvas2 = _interopRequireDefault(_canvas);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _lenticularfilter = __webpack_require__(2);

	var _lenticularfilter2 = _interopRequireDefault(_lenticularfilter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Canvas = function () {
	  function Canvas() {
	    _classCallCheck(this, Canvas);

	    this.w = window.innerWidth;
	    this.h = window.innerHeight;

	    this.renderer = new PIXI.autoDetectRenderer(this.w, this.h, { backgroundColor: 0x000000 });
	    PIXI.loader.add('static/datas/sprite.json').add('static/images/bg.png').add('static/images/sample.jpg').load(this.loadComplete.bind(this));
	    this.stage = new PIXI.Container();
	    document.getElementById('kv').appendChild(this.renderer.view);
	  }

	  _createClass(Canvas, [{
	    key: 'loadComplete',
	    value: function loadComplete(loader, resources) {
	      // let sp = PIXI.Sprite.fromImage('static/datas/../images/1024-1.jpg');

	      var bg = PIXI.Sprite.fromImage('static/images/bg.png');
	      bg.width = this.w;
	      bg.height = this.h;
	      bg.x = 1;
	      this.gamma = 0;
	      this.stage.addChild(bg);
	      this.f = new _lenticularfilter2.default();
	      // window.requestAnimationFrame(this.render);
	      console.log(this.f);

	      window.addEventListener('deviceorientation', this.orientation.bind(this));
	      this.stage.filters = [this.f];
	      this.render();
	    }
	  }, {
	    key: 'orientation',
	    value: function orientation(event) {
	      // console.log(event.alpha, event.beta, event.gamma);
	      var min = 5;
	      var gamma = event.gamma + 90;
	      var PI = Math.PI / 180;
	      var section = 4;
	      var anglemin = 45;
	      var angle = (180 - anglemin * 2) / (section + 1);
	      var angle2 = angle * 2;
	      for (var i = 0; i < section; i++) {
	        var _anglemin = anglemin + angle * i;
	        var _anglemax = _anglemin + angle2;
	        var v = (Math.max(Math.min(gamma, _anglemax), _anglemin) - _anglemin) / angle2 * 180;
	        this.f.uniforms.offset1.value[i] = Math.sin(v * PI);

	        console.log(angle, angle2, _anglemin, _anglemax, Math.sin(v));

	        // let v = (Math.max(Math.min(gamma, anglemin + angle * (i + 1)), _angle) - _angle) / angle * 180;
	        // console.log(angle, _angle, anglemin + angle * (i + 1), Math.sin(v * PI));
	        // this.f.uniforms.offset1.value[i] = Math.sin(v * PI);
	      }
	      // let g1 = (Math.max(Math.min(gamma, 70), 30) - 30 ) / 40 * 180;
	      // let g2 = (Math.max(Math.min(gamma, 90), 50) - 50 ) / 40 * 180;
	      // let g3 = (Math.max(Math.min(gamma, 110), 70) - 70) / 40 * 180;
	      // let g4 = (Math.max(Math.min(gamma, 130), 90) - 90) / 40 * 180;

	      // console.log(Math.sin(g1 * PI), Math.sin(g2 * PI), Math.sin(g3 * PI));

	      // this.f.uniforms.offset1.value[0] = Math.sin(g1 * PI);
	      // this.f.uniforms.offset1.value[1] = Math.sin(g2 * PI);
	      // this.f.uniforms.offset1.value[2] = Math.sin(g3 * PI);
	      // this.f.uniforms.offset1.value[3] = Math.sin(g4 * PI);
	      // console.log(this.f.uniforms.offset1)
	      // this.f.uniforms.offset.value = gamma / 30;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      // this.f.uniforms.offset.value -= 0.005;
	      // console.log(this.f.uniforms.offset.value);
	      this.renderer.render(this.stage);
	      window.requestAnimationFrame(this.render.bind(this));
	    }
	  }]);

	  return Canvas;
	}();

	var _r = new Canvas();
	exports.default = _r;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var f = __webpack_require__(3);
	// console.log(PIXI.AbstractFilter);

	var LenticularFilter = function (_PIXI$AbstractFilter) {
	  _inherits(LenticularFilter, _PIXI$AbstractFilter);

	  function LenticularFilter(vertexShader, fragmentShader, uniforms) {
	    _classCallCheck(this, LenticularFilter);

	    uniforms = {
	      map: { type: 'sampler2D', value: PIXI.Texture.fromImage('static/images/sample.jpg') },
	      offset1: { type: '4f', value: [0, 0, 0, 0] }
	    };
	    console.log(uniforms);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(LenticularFilter).call(this, vertexShader, f, uniforms));

	    console.log('lenti', _this.applyFilter);

	    return _this;
	  }

	  return LenticularFilter;
	}(PIXI.AbstractFilter);

	exports.default = LenticularFilter;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = "precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform sampler2D map;\nuniform vec4 offset1;\n\nconst float wscale = 0.3125;\nconst float hscale = 0.46875;\nconst vec2 halfcoord = vec2(0.3125, 0.46875);\n\n\n\nvoid main() {\n  vec2 coord = vTextureCoord;\n  // gl_FragColor = texture2D(map, coord + vec2(.5, 0.));\n  gl_FragColor = texture2D(map, coord * halfcoord) * offset1.x;\n  gl_FragColor += texture2D(map, coord * halfcoord + vec2(wscale, 0.)) * offset1.y;\n  gl_FragColor += texture2D(map, coord * halfcoord + vec2(0., hscale)) * offset1.z;\n  gl_FragColor += texture2D(map, coord * halfcoord + halfcoord) * offset1.w;\n  // gl_FragColor += texture2D(map, coord * halfcoord + vec2(.5, 0.));\n}"

/***/ }
/******/ ]);