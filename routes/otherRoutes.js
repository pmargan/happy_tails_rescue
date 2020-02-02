const express = require("express")
const router = express.Router()
const { DynamicTextModel } = require('../database/schemas/dynamicText_schema')
const mongoose = require('mongoose')

router.put('/', async (req, res) => {
  for(let key of Object.keys(req.body)) {
    await DynamicTextModel.updateOne({ id: key }, {$set: {value: req.body[key]}})
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }
})

router.get('/:id', async (req, res) => {
    await DynamicTextModel.findOne({ id: req.params.id })
    .then(doc => res.send(doc))
    .catch(err => res.status(500).send(err))
})

module.exports = router
