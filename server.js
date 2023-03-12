//port config
require('dotenv').config()
const PORT = process.env.PORT

//defines app
const express = require('express')
const app = express()

//Middleware
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

app.listen(PORT, () => {
    console.log('Listening on PORT:', PORT)
})
console.log(PORT)