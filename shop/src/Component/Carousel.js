import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../Style/Carousel.css';
export default function Carousels() {
  return (
    <div className='row'>
      <div className='col-12'>
        <Carousel>
          <Carousel.Item className='carousel-item'>
            <img
              className='d-block w-100 carousel-img'
              src='https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png'
              alt='Image One'
            />
            <Carousel.Caption>
              <h3>Label for first slide</h3>
              <p>Sample Text for Image One</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src='https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png'
              alt='Image Two'
            />
            <Carousel.Caption>
              <h3>Label for second slide</h3>
              <p>Sample Text for Image Two</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
