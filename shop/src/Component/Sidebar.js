/*eslint-disable */
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Style/Sidebar.css';
import { productRouteList } from '..';
export default function Sidebar() {
  return (
    <div class='sidenav'>
      {productRouteList.map((a, i) => {
        return <Link to={a.path}>{a.name}</Link>;
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
