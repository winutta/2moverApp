const express = require("express");

const app = express();

var server = app.listen(process.env.PORT||3000,() => console.log('listening at Port'));

app.use(express.static('public'));

const data = {posX:0,posY:0};

var socket = require('socket.io');

var io = socket(server);

io.sockets.on('connection',newConnection);

function newConnection(socket){
	console.log("new connection: " + socket.id);

	socket.on("sendPos",newData);

	function newData(nData){
		data.posX = nData.posX;
		data.posY = nData.posY;
		socket.broadcast.emit('getPos',data);
		// socket.broadcast.emit('getPos',{nData.x,nData.y});
	}
};