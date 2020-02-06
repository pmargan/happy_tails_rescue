//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');
let expect = chai.expect

chai.use(chaiHttp);

describe(adoption, () => {
  describe('/POST adoption', () => {
    it('it should POST form data for pet adoption', (done) => {
      chai.request(server)
        .post('/adoption')
        // .type('form')
        .send({
          personalInfo: {
            firstName: "Albert",
            lastName: "Eienstien",
            contactNumber: "0400333555",
            email: "alberte@gmail.com",
            addressStreet: "1122, Boogie Ave",
            addressSuburb: "Zillmere",
            addressPostcode: "4035",
            hearAboutUs: "Facebook"
          },  
    
          animalDetails: {    
            type: 'Dog',
            name: 'Spot',
            age: "7",
            breed: "Golden Retriever",
            whyAdoption: "Companion dog",
            whyThisAnimal: "Is My favouite colour",
            desirableCharacteristics: "Friendly",
            undesirableCharacteristics: "bites"
          },
    
          homeEnvironment:{
            houseOwnership: 'I own my own home',
            livingArrangementDayNight: "inside dog",
            describeHomeFencing: "Fully fenced",
            otherPets: "none",
            otherPetsVetwork: "not applicable",
            otherPeople: "three people in house"
          },
    
          lifestyle:{
            homeAloneHours:"zero",
            exercise: "We would visit the dog park most days",    
            holidays: "would come with me on holiday",
          },
  
          seriousStuff: {   
            surrenderAnAnimal: "no",
            refusedAnAnimal: "no",
            surrenderCirumstances: 'Moving overseas',
            homeCheck: true,
            updates: true,
            returnAnimal: false,
            extraInfo: "Great Location",
            newsletter: false,
          },
                
          adoptionContract: {
            agreeAll: true,
            signature: "Albert Eienstein",
            fullName: "Albert Eienstein",
            sign: "AE"
          }
        })
        .end((err, res) => {
          expect(err).to.be.null;
          console.log(res)
          done()
        });
      })
    });
})
