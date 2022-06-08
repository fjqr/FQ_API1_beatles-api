const { Router } = require('express')
const { updateSongs, getAlbums, getBeatles, getAnAlbum, createAlbum, createSong, getASong, albumSongs } = require('../controllers/tasks.controllers')

const router = Router()

router.get('/albums', getAlbums)


router.get('/beatles', getBeatles)
router.get('/getalbum/:id', getAnAlbum)
router.post('/createalbum', createAlbum)
router.post('/createsong', createSong)
router.get('/getsong/:id', getASong)
router.get('/albumsongs/:id', albumSongs)
//router.get('/albumsongs', albumSongs)


router.put('/updatesong/:id', updateSongs)




module.exports = router