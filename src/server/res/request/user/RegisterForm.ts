import { JSONSchema } from 'class-validator-jsonschema'
import { IsString, MinLength } from 'class-validator'

export class RegisterForm {

  @JSONSchema({
    description: '用户名'
  })
  @IsString()
  @MinLength(4)
  userName: string

  @JSONSchema({
    description: '密码'
  })
  @MinLength(8)
  password: string

  @JSONSchema({
    description: '昵称'
  })
  @MinLength(3)
  nickName: string

}
