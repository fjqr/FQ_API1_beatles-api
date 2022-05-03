const {Router} = require('express')
const {getAlbums, getBeatles,getAnAlbum} = require('../controllers/tasks.controllers')

const router = Router()

router.get('/albums', getAlbums)


router.get('/beatles', getBeatles)
router.get('/getalbum/:id', getAnAlbum)


router.get('/', (res,req) => {
    res.send('Hola')
})


router.put('/', (res,req) => {
    res.send('Hola')
})


router.delete('/', (res,req) => {
    res.send('Hola')
})

module.exports = router