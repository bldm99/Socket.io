
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema1 = new Schema({
    name:{type: String},
    mensaje:{type: String}
},{
    timestamps: true

})




module.exports = mongoose.model('sockets' , userSchema1)

