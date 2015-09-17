'use strict';
var chai = require('chai');
var ZSchema = require('z-schema');
var validator = new ZSchema({});
var supertest = require('supertest');
var api = supertest('http://localhost:3000'); // supertest init;
var expect = chai.expect;

describe('/order', function() {
  describe('post', function() {
    it('should respond with 200 Successfull placed', function(done) {
      /*eslint-disable*/
      var schema = {
        "type": "string"
      };

      /*eslint-enable*/
      api.post('/api/order')
      .set('Accept', 'application/json')
      .send({
        order: 'DATA GOES HERE'
      })
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);

        expect(validator.validate(res.body, schema)).to.be.true;
        done();
      });
    });

    it('should respond with 405 Invalid input', function(done) {
      api.post('/api/order')
      .set('Accept', 'application/json')
      .send({
        order: 'DATA GOES HERE'
      })
      .expect(405)
      .end(function(err, res) {
        if (err) return done(err);

        expect(res.body).to.equal(null); // non-json response or no schema
        done();
      });
    });

  });

});
