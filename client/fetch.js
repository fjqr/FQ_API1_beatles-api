
//const url =  'http://localhost:3000/albums'

//export const useFetch = async url => {
export const useFetch = url => {
    let result = {}

    //const res = await fetch(url)
    //const data = await res.json()
  fetch(url)
    .then(data => data.json())
    .then(json => result.datos = json)
    .catch(err => result.error = err)
    return result
}


