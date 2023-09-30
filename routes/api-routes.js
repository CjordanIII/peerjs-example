const controlersApi = require('../controllers/appControlers')
const express = require('express')



const router = express.Router()

//root folder
router.get("/", controlersApi.root);
// crates new room
router.get('/:room',controlersApi.newRoom)





module.exports = router