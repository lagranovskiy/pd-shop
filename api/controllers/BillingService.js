'use strict';

exports.getCustomerPaymentData = function() {

  var examples = {};
  
  examples['application/json'] = [ {
  "paymentId" : "aeiou",
  "type" : "aeiou"
} ];
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
