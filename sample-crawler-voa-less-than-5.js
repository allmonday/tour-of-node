var async = require('async');
var express = require('express');
var eventproxy = require('eventproxy');
var superagent = require('superagent');
var cheerio = require('cheerio');
var url = require('url');

var app = express();

var voaUrl = 'http://www.51voa.com/VOA_Standard_1.html';

var pageCrawler = function (voaUrl) {

	// 
	superagent.get(voaUrl)
		.end(function (err, res) {
			if (err) {
				return console.error(err);
			}

			// start page
			var topicUrls = [];
			var $ = cheerio.load(res.text);
			$('#list li a').each(function (idx, element) {
				var $element = $(element);
				var href = url.resolve(cnodeUrl, $element.attr('href'));
				topicUrls.push(href);
			});

			// concurrency freq limit to 5
			async.mapLimit(topicUrls, 5, function (topicUrl, cb) {
				superagent.get(topicUrl)
					.end(function (err, res) {
						console.log('fetch ' + topicUrl + ' successful');
						cb(null, [topicUrl, res.text]);	
					});
			}, function (err, topics) {
				topics = topics.map(function (topicPair) {
					var topicUrl = topicPair[0];
					var topicHtml = topicPair[1];
					var $ = cheerio.load(topicHtml);
					var retVal = {
						title: $('#title h1').text().trim(),
						href: topicUrl,
						mp3: $('#mp3').attr('href'),
						author: $('#content .byline').text().trim()
					};
					return retVal;
				});

				console.log(topics);

			});

		});
	// should be saved to database

}
