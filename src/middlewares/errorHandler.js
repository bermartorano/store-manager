const errorHandler = (error, _req, res, _next) => {
  const { message, cause } = error;
  if (cause) return res.status(cause.statusCode).json({ message });
  return res.status(500).json({ message });
};

module.exports = errorHandler;