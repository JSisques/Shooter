const model = require('./model')
const constants = require('../../util/constants')

module.exports = {

    async getPage(req, res){
        return res.render('index.html', {
            app: constants.APP_NAME,
            title: "Shooter"
        })
    }
}