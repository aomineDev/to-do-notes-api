const Model = require('./model')

function controller (injectedStore) {
  const store = injectedStore

  async function list ({ userId }) {
    const taskListed = await store.list(Model, { userId })
    console.log(taskListed, userId)
    return taskListed
  }

  async function create ({ task }) {
    const taskCreated = await store.create(Model, task)

    return taskCreated
  }

  return {
    list,
    create
  }
}

module.exports = controller
