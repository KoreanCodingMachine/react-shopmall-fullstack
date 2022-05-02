import React from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';
import '../Style/Detail.css';

export default function Detail() {
  const { id } = useParams();
  // const history = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    console.log(state);
  }, []);
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6'>
          <img src={state.img} width='60%' />
        </div>
        <div className='col-md-6 mt-4'>
          <h4 className='pt-5'>{state.title}</h4>
          <p className='pt-3'>
            매년 꾸준한 사랑을 받고 있는 링클프리 아이스 쿨링 반팔티가 재입고
            되었습니다 : ) 3장 묶음 패키지로 진행하는 구성으로 무엇보다 착한
            가격의 제품으로 진행하는 데일리 반팔티 제품입니다! 생활 구김이 적은
            wrinkle-free 기능성과 4way stretch으로 편하게 입을 수 있는 리버풀
            원단으로 제작된 반팔티로 봄과 여름 내내 즐겨 입을 수 있는
            상품입니다.
          </p>
          <p className='pt-3'>
            MODEL - Model : 181cm, 67kg - 화이트,베이지,블랙,실버그레이(3 Size)
            착용
          </p>
          <p className='pt-3'>{state.price}원 (800원 세트할인)</p>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-3'></div>
        <div className='col-md-3'></div>
        <div className='col-md-6'>
          <div className='purchase-box row'>
            <div className='col-5'>
              <img src={state.img} width='100%' />
            </div>
            <div className='col-7'>
              <p className='pt-3'>아이스 쿨링 반팔티 (1개씩 구매되는 상품)</p>
              <p>{}</p>
              <p className='mt-3'>색상</p>
              <Dropdowns />
              <p className='mt-3'>사이즈</p>
              <Dropdowns />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Dropdowns() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant='success' id='dropdown-basic'>
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
        <Dropdown.Item href='#/action-2'>Another action</Dropdown.Item>
        <Dropdown.Item href='#/action-3'>Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
