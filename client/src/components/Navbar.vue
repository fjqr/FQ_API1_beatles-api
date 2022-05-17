<script>
import {reactive} from 'vue'
export default{

      setup(){
            const estado = reactive({
                  titulo: 'BEAT-API'
            })
            return{
                  estado
            }
      }
}
</script>

<template>
 <nav class="w-full text-gray-200 bg-gray-600 h-24 p-1">
<p class="text-2xl"> {{estado.titulo}}</p>
 </nav>
</template>

