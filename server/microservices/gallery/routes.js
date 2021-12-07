const express = require('@awaitjs/express');
const controller = require('./controller')

const router = express.Router();

router.get('/gallery', controller.getYearFolders)
//router.get('/gallery/:YEAR', controller.getYearFolders)
//router.get('/gallery/:YEAR/:MONTH', controller.getMonthFolders)
//router.get('/gallery/:YEAR/:MONTH/:DAY', controller.getDayImages)

module.exports = router

