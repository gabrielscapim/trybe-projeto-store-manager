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

const addProduct = async (productName) => {
    const QUERY = 'INSERT INTO products (name) VALUE (?)';
    const [result] = await connection.execute(QUERY, [productName]);

    return result;
};

const editProduct = async (productName, productId) => {
    const QUERY = 'UPDATE products SET name = ? WHERE id = ?';
    const [result] = await connection.execute(QUERY, [productName, productId]);

    return result;
};

module.exports = {
    findAllProducts,
    findProductById,
    addProduct,
    editProduct,
};
