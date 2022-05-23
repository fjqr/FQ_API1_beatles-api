import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SongsView from '../views/SongsView.vue'
import CreateSongView from '../views/CreateSongView.vue'

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
      props:true
    },
    {
      path: '/createsong/:id',
      name: 'createsong',
      component: CreateSongView,
      props:true
    }
  ]
})

export default router
