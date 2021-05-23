const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId
const asyncLocalStorage = require('../../services/als.service')

async function query(filterBy = {}) {
    // const criteria = _buildCriteria(filterBy)
    console.log('filter by', filterBy);

    try {
        const collection = await dbService.getCollection('reviews')
        var reviews = await collection.find().toArray()
        console.log(reviews);
        if (filterBy.eventiId) return reviews.filter(review => review.aboutEventi._id.toString() === filterBy.eventiId)
        else if (filterBy.userId) return reviews.filter(review => review.byUserId === filterBy.userId)
        return reviews
    } catch (err) {
        logger.error('cannot find reviews', err)
        throw err
    }

}

async function remove(reviewId) {
    try {
        const store = asyncLocalStorage.getStore()
        const { userId, isAdmin } = store
        const collection = await dbService.getCollection('reviews')
        // remove only if user is owner/admin
        const query = { _id: ObjectId(reviewId) }
        if (!isAdmin) query.byUserId = ObjectId(userId)
        await collection.deleteOne(query)
        // return await collection.deleteOne({ _id: ObjectId(reviewId), byUserId: ObjectId(userId) })
    } catch (err) {
        logger.error(`cannot remove review ${reviewId}`, err)
        throw err
    }
}


async function add(review) {
    console.log(review);
    try {
        // peek only updatable fields!
        const reviewToAdd = {
            byUserId: review.byUserId,
            aboutEventi: review.aboutEventi,
            txt: review.txt,
        }
        const collection = await dbService.getCollection('reviews')
        const res = await collection.insertOne(reviewToAdd)
        return res.ops[0];
    } catch (err) {
        console.log('service add revie', err);
        logger.error('cannot insert review', err)
        throw err
    }
}

// function _buildCriteria(filterBy) {
//     const criteria = {}
//     if (filterBy.eventiId) {
//         criteria = { 'aboutEventi_id': ObjectId(filterBy.eventiId) }
//     }
//     if (filterBy.userId) {
//         criteria.userId = filterBy.userId
//     }
//     return criteria
// }

module.exports = {
    query,
    remove,
    add
}


