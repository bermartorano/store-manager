const { Router } = require('express');
const salesController = require('../controllers/sales.controller');
const {
  isThereProductId,
  isThereQuantity,
  validQuantity,
} = require('../middlewares/validateSale');

const salesRouter = Router();

salesRouter.post(
  '/sales',
  isThereProductId,
  validQuantity,
  isThereQuantity,
  salesController.postSale,
);

module.exports = salesRouter;