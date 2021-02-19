const { Router } = require('express')

const err = require('../../utils/error')
const config = require('../../config')
const controller = require('./index')

const router = Router()

router.post('/login', login)
router.post('/register', register)

function login (req, res, next) {
  const { email, password, apikey } = req.body

  if (apikey !== config.auth.apiKey) return next(err('invalid aipkey', 400))

  const { user, token } = controller.login({ email, password })

  res.status(200).json({
    message: 'login successfully',
    data: {
      user,
      token
    }
  })
}

function register (req, res, next) {

}

module.exports = router
