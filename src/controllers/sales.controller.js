const salesService = require('../services/sales.service');

const postSale = async (req, res, next) => {
  const { body: sales } = req;
  try {
    const salesPosted = await salesService.postSale(sales);
    return res.status(201).json(salesPosted);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  postSale,
};
