const express = require('express');
const router = express.Router();

// Login route
router.get('/signup', (req, res) => {
    // If the user is already logged in, redirect to the homepage
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    // Otherwise, render the 'login' template
    res.render('signup');
  });

router.get('/', (req, res) => {
  res.render('homepage');
})
  
  module.exports = router;