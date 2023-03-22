const productsModel = require('../models/products.model');

const getAllProducts = async () => {
  const products = await productsModel.getAllProducts();
  return products;
};

const getProductById = async (id) => {
  const product = await productsModel.getProductById(id);
  if (!product) throw new Error('Product not found', { cause: 404 });
  // if (!product) throw { message: 'Product not found', status: 404 };
  return product;
};

module.exports = {
  getAllProducts,
  getProductById,
};
