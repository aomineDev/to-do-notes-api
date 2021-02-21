const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: String,
  surname: String,
  createdAt: {
    type: Date,
    default: new Date()
  }
})

module.exports = schema
