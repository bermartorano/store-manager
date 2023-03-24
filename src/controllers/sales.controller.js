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

const getAllSales = async (_req, res, next) => {
  try {
    const allSales = await salesService.getAllSales();
    return res.status(200).json(allSales);
  } catch (error) {
    next(error);
  }
}; 

const getSaleById = async (req, res, next) => {
  try {
    const { params: { id } } = req;
    const saleById = await salesService.getSaleById(id);
    return res.status(200).json(saleById);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  postSale,
  getAllSales,
  getSaleById,
};
