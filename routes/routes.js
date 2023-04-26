const express = require('express')
const { ver, guardar, Mensaje1, Mensaje2, Buscar, verPrueba, guardarPrueba, registrarMensaje, Actualizar } = require('../controllers/controller')

const Router = express.Router()

Router.route("/").get(ver).post(guardar)
Router.route("/usu1").get(Mensaje1)
Router.route("/usu2").get(Mensaje2)

Router.route("/usarios/:id").get(Buscar)

//Router pruebas
//Router.route("/pruebas").get(verPrueba).post(guardarPrueba)
Router.route("/pruebas").get(verPrueba).post(registrarMensaje)
Router.route("/user").post(guardarPrueba)
Router.route("/user/:id").put(Actualizar)

module.exports = {
    Router
}