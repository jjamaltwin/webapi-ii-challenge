const express = require('express');
const db = require('../Database/db');
const router = express.Router();


// GET ROUTES

router.get('/posts', async (req, res) => {
    try {
      const post = await db.find(req.query);
          res.status(200).json(post);
     
    } catch (error) {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: 'Error retrieving Posts',
      });
    }
  });


  router.get('/posts/:id', async (req, res) => {
    try {
      const posts = await db.findById(req.params.id);
  
      if (posts) {
        res.status(200).json(posts);
      } else {
        res.status(404).json({ message: 'The post with the specified ID does not exist' });
      }
    } catch (error) {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: 'The Post information could not be retrieved.',
      });
    }
  });


  router.get('/posts/:id/comments', async (req, res) => {
    try {
      const comments = await db.findPostComments(req.params.id);
  
      if (comments) {
        res.status(200).json(comments);
      } else {
        res.status(404).json({ message: 'The post with the specified ID does not exist.' });
      }
    } catch (error) {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: 'The comments information could not be retrieved.',
      });
    }
  });

  // POST ROUTES 

  router.post('/posts', async (req, res) => {
    const postInfo = {title , content} = req.body
    console.log(postInfo)
    try {
      const post = await db.insert(postInfo);
    if (post) {
        res.status(201).json(post);
 } else {
     res.status(404).json({message: 'There was an error while saving the post to the database'})
 }

    } catch (error) {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: 'There was an error while saving the post to the database',
      });
    }
  });

  router.post('/posts/:id/comments', async (req, res) => {
    const commentInfo = {text} = req.body 

    try {
      const comment = await db.insertComment(commentInfo);
        if (comment){
            res.status(201).json(comment)
        }
    else if (!(text && text.length)) {
        res.status(400).json({message: "Text is missing or empty"})
 }
} catch (err) {
    console.log(err);
    res.status(500).json({
        message:"Error loading comments"
    });

}
  });

  //  DELETE 

  router.delete('/posts/:id', async (req, res) => {
    try {
      const count = await db.remove(req.params.id);
      if (count > 0) {
        res.status(200).json({ message: 'The post has been removed' });
      } else {
        res.status(404).json({ message: 'The post could not be found' });
      }
    } catch (error) {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: 'Error removing the post',
      });
    }
  });


  module.exports = router ; 