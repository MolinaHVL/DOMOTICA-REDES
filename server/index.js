var express = require('express');
var app = express();
var server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(express.static('public'));

io.on('connection', function (socket) {
    console.log("usuario conectado")
    socket.on('comando_html_python', function (data) {
        console.log(data);
        io.sockets.emit('comando_python_arduino', data);
    });
    socket.on('sprinklers_status', function (data) {
        console.log('SPRINKLERS: ' + data);
        io.sockets.emit('sprinklers', data);
    });

    socket.on("message", (data) => {
        console.log("Received message:", data);
        // Broadcast the message to all connected clients
        io.emit("message", data);
    });

    socket.on("temperature", (data) => {
        console.log("Received temperature:", data);
        // Broadcast the message to all connected clients
        io.emit("temperature", data);
    });

    socket.on("indoorLights", (data) => {
        console.log("Lights Changed:", data);
        // Broadcast the message to all connected clients
        io.emit("indoorLights", data);
    });
});


server.listen(5001, function () {
    console.log("Servidor corriendo en el puerto 5001.")
});