const express = require("express");
const router = express.Router();
const { AnimalModel } = require("../database/schemas/animal_schema");

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

router.post("/", async (req, res) => {
  // filter the body
  const newAnimal = new AnimalModel({...req.body})
  const {err} = await newAnimal.save()

  if(err){res.status(400).send(err)}

  res.send(newAnimal)
})

router.put("/:id", (req, res) => {
  AnimalModel.findOneAndUpdate(
    {_id: req.params.id},
    {...req.body}
  )
    .then((animal) => res.send(animal))
    .catch(err => res.status(500).send(err))
})

router.delete("/:id", (req, res) => {
  AnimalModel.findOneAndDelete({_id: req.params.id})
    .then(() => res.sendStatus(200))
    .catch(err => res.status(500).send(err))
})

module.exports = router;
