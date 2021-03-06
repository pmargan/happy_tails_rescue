const express = require("express")
const router = express.Router()
const { VetModel } = require('../database/schemas/vet_schema')
const mongoose = require('mongoose')
const auth = require('../services/auth')

let { uploadFiles, uploadFile } = require('../services/uploader')
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

router.post('/', multerUploads, auth, async (req, res) => {
  if(!req.user){
    res.send('You are not authorized to access this page')
  }

  await uploadFiles(req.files)
  .then(src => {
    req.body.src = src[0]
  })

  req.body.alt = `${req.body.location} vet`

  req.body = filter(req.body)

  console.log(req.body)

  const newVet = new VetModel({...req.body})
  const {err} = await newVet.save()

  if(err){res.status(400).send(err)}

  res.send(newVet)
})

router.put('/:id', multerUploads, auth, async (req, res) => {
  if(!req.user){
    res.send('You are not authorized to access this page')
  }

  await uploadFiles(req.files)
  .then(src => {
    req.body.src = src[0]
  })

  req.body.alt = `${req.body.location} vet`

  req.body = filter(req.body)

  VetModel.findOneAndUpdate(
    {_id: req.params.id},
    {...req.body},
    {new: true}
  )
    .then((vet) => res.send(vet))
    .catch(err => res.status(500).send(err))
})

router.delete('/:id', auth, async (req, res) => {
  if(!req.user){
    res.send('You are not authorized to access this page')
  }

  VetModel.findOneAndDelete({_id: req.params.id})
    .then(() => res.sendStatus(200))
    .catch(err => res.status(500).send(err))
})


const filter = (data) => {
  let keys = [
    'alt',
    'src',
    'location',
    'link'
  ]
  return Object.keys(data)
    .reduce((acc, key) => keys.includes(key) ? {...acc, [key]: data[key]} : acc, {})
}

module.exports = router
