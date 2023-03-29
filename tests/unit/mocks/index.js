const allProductsArrayMock = [[
  { id: 1, name: 'Martelo de Thor' },
  { id: 2, name: 'Traje de encolhimento' },
  { id: 3, name: 'Escudo do Capitão América' }
]];

const allProductsMock = [
  { id: 1, name: 'Martelo de Thor' },
  { id: 2, name: 'Traje de encolhimento' },
  { id: 3, name: 'Escudo do Capitão América' }
];

const oneProductMock = { id: 1, name: 'Martelo de Thor' };

const postReturnMock = [{
  fieldCount: 0,
  affectedRows: 1,
  insertId: 4,
  info: '',
  serverStatus: 2,
  warningStatus: 0
}];

module.exports = {
  allProductsArrayMock,
  allProductsMock,
  oneProductMock,
  postReturnMock
};