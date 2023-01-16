const SoldItem = require('../models/SoldItem');

const getAllSoldItem = (req, res, next) => {
    SoldItem.find()
        .then((SoldItem) => {
            res.json(SoldItem)
        }).catch(next)
}

const createSoldItem = (req, res, next) => {
    let SoldItem = {
        name: req.body.name,
        price: req.body.price,
        // owner: req.user.id,
        description: req.body.description
    }
    SoldItem.create(SoldItem)
        .then((SoldItem) => {
            res.status(201).json(SoldItem)
        }).catch(next)
}

const deleteAllSoldItem = (req, res, next) => {
    SoldItem.deleteMany()
        .then((status) => {
            res.json(status)
        }).catch(next)
}

const getSoldItemById = (req, res, next) => {
    SoldItem.findById(req.params.id)
        .populate('category')
        .then((SoldItem) => {
            res.json(SoldItem)
        }).catch(next)
}

const updateSoldItemById = (req, res, next) => {
    SoldItem.findById(req.params.id)
        .then(SoldItem => {
            if (SoldItem.owner != req.user.id) {
                res.status(403)
                return next(new Error('Not allowed'))
            }
            SoldItem.name = req.body.name ? req.body.name : SoldItem.name
            SoldItem.price = req.body.name ? req.body.name : SoldItem.name
            // book.category = req.body.category ? req.body.category : book.category
            SoldItem.save().then(SoldItem => res.json(SoldItem)).catch(next)
        }).catch(next)

    // Plant.findByIdAndUpdate(req.params.plant_id, { $set: req.body }, { new: true })
    //     .then((plant) => {
    //         res.json(plant)
    //     }).catch(next)
}

const deleteSoldItemById = (req, res, next) => {
    SoldItem.findByIdAndDelete(req.params.id)
        .then((SoldItem) => {
            res.json(SoldItem)
        }).catch(next)
}

module.exports = {
    getAllSoldItem,
    createSoldItem,
    deleteAllSoldItem,
    getSoldItemById,
    updateSoldItemById,
    deleteSoldItemById
}