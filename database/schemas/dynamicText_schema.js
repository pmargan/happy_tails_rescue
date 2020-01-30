const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ParagraphSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  value: {
    type: String,
    required: true,
    unique: true
  }
})

const DynamicTextSchema = new Schema({

  id: {
    type: String,
    required: true
  },
  value: [ParagraphSchema]
})
  
  const DynamicTextModel = mongoose.model('DynamicText', DynamicTextSchema)
  
  module.exports = { DynamicTextSchema, DynamicTextModel }