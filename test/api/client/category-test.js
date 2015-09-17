'use strict';
var chai = require('chai');
var ZSchema = require('z-schema');
var validator = new ZSchema({});
var supertest = require('supertest');
var api = supertest('http://localhost:3000'); // supertest init;
var expect = chai.expect;

describe('/category', function() {
  describe('get', function() {
    it('should respond with 200 Category List', function(done) {
      /*eslint-disable*/
      var schema = {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "categoryId": {
              "type": "string"
            },
            "categoryName": {
              "type": "string"
            }
          },
          "required": [
            "categoryName"
          ]
        }
      };

      /*eslint-enable*/
      api.get('/api/category')
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
