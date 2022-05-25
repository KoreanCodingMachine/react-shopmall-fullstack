import {
  SET_BUY,
  SET_STORE,
  ADD_ITEM,
  DELETE_ITEM,
  INCREMENT,
  DECREMENT,
} from '../_actions/types';

const initialstate = {
  cart: [],
};

export default function itemReducer(state = {}, action) {
  switch (action.type) {
    case SET_BUY:
      return { ...state, buy: action.payload };
    case SET_STORE:
      return { ...state, store: action.payload };
    case ADD_ITEM:
      return { ...state };
    case DELETE_ITEM:
      return;
    case INCREMENT:
      return;
    case DECREMENT:
      return;
    default:
      return state;
  }
}
