const Joi = require('joi')

const signUpScheme = Joi.object({
  name: Joi.string().required(),
  lastname: Joi.string().required(),
  avatarUrl: Joi.string(),
  email: Joi.string().email().required(),
  username: Joi.string().alphanum().required(),
  password: Joi.string().min(6).required()
})

const signInScheme = Joi.object({
  username: Joi.string().alphanum().required(),
  password: Joi.string().required()
})

module.exports = {
  signUpScheme,
  signInScheme
}
