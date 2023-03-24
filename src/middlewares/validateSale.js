const isThereProductId = (req, _res, next) => {
  const { body: productSaleArray } = req;
  productSaleArray.forEach((productSale) => {
    if (!productSale.productId) {
      throw new Error('"productId" is required', { cause: { statusCode: 400 } });
    }
  });
  return next();
};

const isThereQuantity = (req, _res, next) => {
  const { body: productSaleArray } = req;
  productSaleArray.forEach((productSale) => {
    if (!productSale.quantity) {
      throw new Error('"quantity" is required', { cause: { statusCode: 400 } });
    }
  });
  return next();
};

const validQuantity = (req, _res, next) => {
  const { body: productSaleArray } = req;
  productSaleArray.forEach((productSale) => {
    if (productSale.quantity < 1) {
      const errorMessage = '"quantity" must be greater than or equal to 1';
      throw new Error(errorMessage, { cause: { statusCode: 422 } });
    }
  });
  return next();
};

module.exports = {
  isThereProductId,
  isThereQuantity,
  validQuantity,
};
