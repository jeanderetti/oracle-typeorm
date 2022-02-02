const userEntity = require('../entity/User')

module.exports = {
  type: process.env.APP_DB,
  host: process.env.APP_DB_HOST,
  port: process.env.APP_DB_PORT,
  username: process.env.APP_DB_USER,
  password: process.env.APP_DB_PASSWORD,
  serviceName: process.env.APP_DB_SERVICE_NAME,
  synchronize: true, // Automatically update the database as entities 
  entities: [userEntity]
}