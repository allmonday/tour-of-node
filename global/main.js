var async = require('async');

var G = require('./global');
var runner1 = require('./runner1');
var runner2 = require('./runner2');

var q = G.GLOBAL.q;

q.drain = function () {
	console.log('all done');
}

runner1.add()
runner1.add()
runner2.add()
