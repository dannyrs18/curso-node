const fs = require('fs');

class Ticket {
    constructor(numero, escritorio) {
        this.numero = numero;
        this.escritorio = escritorio
    }
}

class TicketControl {
    constructor(){
        // El ultimo ticket que se genero
        this.ultimo = 0;
        // Fecha (Por cada nuevo dia va a evaluar l variable con el dia actual y se reiniciara)
        this.hoy = new Date().getDate();
        // Lista de cola de tickets
        this.tickets = [];
        // Obtenemos los ultimos 4 elementos generados para un escritorio
        this.ultimos4 = [];
        // La data que mantiene la información de la generacion de tickets por si se reicia el servidor
        let data = require('../data/data.json');
        // Acciones a tomar por si se reinicia el servidor
        if (data.hoy === this.hoy) {
            this.ultimo = data.ultimo;
            this.data = data.tickets;  
            this.ultimos4 = data.ultimos4;  
        } else {
            this.reiniciarConteo();
        }

    }

    // Genera nuevo ticket
    siguienteTicket() {
        this.ultimo += 1;
        let ticket = new Ticket(this.ultimo, null);
        this.tickets.push(ticket)
        this.grabarArchivo();
        
        return `Ticket ${this.ultimo}`
    }

    // Obtenemos el dato del ultimo ticket generado
    getStateTicket() {
        return `Ticket ${this.ultimo}`;
    }
    getUltimos4() {
        return this.ultimos4;
    }

    // Asignación de tickets a escritorio
    atenderTicket(escritorio) {
        // Revisamos si hay tockets 
        if(this.tickets.length === 0) {
            return 'No hay tickets';
        }
        // Borramos el primer elemento de la cola y obtenemos su valor
        let {numero} = this.tickets.shift();
        // Agregamos un ticket a un escritorio(llego como parametro)
        let atenderTicket = new Ticket(numero, escritorio);
        // agregamos esa variable al principio de la cola de los los ultimos 4
        this.ultimos4.unshift(atenderTicket);
        // eliminamos los datos de los ultimos 4 si la lista supera tal numero y quedar con los datos requeridos (4)
        if (this.ultimos4.length > 4) this.ultimos4.splice(-1, 1);

        // Guardamos esos cambios en el archivo
        this.grabarArchivo();
        // regresamos la informacion del escritorio con el ticket
        return atenderTicket;
    }

    // Guarda los datos de todos los tickets en un arhivo por si se necesitara reiniciar el servidor y no perder la info
    grabarArchivo() {
        let jsonData = {
            ultimo: this.ultimo,
            hoy: this.hoy,
            tickets: this.tickets,
            ultimos4: this.ultimos4
        };
        let jsonDataString = JSON.stringify(jsonData);
        fs.writeFileSync('./server/data/data.json', jsonDataString);
    }

    // Reinicia el conteo de tickets a 0 por si es un nuevo dia
    reiniciarConteo() {
        this.ultimo = 0;
        this.tickets = [];
        this.grabarArchivo();
        this.ultimos4 = []
        console.log('Se ha inicializado el sistema');
        
    }
}


module.exports = {
    TicketControl
}