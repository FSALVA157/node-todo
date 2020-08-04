const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'cambia el estado de la tarea(false-true)'
}



const argv = require('yargs')
    .command('listar', 'Lista las tareas pendientes', {


    })
    .command('crear', 'Crea una tarea pendiente', {
        descripcion
    })
    .command('actualizar', 'actualiza el estado de una tarea', {
        descripcion,
        completado

    })
    .command('borrar', 'elimina una tarea', {
        descripcion

    })
    .help()
    .argv;


module.exports = {
    argv
}