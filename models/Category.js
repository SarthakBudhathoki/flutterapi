const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
    name : {
        type: String,
        required: [true, 'Category name is required']
        
    },
    plants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Plant'
    }]
})

module.exports = mongoose.model('Category', categorySchema)