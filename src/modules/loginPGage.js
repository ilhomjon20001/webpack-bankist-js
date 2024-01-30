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
export default loGaut
export {containerApp}