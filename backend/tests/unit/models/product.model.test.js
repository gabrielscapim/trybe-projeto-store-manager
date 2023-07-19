const { expect } = require('chai');
const sinon = require('sinon'); // duble de testes
const connection = require('../../../src/models/connection');
const { productsFromDB, productFromDB, productIdFromDB, updateProductFromDB, deleteProductFromDB, productsByNameFromDB } = require('../mocks/product.mock');
const { productModel } = require('../../../src/models');

describe('Realizando testes - PRODUCT MODEL:', function () {
    it('Recuperando todos os produtos', async function () {
        sinon.stub(connection, 'execute').resolves([productsFromDB]);

        const products = await productModel.findAllProducts();

        expect(products).to.be.deep.equal(productsFromDB);
    });

    it('Recuperando o produto por ID', async function () {
        sinon.stub(connection, 'execute').resolves([[productFromDB]]);

        const productId = 1;
        const product = await productModel.findProductById(productId);

        expect(product).to.be.deep.equal(productFromDB);
    });

    it('Adicionando um produto com sucesso', async function () {
        sinon.stub(connection, 'execute').resolves([productIdFromDB]);
        
        const inputData = { name: 'ProdutoX' };
        const insertId = await productModel.addProduct(inputData);

        expect(insertId).to.equal(4);
    });

    it('Editando um produto com sucesso', async function () {
        sinon.stub(connection, 'execute').resolves(updateProductFromDB);

        const newProductName = 'Martelo do Batman';
        const productId = 1;
        const result = await productModel.editProduct(newProductName, productId);

        expect(result[0].affectedRows).to.be.equal(1);
    });

    it('Deletando um produto com sucesso', async function () {
        sinon.stub(connection, 'execute').resolves(deleteProductFromDB);

        const productId = 1;
        const result = await productModel.deleteProduct(productId);

        expect(result[0].affectedRows).to.be.equal(1);
    });

    it('Procurando um produto por nome com sucesso', async function () {
        sinon.stub(connection, 'execute').resolves([productsByNameFromDB]);

        const productName = 'Martelo';
        const products = await productModel.findProductByName(productName);

        expect(products).to.be.deep.equal(productsByNameFromDB);
    });

    afterEach(function () {
        sinon.restore();
    });
});