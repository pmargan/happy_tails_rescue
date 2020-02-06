let mongoose = require("mongoose");

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');
let expect = chai.expect

chai.use(chaiHttp);
//Our parent block
describe('Text', () => {
  describe('/GET dynamic text', () => {
    it('it should GET all dynamic text', (done) => {
      chai.request(server)
        .get('/text')
        .end((err, res) => {
          expect(res.body.length).to.be.above(6)
          // expect(res).to.have.status('200')
          done();
        });
    });
  })

  describe('/GET dynamic text', () => {
    it('it should GET about page dynamic text', (done) => {
      chai.request(server)
        .get('/text/welcomePage')
        .end((err, res) => {
          // console.log(res.body)
          expect(res.body.value.length).to.be.above(0)
          // expect(res).to.have.status('200')
          done();
        });
    });
  })


  })

   