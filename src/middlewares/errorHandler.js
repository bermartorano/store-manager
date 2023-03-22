const errorHandler = (error, _req, res, _next) => {
  if (error.cause) return res.status(error.cause).json({ message: error.message });
  return res.status(500).json({ message: error.message });
};

module.exports = errorHandler;