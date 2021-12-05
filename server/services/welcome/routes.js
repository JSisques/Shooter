const express = require('express');
const router = express.Router();

router.get('/', function(request, response){
    response.render('index.html', {
        title: 'Shooter'
    })
})

module.exports = router;