var express = require('express');
var app = express();
var server = require('http').Server(app);
const io = require('socket.io')(server);
const ioClient = require('socket.io-client');

const socketExternal = ioClient('https://domotica-back.onrender.com');

socketExternal.on('comando_python_arduino', function (data) {
    console.log('Received event from other server:', data);
    // Emit the received event to all connected clients
    io.emit('comando_python_arduino', data);
});

app.use(express.static('public'));

io.on('connection', function (socketLocal) {
    console.log("usuario conectado")
    socketLocal.on('comando_python_arduino', function (data) {
        console.log(data);
        io.sockets.emit('comando_python_arduino', data);
    });
    socketLocal.on('sprinklers_status', function (data) {
        console.log('SPRINKLERS: ' + data);
        io.sockets.emit('sprinklers', data);
    });

    socketLocal.on("message", (data) => {
        console.log("Received message:", data);
        // Broadcast the message to all connected clients
        io.emit("message", data);
    });

    socketLocal.on("temperature", (data) => {
        console.log("Received temperature:", data);
        // Broadcast the message to all connected clients
        io.emit("temperature", data);
    });

    socketLocal.on("lightsStatus", function (data) {
        console.log('Received lightsStatus from a client:', data);

        // Then, you can broadcast this event to all other connected clients
        io.emit("lightsStatus", data);
    });
});


server.listen(5001, function () {
    console.log("Servidor corriendo en el puerto 5001.")
});
