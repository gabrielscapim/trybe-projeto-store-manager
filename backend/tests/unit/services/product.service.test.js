const { expect } = require('chai');
const sinon = require('sinon');
const { productService } = require('../../../src/services');
const { productsFromModel, productFromModel, productIdFromModel, updateProductFromDB, deleteProductFromDB } = require('../mocks/product.mock');
const { productModel } = require('../../../src/models');

describe('Realizando testes - PRODUCT SERVICE:', function () {
    it('Pegando todos os produtos com sucesso - Status 200', async function () {
        sinon.stub(productModel, 'findAllProducts')
            .resolves(productsFromModel);
        const responseData = [
            {
              id: 1,
              name: 'Martelo de Thor',
            },
            {
              id: 2,
              name: 'Traje de encolhimento',
            },
            {
              id: 3,
              name: 'Escudo do CapitÃ£o AmÃ©rica',
            },
        ];

        const responseService = await productService.getAllProducts();
        
        expect(responseService.status).to.equal('SUCESSFUL');
        expect(responseService.data).to.deep.equal(responseData);
    });
    
    it('Pegando um produto por ID com sucesso - Status 200', async function () {
        sinon.stub(productModel, 'findProductById')
            .resolves(productFromModel);
        const responseData = {
              id: 1,
              name: 'Martelo de Thor',
        };
        
        const productId = 1;
        const responseService = await productService.getProductById(productId);
        
        expect(responseService.status).to.equal('SUCESSFUL');
        expect(responseService.data).to.deep.equal(responseData);
    });

    it('Adicionando um produto com sucesso - Status 201', async function () {
        sinon.stub(productModel, 'addProduct')
            .resolves(productIdFromModel);
        const responseData = {
            name: 'ProdutoX',
            id: 4,
        };
        
        const responseService = await productService.addProduct('ProdutoX');
        
        expect(responseService.status).to.equal('SUCESSFUL');

        expect(responseService.data).to.deep.equal(responseData);
    });

    it('Editando um produto com sucesso - Status 200', async function () {
        sinon.stub(productModel, 'editProduct').resolves(updateProductFromDB);
        
        const responseData = {
            id: 1,
            name: 'Martelo do Batman',
        };

        const responseService = await productService.editProduct('Martelo do Batman', 1);

        expect(responseService.status).to.equal('SUCESSFUL');

        expect(responseService.data).to.deep.equal(responseData);
    });

    it('Deletando um produto com sucesso - Status 204', async function () {
        sinon.stub(productModel, 'deleteProduct').resolves(deleteProductFromDB);

        const responseData = { message: 'Product with id 1 deleted' };

        const responseService = await productService.deleteProduct(1);

        expect(responseService.status).to.equal('SUCESSFUL');

        expect(responseService.data).to.deep.equal(responseData);
    });

    afterEach(function () {
        sinon.restore();
    });
});