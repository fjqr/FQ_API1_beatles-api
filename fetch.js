
const url =  'http://localhost:3000/albums'

const  getAlbums =  async url => {

    const res = await fetch(url)
        const data = await res.json()

        const table = document.querySelector(".table")
        let row = ""
         data.forEach(v => {
            row = table.insertRow()
            row.innerHTML = `
            <td>${v.title}</td>
            <td>${v.year}</td>
            <td>${v.type}</td>
            `
        })
        
    }

    document.querySelector(".get-albums").addEventListener("click",() =>{

        getAlbums(url)
    })