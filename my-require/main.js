require.config({
	paths: {
		'moduleA': './moduleA',
		'moduleB': './moduleB'
	}
});

require(['moduleA', 'moduleB'], function (moduleA, moduleB) {
	console.log(moduleA.hello());
	moduleB.hello();
})
