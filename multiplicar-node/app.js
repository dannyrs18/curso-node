const argv = require('./config/yargs').argv
// const { argv } = require('./config/yargs') // Tambien seria una opcion
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')
const colors = require('colors');
// Objeto global que obtiene informacion de todo el sistema y de node mismo
let argv2 = process.argv;
// argv de yargs
// console.log(argv._);
let command = argv._[0];
switch (command) {
    case 'crear':
        crearArchivo(argv.base, argv.limite)
        .then((message)=>{
            console.log("Archivo creado: "+message.green);
        }).catch(err => console.log(err))
    break;

    case 'listar':
        console.log("========================".red);
        console.log("==Tabla de multiplicar==".green );
        console.log("========================".red);
        listarTabla(argv.base, argv.limite)
    break;

    default:
        console.log('commando no reconocido');
}