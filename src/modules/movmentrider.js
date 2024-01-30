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
export default movmentRider