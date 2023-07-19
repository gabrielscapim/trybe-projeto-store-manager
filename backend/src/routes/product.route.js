const route = require('express').Router();
const { productController } = require('../controllers');
const { validateProductFields,
    validateProductId } = require('../middlewares/validateProductFields');

route.get('/search', productController.findProductByName);
route.get('/', productController.findAllProducts);
route.get('/:id', productController.findProductById);
route.post('/', validateProductFields, productController.addProduct);
route.put('/:id', validateProductFields, validateProductId, productController.editProduct);
route.delete('/:id', validateProductId, productController.deleteProduct);

module.exports = route;