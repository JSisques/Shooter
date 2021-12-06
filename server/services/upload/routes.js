const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs = require('fs');

//Multer
const storage = multer.memoryStorage()

const upload = multer({
    storage: storage
})


router.get('/upload', function (request, response) {
    response.render('upload.html', {
        title: "Subir archivos"
    })
});

router.post('/upload', upload.array('photo'), function (request, response) {
    console.log(request.files[0].buffer)

    request.files.forEach(element => {
        var dirTmp = "tmp/" + element.originalname
        fs.writeFile(dirTmp, element.buffer, function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("The file was saved!");
            fs.stat(dirTmp, (err, stat) => {
                if (err) {
                    return console.log(err);
                } else {
                    var date = stat.birthtime.getFullYear() + "/" + (stat.birthtime.getMonth() + 1) + "/" + stat.birthtime.getDay() + "/"
                    var dir = date
                    if (!fs.existsSync(dir)){
                        fs.mkdirSync(dir, { recursive: true });
                    }
                    dir += element.originalname
                    fs.writeFile(dir, element.buffer, (err) => {
                        if (err){
                            console.log(err)
                        }
                        console.log("File saved in " + dir)
                    })

                    fs.unlinkSync(dirTmp);
                    return console.log(date)
                }
            })
        });


    })

    response.render('upload.html', {
        title: "Subir archivos"
    })
});

module.exports = router;