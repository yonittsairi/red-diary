const logger = require('../../services/logger.service')
const eventiService = require('../eventi/eventi.service')
const reviewService = require('./review.service')

async function getReviews(req, res) {
    console.log('@@@@@@@@@@');
    try {
        const reviews = await reviewService.query(req.query)
        res.send(reviews)

    } catch (err) {
        logger.error('Cannot get reviews', err)
        res.status(500).send({ err: 'Failed to get reviews' })
    }
}

async function deleteReview(req, res) {
    try {
        await reviewService.remove(req.params.id)
        res.send({ msg: 'Deleted successfully' })
    } catch (err) {
        logger.error('Failed to delete review', err)
        res.status(500).send({ err: 'Failed to delete review' })
    }
}



async function addReview(req, res) {
    try {
        var review = req.body
        review.byUserId = req.session.user._id
        review.byUser = req.session.user
        review.aboutEventi = await eventiService.getById(review.eventiId)
        review = await reviewService.add(review)
        res.send(review)

    } catch (err) {
        console.log('add review', err);
        // logger.error('Failed to add review!!', err)
        res.status(500).send({ err: 'Failed to add review!!' }
        )
    }
}

module.exports = {
    getReviews,
    deleteReview,
    addReview
}