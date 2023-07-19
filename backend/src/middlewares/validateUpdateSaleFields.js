const { productService, saleService } = require('../services');

const validateQuantityField = async (req, res, next) => {
    const { quantity } = req.body;

    if (!quantity && quantity !== 0) {
        return next({ statusCode: 400, message: '"quantity" is required' });
    }

    if (quantity <= 0) {
        return next({ statusCode: 422, message: '"quantity" must be greater than or equal to 1' });
    }

    next();
};

const validateProductIdForUpdateQuantity = async (req, _res, next) => {
    const { productId } = req.params;

    const verifyProductId = await productService.getProductById(Number(productId));

    if (verifyProductId.status === 'NOT_FOUND') {
        return next({ statusCode: 404, message: 'Product not found in sale' });
    }

    return next();
};

const validatesaleIdForUpdateQuantity = async (req, _res, next) => {
    const { saleId } = req.params;

    const verifySaleId = await saleService.getSaleById(Number(saleId));

    if (verifySaleId.status === 'NOT_FOUND') {
        return next({ statusCode: 404, message: 'Sale not found' });
    }

    return next();
};

module.exports = {
    validateQuantityField,
    validateProductIdForUpdateQuantity,
    validatesaleIdForUpdateQuantity,
};