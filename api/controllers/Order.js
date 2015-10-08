'use strict';

var url = require('url');


var Order = require('./OrderService');


module.exports.getCustomerOrders = function getCustomerOrders (req, res, next) {
  

  var result = Order.getCustomerOrders();

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.placeOrder = function placeOrder (req, res, next) {
  var order = req.swagger.params['order'].value;
  

  var result = Order.placeOrder(order);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.findOrder = function findOrder (req, res, next) {
  var orderId = req.swagger.params['orderId'].value;
  

  var result = Order.findOrder(orderId);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.cancelOrder = function cancelOrder (req, res, next) {
  var orderId = req.swagger.params['orderId'].value;
  

  var result = Order.cancelOrder(orderId);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};
