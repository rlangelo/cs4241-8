var express = require('express');
var path = require('path');
var fs = require('fs');
var http = require('http');
var underscore = require('underscore');

var messages = [{
  ID: "2020",
  Message: "Hey, what's up?!"
},];


var app = express();
var port = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname, '/public')));

app.get('/messages', function (req, res) {
    res.send(JSON.stringify(messages))
});

app.post('/post', function (req, res) {
  messages.push({ID: "2021", Message:"FAM"});
  res.send(JSON.stringify(messages));
});

app.listen(port, function () {
    console.log('App is listening on port ' + port);
});
