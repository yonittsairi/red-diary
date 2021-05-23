const express = require('express')
// const { requireAuth, requireAdmin } = require('../../middlewares/requireAuth.middleware')
// const { log } = require('../../middlewares/logger.middleware')
const { addEventi, getEventies, deleteEventi, updateEventi, getEventi } = require('./eventi.controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)



router.get('/user/dash', getEventies)
router.get('/:id', getEventi)
router.get('/', getEventies)
router.post('/', addEventi)
router.put('/:id', updateEventi)
router.delete('/:id', deleteEventi)


module.exports = router

// router.get('/', log, getEventis)
// router.post('/', requireAuth, addEventi)
// router.delete('/:id', requireAuth, deleteEventi)
