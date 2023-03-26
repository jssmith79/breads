const express = require('express')
const breads_router = express.Router()
const Bread = require('../models/bread.js')
const baker_schema = require('../models/baker')
const bread_seed = require('../models/baker_seed')


//NEW
breads_router.get('/new', (req, res) => {
  baker_schema.find()
    .then((foundBakers) => {
        res.render('new', {bakers: foundBakers})
    })
})

//seed
breads_router.get('/data/seed', (req, res) => {

})


// edit
breads_router.get('/id/edit', (req, res) => {
  baker_schema.find()
        .then((foundBakers) => {
            bread_schema.findById(req.params.id)
                .then((foundBread) => { 
                    res.render('edit', { 
                        bread: foundBread,
                        bakers: foundBakers,
                    }) 
                })
                .catch((err) => { console.log(err) })
        })
        
  })
// UPDATE
breads_router.put('/:id', (req, res) => {
  if(req.body.hasGluten === 'on'){
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread.findByIdAndUpdate(req.params.id, req.body, { new : true})
    .then(updatedBread => {
      console.log(updatedBread)
      res.redirect(`/breads/${req.params.id}`)
  })
})

// DELETE
breads_router.delete('/:id', (req, res) => {
  Bread.findByIdAndDelete(req.params.id)
    .then(deletedBread => {
    res.status(303).redirect('/breads')
  })
})

//SHOW

breads_router.get('/:id', (req, res) => {
    //res.send(Bread[req.params.arrayIndex])
    Bread.findById(req.params.id)
      .populate('baker')
      .then(foundBread => {
        const bakedBy = foundBread.getBakedBy()
        console.log(bakedBy)
        res.render('show', {
          bread:foundBread
        })
      })
      .catch((err) => { console.log(err) })
   })

//Index
breads_router.get('/', (req, res) => {
  baker_schema.find()
    .then((foundBakers) => {  
    Bread.find()
      .then(foundBreads => {
        res.render('index', {
            breads: foundBreads,
            bakers: foundBakers,
            title: 'Index Page'
        })
      })
    })
})

// CREATE
breads_router.post('/', (req, res) => {
    if (!req.body.image) {
      req.body.image = undefined
    }
    if(req.body.hasGluten === 'on') {
      req.body.hasGluten = true
    } else {
      req.body.hasGluten = false
    }
    Bread.create(req.body)
    res.redirect('/breads')
  })
  

module.exports = breads_router