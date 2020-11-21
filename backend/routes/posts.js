const express = require('express')
const multer = require('multer')
const router = express.Router();
const Post = require('../models/Post')

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

// GETS BACK ALL THE POSTS
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find()
        res.json(posts)
    } catch (error) {
        res.json({ message: error })
    }
})

// SUBMIT A POST
router.post('/', upload.single('productPhoto'), async (req, res) => {
    console.log(req.file);
    const post = new Post({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        img: req.file.filename,
    })

    try{
    const savedPost = await post.save();
    res.json(savedPost)
    }catch(err){
        res.json({ message: err })
    }
})

// GET A SPECIFIC POST
router.get('/:postId', async (req, res) => {
    try{
        const post = await Post.findById(req.params.postId)
        res.json(post)
    }catch(error){
        res.json({ message: error })
    }
})

// REMOVE A POST
router.delete('/:postId', async (req, res) => {
    try{
        const removedPost = await Post.deleteOne({ _id: req.params.postId })
        res.json(removedPost)
    }catch(error){
        res.json({ message: error })
    }
})

// UPDATE A POST
router.patch('/:postId', async (req, res) => {
    try{
        const updatedPost = await Post.updateOne({ _id: req.params.postId },
                                                 { $set: { title: req.body.title } })
        res.json(updatedPost)
    }catch(error){
        res.json({ message: error })
    }
})

module.exports = router;