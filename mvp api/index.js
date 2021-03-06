//importar librerias
const express = require('express')
const cors = require('cors')
require("./server/keys")

//inicializar la libreria
const app = express()
app.use(express.json())
app.use(cors())

//versiones
const vs = "/api/v1/"

//importar las rutas con los endpoints especificos
const rutasUsuario = require('./routes/usuarios')
app.use(vs,rutasUsuario)

const rutasLugares = require('./routes/lugares')
app.use(vs,rutasLugares)

const rutasRecorridos = require('./routes/recorridos')
app.use(vs,rutasRecorridos)

const rutasExcursiones = require('./routes/excursiones')
app.use(vs,rutasExcursiones)

//puerto
const port = process.env.PORT || 3000

//Levantar el servidor para escuchar los puertos
app.listen(port,() => {
    console.log(`Escuchando api en http://localhost:${port}`)
})