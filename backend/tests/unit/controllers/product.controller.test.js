const chai = require('chai');
const { expect } = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { productService } = require('../../../src/services');
const { getProductsFromServiceSucessful, productsFromModel, getProductFromServiceSucessful, productFromModel, getProductFromServiceNotSucessful, addProductFromServiceSucessful, editProductFromServiceSucessful, deleteProductFromServiceSucessful, findProductByNameFromServiceSucessful } = require('../mocks/product.mock');
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

    it('Editando um produto com sucesso - Status 200', async function () {
        sinon.stub(productService, 'editProduct').resolves(editProductFromServiceSucessful);

        const req = { params: { id: 1 }, body: { name: 'Martelo do Batman' } };
        const res = {
            status: sinon.stub().returnsThis(),
            json: sinon.stub(),
        };

        await productController.editProduct(req, res);
        
        expect(res.status).to.have.been.calledWith(200);
    });

    it('Deletando um produto com sucesso - Status 204', async function () {
        sinon.stub(productService, 'deleteProduct').resolves(deleteProductFromServiceSucessful);

        const req = { params: { id: 1 } };
        const res = {
            status: sinon.stub().returnsThis(),
            json: sinon.stub(),
        }; 

        await productController.deleteProduct(req, res);
        
        expect(res.status).to.have.been.calledWith(204);
    });

    it('Procurando um produto por nome - Status 200', async function () {
        sinon.stub(productService, 'findProductByName').resolves(findProductByNameFromServiceSucessful);

        const req = { query: { q: 'Martelo' } };
        const res = {
            status: sinon.stub().returnsThis(),
            json: sinon.stub(),
        }; 

        await productController.findProductByName(req, res);
        
        expect(res.status).to.have.been.calledWith(200);
    });

    it('Procurando um produto por nome com o nome vazio - Status 200', async function () {
        const req = { query: { q: '' } };
        const res = {
            status: sinon.stub().returnsThis(),
            json: sinon.stub(),
        }; 

        const products = await productController.findProductByName(req, res);

        console.log(products);
        
        expect(res.status).to.have.been.calledWith(200);
    });

    afterEach(function () {
        sinon.restore();
    });
});