'use strict';
var chai = require('chai');
var ZSchema = require('z-schema');
var validator = new ZSchema({});
var supertest = require('supertest');
var api = supertest('http://localhost:3000'); // supertest init;
var expect = chai.expect;

describe('/customer/payment', function() {
  describe('get', function() {
    it('should respond with 200 Used payment infos of the...', function(done) {
      /*eslint-disable*/
      var schema = {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "paymentId": {
              "type": "string"
            },
            "type": {
              "type": "string",
              "enum": [
                "PayPal",
                "CreditCard",
                "SEPA"
              ]
            }
          },
          "required": [
            "type"
          ],
          "discriminator": "type"
        }
      };

      /*eslint-enable*/
      api.get('/api/customer/payment')
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
