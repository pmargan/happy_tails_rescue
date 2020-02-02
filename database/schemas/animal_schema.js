const mongoose = require('mongoose')

const Schema = mongoose.Schema

const AnimalSchema = new Schema({

  animalPhoto: {
    type: String,
    required: true
  },
  animalType: {
    type: String,
    enum: ['Dog', 'Puppy', 'Cat', 'Kitten'],
    required: true
  },
  gender: {
    type: String,
    enum: ['Male', 'Female'],
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
    enum: ['Short', 'Medium', 'Long'],
    required: false
  },
  size: {
    type: String,
    enum:['Toy', 'Small', 'Medium', 'Large', 'Giant'],
    required: true
  },
  location: {
    type: String,
    required: true
  },
  friendlyWith: {
    type: String,
    required: true
  },
  wouldSuit: {
    type: String,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  behaviorNotes: {
    type: String,
    required: true
  },
  medicalNotes: {
    type: String,
    required: false
  },
  houseTrained: {
    type: Boolean,
    required: true
  },
  adoptionFee: {
    type: Number,
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
    type: String,
    required: true
  },
  dob: {
    type: Date,
    required: false
  },
  extraNotes: {
    type: String,
    required: false
  }
})

mongoose.set('useFindAndModify', false);

const AnimalModel = mongoose.model('Animal', AnimalSchema)

module.exports = { AnimalSchema, AnimalModel }
