<script>
import { onMounted, reactive } from 'vue'
import { useFetch } from '../../fetch'

export default {

  setup() {
    const estado = reactive({
      show: false,
      data: {},
      urlAlbums: 'http://localhost:3000/albums'
    })

    const getAlbums = () => {
      estado.data = useFetch(estado.urlAlbums)
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
  <main class="container-xl ">
    <table class="table w-6/12 m-16">
      <thead class="table-header-group">
        <tr class="table-row">
          <th class="table-cell text-left">Título</th>
          <th class="table-cell text-left">Año</th>
          <th class="table-cell text-left">Tipo</th>
        </tr>
      </thead>
      <tbody v-if="estado.show === true" class="table-row-group">
        <tr v-for="datos of estado.data.datos" class="table-row">
          <td class="table-cell">{{ datos.title }}</td>
          <td class="table-cell">{{ datos.year }}</td>
          <td class="table-cell">{{ datos.type }}</td>
        </tr>
      </tbody>
    </table>
    <button @click=" estado.show = !estado.show" class="bg-gray-600 text-gray-200 p-2 m-16">Get Albums</button>
  </main>
</template>
