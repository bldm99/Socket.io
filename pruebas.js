
const mongoose = require('mongoose')
const tripModel = require('./models/trip.model')

const Trip= require('./models/trip.model')

/*(async () =>{
    await mongoose.connect('mongodb://mongodb://127.0.0.1:27017/Lab5')
    const newTrip = await tripModel.create({
        name: 'pedro',
        mensaje: 'hola'
    })
   

    console.log(newTrip)
})()*/
async function crearNuevoMod() {
    await mongoose.connect('mongodb://127.0.0.1:27017/Lab5')
    const newMod = await tripModel.create({
        name: 'pedro',
        mensaje: 'hola'
    })
    console.log(newMod)
    return newMod; // retorna el nuevo objeto creado
}

//const nuevoDocumento = new Document(crearNuevoMod());
crearNuevoMod()