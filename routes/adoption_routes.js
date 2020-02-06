const express = require("express")
const router = express.Router()
const { AdoptionModel } = require('../database/schemas/adoption_schema')
const mongoose = require('mongoose')
const auth = require('../services/auth')

router.get('/', auth, async (req, res) => {
  if(!req.user){
    res.send('You are not authorized to access this page')
  }
  AdoptionModel.find()
  .then(all => {
    res.send(all)
  })
  .catch(err => {
    res.send(err)
  })
})

router.post('/', async (req, res) => {
  AdoptionModel.create(req.body).then(doc => {
    res.send(doc)
  })
  .catch(err => {
    res.send(err)
  })
})

router.delete("/:id", auth, (req, res) => {
  if(!req.user){
    res.send('You are not authorized to access this page')
  }

  AdoptionModel.findOneAndDelete({_id: req.params.id})
    .then(() => res.sendStatus(200))
    .catch(err => res.status(500).send(err))
})

module.exports = router
