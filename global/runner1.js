var G = require('./global');

function add() {
	[1,2,3,4,5,6,7,8,9].map(function (i) {
		G.GLOBAL.q.push(i, function (err) {
			console.log('runner 1');
		});
	})
}

exports.add = add;
