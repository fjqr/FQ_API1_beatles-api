<script>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'

export default {

  components: {
    Navbar
  },
  setup() {

  }
}
</script>

<template>
  <header>
    <div>
      <nav>
        <Navbar />

      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
</style>
