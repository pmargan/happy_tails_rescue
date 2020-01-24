const { AnimalModel } = require("../database/schemas/animal_schema")

async function create(req, res, next) {
    req.animal.push(req.body);
    try {
        await req.animal.save();
        res.json(req.animal);
    } catch( err ) {
        next(err);
    }
}

async function index(req, res) {
    return res.json(await AnimalModel.find())
}

// module.exports = {
//     create,
//     index
// }