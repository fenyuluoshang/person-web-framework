import { JsonController, Post, Body } from 'routing-controllers'
import { LoginForm } from '../res/request/user/LoginForm'
import LoginResponse from '../res/response/user/LoginResponse'
import { ResponseSchema } from 'routing-controllers-openapi'
import { JSONSchema } from 'class-validator-jsonschema'

@JsonController('/api/user')
export class UserController {

  @Post('/login')
  @JSONSchema({
    description: '登录模拟接口'
  })
  @ResponseSchema(LoginResponse)
  loginAction (@Body() requestForm:LoginForm): LoginResponse {
    console.log(requestForm)
    const res = new LoginResponse(true, null, null, 1, '测试用户')
    return res
  }

}
