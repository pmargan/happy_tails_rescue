const { Schema } = require("mongoose")
const { AnimalSchema } = require("./animal_schema")
const passportLocalMongoose = require('passport-local-mongoose')

const UserSchema = new Schema({
    animals: [AnimalSchema]
})

UserSchema.plugin(passportLocalMongoose, { usernameField: 'email' })

module.exports = UserSchema