import accSelekt from "./accaunselektor";
import { containerApp } from "./loginPGage";
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
  
          containerApp.classList.add('opasity_app')
  
        }
      }
  
      accSelekt(array)
  
      event.target.reset()
  
     })
     
  
     
}
export default logiNpage
export {obj}