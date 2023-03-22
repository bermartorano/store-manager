const validateName = (req, res, next) => {
  const { body: { name } } = req;
  if (!name) throw new Error('"name" is required', { cause: { statusCode: 400 } });
  if (name.length < 5) {
    throw new
      Error('"name" length must be at least 5 characters long', { cause: { statusCode: 422 } });
  }
  next();
};

module.exports = {
  validateName,
};
