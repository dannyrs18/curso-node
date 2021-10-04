const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('./db/data.json', data, err => {
        if (err) throw new Error('No se pudo grabar', err);
        console.log('El archivo se ha guardado exitosamente');
    })
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json'); // Node al detectar que es un archivo json automaticamente lo serializa a un objeto javascript
    } catch (error) {
        console.log('Generando archivo');
    }
}

const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        code: listadoPorHacer.length+1,
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (desc, comp) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === desc);
    
    if(index >= 0) {
        listadoPorHacer[index].completado=comp;
        guardarDB();
        return true;
    }
    return false;
}

const borrar = (desc) => {
    cargarDB();
    
    let nuevoListado = listadoPorHacer.filter( element => element.descripcion !== desc);
    
    if (nuevoListado.length === listadoPorHacer.length) {
        return false
    }
    listadoPorHacer = nuevoListado;
    guardarDB();
    return true;
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}
