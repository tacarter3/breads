
// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT

const express = require('express')
const app = express()


// ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Breads')
  })
  
  // Breads
const breadsController = require('./controllers/breads_controllers')
app.use('/breads', breadsController)

// LISTEN
app.listen(PORT, () => {
  console.log('nomming at port', PORT);
})