import React from 'react';
import '../Style/Card.css';

export default function Title() {
  return (
    <div className='row'>
      <div className='empty col-2'></div>
      <div className='empty col-10'>
        <div className='d-flex justify-content-center pt-5'>
          <h4>BEST SELLER</h4>
        </div>
        <div className='d-flex justify-content-center'>
          <p>#베스트셀러</p>
        </div>
      </div>
    </div>
  );
}
