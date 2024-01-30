import movmentRider from "./movmentrider";
import opshibalance from "./opshibalanse";
import { obj } from "./login";
import totalPage from "./total";

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
    
        if(key.owner == tranobjv.title && key.pin != obj.pin){
    
          key.movements.unshift(+inputTransferAmount.value)
    
          array.forEach((parametr) => {
    
            if(parametr.pin == obj.pin){
    
              parametr.movements.unshift(-(+inputTransferAmount.value))
    
              movmentRider(parametr)
    
              opshibalance(parametr)
              
              totalPage(parametr)
            }
    
          })
    
        }
    
      })
    
      event.target.reset()
    
    })
}
export default TransfertoUser   