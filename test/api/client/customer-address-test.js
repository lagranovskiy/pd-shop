'use strict';
var chai = require('chai');
var ZSchema = require('z-schema');
var validator = new ZSchema({});
var supertest = require('supertest');
var api = supertest('http://localhost:3000'); // supertest init;
var expect = chai.expect;

describe('/customer/address', function() {
  describe('get', function() {
    it('should respond with 200 Used addresses of the...', function(done) {
      /*eslint-disable*/
      var schema = {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "addressId": {
              "type": "string"
            },
            "fullname": {
              "type": "string"
            },
            "street": {
              "type": "string"
            },
            "homenumber": {
              "type": "string"
            },
            "postalCode": {
              "type": "string"
            },
            "country": {
              "type": "string"
            },
            "phone": {
              "type": "string"
            }
          }
        }
      };

      /*eslint-enable*/
      api.get('/api/customer/address')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);

        expect(validator.validate(res.body, schema)).to.be.true;
        done();
      });
    });

  });

});
