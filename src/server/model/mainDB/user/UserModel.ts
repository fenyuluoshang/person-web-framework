import { Model, Table, AutoIncrement, Column, PrimaryKey } from 'sequelize-typescript'

/**
 * 基础用户表
 */
@Table
export default class UserModel extends Model<UserModel> {

  @PrimaryKey
  @AutoIncrement
  @Column
  userId: number

  @Column
  userName: string

  @Column
  nickName: string

  @Column
  passWord: string

}
