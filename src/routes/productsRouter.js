const { Router } = require('express');
const productsController = require('../controllers/products.controller');
// const connection = require('../connection');

const productsRouter = Router();

productsRouter.get('/products', productsController.getAllProducts);
productsRouter.get('/products/:id', productsController.getProductById);

module.exports = productsRouter;