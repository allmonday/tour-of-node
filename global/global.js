var async = require('async');

var GLOBAL = {
	counter: 0,
	q: async.queue(function (task, cb) {
		setTimeout(function () {
			console.log('hello '+ task)
			cb();
		}, 1000);
	}, 2)
}
exports.GLOBAL = GLOBAL;
