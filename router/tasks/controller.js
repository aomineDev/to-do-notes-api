const Model = require('./model')

function controller (injectedStore) {
  const store = injectedStore

  async function list ({ userId }) {
    const taskListed = await store.list(Model, { userId })

    return taskListed
  }

  async function create ({ task }) {
    const taskCreated = await store.create(Model, task)

    return taskCreated
  }

  async function patch ({ taskId }) {
    const task = await Model.findById(taskId)
    const { done } = task

    const taskUpdatedId = await store.update(Model, taskId, { done: !done })

    return taskUpdatedId
  }
  async function update ({ taskId, task }) {
    const taskCreatedId = await store.update(Model, taskId, task)

    return taskCreatedId
  }

  async function remove ({ taskId }) {
    const taskRemovedId = await store.remove(Model, taskId)

    return taskRemovedId
  }
  return {
    list,
    create,
    patch,
    update,
    remove
  }
}

module.exports = controller
