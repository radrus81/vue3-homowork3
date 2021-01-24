<template>
  <div class="card" v-if="statusDinamic" :key="statusDinamic">
    <h2>{{ titleTask }}</h2>
    <p><strong>Статус</strong>: <AppStatus :type="statusDinamic" /></p>
    <p><strong>Дэдлайн</strong>: {{ deadLine }}</p>
    <p><strong>Описание</strong>: {{ description }}</p>
    <div>
      <button class="btn" @click="changeStatus('pending')">
        Взять в работу
      </button>
      <button class="btn primary" @click="changeStatus('done')">
        Завершить
      </button>
      <button class="btn danger" @click="changeStatus('cancelled')">
        Отменить
      </button>
    </div>
  </div>
  <h3 class="text-white center" v-else>
    Задачи с id = <strong>{{ currentId }}</strong> нет.
  </h3>
</template>

<script>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import AppStatus from '../components/AppStatus'

export default {
  setup() {
    const route = useRoute()
    const currentId = +route.params.id

    const store = useStore()
    const tasks = store.getters.tasks
    const taskData = tasks.find((task) => task.id === currentId)

    const statusDinamic = ref(taskData ? taskData.status : '')

    const changeStatus = (status) => {
      statusDinamic.value = status //лучше не смог придумать лучше, кроме как изменить key компонента чтобы перерендерить компонент после смены статуса.Пишут, что изменение key это лучший вариант из всех перерендеров.Может по другому можно было сделать? Я больше не смог придумать.
      store.dispatch('changeStatus', { currentId, status })
    }

    return {
      currentId,
      ...taskData,
      statusDinamic,
      changeStatus,
    }
  },
  components: { AppStatus },
}
</script>
