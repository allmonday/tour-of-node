define('moduleB', function (require, exports, module) {
	// return {
	// 	hello: function () {
	// 		console.log('hello world');
	// 	}
	// }
	module.exports = {
		hello: function () {
			console.log('hello world');
		}
	}
})
