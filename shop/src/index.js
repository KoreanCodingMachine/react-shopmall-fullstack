import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Test from './Test';
import Login from './Component/Login';
import SignUp from './Component/SignUp';
import Detail from './Component/Detail';
import Cart from './Component/Cart';
import MyPage from './Component/MyPage';
import New from './Component/New';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import { QueryClient, QueryClientProvider } from 'react-query';
import Reducer from './_reducers';

const createStoreWithMiddleware = applyMiddleware(
  promiseMiddleware,
  ReduxThunk
)(createStore);

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
      <Provider
        store={createStoreWithMiddleware(
          Reducer,
          window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
        )}
      >
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
