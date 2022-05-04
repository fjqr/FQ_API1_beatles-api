const { Router } = require('express')
const { getAlbums, getBeatles, getAnAlbum, createAlbum, createSong, getASong, albumSongs } = require('../controllers/tasks.controllers')

const router = Router()

router.get('/albums', getAlbums)


router.get('/beatles', getBeatles)
router.get('/getalbum/:id', getAnAlbum)
router.post('/createalbum', createAlbum)
router.post('/createsong', createSong)
router.get('/getsong/:id', getASong)
router.get('/albumsongs/:id', albumSongs)


router.put('/', (res, req) => {
    res.send('Hola')
})


router.delete('/', (res, req) => {
    res.send('Hola')
})

module.exports = router