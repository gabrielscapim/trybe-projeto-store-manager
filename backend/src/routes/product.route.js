const route = require('express').Router();
const { productController } = require('../controllers');
const { validateProductFields,
    validateProductId } = require('../middlewares/validateProductFields');

route.get('/', productController.findAllProducts);
route.get('/:id', productController.findProductById);
route.post('/', validateProductFields, productController.addProduct);
route.put('/:id', validateProductFields, validateProductId, productController.editProduct);

module.exports = route;