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

module.exports = {
    salesFromDB,
    saleFromDB,
    salesFromModel,
    saleFromModel,
    getSalesFromServiceSucessful,
    getSaleFromServiceSucessful,
    getSaleFromServiceNotSucessful,
};