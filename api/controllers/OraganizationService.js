'use strict';

exports.getCategories = function() {

  var examples = {};
  
  examples['application/json'] = [ {
  "categoryName" : "aeiou",
  "categoryId" : "aeiou"
} ];
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.getProductsByCategory = function(categoryId, limit, startsAt) {

  var examples = {};
  
  examples['application/json'] = "";
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.getHashTags = function() {

  var examples = {};
  
  examples['application/json'] = [ "aeiou" ];
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.getProductsByHashTags = function(hashtagName, limit, startsAt) {

  var examples = {};
  
  examples['application/json'] = "";
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
