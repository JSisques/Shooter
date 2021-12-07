const express = require('express');
const controller = require('./controller')

const router = express.Router();

//Pages
router.get('/', controller.getPage)


module.exports = router;