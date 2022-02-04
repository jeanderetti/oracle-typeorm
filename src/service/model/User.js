const connection = require('../../connection/db')

module.exports = (function () {

  function createAndUpdateUser(request) {
    return new Promise((resolve, reject) => {
      connection.conn().then(conn => {
        const userRepository = conn.getRepository('User')

        userRepository.findByIds([request.body.id])
          .then((users) => {
            let params = { NM_USER: request.body.name }

            if (users.length) params['CD_USER'] = request.body.id

            userRepository
              .save(params)
              .then(() => { return resolve((users.length) ? 'User updated' : 'User created') })
              .catch((err) => { return reject(err) })
          }).catch((err) => { return reject(err) })
      }).catch((err) => { return reject(err) })
    })
  }

  function readUser(request) {
    return new Promise((resolve, reject) => {
      connection.conn().then((conn) => {
        const userRepository = conn.getRepository('User')

        if (request.query.id) {
          userRepository
            .findByIds([request.query.id])
            .then((users) => { return resolve(users) })
            .catch((err) => { return reject(err) })
        } else {
          userRepository
            .find()
            .then((users) => { return resolve(users) })
            .catch((err) => { return reject(err) })
        }
      }).catch((err) => { return reject(err) })
    })
  }

  function deleteUser(request) {
    return new Promise((resolve, reject) => {
      connection.conn().then((conn) => {
        const userRepository = conn.getRepository('User')

        userRepository
          .delete({ CD_USER: request.body.id })
          .then((res) => { return resolve((res.affected) ? 'user deleted' : 'invalid id') })
          .catch((err) => { return reject(err) })
      }).catch((err) => { return reject(err) })
    })
  }

  return {
    createAndUpdateUser,
    readUser,
    deleteUser
  }

})()