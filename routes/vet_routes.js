const express = require("express")
const router = express.Router()
const { VetModel } = require('../database/schemas/vet_schema')
const mongoose = require('mongoose')

let {uploadFiles, uploadFile} = require('../services/uploader')
let { multerUploads } = require('../middleware/multerUpload')


router.get('/', async (req, res) => {
  VetModel.find()
  .then((vets) => {
    res.send(vets)
  })
  .catch((err) => {
    res.status(500).send(err)
  })
})

router.post('/', async (req, res) => {
  // filter the body
  const newVet = new VetModel({...req.body})
  const {err} = await newVet.save()

  if(err){res.status(400).send(err)}

  res.send(newVet)
})

router.put('/:id', async (req, res) => {
  VetModel.findOneAndUpdate(
    {_id: req.params.id},
    {...req.body},
    {new: true}
  )
    .then((vet) => res.send(vet))
    .catch(err => res.status(500).send(err))
})

router.delete('/:id', async (req, res) => {
  VetModel.findOneAndDelete({_id: req.params.id})
    .then(() => res.sendStatus(200))
    .catch(err => res.status(500).send(err))
})

router.post('/test', multerUploads, async (req, res) => {
  console.log(req)
  console.log(uploadFiles(req.images))
})

module.exports = router
