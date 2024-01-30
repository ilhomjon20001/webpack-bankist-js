import opshibalance from "./opshibalanse"
import totalPage from "./total"
import movmentRider from "./movmentrider"
import loGaut from "./loginPGage"
import nowdata from "./nowdata"
import { obj } from "./login"

function accSelekt (array){
    array.forEach((event) => {
      if(event.pin == obj.pin){
        opshibalance(event)
        totalPage(event)
        movmentRider(event)
        loGaut()
        nowdata()
      }
    })  
}

export default accSelekt