const logger = require('../lib/logger')
const opn = require('opn')

logger.info('Starting server...')
require('../../server/main').listen(3000, () => {
  logger.success('==> 🌎  Server is running at http://localhost:3000')
})

opn('http://localhost:3000')
