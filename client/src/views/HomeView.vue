<script>
import { onMounted, reactive } from 'vue'
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
      showSongs:false
          })

    const getAlbums = () => {
      estado.data = useFetch(estado.urlAlbums)
      console.log(estado.data)
  
    }

  const  getSongs =  id => {
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
      }, 2000);

    })
    return {
      estado, getAlbums,getSongs,showSongs
    }
  }
}
</script>
<template>

  <main class="container-xl ">
    <p class="text-6xl">Lista de Discos:</p>
    <table class="table w-full m-16">
      <thead class="table-header-group">
        <tr class="table-row">
          <th class="table-cell text-left">Título</th>
          <th class="table-cell text-left">Año</th>
          <th class="table-cell text-left">Tipo</th>
          <th class="table-cell text-left">Canciones</th>
        </tr>
      </thead>
      <tbody v-if="estado.show === true" class="table-row-group"> 
        <tr v-for="datos of estado.data.datos" class="table-row">
          <td class="table-cell">{{ datos.title }}</td>
          <td class="table-cell">{{ datos.year }}</td>
          <td class="table-cell">{{ datos.type }}</td>
          <td class="table-cell">
            <button  class="bg-gray-600 text-gray-200 p-2 m-1">
             <RouterLink :to="`/albumsongs/${datos.id}`" >Ver</RouterLink> 
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    </main>
    <!-- <Songs v-if="estado.showSongs === true" @songs="estado.songs"></Songs> -->
</template>
