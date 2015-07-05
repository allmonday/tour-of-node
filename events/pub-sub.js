var Emitter = require('events').EventEmitter;

var emitter = new Emitter();

emitter.on('event1', function (message) {
	console.log(message);
});

emitter.addListener('event2', function (message) {
	console.log(message);
});

emitter.emit('event1', 'hello');
emitter.emit('event2', 'hello2');
