const express = require('express')
const getMusculos = require('../controllers/musculo')

const router = express.Router()

router.get('/musculos', getMusculos)

module.exports = router