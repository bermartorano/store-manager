const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/connection');
const productsModel = require('../../../src/models/products.model');
const { allProductsArrayMock, allProductsMock, oneProductMock, postReturnMock } = require('../mocks');

describe('Testes unitários do model de products', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('A função geAllProducts está retornando todos os produtos em um Array.', async function () {
    sinon.stub(connection, 'execute').resolves(allProductsArrayMock);
    const result = await productsModel.getAllProducts();
    expect(result).to.be.deep.equal(allProductsMock);
  });

  it('A função getAllProductsById retorna o produto com o id especificado.', async function () {
    sinon.stub(connection, 'execute').resolves(allProductsArrayMock);
    const result = await productsModel.getProductById();
    expect(result).to.be.deep.equal(allProductsMock[0]);
  });

  it('A função postProduct retorna o nome e o id do produto lançado.', async function () {
    sinon.stub(connection, 'execute').resolves(postReturnMock);
    const result = await productsModel.postProduct(oneProductMock.name);
    expect(result).to.be.deep.equal({ name: oneProductMock.name, id: postReturnMock[0].insertId });
  });

})