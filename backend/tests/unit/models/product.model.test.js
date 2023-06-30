const { expect } = require('chai');
const sinon = require('sinon'); // duble de testes
const connection = require('../../../src/models/connection');
const { productsFromDB, productFromDB } = require('../mocks/product.mock');
const { productModel } = require('../../../src/models');

describe('Realizando testes - PRODUCT MODEL:', function () {
    it('Recuperando todos os produtos', async function () {
        sinon.stub(connection, 'execute').resolves([productsFromDB]);

        const products = await productModel.findAllProducts();

        expect(products).to.be.deep.equal(productsFromDB);
    });

    it('Recuperando o produto por ID', async function () {
        sinon.stub(connection, 'execute').resolves([[productFromDB]]);

        const productId = 1;
        const product = await productModel.findProductById(productId);

        expect(product).to.be.deep.equal(productFromDB);
    });

    afterEach(function () {
        sinon.restore();
    });
});