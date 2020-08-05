import { JsonController, Post, Body } from 'routing-controllers'
import { LoginForm } from '../res/request/user/LoginForm'
import LoginResponse from '../res/response/user/LoginResponse'
import { ResponseSchema, OpenAPI } from 'routing-controllers-openapi'

@OpenAPI({})
@JsonController('/api/user')
export class UserController {

  @OpenAPI({
    summary: '测试登录接口',
    description: '这是一个示例接口，summery将会显示在行内，description将会显示在描述中'
  })
  @Post('/login')
  @ResponseSchema(LoginResponse)
  loginAction (@Body() requestForm: LoginForm): LoginResponse {
    console.log(requestForm)
    const res = new LoginResponse(true, null, null, 1, '测试用户')
    return res
  }

}
