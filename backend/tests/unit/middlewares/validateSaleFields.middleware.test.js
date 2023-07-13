const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { salesToAddWithoutQuantity, salesToAddWithQuantityNegative, salesToAddWithoutProductId, salesToAddWithProductIdError } = require('../mocks/middleware.mock');
const { validateEmptyQuantitySaleFields, validadeQuantityValue, validateEmptyIdSaleFields, validateProductIdSaleFields, validateSaleId } = require('../../../src/middlewares/validateSaleFields');

const { expect } = chai;
chai.use(sinonChai);

describe('Realizando testes - MIDDLEWARE VALIDATE SALE FIELDS', function () {
    it('Fazendo uma requisição sem passar o campo quantity', async function () {
        const next = sinon.stub().returns();

        const req = { body: salesToAddWithoutQuantity };
        const res = {
            status: sinon.stub().returnsThis(),
            json: sinon.stub(),
        };
        const response = { 
            statusCode: 400,
            message: '"quantity" is required',
        };
        await validateEmptyQuantitySaleFields(req, res, next);

        expect(next).to.have.been.calledWith(response);
    });

    it('Fazendo uma requisição pasando um valor negativo ao campo quantity', async function () {
        const next = sinon.stub().returns();

        const req = { body: salesToAddWithQuantityNegative };
        const res = {
            status: sinon.stub().returnsThis(),
            json: sinon.stub(),
        };
        const response = { 
            statusCode: 422,
            message: '"quantity" must be greater than or equal to 1',
        };
        await validadeQuantityValue(req, res, next);

        expect(next).to.have.been.calledWith(response);
    });

    it('Fazendo uma requisição sem o campo productId', async function () {
        const next = sinon.stub().returns();

        const req = { body: salesToAddWithoutProductId };
        const res = {
            status: sinon.stub().returnsThis(),
            json: sinon.stub(),
        };
        const response = { 
            statusCode: 400,
            message: '"productId" is required',
        };
        await validateEmptyIdSaleFields(req, res, next);

        expect(next).to.have.been.calledWith(response);
    });

    it('Fazendo uma requisição passando um productId inexistente', async function () {
        const next = sinon.stub().returns();

        const req = { body: salesToAddWithProductIdError };
        const res = {
            status: sinon.stub().returnsThis(),
            json: sinon.stub(),
        };
        const response = { 
            statusCode: 404,
            message: 'Product not found',
        };

        await validateProductIdSaleFields(req, res, next);

        expect(next).to.have.been.calledWith(response);
    });

    it('Fazendo uma requisição passando um saleId inexistente', async function () {
        const next = sinon.stub().returns();

        const req = { params: { id: 100 } };
        const res = {
            status: sinon.stub().returnsThis(),
            json: sinon.stub(),
        };
        const response = { 
            statusCode: 404,
            message: 'Sale not found',
        };

        await validateSaleId(req, res, next);

        expect(next).to.have.been.calledWith(response);
    });
});