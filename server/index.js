import config from './config.js'
import server from './server.js'
import { logger } from './util.js'
// console.log(config)
server.listen(config.port).on('listening', () => logger.info(`server is running at port ${config.port}!!!`))
