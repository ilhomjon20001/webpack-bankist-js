import { obj } from "./login";
import { containerApp } from "./loginPGage";

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

        if(obj.title == closeobj.title && obj.pin == closeobj.pin ){
          
          containerApp.classList.toggle('opasity_app')

        }
      
      e.target.reset()

    })

  
}
export default closePage