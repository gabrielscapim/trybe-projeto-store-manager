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
    const [{ insertId }] = await connection.execute(QUERY, [productName]);

    return insertId;
};

const editProduct = async (productName, productId) => {
    const QUERY = 'UPDATE products SET name = ? WHERE id = ?';
    const result = await connection.execute(QUERY, [productName, productId]);

    return result;
};

const deleteProduct = async (productId) => {
    const QUERY = 'DELETE FROM products WHERE id = ?';
    const result = await connection.execute(QUERY, [productId]);
    
    return result;
};

module.exports = {
    findAllProducts,
    findProductById,
    addProduct,
    editProduct,
    deleteProduct,
};
