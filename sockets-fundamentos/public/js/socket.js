var socket = io();
// Escuchar (on)
socket.on('connect', function() {
    console.log('Conectado al servidor');
}) 
socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
})
// Emitir información al servidor (emit) de manera privada (solo el navegador que envio la solicitud sabe la accion que ejecuto)
// socket.emit('enviarMensaje', {
//     usuario: 'Danny',
//     message: 'Hola mundo'
// }, function(resp) {
//     console.log(resp);
// });

// Escuchar información
socket.on('enviarMensaje', function(message) {
    console.log(message);
})