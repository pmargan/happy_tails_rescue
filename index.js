const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const cors = require('cors')
const API_PORT = process.env.PORT || 5000

// this is our MongoDB database con string

const dbRoute = process.env.DB_HOST

// connects our back end code with the database
mongoose.connect(dbRoute, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection
const animals = require("./routes/animal_routes")
const auth = require("./routes/auth_routes")

db.once('open', () => {
    require('./database/seeds')
    console.log('connected to the database')
})

// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'))


// not secure
app.use(cors())

//need to allocate proper routes 
app.use('/', require('./routes/test-routes'))


app.use('/auth', auth) 
app.use('/animals', animals),
// testing routes


// app.get("/", (req, res) => res.send("Welcome"))
// app.use("/all-animals", animals, (req, res) => res.send("All animals available for adoption"))
// app.use("/cats-kittens", animals, (req, res) => res.send("All cats and kittens available for adoption"))
// app.use("/dogs-puppies", animals, (req, res) => res.send("All dogs and puppies available for adoption"))
// app.use("/profile/:id", animals, (req, res) => res.send("View profile"))
// app.use("/update-animal-profile", animals, (req, res) => res.send("Edit profile"))
// app.use("/delete-animal-profile", animals, (req, res) => res.send("Delete profile"))

app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`))