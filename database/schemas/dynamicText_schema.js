const mongoose = require('mongoose')

const Schema = mongoose.Schema

const DynamicTextSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  value: {
    type: String,
    required: true,
  }
  })
  
  const DynamicTextModel = mongoose.model('DynamicText', DynamicTextSchema)
  
  module.exports = { DynamicTextSchema, DynamicTextModel }