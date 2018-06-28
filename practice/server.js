const express = require('express');
const app = express();
app.use(express.json());
const fs =require("fs");

app.get('/',(req,res)=>{
 /*fs.readFile(__dirname + "users.json",'utf8',function(err,data){
 var users =JSON.parse(data);
 var user = users["user"+ req.params.id]
 console.log(user);
 res.end(JSON.stringify(user));
 }); */
 res.send('Hello World!!!')
});
const courses = [
{id: 1, name: 'course1'},
{id: 2, name: 'course2'},
{id: 3, name: 'course3'}
];
app.get('/api/courses', (req,res)=>{
	res.send(courses);
});

//to repond to http post request
app.post('/api/courses',(req,res) =>{
	const course = {
		id: courses.length+1,
		name: req.body.name

	};
	courses.push(course);
	res.send(course);
});

app.get('/api/courses/:id',(req,res)=>{
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if(!course) res.status(404).send('The course with given id not found');
  res.send(course);
});
app.get('/api/posts/:year/:month',(req,res)=>{
  res.send(req.params);
});
app.get('/api/posts/:year/:month',(req,res)=>{
  res.send(req.query);
});
//PORT
const port = process.env.PORT || 3000;
var server = app.listen(port, ()=>{
	var host = server.address().address
	var port = server.address().port
	console.log("App listeing at http://%s:%s", host,port)
})