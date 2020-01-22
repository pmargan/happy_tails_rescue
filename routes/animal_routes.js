 const express = require('express')
const router = express.Router()
const { AnimalModel } = require('../database/schemas/animal_schema')
const { UserModel } = require('../database/schemas/user_schema')
const { deleteSession } = require('../middleware/tokenCreate')
const secret = process.env.JWT_SECRET
const algorithm = 'HS256'

router.post('/register', (req, res) => {
    const newAnimal = new AnimalModel({
        userId: req.body.userId,
        animalPhoto: req.body.animalPhoto,
        animalType: req.body.animaltype,
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
        heartwormTreated: req.body.heartwormTreated,
        description: req.body.description,
        dob: req.body.dob,
        extraNotes: req.body
    })

    newAnimal.save()

module.exports = router