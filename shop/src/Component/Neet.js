import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Cards from './Card';
import Carousels from './Carousel';
import Title from './Title';
import Footer from './Footer';
import { useQuery } from 'react-query';
import axios from 'axios';
import '../App.css';

function Neet() {
  const getProduct = async () => {
    const response = await axios.get('/api/product');
    return response.data;
  };

  const { data, isLoading, isError } = useQuery('todos', getProduct);
  if (isLoading) {
    return <div>loading</div>;
  }

  const newData = data.filter((a, i) => {
    return a.sort === 6;
  });

  console.log(newData);

  return (
    <div className='App-row'>
      <Header />
      <Sidebar />
      <Carousels />
      <Title className='text-center' />
      <div className='card-box row'>
        {newData.map((a, i) => {
          return <Cards data={a} index={i} />;
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

export default Neet;
