const { Router } = require('express')

const controller = require('./index')
const { validateScheme, validateApiKeyToken } = require('../../utils/middleware/validationHandler')
const { signInScheme, signUpScheme } = require('./schema')

const router = Router()

router.post('/sign-in', validateApiKeyToken, validateScheme(signInScheme), signIn)
router.post('/sign-up', validateApiKeyToken, validateScheme(signUpScheme), signUp)

async function signIn (req, res, next) {
  const { body: credentials } = req

  try {
    const { user, accessToken } = await controller.signIn({ credentials })

    res.status(200).json({
      message: 'login successfully',
      data: {
        user,
        accessToken
      }
    })
  } catch (error) {
    next(error)
  }
}

async function signUp (req, res, next) {
  const { body: user } = req

  try {
    const createdUser = await controller.signUp({ user })

    res.status(201).json({
      message: 'user created',
      data: createdUser
    })
  } catch (error) {
    next(error)
  }
}

module.exports = router
