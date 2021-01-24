import { createStore } from 'vuex'
import tasksModule from './modules/tasks'
import taskStatuses from './modules/taskStatuses'

export default createStore({
  state: {},
  mutations: {},
  actions: {},

  modules: {
    tasks: tasksModule,
    statuses: taskStatuses,
  },
})
