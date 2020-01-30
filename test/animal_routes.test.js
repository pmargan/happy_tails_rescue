let mongoose = require("mongoose");

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');
let expect = chai.expect

chai.use(chaiHttp);
//Our parent block
describe('Animals', () => {
  describe('/GET animal', () => {
    it('it should GET all the animals', (done) => {
      chai.request(server)
        .get('/animals/all-animals')
        .end((err, res) => {
          expect(res.body.length).to.be.above(0)
          done();
        });
    });
    it('first Animal should have name "Budweiser"', (done) => {
      chai.request(server)
        .get('/animals/all-animals')
        .end((err, res) => {
          // console.log(res.body[0])
          expect(res.body[0].name).to.equal("Budweiser")
          done();
        });
    });

    it('Expect Animals Array length to equal 2', (done) => {
      chai.request(server)
        .get('/animals/all-animals')
        .end((err, res) => {
          expect(res.body.length).to.equal(2)
          done();
        });
    });

  });

  describe('/GET cats-kittens', () => {
    it('it should GET all the Cats and Kittens', (done) => {
      chai.request(server)
        .get('/animals/cats-kittens')
        .end((err, res) => {
          expect(res.body.length).to.be.above(0)
          done();
        });
    });
    it('first Cat/Kitten should have name "Abbey"', (done) => {
      chai.request(server)
        .get('/animals/cats-kittens')
        .end((err, res) => {
          expect(res.body[0].name).to.equal("Abbey")
          done();
        });
    });
    it('Expect Cats/Kittens array length to equal 1', (done) => {
      chai.request(server)
        .get('/animals/cats-kittens')
        .end((err, res) => {
          expect(res.body.length).to.equal(1)
          done();
        })
    })

  });

  describe('/GET dogs-puppies', () => {
    it('it should GET all Dogs and Puppies', (done) => {
      chai.request(server)
        .get('/animals/dogs-puppies')
        .end((err, res) => {
          expect(res.body.length).to.be.above(0)
          done();
        });
    });
    it('first Dogs/Puppies should have name "Budweiser"', (done) => {
      chai.request(server)
        .get('/animals/dogs-puppies')
        .end((err, res) => {
          expect(res.body[0].name).to.equal("Budweiser")
          done();
        });
    });
    it('Expect Dogs/Puppies array length to equal 1', (done) => {
      chai.request(server)
        .get('/animals/dogs-puppies')
        .end((err, res) => {
          expect(res.body.length).to.equal(1)
          done();
        })
    })

  });

  describe('/GET profile-id', () => {
    it('it should GET current animal by ID', (done) => {
      chai.request(server)
        .get('/animals/all-animals')
        .end((err, res) => {
          const animal = res.body[0]
          chai.request(server)
            .get(`/animals/profile/${animal._id}`)
            .end((err, res) => {
              expect(res.body._id).to.equal(animal._id)
              done();
            });
        });
    });

    it('it should fail to get animal by ID if ID not exist', (done) => {
          chai.request(server)
            .get(`/animals/profile/1234`)
            .end((err, res) => {
              expect(res.status).to.equal(500)
              done();
            });
    });

  });


  after(() => {
    mongoose.connection.close()
  })

});
