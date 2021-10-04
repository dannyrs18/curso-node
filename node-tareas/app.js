const { argv } = require('./config/yargs')
const { crear, actualizar, getListado, borrar } = require('./por-hacer/por-hacer')
const colors = require('colors')
switch (argv._[0]) {
    case 'crear':
        console.log(crear(argv.descripcion));
    break;

    case 'listar':
        let listado = getListado();

        for (const tarea of listado) {
            console.log('======== Por hacer ========='.green);
            console.log( tarea.descripcion);
            console.log('Estado:', tarea.completado);
            console.log('================='.green);
        }
    break;

    case 'borrar':
        let comp = borrar(argv.descripcion);
        console.log(comp);
    break;
    
    case 'actualizar':
        let completado = actualizar(argv.descripcion, argv.completado);
        console.log(completado);
    break;

    default:
        console.log('Comando no valido');
}