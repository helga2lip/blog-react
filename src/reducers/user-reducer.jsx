import { ACTION_TYPE } from '../actions';
import { ROLE } from '../constants'

const InitialUserState = {
  id: null,
  login: null,
  roleID: ROLE.GUEST,
  session: null,
};

export const userReducer = (state = InitialUserState, action) => {
  switch (action.type) {
    case ACTION_TYPE.SET_USER: {
      return {
        ...state,
        ...action.payload,
      }
    }
    default:
      return state;
  }
}