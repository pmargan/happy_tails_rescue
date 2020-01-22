const express = require("express");
const router = express.Router();
const { celebrate, Joi } = require("celebrate");
const AnimalController = require("./../controllers/animal_controller");

router.post("/", celebrate({
    body: {
        title: Joi.string().required(),
        url: Joi.string().required()
    }
}), AnimalController.create);

router.get("/", AnimalController.index);

module.exports = router;