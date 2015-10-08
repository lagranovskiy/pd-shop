'use strict';

var url = require('url');


var Product = require('./ProductService');


module.exports.getProductsByCategory = function getProductsByCategory (req, res, next) {
  var categoryId = req.swagger.params['categoryId'].value;
  var limit = req.swagger.params['limit'].value;
  var startsAt = req.swagger.params['startsAt'].value;
  

  var result = Product.getProductsByCategory(categoryId, limit, startsAt);

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
  

  var result = Product.getProductsByHashTags(hashtagName, limit, startsAt);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.getProducts = function getProducts (req, res, next) {
  var mode = req.swagger.params['mode'].value;
  var limit = req.swagger.params['limit'].value;
  var startsAt = req.swagger.params['startsAt'].value;
  

  var result = Product.getProducts(mode, limit, startsAt);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.getProductById = function getProductById (req, res, next) {
  var productId = req.swagger.params['productId'].value;
  

  var result = Product.getProductById(productId);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.createOrUpdateProduct = function createOrUpdateProduct (req, res, next) {
  var productId = req.swagger.params['productId'].value;
  var product = req.swagger.params['product'].value;
  

  var result = Product.createOrUpdateProduct(productId, product);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};
