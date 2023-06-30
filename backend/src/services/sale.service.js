const { saleModel } = require('../models');

const getAllSales = async () => {
    const salesFromModel = await saleModel.findAllSales();

    if (!salesFromModel) {
        return { status: 'NOT_FOUND', data: { message: 'Sales not found' } };
    }

    const sales = salesFromModel.map((sale) => ({
        date: sale.date,
        productId: sale.product_id,
        quantity: sale.quantity,
        saleId: sale.sale_id,
    }));

    return { status: 'SUCESSFUL', data: sales };
};

const getSaleById = async (saleId) => {
    const salesFromModel = await saleModel.findSaleById(saleId);

    if (!salesFromModel || salesFromModel.length === 0) {
        return { status: 'NOT_FOUND', data: { message: 'Sale not found' } };
    }

    const sales = salesFromModel.map((sale) => ({
        date: sale.date,
        productId: sale.product_id,
        quantity: sale.quantity,
    }));

    return { status: 'SUCESSFUL', data: sales };
};

module.exports = {
    getAllSales,
    getSaleById,
};