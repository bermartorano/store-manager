const { Router } = require('express');
const productsController = require('../controllers/products.controller');

const productsRouter = Router();

productsRouter.get('/products', productsController.getAllProducts);
productsRouter.get('/products/:id', productsController.getProductById);
productsRouter.post('/products', productsController.postProduct);

module.exports = productsRouter;