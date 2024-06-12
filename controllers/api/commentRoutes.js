// Route to handle posting a comment
app.post('/comments', (req, res) => {
    const { author, text } = req.body;
  
    if (!author || !text) {
      return res.status(400).json({ error: 'Author and text are required' });
    }
  
    const newComment = {
      id: comments.length + 1,
      author,
      text,
      createdAt: new Date(),
    };
  
    comments.push(newComment);
    res.status(201).json(newComment);
  });
  
  // Route to handle deleting a comment
  app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    const commentIndex = comments.findIndex(comment => comment.id === parseInt(id));
  
    if (commentIndex === -1) {
      return res.status(404).json({ error: 'Comment not found' });
    }
  
    comments.splice(commentIndex, 1);
    res.status(204).send();
  });