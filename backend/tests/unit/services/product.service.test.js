const { expect } = require('chai');
const sinon = require('sinon');
const { productService } = require('../../../src/services');
const { productsFromModel, productFromModel } = require('../mocks/product.mock');
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

    afterEach(function () {
        sinon.restore();
    });
});