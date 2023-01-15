const Plant = require('../models/Plant');

const getAllPlants = (req, res, next) => {
    Plant.find()
        .then((plants) => {
            res.json(plants)
        }).catch(next)
}

const createPlant = (req, res, next) => {
    let plant = {
        name: req.body.name,
        price: req.body.price,
        // owner: req.user.id,
        description: req.body.description
    }
    Plant.create(plant)
        .then((plant) => {
            res.status(201).json(plant)
        }).catch(next)
}

const deleteAllPlants = (req, res, next) => {
    Plant.deleteMany()
        .then((status) => {
            res.json(status)
        }).catch(next)
}

const getPlantById = (req, res, next) => {
    Plant.findById(req.params.id)
        .populate('category')
        .then((plant) => {
            res.json(plant)
        }).catch(next)
}

const updatePlantById = (req, res, next) => {
    Plant.findById(req.params.id)
        .then(plant => {
            if (plant.owner != req.user.id) {
                res.status(403)
                return next(new Error('Not allowed'))
            }
            plant.name = req.body.name ? req.body.name : plant.name
            plant.price = req.body.name ? req.body.name : plant.name
            // book.category = req.body.category ? req.body.category : book.category
            plant.save().then(plant => res.json(plant)).catch(next)
        }).catch(next)

    // Plant.findByIdAndUpdate(req.params.plant_id, { $set: req.body }, { new: true })
    //     .then((plant) => {
    //         res.json(plant)
    //     }).catch(next)
}

const deletePlantById = (req, res, next) => {
    Plant.findByIdAndDelete(req.params.id)
        .then((plant) => {
            res.json(plant)
        }).catch(next)
}

module.exports = {
    getAllPlants,
    createPlant,
    deleteAllPlants,
    getPlantById,
    updatePlantById,
    deletePlantById
}