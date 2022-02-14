import { createStore } from 'vuex'
import { home } from './modules/home.js'
import { category } from './modules/category.js'

export default createStore({
  modules: {
    home,
    category
  }
})
