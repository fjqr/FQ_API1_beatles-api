

export const useFetch = (url, method = "GET", body = null) => {
  let result = {}
  if (method !== "GET") {
    fetch(url, {
      method,
      body: JSON.stringify(body),
      headers: { "Content-type": "application/json" }
    })
      .then(res => result.datos = res.json())
      .catch(err => result.datos = err.message)
  } else {

    fetch(url)
      .then(data => data.json())
      .then(json => result.datos = json)
      .catch(err => result.datos = err.message)
  }
  console.log(result)
  return result
}


