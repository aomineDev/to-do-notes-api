function notFoundHandler (req, res) {
  res.status(404).json({ message: 'not found!' })
}

module.exports = { notFoundHandler }
