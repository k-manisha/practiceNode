//To receive and parse post requests in Node.js
 //Import the necessary libraries/declare the necessary objects
 
 var express = require("express");
 var myParser = require("body-parser");
 var app = express();

  app.use(myParser.urlencoded({extended : true}));

  app.post("/yourpath", function(request, response) {

      console.log(request.body); //This prints the JSON document received (if it is a JSON document)
// if u r listening for GET request, use app.get and omit .body from request.bodey as GET requests don't have bodies
});
//Start the server and make it listen for connections on port 8080

 
app.listen(8080);
//line 10,12
app.post("/registeruser", function(request, response) {
       saveRegistrationData(request); //This is what happens when a POST request is sent to /registeruser
 });
/* To respond to POST requests, simply type 
response.send(“Whatever string or other variable you want to send goes here“); or
 response.write(“Thank you” or variable containing HTML file); inside of the 
 app.post function to let the user know if their submission has been received. */
 /* If you’re receiving a JSON object or JSON array, you may need to 
 change myParser.urlencoded to myParser.json */
//Sending POST Requests With An HTML Form To A Node.js Server
 <form name="regform" action="/registeruser" method="POST">
Username: <input type="text" name="username">
Password: <input type="password" name="password">
<button type="submit" id="submitbutton">Register</button>
</form>