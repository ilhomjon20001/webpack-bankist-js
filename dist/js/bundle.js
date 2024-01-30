/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/accaunselektor.js":
/*!***************************************!*\
  !*** ./src/modules/accaunselektor.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _opshibalanse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./opshibalanse */ "./src/modules/opshibalanse.js");
/* harmony import */ var _total__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./total */ "./src/modules/total.js");
/* harmony import */ var _movmentrider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movmentrider */ "./src/modules/movmentrider.js");
/* harmony import */ var _loginPGage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loginPGage */ "./src/modules/loginPGage.js");
/* harmony import */ var _nowdata__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nowdata */ "./src/modules/nowdata.js");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login */ "./src/modules/login.js");







function accSelekt (array){
    array.forEach((event) => {
      if(event.pin == _login__WEBPACK_IMPORTED_MODULE_5__.obj.pin){
        (0,_opshibalanse__WEBPACK_IMPORTED_MODULE_0__["default"])(event)
        ;(0,_total__WEBPACK_IMPORTED_MODULE_1__["default"])(event)
        ;(0,_movmentrider__WEBPACK_IMPORTED_MODULE_2__["default"])(event)
        ;(0,_loginPGage__WEBPACK_IMPORTED_MODULE_3__["default"])()
        ;(0,_nowdata__WEBPACK_IMPORTED_MODULE_4__["default"])()
      }
    })  
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accSelekt);

/***/ }),

/***/ "./src/modules/close.js":
/*!******************************!*\
  !*** ./src/modules/close.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login */ "./src/modules/login.js");
/* harmony import */ var _loginPGage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loginPGage */ "./src/modules/loginPGage.js");



const formCloseinput = document.querySelector('.form--close');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

let closeobj = {}
function closePage (){

    formCloseinput.addEventListener('submit',(e)=>{
      e.preventDefault()

      closeobj = {
        title: inputCloseUsername.value,
        pin: inputClosePin.value
      }

        if(_login__WEBPACK_IMPORTED_MODULE_0__.obj.title == closeobj.title && _login__WEBPACK_IMPORTED_MODULE_0__.obj.pin == closeobj.pin ){
          
          _loginPGage__WEBPACK_IMPORTED_MODULE_1__.containerApp.classList.toggle('opasity_app')

        }
      
      e.target.reset()

    })

  
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (closePage);

/***/ }),

/***/ "./src/modules/login.js":
/*!******************************!*\
  !*** ./src/modules/login.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   obj: () => (/* binding */ obj)
/* harmony export */ });
/* harmony import */ var _accaunselektor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accaunselektor */ "./src/modules/accaunselektor.js");
/* harmony import */ var _loginPGage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loginPGage */ "./src/modules/loginPGage.js");


const formLoginuser = document.querySelector('.login');
const inputLoginUsername = document.querySelector('.login__input__user');
const inputLoginPin = document.querySelector('.login__input--pin');

let obj = {}

function logiNpage (array){
    formLoginuser.addEventListener("submit",(event)=>{
      event.preventDefault()
       obj = {
        title : inputLoginUsername.value,
        pin: inputLoginPin.value 
      }
      for (let key of array){
        if(key.pin == obj.pin && key.owner == obj.title ){
  
          _loginPGage__WEBPACK_IMPORTED_MODULE_1__.containerApp.classList.add('opasity_app')
  
        }
      }
  
      (0,_accaunselektor__WEBPACK_IMPORTED_MODULE_0__["default"])(array)
  
      event.target.reset()
  
     })
     
  
     
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (logiNpage);


/***/ }),

/***/ "./src/modules/loginPGage.js":
/*!***********************************!*\
  !*** ./src/modules/loginPGage.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   containerApp: () => (/* binding */ containerApp),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const containerApp = document.querySelector('.app');
const labelTimer = document.querySelector('.timer');

function loGaut (){

    let sum = 300
    let hour = 4
     const timeinterlogut = setInterval(()=>{
       sum = sum - 1
       if (sum == 240){
         hour = 4
       }else if(sum == 180){
         hour = 3
       }else if(sum == 120){
         hour = 2
       }else if(sum == 60){
         hour = 1
       }else if(sum == 0){
         hour = 0
         containerApp.classList.toggle('opasity_app')
         clearInterval(timeinterlogut)
       }
       labelTimer.innerHTML = `${hour}:${sum%60}`
   
     },1000)
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loGaut);


/***/ }),

/***/ "./src/modules/movmentrider.js":
/*!*************************************!*\
  !*** ./src/modules/movmentrider.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const containerMovements = document.querySelector('.movements');
function movmentRider(array) {
  
    parent = ""
      array.movements.map((key , index)=>{
        
        const typ = key > 0 ? "deposit" : "withdrawal"
  
        parent += `
          <div class="movements__row">
            <div class="movements__type movements__type--${typ}">
              ${index + 1}  ${typ}
            </div>
            <div class="movements__date">24/01/2037</div>
            <div class="movements__value">${key} $</div>
        </div>
       
        `;
      })
   
  
    containerMovements.innerHTML = parent;
    
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (movmentRider);

/***/ }),

/***/ "./src/modules/nowdata.js":
/*!********************************!*\
  !*** ./src/modules/nowdata.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const labelDate = document.querySelector('.date');

function nowdata(){

  const time = new Date
   

  labelDate.innerHTML =`${time.getDate()}  /  ${time.getMonth() + 1}  /  ${time.getFullYear()},  

  &#160  ${time.getHours()}:${time.getMinutes()}`
  

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nowdata);

/***/ }),

/***/ "./src/modules/opshibalanse.js":
/*!*************************************!*\
  !*** ./src/modules/opshibalanse.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const labelBalance = document.querySelector('.balance__value');

function opshibalance (array){

  let sum = 0

  for(let key of array.movements){

    sum = sum + key

  }

  labelBalance.innerHTML = (sum) + '$' 

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (opshibalance);

/***/ }),

/***/ "./src/modules/ransferuser.js":
/*!************************************!*\
  !*** ./src/modules/ransferuser.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _movmentrider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movmentrider */ "./src/modules/movmentrider.js");
/* harmony import */ var _opshibalanse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./opshibalanse */ "./src/modules/opshibalanse.js");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login */ "./src/modules/login.js");
/* harmony import */ var _total__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./total */ "./src/modules/total.js");





const formTransfertoUser = document.querySelector('.form--transfer')
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');

function TransfertoUser (array) {
    let tranobjv = {}
      
    formTransfertoUser.addEventListener('submit',(event) => {
    
      event.preventDefault()
    
      tranobjv = {
    
        title : inputTransferTo.value,
    
      }
    
      array.forEach((key) => {
    
        if(key.owner == tranobjv.title && key.pin != _login__WEBPACK_IMPORTED_MODULE_2__.obj.pin){
    
          key.movements.unshift(+inputTransferAmount.value)
    
          array.forEach((parametr) => {
    
            if(parametr.pin == _login__WEBPACK_IMPORTED_MODULE_2__.obj.pin){
    
              parametr.movements.unshift(-(+inputTransferAmount.value))
    
              ;(0,_movmentrider__WEBPACK_IMPORTED_MODULE_0__["default"])(parametr)
    
              ;(0,_opshibalanse__WEBPACK_IMPORTED_MODULE_1__["default"])(parametr)
              
              ;(0,_total__WEBPACK_IMPORTED_MODULE_3__["default"])(parametr)
            }
    
          })
    
        }
    
      })
    
      event.target.reset()
    
    })
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TransfertoUser);   

/***/ }),

/***/ "./src/modules/requst.js":
/*!*******************************!*\
  !*** ./src/modules/requst.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _movmentrider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movmentrider */ "./src/modules/movmentrider.js");
/* harmony import */ var _opshibalanse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./opshibalanse */ "./src/modules/opshibalanse.js");
/* harmony import */ var _total__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./total */ "./src/modules/total.js");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login */ "./src/modules/login.js");





const formRequstMoney = document.querySelector('.form--loan');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');

function requestManey (array) {
    
  formRequstMoney.addEventListener('submit', (e) => {
      
      e.preventDefault()
      
      array.forEach(key => {
        
        if(key.pin == _login__WEBPACK_IMPORTED_MODULE_3__.obj.pin ){
          
          key.movements.unshift(+inputLoanAmount.value)
          
          ;(0,_movmentrider__WEBPACK_IMPORTED_MODULE_0__["default"])(key)
          
          ;(0,_total__WEBPACK_IMPORTED_MODULE_2__["default"])(key)
  
          ;(0,_opshibalanse__WEBPACK_IMPORTED_MODULE_1__["default"])(key)
  
        }
      })
      // accounts.forEach((key) => {
      //   if(key.pin == obj.pin ){
          
      //   }
      // })
      e.target.reset()
    })
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (requestManey);

/***/ }),

/***/ "./src/modules/sort.js":
/*!*****************************!*\
  !*** ./src/modules/sort.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _movmentrider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movmentrider */ "./src/modules/movmentrider.js");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login */ "./src/modules/login.js");



const btnSort = document.querySelector('.btn--sort');

function SortArray (array){
    btnSort.addEventListener('click', (e) => {
      e.preventDefault()

      array.forEach((event) => {
        if(event.pin == _login__WEBPACK_IMPORTED_MODULE_1__.obj.pin){
          event.movements.sort()
          event.movements.reverse()
          ;(0,_movmentrider__WEBPACK_IMPORTED_MODULE_0__["default"])(event)
        }
      })

    })
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SortArray);

/***/ }),

/***/ "./src/modules/total.js":
/*!******************************!*\
  !*** ./src/modules/total.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');

function totalPage (array) {
    let sum2 = 0
    let sum = 0
   
    array.movements.forEach( key => key > 0 ? sum += key : sum2 += key)
   
    labelSumIn.textContent = sum + '$' 
    labelSumOut.textContent = Math.abs(sum2) + '$'
    labelSumInterest.textContent = (array.interestRate * 100) + array.interestRate  + "%"
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (totalPage);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_nowdata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/nowdata */ "./src/modules/nowdata.js");
/* harmony import */ var _modules_ransferuser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/ransferuser */ "./src/modules/ransferuser.js");
/* harmony import */ var _modules_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/login */ "./src/modules/login.js");
/* harmony import */ var _modules_movmentrider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/movmentrider */ "./src/modules/movmentrider.js");
/* harmony import */ var _modules_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/sort */ "./src/modules/sort.js");
/* harmony import */ var _modules_requst__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/requst */ "./src/modules/requst.js");
/* harmony import */ var _modules_total__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modules/total */ "./src/modules/total.js");
/* harmony import */ var _modules_opshibalanse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modules/opshibalanse */ "./src/modules/opshibalanse.js");
/* harmony import */ var _modules_loginPGage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modules/loginPGage */ "./src/modules/loginPGage.js");
/* harmony import */ var _modules_accaunselektor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../modules/accaunselektor */ "./src/modules/accaunselektor.js");
/* harmony import */ var _modules_close__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../modules/close */ "./src/modules/close.js");

///import 












/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'a',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'b',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'c',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'd',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');








const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');

const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');












/////loginpage

(0,_modules_login__WEBPACK_IMPORTED_MODULE_2__["default"])(accounts)

  
///Request maney 

;(0,_modules_requst__WEBPACK_IMPORTED_MODULE_5__["default"])(accounts)

////Transfer 

////close page 


;(0,_modules_close__WEBPACK_IMPORTED_MODULE_10__["default"])()


////rider 


//opshibalanse 



////total 




;(0,_modules_ransferuser__WEBPACK_IMPORTED_MODULE_1__["default"])(accounts)
//
///logaut


/////openAccaunt 

  

///data








///Sort

;(0,_modules_sort__WEBPACK_IMPORTED_MODULE_4__["default"])(accounts)


})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map