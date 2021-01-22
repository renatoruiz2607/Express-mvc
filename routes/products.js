var express = require('express');
// const products = require("../products.json");
const model = require('../model/products')

var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('products', { title: 'produtos', products: model.getProducts() });
});

module.exports = router;
