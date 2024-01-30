const labelBalance = document.querySelector('.balance__value');

function opshibalance (array){

  let sum = 0

  for(let key of array.movements){

    sum = sum + key

  }

  labelBalance.innerHTML = (sum) + '$' 

}

export default opshibalance