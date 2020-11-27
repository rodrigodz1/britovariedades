const express = require('express')
const multer = require('multer')
const PostController = require('./src/controllers/PostController')

const routes = express.Router()

const productPhoto = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + file.originalname)
    }
})

const upload = multer({ storage: productPhoto,
                        limits: { fileSize: 1000000 },
                        fileFilter(req,file,cb){
                            if(!file.originalname.match(/\.(jpg|png|JPG|PNG|JPEG|jpeg)$/))
                                return cb(new Error('This is not a correct format of the file'))
                            cb(undefined,true)
                        } })
// Posts
routes.get('/posts', PostController.index)
routes.get('/posts/:postId', PostController.indexOne)
routes.post('/posts', upload.single('productPhoto'), PostController.create)
routes.delete('/posts/:postId', PostController.delete)
routes.patch('/posts/:postId', PostController.put)


module.exports = routes;