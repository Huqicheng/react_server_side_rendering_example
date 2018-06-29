/*
* Entry of the Project.
 */

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fs = require("fs");
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', function(req, res){
  fs.readFile("./public/files/test.md", function(err, data) {
    if(err) {
      return res.send(err.message);
    }

    let html = require("./server_page/page.generator.js")({content: data.toString()});
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(html);
  });
});




app.listen(3000);
