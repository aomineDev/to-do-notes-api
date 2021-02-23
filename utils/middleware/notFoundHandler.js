function notFoundHandler (req, res) {
  res.status(404).json({ message: 'resource not found!' })
}

module.exports = { notFoundHandler }
