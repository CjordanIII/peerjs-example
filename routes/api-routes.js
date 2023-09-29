const controlersApi = require('../controllers/appControlers')
const express = require('express')

const router = express.Router()


router.get("/", controlersApi.working);

module.exports = router