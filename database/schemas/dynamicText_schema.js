const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ParagraphSchema = new Schema({
  id: {
    type: String,
    required: true
  },
  title: {
    type: String,
  },
  value: {
    type: String,
    required: true
  },
  link: {
    type: String
  },
  linkText: {
    type: String
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