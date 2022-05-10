import {
  LOGIN_USER,
  REGISTER_USER,
  AUTH_USER,
  SET_LOADING,
  SET_ERROR,
} from '../_actions/types';

export default function userReducer(
  state = { id: '', loading: false, error: null },
  action
) {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case SET_ERROR:
      return { ...state, error: action.payload };
    case LOGIN_USER:
      return { ...state, id: action.payload.userId };

    case REGISTER_USER:
      return { ...state, register: action.payload };

    case AUTH_USER:
      return { ...state, userData: action.payload };

    default:
      return state;
  }
}
