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
    <div class="bg blur bg-cover bg-repeat-y w-screen" style="height: calc(100vh + 10rem);"></div>

</template>
<style>
.bg {
    background-image: url(../static/apple.jpeg);
}

.bg1 {
    background-image: url(../static/please.jpeg);
}

.bg2 {
    background-image: url(../static/with.png);
    background-size: cover;

}

.bg3 {
    background-image: url(../static/hard.png);
}

.bg4 {
    background-image: url(../static/sale.jpeg);
}

.bg5 {
    background-image: url(../static/help.jpeg);
}

.bg6 {
    background-image: url(../static/rubbersoul.jpeg);
}

.bg7 {
    background-image: url(../static/revolver.jpeg);
}

.bg8 {
    background-image: url(../static/pepper.jpeg);
}


.bg9 {
    background-image: url(../static/magical.png);
}

.bg10 {
    background-image: url(../static/yellow.png);
}

.bg11 {
    background-image: url(../static/white.jpeg);
}

.bg12 {
    background-image: url(../static/abbeyroad.jpeg);
}

.bg13 {
    background-image: url(../static/letitbe.png);
}

.bg15 {
    background-image: url(../static/anthology.png);
}
</style>