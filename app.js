const express = require('express')
const app = express()
const path = require('path')

//Settings
app.set('port', 8080)
app.set('views', path.join(__dirname + '/server/views'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'ejs')

//Routes
app.use(require('./server/services/upload/routes'))
app.use(require('./server/services/welcome/routes'))

// Starting server at 8080
app.listen(app.get('port'), function () {
    console.log('Servidor iniciado en http://localhost:' + app.get('port'))
  })