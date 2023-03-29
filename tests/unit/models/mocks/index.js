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

const updatedProductMock = [
   {
    fieldCount: 0,
    affectedRows: 1,
    insertId: 0,
    info: 'Rows matched: 1  Changed: 1  Warnings: 0',
    serverStatus: 2,
    warningStatus: 0,
    changedRows: 1
  }
]

const oneProductMock = { id: 1, name: 'Martelo do Thor' };

const postReturnMock = [{
  fieldCount: 0,
  affectedRows: 1,
  insertId: 4,
  info: '',
  serverStatus: 2,
  warningStatus: 0
}];

const updateProductRightReturn = {
  updateInfo: { id: 1, name: 'Martelo do Thor' },
  newRowInfo: 'Rows matched: 1  Changed: 1  Warnings: 0'
};

module.exports = {
  allProductsArrayMock,
  allProductsMock,
  oneProductMock,
  postReturnMock,
  updatedProductMock,
  updateProductRightReturn,
};