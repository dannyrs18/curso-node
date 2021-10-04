const { io } = require('../server');
const { TicketControl } = require('../classes/ticket-control')


const ticketControl = new TicketControl();

io.on('connection', (client) => {

    client.emit('stateTicket', {
        actual: ticketControl.getStateTicket(),
        ultimos4: ticketControl.getUltimos4()
    });

    client.on('nextTicket', (callback) => {
        callback(ticketControl.siguienteTicket()); 
    });

    client.on('atenderTicket', (data, callback) => {
        if (!data.escritorio) {
            return callback({
                err: true,
                message: 'El escritorio es necesario'
            })
        }

        let atenderTicket = ticketControl.atenderTicket(data.escritorio);
        
        callback(atenderTicket);

        client.broadcast.emit('nextTicket', {
            ultimos4: ticketControl.getUltimos4()
        })
    })

});