var socket = io.connect('https://domotica-back.onrender.com', { 'forceNew': true });
var explodedValues = [4];
//ROOM
function encender_luces_cuarto() {
    socket.emit("comando_html_python", "INDOOR LIGHTS ON");
}
function apagar_luces_cuarto() {
    socket.emit("comando_html_python", "INDOOR LIGHTS OFF");
}
//LIVINGROOM
function encender_luces_sala() {
    socket.emit("comando_html_python", "OUTDOOR LIGHTS ON");
}
function apagar_luces_sala() {
    socket.emit("comando_html_python", "OUTDOOR LIGHTS OFF");
}
//GARAGE
function encender_ventilador() {
    socket.emit("comando_html_python", "FAN ON");
}
function apagar_ventilador() {
    socket.emit("comando_html_python", "FAN OFF");
}
//RESTROOM
function encender_celda() {
    socket.emit("comando_html_python", "CELL ON");
}
function apagar_celda() {
    socket.emit("comando_html_python", "CELL OFF");
}
//KITCHEN
function encender_luces_cocina() {
    socket.emit("comando_html_python", "KITCHEN LIGHTS ON");
}
function apagar_luces_cocina() {
    socket.emit("comando_html_python", "KITCHEN LIGHTS OFF");
}
