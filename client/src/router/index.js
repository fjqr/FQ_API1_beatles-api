import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SongsView from '../views/SongsView.vue'
import CreateSongView from '../views/CreateSongView.vue'
import UpdateSongView from '../views/UpdateSongView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/albumsongs/:id',
      name: 'albumsongs',
      component: SongsView,
      props: true
    },
    {
      path: '/createsong/:id',
      name: 'createsong',
      component: CreateSongView,
      props: true
    },
    {
      path: '/updatesong/:id',
      name: 'updatesong',
      component: UpdateSongView,
      props: true
    }
  ]
})

export default router
