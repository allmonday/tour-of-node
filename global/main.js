var async = require('async');

var G = require('./global');
var runner1 = require('./runner1');
var runner2 = require('./runner2');

runner1.add()
runner2.add()

// var container;
// do {
// 	container = G.GLOBAL.queue.shift();
// 	if (container) {
// 		console.log(container);
// 	}
// } while (container)


var q = async.queue(function (task, cb) {
	setTimeout(function () {
		console.log('hello '+ task)
		cb();
	}, 1000);
}, 3)

q.drain = function () {
	console.log('all done');
}

q.push(G.GLOBAL.queue, function (err) {
	console.log('finished');
})
