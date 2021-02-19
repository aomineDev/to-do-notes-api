function logErrors (err, req, res, next) {
  console.error(err)

  next(err)
}

function errorHandler (err, req, res, next) {
  const statusCode = err.statusCode || 500
  const errMessage = err.message || 'server error.'

  res.status(statusCode).json({ message: errMessage })
}

module.exports = {
  logErrors,
  errorHandler
}
