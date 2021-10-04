// Establecemos conexión
var socket = io();

socket.on('stateTicket', function(data) {
    paint(data.ultimos4);
})

socket.on('nextTicket', function(data){
    var audio = new Audio('audio/new-ticket.mp3');
    audio.play();
    paint(data.ultimos4)
})

function paint(data) {
    for (i=0; i < data.length; i++){
        $('#lblTicket'+(i+1)).text('Ticket ' + data[i].numero);
        $('#lblEscritorio'+(i+1)).text('Escritorio ' + data[i].escritorio);
    }
}