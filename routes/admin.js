const express = require('express')
const router = express.Router()
const adminController = require('../controllers/admin')

router.get('/', adminController.getIndex)

router.get('/events', adminController.getEvents)

// router.get('/event/:id', adminController.getEvent)

// router.get('/event/create', adminController.createEvent)

module.exports = router