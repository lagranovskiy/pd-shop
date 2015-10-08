'use strict';

var url = require('url');


var Oraganization = require('./OraganizationService');


module.exports.getCategories = function getCategories (req, res, next) {
  

  var result = Oraganization.getCategories();

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.getProductsByCategory = function getProductsByCategory (req, res, next) {
  var categoryId = req.swagger.params['categoryId'].value;
  var limit = req.swagger.params['limit'].value;
  var startsAt = req.swagger.params['startsAt'].value;
  

  var result = Oraganization.getProductsByCategory(categoryId, limit, startsAt);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.getHashTags = function getHashTags (req, res, next) {
  

  var result = Oraganization.getHashTags();

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.getProductsByHashTags = function getProductsByHashTags (req, res, next) {
  var hashtagName = req.swagger.params['hashtagName'].value;
  var limit = req.swagger.params['limit'].value;
  var startsAt = req.swagger.params['startsAt'].value;
  

  var result = Oraganization.getProductsByHashTags(hashtagName, limit, startsAt);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};
