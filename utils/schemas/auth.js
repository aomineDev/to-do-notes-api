const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  email: String,
  username: String,
  password: String,
  createdAt: {
    type: Date,
    default: new Date()
  }
})

module.exports = schema
