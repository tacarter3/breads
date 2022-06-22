// dependencies
// const express = require('express')
import express from 'express';
const baker = express.Router()
const Baker = require('../models/baker.js')
const bakerSeedData = require('../models/baker_seed.js')

//Index
baker.get('/', (req, res) => {
    Baker.find()
        .populate('breads')
        .then((foundBakers: any) => {
            res.send(foundBakers)
        })
})


baker.get('/data/seed', (req, res) => {
    Baker.insertMany(bakerSeedData)
    .then(res.redirect('/breads'))
})

// Show

baker.get('/:id', (req, res) => {
    Baker.findById(req.params.id)
        .populate({
            path: 'breads',
            options: { limit: 5 }
        })
        .then((foundBaker: any) => {
            res.render('bakerShow', {
                baker: foundBaker
            })
        })
})

// Delete
baker.delete('/:id', (req, res) => {
    Baker.findByIdAndDelete(req.params.id)
        .then((deletedBaker: any) => {
            res.status(303).redirect('/breads')
        })
})
// export
module.exports = baker