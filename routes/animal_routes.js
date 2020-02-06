const express = require("express");
const router = express.Router();
require('dotenv').config()
const { AnimalModel } = require("../database/schemas/animal_schema")
let { multerUploads } = require('../middleware/multerUpload')
let { uploadFiles } = require('../services/uploader')

router.get("/", async (req, res) => {

  // find all animals if admin account
  // AnimalModel.find()
  //   .then(animal => res.send(animal))
  //   .catch(err => res.status(500).send(err))

  AnimalModel.find({pending: false})
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
  req.body = filter(req.body)

  const newAnimal = new AnimalModel({...req.body, adoptionFee: 10, pending: true})
  const {err} = await newAnimal.save()

  console.log(newAnimal)

  if(err){res.status(400).send(err)}

  res.send(newAnimal)
})

router.put("/:id/approve", async (req, res) => {
  AnimalModel.findOneAndUpdate(
    {_id: req.params.id},
    {pending: false},
    {new: true}
  )
    .then((animal) => res.send(animal))
    .catch(err => res.status(500).send(err))
})

router.put("/:id", multerUploads, async (req, res) => {
  if(req.files) {
    req.body.animalPhotos = await uploadFiles(req.files)
  }
  req.body = filter(req.body)

  AnimalModel.findOneAndUpdate(
    {_id: req.params.id},
    {...req.body},
    {new: true}
  )
    .then((animal) => res.send(animal))
    .catch(err => res.status(500).send(err))
})

router.delete("/:id", (req, res) => {
  AnimalModel.findOneAndDelete({_id: req.params._id})
    .then(() => res.sendStatus(200))
    .catch(err => res.status(500).send(err))
})

router.post("/test", multerUploads, async (req, res) => {
  await uploadFiles(req.files)
  .then(images => req.body.animalPhotos = images)
  .catch(err => res.status(500).send(err))

  req.body = filter(req.body)
  res.send(req.body)
})

const filter = (data) => {
  let keys = [
    'required',
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
