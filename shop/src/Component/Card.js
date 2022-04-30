import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useState } from 'react';
import axios from 'axios';
import '../Style/Card.css';

// json data 받은걸로 map 함수 써서 해보자

export default function Cards({ data }) {
  // console.log(card);
  // console.log(cardList);

  return (
    <Card className='real-card col-lg-3'>
      <Link
        to={`Detail/${data.id}`}
        state={{
          id: data.id,
          title: data.title,
          price: data.price,
        }}
      >
        <Card.Img
          onClick={() => {}}
          className='card-img'
          variant='top'
          src='./logo192.png'
          style={{ backgroundColor: 'white' }}
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
