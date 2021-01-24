<template>
  <span class="badge" :class="style">{{ statusTitle }}</span>
</template>

<script>
import { useStore } from 'vuex'
export default {
  props: { type: String },

  setup(props) {
    const store = useStore()
    const statuses = store.getters.taskStatuses

    const { statusTitle, style } = statuses.find(
      (taskStatus) => taskStatus.status === props.type
    )

    return {
      style,
      statusTitle,
    }
  },
}
</script>
