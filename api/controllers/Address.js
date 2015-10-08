'use strict';

var url = require('url');


var Address = require('./AddressService');


module.exports.getCustomerAddressData = function getCustomerAddressData (req, res, next) {
  

  var result = Address.getCustomerAddressData();

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};
