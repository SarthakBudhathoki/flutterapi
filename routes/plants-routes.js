const express = require('express')
const router = express.Router()
const plantController = require('../controllers/plant-controller')
const reviewController = require('../controllers/review-controller')
const { verifyUser, verifyManager, verifyAdmin } = require('../middelware/auth')


router.route('/')
    .get(plantController.getAllPlants)
    .post(verifyUser, plantController.createPlant)
    .put((req, res) => res.status(501).json({ 'msg': 'Not implemented' }))
    .delete(verifyAdmin, plantController.deleteAllPlants)

    router.route('/:id')
    .get(plantController.getPlantById)
    .post((req, res) => res.status(501).json({ 'msg': 'Not implemented' }))
    .put(plantController.updatePlantById)
    .delete(verifyAdmin, plantController.deletePlantById)

router.route('/:id/reviews')
    .get(reviewController.getAllReviews)
    .post(verifyUser,reviewController.createReview)
    .put((req, res) => res.status(501).json({ 'msg': 'Not implemented' }))
    .delete(verifyAdmin, reviewController.deleteAllReviews)

router.route('/:id/reviews/:review_id')
    .get(reviewController.getReviewById)
    .post((req, res) => res.status(501).json({ 'msg': 'Not implemented' }))
    .put(reviewController.updateReviewById)
    .delete(reviewController.deleteReviewById)

module.exports = router