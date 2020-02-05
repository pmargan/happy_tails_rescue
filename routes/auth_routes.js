const express = require("express")
const router = express.Router()
const { celebrate, Joi } = require("celebrate")
const AuthController = require("./../controllers/auth_controller")

router.post("/auth/register", celebrate({
    body: {
        username: Joi.string().required(),
        password: Joi.string().required()
    }
}), AuthController.register)

module.exports = router