import Conf from 'conf'
import path from 'path'
import fs from 'fs'

const confPath = path.join(__dirname, '../../../conf')
const confName = 'default'

if (!fs.existsSync(confPath)) {
  fs.mkdirSync(confPath)
}

type DefaultConf = {
  system: {
    port?: number,
    baseUrl?: string,
    session?: {
      type: string
      redis?: string
    }
  },
  mysql?: {
    [name: string]: {
      user?: string,
      pass?: string,
      host?: string,
      port?: number,
      database?: string
    },
  }
  redis?: {
    [name: string]: {
      host?: string,
      db?: number,
      port?: number,
      identify?: string
    }
  }
}

const conf = new Conf<DefaultConf>({
  cwd: path.join(confPath),
  configName: confName
})

export default conf
