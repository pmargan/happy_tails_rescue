const axios = require('axios')
const mongoose = require('mongoose')
const { index } = require('../controllers/animal_controller')
const { AnimalModel } = require('../database/schemas/animal_schema')

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
const expect = chai.expect
chai.use(chaiAsPromised)



describe('Test Animal Routes', () => {
    beforeEach( async () => {
                // Set up db
               await mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true })
                require('../database/seeds')
    })


    it('Retrieves a list of all animals', async () => {
      const animals = await axios.get('http://localhost:5000/animals/all-animals')
      console.log(animals.data) 
        
    })

    afterEach(async () => {
      await mongoose.connection.dropDatabase()
      await mongoose.connection.close()
    })
})

