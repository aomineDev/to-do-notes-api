const auth = require('../../auth')

function authController () {
  function login ({ email, password }) {
    const accessToken = auth.sign({ email, password })

    return { user: { email }, accessToken }
  }

  return {
    login
  }
}

module.exports = authController
