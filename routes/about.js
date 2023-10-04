/*
File: about.js
Student: Brendan James
StudentID: 301257167
Date: October 3rd, 2023
*/

const express = require('express');
const router = express.Router();

// Define a route for the About page
router.get('/about', (req, res) => {
  res.render('about'); // Render the about.ejs view
});

module.exports = router;