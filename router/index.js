const authRoutes = require('./auth/routes')
const TaskRoutes = require('./tasks/routes')

function router (app) {
  app.use('/api/auth', authRoutes)
  app.use('/api/tasks', TaskRoutes)
}

module.exports = router
