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
            //estado.urlSongs = `/albumsongs/${id}`
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
    <div
        class=" font-Questrial container sm:p-2 sm:inset-x-3 md:inset-x-32 md:inset-y-32 lg:inset-x-48  xl:inset-80 sm:w-max md:w-fit z-2 absolute  w-fit h-fit  inset-x-3 inset-y-24 lg:inset-32 bg-white/50 backdrop-blur-lg rounded-2xl">

        <button class="m-2">
            <RouterLink to="/">Volver</RouterLink>
        </button>
        <div class="flex justify-evenly flex-col sm:flex-row">
            <p class="sm:hidden m-4 text-sm text-neutral-600">Presiona sobre una canción para ver su letra</p>
            <div>

                <h2 class="text-5xl z-50 text-center sm:text-left sm:m-6">Temas:</h2>
                <ol class="sm:overflow-y-auto h-fit sm:h-80 m-6">
                    <li v-for="songsData of songs.datos" @mouseover="lyrics(songsData.lyrics)"
                        class="hover text-center sm:text-left text-sm  md:text-base hover:bg-neutral-400/50 ">
                        {{ songsData.title }} : {{ songsData.duration }}
                        <!--<div>
                        <RouterLink :to="`/updatesong/${songs.id}`">Actualizar</RouterLink>

                         </div>-->
                    </li>
                </ol>
            </div>

            <div>
                <h2 class="text-5xl  text-center sm:text-left sm:m-6">Letras:</h2>
                <textarea
                    class="border-none w-80 h-80 m-4 sm:m-0 bgtx text-sm  md:text-base text-center sm:text-left sm:h-80"
                    disabled>{{ estado.lyrics }}</textarea>
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
