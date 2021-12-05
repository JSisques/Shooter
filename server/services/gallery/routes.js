const express = require('express');
const router = express.Router();

router.get('/gallery', function (request, response) {
    response.render('gallery.html', {
        title: "Galería"
    })
});

router.get('/gallery/:ID', function (request, response) {
    var id = request.params.ID
    response.render('detail.html', {
        title: "Galería"
    })
});

module.exports = router;