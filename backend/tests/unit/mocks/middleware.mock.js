const salesToAddWithoutQuantity = [
    {
      productId: 1,
    },
    {
      productId: 2,
    },
];

const salesToAddWithQuantityNegative = [
    {
      productId: 1,
      quantity: 1,
    },
    {
      productId: 2,
      quantity: 0,
    },
];

const salesToAddWithoutProductId = [
    {
      quantity: 1,
    },
    {
      quantity: 0,
    },
];

const salesToAddWithProductIdError = [
    {
      productId: 200,
      quantity: 1,
    },
    {
      productId: 2,
      quantity: 1,
    },
];

module.exports = {
    salesToAddWithoutQuantity,
    salesToAddWithQuantityNegative,
    salesToAddWithoutProductId,
    salesToAddWithProductIdError,
};