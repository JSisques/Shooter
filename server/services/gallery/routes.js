const express = require('express');
const router = express.Router();

router.get('/gallery', function (request, response) {
    response.render('gallery.html', {
        title: "Galería"
    })
});

module.exports = router;