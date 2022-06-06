<script>
import { onMounted, onUpdated, reactive } from 'vue'
import { useFetch } from '../../fetch'
import { RouterLink, RouterView } from 'vue-router'

export default {

  setup() {
    const estado = reactive({
      show: false,
      data: {},
      urlAlbums: 'http://localhost:3000/albums',
      urlSongs: null,
      newUrl: null,
      showSongs: false
    })

    const getAlbums = async () => {
      estado.data = await useFetch(estado.urlAlbums)
    }

    onMounted(() => {
      getAlbums()

    })
    return {
      estado, getAlbums
    }
  }
}
</script>
<template>

  <main class="container-xl p-16 font-sans">
    <p class="text-6xl">Lista de Discos:</p>
    <div class="overflow-y-auto h-96 mt-4">

      <table class="table table-auto w-max m-16 " ref="tabla">
        <thead class="table-header-group">
          <tr class="table-row">
            <th class="table-cell text-left px-8">Título</th>
            <th class="table-cell text-left px-8">Año</th>
            <th class="table-cell text-left px-8">Tipo</th>
            <th class="table-cell text-left px-8">Canciones</th>
          </tr>
        </thead>
        <tbody class="table-row-group">
          <tr v-for="datos of estado.data" class="table-row">
            <td class="table-cell px-8">{{ datos.title }}</td>
            <td class="table-cell px-8">{{ datos.year }}</td>
            <td class="table-cell px-8">{{ datos.type }}</td>
            <td class="table-cell px-8">
              <button class="bg-gray-900 text-gray-200 p-2 m-1">
                <RouterLink :to="`/albumsongs/${datos.id}`">Ver</RouterLink>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

