const { getData, sendData } = require('../controllers/getData.controller.');
const router = require('express').Router()

router.get('/data', getData);
router.post('/data', sendData)

module.exports = router

// qwe