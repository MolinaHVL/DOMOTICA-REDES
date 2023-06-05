var express = require('express');
var app = express();
var server = require('https').Server(app);
const io = require('socket.io')(server);

app.use(express.static('public'));

io.on('connection', function (socket) {
    console.log("usuario conectado")
    socket.on('comando_html_python', function (data) {
        console.log(data);
        io.sockets.emit('comando_python_arduino', data);
    });

});


server.listen(5001, function () {
    console.log("Servidor corriendo en el puerto 5001.")
});