const model = require('./model')
const constants = require('../../util/constants')

module.exports = {

    async getPage(req, res){
        return res.render('upload.html', {
            app: constants.APP_NAME,
            title: "Subir archivos"
        })
    },
    
    async uploadFiles(req, res){
        var file = req.files[0]
        var name = model.checkExtension(file)
        return res.send(name)
    }
}