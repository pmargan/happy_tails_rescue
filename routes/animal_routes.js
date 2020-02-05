const express = require("express");
const router = express.Router();
require('dotenv').config()
const { AnimalModel } = require("../database/schemas/animal_schema")
let { multerUploads } = require('../middleware/multerUpload')
let { uploadFiles } = require('../services/uploader')

router.get("/", async (req, res) => {
  AnimalModel.find()
    .then(animal => res.send(animal))
    .catch(err => res.status(500).send(err))
})

router.get("/cats", (req, res) => {
  AnimalModel.find({ $or: [{ animalType: "Kitten" }, { animalType: "Cat" }] })
    .then(animals => res.send(animals))
    .catch(err => res.status(500).send(err))
})

router.get("/dogs", (req, res) => {
  AnimalModel.find({ $or: [{ animalType: "Puppy" }, { animalType: "Dog" }] })
    .then(animals => res.send(animals))
    .catch(err => res.status(500).send(err))
})

router.get("/:id", (req, res) => {
  AnimalModel.findById(req.params.id)
    .then(animal => res.send(animal))
    .catch(err =>res.status(500).send(err))
})

router.post("/", multerUploads, async (req, res) => {
  if(req.files) {
    req.body.animalPhotos = await uploadFiles(req.files)
  }
  req = filter(req.body)

  const newAnimal = new AnimalModel({...req.body})
  const {err} = await newAnimal.save()

  if(err){res.status(400).send(err)}

  res.send(newAnimal)
})

router.put("/:id", multerUploads, async (req, res) => {
  if(req.files) {
    req.body.animalPhotos = await uploadFiles(req.files)
  }
  req = filter(req.body)

  AnimalModel.findOneAndUpdate(
    {_id: req.params.id},
    {...req.body},
    {new: true}
  )
    .then((animal) => res.send(animal))
    .catch(err => res.status(500).send(err))
})

router.delete("/:id", (req, res) => {
  AnimalModel.findOneAndDelete({_id: req.params.id})
    .then(() => res.sendStatus(200))
    .catch(err => res.status(500).send(err))
})

router.post("/test", multerUploads, async (req, res) => {
  console.log(req)
  uploadFiles(req.files)
  .then(images => res.send(images))
  .catch(err => res.status(500).send(err))
})

const filter = (data) => {
  let keys = [
    'animalPhotos',
    'animalType',
    'gender',
    'microchip',
    'name',
    'age',
    'primaryBreed',
    'secondaryBreed',
    'crossBreed',
    'color',
    'coatType',
    'size',
    'location',
    'friendlyWith',
    'wouldSuit',
    'weight',
    'behaviorNotes',
    'medicalNotes',
    'houseTrained',
    'adoptionFee',
    'bin',
    'desexed',
    'vaccinated',
    'wormed',
    'heartwormTreated',
    'description',
    'dob',
    'extraNotes'
  ]
  return Object.keys(data)
    .reduce((acc, key) => keys.includes(key) ? {...acc, [key]: data[key]} : acc, {})
}

module.exports = router;
