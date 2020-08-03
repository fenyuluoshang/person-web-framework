import { JsonController, Post, Body } from 'routing-controllers'
import { LoginForm } from '../res/request/user/LoginForm'
import LoginResponse from '../res/response/user/LoginResponse'

@JsonController('/api/user')
export class UserController {

  @Post('/login')
  loginAction (@Body() requestForm:LoginForm): LoginResponse {
    console.log(requestForm)
    const res = new LoginResponse(true, null, null, 1, '测试用户')
    return res
  }

}
