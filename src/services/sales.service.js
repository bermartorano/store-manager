const salesModel = require('../models/sales.model');
const productsModel = require('../models/products.model');

const postSale = async (sales) => {
  const hasInvalidId = sales.map(({ productId }) => {
    const idSearched = productsModel.getProductById(productId);
    return idSearched;
  });
  const idsArray = await Promise.all(hasInvalidId);
  if (idsArray.includes(undefined)) {
    throw new Error('Product not found', { cause: { statusCode: 404 } });
  }
  
  const salesPosted = await salesModel.postSale(sales);
  return salesPosted;
};

module.exports = {
  postSale,
};
