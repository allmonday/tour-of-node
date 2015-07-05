var async = function (callback) {
	process.nextTick(function () {
		try {
			var b = c;
			var result = 'ello';
		} catch (error) {
			return callback(error);
		}
		callback(null, result);
	})
}

async(function (err, value) {
	if (err) {
		console.log('error: ', err);
		return;
	}
	console.log(value);
})
