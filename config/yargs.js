

const opts = {
    descripcion: {
        demand:true,
        alias: 'd'
    }
}
const opts2 = {
    descripcion: {
        demand:true,
        alias: 'd'
    },completado: {
        // demand: true,
        alias: 'c',
        default: true
    }
}


const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', opts)
    .command('actualizar', 'Actualiza un archivo', opts2)
    .command('borrar', 'Borra un archviso', opts)
    .help()
    .argv;

module.exports = {
    argv
}