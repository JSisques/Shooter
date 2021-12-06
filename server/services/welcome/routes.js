const express = require('express');
const router = express.Router();
const constants = require('../../util/constants');

router.get('/', function(request, response){
    response.render('index.html', {
        app: constants.APP_NAME,
        title: 'Shooter'
    })
})

module.exports = router;