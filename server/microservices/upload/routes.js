const express = require('@awaitjs/express');
const controller = require('./controller')

const router = express.Router();

//Pages
router.get('/upload', controller.getPage)

router.postAsync('/upload', controller.uploadFiles)

module.exports = router
