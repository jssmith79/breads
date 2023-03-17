const express = require('express')
const breads_router = express.Router()
const Bread = require('../models/bread.js')


//NEW
breads_router.get('/new', (req, res) => {
  res.render('new')
})




// edit
breads_router.get('/:arrayIndex/edit', (req, res) => {
  res.render('edit', {
    bread: Bread[req.params.arrayIndex],
    index: req.params.arrayIndex,
  })
})


// UPDATE
breads_router.put('/:arrayIndex', (req, res) => {
  if(req.body.hasGluten === 'on'){
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread[req.params.arrayIndex] = req.body
  res.redirect(`/breads/${req.params.arrayIndex}`)
})

// DELETE
breads_router.delete('/:arrayIndex', (req, res) => {
  Bread.splice(req.params.arrayIndex, 1)
  res.status(303).redirect('/breads')
})

//SHOW

breads_router.get('/:arrayIndex', (req, res) => {
    //res.send(Bread[req.params.arrayIndex])
    if (Bread[req.params.arrayIndex]) {
    res.render('Show', {
        bread: Bread[req.params.arrayIndex],
        index: req.params.arrayIndex,
    })
   } else {
    res.send('404 -- No Bueno')
   }
})
//Index
breads_router.get('/', (req, res) => {
//     res.send(Bread)
    res.render('index', {
        breads: Bread,
        title: 'Index'
    })
})

// CREATE
breads_router.post('/', (req, res) => {
    if (!req.body.image) {
      req.body.image = 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    }
    if(req.body.hasGluten === 'on') {
      req.body.hasGluten = true
    } else {
      req.body.hasGluten = false
    }
    Bread.push(req.body)
    res.redirect('/breads')
  })
  




module.exports = breads_router