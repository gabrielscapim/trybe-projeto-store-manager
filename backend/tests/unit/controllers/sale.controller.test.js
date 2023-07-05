const chai = require('chai');
const { expect } = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { saleService } = require('../../../src/services');
const { saleController } = require('../../../src/controllers');
const { getSalesFromServiceSucessful, salesFromModel, getSaleFromServiceSucessful, saleFromModel, getSaleFromServiceNotSucessful, addSaleFromServiceSucessful } = require('../mocks/sale.mock');

chai.use(sinonChai);

describe('Realizando testes - SALE CONTROLLER:', function () {
    it('Pegando todos as vendas com sucesso - Status 200', async function () {
        sinon.stub(saleService, 'getAllSales').resolves(getSalesFromServiceSucessful);

        const req = { };
        const res = {
            status: sinon.stub().returnsThis(),
            json: sinon.stub(),
        };

        await saleController.findAllSales(req, res);
        
        expect(res.status).to.have.been.calledWith(200);
        expect(res.json).to.have.been.calledWith(salesFromModel);
    });

    it('Pegando um produto com sucesso - Status 200', async function () {
        sinon.stub(saleService, 'getSaleById').resolves(getSaleFromServiceSucessful);

        const req = { params: { id: 1 }, body: { } };
        const res = {
            status: sinon.stub().returnsThis(),
            json: sinon.stub(),
        };

        await saleController.findSaleById(req, res);

        expect(res.status).to.have.been.calledWith(200);
        expect(res.json).to.have.been.calledWith(saleFromModel);
    });

    it('Pegando um produto que não existe - Status 404', async function () {
        sinon.stub(saleService, 'getSaleById').resolves(getSaleFromServiceNotSucessful);

        const req = { params: { id: 100 }, body: { } };
        const res = {
            status: sinon.stub().returnsThis(),
            json: sinon.stub(),
        };

        await saleController.findSaleById(req, res);
        
        expect(res.status).to.have.been.calledWith(404);
        expect(res.json).to.have.been.calledWith(sinon.match.has('message'));
    });

    it('Adicionando uma venda com sucesso - Status 201', async function () {
        sinon.stub(saleService, 'addSale').resolves(addSaleFromServiceSucessful);

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
        const req = { body: { inputData } };
        const res = {
            status: sinon.stub().returnsThis(),
            json: sinon.stub(),
        };

        await saleController.addSale(req, res);
        
        expect(res.status).to.have.been.calledWith(201);
    });
    afterEach(function () {
        sinon.restore();
    });
    });
