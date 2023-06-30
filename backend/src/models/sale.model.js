const connection = require('./connection');

const findAllSales = async () => {
    const QUERY = `SELECT sp.sale_id, s.date, sp.product_id, sp.quantity
    FROM sales_products AS sp
    INNER JOIN sales AS s
    ON sp.sale_id = s.id
    ORDER BY sp.sale_id ASC, sp.product_id ASC`;

    const [sales] = await connection.execute(QUERY);

    return sales;
};

const findSaleById = async (saleId) => {
    const QUERY = `SELECT sp.sale_id, s.date, sp.product_id, sp.quantity
    FROM sales_products AS sp
    INNER JOIN sales AS s
    ON sp.sale_id = s.id
    WHERE sp.sale_id = ?
    ORDER BY sp.sale_id ASC, sp.product_id ASC`;

    const [sales] = await connection.execute(QUERY, [saleId]);

    return sales;
};

module.exports = {
    findAllSales,
    findSaleById,
};