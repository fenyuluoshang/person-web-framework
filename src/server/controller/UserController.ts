import { JsonController, Post, Body, Req } from 'routing-controllers'
import { LoginForm } from '../res/request/user/LoginForm'
import LoginResponse from '../res/response/user/LoginResponse'
import { ResponseSchema, OpenAPI } from 'routing-controllers-openapi'
import { Request } from 'express'
import { RegisterForm } from '../res/request/user/RegisterForm'
import RegisterResponse from '../res/response/user/RegisterResponse'
import { registerUser, loginUser } from '../service/UserService'

@OpenAPI({})
@JsonController('/api/user')
export class UserController {

  @OpenAPI({
    summary: '测试注册接口',
    description: '这是一个示例接口，summery将会显示在行内，description将会显示在描述中'
  })
  @Post('/register')
  @ResponseSchema(RegisterResponse)
  async registerAction (@Body() requestForm: RegisterForm, @Req() request: Request): Promise<RegisterResponse> {
    const user = await registerUser(requestForm)
    request.session.user = user
    return new RegisterResponse(true, null, null, user.userId, user.nickName)
  }

  @OpenAPI({
    summary: '测试登录接口',
    description: '这是一个示例接口，summery将会显示在行内，description将会显示在描述中'
  })
  @Post('/login')
  @ResponseSchema(LoginResponse)
  async loginAction (@Body() requestForm: LoginForm, @Req() request: Request): Promise<LoginResponse> {
    const user = await loginUser(requestForm)
    if (user == null) {
      return new LoginResponse(false, 1, 'not found user or wrong password', user.userId, user.nickName)
    }
    request.session.user = user
    return new LoginResponse(true, null, null, user.userId, user.nickName)
  }

}
