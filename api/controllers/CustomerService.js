'use strict';

exports.authSigninPost = function(authRequest) {

  var examples = {};
  

  
}
exports.authSignupPost = function(signUpRequest) {

  var examples = {};
  

  
}
exports.getCustomerInfo = function() {

  var examples = {};
  
  examples['application/json'] = {
  "phone" : "aeiou",
  "customerId" : "aeiou",
  "email" : "aeiou",
  "dob" : "2015-09-17T01:26:45.942+0000",
  "company" : "aeiou",
  "fullname" : "aeiou"
};
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
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
exports.getCustomerOrders = function() {

  var examples = {};
  
  examples['application/json'] = [ {
  "paymentDate" : "2015-09-17T01:26:45.957+0000",
  "orderTotalPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "invoiceId" : 1.3579000000000001069366817318950779736042022705078125,
  "shippingNumber" : "aeiou",
  "orderDate" : "2015-09-17T01:26:45.957+0000",
  "shippingInformation" : {
    "phone" : "aeiou",
    "postalCode" : "aeiou",
    "street" : "aeiou",
    "homenumber" : "aeiou",
    "fullname" : "aeiou",
    "addressId" : "aeiou",
    "country" : "aeiou"
  },
  "paymentInformation" : {
    "paymentId" : "aeiou",
    "type" : "aeiou"
  },
  "paymentTransactionId" : "aeiou",
  "orderItems" : [ {
    "position" : "",
    "count" : "",
    "productId" : "aeiou"
  } ],
  "orderStatus" : "aeiou",
  "shippingDate" : "2015-09-17T01:26:45.957+0000",
  "billingInformation" : "",
  "orderId" : "aeiou"
} ];
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.getCustomerPaymentData = function() {

  var examples = {};
  
  examples['application/json'] = [ {
  "paymentId" : "aeiou",
  "type" : "aeiou"
} ];
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
