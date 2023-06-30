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

module.exports = {
    findAllSales,
    findSaleById,
};