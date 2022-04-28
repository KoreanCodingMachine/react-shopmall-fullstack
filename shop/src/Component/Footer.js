import React from 'react';
import '../Style/Footer.css';

export default function Footer() {
  return (
    <div className='container'>
      <div className='col-2'></div>
      <div className='col-10'>
        <div className='text-center mt-5 footer'>
          <div>상호 : JUN'S MALL | 대표 : 김주형 | 전화 : 010-8761-8632</div>
          <div>
            주소 : 서울시 구로구 | 호스팅제공자 : 김주형 | 이메일 :
            pon03078@naver.com
          </div>
          <div>
            이용약관 개인정보처리방침 사업자정보 확인 © 2022 Copyright: All
            Right Reserved
          </div>
        </div>
      </div>
    </div>
  );
}
