// require mongoose 
const mongoose = require('mongoose')
// creating shorthand for the Schema constructor 
const { Schema } = mongoose 

// schema
const breadSchema = new Schema({
  name: { type: String, required: true },
  hasGluten: {type: Boolean, default: false},
  image: { type: String, default: 'http://place-hold.it/500x500.png' }
})

// model and export
const Bread = mongoose.model('Bread', breadSchema)
module.exports = Bread