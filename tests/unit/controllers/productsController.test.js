const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const productsController = require('../../../src/controllers/products.controller');
const productsService = require('../../../src/services/products.service');
const mock = require('./mocks');

describe('Testes unitários da camada controller de products', function () {
  afterEach(function () {
    sinon.restore();
  });

  // it('Testa se a função getAllProducts responde o objeto correto.', async function () {
  //   const req = {};
  //   const res = {};
  //   const next = sinon.stub();
  //   res.status = sinon.stub().returns(res);
  //   res.json = sinon.stub().returns();
  //   sinon.stub(productsService, 'getAllProducts').resolves(mock.allProductsMock);
    
  //   await productsController.getAllProducts(res, req, next); 

  //   expect(res.status).to.have.been.calledWith(200);
  //   expect(res.json).to.have.been.calledWith(mock.allProductsMock);
  // });

  it('Testa se a função getProductById responde o status e o objeto correto.', async function () {
    const req = { params: { id: 1 } };
    const res = {};
    const next = sinon.stub();

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(productsService, 'getProductById').resolves(mock.allProductsMock[0]);

    await productsController.getProductById(req, res, next);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(mock.allProductsMock[0]);
  });

  it('Testa se a função postProduct responde o status e o objeto correto.', async function () {
    const req = { body: { name: 'Capa do Superman' } };
    const res = {};
    const next = sinon.stub();

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(productsService, 'postProduct').resolves(mock.servicePostProduckReturnMock);

    await productsController.postProduct(req, res, next);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(mock.servicePostProduckReturnMock);
  });

  it('Testa se a função Update Product retorna o objeto e o status correto.', async function () {
    const req = { body: mock.updateReqMock, params: { id: 1 } };
    const res = {};
    const next = sinon.stub();

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(productsService, 'updateProduct').resolves(mock.serviceUpdateProductMock);
    
    await productsController.updateProduct(req, res, next);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(mock.serviceUpdateProductMock.updateInfo);
  });
});
