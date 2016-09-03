/**
 * Created by http://myeonguni.com on 2016-09-02.
 */
 
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var fs = require("fs")
 
var server = app.listen(3000, function(){
 console.log("Express server has started on port 3000")
});
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(session({
 secret: '@#@$MYSIGN#@$#$',
 resave: false,
 saveUninitialized: true
}));
 
 
var router = require('./router/main')(app, fs);