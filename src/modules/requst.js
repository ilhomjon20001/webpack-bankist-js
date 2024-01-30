import movmentRider from "./movmentrider";
import opshibalance from "./opshibalanse";
import totalPage from "./total";
import { obj } from "./login";

const formRequstMoney = document.querySelector('.form--loan');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');

function requestManey (array) {
    
  formRequstMoney.addEventListener('submit', (e) => {
      
      e.preventDefault()
      
      array.forEach(key => {
        
        if(key.pin == obj.pin ){
          
          key.movements.unshift(+inputLoanAmount.value)
          
          movmentRider(key)
          
          totalPage(key)
  
          opshibalance(key)
  
        }
      })
      // accounts.forEach((key) => {
      //   if(key.pin == obj.pin ){
          
      //   }
      // })
      e.target.reset()
    })
}
export default requestManey