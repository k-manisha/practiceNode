
var express = require('express');
var app = express();
/*
var cookieParser = require('cookie-parser');
var a= app.use(cookieParser());
console.log(a);
*/
var bodyParser = require('body-parser');

//To parse URL encoded data
app.use(bodyParser.urlencoded({ extended: false }))

//To parse json data
var a = app.use(bodyParser.json());
console.log(a);