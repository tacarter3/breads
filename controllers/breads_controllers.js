const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')
const seed = require('../models/seed.js')
const Baker = require('../models/baker.js')


// INDEX
breads.get('/', (req, res) => {
  Baker.find()
    .then(foundBakers => {
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
breads.post('/', (req, res) => {
  console.log(req.body)
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
  Baker.find()
    .then(foundBakers => {
      res.render('new', {
        bakers: foundBakers
      })
    })
})
// SHOW
breads.get('/:id', (req, res) => {
  Bread.findById(req.params.id)
      .populate('baker')
      .then(foundBread => {
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
  Baker.find()
  .then(foundBakers => {
    
    Bread.findById(req.params.id) 
      .then(foundBread => { 
        res.render('edit', {
          bread: foundBread,
          bakers: foundBakers
      })
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