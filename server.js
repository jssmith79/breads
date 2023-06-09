//port config
require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => { console.log('connected to mongo: ', process.env.MONGO_URI) })

const PORT = process.env.PORT

//defines app
const express = require('express')
const app = express()

//dependencies
const methodOverride = require('method-override')
//Middleware

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


//define routes

app.get('/', (req, res) => {
    res.send('hello worrrrlllldddd')
})

const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

const bakersController = require('./controllers/bakers_controller.js')
app.use('/bakers', bakersController)

app.listen(PORT, () => {
    console.log('Listening on PORT:', PORT)
})

//404 last
app.get('*', (req, res)  => {
    res.send('Page not found... Sad Panda')
})
console.log(PORT)