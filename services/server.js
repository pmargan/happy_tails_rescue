const mongoose = require('mongoose')
require('dotenv').config()
const express = require('express')

const API_PORT = 3001
const app = express()
// const router = express.Router()

// this is our MongoDB database con string

// const dbRoute = 'mongodb+srv://pmargan:psdstrk1@cluster0-9orff.mongodb.net/test?retryWrites=true&w=majority'

// connects our back end code with the database
mongoose.connect(process.env.DB_HOST, { useNewUrlParser: true })

const db = mongoose.connection

db.once('open', () => console.log('connected to the database'))

// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`))
