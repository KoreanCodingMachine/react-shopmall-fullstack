import {
  SET_BUY,
  SET_STORE,
  ADD_ITEM,
  DELETE_ITEM,
  INCREMENT,
  DECREMENT,
} from '../_actions/types';

// 카트 데이터 +를 눌렀을때 1을 증가시킨다.
// cart데이터를 increase라는 키 값으로 넣었다.
// action.payload의 데이터를 item 값으로 넣어준다.
export default function cartReducer(state = { item: [] }, action) {
  console.log('item state:', state);
  switch (action.type) {
    case SET_BUY:
      return { ...state, buy: action.payload };
    case SET_STORE:
      return { ...state, item: action.payload };
    case ADD_ITEM:
      // const nextItem = [...state.item, action.payload];
      return { ...state, item: [...state.item, action.payload] }; // {item:[],item:[],action.payload}
    // cart의 데이터를 delete 버튼을 눌렀을때 리덕스 스토어의
    // item_action에서 cart의 item에서 id가 actiion.payload인삭제시키고 싶다.
    case DELETE_ITEM:
      return {
        ...state, //
        item: state.item.filter((product) => {
          console.log(product.id);
          console.log(action.payload);
          return product.id !== action.payload;
        }),
      };
    case INCREMENT:
      return {
        ...state,
        item: state.item.map((product) => {
          if (product.id === action.payload) {
            return {
              ...product,
              count: product.count + 1,
            };
          }
          return product;
        }),
      };
    case DECREMENT:
      return {
        ...state,
        item: state.item.map((product) => {
          if (product.id === action.payload) {
            return {
              ...product,
              count: product.count - 1,
            };
          }
          return product;
        }),
      };
    default:
      return state;
  }
}
