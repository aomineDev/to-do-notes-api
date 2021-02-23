const Joi = require('joi')

const createScheme = Joi.object({
  title: Joi.string().required(),
  description: Joi.string()
})

module.exports = {
  createScheme
}
