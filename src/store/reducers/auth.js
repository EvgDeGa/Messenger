import {AUTH, AUTH_FAILURE} from '../constants/constants';

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH:
      return {
        ...state,
        accessToken: action.accessToken,
        userId: action.userId,
        isAuth: true,
      };
    case AUTH_FAILURE:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
}

const initialState = {
  accessToken: null,
  userId: null,
  isAuth: false,
  error: false,
};
