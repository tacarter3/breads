// require mongoose 
const mongoose = require('mongoose')
// creating shorthand for the Schema constructor 
const { Schema } = mongoose 

// schema
const breadSchema = new Schema({
  name: { type: String, required: true },
  hasGluten: {type: Boolean, default: false},
  image: { type: String, default: 'http://place-hold.it/500x500.png' },
  baker: {
    type: Schema.Types.ObjectID,
    ref: 'Baker'
  }
})

// helper methods 
breadSchema.methods.getBakedBy = function(){
  return `${this.name} was baked with love by ${this.baker.name}, who has been with us since ${this.baker.startDate.getFullYear()}`
}
// Assign a function to the "statics" object of our breadSchema
// breadSchema.methods.getBakedBy = function() {
//   return this.find({ baker: 'Chandler'})
// }  

// model and export
const Bread = mongoose.model('Bread', breadSchema)
module.exports = Bread