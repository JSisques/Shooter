const express = require('express');
const constants = require('../../util/constants');
const router = express.Router();

router.get('/gallery', function (request, response) {
    response.render('gallery.html', {
        app: constants.APP_NAME,
        title: "Galería"
    })
});

router.get('/gallery/:YEAR/:MONTH/:DAY', function (request, response) {
    var year = request.params.YEAR
    var month = request.params.MONTH
    var day = request.params.DAY
    
    response.render('gallery.html', {
        title: "Galería"
    })
});

router.get('/gallery/:YEAR/:MONTH/:DAY/:ID', function (request, response) {
    var year = request.params.YEAR
    var month = request.params.MONTH
    var day = request.params.DAY
    var id = request.params.ID

    response.render('detail.html', {
        title: "Detalles",
        image: null
    })
});

module.exports = router;