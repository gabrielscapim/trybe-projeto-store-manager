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

    return { 
        status: 'SUCESSFUL',
        data: sales.map(({ date, productId, quantity }) => (
            {
                date,
                productId,
                quantity,
            }
    )) };
};

const addSale = async (sales) => {
    const returnFromModel = await saleModel.addSale(sales);

    if (!returnFromModel) {
        return { status: 'UNSUCCESSFULLY', data: { message: 'Unable to register sale' } };
    }

    return { status: 'SUCESSFUL', data: returnFromModel };
};

const deleteSale = async (saleId) => {
    const returnFromModel = await saleModel.deleteSale(saleId);

    if (!returnFromModel) {
        return { status: 'UNSUCCESSFULLY', data: { message: 'Unable to delete sale' } };
    }

    return { status: 'SUCESSFUL', data: { message: `Sale with id ${saleId} deleted` } };
};

const editProductQuantity = async (quantity, productId, saleId) => {
    const returnFromModel = await saleModel.editProductQuantity(quantity, productId, saleId);

    if (!returnFromModel) {
        return { status: 'UNSUCCESSFULLY', data: { message: 'Unable to edit sale' } };
    }

    const salesWithId = await saleModel.findSaleById(saleId);

    const saleUpdated = salesWithId.find((saleWithId) => saleWithId.quantity === quantity);

    return { status: 'SUCESSFUL', data: saleUpdated };
};

module.exports = {
    getAllSales,
    getSaleById,
    addSale,
    deleteSale,
    editProductQuantity,
};