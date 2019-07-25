const express = require('express');

const router = express.Router();

const Post = require('../models/Posts')

//get all posts
router.get('/', async (req, res)=>{
    try{
        posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message: err});
    }
})

//Add a post
router.post('/',async (req, res)=>{
    //console.log(req.body);
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    try{
        const savedPost = await post.save();
        res.json(savedPost);
    }catch(err){
        res.json({message: err});
    }
})

// get A specific post
router.get('/:id', async (req, res)=>{
    try{
        const specificPost = await Post.findById(req.params.id);
        res.json(specificPost);
    }catch(err){
        res.json({message:  err});
    }
})

//Delete a specific post
router.delete('/:id', async (req, res)=>{
    try{
        const deletedPost = await Post.deleteOne({'_id':req.params.id});
        res.json(deletedPost);
    }catch(err){
        res.json({message: err});
    }
})

//Update Post
router.patch('/:id', async (req, res)=>{
    try{
        const updatedPost = await Post.updateOne({'_id':req.params.id},
                                             {$set: {title: req.body.title}});
        res.json(updatedPost);
    }catch(err){
        res.json({message: err});
    }
})

module.exports = router;
