import Conf from 'conf'
import path from 'path'
import fs from 'fs'

const confPath = path.join(__dirname, '../../../conf')
const confName = 'defalut.json'

if (!fs.existsSync(confPath)) {
  fs.mkdirSync(confPath)
}

type DefaultConf = {
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
      port?: string,
      identify?: string
    }
  }
}

const conf = new Conf<DefaultConf>({
  cwd: path.join(confPath + confName)
})

export default conf
