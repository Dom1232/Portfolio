/*
File: index.js
Student: Brendan James
StudentID: 301257167
Date: October 3rd, 2023
*/

//Import and Define Express
const express = require('express');
const app = express();
//Set View Engine
app.set('view engine', 'ejs');
//Serve Static Files
app.use(express.static('public'));
//Import and use middleware for data
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// Include route files
const homeRouter = require('./home');
const aboutRouter = require('./about');
const projectsRouter = require('./projects');
const servicesRouter = require('./services');
const contactRouter = require('./contact');

// Use the route files
app.use('/', homeRouter);
app.use('/', aboutRouter);
app.use('/', projectsRouter);
app.use('/', servicesRouter);
app.use('/', contactRouter);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});