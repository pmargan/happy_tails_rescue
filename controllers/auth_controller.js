const UserModel = require("./../database/schemas/user_schema")

function register(req, res, next) {
    const { username, password } = req.body
    const user = new UserModel({ username })

    UserModel.register(user, password, (err, user) => {
        if (err) {
            return next(new HTTPError(500, err.message))
        }      
    })
}

module.exports = {
    register
}