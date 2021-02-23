const wrapError = require('../wrapError')
const { auth } = require('../../config')
const { check } = require('../../auth')

function validate (data, schema) {
  const { error } = schema.validate(data)

  if (error) return error

  return false
}

function validateScheme (schema, check = 'body') {
  return function (req, res, next) {
    const error = validate(req[check], schema)

    error ? next(wrapError(error, 400)) : next()
  }
}

function validateApiKeyToken (req, res, next) {
  const { body: { apiKeyToken } } = req

  if (apiKeyToken !== auth.apiKeyToken) return next(wrapError('invalid apiKeyToken', 400))

  delete req.body.apiKeyToken

  next()
}

function validateJwt (req, res, next) {
  check(req)
  next()
}

module.exports = {
  validateScheme,
  validateApiKeyToken,
  validateJwt
}
