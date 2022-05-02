import React from 'react';
import { Carousel } from 'react-bootstrap';
import { useQuery } from 'react-query';
import axios from 'axios';
import '../Style/Carousel.css';
export default function Carousels() {
  const getProduct = async () => {
    const response = await axios.get('/api/product');
    return response.data;
  };

  const { data, isLoading, isError } = useQuery('todos', getProduct);
  if (isLoading) {
    return <div>loading</div>;
  }

  const newData = data.filter((a, i) => {
    return a.sort === 11;
  });

  return (
    <div className='row'>
      <div className='col-12'>
        <Carousel>
          <Carousel.Item className='carousel-item'>
            <img
              className='d-flex w-100 carousel-img'
              src={newData[0].img}
              alt='Image One'
            />
            <Carousel.Caption>
              <h3>초 절정 할인 특가</h3>
              <p>이거 안사면 인생 절반이 손해1</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100 carousel-img'
              src={newData[1].img}
              alt='Image Two'
            />
            <Carousel.Caption>
              <h3>초 절정 할인 특가</h3>
              <p>이거 안사면 인생 절반이 손해2</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
