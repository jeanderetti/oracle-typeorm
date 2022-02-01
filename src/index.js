require('dotenv').config()

const app = require('./server')

app.listen(process.env.APP_PORT, () => {
  console.log(`Application is running on port ${process.env.APP_PORT}`)
})