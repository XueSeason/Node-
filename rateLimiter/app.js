var createPacer = require('pacer');

var pacer = createPacer({
	limit: 5,
	reset: 10
});

pacer.consume('season', function (consumer) {
	console.log('consume');
	console.log(consumer);
});

pacer.consume('season', function (consumer) {
	console.log('consume');
	console.log(consumer);
});

pacer.query('season', function (consumer) {
	console.log('query');
	console.log(consumer);
})