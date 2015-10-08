'use strict';

var url = require('url');


var Customer = require('./CustomerService');


module.exports.authSigninPost = function authSigninPost (req, res, next) {
  var authRequest = req.swagger.params['authRequest'].value;
  

  var result = Customer.authSigninPost(authRequest);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.authSignupPost = function authSignupPost (req, res, next) {
  var signUpRequest = req.swagger.params['signUpRequest'].value;
  

  var result = Customer.authSignupPost(signUpRequest);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.getCustomerInfo = function getCustomerInfo (req, res, next) {
  

  var result = Customer.getCustomerInfo();

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.getCustomerAddressData = function getCustomerAddressData (req, res, next) {
  

  var result = Customer.getCustomerAddressData();

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.getCustomerOrders = function getCustomerOrders (req, res, next) {
  

  var result = Customer.getCustomerOrders();

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.getCustomerPaymentData = function getCustomerPaymentData (req, res, next) {
  

  var result = Customer.getCustomerPaymentData();

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};
