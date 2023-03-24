const productsService = require('../services/products.service');

const getAllProducts = async (_req, res, next) => {
  try {
    const products = await productsService.getAllProducts();
    return res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

const getProductById = async (req, res, next) => {
  const { params: { id } } = req;
  try {
    const product = await productsService.getProductById(id);
    return res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

const postProduct = async (req, res, next) => {
  const { body: { name } } = req;
  try {
    const product = await productsService.postProduct(name);
    return res.status(201).json(product);
  } catch (error) {
    next(error);
  }
};

const updateProduct = async (req, res, next) => {
  const { body: { name }, params: { id } } = req;
  try {
    const updateInfo = await productsService.updateProduct(id, name);
    return res.status(200).json(updateInfo.updateInfo);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  postProduct,
  updateProduct,
};
