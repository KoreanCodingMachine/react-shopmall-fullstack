import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './Component/Login';
import SignUp from './Component/SignUp';
import Detail from './Component/Detail';
import Cart from './Component/Cart';
import MyPage from './Component/MyPage';
import New from './Component/New';
import Today from './Component/Today';
import Outer from './Component/Outer';
import UP from './Component/UP';
import Shirt from './Component/Shirt';
import Neet from './Component/Neet';
import Pants from './Component/Pants';
import Training from './Component/Training';
import Shoes from './Component/Shoes';
import Accessory from './Component/Accessory';
import Sale from './Component/Sale';

import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { QueryClient, QueryClientProvider } from 'react-query';

let basic_state = [
  { id: 0, name: '나이키 신발', type: '신발', quan: 2 },
  { id: 1, name: '높은신발', type: '신발', quan: 1 },
];

function reducer(state = basic_state, action) {
  if (action.type === 'add') {
    let copy = [...state];
    copy.push(action.payload);
    return copy;
  } else if (action.type === 'subtract') {
    const count = state.findIndex((a, i) => {
      // console.log(a.id);
      return a.id === action.data;
    });
    console.log(count);
    let copy = [...state];
    copy.splice(count, 1);
    return copy;
  } else if (action.type === 'plus') {
    console.log(action.data);
    let copy = [...state];
    copy[action.data].quan++;
    return copy;
  } else if (action.type === 'minus') {
    let copy = [...state];
    copy[action.data].quan--;
    return copy;
  } else {
    return state;
  }
}

let basic_state2 = [{ id: 1, name: '옷', quan: 1 }];

function reducer2(state = basic_state2, action) {
  return state;
}

let store = createStore(combineReducers({ reducer, reducer2 }));

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path='/' element={<App />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signUp' element={<SignUp />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='/mypage' element={<MyPage />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/new' element={<New />} />
            <Route path='/today' element={<Today />} />
            <Route path='/outer' element={<Outer />} />
            <Route path='/up' element={<UP />} />
            <Route path='/shirt' element={<Shirt />} />
            <Route path='/neet' element={<Neet />} />
            <Route path='/pants' element={<Pants />} />
            <Route path='/training' element={<Training />} />
            <Route path='/shoes' element={<Shoes />} />
            <Route path='/accessory' element={<Accessory />} />
            <Route path='/sale' element={<Sale />} />
          </Routes>
        </QueryClientProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
