const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv/config')
const routes = require('./routes')

app.use(express.static(__dirname+'/public'));


// Middlewares
app.use(cors())
app.use(bodyParser.json())
app.use(routes)


// respond with "hello world" when a GET request is made to the homepage
app.get('/', async (req, res) => {
  res.send('Hello world')
})

mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  () => console.log('connected to DB')
)

app.listen(3333)