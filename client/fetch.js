

export const useFetch = (url, method = "GET", body = null) => {
  let result = {}
  if (method !== "GET") {
    fetch(url, {
      method,
      body: JSON.stringify(body),
      headers: { "Content-type": "application/json" }
    })
      .then(res => {
        result.datos = res.json()
        console.log(res)
      })
      .catch(err => {
        err.message
      })
  } else {

    fetch(url)
      .then(data => data.json())
      .then(json => {
        result.datos = json
        //alert("Operación exitosa")
      })
      .catch(err => {
        err.message
      })
  }
  //console.log(result)
  return result
}


