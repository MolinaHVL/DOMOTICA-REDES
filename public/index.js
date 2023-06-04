var socket = io.connect('192.168.0.107:5001', { 'forceNew': true });
var explodedValues = [4];
//ROOM
function encender_luces_cuarto() {
    socket.emit("comando_html_python", "ROOM LIGHTS ON");
}
function apagar_luces_cuarto() {
    socket.emit("comando_html_python", "ROOM LIGHTS OFF");
}
//LIVINGROOM
function encender_luces_sala() {
    socket.emit("comando_html_python", "LIVINGROOM LIGHTS ON");
}
function apagar_luces_sala() {
    socket.emit("comando_html_python", "LIVINGROOM LIGHTS OFF");
}
//GARAGE
function encender_luces_garage() {
    socket.emit("comando_html_python", "GARAGE LIGHTS ON");
}
function apagar_luces_garage() {
    socket.emit("comando_html_python", "GARAGE LIGHTS OFF");
}
//RESTROOM
function encender_luces_restroom() {
    socket.emit("comando_html_python", "RESTROOM LIGHTS ON");
}
function apagar_luces_restroom() {
    socket.emit("comando_html_python", "RESTROOM LIGHTS OFF");
}
//KITCHEN
function encender_luces_cocina() {
    socket.emit("comando_html_python", "KITCHEN LIGHTS ON");
}
function apagar_luces_cocina() {
    socket.emit("comando_html_python", "KITCHEN LIGHTS OFF");
}
//LAUNDRY
function encender_luces_laundry() {
    socket.emit("comando_html_python", "LAUNDRY LIGHTS ON");
}
function apagar_luces_laundry() {
    socket.emit("comando_html_python", "LAUNDRY LIGHTS OFF");
}
//OUTSIDE
function encender_luces_outside() {
    socket.emit("comando_html_python", "OUTSIDE LIGHTS ON");
}
function apagar_luces_outside() {
    socket.emit("comando_html_python", "OUTSIDE LIGHTS OFF");
}
//HALL
function encender_luces_pasillo() {
    socket.emit("comando_html_python", "HALL LIGHTS ON");
}
function apagar_luces_pasillo() {
    socket.emit("comando_html_python", "HALL LIGHTS OFF");
}
//LOBBY
function encender_luces_lobby() {
    socket.emit("comando_html_python", "LOBBY LIGHTS ON");
}
function apagar_luces_lobby() {
    socket.emit("comando_html_python", "LOBBY LIGHTS OFF");
}
//WASHER
function encender_lavadora() {
    socket.emit("comando_html_python", "WASHER ON");
}
function apagar_lavadora() {
    socket.emit("comando_html_python", "WASHER OFF");
}
//DRYER
function encender_secadora() {
    socket.emit("comando_html_python", "DRYER ON");
}
function apagar_secadora() {
    socket.emit("comando_html_python", "DRYER OFF");
}
//SHOWER
function encender_shower() {
    socket.emit("comando_html_python", "SHOWER ON");
}
function apagar_shower() {
    socket.emit("comando_html_python", "SHOWER OFF");
}
//SPRINKLERS
function encender_sprinklers() {
    socket.emit("comando_html_python", "SPRINKLERS ON");
}
function apagar_sprinklers() {
    socket.emit("comando_html_python", "SPRINKLERS OFF");
}
//FUNCIONES ESPECIALES
//SHOWER TIME
function encender_shower_time() {
    socket.emit("comando_html_python", "SHOWER TIME ON");
}
function apagar_shower_time() {
    socket.emit("comando_html_python", "SHOWER TIME OFF");
}
//GUESTS
function encender_visitas() {
    socket.emit("comando_html_python", "GUEST MODE ON");
}
function apagar_visitas() {
    socket.emit("comando_html_python", "GUEST MODE OFF");
}
//NIGHT MODE
function encender_noche() {
    socket.emit("comando_html_python", "NIGHT MODE ON");
}
function apagar_noche() {
    socket.emit("comando_html_python", "NIGHT MODE OFF");
}
//RIGHT SIDE
function encender_derecha() {
    socket.emit("comando_html_python", "RIGHT SIDE ON");
}
function apagar_derecha() {
    socket.emit("comando_html_python", "RIGHT SIDE OFF");
}
//LEFT SIDE
function encender_izquierda() {
    socket.emit("comando_html_python", "LEFT SIDE ON");
}
function apagar_izquierda() {
    socket.emit("comando_html_python", "LEFT SIDE OFF");
}
//ALL LIGHTS
function encender_todo() {
    socket.emit("comando_html_python", "ALL LIGHTS ON");
}
function apagar_todo() {
    socket.emit("comando_html_python", "ALL LIGHTS OFF");
}
//EVERYTHING
function encender_everything() {
    socket.emit("comando_html_python", "EVERYTHING ON");
}
function apagar_everything() {
    socket.emit("comando_html_python", "EVERYTHING OFF");
}

function enviar_comando() {
    var comando = document.getElementById('mensaje_manual').value;
    socket.emit('comando_html_python', comando);
}

socket.on('flama', function (data) {
    var element = document.getElementById("estatus_fuego")
    if (data === 'FIRE') {
        element.style.color = "#000000"
        element.innerHTML = `<div>` + data + `</div>`;
    } else {
        //var element = document.getElementById("room")
        element.style.color = "#ffffff"
        element.innerHTML = `<div>` + data + `</div>`;
    }
});

socket.on('alarma', function (data) {
    var element = document.getElementById("estatus_alarma")
    if (data === 'ACTIVE') {
        element.style.color = "#000000"
        element.innerHTML = `<div>` + data + `</div>`;
    } else {
        //var element = document.getElementById("room")
        element.style.color = "#ffffff"
        element.innerHTML = `<div>` + data + `</div>`;
    }
});

socket.on('toilet', function (data) {
    var element = document.getElementById("estatus_toilet")
    if (data === 'SEATED') {
        element.style.color = "#000000"
        element.innerHTML = `<div>` + data + `</div>`;
    } else if (data === 'FLUSHING') {
        //var element = document.getElementById("room")
        element.style.color = "#000000"
        element.innerHTML = `<div>` + data + `</div>`;
    } else {
        //var element = document.getElementById("room")
        element.style.color = "#ffffff"
        element.innerHTML = `<div>` + data + `</div>`;
    }
});

socket.on('garage', function (data) {
    var element = document.getElementById("estatus_garage")
    if (data === 'OPENED') {
        element.style.color = "#000000"
        element.innerHTML = `<div>` + data + `</div>`;
    } else if (data === 'OBSTRUCTED') {
        //var element = document.getElementById("room")
        element.style.color = "#000000"
        element.innerHTML = `<div>` + data + `</div>`;
    } else {
        //var element = document.getElementById("room")
        element.style.color = "#ffffff"
        element.innerHTML = `<div>` + data + `</div>`;
    }
});

socket.on('pir', function (data) {
    var element = document.getElementById("estatus_pir")
    if (data === 'MOTION') {
        element.style.color = "#000000"
        element.innerHTML = `<div>` + data + `</div>`;
    } else {
        element.style.color = "#ffffff"
        element.innerHTML = `<div>` + data + `</div>`;
    }
});


/// LIGHT COMMUNICATION

socket.on('room_leds', function (data) {
    var element = document.getElementById("room")
    if (data === 'ON') {
        element.style.color = "#000000"
        element.innerHTML = `<div>` + data + `</div>`;
    } else {
        //var element = document.getElementById("room")
        element.style.color = "#ffffff"
        element.innerHTML = `<div>` + data + `</div>`;
    }
});

socket.on('livingroom_leds', function (data) {
    var element = document.getElementById("livingroom")
    if (data === 'ON') {
        element.style.color = "#000000"
        element.innerHTML = `<div>` + data + `</div>`;
    } else {
        //var element = document.getElementById("room")
        element.style.color = "#ffffff"
        element.innerHTML = `<div>` + data + `</div>`;
    }
});

socket.on('garage_leds', function (data) {
    var element = document.getElementById("garage")
    if (data === 'ON') {
        element.style.color = "#000000"
        element.innerHTML = `<div>` + data + `</div>`;
    } else {
        //var element = document.getElementById("room")
        element.style.color = "#ffffff"
        element.innerHTML = `<div>` + data + `</div>`;
    }
});

socket.on('restroom_leds', function (data) {
    var element = document.getElementById("restroom")
    if (data === 'ON') {
        element.style.color = "#000000"
        element.innerHTML = `<div>` + data + `</div>`;
    } else {
        //var element = document.getElementById("room")
        element.style.color = "#ffffff"
        element.innerHTML = `<div>` + data + `</div>`;
    }
});

socket.on('kitchen_leds', function (data) {
    var element = document.getElementById("kitchen")
    if (data === 'ON') {
        element.style.color = "#000000"
        element.innerHTML = `<div>` + data + `</div>`;
    } else {
        //var element = document.getElementById("room")
        element.style.color = "#ffffff"
        element.innerHTML = `<div>` + data + `</div>`;
    }
});

socket.on('laundry_leds', function (data) {
    var element = document.getElementById("laundry")
    if (data === 'ON') {
        element.style.color = "#000000"
        element.innerHTML = `<div>` + data + `</div>`;
    } else {
        //var element = document.getElementById("room")
        element.style.color = "#ffffff"
        element.innerHTML = `<div>` + data + `</div>`;
    }
});

socket.on('outside_leds', function (data) {
    var element = document.getElementById("outside")
    if (data === 'ON') {
        element.style.color = "#000000"
        element.innerHTML = `<div>` + data + `</div>`;
    } else {
        //var element = document.getElementById("room")
        element.style.color = "#ffffff"
        element.innerHTML = `<div>` + data + `</div>`;
    }
});

socket.on('hall_leds', function (data) {
    var element = document.getElementById("hall")
    if (data === 'ON') {
        element.style.color = "#000000"
        element.innerHTML = `<div>` + data + `</div>`;
    } else {
        //var element = document.getElementById("room")
        element.style.color = "#ffffff"
        element.innerHTML = `<div>` + data + `</div>`;
    }
});

socket.on('lobby_leds', function (data) {
    var element = document.getElementById("lobby")
    if (data === 'ON') {
        element.style.color = "#000000"
        element.innerHTML = `<div>` + data + `</div>`;
    } else {
        //var element = document.getElementById("room")
        element.style.color = "#ffffff"
        element.innerHTML = `<div>` + data + `</div>`;
    }
});

socket.on('washer', function (data) {
    var element = document.getElementById("washer")
    if (data === 'ON') {
        element.style.color = "#000000"
        element.innerHTML = `<div>` + data + `</div>`;
    } else {
        //var element = document.getElementById("room")
        element.style.color = "#ffffff"
        element.innerHTML = `<div>` + data + `</div>`;
    }
});

socket.on('dryer', function (data) {
    var element = document.getElementById("dryer")
    if (data === 'ON') {
        element.style.color = "#000000"
        element.innerHTML = `<div>` + data + `</div>`;
    } else {
        //var element = document.getElementById("room")
        element.style.color = "#ffffff"
        element.innerHTML = `<div>` + data + `</div>`;
    }
});

socket.on('shower', function (data) {
    var element = document.getElementById("shower")
    if (data === 'ON') {
        element.style.color = "#000000"
        element.innerHTML = `<div>` + data + `</div>`;
    } else {
        //var element = document.getElementById("room")
        element.style.color = "#ffffff"
        element.innerHTML = `<div>` + data + `</div>`;
    }
});

socket.on('sprinklers', function (data) {
    var element = document.getElementById("sprinklers")
    if (data === 'ON') {
        element.style.color = "#000000"
        element.innerHTML = `<div>` + data + `</div>`;
    } else {
        //var element = document.getElementById("room")
        element.style.color = "#ffffff"
        element.innerHTML = `<div>` + data + `</div>`;
    }
});


