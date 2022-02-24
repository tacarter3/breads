const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')
const seed = require('../models/seed.js')


// INDEX
breads.get('/', (req, res) => {
  Bread.find()
    .then(foundBreads => {
      res.render('index', {
              breads: foundBreads,
              title: 'Index Page'

            })
      })
})

// CREATE
breads.post('/', (req, res) => {
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

// NEW
breads.get('/new', (req, res) => {
  res.render('new')
})
// SHOW
breads.get('/:id', (req, res) => {
  Bread.findById(req.params.id)
      .then(foundBread => {
        const bakedBy = foundBread.getBakedBy()
        console.log(bakedBy)
        res.render('show', {
              bread: foundBread
          })
      })
      .catch(err => {
        res.send('404')
      })
})
// breads.get('/:arrayIndex', (req, res) => {
//     if (Bread[req.params.arrayIndex]) {
//       res.render('Show', {
//         bread:Bread[req.params.arrayIndex],
//         index: req.params.arrayIndex,
//       })
//     } else {
//       res.render('404')
//     }
//   })
  // DELETE

breads.delete('/:id', (req, res) => {
  Bread.findByIdAndDelete(req.params.id) 
    .then( 
      res.status(303).redirect('/breads')
    )
    .catch(err => res.render('404'))
})

// UPDATE
breads.put('/:id', (req, res) => {
  if(req.body.hasGluten === 'on'){
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread.findByIdAndUpdate(req.params.id, req.body, { new: true }) 
    .then(updatedBread => {
      console.log(updatedBread) 
      res.redirect(`/breads/${req.params.id}`) 
    })
})
// EDIT
breads.get('/:id/edit', (req, res) => {
  Bread.findById(req.params.id) 
    .then(foundBread => { 
      res.render('edit', {
        bread: foundBread 
      })
    })
})
// Create Multiples

breads.get('/data/seed', (req, res) => {
  Bread.insertMany(seed)
  .then(createdBreads => {
    res.redirect('/breads')
  })
})

module.exports = breads