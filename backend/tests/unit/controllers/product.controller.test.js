const chai = require('chai');
const { expect } = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { productService } = require('../../../src/services');
const { getProductsFromServiceSucessful, productsFromModel, getProductFromServiceSucessful, productFromModel, getProductFromServiceNotSucessful, addProductFromServiceSucessful } = require('../mocks/product.mock');
const { productController } = require('../../../src/controllers');

chai.use(sinonChai);

describe('Realizando testes - PRODUCT CONTROLLER:', function () {
    it('Pegando todos os produtos com sucesso - Status 200', async function () {
        sinon.stub(productService, 'getAllProducts').resolves(getProductsFromServiceSucessful);

        const req = { };
        const res = {
            status: sinon.stub().returnsThis(),
            json: sinon.stub(),
        };

        await productController.findAllProducts(req, res);
        
        expect(res.status).to.have.been.calledWith(200);
        expect(res.json).to.have.been.calledWith(productsFromModel);
    });

    it('Pegando um produto com sucesso - Status 200', async function () {
        sinon.stub(productService, 'getProductById').resolves(getProductFromServiceSucessful);

        const req = { params: { id: 1 }, body: { } };
        const res = {
            status: sinon.stub().returnsThis(),
            json: sinon.stub(),
        };

        await productController.findProductById(req, res);

        expect(res.status).to.have.been.calledWith(200);
        expect(res.json).to.have.been.calledWith(productFromModel);
    });

    it('Pegando um produto que não existe - Status 404', async function () {
        sinon.stub(productService, 'getProductById').resolves(getProductFromServiceNotSucessful);

        const req = { params: { id: 100 }, body: { } };
        const res = {
            status: sinon.stub().returnsThis(),
            json: sinon.stub(),
        };

        await productController.findProductById(req, res);
        
        expect(res.status).to.have.been.calledWith(404);
        expect(res.json).to.have.been.calledWith(sinon.match.has('message'));
    });

    it('Adicionando um produto com sucesso - Status 201', async function () {
        sinon.stub(productService, 'addProduct').resolves(addProductFromServiceSucessful);

        const req = { body: { name: 'ProdutoX' } };
        const res = {
            status: sinon.stub().returnsThis(),
            json: sinon.stub(),
        };

        await productController.addProduct(req, res);
        
        expect(res.status).to.have.been.calledWith(201);
    });

    afterEach(function () {
        sinon.restore();
    });
});