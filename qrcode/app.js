var http = require('http');
var qrcode = require('qrcode');

http.createServer(function (req, res) {
	// qrcode.toDataURL('https://github.com', function (err, url) {
	// 	if(err){
	// 		console.error(err);
	// 	}
	// 	res.end(
	// 		"<!DOCTYPE html/><html><head><meta charset='utf-8'><title>二维码</title></head><body><p>请扫描二维码</p><img src='" + url + "'/></body></html>");
	// });
	qrcode.draw('https://github.com', function (err,canvas) {
		res.end(canvas.toBuffer());
	});
}).listen(3000, function () {
	console.log('Server at localhost:3000');
})