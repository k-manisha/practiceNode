const EventEmitter = require('events');
//const emitter = new EventEmitter();


var url='http://mylogger.io/log';
class Logger extends EventEmitter{
	log(message){
	//send an HTTP request
	console.log(message);
	//Raise an event
this.emit('messageLogged', {id: 1, url: 'http://'});
	//EventEmitter is a class, emitter its instance, emit is a method
	//messageLogged is name of the event
	/*A remote login service will generate id for message or
	give url to access that directly, so for sending multiple manuals
	about and event they are encapsulated in an object- event argument */
 }
}
module.exports= Logger;
//module.exports.endPoint=url;