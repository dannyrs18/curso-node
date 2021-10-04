// Abrir la conexión
let socket = io();

var searchParams = new URLSearchParams( window.location.search )
if(!searchParams.has('escritorio')){
    window.location = 'index.html';
    throw new Error('El escritorio es necesario');
}

var escritorio = searchParams.get('escritorio');
console.log(escritorio);

$('h1').text('Escritorio '+ escritorio)

$('button').on('click', function() {
    console.log('Hola');
    
    socket.emit('atenderTicket', {
        escritorio: escritorio
    }, function(resp) {
        console.log(resp);
        if (!resp.numero) {
            alert(resp)
            return $('small').text('Sin ticket')
        }
        $('small').text('ticket ' + resp.numero)
    })
})