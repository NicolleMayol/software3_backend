//Importar servicio de postgres
const ServicioPG = require('../services/pg')

/**
 * Validar informacion que se quiere insertar
 * @param {*} info 
 */

let validarInformacion = info => {
    if(!info.documento || !info.idLugar || !info.nombre || !info.fecha || !info.hora || !info.precio){
        throw {
            ok:false, 
            mensaje:"Todos los campos son obligatorios"
        };
    }
}

/**
 * Metodo que inserta un nuevo recorrido de un usuario
 * @param {*} info 
 */
let inscribirRecorrido = async info => {
    let servicio = new ServicioPG()
    let sql = `insert into recorridos (documento, idlugar, nombre, fecha, hora, precio) values($1,$2,$3,$4,$5,$6);`
    let valores = [info.documento,info.idLugar,info.nombre,info.fecha,info.hora,info.precio]
    let respuesta = await servicio.ejecutarSQL(sql,valores)
    return respuesta;
}

/**
 * Metodo que inserta un nuevo recorrido de un usuario
 * @param {*} info 
 */
let recorridosUsuario = async id => {
    let servicio = new ServicioPG()
    let sql = `select usuarios.nombres, usuarios.apellidos, recorridos.fecha, recorridos.hora,lugares.nombre,lugares.imagen from recorridos 
    inner join usuarios on recorridos.documento = usuarios.documento 
    inner join lugares on recorridos.idlugar = lugares.id
    where recorridos.documento = $1;`
    let valores = [id]
    let respuesta = await servicio.ejecutarSQL(sql,valores)
    return respuesta;
}

module.exports = {inscribirRecorrido,recorridosUsuario,validarInformacion}