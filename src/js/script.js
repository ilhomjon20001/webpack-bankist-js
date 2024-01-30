'use strict';
///import 
import nowdata from "../modules/nowdata";
import TransfertoUser from "../modules/ransferuser";
import loginpage from "../modules/login"
import movmentRider from "../modules/movmentrider";
import SortArray from "../modules/sort";
import requestManey from "../modules/requst";
import totalPage from "../modules/total";
import opshibalance from "../modules/opshibalanse";
import loGaut from "../modules/loginPGage";
import logiNpage from "../modules/login";
import accountSelekt from "../modules/accaunselektor";
import closePage from "../modules/close"
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

logiNpage(accounts)

  
///Request maney 

requestManey(accounts)

////Transfer 

////close page 


closePage()


////rider 


//opshibalanse 



////total 




TransfertoUser(accounts)
//
///logaut


/////openAccaunt 

  

///data








///Sort

SortArray(accounts)

