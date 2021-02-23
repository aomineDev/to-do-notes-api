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

  const decoded = verify(token)

  req.user = decoded

  return decoded
}

function getToken (header) {
  if (!header) throw wrapError('token not found.', 401)

  if (header.indexOf('Bearer ') === -1) throw wrapError('invalid token.', 401)

  const token = header.replace('Bearer ', '')

  return token
}

module.exports = {
  sign,
  check
}
