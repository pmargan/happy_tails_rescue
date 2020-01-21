const mongoose = require('mongoose')

const Schema = mongoose.Schema

const AnimalSchema = new Schema({

  userId: {
    type: String,
    required: true
  },
  animalPhoto: {
    type: String,
    required: true
  },
  animalType: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  microchip: {
    type: String,
    required: true,
    minLength: 9,
    maxLength: 15
  },
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  primaryBreed: {
    type: String,
    required: true
  },
  secondaryBreed: {
    type: String,
    required: false
  },
  crossBreed: {
    type: Boolean,
    required: false
  },
  color: {
    type: String,
    required: true
  },
  coatType: {
    type: String,
    required: false
  },
  size: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  friendlyWith: {
    type: Text,
    required: true
  },
  wouldSuit: {
    type: Text,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  behaviorNotes: {
    type: Text,
    required: true
  },
  medicalNotes: {
    type: Text,
    required: true
  },
  houseTrained: {
    type: Boolean,
    required: true
  },
  adoptionFee: {
    type: Integar,
    required: true
  },
  bin: {
    type: String,
    required: true
  },
  desexed: {
    type: Boolean,
    required: true
  },
  vaccinated: {
    type: Boolean,
    required: true
  },
  wormed: {
    type: Boolean,
    required: true
  },
  heartwormTreated: {
    type: Boolean,
    required: true
  },
  description: {
    type: Text,
    required: true
  },
  dob: {
    type: Date,
    required: false
  },
  extraNotes: {
    type: Text,
    required: false
  },
})

const AnimalModel = mongoose.model('Animal', AnimalSchema)

module.exports = { AnimalSchema, AnimalModel }