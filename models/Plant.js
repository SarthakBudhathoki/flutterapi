const mongoose = require('mongoose')
const Catergory = require('./Category')

const reviewsSchema = mongoose.Schema({
    body: {
        type : String,
        required : true
    },
    date: {
        type : String,
        default : Date.now
    },
    reviewer: {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    }
})

const plantSchema =  mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    price : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    reviews: [reviewsSchema],
    category : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Category'
    }
}, { timestamps : true })

module.exports = mongoose.model('Plant', plantSchema)