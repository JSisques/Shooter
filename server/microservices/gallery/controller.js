const model = require('./model')
const constants = require('../../util/constants')

module.exports = {

    async getGallery(req, res){

        return res.send('Ok')
    },

    async getYearFolders(req, res){
        var a = [
            {
                title: '2020',
                url: 'https://images.unsplash.com/photo-1638823843529-6ab0e659beae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2728&q=80',
                route: '/gallery'
            },
            {
                title: '2021',
                url: 'https://images.unsplash.com/photo-1638823843529-6ab0e659beae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2728&q=80',
                route: '/gallery'
            },
            {
                title: '2022',
                url: 'https://images.unsplash.com/photo-1638823843529-6ab0e659beae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2728&q=80',
                route: '/gallery'
            },
            {
                title: '2023',
                url: 'https://images.unsplash.com/photo-1638823843529-6ab0e659beae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2728&q=80',
                route: '/gallery'
            },
            {
                title: '2024',
                url: 'https://images.unsplash.com/photo-1638823843529-6ab0e659beae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2728&q=80',
                route: '/gallery'
            },
            {
                title: '2025',
                url: 'https://images.unsplash.com/photo-1638823843529-6ab0e659beae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2728&q=80',
                route: '/gallery'
            }
        ]

        //model.getYearFolders()
        return res.render('gallery.html', {
            app: constants.APP_NAME,
            title: "Galería",
            data: a
        })
    },

    async getPage(req, res){
        return res.render('gallery.html', {
            app: constants.APP_NAME,
            title: "Galería"
        })
    }
}