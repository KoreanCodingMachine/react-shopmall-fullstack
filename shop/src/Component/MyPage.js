import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem, increment, decrement } from '../_actions/item_action';
import { auth } from '../_actions/user_action';
import { useNavigate } from 'react-router-dom';
import '../Style/MyPage.css';

function MyPage() {
  const cart = useSelector((state) => state.item.add);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(auth()).then((res) => {
      if (!res.payload.isAuth) {
        alert('로그인한 유저만 들어갈 수 있습니다.');
        navigate('/login');
      }
    });
  });
  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <h3 className='mt-5 text-center'>My Page</h3>
        <Table className='mt-5 w-100' bordered hover>
          <thead className='text-center'>
            <tr>
              <th>상품명</th>
              <th>이미지</th>
              <th>가격</th>
              <th>구매내역 삭제</th>
            </tr>
          </thead>
          <tbody className='text-center'>
            <tr>
              <th>{cart.title}</th>
              <th>
                <img className='cart-image' src={cart.img}></img>
              </th>
              <th>{cart.price}</th>

              <th>
                <button
                  onClick={() => {
                    dispatch(deleteItem);
                  }}
                >
                  delete
                </button>
              </th>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default MyPage;
