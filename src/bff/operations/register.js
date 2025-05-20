import { addUser, getUser } from '../api'
import { sessions } from '../sessions';

export const register = async (registrationLogin, registrationPassword) => {
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
};