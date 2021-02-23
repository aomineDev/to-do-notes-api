const controller = require('./controller')
const store = require('../../store/mongo')

module.exports = controller(store)
