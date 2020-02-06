const mongoose = require('mongoose')

const Schema = mongoose.Schema

const VetSchema = new Schema({

    alt: {
      type: String,
      required: true
    },
    src: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },

  })

  const VetModel = mongoose.model('Vet', VetSchema)
  
  module.exports = { VetSchema, VetModel }