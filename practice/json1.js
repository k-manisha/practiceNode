const myObj = {
	name: 'skip',
	age: 2,
	favFood: 'steak'
};
const myObjStr = JSON.stringify(myObj);
console.log(myObjStr);
console.log(myObj);
console.log(JSON.parse(myObjStr));
const http =require("http");
const serv = http.createServer(function(req,res){
	if(req.url ==='/'){
	//res.writeHead(200,{'Content': 'text'});
	res.write(myObjStr);
	res.end('\n hello World');
}
});
serv.listen(8081);
console.log("server runnuing");