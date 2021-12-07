const express = require('@awaitjs/express');
const controller = require('./controller')

const router = express.Router();

router.getAsync('/gallery', controller.getYearFolders)
router.getAsync('/gallery/:YEAR', controller.getMonthFolders)
router.get('/gallery/:YEAR/:MONTH', controller.getDayFolders)
router.get('/gallery/:YEAR/:MONTH/:DAY', controller.getImages)

module.exports = router

