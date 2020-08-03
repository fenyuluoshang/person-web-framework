import { IsString, IsNumber, IsDate, IsBoolean } from 'class-validator'

export default class BaseResponse {

    @IsBoolean()
    success:boolean

    @IsDate()
    time:Date

    @IsNumber()
    code:number

    @IsString()
    msg:string

    constructor (success:boolean, code?:number, msg?:string) {
      this.success = success
      this.time = new Date()
      if (success) {
        this.code = 0
        this.msg = 'ok'
      } else {
        this.code = code
        this.msg = msg
      }
    }

}
