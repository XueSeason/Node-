var mysql = require('mysql');
var code = require('./code');

// 生成200个uuid
var codes = code.getCode(200);

var conn = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : 'zZ123456789',
	database : 'uuid'
});

conn.connect(function (err) {
	if (err) {
		console.error(err);
		return;
	}
});

var sql_create_table = 'CREATE TABLE IF NOT EXISTS code(' +
						'id SMALLINT AUTO_INCREMENT,' +
						'code CHAR(20),' +
						'PRIMARY KEY(id)' +
						')';

conn.query(sql_create_table, function (err, res) {
	if (err) {
		console.error(err);
		return;
	}
	for (var i = 0; i < codes.length; i++) {
		var sql_insert_code = "INSERT code VALUES('code','" + codes[i] + "')";
		conn.query(sql_insert_code, function (err, res) {
			if(err){
				console.error(err);
				return;
			}
			console.log(res);
		});
	}
	conn.end();
});

