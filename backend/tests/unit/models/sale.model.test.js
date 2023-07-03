const { expect } = require('chai');
const sinon = require('sinon'); // duble de testes
const connection = require('../../../src/models/connection');
const { productModel, saleModel } = require('../../../src/models');
const { salesFromModel, salesFromDB, saleFromDB } = require('../mocks/sale.mock');

describe('Realizando testes - SALE MODEL:', function () {
    it('Recuperando todos as vendas', async function () {
        sinon.stub(connection, 'execute').resolves([salesFromModel]);

        const sales = await saleModel.findAllSales();

        expect(sales).to.be.deep.equal(salesFromDB);
    });

    it('Recuperando uma venda por ID', async function () {
        sinon.stub(connection, 'execute').resolves([[saleFromDB]]);

        const saleId = 1;
        const sale = await productModel.findProductById(saleId);

        expect(sale).to.be.deep.equal(saleFromDB);
    });

    afterEach(function () {
        sinon.restore();
    });
});