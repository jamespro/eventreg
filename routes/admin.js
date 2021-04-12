const express = require('express')
const router = express.Router()
const adminController = require('../controllers/admin')

router.get('/', adminController.getIndex)

router.get('/events', adminController.getEvents)

router.post('/event/create', adminController.createEvent)

// router.get('/event/:id', adminController.getEvent)

module.exports = router