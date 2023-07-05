const saleDate = '2023-07-03T19:21:58.000Z';

const salesFromDB = [
    {
      date: saleDate,
      productId: 1,
      quantity: 5,
      saleId: 1,
    },
    {
      date: saleDate,
      productId: 2,
      quantity: 10,
      saleId: 1,
    },
    {
      date: saleDate,
      productId: 3,
      quantity: 15,
      saleId: 2,
    },
];

const saleFromDB = [
    {
      date: saleDate,
      productId: 1,
      quantity: 5,
    },
    {
      date: saleDate,
      productId: 2,
      quantity: 10,
    },
];

const addSaleFromDbReturn = {
  id: 3,
  itemsSold: [{ productId: 1, quantity: 1 }, { productId: 2, quantity: 5 }],
};

const saleIdFromDB = {
  insertId: 3,
};

const salesFromModel = salesFromDB;
const saleFromModel = saleFromDB;

const getSalesFromServiceSucessful = {
    status: 'SUCESSFUL',
    data: salesFromDB,
};
  
const getSaleFromServiceSucessful = {
    status: 'SUCESSFUL',
    data: saleFromDB,
};

const getSaleFromServiceNotSucessful = {
    status: 'NOT_FOUND',
    data: { message: 'Sale not found' },
};

const addSaleFromServiceSucessful = {
    status: 'SUCESSFUL',
    data: addSaleFromDbReturn,
};

module.exports = {
    salesFromDB,
    saleFromDB,
    salesFromModel,
    saleFromModel,
    getSalesFromServiceSucessful,
    getSaleFromServiceSucessful,
    getSaleFromServiceNotSucessful,
    addSaleFromDbReturn,
    saleIdFromDB,
    addSaleFromServiceSucessful,
};