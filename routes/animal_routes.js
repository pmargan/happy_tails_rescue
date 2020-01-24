const express = require("express")
const router = express.Router()
const AnimalModel = require("./../database/schemas/animal_schema")


router.get('/all-animals', (req, res) => {
    AnimalModel.find()
        .then(animal => {
            res.send(animal)
        })
        .catch(err => res.status(500).send =({
            error: err.message
        }))
})

router.get('/cats-kittens', (req, res) => {
    AnimalModel.findById({ animalType: 'Kitten', animalType: 'Cat' })
        .then(animal => {
            res.send(animal)
        })
        .catch(err => res.status(500).send =({
            error: err.message
        }))
})

router.get('/dogs-puppies', (req, res) => {
    AnimalModel.findById({ animalType: 'Puppy', animalType: 'Dog' })
        .then(animal => {
            res.send(animal)
        })
        .catch(err => res.status(500).send =({
            error: err.message
        }))
})

router.get('/profile/:id', (req, res) => {
    AnimalModel.findById(req.params.id)
        .then(animal => {
            AnimalModel.findOne({animal: req.params.id})
                .then(currentAnimal => {
                    const animal = {...animal}
                    res.send(currentAnimal)
                })
        })
        .catch(err => res.status(500).send =({
            error: err.message
        }))
})

router.post('/register', (req, res) => {
    const newAnimal = new AnimalModel({
        animalPhoto: req.body.animalPhoto,
        animalType: req.body.animalType,
        gender: req.body.gender,
        microchip: req.body.microchip,
        name: req.body.name,
        age: req.body.age,
        primaryBreed: req.body.primaryBreed,
        secondaryBreed: req.body.secondaryBreed,
        crossBreed: req.body.crossBreed,
        color: req.body.color,
        coatType: req.body.coatType,
        size: req.body.size,
        location: req.body.location,
        friendlyWith: req.body.friendlyWith,
        wouldSuit: req.body.wouldSuit,
        weight: req.body.weight,
        behaviorNotes: req.body.behaviorNotes,
        medicalNotes: req.body.medicalNotes,
        houseTrained: req.body.houseTrained,
        adoptionFee: req.body.adoptionFee,
        bin: req.body.bin,
        desexed: req.body.desexed,
        vaccinated: req.body.vaccinated,
        wormed: req.body.wormed,
        heartworkTreated: req.body.heartworkTreated,
        description: req.body.description,
        dob: req.body.dob,
        extraNotes: req.body.extraNotes
    })
    newAnimal.save()

router.post('/update-animal-profile', function(req, res) {
    AnimalModel.findOneAndUpdate(
        {
            _id: req.body._id
        }, 
        {
            animalPhoto: req.body.animalPhoto,
            animalType: req.body.animalType,
            gender: req.body.gender,
            microchip: req.body.microchip,
            name: req.body.name,
            age: req.body.age,
            primaryBreed: req.body.primaryBreed,
            secondaryBreed: req.body.secondaryBreed,
            crossBreed: req.body.crossBreed,
            color: req.body.color,
            coatType: req.body.coatType,
            size: req.body.size,
            location: req.body.location,
            friendlyWith: req.body.friendlyWith,
            wouldSuit: req.body.wouldSuit,
            weight: req.body.weight,
            behaviorNotes: req.body.behaviorNotes,
            medicalNotes: req.body.medicalNotes,
            houseTrained: req.body.houseTrained,
            adoptionFee: req.body.adoptionFee,
            bin: req.body.bin,
            desexed: req.body.desexed,
            vaccinated: req.body.vaccinated,
            wormed: req.body.wormed,
            heartworkTreated: req.body.heartworkTreated,
            description: req.body.description,
            dob: req.body.dob,
            extraNotes: req.body.extraNotes
        })
        .then(result => {
            res.sendStatus(200)
        })
        .catch(err => {
            res.status(500).send(err)
        })
})

router.post('/delete-animal-profile', function(req, res) {
    AnimalModel.findOneAndDelete({
        _id: req.body._id
    })
    .catch(err => {
       res.status(500).send(err)
    })
})

module.exports = router