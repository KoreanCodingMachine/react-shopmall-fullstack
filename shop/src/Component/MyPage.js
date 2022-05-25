import React from 'react';
import { Table } from 'react-bootstrap';
import { connect, useDispatch } from 'react-redux';
import { useState } from 'react';
import '../Style/MyPage.css';

function MyPage() {
  const diapatch = useDispatch();

  const onSubmit = () => {};
  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <h3 className='mt-5 text-center'>My Page</h3>
        <Table className='mt-5 w-100' bordered hover>
          <thead className='text-center'>
            <tr>
              <th>번호</th>
              <th>상품명</th>
              <th>종류</th>
              <th>수량</th>
              <th>구매 날짜</th>
            </tr>
          </thead>
          <tbody className='text-center'></tbody>
        </Table>
      </div>
    </div>
  );
}

export default MyPage;
