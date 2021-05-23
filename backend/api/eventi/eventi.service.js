const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId
const asyncLocalStorage = require('../../services/als.service')


module.exports = {
    query,
    getById,
    remove,
    update,
    add,
    // queryByUser
}


async function query(filterBy = {}) {
    const criteria = _buildCriteria(filterBy)
    try {
        // db.getCollection('eventies').find({cycles: {$elemMatch: {members: { $elemMatch: { _id: "600825271465021c2893a7c9"}}}}})
        const collection = await dbService.getCollection('eventies')
        var eventies = await collection.find(criteria).toArray()
        eventies = eventies.map(eventi => {

            return eventi
        })
        console.log('eventies LENGTH', eventies.length);
        return eventies
    } catch (err) {
        logger.error('cannot find eventies', err)
        throw err
    }
}

async function getById(eventiId) {
    try {
        const collection = await dbService.getCollection('eventies')
        const eventi = await collection.findOne({ '_id': ObjectId(eventiId) })
        // eventi.givenReviews = await reviewService.query({ byUserId: ObjectId(eventi._id) })
        // eventi.givenReviews = eventi.givenReviews.map(review => {
        //     delete review.byUser
        // //     return review
        // })
        return eventi
    } catch (err) {
        logger.error(`while finding eventi ${eventiId}`, err)
        throw err
    }
}

async function remove(eventiId) {
    try {
        const collection = await dbService.getCollection('eventies')
        await collection.deleteOne({ '_id': ObjectId(eventiId) })
    } catch (err) {
        logger.error(`cannot remove eventi ${eventiId}`, err)
        throw err
    }
}


async function update(eventi) {
    try {
        // peek only updatable fields!
        eventi._id = ObjectId(eventi._id)
        const collection = await dbService.getCollection('eventies')
        await collection.updateOne({ '_id': eventi._id }, { $set: eventi })
        return eventi;
    } catch (err) {
        logger.error(`cannot update eventi ${eventi._id}`, err)
        throw err
    }
}



async function add(eventi) {
    try {
        // peek only updatable fields!
        const collection = await dbService.getCollection('eventies')
        const res = await collection.insertOne(eventi)
        return res.ops[0];
    } catch (err) {
        logger.error('cannot insert eventi', err)
        throw err
    }
}


function _buildCriteria(filterBy) {
    const criteria = {}
    if (filterBy.title) {

        const txtCriteria = { $regex: filterBy.title, $options: 'i' }
        criteria.title = txtCriteria
    }
    if (filterBy.maxPrice && filterBy.minPrice) {
        criteria.price = { $gte: +filterBy.minPrice, $lt: +filterBy.maxPrice }
    }
    if (filterBy.tags) {
        let tags = filterBy.tags.split(',')
        console.log("tags", filterBy.tags);
        console.log("tags", tags);
        criteria.tags = { $in: [filterBy.tags] }
    }
    // if (filterBy.host) {
    //     console.log(filterBy.host);
    //     criteria.host = { $elemMatch: { _id: filterBy.host } }
    //     console.log(criteria, 'ccccccccccccccccccccccc');
    // }
    return criteria
}





