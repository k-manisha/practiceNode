var http = require('http');
var fs = require('fs');
var url = require('url');
//create server
http.createServer(function (request, response) {  
   // Parse the request containing file name
  var pathname = url.parse(request.url).pathname;
   
   // Print the name of the file for which request is made.
   console.log("Request for " + pathname + " received.");
   
   // Read the requested file content from file system
   fs.readFile(pathname.substr(1), function (err, data) {

      if (err) {
         console.log(err);
         // HTTP Status: 404 : NOT FOUND
         // Content Type: text/plain
         response.writeHead(404, {'Content-Type': 'text/JSON'});
      }else {	
         //Page found	  
         // HTTP Status: 200 : OK
         // Content Type: text/plain
         response.writeHead(200, {'Content-Type': 'text/JSON'});	
         
         // Write the content of the file to response body
         response.write(data);
         var d= JSON.parse(data);	
         console.log(d);
         console.log(d.empq.queue);
         
      }
      // Send the response body 
      response.end("The End");
    
      });
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');