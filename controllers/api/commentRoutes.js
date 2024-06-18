const express = require('express');
const router = express.Router();
const comments = []; // Assuming you have an array of comments

const { Comment } = require('../../models');

// Route to handle posting a comment
router.post('/', (req, res) => {
    const { author, content } = req.body;
  console.log(req.body);

    if (!author || !content) {
      return res.status(400).json({ error: 'Author and text are required' });
    }

    Comment.create(req.body).then((comment) => {
      console.log(comment);

      comments.push(comment);
      
      res.status(201).json(comment);

    }).catch((err) => {
      console.log(err);
      res.status(500).send('Internal Server Error!');
    })

    // const newComment = {
    //   id: comments.length + 1,
    //   author,
    //   text,
    //   createdAt: new Date(),
    // };

  });
  
  // Route to handle deleting a comment

router.delete('/:id', (req, res) => {
    const { id } = req.params;


    const commentIndex = comments.findIndex(comment => comment.id === parseInt(id));
    if (commentIndex === -1) {
      return res.status(404).json({ error: 'Comment not found' });
    }
  
    comments.splice(commentIndex, 1);

   res.status(200).json({ Success: 'Comment Deleted'});
    
  });





  module.exports = router;