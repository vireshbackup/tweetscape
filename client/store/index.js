import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0,
  tweets: [
  ],
  hashtag: null
}

const mutations = {
  INCREMENT(state) {
    state.count++
  },
  ADD_TWEET(state, obj) {
    state.tweets.push({
      id: (Math.random()*1000000000).toString(),
      author: {
        image_url: 'http://unsplash.it/233/233',
        name: 'Tonton René'
      },
      date: '27-11-2016', // ou un timestamp, osef
      content: "J'aime bcp les frites"
    })
  },
  SET_HASHTAG(state, hashtag) {
    state.hashtag = hashtag
  }
}

const actions = {
  incrementAsync({commit}) {
    setTimeout(() => {
      commit('INCREMENT')
    }, 200)
  },
  addTweet({commit}, obj) {
    commit('ADD_TWEET', obj)
  },
  setHashtag({commit}, hashtag) {
    commit('SET_HASHTAG', hashtag)
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
