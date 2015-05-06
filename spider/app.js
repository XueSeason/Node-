var http = require('http');
var fs = require('fs');

var options = {
	hostname: 'movie.douban.com'
};

var body = "";
var dir = './images/';

var req = http.request(options, function (res) {
	res.setEncoding('utf8');
	res.on('data', function (chunk) {
		body += chunk;
	});
	res.on('end', function () {
		// var reg = /<img[^>]*src=\s*["']?([^"'%{}<>]+)["']?[^>]*alt=\s*["']?([^"'%{}<>]+)["']?[^>]*>/gi;
		var reg = /<img[^>]*src=\s*["']?([^"'%{}<>]+movie_poster_cover[^"'%{}<>]+.jpg)["']?[^>]*alt=\s*["']?([^"'%{}<>]+)["']?[^>]*>/gi;
		var match = null;
		while(match = reg.exec(body)) {
			function download() {
				var link = match[1];
				var alt = match[2];

				var callback = function (res) {
					// 设置为二进制编码
					res.setEncoding('binary');
					var dataBuffer = "";
					res.on('data', function (chunk) {
						dataBuffer += chunk;
					});
					res.on('end', function () {
						fs.writeFile(dir + alt + '.jpg', dataBuffer, 'binary', function (err) {
							if (err) throw err;
							console.log('Saved');
						});
					});
				};

				http.get(link, callback);
			}
			download();			
		}
	})
});

req.on('error', function (err) {
	console.log('problem with request: ' + err.message);
});

req.end();