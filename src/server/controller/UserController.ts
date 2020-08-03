import { JsonController, Post, Body } from 'routing-controllers'
import { LoginForm } from '../res/request/user/LoginForm'
import LoginResponse from '../res/response/user/LoginResponse'
import { ResponseSchema, OpenAPI } from 'routing-controllers-openapi'

@OpenAPI({
  description: '用户'
})
@JsonController('/api/user')
export class UserController {

  @OpenAPI({
    description: '测试登录接口'
  })
  @Post('/login')
  @ResponseSchema(LoginResponse)
  loginAction (@Body() requestForm: LoginForm): LoginResponse {
    console.log(requestForm)
    const res = new LoginResponse(true, null, null, 1, '测试用户')
    return res
  }

}
