import {readonly} from "vue"
import {state} from "./state"

export default {
    namespace:true,
    state:readonly(state)
}