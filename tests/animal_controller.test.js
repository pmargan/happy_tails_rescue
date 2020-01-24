const mongoose = require('mongoose')
const { index } = require('../controllers/animal_controller')

describe('/animals routes', () => {
    beforeEach(() => {
        // Set up db
        mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true })
        require('../database/seeds')
    })

    test('/animals returns list of Animals', async () => {
        const res = {
            json: jest.fn()
        }
        await index(null, res)   
        // console.log(res.json.mock.calls[0][0][0])        
        expect(res.json.mock.calls.length).toBe(1)
        expect(res.json.mock.calls[0][0][0].name).toBe("Budweiser")     
    });

    afterEach(async () => {
        await mongoose.connection.dropDatabase()
        await mongoose.connection.close()
    })
})
