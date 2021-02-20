const jwt = require('jsonwebtoken')
const config = require('../config')

function sign (payload) {
  return jwt.sign(payload, config.auth.jwtSecret, { expiresIn: '30d' })
}

module.exports = {
  sign
}
