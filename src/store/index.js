import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    totalReplay: 0,
    totalSpecialPrice:0,
    totalSpecialSurprise:0,
    totalTopPrice:0,
    totalGiftCard:0,
    totalSpin:0,

    giftCards: [],
    topPrices: [],
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
  },
  mutations: {
    setTotalReplay(state,payload){
      state.totalReplay = payload;
    },
    setTotalSpecialPrice(state,payload){
      state.totalSpecialPrice = payload;
    },
    setTotalSpecialSurprise(state,payload){
      state.totalSpecialSurprise = payload;
    },
    setTotalTopPrice(state,payload){
      state.totalTopPrice = payload;
    },
    setTotalGiftCard(state,payload){
      state.totalGiftCard = payload;
    },
    setTotalSpin(state,payload){
      state.totalSpin = payload;
    },


    setGiftCards(state, payload) {
      state.giftCards = payload;
    },
    setTopPrices(state, payload) {
      state.topPrices = payload;
    },
  },
  actions: {
    setTotalReplay(context,payload){
      context.commit('setTotalReplay',payload)
    },
    setTotalSpecialPrice(context,payload){
      context.commit('setTotalSpecialPrice',payload)
    },
    setTotalSpecialSurprise(context,payload){
      context.commit('setTotalSpecialSurprise',payload)
    },
    setTotalTopPrice(context,payload){
      context.commit('setTotalTopPrice',payload)
    },
    setTotalGiftCard(context,payload){
      context.commit('setTotalGiftCard',payload)
    },
    setTotalSpin(context,payload){
      context.commit('setTotalSpin',payload)

    },

    setGiftCards(context, payload) {
      context.commit('setGiftCards', payload)
    },
    setTopPrices(context, payload) {
      context.commit('setTopPrices', payload)
    },
  },
  modules: {
  }
})
