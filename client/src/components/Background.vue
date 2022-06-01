<script>
import { onMounted, reactive } from 'vue'

export default {
    props: {
        id: String
    },
    setup(props) {

        const estado = reactive({
            albumSongs: true,
            songs: {},
            bg: null
        })
        const changeBg = id => {
            const bg = document.querySelector(".bg")
            switch (id) {
                case "1":
                    bg.classList.replace("bg", "bg1")
                    break;
                case "2":
                    bg.classList.replace("bg", "bg2")
                    break;
                case "3":
                    bg.classList.replace("bg", "bg3")
                    break;
                case "4":
                    bg.classList.replace("bg", "bg4")
                    break;
                case "5":
                    bg.classList.replace("bg", "bg5")
                    break;
                case "6":
                    bg.classList.replace("bg", "bg6")
                    break;
                case "7":
                    bg.classList.replace("bg", "bg7")
                    break;
                case "8":
                    bg.classList.replace("bg", "bg8")
                    break;
                case "9":
                    bg.classList.replace("bg", "bg9")
                    break;
                case "10":
                    bg.classList.replace("bg", "bg10")
                    break;
                case "11":
                    bg.classList.replace("bg", "bg11")
                    break;
                case "12":
                    bg.classList.replace("bg", "bg12")
                    break;
                case "13":
                    bg.classList.replace("bg", "bg13")
                    break;
                case "15":
                    bg.classList.replace("bg", "bg15")
                    break;
            }
        }

        onMounted(() => {

            changeBg(props.id)

        })
        return {
            estado, changeBg
        }
    }
}
</script>
<template>
    <div class="bg blur bg-cover w-screen h-screen"></div>
</template>
<style>
.bg {
    background-image: url(../assets/images/apple.jpeg)
}

.bg1 {
    background-image: url(../assets/images/please.jpeg)
}

.bg2 {
    background-image: url(../assets/images/with.png)
}

.bg3 {
    background-image: url(../assets/images/hard.png)
}

.bg4 {
    background-image: url(../assets/images/sale.jpeg)
}

.bg5 {
    background-image: url(../assets/images/help.jpeg)
}

.bg6 {
    background-image: url(../assets/images/rubbersoul.jpeg)
}

.bg7 {
    background-image: url(../assets/images/revolver.jpeg)
}

.bg8 {
    background-image: url(../assets/images/pepper.jpeg)
}


.bg9 {
    background-image: url(../assets/images/magical.png)
}

.bg10 {
    background-image: url(../assets/images/yellow.png)
}

.bg11 {
    background-image: url(../assets/images/white.jpeg)
}

.bg12 {
    background-image: url(../assets/images/abbeyroad.jpeg)
}

.bg13 {
    background-image: url(../assets/images/letitbe.png)
}

.bg15 {
    background-image: url(../assets/images/anthology.png)
}
</style>