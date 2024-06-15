const express = require('express');
const router = express.Router();

// Login route
router.get('/sign-up', (req, res) => {
    // If the user is already logged in, redirect to the homepage
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    // Otherwise, render the 'login' template
    res.render('signup');
  });
  
  module.exports = router;