import { MutationTree } from 'vuex'
import {types} from "./mutations-types"
import {State} from "./stores-type"


export type Mutations<S = State> = {

    [types.LOGGIN_ACTION](state: S, payload: number): void
    [types.REGISTER_ACTION](state: S, payload: number): void

  }
  
  export const mutations: MutationTree<State> & Mutations = {
    [types.LOGGIN_ACTION](state, payload) {
        state.auth = null
    },

    [types.LOGGIN_ACTION](state, payload) {
        state.auth = null
    },
  }