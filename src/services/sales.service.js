const salesModel = require('../models/sales.model');

const postSale = async (sales) => {
  const salesPosted = await salesModel.postSale(sales);
  return salesPosted;
};

module.exports = {
  postSale,
};
