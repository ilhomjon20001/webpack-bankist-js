import movmentRider from "./movmentrider";
import { obj } from "./login";

const btnSort = document.querySelector('.btn--sort');

function SortArray (array){
    btnSort.addEventListener('click', (e) => {
      e.preventDefault()

      array.forEach((event) => {
        if(event.pin == obj.pin){
          event.movements.sort()
          event.movements.reverse()
          movmentRider(event)
        }
      })

    })
}
export default SortArray