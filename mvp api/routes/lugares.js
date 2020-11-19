const express = require('express')
const router = express.Router()
const {obtenerLugarEspecifico,obtenerLugares} = require('../controllers/lugares')

/**
 * Endpoint que trae los lugares 
 */
router.get('/lugares',(req,res) => {
    obtenerLugares().then(respuesta => {
        res.send(respuesta.rows)
    }).catch(error => {
        console.log(error)
        res.send(error)
    })
    
})

/**
 * Endpoint que trae un lugar en especifico
 */
router.get('/lugares/:id',(req,res) => {
    let id = req.params.id
    obtenerLugarEspecifico(id).then(respuesta => {
        res.send(respuesta.rows)
    }).catch(error => {
        console.log(error)
        res.send(error)
    })
    
})

module.exports = router;