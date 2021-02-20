var express = require('express');
// const products = require("../products.json");
const model = require('../model/products')

var router = express.Router();

const products = [{
  name: 'geladeira',
  preco: 800,
  type: 'eletronic'
}, {
  name: 'arroz',
  price: 30,
  type: 'food'
}]

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

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('products', { name: "Página de produtos", types: types });
});

router.post('/', function(req, res) {
  res.render('products', { name: "Cadastro de Produtos", types: types });
});

router.get('/list', function(req, res) {
  res.render('productsList', { products: products });
});

module.exports = router;
