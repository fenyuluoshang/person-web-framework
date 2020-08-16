import redis from 'redis'
import conf from './conf'

const sessionClientConf = conf.get('redis')[conf.get('system.session.redis', '') as string]

export const sessionClient = sessionClientConf ? redis.createClient({
  host: sessionClientConf.host,
  port: sessionClientConf.port,
  db: sessionClientConf.db,
  password: sessionClientConf.identify
}) : null
