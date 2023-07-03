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

module.exports = {
    getAllSales,
    getSaleById,
};