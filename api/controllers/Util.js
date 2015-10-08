'use strict';

var url = require('url');


var Util = require('./UtilService');


module.exports.authSigninPost = function authSigninPost (req, res, next) {
  var authRequest = req.swagger.params['authRequest'].value;
  

  var result = Util.authSigninPost(authRequest);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.authSignupPost = function authSignupPost (req, res, next) {
  var signUpRequest = req.swagger.params['signUpRequest'].value;
  

  var result = Util.authSignupPost(signUpRequest);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};
