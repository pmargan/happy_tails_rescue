// const passport = require("passport")
const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const API_PORT = process.env.PORT || 5000


// this is our MongoDB database con string

const dbRoute = 'mongodb+srv://pmargan:psdstrk1@cluster0-9orff.mongodb.net/test?retryWrites=true&w=majority'

// connects our back end code with the database
mongoose.connect(dbRoute, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.once('open', () => {
    require('./database/seeds')
    console.log('connected to the database')
})

// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get("/", (req, res) => res.send("Welcome"))
app.use("/auth", require("./routes/auth_routes"))
app.use("/animals", require("./routes/animal_routes"))

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`))