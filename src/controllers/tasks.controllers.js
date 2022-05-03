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

const getAnAlbum = async (req, res, next) => {
    try {
        const {id} = req.params
    const album = await pool.query('SELECT * FROM Albums WHERE id = $1',[id])
    res.status(200).json(album.rows)
    } catch (error) {
        next(error)
    }
    
}

const createAlbum = async (req,res,next) => {
    try {
        const {year,title,type} = req.value
        const newAlbum = await pool.query('INSERT INTO albums (year,title,type) VALUES($1,$2,$3) RETURNING',[year,title,type])
        res.status(200).json(newAlbum.rows)
    } catch (error) {
        next(error)
    }
}


module.exports = {
    getAlbums,
    getBeatles,
    getAnAlbum
}