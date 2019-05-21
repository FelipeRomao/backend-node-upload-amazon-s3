require('dotenv').config()

const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const path = require('path')


const app = express()

app.use(require('../routes'))

/*
  Database Setup
*/

mongoose.connect(process.env.MONGO_URL,
  {
    useNewUrlParser : true
  }
)

app.use(express.json())
app.use(express.urlencoded({ urlencoded : true }))
app.use(morgan('dev'))
app.use(
  '/files', 
express.static(path.resolve(__dirname, '..', 'temp', 'uploads')))

app.listen(3333)