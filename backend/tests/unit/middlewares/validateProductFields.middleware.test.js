const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { validateProductFields, validateProductId } = require('../../../src/middlewares/validateProductFields');

const { expect } = chai;
chai.use(sinonChai);

describe('Realizando testes - MIDDLEWARE VALIDATE PRODUCT FIELDS', function () {
    it('Fazendo uma requisição sem passar o nome do produto', async function () {
        const next = sinon.stub().returns();

        const req = { body: { } };
        const res = {
            status: sinon.stub().returnsThis(),
            json: sinon.stub(),
        };
        const response = { statusCode: 400, message: '"name" is required' };
        await validateProductFields(req, res, next);

        expect(next).to.have.been.calledWith(response);
    });

    it('Fazendo uma requisição passando o nome do produto sem a quantidade mínima de caracteres', async function () {
        const next = sinon.stub().returns();

        const req = { body: { name: '' } };
        const res = {
            status: sinon.stub().returnsThis(),
            json: sinon.stub(),
        };
        const response = { 
            statusCode: 422,
            message: '"name" length must be at least 5 characters long',
        };
        await validateProductFields(req, res, next);

        expect(next).to.have.been.calledWith(response);
    });

    it('Fazendo uma requisição passando o campo productId não existente', async function () {
        const next = sinon.stub().returns();

        const req = { params: { id: 100 } };
        const res = {
            status: sinon.stub().returnsThis(),
            json: sinon.stub(),
        };
        const response = { 
            statusCode: 404,
            message: 'Product not found',
        };
        await validateProductId(req, res, next);

        expect(next).to.have.been.calledWith(response);
    });
});