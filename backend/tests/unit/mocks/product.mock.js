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

const updateProductFromDB = [
  {
    fieldCount: 0,
    affectedRows: 1,
    insertId: 0,
    info: 'Rows matched: 1  Changed: 0  Warnings: 0',
    serverStatus: 2,
    warningStatus: 0,
    changedRows: 0,
  },
  undefined,
];

const productsByNameFromDB = [
  {
    id: 1,
    name: 'Martelo de Thor',
  },
];

const deleteProductFromDB = [
  {
    fieldCount: 0,
    affectedRows: 1,
    insertId: 0,
    info: '',
    serverStatus: 2,
    warningStatus: 0,
  },
  undefined,
];

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

const editProductFromServiceSucessful = {
  status: 'SUCESSFUL',
  data: {
    id: 1,
    name: 'Martelo do Batman',
  },
};

const deleteProductFromServiceSucessful = {
  status: 'SUCESSFUL',
  data: { message: 'Product with id 1 deleted' },
};

const findProductByNameFromServiceSucessful = {
  status: 'SUCESSFUL',
  data: productsByNameFromDB,
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
    updateProductFromDB,
    editProductFromServiceSucessful,
    deleteProductFromDB,
    deleteProductFromServiceSucessful,
    findProductByNameFromServiceSucessful,
    productsByNameFromDB,
};