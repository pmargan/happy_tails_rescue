const mongoose = require('mongoose')
const { index } = require('../controllers/animal_controller')
const { AnimalModel } = require('../database/schemas/animal_schema')

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
const expect = chai.expect
chai.use(chaiAsPromised)

const newDog = {
    userId: "1234",
    animalPhoto: "http://lorempixel.com/200/200",
    animalType: "Dog",
    microchip: "abc123456789",
    name: "Budweiser",
    age: 1.5,
    gender: "Male",
    primaryBreed: "Corgi",
    secondaryBreed: "",
    crossBreed: true,
    color: "Brown",
    coatType: "Short",
    size: "Medium",
    location: "Tarampa, West Brisbane",
    friendlyWith: "Dogs (MUST be a calm well balanced dog) and cats (can sometimes get over excited and chase). Kids not recommended.",
    wouldSuit: "Couple, singles, retirees, families",
    weight: 8,
    behaviorNotes: "Needs a confident dog owner as he can be snappy",
    medicalNotes: "grain free",
    houseTrained: true,
    adoptionFee: 450,
    bin: "BIN0000561500753",
    desexed: true,
    vaccinated: true,
    wormed: true,
    heartwormTreated: true,
    dob: 21/1/2019,
    extraNotes: "",
    description: "Budweiser, or Buddy as he is known always greets you with great excitement when you get home"
    }

describe('Test Animal Model', () => {
    beforeEach(() => {
        // Set up db
        mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true })
        require('../database/seeds')
    })

    afterEach(async () => {
        await mongoose.connection.dropDatabase()
        await mongoose.connection.close()
    })

    it('Successfully Saves New Dog Entry', async () => {
        const validDog = new AnimalModel(newDog)
        const savedDog = await validDog.save()
        return expect(savedDog._id).to.exist
    })
})

