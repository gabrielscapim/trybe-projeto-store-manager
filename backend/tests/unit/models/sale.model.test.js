const { expect } = require('chai');
const sinon = require('sinon'); // duble de testes
const connection = require('../../../src/models/connection');
const { saleModel } = require('../../../src/models');
const { salesFromModel, salesFromDB, saleFromDB, addSaleFromDbReturn, saleIdFromDB, deleteSaleFromDB } = require('../mocks/sale.mock');

describe('Realizando testes - SALE MODEL:', function () {
    it('Recuperando todos as vendas', async function () {
        sinon.stub(connection, 'execute').resolves([salesFromModel]);

        const sales = await saleModel.findAllSales();

        expect(sales).to.be.deep.equal(salesFromDB);
    });

    it('Recuperando uma venda por ID', async function () {
        sinon.stub(connection, 'execute').resolves([saleFromDB]);

        const saleId = 1;
        const sale = await saleModel.findSaleById(saleId);

        expect(sale).to.be.deep.equal(saleFromDB);
    });

    it('Adicionando uma venda com sucesso', async function () {
        sinon.stub(connection, 'execute').resolves([saleIdFromDB]);
        
        const inputData = [
            {
              productId: 1,
              quantity: 1,
            },
            {
              productId: 2,
              quantity: 5,
            },
          ];
        const returnFromModel = await saleModel.addSale(inputData);

        expect(returnFromModel).to.deep.equal(addSaleFromDbReturn);
    });

    it('Deletando uma venda com sucesso', async function () {
      sinon.stub(connection, 'execute').resolves(deleteSaleFromDB);

      const saleId = 1;
      const result = await saleModel.deleteSale(saleId);

      expect(result[0].affectedRows).to.be.equal(1);
    });

    afterEach(function () {
        sinon.restore();
    });
});