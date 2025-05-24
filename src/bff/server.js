import { authorize, logOut, register, fetchUsers, fetchRoles, updateUserRole, removeUser } from './operations'

export const server = {
  authorize,
  logOut,
  register,
  fetchUsers,
  fetchRoles,
  updateUserRole,
  removeUser
}