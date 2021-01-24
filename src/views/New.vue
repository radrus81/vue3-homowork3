<template>
  <form class="card">
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input type="text" id="title" v-model="formData.titleTask" />
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input type="date" id="date" v-model="formData.deadLine" />
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea id="description" v-model="formData.description"></textarea>
    </div>

    <button class="btn primary" :disabled="isValid" @click.prevent="addNewTask">
      Создать
    </button>
  </form>
</template>

<script>
import { reactive, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export default {
  setup() {
    const store = useStore()
    const router = useRouter()
    const formData = reactive({
      titleTask: null,
      deadLine: null,
      description: null,
    })

    const isValid = computed(() => {
      if (formData.titleTask && formData.deadLine && formData.description) {
        return false
      }
      return true
    })

    const addNewTask = () => {
      store.dispatch('addNewTask', formData)
      router.push('/')
    }

    return {
      isValid,
      formData,
      addNewTask,
    }
  },
}
</script>
