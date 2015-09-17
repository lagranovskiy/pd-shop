'use strict';
var chai = require('chai');
var supertest = require('supertest');
var api = supertest('http://localhost:3000'); // supertest init;
var expect = chai.expect;

describe('/auth/signup', function() {
  describe('post', function() {
    it('should respond with 200 Registration successfull', function(done) {
      api.post('/api/auth/signup')
      .set('Accept', 'application/json')
      .send({
        signUpRequest: 'DATA GOES HERE'
      })
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);

        expect(res.body).to.equal(null); // non-json response or no schema
        done();
      });
    });

    it('should respond with 405 Registration failed', function(done) {
      api.post('/api/auth/signup')
      .set('Accept', 'application/json')
      .send({
        signUpRequest: 'DATA GOES HERE'
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
