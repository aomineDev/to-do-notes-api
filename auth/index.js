const jwt = require('jsonwebtoken')
const { auth } = require('../config')
const wrapError = require('../utils/wrapError')

function sign (payload) {
  return jwt.sign(payload, auth.jwtSecret, { expiresIn: '30d' })
}

function verify (token) {
  return jwt.verify(token, auth.jwtSecret)
}

function check (req) {
  decodeHeader(req)
}

function decodeHeader (req) {
  const authorization = req.headers.authorization || ''

  const token = getToken(authorization)

  try {
    const decoded = verify(token)

    req.user = decoded

    return decoded
  } catch (error) {
    throw wrapError(error, 401)
  }
}

function getToken (header) {
  if (!header) throw wrapError('token not found.', 400)

  if (header.indexOf('Bearer ') === -1) throw wrapError('invalid token.', 401)

  const token = header.replace('Bearer ', '')

  return token
}

module.exports = {
  sign,
  check
}
