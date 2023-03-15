const express = require('express')
const breads_router = express.Router()
const Bread = require('../models/bread.js')

breads_router.get('/:arrayIndex', (req, res) => {
    //res.send(Bread[req.params.arrayIndex])
    if (Bread[req.params.arrayIndex]) {
    res.render('Show', {
        bread: Bread[req.params.arrayIndex]
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

module.exports = breads_router