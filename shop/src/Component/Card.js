import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Style/Card.css';

// json data 받은걸로 map 함수 써서 해보자

export default function Cards({ data }) {
  // console.log(card);
  // console.log(cardList);

  return (
    <Card className='real-card col-lg-3'>
      <Link
        to={`Detail/${data._id}`}
        state={{
          id: data._id,
          title: data.title,
          price: data.price,
          img: data.img,
          count: 1,
        }}
      >
        <Card.Img
          className='card-img'
          variant='top'
          src={data.img}
          style={{ backgroundColor: 'white', width: '100%' }}
        />
      </Link>
      {/* src = this.props.card.image */}
      <Card.Body className='card-body' style={{ backgroundColor: 'white' }}>
        <Card.Title className='card-title'>{data.title}</Card.Title>
        <hr />
        <Card.Text className='card-text'>{data.price}</Card.Text>
        <Card.Text className='card-text'>{data.content}</Card.Text>
      </Card.Body>
    </Card>
  );
}
