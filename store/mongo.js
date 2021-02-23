async function list (Model, tags) {
  const data = await Model.find(tags)

  return data
}

async function get (Model, id) {
  const data = await Model.findById(id)

  return data
}

async function create (Model, payload) {
  const createdData = new Model(payload)
  await createdData.save()

  return createdData
}

async function update (Model, id, payload) {
  const updatedData = await Model.findByIdAndUpdate(id, payload)
  const updatedDataId = updatedData._id

  return updatedDataId
}

async function remove (Model, id) {
  const removedData = await Model.findByIdAndRemove(id)
  const removedDataId = removedData._id

  return removedDataId
}

module.exports = {
  list,
  get,
  create,
  update,
  remove
}
