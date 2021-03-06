const Joi = require('joi')

const createScheme = Joi.object({
  title: Joi.string().required(),
  description: Joi.string()
})

const updateScheme = Joi.object({
  title: Joi.string(),
  description: Joi.string()
})

module.exports = {
  createScheme,
  updateScheme
}
