const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
    name : {
        type: String,
        required: [true, 'Category name is required']
        
    },
    SoldItem: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SoldItem'
    }]
})

module.exports = mongoose.model('Category', categorySchema)