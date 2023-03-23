const { Router } = require('express');
const salesController = require('../controllers/sales.controller');

const salesRouter = Router();

salesRouter.post('/sales', salesController.postSale);

module.exports = salesRouter;