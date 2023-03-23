const isThereProductId = (req, _res, next) => {
  const { body: productSaleArray } = req;
  productSaleArray.forEach((productSale) => {
    if (!productSale.productId) {
      throw new Error('"productId" is required', { cause: { statusCode: 400 } });
    }
  });
  return next();
};

module.exports = {
  isThereProductId,
};
