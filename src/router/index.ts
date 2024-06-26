import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'
import { setupLayouts } from 'virtual:generated-layouts'

const router = createRouter({
  history: createWebHistory(),
  routes: setupLayouts(routes)
})

router.beforeEach((to) => {
  console.log(to)
  if (to.meta?.requiresAuth) {
    alert('hello auth')
  }
})

export default router
