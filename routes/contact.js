/*
File: contact.js
Student: Brendan James
StudentID: 301257167
Date: October 3rd, 2023
*/

const express = require('express');
const router = express.Router();

// Define a route for the Contact page
router.get('/contact', (req, res) => {
  // Render the contact.ejs view
  res.render('contact', {
    title: 'Contact Me',
    contactInfo: {
      email: 'bjames33@my.centennialcollege.ca',
      phone: 'xxx-xxx-xxxx',
    }
  });
});

router.post('/submitForm', (req, res) => {
  // Process form data
  const formData = req.body;

  console.log(formData);
  
  // Redirect back to the Home
  res.redirect('/');
});

module.exports = router;