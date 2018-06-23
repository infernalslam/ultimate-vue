const state = {
  count: 0
}

const getters = {
  getCount: state => state.count + 10
}

const actions = {
  async increment ({ commit }) {
    commit('SET_IS_INCREMENT', 1)
  }
}

const set = propName => (state, val) => {
  state[propName] += val
}

const mutations = {
  SET_IS_INCREMENT: set('count')
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
