const controller = require('./controller')
const store = require('../../store/mongo')
// const dummy = require('../../store/dummy')

module.exports = controller(store)
