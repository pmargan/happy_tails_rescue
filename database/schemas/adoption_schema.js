const mongoose = require('mongoose')

const Schema = mongoose.Schema

const AdoptionSchema = new Schema({

    personalInfo: {

        firstName: {
        type: String,
        //require: true
        },
        lastName: {
        type: String,
        //require: true
        },
        contactNumber: {
        type: String,
        //require: true
        },
        email: {
            type: String,
            //require: true
        },
        addressStreet: {
            type: String,
            //require: true
        },
        addressSuburb: {
            type: String,
            //require: true
        },
        addressPostcode: {
            type: String,
            //require: true
        },
        hearAboutUs: {
            type: String,
            enum: ['Facebook', 'Pet Rescue', 'Friends or Family', 'Event', 'SavourLife'],
            //require: true
        }
    },

    animalDetails: {

        type: {
            type: String,
            enum: ['Cat', 'Dog'],
            //require: true
        },
        name: {
            type: String,
            //require: true
        },  
        age: {
            type: String,
            //require: true
        },
        breed: {
            type: String,
            //require: true
        },
        whyAdoption: {
            type: String,
            //require: true
        },
        whyThisAnimal: {
            type: String,
            //require: true
        },
        desirableCharacteristics: {
            type: String,
            //require: true
        },
        undesirableCharacteristics: {
            type: String,
            //require: true
        }
    },

    homeEnvironment:{

        houseOwnership: {
            type: String,
            enum: ['I own my own home', 'I rent but have permission from real estate, landlord or body corp to have pets', 'I rent and do not have currently have permission (will seek asap)'],
            //require: true
        },
        livingArrangementDayNight: {
            type: String,
            //require: true
        },
        describeHomeFencing: { // show this question for only dogs
            type: String,
            //require: false
        },
        otherPets: {
            type: String,
            //require: true
        },
        otherPetsVetwork: {
            type: String,
            //require: true
        },
        otherPeople: {
            type: String,
            //require: true
        }
    },

    lifestyle:{

        homeAloneHours:{
            type: String,
            //require: true
        },
        exercise: { // show this question for only dogs
            type: String,
            enum:['We would go on a run/jog each day', 'We would go on a walk each day', 'We would go walking a few days a week', 'We would throw a ball around the yard each day', 'We would visit the dog park most days', `We would not do any exercise`],
            //require: true
        },
        holidays:{
            type: String,
            //require: true
        }
        },
        seriousStuff: {

        surrenderAnAnimal: {
            type: String,
            //require: true
        },
        refusedAnAnimal: {
            type: String,
            //require: true
        },
        surrenderCirumstances: {
            type: String,
            enum:['Moving home', 'Moving interstate', 'Moving overseas', 'New child', `New dog/cat that does not like this {$type}`, 'Family member develops allergies', `New partner doesn't like this {$type}`, 'The {$type} became sick', 'Bad behaviour developed such as barking, digging, chewing etc', 'None of the above - I would be committed to this {$type} for life'],
            //require: true
        },
        homeCheck: {
            type: Boolean,
            //require: true
        },
        updates: {
            type: Boolean,
            //require: true
        },
        returnAnimal: {
            type: Boolean,
            //require: true
        },
        extraInfo: {
            type: String,
            //require: true
        }
        },

        newsletter: {
            type: Boolean,
            //require: true
        },

    adoptionContract: {

        agreeAll: {
            type: Boolean,
            //require: true
        }
    },

    signature:{

        fullName: {
            type: String,
            //require: true
        },
        sign:{
            type: String,
            //require: true
        }
    }
  })

  const AdoptionModel = mongoose.model('Adoption', AdoptionSchema)
  
  module.exports = { AdoptionSchema, AdoptionModel }