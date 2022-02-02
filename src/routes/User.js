const router = require('express').Router()
const eventService = require('../service/EventService')

router.post('/', (req, res) => {
  eventService.createAndUpdateUser(req).then(data => res.send(data))
    .catch(err => res.status(400).send(err))
})

router.get('/', (req, res) => {
  eventService.readUser(req).then(data => res.send(data))
    .catch(err => res.status(400).send(err))
})

router.delete('/', (req, res) => {
  eventService.deleteUser(req).then(data => res.send(data))
    .catch(err => res.status(400).send(err))
})

module.exports = router