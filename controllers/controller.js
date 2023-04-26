const expresHandler = require('express-async-handler')
const socket = require('../models/trip.model')
const prueba = require('../models/telefono2')


const verPrueba = expresHandler(async (req, res) => {
    const tableprueba = await prueba.find()
    if (!tableprueba) {
        res.status(500).json({ error: "No found" })

    }

    res.status(200).json(tableprueba);
})

const guardarPrueba = expresHandler(async (req, res) => {
    const tableprueba = await prueba.insertMany({
        nombre: req.body.nombre,
        imagen: req.body.imagen
    })
    if (!tableprueba) {
        res.status(500).json({ error: "No found" })
    }
    res.status(200).json(tableprueba);
})

const registrarMensaje = expresHandler(async (req, res) => {

    let body = req.body

    let wasap = body.msg

    console.log(wasap)


    const tableprueba = await prueba.updateOne({ _id: body._id }, {
        $push: {
            'wasap': {
                msg: wasap
            }
        }
    })


    if (!tableprueba) {
        res.status(500).json({ error: "No found" })
    }
    res.status(200).json(tableprueba);
})

const Buscar = expresHandler(async (req, res) => {
    const tableprueba = await prueba.findById(req.params.id)
    if (!tableprueba) {
        res.status(500).json({ error: "No found" })
    }
    res.status(200).json(tableprueba);
})


const Actualizar = expresHandler(async (req, res) => {
    const tableprueba = await prueba.findByIdAndUpdate(
        req.params.id,
        {
            nombre: req.body.nombre,
            imagen: req.body.imagen
        },
        {
            new: true
        }
    )

    if (!tableprueba) {
        res.status(500).json({ message: "No exitoos" })
    }
    res.status(200).json(tableprueba);


})




const ver = expresHandler(async (req, res) => {
    const tablesocket = await socket.find()
    if (!tablesocket) {
        res.status(500).json({ error: "No found" })

    }

    res.status(200).json(tablesocket);
})

const guardar = expresHandler(async (req, res) => {
    const tablesocket = await socket.insertMany({
        name: req.body.name,
        mensaje: req.body.mensaje
    })
    if (!tablesocket) {
        res.status(500).json({ error: "No found" })
    }
    res.status(200).json(tablesocket);
})





const Mensaje1 = expresHandler(async (req, res) => {
    const tablesocket = await socket.find({ name: "Usu1" }, "mensaje").exec();

    if (!tablesocket) {
        res.status(500).json({ error: "No found" })
    }
    res.status(200).json(tablesocket);
})

const Mensaje2 = expresHandler(async (req, res) => {
    const tablesocket = await socket.find({ name: "Usu2" }, "mensaje").exec();

    if (!tablesocket) {
        res.status(500).json({ error: "No found" })
    }
    res.status(200).json(tablesocket);
})






module.exports = {
    ver,
    guardar,
    Mensaje1,
    Mensaje2,
    Buscar,
    verPrueba,
    guardarPrueba,
    registrarMensaje,
    Actualizar,
}