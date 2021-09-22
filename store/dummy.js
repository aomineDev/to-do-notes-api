const store = []

async function list (Model, tags) {
  return store
}

async function get (Model, id) {
  const data = store.find(({ _id: itemId }) => id === itemId)

  return data
}

async function findByUsername (username) {
  const data = store.find(({ username: name }) => name === username)

  return data
}

async function create (Model, payload) {
  payload = {
    ...payload,
    _id: `${Math.random() * 100}${Date.now()}`,
    createdAt: Date.now(),
    done: false
  }
  store.push(payload)

  return payload
}

async function update (Model, id, payload) {
  const index = store.findIndex(({ _id: itemId }) => id === itemId)
  const updatedData = store[index]
  store[index] = { ...updatedData, payload }

  return id
}

async function remove (Model, id) {
  const index = store.findIndex(({ _id: itemId }) => id === itemId)
  store.splice(index, 1)

  return id
}

module.exports = {
  list,
  findByUsername,
  get,
  create,
  update,
  remove
}
