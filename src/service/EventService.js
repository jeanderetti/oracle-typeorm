const mainService = require('./MainService')
const userModel = require('./model/User')

module.exports = (function () {

  function synchronize() {
    return mainService.synchronize()
  }

  // User model

  function createAndUpdateUser(request) {
    return userModel.createAndUpdateUser(request)
  }

  function readUser(request) {
    return userModel.readUser(request)
  }

  function deleteUser(request) {
    return userModel.deleteUser(request)
  }

  return {
    synchronize,

    // User CRUD
    createAndUpdateUser,
    readUser,
    deleteUser
  }

})()