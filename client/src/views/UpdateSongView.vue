<script>
import { onMounted, onUpdated, reactive, ref } from 'vue'
import { useFetch } from '../../fetch'

export default {
    props: {
        id: {
            type: String,
            required: true
        }
    },
    setup(props) {
        let data = reactive({})
        const estado = reactive({
            method: null,
            titulo: null,
            duracion: null,
            lyrics: null,
            leadSinger: null,
            songwriter: null,
            updateSongUrl: `/updatesong/${props.id}`,
            getASongUrl: `/getsong/${props.id}`,
            showData: false,
            songData: {}

        })
        const updateSongs = () => {
            data = {
                "title": estado.titulo,
                "duration": estado.duracion,
                "albumid": estado.songData.datos[0].albumid,
                "lyrics": estado.lyrics,
                "songwriter": estado.songwriter,
                "leadsinger": estado.leadSinger
            }
            estado.method = "PUT"
            useFetch(estado.updateSongUrl, estado.method, data)
        }

        const getASong = id => {

            estado.method = "GET"
            estado.songData = useFetch(estado.getASongUrl, estado.method)

        }
        onMounted(() => {
            getASong(props.id)

            setTimeout(() => {
                estado.titulo = estado.songData.datos[0].title
                estado.duracion = estado.songData.datos[0].duration
                estado.lyrics = estado.songData.datos[0].lyrics,
                    estado.songwriter = estado.songData.datos[0].songwriter
                estado.leadSinger = estado.songData.datos[0].leadsinger
            }, 6000);
        })
        return {
            estado, updateSongs, getASong, data
        }
    }
}
</script>
<template>
    <div class="columns-1 m-16">

        <form class="flex flex-col">
            <input class="form-input m-4 w-80" v-model="estado.titulo" type="text" name="titulo" id=""
                placeholder="Título" ref="titulo">
            <input class="form-input m-4 w-80" v-model="estado.duracion" type="text" name="duracion" id=""
                placeholder="Duración">
            <textarea class="form-textarea m-4 w-80" v-model="estado.lyrics" name="lyrics" id="" cols="30" rows="10"
                placeholder="Lyrics" ref="lyrics"></textarea>
            <input class="form-input m-4 w-80" v-model="estado.songwriter" name="songwriter" type="text"
                placeholder="Songwriter">
            <input class="form-input m-4 w-80" v-model="estado.leadSinger" type="text" name="Lead singer" id=""
                placeholder="Lead Singer">
            <!-- <button class="w-80 m-4" @click="show">Enviar</button> -->
        </form>
        <button @click="updateSongs()">Actualizar</button>

    </div>
</template>