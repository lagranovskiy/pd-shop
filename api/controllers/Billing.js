'use strict';

var url = require('url');


var Billing = require('./BillingService');


module.exports.getCustomerPaymentData = function getCustomerPaymentData (req, res, next) {
  

  var result = Billing.getCustomerPaymentData();

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};
