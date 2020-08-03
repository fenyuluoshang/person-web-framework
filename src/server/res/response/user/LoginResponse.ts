import BaseResponse from '../BaseResponse'
import { IsObject, IsNumber, IsString } from 'class-validator'

class LoginData {

    @IsNumber()
    userId:number

    @IsString()
    nickName:string
}

export default class LoginResponse extends BaseResponse {

    @IsObject()
    data?:LoginData

    constructor (success:boolean, code?:number, msg?:string, userId?:number, nickName?:string) {
      super(success, code, msg)
      if (success) {
        this.data = new LoginData()
        this.data.userId = userId
        this.data.nickName = nickName
      }
    }

}
