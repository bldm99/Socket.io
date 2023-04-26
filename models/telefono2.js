
const mongoose = require('mongoose')
const Schema = mongoose.Schema



const embebidoShema = new Schema({
    nombre:{type:String},
    imagen:{type:String},
    wasap:[{
        msg:{type:String}
    }]

})


module.exports = mongoose.model('prueba' , embebidoShema)

