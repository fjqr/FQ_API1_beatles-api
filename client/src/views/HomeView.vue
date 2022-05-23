<script>
import { onMounted, onUpdated, reactive } from 'vue'
import { useFetch } from '../../fetch'
import Songs from '../components/Songs.vue'
import { RouterLink, RouterView } from 'vue-router'

export default {
  components: {
    Songs
  },
  setup() {
    const estado = reactive({
      show: false,
      data: {},
      urlAlbums: 'http://localhost:3000/albums',
      urlSongs: null,
      newUrl: null,
      showSongs: false
    })

    const getAlbums = () => {
      estado.data = useFetch(estado.urlAlbums)
    }

    const getSongs = id => {
      estado.urlSongs = `http://localhost:3000/albumsongs/${id}`
      estado.songs = useFetch(estado.urlSongs)
      estado.newUrl = `/albumsongs/${id}`
      estado.showSongs = true

    }

    const showSongs = id => {
      estado.albumSongs = true
      estado.songs.datos = estado.songs.datos.filter(songs => songs.albumid === id)

    }
  
    onMounted(() => {
      getAlbums()

      setTimeout(() => {
        estado.show = true
      }, 3000);

    })
    return {
      estado, getAlbums, getSongs, showSongs
    }
  }
}
</script>
<template>

  <main class="container-xl">
    <p class="text-6xl">Lista de Discos:</p>
    <table class="table table-auto w-max m-16">
      <thead class="table-header-group">
        <tr class="table-row">
          <th class="table-cell text-left px-8">Título</th>
          <th class="table-cell text-left px-8">Año</th>
          <th class="table-cell text-left px-8">Tipo</th>
          <th class="table-cell text-left px-8">Canciones</th>
        </tr>
      </thead>
      <tbody v-if="estado.show === true" class="table-row-group">
        <tr v-for="datos of estado.data.datos" class="table-row">
          <td class="table-cell px-8">{{ datos.title }}</td>
          <td class="table-cell px-8">{{ datos.year }}</td>
          <td class="table-cell px-8">{{ datos.type }}</td>
          <td class="table-cell px-8">
            <button class="bg-gray-900 text-gray-200 p-2 m-1">
              <RouterLink :to="`/albumsongs/${datos.id}`">Ver</RouterLink>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </main>
  <!-- <Songs v-if="estado.showSongs === true" @songs="estado.songs"></Songs> -->
</template>
