import { getUser } from './get-user'
import { addUser } from './add-user'
import { sessions } from './sessions';

export const server = {
  async logOut(session) {
    sessions.remove(session)
  },
  async authorize(authLogin, authPassword) {
    const user = await getUser(authLogin);

    if (!user) {
      return {
        error: "Такой пользователь не найден",
        response: null,
      }
    }

    if (authPassword !== user.password) {
      return {
        error: "Неверный пароль",
        response: null,
      }
    }

    return {
      error: null,
      response: {
        id: user.id,
        login: user.login,
        roleID: user.role_id,
        session: sessions.create(user),
      },
    }
  },

  async register(registrationLogin, registrationPassword) {
    const existingUser = await getUser(registrationLogin);

    if (existingUser) {
      return {
        error: "Такой логин уже занят",
        response: null,
      }
    }

    const user = await addUser(registrationLogin, registrationPassword);

    return {
      error: null,
      response: {
        id: user.id,
        login: user.login,
        roleID: user.role_id,
        session: sessions.create(user),
      },
    }
  }
}