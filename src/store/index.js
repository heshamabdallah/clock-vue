import Vue from 'vue'
import Vuex from 'vuex'
import clock from './clock.js'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    clock
  }
})

export default store
