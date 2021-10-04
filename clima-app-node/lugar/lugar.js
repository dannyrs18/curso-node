const axios = require('axios');

const getLugarLatLon = async(direccion) => {
    
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURI(direccion)}`,
        headers: {'X-RapidAPI-Key': '1f7945d0c4mshd6a968309a5501ep1cd1b3jsnc61f6898aa8d'}
    }); // llamamos un metodo create ya que tenemos que crear headers de la peticion

    let resp = await instance.get();

    if (resp.data.Results.length === 0) throw new Error(`No se encontro resultados para ${direccion}`)

    let {name, lat, lon} = resp.data.Results[0];
    
    return {
        name,
        lat,
        lon
    }
}

module.exports = {
    getLugarLatLon
}