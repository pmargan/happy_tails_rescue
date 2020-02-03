const mongoose = require('mongoose')

const Schema = mongoose.Schema

const AdoptionSchema = new Schema({

    personalInfo: {

        firstName: {
        type: String,
        required: true
        },
        lastName: {
        type: String,
        required: true
        },
        contactNumber: {
        type: String,
        required: true
        },
        email: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        hearAboutUs: {
            type: String,
            enum: ['Facebook', 'Pet Rescue', 'Friends or Family', 'Event', 'SavourLife'],
            required: true
        }
    },

    animalDetails: {

        type: {
            type: String,
            enum: ['Cat', 'Dog'],
            required: true
        },
        name: {
            type: String,
            required: true
        },  
        age: {
            type: String,
            required: true
        },
        breed: {
            type: String,
            required: true
        },
        whyAdoption: {
            type: String,
            required: true
        },
        whyThisAnimal: {
            type: String,
            required: true
        },
        desirableCharacteristics: {
            type: String,
            required: true
        },
        undesirableCharacteristics: {
            type: String,
            required: true
        }
    },

    homeEnvironment:{

        houseOwnership: {
            type: String,
            enum: ['I own my own home', 'I rent but have permission from real estate, landlord or body corp to have pets', 'I rent and do not have currently have permission (will seek asap)'],
            required: true
        },
        livingArrangementDayNight: {
            type: String,
            required: true
        },
        describeHomeFencing: { // show this question for only dogs
            type: String,
            required: false
        },
        otherPets: {
            type: String,
            required: true
        },
        otherPetsVetwork: {
            type: String,
            required: true
        },
        otherPeople: {
            type: String,
            required: true
        }
    },

    lifestyle:{

        homeAloneHours:{
            type: Number,
            required: true
        },
        exercise: { // show this question for only dogs
            type: String,
            enum:['We would go on a run/jog each day', 'We would go on a walk each day', 'We would go walking a few days a week', 'We would throw a ball around the yard each day', 'We would visit the dog park most days', `We would not do any exercise`],
            required: true
        },
        holidays:{
            type: String,
            required: true
        }
        },
        seriousStuff: {

        surrenderAnAnimal: {
            type: String,
            required: true
        },
        refusedAnAnimal: {
            type: String,
            required: true
        },
        surrenderCirumstances: {
            type: String,
            enum:['Moving home', 'Moving interstate', 'Moving overseas', 'New child', `New dog/cat that does not like this {$type}`, 'Family member develops allergies', `New partner doesn't like this {$type}`, 'The {$type} became sick', 'Bad behaviour developed such as barking, digging, chewing etc', 'None of the above - I would be committed to this {$type} for life'],
            required: true
        },
        homeCheck: {
            type: Boolean,
            required: true
        },
        updates: {
            type: Boolean,
            required: true
        },
        returnAnimal: {
            type: Boolean,
            required: true
        },
        extraInfo: {
            type: String,
            required: true
        }
        },

        newsletter: {
            type: Boolean,
            required: true
        },

    adoptionContract: {

        agreeAll: {
            type: Boolean,
            required: true
        }
    },

    signature:{

        fullName: {
            type: String,
            required: true
        },
        sign:{
            type: String,
            required: true
        }
    }
  })

  const AdoptionModel = mongoose.model('Adoption', AdoptionSchema)
  
  module.exports = { AdoptionSchema, AdoptionModel }