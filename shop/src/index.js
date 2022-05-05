import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Test from './Test';
import Login from './Component/Login';
import SignUp from './Component/SignUp';
import Detail from './Component/Detail';
import Cart from './Component/Cart';
import MyPage from './Component/MyPage';
import New from './Component/New';
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

export const productRouteList = [
  { path: '/new', category: 1, name: 'NEW' },
  { path: '/today', category: 2, name: '당일배송' },
  { path: '/outer', category: 3, name: '아우터' },
  { path: '/up', category: 4, name: '상의' },
  { path: '/shirt', category: 5, name: '셔츠' },
  { path: '/neet', category: 6, name: '니트/가디건' },
  { path: '/pants', category: 7, name: '팬츠' },
  { path: '/training', category: 8, name: '트레이닝' },
  { path: '/shoes', category: 9, name: '신발' },
  { path: '/accessory', category: 10, name: '악세사리' },
  { path: '/sale', category: 11, name: '세일' },
];

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
            {productRouteList.map((a, i) => {
              return (
                <>
                  <Route
                    path={a.path}
                    element={<New category={a.category} />}
                  />
                  <Route path={`${a.path}/detail/:id`} element={<Detail />} />
                </>
              );
            })}
          </Routes>
        </QueryClientProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
// root.render(<Test></Test>);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
