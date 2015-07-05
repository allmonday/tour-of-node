define('moduleA', ['moduleB', 'moduleC'], function (require, exports, module) {
	var mb = require('moduleB');
	var mc = require('moduleC');
	mb.hello();
	mc.hello();
})
