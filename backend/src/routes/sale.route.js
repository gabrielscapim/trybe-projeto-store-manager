const route = require('express').Router();
const { saleController } = require('../controllers');
const { 
    validateEmptyIdSaleFields,
    validateEmptyQuantitySaleFields, 
    validateProductIdSaleFields, 
    validadeQuantityValue } = require('../middlewares/validateSaleFields');

route.get('/', saleController.findAllSales);
route.get('/:id', saleController.findSaleById);
route.post(
    '/', 
    validateEmptyIdSaleFields,
    validateEmptyQuantitySaleFields,
    validadeQuantityValue,
    validateProductIdSaleFields,
    saleController.addSale,
);

module.exports = route;