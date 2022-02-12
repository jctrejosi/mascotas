import { createStore } from 'vuex'
import query from './services/query.js'
import axios from 'axios'

const key = process.env.VUE_APP_API_KEY

export default createStore({
  state: {
    catsList: [],
    cat: {},
    url: '',
    flag: -1
  },

  mutations: {
    get_list_cats(state, newcatsLists) {
      state.catsList = newcatsLists
    },

    next(state) {
      if(state.flag === state.catsList.length - 1) {
        state.flag = 0
      } else {
        state.flag = state.flag + 1
      }
      state.url = state.catsList[state.flag].image.url
      state.cat = state.catsList[state.flag]
    },

    previous(state) {
      if(state.flag === 0) {
        state.flag = state.catsList.length - 1
      } else {
        state.flag = state.flag - 1
      }
      state.url = state.catsList[state.flag].image.url
      state.cat = state.catsList[state.flag]
    }
  },

  actions: {
    async Get_List_Cats({ commit }) {
      try {
        const response = await axios.get(query.listBreeds, {
          headers: {
            "x-api-key": key
          }
        })
        await commit('get_list_cats', response.data)
        commit('next')
      } catch (e) {
        console.log(e)
      }
    },

    Next({ commit }) {
      commit('next')
    },

    Previous({ commit }) {
      commit('previous')
    }
  }
})
