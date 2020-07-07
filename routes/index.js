/*
  Author: Tim Aryavong
  Date: June 6, 2020
  Course: Javascript Frameworks
  Decription: routes for 5 different versions of page.pug render
  Additional: page.pug only renders two pages differently: contacts and projects. All other pages are just rendered with different data.
*/

'use strict';
var express = require('express');
var router = express.Router();
var ContactModel = require('../models/Contact');

/* GET home page. */
router.get('/', function (req, res) {
  res.render('page', {
    page: {
      title: 'Tim Aryavongs\'s Portfolio Site',
      content: 'Welcome! My name\'s Tim and ....stuff'
    }
  });
});

// renders about.pug
router.get('/about', function (req, res) {
  res.render('page', {
    page: {
      title: 'About Tim',
      content: 'Tim is currently a student at Georgian College studying in the Computer Programmer Analayst program.'
    }
  }); 
});

// renders projects.pug
router.get('/projects', function (req, res) {
  res.render('page', {
    page: {
      title: 'Projects',
      content: "Here are some projects/assignments that I've done: ",
      dotnet: 'https://' + 'github.com/TimAryavong/assign1/blob/idontunderstandgit/README.md',
      javascript: 'https://' + 'github.com/TimAryavong/Course_Project-Phase_One',
      javascript2: 'https://' + 'github.com/TimAryavong/2020JavascriptClass/blob/master/assignment1.html'
    }
  }); 

// renders services.pug
});
router.get('/services', function (req, res) {
  res.render('page', {
    page: {
      title: 'Services',
      content: 'So you want to know about services?(what can I do?)'
    }
  });
});

// renders contact.pug
router.get('/contact', function (req, res) {
  res.render('page', {
    page: {
      title: 'Contact Tim',
      email: 'timaryavong@gmail.com',
      phone: '789-456-1234',
      content: 'For inquiries please email or text.'
    }
  }); 
});

// posts contact info to mongoDB
router.post('/contact', function (req, res) {
  const contact = new ContactModel({ name: { first: req.body.nameFirst, last: req.body.nameLast }, email: req.body.email, phone: req.body.phone });
  contact.save(function (err) {
    if (err) console.log(err);
    res.redirect('/contact');
  });
});

module.exports = router;
