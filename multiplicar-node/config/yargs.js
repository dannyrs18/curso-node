const opt = {
    base: {
        demand: true, // Obligatorio
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const { argv } = require('yargs')
    .command('listar', 'Imprime en consola y archivo la tabla de multiplicar', opt)
    .command('crear', 'Genera un archivo de la tabla de multiplicar', opt);

module.exports = {
    argv
}