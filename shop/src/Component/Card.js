import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useState } from 'react';
import axios from 'axios';
import '../Style/Card.css';

// json data 받은걸로 map 함수 써서 해보자

export default function Cards({ card, cardList }) {
  // console.log(card);
  // console.log(cardList);

  const getProduct = async () => {
    const response = await axios.get('/api/product');
    return response.data;
  };

  const { data, isLoading, isError } = useQuery('todos', getProduct);
  if (isLoading) {
    return <div>loading</div>;
  }

  return (
    <div>
      {data.map((a, i) => {
        return (
          <Card className='real-card col-lg-3'>
            {JSON.stringify(data)}
            <Link
              to={`Detail/${card.id}`}
              state={{
                id: card.id,
                title: card.title,
                price: card.price,
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
            <Card.Body
              className='card-body'
              style={{ backgroundColor: 'white' }}
            >
              <Card.Title className='card-title'>{data[1].title}</Card.Title>
              <hr />
              <Card.Text className='card-text'>{data[1].price}</Card.Text>
              <Card.Text className='card-text'>{cardList[0].content}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}
