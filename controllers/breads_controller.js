const express = require('express')
const breads_router = express.Router()
const Bread = require('../models/bread.js')


//NEW
breads_router.get('/new', (req, res) => {
  res.render('new')
})




// edit
breads_router.get('/:id/edit', (req, res) => {
  Bread.findById(req.params.id)
    .then(foundBread => {
      res.render('edit', {
        bread: foundBread
      })
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
      .then(foundBread => {
        const bakedBy = foundBread.getBakedBy()
        console.log(bakedBy)
        res.render('show', {
          bread:foundBread
        })
      })
   })

//Index
breads_router.get('/', (req, res) => {
    Bread.find()
      .then(foundBreads => {
        res.render('index', {
            breads: foundBreads,
            title: 'Index Page'
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