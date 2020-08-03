import BaseResponse from '../BaseResponse'
import { IsNumber, IsString, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { JSONSchema } from 'class-validator-jsonschema'

export class LoginData {

  @IsNumber()
  userId: number

  @IsString()
  nickName: string

}

export default class LoginResponse extends BaseResponse {

  @JSONSchema({
    description: '登录回调'
  })
  @ValidateNested()
  @Type(() => LoginData)
  data: LoginData

  constructor (success: boolean, code?: number, msg?: string, userId?: number, nickName?: string) {
    super(success, code, msg)
    if (success) {
      this.data = new LoginData()
      this.data.userId = userId
      this.data.nickName = nickName
    }
  }

}
