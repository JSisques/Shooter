const dao = require('./dao')
const fs = require('fs')
const constants = require('../../util/constants')

module.exports = {

    async getYearFolders(){
        var data = []

        fs.readdir(constants.PATH_UPLOAD_IMAGE_ROOT, (err, files) => {
            if (err)
              console.log(err);
            else {
              console.log("\nCurrent directory filenames:");
              files.forEach(file => {
                console.log(file);
                data.push({
                    title: file,
                    url: constants.URL_DEFAULT_IMAGE,
                    route: constants.PATH_UPLOAD_IMAGE_ROOT + file
                });
              })
            }
          })

        return data
    }

}