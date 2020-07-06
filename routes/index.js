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

router.get('/about', function (req, res) {
  res.render('page', {
    page: {
      title: 'About Tim',
      content: 'So you want to know more?(write a smol blurb)'
    }
  }); // renders about.pug
});
router.get('/projects', function (req, res) {
  res.render('page', {
    page: {
      title: 'Projects',
      content: 'So you want to know about projects?(link to github? upload something?)'
    }
  }); // renders about.pug
});
router.get('/services', function (req, res) {
  res.render('page', {
    page: {
      title: 'Services',
      content: 'So you want to know about services?(what can I do?)'
    }
  }); // renders about.pug
});
router.get('/contact', function (req, res) {
  res.render('page', {
    page: {
      title: 'Contact Tim',
      email: 'timaryavong@gmail.com',
      phone: '789-456-1234',
      content: 'For inquiries please email or text.'
    }
  }); // renders about.pug
});

router.post('/contact', function (req, res) {
  const contact = new ContactModel({ name: { first: req.body.nameFirst, last: req.body.nameLast }, email: req.body.email, phone: req.body.phone });
  contact.save(function (err) {
    if (err) console.log(err);
    res.redirect('/contact');
  });
});

module.exports = router;
