import {
  SET_BUY,
  SET_STORE,
  ADD_ITEM,
  DELETE_ITEM,
  INCREMENT,
  DECREMENT,
} from '../_actions/types';

export default function itemReducer(state = {}, action) {
  switch (action.type) {
    case SET_BUY:
      return { ...state, buy: action.payload };
    case SET_STORE:
      return { ...state, item: action.payload };
    case ADD_ITEM:
      return { ...state, add: action.payload };
    case DELETE_ITEM:
      return { ...state, delete: action.payload };
    case INCREMENT:
      return { ...state, increase: action.payload };
    case DECREMENT:
      return { ...state, decrease: action.payload };
    default:
      return state;
  }
}
