const labelDate = document.querySelector('.date');

function nowdata(){

  const time = new Date
   

  labelDate.innerHTML =`${time.getDate()}  /  ${time.getMonth() + 1}  /  ${time.getFullYear()},  

  &#160  ${time.getHours()}:${time.getMinutes()}`
  

}

export default nowdata