const { expect } = require('chai');
const sinon = require('sinon');

const productsController = require('../../../src/controllers/products.controller');
const productsService = require('../../../src/services/products.service');
const mock = require('./mocks');

describe('Testes unitários da camada controller de products', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Testa se a função getAllProducts responde o objeto correto.', async function () {
    const req = {};
    const res = {};
    const next = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(productsService, 'getAllProducts').resolves(mock.allProductsMock);
    
    await productsController.getAllProducts(res, req, next); 

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(mock.allProductsMock);
  });
});
