//Importar servicio de postgres
const ServicioPG = require('../services/pg')

/**
 * Validar informacion que se quiere insertar
 * @param {*} info 
 */

let validarInformacion = info => {
    if(!info.documento || !info.idLugar || !info.nombre || !info.fecha || !info.descripcion || !info.url){
        throw {
            ok:false, 
            mensaje:"Todos los campos son obligatorios"
        };
    }
}

/**
 * Metodo que inserta una nueva excursion de un usuario
 * @param {*} info 
 */
let inscribirExcursion = async info => {
    let servicio = new ServicioPG()
    let sql = `insert into excursiones(documento,idlugar,nombre,fecha,descripcion,url) values($1,$2,$3,$4,$5,$6);`
    let valores = [info.documento,info.idLugar,info.nombre,info.fecha,info.descripcion,info.url]
    let respuesta = await servicio.ejecutarSQL(sql,valores)
    return respuesta;
}

/**
 * Metodo que inserta un nuevo recorrido de un usuario
 * @param {*} info 
 */
let obtenerExcursiones = async () => {
    let servicio = new ServicioPG()
    let sql = `select usuarios.nombres,usuarios.apellidos,excursiones.descripcion,lugares.nombre,excursiones.url from excursiones 
    inner join usuarios on excursiones.documento = usuarios.documento
    inner join lugares on excursiones.idlugar = lugares.id;`
    let respuesta = await servicio.ejecutarSQL(sql)
    return respuesta;
}

module.exports = {validarInformacion, inscribirExcursion,obtenerExcursiones}