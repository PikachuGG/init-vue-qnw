import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const playMode = {
  sequence: 0,
  random: 1,
  loop: 2
}
const SET_SEQUENCE_LIST = 'SET_SEQUENCE_LIST'
const SET_DISC = 'SET_DISC'
const SET_SINGER = 'SET_SINGER'
const SET_PLAY_MODE = 'SET_PLAY_MODE'

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
    singer: state => state.singer,
    mode: state => state.mode
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
    },
    [SET_PLAY_MODE] (state, mode) {
      state.mode = mode
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
    },
    setPlayMode ({ commit, state }, mode) {
      commit(SET_PLAY_MODE, mode)
    }
  },
  plugins: [createLogger()]
})
