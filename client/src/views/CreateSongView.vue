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
            method: "POST",
            titulo: null,
            duracion: null,
            lyrics: null,
            leadSinger: null,
            songwriter: null,
            beatlesUrl: `/beatles`,
            createSongUrl: `/createsong`,
            showData: false,

        })
        const createSongs = () => {
            data = {
                "title": estado.titulo,
                "duration": estado.duracion,
                "albumid": +props.id,
                "lyrics": estado.lyrics,
                "songwriter": estado.songwriter,
                "leadsinger": estado.leadSinger
            }
            useFetch(estado.createSongUrl, estado.method, data)

            setTimeout(() => {
                location.reload()
            }, 2000)
        }

        return {
            estado, createSongs, data
        }
    }
}
</script>
<template>
    <div class="columns-1 m-16">

        <form class="flex flex-col">
            <input class="form-input m-4 w-80" v-model="estado.titulo" type="text" name="titulo" id=""
                placeholder="Título">
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
        <button @click="createSongs()" type="submit">Enviar</button>

    </div>
</template>