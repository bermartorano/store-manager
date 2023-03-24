const productsModel = require('../models/products.model');

const getAllProducts = async () => {
  const products = await productsModel.getAllProducts();
  return products;
};

const getProductById = async (id) => {
  const product = await productsModel.getProductById(id);
  if (!product) throw new Error('Product not found', { cause: { statusCode: 404 } });
  return product;
};

const postProduct = async (name) => {
  const product = await productsModel.postProduct(name);
  return product;
};

const updateProduct = async (id, name) => {
  const updateInfo = await productsModel.updateProduct(id, name);
  const idNotMatched = updateInfo.newRowInfo.includes('Rows matched: 0');
  if (idNotMatched) throw new Error('Product not found', { cause: { statusCode: 404 } });
  return updateInfo;
};

const deleteProduct = async (id) => {
  const deletedProduct = await productsModel.deleteProduct();
  
};

module.exports = {
  getAllProducts,
  getProductById,
  postProduct,
  updateProduct,
  deleteProduct,
};
