<script>
import { onMounted, reactive } from 'vue'
import { useFetch } from '../../fetch'
import { RouterLink, RouterView } from 'vue-router'

export default {

  setup() {
    let data = reactive({})
    const estado = reactive({
      show: false,
      urlAlbums: '/albums',
      //urlAlbums: 'http://localhost:3000/albums',
      urlSongs: null,
      newUrl: null,
      showSongs: false
    })

    const getAlbums = async () => {
      data.datos = await useFetch(estado.urlAlbums)
    }


    onMounted(() => {
      getAlbums()

    })
    return {
      estado, getAlbums, data
    }
  }
}
</script>
<template>

  <main class="container p-4 sm:p-16 font-Questrial">
    <p class="text-5xl sm:text-6xl">Lista de Discos:</p>
    <div class="sm:overflow-y-auto h-96 mt-4 p-0">

      <table class="table table-auto md:w-full md:mt-10  text-sm  md:text-base w-full" ref="tabla">
        <thead class="table-header-group">
          <tr class="table-row">
            <th class="table-cell text-left px-2 sm:px-8">Título</th>
            <th class="table-cell text-left px-2 sm:px-8">Año</th>
            <th class="table-cell text-left px-2 sm:px-8">Tipo</th>
            <th class="table-cell text-left px-2 sm:px-8">Canciones</th>
          </tr>
        </thead>
        <tbody class="table-row-group">
          <tr v-for="datos of data.datos" class="table-row">
            <td class="table-cell px-2 sm:px-8">{{ datos.title }}</td>
            <td class="table-cell px-2 sm:px-8">{{ datos.year }}</td>
            <td class="table-cell px-2 sm:px-8">{{ datos.type }}</td>
            <td class="table-cell px-2 sm:px-8">
              <button class="bg-gray-900 text-gray-200 p-2 m-1">
                <RouterLink :to="`/songs/${datos.id}`">Ver</RouterLink>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>

</template>

