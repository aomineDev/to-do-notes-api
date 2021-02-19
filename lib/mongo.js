const mongoose = require('mongoose')
const config = require('../config')

const { dbUser, dbPassword, dbHost, dbName } = config.mongo

function mongoConnection () {
  const user = encodeURIComponent(dbUser)
  const password = encodeURIComponent(dbPassword)
  const database = encodeURIComponent(dbName)

  const mongoUri = `mongodb+srv://${user}:${password}@${dbHost}/${database}`

  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  }

  return mongoose.connect(mongoUri, options)
}

module.exports = mongoConnection
