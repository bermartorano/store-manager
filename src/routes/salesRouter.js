const { Router } = require('express');
const salesController = require('../controllers/sales.controller');
const { isThereProductId } = require('../middlewares/validateSale');

const salesRouter = Router();

salesRouter.post('/sales', isThereProductId, salesController.postSale);

module.exports = salesRouter;