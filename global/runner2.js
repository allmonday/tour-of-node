var G = require('./global');

function add() {
	G.GLOBAL.counter += 1;
	G.GLOBAL.queue.push('hello~');
	G.GLOBAL.queue.push('world~');
}

exports.add = add;
