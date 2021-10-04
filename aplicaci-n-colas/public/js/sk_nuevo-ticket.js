// Establecer la conexión
var socket = io();
var lbl = $('#lblNuevoTicket');

socket.on('connect', function() {
    console.info('Conexión con el servidor');
})

socket.on('disconnect', function() {
    console.error('Desonectado del servidor');
    
})

socket.on('stateTicket', function(stateTicket) {
    lbl.text(stateTicket.actual);
})

$('button').on('click',function(evt) {
    socket.emit('nextTicket', function(nextTicket) {
        lbl.text(nextTicket);
    })
})