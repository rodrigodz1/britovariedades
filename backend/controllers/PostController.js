
const Post = require('../models/Post')

module.exports = {
    async index(req, res){
        try {
            const posts = await Post.find()
            res.json(posts)
        } catch (error) {
            res.json({ message: error })
        }
    },

    async create(req, res){
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
    },

    async indexOne(req, res){
        try{
            const post = await Post.findById(req.params.postId)
            res.json(post)
        }catch(error){
            res.json({ message: error })
        }
    },

    async delete(req, res){
        try{
            const removedPost = await Post.deleteOne({ _id: req.params.postId })
            res.json(removedPost)
        }catch(error){
            res.json({ message: error })
        }
    },

    async put(req, res){
        try{
            const updatedPost = await Post.updateOne({ _id: req.params.postId },
                                                     { $set: { title: req.body.title } })
            res.json(updatedPost)
        }catch(error){
            res.json({ message: error })
        }
    }
}