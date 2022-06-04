

// export const useFetch = (url, method = "GET", body = null) => {
//   let result = {}
//   if (method !== "GET") {
//     fetch(url, {
//       method,
//       body: JSON.stringify(body),
//       headers: { "Content-type": "application/json" }
//     })
//       .then(res => {
//         result.datos = res.json()
//         console.log(res)
//       })
//       .catch(err => {
//         err.message
//       })
//   } else {

//     fetch(url)
//       .then(data => data.json())
//       .then(json => {
//         result.datos = json
//         //alert("Operación exitosa")
//       })
//       .catch(err => {
//         err.message
//       })
//   }
//   console.log(result)
//   return result
// }

export const useFetch = async (url, method = "GET", body = null) => {
  let result, data
  try {
    if (method !== "GET") {
      result = await fetch(url, {
        method,
        body: stringify(body),
        headers: { "Content-type": "application/json" }
      })
      data = await result.json()
      return data
    } else {
      result = await fetch(url)
      data = await result.json()
      return data
    }
  } catch (error) {
    console.error(`Ha habido un error: ${error}`)
  }

}
