'use strict';
var chai = require('chai');
var ZSchema = require('z-schema');
var validator = new ZSchema({});
var supertest = require('supertest');
var api = supertest('http://localhost:3000'); // supertest init;
var expect = chai.expect;

describe('/product/{productId}', function() {
  describe('get', function() {
    it('should respond with 200 Product Info', function(done) {
      /*eslint-disable*/
      var schema = {
        "type": "object",
        "description": "Single product defintion",
        "properties": {
          "productId": {
            "type": "string",
            "description": "UUID of the product"
          },
          "title": {
            "type": "string"
          },
          "desciption": {
            "type": "string"
          },
          "summary": {
            "type": "string"
          },
          "price": {
            "type": "number",
            "format": "float"
          },
          "lastSelled": {
            "type": "string",
            "format": "datetime"
          },
          "categories": {
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
          },
          "tags": {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        },
        "required": [
          "title",
          "price",
          "categories"
        ]
      };

      /*eslint-enable*/
      api.get('/api/product/{productId PARAM GOES HERE}')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);

        expect(validator.validate(res.body, schema)).to.be.true;
        done();
      });
    });

    it('should respond with 404 If not found', function(done) {
      api.get('/api/product/{productId PARAM GOES HERE}')
      .set('Accept', 'application/json')
      .expect(404)
      .end(function(err, res) {
        if (err) return done(err);

        expect(res.body).to.equal(null); // non-json response or no schema
        done();
      });
    });

  });

  describe('put', function() {
    it('should respond with 200 Successfull added', function(done) {
      /*eslint-disable*/
      var schema = {
        "type": "object",
        "description": "Single product defintion",
        "properties": {
          "productId": {
            "type": "string",
            "description": "UUID of the product"
          },
          "title": {
            "type": "string"
          },
          "desciption": {
            "type": "string"
          },
          "summary": {
            "type": "string"
          },
          "price": {
            "type": "number",
            "format": "float"
          },
          "lastSelled": {
            "type": "string",
            "format": "datetime"
          },
          "categories": {
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
          },
          "tags": {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        },
        "required": [
          "title",
          "price",
          "categories"
        ]
      };

      /*eslint-enable*/
      api.put('/api/product/{productId PARAM GOES HERE}')
      .set('Accept', 'application/json')
      .send({
        product: 'DATA GOES HERE'
      })
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);

        expect(validator.validate(res.body, schema)).to.be.true;
        done();
      });
    });

    it('should respond with 405 Invalid input', function(done) {
      api.put('/api/product/{productId PARAM GOES HERE}')
      .set('Accept', 'application/json')
      .send({
        product: 'DATA GOES HERE'
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
