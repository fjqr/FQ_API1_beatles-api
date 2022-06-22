import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/songs/:id',
      name: 'songs',
      component: () => import('../views/SongsView.vue'),
      props: true
    },
    {
      path: '/createsong/:id',
      name: 'createsong',
      component: () => import('../views/CreateSongView.vue'),
      props: true
    },
    {
      path: '/updatesong/:id',
      name: 'updatesong',
      component: () => import('../views/UpdateSongView.vue'),
      props: true
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notfound',
      component: () => import('../views/NotFoundView.vue')

    }
  ]
})

export default router
