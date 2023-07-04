const productsFromDB = [
    {
      id: 1,
      name: 'Martelo de Thor',
    },
    {
      id: 2,
      name: 'Traje de encolhimento',
    },
    {
      id: 3,
      name: 'Escudo do CapitÃ£o AmÃ©rica',
    },
];

const productFromDB = {
    id: 1,
    name: 'Martelo de Thor',
};

const productIdFromDB = {
  insertId: 4,
};

const productsFromModel = productsFromDB;
const productFromModel = productFromDB;
const productIdFromModel = 4;

const getProductsFromServiceSucessful = {
  status: 'SUCESSFUL',
  data: productsFromDB,
};

const getProductFromServiceSucessful = {
  status: 'SUCESSFUL',
  data: productFromDB,
};

const getProductFromServiceNotSucessful = {
  status: 'NOT_FOUND',
  data: { message: 'Product not found' },
};

const addProductFromServiceSucessful = {
  status: 'SUCESSFUL',
  data: { name: 'ProdutoX', id: 4 },
};

module.exports = {
    productsFromDB,
    productFromDB,
    productsFromModel,
    productFromModel,
    getProductsFromServiceSucessful,
    getProductFromServiceSucessful,
    getProductFromServiceNotSucessful,
    productIdFromDB,
    productIdFromModel,
    addProductFromServiceSucessful,
};