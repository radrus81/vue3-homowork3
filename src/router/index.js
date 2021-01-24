import { createRouter, createWebHistory } from 'vue-router'
import Tasks from '../views/Tasks.vue'
import New from '../views/New.vue'
import Task from '../views/Task.vue'

const routes = [
  {
    path: '/',
    name: 'Tasks',
    component: Tasks,
  },
  {
    path: '/new',
    name: 'New',
    component: New,
  },
  {
    path: '/task/:id',
    name: 'Task',
    component: Task,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
})

export default router
