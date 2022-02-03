const typeorm = require('typeorm')
const dbConfig = require('../configuration/db')

module.exports = (function () {

  var connection = null

  async function conn() {
    if (!connection) {
      connection = await typeorm.createConnection(dbConfig)

      if (connection.isConnected) return connection
      else console.log('Error when try to connect to the database')
    }

    return connection
  }

  return { conn: conn }

})()