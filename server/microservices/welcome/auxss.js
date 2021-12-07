const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs = require('fs');
const constants = require('../../util/constants');

var ExifImage = require('exif').ExifImage;

//Multer
const storage = multer.memoryStorage()

const upload = multer({
    storage: storage
})


router.get('/upload', function (request, response) {
    response.render('upload.html', {
        app: constants.APP_NAME,
        title: "Subir archivos"
    })
});

router.post('/upload', upload.array('photo'), function (request, response) {
    console.log(request.files[0].buffer)

    request.files.forEach(element => {
        console.log(element.originalname)
        var dirTmp = constants.PATH_UPLOAD_IMAGE_TMP + element.originalname
        fs.writeFile(dirTmp, element.buffer, function (err) {
            if (err) {
                return console.log("Error es write" + err);
            }
            console.log("The file was saved!");

            try {
                new ExifImage({ image : dirTmp }, function (error, exifData) {
                    if (error)
                        console.log('Error: '+error.message);
                    else
                        console.log(exifData); // Do something with your data!

                        var date = exifData.exif.CreateDate.split(' ')[0]
                        var datePath = date.split(':')[0] + "/" + date.split(':')[1] + "/" + date.split(':')[2] + "/" 
                        var dir = constants.PATH_UPLOAD_IMAGE_ROOT + datePath

                        if (!fs.existsSync(dir)){
                            fs.mkdirSync(dir, { recursive: true });
                        }

                        dir += element.originalname

                        fs.writeFile(dir, element.buffer, (err) => {
                            if (err){
                                console.log("Error es write 2" + err)
                            }
                            console.log("File saved in " + dir)
                        })
    
                        fs.unlinkSync(dirTmp);
                });
            } catch (error) {
                console.log('Error: ' + error.message);
                
                fs.stat(dirTmp, (err, stat) => {
                    if (err) {
                        return console.log("Error es stat" + err);
                    } else {
                        var date = stat.ctime.getFullYear() + "/" + (stat.birthtime.getMonth() + 1) + "/" + stat.ctime.getDay() + "/"
                        console.log(stat.birthtime)
                        var dir = constants.PATH_UPLOAD_IMAGE_ROOT + date
                        if (!fs.existsSync(dir)){
                            fs.mkdirSync(dir, { recursive: true });
                        }
                        dir += element.originalname
                        fs.writeFile(dir, element.buffer, (err) => {
                            if (err){
                                console.log("Error es write 2" + err)
                            }
                            console.log("File saved in " + dir)
                        })
    
                        fs.unlinkSync(dirTmp);
                        return console.log(date)
                    }
                })
            }

            
        });


    })

    response.render('upload.html', {
        app: constants.APP_NAME,
        title: "Subir archivos"
    })
});

module.exports = router;