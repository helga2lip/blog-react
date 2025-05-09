import { getUser } from './get-user'
import { addUser } from './add-user'
import { createSession } from './create-session'

export const server = {
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
      response: createSession(user.role_id),
    }
  },

  async register(registrationLogin, registrationPassword) {
    const user = await getUser(registrationLogin);

    if (user) {
      return {
        error: "Такой логин уже занят",
        response: null,
      }
    }

    await addUser(registrationLogin, registrationPassword);

    return {
      error: null,
      response: createSession(user.role_id),
    }
  }
}