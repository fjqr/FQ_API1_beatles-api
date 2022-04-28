const Pool = require('pg')
const {db} = require('./config')

const pool = new Pool({
    user: db.user,
    host: db.password,
    database: db.database,
    password: db.password,
    port: db.port
})



module.exports = pool