var express = require('express');
var app = express();
/*
app.get('/', function(req, res){
   res.send("Hello world!");
});
app.post('/hello', function(req, res){
   res.send("You just called the post method at '/hello'!\n");
}); 
app.all('/test', function(req, res){
   res.send("HTTP method doesn't have any effect on this route!");
});
//Other routes here
app.get('*', function(req, res){
   res.send('Sorry, this is an invalid URL.');
});
*/
var things = require('./things.js');
app.use('/things',things);
app.listen(3000);