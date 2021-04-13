const fs= require('fs');
const listaTareas=fs.readFileSync(__dirname +'/tareas/tareas.json','utf-8');
const yargs=require('yargs');
const comando=yargs.argv.comando
const titulo=yargs.argv.titulo
const estado=yargs.argv.estado
const funciones=require('./listarTareas')
 switch(comando){
    case 'listar':
        return funciones.lectura(comando)
    break;
    case undefined:
        return funciones.empty()
    break;
    default:
        return console.log('No entiendo qué quieres hacer')
    break;    


}    