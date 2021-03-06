const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const taskRoutes = require('./routes/task.routes')
const path = require('path')
const history = require('connect-history-api-fallback')

app.use(cors())
let port = process.env.PORT || 3000


app.use(taskRoutes)
app.use(bodyParser.json())
app.use(express.json())
app.use(history())
app.use(express.static(path.join(__dirname, 'public')))

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
    console.log(`App corriendo en el puerto ${port}`)
})






