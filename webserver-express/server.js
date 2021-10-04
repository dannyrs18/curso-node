const express = require('express')
const app = express()
const hbs = require('hbs');

const port = process.env.PORT || 3000

// helpers (codigo enviado a archivo separadp)
// Son funciones que se ejecutan cuando el template lo requiere
require('./hbs/helpers')

// Todas las carpetas del path seran publicas.. cualquier persona puede visualizarlas 
app.use( express.static( __dirname + '/public' ))



// Express HBS - Manejo de plantillas dinamicamente (dependencia hbs)
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {res.render('home', {
    nombre: 'daNNy roMero',
    anio: 2019,
})})

app.get('/about', (req, res) => res.render('about'))

app.listen(port, (x) => {
    console.log(`puerto ${port} activado`);
})