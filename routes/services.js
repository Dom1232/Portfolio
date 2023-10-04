/*
File: services.js
Student: Brendan James
StudentID: 301257167
Date: October 3rd, 2023
*/

const express = require('express');
const router = express.Router();

// Define a route for the Services page
router.get('/services', (req, res) => {
  res.render('services'); // Render the services.ejs view
});

module.exports = router;