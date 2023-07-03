const { productService } = require('../services');

const findAllProducts = async (_req, res) => {
    const { status, data } = await productService.getAllProducts();

    if (status !== 'SUCESSFUL') {
        return res.status(404).json(data);
    }

    return res.status(200).json(data);
};

const findProductById = async (req, res) => {
    const { id } = req.params;
    const { status, data } = await productService.getProductById(id);

    if (status !== 'SUCESSFUL') {
        return res.status(404).json(data);
    }

    return res.status(200).json(data);
};

const addProduct = async (req, res) => {
    const { name } = req.body;
    const { status, data } = await productService.addProduct(name);
    
    if (status !== 'SUCESSFUL') {
        return res.status(400).json(data);
    }

    return res.status(201).json(data);
};

module.exports = {
    findAllProducts,
    findProductById,
    addProduct,
};