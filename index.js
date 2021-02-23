const express = require('express')
const cors = require('cors')

const { logErrors, errorHandler } = require('./utils/middleware/errorHandler')
const { notFoundHandler } = require('./utils/middleware/notFoundHandler')
const mongoConnection = require('./lib/mongo')
const { serve } = require('./config')
const router = require('./router')

const app = express()

app.use(cors())
app.use(express.json())

router(app)

app.use(notFoundHandler)

app.use(logErrors)
app.use(errorHandler)

mongoConnection()
  .then(() => {
    console.log('[mongo] Connected successfully')
  })
  .catch(err => console.error('[mongo] ' + err.message))

app.listen(serve.port, (err) => {
  if (err) console.error(err)

  console.log(`[serve] app listening in http://localhost:${serve.port}`)
})
