<template>
  <div v-if="tasks">
    <h3 class="text-white">Всего активных задач: {{ countTasks }}</h3>
    <div class="card" v-for="task in tasks" :key="task.id">
      <h2 class="card-title">
        {{ task.titleTask }}
        <AppStatus :type="task.status" />
      </h2>
      <p>
        <strong>
          <small>
            {{ task.deadLine }}
          </small>
        </strong>
      </p>
      <router-link :to="'/task/' + task.id" v-slot="{ navigate }">
        <button class="btn primary" @click="navigate">
          Посмотреть
        </button>
      </router-link>
    </div>
  </div>
  <h1 v-else class="center text-white">Задач пока нет</h1>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import AppStatus from '../components/AppStatus'

export default {
  setup() {
    const store = useStore()
    const tasks = store.getters.tasks
    const countTasks = computed(() => {
      return tasks.reduce((total, current) => {
        if (current.status === 'active') {
          return ++total
        } else {
          return total
        }
      }, 0)
    })
    return {
      tasks,
      countTasks,
    }
  },
  components: { AppStatus },
}
</script>
