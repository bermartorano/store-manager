const productsService = require('../services/products.service');

const getAllProducts = async (_req, res, next) => {
  try {
    const products = await productsService.getAllProducts();
    return res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllProducts,
};
