import query from '../services/query.js'
import axios from 'axios'

const key = process.env.VUE_APP_API_KEY

export const category = {
  namespaced: true,

  state: {
    categoriesList: [],
    images: []
  },

  mutations: {
    get_list_categories(state, newCategories) {
      state.categoriesList = newCategories
    },

    search_category(state, response) {
      state.images = []
      response.array.forEach(element => {
        state.images.push(element.url)
      });
    }
  },

  actions: {
    async Get_List_Categories({ commit }) {
      try {
        const response = await axios.get(query.listCategories, {
          headers: {
            "x-api-key": key
          }
        })
        await commit('get_list_categories', response.data)
      } catch (e) {
        console.log(e)
      }
    },

    async Search_Category({ commit }) {
      try {
        axios.defaults.headers.common['x-api-key'] = "DEMO-API-KEY"
        let query_params = {
          limit: 10,
          order: 'Desc',
          page: 1,
          category_ids: 1
        }
        const response = await axios.get(query.searchCategory, {
          params: query_params
        })
        await commit('search_category', response.data)
      } catch (e) {
        console.log(e)
      }
    }
  }
}
