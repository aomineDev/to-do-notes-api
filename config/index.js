require('dotenv').config()

const config = {
  serve: {
    port: process.env.PORT || '8000',
    dev: process.env.DEVELOPMENT !== 'production'
  },
  auth: {
    jwtSecret: process.env.AUTH_JWT_SECRET || 'notsecure',
    apiKeyToken: process.env.AUTH_API_KEY || ''
  },
  mongo: {
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbHost: process.env.DB_HOST,
    dbName: process.env.DB_NAME
  }
}

module.exports = config
