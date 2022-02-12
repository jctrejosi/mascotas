import { createStore } from 'vuex'
import query from './services/query.js'
import axios from 'axios'

const key = process.env.VUE_APP_API_KEY

export default createStore({
  state: {
    catsList: [],
    cat: {}
  },

  mutations: {
    get_list_cats(state, newcatsLists) {
      state.catsList = newcatsLists
    },

    random_cat(state, newCat) {
      state.cat = newCat
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
        commit('get_list_cats', response.data)
      } catch (e) {
        console.log(e)
      }
    },

    async Random_Cat({ commit }) {
      try {
        const response = await axios.get(query.randomImage, {
          headers: {
            "x-api-key": key
          }
        })
        commit('random_cat', response.data[0])
      } catch (e) {
        console.log(e)
      }
    }
  }
})
