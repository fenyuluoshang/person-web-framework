import { Sequelize } from 'sequelize/types'
import conf from './conf'

// 初始化数据库连接
const mainDBConf = conf.get('mysql').main
export const mainDB = new Sequelize({
  dialect: 'mysql',
  host: mainDBConf.host,
  port: mainDBConf.port,
  username: mainDBConf.user,
  password: mainDBConf.pass,
  database: mainDBConf.database,
  timezone: '+08:00'
})

export async function initAll (): Promise<void> {
  await mainDB.sync()
}
