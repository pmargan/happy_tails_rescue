const JWT = require("jsonwebtoken");
const expiry = "1d";

function generateToken(user) {
    const token = JWT.sign(
        {
            email: user.email
        },
        process.env.JWT_SECRET,
        {
            subject: user._id.toString(),
            expiresIn: expiry
        }
    );

    return token;
}

module.exports = {
    generateToken
}

// const jwt = require('jsonwebtoken')
// const { UserModel } = require('../models/user')
// module.exports = function (req, res) {
//   let data = res.locals
//   token = res.locals.validUser.generateAuthToken()
//   delete data.validUser
//   res.cookie('authToken', token, { maxAge: 3600000}) //secure: true, sameSite: "None" , domain: "netlify.com", secure: true, sameSite: "None" 
//   res.json( data )
// }