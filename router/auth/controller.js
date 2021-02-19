const auth = require('../../auth')

function authController () {
  function login ({ email, password }) {
    const token = auth.sign({ email, password })

    return { user: { email }, token }
  }

  return {
    login
  }
}

module.exports = authController
