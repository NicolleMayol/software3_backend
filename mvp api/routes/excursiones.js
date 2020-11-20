//importar librerias
const express = require('express')
const router = express.Router()
const {validarInformacion,obtenerExcursiones,inscribirExcursion} = require('../controllers/excursiones')

/**
 * Endpoint que obtiene las excursiones
 */
router.get('/excursiones',(req,res) => {
    obtenerExcursiones().then(respuesta => {
        res.send(respuesta.rows)
    }).catch(error => {
        console.log(error)
        res.send(error)
    })
})

/**
 * Endpoint que guarda un recorrido
 */
router.post('/excursiones',(req,res) => {
    try {
        let body = req.body
        validarInformacion(body)
        inscribirExcursion(body)
        res.send({ok:true, mensaje:"El recorrido ha sido inscrito correctamnente"})
    } catch (error) {
        console.log(error)
        res.send(error)
    }
})

module.exports = router;