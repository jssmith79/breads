// dependencies
const express = require('express')
const baker_seed = require('../models/baker_seed.js')
const bakers_router = express.Router()
const baker_schema = require('../models/baker.js')

bakers_router.get('/data/seed', (req, res) => {
    baker_schema.insertMany(baker_seed)
        .then(() => {res.redirect('/breads') })
        .catch((err) => { console.log(err)})
})

bakers_router.get('/data/destroy', (req, res) => {
    baker_schema.deleteMany()
        .then(() => {res.redirect('/breads')})
        .catch((err) => { console.log(err) })
})
// export
module.exports = bakers_router                    
