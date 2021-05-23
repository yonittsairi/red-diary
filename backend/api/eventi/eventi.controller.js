const logger = require('../../services/logger.service')
// const userService = require('../user/user.service')
const eventiService = require('./eventi.service')

async function getEventies(req, res) {
    try {
        const eventies = await eventiService.query(req.query)
        res.send(eventies)
    } catch (err) {
        logger.error('Cannot get eventies', err)
        res.status(500).send({ err: 'Failed to get eventies' })
    }
}
async function getEventi(req, res) {
    try {
        const eventi = await eventiService.getById(req.params.id)
        res.send(eventi)
    } catch (err) {
        logger.error('Cannot get eventi', err)
        res.status(500).send({ err: 'Failed to get eventi' })
    }
}

async function deleteEventi(req, res) {
    try {
        await eventiService.remove(req.params.id)
        res.send({ msg: 'Deleted successfully' })
    } catch (err) {
        logger.error('Failed to delete eventi', err)
        res.status(500).send({ err: 'Failed to delete eventi' })
    }
}


async function addEventi(req, res) {
    try {
        var eventi = req.body
        eventi = await eventiService.add(eventi)
        res.send(eventi)

    } catch (err) {
        logger.error('Failed to add eventi', err)
        res.status(500).send({ err: 'Failed to add eventi' })
    }
}
async function updateEventi(req, res) {
    try {
        const eventi = req.body
        const savedEventi = await eventiService.update(eventi)
        res.send(savedEventi)
    } catch (err) {
        logger.error('Failed to update eventi', err)
        res.status(500).send({ err: 'Failed to update eventi' })
    }
}


module.exports = {
    getEventi,
    getEventies,
    deleteEventi,
    addEventi,
    updateEventi
}