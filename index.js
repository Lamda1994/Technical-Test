const express = require('express')
const app = express()
const c = console.log
const path = require('path')
const morgan = require('morgan')
const { mongoose } = require('./database')
 
//setting
app.set('port', process.env.PORT || 4000)

//middlewares
app.use(morgan('dev'))
app.use(express.json())

//routes
app.use('/api/task', require('./routes/taskRoutes'))

//static file
app.use(express.static(path.join(__dirname, 'public')))

//startin the server
app.listen(app.get('port'), ()=>{
    c(`Servidor corrien en el puerto ${app.get('port')}`)
})