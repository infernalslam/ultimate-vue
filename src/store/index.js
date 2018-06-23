import Vuex from 'vuex'

// route store
import order from './order'

const store = () => {
  return new Vuex.Store({
    modules: {
      order
    }
  })
}

export default store
