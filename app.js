/*
  Author: Tim Aryavong
  Date: June 6, 2020
  Course: Javascript Frameworks
  Decription: create portfolio website using Express and NodeJS.
  Additional: only changes made from default are routes and mongoDB
*/

'use strict';
var debug = require('debug');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var mongoose = require('mongoose'); // requires npm mongoose package
const uri = "mongodb+srv://root:admin@cluster0-0wwxc.mongodb.net/PortfolioDB?retryWrites=true&w=majority"; // wish to find a way to hide password

try { // from class lecture, verbatim
  mongoose.connect(uri, { useNewUrlParser: true }); // uri means Uniform Resource Identifier
  var db = mongoose.connection;
  db.on('error', function (err) { // on an error
    console.log(err);
  })
  db.once('open', function (callback) {
    console.log('Connected to MongoDB');
  })
}
catch (err) {
  consol.log("Error: " + err);
}

//var routes = require('./routes/index');
var routes = require('./routes');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncommented app.use(favicon... and placed a favicon.ico in /public to stop errors
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function () {
    debug('Express server listening on port ' + server.address().port);
});
