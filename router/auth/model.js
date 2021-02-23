const { Schema, model } = require('mongoose')

const schema = new Schema({
  name: {
    type: String,
    require: true
  },
  lastname: {
    type: String,
    required: true
  },
  avatarUrl: {
    type: String,
    default: 'https://i.imgur.com/wqJt1Lh.png'
  },
  email: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

module.exports = model('users', schema)
