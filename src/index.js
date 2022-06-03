const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const taskRoutes = require('./routes/task.routes')

const app = express()
const port = 3000
//const port = 5432

app.use(cors())
app.use(express.json())
app.use(taskRoutes)
app.use(bodyParser.json())

app.use(
    bodyParser.urlencoded({
        extended: true
    })
)

app.get('/', (req, res) => {
    res.json({ data: res })
})

app.use((err, req, res, next) => {
    return res.json({
        message: err.message
    })
})

app.listen(port, () => {
    console.log(`App corriendo en el puerto ${process.env.PORT || port}`)
})




