const mongoose = require('mongoose')
const Schema = mongoose.Schema
const passportLocalMongoose = require('passport-local-mongoose')

const UserSchema = new mongoose.Schema({
    role: {
        type: String,
        default: 'guest'
    },
    admin: {
        type: Schema.Types.ObjectId,
        ref: "Admin",
        required: true
    }
})
UserSchema.plugin(passportLocalMongoose, { usernameField: 'email', usernameUnique: true } )

const UserModel = mongoose.model('User', UserSchema)

module.exports = { UserSchema, UserModel }