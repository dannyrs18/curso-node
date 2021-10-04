const axios = require('axios');

const getClima = async(lat, lon) => {
    // console.log(lat, lon);
    
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e1ff5951e67c2ab79c744e36bc81cbcc&units=metric`)
    
    // if (resp.data.Results.length === 0) throw new Error(`No se encontro resultados para ${direccion}`)
    return resp.data.main.temp;
}

module.exports = {
    getClima
}