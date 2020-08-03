import path from 'path'
import express from 'express'
import { useExpressServer, RoutingControllersOptions, getMetadataArgsStorage } from 'routing-controllers'
import { routingControllersToSpec } from 'routing-controllers-openapi'
import { validationMetadatasToSchemas } from 'class-validator-jsonschema'
import { UserController } from './controller/UserController'
import colors from 'colors'

export default async function start (): Promise<void> {

  const app = express()

  // 控制器的配置
  const option: RoutingControllersOptions = {
    controllers: [UserController]
  }

  // 绑定控制器
  useExpressServer(app, option)

  if (process.env.NODE_ENV === 'development') {

    /**
     * 生成openapi文档
     */
    const storage = getMetadataArgsStorage()
    const schemas = validationMetadatasToSchemas()
    const spec = routingControllersToSpec(storage, option, {
      components: { schemas },
      info: { title: 'Demo', version: '0.0.1' }
    })

    app.use('/openapi', (req, res) => {
      res.setHeader('Access-Control-Allow-Origin', '*')
      res.setHeader('Access-Control-Allow-Credentials', 'true')
      res.json(spec)
    })

    app.use('/swagger', express.static(path.join(__dirname, '../../swagger-dist')))

    console.log(colors.yellow('system running with developement mode, api path is http://127.0.0.1:3000/swagger/index.html'))
  }

  app.listen(3000, () => {
    console.log(colors.green(`server start at ${(new Date()).toString()} on http://127.0.0.1:3000`))
  })
}
