const express = require('express');
const router = express.Router();
const withAuth = require('../../utils/auth');
// Hypothetical database or data access layer
const blogPosts = []; // This would be replaced with actual database operations

const { Blog } = require('../../models');


// Route to create a new blog post
router.post('/', withAuth, async (req, res) => {
  const { title, content } = req.body;
  console.log(req.body);
  // const newPost = {
  //   id: blogPosts.length + 1, // Simplified unique ID generation
  //   title,
  //   content,
  //   author,
  //   createdAt: new Date(),
  //   updatedAt: new Date()
  // };

  if (!title || !content) {
    return res.status(400).json({ error: 'Title and content are required' });
  }

  Blog.create(req.body).then((post) => {
    console.log(post);

    blogPosts.push(post);
    res.status(201).json(post);

  }).catch((err) => {
    console.log(err);
    res.status(500).send('Internal Server Error!');
  })

  res.render('blogpost');
});

// Route to update an existing blog post
router.put('/:id', withAuth, async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  const postIndex = blogPosts.findIndex(post => post.id === parseInt(id));
  if (postIndex === -1) {
    return res.status(404).json({ message: 'Post not found' });
  }

  const updatedPost = {
    ...blogPosts[postIndex],
    title,
    content,
    updatedAt: new Date()
  };

  blogPosts[postIndex] = updatedPost;
  res.json(updatedPost);
});

// Route to delete a blog post
router.delete('/:id', withAuth, (req, res) => {
  const { id } = req.params;
  
  const postIndex = blogPosts.findIndex(post => post.id === parseInt(id));
  if (postIndex === -1) {
    return res.status(404).json({ message: 'Post not found' });
  }

  blogPosts.splice(postIndex, 1);
  res.status(200).json({ Success: 'Blog Post Deleted'});
});



module.exports = router;