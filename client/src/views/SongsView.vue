<script>
import { onMounted, reactive } from 'vue'
import { useFetch } from '../../fetch'
import { RouterLink, RouterView } from 'vue-router'
import Background from '../components/Background.vue'

export default {
    components: {
        Background
    },
    props: {
        id: {
            type: String,
            required: true
        }
    },
    setup(props) {
        let songs = reactive({})
        const estado = reactive({
            id: props.id,
            titles: [],
            showSongs: false,
            lyrics: null,
            urlSongs: null
        })

        const getSongs = async id => {
            estado.urlSongs = `http://localhost:3000/albumsongs/${id}`
            songs.datos = await useFetch(estado.urlSongs)

        }

        const lyrics = lyrics => {
            estado.lyrics = lyrics

        }

        onMounted(() => {
            getSongs(props.id)
        })

        return {
            estado, getSongs, lyrics, songs
        }
    }
}
</script>
<template>
    <Background :id="estado.id" />
    <div class="container-xl p-10 font-sans z-2 absolute w-fit h-3/4 inset-32 bg-white/50 backdrop-blur-lg rounded-2xl">

        <button>
            <RouterLink to="/">Volver</RouterLink>
        </button>
        <p class="text-6xl z-50">Lista de temas:</p>
        <div class="flex justify-between">
            <ol class="overflow-y-auto h-80 m-6">
                <li v-for="songsData of songs.datos" @mouseover="lyrics(songsData.lyrics)" class="hover">
                    {{ songsData.title }} : {{ songsData.duration }}
                    <!--<div>
                        <RouterLink :to="`/updatesong/${songs.id}`">Actualizar</RouterLink>

                         </div>-->
                </li>
            </ol>

            <div>
                <textarea class="border-none w-80 h-80 m-6 bgtx" disabled>{{ estado.lyrics }}</textarea>
            </div>
        </div>
    </div>
</template>
<style>
.bgtx {
    background-color: rgba(100, 100, 100, .1);
}

.hover:hover {
    cursor: pointer
}
</style>
