import Vue from 'vue'
import Vuex from 'vuex'

import queries from './queries'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    queries
  }
})
