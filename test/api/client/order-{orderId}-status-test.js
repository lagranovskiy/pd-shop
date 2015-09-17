'use strict';
var chai = require('chai');
var ZSchema = require('z-schema');
var validator = new ZSchema({});
var supertest = require('supertest');
var api = supertest('http://localhost:3000'); // supertest init;
var expect = chai.expect;

describe('/order/{orderId}/status', function() {
  describe('get', function() {
    it('should respond with 200 Order information', function(done) {
      /*eslint-disable*/
      var schema = {
        "properties": {
          "orderId": {
            "type": "string"
          },
          "orderDate": {
            "type": "string",
            "format": "datetime"
          },
          "orderStatus": {
            "type": "string"
          }
        }
      };

      /*eslint-enable*/
      api.get('/api/order/{orderId PARAM GOES HERE}/status')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);

        expect(validator.validate(res.body, schema)).to.be.true;
        done();
      });
    });

    it('should respond with 404 Order not found', function(done) {
      api.get('/api/order/{orderId PARAM GOES HERE}/status')
      .set('Accept', 'application/json')
      .expect(404)
      .end(function(err, res) {
        if (err) return done(err);

        expect(res.body).to.equal(null); // non-json response or no schema
        done();
      });
    });

  });

});
