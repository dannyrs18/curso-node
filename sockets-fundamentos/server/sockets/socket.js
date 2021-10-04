const {io} = require('../server')

io.on('connection', (client) => {
    console.log('El cliente se ha conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        message: 'Bienvenido a esta aplicación'
    })

    // Si detecta q el cliente se desconecto
    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    })
    // Si detecta que el cliente envio un evento(emiter) para escucharlo y ejecutarlo(on)
    client.on('enviarMensaje', (message, callback) => {
        // console.log(message); 

        // if (message.usuario) callback({
        //     resp: 'Todo salio bien!!'
        // });
        // else callback({
        //     resp: 'Todo salio MALLL!!.'
        // })

        // Esto solo lo resive el navegador q envio el mensaje
        //client.emit('enviarMensaje', message)

        // Esto resive todos los navegadores que tienen la misma conexion
        client.broadcast.emit('enviarMensaje', message)

    })
})
