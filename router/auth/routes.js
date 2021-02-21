const { Router } = require('express')

const err = require('../../utils/error')
const config = require('../../config')
const controller = require('./index')

const router = Router()

router.post('/login', login)
router.post('/register', register)

function login (req, res, next) {
  const { email, password, apiKeyToken } = req.body

  if (apiKeyToken !== config.auth.apiKeyToken) return next(err('invalid apiKeyToken', 400))

  const { user, accessToken } = controller.login({ email, password })

  res.status(200).json({
    message: 'login successfully',
    data: {
      user,
      accessToken
    }
  })
}

function register (req, res, next) {

}

module.exports = router
