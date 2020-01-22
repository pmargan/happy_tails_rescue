const UserModel = require("./../database/schemas/user_schema");
const JWTService = require("./../services/jwt_service");

function register(req, res, next) {
    const { email, password } = req.body;
    const user = new UserModel({ email });

    UserModel.register(user, password, (err, user) => {
        if (err) {
            return next(new HTTPError(500, err.message));
        }

        const token = JWTService.generateToken(user);

        return res.json({ token });        
    });
}


module.exports = {
    register
}