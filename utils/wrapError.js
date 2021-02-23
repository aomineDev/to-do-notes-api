function wrapErrors (err, code) {
  let error = err

  if (typeof error === 'string') {
    error = new Error(error)
  }

  if (code) {
    error.statusCode = code
  }

  return error
}

module.exports = wrapErrors
