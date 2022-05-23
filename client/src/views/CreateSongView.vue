<script>
import { onMounted,onUpdated, reactive } from 'vue'
import { useFetch } from '../../fetch'

export default {
    props: {
        id: {
            type: String,
            required: true
        }
    },
    setup(props) {

        const estado = reactive({
            data: {},
            method: "POST",
            titulo: null,
            duracion: null,
            lyrics: null,
            leadSinger: null,
            songwriter: null,
            beatlesUrl: 'http://localhost:3000/beatles',
            createSongUrl: 'http://localhost:3000/createsong',
            showData: false
        })
        const createSongs = () => {
            estado.data = {
                "title": estado.titulo,
                "duration": estado.duracion,
                "albumid": +props.id,
                "lyrics": estado.lyrics,
                "songwriter": estado.songwriter,
                "leadsinger": estado.leadSinger
            }
            useFetch(estado.createSongUrl, estado.method, estado.data)
            
        }

        return {
            estado, createSongs
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
                placeholder="Lyrics"></textarea>
            <input class="form-input m-4 w-80" v-model="estado.songwriter" name="songwriter" type="text" placeholder="Songwriter">
            <input class="form-input m-4 w-80" v-model="estado.leadSinger" type="text" name="Lead singer" id=""
                placeholder="Lead Singer">
            <!-- <button class="w-80 m-4" @click="show">Enviar</button> -->
        </form>
        <button @click="createSongs()">Enviar</button>

    </div>
</template>