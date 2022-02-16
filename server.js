
// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT

const express = require('express')
const app = express()

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
// DEPENDENCIES
const methodOverride = require('method-override')
// MIDDLEWARE
app.use(methodOverride('_method'))

// MIDDLEWARE
app.use(express.static('public'))

// ROUTES
app.get('/', (req, res) => {
    res.redirect('/breads')
  })
  
  // Breads
const breadsController = require('./controllers/breads_controllers')
app.use('/breads', breadsController)


// 404 Page
app.get('*', (req, res) => {
    res.send('404')
  })

// LISTEN
app.listen(PORT, () => {
  console.log('nomming at port', PORT);
})