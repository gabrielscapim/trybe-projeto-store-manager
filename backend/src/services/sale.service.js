const { saleModel } = require('../models');

const getAllSales = async () => {
    const sales = await saleModel.findAllSales();

    if (!sales) {
        return { status: 'NOT_FOUND', data: { message: 'Sales not found' } };
    }

    return { status: 'SUCESSFUL', data: sales };
};

const getSaleById = async (saleId) => {
    const sales = await saleModel.findSaleById(saleId);

    if (!sales || sales.length === 0) {
        return { status: 'NOT_FOUND', data: { message: 'Sale not found' } };
    }

    return { status: 'SUCESSFUL', data: sales };
};

const addSale = async (sales) => {
    const returnFromModel = await saleModel.addSale(sales);

    if (!returnFromModel) {
        return { status: 'UNSUCCESSFULLY', data: { message: 'Unable to register sale' } };
    }

    return { status: 'SUCESSFUL', data: returnFromModel };
};

module.exports = {
    getAllSales,
    getSaleById,
    addSale,
};