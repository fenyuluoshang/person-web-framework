/**
 * dev模式脚本
 */
import { CLIEngine } from 'eslint'
import path from 'path'
import start from '../server/start'

/**
 * 使用cli引擎
 */
const cli = new CLIEngine({})

/**
 * 引导cli扫描src下全部代码
 */
const report = cli.executeOnFiles([path.join(__dirname, '../')])

/**
 * 全部错误
 */
const errorReport = CLIEngine.getErrorResults(report.results)

/**
 * 输出错误
 */
const formatter = CLIEngine.getFormatter()
console.log(formatter(errorReport))

/**
 * 启动服务
 */
start()
