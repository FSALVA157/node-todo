const fs = require('fs');
//const { require } = require('yargs');

let listadoTodo = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoTodo);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) {
            throw new Error('no se pudo grabar', err);
        }
    });
};

const cargarDB = () => {
    try {
        listadoTodo = require('../db/data.json');

    } catch (error) {
        listadoTodo = [];
    }

};

const getListado = () => {
    let listado = require('../db/data.json');
    return listado;
};

const crear = (descripcion) => {
    cargarDB();
    let todo = {
        descripcion,
        completado: false,
    };
    listadoTodo.push(todo);
    guardarDB();
    return todo;
};


const actualizar = (detalle, completado = true) => {
    cargarDB();
    for (const todo of listadoTodo) {
        if (todo.descripcion == detalle) {
            todo.completado = completado;
            guardarDB();
            return true;
        }
    }
    return false;
};

const borrar = (detalle) => {
    cargarDB();
    listadoTodo = listadoTodo.filter(todo => todo.descripcion != detalle);
    guardarDB();
};

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}