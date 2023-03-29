const { expect } = require('chai');
const sinon = require('sinon');

const productsService = require('../../../src/services/products.service');
const productsModel = require('../../../src/models/products.model');
const { modelGetAllProductsReturn, oneProductMock, updateProductMock } = require('./servicesMock');

describe('Testes unitários da camada service de products', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Testa se a função getAllProducts retorna o vetor com todos os produtos.', async function () {
    sinon.stub(productsModel, 'getAllProducts').resolves(modelGetAllProductsReturn);
    const result = await productsService.getAllProducts();
    expect(result).to.be.deep.equal(modelGetAllProductsReturn);
  });

  it('Testa se a função getProductByid retorna o produto esperado.', async function () {
    sinon.stub(productsModel, 'getProductById').resolves(modelGetAllProductsReturn[0]);
    const result = await productsService.getProductById(1);
    expect(result).to.be.deep.equal(modelGetAllProductsReturn[0]);
  });

  it('Teste se a função postProduct retorna o objeto esperado.', async function () {
    sinon.stub(productsModel, 'postProduct').resolves(oneProductMock);
    const result = await productsService.postProduct(oneProductMock.name);
    expect(result).to.be.deep.equal(oneProductMock);
  });

  it('Testa se a função updateProduct retorna o objeto esperado.', async function () {
    sinon.stub(productsModel, 'updateProduct').resolves(updateProductMock);
    const { updateInfo } = updateProductMock
    const result = await productsService.updateProduct(updateInfo.id, updateInfo.name);
    expect(result).to.be.deep.equal(updateProductMock);
  });
});
