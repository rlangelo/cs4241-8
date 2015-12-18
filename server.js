var express = require('express');
var path = require('path');
var fs = require('fs');
var http = require('http');
var underscore = require('underscore');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var messages = [];


var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser());
app.use(cookieParser());

app.use(function (req, res, next) {
  var cookie = req.cookies.cookieName;
  if (cookie === undefined) {
    var randomNumber = Math.random().toString();
    randomNumber = randomNumber.substring(2, randomNumber.length);
    console.log(randomNumber);
    res.cookie('cookieName', randomNumber, {maxAge: 900000, httpOnly: true});
  }
  else {
    console.log('cookie exists', cookie);
  }
  next();
});

app.use(express.static(path.join(__dirname, '/public')));

app.get('/messages', function (req, res) {
    res.send(JSON.stringify(messages))
});

app.post('/', function (req, res) {
  var reqMessage = req.body.messPost;
  var idNumber = req.cookies.cookieName;
  messages.push({ID: idNumber, Message:reqMessage});
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(port, function () {
    console.log('App is listening on port ' + port);
});
