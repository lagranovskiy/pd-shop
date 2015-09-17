'use strict';
var chai = require('chai');
var ZSchema = require('z-schema');
var validator = new ZSchema({});
var supertest = require('supertest');
var api = supertest('http://localhost:3000'); // supertest init;
var expect = chai.expect;

describe('/customer/orders', function() {
  describe('get', function() {
    it('should respond with 200 Placed orders of the...', function(done) {
      /*eslint-disable*/
      var schema = {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "orderId": {
              "type": "string",
              "description": "The Unique Order ID"
            },
            "invoiceId": {
              "type": "number",
              "description": "The number of created invoice. Can be empty"
            },
            "orderDate": {
              "type": "string",
              "format": "datetime"
            },
            "paymentTransactionId": {
              "type": "string",
              "description": "The transaction id of 3rd party system for payment"
            },
            "paymentDate": {
              "type": "string",
              "format": "date"
            },
            "shippingNumber": {
              "type": "string",
              "description": "The shipping number of the shipping company"
            },
            "shippingDate": {
              "type": "string",
              "format": "date"
            },
            "orderTotalPrice": {
              "type": "number",
              "format": "float"
            },
            "orderStatus": {
              "type": "string",
              "description": "Current status in the text form"
            },
            "shippingInformation": {
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
            },
            "billingInformation": {
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
            },
            "paymentInformation": {
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
            },
            "orderItems": {
              "type": "array",
              "items": {
                "properties": {
                  "position": {
                    "type": "integer",
                    "minimum": 1
                  },
                  "count": {
                    "type": "integer",
                    "minimum": 1
                  },
                  "productId": {
                    "type": "string"
                  }
                },
                "required": [
                  "position",
                  "count",
                  "productId"
                ]
              }
            }
          },
          "required": [
            "orderTotalPrice",
            "shippingInformation",
            "billingInformation",
            "paymentInformation",
            "orderItems"
          ]
        }
      };

      /*eslint-enable*/
      api.get('/api/customer/orders')
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
