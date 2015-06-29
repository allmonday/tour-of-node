var express = require('express');
var superagent = require('superagent');
var cheerio = require('cheerio');

var app = express();

app.get('/', function (req, res, next) {
	superagent.get('http://www.51voa.com/VOA_Standard_1.html')
		.end(function (err, sers) {
			if (err) {
				return next(err);
			}
			
			var $ = cheerio.load(sers.text);
			var items = [];
			$('#list li a').each(function (idx, element) {
				var $element = $(element);
				items.push({
					title: $element.text(),
					href: $element.attr('href')
				})
			})
			res.send(items);	
		})
})

app.listen(3000, function () {
	console.log('listening at port 3000');
})
