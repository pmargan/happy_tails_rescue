const express = require("express");
const router = express.Router();
const { AnimalModel } = require("../database/schemas/animal_schema");

router.get("/", async (req, res) => {
    AnimalModel.find()
        .then(animal => {
            // console.log(animal)
            res.send(animal)
        })
        .catch(err =>
            res.status(500).send({
                error: err.message
            })
        )
})

router.get("/cats-kittens", (req, res) => {
    AnimalModel.find({ $or: [{ animalType: "Kitten" }, { animalType: "Cat" }] })
        .then(animals => {
            res.send(animals)
        })
        .catch(err =>
            res.status(500).send({
                error: err.message
            })
        )
})

router.get("/dogs-puppies", (req, res) => {
    AnimalModel.find({ $or: [{ animalType: "Puppy" }, { animalType: "Dog" }] })
        .then(animals => {
            res.send(animals);
        })
        .catch(
            err =>
                (res.status(500).send = {
                    error: err.message
                })
        );
});

router.get("/profile/:id", (req, res) => {
    AnimalModel.findById(req.params.id)
        .then(animal => {
            // if (animal) {
                res.send(animal);
            // } else {
            //     res.status(404).send({ error: "Animal not found" })
            // }
        })
        .catch(
            err =>
                res.status(500).send({
                    error: err.message
                })
        );
});

router.post("/register", (req, res) => {
    // console.log(req.body)
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
        heartwormTreated: req.body.heartwormTreated,
        description: req.body.description,
        dob: req.body.dob,
        extraNotes: req.body.extraNotes
    });
    newAnimal.save();
    res.send(newAnimal)
});

router.put("/update-animal-profile", function (req, res) {
    const id = req.body._id
    delete req.body._id
    AnimalModel.findById(id)
        .then(animal => {
            animal.set(req.body).save().then(updated => res.send(updated))
            // if (animal) {
                // res.send(animal);
            // } else {
            //     res.status(404).send({ error: "Animal not found" })
            // }
        })
        .catch(
            err =>
                res.status(500).send({
                    error: err.message
                })
        );


    // AnimalModel.findOneAndUpdate(
    //     {
    //         _id: id
    //     },
    //     {$set: req.body},
    //     {returnNewDocument: true}
    // )
    //     .then(result => {
    //         console.log(result)
    //         res.send(result)
    //     })
    //     .catch(err => {
    //         res.status(500).send(err);
    //     });
});

router.post("/delete-animal-profile", function (req, res) {
    AnimalModel.findOneAndDelete({
        _id: req.body._id
    }).catch(err => {
        res.status(500).send(err);
    });
});

module.exports = router;
