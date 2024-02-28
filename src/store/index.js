import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    totalReplay: 0,
    totalSpecialPrice: 0,
    totalSpecialSurprise: 0,
    totalTopPrice: 0,
    totalGiftCard: 0,
    totalSpin: 0,

    giftCards: [],
    topPrices: [],
    teslaPrices: [],
  },
  getters: {
    totalReplay: (state) => state.totalReplay,
    totalSpecialPrice: (state) => state.totalSpecialPrice,
    totalSpecialSurprise: (state) => state.totalSpecialSurprise,
    totalTopPrice: (state) => state.totalTopPrice,
    totalGiftCard: (state) => state.totalGiftCard,
    totalSpin: (state) => state.totalSpin,

    giftCards: (state) => state.giftCards,
    topPrices: (state) => state.topPrices,
    teslaPrices: (state) => state.teslaPrices,
  },
  mutations: {
    setTotalReplay(state, payload) {
      state.totalReplay = payload;
    },
    setTotalSpecialPrice(state, payload) {
      state.totalSpecialPrice = payload;
    },
    setTotalSpecialSurprise(state, payload) {
      state.totalSpecialSurprise = payload;
    },
    setTotalTopPrice(state, payload) {
      state.totalTopPrice = payload;
    },
    setTotalGiftCard(state, payload) {
      state.totalGiftCard = payload;
    },
    setTotalSpin(state, payload) {
      state.totalSpin = payload;
    },


    setGiftCards(state, payload) {
      state.giftCards = payload;
    },
    setTopPrices(state, payload) {
      state.topPrices = payload;
    },
    setTeslaPrices(state, payload) {
      state.teslaPrices = payload;
    },
  },
  actions: {
    updateState({ commit }, { mutationType, payload }) {
      commit(mutationType, payload);
    },
  },
  modules: {
  }
})
