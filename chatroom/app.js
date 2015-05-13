var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
	io.emit('a user connected');

  socket.on('disconnect', function () {
    io.emit('user disconnected');
  });

  socket.on('chat message', function (msg) {
  	io.emit('chat message', msg);
  });
});

http.listen(3000, function () {
	console.log('Server at localhost:3000');
});