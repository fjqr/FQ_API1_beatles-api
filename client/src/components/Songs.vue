<script>
import {reactive} from 'vue'
export default {
    props: {
        songs: Object
    },
    setup(props){

        const estado = reactive({
            albumSongs: true,
            songs: {}
        })

        return{
            estado
        }
    }
}
</script>
<template>
<div class="absolute inset-0  w-full h-full bg-gray-400/75 flex items-center justify-center " v-if="estado.albumSongs === true">
      <ol class="m-6 list-decimal">
        <li v-for="songs of songs">{{songs}}</li>
      </ol>
    </div>
</template>