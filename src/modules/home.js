import query from '../services/query.js'
import axios from 'axios'

const key = process.env.VUE_APP_API_KEY

export const home = {
  namespaced: true,

  state: {
    catsList: [],
    cat: {},
    url: '',
    flag: -1,
    viewListCats: false,
    viewListCategories: false,
    viewModal: false,
    catsBuy: [],
    viewSuccess: false
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
    },

    show_list_cats(state) {
      state.viewListCats = !state.viewListCats
    },

    show_list_categories(state) {
      state.viewListCategories = !state.viewListCategories
    },

    show_modal(state) {
      state.viewModal = !state.viewModal
    },

    show_success(state) {
      state.viewSuccess = !state.viewSuccess
    },

    add_cat(state) {
      let name = state.cat.name
      let image = state.cat.image.url
      let newCat = {
        name: name,
        image: image
      }
      state.catsBuy.push(newCat)
    },

    remove_cat(state, i) {
      state.catsBuy.splice(i, 1)
    },

    search_cat(state, newCat) {
      state.url = newCat[0].image.url
      state.cat = newCat[0]
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
    },

    Show_List_Cats({ commit }) {
      commit('show_list_cats')
    },

    Show_List_Categories({ commit }) {
      commit('show_list_categories')
    },

    Show_Modal({ commit }) {
      commit('show_modal')
    },

    Show_Success({ commit }) {
      commit('show_success')
    },

    Add_Cat({ commit }) {
      commit('add_cat')
    },

    Remove_Cat({ commit }, index) {
      commit('remove_cat', index)
    },

    Search_Cat({ commit, state }, name) {
      let cat = state.catsList.filter( element => element.name.toLowerCase() === name.toLowerCase())
      if(cat.length !== 0) {commit('search_cat', cat)}
    }
  }
}