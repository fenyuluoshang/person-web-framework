import { Model, Table, AutoIncrement, Column, PrimaryKey } from 'sequelize-typescript'

@Table
export default class UserModel extends Model<UserModel> {

  @PrimaryKey
  @AutoIncrement
  @Column
  userId: number

  @Column
  userName: string

}
