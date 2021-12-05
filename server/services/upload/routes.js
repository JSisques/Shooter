const express = require('express');
const router = express.Router();

router.get('/upload', function (request, response) {
    response.render('upload.html', {
        title: "Subir archivos"
    })
});

module.exports = router;