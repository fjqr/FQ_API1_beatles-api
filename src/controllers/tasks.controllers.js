const pool = require('../db')

const getBeatles = async (req,res,next) => {
    try {
        
        const beatles = await pool.query('SELECT * FROM MUSICIANS')
        res.status(200).json(beatles.rows)
        
    } catch (error) {
        next(error)
    }
}

const getAlbums = async (req,res,next) => {
    try {
      
        const albums = await pool.query('SELECT * FROM ALBUMS')
        res.status(200).json(albums.rows)
        
    } catch (error) {
        next(error)
    }
}


module.exports = {
    getAlbums,
    getBeatles
}