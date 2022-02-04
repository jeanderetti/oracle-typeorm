const connection = require('../connection/db')

module.exports = (function () {

  function synchronize() {
    return new Promise((resolve, reject) => {
      const rejectMessage = 'There was an error connecting to the database'

      connection.conn().then((conn) => {
        if (conn.isConnected) return resolve('Synchronized database!')
        else return reject(rejectMessage)
      }).catch((err) => { return reject(rejectMessage, err) })
    })
  }

  return { synchronize }

})()