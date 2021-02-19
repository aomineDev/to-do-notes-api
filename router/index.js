const authRoutes = require('./auth/routes')

function router (app) {
  app.use('/api/auth', authRoutes)
}

module.exports = router
