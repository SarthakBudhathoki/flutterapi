const Plant = require('../models/Plant')

const getAllReviews = (req, res, next) => {
    Plant.findById(req.params.id)
    .then((plant) => {
        res.json(plant.reviews)
    }).catch(next)
}

const createReview = (req, res, next) => {
    Plant.findById(req.params.id)
    .then((plant) => {
        plant.reviews.push(req.body)
        plant.save()
            .then((p) => res.status(201).json(p.reviews))
    }).catch(next)
}

const deleteAllReviews = (req, res, next) => {
    Plant.findById(req.params.id)
        .then((plant) => {
            plant.reviews = []
            plant.save()
                .then(p => res.json(p.reviews))
        }).catch(next)
}

const getReviewById = (req, res, next) => {
    Plant.findById(req.params.id) 
        .then((plant) => {
            let review = plant.reviews
                .find((item) => item.id == req.params.review_id)
            res.json(review)
        }).catch(next)
}

const updateReviewById = (req, res, next) => {
    Plant.findById(req.params.id)
        .then(plant => {
            let updatedReviews = plant.reviews.map((item) => {
                if(item.id == req.params.review_id){
                    item.body = req.body.body //one body from schema
                }
                return item
            })
            plant.reviews = updatedReviews
            plant.save().then(p => res.json(p.reviews))
        }).catch(next)
}

const deleteReviewById = (req, res, next) => {
    Plant.findById(req.params.id)
        .then(plant => {
            let deletedReviews = plant.reviews.filter((item) => {
                return item.id != req.params.review_id
            })
            plant.reviews = deletedReviews
            plant.save().then(p => res.json(p.reviews))
        }).catch(next)
}

module.exports = {
    getAllReviews,
    createReview,
    deleteAllReviews,
    getReviewById,
    updateReviewById,
    deleteReviewById
}