import {
  SET_BUY,
  SET_STORE,
  ADD_ITEM,
  DELETE_ITEM,
  INCREMENT,
  DECREMENT,
} from './types';

export const setBuy = (buy) => {
  return {
    type: SET_BUY,
    payload: buy,
  };
};

export const setStore = (store) => {
  return {
    type: SET_STORE,
    payload: store,
  };
};

export const addItem = (item) => {
  return {
    type: ADD_ITEM,
    payload: item,
  };
};

export const deleteItem = (item) => {
  return {
    type: DELETE_ITEM,
    payload: item,
  };
};

export const increment = (item) => {
  return {
    type: INCREMENT,
    payload: item,
  };
};

export const decrement = (item) => {
  return {
    type: DECREMENT,
    payload: item,
  };
};
