const mongoose = require('mongoose')
const Catergory = require('./Category')


const SoldItemSchema =  mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    price : {
        type : String,
        required : true
    },
    quantity : {
        type : int,
        required : true,
    },
    description : {
        type : String,
        required : true
    },
    
}, { timestamps : true })

module.exports = mongoose.model('SoldItem', SoldItemSchema)