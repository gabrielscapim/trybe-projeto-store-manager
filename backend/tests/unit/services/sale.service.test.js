const { expect } = require('chai');
const sinon = require('sinon');
const { saleService } = require('../../../src/services');
const { saleFromModel, salesFromModel, addSaleFromDbReturn, deleteSaleFromDB } = require('../mocks/sale.mock');
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

    it('Adicionando uma venda com sucesso - Status 201', async function () {
      sinon.stub(saleModel, 'addSale').resolves(addSaleFromDbReturn);

      const responseData = {
        id: 3,
        itemsSold: [
          {
            productId: 1,
            quantity: 1,
          },
          {
            productId: 2,
            quantity: 5,
          },
        ],
      };
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

      const responseService = await saleService.addSale(inputData);

      expect(responseService.status).to.equal('SUCESSFUL');
      expect(responseService.data).to.deep.equal(responseData);
    });

    it('Deletando uma venda com sucesso - Status 204', async function () {
      sinon.stub(saleModel, 'deleteSale').resolves(deleteSaleFromDB);

      const responseData = { message: 'Sale with id 1 deleted' };

      const responseService = await saleService.deleteSale(1);

      expect(responseService.status).to.equal('SUCESSFUL');

      expect(responseService.data).to.deep.equal(responseData);
    });

    afterEach(function () {
        sinon.restore();
    });
});