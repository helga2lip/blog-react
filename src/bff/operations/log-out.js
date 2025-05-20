import { sessions } from '../sessions';

export const logOut = async (userSession) => {
  sessions.remove(userSession)
};