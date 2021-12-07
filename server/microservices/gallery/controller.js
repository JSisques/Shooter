const model = require('./model')
const constants = require('../../util/constants')

module.exports = {

    async getGallery(req, res){

        return res.send('Ok')
    },

    async getYearFolders(req, res){
        
        var path = ''

        return model.getFolders(req, res, path)
    },

    async getMonthFolders(req, res){
        var year = req.params.YEAR

        var path = year + '/'

        return model.getFolders(req, res, path)
    },

    async getDayFolders(req, res){
        var year = req.params.YEAR
        var month = req.params.MONTH

        var path = year + '/' + month + '/'
        console.log(path)

        return model.getFolders(req, res, path)
    },

    async getImages(req, res){
        var year = req.params.YEAR
        var month = req.params.MONTH
        var day = req.params.DAY

        var path = year + '/' + month + '/' + day + '/'
        console.log(path)

        return model.getImages(req, res, path)
    },

    async getPage(req, res){
        return res.render('gallery.html', {
            app: constants.APP_NAME,
            title: "Galería"
        })
    }
}