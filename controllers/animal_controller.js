const { AnimalModel } = require("../database/schemas/animal_schema")

async function create(req, res, next) {
    req.animal.push(req.body);
    try {
        await req.user.save();
        res.json(req.animal);
    } catch( err ) {
        next(err);
    }
}

function index(req, res) {
    return res.json(req.animal)
}

module.exports = {
    create,
    index,
    
}