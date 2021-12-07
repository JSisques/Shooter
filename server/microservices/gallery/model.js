const dao = require('./dao')
const fs = require('fs')
const constants = require('../../util/constants')

module.exports = {

    async getFolders(req, res, reqPath) {
        var path = constants.PATH_UPLOAD_IMAGE_ROOT + reqPath
        console.log(path)
        fs.readdir(path, (err, files) => {
            var d = []
            if (err)
                console.log(err);
            else {
                console.log("\nCurrent directory filenames:");

                files.forEach(file => {
                    console.log(file);
                    d.push({
                        title: file,
                        url: constants.URL_DEFAULT_IMAGE,
                        route: constants.URL_DEFAULT_GALLERY + reqPath + file
                    });
                    console.log(d)

                })
            }
            return res.render('gallery.html', {
                app: constants.APP_NAME,
                title: "Galería",
                data: d
            })
        })
    },

    async getImages(req, res, reqPath) {
        var path = constants.PATH_UPLOAD_IMAGE_ROOT + reqPath
        console.log(reqPath)

        fs.readdir(path, (err, files) => {
            var d = []
            if (err)
                console.log(err);
            else {
                console.log("\nCurrent directory filenames:");

                files.forEach(file => {
                    console.log(file);
                    d.push({
                        title: file,
                        url: path + file,
                        route: constants.URL_DEFAULT_GALLERY + reqPath + file
                    });
                    console.log(d)

                })
            }
            return res.render('gallery.html', {
                app: constants.APP_NAME,
                title: "Galería",
                data: d
            })
        })
    }

}