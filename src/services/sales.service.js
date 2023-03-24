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

const getAllSales = async () => {
  const allSales = await salesModel.getAllSales();
  return allSales;
};

const getSaleById = async (id) => {
  const saleById = await salesModel.getSaleById(id);
  if (saleById.length === 0) throw new Error('Sale not found', { cause: { statusCode: 404 } });
  return saleById;
};

module.exports = {
  postSale,
  getAllSales,
  getSaleById,
};
