import React from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
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
              <th>수량</th>
              <th>추가</th>
              <th>감소</th>
              <th>삭제</th>
              <th>선택</th>
            </tr>
          </thead>
          <tbody className='text-center'></tbody>
        </Table>
      </div>
    </div>
  );
}

export default MyPage;
