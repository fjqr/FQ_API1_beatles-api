<script>
import { onMounted, reactive } from 'vue'
import { useFetch } from '../../fetch'
import { RouterLink, RouterView } from 'vue-router'

export default {
 props: {
     id: {
         type: String,
         required: true
     }
 },
    setup(props) {
        const estado = reactive({
          songs: {},
        titles: [],
        showSongs: false
        })

        const  getSongs  =  id => {
    estado.urlSongs =  `http://localhost:3000/albumsongs/${id}`
      estado.songs = useFetch(estado.urlSongs)
  }

        onMounted(() => {
            getSongs(props.id)

             setTimeout(() => {
                estado.showSongs = true
            }, 2000); 
        })

        return {
            estado, getSongs
        }
    }
}
</script>
<template>
<button>
    <RouterLink to="/" >Volver</RouterLink> 
</button>
<p class="text-6xl">Lista de temas:</p>
<div v-if="estado.showSongs === true"> 
      <ol class="m-6 list-decimal">
        <li v-for="songs of estado.songs.datos">{{songs.title}} : {{songs.duration}}</li>
      </ol>
    </div>
</template>