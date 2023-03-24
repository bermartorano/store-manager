const { Router } = require('express');
const productsController = require('../controllers/products.controller');
const { validateName } = require('../middlewares/validateProduct');

const productsRouter = Router();

productsRouter.get('/products', productsController.getAllProducts);
productsRouter.get('/products/:id', productsController.getProductById);
productsRouter.post('/products', validateName, productsController.postProduct);
productsRouter.put('/products/:id', validateName, productsController.updateProduct);
productsRouter.delete('/products/:id', productsController.deletedProduct);

module.exports = productsRouter;