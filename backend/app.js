const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv/config')

// Middlewares
app.use(cors())
app.use(bodyParser.json())

// Import Routes
const postsRoute = require('./routes/posts')
//const usersRoute = require('./routes/users')
app.use('/posts', postsRoute)
//app.use('/users', usersRoute)

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world')
})

mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  () => console.log('connected to DB')
)

app.listen(3333)