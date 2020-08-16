import { IsString } from 'class-validator'
import { JSONSchema } from 'class-validator-jsonschema'

export class LoginForm {

    @JSONSchema({
      description: '用户名'
    })
    @IsString()
    userName: string

    @JSONSchema({
      description: '密码'
    })
    @IsString()
    password: string

}
