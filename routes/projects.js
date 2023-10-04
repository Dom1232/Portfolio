/*
File: projects.js
Student: Brendan James
StudentID: 301257167
Date: October 3rd, 2023
*/

const express = require('express');
const router = express.Router();

// Define a route for the Projects page
router.get('/projects', (req, res) => {
  res.render('projects'); // Render the projects.ejs view
});

module.exports = router;