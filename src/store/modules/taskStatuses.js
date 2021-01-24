export default {
  state() {
    return {
      taskStatuses: [
        {
          status: 'active',
          statusTitle: 'Активен',
          style: 'primary',
        },
        {
          status: 'pending',
          statusTitle: 'Выполняется',
          style: 'warning',
        },
        {
          status: 'cancelled',
          statusTitle: 'Отменен',
          style: 'danger',
        },
        {
          status: 'done',
          statusTitle: 'Завершен',
          style: 'primary',
        },
      ],
    }
  },
  getters: {
    taskStatuses(state) {
      return state.taskStatuses
    },
  },
}
