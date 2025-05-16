import { ACTION_TYPE } from "../actions";

const InitialAppState = {
  wasLogOut: false,
};

export const appReducer = (state = InitialAppState, action) => {
  switch (action.type) {
    case ACTION_TYPE.LOG_OUT:
      return {
        ...state,
        wasLogOut: !state.wasLogOut,
      }
    default:
      return state;
  }
}