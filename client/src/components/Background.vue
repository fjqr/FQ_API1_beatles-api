<script>
import { reactive } from 'vue'
export default {
    props: {
        id: String
    },
    setup(props) {

        const estado = reactive({
            albumSongs: true,
            songs: {}
        })

        return {
            estado
        }
    }
}
</script>
<template>
    <div class="bg blur bg-cover w-screen h-screen"></div>
</template>
<style>
.bg {
    background-image: url(../assets/images/please.jpeg)
}
</style>