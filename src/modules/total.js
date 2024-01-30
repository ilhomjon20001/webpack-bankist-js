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

export default totalPage