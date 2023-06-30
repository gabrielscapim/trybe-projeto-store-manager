const { productModel } = require('../models');

const getAllProducts = async () => {
    const products = await productModel.findAllProducts();

    if (!products) {
        return { status: 'NOT_FOUND', data: { message: 'Products not found' } };
    }

    return { status: 'SUCESSFUL', data: products };
};

const getProductById = async (productId) => {
    const product = await productModel.findProductById(productId);

    if (!product) {
        return { status: 'NOT_FOUND', data: { message: 'Product not found' } };
    }

    return { status: 'SUCESSFUL', data: product };
};

module.exports = {
    getAllProducts,
    getProductById,
};