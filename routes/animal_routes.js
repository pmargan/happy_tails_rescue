const express = require("express")
const router = express.Router()
const { celebrate, Joi } = require("celebrate")
const AnimalController = require("./../controllers/animal_controller")

router.post("/", celebrate({
    body: {
        name: Joi.string().required(),
        age: Joi.string().required()
    }
}), AnimalController.create)

router.get("/", AnimalController.index)

module.exports = router