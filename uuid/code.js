var uuid = require('node-uuid');

function getCode (count) {
	var codes = [];
	for (var i = 0; i < count; i++) {
		codes.push(uuid.v4());
	}
	return codes;
}

exports.getCode = getCode;