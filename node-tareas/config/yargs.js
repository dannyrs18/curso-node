const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};
const { argv } = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de un lista', {
        descripcion,
        completado: {
            default: true,
            alias: 'c',
            desc: 'Marcar como completado o pendiente'
        }
    })
    .command('listar', 'Lstar todas las tareas por hacer')
    .command('borrar', 'Borrar una tarea de la lista', {
        descripcion
    });


module.exports = {
    argv
}