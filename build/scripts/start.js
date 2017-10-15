const logger = require('../lib/logger')
const openBrowser = require('react-dev-utils/openBrowser')

logger.info('Starting server...')
require('../../server/main').listen(3000, () => {
  logger.success('==> 🌎  Server is running at http://localhost:3000')
  openBrowser('http://localhost:3000')
})
