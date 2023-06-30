const connection = require('./connection');

const findAllProducts = async () => {
    const QUERY = 'SELECT * FROM products';
    const [products] = await connection.execute(QUERY);

    return products;
};

const findProductById = async (productId) => {
    const QUERY = 'SELECT * FROM products WHERE id = ?';
    const [[product]] = await connection.execute(QUERY, [productId]);

    return product;
};

module.exports = {
    findAllProducts,
    findProductById,
};
