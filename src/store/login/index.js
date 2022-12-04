const state = {
  userName: ''
}

const mutations = {
  setUserName (state, userName) {
    state.userName = userName
  },
  deleteUserName (state) {
    state.userName = ''
  }
}

export default {
  state,
  mutations
}
