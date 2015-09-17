'use strict';
var chai = require('chai');
var ZSchema = require('z-schema');
var validator = new ZSchema({});
var supertest = require('supertest');
var api = supertest('http://localhost:3000'); // supertest init;
var expect = chai.expect;

describe('/product', function() {
  describe('get', function() {
    it('should respond with 200 Product List', function(done) {
      /*eslint-disable*/
      var schema = {
        "allOf": [
          {
            "type": "object",
            "properties": {
              "startsAt": {
                "type": "number",
                "description": "Index of element the result begins on"
              },
              "limit": {
                "type": "number",
                "description": "Max number of returned results",
                "default": 10,
                "maximum": 150
              },
              "total": {
                "type": "number",
                "description": "Total number of results"
              }
            }
          },
          {
            "type": "object"
          }
        ],
        "required": [
          "payload"
        ],
        "properties": {
          "payload": {
            "type": "array",
            "items": {
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
            }
          }
        }
      };

      /*eslint-enable*/
      api.get('/api/product')
      .query({
mode: 'DATA GOES HERE',limit: 'DATA GOES HERE',startsAt: 'DATA GOES HERE'
      })
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
