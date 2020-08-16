import session, { MemoryStore } from 'express-session'
import conf from './conf'
import RedisStore from 'connect-redis'
import { sessionClient } from './redis'

let store = new MemoryStore()

if (conf.get('system.session.type') === 'redis') {
  store = new (RedisStore(session))({
    client: sessionClient,
    logErrors: true
  })
}

export default session({
  resave: false,
  saveUninitialized: true,
  secret: 'demo',
  store: store,
  cookie: {
    secure: true
  }
})
