const { saleService } = require('../services');

const findAllSales = async (_req, res) => {
    const { status, data } = await saleService.getAllSales();

    if (status !== 'SUCESSFUL') {
        return res.status(404).json(data);
    }

    return res.status(200).json(data);
};

const findSaleById = async (req, res) => {
    const { id } = req.params;
    const { status, data } = await saleService.getSaleById(id);
    
    if (status !== 'SUCESSFUL') {
        return res.status(404).json(data);
    }

    return res.status(200).json(data);
};

const addSale = async (req, res) => {
    const { status, data } = await saleService.addSale(req.body);

    if (status !== 'SUCESSFUL') {
        return res.status(400).json(data);
    }

    return res.status(201).json(data);
};

const deleteSale = async (req, res) => {
    const { id } = req.params;
    const { status, data } = await saleService.deleteSale(Number(id));

    if (status !== 'SUCESSFUL') {
        return res.status(400).json(data);
    }

    return res.status(204).json();
};

const editProductQuantity = async (req, res) => {
    const { productId, saleId } = req.params;
    const { quantity } = req.body;
    const { status, data } = await saleService.editProductQuantity(quantity, productId, saleId);

    if (status !== 'SUCESSFUL') {
        return res.status(400).json(data);
    }

    return res.status(200).json(data);
};

module.exports = {
    findAllSales,
    findSaleById,
    addSale,
    deleteSale,
    editProductQuantity,
};