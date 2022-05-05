<script>
import { onMounted, reactive } from 'vue'
//import {useFetch} from '../../fetch'
export default {

  setup() {
    const estado = reactive({
      data: {},
      urlAlbums: 'http://localhost:3000/albums'
    })
  const getAlbums = () => {

  fetch(estado.urlAlbums)
    .then(data => data.json())
    .then(json => estado.data.datos = json)
    .catch(err => estado.data.error = err)
  
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
  <main>
    <table>
      <thead>
        <th>Título</th>
        <th>Año</th>
        <th>Tipo</th>
      </thead>
      <tbody>
        <tr v-for="datos of estado.data.datos" >
          <td>{{datos.title}}</td>
          <td>{{datos.year}}</td>
          <td>{{datos.type}}</td> 
        </tr>
      </tbody>
    </table>
  </main>
</template>
