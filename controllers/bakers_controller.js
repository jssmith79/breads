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

//show
bakers_router.get('/:id', (req, res) => {
    //res.send(Bread[req.params.arrayIndex])
    baker_schema.findById(req.params.id)
      .populate('bread')
      .then((foundBaker)=> {
            res.render('baker_show', {bread:foundBaker})
      })
   })



bakers_router.get('/', (req, res) => {
    baker_schema.find()
    .populate('breads')    
    .then(foundBakers => {
            res.send(foundBakers)
        })
        .catch((err) => {console.log(err)})
})
// export
module.exports = bakers_router    


