/* eslint-disable max-lines-per-function */
const camelize = require('camelize');
const connection = require('./connection');

const findAllSales = async () => {
    const QUERY = `SELECT sp.sale_id, s.date, sp.product_id, sp.quantity
    FROM sales_products AS sp
    INNER JOIN sales AS s
    ON sp.sale_id = s.id
    ORDER BY sp.sale_id ASC, sp.product_id ASC;`;

    const [sales] = await connection.execute(QUERY);

    return camelize(sales);
};

const findSaleById = async (saleId) => {
    const QUERY = `SELECT sp.sale_id, s.date, sp.product_id, sp.quantity
    FROM sales_products AS sp
    INNER JOIN sales AS s
    ON sp.sale_id = s.id
    WHERE sp.sale_id = ?
    ORDER BY sp.sale_id ASC, sp.product_id ASC;`;

    const [sales] = await connection.execute(QUERY, [saleId]);

    return camelize(sales);
};

const addSale = async (sales) => {
    const SALES_TABLE_QUERY = `INSERT INTO sales (date)
    VALUES (CURRENT_TIMESTAMP);`;
    const SALES_PRODUCTS_TABLE_QUERY = `INSERT INTO sales_products (sale_id, product_id, quantity)
    VALUES (?, ?, ?);`;

    const [returnFromSaleInsert] = await connection.execute(SALES_TABLE_QUERY);

    sales.forEach(async ({ productId, quantity }) => {
        await connection.execute(
            SALES_PRODUCTS_TABLE_QUERY,
            [returnFromSaleInsert.insertId, productId, quantity],
        );

        return {
            id: returnFromSaleInsert.insertId,
            itemsSold: sales,
        };
    });

    return {
        id: returnFromSaleInsert.insertId,
        itemsSold: sales,
    };
};

module.exports = {
    findAllSales,
    findSaleById,
    addSale,
};