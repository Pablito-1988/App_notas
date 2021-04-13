const fs = require('fs');
const listaTareas = fs.readFileSync(__dirname + '/tareas/tareas.json', 'utf-8');
const yargs = require('yargs');
const comando = yargs.argv.comando
const titulo = yargs.argv.titulo
const estado = yargs.argv.estado

function lectura(comando) {
    if(comando==='listar'){
        return console.log(listaTareas)
    }
}
function empty(comando) {
    if (comando === undefined) {
        return console.log('Atención - Tienes que pasar una acción.')
    }
}




module.exports={
    lectura,
    empty,
}