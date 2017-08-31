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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ 3:
/***/ (function(module, exports) {

$('.component').ready(function(){

	const productMaxAmount = 10;
	var amount = 0;

	// init
	$('.component__adding__amount').val(amount);
	$('.component__adding__amount').attr('max', productMaxAmount)
	
	// +1 to basket
	$('.component__adding__button_plus').on('click', function(){

		amount = $('.component__adding__amount').val();
		amount++

		amountChange(amount);

	})

	// -1 to basket
	$('.component__adding__button_minus').on('click', function(){

		let amount = $('.component__adding__amount').val();
		amount--

		amountChange(amount)

	})

	$('.component__adding__amount').change(function(){
		if ($('.component__adding__amount').val() >= productMaxAmount) {

			$('.component__adding__alt').text(`Maximálně možní počet zboží je ${productMaxAmount}`)
			tooltip('visible', '1')

		} else tooltip('hidden', '0')
	})

	//show or hide tooltip function
	function tooltip(visible, opacity){
		
		$('.component__adding__alt').css({
			'visibility': visible,
			'opacity': opacity
		})
	
	}

	//amount change handler
	function amountChange(amount){

		if (amount > productMaxAmount) {
			//max limit
			amount = productMaxAmount 

			$('.component__adding__alt').text(`Maximálně možní počet zboží je ${productMaxAmount}`)
			
			//show alt tooltip
			tooltip('visible', '1')

		} else if (amount < 1) {

			//min limit
			amount = 0
			tooltip('hidden', '0')

		} else tooltip('hidden', '0')

		$('.component__adding__amount').val(amount);

	}

})

/***/ })

/******/ });