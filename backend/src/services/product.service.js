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

const addProduct = async (productName) => {
    const insertId = await productModel.addProduct(productName);

    if (!insertId) {
        return { status: 'UNSUCCESSFULLY', data: { message: 'Unable to register product' } };
    }

    return { status: 'SUCESSFUL', data: { name: productName, id: insertId } };
};

const editProduct = async (productName, productId) => {
    const resultFromModel = await productModel.editProduct(productName, productId);
    
    if (!resultFromModel) {
        return { status: 'UNSUCCESSFULLY', data: { message: 'Unable to edit product' } };
    }

    return { status: 'SUCESSFUL', data: { id: productId, name: productName } };
};

const deleteProduct = async (productId) => {
    const resultFromModel = await productModel.deleteProduct(productId);
    
    if (!resultFromModel) {
        return { status: 'UNSUCCESSFULLY', data: { message: 'Unable to delete product' } };
    }

    return { status: 'SUCESSFUL', data: { message: `Product with id ${productId} deleted` } };
};

module.exports = {
    getAllProducts,
    getProductById,
    addProduct,
    editProduct,
    deleteProduct,
};