import UserModel from '../model/mainDB/user/UserModel'
import { RegisterForm } from '../res/request/user/RegisterForm'
import { LoginForm } from '../res/request/user/LoginForm'

/**
 * 注册用户
 */
export async function registerUser (formData: RegisterForm) :Promise<UserModel> {
  const hasUser = await UserModel.count({
    where: {
      userName: formData.userName
    }
  })
  if (hasUser) {
    throw new Error('user has been register')
  }
  const user = new UserModel()
  user.userName = formData.userName
  user.passWord = formData.password
  user.nickName = formData.nickName

  return await user.save()
}

export async function loginUser (formData: LoginForm) :Promise<UserModel> {
  return await UserModel.findOne({
    where: {
      userName: formData.userName,
      passWord: formData.password
    }
  })
}
