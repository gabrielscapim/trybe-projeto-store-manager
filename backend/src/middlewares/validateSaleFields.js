const { productService, saleService } = require('../services');

const validateEmptyQuantitySaleFields = async (req, res, next) => {
    const { body } = req;

    for (let index = 0; index < body.length; index += 1) {
        if (!body[index].quantity && body[index].quantity !== 0) {
            return next({ statusCode: 400, message: '"quantity" is required' });
        }
    }

    next();
};

const validadeQuantityValue = async (req, res, next) => {
    const { body } = req;

    for (let index = 0; index < body.length; index += 1) {
        if (body[index].quantity <= 0) {
            return next({ statusCode: 422,
                message: '"quantity" must be greater than or equal to 1' });
        }
    }

    next();
};

const validateEmptyIdSaleFields = async (req, res, next) => {
    const { body } = req;

    for (let index = 0; index < body.length; index += 1) {
        if (!body[index].productId) {
            return next({ statusCode: 400, message: '"productId" is required' });
        }
    }

    next();
};

const validateProductIdSaleFields = async (req, res, next) => {
    const { body } = req;
    
    const verifyIfProductIdExist = body.map(async ({ productId }) => (
        (await productService.getProductById(productId)).status !== 'NOT_FOUND'
    ));

    const isProductIdExist = await Promise.all(verifyIfProductIdExist).then((result) => (
        result.includes(false)
    ));

    if (isProductIdExist) {
        return next({ statusCode: 404, message: 'Product not found' });
    }

    return next();
};

const validateSaleId = async (req, _res, next) => {
    const { id } = req.params;

    const verifySaleId = await saleService.getSaleById(Number(id));

    if (verifySaleId.status === 'NOT_FOUND') {
        return next({ statusCode: 404, message: 'Sale not found' });
    }

    return next();
};

module.exports = {
    validateEmptyQuantitySaleFields,
    validateEmptyIdSaleFields,
    validadeQuantityValue,
    validateProductIdSaleFields,
    validateSaleId,
};