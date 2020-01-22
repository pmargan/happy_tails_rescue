const mongoose = require('mongoose')

const Schema = mongoose.Schema

const DynamicText = new Schema({

    welcomePage: {
      type: String,
      required: true
    },
    adoptMain: {
      type: String,
      required: true
    },
    adoptForm: {
      type: String,
      required: true
    },
    programs: {
      type: String,
      required: true
    },
    adoptSnippet: {
      type: String,
      required: true
    },
    goldenTailsSnippet: {
      type: String,
      required: true
    },
    lastLitterSnippet: {
      type: String,
      required: true
    },
    pets2SafetySnippet: {
      type: String,
      required: true
    },
    educationTailsSnippet: {
      type: String,
      required: true
    },
    rehomingAssistSnippet: {
      type: String,
      required: true
    },
    lastLitterMain: {
      type: String,
      required: true
    },
    pets2SafetyMain: {
      type: String,
      required: true
    },
    rehomingAssistMain: {
      type: String,
      required: true
    },
    goldenTailsMain: {
      type: String,
      required: true
    },
    fosterMain: {
      type: String,
      required: true
    },
    fosterSnippet: {
      type: String,
      required: true
    },
    availableFoster: {
      type: String,
      required: true
    },
    helpUs: {
      type: String,
      required: true
    },
    donateSnippet: {
      type: String,
      required: true
    },
    donateMain: {
      type: String,
      required: true
    },
    volunteerMain: {
      type: String,
      required: true
    },
    volunteerSnippet: {
      type: String,
      required: true
    },
    petDinners: {
      type: String,
      required: true
    },
    contactDog: {
      type: String,
      required: true
    },
    contactCat: {
      type: String,
      required: true
    },
    fundraisingMain: {
      type: String,
      required: true
    },
    mediaEnquiries: {
      type: String,
      required: true
    },
  })
  
  const DynamicTextModel = mongoose.model('DynamicText', DynamicText)
  
  module.exports = { DynamicText, DynamicTextModel }