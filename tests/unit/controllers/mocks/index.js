const allProductsMock = [
  { id: 1, name: 'Martelo de Thor' },
  { id: 2, name: 'Traje de encolhimento' },
  { id: 3, name: 'Escudo do Capitão América' }
];

const servicePostProduckReturnMock = {
  name: 'Capa do superman',
  id: 5,
}

const updateReqMock = {
  "name": "Martelo do Batman"
};

const serviceUpdateProductMock = {
  updateInfo: { id: '1', name: 'Martelo do Batman' },
  newRowInfo: 'Rows matched: 1  Changed: 1  Warnings: 0'
};

module.exports = {
  allProductsMock,
  servicePostProduckReturnMock,
  updateReqMock,
  serviceUpdateProductMock,
}