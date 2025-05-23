import { authorize, logOut, register, fetchUsers, fetchRoles, updateUserRole } from './operations'

export const server = {
  authorize,
  logOut,
  register,
  fetchUsers,
  fetchRoles,
  updateUserRole
}