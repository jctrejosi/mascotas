import { createStore } from 'vuex'
import { home } from './modules/home.js'

export default createStore({
  modules: {
    home
  }
})
