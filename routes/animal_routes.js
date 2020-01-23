const express = require("express")
const router = express.Router()
// const { celebrate, Joi } = require("celebrate")
const AnimalController = require("./../controllers/animal_controller")

// router.post("/", celebrate({
//     body: {
//         name: Joi.string().required(),
//         age: Joi.string().required()
//     }
// }), AnimalController.create)

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

// router.get("/", AnimalController.index)

module.exports = router