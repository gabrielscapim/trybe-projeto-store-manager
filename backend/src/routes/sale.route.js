const route = require('express').Router();
const { saleController } = require('../controllers');
const { 
    validateEmptyIdSaleFields,
    validateEmptyQuantitySaleFields, 
    validadeQuantityValue,
    validateProductIdSaleFields,
    validateSaleId } = require('../middlewares/validateSaleFields');
const { 
    validateQuantityField,
    validateProductIdForUpdateQuantity, 
    validatesaleIdForUpdateQuantity } = require('../middlewares/validateUpdateSaleFields');

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
route.delete('/:id', validateSaleId, saleController.deleteSale);
route.put(
    '/:saleId/products/:productId/quantity',
    validateQuantityField,
    validateProductIdForUpdateQuantity,
    validatesaleIdForUpdateQuantity,
    saleController.editProductQuantity,
    );

module.exports = route;