var express = require('express');
// const products = require("../products.json");
const model = require('../model/products')

var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  const types = [{
    id: "eletronic",
    label: "Eletrônico"
  }, {
    id: "food",
    label: "Alimentício"
  }, {
    id: "pharmaceutical",
    label: "Farmacêutico"
  }];
  res.render('products', { name: "Página de produtos", types: types });
});

module.exports = router;
