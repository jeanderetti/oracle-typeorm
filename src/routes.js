const router = require('express').Router()

const eventService = require('./service/EventService')

router.post('/Synchronize', (_, res) => {
  eventService.synchronize().then(data => res.send(data))
    .catch(() => res.sendStatus(500))
})

module.exports = router