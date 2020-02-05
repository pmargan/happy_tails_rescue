const express = require("express")
const router = express.Router()
const { AdoptionModel } = require('../database/schemas/adoption_schema')
const mongoose = require('mongoose')

router.post('/', async (req, res) => {
  AdoptionModel.create(req.body).then(doc => {
    res.send(doc)
  })
  .catch(err => {
    res.send(err)
  })
})

module.exports = router
