const { argv } = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
});

const { getLugarLatLon } = require('./lugar/lugar')
const { getClima } = require('./clima/clima')


const temperatura = async(direccion) => {
    let lugar = await getLugarLatLon(direccion);
    let temp = await getClima(lugar.lat, lugar.lon);
    return `El clima de ${direccion} es de ${temp}°C`
}
temperatura(argv.d)
.then(console.log)
.catch(console.log);