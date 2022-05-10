

export const useFetch = url => {
    let result = {}

  fetch(url)
    .then(data => data.json())
    .then(json => result.datos = json)
    .catch(err => result.error = err)
    return result
}


