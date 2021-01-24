export default {
  state() {
    return {
      tasks: [],
    }
  },
  actions: {
    //тут кода не много не стал переносить в отдельный файл.В реком.не пишите знаю :)
    loadDataFromLocalStorage({ commit }) {
      const freelanceData =
        JSON.parse(localStorage.getItem('freelanceData')) || []
      commit('changeTasks', freelanceData)
    },
    changeStatus({ commit, state }, payload) {
      const index = state.tasks.findIndex(
        (task) => task.id === payload.currentId
      )
      const cloneTasks = [...state.tasks]
      cloneTasks[index].status = payload.status
      commit('changeTasks', cloneTasks)
    },
    addNewTask({ commit, state }, payload) {
      payload.id = new Date().getTime()
      payload.status = 'active'
      payload.deadLine = new Date(payload.deadLine).toLocaleDateString()
      const cloneTasks = [...state.tasks]
      cloneTasks.push(payload)
      commit('changeTasks', cloneTasks)
    },
  },
  mutations: {
    changeTasks(state, payload) {
      localStorage.setItem('freelanceData', JSON.stringify(payload))
      state.tasks = payload
    },
  },
  getters: {
    tasks(state) {
      return state.tasks
    },
  },
}
