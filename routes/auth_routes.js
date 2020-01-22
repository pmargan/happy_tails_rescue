const express = require('express')
const { UserModel } = require('../database/schemas/user_schema')
const { AnimalModel } = require('../database/schemas/animal_schema')
const passport = require('passport')
const router = express.Router()

const {
    signJwtForLogin,
    signJwtForSignUp,
    login,
    destroySession
} = require('../middleware/tokenCreate')

    const newUser = new UserModel ({
        email: req.body.email,
        password: req.body.password
    })

    UserModel.register(newUser, req.body.password, err => {
        if (err) {
            res.status(500).send(err.message)
        }
        passport.authenticate('local', { session: false })(req, res, () => {
            signJwtForSignUp(req, res, newUser)
        })
    })
})

router.post('/login', login, signJwtForLogin)

router.get('/logout', destroySession)

module.exports = router