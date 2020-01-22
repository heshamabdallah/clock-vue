import { checkLeftZero } from '@/helper.js'

const clock = {
  namespaced: true,
  state: {
    seconds: null,
    minutes: null,
    hours: null
  },
  mutations: {
    setSeconds(state, seconds) {
      state.seconds = seconds
    },
    setMinutes(state, minutes) {
      state.minutes = minutes
    },
    setHours(state, hours) {
      state.hours = hours
    }
  },
  actions: {
    setClock({ commit }) {
      let timeNow = new Date()
      commit('setSeconds', checkLeftZero(timeNow.getSeconds()))
      commit('setMinutes', checkLeftZero(timeNow.getMinutes()))
      commit('setHours', checkLeftZero(timeNow.getHours()))
    }
  }
}

export default clock
