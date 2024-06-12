const express = require('express');
const router = express.Router();

// Hypothetical database or data access layer
const blogPosts = []; // This would be replaced with actual database operations

// Route to create a new blog post
router.post('/posts', (req, res) => {
  const { title, content, author } = req.body;
  const newPost = {
    id: blogPosts.length + 1, // Simplified unique ID generation
    title,
    content,
    author,
    createdAt: new Date(),
    updatedAt: new Date()
  };

  blogPosts.push(newPost);
  res.status(201).json(newPost);
});

// Route to update an existing blog post
router.put('/posts/:id', (req, res) => {
  const { id } = req.params;
  const { title, content, author } = req.body;

  const postIndex = blogPosts.findIndex(post => post.id === parseInt(id));
  if (postIndex === -1) {
    return res.status(404).json({ message: 'Post not found' });
  }

  const updatedPost = {
    ...blogPosts[postIndex],
    title,
    content,
    author,
    updatedAt: new Date()
  };

  blogPosts[postIndex] = updatedPost;
  res.json(updatedPost);
});

// Route to delete a blog post
router.delete('/posts/:id', (req, res) => {
  const { id } = req.params;
  
  const postIndex = blogPosts.findIndex(post => post.id === parseInt(id));
  if (postIndex === -1) {
    return res.status(404).json({ message: 'Post not found' });
  }

  blogPosts.splice(postIndex, 1);
  res.status(204).send();
});

module.exports = router;