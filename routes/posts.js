const express =require("express");
const router = express.Router();
const Post = require("../models/Post");

//Show all posts 
router.get('/',async (req,res)=>{

    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.json({message:err});
    }
});


//SUBMIT A POST
router.post('/', async (req,res)=>{
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (err) {
        res.json({message:err});
    }
});


//SPECIFIC POST 
router.get('/:postId', async (req,res)=>{
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (err){
        res.json({ message: err});
    }
});

//DELETE POST
router.delete('/:postId',async (req,res)=>{
    try {
        const removePost = await Post.remove({_id:req.params.postId});
        res.json(removePost);
    } catch (error) { 
        res.json({ message: err});
    }
});

//UPDATE POST 
router.patch('/:postId',async (req,res)=>{
    try {
        const updatePost =await Post.updateOne(
            { _id : req.params.postId },
            { title : req.body.title }
            );
        res.json(updatePost);
    } catch (err) {
        res.json({ message: err});
    }
})

module.exports = router;
