const jwt = require('jsonwebtoken')
const config = require('../config')

function sign (data) {
  return jwt.sign(data, config.auth.jwtSecret, { expiresIn: '30d' })
}

module.exports = {
  sign
}
