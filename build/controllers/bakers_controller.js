"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// dependencies
// const express = require('express')
const express_1 = __importDefault(require("express"));
const baker = express_1.default.Router();
const Baker = require('../models/baker.js');
const bakerSeedData = require('../models/baker_seed.js');
//Index
baker.get('/', (req, res) => {
    Baker.find()
        .populate('breads')
        .then((foundBakers) => {
        res.send(foundBakers);
    });
});
baker.get('/data/seed', (req, res) => {
    Baker.insertMany(bakerSeedData)
        .then(res.redirect('/breads'));
});
// Show
baker.get('/:id', (req, res) => {
    Baker.findById(req.params.id)
        .populate({
        path: 'breads',
        options: { limit: 5 }
    })
        .then((foundBaker) => {
        res.render('bakerShow', {
            baker: foundBaker
        });
    });
});
// Delete
baker.delete('/:id', (req, res) => {
    Baker.findByIdAndDelete(req.params.id)
        .then((deletedBaker) => {
        res.status(303).redirect('/breads');
    });
});
// export
module.exports = baker;
