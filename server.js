
// Importar las dependencias
const express = require('express');
//const { Router } = require('./routes/routes');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);


//Configuaracion express
app.use(express.json())
app.use(express.urlencoded({extended: true}))
//app.use(cors())
//app.use("/",Router)




// Ruta para el archivo HTML
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/confi', function (req, res) {
    res.sendFile(__dirname + '/configuracion.html');
});

// Escuchar la conexión de Socket.IO
io.on('connection', function (socket) {
    
    console.log('Usuario conectado');

    // Escuchar el evento 'chat message 1' para el chat 1
    socket.on('chat message 1', function (msg) {
        console.log('Mensaje del chat 1: ' + msg);
        io.emit('chat message 1', msg);
    });

    // Escuchar el evento 'chat message 2' para el chat 2
    socket.on('chat message 2', function (msg) {
        console.log('Mensaje del chat 2: ' + msg);
        io.emit('chat message 2', msg);
    });

    // Escuchar la desconexión del usuario
    socket.on('disconnect', function () {
        console.log('Usuario desconectado');
    });
});

// Iniciar el servidor HTTP en el puerto 3000
http.listen(3000, function () {
    console.log('Servidor escuchando en http://localhost:3000');
});
