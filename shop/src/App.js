import React from 'react';
import Header from './Component/Header';
import Sidebar from './Component/Sidebar';
import Cards from './Component/Card';
import Carousels from './Component/Carousel';
import Title from './Component/Title';
import Footer from './Component/Footer';
import { useState } from 'react';
import './App.css';

function App() {
  let [cardList, setCardList] = useState([
    {
      id: 0,
      title: 'White and Black',
      content: 'Born in France',
      price: 120000,
    },
    {
      id: 1,
      title: 'White and Black',
      content: 'Born in France',
      price: 120000,
    },
    {
      id: 2,
      title: 'White and Black',
      content: 'Born in France',
      price: 120000,
    },
    {
      id: 3,
      title: 'White and Black',
      content: 'Born in France',
      price: 120000,
    },
    {
      id: 4,
      title: 'White and Black',
      content: 'Born in France',
      price: 120000,
    },
    {
      id: 5,
      title: 'White and Black',
      content: 'Born in France',
      price: 120000,
    },
  ]);

  return (
    <div className='App-row'>
      <Header />
      <Sidebar />
      <Carousels />
      <Title className='text-center' />
      <div className='card-box row'>
        {cardList.map((card) => {
          return <Cards card={card} cardList={cardList} />;
        })}
      </div>
      <div className='row'>
        <div className='col-2'></div>
        <div className='col-10'>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
