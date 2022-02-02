const typeorm = require('typeorm')
const dbConfig = require('../configuration/db')

module.exports = (function () {

  function synchronize() {
    return new Promise((resolve, reject) => {
      (async () => {
        let conn = await typeorm.createConnection(dbConfig)

        if (conn.isConnected) {
          conn.close()

          return resolve('Synchronized database!')
        } else return reject('There was an error connecting to the database')
      })()
    })
  }

  return { synchronize }

})()