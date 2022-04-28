import React from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { useState } from 'react';
import '../Style/MyPage.css';

function MyPage(props) {
  console.log(props);
  const { Json } = props;
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
          <tbody className='text-center'>
            {props.state.map((a, i) => {
              return (
                <tr key={i}>
                  <td>{a.id + 1}</td>
                  <td>{a.name}</td>
                  <td>{a.type}</td>
                  <td>{a.quan}</td>
                  <td>
                    {/* <button
                      onClick={() => {
                        props.dispatch({
                          type: 'add',
                          payload: {
                            id: i + 1,
                            name: '새로운 상품',
                            quan: 1,
                          },
                        });
                      }}
                    >
                      항목추가
                    </button> */}
                    {/* <button
                      onClick={() => {
                        props.dispatch({
                          type: 'subtract',
                          data: a.id,
                        });
                      }}
                    >
                      삭제
                    </button> */}
                    2022/04/27
                    {/* <button
                      onClick={() => {
                        props.dispatch({ type: 'plus', data: a.id });
                      }}
                    >
                      +
                    </button> */}
                    {/* <button
                      onClick={() => {
                        props.dispatch({ type: 'minus', data: a.id });
                      }}
                    >
                      -
                    </button> */}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

function StateToProps(state) {
  // console.log(state);
  // console.log(state.reducer);
  return {
    state: state.reducer,
    // state2: state.reducer2,
  };
}

export default connect(StateToProps)(MyPage);
