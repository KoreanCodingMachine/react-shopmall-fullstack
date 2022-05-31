import React from 'react';
import Header from './Component/Header';
import Sidebar from './Component/Sidebar';
import Cards from './Component/Card';
import Carousels from './Component/Carousel';
import Title from './Component/Title';
import Footer from './Component/Footer';
import { useQuery } from 'react-query';
import axios from 'axios';
import './App.css';

const App = () => {
  const getProduct = async () => {
    const response = await axios.get('/api/product');
    return response.data;
  };

  const { data, isLoading, isError } = useQuery('todos', getProduct);
  if (isLoading) {
    return <div>loading</div>;
  }
  // console.log(data);
  return (
    <div className='App-row'>
      <Header />
      <Sidebar />
      <Carousels />
      <Title className='text-center' />
      <div className='card-box row'>
        {data.map((a, i) => {
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
};

export default React.memo(App);
