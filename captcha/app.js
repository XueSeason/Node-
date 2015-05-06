var http = require('http');
var ccap = require('ccap')();
http.createServer(function (req, res) {
	var ary = ccap.get();
	var txt = ary[0];
	var buf = ary[1];
	res.end(buf);
	console.log(txt);
}).listen(3000, function () {
	console.log('Server running at port 3000');
});
