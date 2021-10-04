const fs = require('fs');
const colors = require('colors');

// const fs = required('express');
// const fs = required('./archivo')

let listarTabla = (base, limite) => {    
    for (let i = 0; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('No es un numero');
            return;
        }
        let texto = "";
        for (let i = 0; i <= limite; i++) {
            texto += `${base} * ${i} = ${base * i}\n`;
        }
        fs.writeFile(`./tablas/tabla de ${base}.txt`, texto, (err) => {
            if (err) reject(err);
            else resolve(`tabla de ${base}.txt`)
        });
    })
}

// module es un objeto global de la clase que contiene informacion del script, en ella se puede agregar cuales funciones o prpiedades estaran disponibles para otros scripts
// console.log(module);

module.exports = {
    crearArchivo,
    listarTabla
} // exports ayuda a q las funciones de la clase sean visualizadas por otras clases y la puedan usar