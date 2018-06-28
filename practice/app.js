//1
/* const path= require('path');
var pathObj= path.parse(__filename);
console.log(pathObj);
*/
//2
/* const os = require('os');
var tM = os.totalmem();
var fM = os.freemem();
console.log('Total memory'+ tM);
	//Template String- help built string without concatenation
	//using backtick character `
console.log(`Total memory: ${tM}`);
console.log(`Free memory: ${fM}`);*/
//3
/*
const fs = require('fs');
//const files = fs.readdirSync('./');
	// ./represents current folder
//console.log(files);
fs.readdir('./', function(err, files){
	if(err) console.log('Error',err);
	else console.log('Result', files)
});
*/
//4
//del no need anymore
const EventEmitter = require('events');
//const emitter = new EventEmitter();

	//register a listener- listener is called when event( messageLogged) is raised
	//on or addListenner required two arguments, name of event and a callback function
	//or the actual listener
//emitter.on('messageLogged',function(arg){//e,eventarg
const Logger = require('./logger');
const logger = new Logger();

logger.on('messageLogged',(arg)=>{
	console.log('Listener called', arg);
	//function called when event is raised
});
//function will also receive that event argument
	 


logger.log('message');