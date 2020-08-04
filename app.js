const argv = require('./config/yargs').argv;
const colors = require('colors');
let todo = require('./todos/todo');

// const argv = require('yargs').argv;



let comando = argv._[0];



switch (comando) {
    case 'crear':
        console.log('creando todo');
        let miTodo = todo.crear(argv.descripcion);

        break;
    case 'listar':
        console.log('listando todo');
        let listado = todo.getListado();

        listado.forEach(todo => {
            console.log('======Tareas por Hacer===='.green);
            console.log(todo.descripcion);
            console.log(todo.completado);
            console.log('==============='.green);
        });


        break;
    case 'actualizar':
        let resultado = todo.actualizar(argv.descripcion, argv.completado);
        console.log(resultado);
        break;
    case 'borrar':
        todo.borrar(argv.descripcion);
        break;
    default:
        console.log('comando no reconocido');
        break;
}