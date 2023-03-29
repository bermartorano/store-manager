const modelGetAllProductsReturn = [
  { id: 1, name: 'Martelo de Thor' },
  { id: 2, name: 'Traje de encolhimento' },
  { id: 3, name: 'Escudo do Capitão América' }
];

const oneProductMock = { id: 1, name: 'Martelo de Thor' };

const updateProductMock = {
  updateInfo: { id: '1', name: 'Martelo do Batman' },
  newRowInfo: 'Rows matched: 1  Changed: 1  Warnings: 0'
};

module.exports = {
  modelGetAllProductsReturn,
  oneProductMock,
  updateProductMock,
};