//importar librerias
const express = require('express')
const router = express.Router()
const {inscribirRecorrido,recorridosUsuario,validarInformacion} = require('../controllers/recorridos')

/**
 * Endpoint que obtiene los recorridos de un usuario
 */
router.get('/recorridos/:id',(req,res) => {
    let id = req.params.id
    recorridosUsuario(id).then(respuesta => {
        res.send(respuesta.rows)
    }).catch(error => {
        console.log(error)
        res.send(error)
    })

})

/**
 * Endpoint que guarda un recorrido
 */
router.post('/recorridos',(req,res) => {
    try {
        let body = req.body
        validarInformacion(body)
        inscribirRecorrido(body)
        res.send({ok:true, mensaje:"El recorrido ha sido inscrito correctamnente"})
    } catch (error) {
        console.log(error)
        res.send(error)
    }
})

module.exports = router;