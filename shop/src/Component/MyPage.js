import React from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem, increment, decrement } from '../_actions/item_action';
import '../Style/MyPage.css';

function MyPage() {
  const cart = useSelector((state) => state.item.add);
  const dispatch = useDispatch();
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
