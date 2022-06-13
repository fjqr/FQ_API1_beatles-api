<script>
import { reactive } from 'vue'
export default {

      setup() {
            const estado = reactive({
                  titulo: 'BEAT-API'
            })
            return {
                  estado
            }
      }
}
</script>

<template>
      <nav class="w-full text-gray-200 bg-gray-900 h-auto p-1 flex justify-center">
            <p class="text-7xl font-Expletus-Sans"> {{ estado.titulo }}</p>
      </nav>
</template>

