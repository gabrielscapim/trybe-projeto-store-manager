const { expect } = require('chai');
const sinon = require('sinon');
const { saleService } = require('../../../src/services');
const { saleFromModel, salesFromModel } = require('../mocks/sale.mock');
const { saleModel } = require('../../../src/models');

describe('Realizando testes - SALE SERVICE:', function () {
    it('Pegando todos as vendas com sucesso - Status 200', async function () {
        sinon.stub(saleModel, 'findAllSales')
            .resolves(salesFromModel);

        const saleDate = '2023-07-03T19:21:58.000Z';
        const responseData = [
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

        const responseService = await saleService.getAllSales();

        expect(responseService.status).to.equal('SUCESSFUL');
        expect(responseService.data).to.deep.equal(responseData);
    });
    it('Pegando um produto por ID com sucesso - Status 200', async function () {
        sinon.stub(saleModel, 'findSaleById')
            .resolves(saleFromModel);
        const responseData = [
            {
              date: '2023-07-03T19:21:58.000Z',
              productId: 1,
              quantity: 5,
            },
            {
              date: '2023-07-03T19:21:58.000Z',
              productId: 2,
              quantity: 10,
            },
          ];
        
        const saleId = 1;
        const responseService = await saleService.getSaleById(saleId);

        expect(responseService.status).to.equal('SUCESSFUL');
        expect(responseService.data).to.deep.equal(responseData);
    });

    afterEach(function () {
        sinon.restore();
    });
});