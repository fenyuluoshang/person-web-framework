/**
 * dev模式脚本
 */
import { CLIEngine } from "eslint"
import path from "path"
import start from "../server/start"

/**
 * 使用cli引擎
 */
const cli = new CLIEngine({})

/**
 * 引导cli扫描src下全部代码
 */
const report = cli.executeOnFiles([path.join(__dirname, "../")])

/**
 * 全部错误
 */
const errorReport = CLIEngine.getErrorResults(report.results)

/**
 * 输出错误
 */
errorReport.forEach(item => {
    item.messages.forEach(item2 => {
        console.log(`${item2.message} ${item2.nodeType} ${item.filePath}:${item2.line}:${item2.column}`)
    })
})

/**
 * 无错状态启动服务
 */
if (errorReport.length <= 0)
    start()
else
    throw new Error("please fix lint first")
