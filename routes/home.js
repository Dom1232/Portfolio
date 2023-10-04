/*
File: home.js
Student: Brendan James
StudentID: 301257167
Date: October 3rd, 2023
*/

const express = require('express');
const router = express.Router();

// Define a route for the Home page
router.get('/', (req, res) => {
  res.render('home'); // Render the home.ejs view
});

module.exports = router;