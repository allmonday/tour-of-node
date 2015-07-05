// sample of amd cmd and old way
;(function (name, definition) {
	var hasDefine = typeof define === 'function',
		hasExports = typeof module !== 'undefined' && module.exports;

	if (hasDefine) { // amd or cmd
		define(definition);

	}	else if (hasExports) { // node
		module.exports = definition();

	} else {
		this[name] = definition();
	}

})('hello', function () {

	var hello = function () {
		console.log('hello');
	};

	return {
		hello: hello
	}
});
