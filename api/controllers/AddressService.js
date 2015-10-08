'use strict';

exports.getCustomerAddressData = function() {

  var examples = {};
  
  examples['application/json'] = [ {
  "phone" : "aeiou",
  "postalCode" : "aeiou",
  "street" : "aeiou",
  "homenumber" : "aeiou",
  "fullname" : "aeiou",
  "addressId" : "aeiou",
  "country" : "aeiou"
} ];
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
