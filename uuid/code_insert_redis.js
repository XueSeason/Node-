var redis = require('redis');
var code = require('./code');

var client = redis.createClient();
var codes = code.getCode(20);

client.rpush('codes', codes, function (err, res) {
	if(err){
		console.error(err);
		return;
	}
	console.log(res);
	client.quit();
});