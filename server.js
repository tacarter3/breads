
// CONFIGURATION
require('dotenv').config()
const mongoose = require('mongoose')
const PORT = process.env.PORT

const express = require('express')
const app = express()


// DEPENDENCIES
const methodOverride = require('method-override')

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true}))


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

// database
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(m => console.log('db connected'))
  .catch(e => console.log(e))

// LISTEN
app.listen(PORT, () => {
  console.log('nomming at port', PORT);
})