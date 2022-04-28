/*eslint-disable */
import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { useState } from 'react';
import '../Style/Sidebar.css';

export default function Sidebar() {
  const [state, setState] = useState([
    'BEST',
    'NEW',
    '당일배송',
    '1+1/코디세트',
    '아우터',
    '상의',
    '셔츠',
    '니트/가디건',
    '팬츠',
    '트레이닝',
    '신발',
    '악세사리',
    '세일',
    'Q&A',
    'REVIEW',
  ]);

  return (
    <div class='sidenav'>
      {state.map((a, i) => {
        return <a href='#'>{a}</a>;
      })}

      <br />
      <br />
      <br />
      <div className='sidebar-context'>
        <h6 className='fs-6'>고객센터</h6>
        <h6 className='fs-6'>010-8761-8632</h6>
        <br />
        <h6 className='fs-6'>JUNS MALL</h6>
        <h6 className='fs-6'>365일 상시 대기중</h6>
      </div>
    </div>
  );
}
