'use strict';
var chai = require('chai');
var supertest = require('supertest');
var api = supertest('http://localhost:3000'); // supertest init;
var expect = chai.expect;

describe('/auth/signin', function() {
  describe('post', function() {
    it('should respond with 200 Authentication successfull', function(done) {
      api.post('/api/auth/signin')
      .set('Accept', 'application/json')
      .send({
        authRequest: 'DATA GOES HERE'
      })
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);

        expect(res.body).to.equal(null); // non-json response or no schema
        done();
      });
    });

    it('should respond with 403 Authentication failed', function(done) {
      api.post('/api/auth/signin')
      .set('Accept', 'application/json')
      .send({
        authRequest: 'DATA GOES HERE'
      })
      .expect(403)
      .end(function(err, res) {
        if (err) return done(err);

        expect(res.body).to.equal(null); // non-json response or no schema
        done();
      });
    });

  });

});
