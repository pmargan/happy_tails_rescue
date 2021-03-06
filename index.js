const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const cors = require('cors')
var multer = require('multer')
var upload = multer()
const API_PORT = process.env.PORT || 3001

let { cloudinaryConfig } = require('./services/cloudinaryConfig')

// get connection string from .env file
const dbRoute = process.env.DB_HOST

// connects our back end code with the database
mongoose.connect(dbRoute, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection
const animals = require('./routes/animal_routes')
const authRoute = require('./routes/auth_routes')
const text = require('./routes/otherRoutes')
const vets = require('./routes/vet_routes')
const adoption = require('./routes/adoption_routes')

//------------------------------------------------//
//----------REMOVE BEFORE PUTTING ONLINE----------//
//------------------------------------------------//
db.once('open', () => {
    require('./database/seeds')
    console.log('connected to the database')
})
//------------------------------------------------//
//------------------------------------------------//
//------------------------------------------------//

// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// not secure
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// for parsing multipart/form-data
app.use(upload.array())
app.use(express.static('public'))

app.use('*', cloudinaryConfig)

//need to allocate proper routes 
app.use('/text', text)
app.use('/auth', authRoute)
app.use('/animals', animals)
app.use('/vets', vets)
app.use('/adoptions', adoption)

app.on('close', () => {console.log('closing')})
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`))

module.exports = app


// let annoyingSplit = (steps) => 100 / Array(steps).fill().reduce((acc, val, i) => acc + Math.pow(2, i), 0)
