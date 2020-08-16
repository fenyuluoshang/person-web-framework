import BaseResponse from '../BaseResponse'
import { IsNumber, IsString, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { JSONSchema } from 'class-validator-jsonschema'

export class RegisterData {

  @IsNumber()
  userId: number

  @IsString()
  nickName: string

}

export default class RegisterResponse extends BaseResponse {

  @JSONSchema({
    description: '注册回调'
  })
  @ValidateNested()
  @Type(() => RegisterData)
  data: RegisterData

  constructor (success: boolean, code?: number, msg?: string, userId?: number, nickName?: string) {
    super(success, code, msg)
    if (success) {
      this.data = new RegisterData()
      this.data.userId = userId
      this.data.nickName = nickName
    }
  }

}
