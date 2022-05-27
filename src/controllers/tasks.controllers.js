const pool = require('../db')

const getBeatles = async (req, res, next) => {
    try {

        const beatles = await pool.query('SELECT * FROM MUSICIANS')
        res.status(200).json(beatles.rows)

    } catch (error) {
        next(error)
    }
}

const getAlbums = async (req, res, next) => {
    try {

        const albums = await pool.query('SELECT * FROM ALBUMS')
        res.status(200).json(albums.rows)

    } catch (error) {
        next(error)
    }
}

const getAnAlbum = async (req, res, next) => {
    try {
        const { id } = req.params
        const album = await pool.query('SELECT * FROM Albums WHERE id = $1', [id])
        res.status(200).json(album.rows)
    } catch (error) {
        next(error)
    }

}

const createAlbum = async (req, res, next) => {
    try {
        const { year, title, type } = req.body
        const newAlbum = await pool.query('INSERT INTO albums (year,title,type) VALUES($1,$2,$3) RETURNING *', [year, title, type])
        res.json(newAlbum.rows)
    } catch (error) {
        next(error)
    }
}

const createSong = async (req, res, next) => {
    try {
        const { title, duration, albumid, lyrics, songwriter, leadsinger } = req.body
        const newSong = await pool.query('INSERT INTO songs(title,duration,albumid,lyrics,songwriter,leadsinger) VALUES($1,$2,$3,$4,$5,$6) RETURNING *', [title, duration, albumid, lyrics, songwriter, leadsinger])
        res.json(newSong.rows)
    } catch (error) {
        next(error)
    }
}

const getASong = async (req, res, next) => {
    try {
        const { id } = req.params
        const song = await pool.query('SELECT * FROM songs WHERE id = $1', [id])
        res.json(song.rows)
    } catch (error) {
        next(error)
    }
}

const albumSongs = async (req, res, next) => {
    try {
        const { id } = req.params
        const album_songs = await pool.query('SELECT * FROM songs WHERE albumid = $1', [id])
        //const albumSongs = await pool.query('SELECT * FROM songs')
        res.json(album_songs.rows)
    } catch (error) {
        next(error)
    }
}

const updateSongs = async (req, res, next) => {
    try {
        const { id } = req.params
        const { title, duration, albumid, lyrics, songwriter, leadsinger } = req.body
        const update_songs = await pool.query('UPDATE songs SET title = $1, duration = $2, albumid = $3, lyrics = $4, songwriter = $5, leadsinger = $6 WHERE id = $7', [title, duration, albumid, lyrics, songwriter, leadsinger, id])
        res.json(update_songs.rows)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getAlbums,
    getBeatles,
    getAnAlbum,
    createAlbum,
    createSong,
    getASong,
    albumSongs,
    updateSongs
}