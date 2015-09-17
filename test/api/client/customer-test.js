'use strict';
var chai = require('chai');
var ZSchema = require('z-schema');
var validator = new ZSchema({});
var supertest = require('supertest');
var api = supertest('http://localhost:3000'); // supertest init;
var expect = chai.expect;

describe('/customer', function() {
  describe('get', function() {
    it('should respond with 200 Info about current...', function(done) {
      /*eslint-disable*/
      var schema = {
        "type": "object",
        "properties": {
          "customerId": {
            "type": "string",
            "description": "The unique id number of the customer"
          },
          "fullname": {
            "type": "string"
          },
          "company": {
            "type": "string"
          },
          "dob": {
            "type": "string",
            "format": "date"
          },
          "email": {
            "type": "string"
          },
          "phone": {
            "type": "string"
          }
        },
        "required": [
          "fullname",
          "dob"
        ]
      };

      /*eslint-enable*/
      api.get('/api/customer')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);

        expect(validator.validate(res.body, schema)).to.be.true;
        done();
      });
    });

    it('should respond with 403 Customer not logged in', function(done) {
      api.get('/api/customer')
      .set('Accept', 'application/json')
      .expect(403)
      .end(function(err, res) {
        if (err) return done(err);

        expect(res.body).to.equal(null); // non-json response or no schema
        done();
      });
    });

  });

});
