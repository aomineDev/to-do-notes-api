const { Schema, model } = require('mongoose')

const schema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  done: {
    type: Boolean,
    default: false
  },
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'users'
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

module.exports = model('tasks', schema)
