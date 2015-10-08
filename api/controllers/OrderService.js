'use strict';

exports.getCustomerOrders = function() {

  var examples = {};
  
  examples['application/json'] = [ {
  "paymentDate" : "2015-09-17T01:26:45.962+0000",
  "orderTotalPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "invoiceId" : 1.3579000000000001069366817318950779736042022705078125,
  "shippingNumber" : "aeiou",
  "orderDate" : "2015-09-17T01:26:45.962+0000",
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
  "shippingDate" : "2015-09-17T01:26:45.963+0000",
  "billingInformation" : "",
  "orderId" : "aeiou"
} ];
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.placeOrder = function(order) {

  var examples = {};
  
  examples['application/json'] = "aeiou";
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.findOrder = function(orderId) {

  var examples = {};
  
  examples['application/json'] = {
  "paymentDate" : "2015-09-17T01:26:45.982+0000",
  "orderTotalPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "invoiceId" : 1.3579000000000001069366817318950779736042022705078125,
  "shippingNumber" : "aeiou",
  "orderDate" : "2015-09-17T01:26:45.982+0000",
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
  "shippingDate" : "2015-09-17T01:26:45.982+0000",
  "billingInformation" : "",
  "orderId" : "aeiou"
};
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.cancelOrder = function(orderId) {

  var examples = {};
  

  
}
