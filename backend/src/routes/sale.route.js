const route = require('express').Router();
const { saleController } = require('../controllers');

route.get('/', saleController.findAllSales);
route.get('/:id', saleController.findSaleById);

module.exports = route;