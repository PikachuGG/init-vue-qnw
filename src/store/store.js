import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const playMode = {
  sequence: 0,
  loop: 1,
  random: 2
}
const SET_SEQUENCE_LIST = 'SET_SEQUENCE_LIST'
const SET_DISC = 'SET_DISC'
const SET_SINGER = 'SET_SINGER'

export default new Vuex.Store({
  state: {
    singer: {},
    playing: false,
    sequenceList: [],
    mode: playMode.sequence,
    disc: {}
  },
  getters: {
    sequenceList: state => state.sequenceList,
    disc: state => state.disc,
    singer: state => state.singer
  },
  mutations: {
    [SET_SEQUENCE_LIST] (state, list) {
      state.sequenceList = list
    },
    [SET_DISC] (state, disc) {
      state.disc = disc
    },
    [SET_SINGER] (state, singer) {
      state.singer = singer
    }
  },
  actions: {
    selectPlay ({ commit, state }, { list, index }) {
      commit(SET_SEQUENCE_LIST, list)
    },
    setDisc ({ commit, state }, disc) {
      commit(SET_DISC, disc)
    },
    setSinger ({ commit, state }, singer) {
      commit(SET_SINGER, singer)
    }
  },
  plugins: [createLogger()]
})
